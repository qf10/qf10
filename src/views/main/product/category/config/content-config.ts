const contentConfig = {
  pageName: 'category',
  header: {
    title: '商品分类',
    btnTitle: '新建分类'
  },
  propsList: [
    { type: 'normal', prop: 'name', label: '商品名称', width: '140' },

    {
      type: 'time',
      prop: 'createAt',
      label: '创建时间',
      width: '200'
    },
    {
      type: 'time',
      prop: 'updateAt',
      label: '更新时间',
      width: '200'
    },
    {
      type: 'handler',
      label: '操作',
      width: '140'
    }
  ]
}
export default contentConfig
