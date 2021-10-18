const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:123456@localhost:5432/Acciones2.0",
  {
    dialect: "postgres",
    logging: true,
  } // realizamos la conexion con la bse de datos
);
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

(async () => {
  await sequelize.sync();
  // Code here
})();

module.exports = sequelize;
