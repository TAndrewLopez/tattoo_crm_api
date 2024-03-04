import express, { Request, Response } from "express";

import { UserController } from "../controllers";
import { UserDataSource } from "../dataSources";
import { validator } from "../middleware";
import ValidationSchema from "../schemas/useSchema";
import { UserService } from "../services";

const createUserRoute = () => {
    const router = express.Router();
    const userService = new UserService(new UserDataSource());
    const userController = new UserController(userService);

    router.post(
        "/register",
        validator(ValidationSchema.registerSchema),
        (request: Request, response: Response) => {
            return userController.register(request, response);
        }
    );

    router.post(
        "/login",
        validator(ValidationSchema.loginSchema),
        (request: Request, response: Response) => {
            return userController.login(request, response);
        }
    );

    return router;
};

export default createUserRoute();
