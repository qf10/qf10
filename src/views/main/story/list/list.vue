<template>
  <div class="list">
    <page-content :content-config="contentConfig" />
  </div>
</template>

<script setup lang="ts" name="story">
import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'
import useStoryStore from '@/store/main/story/story'
import { storeToRefs } from 'pinia'

// const storyStore = useStoryStore()
// storyStore.getStoryList()
// const { list, totalCount } = storeToRefs(storyStore)
// console.log(list, totalCount)
</script>

<style scoped>
.list {
}
</style>
