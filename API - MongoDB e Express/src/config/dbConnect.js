import mongoose from "mongoose";

mongoose.connect(process.env.LINK_CONEXAO_DB);

let db = mongoose.connection;

export default db;