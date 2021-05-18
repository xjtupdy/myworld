import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import LogIn from "../components/user/LogIn";
import User from "../components/user/User"
import SeekHall from "../components/seek/SeekHall";
import LostHall from "../components/lost/LostHall";
import MyLostHall from "../components/lost/MyLostHall";
import MySeekHall from "../components/seek/MySeekHall";
const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: 'lost-hall',
        component: LostHall
      },
      {
        path: 'user',
        component: User
      },
      {
        path: 'seek-hall',
        component: SeekHall
      },
      {
        path: 'my-lost-hall',
        component: MyLostHall
      },
      {
        path: 'my-seek-hall',
        component: MySeekHall
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/hall',
    name: 'LostHall',
    component: LostHall
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
