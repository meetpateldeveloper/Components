import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(true);
  };

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <div>
      <Button onClick={clickHandler} primary>
        Show Modal
      </Button>
      {toggle && (
        <Modal
          onClose={handleClose}
          actionBar={
            <Button onClick={handleClose} primary>
              Yes I do
            </Button>
          }
        >
          <p>Do you accept the cookies?</p>
        </Modal>
      )}
    </div>
  );
}

export default ModalPage;
