const searchConfig = {
  pageName: 'users',
  formItems: [
    {
      label: '用户名',
      prop: 'name',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      label: '真实姓名',
      prop: 'realname',
      type: 'input',
      placeholder: '请输入真实姓名'
    },
    {
      label: '手机号码',
      prop: 'cellphone',
      type: 'input',
      placeholder: '请输入手机号码'
    },
    {
      label: '状态',
      prop: 'enable',
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
