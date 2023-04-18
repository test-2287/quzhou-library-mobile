<script setup>
import SvgIcon from '@/components/SvgIcon.vue';
import { defineProps, defineEmits } from 'vue';

defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
    <div class="search-box">
        <SvgIcon name="magnifier" class="icon icon-magnifier" />
        <input type="text" placeholder="搜索关键词/书名/作者" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)">
        <SvgIcon name="scan" class="icon icon-scan" />
    </div>
</template>

<style lang="scss" scoped>
.search-box {
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 36px;
    border-radius: 20px;

    input {
        width: calc(100% - 38px - 30px);
        height: 36px;
        border: none;
        font-size: 12px;
        line-height: 17px;

        &::placeholder {
            color: rgba(0, 0, 0, 0.6);
        }
    }

    .icon {
        width: 20px;
        height: 36px;

        &-magnifier {
            margin-left: 10px;
            margin-right: 8px;
        }

        &-scan {
            box-sizing: content-box;
            padding-right: 12px;
        }
    }
}
</style>