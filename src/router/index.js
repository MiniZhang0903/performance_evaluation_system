import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
<<<<<<< HEAD




    //个人信息页面路由定义
    {
      path:'/user',
      component:() => import('@/views/userInformation/index'),
      name:'user'
    },
  
    




=======
>>>>>>> 8aa5369a8dccd8fbe521ce986ed06f0f8dbbf881
  {
    path: '/teachingModule',
    component: Layout,
    redirect: '/teachingModule/workload/workloadList',
    name: 'TeachingModule',
    meta: {
      title: '教学教研考评',
      icon: 'example'
    },
    children: [
      {
        path: 'workload',
<<<<<<< HEAD
        component: () => import('@/views/teachingMoudle/workload/index'), // Parent router-view
=======
        component: () => import('@/views/teachingMoudle/workload/index'),
>>>>>>> 8aa5369a8dccd8fbe521ce986ed06f0f8dbbf881
        name: 'workload',
        meta: { title: '工作量', icon: 'clipboard' },
        children: [
          {
            path:'workloadList',
            name:'workloadList',
            component: () => import('@/views/teachingMoudle/workload/workloadList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'workloadAudit',
            name:'workloadAudit',
            component: () => import('@/views/teachingMoudle/workload/workloadAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path: 'teachRes',
        name: 'teachRes',
        component: () => import('@/views/teachingMoudle/teachRes/index'),
        meta: { title: '教学教研', icon: 'nested' },
        children: [
          {
            path:'teachResList',
            name:'teachResList',
            component: () => import('@/views/teachingMoudle/teachRes/teachResList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'teachResAudit',
            name:'teachResAudit',
            component: () => import('@/views/teachingMoudle/teachRes/teachResAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path: 'teachProcess',
        name: 'teachProcess',
        component: () => import('@/views/teachingMoudle/teachProcess'),
        meta: { title: '教学工程及其他', icon: 'component' },
        children: [
          {
            path:'teachProcessList',
            name:'teachProcessList',
            component: () => import('@/views/teachingMoudle/teachProcess/teachProcessList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'teachProcessAudit',
            name:'teachProcessAudit',
            component: () => import('@/views/teachingMoudle/teachProcess/teachProcessAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path:'teachingSumList',
        name:'teachingSumList',
<<<<<<< HEAD
        component:() => import('@/views/teachingMoudle/teachingSumList'),
=======
        component:() => import('@/views/teachingMoudle/teachingSumList/index.vue'),
>>>>>>> 8aa5369a8dccd8fbe521ce986ed06f0f8dbbf881
        meta:{title:'教研考评汇总单',icon:'chart'}
      },
      {
        path:'teachingAudit',
        name:'teachingAudit',
        component:() => import('@/views/teachingMoudle/teachingSumAudit'),
        meta:{title:'教研考评审核单',icon:'form'}
      },
      {
        path:'teaSetting',
        name:'teaSetting',
        component:() => import('@/views/teachingMoudle/teaSetting'),
        meta:{title:'教研考评设置中心',icon:'guide'}
      }
    ]
  },
<<<<<<< HEAD







  {
    path: '/xyrModule',
    component: Layout,
    redirect: '/xyrModule/workload/xkjsList',
    name: 'xyrModule',
    meta: {
      title: '学科、研究生、人才引进模块',
      icon: 'example'
    },
    children: [
      {
        path: 'xyr',
        component: () => import('@/views/xyrModule/xyr/index'), // Parent router-view
        name: 'xyr',
        meta: { title: '相关工作 ', icon: 'clipboard' },
        children: [
          {
            path:'xyrList',
            name:'xyrList',
            component: () => import('@/views/xyrModule/xyr/xyrList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'xyrAudit',
            name:'xyrAudit',
            component: () => import('@/views/xyrModule/xyr/xyrAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
     
      {
        path:'xyrSumList',
        name:'xyrSumList',
        component:() => import('@/views/xyrModule/xyrSumList'),
        meta:{title:'数据汇总单',icon:'chart'}
      },
      {
        path:'xyrAudit',
        name:'xyrAudit',
        component:() => import('@/views/xyrModule/xyrSumAudit'),
        meta:{title:'汇总审核单',icon:'form'}
      },
      {
        path:'xyrSetting',
        name:'xyrSetting',
        component:() => import('@/views/xyrModule/xyrSetting'),
        meta:{title:'设置中心',icon:'guide'}
      }
    ]
  },



  







  
  {
    path: '/zygxModule',
    component: Layout,
    redirect: '/zygxModule/zygx/zygxList',
    name: 'zygxModule',
    meta: {
      title: '专业贡献',
      icon: 'example'
    },
    children: [
      {
        path: 'zyjs',
        component: () => import('@/views/zygxModule/zyjs/index'), // Parent router-view
        name: 'zyjs',
        meta: { title: '专业（平台）工作', icon: 'clipboard' },
        children: [
          {
            path:'zyjsList',
            name:'zyjsList',
            component: () => import('@/views/zygxModule/zyjs/zyjsList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'zyjsAudit',
            name:'zyjsAudit',
            component: () => import('@/views/zygxModule/zyjs/zyjsAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      
      {
        path: 'jingsai',
        component: () => import('@/views/zygxModule/jingsai/index'), // Parent router-view
        name: 'jingsai',
        meta: { title: '竞赛相关', icon: 'clipboard' },
        children: [
          {
            path:'jingsaiList',
            name:'jingsaiList',
            component: () => import('@/views/zygxModule/jingsai/jingsaiList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'jingsaiAudit',
            name:'jingsaiAudit',
            component: () => import('@/views/zygxModule/jingsai/jingsaiAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },


      {
        path:'zygxSumList',
        name:'zxgxSumList',
        component:() => import('@/views/zygxModule/zygxSumList'),
        meta:{title:'专业贡献数据汇总单',icon:'chart'}
      },
      {
        path:'zygxAudit',
        name:'zygxAudit',
        component:() => import('@/views/zygxModule/zygxSumAudit'),
        meta:{title:'专业贡献汇总审核单',icon:'form'}
      },
      {
        path:'zygxSetting',
        name:'zygxSetting',
        component:() => import('@/views/zygxModule/zygxSetting'),
        meta:{title:'设置中心',icon:'guide'}
      }
    ]
  },





  {
    path: '/xsgzModule',
    component: Layout,
    redirect: '/xsgzModule/xsgz/xsgzList',
    name: 'xsgzModule',
    meta: {
      title: '学生工作',
      icon: 'example'
    },
    children: [
      {
        path: 'zhuanxiang',
        component: () => import('@/views/xsgzModule/zhuanxiang/index'), // Parent router-view
        name: 'zhuanxiang',
        meta: { title: '工作相关 ', icon: 'clipboard' },
        children: [
          {
            path:'zhuanxiangList',
            name:'zhuanxiangList',
            component: () => import('@/views/xsgzModule/zhuanxiang/zhuanxiangList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'zhuanxiangAudit',
            name:'zhuanxiangAudit',
            component: () => import('@/views/xsgzModule/zhuanxiang/zhuanxiangAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path: 'huojiang',
        component: () => import('@/views/xsgzModule/huojiang/index'), // Parent router-view
        name: 'huojiang',
        meta: { title: '奖项及荣誉相关 ', icon: 'clipboard' },
        children: [
          {
            path:'huojiangList',
            name:'huojiangList',
            component: () => import('@/views/xsgzModule/huojiang/huojiangList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'huojiangAudit',
            name:'huojiangAudit',
            component: () => import('@/views/xsgzModule/huojiang/huojiangAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path:'xsgzSumList',
        name:'xsgzSumList',
        component:() => import('@/views/xsgzModule/xsgzSumList'),
        meta:{title:'数据汇总单',icon:'chart'}
      },
      {
        path:'xsgzAudit',
        name:'xsgzAudit',
        component:() => import('@/views/xsgzModule/xsgzSumAudit'),
        meta:{title:'汇总审核单',icon:'form'}
      },
      {
        path:'xsgzSetting',
        name:'xsgzSetting',
        component:() => import('@/views/xsgzModule/xsgzSetting'),
        meta:{title:'设置中心',icon:'guide'}
      }
    ]
  },






=======
  //个人信息页面路由定义
  {
    path:'/user',
    component:() => import('@/views/userInformation/index'),
    name:'user'
  },
>>>>>>> 8aa5369a8dccd8fbe521ce986ed06f0f8dbbf881
  {
    path: '/generalAudit',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'generalAudit',
        component: () => import('@/views/generalAudit/index'),
        meta: { title: '终极审核单', icon: 'form' }
      }
    ] 
  },
  {
    path: '/setting',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'systemSetting',
        component: () => import('@/views/systemSetting/index'),
        meta: { title: '系统设置中心', icon: 'guide' }
      }
    ] 
  },
  {
    path: '/personManager',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'personManager',
        component: () => import('@/views/personManager/index'),
<<<<<<< HEAD
        meta: { title: '人员信息管理', icon: 'user' }
=======
        meta: { title: '用户信息管理', icon: 'user' }
>>>>>>> 8aa5369a8dccd8fbe521ce986ed06f0f8dbbf881
      }
    ] 
  },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
