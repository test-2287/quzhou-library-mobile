<script setup>
import TagButton from '@/components/TagButton.vue';
import SearchBox from '@/components/SearchBox.vue';
import { ref, reactive } from 'vue';

const searchText = ref('')

const historyList = reactive([
    {
        text: '哲学',
        select: true
    },
    {
        text: '北京',
        select: false
    },
    {
        text: '鲁迅',
        select: false
    },
    {
        text: '莫言',
        select: false
    },
    {
        text: '文学',
        select: false
    }
])

const popularList = reactive([
    {
        text: '哲学',
        select: true
    },
    {
        text: '北京',
        select: false
    },
    {
        text: '鲁迅',
        select: false
    },
    {
        text: '莫言',
        select: false
    },
    {
        text: '文学',
        select: false
    }
])

</script>

<template>
    <div class="search-page">
        <div class="search-bar">
            <SearchBox v-model="searchText" />
        </div>
        <div class="history-box">
            <div class="title">历史记录
                <span class="clear">清除</span>
            </div>
            <div class="tag-box">
                <TagButton :text="text" :select="select" v-for="{text, select} in historyList" />
            </div>
        </div>
        <div class="popular-box">
            <div class="title">热门检索</div>
            <div class="tag-box">
                <TagButton :text="text" :select="select" v-for="{text, select} in popularList" />
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.search-page {
    height: 100vh;
    background-color: #fff;

    .search-bar {
        padding: 7px 16px;

        ::v-deep {
            .search-box {
                background-color: var(--background-color2);
            }

            .icon {
                color: rgba(54, 108, 189, 0.5);
            }
        }
    }

    .tag-button {
        margin-right: 12px;
        margin-bottom: 16px;
    }

    .history-box,
    .popular-box {
        margin-top: 30px;
        padding-left: 20px;
        padding-right: 16px;

        .tag-box {
            display: flex;
            flex-wrap: wrap;
        }

        .title {
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            color: var(--text-color4);
            margin-bottom: 16px;
            position: relative;

            .clear {
                position: absolute;
                right: 0;
                top: 0;
                font-size: 14px;
                line-height: 20px;
                color: var(--main-color-blue);
            }
        }
    }
}
</style>