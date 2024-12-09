import { Router } from "express";
import * as controllerPost from '../controller/post.controller';

const postRouter = Router();

postRouter.post('/quota', controllerPost.Formula);

export default postRouter;