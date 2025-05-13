<script setup lang="ts">
    import type { Note } from '@/types/note'

    const { user } = useUserSession()
    
    const createNote = async (note: Note) => {
        const t: any = user.value

        console.log(t.email)

        const data = {
            titel: note.title,
            description: note.description,
            user_email: t.email
        }
        
        $fetch('/api/db/note', {
            method: 'POST',
            body: data
        })
        .catch((err) => alert(err))
    }
</script>

<template>
    <NoteForm
        v-on:submitNote="createNote"
    />
</template>
