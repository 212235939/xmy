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
    },
    children: [
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
    component: () => import('../views/lesson/Lesson'),
    children: [

    ],
    meta: {
      showtab: true
    },
    component: () => import('../views/lesson/Lesson'),
    children: [
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
    component: () => import('../views/practice/Practice.vue'),
    meta: {
      showtab: true
    },
  },
  {
    path: '/G1',
    name: 'G1',
    component: () => import('../views/practice/G1.vue')
  },
  {
    path: '/G2',
    name: 'G2',
    component: () => import('../views/practice/G2.vue')
  }, {
    path: '/G3',
    name: 'G3',
    component: () => import('../views/practice/G3.vue')
  }, {
    path: '/G4',
    name: 'G4',
    component: () => import('../views/practice/G4.vue')
  }, {
    path: '/G5',
    name: 'G5',
    component: () => import('../views/practice/G5.vue')
  },
  {
    path: '/G6',
    name: 'G6',
    component: () => import('../views/practice/Attention.vue')
  },
  // 我的
  {
    path: '/My',
    name: 'My',
    component: () => import('../views/my/My'),
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
    component: () => import('../views/lesson/OneTutoring.vue')
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
    path:'/cou',
    component:()=>import("../components/my/Cou.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
