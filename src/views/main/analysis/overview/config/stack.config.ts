interface IItemsType {
  text: string
  stack: string
}
interface IStackType {
  ulItems: IItemsType[]
}
export const StackConfig: IStackType = {
  ulItems: [
    { text: '开发工具', stack: 'VScode' },
    { text: '编程语言', stack: 'TypeScript + JavaScript' },
    { text: '构建工具', stack: 'Vite' },
    { text: '前端框架', stack: 'Vue' },
    { text: '路由工具', stack: 'VueRouter' },
    { text: '状态管理', stack: 'Pinia' },
    { text: 'UI框架', stack: 'Element Plus' },
    { text: '可视化', stack: 'Echarts' },
    { text: '富文本', stack: 'WangEditor' },
    { text: '工具库', stack: '@vueuse/core + dayjs + countup.js' },
    { text: 'CSS预编译', stack: 'Less /Scss' },
    { text: 'HTTP工具', stack: 'Axios' },
    { text: '代码规范', stack: 'husky' },
    { text: '提交规范', stack: 'EditorConfig + Prettier + ESLint' },
    { text: '自动部署', stack: 'Centos + Jenkins + Nginx' }
  ]
}
