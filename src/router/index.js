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
<<<<<<< HEAD
    children: [
      // {
      //   path: '/about',
      //   name: 'About',
      //   component: () => import( '../views/About.vue')
      // }
    ]
=======





>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
  },
  // 约课记录
  {
    path: '/Lesson',
    name: 'Lesson',
<<<<<<< HEAD

=======
>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
    component: () => import('../views/lesson/Lesson'),
    children: [

    ],
    meta: {
      showtab: true
    },
<<<<<<< HEAD
    component: () => import('../views/lesson/Lesson'),
    children: [
      // {
      //   path: '/Practice',
      //   name: 'Practice',
      //   component: () => import( '../views/practice/Practice')
      // }
    ]
=======
>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
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
<<<<<<< HEAD
    component: () => import('../views/practice/Attention.vue')
=======
    component: () => import('../views/practice/G6.vue')

>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
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
<<<<<<< HEAD
=======
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
    component: () => import('../views/lesson/OneTutoring.vue')
<<<<<<< HEAD
=======


>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      showtab: false
    }
<<<<<<< HEAD
  }
=======

  }




>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
