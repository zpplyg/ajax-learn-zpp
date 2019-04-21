###1.Ajax出现之前
程序员都是怎么做的呢？
 都是服务器直接拼接html代码，直接返回给浏览器，浏览器直接渲染
 前端的工作：只需要根据效果图，提供静态页面即可，所有工作由后端拼接完成
 本次讲解用的是node做服务器
  >1.npm init生成一个node项目
  >2.用yarn add express 添加express模块
  >3.新建一个server.js复制以下代码，服务器搭建完毕

```
const express = require("express");
const app = express();
/**前后端分离之前，都是由后端直接生成html代码返回给浏览器的所以初期的页面很丑 */
let msg = `前后端分离之前，都是由后端直接生成html代码返回给浏览器的所以初期的页面很丑`;
let html = `<div style='color:red;width:200px;height:100px;border:1px  dashed #333;'>${msg}</div>`;
app.get("/", (req, res) => res.send(html));

app.listen(3000, () => console.log("Example app listening on port 3000!"));

```


###2.原生的XHR对象-ajax
XMLHttpRequest 是 AJAX 的基础。

XmlHttpRequest 术语缩写为XHR，中文可以解释为可扩展超文本传输请求。 
XMLHttpRequest 对象可以在不向服务器提交整个页面的情况下，实现局部更新网页。 
```
//创建xhr对象
var xhr =new XMLHttpRequest();
//发起请求
xhr.open('GET||POST','url','async');
//设置requestHeaders，主要用来设置token
//还有请求头Content-type：
//application/x-www-form-urlencoded(form表单类型)
//||application/json（复杂的类型比如{a:[{b:{},c:[1,//2,3]}]}）
xhr.setRequestHeaders('key','value');
//获取数据
xhr.onreadystatechange=function(){
  if(xhr.readyState==4&&xhr.status==200){
    var result = xhr.responseText;
    console.log(result);
  }
}

xhr.send('string参数：?name=ppx&age=18');

```

###3.封装原生XHR对象-ajax
对xhr请求方法通用的逻辑进行封装，不通用的部分进行参数化。
比如请求时xhr的请求流程都是open，setRequestHeaders,onreadystatechange,send这些都是死的流程。

不同的是：
>1.请求的方法
>2.请求的地址
>3.请求成功后处理的逻辑
>4.请求失败后处理的逻辑
>5.headers不同


假如封装的方法名叫做fetchData那么封装的util应该是
```
function fetchData(string:'get||post',string:url,function:onSuccess,function:onError,string:headers){
  ...
}
```
###4.Jquery-ajax
步骤：
>1.引入JQUERY
>2.使用$.ajax({})调用

...

###5.axios-ajax
axios是一个第三方封装的ajax框架，底层用的是xhr。基于Promise 的ajax框架。

https://www.npmjs.com/package/axios

```
    (function() {
      axios
        .get("/getMsg")
        .then(function(response) {
          console.log(response);
          //axios返回的自己封装的对象，后台返回的数据都在这个对象的data属性中
          document.getElementById("msgDiv").innerHTML = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    })();
```

###6.axios-封装-ajax
略

###7.axios-react项目
项目前后端分离架构
>1.front-end项目：前端项目，使用的是react的create-react-app脚手架直接生成的。
>2.node-server项目：后端项目，提供接口与数据保证页面数据接口正常。

######1.实现一个后端返回一个字符串，渲染到react的组件上
步骤：
1.在node-server中写一个接口/getMsg,返回一个字符串
2.在front-end中写一个组件AxiosFetch.js，在组件中请求node-server中接口，拉取数据，渲染到组件中。
