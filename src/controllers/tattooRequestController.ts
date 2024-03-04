import { Request, Response } from "express";

import { ITattooRequestCreationBody, ResponseCode } from "../interfaces";
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
            const newTattooRequest = {
                userId: params.userId,
                name: params.name,
                email: params.email,
                phoneNumber: params.phoneNumber,
                preferredPronouns: params.preferredPronouns,
                colorScheme: params.colorScheme,
                size: params.size,
                placement: params.placement,
                description: params.description,
            } as ITattooRequestCreationBody;

            const tattooRequest = await this.tattooRequestService.createRecord(newTattooRequest);

            if (!tattooRequest) {
                Utility.handleError(
                    response,
                    "Something went wrong creating tattoo request.",
                    ResponseCode.BAD_REQUEST
                );
            }

            Utility.handleSuccess(
                response,
                "Appointment created successfully.",
                { tattooRequest },
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