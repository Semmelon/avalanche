<script setup lang="ts">
    import type { PropType } from 'vue'
    import type { GetNote } from '@/types/note'
    import DeleteImage from '@/assets/Delete.png'
    import EditImage from '@/assets/Edit.png'

    defineProps({
        note: {
            required: true,
            type: Object as PropType<GetNote>,
        }
    })

    const onEdit = async (noteId: string) => {
        navigateTo(`/notes/edit/${noteId}`)
    }
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
            <img :src="EditImage" @click="onEdit(note.id)">
            <img :src="DeleteImage" @click="$emit('onDelete', note.id)">
        </div>
    </div>
</template>

<style lang="css">
    .note {
        color: var(--mh-blue);
        height: 3.5rem;
        width: 80%;
        max-width: 840px;
        padding: 8px 16px;
        margin-bottom: 32px;
        display: flex;
        justify-content: space-between;
        border-radius: 4px;
        box-shadow: 4px 4px 16px 4px rgb(202, 230, 240);
    }

    .note-text {
        display: flex;
        width: 50%;
        font-size: large;
        margin: 0px 16px;
    }

    .note-title {
        margin-right: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipses;
    }

    .note-description {
        margin-right: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipses;
    }

    .note-icons {
        display: flex;
        align-items: center;

        img {
            
            height: 25px;
            margin-right: 16px;
            cursor: pointer;
        }
    }

    @media (min-width: 840px){
        .note-text {
            width: 100%;
        }
    }
</style>
