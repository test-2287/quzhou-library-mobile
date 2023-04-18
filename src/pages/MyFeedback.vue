<script setup>
import { reactive, ref, toRaw } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';

const dialogShow = ref(false)

</script>

<template>
    <div class="my-feedback-page">
        <div class="page-title">我的反馈</div>
        <div class="page-content">
            <div class="feedback-item">
                <div class="top">
                    <div class="title">关于图书馆续借的问题</div>
                    <div class="date">2023年2月10日 12:20:39</div>
                </div>
                <div class="content">
                    在续借图书的时候，如有在物流的过程中有损坏是需要怎样处理？
                </div>
                <div class="bottom">
                    <div class="status">待处理</div>
                    <div class="button check-reply" @click="dialogShow = true">查看回复</div>
                </div>

            </div>
        </div>
    </div>
    <van-overlay :show="dialogShow" @click="dialogShow = false">
        <div class="reply-wrapper" @click.stop>
            <div class="title">回复内容</div>
            <SvgIcon name="icon-close" class="icon" @click="dialogShow = false" />
            <div class="content">
                尊敬的客户，感谢您的反馈。回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容
            </div>
        </div>
    </van-overlay>
</template>

<style lang="scss" scoped>
.my-feedback-page {
    padding: 16px;

    .page-title {
        font-size: 18px;
        line-height: 26px;
        font-weight: bold;
        color: var(--text-color4);
        margin-bottom: 16px;
    }

    .feedback-item {
        background: #fff;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;

        .top {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;

            .title {
                font-size: 14px;
                line-height: 20px;
                color: var(--text-color4);
                margin-bottom: 6px;
            }

            .date {
                font-size: 12px;
                line-height: 18px;
                color: var(--text-color2);
            }
        }

        .content {
            padding-top: 10px;
            padding-bottom: 19px;
            font-size: 14px;
            line-height: 20px;
            color: var(--text-color4);
            border-top: 1px solid var(--divider-color);
        }

        .bottom {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            line-height: 20px;
            color: var(--text-color1);

            .status {}

            .button {
                padding: 8px 22px;
                border: 1px solid var(--stroke-color1);
                border-radius: 18px;
            }
        }
    }


}

.reply-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 8px;
    width: calc(100vw - 57px * 2);
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .title {
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
        color: var(--text-color3);
        margin-bottom: 16px;
    }

    .content {
        max-height: 221px;
        overflow: scroll;
        background: #fff;
        border-radius: 8px;
        font-size: 12px;
        line-height: 18px;
        color: var(--text-color4);
        width: 212px;
        max-height: 400px;
        overflow: auto;
    }

    .icon {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 24px;
        height: 24px;
    }
}
</style>