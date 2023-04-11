import express from "express";
import db from "../config/database.js";

// start app
const app = express();

// test database connection
db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(`Fail to connect to database ${err}`));

// synce database
(async () => {
  await db.sync({ force: true });
  console.log("Database synced!");
})();

app.get("/", (req, res) => {
  res.send("Chang-Shop App");
});

export default app;
