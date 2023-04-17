<script setup>
import BookCoverDefault from '@/assets/book-cover-default.svg';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const dialogShow = ref(false);

const router = useRouter();
const checkOrderDetail = () => {
    router.push('/order-detail');
}

</script>

<template>
    <div class="order-list-page">
        <van-tabs>
            <van-tab title="全部"></van-tab>
            <van-tab title="待支付"></van-tab>
            <van-tab title="待处理"></van-tab>
            <van-tab title="已取消"></van-tab>
        </van-tabs>

        <div class="order-list">
            <div class="order-item">
                <div class="space-between-box item-top">
                    <div class="box-left">
                        <span class="title-text">衢州市图书馆</span>
                        <div class="order-info">
                            <span class="order-number">订单编号：2947587461</span>
                            <span class="order-time">订单时间：2023年1月10日 10:28:04</span>
                        </div>
                    </div>
                    <div class="box-right order-status">
                        <div class="status-box pending-payment">待支付</div>
                        <div class="status-box pending-process">待处理</div>
                        <div class="status-box processed">已处理</div>
                        <div class="status-box canceled">已取消</div>
                    </div>
                </div>
                <div class="books-container">
                    <div class="book-item">
                        <div class="book-cover">
                            <img :src="BookCoverDefault" alt="">
                        </div>
                        <div class="book-title">中国哲学史 第一部完整的具有现代意义</div>
                    </div>
                    <div class="book-item">
                        <div class="book-cover">
                            <img :src="BookCoverDefault" alt="">
                        </div>
                        <div class="book-title">中国哲学史 第一部完整的具有现代意义</div>
                    </div>
                    <div class="book-item">
                        <div class="book-cover">
                            <img :src="BookCoverDefault" alt="">
                        </div>
                        <div class="book-title">中国哲学史 第一部完整的具有现代意义</div>
                    </div>
                    <div class="book-item">
                        <div class="book-cover">
                            <img :src="BookCoverDefault" alt="">
                        </div>
                        <div class="book-title">中国哲学史 第一部完整的具有现代意义</div>
                    </div>
                    <div class="book-item">
                        <div class="book-cover">
                            <img :src="BookCoverDefault" alt="">
                        </div>
                        <div class="book-title">中国哲学史 第一部完整的具有现代意义</div>
                    </div>
                </div>
                <div class="space-between-box action-box">
                    <span class="books-count">共5本图书</span>
                    <div class="box-right">
                        <div class="button cancel-order" @click="dialogShow = true">取消订单</div>
                        <div class="button check-order" @click="checkOrderDetail">查看订单</div>
                    </div>
                </div>
            </div>
        </div>

        <van-dialog v-model:show="dialogShow" width="260" title="你需要取消订单吗？">
            <template #footer>
                <div class="dialog-footer">
                    <div class="dialog-button cancel" @click="dialogShow = false">再想一下</div>
                    <div class="dialog-button confirm" @click="dialogShow = false">是的</div>
                </div>
            </template>
        </van-dialog>

    

    </div>
</template>

<style scoped lang="scss">
.order-list-page {
    .order-list {
        padding: 16px;
    }

    .order-item {
        background: #FFFFFF;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;
        padding: 16px;

        .item-top {
            padding-bottom: 16px;
            border-bottom: 1px solid #E9E9E9;
        }

        .title-text {
            font-weight: bold;
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            display: flex;
            align-items: center;
            margin-bottom: 12px;

            &::before {
                content: '';
                width: 4px;
                height: 16px;
                background: var(--main-color-blue);
                border-radius: 2px;
                margin-right: 10px;
            }
        }

        .order-info {
            display: flex;
            flex-direction: column;
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);
            color: var(--text-color1);

            >span:not(:last-child) {
                margin-bottom: 6px;
            }
        }

        .order-status {
            .status-box {
                font-size: var(--main-font-size2);
                line-height: var(--main-line-height2);
                padding: 6px 10px;
                border-radius: 4px;

                &.pending-payment {
                    color: var(--main-color-green);
                    background: #E3F8E0;
                }

                &.pending-process,
                &.processed {
                    background: #E5F3FF;
                    color: #629FFF;
                }

                &.canceled {
                    background: #EEE;
                    color: #B4B4B4;
                }
            }
        }

        .books-container {
            padding: 16px 0;
            display: flex;
            width: calc(100vw - 32px - 32px);
            overflow: hidden;

            .book-item {
                margin-right: 20px;
                display: flex;
                flex-direction: column;

                .book-cover {
                    width: var(--book-cover-container-width1);
                    height: var(--book-cover-container-height1);
                    margin-bottom: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img {
                        width: var(--book-cover-image-width1);
                        height: var(--book-cover-image-height1);

                    }
                }

                .book-title {
                    font-size: var(--main-font-size1);
                    line-height: var(--main-line-height1);
                    font-weight: bold;
                    color: var(--main-color-blue-dark);
                    width: 60px;
                    max-height: calc(var(--main-line-height1) * 2);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
        }

        .action-box {
            align-items: center;

            .books-count {
                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                color: var(--text-color2);
            }

            .box-right {
                display: flex;
                align-items: center;
            }

            .button {
                font-size: var(--main-font-size2);
                line-height: var(--main-line-height2);
                padding: 8px 22px;
                border-radius: 18px;
                margin-left: 16px;

                &.cancel-order {
                    color: var(--text-color1);
                    border: 1px solid var(--stroke-color1);
                }

                &.check-order {
                    color: #fff;
                    background: var(--main-color-blue);
                }
            }
        }
    }

    .dialog-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        padding-bottom: 20px;

        .dialog-button {
        width: 100px;
        height: 42px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-size14);
        line-height: var(--line-height20);
        font-weight: bold;

        &.cancel {
            color: var(--text-color6);
            border: 1px solid var(--stroke-color1);
        }

        &.confirm {
            color: #fff;
            background: var(--main-color-blue);
        }
    }
    }



    
}</style>