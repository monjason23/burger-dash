import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Modal from "./../components/Modal";
import Button from "./../components/Button";

import gameConstants from "./../constants";
import { restartGame } from "./../actions";

function GameModalSetting(props) {
  const dispatch = useDispatch();
  const paused = useSelector(state => state.gameStatus.paused, shallowEqual);

  function handleTogglePause() {
    dispatch({
      type: gameConstants.TOGGLE_PAUSE
    });
  }

  function handleRestart() {
    dispatch(restartGame());
  }
  function handleExit() {
    props.onExit();
    dispatch(restartGame());
  }

  return (
    <>
      <Modal.Window
        show={paused && !props.isBlurred}
        backdropOnClick={handleTogglePause}
      >
        <Modal.Title>What would you like to do?</Modal.Title>
        <Button primary onClick={handleTogglePause}>
          <i className="fa fa-fw fa-play" /> Resume
        </Button>
        <Button onClick={handleRestart}>
          <i className="fa fa-fw fa-repeat" /> Restart
        </Button>
        <Button onClick={handleExit}>
          <i className="fa fa-fw fa-sign-out" /> Exit
        </Button>
      </Modal.Window>
      <Button
        settings
        onClick={handleTogglePause}
        style={{
          position: "absolute",
          zIndex: "15",
          right: "-3px",
          borderRadius: "8px 0px 0px 8px",
          top: "50%",
          transform: "translateY(-50%)"
        }}
      >
        <i className="fa fa-cog" />
      </Button>
    </>
  );
}

export default GameModalSetting;
