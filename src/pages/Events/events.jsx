import "./events.css";

import { useState, useEffect } from "react";
import Modal from "../../components/Modal/modal";

import axios from "axios";

import DataIcon from "../../assets/DataEvents/donate-icon.png";

const Events = () => {
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

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const monthMapping = {
    Janeiro: 1,
    Fevereiro: 2,
    Março: 3,
    Abril: 4,
    Maio: 5,
    Junho: 6,
    Julho: 7,
    Agosto: 8,
    Setembro: 9,
    Outubro: 10,
    Novembro: 11,
    Dezembro: 12,
  };

  const lastEvents = eventsData.filter((eventData) => {
    const eventYear = parseInt(eventData.yearEvent, 10);
    const eventMonth = monthMapping[eventData.monthEvent];

    if (eventYear < currentYear) {
      return true;
    } else if (eventYear === currentYear && eventMonth < currentMonth) {
      return true;
    }

    return false;
  });

  const nextEvents = eventsData.filter((eventData) => {
    const eventYear = parseInt(eventData.yearEvent, 10);
    const eventMonth = monthMapping[eventData.monthEvent];

    if (eventYear > currentYear) {
      return true;
    } else if (eventYear === currentYear && eventMonth >= currentMonth) {
      return true;
    }

    return false;
  });

  return (
    <div className="container-events">
      <section className="banner-project">
        <div className="text-project">
          <h1 className="text-project-content">Eventos</h1>
        </div>
      </section>

      <section className="box-page-events">
        <div className="left-box-event">
          {eventsData.length <= 0 ? (
            <div>
              <p>Não há eventos no momento...</p>
            </div>
          ) : (
            eventsData.map((eventData) => (
              <div className="content-left-box" key={eventData._id}>
                <img
                  className="normal-size"
                  src={eventData.imagem.url}
                  alt={eventData.titleEvent}
                />
                <div className="box-date-title">
                  <div className="date-title">
                    <span>
                      {eventData.dayEvent} de {eventData.monthEvent},{" "}
                      {eventData.yearEvent}
                    </span>
                    <h2>{eventData.titleEvent}</h2>
                  </div>

                  <img className="donate-page-events" src={DataIcon} alt="" />
                </div>
                <article className="text-article">
                  <p>{eventData.contentEvent}</p>

                  <button
                    className="read-more"
                    onClick={() => openModal(eventData._id)}
                  >
                    Ver mais
                  </button>

                  <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={selectedEvent ? selectedEvent.titleEvent : ""}
                    content={selectedEvent ? selectedEvent.contentEvent : ""}
                  />
                </article>
              </div>
            ))
          )}
        </div>

        <div className="right-box-event">
          <div className="content-right-box">
            <h1>Últimos Eventos</h1>

            <div className="last-event">
              {lastEvents.map((eventData) => {
                return (
                  <div key={eventData._id} className="last-event">
                    <img
                      className="small-size"
                      src={eventData.imagem.url}
                      alt={eventData.titleEvent}
                    />

                    <div className="last-events-content">
                      <span>{eventData.titleEvent}</span>
                      <span>{eventData.contentEvent}</span>

                      <h3>
                        {eventData.dayEvent} de {eventData.monthEvent},{" "}
                        {eventData.yearEvent}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="content-next-events">
              <h1>Próximos Eventos</h1>

              {eventsData.length <= 0 ? (
                <div>
                  <p>Não há eventos no momento...</p>
                </div>
              ) : (
                nextEvents.map((eventData) => (
                  <div className="content-page-events" key={eventData._id}>
                    <img
                      className="image-page-events"
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

                      <span className="local-events">
                        {eventData.localEvent}
                      </span>

                      <div className="about-page-events">
                        <a href="#" onClick={() => openModal(eventData._id)}>
                          <p>{eventData.contentEvent}</p>
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
        </div>
      </section>
    </div>
  );
};

export default Events;
