<template>
    <div class="ecard-page">
        <div class="page-content ecard-box">
            <div class="title">电子读者证</div>
            <div class="qrcode-box">
                <img src="../assets/qrcode.svg" alt="">
            </div>
            <div class="desc">
                <div class="item space-between-box">
                    <span>姓名</span>
                    <span>于世平</span>
                </div>
                <div class="item space-between-box">
                    <span>读者卡号</span>
                    <span>774*****4880</span>
                </div>
                <div class="item space-between-box">
                    <span>所属馆</span>
                    <span>衢州市图书馆</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ecard-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--main-color-blue);
    position: relative;
    overflow: hidden;
    &::before {
        content: '';
        position: absolute;
        width: 129vw;
        height: 129vw;
        border-radius: 50%;
        background: linear-gradient(176.21deg, #2C79EE 7.92%, rgba(44, 121, 238, 0) 96.89%);
        left: 38vw;
        top: -60.5vw;
    }
    &::after {
        content: '';
        position: absolute;
        width: 129vw;
        height: 129vw;
        border-radius: 50%;
        background: linear-gradient(146.6deg, #0851BE 7.01%, rgba(8, 81, 190, 0) 71.1%);;
        right: 43.47vw;
        bottom: -80.27vw;
    }

    .ecard-box {
        position: relative;
        z-index: 2;
        padding: 20px;
        padding-bottom: 26px;
        background-color: #fff;
        border-radius: 16px;
        width: calc(100vw - 38px * 2);

        .title {
            font-size: var(--main-font-size4);
            line-height: 26px;
            font-weight: bold;
            color: var(--text-color4);
            text-align: center;
            margin-bottom: 26px;
        }

        .qrcode-box {
            width: 200px;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            margin-bottom: 24px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .desc {
            border-top: 1px solid #E2E2E2;
            padding-top: 20px;
            font-weight: 500;
            font-size: var(--main-font-size2);
            line-height: var(--main-line-height2);
            color: var(--text-color1);

            .item:not(:last-child) {
                margin-bottom: 9px;
            }
        }
    }
}
</style>