import { Router } from "express";

import CommentController from "../controllers/CommentController";

const CommentRouter = Router();


// Criar comentário
CommentRouter.post("/comment/create", CommentController.createComment);

// Listar comentários
CommentRouter.get("/comments", CommentController.listComment);

// Editar comentário
CommentRouter.put("/comment/update/:id", CommentController.updateComment);

// Deletar comentários
CommentRouter.delete("/comment/delete/:id", CommentController.deleteComment);

export default CommentRouter;