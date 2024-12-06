import express from 'express';
import config from './config/config.js';
import postRouter from './router/post.routes.js';
import cors from "cors";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const app = express();

app.use(cors());
app.use(express.json());

const PORT = config.port;
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title:'Mi API',
      version: '1.0.0',
      description: 'A simple API'
    },
    servers: [
      {
        url: 'http://localhost:3005'
      }
    ]
  },
  apis: ['./router/*.js'] // files containing annotations as endpoints
};
app.use('/api',postRouter);

const specs = swaggerJsdoc(options);
app.use('/api',swaggerUi.serve ,swaggerUi.setup(specs));


app.listen(PORT,()=> {
  console.log(`Server is running on port ${PORT}`);
}); 


