import React, { useState } from "react";

import styled from "styled-components";

import GameBurger from "./game-components/GameBurger";
import GameIngredients from "./game-components/GameIngredients";
import GameOrder from "./game-components/GameOrder";
import GameTimer from "./game-components/GameTimer";
import GameScore from "./game-components/GameScore";
import GameLives from "./game-components/GameLives";
import GameStars from "./game-components/GameStars";
import GameDroppableArea from "./game-components/GameDroppableArea";

import GameWelcomeScreen from "./game-components/GameWelcomeScreen";

import { device } from "./constants";

import "./App.css";

const GameMainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  overflow: hidden;
  user-select: none;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(242, 242, 242, 1) 100%
  );

  @media ${device.tablet} {
    max-width: 640px;
    max-height: 640px;
  }

  img.bg {
    position: absolute;
    width: 100%;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    min-width: 500px;
  }
`;

function App() {
  const [start, setStart] = useState(false);

  function startGame() {
    setStart(true);
  }

  return (
    <div className="App">
      <GameMainContainer>
        {!start ? (
          <GameWelcomeScreen onStart={startGame} />
        ) : (
          <>
            <GameDroppableArea />
            <GameStars />
            <GameLives />
            <GameScore />
            <GameTimer />
            <GameOrder />
            <GameBurger />
            <GameIngredients />
          </>
        )}

        <img className="bg" src={require("./img/bg.png")} />
      </GameMainContainer>
    </div>
  );
}

export default App;
