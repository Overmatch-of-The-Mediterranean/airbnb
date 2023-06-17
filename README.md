# 爱彼迎项目

## 1.项目配置

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

   
