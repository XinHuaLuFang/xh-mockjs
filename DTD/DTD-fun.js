const Mock = require("mockjs");
const data1 = Mock.mock({
  "name1": function() {
    return "I am a fun";
  }
});

console.log(JSON.stringify(data1, null, 4));