import { PrismaClient } from "@prisma/client"

export default defineEventHandler(async (event) => {
    const note_id = event.context.params?.email_o

    try {
        const prisma = new PrismaClient()

        await prisma.note.delete({
            where: {
                id: note_id,
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
