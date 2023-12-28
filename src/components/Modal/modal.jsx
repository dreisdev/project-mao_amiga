/* eslint-disable react/prop-types */
import "./modal.css";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">
          Fechar
        </button>

        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
