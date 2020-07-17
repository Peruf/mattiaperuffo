import VueRouter from 'vue-router'
import Vue from 'vue'
import VueMaterial from 'vue-material'
import Homepage from '@/pages/Home2.vue'
import portfolio from '@/pages/Portfolio.vue'
import curriculum from '@/pages/Curriculum.vue'
import semiotic from '@/pages/Semiotic.vue'
import pig from '@/pages/PIG.vue'
import it from '@/pages/IT.vue'

Vue.use(VueRouter)
Vue.use(VueMaterial)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage,
            meta: {
                title: 'Mattia Peruffo'
            }
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: portfolio
        },
        {
            path: '/curriculum',
            name: 'Curriculum',
            component: curriculum
        },
        {
            path: '/portfolio/semiotic_project/',
            name: 'Semiotic',
            component: semiotic
        },
        {
            path: '/portfolio/pig_project',
            name: 'PIG',
            component: pig
        },
        {
            path: '/portfolio/IT_project',
            name: 'IT',
            component: it
        },
    ]
})