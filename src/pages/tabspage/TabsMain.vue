<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const active = ref(0);

const onTabChange = (index) => {

    active.value = index;

    switch(index) {
        case 0:
            router.push('/highlights/popular');
            break;
        case 1:
            router.push('/highlights/rank');
            break;
    }
}

</script>

<template>
    <van-config-provider :theme-vars="{
        tabFontSize: 'var(--main-font-size2)',
        tabLineHeight: 'var(--main-line-height2)'
    }">
        <van-tabs v-model:active="active" @change="onTabChange">
            <van-tab title="热门图书" />
            <van-tab title="借阅排行榜" />
            <van-tab title="新书上架" />
            <van-tab title="读者推荐" />
        </van-tabs>
        <router-view />
    </van-config-provider>
</template>