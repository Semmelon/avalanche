<script setup>
    import { useTestStore } from '~/stores/TestStroe'
    const { loggedIn, user, session, fetch: refreshSession, clear, openInPopup } = useUserSession()

    const testStore = useTestStore()
</script>

<template>
    <div v-if="loggedIn">
    <h1>Welcome {{ user?.login?.email }}!</h1>
    <p>Logged in since {{ session.loggedInAt }}</p>
    <p>{{ user }}</p>
     
    <button @click="clear">Logout</button>
  </div>
  <div v-else>
    This is the homepage: {{ testStore.message }}
    <div>
        This is the home page
    </div>
  </div>
</template>
