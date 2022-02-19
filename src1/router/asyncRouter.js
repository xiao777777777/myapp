let asyncRouter=[
    {
        // 管理后台的主页面
        path: '/home',
        name: 'layout',
        component: () => import('../views/layout'),
        redirect: '/home/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('@/views/dashboard'),
                meta: {
                    title: '首页',
                    icon: "el-icon-eleme"
                }
            }
        ]
    },

      // 学生管理 
      {
        path: '/stuAdmin',
        name: 'stuAdmin',
        meta: {
            title: '学生管理',
            icon: 'el-icon-location'
        },
        component: () => import('../views/layout'),
        children: [
            {
                path: 'addstu',
                name: 'addstu',
                component: () => import('@/views/stuAdmin/addstu.vue'),
                meta: {
                    title: '新生报名',
                    icon: 'el-icon-star-off'
                }
            },
            {
                path: 'adminClass',
                name: 'adminClass',
                component: () => import('@/views/stuAdmin/adminClass.vue'),
                meta: {
                    title: '班级管理',
                    icon: 'el-icon-star-off'
                }
            },
            {
                path: 'stuInfo',
                name: 'stuInfo',
                component: () => import('@/views/stuAdmin/stuInfo.vue'),
                meta: {
                    title: '学生信息',
                    icon: 'el-icon-star-off'
                }
            }
        ]

    },

    //信息
   {
       
        path: '/notice',
        name: 'notice',
        component: () => import('../views/layout'),
        children: [
            {
                path: 'index.vue',
                name: 'index',
                component: () => import('@/views/notice'),
                meta: {
                    title: '信息',
                    icon: "el-icon-eleme"
                }
            }
        ]
    },

]
export default asyncRouter