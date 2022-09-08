import { JsxTagNameExpression } from "typescript";
import "../component/Modal.css";

type ModalProps = {
  show?: Boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Modal = ({ show, onClose }: ModalProps) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
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
