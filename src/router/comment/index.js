import { json, Router } from "express";
import CommentController from "../../controller/comment/index.js";
import AuthenticateMiddleware from "../../middleware/authentication.js";
//import PostValidator from "../../validator/post/index.js";

const commentRoutes = Router();
commentRoutes.get("/comment", AuthenticateMiddleware, CommentController.getAll);
commentRoutes.post("/comment", AuthenticateMiddleware, CommentController.create);
commentRoutes.put("/comment/:commentId", CommentController.update);
commentRoutes.get("/comment/:commentId", CommentController.getOne);

export default commentRoutes;
