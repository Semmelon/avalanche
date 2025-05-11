<script setup lang="ts">
    import type AuthCredentials from '@/types/credentials';

    const submitCredentials = (buttonName: string, credentials: AuthCredentials) => {
        console.log("The ", buttonName, " button was clicked")
        console.log(credentials)
    }
</script>

<template>
    <div class="box">
       <CredentialsForm 
            buttonName="Sign In"
            v-on:submitCredentials="submitCredentials"
        />
    </div>
</template>

<style lang="css">
    .box {
        display: grid;
        place-items: center;
        height: 100%;
    }
</style>