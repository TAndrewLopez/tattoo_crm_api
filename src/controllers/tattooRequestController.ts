import { Request, Response } from "express";

import { ResponseCode } from "../interfaces";
import { TattooRequestService } from "../services";
import Utility from "../utils";


class TattooRequestController {
    private tattooRequestService: TattooRequestService;

    constructor(_tattooRequestService: TattooRequestService) {
        this.tattooRequestService = _tattooRequestService
    }

    async createNewRequest(request: Request, response: Response) {
        try {
            const params = { ...request.body };

            Utility.handleSuccess(
                response,
                "Appointment created successfully.",
                ResponseCode.SUCCESS
            );
        } catch (error) {
            Utility.handleError(
                response,
                "Email already exists.",
                ResponseCode.ALREADY_EXISTS
            );
        }
    }

}

export default TattooRequestController;