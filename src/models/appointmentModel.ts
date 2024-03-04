import { DataTypes } from "sequelize";

import db from "../db";
import { IAppointmentModel } from "../interfaces";

const AppointmentModel = db.define<IAppointmentModel>(
    "AppointmentModel",
    {
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        phoneNumber: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        size: { type: DataTypes.STRING, allowNull: false },
        placement: { type: DataTypes.STRING, allowNull: false },
        color: { type: DataTypes.STRING, allowNull: false },
        preferredPronouns: { type: DataTypes.STRING, allowNull: true },
        accepted: { type: DataTypes.BOOLEAN, allowNull: true },
        requiresConsultation: { type: DataTypes.BOOLEAN, allowNull: true },
        consultationDate: { type: DataTypes.STRING, allowNull: true },
        sessionAmount: { type: DataTypes.INTEGER, allowNull: true },
        depositPaid: { type: DataTypes.BOOLEAN, allowNull: true },
        rejectionReason: { type: DataTypes.STRING, allowNull: true },
        artistReferral: { type: DataTypes.STRING, allowNull: true },
        referenceImageUrl: { type: DataTypes.STRING, allowNull: true },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        timestamps: true,
        tableName: "appointment",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    }
);

export default AppointmentModel;
