6. # 爱彼迎项目

   ## 一.项目配置
   
   1.craco(相当于vue.config,js, 会自动合并webpack的配置)配置别名
   
   > （1）.npm i @craco/craco
   >
   > （2）.更改package.json中的启动命令
   >
   > 如果遇到版本提取stackoverflow/github issue上查找
   
   
   
   2.less配置
   
   > （1）.npm i craco-less@2.1.0-alpha.0
   >
   > 如果遇到版本提取stackoverflow/github issue上查找
   
   
   
   配置代码
   
   ```javascript
   const path = require('path')
   const CracoLessPlugin = require('craco-less');
   const resolve = pathName => path.resolve(__dirname,pathName)
   
   module.exports = {
       plugins: [
           {
             plugin: CracoLessPlugin
           },
         ],
       webpack:{
           alias:{
               "@":resolve('src'),
               "components":resolve('src/components')
           }
       }
   }
   ```
   
   
   
   3. 样式配置
   
      > （1）.npm i normalize.css
      >
      > （2）.然后自己对一些样式进行重置reset.css
   
      
   
   4. router的搭建和配置
   
      > (1). npm i react-router-dom
   
      
   
   5. 项目状态管理redux的配置
   
      > (1). npm i @reduxjs/toolkit  react-redux 
   
      
   
   6. axios的封装
   
      ```javascript
      import axios from "axios";
      import { BASE_URL,TIMEOUT } from "./config";
      
      class HyRequest {
          constructor(baseURL,timeout){
              this.instance = axios.create({
                  baseURL,
                  timeout
              })
      
              this.instance.interceptors.response.use(res=>{
                  return res.data
              },err=>{
                  return err
              })
          }
      
          request(config){
              return this.instance.request(config)
          }
      
          get(config) {
              return this.request({...config,method:'get'})
          }
      
          post(config) {
              return this.request({...config,method:'post'})
          }
      }
      
      export default new HyRequest(BASE_URL,TIMEOUT)
      ```
   
      
   
   
   
   ## 二. 项目头部
   
   1. svg的两种使用方式
   
      > (1). 每个svg都放在.svg的后缀文件中，然后通过src或background通过路径引用
      >
      > (2). 直接把svg写在标签里面(相当于直接嵌入到网页中，加载更快)，如，可以把它封装成组件然后引入使用
      >
      > (3). 字符串到对象的转化函数
      >
      > ```javascript
      > function styleStrToObject(styleStr) {
      >  const obj = {}
      >  const s = styleStr.toLowerCase().replace(/-(.)/g, function (m, g) {
      >    return g.toUpperCase();
      >  }).replace(/;\s?$/g,"").split(/:|;/g)
      >  for (var i = 0; i < s.length; i += 2) {
      >    obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"")
      >  }
      > 
      >  return obj
      > }
      > 
      > export default styleStrToObject
      > ```
      >
      > 
   
   
   
   2.配置主题
   
   > 定义主题
   >
   > ```javascript
   > const theme = {
   >  color:{
   >      primary:'#ff385c',
   >      secondary:'#00848A'
   >  },
   >  ...
   >  ...
   > 
   > }
   > 
   > export default theme
   > ```
   >
   > 导入主题
   >
   > ```javascript
   > import { ThemeProvider } from 'styled-components';
   > import theme from './assets/theme';
   > 
   > <ThemeProvider theme={theme}>
   >  <App />
   > </ThemeProvider>
   > 
   > ```
   >
   > 使用主题
   >
   > ```javascript
   > ${props => props.theme.color.primary}
   > ```
   
   
   
   3.做弹窗时，记得阻止弹窗的冒泡或者使用捕获阶段。
   
   
   
   4.webpack环境中引入图片注意事项(Vue中可以直接引入，Vue底层做好了转化)
   
   > 若<img src="C:\Users\秦世权\Desktop\@\assets\img\cover_01.jpeg" />或url('@/assets/img/cover_01.jpeg')方式引入，webpack打包时识别不出来，需要这样写(有两种写法)
   >
   > ```javascript
   > // 第一种方式
   > background: url(${require('@/assets/img/cover_01.jpeg')}) center/cover;
   > 
   > // 第二种方式
   > import bannerImg from '@/assets/img/cover_01.jpeg'；
   > background: url(${bannerImg}) center/cover;
   > 
   > ```
   >
   > 
   
   
   
   # 三.首页
   
   1.左右间距的技巧
   
   > 每个item设置padding：xpx，并设置box-sizing：border-box。然后对整个列表设置margin负值
   >
   > ```css
   > box-sizing: border-box;
   > width: 25%;
   > padding: 8px;
   > ```
   >
   > ```css
   > margin:0 -8px
   > ```
   
   
   
   2.图片宽高比不相同时如何处理
   
   > (1).父元素容器使用padding将其上面留下大小相同的空间
   >
   > ```css
   > 	box-sizing: border-box;
   >  	padding: 66.66% 8px 0;
   > ```
   >
   > (2).子元素img需要使用绝对定位，使其脱离标准流，以便可以直接覆盖在预留的空白空间上
   >
   > ```css
   > 	position: absolute;
   >  	left: 0;
   >  	top: 0;
   >  	width: 100%;
   >  	height: 100%;
   > ```
   
   
   
   3.material ui组件库的配置
   
   > material组件库底层主要使用emotion库实现，如果在项目中要使用styled-components开发，则需要这样配置
   >
   > ```sh
   > npm install @mui/material @emotion/react @emotion/styled @mui/styled-engine-sc styled-components
   > ```
   >
   > 然后直接引入组件就可以使用了
   
   
   
   4.antd组件库的配置
   
   > npm i antd，然后直接引入 import "antd/dist/antd"就可以直接使用
   >
   > antd主要使用less进行开发，若想自己配置主题色，需要在webpack中配置
   >
   > ```javascript
   > module.exports = {
   > // less
   > plugins: [
   >  {
   >    plugin: CracoLessPlugin,
   >    options: {
   >      lessLoaderOptions: {
   >        lessOptions: {
   >          modifyVars: {  }, // 定义主题色
   >          javascriptEnabled: true,
   >        },
   >      },
   >    },
   >  },
   > ],
   > 
   > ```
   >
   > 另外还需要引入 import "antd/dist/antd.less"，这样就可以覆盖组件库的主题色
   
   
   
   5.选项卡初始化方法
   
   > 方法一: 在数据为空时，阻止渲染，这里也相当于一个小优化，只渲染一次
   >
   > ```jsx
   > { isEmptyO(discount) && <HomeSectionV2 infoData={discount} /> } 
   > 
   > ```
   >
   > ```javascript
   > const initialName = Object.keys(infoData.dest_list)[0]
   > ```
   >
   > 
   >
   > 方法二：使用useEffect，但是性能低，会渲染三次(空数据依次，请求数据后一次，修改数据后一次)
   >
   > ```javascript
   > useEffect(()=>{
   >  setName(initialName)
   > },[infoData])
   > ```
   
   
   
   6.轮播组件封装
   
   > 1.如何控制移动的距离（使用元素的offsetWidth属性获取距离，距离是其到最近且设置有定位的祖先元素最左边的距离）
   >
   > ```javascript
   > 	const [posIndex,setPosIndex] = useState(0)
   >  const [showLeft,setShowLeft] = useState(false)
   >  const [showRight,setShowRight] = useState(false)
   >  const scrollContentRef = useRef()
   >  // 使用useRef多次更新只赋值一次的特性，来存储totalDistance的值
   >  const totalDistanceRef = useRef()
   > 
   >  useEffect(()=>{
   >      // 滑动窗口宽度
   >      const scrollWidth = scrollContentRef.current.scrollWidth
   >      // 容器宽度
   >      const clientWidth = scrollContentRef.current.clientWidth
   > 
   >      // 用来判断左右按钮何时隐藏的值
   >      const totalDistance = scrollWidth - clientWidth
   >      totalDistanceRef.current = totalDistance
   >      setShowRight(totalDistance > 0)
   >  },[props.children])
   > 
   >  function controlClickHandle (isRight){
   >      // 每次点击改变posIndex标识切换到不同元素 
   >      const newIndex = isRight ? posIndex + 1 : posIndex - 1
   >      // 获取得到的新元素
   >      const newEle = scrollContentRef.current.children[newIndex]
   >      // 获取新元素距离左边界的距离，然后赋值进行移动。
   >      const newOffsetLeft = newEle.offsetLeft
   >      scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
   >      // 移动完后，设置新的posIndex，以便下次移动
   >      setPosIndex(newIndex)
   >      // 控制左右按钮显示
   >      setShowRight(totalDistanceRef.current > newOffsetLeft)
   >      setShowLeft(newOffsetLeft > 0)
   >  }
   > ```
   >
   > 
   
   
   
   
   
    
