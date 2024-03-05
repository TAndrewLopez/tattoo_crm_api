import { Request, Response } from "express";

import { ITattooRequestCreationBody, ResponseCode } from "../interfaces";
import { TattooRequestService } from "../services";
import Utility from "../utils";

/**
 *  Controller responsible for handling CRUD operations for tattoo request.
 */
class TattooRequestController {
    private tattooRequestService: TattooRequestService;

    /**
     *  Constructs a new instance of the TattooRequestController class.
     * @param _tattooRequestService The TattooRequestService instance for interacting with tattoo request data.
     */
    constructor(_tattooRequestService: TattooRequestService) {
        this.tattooRequestService = _tattooRequestService;
    }

    /**
     *  Creates a new tattoo request record.
     * @param request The HTTP request containing the tattoo request data.
     * @param response The HTTP response to send.
     * @returns The response containing the just created tattoo request or an error message of the failed operation.
     */
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

            const tattooRequest = await this.tattooRequestService.createRecord(newTattooRequest);

            if (!tattooRequest) {
                return Utility.handleError(
                    response,
                    "Something went wrong creating the tattoo request.",
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
            return Utility.handleError(response, (error as TypeError).message, ResponseCode.SERVER_ERROR);
        }
    }

    /**
     *  Fetches a tattoo request record by its ID.
     * @param request The HTTP request containing the tattoo request ID.
     * @param response The HTTP response to send.
     * @returns The response containing the fetched tattoo request or an error message of the failed operation.
     */
    async fetchRecordById(request: Request, response: Response) {
        try {
            const params = { ...request.params };
            const tattooRequest = await this.tattooRequestService.fetchRecordByField({
                id: parseInt(params.id),
            });

            if (!tattooRequest) {
                return Utility.handleError(response, `Resource with ID: ${params.id} was unavailable.`, ResponseCode.NOT_FOUND);
            }

            return Utility.handleSuccess(response, "Fetched resource successfully.", { tattooRequest }, ResponseCode.SUCCESS);
        } catch (error) {
            return Utility.handleError(response, (error as TypeError).message, ResponseCode.SERVER_ERROR);
        }
    }

    /**
     *  Fetches all tattoo request records.
     * @param request The HTTP request.
     * @param response  The HTTP response to send.
     * @returns The response containing all fetched tattoo requests or an error message of the failed operation.
     */
    async fetchAllRecords(request: Request, response: Response) {
        try {
            const tattooRequests = await this.tattooRequestService.fetchAllRecords();
            return Utility.handleSuccess(
                response,
                "Fetched resource successfully.",
                { tattooRequests },
                ResponseCode.SUCCESS
            );
        } catch (error) {
            return Utility.handleError(response, (error as TypeError).message, ResponseCode.SERVER_ERROR);
        }
    }
}

export default TattooRequestController;
