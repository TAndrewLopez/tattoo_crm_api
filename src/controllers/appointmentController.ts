import { Request, Response } from "express";

import { ResponseCode } from "../interfaces";
import { AppointmentService } from "../services";
import Utility from "../utils";


class AppointmentController {
    private appointmentService: AppointmentService;

    constructor(_appointmentService: AppointmentService) {
        this.appointmentService = _appointmentService
    }

    async create(request: Request, response: Response) {
        try {
            const params = { ...request.body };
        } catch (error) {
            Utility.handleError(
                response,
                "Email already exists.",
                ResponseCode.ALREADY_EXISTS
            );
        }
    }

}

export default AppointmentController;