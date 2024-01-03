# bind, call, apply

함수 안의 this는 Window 객체를 참조하는데 이를 바꾸는 방법

call

- 함수를 호출하면서, 참조할 객체를 넘겨줌
- foo.call(person1);

apply

- call과 사용법 비슷
- 다른 점은 인자를 전달하는 방식
    - call은 인자를 나눠서 전달
        - foo.call(person1, arg1, arg2);
    - apply는 배열로 전달
        - foo.call(person1, [arg1, arg2]);

bind
- 함수를 실행하지는 않고 바인딩만 함
    - ```
      const bar = foo.bind(person1)
      bar('abc');
