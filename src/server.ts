import express from 'express';
import router from './api/appli.routes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export const server = () => {
  app.listen(3000, () => {
    console.log(`HTTP server listening on port 3000`);
  });
};
