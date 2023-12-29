package sample.practicaltesting.spring.api.service.product;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.tuple;
import static sample.practicaltesting.spring.domain.product.ProductSellingStatus.SELLING;
import static sample.practicaltesting.spring.domain.product.ProductType.HANDMADE;

import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import sample.practicaltesting.spring.IntegrationTestSupport;
import sample.practicaltesting.spring.api.service.product.request.ProductCreateServiceRequest;
import sample.practicaltesting.spring.api.service.product.response.ProductResponse;
import sample.practicaltesting.spring.domain.product.Product;
import sample.practicaltesting.spring.domain.product.ProductRepository;
import sample.practicaltesting.spring.domain.product.ProductSellingStatus;
import sample.practicaltesting.spring.domain.product.ProductType;

class ProductServiceTest extends IntegrationTestSupport {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @AfterEach
    void tearDown() {
        productRepository.deleteAllInBatch();
    }

    @DisplayName("신규 상품을 등록할 때 상품 번호는 가장 최근의 상품 번호에서 1 증가한 값을 가진다.")
    @Test
    void createProduct() {
        // given
        Product product = createProduct("001", HANDMADE, SELLING, "아메리카노", 4000);

        productRepository.save(product);

        // when
        ProductCreateServiceRequest request = ProductCreateServiceRequest.builder()
                .name("카푸치노")
                .type(HANDMADE)
                .sellingStatus(SELLING)
                .price(5000)
                .build();

        ProductResponse response = productService.createProduct(request);

        // then
        assertThat(response).extracting("productNumber", "name", "type", "sellingStatus", "price")
                .containsExactlyInAnyOrder("002", "카푸치노", HANDMADE, SELLING, 5000);

        List<Product> products = productRepository.findAll();
        assertThat(products).hasSize(2)
                .extracting("productNumber", "name", "type", "sellingStatus", "price")
                .containsExactlyInAnyOrder(
                        tuple("001", "아메리카노", HANDMADE, SELLING, 4000),
                        tuple("002", "카푸치노", HANDMADE, SELLING, 5000)
                );
    }

    @DisplayName("신규 상품을 등록할 때 상품이 없으면 상품 번호는 001이다.")
    @Test
    void createProductWhenEmptyProduct() {
        // when
        ProductCreateServiceRequest request = ProductCreateServiceRequest.builder()
                .name("카푸치노")
                .type(HANDMADE)
                .sellingStatus(SELLING)
                .price(5000)
                .build();

        ProductResponse response = productService.createProduct(request);

        // then
        assertThat(response).extracting("productNumber", "name", "type", "sellingStatus", "price")
                .contains("001", "카푸치노", HANDMADE, SELLING, 5000);

        List<Product> products = productRepository.findAll();
        assertThat(products).hasSize(1)
                .extracting("productNumber", "name", "type", "sellingStatus", "price")
                .contains(
                        tuple("001", "카푸치노", HANDMADE, SELLING, 5000)
                );
    }

    private Product createProduct(String productNumber, ProductType type, ProductSellingStatus sellingStatus,
                                  String name, int price) {
        return Product.builder()
                .productNumber(productNumber)
                .type(type)
                .sellingStatus(sellingStatus)
                .name(name)
                .price(price)
                .build();
    }
}
