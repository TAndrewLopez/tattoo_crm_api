import {
    IFindTattooRequestQuery,
    ITattooRequest,
    ITattooRequestCreationBody,
    ITattooRequestDataSource,
} from "../interfaces";
import { TattooRequestModel } from "../models";

class TattooRequestDataSource implements ITattooRequestDataSource {
    async create(data: ITattooRequestCreationBody): Promise<ITattooRequest> {
        return await TattooRequestModel.create(data);
    }

    async fetchOne(
        query: IFindTattooRequestQuery
    ): Promise<ITattooRequest | null> {
        return await TattooRequestModel.findOne(query);
    }

    async fetchAll(query?: IFindTattooRequestQuery): Promise<ITattooRequest[]> {
        return await TattooRequestModel.findAll(query);
    }
}

export default TattooRequestDataSource;
