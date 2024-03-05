import {
    IFindTokenQuery,
    IToken,
    ITokenCreationBody,
    ITokenDataSource,
} from "../interfaces";
import { TokenModel } from "../models";

class TokenDataSource implements ITokenDataSource {
    async create(record: ITokenCreationBody): Promise<IToken> {
        return await TokenModel.create(record);
    }
    async fetchOne(query: IFindTokenQuery): Promise<IToken | null> {
        return await TokenModel.findOne(query);
    }

    async updateOne(
        query: IFindTokenQuery,
        data: Partial<IToken>
    ): Promise<void> {
        await TokenModel.update(data, query);
    }
}

export default TokenDataSource;
