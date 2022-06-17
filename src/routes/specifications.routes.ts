import { Router } from 'express';
import { CreateSpecicationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';



const specificationRoutes = Router();

const createSpecificationController = new CreateSpecicationController();

specificationRoutes.post("/",  createSpecificationController.handle);

export { specificationRoutes }