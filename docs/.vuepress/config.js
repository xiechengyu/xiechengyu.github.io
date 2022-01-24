const themeConfig = require('./config/theme/')

module.exports = {
  title: "谢成昱的博客",
  description: 'day day up',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/icon.jpg' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-140886914-1' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['script', {}, `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?3fc520be252c5447a7ec87be267a7cb1";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
     `
    ],
    ['script', {}, `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-140886914-1');
     `
    ]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}  