import React from "react";
import { useMusicPlayer } from "../hooks/useMusicPlayer";

const Header = () => {
  const { currentTrackName } = useMusicPlayer();

  return (
    <div className="header">
      <p>Now Playing: {currentTrackName}</p>
    </div>
  );
};

export default Header;
