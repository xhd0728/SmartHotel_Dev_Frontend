import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import MainView from '../views/HomeView/MainView.vue'

import CommentView from '../views/ProjectView/CommentView.vue'
import CustomerView from '../views/ProjectView/CustomerView.vue'
import OrderView from '../views/ProjectView/OrderView.vue'
import RoomView from '../views/ProjectView/RoomView.vue'

import AuthorView from '../views/SystemView/AuthorView.vue'
import DatabaseView from '../views/SystemView/DatabaseView.vue'
import ProjectView from '../views/SystemView/ProjectView.vue'
import TechView from '../views/SystemView/TechView.vue'

import PersonView from '../views/PersonView/PersonView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
  {
    path: '/comment',
    name: 'comment',
    component: CommentView
  },
  {
    path: '/customer',
    name: 'customer',
    component: CustomerView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView
  },
  {
    path: '/room',
    name: 'room',
    component: RoomView
  },
  {
    path: '/author',
    name: 'author',
    component: AuthorView
  },
  {
    path: '/database',
    name: 'database',
    component: DatabaseView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/tech',
    name: 'tech',
    component: TechView
  },
  {
    path: '/person',
    name: 'person',
    component: PersonView
  }
]

const router = new VueRouter({
  routes
})

export default router
