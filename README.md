# 《Mathematica 激活指南》编辑入门

欢迎！非常感谢您对本项目有兴趣。

在开始编辑前，请阅读以下介绍。

本文提供项目的基本信息，以及编辑入门。

详细的编辑指导在[《贡献指南》](docs/CONTRIBUTING.md)。详细的写作风格要求在[《写作风格指南》](docs/Writing-style-guide.md)。

当准备就绪后，请 fork 此 repo，编辑文章内容 ([`index.md`](index.md))，最后新建一个 pull request。

感谢您的支持。

## 编码风格

> 下述规则已写入 [`.editorconfig`](.editorconfig)。
> 可以在 [EditorConfig.org](https://editorconfig.org/) 了解该文件的有关知识。

未说明的项目暂不做要求。

* **UTF-8** (without BOM)
* **LF** line ending
* 文档末尾有换行符
* 缩进
  * 使用**空格**缩进
  * CSS、HTML、JavaScript、YAML 的缩进为 2 个空格

## Markdown 代码风格

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
> * 无序列表 (unordered list) 每级间缩进 2 个空格。
> * 有序列表 (ordered list) 每级间*推荐*缩进 4 个空格。
> * **磁力链接 (magnet) 请以 code block 呈现**，以防编译错误。
> * **请使用 `<del>` 添加删除线**。不要使用 [`<strike>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike)，因为该元素已经废除。
> * 请不要触动 [front matter](https://jekyllrb.com/docs/front-matter/)，除非您已经与本项目的管理者 [@TieBaMma](https://github.com/TieBaMma) 确认需要修改。
> * 随着 GitHub Pages 上部署的 Jekyll 更新换代，可以使用的 Markdown 语法或许会有扩展。参看 [Markdown processor for your GitHub Pages site](https://help.github.com/en/articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll)。

## 写作风格

详细的写作风格要求在[《写作风格指南》](docs/Writing-style-guide.md)。

摘要如下

* 左侧优先：插入点左侧的字符决定 script。
* 夹注符号跟随内部：夹注符号内部的 script，决定夹注符号的 script。
* 中文与西文之间、中文与数字之间留一个空格。
* 连续的中文内、西文与中文标点之间没有空格，除非
  * 不加空格会导致编译错误。
  * 不加空格会导致无法区分专有名词和普通名词。
  * 特殊的排版规定。
* 使用**加粗**表示强调 (strong importance)，使内容醒目。
* [Top 10 tips for Microsoft style and voice | Microsoft Style Guide](https://docs.microsoft.com/en-us/style-guide/top-10-tips-style-voice)
* [句子 | 中文技术文档的写作规范 | 阮一峰](https://github.com/ruanyf/document-style-guide/blob/master/docs/text.md#%E5%8F%A5%E5%AD%90)

## 常见的 Markdown 编辑器

尽管我们对编辑工具**没有要求**，您甚至可以直接使用 GitHub 网页内置的文本编辑器工作；但仍然**推荐**使用功能丰富且正确支持 [CommonMark](https://spec.commonmark.org/) 的编辑器以减少编辑错误。

尚无想法？不妨尝试这几款编辑器和插件。

* [Visual Studio Code](https://code.visualstudio.com/)
  * [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
  * [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  * [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
  * [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  * [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Atom](https://atom.io/)
  * [markdown-preview-enhanced](https://atom.io/packages/markdown-preview-enhanced) （这一个插件能代替好几个）
  * [editorconfig](https://atom.io/packages/editorconfig)
  * 更多参考[使用 Atom 打造 Markdown 编辑器 - Florian | 博客园](https://www.cnblogs.com/fanzhidongyzby/p/6637084.html)
* [ghostwriter](https://wereturtle.github.io/ghostwriter/)
* [Sublime Text](https://www.sublimetext.com/)
  * [MarkdownEditing](https://packagecontrol.io/packages/MarkdownEditing)
  * [MarkdownPreview](https://packagecontrol.io/packages/MarkdownPreview)
  * [Editor​Config](https://packagecontrol.io/packages/EditorConfig)
  * 更多参考
    * [Sublime Text 3 打造 Markdown 编辑器 | 杨柳岸小鹏残月](https://www.jianshu.com/p/7cbd50058ea3)
    * [Sublime 插件：Markdown 篇 | Mintisan](https://www.jianshu.com/p/aa30cc25c91b)
* [TextMate](https://macromates.com/)
  * [markdown.tmbundle](https://github.com/textmate/markdown.tmbundle)
  * [GitHub-Markdown.tmbundle](https://github.com/textmate/GitHub-Markdown.tmbundle)
  * [EditorConfig TextMate PlugIn](https://github.com/Mr0grog/editorconfig-textmate#readme)
* [Notepad++](https://notepad-plus-plus.org/)
  * [MarkdownViewerPlusPlus](https://github.com/nea/MarkdownViewerPlusPlus)
  * [Markdown Syntax Highlighting for Notepad++](https://github.com/Edditoria/markdown-plus-plus)
  * [EditorConfig Notepad++ Plugin](https://github.com/editorconfig/editorconfig-notepad-plus-plus#readme)
* [Visual Studio](https://visualstudio.microsoft.com/)
  * [Markdown Editor](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.MarkdownEditor)

## 如何新建下载地址列表

每当在“**Mathematica 软件下载**”部分中新增小节时（通常是在新一代产品发布后），请在开头添加以下内容

```markdown
> **注意**
>
> 英文版也可以调出中文提示，但是它没有中文帮助。只有带了**中文帮助**的才叫中文版！
>
> Linux 版无中文版，自行汉化的方法可参考 <http://tieba.baidu.com/p/4024190694>。
```

下载地址列表的组织规则在[《贡献指南》](docs/CONTRIBUTING.md)中“如何编辑下载地址列表”部分。

## 目录结构

> 如果需要了解 Jekyll 文件的意义，请访问它的[文档](https://jekyllrb.com/docs/structure/)。

以下仅列出关键文件。

| 对象          | 说明             |
| ------------- | ---------------- |
| `.github/`    | GitHub templates |
| `.vscode/`    | VS Code settings |
| `docs/`       | 贡献指南         |
| `_config.yml` | Jekyll 配置      |
| `index.md`    | 文章主页         |

## 第三方

本项目使用 [Jekyll](https://jekyllrb.com/)，由 GitHub Pages 自动生成网站。

本项目使用 Jason Long 制作的 [Cayman theme](https://github.com/jasonlong/cayman-theme)，基于 [pietromenna/jekyll-cayman-theme@595426b](https://github.com/pietromenna/jekyll-cayman-theme/commit/595426b7875c78da3afa4c1810f98efd3dce8b50)，[修改了部分样式](css/cayman-patch.css)。

本项目使用 Vladimir Jimenez 制作的 [allejo/jekyll-toc@204bd5c](https://github.com/allejo/jekyll-toc/commit/204bd5c66952a2c214c86212b342d417c7edae80) 来生成 Table of Contents。
