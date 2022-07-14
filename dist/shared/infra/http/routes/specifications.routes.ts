import { CreateSpecicationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { Router } from 'express';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecicationController();

//specificationRoutes.use(ensureAuthenticated);Todas as rotas que tiverem abaixo do use vão passar pelo middle

specificationRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createSpecificationController.handle
);

export { specificationRoutes }