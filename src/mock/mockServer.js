// mock/mockServer.js

import Mock from "mockjs";

import slides from "./slides.json";
import token from "./login.json";

Mock.mock("/mock/slides", {
  code: 200,
  data: slides,
});
Mock.mock("/mock/login", {
  code: 200,
  data: token,
});
