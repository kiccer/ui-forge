import Main from '@/views/Main.vue'

export const menuRoutes = [
    {
        path: '/components',
        name: 'components',
        component: Main,
        meta: { title: '组件' },
        children: [
            {
                path: '/components/form',
                name: 'form',
                meta: { title: '表单 - Form' },
                component: () => import('@/views/Form/index.vue')
            },
            {
                path: '/components/table',
                name: 'table',
                meta: { title: '表格 - Table' },
                component: () => import('@/views/Table/index.vue')
            }
        ]
    }
]
