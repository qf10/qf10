const searchConfig = {
  pageName: 'goods',
  formItems: [
    {
      label: '商品名称',
      prop: 'name',
      type: 'input',
      placeholder: '请输入商品名称'
    },
    {
      label: '状态',
      prop: 'status',
      type: 'select',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ],
      placeholder: '请选择状态'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      type: 'date-picker',
      placeholder: '请选择创建时间范围'
    }
  ]
}

export default searchConfig
