const sequelize = require("../../db");
const { DataTypes } = require("sequelize");

const customer = sequelize.define(
  "customer",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    first_name: { type: DataTypes.STRING, allowNull: false },
    document: {},
    phone: {},
    email: {},
    id_country: { type: DataTypes.INTEGER, allowNull: false },
    id_state: { type: DataTypes.INTEGER, allowNull: false },
    id_city: { type: DataTypes.INTEGER, allowNull: false },
    address: { type: DataTypes },
    admision_date: { type: DataTypes },
    invited_by: { type: DataTypes },
  },
  {
    tableName: customers,
  }
);
