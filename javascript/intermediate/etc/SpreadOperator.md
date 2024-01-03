# SpreadOperator

전개 연산자 (ES6)

- `...`
- 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용.

배열 조합
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const arrWrap = arr1.concat(arr2, arr3);
console.log(arrWrap); // [1, 2, 3, 4, 5, 6]

const arrWrap = [...arr1, ...arr2, ...arr3]
console.log(arrWrap); // [1, 2, 3, 4, 5, 6]


const arr3 = [1, 2];
const arr4 = [3, 4];
Array.prototype.push.apply(arr3, arr4);
console.log(arr3); // [1, 2, 3, 4]

const arr5 = [1, 2];
const arr6 = [3, 4];
arr5.push(...arr6);
console.log(arr5); // [1, 2, 3, 4]
```

객체 조합
```javascript
const obj1 = {
    a: 'A',
    b: 'B'
};
const obj2 = {
    c: 'C',
    d: 'D'
};
const objWrap = {obj1, obj2};
console.log(objWrap); // 객체 자체가 들어감

const objWrap2 = {...obj1, ...obj2};
console.log(objWrap); // { a: 'A', b: 'B' ... }
```

기존 배열 보존
```javascript
// 원본 배열도 변경됨
const arr1 = [1, 2, 3];
const arr2 = arr1.reverse();
console.log(arr1); // [3, 2, 1]
console.log(arr2); // [3, 2, 1]

// 원본 배열 유지
const arr1 = [1, 2, 3];
const arr2 = [...arr1].reverse();
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [3, 2, 1]
```
