<script setup>
import SvgIcon from '@/components/SvgIcon.vue';
</script>

<template>
    <div class="bottom-navigate">
        <router-link to="/" class="navigate-item">
            <SvgIcon name="bottom-homepage-line" class="icon" />
            <span>首页</span>
        </router-link>
        <router-link to="/book-category" class="navigate-item">
            <SvgIcon name="bottom-category-line" class="icon" />
            <span>书籍分类</span>
        </router-link>
        <router-link to="/my-booklist" class="navigate-item">
            <SvgIcon name="bottom-booklist-line" class="icon" />
            <span>我的书单</span>
        </router-link>
        <router-link to="/user-center" class="navigate-item">
            <SvgIcon name="bottom-usercenter-line" class="icon" />
            <span>个人中心</span>
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
    }
}
</style>