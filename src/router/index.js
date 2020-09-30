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
<<<<<<< HEAD
=======
    children: [

    ],
    meta: {
      showtab: true
    }

>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
  },

  // 课程
  {
    path: '/Course',
    name: 'Course',
<<<<<<< HEAD

    component: () => import('../views/course/Course'),
    children: [

    ]
=======
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
    },





>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
  },
  // 约课记录
  {
    path: '/Lesson',
    name: 'Lesson',
    component: () => import('../views/lesson/Lesson'),
<<<<<<< HEAD
=======
    children: [

    ],
    meta: {
      showtab: true
    },
>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
  },
  // 练习
  {
    path: '/Practice',
    name: 'Practice',
<<<<<<< HEAD

=======
>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
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
<<<<<<< HEAD
    path: '/ques-cllect',
    name: 'ques-cllect',
    component: () => import('../views/practice/ques-cllect.vue')
=======
    path: '/G6',
    name: 'G6',
    component: () => import('../views/practice/G6.vue')

>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
  },
  // 我的
  {
    path: '/My',
    name: 'My',
    component: () => import('../views/my/My'),
<<<<<<< HEAD
  },
=======
    meta: {
      showtab: true
    },
  },
  // 找回密码
  {
    path: '/find',
    name: 'Find',
    component: () => import('../views/my/Find')
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
  {
    path: '/Cou',
    name: 'Cou',
    component: () => import('../components/my/Cou'),
    meta: {
      showtab: false
    },
  },

  // =====================================================================





>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a

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
<<<<<<< HEAD
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
=======
    component: () => import('../views/lesson/OneTutoring.vue')


>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
  },
  // 注册
  {
<<<<<<< HEAD
    path: '/sms-login',
    name: 'sms-login',
    component: () => import('../views/my/Sms-login.vue')
  },
=======
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      showtab: false
    }

  }



>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
