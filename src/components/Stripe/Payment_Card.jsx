import "./Payment_Card.css";

import { useState } from "react";

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from "axios";
import CircularIndeterminate from "../Progress/Progress";
import { StyledEngineProvider } from '@mui/material/styles';
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const DonationFormCard = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [nameCustomer, setNameCustomer] = useState("");
    const [messageError, setMessageError] = useState("");
    const [amountCard, setAmountCard] = useState(0);
    const [loading, setLoading] = useState(false);
    const [resultError, setResultError] = useState(false);
    const [resultPayment, setResultPayment] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);

        try {

            const amountCent = amountCard * 100;


            let clientSecret;

            const response = await axios.post('https://server-maoamiga-api.cyclic.app/payment/card', {
                amountCard: amountCent,
            });


            if (response && response.data && response.data.client_secret) {
                clientSecret = response.data.client_secret;


                const result = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            name: nameCustomer,

                        },
                    },
                },
                );


                if (result.error) {

                    const errorMessage = result.error.message || 'Erro desconhecido';


                    console.error(result.error);
                    setResultError(true);
                    setMessageError(`Error: ${errorMessage}`);
                    setLoading(false);
                } else {
                    setLoading(false);
                    setResultError(false);
                    setResultPayment(true);
                    setNameCustomer('');
                    setAmountCard('--');


                }
            }


        } catch (error) {
            console.error('Erro ao fazer a solicitação:', error.message);
            setResultError(true);
            setMessageError(error.message);
            setLoading(false);
        }

    };



    return (
        <>

            <section className="payment-boleto">
                <h1 className="payment-card-title"><FontAwesomeIcon icon={faCreditCard} /> Cartão de Crédito</h1>

                <form id="payment-form" onSubmit={handleSubmit}>
                    <label className="payment-label" htmlFor="card">Digite os Dados do Cartão:</label>

                    <div className="element-card">
                        <CardElement id="card" className="element-card-content" />
                    </div>

                    <label htmlFor="nameCustomer">Digite seu nome:</label>
                    <input
                        id="nameCustomer"
                        value={nameCustomer}
                        onChange={(e) => setNameCustomer(e.target.value)}
                        required
                    />



                    <label htmlFor="amountCard">Digite o Valor: R$</label>
                    <input
                        id="amountCard"
                        value={amountCard}
                        onChange={(e) => setAmountCard(e.target.value)}
                        required
                    />


                    {loading ? (
                        <div className="loading">
                            <StyledEngineProvider injectFirst>
                                <CircularIndeterminate message="Processando Pagamento" />
                            </StyledEngineProvider>
                        </div>
                    ) : resultError ? (
                        <div>Ocorreu um erro. Por favor, revise os campos, e tente novamente.{messageError}</div>
                    ) : resultPayment ? (
                        <button className="btn-back-home" >
                            <NavLink className="style-btn-back-home" to="/">Obrigado sua Doação foi registrada - Voltar para Página Inicial</NavLink>
                        </button>
                    ) : null}

                    <button className="btn-pay" type="submit">
                        Pagar
                    </button>

                </form>

            </section>
        </>
    );
};

export default DonationFormCard;