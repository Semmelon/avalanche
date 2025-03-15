<script setup>
    const { loggedIn, user, session, fetch: refreshSession, clear, openInPopup } = useUserSession()
    const credentials = reactive({
        email: '',
        password: ''
    })

    async function login() {
        await $fetch('/api/auth/login', {
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
    <form @submit.prevent="login">
        <label for="">Email: </label>
        <input type="text" v-model="credentials.email">
        <label for="">Password: </label>
        <input type="password" v-model="credentials.password">
        <button type="submit">Login</button>
    </form>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>Not logged in</h1>
    <a href="/auth/github">Login with GitHub</a>
    <!-- or open the OAuth route in a popup -->
    <button @click="openInPopup('/auth/github')">Login with GitHub</button>
  </div>
</template>
