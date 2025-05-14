<script setup lang="ts">
    import AddNoteForm from '@/components/AddNoteForm.vue'
    import { type NoteFormData, type AddNoteData, addNoteSchema } from '~/prisma/schema/note'

    const { user } = useUserSession()
    const formErrors = ref<Record<string, string>>({})
    
    const createNote = async (note: NoteFormData) => {
        const t: any = user.value
        const res = addNoteSchema.safeParse(note)

        if(!res.success){
            formErrors.value = res.error.errors.reduce((acc, { path, message }) => {
                acc[path[0]] = message
                return acc
            }, {} as Record<string, string>)

            return
        }

        const data: AddNoteData = {
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
        :formError="formErrors"
        v-on:submitNote="createNote"
    />
</template>

<style lang="css">

</style>
