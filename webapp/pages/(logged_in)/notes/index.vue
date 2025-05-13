<script setup lang="ts">
    import type { Note } from '@/types/note'
    import NotePreview from '@/components/NotePreview.vue'

    definePageMeta({
        layout: 'notelist'
    })

    const notes = ref<Note[]>()
    const testNotes: Note[] = [
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'test1',
        },
        {
            title: 'test1',
            description: 'testkdksdfhsdfjhkdsafdsadsfkjkdsafjkj1',
        },
    ]

    onMounted(async () => {
        //notes.value = await $fetch('/api/db/note/:email_o')
    })
</script>

<template>
    <div class="note-container">
        <NotePreview v-for="(note, i) in testNotes" :note="note" :key="i"/>
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
</style>
