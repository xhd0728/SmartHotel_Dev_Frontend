import Vue from 'vue'
import Router from 'vue-router'

import MainView from '../views/HomeView/MainView.vue'

import CommentView from '../views/ProjectView/CommentView.vue'
import CustomerView from '../views/ProjectView/CustomerView.vue'
import OrderView from '../views/ProjectView/OrderView.vue'
import RoomView from '../views/ProjectView/RoomView.vue'
import ReservationView from '../views/ProjectView/ReservationView.vue'
import CheckoutView from '../views/ProjectView/CheckoutView.vue'

import AuthorView from '../views/SystemView/AuthorView.vue'
import DatabaseView from '../views/SystemView/DatabaseView.vue'
import ProjectView from '../views/SystemView/ProjectView.vue'
import TechView from '../views/SystemView/TechView.vue'

import LoginView from '../views/LoginView/LoginView.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
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
      path: '/reservation',
      name: 'reservation',
      component: ReservationView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');

//     if (token === null || token === '') {
//       console.log(123)
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });

export default router
