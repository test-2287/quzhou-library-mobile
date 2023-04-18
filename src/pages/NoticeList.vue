<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

</script>

<template>
    <div class="notice-list-page">
        <div class="page-title">通知公告</div>
        <div class="page-content">
            <div class="notice-item" v-for="index in 4"  @click="router.push('/notice-detail')">
                <div class="notice-title">图书馆一键借阅正式上线啦！</div>
                <div class="notice-date">2023年2月10日</div>
                <div class="notice-summary">为提升文化志愿服务影响力，发挥先进典型对弘扬文化志愿服务精神的示范引领作用</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.notice-list-page {
    padding: 16px;

    .page-title {
        font-size: 18px;
        line-height: 26px;
        font-weight: bold;
        color: var(--text-color4);
        margin-bottom: 16px;
    }

    .notice-item {
        background: #fff;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .notice-title {
            font-size: 14px;
            line-height: 20px;
            color: var(--text-color4);
            margin-bottom: 4px;
        }

        .notice-date {
            font-size: 12px;
            line-height: 24px;
            color: var(--text-color1);
            margin-bottom: 12px;
        }

        .notice-summary {
            font-size: 12px;
            line-height: 20px;
            color: var(--text-color1);
        }
    }
}
</style>