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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
>>>>>>> 72d0a02ff5a4c94096a168f9444749a9ff02e5cb
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
    children: [
      {
        path: '/chome',
        name: 'About',
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
        component: () => import('../views/home/Home.vue')
      }
    ],
    meta: {
      showtab: true
    }
<<<<<<< HEAD


=======
=======
        component: () => import('../views/About.vue')
      }
<<<<<<< HEAD
=======
=======
    children:[
      
>>>>>>> 3686c1cea00437c9008d8628f83223c7c12c8d8d
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
    ]
>>>>>>> 72d0a02ff5a4c94096a168f9444749a9ff02e5cb
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
  },
  // 课程
  {
    path: '/Course',
    name: 'Course',
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
>>>>>>> 72d0a02ff5a4c94096a168f9444749a9ff02e5cb
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
    component: () => import('../views/course/Course'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
<<<<<<< HEAD

    ],
    meta: {
      showtab: true
    },


    children: [
=======
<<<<<<< HEAD
    ],
    meta: {
      showtab: true
    }
=======
<<<<<<< HEAD
=======
=======
    component: () => import( '../views/course/Course'),
    children:[
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
      // {
      //   path: '/about',
      //   name: 'About',
      //   component: () => import( '../views/About.vue')
      // }
<<<<<<< HEAD

    ]

=======
>>>>>>> 3686c1cea00437c9008d8628f83223c7c12c8d8d
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
    ]
>>>>>>> 72d0a02ff5a4c94096a168f9444749a9ff02e5cb
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
  },
  // 约课记录
  {
    path: '/Lesson',
    name: 'Lesson',
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
    component: () => import('../views/lesson/Lesson'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ],
    meta: {
      showtab: true
<<<<<<< HEAD
    },



    component: () => import('../views/lesson/Lesson'),
    children: [
=======
    }
=======
<<<<<<< HEAD
    component: () => import('../views/lesson/Lesson'),
=======
<<<<<<< HEAD
    component: () => import('../views/lesson/Lesson'),
    children: [
      {
        path: '/Practice',
        name: 'Practice',
        component: () => import('../views/practice/Practice')
      }
=======
    component: () => import( '../views/lesson/Lesson'),
    children:[
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
      // {
      //   path: '/Practice',
      //   name: 'Practice',
      //   component: () => import( '../views/practice/Practice')
      // }
>>>>>>> 3686c1cea00437c9008d8628f83223c7c12c8d8d
    ]
<<<<<<< HEAD

=======
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
>>>>>>> 72d0a02ff5a4c94096a168f9444749a9ff02e5cb
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
  },
  // 练习
  {
    path: '/Practice',
    name: 'Practice',
<<<<<<< HEAD
    component: () => import('../views/practice/Practice.vue'),
    meta: {
      showtab: true
    },
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    component: () => import('../views/practice/Practice.vue'),
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
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
    component: () => import('../views/practice/G6.vue')
<<<<<<< HEAD



=======
=======
<<<<<<< HEAD
>>>>>>> 72d0a02ff5a4c94096a168f9444749a9ff02e5cb
    component: () => import('../views/practice/Practice'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
<<<<<<< HEAD
    ],
    meta: {
      showtab: true
    }
=======
=======
    component: () => import( '../views/practice/Practice'),
    children:[
      // {
      //   path: '/about',
      //   name: 'About',
      //   component: () => import( '../views/About.vue')
      // }
>>>>>>> 3686c1cea00437c9008d8628f83223c7c12c8d8d
    ]
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
>>>>>>> 72d0a02ff5a4c94096a168f9444749a9ff02e5cb
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
  },
  // 我的
  {
    path: '/My',
    name: 'My',
<<<<<<< HEAD
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
{
  path: '/Cou',
  name: 'Cou',
  component: () => import('../components/my/Cou'),
  meta: {
    showtab: false
  },
},

















// =====================================================================


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
>>>>>>> 72d0a02ff5a4c94096a168f9444749a9ff02e5cb
    component: () => import('../views/my/My'),
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
  //搜索
  {
    path: '/search',
    name: 'Search',
<<<<<<< HEAD
    component: () => import('../views/search/Search.vue')
  },

=======
    component: () => import( '../views/search/Search.vue')
  },
=======
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
  //一对一辅导
  {
    path: '/onetutoring',
    name: 'OneTutoring',
    component: () => import('../views/lesson/OneTutoring.vue')
<<<<<<< HEAD


=======
=======
    component: () => import( '../views/my/My'),
    children:[
      // {
      //   path: '/about',
      //   name: 'About',
      //   component: () => import( '../views/About.vue')
      // }
    ]
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
  },
  {
    path: '/about',
    name: 'About',
<<<<<<< HEAD
    component: () => import('../views/About.vue'),
    meta: {
      showtab: false
    }

  }

=======
    component: () => import( '../views/About.vue')
>>>>>>> 3686c1cea00437c9008d8628f83223c7c12c8d8d
  }
>>>>>>> e59cca5a3e514fee17f9942dba10d6ff0d06edb8
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
