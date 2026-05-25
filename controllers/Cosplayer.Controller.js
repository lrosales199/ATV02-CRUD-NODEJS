import express from "express";

const router = express.Router();

import Cosplayer from "../models/Cosplayer.js";
import Oficina from "../models/Oficina.js";

router.get("/cosplayer", function (req, res) {
  Promise.all([
    Cosplayer.findAll({
      include: [
        {
          model: Oficina,
          required: true,
        },
      ],
    }),
    Oficina.findAll(),
  ])
    .then(([cosplayers, oficinas]) => {
      res.render("cosplayer", {
        cosplayers: cosplayers,
        oficinas: oficinas,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os pedidos. ${error}`);
    });
});

router.post("/cosplayers/cadastrar", (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;
  const oficinaId = req.body.oficinaId;
  Cosplayer.create({
    numero: numero,
    valor: valor,
    oficina_id: oficinaId,
  })
    .then(() => {
      res.redirect("/cosplayer");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/cosplayers/excluir/:id", (req, res) => {
  const id = req.params.id;
  Cosplayer.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/cosplayer");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
