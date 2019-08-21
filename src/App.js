import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import GameBurger from "./containers/GameBurger";
import GameIngredients from "./containers/GameIngredients";
import GameOrder from "./containers/GameOrder";
import GameTimer from "./containers/GameTimer";
import GameScore from "./containers/GameScore";
import GameLives from "./containers/GameLives";
import GameStars from "./containers/GameStars";
import GameDroppableArea from "./containers/GameDroppableArea";
import GameWelcomeScreen from "./containers/GameWelcomeScreen";
import GameModalTimesUp from "./containers/GameModalTimesUp";
import GameModalNoLife from "./containers/GameModalNoLife";
import GameModalSettings from "./containers/GameModalSettings";

import useAudio from "./hooks/useAudio";
import BackgroundMusic from "./audio/bg.mp3";

import gameConstants, { device } from "./constants";

import "./App.css";

const GameMainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  overflow: hidden;
  user-select: none;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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

  const dispatch = useDispatch();

  const [playing, { toggle }] = useAudio(BackgroundMusic, {
    loop: true
  });

  const loading = useSelector(state => state.gameStatus.loading, shallowEqual);

  function handleGame(bool) {
    return function() {
      setStart(bool);
      toggle();
    };
  }

  useEffect(() => {
    function onBlur() {
      if (playing) {
        toggle();
      }

      dispatch({
        type: gameConstants.SET_PAUSE,
        payload: true
      });
    }

    function onFocus() {
      if (!playing && start) {
        toggle();
      }

      dispatch({
        type: gameConstants.SET_PAUSE,
        payload: false
      });
    }

    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, [start, playing, toggle]);

  return (
    <div className="App">
      <GameMainContainer>
        {!start ? (
          <GameWelcomeScreen onStart={handleGame(true)} />
        ) : (
          <>
            {!loading && (
              <>
                <GameModalTimesUp onExit={handleGame(false)} />
                <GameModalNoLife onExit={handleGame(false)} />
                <GameModalSettings onExit={handleGame(false)} />
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
          </>
        )}

        <img className="bg" src={require("./img/bg.png")} />
      </GameMainContainer>
    </div>
  );
}

export default App;
