<script setup>
import { reactive, ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import SvgIcon from '@/components/SvgIcon.vue';

const columns = [
    { text: '图书馆1', value: 'lib1' },
    { text: '图书馆2', value: 'lib2' },
    { text: '图书馆3', value: 'lib3' },
    { text: '图书馆4', value: 'lib4' },
    { text: '图书馆5', value: 'lib5' }
];

const pickerShow = ref(false);
const onConfirm = ({ selectedOptions }) => {
    pickerShow.value = false;
    data.library = selectedOptions[0].text;
};

const data = reactive({
    library: '请选择',
    name: '',
    idNumber: '',
    phoneNumber: ''
});

const pickerRef = ref(['lib1'])

const errors = reactive({});

const rules = reactive({
    library: [
        { required: true, message: '请选择图书馆' },
    ],
    name: [
        { required: true, message: '请输入姓名' },
    ],
    idNumber: [
        { required: true, message: '请输入正确身份证号' },
    ],
    phoneNumber: [
        { required: true, message: '请输入手机号' },
    ],

});

const validate = () => {
    for (const key in data) {
        const value = data[key];
        const rule = rules[key];
        if (rule) {
            for (const item of rule) {
                if (item.required && (!value || value == '请选择')) {
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

    dialogShow.value = true;
    return

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
    <div class="register-page">
        <div class="bg"></div>
        <div class="page-content form-box">

            <div class="field" :class="{ 'error': errors.library }">
                <label for="library">所在地区</label>
                <div class="picker" @click="pickerShow = true">
                    {{ data.library }}
                    <SvgIcon name="dropbox-down" class="icon" />
                </div>
                <span class="error-message">{{ errors.library }}</span>
                <van-popup round position="bottom" v-model:show="pickerShow">
                    <van-picker v-model="pickerRef" title="所属馆" :columns="columns" @confirm="onConfirm"
                        @cancel="pickerShow = false" />
                </van-popup>
            </div>

            <div class="field" :class="{ 'error': errors.name }">
                <label for="name">真实姓名</label>
                <input type="text" id="name" placeholder="请输入" v-model="data.name">
                <span class="error-message">{{ errors.name }}</span>
            </div>

            <div class="field" :class="{ 'error': errors.idNumber }">
                <label for="idNumber">身份证号码</label>
                <input type="text" id="idNumber" v-model="data.idNumber">
                <span class="error-message">{{ errors.idNumber }}</span>
            </div>

            <div class="field" :class="{ 'error': errors.phoneNumber }">
                <label for="phoneNumber">手机号码</label>
                <input type="text" id="phoneNumber" v-model="data.phoneNumber">
                <span class="error-message">{{ errors.phoneNumber }}</span>
            </div>

            <div class="button submit" @click="onSubmit">保存地址</div>
        </div>
    </div>

    <van-dialog v-model:show="dialogShow" width="260" title="你的证件已经办理成功">
        <div class="dialog-content">你的身份证号码后6位为默认登录密码，为保障你的账户安全，请在登录后及时修改密码！</div>
        <template #footer>
            <div class="dialog-footer center">
                <div class="dialog-button confirm" @click="dialogShow = false">立即登录</div>
            </div>
        </template>

    </van-dialog>
</template>

<style scoped lang="scss">
.register-page {
    padding: 110px 24px;
    padding-bottom: 90px;
    position: relative;

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 140px;
        background-image: url('../assets/ecard-register-bg.svg');
        background-size: cover;
    }

    .page-content {
        position: relative;
        z-index: 2;
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