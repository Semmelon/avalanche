export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event)

    //Todo: also get email -> search in db for user -> if not exists -> throw error -> if exists has pw and compare hased user pw + given new pw -> if pw ewuals -> create user session

    if(email === 'user1' && password === 'test'){
        await setUserSession(event, {
            user: {
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