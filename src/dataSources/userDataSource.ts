import {
    IFindUserQuery,
    IUser,
    IUserCreationBody,
    IUserDataSource,
} from "../interfaces";
import { UserModel } from "../models";


class UserDataSource implements IUserDataSource {
    async create(data: IUserCreationBody): Promise<IUser> {
        return await UserModel.create(data);
    }
    
    async fetchOne(query: IFindUserQuery): Promise<IUser | null> {
        return await UserModel.findOne(query);
    }
}

export default UserDataSource;