import express, { Request, Response } from "express";

import { TattooRequestController } from "../controllers";
import { TattooRequestDataSource } from "../dataSources";
import { validator } from "../middleware";
import Validations from "../schemas";
import { TattooRequestService } from "../services";

const createTattooRequestRoutes = () => {
    const router = express.Router();
    const tattooRequestService = new TattooRequestService(new TattooRequestDataSource());
    const tattooRequestController = new TattooRequestController(tattooRequestService);

    router.get("/", (request: Request, response: Response) => {
        return tattooRequestController.fetchAllRecords(request, response);
    });

    router.get("/:id", (request: Request, response: Response) => {
        return tattooRequestController.fetchRecordById(request, response);
    });

    router.post(
        "/create",
        validator(Validations.TattooRequestSchema.NewTattooRequestSchema),
        (request: Request, response: Response) => {
            return tattooRequestController.createNewRecord(request, response);
        }
    );

    return router;
};

export default createTattooRequestRoutes();
