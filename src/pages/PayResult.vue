
<script setup>
import SvgIcon from '@/components/SvgIcon.vue'

</script>

<template>
    <div class="pay-result-page">
        <div class="page-content result-box">
            <SvgIcon class="icon" name="renew-success" />
            <span class="result-title">您的订单已经提交成功！</span>
            <span class="result-subtitle">我们将尽快安排配送图书</span>
            <div class="desc">
                <div class="item space-between-box">
                    <span>订单编号</span>
                    <span>687498943121</span>
                </div>
                <div class="item space-between-box">
                    <span>订单时间</span>
                    <span>2023年2月10日 12:39:10</span>
                </div>
            </div>
            <div class="button-box">
                <div class="button backhome">返回首页</div>
                <div class="button main">查看订单</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.pay-result-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--main-color-blue);

    .result-box {
        padding: 20px;
        padding-top: 30px;
        background-color: #fff;
        border-radius: 8px;
        width: 319px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
            width: 50px;
            height: 50px;
            margin-bottom: 16px;
            color: var(--main-color-green);
        }

        .result-title {
            font-size: 20px;
            line-height: 28px;
            font-weight: bold;
            color: #000;
            margin-bottom: 8px;
        }

        .result-subtitle {
            font-size: 14px;
            line-height: 20px;
            color: var(--text-color2);
            margin-bottom: 20px;
        }

        .desc {
            border: 1px solid var(--stroke-color1);
            padding: 16px;
            padding-top: 20px;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: var(--text-color1);
            border-radius: 8px;
            margin-bottom: 20px;

            .item:not(:last-child) {
                margin-bottom: 16px;
            }
        }

        .button-box {
            display: flex;
            justify-content: center;
            align-items: center;

            .button {
                width: 100px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                border-radius: 18px;

                &.backhome {
                    background-color: #fff;
                    color: var(--text-color1);    
                    border: 1px solid var(--stroke-color1);
                    margin-right: 24px;
                }
                &.main {
                    background-color: var(--main-color-blue);
                    color: #fff;
                }
            }
        }
    }
}
</style>