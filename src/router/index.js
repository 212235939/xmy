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
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
<<<<<<< HEAD
=======
=======
    children:[
      
>>>>>>> 3686c1cea00437c9008d8628f83223c7c12c8d8d
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
    ]
  },
  // 课程
  {
    path: '/Course',
    name: 'Course',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
    component: () => import('../views/course/Course'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
<<<<<<< HEAD
=======
=======
    component: () => import( '../views/course/Course'),
    children:[
      // {
      //   path: '/about',
      //   name: 'About',
      //   component: () => import( '../views/About.vue')
      // }
>>>>>>> 3686c1cea00437c9008d8628f83223c7c12c8d8d
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
    ]
  },
  // 约课记录
  {
    path: '/Lesson',
    name: 'Lesson',
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
      // {
      //   path: '/Practice',
      //   name: 'Practice',
      //   component: () => import( '../views/practice/Practice')
      // }
>>>>>>> 3686c1cea00437c9008d8628f83223c7c12c8d8d
    ]
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
  },
  // 练习
  {
    path: '/Practice',
    name: 'Practice',
<<<<<<< HEAD
    component: () => import('../views/practice/Practice.vue'),
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
=======
<<<<<<< HEAD
    component: () => import('../views/practice/Practice'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
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
  },
  // 我的
  {
    path: '/My',
    name: 'My',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
    component: () => import('../views/my/My'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
  //搜索
  {
    path: '/search',
    name: 'Search',
    component: () => import( '../views/search/Search.vue')
  },
=======
  //一对一辅导
  {
    path: '/onetutoring',
    name: 'OneTutoring',
    component: () => import('../views/lesson/OneTutoring.vue')
=======
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
>>>>>>> 3686c1cea00437c9008d8628f83223c7c12c8d8d
  }
>>>>>>> e59cca5a3e514fee17f9942dba10d6ff0d06edb8
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
