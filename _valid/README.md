# Mock.valid()
###### Mock.valid( template, data )
校验 `data` 是否与 `template` 匹配，若匹配则返回一个空数组。
```javascript
const Mock = require("mockjs");

const tempalte = Mock.mock({
  "name|3": "a"
});
const data = {
  "name": "aaa"
};

const res = Mock.valid(tempalte, data);
if (res.length === 0) {
  console.log("匹配");
} else {
  console.log("不匹配");
}
```