# Labels

下表展示了本项目使用的 label 体系。

如有需要，未来再设计其他的。

| Label              | Description  | Color     | 示例                                                                                                          |
| ------------------ | ------------ | --------- | ------------------------------------------------------------------------------------------------------------- |
| Area-Content       | 教程内容相关 | `#ff8c00` | 45, 43, 42, 40, 39, 38, 36, 35, 34, 32, 31, 28, 27, 26, 25, 24, 23, 20, 18, 15, 14, 13, 11, 10, 8, 7, 5, 3, 2 |
| Area-WebPageDesign | 网页设计相关 | `#84b6eb` | 31, 20                                                                                                        |
| Area-Other         | 其他         | `#3ae8c8` | 44, 41, 33, 31, 30, 29, 22, 20, 16, 12, 9, 4, 1                                                               |
| Issue-Question     | 询问或讨论   | `#cc317c` | 45, 44, 43, 41, 33, 30, 29, 22, 16, 12, 9, 7, 4, 1                                                            |
| DuplicateOrInvalid | 重复或无效   | `#cccccc` | 46, 37, 21, 19, 17, 6                                                                                         |

示例已核对，可以作为参考。如果误改了 #1 至 #46 的 label，按照上表修正。

## `Area-*`

`Area-*` 用于划分 issue 或 PR 涉及的项目部分。每一个 issue 或 PR **必须有至少一个** Area，除非它是 `DuplicateOrInvalid`。

* `Area-Content` 表示涉及教程内容。
  * 从 “📄 Content problem” template 创建的 issue 默认得到该 label。但管理员应当检查确认。
  * 其他对教程内容产生影响的 issue 应当得到该 label。
  * 修改教程内容的 PR 应当得到该 label。Mergify 能识别一部分情况，其余由管理员处理。
* `Area-WebPageDesign` 表示涉及网页设计（网站的配置、样式、程序）。
  * 从 “🌐 Web page design” template 创建的 issue 默认得到该 label。但管理员应当检查确认。
  * 其他涉及网页设计的 issue 应当得到该 label。
  * 修改网页设计的 PR 应当得到该 label。Mergify 能识别一部分情况，其余由管理员处理。
* `Area-Other` 表示无法归入上述情况。
  * 用排除法确定是否得到该 label。
  * 常见的情况有：
    * 贡献指南。
    * 项目管理。
    * Automation services that have no effect on the building and deployment of the website.

## `Issue-*`

`Issue-*` 仅用于分类 issue。

* `Issue-Question` 表示是一项询问，或者发生了讨论。
  * 标题是提问、咨询的 issue 应当得到该 label。
  * 发生了围绕某个话题的讨论的 issue 应当得到该 label。

## `DuplicateOrInvalid`

`DuplicateOrInvalid` 表示与本项目中任何已有内容（issue、PR、教程正文等）重复，或者本身是无意义、不合理的。

因为难以界定 duplicate 和 invalid，所以作为一个类别处理。

该 label 是**一票否决**。如果一个 issue 或 PR 被标记为 `DuplicateOrInvalid`，那么：

* It will be closed.
* 它不再需要其他 label。
* 管理员可能会酌情移除其他已有 label。
