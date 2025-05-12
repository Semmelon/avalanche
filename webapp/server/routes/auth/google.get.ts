const register = async (email: string) => {
    const email_o = email+';true'

    try{
        const data:any = await $fetch(`/api/db/user/${email_o}`)

        return {
            email: data.user.email,
            role: 'user'
        }
    } catch (err: any){
        if(err.statusCode != 404){
            throw err   
        }
    }

    try {
        await $fetch('/api/db/user/o_auth', {
            method: 'POST',
            body: {
                email: email,
            }
        })

        return {
            email: email,
            role: 'user'
        } 
    } catch (error) {
        return null
    }
}

export default defineOAuthGoogleEventHandler({
    async onSuccess(event:any, { user, tokens }: any){

        const created_user = await register(user.email)

        await setUserSession(event, {
            user: created_user,
            secure: { tokens },
        })
        return sendRedirect(event, '/')
    }
})
