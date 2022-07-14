import { AppError } from "@shared/errors/AppError"


import { NextFunction, Request, Response } from "express";
import { verify  } from "jsonwebtoken";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokenRepository";
import auth from "@config/auth";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";


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
        const { sub: user_id } = verify(token, auth.secret_token ) as IPayload;
        
        request.user = {
           id: user_id
        }
        
        next();
    } catch {
        throw new AppError("Invalid token!", 401);
        
    }
    
}