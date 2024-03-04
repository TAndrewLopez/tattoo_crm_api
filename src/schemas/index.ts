import { RegisterSchema, LoginSchema } from "./userSchema";
import { NewTattooRequestSchema } from './tattooRequestSchema'

const UserSchema = {
    LoginSchema,
    RegisterSchema
}

const TattooRequestSchema = {
    NewTattooRequestSchema
}

const Schemas = {
    UserSchema,
    TattooRequestSchema
}

export default Schemas;