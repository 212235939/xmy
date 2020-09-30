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
    meta: {
      showtab: true
    },
    children: [
      {
        path: '/chome',
        name: 'About',
        component: () => import('../views/home/Home.vue')
      },
    ],
  },
  {
    path: '/oneoneone',
    component: () => import("../views/lesson/OneTutoring.vue")
  },
  {
    path: '/datedate',
    component: () => import("../views/lesson/data.vue")
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
    ],
    meta: {
      showtab: true
    }
  },
  // 约课记录
  {
    path: '/Lesson',
    name: 'Lesson',
    component: () => import('../views/lesson/Lesson'),
    meta: {
      showtab: true
    },
  },
  // 练习
  {
    path: '/Practice',
    name: 'Practice',
    component: () => import('../views/practice/Practice.vue'),
    meta: {
      showtab: true
    },
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
    component: () => import('../views/practice/Attention.vue'),

  },
  // 我的
  {
    path: '/My',
    name: 'My',
    component: () => import('../views/my/My.vue'),
    meta: {
      showtab: true
    },
  },
  //课程详情
  {
    path: '/details',
    name: 'Details',
    component: () => import( '../views/courseDetails/Details.vue')
  },

  // 找回密码
  {
    path: '/find',
    name: 'Find',
    component: () => import('../views/my/Find')
  },




    {
        path: '/Coupon',
        name: 'Coupon',
        component: () => import('../components/my/Coupon'),
        meta: {
          showtab: false
        },
      },
      {
        path: '/UserCard',
        name: 'UserCard',
        component: () => import('../components/my/UserCard'),
        meta: {
          showtab: false
        },
      },




    



  //我的里面的小路由
  // ====================================================================
  {
    path: '/collect',
    name: 'Collect',
    component: () => import('../components/my/Collect'),
    meta: {
      showtab: false
    },
  },
  {
    path: '/Sum',
    name: 'Sum',
    component: () => import('../components/my/Sum'),
    meta: {
      showtab: false
    },
  },
  {
    path: '/attention',
    name: 'Attention',
    component: () => import('../components/my/Attention'),
    meta: {
      showtab: false
    },
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
    path: '/forget-pass',
    name: "forget-pass",
    component: () => import("../views/my/Forget-pass.vue"),

    component: () => import('../views/lesson/OneTutoring.vue')
  },
  // 注册
  {
    path: '/sms-login',
    name: 'sms-login',
    component: () => import('../views/my/Sms-login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      showtab: false
    }
  },
  {
    path: '/cou',
    component: () => import("../components/my/Cou.vue")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
