import express, { Request, Response } from "express";

import { UserController } from "../controllers";
import { TokenDataSource, UserDataSource } from "../dataSources";
import { validator } from "../middleware";
import Schemas from "../schemas";
import { TokenService, UserService } from "../services";

const createUserRoutes = () => {
    const router = express.Router();
    const userService = new UserService(new UserDataSource());
    const tokenService = new TokenService(new TokenDataSource());
    const userController = new UserController(userService, tokenService);

    router.post("/register", validator(Schemas.UserSchema.RegisterSchema), (request: Request, response: Response) => {
        return userController.register(request, response);
    });

    router.post("/login", validator(Schemas.UserSchema.LoginSchema), (request: Request, response: Response) => {
        return userController.login(request, response);
    });

    router.post('/forgotPassword', async (request: Request, response: Response) => {
        return await userController.forgotPassword(request, response);
    })

    return router;
};

export default createUserRoutes();
