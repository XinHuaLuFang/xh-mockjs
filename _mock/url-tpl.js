const axios = require("axios");
const Mock = require("mockjs");
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

mock.onGet("/users").reply(function(config) {
  const data = Mock.mock({
    "float|0.2-5": 1
  });
  return [200, config.params + data.float];
});

axios.get("/users", { params: 66 }).then(function(res) {
  console.log(res.data);
});