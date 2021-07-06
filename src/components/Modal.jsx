import React from "react";
import ReactDOM from "react-dom";
import Close from "../images/icon-close.svg";
import Rules from "../images/image-rules.svg";

const Modal = ({ toggle }) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src={Close} alt="Close" srcSet="" />
          </button>
        </div>
        <img src={Rules} alt="Rules" srcSet="" />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
