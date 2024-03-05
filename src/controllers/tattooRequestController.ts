import { Request, Response } from "express";

import { ITattooRequestCreationBody, ResponseCode } from "../interfaces";
import { TattooRequestService } from "../services";
import Utility from "../utils";

class TattooRequestController {
    private tattooRequestService: TattooRequestService;

    constructor(_tattooRequestService: TattooRequestService) {
        this.tattooRequestService = _tattooRequestService;
    }

    async createNewRecord(request: Request, response: Response) {
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

            const tattooRequest = await this.tattooRequestService.createRecord(
                newTattooRequest
            );

            if (!tattooRequest) {
                return Utility.handleError(
                    response,
                    "Something went wrong creating tattoo request.",
                    ResponseCode.BAD_REQUEST
                );
            }

            return Utility.handleSuccess(
                response,
                "Appointment created successfully.",
                { tattooRequest },
                ResponseCode.SUCCESS
            );
        } catch (error) {
            return Utility.handleError(
                response,
                (error as TypeError).message,
                ResponseCode.SERVER_ERROR
            );
        }
    }

    async fetchRecordById(request: Request, response: Response) {
        try {
            const params = { ...request.params };
            const tattooRequest = await this.tattooRequestService.fetchRecordByField({
                id: parseInt(params.id),
            });

            if (!tattooRequest) {
                return Utility.handleError(
                    response,
                    `Resource with ID: ${params.id} was unavailable.`,
                    ResponseCode.NOT_FOUND
                );
            }

            return Utility.handleSuccess(
                response,
                "Resource available",
                { tattooRequest },
                ResponseCode.SUCCESS
            );
        } catch (error) {
            return Utility.handleError(
                response,
                (error as TypeError).message,
                ResponseCode.SERVER_ERROR
            );
        }
    }
}

export default TattooRequestController;
