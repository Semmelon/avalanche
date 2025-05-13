import { userSchema } from "@/prisma/schema/user"

export default defineEventHandler(async (event) => {
    const { email, password } = await readValidatedBody(event, userSchema.parse)

    try{
        const email_o = email+';false'
        await $fetch(`/api/db/user/${email_o}`)

        return createError({
            statusCode: 401,
            message: 'User already exists'
        })
    } catch (err: any){
        if(err.statusCode != 404){
            throw err   
        }
    }

    try {
        const user = await $fetch('/api/db/user', {
            method: 'POST',
            body: {
                email: email,
                password: password
            }
        })

        await setUserSession(event, {
            user: {
                name: user.email,
                role: 'user',
                isOAuth: user.isOAuth
            }
        })

        return { success: true }
    } catch (error) {
        return error
    }
})
