/* eslint-disable react-hooks/rules-of-hooks */
import "./editProjects.css";

import { useEffect, useState } from "react";
import api from "../../api/fetchApi";
import { NavLink, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import useToast from "../../hooks/useToast";

const EditProjects = () => {
  const { id } = useParams();

  const [titleProject, setTitleProject] = useState("");
  const [dayProject, setDayProject] = useState("");
  const [monthProject, setMonthProject] = useState("");
  const [yearProject, setYearProject] = useState("");
  const [localProject, setLocalProject] = useState("");
  const [descriptionProject, setDescriptionProject] = useState("");
  const [goalProject, setGoalProject] = useState(0);
  const [collectedProject, setCollectedProject] = useState(0);
  const [imagem, setImagem] = useState(null);
  const [messageError, setMessageError] = useState("");
  const [resultError, setResultError] = useState(false);
  const [resultLogin, setResultLogin] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/projects/${id}`);
        const projectData = response.data;

        setTitleProject(projectData.titleProject);
        setDayProject(projectData.dayProject);
        setMonthProject(projectData.monthProject);
        setYearProject(projectData.yearProject);
        setLocalProject(projectData.localProject);
        setDescriptionProject(projectData.descriptionProject);
        setGoalProject(projectData.goalProject);
        setCollectedProject(projectData.collectedProject);
      } catch (error) {
        console.error("Erro ao buscar dados do projeto:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("titleProject", titleProject);
      formData.append("dayProject", dayProject);
      formData.append("monthProject", monthProject);
      formData.append("yearProject", yearProject);
      formData.append("localProject", localProject);
      formData.append("descriptionProject", descriptionProject);
      formData.append("goalProject", goalProject);
      formData.append("collectedProject", collectedProject);
      formData.append("imagem", imagem);

      const response = await api.put(`/projects/${id}`, formData);

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
          <label htmlFor="titleProject">Nome do Projeto:</label>
          <input
            id="titleProject"
            value={titleProject}
            onChange={(e) => setTitleProject(e.target.value)}
            required
          />

          <label htmlFor="dayProject">Data de criação do Projeto</label>
          <input
            id="dayProject"
            value={dayProject}
            onChange={(e) => setDayProject(e.target.value)}
            required
          />

          <label htmlFor="monthProject">Mês do Projeto</label>
          <input
            id="monthProject"
            value={monthProject}
            onChange={(e) => setMonthProject(e.target.value)}
            required
          />

          <label htmlFor="yearProject">Ano do Projeto</label>
          <input
            id="yearProject"
            value={yearProject}
            onChange={(e) => setYearProject(e.target.value)}
            required
          />

          <label htmlFor="localProject">Local do Projeto</label>
          <input
            id="localProject"
            value={localProject}
            onChange={(e) => setLocalProject(e.target.value)}
            required
          />

          <label htmlFor="descriptionProject">Descrição do Projeto</label>
          <textarea
            className="message-events"
            id="descriptionProject"
            value={descriptionProject}
            placeholder="Descreva o Projeto"
            onChange={(e) => setDescriptionProject(e.target.value)}
            required
          ></textarea>

          <label htmlFor="goalProject">Meta do Projeto</label>
          <input
            id="goalProject"
            value={goalProject}
            onChange={(e) => setGoalProject(e.target.value)}
            required
          />

          <label htmlFor="collectedProject">Arrecadado</label>
          <input
            id="collectedProject"
            value={collectedProject}
            onChange={(e) => setCollectedProject(e.target.value)}
            required
          />

          <label htmlFor="imageProject">Selecione uma Imagem</label>
          <input
            id="imageProject"
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
            Atualizar o Projeto
          </button>
        </form>
      </section>
    </>
  );
};

export default EditProjects;
