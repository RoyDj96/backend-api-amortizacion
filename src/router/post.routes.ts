import { Router } from "express";
import * as controllerPost from '../controller/post.controller';

const postRouter = Router();

postRouter.post('/quota', controllerPost.Formula);
postRouter.post('/', controllerPost.Saludo);

export default postRouter;