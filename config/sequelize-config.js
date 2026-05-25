import Sequelize from "sequelize";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  timezone: "-03:00",
  database: "banco_metal",
});

export default connection;