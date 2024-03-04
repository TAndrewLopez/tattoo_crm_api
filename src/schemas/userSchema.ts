import * as yup from 'yup';

export const RegisterSchema = yup.object({
    email: yup.string().lowercase().trim().required(),
    password: yup.string().min(6).trim().required(),
    phoneNumber: yup.number().min(10).required(),
})

export const LoginSchema = yup.object({
    email: yup.string().lowercase().trim().required(),
    password: yup.string().min(6).trim().required(),
})

