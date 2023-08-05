import { nextTick, onMounted, ref, watch } from 'vue'

import type { SetupContext } from 'vue'
import type { DropdownEmits, DropdownProps } from '../types'

export const useDropdown = (
  props: DropdownProps,
  emits: SetupContext<DropdownEmits>['emit']
) => {
  // 标记是否为第一次初始化
  const firstInit = ref<boolean>(true)
  const openContent = ref<boolean>(false)
  watch(
    () => props.open,
    (val) => {
      openContent.value = val
    },
    {
      immediate: true,
    }
  )

  onMounted(() => {
    nextTick(() => {
      firstInit.value = false
    })
  })

  // 关闭下拉框
  const closeDropdown = () => {
    emits('update:open', false)
    if (props.open === undefined) openContent.value = false
    emits('close')
  }

  return {
    firstInit,
    openContent,
    closeDropdown,
  }
}
