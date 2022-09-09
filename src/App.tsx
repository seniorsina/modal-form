import { useState } from "react";
import "./App.css";
import Modal from "./component/Modal";

function App() {
  const [show, setShow] = useState(false);
  //const [onClose, setClose] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        show modal
      </button>
      <Modal
        title="Fuck you babe"
        onBackgroundClick={() => setShow(false)}
        onClose={() => setShow(false)}
        show={show}
      >
        <p>thi is a fucking body</p>
      </Modal>
    </div>
  );
}

export default App;
