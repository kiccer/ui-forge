import { createRouter, createWebHashHistory } from 'vue-router'
import { menuRoutes } from './menuRoute'

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        ...menuRoutes
    ]
})

export default router
