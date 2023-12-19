# Closure

다른 함수 내부에 정의된 함수가 있을때, 외부 함수가 실행을 완료해서 외부 함수의 변수를 함수 외부에서 접근할 수 없는 경우에도 내부 함수는 해당 변수에 접근할 수 있다.

```javascript
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');
```

1. outerFunction('outside')는 변수에 할당되는 즉시 호출됨
2. newFunction에는 outerFunction이 반환한 innerFunction이 할당됨
3. newFunction('inside')로 호출해도, outerVariable로 전달 됐었던 'outside'를 기억하고 사용할 수 있음

이때 해당 변수의 Scope는 Closure로 표시된다.
- browser에서 breakpoint 걸어서 확인 가능

