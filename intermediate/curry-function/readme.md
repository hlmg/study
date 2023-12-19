# Curring

함수와 함께 사용하는 고급 기술, 자바스크립트 외에 다른 언어에도 존재

f(a, b, c)처럼 단일 호출로 처리하는 함수를 f(a)(b)(c) 와 같이 각각의 인수가 호출 가능한 프로세스로 호출된 후 변합될 수 있게 변환하는 것

커링은 함수를 호출하는 게 아닌 변환하는 것

```javascript
const sum = (x, y) => x + y;
const curriedSum = x => y => x + y;

console.log(sum(10, 20)); // 30
console.log(curriedSum(10)); // y => x + y
console.log(curriedSum(10)(20)); // 30

const tenPlus = curriedSum(10);
console.log(tenPlus((100)));
```


currying function

```javascript
function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

log(new Date(), "DEBUG", "some debug");

function curry(f) { // 커링 변환을 하는 curry(f) 함수
    return function (a) {
        return function (b) {
            return function (c) {
                return f(a, b, c);
            }
        };
    };
}

const curriedLog = curry(log);
curriedLog(new Date())("DEBUG")("some debug");


// 인자 개수 상관 없는 커링
const sum = (x, y, z) => x + y + z;

function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}

const curried = curry(sum);
console.log(curried(1)(2)(3));
```
