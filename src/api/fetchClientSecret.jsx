import axios from "axios";

const BASE_URL = 'http://localhost:3000/payment';

export const fetchDataBoleto = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/boleto`, {

        });

        console.log(response.data.client_secret);
        return response.data.client_secret;
    } catch (error) {

        throw new Error('Erro ao buscar produtos da API');
    }
};

