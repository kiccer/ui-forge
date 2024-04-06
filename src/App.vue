<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

</script>

<template>
    <ElConfigProvider
        :locale="zhCn"
    >
        <RouterView />
    </ElConfigProvider>
</template>

<style lang="scss" scoped>

</style>
