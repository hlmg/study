# Destructuring

구조 분해 할당 (ES6)

- 배열이나 객체의 속성을 해체해서 그 값을 개별 변수에 담는 Javascript 표현식
- Clean Code를 위해 사용하는 경우도 많음

객체 구조 분해 할당

```javascript
// 구조 분해 할당 미사용
function buildAnimal(animalData) {
    let accessory = animalData.accessory;
    let animal = animalData.animal;
    let color = animalData.color;
    let hairType = animalData.hairType;
...
}

// 구조 분해 할당 사용
function buildAnimal(animalData) {
    let {accessory, animal, color, hairType} = animalData;
...
}

let animalData = {
    accessory: 'horn',
    animal: 'horse',
    color: 'purple',
    hairType: 'curly'
}

// 깊게 들어간 객체 구조 분해 할당
let person = {
    name: 'John',
    age: 30,
    phone: '010-1234-1234',
    address: {
        zipcode: 1234,
        street: 'rainbow',
        number: 42
    }
}

let {address: {zipcode, street, number}} = person;
console.log(zipcode, street, number);
```

배열 구조 분해 할당

```javascript
let a, b, rest;
[a, b] = [10, 20];

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // Array [30,40,50]


// 구조 분해 할당 미사용
const week = ['mon', 'tue', 'wed', 'thu', 'fri'];
const day1 = week[0];
const day2 = week[1];
const day3 = week[2];
const day4 = week[3];
const day5 = week[4];

// 구조 분해 할당 사용
const week = ['mon', 'tue', 'wed', 'thu', 'fri'];
const [day1, day2, day3, day4, day5] = week;

// 일부만 할당
const number = [1, 2, 3, 4, 5, 6];
const [, , three, , five] = numbers;

// 객체 변수 이름 변경 및 기본 값 설정
const person = {
    name: "abc",
    age: 30
}

const {name: nickname = 'not given', age} = person;

console.log(nickname); // name 대신 nickname으로도 호출 가능, 값이 없으면 not given이 출력됨

// 응용
var people = [
    {
        name: "name1",
        address: {
            city: "city1",
            street: "street1",
        },
        age: 35
    },
    {
        name: "name2",
        address: {
            city: "city1",
            street: "street1",
        },
        age: 25
    }
]

for (var {name: n, address: {city: c}} of people) {
    console.log("Name: " + n + ", City" + c);
}

// Name: name1, City: city1 
// Name: name2, City: city2 
```
