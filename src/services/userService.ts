import {
    IFindUserQuery,
    IUser,
    IUserCreationBody,
    IUserDataSource,
} from "../interfaces/userInterface";

class UserService {
    private userDataSource: IUserDataSource;

    constructor(_userDataSource: IUserDataSource) {
        this.userDataSource = _userDataSource;
    }

    async createUser(data: IUserCreationBody): Promise<IUser> {
        return this.userDataSource.create(data);
    }

    async fetchOneByField(record: Partial<IUser>): Promise<IUser | null> {
        const query = {
            where: {
                ...record,
            },
        } as IFindUserQuery;

        return this.userDataSource.fetchOne(query);
    }

    async fetchAllByField(record: Partial<IUser>): Promise<IUser[]> {
        const query = {
            where: {
                ...record,
            },
        } as IFindUserQuery;

        return this.userDataSource.fetchAll(query);
    }

    async updateRecord(searchBy: Partial<IUser>, data: Partial<IUser>) {
        const query = {
            where: {
                ...searchBy,
            },
        } as IFindUserQuery;
        await this.userDataSource.updateOne(query, data);
    }
}

export default UserService;
