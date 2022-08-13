import express from "express";
import cors from "cors";
import { users } from "./data";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => console.log("Server running is port 3003"));

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.post("/create", (req, res) => {
  res.status(200).send(users);
});
