/**
 * Title : micro-app <br>
 * Description : 注册子应用配置
 *
 * @author  stupid
 * @version
 * @date    2021/6/25 16:51
 */

const mircoApps = [
  {
    name: 'sub-vue',
    entry: '//localhost:7100',
    activeRule: '/sub-vue',
    container: '#sulliViewport',
    props: {
      routerBase: '/sub-vue' // 下发路由给子应用、子应用根据该值去定义qiankun环境下的路由
    }
  },
  {
    name: 'sub-react',
    entry: '//localhost:7200',
    activeRule: '/sub-react',
    container: '#sulliViewport',
    props: {
      routerBase: '/sub-react'
    }
  }
]

export default mircoApps