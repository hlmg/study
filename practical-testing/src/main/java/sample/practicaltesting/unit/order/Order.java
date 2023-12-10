package sample.practicaltesting.unit.order;

import java.time.LocalDateTime;
import java.util.List;
import sample.practicaltesting.unit.beverage.Beverage;

public record Order(LocalDateTime orderDateTime, List<Beverage> beverages) {
}
