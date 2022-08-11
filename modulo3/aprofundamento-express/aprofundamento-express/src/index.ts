import express from "express";
import cors from "cors";
import { Afazeres } from "./data";

const app = express();

app.use(cors());
app.use(express.json());

type All = {
  userId: Number;
  id: Number;
  title: String;
  completed: Boolean;
};

app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});

app.get("/afazeres", (req, res) => {
  res.status(200).send(Afazeres);
});

app.post("/createAfazeres/:id", (req, res) => {
  const idPerson = (req.params.id);
  const { id, title, completed } = req.body;
  const findAfazeres = Afazeres.find((afazer:any)=>{
      return afazer.id === idPerson
  })
  res.status(201).send(findAfazeres);
});

app.listen(3003, () => console.log("Servidor rodando na porta 3003"));
