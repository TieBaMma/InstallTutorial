# Mergify configuration

File: `.mergify.yml`

[Mergify](https://mergify.io/), which is provided as a GitHub Application, is a service to automate pull requests. Learn the configuration file format at its [documentation](https://doc.mergify.io/configuration.html).

## Automatic squash merge when approved

如果

* 至少 1 个 **approved** by reviewers with *write* permission。
* 没有 **requested changes**。
* title 中没有 `WIP` 字样。

那么，

1. 根据 base branch 更新 topic branch。 ([Strict Merge](https://doc.mergify.io/merge-action.html#strict-merge))
2. squash merge.

## Delete head branch after merge

理论上，与 [GitHub 的 automatic deletion of branches](https://help.github.com/en/github/administering-a-repository/managing-the-automatic-deletion-of-branches) 等效。

## Add label `Area-Content`

如果

* 修改了 Markdown 文件 (`.md`)，而且它的路径的开头不是
  * `.`
  * `CODE_OF_CONDUCT`
  * `docs`
  * `LICENSE`
  * `README`

那么，

1. 添加 `Area-Content` label。

## Add label `Area-WebPageDesign`

如果

* 修改了某个文件，它的路径的开头是 `_`，而且它不是 Markdown 文件。
* 或者，修改了 CSS、JavaScript、Less 或 Sass 文件。

那么，

1. 添加 `Area-WebPageDesign` label。

## Request a review from the owner because it is a `[MEGA]` (complex) PR

如果

* title 中有 `[MEGA]` 字样，表明是复杂的工作。

那么，

1. 请求 **TieBaMma** review。

## Assign the author because it is a draft PR

> 这条规则与下一条一起，确保所有 WIP 都默认得到 assign。

如果

* 是 draft PR。

那么，

1. Assign the author.

## Assign the author because its title contains `WIP`

如果

* title 中有 `WIP` 字样。

那么，

1. Assign the author.

## Ask to remove `WIP` from title before merge

如果

* 符合 “Automatic squash merge when approved” 规定的条件。
* 但是 title 中有 `WIP` 字样。

那么，

1. 发一条 comment，通知参与者来修正。
