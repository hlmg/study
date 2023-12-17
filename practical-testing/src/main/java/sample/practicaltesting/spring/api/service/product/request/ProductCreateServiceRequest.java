package sample.practicaltesting.spring.api.service.product.request;

import lombok.Builder;
import lombok.Getter;
import sample.practicaltesting.spring.domain.product.Product;
import sample.practicaltesting.spring.domain.product.ProductSellingStatus;
import sample.practicaltesting.spring.domain.product.ProductType;

@Getter
public class ProductCreateServiceRequest {
    private final ProductType type;
    private final ProductSellingStatus sellingStatus;
    private final String name;
    private final int price;

    @Builder
    private ProductCreateServiceRequest(ProductType type, ProductSellingStatus sellingStatus, String name, int price) {
        this.type = type;
        this.sellingStatus = sellingStatus;
        this.name = name;
        this.price = price;
    }

    public Product toEntity(String nextProductNumber) {
        return Product.builder()
                .productNumber(nextProductNumber)
                .type(type)
                .sellingStatus(sellingStatus)
                .name(name)
                .price(price)
                .build();
    }
}
