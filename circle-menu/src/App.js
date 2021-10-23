import { useState, useMemo, useCallback } from "react";
import styled, { css } from "styled-components";
import { FaInternetExplorer } from "react-icons/fa";
import { BsInfoLg } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function App() {
  const [toggle, setToggle] = useState(false);

  return useMemo(() => {
    return (
      <div>
        <ToggleButton
          onClick={() => {
            setToggle(!toggle);
          }}
          visible={toggle}
          title="메뉴 열기 및 닫기"
        ></ToggleButton>
        <SubButton visible={toggle} one onClick={()=>{alert("태호오빠 소개 모달")}} title="블로그 소개">
          <BsInfoLg size="24" color="white" />
        </SubButton>
        <SubButton visible={toggle} two onClick={()=>{alert("치팅사이트 목록 모달")}} title="각종 참고 및 치팅 사이트">
          <FaInternetExplorer size="24" color="white" />
        </SubButton>
        <SubButton visible={toggle} three onClick={()=>{parent.location='mailto:jhy901@naver.com'}} title="블로그 주인에게 이메일 보내기">
          <AiOutlineMail size="24" color="white" />
        </SubButton>
      </div>
    );
  }, [toggle]);
}

export default App;

const ToggleButton = styled.button`
  position: absolute;
  z-index: 2;
  right: 1em;
  bottom: 1em;
  background-color: #f44336;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: none;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:before,
  &:after {
    position:absolute;
    top:22px;
    height: 35px;
    width: 5px;
    left:38px;
    border-radius: 15px;
    background-color: white;
    content:""
  }
  &:before {
    transform: ${(props) =>
      props.visible === true ? "rotate(45deg)" : "rotate(180deg)"};
    transition: all 0.25s;
  }
  &:after {
    transform: ${(props) =>
      props.visible === true ? "rotate(-45deg)" : "rotate(-90deg)"};
    transition: all 0.25s;
  }
`;

const SubButton = styled.button`
  position: absolute;
  right: 1em;
  bottom: 1em;
  opacity: ${(props) => (props.visible === true ? 1 : 0)};
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: none;
  transform: rotateZ(90deg);
  transition-property: all;
  transition-duration: 0.35s;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);
  &:hover {
    height: 5rem;
    width: 5rem;
  }
  ${(props) =>
    props.one &&
    css`
      background-color: #0192ca;
      transform: translateY(-8em);
    `};
  ${(props) =>
    props.two &&
    css`
      background-color: #62c7fa;
      transform: translateX(-6em) translateY(-6em);
      transition-delay: 0.1s;
    `};
  ${(props) =>
    props.three &&
    css`
      background-color: #b0f1ea;
      transform: translateX(-8em);
      transition-delay: 0.2s;
    `};
`;
