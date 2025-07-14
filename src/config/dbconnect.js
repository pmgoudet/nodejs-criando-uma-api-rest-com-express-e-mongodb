import mongoose from "mongoose";

async function conectaNaDatabase() {
  // eslint-disable-next-line no-undef
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection; // retorna um objeto com as info de conexão
}

export default conectaNaDatabase;