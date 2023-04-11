import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DB_URL, {
  schema: "public",
  logging: false,
});

export default db;
