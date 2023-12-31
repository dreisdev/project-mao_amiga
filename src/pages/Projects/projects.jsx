import "./projects.css";

import { useEffect, useState } from "react";

import { dataActivities } from "../../Data/dataGeral";

import { Swiper, SwiperSlide } from "swiper/react";

import api from "../../api/fetchApi";

import Modal from "../../components/Modal/modal";

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardMobile, setCardMobile] = useState(4);
  const [spaceCard, setSpaceCard] = useState(10);

  const [projectsData, setProjectsData] = useState([]);

  const [selectedProject, setSelectedProject] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (projectId) => {
    const foundProject = projectsData.find(
      (project) => project._id === projectId
    );

    setSelectedProject(foundProject);

    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);

    setSelectedProject(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleSlideView = () => {
      if (windowWidth <= 500) {
        setCardMobile(1);
        setSpaceCard(200);
      } else if (windowWidth > 501 && windowWidth < 968) {
        setCardMobile(2);
        setSpaceCard(200);
      } else if (windowWidth > 1000 && windowWidth <= 1366) {
        setCardMobile(4);
        setSpaceCard(370);
      } else {
        setCardMobile(5);
        setSpaceCard(0);
      }
    };

    handleSlideView();

    return handleSlideView;
  }, [windowWidth]);

  const fetchProjects = async () => {
    try {
      const response = await api.get("/projects");

      setProjectsData(response.data);
    } catch (error) {
      console.error(
        "Erro ao fazer a solicitação:",
        error.response.data.mensagem
      );
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="container-projects">
      <section className="banner-project">
        <div className="text-project">
          <h1 className="text-project-content">Projetos</h1>
        </div>
      </section>

      <section className="main-projects">
        <div className="box-projects-active">
          <div className="title-projects">
            {" "}
            <h1> Projetos em Destaque </h1>{" "}
          </div>

          <div className="box-projects-content">
            {projectsData.length <= 0 ? (
              <div>
                <p>Não há projetos no momento...</p>
              </div>
            ) : (
              projectsData.map((projectData) => (
                <div className="content-events-project" key={projectData._id}>
                  <img
                    className="image-projects"
                    src={projectData.imagem.url}
                    alt={projectData.titleProject}
                  />

                  <div className="box-content-events-projects">
                    <h2 className="title-events-projects">
                      {projectData.titleProject}
                    </h2>

                    <span className="date-events">
                      {projectData.dayProject} de {projectData.monthProject} de{" "}
                      {projectData.yearProject}
                    </span>

                    <span> | </span>

                    <span className="local-events">
                      {projectData.localProject}
                    </span>

                    <div className="donate-events-projects">
                      <p className="donate-text">
                        {projectData.descriptionProject}
                      </p>

                      <button
                        className="donate-btn-projects"
                        onClick={() => openModal(projectData._id)}
                      >
                        Conheça mais o projeto!
                      </button>

                      <Modal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        image={
                          selectedProject ? selectedProject.imagem.url : ""
                        }
                        title={
                          selectedProject ? selectedProject.titleProject : ""
                        }
                        content={
                          selectedProject
                            ? selectedProject.descriptionProject
                            : ""
                        }
                        projectGoal={
                          selectedProject ? selectedProject.goalProject : ""
                        }
                        collectedProject={
                          selectedProject
                            ? selectedProject.collectedProject
                            : ""
                        }
                        reachedProject={
                          selectedProject
                            ? `${(
                                (selectedProject.collectedProject /
                                  selectedProject.goalProject) *
                                100
                              ).toFixed(2)}%`
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <div className="title-our-projects">
        {" "}
        <h1> Nossos Projetos </h1>{" "}
      </div>

      <section className="cards-container">
        <Swiper
          className="swiper-cards"
          slidesPerView={cardMobile}
          spaceBetween={spaceCard}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {dataActivities.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="cards-projects">
                <figure>
                  <img className="figure-cards" src={item.image} alt="img-1" />
                </figure>

                <div className="title">
                  <h3>{item.title}</h3>
                </div>

                <div className="content">
                  <p>{item.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Projects;
