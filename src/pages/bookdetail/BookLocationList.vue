<script setup>
import SvgIcon from '@/components/SvgIcon.vue';
</script>

<template>
    <div class="book_location-list">
        <div class="list-header">
            <SvgIcon name="dropbox-lib-title" class="icon" />
            馆藏地点
        </div>
        <div class="list-content">
            <div class="list_content-item">
                <div class="list_content-item-left">
                    <div class="label">类型</div>
                    <div class="content">普通图书</div>
                    <div class="label">条码号</div>
                    <div class="content">46246164</div>
                    <div class="label">索书号</div>
                    <div class="content">B648/143218</div>
                </div>
                <div class="list_content-item-right available">在馆</div>
            </div>

            <div class="list_content-item">
                <div class="list_content-item-left">
                    <div class="label">类型</div>
                    <div class="content">普通图书</div>
                    <div class="label">条码号</div>
                    <div class="content">46246164</div>
                    <div class="label">索书号</div>
                    <div class="content">B648/143218</div>
                </div>
                <div class="list_content-item-right unavailable">借出</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.book_location-list {
    .list-header {
        display: flex;
        align-items: center;
        padding: 9px 12px;
        font-size: var(--main-font-size1);
        line-height: var(--main-line-height1);
        font-weight: 500;
        color: var(--text-color4);
        .icon {
            width: 7px;
            height: 12px;
            margin-right: 8px;
        }
    }

    .list-content {
        .list_content-item {
            display: flex;
            justify-content: space-between;
            padding: 12px 16px;
            border-top: 1px solid var(--divider-color);

            .list_content-item-left {
                display: grid;
                grid-template-columns: minmax(auto, max-content) 1fr;
                grid-gap: 4px 20px;

                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);

                .label {
                    color: var(--text-color1);
                }

                .content {
                    color: var(--text-color4);
                }
            }

            .list_content-item-right {
                align-self: flex-start;
                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                color: #fff;
                padding: 3px 6px;
                border-radius: 4px;
                &.available {
                    background: linear-gradient(104.04deg, #88C6FF 0%, #1074EA 100%);
                }
                &.unavailable {
                    background: linear-gradient(284.04deg, #ED7F1A 0%, #FEC24C 100%), #FF9330;
                }
            }
        }
    }
}
</style>