import * as yup from 'yup';

export const NewTattooRequestSchema = yup.object({
    userId: yup.number().nullable(),
    name: yup.string().min(1).trim().required(),
    email: yup.string().email().lowercase().trim().required(),
    phoneNumber: yup.number().min(10).required(),
    preferredPronouns: yup.string().lowercase().trim().nullable(),
    colorScheme: yup.string().lowercase().trim().required(),
    size: yup.string().lowercase().trim().required(),
    placement: yup.string().lowercase().trim().required(),
    description: yup.string().lowercase().min(5).max(255).trim().required(),
})
