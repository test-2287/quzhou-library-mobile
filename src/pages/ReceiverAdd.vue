<script setup>
import { reactive, ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import SvgIcon from '@/components/SvgIcon.vue';


import { useCascaderAreaData } from '@vant/area-data';
let options = useCascaderAreaData();

// 衢州
options = options.filter((option) => option.value == '330000')

const pickerShow = ref(false);
// const cascaderValue = ref('请选择')
const onFinish = ({ selectedOptions }) => {
    pickerShow.value = false;
    data.cascaderValue = selectedOptions.map((option) => option.text).join('/');
}

const data = reactive({
    name: '',
    phonenumber: '',
    addressdetail: '',
    cascaderValue: '请选择',
    isDefault: false,
});

const errors = reactive({});

const rules = reactive({
    name: [
        { required: true, message: '请输入姓名' },
    ],
    phonenumber: [
        { required: true, message: '请输入手机号码' },
    ],
    addressdetail: [
        { required: true, message: '请输入详细地址' },
    ],
    cascaderValue: [
        { required: true, message: '请选择所在地区' },
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
        <div class="page-title">添加新地址</div>
        <div class="page-content form-box">
            <div class="field" :class="{ 'error': errors.name }">
                <label for="name">姓名</label>
                <input type="text" id="name" placeholder="请输入" v-model="data.name">
                <span class="error-message">{{ errors.name }}</span>
            </div>
            <div class="field" :class="{ 'error': errors.phonenumber }">
                <label for="phonenumber">手机号码</label>
                <input type="tel" id="phonenumber" v-model="data.phonenumber">
                <span class="error-message">{{ errors.phonenumber }}</span>
            </div>

            <div class="field" :class="{ 'error': errors.cascaderValue }">
                <label for="">所在地区</label>
                <div class="picker" @click="pickerShow = true">
                    {{ data.cascaderValue }}
                    <SvgIcon name="dropbox-down" class="icon" />
                </div>
                <span class="error-message">{{ errors.cascaderValue }}</span>
                <van-popup round position="bottom" v-model:show="pickerShow">
                    <van-cascader v-model="data.cascaderValue" title="请选择所在地区" :options="options"
                        @close="pickerShow = false" @finish="onFinish" />
                </van-popup>
            </div>

            <div class="field" :class="{ 'error': errors.addressdetail }">
                <label for="addressdetail">详细地址</label>
                <input type="text" id="addressdetail" v-model="data.addressdetail">
                <span class="error-message">{{ errors.addressdetail }}</span>
            </div>
            <van-checkbox v-model="data.isDefault">设为默认地址</van-checkbox>
            <div class="button submit" @click="onSubmit">保存地址</div>
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

    .van-checkbox {
        :deep(.van-checkbox__label) {
            font-size: 14px;
            line-height: 20px;
            color: var(--text-color1);
        }
    }

}
</style>