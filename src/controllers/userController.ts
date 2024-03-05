import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import JWT from "jsonwebtoken";

import { AccountStatus, EmailStatus, IToken, IUserCreationBody, ResponseCode, UserRole } from "../interfaces";
import { EmailService, TokenService, UserService } from "../services";
import Utility from "../utils";

/**
 * Controller responsible for handing user-related operations such as registration, login, and password recovery.
 */
class UserController {
  private userService: UserService;
  private tokenService: TokenService;

  /**
   * Constructs a new instance of the UserController class.
   * @param _userService The UserService instance for interacting with user data.
   * @param _tokenService The TokenService instance for token management.
   */
  constructor(_userService: UserService, _tokenService: TokenService) {
    this.userService = _userService;
    this.tokenService = _tokenService;
  }

  /**
   * Handles user registration.
   * @param request The HTTP request containing the user's data.
   * @param response The HTTP response to send.
   * @returns The response containing the just created user or an error message of the failed operation.
   */
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
        return Utility.handleError(response, "Email already exists.", ResponseCode.ALREADY_EXISTS);
      }

      const user = await this.userService.createRecord(newUser);
      user.password = "";

      return Utility.handleSuccess(response, "User created successfully.", { user }, ResponseCode.SUCCESS);
    } catch (error) {
      return Utility.handleError(response, (error as TypeError).message, ResponseCode.SERVER_ERROR);
    }
  }

  /**
   * Handles user login
   * @param request The HTTP request containing the user's login information.
   * @param response The HTTP response to send.
   * @returns The response containing the fetched user and authentication token upon successful login.
   */
  async login(request: Request, response: Response) {
    try {
      const params = { ...request.body };
      const user = await this.userService.fetchRecordByField({
        email: params.email,
      });

      if (!user) {
        return Utility.handleError(response, "Invalid Credentials", ResponseCode.NOT_FOUND);
      }

      const passwordMatches = await bcrypt.compare(params.password, user.password);

      if (!passwordMatches) {
        return Utility.handleError(response, "Invalid Credentials", ResponseCode.NOT_FOUND);
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

      return Utility.handleSuccess(response, "Login Successful.", { user, token }, ResponseCode.SUCCESS);
    } catch (error) {
      return Utility.handleError(response, (error as TypeError).message, ResponseCode.SERVER_ERROR);
    }
  }

  /**
   * Initiates the password recovery process.
   * @param request The HTTP request containing the user's email.
   * @param response The HTTP response to send.
   * @returns The response indicating the success or failure of the password recovery process.
   */
  async forgotPassword(request: Request, response: Response) {
    try {
      const params = { ...request.body };
      const user = await this.userService.fetchRecordByField({
        email: params.email,
      });

      if (!user) {
        return Utility.handleError(response, "Invalid Credentials.", ResponseCode.NOT_FOUND);
      }

      const token = (await this.tokenService.createForgotPasswordToken(user.email)) as IToken;

      await EmailService.sendForgotPasswordEmail(user.email, token.code);

      return Utility.handleSuccess(response, "Forgot password reset code has been emailed.", {}, ResponseCode.SUCCESS);
    } catch (error) {
      return Utility.handleError(response, (error as TypeError).message, ResponseCode.SERVER_ERROR);
    }
  }
}

export default UserController;
