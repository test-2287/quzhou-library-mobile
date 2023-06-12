<script setup>
import { reactive, ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import { showToast } from 'vant'

const router = useRouter()

const questionType = ref(0)
const toggleQuestionType = (type) => {
    questionType.value = type
}

const errors = reactive({});
const data = reactive({
    questionType: 0,
    questionTitle: '',
    questionDesc: '',
});
const rules = reactive({
    questionTitle: [
        { required: true, message: '请输入问题标题' }
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

const onSubmit = () => {
    // clearErrors()
    // validate();
    // console.log(Object.keys(errors))
    // if (Object.keys(errors).length) {
    //     return;
    // }
    // console.log('submit', toRaw(data));
    showToast({
        message: '提交成功',
        duration: 10000,
        position: 'bottom',
        onClose: () => {
            // router.push('/my-feedback')
        }
    })
}



</script>

<template>
    <div class="feeback-page">
        <div class="bg"></div>
        <div class="page-content form-box">
            <div class="field question-type">
                <label for="">问题类型</label>
                <div class="flex">
                    <div class="button" :class="{ 'select': questionType == 1 }" @click="toggleQuestionType(1)">物流问题</div>
                    <div class="button" :class="{ 'select': questionType == 2 }" @click="toggleQuestionType(2)">预约问题</div>
                </div>
            </div>
            <div class="field">
                <label for="title">问题标签</label>
                <input type="text" id="title" placeholder="请输入问题标题" v-model="data.questionTitle" />
                <span class="error-message">{{ errors.questionTitle }}</span>
            </div>
            <div class="field">
                <label for="desc">问题描述</label>
                <textarea type="text" id="desc" placeholder="请输入问题描述" v-model="data.questionDesc"></textarea>
            </div>

            <div class="button submit" @click="onSubmit">提交反馈</div>
            <div class="myfeedback" @click="router.push('/my-feedback')">我的反馈</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.feeback-page {
    position: relative;
    padding: 100px 24px;
    padding-bottom: 90px;

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 140px;
        background-image: url('../assets/feedback-bg.svg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    .page-content {
        position: relative;
        z-index: 2;
    }

    .form-box {
        .field {

            &.question-type .button {
                margin-top: 0;
                margin-right: 20px;
                padding: 10px 16px;
                width: auto;
                border: 1px solid var(--stroke-color1);
                border-radius: 6px;
                font-size: 14px;
                line-height: 20px;
                color: var(--text-color1);
                background-color: #fff;

                &.select {
                    background-color: var(--main-color-blue);
                    color: #fff;
                }
            }

            textarea {
                height: 170px;
                border: 1px solid var(--stroke-color1);
                border-radius: 6px;
                color: var(--text-color4);
                font-size: var(--main-font-size2);
                line-height: 20px;
                padding: 10px;

                &::placeholder,
                &::-webkit-input-placeholder {
                    color: var(--text-color2);
                }
            }
        }

        .myfeedback {
            margin-top: 24px;
            font-size: var(--main-font-size2);
            line-height: 20px;
            color: var(--text-color1);
            text-align: center;
            font-weight: bold;
        }


    }
}
</style>