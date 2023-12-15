package sample.practicaltesting.spring.api.service.product;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sample.practicaltesting.spring.api.service.product.response.ProductResponse;
import sample.practicaltesting.spring.domain.product.Product;
import sample.practicaltesting.spring.domain.product.ProductRepository;
import sample.practicaltesting.spring.domain.product.ProductSellingStatus;

@RequiredArgsConstructor
@Service
public class ProductService {
    private final ProductRepository productRepository;

    public List<ProductResponse> getSellingProducts() {
        List<Product> products = productRepository.findAllBySellingStatusIn(ProductSellingStatus.forDisplay());

        return products.stream()
                .map(ProductResponse::of)
                .toList();
    }
}
