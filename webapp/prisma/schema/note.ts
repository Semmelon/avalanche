import { z } from 'zod'

export const noteSchema = z.object({
    titel: z.string().min(1).max(64),
    description: z.string(),
    user_email: z.string().email(),
})
