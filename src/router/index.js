import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "hello" */ '../views/hello/index.vue'),
        name: 'hello',
        meta: {
          title: '欢迎页',
        },
      },
      {
        path: '/user',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/index.vue'),
        name: 'Award',
        meta: {
          title: '自主入职',
        },
      },
      {
        path: '/company',
        component: () => import(/* webpackChunkName: "company" */ '../views/company/index.vue'),
        name: 'company',
        meta: {
          title: '企业介绍',
        },
      }
    ]
  },
  {
    path: '/basic',
    component: () => import(/* webpackChunkName: "basic" */ '../views/basic/index.vue'),
    name: 'basic',
    meta: {
      title: '基本信息',
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
