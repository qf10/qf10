<template>
  <div class="goods">
    <!-- <h2>goods</h2> -->
    <pageSearch
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @new-data-click="handleNewDataClick"
      @edit-data-click="handleEditDataClick"
    >
      <template #oldPrice="scope"> ￥{{ scope.row.oldPrice }} </template>
      <template #newPrice="scope"> ￥{{ scope.row.newPrice }} </template>
      <template #status="scope">
        <el-button size="small" plain :type="scope.row.status ? 'success' : 'danger'">{{
          scope.row.status ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
        />
      </template>
    </page-content>

    <page-modal ref="modalRef" :modal-config="modalConfig"> </page-modal>
  </div>
</template>

<script setup lang="ts" name="goods">
import PageContent from '@/components/page-content/page-content.vue'
import PageSearch from '@/components/page-search/page-search.vue'
import pageModal from '@/components/page-modal/page-modal.vue'

import contentConfig from './config/content-config'
import searchConfig from './config/search-config'
import modalConfig from './config/modal-config'

import usePageModal from '@/hooks/usePageModal'
import usePageContent from '@/hooks/usePageContent'

// content的逻辑处理
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

// modal的逻辑处理
const { modalRef, handleNewDataClick, handleEditDataClick } = usePageModal()
const handlePictureCardPreview = (data: any) => {
  console.log(data)
}
</script>

<style scoped>
.goods {
}
</style>
