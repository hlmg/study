# Map, Filter, Reduce

## Map

배열 내의 모든 요소 각각에 대해 주어진 함수를 적용하고 결과를 모아 새로운 배열을 반환한다.

```javascript
const arr = [1, 4, 9, 16];
const map1 = arr.map(x => x * 2);
console.log(map1); // 2, 8, 18, 32;

// arr.map(callback(currentValue[, index[, arr]])[, thisArg])

const map2 = arr.map(function (item, index, array) {
    console.log(item, index, array, this) // 화살표 함수는 this에 thisArg가 들어가지 않음
    return (item * 2)
}, {a: 'a'});
```

## Filter

주어진 함수의 테스트를 통과하는 요소를 모아 새로운 배열을 반환한다.

```javascript
const words = ['1', '12', '123', '1234', '12345']
const result = words.filter(word => word.length > 3);
console.log(result) // Array ["1234", "12345"]

// arr.filter(callback(element[, index[, array]])[, thisArg])
const res = words.filter(function (word, index, array) {
    console.log(word, index, array, this);
    return word.length > 3
}, {a: 'a'});
```

## Reduce

각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다.

arr.reduce(reducer, initialValue)

리듀서 함수는 네 개의 인자를 가진다.

- 누산기(acc), 현재 값(cur), 현재 인덱스(idx), 원본 배열(src)

```javascript
// result: 10
[0, 1, 2, 3, 4].reduce(function (acc, cur, idx, src) {
    return acc + cur;
});

// 두 번째 인수로 초기값 제공, result: 20
[0, 1, 2, 3, 4].reduce(function (acc, cur, idx, src) {
    return acc + cur;
}, 10);
```
