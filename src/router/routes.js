import asynComponent from './asynComponent'
import Layout from '@/views/layout/Layout' // 公共模块
export const constantRouterMap = [
  {
    path: '/',
    component: asynComponent.root,
    redirect: '/root',
    children: [
      {
        path: '/root',
        name: 'root'
      }
    ]
  },
  {
    path: '/permision',
    component: Layout,
    redirect: '/permision/index',
    children: [
      {
        path: '/permision/index',
        name: 'permision',
        component: asynComponent.permision
      }
    ]
  },
  {
    path: '/echarts',
    component: Layout,
    redirect: '/echarts/index',
    children: [
      {
        path: '/echarts/index',
        name: 'echarts',
        component: asynComponent.echarts
      }
    ]
  },
  {
    path: '/mix_echarts',
    component: Layout,
    redirect: '/mix_echarts/index',
    children: [
      {
        path: '/mix_echarts/index',
        name: 'mixEcharts',
        component: asynComponent.mixEcharts
      }
    ]
  }
]
