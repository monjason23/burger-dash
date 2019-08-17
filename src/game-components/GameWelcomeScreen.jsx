import React from "react";
import styled from "styled-components";

import { device } from "./../constants";

import BackgroundMusic from "./../audio/bg.mp3";
import Flash from "./../img/Flash.png";
import useAudio from "./GameAudio";

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
  const [playing, { playAudio }] = useAudio(BackgroundMusic);

  function handleOnClick() {
    playAudio();
    props.onStart();
  }

  return (
    <Container>
      <div>
        <img src={Flash} alt="Flash" />
        <h2 style={{ margin: "0px" }}>
          <strong>Welcome!</strong>
        </h2>
        <p>
          This game is still under development.
          <br /> Please don't share to anyone yet. Thanks!
        </p>
        <button onClick={handleOnClick}>Start game</button>
      </div>
    </Container>
  );
}

export default GameWelcomeScreen;
