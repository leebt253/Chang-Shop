import { DataTypes } from "sequelize";
import db from "../config/database.js";
import User from "./User.js";
import Role from "./Role.js";

const UserRole = db.define("Users_Roles", {
},{
  timestamps: false,
});

User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });

export default UserRole;