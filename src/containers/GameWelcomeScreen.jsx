import React from "react";
import styled from "styled-components";
import { FacebookShareButton } from "react-share";

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
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    display: inline-block;
    max-width: 500px;
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

  return (
    <Container>
      <div>
        <img src={Flash} alt="Flash" />
        <br />

        <Button primary onClick={handleOnClick}>
          Start game
        </Button>
        <FacebookShareButton
          url={"https://monjason23.github.io/burger-dash/"}
          quote={`Let's play Burger Dash!`}
          style={{ display: "inline-block" }}
        >
          <Button social>
            <i className="fa fa-fw fa-facebook-square" /> Share
          </Button>
        </FacebookShareButton>
        <br />
        <p>
          <small style={{ fontSize: "11px" }}>
            Designed and developed by: <br /> <strong>Mon</strong>
            <br />
            <br />
            <strong>Best viewed in Chrome</strong>
          </small>
        </p>
      </div>
    </Container>
  );
}

export default GameWelcomeScreen;
