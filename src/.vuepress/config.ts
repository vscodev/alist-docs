import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/alist-docs/",

  locales: {
    "/": {
      lang: "en-US",
      title: "AList Docs",
      description: "Documentation for alist v3",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "AList文档",
      description: "AList v3的文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
