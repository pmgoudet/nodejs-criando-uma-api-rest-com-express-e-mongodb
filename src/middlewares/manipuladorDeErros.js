import mongoose from "mongoose";
import ErroBase from "../error/ErroBase.js";
import RequisicaoIncorreta from "../error/requisicaoIncorreta.js";
import ErroValidacao from "../error/erroValidacao.js";
import NaoEncontrado from "../error/NaoEncontrado.js";

// eslint-disable-next-line no-unused-vars
function manupiladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResposta(res)
  } else if (erro instanceof NaoEncontrado) {
    erro.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
};

export default manupiladorDeErros