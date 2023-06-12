<script setup>
import { ref, reactive } from 'vue';
import BookCard from '@/components/BookCard.vue';

let activeFilter = ref(0)

const filterList = reactive([
    '3个月',
    '10天',
    '5天',
])

const bookProps = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著',
    publisher: '北京联合出版公司',
    isbn: '239-284-940-213',
    showRank: true
}

</script>

<template>
    <div class="rank-page">
        <div class="filter-bar">
            <div class="text-label">筛选</div>
            <div class="filter-buttons">
                <van-config-provider :theme-vars="{
                    buttonDefaultBackground: 'var(--background-color2)',
                    buttonDefaultColor: 'var(--text-color1)',
                    buttonSmallFontSize: 'var(--main-font-size2)',
                    buttonLineHeight: 'var(--main-line-height2)'
                }">
                    <van-button size="small" v-for="(item, index) in filterList" :key="index"
                        :type="activeFilter === index ? 'primary' : 'default'" @click="activeFilter = index">{{ item
                        }}</van-button>
                </van-config-provider>
            </div>

        </div>

        <div class="rank-list">
            <div class="list-item" v-for="index in 10">
                <BookCard v-bind="bookProps" :rank="index" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.rank-page {
    .filter-bar {
        display: flex;
        align-items: center;
        background-color: #fff;
        border-top: 1px solid var(--divider-color);
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);


        .text-label {
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            color: var(--text-color2);
            padding: 0 16px;
            display: flex;
            align-items: center;
        }

        .filter-buttons {
            flex: 1;
            display: flex;
            padding: 14px 16px;
            padding-left: 0;
            white-space: nowrap;
            overflow-x: auto;

            button:not(:last-child) {
                margin-right: 12px;
            }
        }
    }

    .rank-list {
        padding: 16px;

        .list-item {
            border-radius: 8px;
            overflow: hidden;

            &:not(:last-child) {
                margin-bottom: 10px;
            }

            :deep(.book-card .book-title) {
                max-width: calc(100vw - 32px - 30px - var(--book-cover-container-width1) - 16px);
            }

        }

    }
}
</style>