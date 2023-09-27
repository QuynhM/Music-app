import React from "react";
import { useMusicPlayer } from "../hooks/useMusicPlayer";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

const TrackList = () => {
  const { trackList, playTrack, isPlaying, currentTrackIndex } =
    useMusicPlayer();

  return (
    <div className="track-list">
      {trackList.map((track, index) => (
        <button
          key={index}
          className="strack-btn "
          onClick={() => playTrack(index)}
        >
          {currentTrackIndex === index && isPlaying ? (
            <PauseCircleFilledIcon />
          ) : (
            <PlayCircleFilledWhiteIcon />
          )}
          <p className="song-title">{track.name}</p>
        </button>
      ))}
    </div>
  );
};
export default TrackList;
