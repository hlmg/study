# Iterator, Generator

Iterable

- 반복이 가는한 것
- for...of를 이용할 수 있거나, `[Symbol.iterator]()` 값을 가지면 Iterable

Iterator

- next()를 호출해서 {value: , done:} 두개의 속성을 가지는 객체를 반환하는 객체

```javascript
const numbers = [1, 2, 3];

// [Symbol.iterator]()를 이용하면 Iterable을 Iterator로 만들 수 있음
const numbersIterator = numbers[Symbol.iterator]();
```

## Generator

사용자의 요구에 따라 다른 시간 간격으로 여러 값을 반환할 수 있음

일반 함수 -> 한번의 실행으로 함수 끝까지 실행됨
제너레이터 함수 -> 사용자의 요구에 따라 일시정지될 수도 있고, 다시 시작될 수도 있음

Generator 생성

```javascript
// Generator 함수 생성
function* sayNumbers() {
    yield 1; // 제너레이터 함수를 일시 정지시킴, 일반 함수의 return과 유사
    yield 2;
    yield 3;
    
    // yield* [1,2,3]; 위와 같은 코드
}

// Generator 함수를 호출하면 Generator가 반환됨
const number = sayNumbers();

console.log(number.next());
```

Generator 사용

```javascript
function* createIds() {
    let index = 1;

    //Lazy Evaluation: 계산의 결과 값이 필요할 때까지 계산을 늦춤
    while (true) {
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.return(10)); // {value: 10, done: false} 강제로 value에 값을 넣어줌
```
