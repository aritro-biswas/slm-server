import express from 'express';
import dashController from './dashboard.controller';

export const dashRouter = express.Router();
console.log("router")
dashRouter.route('/').post(dashController.create);
dashRouter.route('/addNewBed').post(dashController.addNewBed);
