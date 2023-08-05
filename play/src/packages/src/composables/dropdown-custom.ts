import { computed, toRef } from 'vue'
import { useComponentColor, useNamespace } from '@tuniao/tnui-vue3-uniapp/hooks'
import { formatDomSizeValue } from '@tuniao/tnui-vue3-uniapp/utils'

import type { CSSProperties } from 'vue'
import type { DropdownProps } from '../types'

export const useDropdownCustomStyle = (props: DropdownProps) => {
  const ns = useNamespace('dropdown')
  // 解析背景颜色
  const [bgColorClass, bgColorStyle] = useComponentColor(
    toRef(props, 'bgColor'),
    'bg'
  )

  // 内容对应的类
  const contentClass = computed<string>(() => {
    const cls: string[] = []

    if (bgColorClass.value) {
      cls.push(bgColorClass.value)
    }

    return cls.join(' ')
  })

  // 内容对应的样式
  const contentStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (bgColorStyle.value) {
      style.backgroundColor = bgColorStyle.value
    }

    if (props.height) {
      style.height = formatDomSizeValue(props.height)
    }

    if (props.menuContentGap) {
      style.top = `calc(100% + ${formatDomSizeValue(props.menuContentGap)})`
    }

    return style
  })

  return {
    ns,
    contentClass,
    contentStyle,
  }
}
