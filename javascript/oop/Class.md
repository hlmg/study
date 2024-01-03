# Class(ES6)

OOP를 class를 사용해서 구현할 수 있음.
문법은 OOP 방식처럼 보이지만 내부는 prototype을 사용해서 작동함

```javascript
// 생성자 함수 ES6 이전
function Person(name, age) {
    this.name = name;
    this.age = age;

    // prototype의 함수가 아님
    // 객체 자체에 들어가있음, 따라서 prototype아래처럼 변경해야 함
    this.foo = function () {
        return "hi";
    }
}

// 생성자 함수 개선
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.foo = function () {
    return "hi";
}

// class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // class의 함수는 자동으로 prototype에 들어감
    foo() {
        return "hi";
    }
}
```

## Static

prototype이 아닌 클래스 함수 자체에 메서드를 설정하려면 static을 사용하자.(정적 메서드)

- Prototype 내부의 constructor에 있는 class에 정의됨
- console에 확인되는 prototype 내부의 prototype은 모든 객체가 가지는 global Object임

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    foo() {
        return `Name: ${this.name}`
    }

    static bar(x, y) {
        return x * y;
    }
}
```

메서드 사용은 인스턴스가 아닌 클래스 이름으로 사용

`Person.bar(1, 2)`
