# Symbol Type

ES6에 추가된 원시 타입. 유니크한 식별자를 만드는 목적

```javascript
const idSym = Symbol('id');
let carA = {
    id: 1,
    name: 'morning',
    brand: 'kia',
    [idSym]: 300
}
```

Symbol은 for...in 과 getOwnPropertyNames에서 제외됨

symbol을 보려면 getOwnPropertySymbols를 사용

## 전역 심볼

심볼은 description이 같아도 다른 값을 가지게 됨
Symbol.for()을 이용하면 같은 description을 가질때 같다고 취급

```javascript
Symbol('id') === Symbol('id') // false
Symbol.for('id') === Symbol.for('id') // false
```

for로 심볼을 생성하면 전역 심볼이 되어서 다른 곳에서 description을 이용해서 이 symbol 값을 가져와서 사용할 수 있다.

## Symbol.keyFor()

전역 심볼을 찾을때 사용하는 description을 얻을 수 있음

```javascript
let sym = Symbol('name')

console.log(Symbol.keyFor(sym)); // name
```
