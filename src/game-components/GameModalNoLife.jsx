import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Modal from "./../components/Modal";
import Button from "./../components/Button";

import gameConstants from "./../constants";

function GameModalNoLife(props) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const score = useSelector(state => state.gameStatus.score, shallowEqual);
  const lives = useSelector(state => state.gameStatus.lives, shallowEqual);

  useEffect(() => {
    if (lives === 0) {
      setShowModal(true);
    }
  }, [lives, showModal]);

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
      <Modal.Title>Better luck next time!</Modal.Title>

      <h3>Your score is:</h3>
      <Modal.ScoreValue>{score}</Modal.ScoreValue>
      <Button primary onClick={handlePlayAgain}>
        <i className="fa fa-fw fa-play" /> Play again!
      </Button>
      <Button onClick={handleExit}>
        <i className="fa fa-fw fa-sign-out" />
      </Button>
    </Modal.Window>
  );
}

export default GameModalNoLife;
