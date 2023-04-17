<script setup>
import SvgIcon from '@/components/SvgIcon.vue'

</script>

<template>
    <div class="delivery-info-page">
        <div class="page-header">物流信息</div>
        <div class="delivery-detail">
            <div class="delivery-status">
                <SvgIcon  name="green-tick" class="icon"/>
                <span>已签收</span>
            </div>
            <div class="numbers">
                <div class="delivery-number">物流编号：15926542567</div>
                <div class="order-number">订单编号： 230943847375746545497</div>
            </div>
        </div>
        <div class="tracking-progress">
            <div class="tracking-step">
                <span class="info-text">收货地址：湖南省张家界市慈利县杨柳铺乡 8 单元 248 室</span>
            </div>
            <div class="tracking-step">
                <span class="info-text">【合肥市】安排投递员王某上门配送，电话：<a>12384752731</a> 服务电话：<a>0755-21228495</a></span>
                <span class="info-time">2023-1-10 13:29:49</span>
            </div>
            <div class="tracking-step">
                <span class="info-text">【合肥市】离开巢湖营业部，下一站合肥市营业部</span>
                <span class="info-time">2023-1-10 13:29:49</span>
            </div>
            <div class="tracking-step">
                <span class="info-text">【合肥市】已收寄，揽投员：韩仁林，已离开巢湖营业部。</span>
                <span class="info-time">2023-1-10 13:29:49</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.delivery-info-page {
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
    border-radius: 8px;

    .page-header {
        font-size: var(--main-font-size4);
        line-height: var(--main-line-height4);
        font-weight: bold;
        margin-bottom: 16px;
    }

    .delivery-detail {
        padding: 20px;
        padding-bottom: 14px;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;
        background-color: #FFFFFF;
        margin-bottom: 16px;
        
        .delivery-status {
            display: flex;
            align-items: center;
            margin-bottom: 14px;
            .icon {
                width: 24px;
                height: 24px;
                margin-right: 12px;
                color: #fff;
            }
            span {
                font-size: var(--main-font-size2);
                line-height: var(--main-line-height2);
                font-weight: bold;
            }
        }

        .numbers {
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);
            color: var(--text-color1);
            > div:not(:last-child) {
                margin-bottom: 4px;
            }
        }
    }
    
    .tracking-progress {
        padding: 20px;
        background: #FFFFFF;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;
    }

    .tracking-step {
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        padding-bottom: 16px;
        
        > div:not(:last-child) {
            margin-bottom: 8px;
        }
        .info-text {
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            color: var(--text-color1);
            a {
                color: var(--main-color-blue);
            }
        }
        .info-time {
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);
            color: var(--text-color2);
        }

        position: relative;
        &::before, &::after {
            content: '';
            display: block;
            position: absolute;
            background-color: var(--text-color1);
        }
        &::before {
            left: 0;
            top: calc((var(--main-line-height2) / 2) - 4px);
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }
        &::after {
            left: 4px;
            top: calc((var(--main-line-height2) / 2) - 4px);
            width: 1px;
            height: 100%;
        }
        &:last-child {
            &::after {
                display: none;
            }
        }
    }
}
</style>