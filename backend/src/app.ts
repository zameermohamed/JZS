import express, { Express, Application } from 'express';
import dotenv from 'dotenv';
import exampleRouter from './routes/example.js';
import bnbRouter from './routes/bnbRouter.js'
import cors from 'cors'; 
import { globalErrorHandler } from './errorHandlers/errorHandlers.js';

//For env File 
dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/example", exampleRouter);
app.use("/", bnbRouter);

app.use(globalErrorHandler);

export default app;