const contentConfig = {
  pageName: 'story',
  header: {
    title: '故事列表'
  },
  propsList: [
    { type: 'index', label: '序号', width: 60 },
    { type: 'normal', prop: 'title', label: '故事标题', width: '180px' },
    { type: 'normal', prop: 'content', label: '故事内容' },
    { type: 'time', prop: 'createAt', label: '创建时间', width: '180px' }
  ]
}

export default contentConfig
