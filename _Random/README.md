# Mock.Random
###### Mock.Random 的方法在数据模版中称为 `占位符`。
```javascript
const Random = Mock.random;
Random.email();
// 等价于
Mock.mock("@email");
```
### 方法
|Type|Method|
|------|------|
|Basic|`boolean` `natural` `integer` `float` `character` `string` `range` `date` `time` `datetime` `now`|
|Image|`image` `dataImage`|
|Color|`color`|
|Text|`paragraph` `sentence` `word` `title` `cparagraph` `csentence` `cword` `ctitle`|
|Name|`first` `last` `name` `cfirst` `clast` `cname`|
|Web|`url` `domain` `email` `ip` `tld`|
|Address|`area` `region`|
|Helper|`capitalize` `upper` `lower` `pick` `shuffle`|
|Miscellaneous|`guid` `id`|

### 扩展
`Mock.Random` 中的方法与数据模版的 `@占位符` 一一对应，在需要时还可以为 `Mock.Random` 扩展方法，然后在数据模版中通过 `@扩展方法` 引用。例如：
```javascript
const Random = Mock.Random;
Random.extend({
  constellation: function() {
    const constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'];
    return this.pick(constellations);
  }
});
Random.constellation();
// => "水瓶座"
Mock.mock("@CONSTELLATION");
// => "天蝎座"
Mock.mock({
  constellation: "@CONSTELLATION"
});
// => { constellation: "射手座" }
```