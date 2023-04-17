<script setup>
import BookCard from '@/components/BookCard.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { ref } from 'vue'

const bookProps = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著',
    publisher: '北京联合出版公司'
}

const collapse = ref(true);
const toggleCollapse = () => {
    collapse.value = !collapse.value;
}
</script>

<template>
    <div class="order-page">
        <div class="receiver-section">
            <div class="add-receiver">
                <SvgIcon name="order-add-receiver" class="icon" />
                添加新地址
            </div>
            <div class="receiver-info">
                <div class="space-between-box receiver-info-title">
                    <span class="title-text">收件人信息</span>
                    <router-link to="/receiver-manage"><span class="manage">地址管理</span></router-link>
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
        </div>

        <div class="books-info">
            <div class="books-info-title">
                <span class="title-text">图书信息</span>
                <span class="right-text">共1件</span>
            </div>
            <div class="books-info-content" :class="collapse ? 'collapse' : ''">
                <BookCard v-bind="bookProps" />
                <BookCard v-bind="bookProps" />
                <BookCard v-bind="bookProps" />


                <div class="toggle-box" @click="toggleCollapse">
                    <div class="expand" v-if="collapse">
                        <span>展开查看所有图书</span>
                        <SvgIcon name="dropbox-down" class="icon" />
                    </div>
                    <div class="collapse" v-if="!collapse">
                        <span>收起</span>
                        <SvgIcon name="dropbox-up" class="icon" />
                    </div>
                </div>

            </div>
        </div>

        <div class="package-delivery">
            <div class="space-between-box package-box">
                <div class="label">包裹</div>
                <div class="desc">预计1个包裹</div>
            </div>
            <div class="space-between-box delivery-box">
                <div class="label">配送方式</div>
                <div class="desc">
                    <div class="desc-item">快递运输</div>
                    <div class="desc-item">工作日送货</div>
                    <div class="desc-item">17:00下单，预计4月6日前可送达</div>
                </div>
            </div>
        </div>

        <div class="space-between-box delivery-fee-box">
            <div class="label">邮费</div>
            <div class="desc">免邮费/12元</div>
        </div>

        <div class="payment-method">
            <div class="space-between-box payment-option wechat">
                <div class="box-left">
                    <SvgIcon name="order-wechatpay" class="icon" />
                    <span>微信支付</span>
                </div>
                <div class="box-right">
                    <van-checkbox />
                </div>
            </div>
            <div class="space-between-box payment-option alipay">
                <div class="box-left">
                    <SvgIcon name="order-alipay" class="icon" />
                    <span>支付宝支付</span>
                </div>
                <div class="box-right">
                    <van-checkbox></van-checkbox>
                </div>
            </div>
        </div>

        <div class="bottom-bar space-between-box">
            <div class="price-box">
                <div class="label">免邮费</div>
                <div class="label">需支付</div>
                <div class="desc">12元</div>
            </div>
            <div class="submit-btn disabled">提交订单</div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.space-between-box {
    display: flex;
    justify-content: space-between;
}

.order-page {
    padding: 16px;
    padding-bottom: 90px;

    >div:not(.bottom-bar) {
        margin-bottom: 16px;
    }

    .receiver-section {

        .add-receiver {
            height: 80px;
            background-color: #fff;
            box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
            border-radius: 8px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            color: var(--text-color1);

            .icon {
                width: 24px;
                height: 24px;
                margin-right: 8px;
                color: var(--main-color-blue);
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

                .manage {
                    font-size: var(--main-font-size1);
                    line-height: var(--main-line-height1);
                    color: var(--main-color-blue);
                    align-self: center;
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

        .books-info-content {
            padding-bottom: 20px;
            position: relative;

            &.collapse {
                max-height: 270px;
                overflow: hidden;
            }

            .toggle-box {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 12px;
                display: flex;
                align-items: center;

                >div {
                    display: flex;
                    align-items: center;
                }

                span {
                    font-size: var(--main-font-size1);
                    line-height: var(--main-line-height1);
                    color: var(--text-color-link);
                }

                .icon {
                    width: 24px;
                    height: 24px;
                    margin-left: 3px;
                    color: var(--text-color2);
                }
            }

        }

    }

    .package-delivery {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        padding: 0 16px;

        >div {
            padding: 16px 0;

            &:not(:last-child) {
                border-bottom: 1px solid var(--divider-color);
            }
        }

        .label {
            font-weight: bold;
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
        }

        .desc {
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);
            color: var(--text-color1);
        }

        .desc-item {
            text-align: right;

            &:not(:last-child) {
                margin-bottom: 4px;
            }
        }

    }

    .delivery-fee-box {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        padding: 16px;

        .label {
            font-weight: bold;
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
        }

        .desc {
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            color: var(--main-color-orange);
            font-weight: bold;
        }
    }

    .payment-method {
        padding: 0 16px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        align-items: center;

        >div {
            padding: 16px 0;

            &:not(:last-child) {
                border-bottom: 1px solid var(--divider-color);
            }
        }

        .box-left {
            display: flex;
            align-items: center;

            .icon {
                width: 32px;
                height: 32px;
                margin-right: 16px;
            }

            span {
                font-size: var(--main-font-size2);
                line-height: var(--main-line-height2);
                font-weight: 500;
            }
        }
    }

    .bottom-bar {
        position: fixed;
        z-index: 10;
        bottom: 0;
        left: 0;
        width: 100vw;
        padding: 12px 16px;
        background-color: #fff;
        align-items: center;

        .price-box {
            display: flex;
            flex-direction: column;
            align-items: center;

            .label {
                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                color: var(--text-color1);
            }

            .desc {
                font-size: var(--main-font-size3);
                line-height: var(--main-line-height3);
                color: var(--main-color-orange);
                font-weight: bold;
            }
        }

        .submit-btn {
            width: 160px;
            height: 36px;
            border-radius: 18px;
            background-color: var(--main-color-blue);
            color: #fff;
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;

            &.disabled {
                background-color: #D6D9DD;
            }
        }
    }
}</style>