import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Score from "./../components/Score";

function GameScore() {
  const score = useSelector(state => state.gameStatus.score, shallowEqual);
  return (
    <Score.Container>
      <Score.Header>Your score</Score.Header>
      <Score.Value>{score}</Score.Value>
    </Score.Container>
  );
}

export default GameScore;
