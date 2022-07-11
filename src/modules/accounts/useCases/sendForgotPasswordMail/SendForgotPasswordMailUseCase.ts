import { inject, injectable } from "tsyringe";
import { v4 as uuidv4 } from "uuid"
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

@injectable()
class SendForgotPasswordMailUseCase {
    constructor (
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DaysjDateProvider")
        private dateProvider: IDateProvider
    ){}

    async execute(email: string){
        const user = await this.usersRepository.findByEmail(email);

        if(!user){
            throw new AppError("User does not exists!");
        }
         
        const token = uuidv4();
        const expires_hours = 3;

        const expires_date = this.dateProvider.addHours(expires_hours)
        
        await this.usersTokensRepository.create({
            refresh_token: token,
            user_id: user.id,
            expires_date,
        })

    }
}

export { SendForgotPasswordMailUseCase }