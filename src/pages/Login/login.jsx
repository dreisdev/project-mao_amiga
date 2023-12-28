/* eslint-disable react-hooks/rules-of-hooks */
import "./login.css";

import { useEffect, useState } from "react";
import axios from "axios";
import useToast from "../../hooks/useToast";
import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";

import { GetToken, SetToken } from "../../utils/storage";

const LoginForm = () => {
  const [userLogin, setUserLogin] = useState("");
  const [passUser, setPassUser] = useState("");
  const [messageError, setMessageError] = useState("");
  const [resultError, setResultError] = useState(false);
  const [resultLogin, setResultLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isAutheticated = GetToken();

    if (isAutheticated) {
      navigate("/adm");
      return;
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        userLogin,
        passUser,
      });

      const tokenLogin = SetToken(response.data.token);
      console.log(tokenLogin);

      console.log(response);
      useToast(response.data.mensagem);
      setResultLogin(true);
      setResultError(false);
      setUserLogin("");
      setPassUser("");
    } catch (error) {
      console.log(error);
      console.error(
        "Erro ao fazer a solicitação:",
        error.response.data.mensagem
      );
      setResultError(true);
      setMessageError(error.response.data.mensagem);
      useToast(error.response.data.mensagem);
    }
  };

  return (
    <>
      <section className="payment-boleto">
        <h1 className="payment-card-title">
          <FontAwesomeIcon icon={faUserGear} /> Login
        </h1>

        <form id="payment-form" onSubmit={handleSubmit}>
          <label htmlFor="nameUser">Usuário:</label>
          <input
            id="nameUser"
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
            required
          />

          <label htmlFor="passwordUser">Senha</label>
          <input
            id="passwordUser"
            type="password"
            value={passUser}
            onChange={(e) => setPassUser(e.target.value)}
            required
          />

          {resultError ? (
            <div>{messageError}</div>
          ) : resultLogin ? (
            <button className="btn-back-home">
              <NavLink className="style-btn-back-home" to="/adm">
                Ir para o Painel ADM.
              </NavLink>
            </button>
          ) : null}

          <button className="btn-pay" type="submit">
            Entrar
          </button>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
