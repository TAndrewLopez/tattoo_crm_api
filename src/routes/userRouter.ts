import express, { Request, Response } from "express";

import UserController from "../controllers/userController";
import UserService from "../services/userService";
import UserDataSource from "../dataSources/userDataSource";
import ValidationSchema from "../schemas/useSchema";
import { validator } from "../middleware";

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

    return router;
};

export default createUserRoute();
