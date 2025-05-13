<script setup lang="ts">
    import type { GetNote, Note } from '@/types/note'

    defineProps({
        note: {
            required: true,
            type: Object as PropType<GetNote>
        }
    })
</script>

<template>
    <div class="authBox">
        <h1>
            Edit a Note 
        </h1>
        <form 
            @submit.prevent="$emit('submitNote')"
            class="formBox"
        >
            <label for="emailField">Title: </label>
            <input id="emailField" type="text" v-model="note.title">
            <label for="passwordfield">Description: </label>
            <input id="passwordfield" type="text" v-model="note.description">
            <button type="submit">Save Changes</button>
        </form>
    </div>
</template>

<style lang="css">
    .authBox {
        color: var(--mh-blue);
        width: 600px;
        padding: 32px 32px 28px;
        display: flex;
        flex-direction: column;
        place-items: center;
        box-shadow: 4px 4px 16px 4px rgb(202, 230, 240);
    }

    h1 {
        font-size: xx-large;
        font-weight: 400;
    }

    .formBox {
        width: 100%;
        display: flex;
        flex-direction: column;

        input {
            width: 100%;
            padding: 8px 16px;
            margin: 8px 0;
            border: 3px solid;
            border-radius: 4px;
            border-color: lightblue;
            border-width: 2px;
            box-sizing: border-box; 
        }

        button {
            background-color: white;
            padding: 8px 16px;
            margin-top: 16px;
            border-radius: 4px;
            border-color: var(--mh-blue);
            border-width: 3px;
            cursor: pointer;
        }
    }

    .borderDiv {
        width: 90%;
        margin: 32px auto 8px;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
            background-color: var(--mh-blue);
            width: 100%;
            opacity: 60%;
            height: 2px;
            box-shadow: 0 4px 2px -3px var(--mh-blue);
        }

        p {
            margin: 0px 8px;
        }
    }

    .googleLine {
        display: flex;
        align-items: center;

        p {
            margin-right: 8px;
        }
    }
</style>
