<script setup>
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
import { menuRoutes } from '@/router/menuRoute.js'

</script>

<template>
    <ElMenu
        router
        unique-opened
        :default-active="$route.path"
    >
        <ElSubMenu
            v-for="route in menuRoutes"
            :key="route.name"
            :index="route.path"
        >
            <template #title>
                {{ route.meta.title }}
            </template>

            <ElMenuItem
                v-for="subRoute in route.children"
                :key="subRoute.name"
                :index="subRoute.path"
            >
                {{ subRoute.meta.title }}
            </ElMenuItem>
        </ElSubMenu>
    </ElMenu>
</template>

<style lang="scss" scoped>
// css
</style>
