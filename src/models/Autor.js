import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.ObjectId },
  nome: {
    type: String,
    required: [true, "O nome do autor é obrigatório."] //! mongoose possibilita um array onde a segunda posição é a msg de erro personalizada
  },
  nacionalidade: {
    type: String,
  }
}, { versionKey: false });

const autor = mongoose.model("autores", autorSchema);

export default { autor, autorSchema };