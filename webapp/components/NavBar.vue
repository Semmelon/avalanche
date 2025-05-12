<script setup lang="ts">
    import { navItemsIn, navItemsOut } from '@/config'

        const { loggedIn, user, session, fetch: refreshSession, clear, openInPopup } = useUserSession()
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
        margin: 0px 16px;
        text-decoration: none;
    }
</style>
