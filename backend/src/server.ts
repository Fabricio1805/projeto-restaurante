import http from 'node:http';

import express from 'express';
import path from 'node:path';
import mongoose from 'mongoose';
import router from './routes/routes';
import 'dotenv/config';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();

const server = http.createServer(app);

export const io = new Server(server);

mongoose
  .connect('mongodb://docker:root@localhost:27017')
  .then(() => {
    app.use(cors());

    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads')),
    );
    app.use(express.json());
    app.use(router);

    const port = process.env.PORT || 3333;

    server.listen(port, () => {
      console.info(`🚀 🚀 Server Is Running in port ${port} 🚀 🚀`);
    });
  })
  .catch(e => {
    console.log(e);
  });
