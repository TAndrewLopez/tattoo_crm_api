import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import UserService from "../services/userService";
import { IUserCreationBody } from "../interfaces/userInterface";
import {
    AccountStatus,
    EmailStatus,
    UserRole,
} from "../interfaces/enum/userEnum";
import Utility from "../utils";
import { ResponseCode } from "../interfaces/enum/responseCodeEnum";

class UserController {
    private userService: UserService;

    constructor(_userService: UserService) {
        this.userService = _userService;
    }

    async register(request: Request, response: Response) {
        try {
            const params = { ...request.body };
            const newUser = {
                email: params.email,
                password: bcrypt.hashSync(params.password, 10),
                phoneNumber: params.phoneNumber,
                accountStatus: AccountStatus.INACTIVE,
                isEmailVerified: EmailStatus.UNVERIFIED,
                role: UserRole.CUSTOMER,
            } as IUserCreationBody;

            const userExists = await this.userService.fetchOneByField({
                email: newUser.email,
            });

            if (userExists) {
                Utility.handleError(
                    response,
                    "Email already exists.",
                    ResponseCode.ALREADY_EXISTS,
                )
            }

            const user = await this.userService.createUser(newUser);
            user.password = '';


            return Utility.handleSuccess(
                response,
                "Successful.",
                { user },
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

export default UserController;
