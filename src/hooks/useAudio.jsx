import { useState, useEffect } from "react";

function useAudio(url, opt) {
  const [audio] = useState(new Audio(url));
  const [errorAudio] = useState(new Audio(require("./../audio/wrong.mp3")));
  const [playing, setPlaying] = useState(false);

  audio.preload = "auto";
  errorAudio.preload = "auto";

  if (opt) {
    let optArray = Object.keys(opt);

    optArray.forEach(i => {
      audio[i] = opt[i];
    });
  }

  function restartAudio() {
    audio.currentTime = 0;
  }

  function toggle() {
    setPlaying(!playing);
  }

  function playAudio() {
    let _audio = audio.cloneNode();
    _audio.play();
  }

  function playErrorAudio() {
    let _errorAudio = errorAudio.cloneNode();
    _errorAudio.play();
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  return [playing, { toggle, playAudio, playErrorAudio, restartAudio }];
}

export default useAudio;
