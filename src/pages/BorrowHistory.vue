<script setup>
import BookCard from '@/components/BookCard.vue';
import { ref, reactive } from 'vue';

const bookData = reactive({
    title: '《活着》',
    author: '余华',
    publisher: '作家出版社',
})
</script>

<template>
    <div class="borrow-history-page">
        <div class="page-header">借阅历史</div>
        <div class="page-content borrow-list">
            <div class="borrow-card" v-for="item in 4">
                <div class="top">
                    <BookCard v-bind="bookData" />
                </div>
                <div class="bottom">
                    <div class="bottom-item">
                        <div class="label">借阅日期</div>
                        <div class="value">2023年1月20日</div>
                    </div>
                    <div class="bottom-item">
                        <div class="label">归还日期</div>
                        <div class="value">2023年1月20日</div>
                    </div>
                    <div class="bottom-item">
                        <div class="label">借阅时长</div>
                        <div class="value">20日</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.borrow-history-page {
    padding: 16px;
    padding-bottom: 90px;

    .page-header {
        font-size: var(--main-font-size4);
        line-height: var(--main-line-height4);
        color: var(--text-color4);
        font-weight: bold;
        margin-bottom: 23px;
    }

    .borrow-card {
        background: #FFFFFF;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 12px;

        .book-card {
            padding: 14px;
            padding-top: 11px;
        }

        .top {
            border-bottom: 1px solid #E6EFF8;
        }

        .bottom {
            padding: 9px 18px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 24px;
            font-size: 12px;
            line-height: 17px;
            color: #8AA2C5;
        }
    }

}</style>