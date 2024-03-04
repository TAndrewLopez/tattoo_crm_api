// ENUMS
import { TattooColor } from "./enum/appointmentEnum";
import { ResponseCode } from "./enum/responseCodeEnum";
import { EmailStatus } from "./enum/userEnum";
import { UserRole } from "./enum/userEnum";
import { AccountStatus } from "./enum/userEnum";

// QUERY INTERFACES
import { IFindUserQuery } from "./userInterface";
import { IFindAppointmentQuery } from "./appointmentInterface";

// CREATION INTERFACES
import { IUserCreationBody } from "./userInterface";
import { IAppointmentCreationBody } from "./appointmentInterface";

// DB MODELS
import { IUserModel } from "./userInterface";
import { IAppointmentModel } from "./appointmentInterface";

// DATA SOURCES
import { IUserDataSource } from "./userInterface";
import { IAppointmentDataSource } from "./appointmentInterface";

// INTERFACES
import { IUser } from "./userInterface";
import { IAppointment } from "./appointmentInterface";


export {
    TattooColor,
    ResponseCode,
    EmailStatus,
    UserRole,
    AccountStatus,
    IUser,
    IAppointment,
    IFindUserQuery,
    IFindAppointmentQuery,
    IUserCreationBody,
    IAppointmentCreationBody,
    IUserModel,
    IAppointmentModel,
    IUserDataSource,
    IAppointmentDataSource,
};
