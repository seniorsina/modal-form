import React from "react";
import { JsxTagNameExpression } from "typescript";
import "../component/Modal.css";

type ModalProps = {
  show?: Boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  OnClickBackground: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const Modal = ({ show, onClose, OnClickBackground }: ModalProps) => {
  if (!show) {
    return null;
  }

  const CloseOnEscapeKeyDown = (e: React.KeyboardEvent) => {
    if (e.charCode) {
    }
  };

  return (
    <div className="modal" onClick={OnClickBackground}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">title</h4>
        </div>
        <div className="modal-body">this is modal content</div>
        <div className="modal-footer">
          <button className="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
