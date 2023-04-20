<script setup>
import LibCollectDropbox from '@/pages/bookdetail/LibCollectDropbox.vue';
import { ref } from 'vue';

const inLibCheck = ref(false)

</script>

<template>
    <div class="library-collect">

        <div class="collect-header">
            <div class="section-title">馆藏图书列表</div>
            <div class="filter">
                <van-checkbox shape="square" v-model="inLibCheck"/>
                <span>只显示在馆</span>
            </div>
        </div>

        <div class="collect-content">
            <LibCollectDropbox />
            <LibCollectDropbox />
        </div>

    </div>
</template>

<style scoped lang="scss">
.library-collect {
    padding: 18px 16px;
    min-height: 460px;

    .collect-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        .section-title {
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            font-weight: bold;
            color: var(--text-color4);
        }

        .filter {
            display: flex;
            align-items: center;
            color: var(--text-color1);
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);
            > span {
                margin-left: 8px;
            }
        }
    }

}
</style>