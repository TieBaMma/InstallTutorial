# **Mathematica 激活指南**编辑说明

欢迎！非常感谢您对本项目有兴趣。

在开始编辑前，请阅读以下介绍。

当您准备就绪后，请 fork 此 repo，编辑 [`index.md`](index.md)，最后新建一个 pull request。

感谢您的支持。

## 编码风格

> 下述规则已写入 [`.editorconfig`](.editorconfig)。
> 您可以在 [EditorConfig.org](https://editorconfig.org/) 了解该文件的有关知识。

未说明的项目暂不做要求。

* **UTF-8** (without BOM)
* **LF** line ending
* 文档末尾有换行符
* 缩进
  * 使用**空格**缩进
  * CSS, HTML, JavaScript, YAML 的缩进为 2 个空格
  * Markdown 的缩进为 4 个空格

## Markdown 书写风格

* 支持 [CommonMark 0.29](https://spec.commonmark.org/0.29/) 语法
* 使用 [GitHub 推荐的书写风格](https://guides.github.com/features/mastering-markdown/)

摘要如下

| 元素                       | 风格          |
| -------------------------- | ------------- |
| 标题 (heading)             | ATX heading   |
| 强调与加粗 (emphasis)      | `*`           |
| 无序列表 (unordered list)  | `*`           |
| 分割线 (thematic break)    | `---`         |
| 代码块 (fenced code block) | ` ``` `       |
| 删除线 (strikethrough)     | `<del></del>` |
| 键盘输入 (keyboard input)  | `<kbd></kbd>` |

> **注意**
>
> * 无序列表 (unordered list) 每级间缩进 2 个空格
> * 有序列表 (ordered list) 每级间*推荐*缩进 4 个空格
> * **磁力链接 (magnet) 请以 code block 呈现**，以防编译错误
> * **请使用 `<del>` 添加删除线**。不要使用 [`<strike>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike)，因为该元素已经废除
> * 请不要触动 [front matter](https://jekyllrb.com/docs/front-matter/)，除非您已经与本项目的管理者 @TieBaMma 确认需要修改
> * 随着 GitHub Pages 上部署的 Jekyll 更新换代，您可以使用的 Markdown 语法或许会有扩展。参看 [Markdown processor for your GitHub Pages site](https://help.github.com/en/articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll)

## 其他编辑说明

尽管我们对编辑工具**没有要求**，您甚至可以直接使用 GitHub 中内置的文本编辑器工作；但仍然**推荐**使用功能丰富且正确支持 [CommonMark](https://spec.commonmark.org/) 的编辑器以减少编辑错误。

---

每当您在 **Mathematica 软件下载** 部分中新增小节时，请在开头添加以下内容

```markdown
> **注意**
>
> 英文版也可以调出中文提示，但是它没有中文帮助。只有带了**中文帮助**的才叫中文版！
>
> Linux 版无中文版，自行汉化的方法可参考 <http://tieba.baidu.com/p/4024190694>。
```

---

如果您使用 [VS Code](https://code.visualstudio.com/)，并且安装了 [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) 扩展。那么，在编辑时，您可能会收到关于 行 `> ---` 的警告 `markdownlint(MD035)`，请忽略它们。

## 目录结构

> 如果您需要了解 Jekyll 文件的意义，请访问它的[文档](https://jekyllrb.com/docs/structure/)。

以下仅列出关键文件。

| 对象          | 说明        |
| ------------- | ----------- |
| `_config.yml` | Jekyll 配置 |
| `index.md`    | 主页        |

## 第三方

本项目使用 [Jekyll](https://jekyllrb.com/)，由 GitHub Pages 自动生成网站。

本项目使用 Jason Long 制作的 [Cayman theme](https://github.com/jasonlong/cayman-theme)，[修改了部分样式](css\cayman-patch.css)。

本项目使用 Vladimir Jimenez 制作的 allejo/jekyll-toc@204bd5c66952a2c214c86212b342d417c7edae80 来生成 Table of Contents。
