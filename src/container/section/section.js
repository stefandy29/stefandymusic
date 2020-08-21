import React, { Component } from "react";
import cssmodule from "../section/section.module.css";
class Section extends Component {
  render() {
    return (
      <div className={cssmodule.section}>
        <h1 className={cssmodule.section_name}>Ste Fandy Music</h1>
        <p className={cssmodule.section_p}>
          Hi, My name is Stefandy, i'm composer. I will write music to accompany
          your game, movie, or commercial. My favorite composer is Joe Hisaishi
          because i love Ghibli movies, and his soundtrack is like a magic, and
          he is the reason why i decided to become composer.
        </p>
        <blockquote className={cssmodule.section_q}>
          Imagination creates reality.
          <figcaption style={{ fontStyle: "normal" }}>
            Richard Wagner
          </figcaption>
        </blockquote>
      </div>
    );
  }
}

export default Section;
