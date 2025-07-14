import express from "express";
import LivroController from "../controllers/livroController.js";


const routes = express.Router();

routes
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivrosPorEditora)
  .get("/livros/:id", LivroController.listarLivroPorId) // id tem que ser a ultima linha dos gets, coisas de express
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.deletarLivro)

export default routes;