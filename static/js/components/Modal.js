import React from "react";
import "../Modal.css";

function Modal(props) {
  // If the prop 'show' is false, don't render anything
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content"></div>
    </div>
  );
}

export default Modal;
