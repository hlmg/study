# this

this가 참조하는 대상
Function -> Object
Method -> Window Object
Constructor Function -> {}

```javascript
/*
this.title의 값은 undefined, functions 안에 있기 떄문에 window object를 참조하는데, window object에 title이 없음
 */
const audio = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories() {
        this.categories.forEach(function (category) {
            console.log(`title: ${this.title}, category: ${category}`);
        })
    }
}


/*
forEach의 첫 번째 매개변수: 콜백함수
두 번째 매개변수: thisArg

thisArg에 넣는 것을 콜백함수에서 this로 참조할 수 있음
 */
const audio = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories() {
        this.categories.forEach(function (category) {
            console.log(`title: ${this.title}, category: ${category}`);
        }, {title: 'audio'})
    }
}

/*
thisArg에 메서드의 this(audio)를 전달하면, audio를 그대로 함수 안에서 사용 가능
 */
const audio = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories() {
        this.categories.forEach(function (category) {
            console.log(`title: ${this.title}, category: ${category}`);
        }, this)
    }
}


/*
화살표 함수의 this는 항상 상위 스코프의 this를 가리킨다.
Lexical this
 */
const audio = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories() {
        this.categories.forEach((category) => {
            console.log(this);
        })
    }
}
```
