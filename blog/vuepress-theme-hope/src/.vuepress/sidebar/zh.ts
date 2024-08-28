import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "回到首頁",
      link: "/",
      icon: "ic:round-home",
    },
    {
      text: "網站地圖",
      icon: "mdi:sitemap",
      prefix: "posts",
      children: "structure",
    },
  ],
});
