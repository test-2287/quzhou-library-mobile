<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import BookCard from '@/components/BookCard.vue'
import BottomNavigate from '@/components/BottomNavigate.vue';

const router = useRouter()

const checked = ref([])
const checkboxGroup = ref(null)
let listModel = ref(false)

const submit = () => {
    router.push('/order')
}

const toggleAll = () => {
    checkboxGroup.value.toggleAll(listModel.value);
}

const bookProps = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著',
    publisher: '北京联合出版公司'
}
</script>

<template>
    <div class="my-booklist-page">
        <div class="page-header">我的书单</div>
        <div class="page-content">
            <div class="booklist-section">
                <div class="booklist-header">衢州市图书馆</div>
                <div class="booklist-list">
                    <van-checkbox-group v-model="checked" ref="checkboxGroup">
                        <div class="booklist-item">
                            <van-checkbox name="a" />
                            <BookCard v-bind="bookProps" />
                        </div>
                        <div class="booklist-item">
                            <van-checkbox name="b" />
                            <BookCard v-bind="bookProps" />
                        </div>
                    </van-checkbox-group>
                    <div class="booklist-action-box space-between">
                        <span class="align-center">
                            <van-checkbox v-model="listModel" @change="toggleAll" />
                            <span class="check-all-text">全选</span>
                        </span>

                        <div class="button-box">
                            <div class="button delete">删除</div>
                            <div class="button submit" @click="submit">提交订单</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <BottomNavigate />
    </div>
</template>

<style scoped lang="scss">
.my-booklist-page {
    padding: 16px;

    .page-header {
        font-size: var(--main-font-size4);
        line-height: var(--main-line-height4);
        color: var(--text-color4);
        margin-bottom: 3px;
        font-weight: bold;
    }

    .booklist-section {
        background-color: #fff;
        border-radius: 8px;
        margin-top: 16px;

        .booklist-header {
            padding: 12px 16px;
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            color: var(--text-color1);
            border-bottom: 1px solid #E6EFF8;
            font-weight: 500;
        }

        .booklist-item {
            display: flex;
            align-items: center;
            padding-left: 12px;

            .book-card {
                flex: 1;
                padding: 16px 20px;
            }
        }

        .booklist-action-box {
            border-top: 1px solid #E6EFF8;
            padding: 9px 12px;

            .check-all-text {
                font-size: var(--font-size12);
                line-height: var(--line-height18);
                color: var(--text-color1);
                margin-left: 10px;
            }

            .button-box {
                display: flex;
            }

            .button {
                width: 100px;
                height: 36px;
                border-radius: 18px;
                font-size: var(--main-font-size2);
                line-height: var(--main-line-height2);
                display: flex;
                align-items: center;
                justify-content: center;

                &:not(:last-child) {
                    margin-right: 12px;
                }

                &.delete {
                    border: 1px solid var(--main-color-red);
                    color: var(--main-color-red);
                }

                &.submit {
                    background-color: var(--main-color-blue);
                    color: #fff;
                }
            }
        }

    }
}
</style>