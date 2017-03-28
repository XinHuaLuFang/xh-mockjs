const Mock = require("mockjs");
const data1 = Mock.mock({
  "name1|3": {
    a: "a",
    b: "b",
    c: "c",
    d: "d"
  }
});
console.log(JSON.stringify(data1, null, 4));

const data2 = Mock.mock({
  "name2|2-4": {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f"
  }
});
console.log(JSON.stringify(data2, null, 4));