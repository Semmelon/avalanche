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
        
    } catch (error) {
        
    }
})
