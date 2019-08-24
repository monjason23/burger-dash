import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import gameConstants from "./../constants";
import useGameAudio from "./../hooks/useGameAudio";

import Timer from "./../components/Timer";

function GameTimer() {
  const dispatch = useDispatch();
  const [playing, { toggleAudio, restartAudio }] = useGameAudio("countdown");
  const time = useSelector(state => state.gameStatus.time, shallowEqual);
  const lives = useSelector(state => state.gameStatus.lives, shallowEqual);
  const paused = useSelector(state => state.gameStatus.paused, shallowEqual);

  useEffect(() => {
    let interval = null;

    if (!interval) {
      interval = setInterval(() => {
        if (time > 0 && lives !== 0 && !paused) {
          if (time <= 7 && !playing) toggleAudio();
          dispatch({ type: gameConstants.UPDATE_TIME, payload: time - 1 });
        } else {
          if (playing) {
            toggleAudio();
          }

          restartAudio();
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [time, lives, paused, playing]);

  return (
    <>
      <Timer.Container>
        <Timer.Header>Remaining Time</Timer.Header>
        <Timer.Value>
          {time === 60 ? "1:00" : `0:${time < 10 ? `0${time}` : time}`}
        </Timer.Value>
      </Timer.Container>
    </>
  );
}

export default GameTimer;
