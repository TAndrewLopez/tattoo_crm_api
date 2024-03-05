import {
    IFindTattooRequestQuery,
    ITattooRequest,
    ITattooRequestCreationBody,
    ITattooRequestDataSource,
} from "../interfaces";

class TattooRequestService {
    private tattooRequestDataSource: ITattooRequestDataSource;

    constructor(_tattooRequestDataSource: ITattooRequestDataSource) {
        this.tattooRequestDataSource = _tattooRequestDataSource;
    }

    async createRecord(
        data: ITattooRequestCreationBody
    ): Promise<ITattooRequest> {
        return this.tattooRequestDataSource.create(data);
    }

    async fetchRecordByField(
        record: Partial<ITattooRequest>
    ): Promise<ITattooRequest | null> {
        const query = {
            where: {
                ...record,
            },
        } as IFindTattooRequestQuery;

        return this.tattooRequestDataSource.fetchOne(query);
    }
}

export default TattooRequestService;
