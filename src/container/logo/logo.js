import React, { Component } from "react";
import cssmodule from "../logo/logo.module.css";
import Bc from "../../logoimg/bc.png";
import Sc from "../../logoimg/sc.png";
import Yb from "../../logoimg/yb.png";
import Fb from "../../logoimg/fb.png";

class Logo extends Component {
  render() {
    return (
      <div className={cssmodule.Logo}>
        <a href="http://stefandy.bandcamp.com/" target="_blank">
          <img src={Bc}></img>
        </a>
        <a href="http://soundcloud.com/ste-fandy" target="_blank">
          <img src={Sc}></img>
        </a>
        <a href="https://www.youtube.com/user/stefandy31/" target="_blank">
          <img src={Yb}></img>
        </a>
        <a href="https://www.facebook.com/pg/stefandy31" target="_blank">
          <img src={Fb}></img>
        </a>
      </div>
    );
  }
}

export default Logo;
