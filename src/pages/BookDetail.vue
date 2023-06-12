<script setup>
import LibraryCollection from '@/pages/bookdetail/LibraryCollection.vue';
import BookDetailCard from '@/pages/bookdetail/BookDetailCard.vue';
import TabEmptyImg from '@/assets/dropbox-empty.svg';
import SvgIcon from '@/components/SvgIcon.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'


const columns = [
    { text: '图书馆1', value: 'Hangzhou' },
    { text: '图书馆2', value: 'Ningbo' },
    { text: '图书馆3', value: 'Wenzhou' },
    { text: '图书馆4', value: 'Shaoxing' }
]

const router = useRouter()
const showPicker = ref(false);
const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false;
    router.push('/order')
};
const star = ref(false);
const toggleStar = () => {
    star.value = !star.value;
};

</script>

<template>
    <div class="book_detail-page">
        <div class="book_detail-content">

            <BookDetailCard />

            <div class="book_detail-tabs_info">
                <van-config-provider :theme-vars="{
                    tabFontSize: 'var(--main-font-size2)'
                }">
                <van-tabs>
                    <van-tab title="馆藏信息">
                        <LibraryCollection />
                    </van-tab>
                    <van-tab title="内容简介">
                        <div class="tab-content">
                            作者对殖民主义欧洲中心的否定，和对后殖民批评范式局限的批评，这一共存的双重叙述，使得这部十余年前出版的专著，至今仍具有其重要性，或者说比以往任何时刻都显得更为重要。
                            ——马丁·普赫纳（Martin Puchner）
                            17世纪至18世纪，中国、日本和香料群岛等远东异域令英国人一度目眩神迷。当时的远东供应着欧洲渴求的香料和奢侈品，也是欧洲幻想中潜力无限的商品外销市场。作者罗伯特·马克利重新思考了彼时英国文学对国族和个体身份的想象，由此考察富强的远东如何唤起英国的追慕与忧惧。
                            本书是英语世界中国形象研究的“转向”之作，也是一部“亚洲主导秩序下的英国文学史”。继萨义德《东方学》及后殖民研究之后，马克利进一步...
                            <div class="empty">
                                <img :src="TabEmptyImg" alt="">
                                <span>抱歉暂时没有内容</span>
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="作者简介">
                        <div class="tab-content">罗伯特·马克利（Robert Markley），美国伊利诺伊大学香槟分校英文系讲席教授。美国权威学术期刊The Eighteenth
                            Century: Theory and Interpretation主编，曾出版学术专著多部，包括Fallen Languages: Crises of Representation in
                            Newtonian England（Cornell UP，1993）、Dying Planet: Mars in Science and the Imagination（Duke
                            UP，2005）和The Far East and the English Imagination, 1600-1730（Cambridge
                            UP，2006）。马克利在18世纪研究、科学文化史研究和数字媒体研究等领域发表学术论文近百篇，主编学术文集多部，并担任知名期刊的特刊客座编辑。</div>
                    </van-tab>
                </van-tabs>
                </van-config-provider>
            </div>

        </div>

        <div class="bottom-bar">
            <div class="star-box" @click="toggleStar">
                <SvgIcon name="star-line" class="icon-star line" v-if="!star"/>
                <SvgIcon name="star-fill" class="icon-star fill" v-if="star"/>
            </div>
            <div class="button add-booklist">加入书单</div>
            <div class="button book-now" @click="showPicker = true">立即下单</div>
        </div>

        <van-popup round position="bottom" v-model:show="showPicker">
            <van-picker title="选择配送馆" :columns="columns" @cancel="showPicker = false" @confirm="onConfirm"></van-picker>
        </van-popup>

    </div>
</template>

<style scoped lang="scss">
.book_detail-page {
    padding: 24px 16px;
    position: relative;
    padding-bottom: 90px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        background: linear-gradient(94.92deg, rgba(90, 178, 255, 0) 16.04%, #5AB2FF 81.13%), #1264E0;
        z-index: 0;
    }

    .book_detail-content {
        position: relative;
        z-index: 1;

        .book_detail-tabs_info {
            overflow: hidden;
            border-radius: 8px;
            margin-top: 20px;
            background-color: #fff;
        }

        .tab-content {
            min-height: 460px;
            padding: 16px 20px;
            color: var(--text-color3);
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
        }

        .empty {
            margin: 106px auto;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 160px;
                height: 160px;
            }

            span {
                margin-top: 20px;
                color: var(--text-color2);
            }
        }

    }

    .bottom-bar {
        padding: 8px 16px;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100vw;
        background-color: #fff;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .star-box {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 43px;
            height: 44px;
            border-radius: 8px;
            border: 1px solid var(--stroke-color1);

            .icon-star {
                width: 22px;
                height: 22px;

                &.line {
                    color: var(--stroke-color1);
                }
            }
        }

        .button {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            font-weight: bold;
        }

        .add-booklist {
            width: 100px;
            height: 42px;
            color: var(--text-color6);
            border: 1px solid var(--stroke-color1);
        }

        .book-now {
            width: 180px;
            height: 44px;
            color: #fff;
            background-color: var(--main-color-blue);
        }
    }
}
</style>