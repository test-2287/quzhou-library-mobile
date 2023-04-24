<script setup>
import BookCard from '@/components/BookCard.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const bookProps = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著',
    publisher: '北京联合出版公司'
}

const dialogShow = ref(false);
const showPayment = ref(false);

const router = useRouter()
const checkDelivery = () => {
    router.push('/delivery-info');
}

</script>

<template>
    <div class="order-detail-page">

        <div class="pending-notice">
            <SvgIcon name="icon-order-notice" class="icon" />
            <span>订单尚未完成支付，请在1小时内完成支付。</span>
        </div>

        <div class="space-between-box delivery-info" @click="checkDelivery">
            <div class="info-left">
                <SvgIcon name="icon-delivery" class="icon" />
                <span>正在等待包裹揽收</span>
            </div>
            <SvgIcon name="icon-right" class="icon-right" />
        </div>

        <div class="receiver-info">
            <div class="receiver-info-title">
                <span class="title-text">收件人信息</span>
            </div>
            <div class="receiver-info-content">
                <div class="receiver-info-item">
                    <span class="item-label">收货人</span>
                    <span class="item-value">张三</span>
                </div>
                <div class="receiver-info-item">
                    <span class="item-label">联系电话</span>
                    <span class="item-value">13888888888</span>
                </div>
                <div class="receiver-info-item">
                    <span class="item-label">收货地址</span>
                    <span class="item-value">北京市海淀区中关村大街</span>
                </div>
            </div>
        </div>

        <div class="books-info">
            <div class="books-info-title">
                <span class="title-text">图书信息</span>
                <span class="right-text">共1件</span>
            </div>
            <div class="books-info-content">
                <BookCard v-bind="bookProps" />
                <BookCard v-bind="bookProps" />
                <BookCard v-bind="bookProps" />
            </div>
        </div>

        <div class="order-info">
            <div class="order-info-title">
                <span class="title-text">订单信息</span>
            </div>
            <div class="order-info-content">
                <div class="order-info-item">
                    <span class="item-label">订单编号</span>
                    <span class="item-value">2947587461</span>
                </div>
                <div class="order-info-item">
                    <span class="item-label">订单时间</span>
                    <span class="item-value">2023年1月10日 10:28:04</span>
                </div>
                <div class="order-info-item">
                    <span class="item-label">应付金额</span>
                    <span class="item-value">6元</span>
                </div>
                <div class="order-info-item">
                    <span class="item-label">实付金额</span>
                    <span class="item-value">0元</span>
                </div>
            </div>
        </div>

        <div class="pending-action">
            <div class="button cancel-order" @click="dialogShow = true">取消订单</div>
            <div class="button pay-now" @click="showPayment = true">立即支付</div>
        </div>

        <van-popup round position="bottom" v-model:show="showPayment" :style="{ height: '240px' }">
            <div class="payment-box">
                <div class="payment-title">选择支付方式</div>
                <div class="payment-options">
                    <div class="option">
                        <SvgIcon name="order-wechatpay" class="icon" />
                        <span>微信支付</span>
                    </div>
                    <div class="option">
                        <SvgIcon name="order-alipay" class="icon" />
                        <span>支付宝支付</span>
                    </div>
                </div>
            </div>
        </van-popup>

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
.order-detail-page {
    padding: 16px;

    >div {
        margin-bottom: 16px;
    }

    .pending-notice,
    .delivery-info {
        padding: 12px;
        background: #FFFFFF;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;
        font-size: var(--main-font-size2);
        line-height: var(--main-line-height2);
        color: var(--text-color4);
    }

    .pending-notice {
        display: flex;
        align-items: center;

        .icon {
            width: 20px;
            height: 20px;
            margin-right: 12px;
            color: var(--main-color-blue);
        }
    }

    .delivery-info {
        align-items: center;

        .info-left {
            display: flex;
            align-items: center;

            .icon {
                width: 23px;
                height: 16px;
                margin-right: 16px;
            }
        }

        .icon-right {
            width: 24px;
            height: 24px;
            color: var(--text-color2);
        }
    }

    .receiver-info {
        padding: 16px;
        padding-bottom: 12px;
        background: #FFFFFF;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;

        .receiver-info-title {
            margin-bottom: 12px;

            .title-text {
                font-weight: bold;
                font-size: var(--main-font-size2);
                line-height: var(--main-line-height2);
                display: flex;
                align-items: center;

                &::before {
                    content: '';
                    width: 4px;
                    height: 16px;
                    background: var(--main-color-blue);
                    border-radius: 2px;
                    margin-right: 10px;
                }
            }
        }

        .receiver-info-content {
            .receiver-info-item {
                &:not(:last-child) {
                    margin-bottom: 4px;
                }

                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                color: var(--text-color1);
                display: flex;
                align-items: flex-start;

                .item-label {
                    margin-right: 6px;
                }
            }
        }
    }

    .books-info {
        padding: 13px 16px 0;
        background: #FFFFFF;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;
        overflow: hidden;

        .books-info-title {
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .title-text {
                font-weight: bold;
                font-size: var(--main-font-size2);
                line-height: var(--main-line-height2);
                display: flex;
                align-items: center;

                &::before {
                    content: '';
                    width: 4px;
                    height: 16px;
                    background: var(--main-color-blue);
                    border-radius: 2px;
                    margin-right: 10px;
                }
            }

            .right-text {
                margin-left: auto;
                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                color: var(--text-color2);
            }
        }

        :deep(.book-card .book-title) {
            max-width: calc(100vw - 32px * 2 - 30px - var(--book-cover-container-width1) - 16px);
        }
    }

    .order-info {
        padding: 13px 16px;
        background: #FFFFFF;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;

        .order-info-title {
            margin-bottom: 12px;

            .title-text {
                font-weight: bold;
                font-size: var(--main-font-size2);
                line-height: var(--main-line-height2);
                display: flex;
                align-items: center;

                &::before {
                    content: '';
                    width: 4px;
                    height: 16px;
                    background: var(--main-color-blue);
                    border-radius: 2px;
                    margin-right: 10px;
                }
            }
        }

        .order-info-content {
            .order-info-item {
                &:not(:last-child) {
                    margin-bottom: 4px;
                }

                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                color: var(--text-color1);
                display: flex;
                align-items: flex-start;

                .item-label {
                    margin-right: 6px;
                }
            }


        }

    }

    .pending-action {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;

        .button {
            padding: 8px 22px;
            border-radius: 18px;
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;

            &.cancel-order {
                background: #fff;
                border: 1px solid var(--stroke-color1);
                color: var(--text-color1);
                margin-right: 16px;
            }

            &.pay-now {
                background: var(--main-color-blue);
                color: #FFFFFF;
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

    .payment-box {
        padding: 20px;
    }

    .payment-title {
        font-size: var(--font-size16);
        line-height: var(--line-height24);
        color: #000;
        font-weight: bold;
        margin-bottom: 16px;
        text-align: center;
    }

    .payment-options {

        .option {
            padding: 16px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            border: 1px solid var(--stroke-color1);
            font-size: var(--font-size14);
            line-height: var(--line-height20);

            &:not(:last-child) {
                margin-bottom: 16px;
            }

            .icon {
                width: 32px;
                height: 32px;
                margin-right: 16px;
            }

            span {
                color: var(--text-color4);
            }
        }
    }
}
</style>