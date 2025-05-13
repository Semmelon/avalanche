<script setup lang="ts">
    import type { GetNote } from '@/types/note'
    import EditNoteForm from '@/components/EditNoteForm.vue'

    const route = useRoute()
    const noteId = route.params.note_id
    const note = ref<GetNote>({
        id: '',
        title: '',
        description: ''
    })
    
    const editNote = async () => {
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
    />
</template>
