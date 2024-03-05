import { Model, Optional } from "sequelize";

export interface IToken {
    id?: number;
    key: string;
    code: string;
    type: string;
    status: string;
    expires: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface IFindTokenQuery {
    where: {
        [key: string]: string
    }
}

export interface ITokenCreationBody extends Optional<IToken, "id" | "createdAt" | 'updatedAt'> { }

export interface ITokenModel extends Model<IToken, ITokenCreationBody>, IToken { }

export interface ITokenDataSource {
    create(record: ITokenCreationBody): Promise<IToken>;
    fetchOne(query: IFindTokenQuery): Promise<IToken | null>;
    updateOne(query: IFindTokenQuery, data: Partial<IToken>): Promise<void>;
}