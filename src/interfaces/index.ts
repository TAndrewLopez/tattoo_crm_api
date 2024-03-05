// ENUMS
import { TattooColor } from "./enum/appointmentEnum";
import { ResponseCode } from "./enum/responseCodeEnum";
import { EmailStatus } from "./enum/userEnum";
import { UserRole } from "./enum/userEnum";
import { AccountStatus } from "./enum/userEnum";

// QUERY INTERFACES
import { IFindUserQuery } from "./userInterface";
import { IFindTokenQuery } from "./tokenInterface";
import { IFindTattooRequestQuery } from "./tattooRequestInterface";

// CREATION INTERFACES
import { IUserCreationBody } from "./userInterface";
import { ITokenCreationBody } from "./tokenInterface";
import { ITattooRequestCreationBody } from "./tattooRequestInterface";

// DB MODELS
import { IUserModel } from "./userInterface";
import { ITokenModel } from "./tokenInterface";
import { ITattooRequestModel } from "./tattooRequestInterface";

// DATA SOURCES
import { IUserDataSource } from "./userInterface";
import { ITokenDataSource } from "./tokenInterface";
import { ITattooRequestDataSource } from "./tattooRequestInterface";

// INTERFACES
import { IUser } from "./userInterface";
import { IToken } from "./tokenInterface";
import { ITattooRequest } from "./tattooRequestInterface";


export {
    TattooColor,
    ResponseCode,
    EmailStatus,
    UserRole,
    AccountStatus,
    IUser,
    IToken,
    ITattooRequest,
    IFindUserQuery,
    IFindTokenQuery,
    IFindTattooRequestQuery,
    IUserCreationBody,
    ITokenCreationBody,
    ITattooRequestCreationBody,
    IUserModel,
    ITokenModel,
    ITattooRequestModel,
    IUserDataSource,
    ITokenDataSource,
    ITattooRequestDataSource,
};
