<script setup>
    import '@/assets/main.css'
</script>

<template>
    <div class="layout-box">
            <Header/>
            <div class="content-wrap">
                <div class="place-center">
                    <slot/>
                </div>
            </div>
        <Footer/>
    </div>
</template>
