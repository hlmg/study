# Expressions VS Declarations

함수 선언문

- 함수를 만들고 이름을 지정하는 것
- ```javascript
  function funDeclaration() {
    return 'A function declaration'
  }
  ```

함수 표현식

- 함수를 만들고 변수에 할당하는 것
- 함수는 익명이다.
- ```javascript
  let funcExpression = function () {
    return 'A function expression'
  }
  ```

## 차이점

함수 선언식은 호이스팅에 영향을 받음, 코드 실행 전에 로드됨

```javascript
bar(); // 1
function bar() {
    return 1;
}
```

함수 표현식은 호이스팅에 영향을 받지 않음, 인터프리터가 해당 줄에 도달할 때 로드됨

```javascript
foo(); // ERROR: foo wasn't loaded yet
var foo = function () {
    return 1;
}
```
