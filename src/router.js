import Vue from 'vue'
import VueRouter from "vue-router"
/* import Clock from './components/Clock.vue' */
import HelloWorld from './components/HelloWorld.vue'
import Status from './components/Status.vue'

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        /* {
            path: '/',
            name: 'clock',
            component: Clock
        }, */
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/status',
            name: 'Status',
            component: Status
        },
       
    ]
})

