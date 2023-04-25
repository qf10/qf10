import hyRequest from '..'
import type { IResponseType } from '../types/index'
import type { IStoryListType } from '../types/story'

// 获取故事列表
export function getStoryList(queryInfo?: any) {
  return hyRequest.post<IResponseType<IStoryListType>>({
    url: 'story/list',
    data: queryInfo
  })
}
// export function getRoleData(queryInfo: any) {
//   return hyRequest.post({
//     url: '/role/list',
//     data: queryInfo
//   })
// }
