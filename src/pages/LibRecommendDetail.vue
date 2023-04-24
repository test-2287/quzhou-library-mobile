<script setup>
import BookCard from '@/components/BookCard.vue';

import ThemeBanner from '@/assets/lib-recommend-detail-bg.svg';

const bookProps = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著',
    publisher: '北京联合出版公司',
    isbn: '239-284-940-213',
}

</script>

<template>
    <div class="lib_recommend-detail">
        <div class="theme-banner" :style="`background-image: url(${ThemeBanner})`"></div>
        <div class="theme-intro">
            <div class="theme-title">一路向西 丝绸之路</div>
            <div class="theme-subtitle">中华文化的博大精深</div>
            <div class="theme-desc">中国的丝绸、瓷器、陶器、茶叶等大量珍贵产品和科学文化，除通过横贯大陆的陆上交通线路大量输往中亚、西亚和非洲、欧洲之外，也通过海上源源不断地销往东亚、大洋洲、美洲和世界各地。
            </div>
        </div>
        <div class="recommend-section">
            <div class="recommend-label">推荐书单(12)</div>
            <div class="recommend-list">
                <div class="recommend-item" v-for="index in 5">
                    <BookCard v-bind="bookProps" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.lib_recommend-detail {
    .theme-banner {
        height: 160px;
        background-size: cover;
    }

    .theme-intro {
        padding: 20px 16px;
        background-color: #fff;
        color: var(--text-color4);

        .theme-title {
            font-size: var(--main-font-size4);
            line-height: var(--main-line-height4);
            font-weight: bold;
            margin-bottom: 6px;
        }

        .theme-subtitle {
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
        }

        .theme-desc {
            margin-top: 20px;
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
        }
    }

    .recommend-section {
        padding: 28px 17px;

        .recommend-label {
            font-size: var(--main-font-size3);
            line-height: var(--main-line-height3);
            font-weight: bold;
            color: var(--text-color4);
            margin-bottom: 18px;
        }

        .recommend-list {

            .recommend-item:not(:first-child) {
                margin-top: 1px;
            }

            :deep(.book-card .book-title) {
                max-width: calc(100vw - 32px * 2 - var(--book-cover-container-width1) - 16px);
            }
        }
    }
}
</style>