import { Router } from "express";

import PostController from "../controllers/PostController";

const PostRouter = Router();


// Criar post
PostRouter.post("/post/create", PostController.createPost);

// Listar posts
PostRouter.get("/posts", PostController.listPost);

// Editar post
PostRouter.put("/post/update/:id", PostController.updatePost);

// Deletar post
PostRouter.delete("/post/delete/:id", PostController.deletePost);

export default PostRouter;