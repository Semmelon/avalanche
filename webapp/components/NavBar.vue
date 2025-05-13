<script setup lang="ts">
    import { navItemsIn, navItemsOut } from '@/config'

        const { loggedIn } = useUserSession()
</script>

<template>
    <nav v-if="loggedIn">
        <RouterLink 
            v-for="navItem in navItemsIn" 
            :to="navItem.route"
            class="navItem"
        >
            {{ navItem.name }}
        </RouterLink>
    </nav>
    <nav v-else>
        <RouterLink 
            v-for="navItem in navItemsOut" 
            :to="navItem.route"
            class="navItem"
        >
            {{ navItem.name }}
        </RouterLink>
    </nav>
</template>

<style lang="css">
    .navItem {
        color: var(--mh-blue);
        margin-right: 16px;
        text-decoration: none;
    }

    @media (min-width: 840px){
        .navItem {
            margin-right: 4rem;
        }
    }
</style>
