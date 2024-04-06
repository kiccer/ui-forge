<script setup>
import { ElForm } from 'element-plus'
import FormItem from '../FormItem/FormItem.vue'
import { filterHide } from '../../../utils/tools'

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
    <ElForm
        class="ui-forge-form"
        label-width="auto"
    >
        <slot>
            <FormItem
                v-for="config in filterHide(props.configs)"
                :key="String(config.key)"
                :data="props.data"
                :config="config"
                @update:data="data => emit('update:data', data)"
            />
        </slot>
    </ElForm>
</template>

<style lang="scss" scoped>
// css
</style>
