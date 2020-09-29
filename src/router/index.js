import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      
    ]
  },
  // 课程
  {
    path: '/Course',
    name: 'Course',
    component: () => import( '../views/course/Course'),
    children:[
      // {
      //   path: '/about',
      //   name: 'About',
      //   component: () => import( '../views/About.vue')
      // }
    ]
  },
  // 约课记录
  {
    path: '/Lesson',
    name: 'Lesson',
    component: () => import( '../views/lesson/Lesson'),
    children:[
      // {
      //   path: '/Practice',
      //   name: 'Practice',
      //   component: () => import( '../views/practice/Practice')
      // }
    ]
  },
  // 练习
  {
    path: '/Practice',
    name: 'Practice',
    component: () => import( '../views/practice/Practice'),
    children:[
      // {
      //   path: '/about',
      //   name: 'About',
      //   component: () => import( '../views/About.vue')
      // }
    ]
  },
  // 我的
  {
    path: '/My',
    name: 'My',
    component: () => import( '../views/my/My'),
    children:[
      // {
      //   path: '/about',
      //   name: 'About',
      //   component: () => import( '../views/About.vue')
      // }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
