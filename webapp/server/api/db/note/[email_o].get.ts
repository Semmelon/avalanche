import { PrismaClient } from "@prisma/client"
import { GetNote } from "~/types/note"

export default defineEventHandler(async (event): Promise<GetNote[] | undefined> => {
    const email_o = event.context.params?.email_o

    if(email_o === undefined){
        throw createError({
            statusCode: 401,
            message: 'Bad Request',
        })
    }
 
    const email: string = email_o.split(';')[0]
    const isOAuth: boolean = (email_o.split(';')[1] === 'true')

    try {
        const prisma = new PrismaClient()
        const user = await prisma.user.findFirst({
            where: {
                email: email,
                isOAuth: isOAuth,
            }
        })

        if(user == null){
            throw createError({
                statusCode: 404,
                message: 'User not found',
            })
        }

        const notes = await prisma.note.findMany({
            where: {
                creatorId: user.id,
            }
        })

        if(notes == null){
            throw createError({
                statusCode: 404,
                message: 'No note found',
            })
        }
        
        return notes.map((note): GetNote => ({
            id: note.id,
            title: note.title,
            description: note.description
        })) as GetNote[]
    } catch (error) {
        throw createError({
            statusCode: 500,
            message: 'No note found',
        })
    }
})
