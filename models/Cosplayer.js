import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Cosplayer = connection.define("cosplayer", {
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  // Chave estrangeira
  oficina_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export default Cosplayer;