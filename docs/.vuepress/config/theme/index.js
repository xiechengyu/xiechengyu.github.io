const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  nav,
  sidebar,
  // logo: '/head.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  valineConfig: {
    appId: 'S6YEO8oDGrXL7r2z7q1gpAF1-gzGzoHsz',// your appId
    appKey: 'zg6fmgb27u72WwssO2diwldD', // your appKey
  }
})