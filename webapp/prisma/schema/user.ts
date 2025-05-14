import { z } from 'zod'

export const userSchema = z.object({
    email: z.string().email('You must enter an email'),
    password: z.string().min(8, 'The Password needs to be at least 8 signs long'),
})

export type UserData = z.infer<typeof userSchema>

export const userEmail = z.object({
    email: z.string().email('You must enter an email'),
})
