import mongoose from "mongoose";
// import AutorModel from "../models/Autor.js";

// const autorSchema = AutorModel.autorSchema;

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: {
    type: String,
    required: [true, "O título do livro é obrigatório. "]
  },
  editora: {
    type: String,
    enum: {
      // pré definição de valores
      values: ["Casa do Código", "Alura", "Editora da Mãe"],

      // {VALUE} é próprio do mongoose
      message: `A editora {VALUE} não é um valor permitido.`
    }
  },
  preco: { type: Number },
  paginas: {
    type: Number,
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      },
      message: "O número de páginas deve estar entre 1 e 5000. {VALUE} não é válido."
    }

    //todo este min e max abaixo é o validador por padrão. Acima o validador personalizado
    // min: [1, "O número de páginas deve estar entre 1 e 5000. {VALUE} não é válido."],
    // max: [5000, "O número de páginas deve estar entre 1 e 5000. {VALUE} não é válido. "] //! controle de min e max de pag
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O ID do autor é obrigatório."]
  }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;