import { z } from 'zod'

export const noteSchema = z.object({
    title: z.string().min(1).max(64),
    description: z.string(),
    user_email: z.string().email(),
})

export const addNoteSchema = z.object({
    title: z.string().min(1).max(64),
    description: z.string(),
    user_email: z.string().email(),
    isOAuth: z.boolean(),
})

export const getNoteSchema = z.object({
    id: z.string(),
    title: z.string().min(1).max(64),
    description: z.string(),  
})
