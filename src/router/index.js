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
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  },
  // 课程
  {
    path: '/Course',
    name: 'Course',
    component: () => import('../views/course/Course'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }

    ]
  },
  // 约课记录
  {
    path: '/Lesson',
    name: 'Lesson',
    component: () => import('../views/lesson/Lesson'),
    children: [
      {
        path: '/Practice',
        name: 'Practice',
        component: () => import('../views/practice/Practice')
      }
    ]
  },
  // 练习
  {
    path: '/Practice',
    name: 'Practice',
    component: () => import('../views/practice/Practice'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  },
  // 我的
  {
    path: '/My',
    name: 'My',
    component: () => import('../views/my/My'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  },
  //一对一辅导
  {
    path: '/onetutoring',
    name: 'OneTutoring',
    component: () => import('../views/lesson/OneTutoring.vue'),

  },
  //讲师详情
  {
    path: '/bookdetails',
    name: 'Bookdetails',
    component: () => import('../views/lesson/Bookdetails.vue')
  },
  {
    path: '/gun',
    name: 'Gun',
    component: () => import('../views/lesson/Gun.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
