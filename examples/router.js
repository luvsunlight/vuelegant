import Vue from "vue"
import Router from "vue-router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: "/Home",
            alias: "/",
            name: "Home",
            component: () => import("./Pages/Home.vue")
        },
        {
            path: "/Color",
            name: "Color",
            component: () => import("./Pages/Color.vue")
        },
        {
            path: "/Button",
            name: "Button",
            component: () => import("./Pages/Button.vue")
        },
        {
            path: "/Icon",
            name: "Icon",
            component: () => import("./Pages/Icon.vue")
        },
        {
            path: "/Card",
            name: "Card",
            component: () => import("./Pages/Card.vue")
        },
        {
            path: "/Affix",
            name: "Affix",
            component: () => import("./Pages/Affix.vue")
        },
        {
            path: "/Alert",
            name: "Alert",
            component: () => import("./Pages/Alert.vue")
        },
        {
            path: "/Tag",
            name: "Tag",
            component: () => import("./Pages/Tag.vue")
        },
        {
            path: "/Divider",
            name: "Divider",
            component: () => import("./Pages/Divider.vue")
        },
        {
            path: "/Badge",
            name: "Badge",
            component: () => import("./Pages/Badge.vue")
        },
        {
            path: "/Avatar",
            name: "Avatar",
            component: () => import("./Pages/Avatar.vue")
        },
        {
            path: "/Switch",
            name: "Switch",
            component: () => import("./Pages/Switch.vue")
        },
        {
            path: "/Progress",
            name: "Progress",
            component: () => import("./Pages/Progress.vue")
        },
        {
            path: "/Spin",
            name: "Spin",
            component: () => import("./Pages/Spin.vue")
        },
        {
            path: "*",
            name: "404",
            component: () => import("./Pages/404.vue")
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
        NProgress.start()
    }
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router
