import express, { urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import { routes } from "./routers";

// PREPARACAO
const app = express();
app.use(helmet());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json()); // Corrigido: express.json() é uma função

// ROTAS
app.use(routes);

//SERVER
app.listen(process.env.PORT, () => {
  console.log(`*** Servidor Rodando em ${process.env.BASE_URL} ***`);
});
