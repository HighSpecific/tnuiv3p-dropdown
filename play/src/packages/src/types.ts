import { buildProps, isBoolean } from '@tuniao/tnui-vue3-uniapp/utils'

import type { ExtractPropTypes } from 'vue'

export const dropdownProps = buildProps({
  /**
   * @description 下拉菜单打开状态
   */
  open: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 下拉框背景颜色，如果使用tn开头则使用图鸟内置的颜色
   */
  bgColor: {
    type: String,
    default: '#fff',
  },
  /**
   * @description 下拉框的高度，如果不设置则根据框的高度自适应，默认单位rpx
   */
  height: String,
  /**
   * @description 是否显示遮罩
   */
  overlay: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 下拉框是否带圆角
   */
  borderRadius: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 下拉框的阴影
   */
  shadow: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 下拉菜单和内容之间的距离，默认单位rpx
   */
  menuContentGap: String,
  /**
   * @description 下拉容器zIndex
   */
  zIndex: {
    type: Number,
    default: 999,
  },
})

export const dropdownEmits = {
  'update:open': (value: boolean) => isBoolean(value),
  /**
   * @description 下拉框关闭时触发
   */
  close: () => true,
}

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>
export type DropdownEmits = typeof dropdownEmits
