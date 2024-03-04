import {
    IAppointment,
    IAppointmentCreationBody,
    IAppointmentDataSource,
    IFindAppointmentQuery,
} from "../interfaces";
import { AppointmentModel } from "../models";

class AppointmentDataSource implements IAppointmentDataSource {
    async create(data: IAppointmentCreationBody): Promise<IAppointment> {
        return await AppointmentModel.create(data);
    }

    async fetchAll(query: IFindAppointmentQuery): Promise<IAppointment[]> {
        return await AppointmentModel.findAll();
    }

    async fetchOne(query: IFindAppointmentQuery): Promise<IAppointment | null> {
        return await AppointmentModel.findOne(query);
    }

    async updateOne(
        query: IFindAppointmentQuery,
        data: Partial<IAppointment>
    ): Promise<void> {
        await AppointmentModel.update(data, query);
    }
}

export default AppointmentDataSource;
