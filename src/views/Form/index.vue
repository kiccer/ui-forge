<script setup>
import { ref, computed } from 'vue'
import { Form } from '@/components/element/index.js'

const formData = ref({})

const formConfigs = computed(() => [
    {
        label: '输入框',
        key: 'input'
    }
])

</script>

<template>
    <div class="page-container">
        <Form
            v-model:data="formData"
            :configs="formConfigs"
        />
    </div>
</template>

<style lang="scss" scoped>
// css
</style>
