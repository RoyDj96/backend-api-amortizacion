import { Router } from "express";
import * as controllerPost from '../controller/post.controllers.js';

const postRouter = Router();

/**
 * @swagger
 * /quota:
 *   post:
 *     summary: Hacer el cálculo de la amortización
 *     description: Devuelve el plan de amortización de un crédito.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Mto: 
 *                 type: integer
 *               Vint:
 *                 type: integer
 *               Npla:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Tabla de amortización creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Mto: 
 *                   type: integer
 *                 Vint:
 *                   type: integer
 *                 Npla:
 *                   type: integer
 */
postRouter.post('/quota', controllerPost.Formula);

export default postRouter;