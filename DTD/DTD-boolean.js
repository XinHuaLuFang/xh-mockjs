const Mock = require("mockjs");
const data1 = Mock.mock({
  "name1|1": true
});
console.log(JSON.stringify(data1, null, 4));

// true: 30%
const data2 = Mock.mock({
  "name2|3-7": true
});
console.log(JSON.stringify(data2, null, 4));

// true: 40%
const data3 = Mock.mock({
  "name3|4-6": true
});
console.log(JSON.stringify(data3, null, 4));