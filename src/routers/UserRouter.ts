import { Router } from "express";

import UserController from "../controllers/UserController";

const UserRouter = Router();


// Criar usuário
UserRouter.post("/user/create", UserController.createUser);

// Listar usuários
UserRouter.get("/users", UserController.listUser);

// Editar usuário
UserRouter.put("/user/update/:id", UserController.updateUser);

// Deletar usuário
UserRouter.delete("/user/delete/:id", UserController.deleteUser);

export default UserRouter;