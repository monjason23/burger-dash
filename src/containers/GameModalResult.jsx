import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { FacebookShareButton } from "react-share";
import Modal from "./../components/Modal";
import Button from "./../components/Button";
import { restartGame } from "./../actions";

import gameConstants from "./../constants";

function GameModalResult(props) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const score = useSelector(state => state.gameStatus.score, shallowEqual);
  const lives = useSelector(state => state.gameStatus.lives, shallowEqual);
  const time = useSelector(state => state.gameStatus.time, shallowEqual);
  const multiplier = time === 0 && score > 0 ? 10 : 0;
  const additionalScore = lives * multiplier;
  const finalScore = score + additionalScore;

  useEffect(() => {
    if (lives === 0 || time === 0) {
      setShowModal(true);
    }
  }, [lives, time, showModal]);

  function handlePlayAgain() {
    setShowModal(false);
    dispatch(restartGame());
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
      <Modal.Title>
        {lives === 0 ? "Better luck next time!" : "Time's up!"}
      </Modal.Title>

      <h3>Your score is:</h3>
      <Modal.ScoreValue>{finalScore}</Modal.ScoreValue>
      <Modal.AdditionalScore>{`Additional score: ${additionalScore}`}</Modal.AdditionalScore>
      <Button primary onClick={handlePlayAgain}>
        <i className="fa fa-fw fa-play" /> Play again!
      </Button>
      <FacebookShareButton
        style={{ display: "inline-block" }}
        url={"https://monjason23.github.io/burger-dash/"}
        quote={`My score is ${finalScore}. Can you beat me?`}
      >
        <Button social>
          <i className="fa fa-fw fa-facebook-square" /> Share
        </Button>
      </FacebookShareButton>
      <Button onClick={handleExit}>
        <i className="fa fa-fw fa-sign-out" /> Exit
      </Button>
    </Modal.Window>
  );
}

export default GameModalResult;
