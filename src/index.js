import Button from "./components/Button/"
import Icon from "./components/Icon"
import Card from "./components/Card"
import Affix from "./components/Affix"
import Alert from "./components/Alert"
import Tag from "./components/Tag"

const components = [Button, Icon, Card, Affix, Alert, Tag]

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

export { install, Button, Icon, Card, Affix, Alert, Tag }

export default {
	install
}
