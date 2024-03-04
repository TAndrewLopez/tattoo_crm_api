import { DataTypes } from "sequelize";

import db from '../db';
import { IUserModel } from "../interfaces/userInterface";

const UserModel = db.define<IUserModel>("UserModel", {
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.STRING, allowNull: false },
    accountStatus: { type: DataTypes.STRING, allowNull: false },
    isEmailVerified: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    imageUrl: { type: DataTypes.STRING, allowNull: true },
    preferredPronouns: { type: DataTypes.STRING, allowNull: true },
    profileSettings: { type: DataTypes.STRING, allowNull: true },
    birthday: { type: DataTypes.STRING, allowNull: true },
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
}, {
    timestamps: true,
    tableName: 'user',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
})

export default UserModel;