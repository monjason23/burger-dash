import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { useTransition, animated as a, config } from "react-spring";

const Backdrop = styled.div`
  position: absolute;
  z-index: 200;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled(a.div)`
  position: absolute;
  box-sizing: border-box;
  width: 450px;
  max-width: 100%;
  max-height: 100%;
  padding: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;
`;

const ModalBox = styled.div`
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 0;
`;

const ScoreValue = styled.h1`
  font-size: 48px;
  margin-top: 0px;
  font-weight: bolder;
  color: #71b413;
`;

function Window({ children, show }) {
  const AppContainer = document.querySelector(".App");

  const modalTransition = useTransition(show, null, {
    config: config.wobbly,
    from: { transform: "translate(-50%, -50%) scale(0)", opacity: 0 },
    enter: { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
    leave: { transform: "translate(-50%, -50%) scale(0)", opacity: 0 }
  });

  return ReactDOM.createPortal(
    <>
      {modalTransition.map(({ item, props, key }) => {
        return (
          item && (
            <ModalContainer key={key} style={props}>
              <ModalBox>{children}</ModalBox>
            </ModalContainer>
          )
        );
      })}
      {show && <Backdrop />}
    </>,
    AppContainer
  );
}

export default { Window, Title, ScoreValue };
