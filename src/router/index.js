import { Router } from "express";
import authRouter from "./Auth/index.js";
import postRoutes from "./post/index.js";
import commentRoutes from "./comment/index.js";
import userRoutes from "./user/index.js";

const allRouter = Router();

allRouter.use(userRoutes);
allRouter.use(postRoutes);
allRouter.use(commentRoutes);
allRouter.use(authRouter);

export default allRouter;
