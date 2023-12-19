# Prototype

객체를 생성하면 [[prototype]]: Object 라는 게 있음

## Prototype이란?
자바스크립트 객체가 다른 객체로부터 메서드와 속성을 상속받는 메커니즘.
이를 프로토타입 체인이라고도 한다.

공통되는 메서드를 상속해서 적은 메모리를 사용하고, 코드를 재사용할 수 있음

## 공통 메서드 프로토타입으로 옮기기

```javascript
// 생성자 함수는 첫 글자 대문자로 하자
function Person(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const john = new Person('john', 'john@abc.com', '7-10-91');
const han = new Person('han', 'han@abc.com', '2-8-91');

// john, han 인스턴스가 calculateAge 함수를 각각 가질 필요가 없음
// 프로토타입으로 메서드를 옮기자
function Person(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
}

Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Object.create() 사용한 방식
function Person(name, email, birthday) {
    let person = Object.create(personsPrototype);
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;
}

const personsPrototype = {
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
```
