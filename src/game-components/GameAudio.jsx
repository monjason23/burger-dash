import { useState, useEffect } from "react";

function useAudio(url) {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  audio.preload = "auto";

  function toggle() {
    setPlaying(!playing);
  }

  function playAudio() {
    let _audio = new Audio(url);
    _audio.preload = "auto";
    _audio.play();
  }

  function playErrorAudio() {
    let _audio = new Audio(require("./../audio/wrong.mp3"));
    _audio.preload = "auto";
    _audio.play();
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  return [playing, { toggle, playAudio, playErrorAudio }];
}

export default useAudio;
