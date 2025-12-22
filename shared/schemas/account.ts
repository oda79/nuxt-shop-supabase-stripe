import { z } from 'zod'

export const RegisterSchema = z.object({
  fullName: z.string().min(3, 'Min 8 characters'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Min 8 characters'),
  confirmPassword: z.string().min(8, 'Min 8 characters'),
  acceptedTerms: z.boolean().refine( v => v === true, { message: 'You must accept the terms and conditions' }),  
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export const LoginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Min 8 characters'),
  acceptedTerms: z.boolean().refine( v => v === true, { message: 'You must accept the terms and conditions' }),  
})

export const ForgotPasswordSchema = z.object({
  email: z.string().email('Invalid email'),  
})