<script setup>
import { ref } from 'vue';
import BookLocationList from '@/pages/bookdetail/BookLocationList.vue';
import SvgIcon from '@/components/SvgIcon.vue';

const dropboxShow = ref(true);
const toggleDropbox = () => {
    dropboxShow.value = !dropboxShow.value;
}

</script>

<template>
    <div class="lib-dropbox">
        <div class="dropbox-header" @click="toggleDropbox">
            <div class="dropbox-header-text">衢州市图书馆（4）</div>
            <template v-if="dropboxShow">
                <SvgIcon name="dropbox-down" class="dropbox-icon" />
            </template>
            <template v-if="!dropboxShow">
                <SvgIcon name="dropbox-up" class="dropbox-icon" />
            </template>
        </div>
        <div class="dropbox-content" v-show="dropboxShow">
            <BookLocationList />
            <BookLocationList />
        </div>
    </div>
</template>

<style scoped lang="scss">
.lib-dropbox {
    &:not(:first-child) {
        margin-top: 16px;
    }

    .dropbox-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--background-color1);
        padding: 8px 12px;
        border-radius: 6px;

        .dropbox-header-text {
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            font-weight: 500;
            color: var(--text-color4);

        }

        .dropbox-icon {
            width: 24px;
            height: 24px;
            color: rgba(54, 108, 189, 0.5);
            ;
        }
    }

}
</style>