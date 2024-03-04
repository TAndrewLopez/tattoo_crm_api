import UserModel from "./userModel";
import TattooRequestModel from "./tattooRequestModel";

// ASSOCIATIONS
UserModel.hasMany(TattooRequestModel);
TattooRequestModel.belongsTo(UserModel);

export {
    UserModel,
    TattooRequestModel
}