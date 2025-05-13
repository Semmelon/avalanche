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
    <NoteForm/>
</template>
