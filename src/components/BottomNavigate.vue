<script setup>
import SvgIcon from '@/components/SvgIcon.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path) => {
    return route.path === path ? 'active' : '';
};

const navigateList = [
    {
        path: '/',
        name: 'bottom-homepage',
        text: '首页',
    },
    {
        path: '/book-category',
        name: 'bottom-category',
        text: '书籍分类',
    },
    {
        path: '/my-booklist',
        name: 'bottom-booklist',
        text: '我的书单',
    },
    {
        path: '/user-center',
        name: 'bottom-usercenter',
        text: '个人中心',
    }
];



</script>

<template>
    <div class="bottom-navigate">

        <router-link :to="listItem.path" class="navigate-item" :class="{'active': isActive(listItem.path)}" v-for="listItem in navigateList">
            <SvgIcon :name="`${listItem.name}-${isActive(listItem.path)? 'fill': 'line'}`" class="icon"/>
            <span>{{ listItem.text }}</span>
        </router-link>

    </div>
</template>

<style lang="scss" scoped>
.bottom-navigate {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid var(--main-color-gray);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;

    .navigate-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        line-height: 16px;
        color: var(--text-color1);
        width: 60px;
        height: 60px;

        .icon {
            width: 24px;
            height: 24px;
            margin-bottom: 3px;
        }

        &.active {
            color: #4E9FF0;
            font-weight: bold;
        }
    }
}
</style>