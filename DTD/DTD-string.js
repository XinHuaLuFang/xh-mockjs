const Mock = require("mockjs");
const data1 = Mock.mock({
  "name|2-5": "a"
});

console.log(JSON.stringify(data1, null, 4));

const data2 = Mock.mock({
  "name|5": "b"
});
console.log(JSON.stringify(data2, null, 4));