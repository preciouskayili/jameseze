import React from "react";
import "./assets/css/player.css";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const AudioPlayer = ({ songData }) => {
  const options = {
    // audio lists model
    audioLists: [
      {
        name: songData[0].name,
        cover: require(`./assets/img/${songData[0].cover}`).default,
        singer: songData[0].singer,
        musicSrc: require(`./assets/audio/${songData[0].musicSrc}`).default,
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
    responsive: false,

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
