# react-component-circleMenu

리액트 프로젝트에 사용하기위한 원형 메뉴 버튼 제작

1. cytoscape 블로그에 사용하기 위해서
2. scss, sass? styped-component 공부를 위해서

### 목표 디자인

![image](https://user-images.githubusercontent.com/68185534/137938698-6480c3f5-45e7-4f61-b8b4-e27b04148b28.png)

### 참고 Link
- https://www.cssscript.com/material-design-style-radial-fab-menu-pure-css/

- https://developer.mozilla.org/ko/docs/Web/CSS/:checked

- https://supiz.tistory.com/65

- https://ofcourse.kr/css-course/visibility-%EC%86%8D%EC%84%B1

- https://webclub.tistory.com/624
- 
- https://codepen.io/didac/pen/ZKZpmQ

일단은,,, useState 변수를 만들어 클릭 상태를 저장하고
그에 맞는 css를 보여주도록 했는데

추후에 input check box랑 label을 사용해서 새로 짜보는 것도 좋을듯

### 작업결과물

![GIF 2021-10-23 오전 3-11-30](https://user-images.githubusercontent.com/68185534/138503502-2874f46c-04e2-417e-8b8a-72da2aa23bf3.gif)

### 사용한 css 속성
- 가상요소 before, after
- transform의 rotate,  translateX, translateY, rotateZ
- transition
- transition-timing-function : 타이밍 함수(어떤 움직임(시간에 따른 가속이나 감속)으로 반영할 것인지)
- transition-duration : CSS 효과가 반영되는데 걸리는 시간, 즉 화면 이동이 종료되기 까지 걸리는 시간(트랜지션이 일어나는 지속시간)
- transition-property : 화면 이동에 영향을 받는 속성으로 이 값을 지정하면 특정 사항에 대해서만 화면 이동 효과가 나타난다.(어떤 속성을 트랜지션 할 것인지)
- transition-timing-function
