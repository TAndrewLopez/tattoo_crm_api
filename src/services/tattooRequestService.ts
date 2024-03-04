import {
    IFindTattooRequestQuery,
    ITattooRequest,
    ITattooRequestCreationBody,
    ITattooRequestDataSource,
} from "../interfaces";

class AppointmentService {
    private appointmentDataSource: ITattooRequestDataSource;

    constructor(_appointmentDataSource: ITattooRequestDataSource) {
        this.appointmentDataSource = _appointmentDataSource;
    }

    async createRecord(
        data: ITattooRequestCreationBody
    ): Promise<ITattooRequest> {
        return this.appointmentDataSource.create(data);
    }

    async fetchRecordByField(
        record: Partial<ITattooRequest>
    ): Promise<ITattooRequest | null> {
        const query = {
            where: {
                ...record,
            },
        } as IFindTattooRequestQuery;

        return this.appointmentDataSource.fetchOne(query);
    }
}

export default AppointmentService;
