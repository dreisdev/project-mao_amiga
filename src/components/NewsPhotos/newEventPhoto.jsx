/* eslint-disable react-hooks/rules-of-hooks */
import "./newEventPhoto.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

import api from "../../api/fetchApi";
import useToast from "../../hooks/useToast";

const NewEventPhoto = () => {
  const [titleEvent, setTitleEvent] = useState("");
  const [contentEvent, setContentEvent] = useState("");
  const [imagens, setImagens] = useState(null);
  const [messageError, setMessageError] = useState("");
  const [resultError, setResultError] = useState(false);
  const [resultLogin, setResultLogin] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("titleEvent", titleEvent);
      formData.append("contentEvent", contentEvent);

      for (let i = 0; i < imagens.length; i++) {
        formData.append("imagens", imagens[i]);
      }

      const response = await api.post("/gallery", formData);

      setMessageSuccess(response.data.mensagem);

      useToast(response.data.mensagem);

      setResultLogin(true);
      setResultError(false);
      setTitleEvent("");
      setImagens("");
      setContentEvent("");
    } catch (error) {
      console.log(error);
      console.error("Erro ao fazer a solicitação:", error.response);
      setResultError(true);
      setMessageError(error.response);
    }
  };

  return (
    <>
      <section className="panel-section-create">
        <h1 id="panel-title-h1">
          <FontAwesomeIcon icon={faCalendarDay} /> Fotos
        </h1>

        <form id="panel-form-create">
          <label htmlFor="titleEvent">Título do Evento:</label>
          <input
            id="titleEvent"
            value={titleEvent}
            onChange={(e) => setTitleEvent(e.target.value)}
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
            onChange={(e) => setImagens(e.target.files)}
            multiple
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
            Adicionar Fotos
          </button>
        </form>
      </section>
    </>
  );
};

export default NewEventPhoto;
