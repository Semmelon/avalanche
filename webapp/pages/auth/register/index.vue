<script setup lang="ts">
    import type AuthCredentials from '@/types/credentials'

    const { fetch: refreshSession } = useUserSession()

    const register = async (buttonName: string, credentials: AuthCredentials) => {
        if(buttonName !== 'Sign Up'){
          console.log('Something went wrong!!!')
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
    />
</template>
