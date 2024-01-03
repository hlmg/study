# Shallow VS Deep Comparison

얕은 비교란?
- 숫자, 문자열 등 원시 자료형은 값을 비교
- 배열, 객체 등 참조 자료형은 주소를 비교
- ```javascript
  const obj1 = { a: 1, b: 2};
  const obj2 = { a: 1, b: 2};
  console.log(obj1 === obj2); // false
  ```

깊은 비교란?
- 객체도 값으로 비교함

깊은 비교 방법
1. Object depth가 깊지 않은 경우: JSON.stringify()
2. Object depth가 깊은 경우: lodash 라이브러리의 isEqual() 사용

```javascript
const obj1 = { a: 1, b: 2};
const obj2 = { a: 1, b: 2};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
```
