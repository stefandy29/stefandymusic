import React, { Component } from "react";
import Child from "../UI/Child";
import ReactBandcamp from "react-bandcamp";
import cssmodule from "../bandcamp/bandCamp.module.css";
class BandCamp extends Component {
  render() {
    return (
      <Child>
        <div cssmodule={cssmodule.Player}>
          <h1>My Album</h1>
          <div className={cssmodule.Bandcamp}>
            <ReactBandcamp
              album="https://bandcamp.com/EmbeddedPlayer/album=3854994524/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
              width="100%"
              height="310px"
              artwork="small"
            />
            <figcaption>Orchestra, Emotional</figcaption>
          </div>

          <div className={cssmodule.Bandcamp}>
            <ReactBandcamp
              album="https://bandcamp.com/EmbeddedPlayer/album=3705637899/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
              width="100%"
              height="310px"
              artwork="small"
            />
            <figcaption>Ethnic, Orchestra, Battle, Epic, Ambient</figcaption>
          </div>
        </div>
      </Child>
    );
  }
}

export default BandCamp;
