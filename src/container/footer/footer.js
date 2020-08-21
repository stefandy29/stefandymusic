import React, { Component } from "react";
import cssmodule from "../footer/footer.module.css";
class Footer extends Component {
  render() {
    return (
      <div className={cssmodule}>
        <footer>
          <div className="footer_container">
            © 2020 Ste Fandy || <a>stefandy31@gmail.com</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
