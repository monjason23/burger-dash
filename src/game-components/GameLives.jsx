import React from "react";

import { useSelector, shallowEqual } from "react-redux";
import Lives from "./../components/Lives";

import _ from "lodash";

function GameLives() {
  const lives = useSelector(state => state.gameStatus.lives, shallowEqual);

  function renderHearts() {
    return _.range(lives).map(i => <Lives.Heart key={i}>{"<3"}</Lives.Heart>);
  }

  return <Lives.Container>{renderHearts()}</Lives.Container>;
}

export default GameLives;
