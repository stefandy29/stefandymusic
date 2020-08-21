import React, { Component } from "react";
import Cover from "../../img/coverphoto.png";
import cssmodule from "../secphoto/secphoto.module.css";
class Secphoto extends Component {
  render() {
    return (
      <div className={cssmodule.cover}>
        <img src={Cover} />
      </div>
    );
  }
}

export default Secphoto;
