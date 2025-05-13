import { PrismaClient } from "@prisma/client"
import { userSchema } from "@/prisma/schema/user"
import { genSalt, hash } from "bcrypt-ts"

export default defineEventHandler(async (event) => {
    const { email, password } = await readValidatedBody(event, userSchema.parse)

    try {
        const prisma = new PrismaClient()
        
        const salt = await genSalt(10)
        const hashedPassword = await hash(password, salt)

        const user = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword,
            }
        })

        return user
    } catch (error) {
        throw createError({
            statusCode: 500,
            message: 'Something went wrong while adding the user into the db!',
        })
    }
})
