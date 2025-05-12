<script setup>
    import '@/assets/main.css'
</script>

<template>
    <div class="layout-box">
            <Header/>
            <main>
                <div class="content-wrap">
                    <div class="place-center">
                        <slot/>
                    </div>
                </div>
            </main>
        <Footer/>
    </div>
</template>
