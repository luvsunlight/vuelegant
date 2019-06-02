import Vue from "vue"
import Button from "./components/Button/"

const components = [Button]

const install = function(Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component)
    })
}

// auto install
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue)
}

// register all components's install Funcs
components.forEach(component => {
    component.install = function(Vue) {
        Vue.component(component.name, component)
    }
})

export { install, Button }

export default {
    install
}
