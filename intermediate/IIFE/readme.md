# IIFE

## IIFE란?

즉시 호출 함수 표현(IIFE, Immediately Invoked Function Expression)은 정의되지마자 즉시 실행되는 자바스크립트 함수를 말한다.

기본 형태

```javascript
(
    function () {

    }
)()
```

첫 번째 소괄호

- 전역 선언 막고, IIFE 내부로 다른 변수 접근 막기
  두 번째 소괄호
- 즉시 실행 함수를 생성하는 괄호
- 이를 통해 자바스크립트 엔진은 함수를 즉시 해석 및 실행

## IIFE의 주 사용 목적

변수를 전역으로 선언하는 것을 피하기 위해
IIFE 내부로 다른 변수가 접근하는 것을 막기 위해

## 익명 함수를 위해서도 사용 가능

함수 리터럴 구조
function minus(a, b) {
reutrn a - b;
}
여기서 예약어, 매개변수 집합, 함수 본문은 필수
함수 이름은 선택

function (a,b) {
return a - b;
}
함수 이름은 선택인데, 이름이 없으면 에러가 발생함

이름이 없으려면 두 조건 중 하나를 충족해야 함

1. 함수를 할당받을 변수를 지정
2. 함수를 즉시 호출

## 함수 앞에 연산자를 붙여서 IIFE를 선언할 수도 있음

// 화살표 함수에서는 무조건 "("로 시작해야 함

```javascript
!function () {
    return console.log("hi")
}()
void function () {
    return console.log("hi")
}()
+ function () {
    return console.log("hi")
}()
- function () {
    return console.log("hi")
}()
~function () {
    return console.log("hi")
}()
* function () {
    return console.log("hi")
}()
^ function () {
    return console.log("hi")
}()
& function () {
    return console.log("hi")
}();
```

## 심화

```javascript
const score = () => {
    let count = 0;
    return {
        current: () => {
            return count
        },
        increment: () => {
            count++
        },
        reset: () => {
            count = 0
        }
    }
};

console.log(typeof Score);
console.log(Score);
```

score().increment(); 하고 값을 확인하면 증가하지 않음
score()를 호출하는 순간 let count = 0; 로 초기화되기 때문

IIFE 사용

```javascript
const score = (() => {
    let count = 0;
    return {
        current: () => {
            return count
        },
        increment: () => {
            count++
        },
        reset: () => {
            count = 0
        }
    }
})();

console.log(typeof Score);
console.log(Score);
```

score().increment(); 하면 값이 증가함

```javascript
const increment = (() => {
    let counter = 0;
    console.log(counter);
    const number = (num) => console.log(`it is ${num} number`);
    return () => {
        counter++;
        number(counter);
    }
})()

console.log(increment);
increment();
increment();
```

increment에 `() => {counter++; number(counter)};` 가 저장됨
따라서 호출할 때마다 counter가 초기화되지 않음
