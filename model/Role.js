import { DataTypes } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import db from "../config/database.js";

const Role = db.define(
  "Roles",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Role;
