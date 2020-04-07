# 贡献指南

欢迎！非常感谢您对本项目有兴趣。

快速简明的入门指导在 [`README.md`](../README.md)。详细的写作风格要求在[《写作风格指南》](Writing-style-guide.md)。

本文将具体介绍如何报告 issue、编辑内容（创建 pull request），以及相关的工作流程、常见问题。

感谢您的支持。

本文的主要内容：

* 报告 issue
* 创建 pull request
* 管理员如何处理 pull request
* 如何写 Git commit message
* 使用 emoji 开头
* VS Code 编辑常见问题
* 日期和时间的表示
* 如何编辑下载地址列表
* 如何插入超链接
* 如何处理 IRI 和 URI
* 如何使用警示块
* 常见的全拼与别名

此外，建议阅读 [GitHub Community Guidelines](https://help.github.com/en/github/site-policy/github-community-guidelines)。

## 报告 issue

1. 在本项目的 [Issues](https://github.com/TieBaMma/InstallTutorial/issues?q=is%3Aissue) 页面上，搜索一下。
   1. 如果已有相似的问题，请加入讨论。
   2. 如果没有，请继续创建 issue。
2. 点击 [**New issue**](https://github.com/TieBaMma/InstallTutorial/issues/new/choose)，再选择合适的类型。
3. 根据编辑栏中的指示（`<!-- -->` 中的内容），填写 issue。填完后，请删去那些指示。
4. 点击 **Submit new issue**，提交。

## 创建 pull request

1. 至少读完 [`README.md`](../README.md)。
2. [fork](https://help.github.com/en/articles/fork-a-repo) 此 repo。
3. 编辑文章内容 (`index.md`)。确认无误后，commit 进 Git。
   * 如有需要，编辑其他文件。
   * 请阅读下文“如何写 Git commit message”。
4. [本地测试](https://help.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll)。在 push 到 remote repo 之前，尽量在本地编译，测试。
5. [新建一个 pull request](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork)。
   * 根据编辑栏中的指示（`<!-- -->` 中的内容）填写。填完后，请删去那些指示。
   * 如果这是一个进行中的工作 (work in progress, WIP)，请创建为 [draft pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)，并在标题 (Title) 的开头添加 `[WIP]` 字样。
   * 如果这是一个大型、复杂、需要细致 review 的工作，*建议*在标题 (Title) 的开头添加 `[MEGA]` 字样。
   * 如果这个 pull request 修复了某个 issue，请注意使用 [Fix keyword](https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)。（通常写在摘要中）
6. 跟进 review 进程，及时响应，直到 merge。

**不熟悉 Git 命令行**？不妨尝图形界面的工具：

推荐 [GitKraken](https://www.gitkraken.com/)。它快速、简洁，容易上手。只需注册一个 GitKraken Account，即可免费用于 GitHub 上的**公开** (public) repo。建议使用 GitHub Account 来注册 GitKraken Account，以便关联绑定。

[GitHub Desktop](https://desktop.github.com/) 也值得一试。它与 GitHub 高度集成，但是仅支持 Windows 和 macOS。

## 管理员如何处理 pull request

1. 检查 PR 的标题、摘要，确保它们能清晰、准确地概括 PR 内容。
   * 如果存在问题，通知 PR author 来改正；如果无法联系，自己修正。
2. [Discuss and review](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests).
   1. 完整阅读 description、**Files changed**，如有需要，阅读 **Commits**。
   2. 讨论。如果这是 draft pull request，可以仅留言讨论，提出修改意见，直到 WIP 完成。
   3. 正式 review。
      1. 如果这是 draft pull request，（由 PR author 或者管理员）删去标题中的 `[WIP]` 字样，之后设置 **Ready for review**。
      2. 自己或者[邀请其他人来](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review) review。
      3. [Approve](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews).
3. 当该 PR 准备就绪、可以 merge 时，复查它的标题、摘要。
4. [Merge](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request) the PR into branch `gh-pages`.
   1. 依次考虑下列方式
      1. [squash merge](https://help.github.com/en/github/administering-a-repository/about-merge-methods-on-github#squashing-your-merge-commits) （将 PR 的所有内容压缩为一条独立的 commit，插入主线，可以保持主历史记录线性、清洁。）
      2. [rebase merge](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#rebase-and-merge-your-pull-request-commits) （将 PR 的所有 commits 都插入主线，可以保留所有操作细节，且没有 merge commit。）
      3. true merge （添加一条特别的 merge commit，将 PR 的所有 commits 都插入主线，容易导致主历史记录复杂、难以回溯。如无特殊原因，请勿使用。）
   2. 填写 commit message
      1. 填写标题 (Summary)。使用 PR 的标题 (Title)；如果它的开头没有 emoji，选择一个合适的加上。
      2. 填写描述 (Description)。至少包含摘要、已知问题（如果有）；一般来说，直接使用 PR 的 description 即可。
   3. 完成 merge。

## 如何写 Git commit message

Git commit message 是一段多行文本。第一行通常称为“summary”或者“title”，后续几行称为“description”或者“body”。

**如何写 summary**

* 清晰、准确地概括你的工作。
* 使用 动词-名词 (verb-noun) 格式。
  * “动词”代表一种行为 (action)，它不一定是英语中的动词，也可以是一些固定用法。下方的表格列出了常用的动词。
  * 动词用原形。
* 句首字母大写，使用 [sentence-style](https://docs.microsoft.com/en-us/style-guide/text-formatting/using-type/use-sentence-style-capitalization)。
* 标题的末尾没有句末点号。
* 尽量以适用的 emoji 开头，后跟一个空格。参看下文“使用 emoji 开头”。
* 长度尽可能控制在
  * 英文，50 字以内。
  * 中文，24 字以内。

**如何写 description**

* 仅在必需时才写。
* 清晰、准确、简明。
* 使用 sentence-style。
* 考虑用 Markdown 排版。建议使用 [GitHub Flavored Markdown](https://github.github.com/gfm/)。

**英文示例**

```text
🌐 Add new feature: Copy code to clipboard
## Summary

* Add a '📋Copy' button at the top left corner of all code blocks (inserted right before `pre` node), so that visitors can copy the code easily.

## Know issues

* Might not be compatible with IE.
```

**中文示例**

```text
📖 增加贡献指南
* 增加《贡献指南》 (`CONTRIBUTING.md`)
* 调整 `README.md`
```

**常用的动词**

| English  | 中文 | 说明               |
| -------- | ---- | ------------------ |
| Add      | 增加 | 添加新内容         |
| Fix      | 修正 | 修改、修正已有内容 |
| Delete   | 删除 | 删除内容           |
| Refactor | 重构 | 重构，不影响功能   |

## 使用 emoji 开头

建议在 commit message、pull request title 等的开头放置一个 emoji，以表示其影响范围。Emoji 与正文之间有一个空格。

目前，本项目允许下列 emoji：

| Emoji | Code                     | 说明                   |
| ----- | ------------------------ | ---------------------- |
| 📄    | `:page_facing_up:`       | 文章内容               |
| 🌐    | `:globe_with_meridians:` | 网页                   |
| 📖    | `:book:`                 | 项目信息和编辑指南     |
| 🎨    | `:art:`                  | 仅代码重构，不影响功能 |

可以直接使用 emoji 或者使用 emoji code。

可在下列网站查询 emoji code：

* [Emoji cheat sheet](http://emoji-cheat-sheet.com/)
* [Emojipedia](https://emojipedia.org/)

## VS Code 编辑常见问题

**markdownlint** 扩展可能会报告关于 行 `> ---` 的警告 `markdownlint(MD035)`，是误报，请忽略它们。

**Code Spell Checker** 扩展可能会报告大量拼写问题 `Unknown word`，大部分是误报，因为默认词典很小。

[**Liquid**](https://marketplace.visualstudio.com/items?itemName=sissel.shopify-liquid) 扩展对编辑 Jekyll templates 很有帮助，但可能会对编辑普通的 HTML 和 Markdown 产生干扰。

## 日期和时间的表示

允许 3 种格式：

* `2016 年 3 月 4 日 5:07:09`
* ISO 8601 (`2016-03-04T05:07:09+08:00`)
* `2016-03-04 05:07:09`

其中，第 1 种仅适用于中文。

## 如何编辑下载地址列表

参考版本 12.1、12.0、11.3 的下载地址列表。

如果要新建下载地址列表，请先阅读 [`README.md`](../README.md) 中“如何新建下载地址列表”部分。

一个下载地址列表由一或多个“组”构成。“组”是最小的独立单元，它的组织格式为

```markdown
* (版本号) 平台 语言
  * 备选下载地址 1
  * 备选下载地址 2
```

* 在一个组内，各备选下载地址提供的内容是相同的。
* “版本号”是 Mathematica 的版本号。
* 一个组可以打包多个“项目”。多个项目用加号 (`+`) 连接，加号两侧要留空格。
* `平台 语言` 是 Mathematica 安装程序项目的书写格式。其他类型的项目（例如下载器）直接写名字即可。
* 如果一个下载地址有备注说明，写在它那行。

**示例**

```markdown
* (12.1.0) Windows 英文 + Mac 英文
  * OneDrive
  * 磁力链接：

    ```uri
    magnet:?xxxx
    ```

* (12.1.0) Windows 英文 + Windows 下载器 + Mac 下载器
  * 百度网盘 提取码：`xxxx`

* (12.1.0) Mac 英文
  * 百度网盘 提取码：`xxxx`
  * BT 种子（备注）

* (12.1.0) Linux 英文
  * 百度网盘 提取码：`xxxx`
  * 蓝奏云 密码：`xxxx`
```

## 如何插入超链接

应当使用**有意义的**、点名目标主题的链接名，通常，使用目标页面的标题即可。

本项目允许的格式为

> 文章名 - 作者名 - 网站名

必须出现文章名，作者名和网站名至少出现一个。

例如

```markdown
参看 [Enable Windows 10 firewall to install fonts - 404 Tech Support](https://www.404techsupport.com/2015/09/11/enable-windows-10-firewall-install-fonts/)。
```

如果实在没有合适的标题，就[直接展示链接](https://spec.commonmark.org/0.29/#autolinks)。例如

```markdown
可以在 <http://tieba.baidu.com/p/5696398243> 下载中文帮助文档包。
```

**不要**使用代词。例如，~~这个、这里、此帖~~。

## 如何处理 IRI 和 URI

在继续之前，要清楚一些概念：

* Uniform Resource Identifier (URI) 定义于 [**RFC 3986**](https://www.rfc-editor.org/rfc/rfc3986) (Internet Standard)。
* Internationalized Resource Identifier (IRI) 定义于 [**RFC 3987**](https://www.rfc-editor.org/rfc/rfc3987) (Proposed Standard)。
* IRI 是 URI 的扩展。URI 只允许出现规定的几种字符。而加入 IRI 扩展后，可以出现任意 Unicode 字符。
* Uniform Resource Locator (URL) 是 URI 的一种。
* [Internationalized Domain Name](https://www.icann.org/resources/pages/idn-2012-02-25-en) (IDN) 由 ICANN 发起和定义，也有相关的 RFC。

为了保证兼容性，建议总是将 IRI 和 URI 规范化。

通常，现代的浏览器等工具会自动规范化 URI，可从地址栏中直接复制，无需额外工作。如果您不确定，请手工处理。

下面演示用 PowerShell 实现规范化。你可以在 Microsoft Docs 上找到[安装 PowerShell 的方法](https://docs.microsoft.com/powershell/scripting/install/installing-powershell)。PowerShell Core 7.0.0 的大小约为 100 MiB。

1. 使用原始 URI 创建一个 [`System.Uri`](https://docs.microsoft.com/en-us/dotnet/api/system.uri) 对象。
2. 用它的 `ToString()` method 取得 canonical representation。
3. 使用第 2 步得到的字符串创建一个 `System.Uri` 对象。
4. 用它的 `AbsoluteUri` property 取得最终结果。

**示例**

输入
`https://en.wikipedia.org/wiki/Wikipedia%3aManual_of_Style`

输出
`https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style`

```powershell
[Uri]::new([Uri]::new('https://en.wikipedia.org/wiki/Wikipedia%3aManual_of_Style').ToString()).AbsoluteUri
```

**示例**

输入
`https://support.microsoft.com/zh-cn/office/动态数组公式和溢出的数组行为-205c6b06-03ba-4151-89a1-87a7eb36e531`

输出
`https://support.microsoft.com/zh-cn/office/%E5%8A%A8%E6%80%81%E6%95%B0%E7%BB%84%E5%85%AC%E5%BC%8F%E5%92%8C%E6%BA%A2%E5%87%BA%E7%9A%84%E6%95%B0%E7%BB%84%E8%A1%8C%E4%B8%BA-205c6b06-03ba-4151-89a1-87a7eb36e531`

```powershell
[Uri]::new([Uri]::new('https://support.microsoft.com/zh-cn/office/动态数组公式和溢出的数组行为-205c6b06-03ba-4151-89a1-87a7eb36e531').ToString()).AbsoluteUri
```

**示例**

输入
`http://教育部.政务/`

输出
`http://教育部.政务/`

```powershell
[Uri]::new([Uri]::new('http://教育部.政务/').ToString()).AbsoluteUri
```

> **注意**
>
> .NET `System.Uri` 默认不转换 IDN。我们也不做要求。
>
> 如果希望转换 IDN 到 Punycode，请寻求其他方式。例如，读取 `IdnHost` property，再使用 `System.UriBuilder` 手工拼接：
>
> ```powershell
> $mUri = [Uri]::new([Uri]::new('http://教育部.政务/').ToString())
> $mBuilder = [UriBuilder]::new($mUri)
> $mBuilder.Host = $mUri.IdnHost
> $mBuilder.Uri.AbsoluteUri
> ```
>
> 本例的 IRI 在完全转换后是
> `http://xn--wcvs22dzol.xn--zfr164b/`

## 如何使用警示块

本项目使用固定格式的 block quote 来提供警示性内容。它们的语气非常强烈，请慎用。

目前规定了 2 种：

```markdown
> **注意**
>
> 需要仔细理解这些信息，否则，可能无法顺利进行。
```

```markdown
> **警告**
>
> 这些信息至关重要，若不遵守，可能造成损失。
```

## 常见的全拼与别名

建议规范拼写，并且尽可能用全拼。

除了一些广泛公认的缩写，都应该采用全拼，这有利于任何层次的人阅读。

下面列出一些词语及其别名，它们可能出现在本项目中。（按字母顺序排序）

| 全拼        | 别名或缩写   |
| ----------- | ------------ |
| 百度网盘    | 百度盘; 度盘 |
| 奶牛快传    | 奶牛盘       |
| GitHub      | GH           |
| macOS       | OS X         |
| Mathematica | MMA          |
| PowerShell  | pwsh         |
| repository  | repo         |
| Visual C++  | VC; MSVC     |
| Windows     | Win          |

> **注意**
>
> **Mac** 是 Apple 公司的计算机品牌，**macOS** 是其搭载的操作系统。尽管通常不做区分，但请不要混淆。
