import React, { useState } from "react";
import "./assets/css/player.css";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const AudioPlayer = () => {
  const [track, setTrack] = useState("./assets/audio/Colorofmyskin.mp3");
  const options = {
    // audio lists model
    audioLists: [
      {
        cover: require("./assets/img/cover.jpg"),
        name: "Color of My Skin",
        musicSrc: require(`${track}`).default,
      },
    ],

    defaultPlayIndex: 0,
    theme: "auto",

    bounds: "body",

    quietUpdate: false,

    glassBg: true,

    defaultPosition: {
      right: 100,
      bottom: 120,
    },

    mode: "full",

    autoPlay: false,

    toggleMode: true,

    showMiniModeCover: true,

    showMiniProcessBar: false,

    drag: true,

    showMediaSession: true,

    showProgressLoadBar: true,

    showThemeSwitch: true,

    showDestroy: true,

    extendsContent: null,

    playModeShowTime: 600,

    // Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
    loadAudioErrorPlayNext: true,

    autoHiddenCover: false,

    responsive: true,

    mobileMediaQuery: "(max-width: 1024px)",

    // Audio volume with fade in and fade out [type `{ fadeIn: number, fadeOut: number }` default `{ fadeIn: 0, fadeOut: 0 }`]
    volumeFade: {
      fadeIn: 1000,
      fadeOut: 1000,
    },

    restartCurrentOnPrev: false,
  };
  return (
    <>
      <ReactJkMusicPlayer {...options} />
    </>
  );
};

export default AudioPlayer;