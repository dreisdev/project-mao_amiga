/* eslint-disable no-undef */
require('dotenv').config();

const ConfigKey = async (req, res) => {

    
    return res.send({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY })

}

module.exports = {
    ConfigKey
}





