import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/u-begin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'begin',
    component: HomeView,
    meta: {
      title: '基础案例',
      component: '/src/views/u-begin.vue',
    },
  },
  {
    path: '/defaultcontent',
    name: 'defaultContent',
    component: () => import('../views/u-default-content.vue'),
    meta: {
      title: 'defaultContent',
      component: '/src/views/u-default-content.vue',
    },
  },
  {
    path: '/defaulthtml',
    name: 'defaultHtml',
    component: () => import('../views/u-default-html.vue'),
    meta: {
      title: 'defaulthtml',
      component: '/src/views/u-default-html.vue',
    },
  },
  {
    path: '/async',
    name: 'UseWithAsync',
    component: () => import('../views/u-async.vue'),
    meta: {
      title: '在弹窗/抽屉中使用',
      component: '/src/views/u-async.vue',
    },
  },
  {
    path: '/bindjson',
    name: 'v-bind:json.sync',
    component: () => import('../views/u-bind-json.vue'),
    meta: {
      title: '双向绑定 json',
      component: '/src/views/u-bind-json.vue',
    },
  },
  {
    path: '/bindhtml',
    name: 'v-bind:html.sync',
    component: () => import('../views/u-bind-html.vue'),
    meta: {
      title: '双向绑定 html',
      component: '/src/views/u-bind-html.vue',
    },
  },
  {
    path: '/reloadbefore',
    name: 'reloadbefore',
    component: () => import('../views/u-reloadbefore.vue'),
    meta: {
      title: '重载前回调',
      component: '/src/views/u-reloadbefore.vue',
    },
  },
  {
    name: 'SubmitSync',
    path: '/submit-sync',
    component: () => import('../views/u-sync-content.vue'),
    meta: {
      title: '强制同步表单数据',
      component: '/src/views/u-sync-content.vue',
    },
  },
  {
    path: '/dynamic-update',
    name: 'DynamicUpdate',
    component: () => import('../views/u-dynamic-update.vue'),
    meta: {
      title: '动态配置编辑器',
      component: '/src/views/u-dynamic-update.vue',
    },
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export const ComponentFiles = new Map()

export const Menus = routes.map((item) => {
  ComponentFiles.set(item.path, item.meta.component)
  ComponentFiles.set(item.path.replace(/\/$/, ''), item.meta.component)

  return {
    path: item.path,
    title: item.meta.title,
  }
})

router.afterEach((to, from, failure) => {
  if (failure) return

  document.title = to.meta.title
})

export default router
