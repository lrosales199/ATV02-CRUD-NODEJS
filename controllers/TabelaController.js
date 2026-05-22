import express from "express";

const router = express.Router();

router.get("/tabela", function (req, res) {
  const tabela = [
    {
      patente: "Fuhrer",
      insignia: "Símbolo de Amestris",
      nome: "King Bradley",
      responsabilidade: "Chefe de Estado e Comandante Supremo.",
    },
    {
      patente: "General",
      insignia: "Estrelas Douradas",
      nome: "Grumman, Hakuro",
      responsabilidade: "Comandos regionais e decisões estratégicas.",
    },
    {
      patente: "Coronel",
      insignia: "Águia de Prata",
      nome: "Roy Mustang",
      responsabilidade: "Comando de bases militares.",
    },
    {
      patente: "Major",
      insignia: "Folha de Carvalho",
      nome: "Alex Armstrong, Maes Hughes",
      responsabilidade: "Oficiais de campo e Alquimistas Federais.",
    },
    {
      patente: "Tenente",
      insignia: "Barra Simples",
      nome: "Riza Hawkeye, Maria Ross",
      responsabilidade: "Suporte tático e execução de ordens.",
    },
  ];
  res.render("tabela", {
    tabela: tabela,
  });
});

export default router;
