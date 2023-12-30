/* eslint-disable react/prop-types */
import "./ConfirmationModal.css";

import { useAdmin } from "../../Context/AdminContext";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  const { projectTrue, eventTrue } = useAdmin();
  return (
    <div className="confirmation-modal">
      <p>{message}</p>
      <button onClick={onConfirm}>
        Excluir {projectTrue && !eventTrue ? "Projeto" : "Evento"}
      </button>
      <button onClick={onCancel}>Não Excluir</button>
    </div>
  );
};

export default ConfirmationModal;
