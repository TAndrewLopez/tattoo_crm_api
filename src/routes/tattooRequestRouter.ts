import express, { Request, Response } from "express";

import { TattooRequestController } from "../controllers";
import { TattooRequestDataSource } from "../dataSources";
import { validator } from "../middleware";
import Validations from "../schemas";
import { TattooRequestService } from "../services";

const createAppointmentRoute = () => {
    const router = express.Router();
    const tattooRequestService = new TattooRequestService(
        new TattooRequestDataSource()
    );
    const tattooRequestController = new TattooRequestController(
        tattooRequestService
    );

    router.post(
        "/create",
        validator(Validations.TattooRequestSchema.NewTattooRequestSchema),
        (request: Request, response: Response) => {
            return tattooRequestController.createNewRequest(request, response);
        }
    );

    return router;
};

export default createAppointmentRoute();
