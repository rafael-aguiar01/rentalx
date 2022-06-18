import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreateSpecicationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecicationController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/",  createSpecificationController.handle);

export { specificationRoutes }