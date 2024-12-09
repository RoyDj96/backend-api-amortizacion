import express from 'express';
import cors from "cors";
import config from './config/config';
import postRouter from './router/post.routes';

const app = express()

app.use(cors());
app.use(express.json());

// const options = {
//     definition: {
//       openapi: '3.0.0',
//       info: {
//         title:'Mi API',
//         version: '1.0.0',
//         description: 'A simple API'
//       },
//       servers: [
//         {
//           url: 'http://localhost:3005'
//         }
//       ]
//     },
//     apis: ['./routes/post.routes.js']
//   };



app.use('/api', postRouter);

const PORT = config.port;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})