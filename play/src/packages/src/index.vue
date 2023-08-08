<script lang="ts" setup>
import TnOverlay from '@tuniao/tnui-vue3-uniapp/components/overlay/src/overlay.vue'
import { dropdownEmits, dropdownProps } from './types'
import { useDropdown, useDropdownCustomStyle } from './composables'

const props = defineProps(dropdownProps)
const emits = defineEmits(dropdownEmits)

const { ns, contentClass, contentStyle } = useDropdownCustomStyle(props)
const { firstInit, openContent, closeDropdown } = useDropdown(props, emits)
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<template>
  <view :class="[ns.b(), ns.is('open', openContent)]" :style="{ zIndex }">
    <view :class="[ns.e('menu')]">
      <slot name="menu" />
      <view
        :class="[
          ns.e('content'),
          contentClass,
          ns.is('round', borderRadius),
          ns.is('first-init', firstInit),
          { 'tn-shadow': shadow },
        ]"
        :style="contentStyle"
      >
        <scroll-view :class="[ns.em('content', 'scroll-view')]" scroll-y>
          <slot />
        </scroll-view>
      </view>
    </view>

    <TnOverlay
      :show="openContent"
      :opacity="!overlay ? 0 : 0.5"
      :duration="250"
      :z-index="zIndex - 1"
      @click="closeDropdown"
    />
  </view>
</template>

<style lang="scss" scoped>
@import './theme-chalk/index.scss';
</style>
