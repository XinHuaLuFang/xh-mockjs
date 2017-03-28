const Mock = require("mockjs");
const data1 = Mock.mock({
  "name1|1": ["a", "b", "c", "d"]
});

console.log(JSON.stringify(data1, null, 4));

const data2 = Mock.mock({
  "name2|+1": ["a", "b", "c", "d"]
});
console.log(JSON.stringify(data2, null, 4));

const data3 = Mock.mock({
  "name3|1-3": ["a", "b", "c", "d"]
});
console.log(JSON.stringify(data3, null, 4));

const data4 = Mock.mock({
  "name4|2": ["a", "b"]
});
console.log(JSON.stringify(data4, null, 4));