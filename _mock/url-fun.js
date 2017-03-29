const axios = require("axios");
const Mock = require("mockjs");
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

const data = Mock.mock({
  "name": /[a-z][A-Z][0-9]/
});

mock.onGet("/users").reply(200, data);

axios.get("/users").then(function(res) {
  console.log(res.data);
});