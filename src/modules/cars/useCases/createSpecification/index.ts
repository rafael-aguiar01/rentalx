import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

import { CreateSpecicationController } from "./CreateSpecificationController";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";



const specificationsRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecicationController(createSpecificationUseCase)

export { createSpecificationController }