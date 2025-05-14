<script setup>
    import { useTestStore } from '@/stores/TestStroe'

    definePageMeta({
        middleware: 'auth-user'
    })

    const { loggedIn, user, session, clear } = useUserSession()

    const testStore = useTestStore()
</script>

<template>
    <div v-if="loggedIn">
        <h1>Welcome {{ user.email }}!</h1>
        <p>Logged in since {{ session.loggedInAt }}</p>
        <p>{{ user }}</p>
        <button @click.prevent="clear">Logout</button>
    </div>
    <div v-else>
        This is the homepage: {{ testStore.message }}
        <div>
            This is the home page
        </div>
    </div>
</template>
