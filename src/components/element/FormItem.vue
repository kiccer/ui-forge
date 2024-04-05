<script setup>
import { asyncComputed } from '@vueuse/core'
import { ElFormItem } from 'element-plus'
import { formComps } from './Comps.js'

const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    },

    config: {
        type: Object,
        default: () => ({})
    }
})

const config = asyncComputed(async () => {
    const cfg = { ...props.config }

    return cfg
}, props.config)

</script>

<template>
    <ElFormItem>
        <component
            :is="formComps[config.comp] ?? formComps.Input"
        />
    </ElFormItem>
</template>

<style lang="scss" scoped>
// css
</style>
