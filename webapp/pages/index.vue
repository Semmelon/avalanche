<script setup>
    import { useTestStore } from '~/stores/TestStroe'

    const testStore = useTestStore()
</script>

<template>
    This is the homepage: {{ testStore.message }}
</template>
