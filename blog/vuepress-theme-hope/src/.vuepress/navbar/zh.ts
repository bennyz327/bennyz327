import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首頁",
    link: "/",
    icon: "ic:round-home",
  },
  {
    text: "新文章",
    link: "/tag/new/",
    icon: "ic:outline-new-releases",
  },
  {
    text: "精選文章",
    icon: "ic:baseline-recommend",
    link: "/tag/pin/",
  },
]);
