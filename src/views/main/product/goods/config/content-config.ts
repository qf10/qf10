const contentConfig = {
  pageName: 'goods',
  header: {
    title: '商品列表',
    btnTitle: '新建商品'
  },
  propsList: [
    { type: 'normal', prop: 'name', label: '商品名称', width: '100' },
    { type: 'custom', prop: 'oldPrice', label: '原价', width: '80', slotName: 'oldPrice' },
    { type: 'custom', prop: 'newPrice', label: '现价', width: '80', slotName: 'newPrice' },
    { type: 'custom', prop: 'status', label: '状态', width: '80', slotName: 'status' },
    { type: 'custom', prop: 'imgUrl', label: '图片', width: '100', slotName: 'imgUrl' },
    { type: 'normal', prop: 'address', label: '地址', width: '80' },
    { type: 'normal', prop: 'favorCount', label: '收藏', width: '80' },
    { type: 'normal', prop: 'saleCount', label: '销售量', width: '80' },
    { type: 'normal', prop: 'inventoryCount', label: '库存', width: '80' },
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
