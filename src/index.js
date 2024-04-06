import packageJSON from '../package.json'

export const uiForgeSymbol = Symbol('UIForgeConfig')

export default {
    install (app, options = {}) {
        app.provide(uiForgeSymbol, {
            version: packageJSON.version,
            name: packageJSON.name,
            // 额外的表单组件
            formComps: options.formComps ?? {}
        })
    }
}
