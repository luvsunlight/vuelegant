import Vue from "vue"
import Router from "vue-router"
import NProgress from 'nprogress'
import "nprogress/nprogress.css";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("./Pages/Home.vue")
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
    ]
})

router.beforeEach((to,from,next) => {
    if(to.path !==from.path){
        NProgress.start()
    }
    next()
})


router.afterEach(() => {
    NProgress.done()
})

export default router
