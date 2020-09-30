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
  },
  // 课程
  {
    path: '/Course',
    name: 'Course',

    component: () => import('../views/course/Course'),
    children: [

    ]
  },
  // 约课记录
  {
    path: '/Lesson',
    name: 'Lesson',
    component: () => import('../views/lesson/Lesson'),
  },
  // 练习
  {
    path: '/Practice',
    name: 'Practice',

    component: () => import('../views/practice/Practice.vue'),
  },
  {
    path: '/point',
    name: 'point',
    component: () => import('../views/practice/point.vue')
  },
  {
    path: '/paper-package',
    name: 'paper-package',
    component: () => import('../views/practice/paper-package.vue')
  }, {
    path: '/exam',
    name: 'exam',
    component: () => import('../views/practice/exam.vue')
  }, {
    path: '/error-ques',
    name: 'error-ques',
    component: () => import('../views/practice/error-ques.vue')
  }, {
    path: '/assess',
    name: 'assess',
    component: () => import('../views/practice/assess.vue')
  },
  {
    path: '/ques-cllect',
    name: 'ques-cllect',
    component: () => import('../views/practice/ques-cllect.vue')
  },
  // 我的
  {
    path: '/My',
    name: 'My',
    component: () => import('../views/my/My'),
  },

  //搜索
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/Search.vue')
  },

  //一对一辅导
  {
    path: '/onetutoring',
    name: 'OneTutoring',
    component: () => import('../views/lesson/OneTutoring.vue'),
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/my/Login.vue')
  },
  // 找回密码
  {
    path:'/forget-pass',
    name:"forget-pass",
    component:()=>import("../views/my/Forget-pass.vue")
  },
  // 注册
  {
    path: '/sms-login',
    name: 'sms-login',
    component: () => import('../views/my/Sms-login.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
