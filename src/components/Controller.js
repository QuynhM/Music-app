import React from "react";
import { useMusicPlayer } from "../hooks/useMusicPlayer";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

const Controller = () => {
  const { togglePlay, isPlaying, playPreviousTrack, playNextTrack } =
    useMusicPlayer();

  return (
    <div className="controller">
      <button onClick={playPreviousTrack}>
        <SkipPreviousIcon />
      </button>
      <button onClick={togglePlay}>
        {isPlaying ? <PauseCircleFilledIcon /> : <PlayCircleFilledWhiteIcon />}
      </button>
      <button onClick={playNextTrack}>
        <SkipNextIcon />
      </button>
    </div>
  );
};

export default Controller;
