<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: ''
    },
    select: {
        type: Boolean,
        default: false
    }
});


</script>

<template>
    <div class="tag-button" :class="{'select': select}">{{ text }}</div>
</template>

<style lang="scss" scoped>
.tag-button {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 6px;
    background-color: var(--background-color2);
    color: var(--text-color1);
    font-size: var(--main-font-size2);
    line-height: var(--main-line-height2);
    color: var(--text-color1);
    &.select {
        background-color: var(--main-color-blue);
        color: #fff;
    }
}
</style>