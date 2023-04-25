const modalConfig = {
  pageName: 'goods',
  title: '编辑商品',
  formItems: [
    {
      label: '商品名称',
      prop: 'name',
      type: 'input',
      placeholder: '请输入商品名称'
    },
    {
      label: '原价',
      prop: 'oldPrice',
      type: 'input',
      placeholder: '请输入原价'
    },
    {
      label: '现价',
      prop: 'newPrice',
      type: 'input',
      placeholder: '请输入现价'
    },
    {
      label: '状态',
      prop: 'status',
      type: 'select',
      options: [
        { name: '启用', id: 1 },
        { name: '禁用', id: 0 }
      ],
      placeholder: '请选择状态'
    },
    // {
    //   label: '图片',
    //   prop: 'imgUrl',
    //   type: 'custom',
    //   placeholder: '请上传图片',
    //   slotName: 'imgUrl'
    // },
    {
      label: '地址',
      prop: 'address',
      type: 'input',
      placeholder: '请输入地址'
    },
    {
      label: '收藏量',
      prop: 'favorCount',
      type: 'input',
      placeholder: '请输入收藏量'
    },
    {
      label: '销售量',
      prop: 'saleCount',
      type: 'input',
      placeholder: '请输入销售量'
    },
    {
      label: '库存量',
      prop: 'inventoryCount',
      type: 'input',
      placeholder: '请输入库存量'
    }
  ]
}

export default modalConfig
