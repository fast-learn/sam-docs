module.exports = {
  title: '抖音/B站搜索：前端Sam老师',
  base: '/sam-docs/',
  description: '前端Sam老师专属官网',
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3] },
    lineNumbers: true,
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.gif` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Sam老师简历', link: '/resume/' },
      { text: '前端知识分享', link: '/learn/' },
      { text: '前端原创课程', link: '/buy/' },
      // // { text: '补充阅读', link: '/column/' },
      // // { text: '习题', link: '/exercise/' },
      // { text: '答疑汇总', link: '/qa/' },
      // { text: '学习笔记', link: '/reader/' },
      // // { text: '精彩活动', link: '/activities/' },
      // { text: '点赞支持', link: 'https://github.com/sam9831/mpvue-imooc-ebook-docs' }
    ],
    navbar: true,
    sidebar: {
      collapsable: false,
      '/learn/': [
        {
          title: '总览',
          collapsable: false,
          children: [
            '',
          ],
        },
        {
          title: '前端发布系列',
          collapsable: false,
          children: [
            'fe_publish/fast_publish',
          ],
        },
      ],
      '/buy/': [
        {
          title: '毕业系列',
          collapsable: false,
          children: [
            'design/',
          ],
        },
      ]
    },
  },
};
