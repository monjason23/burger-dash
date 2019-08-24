import { useState, useEffect } from "react";

import BackgroundMusic from "./../audio/bg.mp3";
import Incorrect from "./../audio/wrong.mp3";
import Serve from "./../audio/bell.mp3";
import Countdown from "./../audio/countdown.mp3";
import Pop from "./../audio/pop.mp3";

const bg = new Audio(BackgroundMusic);
const incorrect = new Audio(Incorrect);
const serve = new Audio(Serve);
const countdown = new Audio(Countdown);
const pop = new Audio(Pop);

const gameAudio = {
  bg,
  incorrect,
  serve,
  countdown,
  pop
};

Object.keys(gameAudio).forEach(key => {
  gameAudio[key].preload = "auto";
});

function useGameAudio(name, opt) {
  const [playing, toggle] = useState(false);
  const [audio] = useState(gameAudio[name]);

  if (opt) {
    Object.keys(opt).forEach(i => {
      audio[i] = opt[i];
    });
  }

  useEffect(() => {
    if (playing) {
      audio.play();
    } else audio.pause();
  }, [playing]);

  function playOnEveryInteraction(other) {
    const clonedAudio = (gameAudio[other] || audio).cloneNode();
    clonedAudio.play();
  }

  function restartAudio() {
    audio.currentTime = 0;
  }

  function toggleAudio() {
    toggle(!playing);
  }

  return [
    playing,
    { toggle, playOnEveryInteraction, restartAudio, toggleAudio }
  ];
}

export default useGameAudio;
