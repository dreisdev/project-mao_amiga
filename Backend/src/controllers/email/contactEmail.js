/* eslint-disable no-undef */
const transport = require("../../../email");
const compilerHtml = require("../../utils/compilerHTML");

const emailUserNotice = async (req, res) => {
  const { userName, email } = req.body;

  const html = await compilerHtml("./src/templates/emailConfirmation.html", {
    username: userName,
  });

  const emailToUser = {
    from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
    to: `${userName} <${email}>`,
    subject: "Contato Associação Mão Amiga",
    html,
  };

  try {
    await transport.sendMail(emailToUser);

    res.status(200).json({
      mensagem:
        " Mensagem enviada com sucesso! - Caso não receba o e-mail de confirmação, verifique na sua caixa de span, ou lixo eletrônico",
    });
  } catch (error) {
    console.error("Erro ao enviar mensagem", error);
    res.status(500).json({ mensagem: "Erro ao enviar mensagem!" });
  }
};

const emailContact = async (req, res) => {
  const { userName, email, message } = req.body;

  const messageUser = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO_BOX,
    subject: "Nova mensagem de contato",
    text: `Nome: ${userName}\nE-mail: ${email}\nMensagem: ${message}`,
  };

  try {
    await transport.sendMail(messageUser);
    res.status(200).json({
      mensagem: "E-mail enviado com sucesso para a caixa de e-mail da empresa",
      messageUser,
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail para a caixa de entrada.", error);
    res.status(500).json({
      mensagem: "Erro ao enviar e-mail para a caixa de entrada.",
    });
  }
};

module.exports = {
  emailUserNotice,
  emailContact,
};
