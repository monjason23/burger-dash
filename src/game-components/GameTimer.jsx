import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import gameConstants from "./../constants";

import Timer from "./../components/Timer";

function GameTimer() {
  const dispatch = useDispatch();
  const time = useSelector(state => state.gameStatus.time, shallowEqual);

  useEffect(() => {
    let interval = null;
    if (!interval) {
      interval = setInterval(() => {
        if (time > 0) {
          dispatch({ type: gameConstants.UPDATE_TIME, payload: time - 1 });
        } else clearInterval(interval);
      }, 1000);
    }

    return () => clearInterval(interval);
  });

  return (
    <Timer.Container>
      <Timer.Header>Remaining Time</Timer.Header>
      <Timer.Value>
        {time === 60 ? "1:00" : `0:${time < 10 ? `0${time}` : time}`}
      </Timer.Value>
    </Timer.Container>
  );
}

export default GameTimer;
