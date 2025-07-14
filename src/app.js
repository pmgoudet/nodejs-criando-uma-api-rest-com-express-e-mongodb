import express from "express";
import conectaNaDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";
import manupiladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.log("Deu merda aqui: ", erro)
})

conexao.once("open", () => {
  console.log("Conexão com o BDD feita com sucesso!")
})

const app = express();
routes(app);

// middleware de controle de erro 404
app.use(manipulador404);


// middleware de erro
app.use(manupiladorDeErros)

export default app;