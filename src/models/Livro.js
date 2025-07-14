import mongoose from "mongoose";
// import AutorModel from "../models/Autor.js";

// const autorSchema = AutorModel.autorSchema;

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: {
    type: String,
    required: [true, "O título do livro é obrigatório."]
  },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O ID do autor é obrigatório."]
  }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;