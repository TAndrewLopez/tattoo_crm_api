import {
    IFindUserQuery,
    IUser,
    IUserCreationBody,
    IUserDataSource,
} from "../interfaces";

class UserService {
    private userDataSource: IUserDataSource;

    constructor(_userDataSource: IUserDataSource) {
        this.userDataSource = _userDataSource;
    }

    async createRecord(data: IUserCreationBody): Promise<IUser> {
        return await this.userDataSource.create(data);
    }

    async fetchRecordByField(record: Partial<IUser>): Promise<IUser | null> {
        const query = {
            where: {
                ...record,
            },
        } as IFindUserQuery;

        return await this.userDataSource.fetchOne(query);
    }
}

export default UserService;
