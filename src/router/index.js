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
    meta:{
      showtab:true
    },
    children :[{
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  },
  {
    path: '/Course',
    name: 'Course',
    component: () => import( '../views/course/Course'),
    meta:{
      showtab:true
    },
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
    component: () => import('../views/lesson/Lesson'),
    meta:{
      showtab:true
    },
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
    component: () => import( '../views/practice/Practice'),
    meta:{
      showtab:true
    },
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
    component: () => import('../views/my/My'),
    meta:{
      showtab:true
    },
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  },
  //搜索
  {
    path: '/search',
    name: 'Search',
    component: () => import( '../views/search/Search.vue')
  },
  //课程详情
  {
    path: '/details',
    name: 'Details',
    component: () => import( '../views/courseDetails/Details.vue')
  },
  
  {
    path: '/courses',
    name: 'Courses',
    component: () => import( '../views/courseDetails/Courses.vue'),
    
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
