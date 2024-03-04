import { Model, Optional } from "sequelize";

export interface ITattooRequest {
    id?: number;
    userId?: number;

    name: string;
    email: string;
    phoneNumber: string;
    preferredPronouns?: string;
    colorScheme: string;
    size: string;
    placement: string;
    description: string;
    accepted?: boolean;
    rejectionReason?: string;
    artistReferral?: string;
    consultationId?: number;
    appointmentId?: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface IFindTattooRequestQuery {
    where: {
        [key: string]: string;
    };
}

export interface ITattooRequestCreationBody
    extends Optional<
        ITattooRequest,
        | "id"
        | "userId"
        | "consultationId"
        | "appointmentId"
        | 'accepted'
        | "rejectionReason"
        | "artistReferral"
        | "createdAt"
        | "updatedAt"
    > { }

export interface ITattooRequestModel
    extends Model<ITattooRequest, ITattooRequestCreationBody>,
    ITattooRequest { }

export interface ITattooRequestDataSource {
    create(data: ITattooRequestCreationBody): Promise<ITattooRequest>;
    fetchOne(query: IFindTattooRequestQuery): Promise<ITattooRequest | null>;
}
