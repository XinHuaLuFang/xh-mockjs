# Mock.mock
##### Mock.mock( rurl?, rtype?, template|function(options) )

### rurl
表示需要拦截的 `URL`，可以是 URL 字符串或 URL 正则。
```javascript
  /\/domain\/list\.json/
  
  '/domain/list.json'
```

### rtype
表示需要拦截的 `Ajax` 请求类型。例如 `GET` `POST` `PUT` `DELETE` 等。

### template
表示数据模版

### function(options)
表示用于生成响应数据的函数。
