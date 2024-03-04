// ENUMS
import { TattooColor } from "./enum/appointmentEnum";
import { ResponseCode } from "./enum/responseCodeEnum";
import { EmailStatus } from "./enum/userEnum";
import { UserRole } from "./enum/userEnum";
import { AccountStatus } from "./enum/userEnum";

// QUERY INTERFACES
import { IFindUserQuery } from "./userInterface";
import { IFindTattooRequestQuery } from "./tattooRequestInterface";

// CREATION INTERFACES
import { IUserCreationBody } from "./userInterface";
import { ITattooRequestCreationBody } from "./tattooRequestInterface";

// DB MODELS
import { IUserModel } from "./userInterface";
import { ITattooRequestModel } from "./tattooRequestInterface";

// DATA SOURCES
import { IUserDataSource } from "./userInterface";
import { ITattooRequestDataSource } from "./tattooRequestInterface";

// INTERFACES
import { IUser } from "./userInterface";
import { ITattooRequest } from "./tattooRequestInterface";


export {
    TattooColor,
    ResponseCode,
    EmailStatus,
    UserRole,
    AccountStatus,
    IUser,
    ITattooRequest,
    IFindUserQuery,
    IFindTattooRequestQuery,
    IUserCreationBody,
    ITattooRequestCreationBody,
    IUserModel,
    ITattooRequestModel,
    IUserDataSource,
    ITattooRequestDataSource,
};
