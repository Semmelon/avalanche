<script setup lang="ts">
    import { userSchema, type UserData } from '~/prisma/schema/user'

    const { fetch: refreshSession } = useUserSession()

    const formErrors = ref<Record<string, string>>({})

    const register = async (buttonName: string, credentials: UserData) => {
        if(buttonName !== 'Sign Up'){
          console.log('Something went wrong!!!')
        }

        const res = userSchema.safeParse(credentials)

        if(!res.success){
            formErrors.value = res.error.errors.reduce((acc, { path, message }) => {
                acc[path[0]] = message
                return acc
            }, {} as Record<string, string>)

            return
        }

        await $fetch('/api/auth/register', {
            method: 'POST',
            body: credentials
        })
        .then(async () => {
           await refreshSession()
        })
        .catch((err) => alert(err))

        return navigateTo('/')
    }
</script>

<template>
    <CredentialsForm
        buttonName="Sign Up"
        v-on:submitCredentials="register"
        :formError="formErrors"
    />
</template>
