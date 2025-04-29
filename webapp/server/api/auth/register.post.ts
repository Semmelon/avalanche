import { userSchema } from "@/prisma/schema/user"

export default defineEventHandler(async (event) => {
    const { email, password } = await readValidatedBody(event, userSchema.parse)

    try{
        await $fetch(`/api/db/user/${email}`)

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
        await $fetch('/api/db/user', {
            method: 'POST',
            body: {
                email: email,
                password: password
            }
        })

        await setUserSession(event, {
            user: {
                name: email,
                role: 'user'
            }
        })

        return { success: true }
    } catch (error) {
        return error
    }
})
