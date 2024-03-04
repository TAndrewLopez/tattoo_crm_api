import * as yup from 'yup';

const registerSchema = yup.object({
    email: yup.string().lowercase().trim().required(),
    password: yup.string().min(6).trim().required(),
    phoneNumber: yup.number().min(10).required(),
})

const ValidationSchema = {
    registerSchema
}

export default ValidationSchema;