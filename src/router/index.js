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
  },

  {
    path: '/teacherdetail',
    component: () => import("../views/home/Teacher_Details.vue"),

  },

  //讲师详情
  //   {
  //     path: '/',
  //     component: () => import("../views/home/Teacher_Details.vue"),
  //   },
  //明星详情

  //   //  课程详情
  {
    path: '/cdetail',
    component: () => import("../views/home/CourseDetails")
  },
  {
    path: '/goyue',
    component: () => import("../views/home/Bookdetails.vue")
  },
  {
    path: '/courses',
    name: 'Course',
    component: () => import('../views/courseDetails/Courses.vue')
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
    meta: {
      showtab: true
    },


  },
  //立即报名跳转的页面
  {
    path: '/purchase',
    name: 'Purchase',
    component: () => import('../views/course/Purchase'),
  },
  {
    path: '/CourseDetails',
    name: 'CourseDetails',
    component: () => import('../views/course/CourseDetails'),
    meta: {
      showtab: false
    },


  },

  {
    path: '/learndetails',
    name: 'Learndetails',
    component: () => import('../views/course/Learndetails'),
  },


  {
    path: '/apply',
    name: 'Apply',
    component: () => import('../views/course/Apply.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/course/Search.vue')
  },











  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/courseDetails/Courses.vue'),

    // meta:{
    //   showtab:false
    // }
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/courseDetails/Details.vue')
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
    component: () => import('../views/practice/Practice'),
    meta: {
      showtab: true
    },

  },

  // 我的
  {
    path: '/My',
    name: 'My',
    component: () => import('../views/my/My'),
    // beforeEnter: (to, from, next) => {
    //   var Loginstatus = localStorage.getItem("token")//读取在本地存储的文件
    //   //判断要是在登录页时就不在判断
    // },
    meta: {
      showtab: true
    },



  },

  {
    path: '/nickname',
    name: 'Nickname',
    component: () => import('../views/my/Nickname')
  },
  {
    path: '/subject',
    name: 'Subject',
    component: () => import('../views/my/Subject')
  },
  {
    path: '/sex',
    name: 'Sex',
    component: () => import('../views/my/Sex')
  },
  // 找回密码
  {
    path: '/find',
    name: 'Find',
    component: () => import('../views/my/Find')
  }, {
    path: '/sms_login',
    name: 'Sms_login',
    component: () => import('../views/my/Sms_login')
  },

  {
    path: '/setpassword',
    name: 'Setpassword',
    component: () => import('../views/my/Setpassword')
  },

  {
    path: '/my_study',
    name: 'My_study',
    component: () => import('../components/my/My_study')
  },






  //我的里面的小路由
  // ====================================================================

  {
    path: '/collect',
    name: 'Collect',
    component: () => import('../components/my/Collect.vue'),
    meta: {
      showtab: false
    },
  },
  {
    path: '/Sum',
    name: 'Sum',
    component: () => import('../components/my/Sum.vue'),
    meta: {
      showtab: false
    },
  },


  {
    path: '/attention',
    name: 'Attention',
    component: () => import('../components/my/Attention.vue'),
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
  {
    path: '/setzhi',
    name: 'setzhi',
    component: () => import('../components/my/setzhi'),
    meta: {
      showtab: false
    },
  },
  {
    path: '/Coupon',
    name: 'Coupon',
    component: () => import('../components/my/Coupon'),
    meta: {
      showtab: false
    },
  },
  {
    path: '/UserCard',
    name: 'UserCard',
    component: () => import('../components/my/UserCard'),
    meta: {
      showtab: false
    },
  },


  {
    path: '/huis',
    name: 'huis',
    component: () => import('../components/my/huis'),
    meta: {
      showtab: false
    },
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('../components/my/feedback.vue'),
    meta: {
      showtab: false
    },
  },


  {
    path: '/Pim',
    name: 'Pim',
    component: () => import('../components/my/Pim'),
    meta: {
      showtab: false
    },
    // 个人信息
  },
  {
    path: '/Persmation',
    name: 'Persmation',
    component: () => import('../components/my/Persmation'),
    meta: {
      showtab: false
    },
  },


  {
    path: '/message',
    name: 'message',
    component: () => import('../components/my/message'),
    meta: {
      showtab: false
    },
  },


  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },




  // 意见反馈
  {
    path: "/feedback",
    name: "feedback",
    component: () => import("../components/my/feedback.vue")
  },
  // 在线客服
  {
    path: '/custome',
    name: "custome",
    component: () => import("../components/my/custome.vue")
  },
  {
    path: '/Register',
    name: "Register",
    component: () => import("../views/my/Register")
  },

  {
    path: '/mm',
    name: "Mm",
    component: () => import("../views/my/Mm")
  },











  //搜索
  {
    path: '/Searchs',
    name: 'Searchs',
    component: () => import('../views/search/Searchs.vue')
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
    path: '/point',
    name: 'point',
    component: () => import('../views/practice/point.vue')
  },
  {
    path: '/points',
    name: 'points',
    component: () => import('../views/practice/points.vue')
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

  {
    path: '/teacher_details',
    name: 'Teacher_Details',
    component: () => import('../views/lesson/Teacher_Details.vue'),
  },


  {
    path: '/detailsapp',
    name: 'Detailsapp',
    component: () => import('../views/home/Detailsapp.vue'),
  },
  {
    path: '/ationdetails',
    name: 'Ationdetails',
    component: () => import('../views/home/Ationdetails.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// router.beforeEach((to, from, next) => {
//   var Loginstatus = localStorage.getItem("token")//读取在本地存储的文件
//   //判断要是在登录页时就不在判断
//   if (to.name === 'Register') {
//     next();//放行
//   } else {
//     if (Loginstatus) {
//       next()
//     } else {
//       // next('/Sms_login')
//       next('/Register')
//     }
//   }
// })


export default router
