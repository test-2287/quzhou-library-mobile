<script setup>
import { useRouter } from 'vue-router';
import SvgIcon from '@/components/SvgIcon.vue';
import { ref } from 'vue';
const dialogShow = ref(false)

const router = useRouter()
const goReceiverAdd = () => {
    router.push('/receiver-add')
}

</script>

<template>
    <div class="receiver-manage-page">
        <div class="page-header">地址管理</div>
        <div class="page-content receiver-list">
            <div class="receiver-card">
                <div class="card-content">
                    <SvgIcon name="map-pin" class="icon-map" />
                    <div class="receiver-info">
                        <div class="receiver-address">湖南省常德市鼎城区钱家坪乡 17 单元 88 室</div>
                        <div class="receiver-phone-number">电话：17037259611</div>
                        <div class="receiver-name">收件人：袁紫宜</div>
                    </div>
                </div>
                <div class="space-between-box card-bottom">
                    <span class="default-text">默认地址</span>
                    <div class="action-box">
                        <SvgIcon name="delete" class="delete" @click="dialogShow = true" />
                        <SvgIcon name="edit" class="edit" @click="goReceiverAdd" />
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-bar">
            <div class="button add-new" @click="goReceiverAdd">添加新地址</div>
        </div>

        <van-dialog v-model:show="dialogShow" width="260" title="你确定删除地址吗？">
            <template #footer>
                <div class="dialog-footer">
                    <div class="dialog-button cancel" @click="dialogShow = false">再想一下</div>
                    <div class="dialog-button confirm" @click="dialogShow = false">是的</div>
                </div>
            </template>
        </van-dialog>
    </div>
</template>

<style scoped lang="scss">
.receiver-manage-page {
    padding: 16px;
    padding-bottom: 90px;

    .page-header {
        font-size: var(--main-font-size4);
        line-height: var(--main-line-height4);
        color: var(--text-color4);
        font-weight: bold;
        margin-bottom: 23px;
    }

    .receiver-card {
        background-color: #fff;
        border-radius: 8px;
        padding: 16px;

        .card-content {
            display: flex;
            padding-bottom: 16px;

            .icon-map {
                width: 24px;
                height: 24px;
                margin-right: 12px;
                color: rgba(54, 108, 189, 0.5);
            }

            .receiver-info {
                .receiver-address {
                    font-size: var(--main-font-size2);
                    line-height: var(--main-line-height2);
                    color: var(--text-color4);
                    font-weight: 500;
                    margin-bottom: 12px;
                }

                .receiver-phone-number,
                .receiver-name {
                    font-size: var(--main-font-size2);
                    line-height: var(--main-line-height2);
                    color: var(--text-color1);
                }

                .receiver-name {
                    margin-top: 6px;
                }
            }
        }
    }

    .card-bottom {
        align-items: center;

        .default-text {
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            font-weight: 500;
            color: var(--text-color1);
        }

        .action-box {
            margin-left: auto;
            display: flex;
            align-items: center;

            .delete,
            .edit {
                width: 24px;
                height: 24px;
                margin-left: 30px;
            }

            .delete {
                color: var(--text-color2);
            }

            .edit {
                color: var(--text-color1);
            }
        }
    }

    .bottom-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 8px 16px;
        background-color: #fff;
        z-index: 10;
        width: 100vw;

        .button {
            background-color: var(--main-color-blue);
            border-radius: 8px;
            color: #fff;
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            font-weight: bold;
            padding: 12px 0;
            text-align: center;
        }
    }

    .dialog-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        padding-bottom: 20px;

        .dialog-button {
            width: 100px;
            height: 42px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: var(--font-size14);
            line-height: var(--line-height20);
            font-weight: bold;

            &.cancel {
                color: var(--text-color6);
                border: 1px solid var(--stroke-color1);
            }

            &.confirm {
                color: #fff;
                background: var(--main-color-blue);
            }
        }
    }
}</style>