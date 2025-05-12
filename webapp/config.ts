import type NavItem from "@/types/navItem"

export const navItemsOut: NavItem[] = [
    {
        name: 'Login',
        route: '/auth/login',
    },
    {
        name: 'Register',
        route: '/auth/register'
    },
]

export const navItemsIn: NavItem[] = [
    {
        name: 'Dashboard',
        route: '/dashboard',
    },
    {
        name: 'Notes',
        route: '/notes',
    },
]
