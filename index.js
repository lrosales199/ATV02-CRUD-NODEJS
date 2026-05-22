import express from "express";

import PerfilController from "./controllers/PerfilController.js";

import TabelaController from "./controllers/TabelaController.js";

import CardController from "./controllers/CardController.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", PerfilController);
app.use("/", TabelaController);
app.use("/", CardController);

app.get("/", function (req, res) {
  res.render("index");
});

const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log("Ocorreu um erro!" + error);
  } else {
    console.log(
      `Servidor iniciado com sucesso no endereço: http://localhost:${port}`,
    );
  }
});