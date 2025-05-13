import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
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

        return { user: user }
    } catch (error) {
        throw createError({
            statusCode: 500,
            message: 'Somethign went wrong while searching the user!',
        })
    }
})
