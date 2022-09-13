<span v-for="i in 3">{{ i }} </span>

{{ $page }}

* [Home](/) <!-- 跳转到根部的 README.md -->
* [foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
* [foo heading](./foo/#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
* [bar - three](./bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
* [bar - four](./bar/four.html) <!-- 也可以用 .html -->



| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

:tada: :100:

# heading
title

## Sub heading 2
Some nice text

### Sub heading 3
Some nice text

#### Sub heading 4
Some even nicer text

[[toc]]

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger 危险
这是一个危险警告
:::

::: details 点击查看
这是一个详情块，在 IE / Edge 中不生效
:::
## Sub heading right
Some nice text

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
## Sub heading 3
Some nice text
* docs/.vuepress: 用于存放全局的配置、组件、静态资源等。
* docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。
* docs/.vuepress/theme: 用于存放本地主题。
* docs/.vuepress/styles: 用于存放样式相关的文件。
* docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
* docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
* docs/.vuepress/public: 静态资源目录。
* docs/.vuepress/templates: 存储 HTML 模板文件。
* docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。
* docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。
* docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。
* docs/.vuepress/enhanceApp.js: 客户端应用的增强。
