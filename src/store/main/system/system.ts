import {
  deletePageData,
  deleteUserData,
  editPageData,
  editUserData,
  getPageListData,
  getUserListData,
  newPageData,
  newUserData
} from '@/service/main/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './type'
import { ElMessage } from 'element-plus'
const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersTotalCount: 0,
    usersList: [],
    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    async getUserListDataAction(queryInfo: any) {
      // 1.请求用户列表数据
      const userListResult = await getUserListData(queryInfo)
      const { list, totalCount } = userListResult.data
      this.usersList = list
      this.usersTotalCount = totalCount
    },
    async newUserDataAction(userInfo: any) {
      // 1.创建用户数据
      const res = await newUserData(userInfo)
      console.log(res)

      // 2.请求新的数据
      this.getUserListDataAction({ offset: 0, size: 10 })
    },
    async deleteUserDataAction(id: number) {
      const res = await deleteUserData(id)
      console.log(res)
      this.getUserListDataAction({ offset: 0, size: 10 })
    },
    async editUserDataAction(id: number, userInfo: any) {
      const res = await editUserData(id, userInfo)
      console.log(res)
      this.getUserListDataAction({ offset: 0, size: 10 })
    },

    // 页面的网络请求
    async getPageListDataAction(pageName: string, queryInfo: any) {
      // 1.请求用户列表数据
      const pageListResult = await getPageListData(pageName, queryInfo)
      const { list, totalCount } = pageListResult.data
      console.log(pageListResult)
      this.pageList = list
      this.pageTotalCount = totalCount
    },
    async deletePageDataAction(pageName: string, id: number) {
      try {
        await deletePageData(pageName, id)
        ElMessage.success('删除成功')
        this.getPageListDataAction(pageName, { offset: 0, size: 10 })
      } catch (error) {
        ElMessage.warning('删除失败')
        console.log(error)
      }
    },
    async newPageDataAction(pageName: string, pageData: any) {
      try {
        await newPageData(pageName, pageData)
        ElMessage.success('创建成功')
        this.getPageListDataAction(pageName, { offset: 0, size: 10 })
      } catch (error) {
        ElMessage.warning('创建失败')
        console.log(error)
      }
    },
    async editPageDataAction(pageName: string, id: number, pageData: any) {
      try {
        await editPageData(pageName, id, pageData)
        ElMessage.success('编辑成功')
        this.getPageListDataAction(pageName, { offset: 0, size: 10 })
      } catch (error) {
        ElMessage.warning('编辑失败')
        console.log(error)
      }
    }
  }
})

export default useSystemStore
