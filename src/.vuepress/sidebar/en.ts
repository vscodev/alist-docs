import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/guide/": "structure",
  "/config/": "structure",
  "/faq/": "structure",
  "/": [
    "",
    {
      text: "Guide",
      icon: "iconfont icon-creative",
      prefix: "guide/",
      children: ["api/","install/", "drivers/", "advanced/"],
    },
    {
      text: "Config",
      icon: "iconfont icon-config",
      prefix: "config/",
      children: ["", "configuration"],
    },
    {
      text: "FAQ",
      icon: "iconfont icon-question",
      prefix: "faq/",
      children: ["howto", "why"],
    },
  ],
});
