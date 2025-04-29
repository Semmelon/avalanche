<script setup>
    const { loggedIn, user, session, fetch: refreshSession, clear, openInPopup } = useUserSession()
    const credentials = reactive({
        email: '',
        password: ''
    })

    async function register() {
        await $fetch('/api/auth/register', {
            method: 'POST',
            body: credentials
        })
        .then(async () => {
           await refreshSession()
        })
        .catch((err) => alert(err))
    }
</script>

<template>
    <div v-if="loggedIn">
        <h1>Welcome {{ user.login }}!</h1>
        <p>Logged in since {{ session.loggedInAt }}</p>
        <button @click="clear">Logout</button>
    </div>
    <div v-else>
        <form @submit.prevent="register">
            <label for="">Email: </label>
            <input type="text" v-model="credentials.email">
            <label for="">Password: </label>
            <input type="password" v-model="credentials.password">
            <button type="submit">Register</button>
        </form>
    </div>
</template>