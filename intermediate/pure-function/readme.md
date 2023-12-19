# Pure Function

## Pure Function이란?
함수형 프로그래밍 패러다임의 한 부분으로, 두 가지 규칙을 가지고 있다.

1. 같은 입력값이 주어지면 언제나 같은 결과값을 리턴한다.
2. 사이드 이펙트가 없다.

## Pure Function 사용 이유
1. 클린 코드를 위해
2. 테스트를 쉽게하기 위해
3. 디버그를 쉽게하기 위해
4. 독립적인 코드를 위해


```javascript
// Pure Function은 외부에 선언된 상태를 수정하면 안된다.

// Impure
let x = 0;
const numberUp = () => x += 1;
console.log(numberUp());
console.log(x);

// Pure
let x = 0;
const pureNumberUp = (num) => num += 1;
console.log(pureNumberUp());
console.log(x);


// Impure
const alphas = ['A', 'B'];
const addItemToArray = (origin, item) => {
    origin.push(item);
    return origin;
}

// Pure
const alphas = ['A', 'B'];
const addItemToArray = (origin, item) => {
    return [...origin, item]
}
```

## 결론
Pure Function으로 처리할 수 있는 부분은 최대한 Pure하게 만들자
1. 특정 함수가 다른 함수에 미치는 예기치 못한 영향을 최소화
2. 함수를 실행할 때 어떤 결과값을 리턴할지 예측할 수 있음
