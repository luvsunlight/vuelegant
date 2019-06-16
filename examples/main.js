import Vue from "vue"
import App from "./App"
import router from "./router"
import vuelegant from "@"
import "../src/styles/index.less"

Vue.use(vuelegant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount("#app")
