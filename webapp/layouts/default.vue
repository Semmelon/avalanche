<script setup>
    import '@/assets/main.css'
</script>

<template>
    <div class="layout-box">
            <Header/>
            <div class="content-wrap">
                <slot/>
            </div>
        <Footer/>
    </div>
</template>
