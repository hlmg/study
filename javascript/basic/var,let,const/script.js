// var 중복 선언, 재할당 가능 -> 사용하지 말자(ES6 let, const 사용)
var var1 = 'hello';
console.log(var1); // hello

var var1 = 'hi';
console.log(var1); //hi

var1 = 'how are you?';
console.log(var1); //how are you?

// let 중복 선언 불가, 재할당 가능
let let1 = 'hello';
console.log(let1); // hello

// let let1 = 'hi';
// console.log(let1);
// // Uncaught SyntaxError: Identifier 'greeting' has already been declared

let1 = 'how are you?';
console.log(let1); //how are you?

// const 중복 선언, 재할당 불가
const const1 = 'hello';
console.log(const1); // hello

// const const1 = 'hi';
// console.log(const1);
// //Uncaught SyntaxError: Identifier 'greeting' has already been declared

// const1 = 'how are you?';
// console.log(const1);
// //Uncaught TypeError: Assignment to constant variable

const arrayList = [1, 2, 3];
arrayList.push(4);
console.log(arrayList);

const objectList = { a: 'a', b: 'b' };
objectList.c = "c"
console.log(objectList);

// var: 함수 레벨 스코프
function func1() {
    if (true) {
        var a = 'a';
        console.log(a); // 'a'
    }
    console.log(a); // 'a'
}
func1();
// console.log(a); // ReferenceError: a is not defined

// let, const: block 레벨 스코프
function func2() {
    if (true) {
        let a = 'a';
        console.log(a); // 'a'
    }
    // console.log(a); // ReferenceError: a is not defined
}
func2();


// console.log(a); // ReferenceError: a is not defined

// undefined
let hello;
console.log(hello);


// Hoisting: 변수 및 함수 선언이 로컬 범위 맨 위로 가는 것

// var -> hoisting 되고 선언할 떄 undefined 할당, 초기화 되기 전에 사용 가능
console.log(a); // undefined
var a = 5;

a = 5;
console.log(a);
var a; // 5


// let, const -> hoisting 되고 선언할 때 값 할당 x, 즉 초기화되기 전에 사용 불가 (Temporal Dead Zone)
// console.log(greeting);
// // Uncaught ReferenceError: Cannot access 'greeting' before initialization
// const greeting = "hello";

// console.log(greeting);
// // undefined
// let greeting = "hello";


func3(); //hoisting test

function func3() {
    console.log("hoisting test");
}
