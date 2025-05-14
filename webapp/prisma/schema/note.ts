import { z } from 'zod'

export const noteSchema = z.object({
    title: z.string().min(1, 'You need a title').max(64, 'The title is too long'),
    description: z.string(),
    user_email: z.string().email(),
})

export type NoteData = z.infer<typeof noteSchema>

export const addNoteSchema = z.object({
    title: z.string().min(1, 'You need a title').max(64, 'The title is too long'),
    description: z.string(),
    user_email: z.string().email(),
    isOAuth: z.boolean(),
})

export type AddNoteData = z.infer<typeof addNoteSchema>

export const getNoteSchema = z.object({
    id: z.string(),
    title: z.string().min(1, 'You need a title').max(64, 'The title is too long'),
    description: z.string(),  
})

export type GetNoteData = z.infer<typeof getNoteSchema>

export const noteFormSchema = z.object({
    title: z.string().min(1, 'You need a title').max(64, 'The title is too long'),
    description: z.string()
})

export type NoteFormData = z.infer<typeof noteFormSchema>
