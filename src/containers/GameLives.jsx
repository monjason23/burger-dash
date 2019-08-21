import React from "react";

import { useSelector, shallowEqual } from "react-redux";
import { useTransition, config } from "react-spring";

import Lives from "./../components/Lives";

import _ from "lodash";

function GameLives() {
  const lives = useSelector(state => state.gameStatus.lives, shallowEqual);

  const heartTransition = useTransition(_.range(lives), item => item, {
    config: config.wobbly,
    from: { transform: "scale(0)", opacity: 1 },
    enter: { transform: "scale(1)", opacity: 1 },
    leave: { transform: "scale(0)", opacity: 0 }
  });

  function renderHearts() {
    return heartTransition.map(({ props, key }) => (
      <Lives.Heart style={props} key={key}>
        <img src={require("./../img/Heart.svg")} alt="Heart" />
      </Lives.Heart>
    ));
  }

  return <Lives.Container>{renderHearts()}</Lives.Container>;
}

export default GameLives;
