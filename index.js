import express from "express";

import PerfilController from "./controllers/PerfilController.js";
import TabelaController from "./controllers/TabelaController.js";
import CardController from "./controllers/CardController.js";
import OficinaController from "./controllers/OficinaController.js";
import CosplayerController from "./controllers/Cosplayer.Controller.js";

import connection from "./config/sequelize-config.js";

import Oficina from "./models/Oficina.js";
import Cosplayer from "./models/Cosplayer.js";

import associations from "./config/associations.js";

connection.authenticate().then(() =>{
  console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(error =>{
  console.log(`Ocorreu um erro ao se conectar ao banco. ${error}`);
});

connection.query("CREATE DATABASE IF NOT EXISTS banco_metal;").then(() =>{
  console.log("O banco de dados está criado!");
}).catch((error) =>{
  console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${error}`);
});

associations();

Promise.all([Oficina.sync({ force: false }), Cosplayer.sync({force: false})]).then(() => {
    console.log("Entidades criadas e relacionadas com sucesso!");
  }).catch((error) => {
    console.log("Ocorreu um erro ao sincronizar os Models." + error);
  });

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.use("/", PerfilController);
app.use("/", TabelaController);
app.use("/", CardController);
app.use("/", OficinaController);
app.use("/", CosplayerController);

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