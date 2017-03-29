const Mock = require("mockjs");
const data = Mock.mock({
  "name": {
    first: "@FIRST",
    middle: "@FIRST",
    last: "@LAST",
    full: "@first @middle @last"
  }
});

console.log(JSON.stringify(data, null, 4));