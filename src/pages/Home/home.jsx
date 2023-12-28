import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { dataImages, dataActivities } from "../../Data/dataGeral";

import History from "../../assets/history-bg-home.jpg";
import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

import Modal from "../../components/Modal/modal";

import ImageEvents_2 from "../../assets/featured-causes.jpg";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
import ImageRecord from "../../assets/criancas.png";
import Donation from "../../assets/doacao.png";
import Education from "../../assets/educacao.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faPix } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [eventsData, setEventsData] = useState([]);

  const openModal = (eventId) => {
    const foundEvent = eventsData.find((event) => event._id === eventId);

    setSelectedEvent(foundEvent);

    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);

    setSelectedEvent(null);
  };

  const raised = 5000;
  const goal = 8000;

  const now = (raised / goal) * 100;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardMobile, setCardMobile] = useState(4);
  const [spaceCard, setSpaceCard] = useState(10);

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

  const isNavigationEnabled = windowWidth >= 768;

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "https://server-maoamiga-api.cyclic.app/events"
      );

      setEventsData(response.data);
    } catch (error) {
      console.error(
        "Erro ao fazer a solicitação:",
        error.response.data.mensagem
      );
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="container-home">
      <div className="banner-home">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={isNavigationEnabled}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {dataImages.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="Slider" className="slide-item" />

              <div className="text-overlay">
                <span className="text-home">Faça uma doação</span>
              </div>

              <div className="text-overlay-2">
                <span className="text-home-2">
                  {" "}
                  Contribua com nossos projetos e faça uma criança feliz.
                  Escolha como deseja fazer a sua doação.
                </span>
              </div>
              <div className="buttons-overlay">
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faFileLines} />{" "}
                  <NavLink className="style-buttons-overlay" to="/boleto">
                    {" "}
                    Boleto{" "}
                  </NavLink>{" "}
                </button>
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faCreditCard} />{" "}
                  <NavLink className="style-buttons-overlay" to="/card">
                    {" "}
                    Cartão de Crédito{" "}
                  </NavLink>{" "}
                </button>
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faPix} />
                  <NavLink className="style-buttons-overlay" to="/pix">
                    {" "}
                    Pix{" "}
                  </NavLink>{" "}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

      <section className="history-container">
        <div className="content-history">
          <div className="row-history-a">
            <h2 className="title-history">Nossa História</h2>

            <p className="text-content">
              {" "}
              O Mão Amiga teve seu início no ano de 2000 visando atender uma
              problemática que é ainda um dos gargalos da nossa nação a
              educação. Vendo a necessidade foi feito um diagnóstico junto à
              comunidade, buscando entender a real necessidade daquelas
              famílias, com esses dados vimos que por muitos pais não serem
              alfabetizados o desejo expressado era de apoio para as atividades
              escolares dos seus filhos. Assim foi iniciado o atendimento
              focando o reforço escolar e o apoio aos pais e a escola, buscando
              solucionar essa problemática. De lá pra cá fomos vendo a
              necessidade de montar um programa para nossos atendidos e hoje
              além do reforço escolar de português e matemática, oferecemos
              oficinas nas áreas de: informática, artesanato, inglês, futebol e
              muaythai. Hoje nossos atendidos fazem o reforço escolar e mais
              duas oficinas de acordo com seu interesse e habilidades, o que é
              complementado com atividades extras com saídas focando atividades
              culturais e de lazer. Nosso atendimento se dá em contraturno
              escolar e com isso atendemos 60 crianças e adolescentes do 1° ao
              6° ano no bairro Chácara da Prainha na cidade de Aquiraz.
            </p>

            <button className="button-history">
              {" "}
              <NavLink className="button-style" to="/about">
                {" "}
                Saiba Mais{" "}
              </NavLink>{" "}
            </button>
          </div>

          <div className="row-history-b">
            <img className="history-bg" src={History} alt="History" />
          </div>
        </div>
      </section>

      <section className="events-container">
        <div className="box-events">
          <div className="title-next-events">
            {" "}
            <h1> Próximos Eventos </h1>{" "}
          </div>

          <div className="box-next-events">
            {eventsData.length <= 0 ? (
              <div>
                <p>Não há eventos no momento...</p>
              </div>
            ) : (
              eventsData.slice(0, 3).map((eventData) => (
                <div className="content-events" key={eventData._id}>
                  <img
                    className="image-events"
                    src={eventData.imagem.url}
                    alt={eventData.titleEvent}
                  />

                  <div className="box-content-events">
                    <h2 className="title-events">{eventData.titleEvent}</h2>

                    <span className="date-events">
                      {eventData.dayEvent} de {eventData.monthEvent} de{" "}
                      {eventData.yearEvent}
                    </span>

                    <span> | </span>

                    <span className="local-events">{eventData.localEvent}</span>

                    <div className="about-events">
                      <p>{eventData.contentEvent}</p>
                      <a href="#" onClick={() => openModal(eventData._id)}>
                        Saiba Mais
                      </a>

                      <Modal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        title={selectedEvent ? selectedEvent.titleEvent : ""}
                        content={
                          selectedEvent ? selectedEvent.contentEvent : ""
                        }
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="box-events-active">
          <div className="title-next-events">
            {" "}
            <h1> Causas em Destaque </h1>{" "}
          </div>

          <div className="box-next-events">
            <div className="content-events-2">
              <img
                className="image-events"
                src={ImageEvents_2}
                alt="image-events"
              />

              <div className="box-content-events">
                <h2 className="title-events">
                  Arrecadação de fundos para crianças
                </h2>

                <span className="date-events">25 de agosto de 2018</span>

                <span> | </span>

                <span className="local-events">
                  Salão de Baile de Nova York
                </span>

                <div className="donate-events">
                  <p className="donate-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, laudantium!
                  </p>

                  <button className="donate-btn">Doe para o projeto</button>

                  <ProgressBar
                    now={now}
                    label={`${now.toFixed(0)}%`}
                    className="custom-progress"
                  />

                  <div className="financial-goals">
                    <div className="raised">
                      <span>Arrecadado: {raised} </span>
                    </div>

                    <div className="goal">
                      <span>Meta: {goal} </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-resume">
        <div className="box-resume">
          <div className="title-resume">
            <h1>
              Adoramos ajudar todas as crianças que têm problemas no mundo. Após
              15 anos temos muitos objetivos alcançados.
            </h1>

            <p className="resume-description">
              Dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib
              ulum mauris quis aliquam. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className="box-record">
          <div className="box-content-resume">
            <img className="image-record" src={ImageRecord} alt="imagerecord" />

            <h1 className="result">+60...</h1>

            <p className="result-description">Crianças alcançadas.</p>
          </div>

          <div className="box-content-resume">
            <img className="image-record" src={Donation} alt="donation" />

            <h1 className="result">23</h1>

            <p className="result-description">Anos de atuação.</p>
          </div>

          <div className="box-content-resume">
            <img className="image-record" src={Education} alt="education" />

            <h1 className="result">+60...</h1>

            <p className="result-description">
              Crianças recebendo reforço escolar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
