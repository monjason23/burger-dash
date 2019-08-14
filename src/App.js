import React from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useTransition, config, animated as a } from "react-spring";

import GameBurger from "./game-components/GameBurger";
import GameIngredients from "./game-components/GameIngredients";
import GameOrder from "./game-components/GameOrder";
import GameTimer from "./game-components/GameTimer";
import GameScore from "./game-components/GameScore";
import GameLives from "./game-components/GameLives";

import styled from "styled-components";

const GameMainContainer = styled.div`
  position: relative;
  width: 640px;
  height: 640px;
  border: 1px solid #eee;
  overflow: hidden;
  user-select: none;
`;

const GameBurgerSlideContainer = styled(a.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
`;

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <GameMainContainer>
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
    return burgerTransition.map(({ item, props, key }) => (
      <GameBurgerSlideContainer key={key} style={props}>
        <GameBurger />
      </GameBurgerSlideContainer>
    ));
  }

  return <>{renderAnimatedBurgerList()}</>;
}

export default App;
