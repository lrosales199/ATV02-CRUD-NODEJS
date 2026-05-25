import express from "express";

const router = express.Router();

import Oficina from "../models/Oficina.js";

router.get("/oficina", function (req, res) {
  Oficina.findAll().then((oficinas) => {
      res.render("oficina", {
        oficinas: oficinas,
      });
    }).catch((error) => {
      console.log("Ocorreu um erro ao buscar oficinas." + error);
    });
});

router.post("/oficinas/cadastrar", (req, res) => {
  const nome = req.body.nome;
  const tipo = req.body.tipo;
  const material = req.body.material;
  const status = req.body.status;

  Oficina.create({
    nome: nome,
    tipo: tipo,
    material: material,
    status: status,
  }).then(() => {
      res.redirect("/oficina");
    }).catch((error) => {
      console.log("Ocorreu um erro ao cadastrar a oficina" + error);
    });
});

router.get("/oficinas/excluir/:id", (req, res) => {
  const id = req.params.id;
  Oficina.destroy({
    where: {
      id: id,
    },
  }).then(() => {
      res.redirect("/oficina");
    }).catch((error) => {
      console.log("Ocorreu um erro ao excluir a oficina" + error);
    });
});

router.get("/oficinas/editar/:id", (req, res) => {
  const id = req.params.id;
  Oficina.findByPk(id).then((oficina) => {
    res.render("oficinaEditar", {
      oficina: oficina,
    });
  });
});

router.post("/oficinas/alterar", (req, res) => {
  const nome = req.body.nome;
  const tipo = req.body.tipo;
  const material = req.body.material;
  const status = req.body.status;
  const id = req.body.id;

  Oficina.update(
    {
        nome: nome,
        tipo: tipo,
        material: material,
        status: status, 
    },
    { where: { id: id }},
  ).then(() =>{
    res.redirect("/oficina");
  })
});

export default router;