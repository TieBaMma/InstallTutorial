# Pull from upstream on demand

File: `.github/workflows/repo-sync.yml`

用于同步 upstream 与 fork 的 GitHub Actions workflow，需要[在 **Actions** 选项卡手动触发](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow#manually-running-a-workflow)，也可以用 [`repository_dispatch`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#repository_dispatch) 触发。

该 workflow 会将 upstream (`TieBaMma/InstallTutorial`) 的 `gh-pages` **force push** 到运行它的 fork 的 `gh-pages`。

如果要使用它，fork 需要先启用 GitHub Actions。

> Workflows don't run on forked repositories by default. You must enable GitHub Actions in the **Actions** tab of the forked repository.

## 技术细节

该 workflow 利用 [GitHub Repo Sync](https://github.com/marketplace/actions/github-repo-sync)。

以下条件用于阻止在 upstream 运行：

```yaml
if: ${{ github.repository_owner != 'TieBaMma' }}
```

第 1 个 step (Log trigger info) 用于记录触发源的信息。

## 为什么手动触发

曾经定时于每个星期日 8 时（中国标准时间）运行。但效益不明显。

因此决定交由用户自行触发。

参考 [Commit Activity](https://github.com/TieBaMma/InstallTutorial/graphs/commit-activity)。
