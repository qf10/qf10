<template>
  <div class="overview">
    <card title="关于" class="about">
      <span class="about_text"
        >此项目是基于Vue3、VueRouter、Pinia、Vite、Element-Plus、Typescript、Echarts5等技术搭建的一个后台管理系统，结合封装的思想，通过二次封装element-plus组件完成页面的开发，实现了页面的增删改查以及角色权限的管理。</span
      >
    </card>

    <card title="技术栈">
      <div class="technology_stack">
        <ul class="stack">
          <li v-for="item in StackConfig.ulItems" :key="item.text">
            {{ item.text }}：
            <span>{{ item.stack }}</span>
          </li>
        </ul>
      </div>
    </card>
  </div>
</template>

<script setup lang="ts" name="overview">
import card from '@/base-ui/card/card.vue'
import { StackConfig } from './config/stack.config'
</script>
<style scoped lang="less">
.overview {
  .about {
    margin-bottom: 15px;
    .about_text {
      line-height: 25px;
    }
  }

  .technology_stack {
    padding-left: 15px;
    li {
      line-height: 30px;
    }
  }
}
</style>
