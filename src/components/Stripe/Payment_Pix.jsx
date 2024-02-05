import "./Payment_Pix.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPix } from "@fortawesome/free-brands-svg-icons";

const DonationFormPix = () => {
  const [nameCustomer, setNameCustomer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
  };

  return (
    <>
      <section className="payment-boleto">
        <h1 className="payment-card-title">
          <FontAwesomeIcon icon={faPix} /> Pix
        </h1>

        <form id="payment-form" onSubmit={handleSubmit}>
          <label htmlFor="nameCustomer">Digite seu nome:</label>
          <input
            id="nameCustomer"
            value={nameCustomer}
            onChange={(e) => setNameCustomer(e.target.value)}
            required
          />

          {loading ? (
            <div className="loading-pix">
              <h1>Dados do Pix: CNPJ: 49.946.222/0001-90</h1>

              <button className="btn-back-home">
                <NavLink className="style-btn-back-home" to="/">
                  Obrigado por sua doação {nameCustomer}! - Voltar para Página
                  Inicial
                </NavLink>
              </button>
            </div>
          ) : null}

          <button className="btn-pay" type="submit">
            Gerar dados do Pix
          </button>
        </form>
      </section>
    </>
  );
};

export default DonationFormPix;
