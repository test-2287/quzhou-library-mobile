<script setup>
import { reactive, ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import SvgIcon from '@/components/SvgIcon.vue';


const data = reactive({
    oldPwd: '',
    newPwd: '',
    confirmNewPwd: ''
});

const errors = reactive({});

const rules = reactive({
    oldPwd: [
        { required: true, message: '请输入密码' },
    ],
    newPwd: [
        { required: true, message: '请输入密码' },
    ],
    confirmNewPwd: [
        { required: true, message: '请输入密码' },
    ]
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
    <div class="receiver-add-page">
        <div class="page-title">修改密码</div>
        <div class="page-content form-box">
            <div class="field" :class="{ 'error': errors.oldPwd }">
                <label for="oldPwd">原密码</label>
                <input type="text" id="oldPwd" placeholder="请输入" v-model="data.oldPwd">
                <span class="error-message">{{ errors.oldPwd }}</span>
            </div>
            <div class="field" :class="{ 'error': errors.newPwd }">
                <label for="newPwd">新密码</label>
                <input type="tel" id="newPwd" v-model="data.newPwd">
                <span class="error-message">{{ errors.newPwd }}</span>
            </div>

            <div class="field" :class="{ 'error': errors.confirmNewPwd }">
                <label for="confirmNewPwd">确认新密码</label>
                <input type="text" id="confirmNewPwd" v-model="data.confirmNewPwd">
                <span class="error-message">{{ errors.confirmNewPwd }}</span>
            </div>
            <div class="pwd-hint">用户密码需要6位以上的字母或者数字组成</div>
            <div class="button submit" @click="onSubmit">立即修改</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.receiver-add-page {
    padding: 16px;
    padding-bottom: 90px;

    .page-title {
        font-size: var(--main-font-size4);
        line-height: var(--main-line-height4);
        font-weight: bold;
        color: var(--text-color4);
        margin-bottom: 16px;
    }

    .pwd-hint {
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: var(--text-color1);
    }

}
</style>