import React from "react";
import "./Modal.css";

import Row from "../Row";

const Modal = (props) => {
  return (
    <div className={`modal ${props.show && "active"}`}>
      <button className="modal__button" onClick={props.toggleModal}>
        X
      </button>
      {props.ads.map((element) => (
        <Row ad={element} key={element.id} />
      ))}
    </div>
  );
};

export default Modal;
