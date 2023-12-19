# Strict mode

Javascript의 제한된 버전을 선택해서 암묵적인 느슨한 모드를 해제하는 방법

## Strict mode 특징

1. 기존에 무시되는 에러를 throwing 함
2. Javascript 엔진의 최적화 작업을 어렵게 만드는 실수를 바로잡음. (가끔씩 더 빨리 작동하도록 만들어짐)

## 적용 방법
1. 파일에 "use strict" 지시자 입ㄹ력
2. 함수 안에 "use strict"를 사용해서 해당 함수에 적용
3. class 문법 사용하면 자동으로 strict 모드로 바뀜
4. html의 script 태그 안의 type을 module로 설정하면 strict 모드가 됨


