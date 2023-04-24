<script setup>
import BookCard from '@/components/BookCard.vue';
import { ref } from 'vue';

const bookProps = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著',
    publisher: '北京联合出版公司'
}

const listModel = ref(false)
const checkAll = ref([])
const collectionList = ref(null)
const toggleAll = () => {
    collectionList.value.toggleAll(listModel.value);
}

</script>

<template>
    <div class="my-collection-page">
        <div class="page-header">我的收藏(12)</div>
        <div class="page-content">

            <van-checkbox-group v-model="checkAll" ref="collectionList">
                <div class="book-item select" v-for="index in 2">
                    <van-checkbox :name="`book${index}`" />
                    <BookCard v-bind="bookProps" />
                </div>
            </van-checkbox-group>


        </div>

        <div class="bottom-bar space-between-box">
            <div class="checkall-box">
                <van-checkbox v-model="listModel" @change="toggleAll"></van-checkbox>
                <span>全选</span>
            </div>
            <div class="submit-box">
                <div class="button cancel" @click="confirmDialogShow = true">取消收藏</div>
                <div class="button submit" @click="confirmDialogShow = true">提交订单</div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.my-collection-page {
    padding: 16px;
    padding-bottom: 90px;

    .page-header {
        font-size: var(--main-font-size4);
        line-height: var(--main-line-height4);
        color: var(--text-color4);
        margin-bottom: 4px;
        font-weight: bold;
    }

    .book-item {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        background-color: #fff;
        border-radius: 8px;
        padding-left: 12px;
        margin-top: 12px;
        overflow: hidden;

        &.select {
            border: 1px solid #67A3FE;
        }

        .van-checkbox {
            flex-shrink: 0;
        }

        .book-card {
            flex: 1;
            padding: 16px 20px;
        }

        :deep(.book-card .book-title) {
            max-width: calc(100vw - 32px - 14px - 20px - 40px - var(--book-cover-container-width1) - 16px);
        }
    }

    .bottom-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 12px 16px;
        background-color: #fff;
        z-index: 10;

        .checkall-box {
            display: flex;
            align-items: center;

            span {
                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                color: var(--text-color1);
                margin-left: 10px;
            }
        }

        .submit-box {
            display: flex;
            align-items: center;

            .button {
                width: 100px;
                height: 36px;
                border-radius: 18px;
                font-size: var(--main-font-size2);
                line-height: var(--main-line-height2);
                display: flex;
                align-items: center;
                justify-content: center;

                &.submit {
                    background-color: var(--main-color-blue);
                    color: #fff;
                    margin-left: 12px;
                }

                &.cancel {
                    border: 1px solid var(--stroke-color1);
                    color: var(--text-color1);
                }
            }

        }
    }
}
</style>