import { defineAsyncComponent } from 'vue'

// 基础组件
export const baseComps = {
    // 自动补全输入框
    Autocomplete: defineAsyncComponent(() => import('element-plus/es/components/autocomplete/index.mjs')),
    // 级联选择器
    Cascader: defineAsyncComponent(() => import('element-plus/es/components/cascader/index.mjs')),
    // 多选框
    Checkbox: defineAsyncComponent(() => import('element-plus/es/components/checkbox/index.mjs')),
    // 取色器
    ColorPicker: defineAsyncComponent(() => import('element-plus/es/components/color-picker/index.mjs')),
    // 日期选择器
    DatePicker: defineAsyncComponent(() => import('element-plus/es/components/date-picker/index.mjs')),
    // 表单
    Form: defineAsyncComponent(() => import('element-plus/es/components/form/index.mjs')),
    // 输入框
    Input: defineAsyncComponent(() => import('element-plus/es/components/input/index.mjs')),
    // 数字输入框
    InputNumber: defineAsyncComponent(() => import('element-plus/es/components/input-number/index.mjs')),
    // 单选框
    Radio: defineAsyncComponent(() => import('element-plus/es/components/radio/index.mjs')),
    // 评分
    Rate: defineAsyncComponent(() => import('element-plus/es/components/rate/index.mjs')),
    // 选择器
    Select: defineAsyncComponent(() => import('element-plus/es/components/select/index.mjs')),
    // 虚拟化选择器
    SelectV2: defineAsyncComponent(() => import('element-plus/es/components/select-v2/index.mjs')),
    // 滑块
    Slider: defineAsyncComponent(() => import('element-plus/es/components/slider/index.mjs')),
    // 开关
    Switch: defineAsyncComponent(() => import('element-plus/es/components/switch/index.mjs')),
    // 时间选择器
    TimePicker: defineAsyncComponent(() => import('element-plus/es/components/time-picker/index.mjs')),
    // 时间选择
    TimeSelect: defineAsyncComponent(() => import('element-plus/es/components/time-select/index.mjs')),
    // 穿梭框
    Transfer: defineAsyncComponent(() => import('element-plus/es/components/transfer/index.mjs'))
}

// 表单组件
export const formComps = {
    Autocomplete: baseComps.Autocomplete,
    Cascader: baseComps.Cascader,
    Checkbox: baseComps.Checkbox,
    ColorPicker: baseComps.ColorPicker,
    DatePicker: baseComps.DatePicker,
    DateTimePicker: baseComps.DateTimePicker,
    Form: baseComps.Form,
    Input: baseComps.Input,
    InputNumber: baseComps.InputNumber,
    Radio: baseComps.Radio,
    Rate: baseComps.Rate,
    Select: baseComps.Select,
    VirtualizedSelect: baseComps.VirtualizedSelect,
    Slider: baseComps.Slider,
    Switch: baseComps.Switch,
    TimePicker: baseComps.TimePicker,
    TimeSelect: baseComps.TimeSelect,
    Transfer: baseComps.Transfer
}
