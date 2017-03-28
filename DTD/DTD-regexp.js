const Mock = require("mockjs");
const data1 = Mock.mock({
  "regexp1": /[a-z][A-Z][0-9]/,
  "regexp2": /\w\W\s\S\d\D/,
  "regexp3": /\d{5,10}/
});

console.log(JSON.stringify(data1, null, 4));