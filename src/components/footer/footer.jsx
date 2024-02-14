import "./footer.css";
import Logo from "../../assets/Logo-mao-amiga.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHeart,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [eventsData, setEventsData] = useState([]);

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
  const currentYear = new Date().getFullYear();
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

  return (
    <>
      <div className="container-footer">
        <footer className="site-footer">
          <div className="foot-about">
            <div>
              <img src={Logo} alt="Logo" />
            </div>

            <div>
              <NavLink
                to="https://www.facebook.com/maoamiga.ywam/"
                target="_blank"
              >
                <FontAwesomeIcon className="facebook" icon={faFacebook} />
              </NavLink>

              <NavLink
                to="https://www.instagram.com/maoamiga_aquiraz/"
                target="_blank"
              >
                <FontAwesomeIcon className="instagram" icon={faInstagram} />
              </NavLink>
            </div>
          </div>

          <div className="foot-links">
            <h2>Links</h2>

            <ul>
              <li>
                <a href="/">Página Inicial</a>
              </li>

              <li>
                <a href="/about">Sobre Nós</a>
              </li>
              <li>
                <a href="/projects">Projetos</a>
              </li>
              <li>
                <a href="/gallery">Galeria</a>
              </li>
              <li>
                <a href="/events">Eventos</a>
              </li>
              <li>
                <a href="/contacts">Contato</a>
              </li>
            </ul>
          </div>

          <div className="foot-latest-events">
            <h2>Últimos Eventos</h2>
            {lastEvents.map((eventData) => {
              return (
                <div key={eventData._id} className="latest-events">
                  <span>{eventData.titleEvent}</span>
                  <h3>
                    {eventData.monthEvent}, {eventData.yearEvent}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="foot-contact">
            <h2>Contato</h2>

            <div className="icon">
              <span>
                <FontAwesomeIcon className="phone" icon={faPhone} />
                +55 85 99650-0506
              </span>
            </div>

            <div className="icon">
              <span>
                <FontAwesomeIcon className="envelope" icon={faEnvelope} />
                contato@maoamigace.org
              </span>
            </div>

            <div className="icon">
              <FontAwesomeIcon className="location" icon={faMapLocation} />

              <span className="break">
                Chacara da prainha, <br /> Aquiraz, CE, Brazil
              </span>
            </div>

            <input
              className="input-text"
              type="text"
              placeholder="Digite seu e-mail"
            />
            <a href="/contacts">
              <input className="input-btn" type="button" value="Enviar" />
            </a>
          </div>
        </footer>
      </div>

      <footer className="site-footer-bar">
        CNPJ: 49.946.222/0001-90 Copyright ©{currentYear} All rights reserved |
        This template is made with
        <FontAwesomeIcon icon={faHeart} /> by{" "}
        <NavLink to="https://github.com/dreisdev" target="blank">
          Diego Reis
        </NavLink>
      </footer>
    </>
  );
};

export default Footer;
