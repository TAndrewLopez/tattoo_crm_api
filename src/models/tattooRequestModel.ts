import { DataTypes } from "sequelize";

import db from "../db";
import { ITattooRequestModel } from "../interfaces";

const TattooRequestModel = db.define<ITattooRequestModel>(
    "tattooRequest",
    {
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        phoneNumber: { type: DataTypes.STRING, allowNull: false },
        preferredPronouns: { type: DataTypes.STRING, allowNull: true },
        colorScheme: { type: DataTypes.STRING, allowNull: false },
        size: { type: DataTypes.STRING, allowNull: false },
        placement: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        accepted: { type: DataTypes.BOOLEAN, allowNull: true },
        rejectionReason: { type: DataTypes.STRING, allowNull: true },
        artistReferral: { type: DataTypes.STRING, allowNull: true },
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
        tableName: "tattooRequest",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    }
);

export default TattooRequestModel;
