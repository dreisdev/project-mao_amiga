/* eslint-disable react-hooks/rules-of-hooks */
import "./contacts.css";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import api from "../../api/fetchApi";
import useToast from "../../hooks/useToast";

const Contacts = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendNotice = async () => {
    try {
      const dataNotice = {
        userName,
        email,
      };

      const responseEmailNotice = await api.post("/emailUser", dataNotice);

      useToast((await responseEmailNotice).data.mensagem);

      setUserName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      useToast(error, "error");
    }
  };

  const handleSendBox = async (e) => {
    e.preventDefault();
    try {
      const dataEmailBox = {
        userName,
        email,
        message,
      };

      api.post("/emailBox", dataEmailBox);

      await handleSendNotice();
    } catch (error) {
      console.log(error);
      useToast(error, "error");
    }
  };
  return (
    <div className="container-contacts">
      <section className="banner-project">
        <div className="text-project">
          <h1 className="text-project-content">Contato</h1>
        </div>
      </section>

      <main className="box-contacts">
        <div className="left-box-contacts">
          <h1 className="contacts-title">Entre em contato conosco</h1>

          <p className="contacts-text">
            Ficou interessado em algum projeto, entre em contato conosco e saiba
            como pode ajudar.
          </p>

          <div className="contacts-icons">
            <NavLink
              to="https://www.facebook.com/maoamiga.ywam/"
              target="_blank"
            >
              <FontAwesomeIcon
                className="facebook-page-contacts"
                icon={faFacebook}
              />
            </NavLink>

            <NavLink
              to="https://www.instagram.com/maoamiga_aquiraz/"
              target="_blank"
            >
              <FontAwesomeIcon
                className="instagram-page-contacts"
                icon={faInstagram}
              />
            </NavLink>
          </div>

          <aside className="contacts-info">
            <div className="icon">
              <span>
                <FontAwesomeIcon className="phone" icon={faPhone} />
                +55 85 8888-8888
              </span>
            </div>

            <div className="icon">
              <span>
                <FontAwesomeIcon className="envelope" icon={faEnvelope} />
                maoamiga@email.com
              </span>
            </div>

            <div className="icon">
              <FontAwesomeIcon className="location" icon={faMapLocation} />

              <span className="break">
                Chacara da prainha, <br /> Aquiraz, CE, Brazil
              </span>
            </div>
          </aside>
        </div>

        <div className="right-box-contacts">
          <form className="contacts-form" onSubmit={handleSendBox}>
            <input
              className="input-name"
              type="text"
              placeholder="Nome"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />

            <input
              className="input-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              className="message"
              name="Envie sua mensagem!"
              placeholder="Envie sua mensagem!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button className="button-contact" type="submit">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
