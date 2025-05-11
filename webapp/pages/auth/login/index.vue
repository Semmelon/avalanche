<script setup lang="ts">
    import type AuthCredentials from '@/types/credentials'

    const { fetch: refreshSession } = useUserSession()

    const login = async (buttonName: string, credentials: AuthCredentials) => {
        if(buttonName !== 'Sign In'){
          console.log('Something went wrong!!!')
        }

        await $fetch('/api/auth/login', {
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
        buttonName="Sign In"
        v-on:submitCredentials="login"
    />
</template>
