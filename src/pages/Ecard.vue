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

    .ecard-box {
        padding: 20px;
        padding-bottom: 26px;
        background-color: #fff;
        border-radius: 8px;
        width: 300px;

        .title {
            font-size: 18px;
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
            font-size: 14px;
            line-height: 20px;
            color: var(--text-color1);

            .item:not(:last-child) {
                margin-bottom: 9px;
            }
        }
    }
}
</style>