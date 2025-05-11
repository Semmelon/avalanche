import { PrismaClient } from "@prisma/client"
import { userEmail } from "@/prisma/schema/user"

export default defineEventHandler(async (event) => {
    const { email } = await readValidatedBody(event, userEmail.parse)

    try {
        const prisma = new PrismaClient()

        await prisma.user.create({
            data: {
                email: email,
                isOAuth: true,
            }
        })
    } catch (error) {
        throw createError({
            statusCode: 500,
            message: 'Something went wrong while adding the user into the db!',
        })
    }
    return { success: true }
})
