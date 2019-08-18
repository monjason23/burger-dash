import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import gameConstants from "./../constants";
import useAudio from "./../hooks/useAudio";
import Countdown from "./../audio/countdown.mp3";

import Timer from "./../components/Timer";

function GameTimer() {
  const dispatch = useDispatch();
  const [playing, { toggle, restartAudio }] = useAudio(Countdown);
  const time = useSelector(state => state.gameStatus.time, shallowEqual);
  const lives = useSelector(state => state.gameStatus.lives, shallowEqual);

  useEffect(() => {
    let interval = null;

    if (!interval) {
      interval = setInterval(() => {
        if (time > 0 && lives !== 0) {
          dispatch({ type: gameConstants.UPDATE_TIME, payload: time - 1 });
        } else clearInterval(interval);
      }, 1000);
    }

    if (time <= 6) {
      if (!playing) {
        toggle();
      }
    }

    if (time === 0) {
      restartAudio();
      toggle();
    }

    return () => clearInterval(interval);
  }, [time]);

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
