/* eslint-disable react-hooks/rules-of-hooks */
import "./panelAdmProjects.css";

import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import useToast from "../../hooks/useToast";
import { DelToken } from "../../utils/storage";
import api from "../../api/fetchApi";
import { useAdmin } from "../../Context/AdminContext";
import CreateProjects from "../../components/CreateProjects/createProjects";
import EditProjects from "../../components/EditProjects/editProjects";

const PanelAdmProjects = () => {
  const { projectTrue, switchToEvents } = useAdmin();
  const [showConfirm, setShowConfirm] = useState(false);
  const [projectIdToDelete, setProjectIdToDelete] = useState(null);

  const [createProject, setcreateProject] = useState(false);
  const [editProject, setEditProject] = useState(false);
  const [deleteProject, setDeleteProject] = useState(false);
  const [panelProject, setPanelProject] = useState(false);
  const [projectsData, setProjectsData] = useState([]);

  const [messageError, setMessageError] = useState("");
  const [resultError, setResultError] = useState(false);

  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const response = await api.get("/projects");

      setProjectsData(response.data);
      setPanelProject(true);
      setcreateProject(false);
      setEditProject(false);
      setDeleteProject(false);

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
    fetchProjects();
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();

    setPanelProject(false);
    setcreateProject(true);
    setEditProject(false);
    setDeleteProject(false);
  };

  const handleEdit = (id) => {
    navigate(`/adm/editproject/${id}`);
    setPanelProject(false);
    setcreateProject(false);
    setEditProject(true);
    setDeleteProject(false);
  };

  const handleDelete = (projectId) => {
    navigate(`/adm/deleteproject/${projectId}`);

    setProjectIdToDelete(projectId);
    setShowConfirm(true);
    setPanelProject(false);
    setcreateProject(false);
    setEditProject(false);
    setDeleteProject(true);
  };

  const confirmDelete = async () => {
    navigate(`/adm/project`);

    setShowConfirm(false);
    setPanelProject(false);
    setcreateProject(false);
    setEditProject(false);
    setDeleteProject(false);

    try {
      const response = await api.delete(`/projects/${projectIdToDelete}`);

      useToast(response.data.mensagem);

      fetchProjects();
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

    navigate(`/adm/project`);
    setPanelProject(true);
    setcreateProject(false);
    setEditProject(false);
    setDeleteProject(false);
    fetchProjects();
  };

  const handleLogout = () => {
    DelToken();
    navigate("/login");
  };

  const handleProjects = () => {
    switchToEvents();
    navigate("/adm");
  };

  const handleGallery = () => {
    navigate("/admGallery");
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
          <h1 onClick={handleProjects}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Painel de Eventos
          </h1>
        </div>

        <div style={{ marginTop: "10px" }} id="to-projects">
          <h1 onClick={handleGallery}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Painel de Galeria
          </h1>
        </div>

        <h1 className="payment-card-title">
          <FontAwesomeIcon icon={faCalendarDay} /> Painel Administrativo -{" "}
          {projectTrue ? "Projetos" : "Eventos"}
        </h1>

        <form id="panel-form">
          <div className="button-panel">
            <button
              style={{
                display:
                  createProject ||
                  editProject ||
                  deleteProject ||
                  projectsData.length <= 0
                    ? "none"
                    : "block",
              }}
              className="btn-create"
              onClick={handleCreate}
            >
              Criar Projeto
            </button>

            <button
              style={{
                display:
                  panelProject || projectsData.length <= 0 ? "none" : "block",
              }}
              className="btn-back"
              onClick={handleBack}
            >
              Voltar para Painel
            </button>
          </div>
          {projectsData.length <= 0 ? (
            <div className="not-event">
              <button onClick={handleBack}>
                <NavLink to="/adm/project">Ir para o painel...</NavLink>
              </button>
              <p>
                Sem projetos cadastrados...Crie um novo projeto abaixo e volte
                para o painel.
              </p>

              <CreateProjects />
            </div>
          ) : panelProject ? (
            <>
              <h2 className="title-panel">Projetos Cadastrados</h2>
              <div className="card-events">
                <div className="card-events-content">
                  {projectsData.map((projectData) => (
                    <div className="content-panel" key={projectData._id}>
                      <h2 className="title-panel-e">
                        {projectData.titleProject}
                      </h2>
                      <figure>
                        <img
                          className="image-event"
                          src={projectData.imagem.url}
                          alt={projectData.titleProject}
                        />
                      </figure>

                      <div className="info-events">
                        <span>Data: {projectData.dayProject}</span>
                        <span>de {projectData.monthProject}</span>
                        <span>de {projectData.yearProject}</span>
                        <span>Local: {projectData.localProject}</span>
                      </div>
                      <div className="info-projects">
                        <span>Meta: R$ {projectData.goalProject}</span>
                        <span>
                          Arrecadado: R$ {projectData.collectedProject}
                        </span>
                      </div>

                      <div className="info-projects">
                        <span>
                          {" "}
                          Alcançado:{" "}
                          {(
                            (projectData.collectedProject /
                              projectData.goalProject) *
                            100
                          ).toFixed(2)}
                          %
                        </span>
                      </div>

                      <div className="event-description">
                        <h3>Descrição do Evento</h3>
                        <p>{projectData.descriptionProject}</p>
                      </div>
                      <div>
                        <button
                          className="btn-panel"
                          onClick={() => handleEdit(projectData._id)}
                        >
                          Editar Projeto
                        </button>

                        <button
                          className="btn-panel"
                          onClick={() => handleDelete(projectData._id)}
                        >
                          Excluir Projeto
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : createProject ? (
            <div>
              <CreateProjects />
            </div>
          ) : editProject ? (
            <div>
              <EditProjects />
            </div>
          ) : showConfirm ? (
            <ConfirmationModal
              message="Tem certeza que deseja excluir o Projeto? Essa ação não poderá ser desfeita!"
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

export default PanelAdmProjects;
