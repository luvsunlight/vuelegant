import Button from "./components/Button/"
import Icon from "./components/Icon"
import Card from "./components/Card"
import Affix from "./components/Affix"
import Alert from "./components/Alert"
import Tag from "./components/Tag"
import Divider from "./components/Divider"
import Badge from "./components/Badge"
import Avatar from "./components/Avatar"
import vSwitch from "./components/Switch"
import vProgress from "./components/Progress"
import Spin from "./components/Spin"
import Tooltip from "./components/Tooltip"

const components = [
	Button,
	Icon,
	Card,
	Affix,
	Alert,
	Tag,
	Divider,
	Badge,
	Avatar,
	vSwitch,
	vProgress,
	Spin,
	Tooltip
]

const install = function(Vue, opts = {}) {
	components.map(component => {
		Vue.component(component.name, component)
	})
}

/* === auto install ===*/
if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue)
}

/* === register all components's install Funcs ===*/
components.forEach(component => {
	component.install = function(Vue) {
		Vue.component(component.name, component)
	}
})

export {
	install,
	Button,
	Icon,
	Card,
	Affix,
	Alert,
	Tag,
	Divider,
	Badge,
	Avatar,
	vSwitch,
	vProgress,
	Spin,
	Tooltip
}

export default {
	install
}
