<script setup lang="ts">
    import type { PropType } from 'vue'
    import type { Note } from '~/types/note'

    defineProps({
        note: {
            required: true,
            type: Object as PropType<Note>,
        }
    })
</script>

<template>
    <div class="note">
        <div class="note-text">
            <p class="note-title">
                {{ note.title }}
            </p>
            <p class="note-description">
                {{ note.description }}
            </p>
        </div>
        <div class="note-icons">

        </div>
    </div>
</template>

<style lang="css">
    .note {
        height: 3.5rem;
        width: 80%;
        max-width: 840px;
        padding: 8px 16px;
        margin-bottom: 32px;
        display: flex;
        justify-content: space-between;
        box-shadow: 4px 4px 16px 4px rgb(202, 230, 240);
    }

    .note-text {
        display: flex;

    }

    .note-description {

    }

    .note-icons {

    }
</style>
