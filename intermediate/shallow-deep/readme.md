# 얕은 복사, 깊은 복사

얕은 복사

- spread operator, Object.assign, Array.from(), slice
- 중첩된 배열은 복사가 안됨, 1depth만 복사함

얕은 동결

- Object.freeze()
- 객체 내부의 참조 값에 대한 변경은 가능

깊은 복사

- json.parse(json.stringify())
    - JSON.parse(JSON.stringify(aObject));
- nested spread operator
    - { ...aObject, cObject: { ...aObject.cObject } };
- lodash
    - _.cloneDeep(aObject);
- structuredClone
    - structuredClone(aObject);
