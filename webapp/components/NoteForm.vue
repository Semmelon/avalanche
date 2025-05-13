<script setup lang="ts">
    import type { Note } from '@/types/note'

    const addNote = reactive<Note>({title: '', description: ''})

    const { title, description } = toRefs(addNote)
</script>

<template>
    <div class="authBox">
        <h1>
            Create a Note
        </h1>
        <form 
            @submit.prevent="$emit('submitNote', addNote)"
            class="formBox"
        >
            <label for="emailField">Titel: </label>
            <input id="emailField" type="text" v-model="title">
            <label for="passwordfield">Description: </label>
            <input id="passwordfield" type="password" v-model="description">
            <button type="submit">Create</button>
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
