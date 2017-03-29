// Mock.mock( template )
const Mock = require("mockjs");

const template = {
  "title": "mock demo",

  "string1|1-5": "★",
  "string2|3": "△",

  "number1|+1": 100,
  "number2|1-100": 100,
  "number3|1-100.1-5": 1,
  "number4|123.1-5": 1,
  "number5|123.3": 1,
  "number6|123.5": 123.001,

  "boolean1|1": true,
  "boolean2|1-2": true,

  "object1|2-3": {
    "10001": "北京",
    "10002": "天津",
    "10003": "河北",
    "10004": "山西"
  },
  "object2|1": {
    "20001": "上海",
    "20002": "江苏",
    "20003": "浙江",
    "20004": "安徽"
  },

  "array1|1": ["AMD", "CMD", "KMD", "UMD"],
  "array2|1-5": ["Mockjs"],
  "array3|3": ["Mockjs"],

  "function": function() {
    return this.title;
  }
};
const data = Mock.mock({template});

console.log(JSON.stringify(data, null, 4));