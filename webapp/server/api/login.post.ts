import { z } from 'zod'

const bodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export default defineEventHandler(async (event) => {
    const { email, password } = await readValidatedBody(event, bodySchema.parse)

    //Todo: also get email -> search in db for user -> if not exists -> throw error -> if exists has pw and compare hased user pw + given new pw -> if pw ewuals -> create user session

    if(email === 'user1@gmail.com' && password === 'testtest'){
        await setUserSession(event, {
            user: {
                name: email,
                role: 'user'
            }
        })
        return { success: true }
    }
    throw createError({
        statusCode: 401,
        message: 'Bad credentials'
    })
})