<script setup lang="ts">
    import type { GetNote } from '@/types/note'
    import EditNoteForm from '@/components/EditNoteForm.vue'
    import { noteFormSchema, type NoteFormData } from '@/prisma/schema/note'

    const route = useRoute()
    const noteId = route.params.note_id

    const formErrors = ref<Record<string, string>>({})

    const note = ref<GetNote>({
        id: '',
        title: '',
        description: ''
    })
    
    const editNote = async () => {
        const n: NoteFormData = {
            title: note.value.title,
            description: note.value.description,
        }

        const res = noteFormSchema.safeParse(n)

        if(!res.success){
            formErrors.value = res.error.errors.reduce((acc, { path, message }) => {
                acc[path[0]] = message
                return acc
            }, {} as Record<string, string>)

            return
        }

        await $fetch('/api/db/note', {
            method: 'PATCH',
            body: note.value
        })

        navigateTo('/notes')
    }

    onMounted(async () => {
        $fetch<GetNote>(`/api/db/note/single/${noteId}`)
        .then((data: GetNote) => {
            note.value = data
        })
        .catch((err) => alert(err))
    })
</script>

<template>
    <EditNoteForm
        v-on:submitNote="editNote"
        :note="note"
        :formError="formErrors"
    />
</template>
