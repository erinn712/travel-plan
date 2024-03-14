module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 解決雙引號報錯問題
    quotes: "off",
    semi: "off",
    "comma-dangle": "off",
    // 解決multi-word-component-names報錯
    "vue/multi-word-component-names": "off",
  },
};
