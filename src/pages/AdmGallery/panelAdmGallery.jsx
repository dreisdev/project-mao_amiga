/* eslint-disable react-hooks/rules-of-hooks */
import "./panelAdmGallery.css";

import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import NewEvent from "../../components/NewsPhotos/newEventPhoto";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import useToast from "../../hooks/useToast";
import { DelToken } from "../../utils/storage";
import api from "../../api/fetchApi";

const PanelGalleryAdm = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [eventIdToDelete, setEventIdToDelete] = useState(null);

  const [createEvent, setcreateEvent] = useState(false);
  const [deleteEvent, setDeleteEvent] = useState(false);
  const [panelEvent, setPanelEvent] = useState(false);
  const [eventsData, setEventsData] = useState([]);

  const [messageError, setMessageError] = useState("");
  const [resultError, setResultError] = useState(false);

  const navigate = useNavigate();

  const fetchPhotos = async () => {
    try {
      const response = await api.get("/gallery");

      setEventsData(response.data);
      setPanelEvent(true);
      setcreateEvent(false);
      setDeleteEvent(false);

      setResultError(false);
    } catch (error) {
      console.log(error);
      console.error(
        "Erro ao fazer a solicitação:",
        error.response.data.mensagem
      );
      setResultError(true);
      setMessageError(error.response.data.mensagem);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();

    setPanelEvent(false);
    setcreateEvent(true);
    setDeleteEvent(false);
  };

  const handleDelete = (eventId) => {
    navigate(`/admGallery/deletephotos/${eventId}`);

    setEventIdToDelete(eventId);
    setShowConfirm(true);
    setPanelEvent(false);
    setcreateEvent(false);

    setDeleteEvent(true);
  };

  const confirmDelete = async () => {
    navigate(`/admGallery`);

    setShowConfirm(false);
    setPanelEvent(false);
    setcreateEvent(false);

    setDeleteEvent(false);

    try {
      const response = await api.delete(`/gallery/${eventIdToDelete}`);

      useToast(response.data.mensagem);

      fetchPhotos();
    } catch (error) {
      console.log({ "Não está fazendo a chamada": error });
      useToast(error.response);
    }
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  const handleBack = (e) => {
    e.preventDefault();

    navigate(`/admGallery`);
    setPanelEvent(true);
    setcreateEvent(false);

    setDeleteEvent(false);
    fetchPhotos();
  };

  const handleLogout = () => {
    DelToken();
    navigate("/login");
  };

  const handleProjects = () => {
    navigate("/adm/project");
  };

  const handleEvents = () => {
    navigate("/adm");
  };

  return (
    <>
      <section className="panel-section">
        <div className="logout">
          <h1 className="payment-card-title" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Sair
          </h1>
        </div>

        <div id="to-projects">
          <h1 onClick={handleEvents}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Painel de Eventos
          </h1>
        </div>

        <div style={{ marginTop: "10px" }} id="to-projects">
          <h1 onClick={handleProjects}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Painel de Projetos
          </h1>
        </div>

        <h1 className="payment-card-title">
          <FontAwesomeIcon icon={faCalendarDay} /> Painel Administrativo -
          Galeria
        </h1>

        <form id="panel-form">
          <div className="button-panel">
            <button
              style={{
                display:
                  createEvent || deleteEvent || eventsData.length <= 0
                    ? "none"
                    : "block",
              }}
              className="btn-create"
              onClick={handleCreate}
            >
              Enviar Fotos
            </button>

            <button
              style={{
                display:
                  panelEvent || eventsData.length <= 0 ? "none" : "block",
              }}
              className="btn-back"
              onClick={handleBack}
            >
              Voltar para Painel
            </button>
          </div>
          {eventsData.length <= 0 ? (
            <div className="not-event">
              <button onClick={handleBack}>
                <NavLink to="/adm">Ir para o painel...</NavLink>
              </button>
              <p>
                Sem eventos cadastrados...Crie um novo evento abaixo e volte
                para o painel.
              </p>

              <NewEvent />
            </div>
          ) : panelEvent ? (
            <>
              <h2 className="title-panel">Fotos na Galeria</h2>
              <div className="card-events">
                <div className="card-events-content">
                  {eventsData.map((eventData) => (
                    <div className="content-panel-gallery" key={eventData._id}>
                      <h2 className="title-panel-e">{eventData.titleEvent}</h2>
                      <figure className="image-galley">
                        {eventData.imagens.map((imagem) => (
                          <img
                            className="image-event"
                            key={imagem._id}
                            src={imagem.url}
                            alt={eventData.titleEvent}
                          />
                        ))}
                      </figure>

                      <div className="event-description">
                        <h3>Descrição do Evento</h3>
                        <p>{eventData.contentEvent}</p>
                      </div>
                      <div>
                        <button
                          className="btn-panel"
                          onClick={() => handleDelete(eventData._id)}
                        >
                          Excluir Fotos
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : createEvent ? (
            <div>
              <NewEvent />
            </div>
          ) : showConfirm ? (
            <ConfirmationModal
              message="Tem certeza que deseja excluir as Fotos? Essa ação não poderá ser desfeita!"
              onConfirm={confirmDelete}
              onCancel={cancelDelete}
            />
          ) : resultError ? (
            <div className="btn-back-home">{messageError}</div>
          ) : null}
        </form>
      </section>
    </>
  );
};

export default PanelGalleryAdm;
