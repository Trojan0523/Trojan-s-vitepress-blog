const base = process.env,NODE_ENV = 'production'
module.exports = {
    title: 'Trojan`s的博客小站',
    description: 'Trojan`s VitePress试玩',
    lang: 'zh-CN',
    themeConfig: {
      repo: '',
      algolia: {
          appId: 'NWS0JWCVFP',
          apiKey: '4d159b1efbfab298ecad988823715be2',
          indexName: 'PUKHUNGYU_blog',
        },
        markdown: {
          anchor: { permalink: false },
          toc: { includeLevel: [1, 2] },
          config: (md) => {
            md.use(require('markdown-it'))
          }
        },
        nav: [
          {text: '指南', link: '/'},
          {text: '博客原址', link: 'https://github.com/Trojan0523/weekly_notes'}
        ],
      },
  }