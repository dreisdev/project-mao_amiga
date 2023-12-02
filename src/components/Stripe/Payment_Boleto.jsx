import "./Payment_Boleto.css";

import { useState } from "react";

import { useStripe } from '@stripe/react-stripe-js';
import axios from "axios";
import CircularIndeterminate from "../Progress/Progress";
import { StyledEngineProvider } from '@mui/material/styles';
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

const DonationFormBoleto = () => {
    const stripe = useStripe();

    const [messageError, setMessageError] = useState("");
    const [country, setCountry] = useState('BR');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [line1, setLine1] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [taxId, setTaxId] = useState('');
    const [amountBoleto, setAmountBoleto] = useState(0);
    const [loading, setLoading] = useState(false);
    const [resultError, setResultError] = useState(false);
    const [resultPayment, setResultPayment] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);

        try {

            const amountCent = amountBoleto * 100;


            let clientSecret;

            const response = await axios.post('https://server-maoamiga-api.cyclic.app/payment/boleto', {
                amountBoleto: amountCent,
            });


            if (response && response.data && response.data.client_secret) {
                clientSecret = response.data.client_secret;


                const result = await stripe.confirmBoletoPayment(clientSecret, {
                    payment_method: {
                        boleto: {
                            tax_id: taxId,
                        },
                        billing_details: {
                            name,
                            email,
                            address: {
                                line1,
                                city,
                                state,
                                postal_code: postalCode,
                                country,
                            },
                        },
                    },
                });


                if (result.error) {
                    console.error(result.error);

                    const errorMessage = result.error.message || 'Erro desconhecido';
                    setMessageError(`Error: ${errorMessage}`);

                    setResultError(true);
                    setLoading(false);
                } else {
                    setLoading(false);
                    setResultError(false);
                    setResultPayment(true);
                    setState('');
                    setCity('');
                    setPostalCode('');
                    setLine1('');
                    setName('');
                    setEmail('');
                    setTaxId('');
                    setAmountBoleto('--');

                }
            }


        } catch (error) {
            console.error('Erro ao fazer a solicitação:', error.message);
            setResultError(true);
            setLoading(false);
        }

    };



    return (
        <>

            <section className="payment-boleto">
                <h1><FontAwesomeIcon icon={faFileLines} /> Boleto</h1>

                <form id="payment-form" onSubmit={handleSubmit}>
                    <label className="payment-label" htmlFor="name">Nome:</label>
                    <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="taxId">CPF ou CNPJ</label>
                    <input
                        id="taxId"
                        value={taxId}
                        onChange={(e) => setTaxId(e.target.value)}
                        required
                    />

                    <label htmlFor="country">País (BR)</label>
                    <input
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />

                    <label htmlFor="state">Digite a UF</label>
                    <input
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    />

                    <label htmlFor="city">Cidade</label>
                    <input
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />

                    <label htmlFor="postal_code">Cep (Somente números)</label>
                    <input
                        id="postal_code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    />

                    <label htmlFor="line1">Endereço</label>
                    <input
                        id="line1"
                        value={line1}
                        onChange={(e) => setLine1(e.target.value)}
                        required
                    />

                    <label htmlFor="amountBoleto">Digite o Valor: R$</label>
                    <input
                        id="amountBoleto"
                        value={amountBoleto}
                        onChange={(e) => setAmountBoleto(e.target.value)}
                        required
                    />


                    {loading ? (
                        <div className="loading">
                            <StyledEngineProvider injectFirst>
                                <CircularIndeterminate message="Aguarde, boleto sendo emitido..." />
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
                        Gerar Boleto
                    </button>

                </form>

            </section>
        </>
    );
};

export default DonationFormBoleto;