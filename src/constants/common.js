import Constant from '@/utils/constant'

// 状态
export const STATUS = new Constant({
    DEFAULT: { label: 'Default', value: -1, color: 'gray' },
    PENDING: { label: 'Pending', value: 0, color: 'blue' },
    SUCCESS: { label: 'Success', value: 1, color: 'green' },
    FAILED: { label: 'Failed', value: 2, color: 'red' }
})
