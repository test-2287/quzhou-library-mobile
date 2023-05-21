<script setup>
import SvgIcon from '@/components/SvgIcon.vue'
import BottomNav from '@/components/BottomNavigate.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue';

const dialogShow = ref(false)
const router = useRouter()

</script>

<template>
    <div class="user-center-page">
        <div class="bg"></div>
        <div class="page-content">
            <div class="user-box">
                <div class="avatar"></div>
                <div class="name">李倩倩</div>
                <div class="lib">衢州市图书馆</div>
            </div>
            <div class="my">
                <router-link to="/my-borrow">
                    <div class="item">
                        <span class="number">5</span>
                        <span class="label">我的借阅</span>
                    </div>
                </router-link>
                <router-link to="/my-collection">
                    <div class="item collection">
                        <span class="number">12</span>
                        <span class="label">我的收藏</span>
                    </div>
                </router-link>
                <router-link to="/my-booklist">
                    <div class="item">
                        <span class="number">3</span>
                        <span class="label">我的书单</span>
                    </div>
                </router-link>

            </div>

            <div class="get-ecard space-between-box">
                <span>您有一张免费的电子读者证待领取</span>
                <div class="button">领取</div>
            </div>
            
            <div class="list">
                <router-link to="/order-list">
                    <div class="list-item">
                        <div>
                            <SvgIcon class="icon" name="usercenter-orderlist" />
                            <span>我的订单</span>
                        </div>
                        <SvgIcon class="icon" name="icon-right" />
                    </div>
                </router-link>
                <router-link to="/borrow-history">
                    <div class="list-item">
                        <div>
                            <SvgIcon class="icon" name="usercenter-borrow-history" />
                            <span>借阅历史</span>
                        </div>
                        <SvgIcon class="icon" name="icon-right" />
                    </div>
                </router-link>
                <router-link to="/ecard">
                    <div class="list-item">
                        <div>
                            <SvgIcon class="icon" name="usercenter-ecard" />
                            <span>电子读者证</span>
                        </div>
                        <SvgIcon class="icon" name="icon-right" />
                    </div>
                </router-link>
                <router-link to="/my-feedback">
                    <div class="list-item">
                        <div>
                            <SvgIcon class="icon" name="usercenter-feedback" />
                            <span>我的反馈</span>
                        </div>
                        <SvgIcon class="icon" name="icon-right" />
                    </div>
                </router-link>
                <router-link to="/changepwd">
                    <div class="list-item">
                        <div>
                            <SvgIcon class="icon" name="usercenter-changepwd" />
                            <span>修改密码</span>
                        </div>
                        <SvgIcon class="icon" name="icon-right" />
                    </div>
                </router-link>
                <router-link to="/receiver-manage">
                    <div class="list-item">
                        <div>
                            <SvgIcon class="icon" name="usercenter-receiver-manage" />
                            <span>地址管理</span>
                        </div>
                        <SvgIcon class="icon" name="icon-right" />
                    </div>
                </router-link>
            </div>

            <div class="logout" @click="dialogShow=true">退出系统</div>
        </div>
    </div>


    <BottomNav />

    <van-dialog v-model:show="dialogShow" width="260" title="你确定退出系统？">
        <template #footer>
            <div class="dialog-footer">
                <div class="dialog-button cancel" @click="dialogShow = false">再想一下</div>
                <div class="dialog-button confirm" @click="dialogShow = false">是的</div>
            </div>
        </template>
    </van-dialog>

</template>

<style scoped lang="scss">
.user-center-page {
    position: relative;
    padding-bottom: 90px;

    .bg {
        background-color: var(--main-color-blue);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 180px;
        background-image: url('../assets/usercenter-bg.svg');
        background-size: cover;
    }

    .page-content {
        padding: 35px 16px;
        position: relative;
        z-index: 2;

        >div {
            margin-bottom: 16px;
        }
    }

    .user-box {
        display: flex;
        flex-direction: column;
        align-items: center;

        .avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background-color: #fff;
            margin-bottom: 10px;
        }

        .name {
            font-weight: 700;
            /* font-size: 16px;
            line-height: 23px; */
            font-size: var(--main-font-size3);
            line-height: var(--main-line-height3);
            color: #FFFFFF;
            margin-bottom: 2px;
        }

        .lib {
            font-size: 12px;
            line-height: 17px;
            font-size: var(--main-font-size1);
            line-height: var(--main-line-height1);
            color: rgba(255, 255, 255, 0.5);
        }
    }

    .my {
        padding: 12px 0;
        height: 76px;
        background-color: #fff;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;
        display: flex;
        justify-content: space-between;

        .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 112px;

            .number {
                margin-bottom: 4px;
                font-weight: 700;
                font-size: 22px;
                line-height: 30px;
                color: var(--main-color-blue);
            }

            .label {
                /* font-size: 12px;
                line-height: 17px; */
                font-size: var(--main-font-size1);
                line-height: var(--main-line-height1);
                color: var(--text-color4);
            }

            &.collection {
                border-left: 1px solid var(--stroke-color1);
                border-right: 1px solid var(--stroke-color1);
            }
        }
    }

    .get-ecard {
        background: linear-gradient(91.63deg, rgba(0, 0, 0, 0.1) 4.94%, rgba(0, 0, 0, 0) 81.61%), #4CCC41;
        border-radius: 8px;
        padding: 10px 16px;
        font-size: calc(var(--main-font-size1));
        line-height: calc(var(--main-line-height1));
        color: #FFFFFF;
        align-items: center;
        font-weight: 500;

        .button {
            padding: 8px 12px;
            border-radius: 15px;
            background: #21A42E;
        }
    }

    .list {
        background-color: #fff;
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;

        .list-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 47px;
            padding-left: 20px;
            padding-right: 12px;
            border-bottom: 1px solid var(--stroke-color1);
            color: var(--text-color4);

            >div {
                display: flex;
                align-items: center;
            }

            .icon {
                width: 24px;
                height: 24px;
            }

            span {
                margin-left: 16px;
                font-weight: 500;
                font-size: calc(var(--main-font-size1) + 1px);
                line-height: calc(var(--main-line-height1) + 1px);
            }

            &:last-child {
                border-bottom: none;
            }
        }
    }

    .logout {
        /* background-color: #fff; */
        background-color: var(--main-color-blue);
        box-shadow: 0px 8px 8px rgba(136, 183, 252, 0.06);
        border-radius: 8px;
        padding: 12px 16px;
        font-size: var(--main-font-size2);
        line-height: var(--main-line-height2);
        /* color: var(--text-color6); */
        color: #fff;
        text-align: center;
        font-weight: bold;
    }
}
</style>