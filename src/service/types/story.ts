interface IStoryItemsType {
  id: number
  title: string
  content: string
  createAt: string
}
export interface IStoryListType {
  list: IStoryItemsType[]
  totalCount: number
}
