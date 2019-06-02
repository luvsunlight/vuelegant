import Vue from "vue"

import Button from "./components/Button/"
import Icon from './components/Icon'

const components = [Button, Icon]

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

export { install, Button, Icon }

export default {
    install
}
