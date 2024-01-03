// Polymorphism -- 클래스는 메서드는 같지만 구현이 다릅니다.
class PaymentGateway {
    constructor() {
        this.connect();
    }

    connect() {
        // 결제 제공업체에 연결
        // ..
    }

    pay(amount) {
        // ..
    }

    refund(amount) {
        // ..
    }
}

class Paypal extends PaymentGateway {
    pay(amount) {
        // 페이팔 전용 로직을 구현해야 합니다.
    }

    refund(amount) {
        // 페이팔 전용 로직을 구현해야 합니다.
    }

    connect() {
        // 페이팔 전용 로직을 구현해야 합니다.
    }
}

class Visa extends PaymentGateway {
    pay(amount) {
        // Visa 전용 로직을 구현해야 합니다.
    }

    refund(amount) {
        // Visa 전용 로직을 구현해야 합니다.
    }

    connect() {
        // Visa 전용 로직을 구현해야 합니다.
    }
}

class Customer {
    makePayment(gateway, amount) {
        return gateway.pay(amount)
    }

    // 만약 다형성이 없다면 이런식으로 메소드들을 생성해야합니다.
    // payByPaypal(amount) {}
    // payByVisa(amount) {}

    getRefund(gateway, amount) {
        return gateway.refund(amount)
    }
}

// 더 일반적인 코드를 재사용하고 작성할 수 있습니다.
// 보다 유연함: 새로운 결제 게이트웨이 제공업체가 있는 경우
// 고객 클래스의 결제 로직을 조정하지 않고 새 클래스를 생성하기만 하면 됩니다.
const john = new Customer();
const paypal = new Paypal();
const visaCard = new Visa();

john.makePayment(paypal, 100);
john.makePayment(visaCard, 100);
