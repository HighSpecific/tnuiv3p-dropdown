<script setup lang="ts">
import { ref } from 'vue'
import TnDropdown from '../../packages/src/index.vue'

const openDropdown = ref<boolean>(false)

// 选项点击事件
const menuItemClickHandle = () => {
  openDropdown.value = true
}
</script>

<template>
  <view class="content">
    <view class="wrapper">
      <TnDropdown
        v-model:open="openDropdown"
        menu-content-gap="10"
        :overlay="false"
        shadow
      >
        <template #menu>
          <view class="dropdown-menu">
            <view class="dropdown-menu-item" @tap.stop="menuItemClickHandle">
              选项一
            </view>
            <view class="dropdown-menu-item" @tap.stop="menuItemClickHandle">
              选项二
            </view>
            <view class="dropdown-menu-item" @tap.stop="menuItemClickHandle">
              选项三
            </view>
          </view>
        </template>
        <view class="dropdown-content"> 下拉内容 </view>
      </TnDropdown>
      123
    </view>
  </view>
</template>

<style lang="scss" scoped>
.content {
  position: relative;
  width: 100%;
  height: 200vh;
  padding: 30rpx;

  .wrapper {
    position: relative;
    width: 100%;
    height: 100rpx;

    .dropdown-menu {
      position: relative;
      width: 100%;
      margin-top: 500rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .dropdown-menu-item {
        flex: 1;
        background-color: var(--tn-color-gray-light);
        padding: 20rpx 0rpx;
        display: flex;
        align-items: center;
        justify-content: center;

        & + .dropdown-menu-item {
          margin-left: 16rpx;
        }
      }
    }

    .dropdown-content {
      position: relative;
      width: 100%;
      height: 500rpx;
      background-color: #fff;
    }
  }
}
</style>
