import { PrismaClient } from "@prisma/client"
import { GetNote } from "@/types/note"

export default defineEventHandler(async (event): Promise<GetNote | undefined> => {
    const note_id = event.context.params?.note_id

    if(note_id === undefined){
        throw createError({
            statusCode: 401,
            message: 'Bad Request',
        })
    }

    try {
        const prisma = new PrismaClient()
        
        const note = await prisma.note.findFirst({
            where: {
                id: note_id,
            }
        })

        if(note == null) {
            throw createError({
            statusCode: 404,
            message: 'No Note Found',
            })
        }

        return {
            id: note.id,
            title: note.title,
            description: note.description
        } as GetNote
    } catch (error) {
        //console.log(error)
        throw createError({
            statusCode: 500,
            message: 'No note found',
        })
    }
})
