const contentConfig = {
  pageName: 'users',
  header: {
    title: '用户列表',
    btnTitle: '新建用户'
  },
  propsList: [
    { type: 'selection', label: '选择', width: 80 },
    { type: 'index', label: '序号', width: 60 },

    { type: 'normal', prop: 'name', label: '用户名', width: 120 },
    { type: 'normal', prop: 'realname', label: '真实姓名', width: 100 },
    { type: 'normal', prop: 'cellphone', label: '手机号码', width: 180 },
    { type: 'custom', prop: 'enable', label: '状态', slotName: 'status' },
    { type: 'time', prop: 'createAt', label: '创建时间' },
    { type: 'time', prop: 'updateAt', label: '更新时间' },

    { type: 'handler', label: '操作', width: 140 }
  ]
}

export default contentConfig
