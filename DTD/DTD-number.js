const Mock = require("mockjs");
const data1 = Mock.mock({
  "number1|1-100.0-4": 1
});

console.log(JSON.stringify(data1, null, 4));

const data2 = Mock.mock({
  "number2|123.1-4": 1
});

console.log(JSON.stringify(data2, null, 4));

const data3 = Mock.mock({
  "number3|123.4": 1
});

console.log(JSON.stringify(data3, null, 4));

const data4 = Mock.mock({
  "number4|123.4": 1.11
});

console.log(JSON.stringify(data4, null, 4));