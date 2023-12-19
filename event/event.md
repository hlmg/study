# DOM Event

Event Listener: event가 발생할 때 호출할 함수

Event Listener 등록

1. javascript 에서 프로퍼티로 등록

```javascript
window.onload = function () {
    let text = document.getElementById("text");
    text.innerHTML = "HTML 문서 loaded";
}
```

2. HTML 태그 속성으로 등록

```html

<button onclick="alert('버튼이 클랙됐습니다.')">button.</button>
```

3. addEventListener 메서드 사용

```javascript
const aElement = document.querySelector('a');
aElement.addEventListener('click', () => {
    alert('a element clicked');
});
```

## Event Bubbling

하위 요소에 발생한 이벤트가 상위 요소로 전달 되는 것을 의미

event.target -> 실제 이벤트가 시작된 타깃 요소
this or event.currentTarget -> 핸들러가 할당된 요소

상위 요소로 전달 막기

- event.stopPropagation()

## 이벤트 흐름

1. 캡처링 단계 -> 이벤트가 하위 요소로 전파되는 단계
2. 타깃 단계 -> 이벤트가 실제 타깃 요소에 전달되는 단계
3. 버블링 단계 -> 이벤트가 상위 요소로 전파되는 단계

## 캡처링 단계 보기

addEventListener 의 capture 옵션 true로 설정

```javascript
elem.addEventListener(..., {capture: true});
elem.addEventListener(..., true);
```

## Event Delegation
하위 요소의 이벤트를 상위 요소에 위임하는 것
