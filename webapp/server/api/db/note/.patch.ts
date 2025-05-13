import { PrismaClient } from "@prisma/client"
import { getNoteSchema } from "@/prisma/schema/note"

export default defineEventHandler(async (event) => {
    const { id, title, description } = await readValidatedBody(event, getNoteSchema.parse)

    try {
        const originalNote: any = await $fetch(`/api/db/note/single/${id}`)

        if(originalNote.title === title && originalNote.description === description) return { success: true }
        
        const prisma = new PrismaClient()

        await prisma.note.update({
            where: { id: id },
            data: {
                title: title,
                description: description,    
            }
        })

        return { success: true }
    } catch (error) {
        throw createError({
            statusCode: 500,
            message: 'Something went wrong with fetching the user'
        })
    }
}) 
