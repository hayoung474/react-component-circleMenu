import { useState, useMemo } from "react";
import styled, { css } from "styled-components";

const ToggleButton = styled.button`
  position: absolute;
  z-index: 2;
  right: 1em;
  bottom: 1em;
  background-color: tomato;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  border: none;
  &:before,
  &:after {
    position: absolute;
    top: 21px;
    content: " ";
    height: 40px;
    width: 4px;
    border-radius: 10px;
    background-color: white;
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
  background-color: blueviolet;
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  border: none;
  transform: rotateZ(90deg);
  transition-property: all;
  transition-duration: 0.35s;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${(props) =>
    props.one &&
    css`
      background-color: mediumorchid;
      transform: translateY(-8em);
    `};
  ${(props) =>
    props.two &&
    css`
      background-color: slateblue;
      transform: translateX(-6em) translateY(-6em);
      transition-delay: 0.1s;
    `};
  ${(props) =>
    props.three &&
    css`
      background-color: purple;
      transform: translateX(-8em);
      transition-delay: 0.2s;
    `};
`;

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
        ></ToggleButton>
        <SubButton visible={toggle} one>
          버튼1
        </SubButton>
        <SubButton visible={toggle} two>
          버튼2
        </SubButton>
        <SubButton visible={toggle} three>
          버튼3
        </SubButton>
      </div>
    );
  }, [toggle]);
}

export default App;
