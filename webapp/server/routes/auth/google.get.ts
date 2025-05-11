export default defineOAuthGoogleEventHandler({
    async onSuccess(event:any, { user, tokens }: any){
        //todo add user to the database
        await setUserSession(event, {
            user: { login: user },
            secure: { tokens },
        })
        return sendRedirect(event, '/')
    }
})
