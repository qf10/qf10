<template>
  <div class="category"><page-content :content-config="contentConfig" /></div>
</template>

<script setup lang="ts" name="category">
import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content-config'
</script>

<style scoped>
.category {
}
</style>
