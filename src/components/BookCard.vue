<script setup>
import { defineProps } from 'vue'
import BookCoverDefault from '@/assets/book-cover-default.svg'
import IconRankBlue from './bookcard/assets/icon-rank-blue.svg'
import IconRankOrange from './bookcard/assets/icon-rank-orange.svg'

const props = defineProps({
    title: '',
    author: '',
    publisher: '',
    isbn: '',
    time: '',
    rank: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        default: BookCoverDefault
    },
    showRank: {
        type: Boolean,
        default: false
    },
    showLocation: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <div class="book-card">
        <i class="icon-rank" v-if="showRank" 
        :style="{backgroundImage: `url(${Number(rank) <= 3 ? IconRankOrange : IconRankBlue})`}">{{ rank }}</i>
        <div class="book-cover">
            <img :src="image" alt="">
        </div>
        <div class="book-info">
            <div class="book-title">{{ title }}</div>
            <div class="book-author">{{ author }}</div>
            <div class="book-publisher">{{ publisher }}</div>
            <div class="book-time" v-if="time">{{ time }}</div>
            <div class="book-isbn" v-if="isbn">ISBN: {{ isbn }}</div>
            <div class="in-lib" v-if="showLocation">
                <i class="icon-lib">馆</i>
                <span>衢州市图书馆</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.book-card {
    display: flex;
    padding: 20px 15px;
    position: relative;
    background-color: #fff;

    .icon-rank {
        position: absolute;
        top: 0;
        left: 12px;
        width: 24px;
        height: 30px;
        background-size: contain;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
        color: #fff;
        font-style: normal;
    }

    .book-cover {
        width: var(--book-cover-container-width1);
        height: var(--book-cover-container-height1);
        margin-right: 16px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: var(--book-cover-image-width1);
        }
    }

    .book-info {
        flex: 1;
        display: flex;
        flex-direction: column;

        .book-title {
            font-size: 16px;
            font-size: var(--main-font-size2);
            list-style: var(--main-line-height2);
            font-weight: 700;
            color: var(--text-color4);
            margin-bottom: 8px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .book-author,
        .book-publisher,
        .book-isbn,
        .book-time,
        .in-lib {
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height2);
            color: var(--text-color1);
            margin-bottom: 2px;
        }

        .in-lib {
            display: flex;
            align-items: center;

            .icon-lib {
                display: inline-block;
                width: 16px;
                height: 16px;
                background: linear-gradient(135deg, #9CB8FF 0%, #1264E0 100%);
                border-radius: 4px;
                margin-right: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                line-height: 14px;
                color: #fff;
            }
        }
    }
}
</style>