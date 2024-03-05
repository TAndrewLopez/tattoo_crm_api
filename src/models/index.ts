import UserModel from "./userModel";
import TattooRequestModel from "./tattooRequestModel";
import TokenModel from './tokenModel'

// ASSOCIATIONS
UserModel.hasMany(TattooRequestModel);
TattooRequestModel.belongsTo(UserModel);

export {
    UserModel,
    TattooRequestModel,
    TokenModel
}