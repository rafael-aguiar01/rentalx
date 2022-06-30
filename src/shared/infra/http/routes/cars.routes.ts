import { Router } from 'express';
import { CreateCarControoler } from '@modules/cars/useCases/createCar/CreateCarController';

const carsRoutes = Router();

let createCarController = new CreateCarControoler();

carsRoutes.post("/", createCarController.handle);

export { carsRoutes }
