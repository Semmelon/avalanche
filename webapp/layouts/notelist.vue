<script setup>
    import '@/assets/main.css'
</script>

<template>
    <div class="layout-box">
            <Header/>
            <main>
                <div class="content-wrap-notes">
                    <slot/>
                </div>
            </main>
        <Footer/>
    </div>
</template>
