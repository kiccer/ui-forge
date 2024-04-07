/*
    const STATUS = new Constant({
        DEFAULT: { label: 'Default', value: -1, color: 'gray'},
        PENDING: { label: 'Pending', value: 0, color: 'blue'},
        SUCCESS: { label: 'Success', value: 1, color: 'green'},
        FAILED: { label: 'Failed', value: 2, color: 'red'}
    })
*/

export const sourceSymbol = Symbol('source')

export default class Constant {
    constructor (source = {}) {
        this[sourceSymbol] = source

        this.entries.forEach(([key, option]) => {
            this[key] = option.value
        })
    }

    get entries () {
        return Object.entries(this[sourceSymbol])
    }

    get map () {
        return this.entries.reduce((obj, [key, option]) => {
            return { ...obj, [key]: option.value }
        }, {})
    }

    get options () {
        return this.entries.map(([key, option]) => {
            return option
        })
    }

    get colors () {
        return this.entries.reduce((obj, [key, option]) => {
            return { ...obj, [key]: option.color }
        }, {})
    }
}
