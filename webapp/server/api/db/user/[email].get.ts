import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
    const email = event.context.params?.email

    console.log(email)

    if(email === undefined){
        throw createError({
            statusCode: 401,
            message: 'Bad Request',
        })
    }

    try {
        const prisma = new PrismaClient()

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(user == null){
            return createError({
                statusCode: 404,
                message: 'User not found',
            })
        }

        return { user: user }
    } catch (error) {
        console.log(error)
        throw createError({
            statusCode: 500,
            message: 'Somethign went wrong while searching the user!',
        })
    }
})
