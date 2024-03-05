import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models";

const requireToken = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const token = request.headers.authorization;
        const user = await UserModel.findByToken
    } catch (error) {

    }
}