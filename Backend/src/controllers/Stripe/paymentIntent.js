/* eslint-disable no-undef */
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const boletoPayment = async (req, res) => {

    const { amountBoleto } = req.body

    try {

        const paymentIntentBoleto = await stripe.paymentIntents.create({
            amount: amountBoleto,
            currency: 'brl',
            payment_method_types: ['boleto'],

        })

        console.log(paymentIntentBoleto);

        return res.send({ client_secret: paymentIntentBoleto.client_secret });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao criar o pagamento via boleto' });
    }

}

const cardPayment = async (req, res) => {

    const { amountCard } = req.body

    try {

        const paymentIntentCard = await stripe.paymentIntents.create({
            amount: amountCard,
            currency: 'brl',
            payment_method_types: ['card'],

        })

        console.log(paymentIntentCard);

        return res.send({ client_secret: paymentIntentCard.client_secret });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao criar o pagamento via Cartão de Crédito' });
    }

}




module.exports = {
    boletoPayment,
    cardPayment
}