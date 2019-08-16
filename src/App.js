import React from "react";

import styled from "styled-components";

import GameBurger from "./game-components/GameBurger";
import GameIngredients from "./game-components/GameIngredients";
import GameOrder from "./game-components/GameOrder";
import GameTimer from "./game-components/GameTimer";
import GameScore from "./game-components/GameScore";
import GameLives from "./game-components/GameLives";
import GameStars from "./game-components/GameStars";

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
`;

function App() {
  return (
    <div className="App">
      <GameMainContainer>
        <GameStars />
        <GameLives />
        <GameScore />
        <GameTimer />
        <GameOrder />
        <GameBurger />
        <GameIngredients />
      </GameMainContainer>
    </div>
  );
}

export default App;
