import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserController {
    constructor(){

    }

    // Criar um usuário
    async createUser(req: Request, res: Response){
      try{
          const userdata = req.body;

          if (!userdata.password) {
            return res.status(400).json({
                status: 400,
                message: "Você precisa criar uma senha para realizar essa inserção!",
            });
        }

        if (!userdata.email) {
            return res.status(400).json({
                status: 400,
                message: "Você precisa passar um e-mail para esse usuário!",
            });
        }
          
          const createdUser = await prisma.user.create({
              data: userdata
          })

          res.json({
            status: 200,
            newuser: createdUser,
        });

      } catch(error) {
        console.log(error);
        res.json({
          status: 500,
          message: error,
        });
      }
  }

    // Listar usuários
    async listUser(req: Request, res: Response){
        try {
            const users = await prisma.user.findMany();
  
            res.json(users);

        } catch(error) {
          console.log(error);
          res.json({
            status: 500,
            message: error,
          });
        }
    }

    // Editar o usuário
    async updateUser(req: Request, res: Response){
        try {
            const id = req.params.id;
            const body = req.body;
        
            const updatedUser = await prisma.user.update({
              where: {
                id: parseInt(id),
              },
              data: body,
            });
        
            if (updatedUser) {
              return res.json({
                status: 200,
                updatedUser: updatedUser,
              });
            }
          } catch(error) {
            console.log(error);
            res.json({
              status: 500,
              message: error,
            });
          }
    }

    // Deletar o usuário
    async deleteUser(req: Request, res: Response){
        try {
            const id = req.params.id;
        
            await prisma.user.delete({
              where: {
                id: parseInt(id),
              },
            });
        
            res.status(200).json({
              status: 200,
              message: "Usuário deletado com sucesso!",
            });
          } catch(error) {
            console.log(error);
            res.json({
              status: 400,
              message: "Falha ao deletar!",
            });
          }
    }
}

export default new UserController();