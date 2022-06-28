import { CreateSpecicationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { Router } from 'express';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';



const specificationRoutes = Router();

const createSpecificationController = new CreateSpecicationController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/",  createSpecificationController.handle);

export { specificationRoutes }