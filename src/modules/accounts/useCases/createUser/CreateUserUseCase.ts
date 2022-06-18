import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDto";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    
    constructor(
        @inject("UsersRepository")
        private UsersRepository: IUsersRepository
    ){}

    async execute({
        name, 
        username, 
        email, 
        password, 
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        await this.UsersRepository.create({
            name, 
            username, 
            email, 
            password,
            driver_license,
        });
    }
}

export { CreateUserUseCase }