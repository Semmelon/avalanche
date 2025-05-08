<script setup>
    const { user } = useUserSession()

    const note = reactive({
        titel: '',
        description: '',
    })

    const submit = async () => {
        const data = {
            titel: note.titel,
            description: note.description,
            user_email: user.name
        }
        
        $fetch('/api/db/note', {
            method: 'POST',
            body: data
        })
        .catch((err) => alert(err))
    }
</script>

<template>
    This is the pages where the notes should be
    The useremail: {{user.name}}

    <form @submit.prevent="submit">
        <label for="">Title: </label>
        <input type="text" v-model="title">
        <label for="">Description: </label>
        <input type="text" v-model="description">
        <button type="submit">Add</button>
    </form>
</template>
