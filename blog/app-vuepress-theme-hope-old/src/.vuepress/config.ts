import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { removeHtmlExtensionPlugin } from "vuepress-plugin-remove-html-extension";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-TW",
      title: "斑鳩的技術生活",
      description: "斑鳩的技術生活",
    },
    "/en/": {
      lang: "en-US",
      title: "Benny's Blog",
      description: "Benny's Blog - Technology and Life",
    },
  },

  theme,

  // 新增這個外掛後後直些訪問 /benny-blog/posts/資料夾 的網頁中，原本會顯示文章列表，現在會是空的
  plugins:[
    removeHtmlExtensionPlugin(),
  ]

  // shouldPrefetch: false, // 使用 pwa 時，設定為 false
});
