package sample.practicaltesting.spring.api.service.product;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sample.practicaltesting.spring.api.controller.product.dto.request.ProductCreateRequest;
import sample.practicaltesting.spring.api.service.product.response.ProductResponse;
import sample.practicaltesting.spring.domain.product.Product;
import sample.practicaltesting.spring.domain.product.ProductRepository;
import sample.practicaltesting.spring.domain.product.ProductSellingStatus;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class ProductService {
    private final ProductRepository productRepository;

    /**
     * 동시성 이슈
     * productNumber에 유니크 조건 걸고, 저장할 때 exception 발생하면 재시도하는 방식(빈도수가 낮은 경우)
     * 빈도수가 높으면, 증가하는 값이 아닌 UUID를 가져가는 방법도 고려
     */
    @Transactional
    public ProductResponse createProduct(ProductCreateRequest request) {
        String nextProductNumber = createNextProductNumber();
        Product entity = request.toEntity(nextProductNumber);
        Product savedProduct = productRepository.save(entity);
        return ProductResponse.of(savedProduct);
    }

    private String createNextProductNumber() {
        String latestProductNumber = productRepository.findLatestProductNumber();
        if (latestProductNumber == null) {
            return "001";
        }
        int latestProductNumberInt = Integer.parseInt(latestProductNumber);
        return String.format("%03d", latestProductNumberInt + 1);
    }

    public List<ProductResponse> getSellingProducts() {
        List<Product> products = productRepository.findAllBySellingStatusIn(ProductSellingStatus.forDisplay());

        return products.stream()
                .map(ProductResponse::of)
                .toList();
    }
}
