<script setup>
    import '@/assets/main.css'
</script>

<template>
    <div class="layout-box">
        <!--<Header/>-->
        <div class="header">
            this is the header
        </div>
        <div class="content-wrap">
            <slot/>
        </div>
        <div class="footer">the footer</div>
        <!--<Footer/>-->
    </div>
</template>
