import { AppError } from "../errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify  } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UserSRepository";

interface IPayload{
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("Token missing", 401);
    }
    
    //Bearer 9234fdafafdya7ad
    // [0] = bearer
    // [1] = token

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "df4e680715294340a983cb9aaf6b6cbc") as IPayload;
        
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id);

        if(!user){
            throw new AppError("User does not exists", 401)
        }

        request.user = {
           id: user_id
        }
        
        next();
    } catch {
        throw new AppError("Invalid token!", 401);
        
    }
    
}