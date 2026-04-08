import { z } from 'zod';

const RegisterUserValidation = z.object({
    body: z.object({
        name: z.string().min(3, 'Name must be at least 3 characters'),
        email: z.string().email('Invalid email address'),
        password: z.string().min(6, 'Password must be at least 6 characters'),
        image: z.string().optional(),
        gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
    }),
});

const LoginUserValidation = z.object({
    body: z.object({
        email: z.string().email('Invalid email address'),
        password: z.string().min(6, 'Password must be at least 6 characters'),
    }),
});

const UpdateUserValidation = z.object({
    body: z.object({
        name: z.string().min(3, 'Name must be at least 3 characters').optional(),
        image: z.string().optional(),
        gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
    }),
});

export const AuthValidation = {
    RegisterUserValidation,
    LoginUserValidation,
    UpdateUserValidation
};