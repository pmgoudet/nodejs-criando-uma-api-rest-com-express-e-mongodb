import mongoose from "mongoose";

//definir uma propriedade pra todos os strings dos campos
mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor !== "",
  message: ({ path }) => `O campo ${path} está em branco.` // indicar com path o campo vazio em questão
}
);
//todo validador com o mesmo nome do Model/Livro.js, no caso "validate"

