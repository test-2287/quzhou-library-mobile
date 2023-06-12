<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <div class="notice-detail-page">
        <div class="page-content">
            <div class="title">图书馆一键借阅正式上线啦！</div>
            <div class="date">2023年2月10日</div>
            <div class="content">
                为提升文化志愿服务影响力，发挥先进典型对弘扬文化志愿服务精神的示范引领作用，根据《浙江图书馆文化志愿服务管理规范》，组织开展2022年度优秀文化志愿者团队和优秀文化志愿者的评选工作。经团队提名推荐、综合评价等程序，现对蚂蚁&浙图公益志愿团等3家文化志愿团体和叶昌炜等23名文化志愿者给予表彰。
                <br>
                希望受表彰的团体和个人不忘初心,牢记使命，再接再厉，为加快建设文化高质量发展做出新的更大贡献。
                <br>
                <b>一、优秀文化志愿者团队(3个)</b>
                1. 蚂蚁&浙图公益志愿团
                2. 道富信息科技(浙江)有限公司
                3. 浙江工业大学青年志愿者协会
                <br>
                <b>二、优秀文化志愿者(23个)</b>
                1. 蚂蚁&浙图公益志愿团团长 叶昌炜
                2. 蚂蚁&浙图公益志愿团读者服务小队长 陈青娜
                3. 蚂蚁&浙图公益志愿团有声读物录制小队长 金 玲
            </div>
            <div class="button back" @click="router.go(-1)">返回列表</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.notice-detail-page {
    height: 100vh;
    padding: 16px;


    .page-content {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        position: relative;
        height: calc(100vh - 32px);

        .title {
            font-weight: 700;
            font-size: var(--main-font-size5);
            line-height: 29px;
            color: var(--text-color4);
            margin-bottom: 6px;
        }

        .date {
            font-size: var(--main-font-size1);
            line-height: 24px;
            color: var(--text-color1);
            margin-bottom: 12px;
        }

        .content {
            font-size: var(--main-font-size2);
            line-height: 24px;
            color: var(--text-color3);
            height: calc(100vh - 32px * 2 - 64px - 36px - 58px - 10px);
            overflow: scroll;
        }

        .button {
            position: absolute;
            left: 50%;
            bottom: 20px;
            transform: translateX(-50%);
            border: 1px solid var(--stroke-color1);
            border-radius: 18px;
            padding: 8px 22px;
            font-size: var(--main-font-size2);
            line-height: 20px;
            color: var(--text-color1);
        }
    }
}
</style>