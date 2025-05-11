import { z } from 'zod'

export const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const userEmail = z.object({
    email: z.string().email(),
})
