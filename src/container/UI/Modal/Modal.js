import React from "react";
import cssmodule from "../Modal/Modal.module.css";
const Modal = (props) => (
  <div className={cssmodule.Modal}>{props.children}</div>
);

export default Modal;
