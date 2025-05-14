<script setup lang="ts">
    definePageMeta({
        middleware: 'auth-user'
    })

    const { loggedIn, user, clear } = useUserSession()
</script>

<template>
    <div v-if="loggedIn">
        this is a test
        {{ user }}
        <button @click="clear()">Click this</button>
    </div>
</template>
