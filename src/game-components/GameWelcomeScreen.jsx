import React from "react";
import styled from "styled-components";

import { device } from "./../constants";
import Flash from "./../img/Flash.png";

import Button from "./../components/Button";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
  z-index: 1000;
  background-color: #fff;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
  }

  @media ${device.tablet} {
    max-width: 640px;
    max-height: 640px;
  }
`;

function GameWelcomeScreen(props) {
  function handleOnClick() {
    props.onStart();
  }

  console.log("Designed and Developed by: Mon Jason Fabico");

  return (
    <Container>
      <div>
        <img src={Flash} alt="Flash" />

        <Button primary onClick={handleOnClick}>
          Start game
        </Button>
        <br />
        <strong style={{ fontSize: "11px" }}>v2.0.3-alpha</strong>
        <p>
          <small>
            <strong>Note: Game is still under development</strong>
            <br />
          </small>
          <br />
          <br />

          <small style={{ fontSize: "11px" }}>
            Designed and developed by: <br /> <strong>Mon Jason Fabico</strong>
          </small>
        </p>
      </div>
    </Container>
  );
}

export default GameWelcomeScreen;
