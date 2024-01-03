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

웹 페이지 문서 구조를 DOM 트리 구조로 표현해서 메모리에 저장
자바스크립트가 이용할 수 있게 브라우저가 트리구조로 만든 객체 모델을 의미한다.

# 웹 페이지 빌드 과정(Critical Rendering Path CRP)
브라우저가 서버에서 페이지에 대한 HTML 응답을 받고 화면에 표시하기 전에 여러 단계가 있음.
HTML 문서 읽고, 스타일 적용하고, 뷰표트에 표시

1. 렌더 엔진이 문서를 읽고 파싱하여 어떤 내용을 페이지에 렌더링할지 결정 (DOM tree 생성)
- HTML을 DOM으로 만듦
- CSS를 CSSOM(CSS Object Model)로 만듦
    - JavaScript는 DOM, CSSOM 사용 가능

2. 브라우저가 DOM과 CSSOM을 결합해서 최종 렌더링 트리를 출력. 즉, 화면에 표시되는 모든 노드의 콘텐츠 및 스타일 정보를 포함한다. (Render tree 생성)

3. 브라우저가 페이지에 표시되는 각 요소의 크기와 위치를 계산 (Layout(reflow))

4. 실제 화면에 Render (Paint)

2, 3, 4 과정은 비용이 많이 들음, 최적화 해야 함 (React의 Virtual DOM)
 */


let val;

val = document;
// val = document.baseURI // 웹 페이지의 절대 URI를 반환
// val = document.head; // <head> 태그 반환
// val = document.body; // <body> 태그 반환
// val = document.doctype; // 웹 페이지의 문서 형식을 반환
// val = document.cookie // 웹 페이지의 쿠키를 반환

// val = document.forms; // <form> 태그 반환
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].action;
// val = document.forms[0].method;

// val = document.links; // href 속성이 있는 <a> 태그 반환
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].classList[0];
// val = document.links[0].className;

// val = document.images; // <img> 태그 반환

// val = document.scripts; // <script> 태그 반환
// val = document.scripts[0].getAttribute('src');

console.log(val);
