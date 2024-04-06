<script setup>
import { ref, computed } from 'vue'
import { Form } from '@/components/element/index.js'

const formData = ref({})

const formConfigs = computed(() => [
    {
        label: '横向布局',
        key: 'isHorizontal',
        comp: 'Switch'
    },
    {
        label: '输入框',
        key: 'input',
        rules: { required: true }
    },
    {
        label: '日期选择器',
        key: ['startDate', 'endDate'],
        comp: 'DatePicker',
        props: {
            type: 'daterange'
        },
        rules: { required: true }
    }
])

</script>

<template>
    <div class="page-container">
        <pre>formData: {{ formData }}</pre>

        <Form
            v-model:data="formData"
            :configs="formConfigs"
            :inline="formData.isHorizontal"
        />
    </div>
</template>

<style lang="scss" scoped>
// css
</style>
