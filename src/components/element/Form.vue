<script setup>
import { ElForm } from 'element-plus'
import FormItem from './FormItem.vue'
import { filterHide } from '../../utils/tools'

const emit = defineEmits(['update:data'])

const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    },

    configs: {
        type: Array,
        default: () => []
    }
})

</script>

<template>
    <ElForm>
        <FormItem
            v-for="config in filterHide(props.configs)"
            :key="String(config.key)"
            :data="props.data"
            :config="config"
            @update:data="data => emit('update:data', data)"
        />
    </ElForm>
</template>

<style lang="scss" scoped>
// css
</style>
