import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import JWT from "jsonwebtoken";

import {
    AccountStatus,
    EmailStatus,
    IUserCreationBody,
    ResponseCode,
    UserRole,
} from "../interfaces";
import { TokenService, UserService } from "../services";
import Utility from "../utils";

class UserController {
    private userService: UserService;
    private tokenService: TokenService;

    constructor(_userService: UserService, _tokenService: TokenService) {
        this.userService = _userService;
        this.tokenService = _tokenService;
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

            const userExists = await this.userService.fetchRecordByField({
                email: newUser.email,
            });

            if (userExists) {
                return Utility.handleError(
                    response,
                    "Email already exists.",
                    ResponseCode.ALREADY_EXISTS
                );
            }

            const user = await this.userService.createRecord(newUser);
            user.password = "";

            return Utility.handleSuccess(
                response,
                "User created successfully.",
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

    async login(request: Request, response: Response) {
        try {
            const params = { ...request.body };
            const user = await this.userService.fetchRecordByField({
                email: params.email,
            });

            if (!user) {
                return Utility.handleError(
                    response,
                    "Invalid Credentials",
                    ResponseCode.NOT_FOUND
                );
            }

            const passwordMatches = await bcrypt.compare(
                params.password,
                user.password
            );

            if (!passwordMatches) {
                return Utility.handleError(
                    response,
                    "Invalid Credentials",
                    ResponseCode.NOT_FOUND
                );
            }

            user.password = "";

            const token = JWT.sign(
                {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role,
                },
                process.env.JWT_KEY as string,
                {
                    expiresIn: "30d",
                }
            );

            return Utility.handleSuccess(
                response,
                "Successful.",
                { user, token },
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

    async forgotPassword(request: Request, response: Response) {
        try {
            const params = { ...request.body };
            const user = await this.userService.fetchRecordByField({
                email: params.email,
            })

            if (!user) {
                return Utility.handleError(
                    response,
                    "Invalid Credentials.",
                    ResponseCode.NOT_FOUND
                )
            }

            const token = await this.tokenService.createForgotPasswordToken(user.email);
            // TODO: IMPLEMENT EMAIL SERVICE

            return Utility.handleSuccess(
                response,
                "Forgot password reset code has been emailed.",
                {},
                ResponseCode.SUCCESS
            )
        } catch (error) {
            return Utility.handleError(
                response,
                (error as TypeError).message,
                ResponseCode.SERVER_ERROR
            );
        }
    }

    async resetPassword(request: Request, response: Response) {
        try {
            return Utility.handleSuccess(
                response,
                "Things happened.",
                {},
                ResponseCode.SUCCESS
            )
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
