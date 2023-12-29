/* eslint-disable react-hooks/rules-of-hooks */
import "./editEvents.css";

import { useEffect, useState } from "react";
import api from "../../api/fetchApi";
import { NavLink, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import useToast from "../../hooks/useToast";

const EditEvents = () => {
  const { id } = useParams();

  const [titleEvent, setTitleEvent] = useState("");
  const [dayEvent, setDayEvent] = useState("");
  const [monthEvent, setMonthEvent] = useState("");
  const [yearEvent, setYearEvent] = useState("");
  const [localEvent, setLocalEvent] = useState("");
  const [contentEvent, setContentEvent] = useState("");
  const [imagem, setImagem] = useState(null);
  const [messageError, setMessageError] = useState("");
  const [resultError, setResultError] = useState(false);
  const [resultLogin, setResultLogin] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/events/${id}`);
        const eventData = response.data;

        setTitleEvent(eventData.titleEvent);
        setDayEvent(eventData.dayEvent);
        setMonthEvent(eventData.monthEvent);
        setYearEvent(eventData.yearEvent);
        setLocalEvent(eventData.localEvent);
        setContentEvent(eventData.contentEvent);
      } catch (error) {
        console.error("Erro ao buscar dados do evento:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("titleEvent", titleEvent);
      formData.append("dayEvent", dayEvent);
      formData.append("monthEvent", monthEvent);
      formData.append("yearEvent", yearEvent);
      formData.append("localEvent", localEvent);
      formData.append("contentEvent", contentEvent);
      formData.append("imagem", imagem);

      const response = await api.put(`/events/${id}`, formData);

      setResultLogin(true);
      setMessageSuccess(response.data.mensagem);
      useToast(response.data.mensagem);
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

  return (
    <>
      <section className="panel-section-create">
        <h1 id="panel-title-h1">
          <FontAwesomeIcon icon={faCalendarDay} /> Edição
        </h1>

        <form id="panel-form-create">
          <label htmlFor="titleEvent">Título do Evento:</label>
          <input
            id="titleEvent"
            value={titleEvent}
            onChange={(e) => setTitleEvent(e.target.value)}
            required
          />

          <label htmlFor="dayEvent">Dia do Evento</label>
          <input
            id="dayEvent"
            value={dayEvent}
            onChange={(e) => setDayEvent(e.target.value)}
            required
          />

          <label htmlFor="monthEvent">Mês do Evento</label>
          <input
            id="monthEvent"
            value={monthEvent}
            onChange={(e) => setMonthEvent(e.target.value)}
            required
          />

          <label htmlFor="yearEvent">Ano do Evento</label>
          <input
            id="yearEvent"
            value={yearEvent}
            onChange={(e) => setYearEvent(e.target.value)}
            required
          />

          <label htmlFor="localEvent">Local do Evento</label>
          <input
            id="localEvent"
            value={localEvent}
            onChange={(e) => setLocalEvent(e.target.value)}
            required
          />

          <label htmlFor="contentEvent">Descrição do Evento</label>
          <textarea
            className="message-events"
            id="contentEvent"
            value={contentEvent}
            placeholder="Descreva o Evento"
            onChange={(e) => setContentEvent(e.target.value)}
            required
          ></textarea>

          <label htmlFor="imageEvent">Selecione uma Imagem</label>
          <input
            id="imageEvent"
            type="file"
            onChange={(e) => setImagem(e.target.files[0])}
            required
          />

          {resultError ? (
            <div>{messageError}</div>
          ) : resultLogin ? (
            <button className="btn-back-home">
              <NavLink className="style-btn-back-home">
                {messageSuccess}
              </NavLink>
            </button>
          ) : null}

          <button className="btn-pay" onClick={handleSubmit}>
            Atualizar o Evento
          </button>
        </form>
      </section>
    </>
  );
};

export default EditEvents;
