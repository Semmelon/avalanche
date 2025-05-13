<script setup lang="ts">
    import type { GetNote } from '@/types/note'
    import NotePreview from '@/components/NotePreview.vue'

    definePageMeta({
        layout: 'notelist'
    })

    const { user } = useUserSession()

    const notes = ref<GetNote[]>()

    const redirect = () => {
        navigateTo('/notes/add')
    }

    const deleteNote = async (noteId: string) => {
        await $fetch(`/api/db/note/${noteId}`, {
            method: 'DELETE'
        })
        .catch(error => alert(error))

        notes.value = notes.value?.filter(note => note.id !== noteId)
    }

    onMounted(async () => {
        const u: any = user.value;
        await $fetch<GetNote[]>(`/api/db/note/${u.email + ';' + u.isOAuth}`)
        .then(data => {
            notes.value = data
        })
        .catch(error => alert(error))
    })
</script>

<template>
    <div class="note-container">
        <div class="button-div">
            <button
                @click="redirect"
                type="button" 
                class="button" 
            >
                Create New
        </button>
        </div>
        <NotePreview 
            v-for="(note) in notes" 
            :note="note" 
            :key="note.id"
            v-on:onDelete="deleteNote"
        />
    </div>
</template>

<style lang="css">
    .note-container {
        min-width: 90%;
        padding: 3rem 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }  

    .button-div {
        min-width: 80%;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: start;
    }

    .button {
        background-color: white;
        padding: 8px 16px;
        margin-top: 16px;
        border-radius: 4px;
        border-color: var(--mh-blue);
        border-width: 3px;
        cursor: pointer;
    }
</style>
