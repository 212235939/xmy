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
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
=======
    children:[
      
>>>>>>> 3686c1cea00437c9008d8628f83223c7c12c8d8d
    ]
  },
  // 课程
  {
    path: '/Course',
    name: 'Course',
<<<<<<< HEAD
    component: () => import('../views/course/Course'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
=======
    component: () => import( '../views/course/Course'),
    children:[
      // {
      //   path: '/about',
      //   name: 'About',
      //   component: () => import( '../views/About.vue')
      // }
>>>>>>> 3686c1cea00437c9008d8628f83223c7c12c8d8d
    ]
  },
  // 约课记录
  {
    path: '/Lesson',
    name: 'Lesson',
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
  },
  // 练习
  {
    path: '/Practice',
    name: 'Practice',
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
  },
  // 我的
  {
    path: '/My',
    name: 'My',
<<<<<<< HEAD
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
