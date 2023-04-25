<template>
  <div class="user">
    <!-- 1.搜索区域 -->
    <page-search
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
      :search-config="searchConfig"
    />

    <!-- 2.展示区域 -->
    <page-content
      ref="contentRef"
      @new-data-click="handleNewDataClick"
      @edit-data-click="handleEditDataClick"
      :content-config="contentConfig"
    >
      <template #status="scope">
        <el-button size="small" plain :type="scope.row.enable ? 'success' : 'danger'">{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template>
    </page-content>

    <!-- 3.新建和编辑 -->
    <page-modal
      ref="modalRef"
      :modal-config="modalConfig"
      @new-data-click="handleNewDataClick"
      @edit-data-click="handleEditDataClick"
    />
  </div>
</template>

<script setup lang="ts" name="user">
// import PageSearch from './c-cpns/page-search.vue'
// import PageContent from './c-cpns/page-content.vue'
// import PageModal from './c-cpns/page-modal.vue'
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'

import usePageModal from '@/hooks/usePageModal'
import usePageContent from '@/hooks/usePageContent'
import useSelectOptions from './hooks/useSelectOptions'
// import { ref } from 'vue'

// 部门和角色的数据
const modalConfig = useSelectOptions()

// // 1.重置功能
// const contentRef = ref<InstanceType<typeof PageContent>>()
// function handleQueryClick(searchInfo: any) {
//   contentRef.value?.fetchUserListData(searchInfo)
// }
// function handleResetClick() {
//   contentRef.value?.handleResetClick()
// }

// // 2.新建和编辑数据
// const modalRef = ref<InstanceType<typeof PageModal>>()
// function handleNewDataClick() {
//   modalRef.value?.setDialogVisible()
// }
// function handleEditDataClick(data: any) {
//   modalRef.value?.setDialogVisible(false, data)
// }

// content的逻辑处理
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

// modal的逻辑处理
const { modalRef, handleNewDataClick, handleEditDataClick } = usePageModal()
</script>

<style lang="less" scoped></style>
