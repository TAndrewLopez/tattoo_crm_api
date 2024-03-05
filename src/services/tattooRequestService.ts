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

    async createRecord(data: ITattooRequestCreationBody): Promise<ITattooRequest> {
        return await this.tattooRequestDataSource.create(data);
    }

    async fetchRecordByField(record: Partial<ITattooRequest>): Promise<ITattooRequest | null> {
        const query = {
            where: {
                ...record,
            },
        } as IFindTattooRequestQuery;

        return await this.tattooRequestDataSource.fetchOne(query);
    }

    async fetchAllRecords(record?: Partial<ITattooRequest>): Promise<ITattooRequest[]> {
        const query = { where: { ...record } } as IFindTattooRequestQuery;
        return await this.tattooRequestDataSource.fetchAll(query);
    }
}

export default TattooRequestService;
