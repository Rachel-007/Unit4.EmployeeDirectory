import express from "express";
const app = express();
import employees from "./db/employees.js";
// import route from "./route.js";
// const router = express.Router();

// app.route("/").get((req, res, next) => {
//   res.send("Hello employees!");
// });

app.get("/", (req, res, next) => {
  res.send("Hello employees!");
});

app.get("/employees/random", (req, res) => {
  const randomEmployee =
    employees[Math.floor(Math.random() * employees.length)];
  res.send(randomEmployee);
});

app.get("/employees/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const name = employees[id];
    if (!name) {
      return res.status(404).json({ error: "employee not found" });
    }

    res.send(name);
  } catch (error) {
    next(error);
  }
});

export default app;
