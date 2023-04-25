interface IModalConfigType {
  pageName: string
  title: string
  formItems: IFormItemsType[]
}
interface IFormItemsType {
  label: string
  prop: string
  type: string
  placeholder?: string
  options?: any[]
}
const modalConfig: IModalConfigType = {
  pageName: 'users',
  title: '新建用户',
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
      label: '登录密码',
      prop: 'password',
      type: 'input',
      placeholder: '请输入登录密码'
    },
    {
      label: '手机号码',
      prop: 'cellphone',
      type: 'input',
      placeholder: '请输入手机号码'
    },
    {
      label: '角色',
      prop: 'roleId',
      type: 'select',
      options: [],
      placeholder: '请输入角色'
    },
    {
      label: '部门',
      prop: 'departmentId',
      type: 'select',
      options: [],
      placeholder: '请输入部门'
    }
  ]
}

export default modalConfig
