## 테스트하기 어려운 영역을 구분하기

테스트하기 어려운 영역

- 관측할 때마다 다른 값에 의존하는 코드
    - 현재 날짜/시간, 랜덤 값, 전역 변수/함, 사용자 입력 등
- 외부에 영향을 주는 코드
    - 표준 출력, 메시지 발송, 데이터베이스에 기록하기 등

테스트하려는 함수가 외부 세계의 값에 영향을 받거나, 외부 세계에 영향을 주면 테스트하기 어렵다.

## DisplayName 작성

명사의 나열보다 문장으로 구성하기

- e.g. A이면 B다., A이면 B가 아니고 C다.
    - 음료 1개 추가 테스트 (x)
    - 음료를 1개 추가할 수 있다. (o)

테스트 행위에 대한 결과까지 기술하기

- 음료를 1개 추가할 수 있다. -> 음료를 1개 추가하면 주문 목록에 담긴다.

도메인 용어를 사용하여 한층 추상화된 내용을 담기

- 메서드 자체의 관점 -> 도메인 정책 관점
- 특정 시간 이전에 주문할 수 없다. -> 영업 시작 시간 이전에는 주문을 생성할 수 없다.

테스트 현상을 중점으로 기술하지 말자

- 테스트의 성공, 실패 여부는 테스트하고자 하는 내용과 관계가 없다.
- 영업 시작 이전에 주문을 생성하면 실패한다. -> 영업 시작 시간 이전에는 주문을 생성할 수 없다.

## Persistence Layer

- Data Access 역할
- 비즈니스 가공 로직이 포함되면 안됨, Data에 대한 CRUD에만 집중하자.

## Business Layer

- 비즈니스 로직 구현
- Persistence Layer와 상호작용을 통해 비즈니스 로직을 전개한다.
- 트랜잭션을 보장해야 한다.

## Presentation Layer

- 요청을 가장 먼저 받는 계층
- 파라미터에 대한 최소한의 검증 수행

## CQRS

- Command / Query 서비스 분리
- DB Endpoint 분리: Command는 Primary, Read는 Replication
- Transactional의 readonly 값에 따라 해당하는 DB Endpoint 호출하기
    - Aurora DB 클러스터 모드 사용: 같은 Endpoint로 보내면 readonly 값을 보고 구분을 해줌
    - Endpoint를 따로 두고 Spring에서 annotation 값에 따라 구분해서 요청하기

## Validation 책임

- 도메인 정책에 대한 검증 (e.g. 상품 이름 20자 제한)은 서비스 or 도메인 생성자에서
- Controller가 받는 request는 기본 값 검증만 진행 (e.g. 유효한 문자열이면 합당히 가져야 할 validation(not empty))

## ApiResponse

- 클라이언트와 협의해서 응답 포맷을 정의하자.
- 단순한 방법을 사용해도 됨
    - 정상 응답: 포장하지 않고 Data만 응답
    - 에러 응답: 에러 포맷을 정의해서 에러코드, 예외 메세지 등을 넘김
        - e.g. Spring 6.0.x 부터 추가된 ProblemDetail 사용(RFC 7807)

## Request DTO 분리

- Controller로 받는 request DTO를 그대로 service에 사용하지 말자(service가 controller layer에 의존, 하위 레이어가 상위를 의존하는 문제)
- 서비스가 커져서 모듈을 분리할 때 이 점이 허들이 됨
- service용 RequestDto를 만들어서 분리하자.
    - 이렇게 하면, ControllerRequestDto만 검증 책임을 가져가게 됨
    - ServiceRequestDto는 Entity 변환 책임만 담당
- service를 사용하는 다양한 채널이 생겨도 특정 컨트롤러의 DTO에 의존하지 않아 확장이 쉬움

## TestDouble

Dummy: 아무 것도 하지 않는 객체
Fake: 단순한 형태로 동일한 기능은 수행하나 프로덕션에 쓰기엔 부족한 객체 (e.g. FakeRepository)
Stub: 테스트에서 요청한 것에 대해 미리 준비한 결과를 제공하는 객체
Spy: stub이면서 호출 내용을 기록하는 객체, 일부는 실제 객체처럼 동작시키고 일부만 stubbing 할 수 있음
Mock: 행위에 대한 기대를 정의하고, 그 명세에 따라 동작하는 객체

### stub과 mock의 차이

stub은 상태 검증(실행 결과), mock은 행위 검증(메서드 호출 횟수)
https://martinfowler.com/articles/mocksArentStubs.html
