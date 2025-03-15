<script setup>
    import { useTestStore } from '~/stores/TestStroe'
    import { genSalt, hash } from 'bcrypt-ts';

    const testStore = useTestStore()

    const pw = ref('')

    const t = async () => {
        const salt = await genSalt(10)
        //length = 60
    }
</script>

<template>
    This is the homepage: {{ testStore.message }}
    {{ pw.length }}
    <button @click="t">Click</button>
</template>
