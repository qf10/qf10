import { getStoryList } from '@/service/story/story'
import { defineStore } from 'pinia'
import type { IStoryListType } from '@/service/types/story'
const useStoryStore = defineStore('story', {
  state: (): IStoryListType => ({
    list: [],
    totalCount: 0
  }),
  actions: {
    async getStoryList() {
      const res = await getStoryList()
      const { list, totalCount } = res.data
      this.list = list
      this.totalCount = totalCount
    }
  }
})
export default useStoryStore
