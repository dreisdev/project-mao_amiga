/* eslint-disable react/prop-types */
import './modal.css';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-button">
                    Fechar
                </button>
                <p>Conteúdo do Modal</p>
            </div>
        </div>
    );
};

export default Modal;