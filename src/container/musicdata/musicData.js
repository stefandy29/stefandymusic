import React from "react";
import ReactPlayer from "react-player";
import cssmodule from "../musicdata/musicData.module.css";
const musicData = () => (
  <div className={cssmodule.musicList}>
    <h1>My Music</h1>
    <div className={cssmodule.musicData}>
      <ReactPlayer
        url="https://soundcloud.com/ste-fandy/firelink-shrine"
        width="100%"
        height="120px"
      />
      <figcaption>Emotional, Orchestra, Strings</figcaption>
    </div>

    <div className={cssmodule.musicData}>
      <ReactPlayer
        url="https://soundcloud.com/ste-fandy/knight-of-darkness"
        width="100%"
        height="120px"
        volume="0.6"
      />
      <figcaption>Epic, Battle, Cinematic</figcaption>
    </div>

    <div className={cssmodule.musicData}>
      <ReactPlayer
        url="https://soundcloud.com/ste-fandy/project-rpg2-main-theme"
        width="100%"
        height="120px"
      />
      <figcaption>Ethnic, Ambient, Orchestra</figcaption>
    </div>
    <div className={cssmodule.musicData}>
      <ReactPlayer
        url="https://soundcloud.com/ste-fandy/festival-in-small-town"
        width="100%"
        height="120px"
        volume="0.8"
      />
      <figcaption>RPG Town, Orchestra</figcaption>
    </div>

    <div className={cssmodule.musicData}>
      <ReactPlayer
        url="https://soundcloud.com/ste-fandy/time-will-heal-your-sorrow"
        width="100%"
        height="120px"
      />
      <figcaption>Piano, Emotional</figcaption>
    </div>

    <div className={cssmodule.musicData}>
      <ReactPlayer
        url="https://soundcloud.com/ste-fandy/lost-tower"
        width="100%"
        height="120px"
      />
      <figcaption>16Bit, SNES Music</figcaption>
    </div>

    <div className={cssmodule.musicData}>
      <ReactPlayer
        url="https://soundcloud.com/ste-fandy/loading-screen-1"
        width="100%"
        height="120px"
        volume="0.4"
      />
      <figcaption>8Bit, Upbeat</figcaption>
    </div>
  </div>
);

export default musicData;
