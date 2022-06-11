import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { CreateSpecicationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const specificationsRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
    const { name, description} = request.body
    const createSpecificationService = new CreateSpecicationService(specificationsRepository);

    createSpecificationService.execute({ name, description});

    return response.status(201).send()
})

export { specificationRoutes }