// WINDOW
// 자바 스크립트의 객체가 아니고 브라우저의 객체임
// Alert
alert('Hello World');

// Prompt
const input = prompt();
alert(input);

// Confirm
if (confirm('Yes or No')) {
    console.log('YES');
} else {
    console.log('NO');
}

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;


// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
window.location.href = 'http://google.com';
//Reload
window.location.reload();

// History Object

window.history.go(-2);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.userAgent;
val = window.navigator.language;

console.log(val);


var greeting = 'hello';

function doGreeting() {
    return greeting;
}

// var 또는 함수를 선언하면 window 객체의 프로퍼티가 됨
console.log(window.greeting); // hello
console.log(window.doGreeting()); // hello

/*
Web APIs

// Browser Object Model (BOM)
window.location
window.navigator
window.history
window.screen
...

// Document Object Model (DOM)
window.document
 */
