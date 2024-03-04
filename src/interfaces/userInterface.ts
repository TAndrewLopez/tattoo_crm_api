import { Model, Optional } from "sequelize";

export interface IUser {
    id?: number;
    email: string;
    password: string;
    phoneNumber: string;
    accountStatus: string;
    isEmailVerified: string;
    role: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
    preferredPronouns?: string;
    profileSettings?: string;
    birthday?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IFindUserQuery {
    where: {
        [key: string]: string;
    };
}

export interface IUserCreationBody
    extends Optional<
        IUser,
        | "id"
        | "firstName"
        | "lastName"
        | "imageUrl"
        | "preferredPronouns"
        | "profileSettings"
        | "birthday"
        | "createdAt"
        | "updatedAt"
    > { }

export interface IUserModel extends Model<IUser, IUserCreationBody>, IUser { }

export interface IUserDataSource {
    create(data: IUserCreationBody): Promise<IUser>;
    fetchOne(query: IFindUserQuery): Promise<IUser | null>;
    fetchAll(query: IFindUserQuery): Promise<IUser[]>;
    updateOne(query: IFindUserQuery, data: Partial<IUser>): Promise<void>;
}
