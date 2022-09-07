---
home: true
title: 'VuePress'
heroImage: ''
heroText: 这是 VuePress 的静态站点
tagline: 用 Markdown 来开发网站是件多么幸福的事
actionText: 快速上手 →
actionLink: /home/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Sivan
---

::: warning 注意
请确保你的 Node.js 版本 >= 8.6。
:::

``` code
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```
# 介绍
1. VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。
---
2. 每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。
---
## 它是如何工作的？
* 事实上，一个 VuePress 网站是一个由 Vue (opens new window)、Vue Router (opens new window)和 webpack (opens new window)驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。

* 在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 Nuxt (opens new window)的 nuxt generate 命令，以及其他的一些项目，比如 Gatsby

> 社死圣诞节发射点发生发吉萨大
>> 但是发射点发射点发

baidu.com
sina.com
~~tencent.com~~
<u>带下划线文本</u>

1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
* 第一项
    > Markdown教程
    > 学的不仅是技术更是梦想

---
```javascript
$(document).read(function(){
    alert('Markdown');
});
```

这是一个链接 [新浪新闻](https://news.sina.com.cn/)
<https://news.sina.com.cn/>

链接也可以用变量来代替，文档末尾附带变量地址：
这个链接用1作为网址变量[baidu][1]
这个链接用markdown作为网址变量[Markdown][markdown]
然后文档的结尾为变量赋值(网址)

[1]: http://www.baidu.com
[markdown]: http://www.markdown.com

![有问题上知乎 图标](https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png)

使用<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>重启电脑


$$
\frac{d}{dx}e^{ax} = ae^{ex} \sum_{i=1}^{n}(X_i-\overline{X})^2
$$
