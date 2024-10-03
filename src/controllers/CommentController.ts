import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

class CommentController{
    constructor(){

    }

    // Criar um comentário
    async createComment(req: Request, res: Response){
        try{
            const commentData = req.body;

            if(!commentData.content){
                return res.status(400).json({
                    status: 400,
                    message: "O comentário precisa possuir algum conteúdo.",
                })
            }

            const newComment = await prisma.comment.create({
                data: commentData,
                });
                
            res.json({
                status: 200,
                newuser: newComment,
                }); 
            return res.status(200)
            
        } catch(error) {
            console.log(error);
            res.json({
              status: 500,
              message: error,
            });
          }
    }

    // Listar comentários
    async listComment(req: Request, res: Response){
        try{
            const comments = await prisma.comment.findMany();
            res.json(comments);

        } catch(error) {
            console.log(error);
            res.json({
              status: 500,
              message: error,
            });
          }
    }

    // Editar um comentário
    async updateComment(req: Request, res: Response){ 
        try{
            const commentData = req.body;
            const commentId = req.params.id;
            
            if(!commentData.content){
                return res.status(400).json({
                    status: 400,
                    message: "O comentário precisa possuir algum conteúdo.",
                })
            }

            await prisma.comment.update({
                where: {
                    id: parseInt(commentId)
                },
                data: commentData
            })

        } catch(error) {
            console.log(error);
            res.json({
              status: 500,
              message: error,
            });
          }
    }

    // Deletar comentários
    async deleteComment(req: Request, res: Response){ 
        try{
            const commentId = req.params.id;

            await prisma.comment.delete({
                where: {
                    id: parseInt(commentId)
                }
            })

            return res.status(204);
            
        } catch(error) {
            console.log(error);
            res.json({
              status: 400,
              message: "Falha ao deletar!",
            });
          }
    }
}

export default new CommentController();