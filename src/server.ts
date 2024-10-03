import express from "express";

import UserRouter from "./routers/UserRouter";
import CommentRouter from "./routers/CommentRouter";
import PostRouter from "./routers/PostRouter";

const app = express();
app.use(express.json());

app.use(UserRouter);
app.use(PostRouter);
app.use(CommentRouter);

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
