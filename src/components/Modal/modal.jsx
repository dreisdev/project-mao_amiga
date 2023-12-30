/* eslint-disable react/prop-types */
import "./modal.css";

const Modal = ({
  isOpen,
  onClose,
  title,
  content,
  projectGoal,
  collectedProject,
  reachedProject,
  image,
}) => {
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

        {projectGoal !== undefined && <p>Meta do Projeto: {projectGoal}</p>}

        {collectedProject !== undefined && (
          <p>Arrecadação do Projeto: {collectedProject}</p>
        )}

        {reachedProject !== undefined && (
          <p>Meta alcançada: {reachedProject}</p>
        )}

        {image !== undefined && <img className="image-modal" src={image} />}
      </div>
    </div>
  );
};

export default Modal;
