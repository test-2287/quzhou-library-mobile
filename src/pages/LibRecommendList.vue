<script setup>
import BgImage from '@/assets/lib-recommend-bg.svg'

</script>

<template>
    <div class="lib_recommend-list">
        <div class="list-title">图书馆推荐书单</div>
        <div class="recommend-list">

            <div class="list-item" v-for="index in 6">
                <div class="list-image" :style="{'background-image': `url(${BgImage})`}">
                </div>
                <div class="list-info">
                    <div class="list-name">唐宋诗词鉴赏系列</div>
                    <div class="list-desc">中华文化的博大精深</div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.lib_recommend-list {
    padding: 16px;

    .list-title {
        font-weight: 700;
        font-size: var(--main-font-size3);
        line-height: var(--main-line-height3);
        margin-bottom: 18px;
        color: var(--text-color4);
        font-weight: bold;
    }

    .list-item {
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;
        margin-bottom: 20px;
        background-color: #FFF;

        .list-image {
            height: 140px;
            background-size: cover;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .list-info {
            padding: 16px;
        }

        .list-name {
            font-weight: 500;
            font-size: var(--main-font-size3);
            line-height: var(--main-line-height3);
            color: #276298;
            margin-bottom: 6px;
        }

        .list-desc {
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);
            color: var(--text-color1);
        }
    }
}</style>