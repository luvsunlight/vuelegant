import Vue from 'vue'
import Header from './Header.vue'

const components = {
    Header
}

Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
})

export default Components