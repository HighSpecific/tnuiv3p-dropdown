import { withNoopInstall } from '@tuniao/tnui-vue3-uniapp/utils'
import Dropdown from './index.vue'

export const TnDropdown = withNoopInstall(Dropdown)
export default TnDropdown

export * from './types'
export type { TnDropdownInstance } from './instance'
