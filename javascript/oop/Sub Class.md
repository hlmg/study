# Sub Class(Inheritance)

부모 클래스를 확장하려면 extends 키워드를 사용하자.

```javascript
class Foo {
    constructor(name) {
        this.name = name;
    }
    
    f() {
        return this.name;
    }
}

class Bar extends Foo {
    constructor(name, age) {
        super.constructor(name);
        this.age = age;
    }
}

const bar = new Bar("name", 13)
console.log(bar.f()) // name
```

Bar.prototype 안에 Foo.prototype이 있음
Foo.prototype 안에는 Object prototype이 있음

bar.f가 실행되는 순서
1. bar 객체에 bar.f가 있는지 확인
2. 없기 때문에 Bar.prototype에 있는지 확인
3. 없기 때문에, Bar.prototype의 프로토타입인 Foo.prototype에 있는지 확인
4. Foo.prototype에 있기 때문에 이걸 사용함
