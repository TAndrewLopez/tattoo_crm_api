import {
    IFindTattooRequestQuery,
    ITattooRequest,
    ITattooRequestCreationBody,
    ITattooRequestDataSource,
} from "../interfaces";
import { TattooRequestModel } from "../models";

/**
 *  Data source responsible for handling CRUD operations for tattoo request.
 */
class TattooRequestDataSource implements ITattooRequestDataSource {
    /**
     *  Creates a new tattoo request record.
     * @param data The data for creating a tattoo record.
     * @returns The newly created tattoo request.
     */
    async create(data: ITattooRequestCreationBody): Promise<ITattooRequest> {
        return await TattooRequestModel.create(data);
    }

    /**
     *  Fetches a tattoo request record.
     * @param query  The query parameters.
     * @returns The fetched tattoo request or null.
     */
    async fetchOne(
        query: IFindTattooRequestQuery
    ): Promise<ITattooRequest | null> {
        return await TattooRequestModel.findOne(query);
    }

    /**
     *  Fetches all tattoo request.
     * @param query The query parameters.
     * @returns The fetched tattoo requests meeting the query parameters or an empty array.
     */
    async fetchAll(query?: IFindTattooRequestQuery): Promise<ITattooRequest[]> {
        return await TattooRequestModel.findAll(query);
    }
}

export default TattooRequestDataSource;
