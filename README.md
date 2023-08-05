# 图鸟 UI vue3 uniapp Plugins - 下拉框

![TuniaoUI vue3 uniapp](https://resource.tuniaokj.com/images/vue3/market/vue3-banner-min.jpg 'TuniaoUI vue3 uniapp')

[Tuniao UI vue3官方仓库](https://github.com/tuniaoTech/tuniaoui-rc-vue3-uniapp)

该组件一般用于点击之后在下拉框中展示内容的场景

## 组件安装

```bash
npm i tnuiv3p-tn-dropdown
```

## 组件位置

```bash
tnuiv3p-tn-dropdown/index.vue
```

## 平台差异说明

| App(vue) | H5  | 微信小程序 | 支付宝小程序 |  ...   |
| :------: | :-: | :--------: | :----------: | :----: |
|    √     |  √  |     √      |      √       | 适配中 |

## 基础使用

- 通过`open`属性控制下拉框的显示和隐藏

```vue
<script setup lang="ts">
import { ref } from 'vue'
import TnDropdown from 'tnuiv3p-tn-dropdown/index.vue'

const openDropdown = ref<boolean>(false)

// 选项点击事件
const menuItemClickHandle = () => {
  openDropdown.value = true
}
</script>

<template>
  <TnDropdown v-model:open="openDropdown">
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
</template>

<style lang="scss" scoped>
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
  background-color: var(--tn-color-white);
}
</style>
```

## 设置内容的高度

- 通过`height`属性可以设置下拉框内容容器的高度，当内容的高度比容器高度高是，内容则会滚动。

```vue
<template>
  <TnDropdown v-model:open="openDropdown" height="400">
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
</template>
```

## API

### Props

| 参数              | 说明                                                         | 类型    | 默认值  | 可选值  |
| ----------------- | ------------------------------------------------------------ | ------- | ------- | ------- |
| open/v-model:open | 下拉菜单打开状态                                             | Boolean | `false` | `true`  |
| bg-color          | 背景颜色，以tn开头使用图鸟内置的[颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/background.html#颜色展示) | String  | `#fff`  | -       |
| height            | 下拉框的高度，如果不设置则根据框的高度自适应，默认单位`rpx`  | String  | -       | -       |
| overlay           | 是否显示遮罩                                                 | Boolean | `true`  | `false` |
| border-radius     | 下拉框是否带圆角                                             | Boolean | `true`  | `false` |
| menu-content-gap  | 下拉菜单和内容之间的距离，默认单位`rpx`                      | String  | -       | -       |
| z-index           | zIndex                                                       | Number  | 999     | -       |

### Event

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| close  | 下拉框关闭时触发 | -        |
