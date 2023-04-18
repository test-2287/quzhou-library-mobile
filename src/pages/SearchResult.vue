<script setup>
import SearchBox from '@/components/SearchBox.vue'
import TagButton from '@/components/TagButton.vue';
import BookCard from '@/components/BookCard.vue';
import EmptyImage from '@/assets/search-empty.svg';
import { ref, reactive } from 'vue'

const searchText = ref('')

const dropdownItem = ref(null)
const filterOnConfirm = () => {
    dropdownItem.value.toggle();
};

const filterValue = ref(0)
const filterOptions = [
    { text: '从低到高', value: 0 },
    { text: '从高到低', value: 1 }
]

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

const bookProps = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著',
    publisher: '北京联合出版公司',
    isbn: '239-284-940-213',
    showLocation: true,
    inlib: true
}
const bookProps2 = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著',
    publisher: '北京联合出版公司',
    isbn: '239-284-940-213',
    showLocation: true,
    inStore: true
}

</script>

<template>
    <div class="search-result-page">
        <div class="search-bar">
            <SearchBox v-model="searchText" />
        </div>
        <van-config-provider :theme-vars="{
            dropdownMenuHeight: '44px',
            dropdownMenuTitleFontSize: '14px',
            dropdownMenuTitleTextColor: 'var(--text-color1)',
            dropdownMenuTitleActiveTextColor: 'var(--main-color-blue)',
            dropdownMenuOptionActiveColor: 'var(--main-color-blue)',
            dropdownMenuContentMaxHeight: '474px'

        }">
            <van-dropdown-menu>
                <van-dropdown-item title="筛选" ref="dropdownItem">
                    <div class="dropdown-wrapper">
                        <div class="dropdown-main">
                            <div class="filter-cate">
                                <div class="title">出版社</div>
                                <div class="tag-box">
                                    <TagButton v-for="item in popularList" :key="item.text" :text="item.text"
                                        :select="item.select" />
                                </div>
                            </div>
                            <div class="filter-cate">
                                <div class="title">出版日期</div>
                                <div class="tag-box">
                                    <TagButton v-for="item in historyList" :key="item.text" :text="item.text"
                                        :select="item.select" />
                                </div>
                            </div>
                            <div class="filter-cate">
                                <div class="title">作者</div>
                                <div class="tag-box">
                                    <TagButton v-for="item in historyList" :key="item.text" :text="item.text"
                                        :select="item.select" />
                                </div>
                            </div>
                            <div class="filter-cate">
                                <div class="title">来源</div>
                                <div class="tag-box">
                                    <TagButton v-for="item in historyList" :key="item.text" :text="item.text"
                                        :select="item.select" />
                                </div>
                            </div>
                        </div>
                        <div class="dropdown-bottom">
                            <div class="button line">重置</div>
                            <div class="button main" @click="filterOnConfirm">确定</div>
                        </div>
                    </div>
                </van-dropdown-item>
                <van-dropdown-item title="综合排序" :options="filterOptions" v-model="filterValue"></van-dropdown-item>
            </van-dropdown-menu>
        </van-config-provider>
        <div class="search-result">
            <div class="result-text">搜索到相关书籍 29834 本</div>
            <div class="book-list">
                <BookCard v-bind="bookProps" />
                <BookCard v-bind="bookProps2" />
            </div>
        </div>
        <div class="empty">
            <img :src="EmptyImage" alt="">
            <div class="text">暂无相关书籍</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search-result-page {

    .search-bar {
        padding: 7px 16px;
        background-color: #fff;
        position: relative;
        z-index: 1;

        ::v-deep {
            .search-box {
                background-color: var(--background-color2);
            }

            .icon {
                color: rgba(54, 108, 189, 0.5);
            }
        }

    }

    .dropdown-wrapper {
        position: relative;
        max-height: 474px;
        padding-bottom: 70px;
    }

    .dropdown-main {
        padding: 20px;
        max-height: 404px;
        overflow: scroll;
    }

    .filter-cate {
        margin-bottom: 37px;

        .title {
            font-size: 14px;
            color: var(--text-color4);
            margin-bottom: 8px;
            font-weight: 500;
        }

        .tag-box {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
    }

    .dropdown-bottom {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        padding: 17px 20px;
        background-color: #fff;
        border-top: 1px solid var(--divider-color);
        display: flex;
        justify-content: space-between;

        .button {
            width: calc((100vw - 40px - 15px) / 2);
            height: 36px;
            border-radius: 18px;
            font-size: 14px;
            line-height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;

            &.main {
                background-color: var(--main-color-blue);
                color: #fff;
            }

            &.line {
                background-color: #fff;
                border: 1px solid var(--stroke-color1);
                color: var(--text-color1);
            }
        }
    }

    .search-result {
        padding: 12px 16px;

        .result-text {
            font-size: 12px;
            line-height: 18px;
            color: var(--text-color2);
            margin-bottom: 12px;
        }

        .book-card:not(:last-child) {
            border-bottom: 1px solid var(--divider-color);
        }

    }

    .empty {
        height: 100vh;
        padding-top: 188px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;

        img {
            width: 160px;
            height: 160px;
            margin-bottom: 20px;
        }

        .text {
            font-size: 14px;
            line-height: 20px;
            color: var(--text-color2);
        }
    }
}
</style>