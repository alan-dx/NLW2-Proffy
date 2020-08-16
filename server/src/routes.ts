import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesController();
const conncetionsController = new ConnectionsController();


//CADASTRANDO OS PROFESSORES, AULAS E HORÁRIO DAS AULAS
routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);
routes.post('/connections', conncetionsController.create);
routes.get('/connections', conncetionsController.index);

export default routes;