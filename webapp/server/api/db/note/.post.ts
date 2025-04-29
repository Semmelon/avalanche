import { PrismaClient } from "@prisma/client/extension"
import { noteSchema } from "~/prisma/schema/note"

export default defineEventHandler(async (event) => {
    const { titel, description, user_email } = await readValidatedBody(event, noteSchema.parse)

     const user_id = ''

    try {
        const res = await $fetch(`/api/db/user/${user_email}`)
    } catch (error) {
        return createError({
            statusCode: 500,
            message: 'Something went wrong with fetching the user'
        })
    }

    try {
        const prisma = new PrismaClient()

        await prisma.note.create({
            data: {
                titel: titel,
                description: description,
                creator: user_id
            }
        })
    } catch (error) {
        
    }
}) 