<script setup>
import BookCoverDefault from '@/assets/book-cover-default.svg';
</script>

<template>
    <div class="book_detail-card">
        <div class="book_detail-info-left">
            <div class="book_detail-cover">
                <img :src="BookCoverDefault" alt="">
            </div>
            <!-- instock outstock -->
            <div class="book_detail-stock_info instock">有库存</div>
            <div class="book_detail-stock_info outstock">无库存</div>
        </div>
        <div class="book_detail-info-right">
            <div class="book_detail-title">思辨与立场：生活中无处不在的批判性思维工具</div>
            <div class="book_detail-info-items">
                <div class="item-label">作者</div>
                <div class="item-content">[美] 莫里斯·布莱克</div>
                <div class="item-label">出版社</div>
                <div class="item-content">雅众文化 北京联合出版公司</div>
                <div class="item-label">出版年份</div>
                <div class="item-content">2022年1月</div>
                <div class="item-label">ISBN</div>
                <div class="item-content">987-235-458-127</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.book_detail-card {
    display: flex;
    padding: 20px 23px 23px 20px;
    background-color: #fff;
    border-radius: 8px;

    .book_detail-info-left {
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .book_detail-cover {
            width: var(--book-cover-container-width2);
            height: var(--book-cover-container-height2);
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: var(--book-cover-image-width2);
                height: var(--book-cover-image-height2);
            }
        }

        .book_detail-stock_info {
            margin-top: 10px;
            padding: 8px 12px;
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);
            border-radius: 6px;

            &.instock {
                background-color: var(--background-color3);
                color: #3B95E8;
            }
            &.outstock {
                background-color: #FFF7E3;
                color: #F1970F;
            }

        }
    }

    .book_detail-info-right {
        flex: 1;

        .book_detail-title {
            font-size: var(--main-font-size3);
            line-height: var(--main-line-height3);
            font-weight: bold;
            margin-bottom: 16px;
            color: var(--text-color4);
        }

        .book_detail-info-items {
            display: grid;
            grid-template-columns: minmax(auto, max-content) 1fr;
            grid-gap: 4px 12px;
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);

            .item-label {
                color: var(--text-color1);
            }

            .item-content {
                color: var(--text-color4);
            }

        }

    }

}
</style>