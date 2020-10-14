import Vue from "vue"
import VueRouter from "vue-router"

// 引入组件

import login from '../page/login.vue'
import home from '../page/home.vue'
import notFound from '../page/404.vue'
import sub11 from '../page/menu1/sub1.vue'
import sub12 from '../page/menu1/sub2.vue'
import sub21 from '../page/menu2/sub1.vue'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);
debugger
let routes = [
  {
    path: "/",
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    component: login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: notFound,
    name: '',
    hidden: true
  },
  {
    path: '/menu1',
    component: home,
    name: '菜单一',
    iconCls: 'el-icon-message', 
    children: [
      {
        path: 'sub1',
        component: sub11,
        name: '子菜单一'
      },
      {
        path: 'sub2',
        component: sub12,
        name: '子菜单二'
      }
    ]
  },
  {
    path: '/menu2',
    component: home,
    name: '菜单二',
    iconCls: 'el-icon-message',
    children: [
      {
        path: 'sub1',
        component: sub21,
        name: '配置管理'
      }
    ]
  },
  {
    path: '/menu2',
    component: home,
    name: '订单管理',
    iconCls: 'el-icon-message',
  },
  {
    path: '/menu2',
    component: home,
    name: '调度管理',
    iconCls: 'el-icon-message',
  },
  {
    path: '/menu2',
    component: home,
    name: '维修管理',
    iconCls: 'el-icon-message',
  },
  {
    path: '/menu2',
    component: home,
    name: '财务管理',
    iconCls: 'el-icon-message',
  },
  {
    path: '/menu2',
    component: home,
    name: '基础数据',
    iconCls: 'el-icon-message',
  },
  {
    path: '/menu2',
    component: home,
    name: '统计分析',
    iconCls: 'el-icon-message',
  },
  {
    path: '/menu2',
    component: home,
    name: '用户管理',
    iconCls: 'el-icon-message',
  },
  {
    path: '/menu2',
    component: home,
    name: '系统配置',
    iconCls: 'el-icon-message',
  }
];

var router = new VueRouter({
    routes
})
export default router;