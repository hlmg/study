# Event Loop

## setTimeout

- 두 번쨰 매개변수의 시간이 경과하면 첫 번째 매개변수인 콜백 함수를 호출함
- 비동기로 동작
- `setTimeout(() => { console.log('2');}, 3000);`

## 동기, 비동기

동기 Synchronous

- e.g. 대학생이 되는 법 (1학년 -> 2학년 -> 3학년 -> 대학교 가기)

비동기 Asynchronous

- e.g. 취직하는 법 (토익 공부, 자격증 공부, 영어 공부, 취업)

비동기는 다른 작업과 관계 없이 별도로 실행됨

Javascript는 비동기 언어다. 그런데 setTimeout()은 어떻게 비동기로 동작할까?

- setTimeout은 자바스크립트의 부분이 아님
    - 브라우저에서 사용하면 브라우저 api를 사용하는 것(window object)
    - Node에서 사용하면 Node api를 사용하는 것(global object)

## 브라우저의 구성

- 자바스크립트 엔진
- WEB APIs(DOM, AJAX, Timeout, ...)
- Callback Queue
- Event Loop

### 자바스크립트 엔진

자바스크립트 코드를 실행하는 엔진, 두 가지 주요 구성 요소를 가진다.

1. 메모리 힙: 메모리 할당이 발생하는 곳 (변수를 정의하면 여기 저장 됨)
2. 호출 스택: 코드가 실행될 때 스택이 쌓이는 곳

Call Stack 작동 예시

```javascript
function B() {
    setTimeout(function () {
        console.log('B-1...');
    }, 1500);
}

function A() {
    console.log('A-1...');
    B();
    console.log('A-2...');
}

A();

/*
call stack 흐름
A()
A(), console.log('A-1...')
A()
A(), B()
A(), B(), setTimeout(...) // setTimeout을 Web API로 전달함, 전달된 setTimeout의 시간이 지나면 콜백 큐에서 대기
A(), B()
A()
A(), console.log('A-2...')
A()

console.log('B-1...') // 이벤트 루프가 콜백 큐에 있는 콜백 함수를 call stack에 넣어줌

 */
```

Callback Queue

- Web API의 콜백 함수가 대기하는 큐

Event Loop

- call stack과 callback queue를 주시
- call stack이 비면, callback queue에 있는 콜백 함수를 call stack에 넣어줌

진행 모습 참고 사이트

- http://latentflip.com/loupe
- https://kamronbekshodmonov.github.io/JELoop-Visualizer/

setTimeout의 지연시간이 0인 경우

- 0초 후 실행되는 것을 보장하지 않음
- 지연시간이 0이면 콜백 함수가 콜백 큐에 바로 들어가긴 하지만, 콜 스택이 비어있지 않으면 호출하지 않음

callstack size exceeded

- 무한 호출되면 발생
- ```javascript
    function foo() {
        foo();
    }
    foo();
    ```
