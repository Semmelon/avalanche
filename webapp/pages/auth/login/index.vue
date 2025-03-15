<script setup>
    const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession()
    const email = ref('')
    const password = ref('')

    async function login() {
        await $fetch('/api/login', {
            method: 'POST',
            body: { email: email.value, password: password.value }
        })
        
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
        <input type="text" v-model="email">
        <label for="">Password: </label>
        <input type="password" v-model="password">
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
