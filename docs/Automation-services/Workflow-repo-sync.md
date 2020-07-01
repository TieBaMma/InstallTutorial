# Pull from upstream at 00:00:00Z every Sunday

File: `.github/workflows/repo-sync.yml`

用于同步 upstream 与 fork 的 GitHub Actions workflow，定时于每个**星期日 8 时**（中国标准时间）运行，也可以用 [repository_dispatch](https://help.github.com/en/actions/reference/events-that-trigger-workflows#external-events-repository_dispatch) 触发。

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

## 为什么每周一次

根据设计时的 [Commit Activity](https://github.com/TieBaMma/InstallTutorial/graphs/commit-activity)，这是一个比较合适的频度。
