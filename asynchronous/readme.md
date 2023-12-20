# Callbacks, Promise, Async/Await

자바스크립트는 싱글 스레드로 동작하는데, 하나의 작업이 오래 걸리면 다른 작업은 대기를 한다.
이 문제를 해결하기 위해 비동기로 작업을 하게 됨

다음처럼 여러 비동기 요청 중 하나의 요청이 다른 요청에 의존한다면 어떻게 처리해야 할까?

```javascript
const res1 = request('http://aa.com');
const res2 = request('http://bb.com', res1);
```

Callback, Promise(es6), Async Await(es7)을 이용한 3가지 해결 방법이 있음

## Callback

콜백함수는 특정 함수에 매개변수로 전달된 함수를 말한다.

```javascript
function first(params, callback) {
    const response1 = request(`http://aa.com?id=${params.id}`);
    callback(response1);
}

function second(response1, callback) {
    const response2 = request('http://bb.com', response1);
    callback();
}

const para = {id: 123}
first(para, function (response1) {
    second(response1, function () {
        third(para, function () {
            // ...
        })
    })
})
```

콜백의 단점

1. 소스 코드의 가독성이 떨어짐
2. 에러 처리를 한다면 모든 콜백에서 각각 에러 핸들링을 해야 함

## Promise

Pomise는 new 키워드와 생성자를 사용해 만든다. 생성자는 매개변수로 실행 함수를 받는다.
실행 함수는 매개 변수로 두 가지 함수를 받는데, 첫 번째 함수(resolve)는 비동기 작업이 성공일 때 호출하고, 두 번째 함수(reject)는 작업이 실패할 때 호출한다.

```javascript
const foo = new Promise((resolve, reject) => {
    // 비동기 작업 수행

    // resolve(someValue)      // fulfilled
    // or
    // reject("failure reason") // rejected
})
```

비동기 호출 이후 실행할 함수는 then으로 지정하면 됨

```javascript
const foo = new Promise((resolve, reject) => {
    setTimeout(function () { // 비동기 흉내
        resolve('Success');
    }, 250)
})

foo
    .then((result) => {
        console.log(`message: ${result}`);
    })
    .catch((error) => {
        console.log(err);
    })
    .finally(() => {
        console.log('end');
    });
```

Promise의 상태

1. 대기(pending): 비동기 처리 로직이 아직 완료되지 않은 상태
2. 이행(fulfilled): 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
3. 거부(rejected): 비동기 처리가 실패하거나 오류가 발생한 상태

Promise() 생성자
프로미스를 지원하지 않는 함수를 감쌀 때 사용
fetch()는 프로미스 지원함, 요청 날리면 비동기로 보냄

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response1 => response1.json())
    .then(json => console.log(json))
    .then(() => fetch('https://jsonplaceholder.typicode.com/todos/2'))
    .then(response2 => response2.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
    .finally(() => console.log('----모든 작업 끝----'))
```

Promise.all()
순회 가능한 객체에 주어진 모든 프로미스가 성공해야 함.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

Promise.race()
프로미스 중 가장 먼저 완료된 것을 가져옴

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

## Async Await

```javascript
async function makeRequest() {
    try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const jsonResponse1 = await response1.json();
        console.log('jsonResponse1', jsonResponse1);

        const response2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
        const jsonResponse2 = await response2.json();
        console.log('jsonResponse2', jsonResponse2);
    } catch (error) {
        console.log('error', error);
    } finally {
        console.log('---모든 작업 끝---');
    }
}

makeRequest();
```

- Promise에 then 메서드를 체인 호출하는 것보다 가독성이 좋음
- await은 async 내부 함수에서만 사용 가능
- 동기식 코드에서 쓰는 try... catch 구문을 사용할 수 있음

