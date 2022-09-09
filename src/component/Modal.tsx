import "../component/Modal.css";
import { CSSTransition } from "react-transition-group";
import ReactDom from "react-dom";
type ModalProps = {
  show?: boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onBackgroundClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  title: string;
  children: JSX.Element;
};

//Modal Component
const Modal = ({
  show,
  onClose,
  onBackgroundClick,
  title,
  children,
}: ModalProps) => {
  const CloseOnEscapeKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.code);
    if (e.key == "VK_ESCAPE" || e.key == "kVK_Escape ") {
      {
        console.log("exit");
      }
    }
  };

  return ReactDom.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="modal" onClick={onBackgroundClick}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button className="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")!
  );
};

export default Modal;
