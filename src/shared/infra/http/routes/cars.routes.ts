import { Router } from 'express';

import { CreateCarControoler } from '@modules/cars/useCases/createCar/CreateCarController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const carsRoutes = Router();

const createCarController = new CreateCarControoler();

carsRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin, 
    createCarController.handle);

export { carsRoutes }
