<script setup lang="ts">
    import type { AddNote, Note } from '@/types/note'
    import AddNoteForm from '@/components/AddNoteForm.vue'

    const { user } = useUserSession()
    
    const createNote = async (note: Note) => {
        const t: any = user.value

        const data: AddNote = {
            title: note.title,
            description: note.description,
            user_email: t.email,
            isOAuth: t.isOAuth,
        }

        $fetch('/api/db/note', {
            method: 'POST',
            body: data
        })
        .then((data: any) => {
            if(data.success){
                navigateTo('/notes')
            }
        })
        .catch((err) => alert(err))
    }
</script>

<template>
    <AddNoteForm
        v-on:submitNote="createNote"
    />
</template>
