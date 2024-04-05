import { createRouter, createWebHistory } from 'vue-router'
import { menuRoutes } from './menuRoute'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        ...menuRoutes
    ]
})

export default router
