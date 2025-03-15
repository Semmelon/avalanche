export default defineEventHandler(async (event) => {
    const { password } = await readBody(event)

    //Todo: also get username -> search in db for user -> if not exists -> throw error -> if exists has pw and compare hased user pw + given new pw -> if pw ewuals -> create user session

    if(password === 'test'){
        await setUserSession(event, {
            user: {
                role: 'user'
            }
        })
        return { success: true }
    }
    throw createError({
        statusCode: 401,
        message: 'Wrong username or password'
    })
})