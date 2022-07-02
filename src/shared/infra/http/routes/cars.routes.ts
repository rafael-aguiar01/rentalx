import { Router } from 'express';

import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';
import { CreateCarControoler } from '@modules/cars/useCases/createCar/CreateCarController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const carsRoutes = Router();

const createCarController = new CreateCarControoler();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin, 
    createCarController.handle
);

carsRoutes.get(
    "/available",
    listAvailableCarsController.handle
);


export { carsRoutes }
