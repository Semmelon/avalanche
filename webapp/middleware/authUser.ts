import { onlyPrivate, onlyPublic } from '@/middleware/routes'

export default defineNuxtRouteMiddleware((to, from) => {
    const { loggedIn } = useUserSession()

    if(loggedIn.value && onlyPublic.includes(to.path)){
        return navigateTo('/dashboard')
    }

    if(!loggedIn.value && onlyPrivate.includes(to.path)){
        return navigateTo('/auth/login')
    }
})
