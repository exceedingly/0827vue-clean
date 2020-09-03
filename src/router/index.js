import Vue from 'vue'
import App from '../App'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Book from '../views/Book.vue'
import PageIndex from '../views/PageIndex.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import PageThree from '../views/PageThree.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: "/",
        name: "导航一",
        component: PageIndex,
        children: [

            // {
            //     path: '/about',
            //     name: 'About',
            //     // route level code-splitting
            //     // this generates a separate chunk (about.[hash].js) for this route
            //     // which is lazy-loaded when the route is visited.
            //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            // },
            {
                path: '/book',
                name: 'book',
                component: Book,
            },

            {
                path: '/pageone',
                name: '0-1',
                component: PageOne,
            },
            {
                path: '/pagetwo',
                name: 'PageTwo',
                component: PageTwo,
            },
            {
                path: '/pagethree',
                name: 'PageThree',
                component: PageThree,
            },
        ]

    },
    {
        path: "/",
        name: "导航2",
        component: PageIndex,
        children: [

            {
                path: '/',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            },
            {
                path: '/book',
                name: '2-1',
                component: Book,
            },

            {
                path: '/pageone',
                name: 'PageOne',
                component: PageOne,
            },
            {
                path: '/pagetwo',
                name: '2-3',
                component: PageTwo,
            },
            {
                path: '/pagethree',
                name: '2-4',
                component: PageThree,
            },
        ]

    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
