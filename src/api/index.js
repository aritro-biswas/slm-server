import express from 'express';
import { dashRouter } from './resources/dashboard';

export const restRouter = express.Router();
restRouter.use('/dashboard', dashRouter);
