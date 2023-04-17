<template>
  <van-config-provider :theme-vars="{
    tabTextColor: 'var(--text-color1)',
    tabActiveTextColor: 'var(--main-color-blue)',
    tabsBottomBarColor: 'var(--main-color-blue)',
    tabsBottomBarWidth: '24px',
    tabsBottomBarHeight: '3px',
    buttonPrimaryBackground: 'var(--main-color-blue)',
    buttonBorderWidth: '0'
  }">
    <router-view></router-view>
  </van-config-provider>
</template>
