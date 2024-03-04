import { Model, Optional } from "sequelize";

export interface IAppointment {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    description: string;
    size: string;
    placement: string;
    color: string;
    preferredPronouns?: string;
    accepted?: boolean;
    requiresConsultation?: boolean;
    consultationDate?: string;
    sessionAmount?: number;
    depositPaid?: boolean;
    rejectionReason?: string;
    artistReferral?: string;
    referenceImageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IFindAppointmentQuery {
    where: {
        [key: string]: string;
    };
}

export interface IAppointmentCreationBody
    extends Optional<
        IAppointment,
        | "id"
        | "accepted"
        | "requiresConsultation"
        | "consultationDate"
        | "sessionAmount"
        | "depositPaid"
        | "rejectionReason"
        | "artistReferral"
        | "referenceImageUrl"
        | "createdAt"
        | "updatedAt"
    > { }

export interface IAppointmentModel
    extends Model<IAppointment, IAppointmentCreationBody>,
    IAppointment { }


export interface IAppointmentDataSource {
    create(data: IAppointmentCreationBody): Promise<IAppointment>;
    fetchOne(query: IFindAppointmentQuery): Promise<IAppointment | null>;
    fetchAll(query: IFindAppointmentQuery): Promise<IAppointment[]>;
    updateOne(query: IFindAppointmentQuery, data: Partial<IAppointment>): Promise<void>;
}