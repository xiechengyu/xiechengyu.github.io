const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./config/navbar");

module.exports = config({
  title: "xiechengyu的博客",
  description: "welcome",

  head: [
    ['script', {}, `
        (function() {
        // 引入谷歌,不需要可删除这段
        var hm1 = document.createElement("script");
        hm1.src = "https://www.googletagmanager.com/gtag/js?id=UA-140886914-1";
        var s1 = document.getElementsByTagName("script")[0]; 
        s1.parentNode.insertBefore(hm1, s1);
        })();
        // 谷歌加载,不需要可删除
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-140886914-1');
    `]
  ],

  shouldPrefetch: (filename) => !filename.includes("page-"),

  dest: "dist",

  locales: {
    "/": { lang: "zh-CN" },
  },

  themeConfig: {
    logo: "https://avatars.githubusercontent.com/u/41778797?v=4",
    author: "xiechengyu",
    editLinks: false,
    repo: "https://github.com/xiechengyu/xiechengyublog.git",
    repoDisplay: false,
    docsDir: "src",
    docsBranch: "main",
    nav: navBarConfig.zh,
    blog: {
      sidebarDisplay: "mobile",
      links: {
        Gmail: "mailto:xiechengyu008@gmail.com",
        Github: "https://github.com/xiechengyu"
      },
    },

    copyright: {
      status: "global",
    },

    mdEnhance: {
      align: true,
      demo: true,
      flowchart: true,
      footnote: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
    },

    comment: {
      type: "valine",
      appId: "S6YEO8oDGrXL7r2z7q1gpAF1-gzGzoHsz", // your appId
      appKey: "zg6fmgb27u72WwssO2diwldD", // your appKey
    },

    footer: {
      copyright: "Copyright © 2018-present xiechengyu",
      display: true,
    },

    hostname: "https://xiechengyu.github.io/",

    algolia: {
      apiKey: "064a2d15d1a0f7b69df3ef1458d1a510",
      indexName: "mrhope",
    },

    algoliaType: "full",

    git: {
      timezone: "Asia/Shanghai",
      contributor: false
    },

    pwa: {
      favicon: "https://avatars.githubusercontent.com/u/41778797?v=4",
      themeColor: "#5c92d1",
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: "https://avatars.githubusercontent.com/u/41778797?v=4",
        statusBarColor: "black",
      },
      msTile: {
        image: "https://avatars.githubusercontent.com/u/41778797?v=4",
        color: "#ffffff",
      },
    },
  },
  plugins: [
    ['vuepress-plugin-baidu-tongji-analytics', {
      key: '3fc520be252c5447a7ec87be267a7cb1',
      dev: true
    }],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-140886914-1' // UA-00000000-0
      }
    ]
  ]
});
