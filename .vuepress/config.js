module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
  ],
  title: 'VuePress',
  description: 'This is a vuepress test',
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3, 4] },
    extendMarkdown: md => {
      md.set({html: true})
      md.use(require("markdown-it-katex"))
    }
  },
  themeConfig: {
    logo: '/assets/air.png',
    nav: [
      { text: 'Home', link: '/home/' },
      { text: 'Guide', link: '/foo/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
      ['/', 'Home'],
      ['/foo/','Foo'],
      ['/bar/', 'Bar'],
    ],
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@guide': '/docs/guide'
      }
    }
  },
  base: '/vuepress',
  plugins: [
    ['vuepress-plugin-right-anchor', {
      showDepth: 1,
      ignore: [],
      expand: {
        trigger: 'click',
        clickModeDefaultOpen: true
      },
      customClass: 'customClass'
    }]
  ]
}