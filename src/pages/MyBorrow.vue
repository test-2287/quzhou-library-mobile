<script setup>
import BookCard from '@/components/BookCard.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { showDialog } from 'vant';
import { ref } from 'vue'

const bookProps = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著',
    publisher: '北京联合出版公司'
}

const showBorrowInstruction = () => {
    showDialog({
        title: '借阅图书说明',
        message: '借阅图书说明借阅图书说明借阅图书说明借',
        maxHeight: '300px',
        width: '260px',
        footer: ''
    })
}

const confirmDialogShow = ref(false)
const renew = () => {
    confirmDialogShow.value = false
    renewSuccessDialog.value = true
}

const renewSuccessDialog = ref(false)

const listModel = ref(false)
const checkAll = ref([])
const borrowList = ref(null)
const toggleAll = () => {
    borrowList.value.toggleAll(listModel.value);
}

</script>

<template>
    <div class="my-borrow-page">
        <div class="page-header">
            <span class="header-text">我的借阅(5)</span>
            <span class="popup-text" @click="showBorrowInstruction">借阅图书说明</span>
        </div>
        <div class="page-content">
            <div class="borrow-section">

                <van-checkbox-group v-model="checkAll" ref="borrowList">

                    <div class="borrow-item  select" v-for="index in 2">
                        <van-checkbox :name="`book${index}`" />
                        <div class="item-right">
                            <BookCard v-bind="bookProps" />
                            <div class="borrow-info-box">
                                <div class="borrow-info-left">
                                    <div class="info-item">
                                        条码号
                                        6423945447
                                    </div>
                                    <div class="info-item">
                                        借阅日期
                                        2023年1月20日
                                    </div>
                                    <div class="info-item">
                                        还回日期
                                        2023年1月20日
                                    </div>
                                </div>
                                <div class="borrow-info-right">
                                    <div class="top">离归还有</div>
                                    <div class="left-days">20</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </van-checkbox-group>

            </div>
        </div>

        <div class="bottom-bar space-between-box">
            <div class="checkall-box">
                <van-checkbox v-model="listModel" @change="toggleAll"></van-checkbox>
                <span>全选</span>
            </div>
            <div class="submit-box">
                <span class="count">已选择 2 本图书</span>
                <div class="button" @click="confirmDialogShow = true">提交订单</div>
            </div>
        </div>

        <van-dialog v-model:show="confirmDialogShow" width="260" title="续借2本图书？">
            <div class="dialog-content">
                <div class="book-item space-between-box">
                    <div class="item-left">
                        <div class="book-title">贝聿铭全集</div>
                        <div class="book-author">[美] 菲利普·朱迪狄欧 著</div>
                    </div>
                    <div class="item-right">
                        <div>续借</div>
                        <div>30天</div>
                    </div>
                </div>
                <div class="book-item space-between-box">
                    <div class="item-left">
                        <div class="book-title">贝聿铭全集</div>
                        <div class="book-author">[美] 菲利普·朱迪狄欧 著</div>
                    </div>
                    <div class="item-right">
                        <div>续借</div>
                        <div>30天</div>
                    </div>
                </div>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <div class="dialog-button cancel" @click="confirmDialogShow = false">再想一下</div>
                    <div class="dialog-button confirm" @click="renew">是的</div>
                </div>
            </template>
        </van-dialog>

        <van-dialog v-model:show="renewSuccessDialog" width="180" :closeOnClickOverlay="true">
            <div class="renew-dialog">
                <SvgIcon name="renew-success" class="icon" />
                <div class="success-text">已续借成功</div>
            </div>
            <template #footer />
        </van-dialog>


    </div>
</template>

<style scoped lang="scss">
.my-borrow-page {
    padding: 16px;
    padding-bottom: 90px;

    .page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: var(--main-font-size4);
        line-height: var(--main-line-height4);
        color: var(--text-color4);
        font-weight: bold;

        .popup-text {
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);
            color: var(--main-color-blue);
            font-weight: normal;
        }
    }

    .borrow-item {
        background-color: #fff;
        border-radius: 8px;
        padding-left: 12px;
        padding-bottom: 16px;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        overflow: hidden;
        margin-top: 16px;

        &.select {
            border: 1px solid var(--stroke-color2);
        }

        display: flex;
        align-items: center;

        .van-checkbox {
            flex-shrink: 0;
        }

        .item-right {
            flex: 1;

            :deep(.book-card .book-title) {
                max-width: calc(100vw - 32px - 14px - 20px - 30px - var(--book-cover-container-width1) - 16px);
            }

            .borrow-info-box {
                display: flex;
                justify-content: space-between;
                padding: 0 18px;
            }

            .borrow-info-left {
                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                color: var(--text-color1);

                .info-item:not(:first-child) {
                    margin-top: 6px;
                }
            }

            .borrow-info-right {
                border: 1px solid #F5F5F5;
                border-radius: 6px;
                align-self: flex-start;

                .top {
                    padding: 3px 9px;
                    font-size: var(--main-font-size1);
                    line-height: var(--main-line-height1);
                    color: #D7BB9B;
                    background-color: rgba(238, 186, 84, 0.15);
                }

                .left-days {
                    padding: 6px 16px;
                    color: var(--main-color-orange);
                    font-size: var(--main-font-size3);
                    line-height: var(--main-line-height3);
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
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

            .count {
                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                color: var(--text-color1);
                margin-right: 16px;
            }

            .button {
                width: 100px;
                height: 36px;
                background-color: var(--main-color-blue);
                border-radius: 18px;
                font-size: var(--main-font-size2);
                line-height: var(--main-line-height2);
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    .dialog-content {
        padding: 16px;

        .book-item {
            padding: 12px;
            padding-bottom: 16px;
            border: 1px solid #E7E7E7;
            border-radius: 6px;

            &:not(:first-child) {
                margin-top: 12px;
            }

            .book-title {
                /* font-size: var(--font-size12);
                line-height: var(--line-height18); */
                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                margin-bottom: 6px;
            }

            .book-author {
                font-size: var(--font-size12);
                line-height: var(--line-height18);
                /* font-size: var(--main-font-size1);
                line-height: var(--main-line-height1); */
                color: var(--text-color1);
            }
        }

        .item-right {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: var(--main-color-orange);
            /* font-size: var(--font-size12); */
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);
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
            /* font-size: var(--font-size14); */
            font-size: var(--main-font-size2);
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

    .renew-dialog {
        padding: 24px 16px 19px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
            width: 50px;
            height: 50px;
            color: var(--main-color-green);
            margin-bottom: 16px;
        }

        .success-text {
            font-size: var(--font-size18);
            line-height: var(--line-height26);
            font-weight: bold;

        }
    }
}
</style>