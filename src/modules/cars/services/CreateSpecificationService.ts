import { ISpecificationsRepository } from "../repositories/ISpecificationRepistory"

interface IRequest {
    name: string;
    description: string;
}


class CreateSpecicationService {
    constructor(private specificationsRepository: ISpecificationsRepository){

    }
    execute({ name, description}: IRequest): void{
        const specificationAlreadyExists = this.specificationsRepository.findByName(name)

        if (specificationAlreadyExists){
            throw new Error("Specification already exists!")
        }

       this.specificationsRepository.create({
        name,
        description
       })
    } 
}

export {CreateSpecicationService }