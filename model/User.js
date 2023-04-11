import { DataTypes } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import db from "../config/database.js";

const User = db.define(
  "Users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(128),
    },
    city: {
      type: DataTypes.STRING(128),
    },
    postalCode: {
      type: DataTypes.STRING(10),
    },
    province: {
      type: DataTypes.STRING(128),
    },
    country: {
      type: DataTypes.STRING(128),
    },
    phone: {
      type: DataTypes.STRING(20),
    },
    picture: {
      type: DataTypes.STRING(255),
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
  }
);

export default User;
