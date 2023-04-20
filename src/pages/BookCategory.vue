<script setup>
import { reactive, ref } from 'vue'
import BookCard from '@/components/BookCard.vue';
import BottomNavigate from '@/components/BottomNavigate.vue';
import { useRoute } from 'vue-router';

const category = reactive([
    {
        name: '马克思主义、列宁主义、毛泽东思想、邓小平理论'
    },
    {
        name: '哲学、宗教'
    },
    {
        name: '社会科学总论'
    },
    {
        name: '政治、法律'
    },
    {
        name: '军事'
    },
    {
        name: '经济'
    },
    {
        name: '文化、科学、教育、体育'
    },
    {
        name: '语言、文字'
    },
    {
        name: '文学'
    },
    {
        name: '艺术'
    },
    {
        name: '历史、地理'
    },
    {
        name: '自然科学总论'
    },
    {
        name: '数理科学和化学'
    },
    {
        name: '天文学、地球科学'
    },
    {
        name: '生物科学'
    },
    {
        name: '医药、卫生'
    },
    {
        name: '农业科学'
    },
    {
        name: '工业技术'
    },
    {
        name: '交通运输'
    },
    {
        name: '航空、航天'
    },
    {
        name: '环境科学、安全科学'
    },
    {
        name: '综合性图书'
    }
])

const route = useRoute()
const cateId = route.query.cateid

const cateCantainer = ref(null)
const activeInex = cateId ? ref(cateId) : ref(0)
const onSidebarChange = (index) => {
    activeInex.value = index
    cateCantainer.value.scrollTop = 0
}

const bookProps = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著',
    publisher: '北京联合出版公司',
    isbn: '239-284-940-213',
}

</script>

<template>
    <van-config-provider :theme-vars="{
        sidebarWidth: `100px`,
        sidebarFontSize: `var(--main-font-size2)`,
        sidebarLineHeight: `var(--main-line-height2)`,
        sidebarTextColor: `var(--text-color1)`,
        sidebarActiveTextColor: `var(--text-color4)`,
        sidebarBackground: `var(--background-color1)`,
        sidebarPadding: `12px 6px 12px 12px`,
        sidebarSelectedBorderWidth: `3px`,
        sidebarSelectedBorderHeight: `18px`,
    }">
        <div class="book_category-page">
            <div class="sidebar-container">
                <van-sidebar @change="onSidebarChange" v-model="activeInex">
                    <van-sidebar-item v-for="item in category" :key="item.name" :title="item.name"></van-sidebar-item>
                </van-sidebar>
            </div>

            <div class="category-container" ref="cateCantainer">
                <template v-for="(item, index) in category" :key="`content-${item.name}`">
                    <div class="category-content" v-show="index == activeInex">
                        {{ item.name }}
                        <BookCard v-for="i in 10" v-bind="bookProps"/>
                    </div>
                </template>
            </div>

        </div>
        <BottomNavigate />
    </van-config-provider>
</template>

<style scoped lang="scss">
.book_category-page {
    display: flex;
    background-color: #fff;
    padding-bottom: 60px;

    .sidebar-container,
    .category-container {
        height: 100vh;
        max-height: 100vh;
        overflow: scroll;
    }

    .sidebar-container {
        width: 100px;
        padding: 16px 0;
        background-color: var(--background-color1);

        :deep(.van-sidebar-item .van-sidebar-item__text) {
            white-space: nowrap;
            width: calc(100px - 18px);
            overflow: hidden;
            text-overflow: ellipsis;
        }

    }

    .category-container {
        flex: 1;
    }
}
</style>