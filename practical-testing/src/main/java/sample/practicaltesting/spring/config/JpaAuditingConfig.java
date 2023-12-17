package sample.practicaltesting.spring.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * Application에 명시하면, Controller Layer Test 시 BeanCreation 오류 발생
 */
@EnableJpaAuditing
@Configuration
public class JpaAuditingConfig {
}
