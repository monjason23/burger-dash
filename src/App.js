import React from "react";

import { useSelector, shallowEqual } from "react-redux";
import { useTransition, config, animated as a } from "react-spring";

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

const GameBurgerSlideContainer = styled(a.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
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
        <GameSlidingBurgers />
        <GameIngredients />
      </GameMainContainer>
    </div>
  );
}

function GameSlidingBurgers() {
  const burgerIndex = useSelector(
    state => state.gameStatus.burgerIndex,
    shallowEqual
  );

  const burgerTransition = useTransition(burgerIndex, item => item, {
    config: config.wobbly,
    from: { transform: "translateX(100%)" },
    enter: { transform: "translateY(0%)" },
    leave: { transform: "translateY(-100%)" }
  });

  function renderAnimatedBurgerList() {
    return burgerTransition.map(({ props, key }) => (
      <GameBurgerSlideContainer key={key} style={props}>
        <GameBurger />
      </GameBurgerSlideContainer>
    ));
  }

  return <>{renderAnimatedBurgerList()}</>;
}

export default App;
