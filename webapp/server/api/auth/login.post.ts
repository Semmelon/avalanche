import { userSchema } from '@/prisma/schema/user'
import { compare } from 'bcrypt-ts'

export default defineEventHandler(async (event) => {
    const { email, password } = await readValidatedBody(event, userSchema.parse)

    try {
        const data:any = await $fetch(`/api/db/user/${email}`)

        const equal = await compare(password, data.user.password)

        if(!equal){
            return createError({
                statusCode: 401,
                message: 'Bad request'
            })
        }

        await setUserSession(event, {
            user: {
                name: email,
                role: 'user',
            }
        })

        return { success: true }
    } catch (err) {
        return err
    }
})
