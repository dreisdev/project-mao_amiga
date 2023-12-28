/* eslint-disable no-undef */
require("dotenv").config();
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  const secretKey = process.env.SECRETKEYLOGIN;

  const user = {
    userLogin: process.env.USER_EMAIL,
    passUser: process.env.USER_PASS,
  };

  try {
    const { userLogin, passUser } = req.body;

    if (!userLogin || !passUser) {
      console.log(userLogin);
      return res
        .status(400)
        .json({ mensagem: "Usuário e senha são obirgatórios" });
    }

    if (userLogin === user.userLogin && passUser === user.passUser) {
      const token = jwt.sign({ userLogin }, secretKey);
      return res
        .status(200)
        .json({
          mensagem: "Acesso autorizado ao Painel Administrativo!",
          token,
        });
    } else {
      return res
        .status(404)
        .json({ mensagem: "Dados do usuário não estão corretos!" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

module.exports = {
  Login,
};
