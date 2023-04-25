import { storeToRefs } from 'pinia'
import useMainStore from '@/store/main/main'
import modalConfig from '../config/modal.config'
import { computed } from 'vue'

export default function useSelectOptionsHooks() {
  return computed(() => {
    const mainStore = useMainStore()
    const { entireDepartments, entireRoles } = storeToRefs(mainStore)
    const rolesItem = modalConfig.formItems.find((item) => {
      return item.prop === 'roleId'
    })
    const departmentsItem = modalConfig.formItems.find((item: any) => {
      return item.prop === 'departmentId'
    })
    departmentsItem!.options = entireDepartments.value.map((item: any) => {
      return { id: item.id, name: item.name }
    })
    rolesItem!.options = entireRoles.value.map((item) => {
      return { id: item.id, name: item.name }
    })
    return modalConfig
  })
}
