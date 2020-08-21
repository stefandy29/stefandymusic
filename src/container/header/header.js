import React, { Component } from "react";
import cssmodule from "../header/header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={cssmodule.headers}>
        <nav className="title_container">
          <ul className={cssmodule.titleshow}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="mailto:stefandy31@gmail.com">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
