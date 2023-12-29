/* eslint-disable react-hooks/rules-of-hooks */
import "./panelAdm.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import CreateEvents from "../../components/CreateEvents/createEvents";
import EditEvents from "../../components/EditEvents/editEvents";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import useToast from "../../hooks/useToast";
import { DelToken } from "../../utils/storage";

const PanelAdm = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [eventIdToDelete, setEventIdToDelete] = useState(null);

  const [createEvent, setcreateEvent] = useState(false);
  const [editEvent, setEditEvent] = useState(false);
  const [deleteEvent, setDeleteEvent] = useState(false);
  const [panelEvent, setPanelEvent] = useState(false);
  const [eventsData, setEventsData] = useState([]);

  const [messageError, setMessageError] = useState("");
  const [resultError, setResultError] = useState(false);

  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "https://server-maoamiga-api.cyclic.app/events"
      );

      setEventsData(response.data);
      setPanelEvent(true);
      setcreateEvent(false);
      setEditEvent(false);
      setDeleteEvent(false);

      console.log(response);

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
    fetchEvents();
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();

    setPanelEvent(false);
    setcreateEvent(true);
    setEditEvent(false);
    setDeleteEvent(false);
    console.log(showConfirm);
  };

  const handleEdit = (id) => {
    navigate(`/adm/editevent/${id}`);
    setPanelEvent(false);
    setcreateEvent(false);
    setEditEvent(true);
    setDeleteEvent(false);
    console.log(showConfirm);
  };

  const handleDelete = (eventId) => {
    navigate(`/adm/deleteevent/${eventId}`);
    console.log("Delete chamada com id1:", eventId);
    setEventIdToDelete(eventId);
    setShowConfirm(true);
    setPanelEvent(false);
    setcreateEvent(false);
    setEditEvent(false);
    setDeleteEvent(true);
  };

  const confirmDelete = async () => {
    navigate(`/adm`);

    setShowConfirm(false);
    setPanelEvent(false);
    setcreateEvent(false);
    setEditEvent(false);
    setDeleteEvent(false);

    try {
      const response = await axios.delete(
        `https://server-maoamiga-api.cyclic.app/events/${eventIdToDelete}`
      );

      useToast(response.data.mensagem);

      fetchEvents();

      console.log(response.data);
    } catch (error) {
      console.log({ "Não está fazendo a chamada": error });
      useToast(error.response.data.mensagem);
    }
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  const handleBack = (e) => {
    e.preventDefault();

    navigate(`/adm`);
    setPanelEvent(true);
    setcreateEvent(false);
    setEditEvent(false);
    setDeleteEvent(false);
    fetchEvents();
  };

  const handleLogout = () => {
    DelToken();
    navigate("/login");
  };

  return (
    <>
      <section className="panel-section">
        <div className="logout">
          <h1 className="payment-card-title" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Sair
          </h1>
        </div>

        <h1 className="payment-card-title">
          <FontAwesomeIcon icon={faCalendarDay} /> Painel Administrativo
        </h1>

        <form id="panel-form">
          <div className="button-panel">
            <button
              style={{
                display:
                  createEvent ||
                  editEvent ||
                  deleteEvent ||
                  eventsData.length <= 0
                    ? "none"
                    : "block",
              }}
              className="btn-create"
              onClick={handleCreate}
            >
              Criar Evento
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

              <CreateEvents />
            </div>
          ) : panelEvent ? (
            <>
              <h2 className="title-panel">Eventos Cadastrados</h2>
              <div className="card-events">
                <div className="card-events-content">
                  {eventsData.map((eventData) => (
                    <div className="content-panel" key={eventData._id}>
                      <h2 className="title-panel-e">{eventData.titleEvent}</h2>
                      <figure>
                        <img
                          className="image-event"
                          src={eventData.imagem.url}
                          alt={eventData.titleEvent}
                        />
                      </figure>

                      <div className="info-events">
                        <span>Data: {eventData.dayEvent}</span>
                        <span>de {eventData.monthEvent}</span>
                        <span>de {eventData.yearEvent}</span>
                        <span>Local: {eventData.localEvent}</span>
                      </div>
                      <div className="event-description">
                        <h3>Descrição do Evento</h3>
                        <p>{eventData.contentEvent}</p>
                      </div>
                      <div>
                        <button
                          className="btn-panel"
                          onClick={() => handleEdit(eventData._id)}
                        >
                          Editar Evento
                        </button>

                        <button
                          className="btn-panel"
                          onClick={() => handleDelete(eventData._id)}
                        >
                          Excluir Evento
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : createEvent ? (
            <div>
              <CreateEvents />
            </div>
          ) : editEvent ? (
            <div>
              <EditEvents />
            </div>
          ) : showConfirm ? (
            <ConfirmationModal
              message="Tem certeza que deseja excluir o Evento? Essa ação não poderá ser desfeita!"
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

export default PanelAdm;
