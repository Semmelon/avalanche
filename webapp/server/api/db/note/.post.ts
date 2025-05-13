import { PrismaClient } from "@prisma/client"
import { addNoteSchema } from "@/prisma/schema/note"

export default defineEventHandler(async (event) => {
    const { title, description, user_email, isOAuth } = await readValidatedBody(event, addNoteSchema.parse)

    const email_o = user_email+';'+isOAuth

    try {
        const data: any = await $fetch(`/api/db/user/${email_o}`)

        const user_id = data.user.id
        
        try {
            const prisma = new PrismaClient()

            if(user_id === '') createError({
                statusCode: 500,
                message: "Somethign went wrong with fetchting the user"
            })

            await prisma.note.create({
                data: {
                    titel: title,
                    description: description,
                    creatorId: user_id,
                }
            })
        } catch (error) {
            console.log(error)
            return createError({
                statusCode: 500,
                message: 'Something went wrong while creating the note'
            })
        }
    } catch (error) {
        return createError({
            statusCode: 500,
            message: 'Something went wrong with fetching the user'
        })
    }

    return { success: true }
}) 
