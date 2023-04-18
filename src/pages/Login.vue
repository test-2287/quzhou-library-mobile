<script setup>
import { reactive, ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import CodeImage from '@/assets/login-code.svg'



const loginType = ref('ecardNumber');
const toggeLoginType = () => {
    loginType.value = loginType.value == 'ecardNumber' ? 'idNumber' : 'ecardNumber';
    if (loginType.value == 'ecardNumber') {
        delete rules.idNumber;
        rules.ecardNumber = ecardNumberRule;
    } else {
        delete rules.ecardNumber;
        rules.idNumber = idNumberRule;
    }
}

const data = reactive({
    idNumber: '',
    ecardNumber: '',
    password: '',
    code: '',
});

const errors = reactive({});

const idNumberRule = reactive([{
    required: true,
    message: '请输入身份证'
}]);
const ecardNumberRule = reactive([{
    required: true,
    message: '请输入读者证'
}]);
const rules = reactive({
    ecardNumber: ecardNumberRule,
    password: [
        { required: true, message: '请输入密码' },
    ],
    code: [
        { required: true, message: '请输入验证码' },
    ],

});

const validate = () => {
    for (const key in data) {
        const value = data[key];
        const rule = rules[key];
        if (rule) {
            for (const item of rule) {
                if (item.required && !value) {
                    errors[key] = item.message;
                    break;
                }
            }
        }
    }
}

const clearErrors = () => {
    Object.keys(errors).forEach((key) => {
        delete errors[key];
    })
}

const dialogShow = ref(false);

const router = useRouter()
const onSubmit = () => {

    clearErrors()
    validate();
    console.log(Object.keys(errors))
    if (Object.keys(errors).length) {
        return;
    }
    console.log('submit', toRaw(data));
    router.go(-1)
}

</script>

<template>
    <div class="login-page">
        <div class="bg">
            <div class="title">
                <span>欢迎您来到</span>
                <span>衢州市图书馆</span>
            </div>
        </div>
        <div class="page-content">

            <div class="form-head">
                <div class="login-type" v-if="loginType == 'ecardNumber'">读者证登录</div>
                <div class="login-type" v-else>身份证登录</div>

                <div class="toggle-btn" v-if="loginType == 'ecardNumber'" @click="toggeLoginType">身份证登录</div>
                <div class="toggle-btn" v-else @click="toggeLoginType">读者证登录</div>
            </div>

            <div class="form-box">
                <div class="field" :class="{ 'error': errors.ecardNumber }" v-if="loginType == 'ecardNumber'">
                    <label for="ecardNumber">读者证号码</label>
                    <input type="text" id="ecardNumber" placeholder="请输入" v-model="data.ecardNumber">
                    <span class="error-message">{{ errors.ecardNumber }}</span>
                </div>

                <div class="field" :class="{ 'error': errors.idNumber }" v-if="loginType == 'idNumber'">
                    <label for="idNumber">身份证号码</label>
                    <input type="text" id="idNumber" placeholder="请输入" v-model="data.idNumber">
                    <span class="error-message">{{ errors.idNumber }}</span>
                </div>

                <div class="field" :class="{ 'error': errors.password }">
                    <label for="password">密码</label>
                    <input type="password" id="password" v-model="data.password">
                    <span class="error-message">{{ errors.password }}</span>
                </div>

                <div class="field code" :class="{ 'error': errors.code }">
                    <label for="code">验证码</label>
                    <div class="space-between-box">
                        <input class="code" type="text" id="code" v-model="data.code">    
                        <div class="code-box" :style="`background-image: url(${CodeImage})`"></div>
                    </div>
                    <span class="error-message">{{ errors.code }}</span>
                </div>

                <div class="button submit" @click="onSubmit">保存地址</div>
            </div>

            
        </div>

        <span class="register-text" @click="router.push('/ecard-register')">没有读者证？立即办证</span>
    </div>
</template>

<style scoped lang="scss">
.login-page {
    padding: 166px 38px;
    padding-bottom: 158px;
    position: relative;
    min-height: 100vh;
    background-color: var(--main-color-blue);

    .register-text {
        position: absolute;
        bottom: 37px;
        left: 50%;
        transform: translateX(-50%);
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        color: #FFFFFF;
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 357px;
        background-image: url('../assets/login-bg.svg');
        background-repeat: no-repeat;
        background-position: right 44px bottom 0;
        padding: 35px;

        .title {
            display: flex;
            flex-direction: column;


            span {
                font-weight: bold;
                font-size: 20px;
                line-height: 29px;
                color: #FFFFFF;
            }

        }
    }

    .page-content {
        position: relative;
        z-index: 2;
    }

    .form-box {
        border-top-left-radius: 0;
    }

    .form-head {
        height: 50px;
        background-image: url('../assets/login-form-head.svg');
        background-repeat: no-repeat;
        background-position: left top;
        position: relative;
        margin-bottom: -1px;

        .login-type {
            font-weight: 700;
            font-size: 20px;
            line-height: 29px;
            color: var(--text-color4);
            padding: 15px 21px;
        }

        .toggle-btn {
            position: absolute;
            right: 0;
            top: -6px;
            padding: 8px 23px;
            border-radius: 18px;
            background-color: #5891FF;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
        }
    }

    .field.code {
        input {
            width: 120px;
        }
        .code-box {
            width: 120px;
            height: 40px;
            background-size: contain;
            border-radius: 6px;
        }
    }

    ::v-deep .dialog-content {
        padding: 0 24px;
        font-size: 14px;
        line-height: 20px;
        color: var(--text-color4);
    }

}

.van-dialog__content {
    .dialog-content {
        padding: 16px 24px 14px;
        font-size: 14px;
        line-height: 20px;
        color: var(--text-color4);
    }
}
</style>