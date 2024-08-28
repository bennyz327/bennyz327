import { defineUserConfig } from "vuepress";
import { removeHtmlExtensionPlugin } from "vuepress-plugin-remove-html-extension";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-TW",
      title: "斑鳩的技術雜記",
      description: "斑鳩的技術雜記",
    },
    // TODO 英文版
    // "/en/": {
    //   lang: "en-US",
    //   title: "Benny's Blog",
    //   description: "Benny's Blog - Technology and Life",
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins:[
    removeHtmlExtensionPlugin(),
  ]
});
