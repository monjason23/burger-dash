import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Modal from "./../components/Modal";
import Button from "./../components/Button";

import gameConstants from "./../constants";

function GameModalTimesUp(props) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const score = useSelector(state => state.gameStatus.score, shallowEqual);
  const time = useSelector(state => state.gameStatus.time, shallowEqual);

  useEffect(() => {
    if (time === 0) {
      setShowModal(true);
    }
  }, [time, showModal]);

  function handlePlayAgain() {
    setShowModal(false);
    dispatch({
      type: gameConstants.RESTART
    });
  }
  function handleExit() {
    props.onExit();
    setShowModal(false);
    dispatch({
      type: gameConstants.RESTART
    });
  }

  return (
    <Modal.Window show={showModal}>
      <Modal.Title>Time's up!</Modal.Title>

      <h3>Your score is:</h3>
      <Modal.ScoreValue>{score}</Modal.ScoreValue>
      <Button primary onClick={handlePlayAgain}>
        Play again!
      </Button>
      <Button onClick={handleExit}>Exit</Button>
    </Modal.Window>
  );
}

export default GameModalTimesUp;
