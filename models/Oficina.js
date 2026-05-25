import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Oficina = connection.define("oficinas", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tipo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  material: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Oficina;
