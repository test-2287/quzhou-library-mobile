<script setup>
import BookCard from '@/components/BookCard.vue';

const bookProps = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著',
    publisher: '北京联合出版公司',
    isbn: '239-284-940-213',
}
</script>

<template>
    <div class="popular-page">
        <div class="book-item">
            <BookCard v-bind="bookProps" />
        </div>
        <div class="book-item">
            <BookCard v-bind="bookProps" />
        </div>
        <div class="book-item">
            <BookCard v-bind="bookProps" />
        </div>
        <div class="book-item">
            <BookCard v-bind="bookProps" />
        </div>
        <div class="book-item">
            <BookCard v-bind="bookProps" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.popular-page {
    padding: 16px;

    .book-item {
        &:not(:first-child) {
            margin-top: 1px;
        }

        &:first-child {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            overflow: hidden;
        }
        &:last-child {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            overflow: hidden;
        }
    }

}
</style>