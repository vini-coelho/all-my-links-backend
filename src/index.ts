import 'dotenv/config';
import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import routes from './routes';
import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
