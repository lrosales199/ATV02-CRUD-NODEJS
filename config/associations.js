import Oficina from "../models/Oficina.js";
import Cosplayer from "../models/Cosplayer.js";

const associations = () => {
  Oficina.hasMany(Cosplayer, { foreignKey: "oficina_id" });
  Cosplayer.belongsTo(Oficina, { foreignKey: "oficina_id" });
};

export default associations;