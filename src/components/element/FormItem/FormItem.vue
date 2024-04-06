<!-- eslint-disable n/no-callback-literal -->

<script setup>
import Schema from 'async-validator'
import { computed, ref, unref } from 'vue'
import { asyncComputed } from '@vueuse/core'
import { get, set } from 'lodash-es'
import { ElFormItem } from 'element-plus'
import { getFormComps } from '../Comps.js'

const Comps = getFormComps()
const emit = defineEmits(['update:data'])

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

const formData = computed({
    get: () => props.data,
    set: v => emit('update:data', v)
})

const config = asyncComputed(async () => {
    const cfg = { ...props.config }

    cfg.rules = [].concat(cfg.rules ?? []).reduce((list, rule) => {
        const { validator } = rule

        return list.concat({
            ...rule,
            // message: rule.required && !rule.message ? `${cfg.label}不能为空` : rule.message
            validator: (rule, value, callback) => {
                if (rule.required) {
                    if ([
                        !value,
                        Array.isArray(value) && value.every(v => [null, undefined].includes(v))
                    ].includes(true)) return callback(`${cfg.label}不能为空`)
                }

                if (validator) return validator(rule, value, callback)

                callback()
            }
        })
    }, [])

    cfg.props = {
        clearable: true,
        ...cfg.props
    }

    cfg.slots = {
        ...cfg.slots
    }

    cfg.inputParse = cfg.inputParse ?? (v => v)

    cfg.outputParse = cfg.outputParse ?? (v => v)

    cfg.formItemProps = {
        label: cfg.label,
        rules: cfg.rules,
        ...cfg.formItemProps,
        class: ['ui-forge-form-item', cfg.formItemProps?.class]
    }

    return cfg
}, props.config)

function getValue () {
    const { key, inputParse } = unref(config)

    const k2v = Array.isArray(key)
        ? key.map(k => get(formData.value, k))
        : get(formData.value, key)

    return inputParse?.(k2v)
}

function setValue (v) {
    const { key, outputParse } = unref(config)

    const v2k = outputParse?.(v)

    if (Array.isArray(key)) {
        key.forEach((k, i) => set(formData.value, k, v2k?.[i]))
    } else {
        set(formData.value, key, v2k)
    }

    validate()
}

const value = computed({
    get: getValue,
    set: setValue
})

const errs = ref([])

function validate () {
    const { rules, key } = unref(config)

    const validator = new Schema({
        [String(key)]: rules
    })

    return new Promise((resolve, reject) => {
        const data = { [String(key)]: unref(value) }

        validator.validate(data, errors => {
            errs.value = errors
            resolve({ errors })
        })
    })
}

// const validProps = computed(() => {
//     const errs = unref(errors) ?? []

//     return {
//         showMessage: errs.length > 0,
//         inlineMessage: errs[0]?.message,
//         validateStatus: errs.length > 0 ? 'error' : ''
//     }
// })

defineExpose({
    validate
})

</script>

<template>
    <ElFormItem
        :validate-status="errs?.length > 0 ? 'error' : ''"
        v-bind="config.formItemProps"
    >
        <template #label="{ label }">
            {{ label }}
        </template>

        <template #error>
            <div class="el-form-item__error">
                {{ errs?.[0]?.message }}
            </div>
        </template>

        <component
            :is="Comps[config.comp] ?? config.comp ?? Comps.Input"
            v-bind="config.props"
            v-model="value"
        >
            <template
                v-for="[name, slot] in Object.entries(config.slots ?? {})"
                :key="name"
                #[slot]
            >
                <component :is="slot" />
            </template>
        </component>
    </ElFormItem>
</template>

<style lang="scss" scoped>
// css
</style>
