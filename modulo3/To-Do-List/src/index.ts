import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

app.post("/user", async (req: Request, res: Response) => {
  try {
    await connection.raw(`
        INSERT INTO User (id, name, nickname, email)
        VALUES (
            ${Date.now().toString()},
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}",
        )
    `);
    res.status(200).send({ message: "deu tudo certo" });
  } catch (error) {
    res.status(400).send({ message: "Campos invalidos" });
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const result = await connection()
      .select({ id: req.body.id, nickname: req.body.nickname })
      .from("User")
      .where({ id: req.params.id });

    res.status(200).send({ message: result });
  } catch (error) {
    res.status(400).send({ message: "Usuario não encontrado" });
  }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    await connection("User")
      .update({ name: req.body.name, nickname: req.body.nickname })
      .where({ id: req.params.id });
    res.status(200).send({ message: "Sucesso" });
  } catch (error) {
    res.status(400).send({ message: "Erro ao editar" });
  }
});

app.post("/task", async (req: Request, res: Response) => {
  try {
    await connection.raw(`
        INSERT INTO Task (taskId, title, description, limitDate, creatorUserId)
        VALUES (
            ${Date.now().toString()},
            "${req.body.title}",
            "${req.body.description}",
            "${req.body.limitDate}",
            "${req.body.creatorUserId}",
        )
    `);
    res.status(200).send({ message: "Tarefa criada com sucesso" });
  } catch (error) {
    res.status(400).send({ message: "Erro" });
  }
});

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const result = await connection()
      .select({
        taskId: req.body.taskId,
        title: req.body.title,
        description: req.body.description,
        limitDate: req.body.limitDate,
        status: req.body.status,
        creatorUserId: req.body.creatorUserId,
        creatorUserNickname: req.body.creatorUserNickname,
      })
      .from("task")
      .where({ id: req.params.id });
    res.status(200).send({ message: result });
  } catch (error) {
    res.status(400).send({ message: "Tarefa não encontrada" });
  }
});
