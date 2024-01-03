# Intersection Observer

Intersection Observer

- 브라우저 뷰포트(default intersection root)와 설정한 요소(observe(target element))의 교차점을 관찰
- 요소가 뷰포트에 포함되는지 포함되지 않는지(사용자 화면에 보이는지 아닌지) 구별하는 기능 제공
- 비동기로 실행되기 때문에, scroll 같은 이벤트 기반 요소 관찰에서 발생하는 렌더링 성능이나 이벤트 연속 호출 같은 문제가 없음

threshold(intersection ratio)

- 0.5로 설정하면, intersection root에 target element가 50% 교차할 떄 이벤트가 일어남
