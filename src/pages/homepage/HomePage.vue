<script setup>
// import EcardSvgIcon from './assets/homepage-nav-ecard.svg'

import SvgIcon from '@/components/SvgIcon.vue';
import BookCard from '@/components/BookCard.vue';
import BottomNavigate from '@/components/BottomNavigate.vue';

import BookCoverDefault from '@/assets/book-cover-default.svg';
import ThemeItemBg from '@/assets/lib-recommend-detail-bg.svg';

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';



const bookProps = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著',
    publisher: '北京联合出版公司',
    time: '2022年出版'
}

const bookProps2 = {
    title: '哲学，为人生烦恼找答案',
    author: '[美] 菲利普·朱迪狄欧 著'
}

</script>

<template>
    <div class="homepage">


        <div class="background-container">
            <i class="background-img"></i>
        </div>

        <div class="homepage-container">
            <div class="homepage-header">
                <div class="homepage-banner">

                    <div class="banner-text">
                        <div class="banner-title">欢迎您来到</div>
                        <div class="banner-title">衢州市图书馆</div>
                        <div class="banner-subtitle">阅读是一种感悟人生的艺术</div>
                    </div>
                </div>

                <div class="homepage-search">
                    <SvgIcon name="magnifier" class="icon icon-magnifier" />
                    <input type="text" placeholder="搜索关键词/书名/作者">
                    <SvgIcon name="scan" class="icon icon-scan" />
                </div>
            </div>

            <div class="homepage-navigation">
                <router-link to="/highlights/popular">
                    <SvgIcon name="homepage-nav-popular" class="icon" />
                </router-link>
                <router-link to="/highlights/rank">
                    <SvgIcon name="homepage-nav-rank" class="icon" />
                </router-link>
                <router-link to="/ecard">
                    <SvgIcon name="homepage-nav-ecard" class="icon" />
                </router-link>
                <router-link to="/my-borrow">
                    <SvgIcon name="homepage-nav-renewal" class="icon" />
                </router-link>
                <router-link to="/qa">
                    <SvgIcon name="homepage-nav-comment" class="icon" />
                </router-link>
                <router-link to="/order-list">
                    <SvgIcon name="homepage-nav-myorder" class="icon" />
                </router-link>
                <router-link to="/register">
                    <SvgIcon name="homepage-nav-online_register" class="icon" />
                </router-link>
                <router-link to="/my-collection">
                    <SvgIcon name="homepage-nav-favourites" class="icon" />
                </router-link>
            </div>

            <div class="homepage-notification">
                <div class="label-box">
                    <span>通知</span>
                </div>
                <div class="notification-box">图书馆一键借阅正式上线啦！</div>
            </div>

            <div class="section-type-normal homepage-newbooks">
                <div class="header space-between-box">
                    <div class="header-text">新书上架</div>
                    <div class="box-right">
                        <router-link to="/new-arrival">
                            <span>更多</span>
                            <SvgIcon name="homepage-right" class="icon" />
                        </router-link>
                    </div>
                </div>
                <div class="section-content flex">
                    <router-link to="/book-detail" v-for="index in 3">
                        <div class="book-item top-bottom">
                            <div class="book-cover">
                                <img :src="BookCoverDefault" alt="">
                            </div>
                            <div class="book-title">「世界电影地图」三部曲</div>
                        </div>
                    </router-link>

                </div>
            </div>

            <div class="section-type-normal homepage-lib_recommend">
                <div class="header space-between-box">
                    <div class="header-text">图书馆推荐书单</div>
                    <div class="box-right">
                        <router-link to="/lib-recommend-list">
                            <span>更多</span>
                            <SvgIcon name="homepage-right" class="icon" />
                        </router-link>
                    </div>
                </div>
                <div class="section-content flex">
                    <swiper slidesPerView="auto" :spaceBetween="12">
                        <swiper-slide v-for="index in 2">
                            <router-link to="/lib-recommend-detail">
                                <div class="recommend-item">
                                    <div class="theme-cover" :style="`background-image: url(${ThemeItemBg})`"></div>
                                    <div class="theme-title">一路向西 丝绸之路</div>
                                    <div class="theme-subtitle">中华文化的博大精深</div>
                                </div>
                            </router-link>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>

            <div class="section-type-normal homepage-reader_recommend">
                <div class="header space-between-box">
                    <div class="header-text">读者推荐书单</div>
                    <div class="box-right">
                        <router-link to="/reader-recommend">
                            <span>更多</span>
                            <SvgIcon name="homepage-right" class="icon" />
                        </router-link>
                    </div>
                </div>
                <div class="section-content">
                    <router-link to="/book-detail" v-for="index in 3">
                        <div class="book-item left-right flex">
                            <div class="book-cover">
                                <img :src="BookCoverDefault" alt="">
                            </div>
                            <div class="book-info">
                                <div class="book-title">万叶集</div>
                                <div class="book-author">孙甘露 著 / 上海文艺出版社</div>
                                <div class="book-intro">本书是日本恒远悠久的和歌选集，被誉为“日本的《诗经》”。作者身份自天皇、文人武将、平民至无名无姓者，和歌内容自山河国土至细腻情爱
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

            <div class="section-type-color homepage-book_list">
                <div class="header">
                    <div class="header-text">哲学宗教</div>
                </div>
                <div class="section-content">
                    <div class="books grid col3">
                        <router-link to="/book-detail" v-for="index in 6">
                            <div class="book-item top-bottom">
                                <div class="book-cover">
                                    <img :src="BookCoverDefault" alt="">
                                </div>
                                <div class="book-title">「世界电影地图」三部曲</div>
                            </div>
                        </router-link>
                    </div>
                    <router-link to="/book-category?cateid=1">
                        <div class="check-all">查看所有</div>
                    </router-link>
                </div>
            </div>

            <div class="section-type-color homepage-book_list">
                <div class="header">
                    <div class="header-text">社会科学</div>
                </div>
                <div class="section-content">
                    <div class="books grid col2">
                        <router-link to="/book-detail" v-for="index in 6">
                            <BookCard v-bind="bookProps2" />
                        </router-link>
                    </div>
                    <router-link to="/book-category?cateid=2">
                        <div class="check-all">查看所有</div>
                    </router-link>
                </div>
            </div>

            <router-link to="/ecard">
                <div class="ecard-banner"></div>
            </router-link>


            <div class="section-type-color homepage-book_list">
                <div class="header">
                    <div class="header-text">政治法律</div>
                </div>
                <div class="section-content">
                    <div class="books rank">
                        <router-link to="/book-detail" v-for="index in 5">
                            <BookCard v-bind="bookProps" :showRank="true" :rank="index" />
                        </router-link>
                    </div>
                <router-link to="/book-category?cateid=3">
                    <div class="check-all">查看所有</div>
                </router-link>
            </div>
        </div>

        <div class="section-type-color homepage-book_list">
            <div class="header">
                <div class="header-text">社会科学</div>
            </div>
            <div class="section-content">
                <div class="books grid col2">
                    <router-link to="/book-detail" v-for="index in 6">
                        <BookCard v-bind="bookProps2" />
                    </router-link>
                </div>
                <router-link to="/book-category?cateid=4">
                        <div class="check-all">查看所有</div>
                    </router-link>
                </div>

                <div class="contact-box">
                    <span>本服务由浙江政务服务网、衢州市图书馆提供</span>
                    <span>服务咨询热线：0570-3022207</span>
                </div>

            </div>

            <BottomNavigate />
        </div>
    </div>
</template>

<style scoped lang="scss">

.homepage {
    position: relative;
    padding: 0 16px;
    color: var(--main-color-blue);
    padding-bottom: 90px;
}

.background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 380px;
    top: -88px;
    background-image: url('./assets/homepage-bg.svg');
    background-position: left top;
    background-repeat: no-repeat;
    background-size: cover;

    .background-img {
        position: absolute;
        z-index: 1;
        width: 147px;
        height: 269px;
        bottom: 0;
        right: 7px;
        background-image: url('./assets/homepage-bg-r.svg');
        background-repeat: no-repeat;
    }
}

.homepage-container {
    position: relative;
    z-index: 2;

    >div:not(:first-child) {
        margin-top: 20px;
    }
}

.homepage-header {
    .banner-text {
        padding-top: 26px;
    }

    .banner-title {
        font-size: 24px;
        line-height: 35px;
        color: #fff;
        font-weight: bold;
    }

    .banner-subtitle {
        margin-top: 8px;
        font-size: 12px;
        line-height: 17px;
        color: #61AAFF;
    }

    .homepage-search {
        margin-top: 20px;
        display: flex;
        align-items: center;
        background-color: #fff;
        height: 36px;
        border-radius: 20px;

        input {
            width: calc(100% - 38px - 30px);
            height: 36px;
            border: none;
            font-size: 12px;
            line-height: 17px;

            &::placeholder {
                color: rgba(0, 0, 0, 0.6);
            }
        }

        .icon {
            width: 20px;
            height: 36px;

            &-magnifier {
                margin-left: 10px;
                margin-right: 8px;
            }

            &-scan {
                box-sizing: content-box;
                padding-right: 12px;
            }
        }
    }
}

.homepage-navigation {
    margin-top: 20px;
    padding: 17px 12px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 14px;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;

    >a,
    .icon {
        width: 68px;
        height: 75px;
    }
}

.homepage-notification {
    margin-top: 20px;
    padding: 11px 12px;
    height: 44px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;

    .label-box {
        padding-right: 12px;
        border-right: 1px solid #E1E1E1;
        position: relative;

        span {
            font-size: 16px;
            line-height: 22px;
            font-weight: bold;
            background: linear-gradient(125.27deg, #196ED2 19.43%, #86C5FF 85.36%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            position: relative;

            &::after {
                position: absolute;
                content: '';
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #FFE380;
                top: 0;
                right: -4px;
            }
        }
    }

    .notification-box {
        flex: 1;
        padding-left: 12px;
        font-size: 14px;
        line-height: 20px;
        color: var(--main-color-blue-dark);
    }


}

.ecard-banner {
    height: 120px;
    background-image: url('./assets/homepage-ecard-banner.svg');
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 20px;
    border-radius: 8px;
}

.contact-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #88B9F3;

    >span {
        margin-bottom: 4px;
    }
}

.section-type-normal {
    background-color: #fff;
    border-radius: 8px;
    padding: 16px 20px;

    .header {
        align-items: center;

        .header-text {
            font-weight: bold;
            font-size: var(--main-font-size3);
            color: #4E4E4E;
        }

        .box-right {
            display: flex;
            align-items: center;
            margin-right: -3px;

            >a {
                display: flex;
                align-items: center;
                margin-right: -3px;
                margin-right: 3px;
            }

            span {
                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                color: #BDC3CE;
            }

            .icon {
                width: 20px;
                height: 20px;
                margin-left: 3px;
                color: #AAB7CF;
            }
        }
    }
}

.section-type-color {
    border-radius: 8px;
    overflow: hidden;

    .header {
        background: linear-gradient(90deg, #57A4FF 0%, #57A4FF 23.44%, rgba(132, 188, 255, 0) 100%);
        padding: 15px 20px 12px;
        color: #fff;
        font-size: var(--main-font-size3);
        line-height: var(--main-line-height3);
        font-weight: bold;
    }

    .section-content {
        padding: 20px 16px 18px;
        background-color: #fff;
    }

    .check-all {
        border-radius: 6px;
        padding: 12px 0;
        background-color: #EBF2FF;
        text-align: center;
        font-size: var(--main-font-size2);
        line-height: var(--main-line-height2);
        color: var(--text-color6);
        font-weight: bold;
    }

}

.book-item.top-bottom {
    width: 80px;
    margin-right: 32px;

    .book-cover {
        width: var(--book-cover-container-width2);
        height: var(--book-cover-container-height2);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;

        img {
            width: var(--book-cover-image-width2);
            height: var(--book-cover-image-height2);
        }
    }

    .book-title {
        font-weight: 500;
        font-size: var(--main-font-size1);
        line-height: var(--main-line-height1);
        color: var(--main-color-blue-dark);
        max-height: 36px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }
}

.book-item.left-right {
    &:not(:last-child) {
        margin-bottom: 12px;
    }

    .book-cover {
        width: var(--book-cover-container-width2);
        height: var(--book-cover-container-height2);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 28px;
        flex-shrink: 0;

        img {
            width: var(--book-cover-image-width2);
            height: var(--book-cover-image-height2);
        }
    }

    .book-info {
        .book-title {
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            color: var(--main-color-blue-dark);
            font-weight: bold;
            margin-bottom: 7px;
        }

        .book-author,
        .book-intro {
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);
            color: var(--main-color-blue-gray);
        }

        .book-author {
            margin-bottom: 12px;
        }

        .book-intro {
            max-height: 36px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            display: -webkit-box;
        }
    }
}

.homepage-newbooks {
    overflow: hidden;

    .section-content {
        padding-top: 16px;
    }
}

.homepage-reader_recommend {
    .section-content {
        padding-top: 24px;

        >a:not(:last-child) {
            display: block;
            margin-bottom: 16px;
        }
    }
}

.homepage-lib_recommend {

    .section-content {
        padding-top: 20px;
        overflow: hidden;
    }

    .swiper-slide {
        width: calc(265 / 375 * 100vw) !important;
    }

    .recommend-item {
        width: calc(265 / 375 * 100vw);
        flex-shrink: 0;
        /* margin-right: 12px; */

        .theme-cover {
            height: 120px;
            margin-bottom: 12px;
            background-size: cover;
            border-radius: 8px;
        }

        .theme-title {
            font-size: var(--main-font-size3);
            line-height: var(--main-line-height3);
            color: var(--main-color-blue-dark);
            margin-bottom: 6px;
            font-weight: 500;
        }

        .theme-subtitle {
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);
            color: #7A889E;
        }
    }
}

.homepage-book_list {
    .books {
        &.col3 {
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px 32px;
            justify-items: center;
            margin-bottom: 20px;

            .book-item {
                margin-right: 0;
            }
        }

        &.col2 {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
            margin-bottom: 16px;

            .book-card {
                padding: 0;
            }

            :deep(.book-title) {
                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                margin-bottom: 8px;
                white-space: normal;
                max-height: 34px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                display: -webkit-box;
            }

            :deep(.book-author) {
                font-size: 10px;
                line-height: 14px;
                white-space: normal;
                max-height: 40px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                display: -webkit-box;
            }
        }

        &.rank {
            padding: 0 4px;
            margin-bottom: 14px;


            >a:not(:last-child) {
                display: block;
                margin-bottom: 12px;
            }

            .book-card {
                padding: 0;
                padding-left: 34px;
            }

            :deep(.icon-rank) {
                left: 0;
                width: 18px;
                height: 24px;
                background-size: cover;
            }

            :deep(.book-title) {
                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                margin-bottom: 6px;
            }

            :deep(.book-author) {
                font-size: 10px;
                line-height: 14px;
                margin-bottom: 5px;
            }

            :deep(.book-publisher) {
                font-size: 10px;
                line-height: 14px;
                margin-bottom: 5px;
            }

            :deep(.book-time) {
                font-size: 10px;
                line-height: 14px;
                margin-bottom: 5px;
            }
        }
    }


}
</style>