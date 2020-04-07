# 写作风格指南

本文是写作风格的详细规范。

快速简明的入门指导在 [`README.md`](../README.md)。

本文明确了文本的组织方式、固定格式等内容，以便整理和校对。事实上，这些规则大多来自语感和排版惯例。您没有必要在初次参与贡献之前强迫自己学习本指南。

请注意，本项目面向简体中文用户，所以，**本指南仅考虑简体中文环境下的技术文档写作**。

## 定义

下列定义适用于本文。（按字母顺序排序）

### 阿拉伯数字 (Arabic numerals)

**阿拉伯数字** (Arabic numerals) 指 0、1、2、3、4、5、6、7、8、9 这十个符号。

| Symbol | Code   |
| ------ | ------ |
| 0      | U+0030 |
| 1      | U+0031 |
| 2      | U+0032 |
| 3      | U+0033 |
| 4      | U+0034 |
| 5      | U+0035 |
| 6      | U+0036 |
| 7      | U+0037 |
| 8      | U+0038 |
| 9      | U+0039 |

### 夹注符号 (Brackets)

**夹注符号** (brackets) 是为提示或突显而将文本夹注起来的一类成对符号的总称。夹注符号包括引号、括号、书名号。

### 中文 (CJK characters)

**中文** (Chinese characters) 和 **CJK characters** (Chinese, Japanese, and Korean characters) 是同义词，指位于 Unicode 中与 CJK Unified Ideographs 相关的 block 的字符。详见 **The Unicode Standard, Chapter 18**。参看 [Unihan Database](https://www.unicode.org/charts/unihan.html)

截止至 Unicode 13.0.0，它包括

| Range       | Block                                   |
| ----------- | --------------------------------------- |
| 4E00–9FFF   | CJK Unified Ideographs                  |
| 3400–4DBF   | CJK Unified Ideographs Extension A      |
| 20000–2A6DF | CJK Unified Ideographs Extension B      |
| 2A700–2B73F | CJK Unified Ideographs Extension C      |
| 2B740–2B81F | CJK Unified Ideographs Extension D      |
| 2B820–2CEAF | CJK Unified Ideographs Extension E      |
| 2CEB0–2EBEF | CJK Unified Ideographs Extension F      |
| 30000–3134F | CJK Unified Ideographs Extension G      |
| F900–FAFF   | CJK Compatibility Ideographs            |
| 2F800–2FA1F | CJK Compatibility Ideographs Supplement |

### 英文 (English)

**英文** (English) 指 ASCII 中 A 至 Z，和 a 至 z，共 52 个字符；即 Unicode 中 U+0041 至 U+005A，和 U+0061 至 U+007A。详见 [Unicode Character Code Charts](https://www.unicode.org/charts/) 的 **C0 Controls and Basic Latin**。

英文是西文的一种。

### 语段 (Expression)

**语段** (expression) 指语言片段，是对各种语言单位（如词、短语、句子、复句等）不做特别区分时的统称。此定义来自 **GB/T 15834-2011**。

### 标点符号 (Punctuation)

**标点符号** (punctuation) 是辅助文字记录语言的符号，是书面语的有机组成部分，用来表示语句的停顿、语气以及表示某成分（主要是词语）的特定性质和作用。数学符号、货币符号、校勘符号、辞书符号、注音符号等特殊领域的专门符号不属于标点符号。此定义来自 **GB/T 15834-2011**。

常见的标点符号有

| 中文 | 英文 |
| ---- | ---- |
| ，   | ,    |
| 。   | .    |
| ！   | !    |
| ？   | ?    |
| ：   | :    |
| ；   | ;    |
| （   | (    |
| ）   | )    |

> **注意**
>
> 英文中常见的引号 (quotation marks) 有 double 和 single 两对，且都有 curly 和 straight 两种形式。
>
> | Symbol | Code   | Name                        |
> | ------ | ------ | --------------------------- |
> | "      | U+0022 | Quotation Mark              |
> | '      | U+0027 | Apostrophe                  |
> | “      | U+201C | Left Double Quotation Mark  |
> | ”      | U+201D | Right Double Quotation Mark |
> | ‘      | U+2018 | Left Single Quotation Mark  |
> | ’      | U+2019 | Right Single Quotation Mark |
>
> * U+0022 是 straight double quotation mark。
> * U+0027 是 straight single quotation mark。
> * U+201C 和 U+201D 是 curly double quotation mark，且是中文的双引号。
> * U+2018 和 U+2019 是 curly single quotation mark，且是中文的单引号。

### Script

A **script** is a collection of letters and other written signs used to represent textual information in one or more writing systems. For example, Russian is written with a subset of the Cyrillic script; Ukranian is written with a different subset. The Japanese writing system uses several scripts. 此定义来自 [**Glossary of Unicode Terms**](https://www.unicode.org/glossary/#script)。

一种用于书写一种或多种语言的文字系统。此定义来自《英汉计算机技术大辞典》（白英彩. 英汉计算机技术大辞典[M]. 上海: 上海交通大学出版社, 2001.），仅供参考。

### 空格 (Space)

**空格** (space) 指字符 U+0020。

### 西文 (Western scripts)

**西文** (Western scripts) 指拉丁文 (Latin)、希腊文 (Greek)、西里尔文 (Cyrillic)，以及它们的衍生物，是欧洲、美洲和大洋洲通行的文字的统称。

## 如何判定当前 script

规则总结为 3 点：

* 左侧优先。
* 行内短语无影响。
* 夹注符号内部独立。

### 左侧优先

正常情况下，简体中文的技术文档都是从左向右书写的。于是，插入点左侧的字符决定 script。

简体中文的技术文档的默认 script 是 Hans。有关 script code 的信息在 [UAX #24](https://www.unicode.org/reports/tr24/) 和 [ISO 15924](https://www.unicode.org/iso15924/)。

### 行内短语无影响

在写作时，句子中经常会出现与当前 script 不同的字符，这些字符会组成外来语短语，它们不改变 script，仿佛与句中其他字符在相同的 script，进而不影响标点符号等的使用，本文称这种现象是**行内短语无影响**。

**示例**

英文内嵌入了中文：

> The Chinese word for crisis is 危机, however, believe it or not, this word suggests that crisis and opportunity come together.

中文内嵌入了英文：

> 将 review、merge 等行为组合到一起，便诞生了一种协作方式，叫做 pull request。

中文内嵌入了英文和阿拉伯数字：

> Arabic numerals 通常指 0、1、2、3、4、5、6、7、8、9 这十个符号。

中文内嵌入了英文和希腊字母：

> 正反费米子只能成对产生或消失，而玻色子（π、K、γ 等）可以任意数目产生或消失。

### 夹注符号内部独立

夹注符号内部的语段是相对独立的。该语段自身决定夹注符号内部的 script。

**示例**

括号内是英文：

> 如果幺正矩阵的元素都是实数，则称为**正交矩阵** (orthogonal matrix)。

括号内是中文：

> 定态下，粒子在空间的概率密度 ρ 不随时间改变（与 t 无关）。

书名号内是中文：

> It is the position of this character in the 《康熙字典》 used in the four-dictionary sorting algorithm.

## 综述

按下列优先级应用规则。如果前一项缺少所需项目，就去后一项查询，查到为止；如果全都没有，表明暂不做要求。引文链接在文末“参考”部分。

1. 本文规定的项目
2. ***Microsoft Writing Style Guide***
3. 阮一峰《中文技术文档的写作规范》

除了后文各章节介绍的方面，还请注意下列事项：

* 虽然 ***Microsoft Writing Style Guide*** 主要适用于英文，但是其中不少内容也适用于中文。
* [Commas | Microsoft Style Guide](https://docs.microsoft.com/en-us/style-guide/punctuation/commas)
* [Capitalization | Microsoft Style Guide](https://docs.microsoft.com/en-us/style-guide/capitalization)

## 组织语言

* 注意语段的长度、语气、语态。参看
  * [Top 10 tips for Microsoft style and voice | Microsoft Style Guide](https://docs.microsoft.com/en-us/style-guide/top-10-tips-style-voice)
  * [句子 | 中文技术文档的写作规范 | 阮一峰](https://github.com/ruanyf/document-style-guide/blob/master/docs/text.md#%E5%8F%A5%E5%AD%90)
* [Writing step-by-step instructions | Microsoft Style Guide](https://docs.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions)
* [Headings | Microsoft Style Guide](https://docs.microsoft.com/en-us/style-guide/scannable-content/headings)
* [Lists | Microsoft Style Guide](https://docs.microsoft.com/en-us/style-guide/scannable-content/lists)
* 祈使句较常见，以“你”作主语的句子较少用。

## 文本格式

### 加粗、斜体、强调

* 使用**加粗**表示强调 (strong importance)，使内容醒目。
  * **加粗**对应的 HTML element 是 [`<strong>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)，此处引述其逻辑意义来说明**加粗**的语气：这个元素表征“内容强烈的重要性 (strong importance for its contents)”。
* 使用*斜体*表示着重、轻微的突显 (change spoken emphasis)。
  * *斜体*对应的 HTML element 是 [`<em>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)，此处引述其逻辑意义来说明*斜体*的语气：这个元素标记出需要用户重读突出的内容 (for words that have a stressed emphasis)。
* 从无障碍性上考虑，**加粗**比*斜体*更实用。
* 定义概念时，**加粗**该词。
* 在较长的句子、段落中，可以**加粗**专有名词，以使之有别于正文。
* 在较长的句子、段落中，可以设置专业术语为*斜体*，以使之有别于正文。

**示例**

> 命令行程序**不能直接双击打开**！

**示例**

> 标准对此没有要求，但行业*推荐*使用 48 V 电压。

**示例**

> 如果幺正矩阵的元素都是实数，则称为**正交矩阵** (orthogonal matrix)。

### 引用作品、章节、网页的名称

当语段内出现作品、章节、网页的名称时，

* 书籍、刊物、政策文件、blog、电影、音乐、诗歌等作品的名称
  * 英文的，使用 ***加粗斜体***。例如
    > ***Microsoft Writing Style Guide***
  * 中文的，按 **GB/T 15834-2011** 的规定使用书名号。例如
    > 《中文技术文档的写作规范》
* 一部作品内部的章节的名称
  * 使用双弯引号 (curly double quotation mark) 夹注起来。
  * 文本使用正文的样式，也可以*斜体*，一篇文章内应当一致。
* 无法归入上述类别的网页的名称
  * 使用正文的样式，并且设置为指向目标网页的链接。
  * 注意将网页的名称整理为统一的格式。例如
    > 文章名 | 作者名 | 网站名

### 下定义

* 定义概念时，它的全称应当在句子内部出现至少一次，使用单数形式（除非该词必须为复数），并且**加粗**。这样，读者能够知道其规范拼写、大小写。
* 纯中文的词语没有大小写的问题，于是，也可以出现在句首。
* 翻译自外文的词语必须注明其英文。如果该词的起源不在英语，还应当注明其原生写法。
* 专业术语首次出现时，应当同时给出定义，定义应当通俗易懂、不失严谨。定义可以仅是链接，而不插入段内。

## 混合 script 时的标点符号规范

* 纯中文的句子，按 **GB/T 15834-2011** 的规定。
* 纯英文的句子，按 ***Microsoft Writing Style Guide*** 的规定。

当一个句子中出现多种 script 的字符时，使用下面列出的标点符号规则：

* 插入点的 script 决定所用的标点符号的 script。
* 夹注符号跟随内部。
* 中文与西文之间、中文与数字之间留一个空格。
* 中文与西文标点符号之间应该留适当的空格。通常，将中文视作西文，按西文的语法和排版规则分析，确定空格，参看“行内短语无影响”。
* 连续的中文内、西文与中文标点之间没有空格，除非
  * 不加空格会导致编译错误。
  * 不加空格会导致无法区分专有名词和普通名词。
  * 特殊的排版规定。
* 如果不确定，就用英文标点，并搭配适当的空格。

### 夹注符号跟随内部

夹注符号内部的 script，决定夹注符号的 script。参看“夹注符号内部独立”。

**示例**

括号内是英文：

> 如果幺正矩阵的元素都是实数，则称为**正交矩阵** (orthogonal matrix)。

括号内是中文：

> 定态下，粒子在空间的概率密度 ρ 不随时间改变（与 t 无关）。

括号内是中文：

> Zhang San （张三） is a Chinese name.

引号内是日文：

> This technology was eventually used to design the glyphs for kanji in the 「小塚明朝」 typeface design.

## 补充

下面列出一些较少见、但仍需稍加关注的事情：

* 西文字符总是半角。不要使用全角西文字符，它们是历史遗留问题。（如果使用日语输入法输入西文，记得检查设置。）
* 慎用强调。不应该大片地使用强调，因为这容易使读者困惑。（如果一定要这样做，三思。）
* 汉语词语（不含专业术语）的意义应当参考由**中国社会科学院语言研究所词典编辑室**编写、**商务印书馆**出版的《现代汉语词典》。
* 在英语中，**bold**、*italic* 都是形容词 (adjective)。在汉语中，习惯上，**加粗**是动词、名词，*斜体*是名词。

## 参考

本指南参考了下列文件（按权重由高到低排序）：

* [Microsoft Writing Style Guide](https://docs.microsoft.com/en-us/style-guide/)
* [Markdown reference | Contributor Guide | Microsoft Docs](https://docs.microsoft.com/en-us/contribute/markdown-reference)
* [The Unicode Standard](https://www.unicode.org/versions/latest/)
* [《标点符号用法》 (GB/T 15834-2011)](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=22EA6D162E4110E752259661E1A0D0A8)
* [《出版物上数字用法》 (GB/T 15835-2011)](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=F5DAC3377DA99C8D78AE66735B6359C7)
* [中文技术文档的写作规范 | 阮一峰](https://github.com/ruanyf/document-style-guide)
  * [（Mupceet 于 2018-09-24 镜像的版本）](https://www.jianshu.com/p/0423f1acfdbf)
* [MDN Web 文档写作规范（中文版）](https://developer.mozilla.org/zh-CN/docs/MDN/Contribute/Content/Style_guide)
* [Requirements for Chinese Text Layout 中文排版需求 | W3C](https://www.w3.org/TR/clreq/)
* [Wikipedia:Manual of Style | Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style)

文中示例也参考了下列页面（按字母顺序排序）：

* [保护你在 Internet 上的隐私 | Windows Help](https://support.microsoft.com/zh-cn/help/4091455)
* [打开或关闭 Windows Defender 防火墙 | Windows Help](https://support.microsoft.com/zh-cn/help/4028544)
* [如何识别键盘的本地化版本 | Apple 支持](https://support.apple.com/zh-cn/HT201794)
