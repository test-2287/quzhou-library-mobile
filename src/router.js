import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/homepage/HomePage.vue'
import LibRecommend from './pages/LibRecommendList.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/lib-recommend-list',
        component: LibRecommend
    },
    {
        path: '/lib-recommend-detail',
        component: () => import('./pages/LibRecommendDetail.vue')
    },
    {
        path: '/highlights',
        component: () => import('./pages/tabspage/TabsMain.vue'),
        children: [
            {
                path: '',
                redirect: '/highlights/popular'
            },
            {
                path: 'popular',
                component: () => import('@/pages/tabspage/Popular.vue')
            },
            {
                path: 'rank',
                component: () => import('@/pages/tabspage/Rank.vue')
            },
            {
                path: 'new-arrival'
            },
            {
                path: 'reader-recommend'
            }

        ]
    },
    {
        path: '/book-category',
        component: () => import('@/pages/BookCategory.vue'),
        
    },
    {
        path: '/book-detail',
        component: () => import('@/pages/BookDetail.vue')
    },
    {
        path: '/my-booklist',
        component: () => import('@/pages/MyBookList.vue')
    },
    {
        path: '/my-borrow',
        component: () => import('@/pages/MyBorrow.vue')
    },
    {
        path: '/my-collection',
        component: () => import('@/pages/MyCollection.vue')
    },
    {
        path: '/order',
        component: () => import('@/pages/order/OrderPage.vue')
    },
    {
        path: '/order-list',
        component: () => import('@/pages/order/OrderList.vue')
    },
    {
        path: '/order-detail',
        component: () => import('@/pages/order/OrderDetail.vue')
    },
    {
        path: '/delivery-info',
        component: () => import('@/pages/order/DeliveryInfo.vue')
    },
    {
        path: '/receiver-manage',
        component: () => import('@/pages/ReceiverManage.vue')
    },
    {
        path: '/receiver-add',
        component: () => import('@/pages/ReceiverAdd.vue')
    },
    {
        path: '/changepwd',
        component: () => import('@/pages/ChangePwd.vue')
    },
    {
        path: '/ecard',
        component: () => import('@/pages/Ecard.vue')
    },
    {
        path: '/ecard-register',
        component: () => import('@/pages/EcardRegister.vue')
    },
    {
        path: '/login',
        component: () => import('@/pages/Login.vue')
    },
    {
        path: '/user-center',
        component: () => import('@/pages/UserCenter.vue')
    },
    {
        path: '/pay-result',
        component: () => import('@/pages/PayResult.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router