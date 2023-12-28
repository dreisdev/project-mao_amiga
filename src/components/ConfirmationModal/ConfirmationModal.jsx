/* eslint-disable react/prop-types */
import "./ConfirmationModal.css";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirmation-modal">
      <p>{message}</p>
      <button onClick={onConfirm}>Excluir Evento</button>
      <button onClick={onCancel}>Não Excluir</button>
    </div>
  );
};

export default ConfirmationModal;
