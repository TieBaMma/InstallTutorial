---
layout: default
title: {{ site.title }}
---

# Mathematica 激活指南

首先还是要强调一句：

**用盗版是迫不得已的，有能力的话要支持正版！**

学生版 80 美元——最外层页面写的确实是 $161，但是[进入购买页面](https://store.wolfram.com/arrive.cgi?Qualifier=STUD&URI=/view/app/mathematica/student&Country=CN)就会变成 $80 了！

购买方法的一些介绍： <http://tieba.baidu.com/p/2570976088>

---

[百度贴吧](http://tieba.baidu.com/f?kw=mathematica)里的帖子不能编辑，很不方便。

但大家<del>在激活失败这事上可以说是拥有无穷的创造力</del>，激活过程又会出现新的问题。故开此文档，整理安装、激活 Mathematica 的过程，以及可能碰到的问题。以后如果出现新的问题，欢迎补充整理。

在贴吧置顶中提出“新的问题”前，请先仔细阅读本文。**问重了的直接删**。

询问为什么一回车注册机就关了的，直接删，加封禁十天。

**教程中的百度网盘地址均有效，异常只是暂时抽风，在地址栏上重新回车一次（不能直接刷新！）就能看到下载页面了！**

同时，请意识到，本文没有涵盖的问题通常是**不太常见**的。所以，如果真的希望问题尽快得到解决，那么，在提出“新的问题”时请**尽可能详细**地给出背景信息。例如，

* 失败的**具体**症状（你单单说一句“我下载失败了”，或者“我这里密钥总是不对”没有任何意义）
* 操作系统是否做过什么特殊的设置
* 系统的版本、配置，以及系统的自动更新是否打开
* 是否使用过xx优化大师
* 安全软件、杀毒软件

## Wolfram Engine for Developers

2019 年 5 月，Wolfram 推出了[**免费**](https://www.wolfram.com/engine/faq/)的 [**Wolfram Engine for Developers**](https://www.wolfram.com/engine/)。此软件实质上是一个**没有笔记本界面、也没有本地自带帮助**的 Mathematica。

但是，它是**免费**的！并且，虽然没有自带笔记本，但你可以[用 Jupyter 笔记本](https://mathematica.stackexchange.com/q/198839/1871)。

Wolfram Engine 的激活方法可参考官网的介绍 [How do I set up the Wolfram Engine](https://support.wolfram.com/kb/45743)。

下载链接（Mac 版暂时没人传）：

### Wolfram Engine 12.0.1

* (12.0.1) Windows
  * [腾讯微云](https://share.weiyun.com/5pBJAMH)

* (12.0.1) Linux
  * [腾讯微云](https://share.weiyun.com/5thePKk)

### Wolfram Engine 12.0.0

* (12.0.0) Windows
  * [百度网盘](https://pan.baidu.com/s/1k2QxF05XnSKd1QIWz-y9vw) 提取码：`skr5`
  * [腾讯微云](https://share.weiyun.com/5nnsIAi) 提取码：`0gJq`

* (12.0.0) Linux
  * [百度网盘](https://pan.baidu.com/s/1qX5Z36w3SoSFCEsGSGqP9g) 提取码：`rw3a`
  * [蓝奏云（分卷）](https://www.lanzous.com/b00n4te9a/) 密码：`dn3c`
  * [SharePoint](https://hii9w-my.sharepoint.com/:u:/g/personal/richard_liu_233455_xyz/EVPw9cN-UltGgGotCAOYVLYBjZdluPfngX5y96JpvyO8zA?e=NlPwuc)

> **注意**
>
> * SharePoint / OneDrive 方式需要**在浏览器中**下载，不要使用下载工具。因为许多下载工具不能正确处理 OneDrive 要求的[身份验证](https://docs.microsoft.com/en-us/sharepoint/authentication)，导致连接失败。（据说，IDM 等稍做配置也可以用，请自行探索。）
> * 从 OneDrive 下载时，如果长时间（十几分钟）速度很慢（几十 kB/s），请果断取消，再重新开始（如果浏览器支持，在下载管理中点击“重试”即可）。因为稳定在这么慢的速度，表明网络阻塞，重连有时能改善；此外，服务器可能会挂断那些长时间慢速连接，最终还是要重新下载。
> * SharePoint / OneDrive 有反滥用、[限流措施](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online)。如果密集访问，服务器可能会屏蔽用户。对于极严重的滥用情况，Microsoft 可能会介入调查。

## Mathematica 软件下载

请先确认你的系统符合要求：

* [Wolfram Product System Requirements](https://support.wolfram.com/6479)
* [What should I consider when choosing a computer to run Mathematica](https://support.wolfram.com/39353)

这里提供下列版本的下载地址：

* 12 英文版
* 11 中英文版
* 10 中英文版
* 9 中英文版
* 8 中文版
* 7 中文版
* 5 英文版
* 4 英文版
* 3 英文版
* 2 英文版
* 1 英文版

目前，官网的下载地址在大陆被墙，所以，害怕有病毒什么的、以至非要去官网下载的同学，请自己想办法爬墙。

本文提供的安装包和官网的是一样的，若不信，可对比 MD5。

几种计算 MD5 的工具：

* [PowerShell](https://docs.microsoft.com/powershell/) 可用 [Get-FileHash](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash)：`Get-FileHash -Algorithm MD5`。
* Linux 可用 [md5sum](https://linux.die.net/man/1/md5sum)：`md5sum --binary`。
* macOS 可用 [md5](https://osxdaily.com/2009/10/13/check-md5-hash-on-your-mac/)。

**正版用户**可以尝试向经销商或 Wolfram 客服人员索要直接下载链接。

**以下百度网盘地址均有效，异常只是暂时抽风，在地址栏上重新回车一次（不能直接刷新！）就能看到下载页面了！**

> **注意**
>
> [**版本 12.1 解决了 HDPI 显示支持的问题**](https://reference.wolfram.com/language/guide/SummaryOfNewFeaturesIn121.html)。此前，Windows 版在 HDPI 显示器上会界面模糊，那时的缓解措施是，设置 **高 DPI 缩放替代** (High DPI scaling override) 为 **应用程序** (Application)，以及调节 Wolfram 笔记本的缩放 (Magnification) 等。
>
> ---
>
> **如无特殊原因，请不要选择过老的版本！**
>
> 1. 较老的 Mathematica 与现代的有许多不兼容之处。
> 2. 较老的 Mathematica 往往与现代的计算机不兼容，尤其是 Mac。
> 3. 早期 Mathematica 的自带文档非常简略。
> 4. 在版本 7 以前，Mathematica 无官方中文版。
> 5. [绘图和动画等功能在版本 6 有过重大修改](https://note.youdao.com/noteshare?id=0c2719208239696d61182199327bd38c)。

### 中文版和英文版的区别

关键区别是帮助文档的语言。只有自带了**中文帮助**的才叫中文版！

英文版也可以调出中文提示，但是它没有中文帮助。

Linux 版无中文版，自行汉化的方法可参考 <https://tieba.baidu.com/p/4024190694>。

版本 11.1 \~ 12.0 的中文帮助文档包及安装方法可以前往 <https://tieba.baidu.com/p/5696398243> 查看。
该贴的楼主已经将文件上传至[百度网盘](https://pan.baidu.com/s/1Y9SjTh69eIk01zl-bMFqqg)，提取码 `da1s`。

另外，参看【Q3】。

### Mathematica 12.1

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。

> **注意**
>
> 从 12.1 开始，Mathematica 仅支持 64 位操作系统。其他多项系统要求也都显著提高。

* (12.1.0) Windows 英文 + Mac 英文
  * [Sharepoint](https://wuyudi-my.sharepoint.com/:f:/g/personal/wuyudi_wuyudi_onmicrosoft_com/Ehy-6W55zL1Cr2PbLeOvKM0B-lrHnhBptStuQP6N3fMBCw?e=dKvAte)

* (12.1.0) Windows 英文 + Windows 下载器 + Mac 下载器
  * [百度网盘](https://pan.baidu.com/s/1d8mwxiEFqNI7JO_-c8smyg) 提取码：`1234`

* (12.1.0) Mac 英文
  * [百度网盘](https://pan.baidu.com/s/1ABAAe3gh4fzwKWMlPhdtDw) 提取码：`nvt5`
  * [BT 种子](https://mac-torrents.io/wp-content/uploads/2020/03/Mathematica.12.1.0.mac-torrents.io_.zip.torrent)

* (12.1.0) Linux 英文
  * [百度网盘](https://pan.baidu.com/s/13SA-sMbEQbzTNsKK-hxafw) 提取码：`vuxd`

* (12.1.0) 12.0、12.1 的激活工具
  * [Wolfram Mathematica 12 Key Generator Online](https://ibugone.com/blog/2019/05/mathematica-keygen/)
  * [mathematica-keygen](https://www.npmjs.com/package/mathematica-keygen)

### Mathematica 12.0

> **警告**
>
> 测试发现，版本 12 出现了一个与**非 ASCII 字符**相关的 bug：
>
> `SystemOpen` 函数无法打开含有中文字符的路径。若经常使用此函数，请谨慎升级。
>
> 同时，希望买了正版的同学去向官方反馈一下这个 bug。（目前仅在中文版下做了测试，不确定英文版是否受到影响。）
>
> 参看【Q21】。

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。

* (12.0) Windows 中文
  * [百度网盘](https://pan.baidu.com/s/1_X6Qf9722bo7nV-eI_kY_Q) 提取码：`fhtc`

* (12.0) Mac 中文
  * [百度网盘](https://pan.baidu.com/s/18M5m9qBKyrNQNfm0xcvd8Q) 提取码：`1234`

* (12.0.0) Windows 英文 + Mac 英文 + Linux 英文 + 破解工具 + 防止破解工具一回车就关的批处理文件
  * [百度网盘](https://pan.baidu.com/s/1NaUrPg5HAmMOiRpy7PdLhQ) 提取码：`cz8n`

  * 磁力链接：

    ```uri
    magnet:?xt=urn:btih:8a7dfb91ab64e034b51c9f8573eac905243708e7&dn=Mathematica%2012.0%20with%20Keygen%20(Win%26Linux%26Mac)&tr=udp%3a%2f%2ftracker4.itzmx.com%3a2710%2fannounce&tr=http%3a%2f%2ftracker.vivancos.eu%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftorrentclub.tech%3a6969%2fannounce&tr=http%3a%2f%2fgwp2-v19.rinet.ru%3a80%2fannounce&tr=https%3a%2f%2ftracker.fastdownload.xyz%3a443%2fannounce&tr=https%3a%2f%2ftracker.vectahosting.eu%3a2053%2fannounce&tr=udp%3a%2f%2ftracker.trackton.ga%3a7070%2fannounce&tr=udp%3a%2f%2ftracker.novg.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.demonii.si%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tvunderground.org.ru%3a3218%2fannounce&tr=udp%3a%2f%2f9.rarbg.to%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2ftorrent.nwps.ws%3a80%2fannounce&tr=udp%3a%2f%2fpubt.in%3a2710%2fannounce&tr=http%3a%2f%2fshare.camoe.cn%3a8080%2fannounce&tr=http%3a%2f%2ftorrentclub.tech%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.nyaa.uk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2famigacity.xyz%3a6969%2fannounce&tr=https%3a%2f%2ftracker.gbitt.info%3a443%2fannounce&tr=http%3a%2f%2fopen.acgnxtracker.com%3a80%2fannounce&tr=udp%3a%2f%2fchihaya.toss.li%3a9696%2fannounce&tr=udp%3a%2f%2ftracker2.itzmx.com%3a6961%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=https%3a%2f%2ft.quic.ws%3a443%2fannounce&tr=http%3a%2f%2famigacity.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.uw0.xyz%3a6969%2fannounce&tr=udp%3a%2f%2fcarapax.net%3a6969%2fannounce&tr=http%3a%2f%2ftracker.tvunderground.org.ru%3a3218%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=http%3a%2f%2ftracker.gbitt.info%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dyn.im%3a6969%2fannounce&tr=http%3a%2f%2fopen.trackerlist.xyz%3a80%2fannounce&tr=udp%3a%2f%2ftracker.justseed.it%3a1337%2fannounce&tr=http%3a%2f%2fretracker.mgts.by%3a80%2fannounce&tr=udp%3a%2f%2fbt.xxx-tracker.com%3a2710%2fannounce&tr=https%3a%2f%2f1337.abcvg.info%3a443%2fannounce&tr=http%3a%2f%2ft.acg.rip%3a6699%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&tr=http%3a%2f%2fcarapax.net%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.baikal-telecom.net%3a2710%2fannounce&tr=http%3a%2f%2ftracker.torrentyorg.pl%3a80%2fannounce&tr=udp%3a%2f%2fzephir.monocul.us%3a6969%2fannounce&tr=wss%3a%2f%2ftracker.openwebtorrent.com%3a443%2fannounce&tr=http%3a%2f%2f0d.kebhana.mx%3a443%2fannounce&tr=udp%3a%2f%2ftracker.iamhansen.xyz%3a2000%2fannounce&tr=udp%3a%2f%2fdenis.stalker.upeer.me%3a6969%2fannounce&tr=http%3a%2f%2ftracker1.itzmx.com%3a8080%2fannounce&tr=http%3a%2f%2ftracker2.itzmx.com%3a6961%2fannounce&tr=http%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=http%3a%2f%2ftracker3.itzmx.com%3a6961%2fannounce&tr=udp%3a%2f%2fhome.penza.com.ru%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.port443.xyz%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.netbynet.ru%3a2710%2fannounce&tr=http%3a%2f%2fmail2.zelenaya.net%3a80%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.filepit.to%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.supertracker.net%3a1337%2fannounce&tr=http%3a%2f%2ftracker.bz%3a80%2fannounce&tr=udp%3a%2f%2fthetracker.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker.open-internet.nl%3a6969%2fannounce&tr=http%3a%2f%2ftracker.port443.xyz%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.me%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.filemail.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.sevstar.net%3a2710%2fannounce&tr=http%3a%2f%2fretracker.sevstar.net%3a2710%2fannounce&tr=udp%3a%2f%2fpackages.crunchbangplusplus.org%3a6969%2fannounce&tr=http%3a%2f%2ftracker.novg.net%3a6969%2fannounce&tr=http%3a%2f%2fopen.acgtracker.com%3a1096%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=http%3a%2f%2ftracker4.itzmx.com%3a2710%2fannounce&tr=http%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&tr=http%3a%2f%2fvps02.net.orel.ru%3a80%2fannounce
    ```

### Mathematica 11.3

> **警告**
>
> 已证实，此版本必须安装在**英文路径**下，否则会打不开。其他版本是否有此问题暂不清楚。

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。

* (11.3.0) Windows 中文 + 破解工具
  * 磁力链接：

    ```uri
    magnet:?xt=urn:btih:29de7b51d85fa418c0af9812fd127a5acad158bd
    ```

* (11.3.0) Windows 中文
  * [百度网盘](https://pan.baidu.com/s/1SPqELlJYaLwgsJRLbMg8OA) 提取码：`3nem`

* (11.3.0) Mac 中文 + 破解工具
  * 磁力链接：

    ```uri
    magnet:?xt=urn:btih:b60c78d79a57b1fdb6d891d54dbf691cfbcff99c
    ```

* (11.3.0) Mac 中文
  * [百度网盘](https://pan.baidu.com/s/1Imn6SLCnzDlBIifTHjoOKw) 提取码：`7si9`

* (11.3.0) Windows 英文 + Mac 英文 + Linux 英文 + 破解工具
  * 磁力链接：

    ```uri
    magnet:?xt=urn:btih:aad5462ec9e4c20d350a53caff59bf6b7758a249
    ```

### Mathematica 10.4

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。

对于最新的版本 10 中文版，自版本 9.0.1 持续至今的中文帮助搜索能力退化问题已经得到了解决。（10.3.0 版本时，部分电脑需要使用 <http://tieba.baidu.com/p/4172398243> 中的方法进行修复，10.3.1 后似乎已无此问题）

[Mathematica 10.4.1 中文版](http://pan.baidu.com/s/1o8NEPei) 提取码：`wx9u`

[Mathematica 10.4 英文版](http://pan.baidu.com/s/1jHbldtG)

[Mathematica 10.4 英文版（Linux 版）](http://pan.baidu.com/s/1kUrz2qr)（前面已经说了，Linux 版没中文）

[Mathematica 10.4 英文版（Mac 版）](http://pan.baidu.com/s/1i3RfiNb)

[CDF Player 10.3.1 英文版](http://pan.baidu.com/s/1i4kFX7v)

### Mathematica 9.0.1

> **警告**
>
> 版本 9 的激活是历代最烦，并且有中文帮助搜索能力退化的问题，不建议使用。

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。

[Mathematica 9.0.1 中文版](http://pan.baidu.com/share/link?shareid=341776&uk=353288367)

[Mathematica 9.0.1 英文版](http://pan.baidu.com/s/1qWL166g)

[Mathematica 9.0.1 英文版](http://pan.baidu.com/s/1ntxRa5N)（Linux 版，前面已经说了 Linux 版没中文）

[Mathematica 9.0.1 英文版（Mac 版）](http://pan.baidu.com/s/1pJ0QFfd)

### Mathematica 8.0

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。

没有太多需求的初学者可以考虑先上手版本 8，参考[版本 9 的中文帮助搜索能力退化](http://tieba.baidu.com/p/3204136180)。**仍请注意兼容性等问题。**

[Mathematica 8.0.4 中文版](http://pan.baidu.com/s/1skUb3n3)（MD5：`6aebc6776548f7b6ed134efafdb2af5d`）

### 早期版本

这里再次强调，**如无特殊原因，请不要选择过老的版本！**

1. 较老的 Mathematica 与现代的有许多不兼容之处。
2. 较老的 Mathematica 往往与现代的计算机不兼容，尤其是 Mac。
3. 早期 Mathematica 的自带文档非常简略。
4. 在版本 7 以前，Mathematica 无官方中文版。
5. 在版本 10 以前，撤销 (Undo) 只有一次。版本 10 开始支持[多重撤销](https://reference.wolfram.com/language/ref/UndoOptions.html)。
6. [版本 9 的中文帮助搜索能力退化](http://tieba.baidu.com/p/3204136180)。
7. [绘图和动画等功能在版本 6 有过重大修改](https://note.youdao.com/noteshare?id=0c2719208239696d61182199327bd38c)。

所以，**如无特殊原因，请不要选择过老版本的 Mathematica！**

Mathematica 7.0 中文版[百度网盘](https://pan.baidu.com/s/1VOeMOe15755SaulpTXD4ig) 提取码：`axir` （注意，中文文档需要手动覆盖，不清楚怎么覆盖的就用高版本！）

Mathematica 5.0 英文版（Windows XP 可用）[百度网盘](https://pan.baidu.com/s/1MWnpsZ8QA2DBZXf1N6ayRg) 提取码：`8nb9`

Mathematica 4.1 英文版（Windows XP 可用）[百度网盘](https://pan.baidu.com/s/1FrZSuxlO4CULYIRfyhLa-Q) 提取码：`hcqq`

Mathematica 3.0 英文版（Windows XP 可用）[百度网盘](https://pan.baidu.com/s/1hscUVwo) 提取码：`n73z`

Mathematica 2.1 英文版（Windows 3.1 版）[百度网盘](https://pan.baidu.com/s/1RkmZUQxYxDMfV2sfe5HZsg) 提取码：`p7o2` （[IMG](<https://en.wikipedia.org/wiki/IMG_(file_format)>) 格式的软盘镜像，可以安装在 VMware 的 Windows 98 虚拟机上。）

Mathematica 1.2 英文版（DOS 版）[百度网盘](https://pan.baidu.com/s/1eRMJX54) 提取码：`ihbx` （[FLP](https://communities.vmware.com/message/246169#246169) (General Floppy Disk Image) 格式的 VMware 软盘镜像，可以安装在 VMware 的 Windows 98 虚拟机上，并且似乎硬盘至少要两个分区，否则无法画图。）

至于有版本收藏癖好的朋友，请自己去网上找吧。

* [Mathematica Quick Revision History - Wolfram](https://www.wolfram.com/mathematica/quick-revision-history.html)
* [A little bit of Mathematica history - Nasser M. Abbasi](https://www.12000.org/my_notes/compare_mathematica/index.htm)

## Mathematica 软件的激活

本文以激活 Mathematica 8 为例，并且假定你的电脑从来没有安装、激活过任何 Mathematica。

更高版本的操作大致相同，不同之处下面有说明。其他版本不在此教程范围内，请自行探索，或者在贴吧置顶帖中跟帖讨论。

但是，这里再次强调，**希望大家不要使用过老的版本！**

**安装和激活的步骤**大致为

1. 从上文下载 Mathematica 的安装程序。
2. 从下面获取对应的注册机。
3. 安装 Mathematica。
4. 进入手动激活页面，取得 Math ID。
5. 使用注册机算得 Activation Key （激活密钥）和 Password （密码）。
6. 完成激活。

### 注册机的下载地址

**注册机会被杀软报毒是常识。还是，吓不住的请买正版，购买方法在本文开头。**

**Windows 10 自带的安全软件 (Windows Defender) 会将版本 10 以上版本的注册机直接删掉。解压前，请打开 [Windows Defender 设置](https://support.microsoft.com/help/4012987)，将解压路径从查杀路径里[排除出去 (Exclusions)](https://support.microsoft.com/help/4028485)，或者[暂停 Real-time protection](https://support.microsoft.com/help/4027187)。**

**以下百度网盘地址均有效，异常只是暂时抽风，在地址栏上重新回车一次（不能直接刷新！）就能看到下载页面了！**

注册机主要有 3 种形式：

* 网页 / JavaScript
* 命令行程序
* 图形界面程序

本文中，没有特别注明小版本的注册机，都是通用的。例如，11.1 注册机既可以激活 11.1.0 又可以激活 11.1.1。

> **注意**
>
> **命令行程序需要在命令行下运行！**
>
> 命令行形式的注册机**不能双击打开**！
>
> 对于 Windows，这里介绍一种方法：
>
> 1. 在 Windows 资源管理器 (Windows Explorer) 中到达程序所在目录。
> 2. 在页面空白处，按住 <kbd>Shift</kbd>，右键单击，选择 **在此处打开 PowerShell 窗口** (Open PowerShell window here)。
> 3. 输入法切换到英文，输入 `.\`，你可以接着输入文件名开头几个字。
> 4. 反复按 <kbd>Tab</kbd>，直到补全出程序的路径。（如果这个目录下有很多文件，可能会死机。）
> 5. 按回车 <kbd>Enter</kbd> 执行。
>
> 再强调一遍，**询问为什么一回车注册机就关了的，直接删，加封禁十天**。

**版本 12** 的注册机：

同时适用于中文版、英文版。已经附在上面的下载地址里了！

注意，这次有 2 种形式的注册机：

* 网页。打开网站，跟随那里的指示。
* 命令行。如果不知道怎么开这个注册机，请使用附带的批处理文件（就是那个扩展名为 `bat` 的东西）。用法写在文件名上！

**版本 11.3** 的：
[注册机](https://pan.baidu.com/s/1zCO8b5KCqCM61RMzcD_ILg) 提取码：`94kn`

这个是基于网页的注册机，要在浏览器中用，不需要命令行。

注意，这个注册机需要

* 在第 1 个框填 Math ID。
* 在第 2 个框**随便按 `xxxx-xxxx-xxxxxx` 的格式**输入一个激活密钥 (Activation Key)。而且，这个密钥必须填回 Mathematica！

如果不知道该填什么，请参考下文。

**版本 10.4** 的：
[注册机](http://pan.baidu.com/s/1dF8xg0h)

此注册机可以完全激活 10.4.0 及 10.4.1 中、英文版。

这个注册机**必须在命令行下使用**！也就是说，请打开命令行，然后调用这个注册机。不明白什么叫“打开命令行然后调用这个注册机”的，<del>请乖乖用版本 8 的注册机多试几次</del> 请下载[这个批处理文件（提取码：`uh59`）](https://pan.baidu.com/s/1HR2bwacizkNrPRmYi1Kmvw)，用法写在文件名上。

还有，

* 密码里的 `::1` 也是密码的一部分！
* 此注册机生成的 Key 总是 `1234-4321-123456`，不要大惊小怪。重要的是那个密码！
* “1234-4321-123456” 中间的横杠也是 Key 的一部分，不要擅自去掉！

**版本 8 到 10** 的注册机：

> <del>[新版注册机（可用于版本 8、9、10）下载地址](http://pan.baidu.com/share/link?shareid=188221&uk=1661347987)（注意激活版本 9 时需要多试几次，下详。版本 10 亦可使用本注册机，但需试很多次，成功率极低。）</del>可用于版本 8、9、10 的新版注册机下载地址现已失效，且吧主电脑里没存档，故暂时无法补档，欢迎手里有这个注册机的同学补上。不过，看了本教程的你应该也注意到了，这个新版注册机其实并不好使。对版本 8，新旧注册机没区别。对版本 9，部分计算机可能没法用新注册机激活，还不如用旧版，也就多一道手续；更何况——这里再强调一遍——版本 9 的自带帮助有搜索能力退化的问题，新手别用！

[旧版注册机（可用于版本 8、9、10）](http://pan.baidu.com/s/1eQGtvF0)

注意，激活版本 9 时，需要多试几次，下详。已证实，部分计算机必须使用旧版注册机才能完全激活版本 9。使用这个注册机激活版本 9 时要多点步骤，下详。同样的，密码里的 `::1` 也是密码的一部分！版本 10 亦可使用本注册机，但需试很多次，成功率极低。

> **注意**
>
> 版本 8 的这两个注册机，需要 VC2010 运行库 (Microsoft Visual C++ 2010 Redistributable Package)。如果注册机不能运行，请下载：
>
> * 打包：[百度网盘](http://pan.baidu.com/share/link?shareid=386759&uk=1661347987)（链接似乎已经废了）
> * 32 位：[Microsoft Visual C++ 2010 Redistributable Package (x86) - Microsoft Download Center](https://www.microsoft.com/download/details.aspx?id=5555)
> * 64 位：[Microsoft Visual C++ 2010 Redistributable Package (x64) - Microsoft Download Center](https://www.microsoft.com/download/details.aspx?id=14632)
>
> 下载运行库，安装之后，注册机应该就能运行，不要嫌麻烦！

[Mathematica 9 英文版的注册机](http://pan.baidu.com/share/link?shareid=549603888&uk=1661347987)。（注意，这个只能用来激活英文版！）

### 安装软件和获取 Math ID

> **注意**
>
> Windows 10 下要打开防火墙！原因详见【Q6.5】。

1. 安装 Mathematica。

2. 安装完成后，默认会启动 Mathematica，弹出 “Wolfram 产品激活”对话框。（如果要手动打开 Mathematica，不妨参考后文“Mathematica 入门”部分。）

   点击下方的**其它方式激活** (Other ways to activate)。（切记！不要说激活密钥无效，因为你选错了。）

   ![“Wolfram 产品激活”对话框](http://ww4.sinaimg.cn/large/a15b4afegw1f7gukpbbqcj20i80dltaf)

3. 在新的页面中，选择**手动激活** (Manual Activation)。

   ![在其它方式激活中，选择手动激活](http://ww4.sinaimg.cn/large/a15b4afegw1f7guljc5s9j20i80dlgne)

4. 在新的页面中，记下 **Math ID**。

   ![“手动激活”对话框](http://ww4.sinaimg.cn/large/a15b4afegw1f7gulhnsflj20i80dl0uk)

   注意，是**把你的电脑上的这串数复制下来**。不要抄上面的图！

### 运行注册机

1. **保持** Mathematica 激活对话框，不要关闭。

2. 打开注册机。
   * 注册机的扩展名是 `exe`，不要点其他的！
   * 除非另有说明，激活中文版不要用英文版注册机，否则打不开帮助文档。
   * 下面的截图是版本 8、9 的注册机。版本 10 至 11.2 的注册机只有那个黑乎乎的命令行界面，版本 11.3 后还出现了网页 / JavaScript 形式的注册机，但**使用方法类似，不要大惊小怪**！

3. 将 Math ID 粘贴进注册机的 Math ID （第一个）输入框中。
4. 回车，或者点击注册机下方 **Save mathpass**，得到 Activation Key 和 Password。

   ![Mathematica 8 的注册机](http://ww4.sinaimg.cn/large/a15b4afegw1f7gulg7i3hj208h0b2gmm)

   注意：图中所示的是老版注册机的界面，它的 Activation Key 的格式是 `4 位数字-4 位数字-5 位字母`，或者里面有 `::1`。

<del>使用新版注册机算出来的 Activation Key 是 `4-4-6` 的形式。这里强烈不建议使用新版注册机激活版本 9 和版本 10，因为已经证实，在许多计算机上，新版注册机无法完全激活版本 9 和版本 10。</del>（版本 8 的新版注册机已经没有了。）老注册机在激活版本 9 时可能要多点步骤，详见下文。

最后再强调一遍，版本 11.3 的第 2 个框是用来填激活密钥 (Activation Key) 的，只要按 `xxxx-xxxx-xxxxxx` 的格式随便填一个即可！

注意，填回 Mathematica 软件时，填在软件里的激活密钥 (Activation Key) 必须和填在注册机中的一致！

如果读到这里你依旧不知道该填什么，请仔细阅读上文关于版本 8、9 的注册机的解说！

### 填回 Activation Key 和 Password

算出 Activation Key 和 Password 后，复制，粘贴入 Mathematica 激活界面中对应的输入框，完成激活即可。

（注意：对于版本 8 到 10，如果你使用了老版注册机或者版本 10 英文版的新注册机，那么，记得一起复制 Password 中的 `::1`。那也是密码的一部分！如果要手抄，注意这两个冒号都是英文冒号！）

对于版本 10 及更高版本，激活步骤比版本 8 和 9 简单，并且近乎 100% 成功。

对于 Mathematica 8 中文版，按照本文步骤，100% 激活成功。

对于 Mathematica 9 中文版，激活步骤一样，只是不容易成功，需要**多试几次**，一定要多试几次！
如果人品好，两三次就成功了；如果人品实在差，试了 30、40 次都没有成功，那么还是老实安装其他版本吧。

对于 Mathematica 9 英文版，激活步骤一样，只是不必纠结，因为有对应的注册机，见前文“注册机的下载地址”。

### 使用老版注册机激活版本 9 时的额外步骤

由于一些尚不明确的原因（欢迎补充），有部电脑在使用新版注册机激活版本 9 中文版后，依旧无法打开中文帮助。

目前发现，唯一对策是使用老版注册机。老版注册机一度被认为无法正常激活版本 9 中文版，但是事实并非如此。使用老版注册机激活后所需的额外步骤如下：

1. 打开 Mathematica。
2. 点击顶部菜单的 **编辑** > **偏好设置** > **界面** > **菜单和对话框语言设置** > **ChineseSimplified**。
3. 重启软件，自带帮助就可以顺利打开了！

## Mathematica 入门

“那么软件装好之后该怎么学习呢？”

不妨阅读以下几篇文章：

[《写给新手》](http://note.youdao.com/noteshare?id=058e6037396d925af1f4abe4d54a52a8)

[《怎样算阶乘（一）—— Mathematica 是个计算器》](http://note.youdao.com/noteshare?id=c5114ccda3270199fd801952cf785bff)

[《你查过自带帮助了吗？你真的会查自带帮助吗？》](http://note.youdao.com/noteshare?id=abd51087f44c0b6a41ff6022d549dc41)

[《有的字母蓝，有的字母黑，你知道为什么吗？你对语法着色有认识吗？》](http://note.youdao.com/noteshare?id=06adaac6aaf85c87c4cd6fdf715b418c)

下面列出一些新手常见问题：

* 如果要打开 Mathematica，
  * Windows 请双击新生成的桌面图标，或者点击开始菜单中名字叫 Mathematica 的那个。如果要到安装目录里去开，请点 `Mathematica.exe`。不要跑去点那些名字带 <del>Kernel</del> 的！
  * macOS 请在 Applications 里点击 Mathematica。建议固定到 Dock。
* Mathematica 9 及更早版本的界面就是一个细长条，不要大惊小怪。新建笔记本（写代码）请点击细长条上的 **文件** > **新建** > **笔记本**，或者直接按 <kbd>Ctrl</kbd> + <kbd>N</kbd>。
* <kbd>F1</kbd> 打开帮助文档，并搜索光标处的符号。自带帮助是最好的教材。
* <kbd>F2</kbd> 打开符号补全建议，包括自定义的函数。<kbd>Tab</kbd> 用当前选中的那个补全。
* 复制代码前，用 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> 将当前 cell 转换为 InputForm，再复制，可以避免代码变乱。
* Wolfram 语言区分大小写。Mathematica 内置函数都以大写字母开头。
* Wolfram 语言的标点符号都是半角英文标点。
* Wolfram 语言有 4 种括号，分工明确。
* 区分 `=` （赋值）与 `==` （相等）。
* 区分 `=` （立即赋值）与 `:=` （延时赋值）。其他几对立即与延时最好也学习一下。
* 带有下标、上标的变量不是独立的符号，计算中尽量避免使用。
* 符号（变量、函数）的定义会持久存在，即使关闭笔记本也仍然存在。除非 Clear 清除，或者重启 Mathematica。
* 注意语法着色。下面列出部分默认颜色：
  * 未赋值的全局符号是蓝色 (#002cc3)。
  * 已赋值的符号是黑色 (#000000)。
  * Mathematica 内置函数都是黑色。
  * 局部变量是绿色 (#438958)。
  * 特殊局部变量是水绿色 (#3c7d91)。
* [`Show`](https://reference.wolfram.com/language/ref/Show.html) 函数可以将多幅图合成为一个。
  * 如果合并之后绘图范围不全，给 `Show` 函数添加 `PlotRange -> All` 选项。
* [`AxesOrigin`](https://reference.wolfram.com/language/ref/AxesOrigin.html) 选项设置坐标轴的原点。
* [`Clear`](https://reference.wolfram.com/language/ref/Clear.html) 函数清除符号的定义，[`ClearAll`](https://reference.wolfram.com/language/ref/ClearAll.html) 函数还会清除属性等相关信息。
* `Import[source, "Table"]` 导入以 Tab 分隔的数据文件 ([arbitrary tabular data](https://reference.wolfram.com/language/ref/format/Table.html))。
* 不要害怕报错信息，耐心阅读。
* Mathematica 无法求解解析复杂度太大的问题。简单的算式的背后可能是非常复杂的符号分析。

## 安装激活 Mathematica 时可能碰到的问题

### 【Q1】为何首次启动 Mathematica 时，没有弹出激活界面

【A1】如果之前安装过 Mathematica，且电脑又没有重装过。那么，再次安装 Mathematica 时，可能不会弹出激活界面。因为 Mathematica 卸载后，激活文件 `mathpass` 默认保留，不会自动删除。

如果之前是成功激活的，比如，之前成功激活了 Mathematica 8，然后卸载 Mathematica 8，安装 Mathematica 9，那么，这时 Mathematica 9 不会弹出激活界面，而实际上 Mathematica 9 已经激活了。

验证是否完整激活的一个办法是，尝试自由格式输入是否可用。

当然，这也是那些人品不行、激活几十次都不成功、但却一定要使用 Mathematica 9 中文版的朋友可以采用的一个方法。就是先安装 Mathematica 8 中文版，按照本文步骤激活成功后，卸载 Mathematica 8，然后再安装 Mathematica 9，这样就可以使用 Mathematica 9 中文版的全部功能了。

### 【Q2】macOS 或者 Linux 系统怎么使用某些注册机

【A2】

本文提供的一些注册机只运行于 Windows。请按下述方法使用：

1. 在自己的电脑上安装好 Mathematica。
2. 在一台安装有 Windows 系统的电脑上运行注册机。
3. 打开你的 Mathematica 的激活界面，获取 Math ID。
4. 把这个 Math ID 敲键盘输入注册机相应的输入框中。
5. 完成激活。

Activation Key 和 Password 是对应于 Math ID 的，跟硬件设备无关。

### 【Q3】如何实现 Mathematica 帮助文档中英文切换（满足某些有特殊癖好的朋友）

【A3】如果你的电脑上安装了 Mathematica 英文版，并且想用中文文档，那么，把中文帮助文档拷到你的电脑上即可：

1. 找台安装了中文版 Mathematica 的电脑。
2. 进入它的 Mathematica 的安装目录。
   * 可以在 Mathematica 里执行 `$InstallationDirectory` 来查询 Mathematica 的安装目录。以版本 9.0 为例，Windows 版默认是 `C:\Program Files\Wolfram Research\Mathematica\9.0`。
3. 把它的 `Documentation` 文件夹的内容复制出来，复制到你的电脑的该文件夹里。
4. 在 Mathematica 偏好设置 (Preferences) 里，语言 (Language) 选 English 就是英文帮助文档，选中文就是中文帮助文档。切换语言需要重新启动 Mathematica。

当然，同时拥有两份文档的代价是，Mathematica 占用的硬盘空间几乎增加一倍。

### 【Q4】注册机里 Computer Name 是否分大小写

【A4】不分。

### 【Q5】注册机算出来的 Activation Key 只有 13 位

【A5】因为使用了旧版的注册机，此注册机也可以用，但要多些步骤，上详。

### 【Q6】出现问题“Assertion 'foundPrinterDevice'在 Printing.c:3950时失败”

![Mathematica 启动错误](http://ww4.sinaimg.cn/large/a15b4afegw1f7gusak0ctj20b406haai)

【A6】打印机服务 (Print Spooler) 没开。

解决方案之一：
请在运行 (<kbd>Win</kbd> + <kbd>R</kbd>) 中输入 `msconfig`，转到 **服务** (Services) 选项卡，打开 Print Spooler 服务，重启电脑。

### 【Q6.5】出现 `Error code: 698`，内核可以启动，但主程序（前端）无法启动

![Error code 698](http://ww4.sinaimg.cn/large/a15b4afegw1f7gutazpgmj20az06xwf2)

【A6.5】

1. 打开系统服务中心，在里面找到 Windows 防火墙，启动它。
   1. 还可能需要检查 [Windows Defender Firewall 设置](https://support.microsoft.com/help/4028544)。
2. 进入你的 Mathematica 的安装目录，再进入 `SystemFiles\Fonts` 文件夹，把里面所有 ttf 文件双击点开（或者右键单击）并安装一遍。
3. 就应该能用了。

Windows 10 特有功能：只有启动防火墙，ttf 字体文件才能打开并安装。参看 [Enable Windows 10 firewall to install fonts - 404 Tech Support](https://www.404techsupport.com/2015/09/11/enable-windows-10-firewall-install-fonts/)。

### 【Q7】Mathematica 支持 64 位系统吗

【A7】Mathematica 安装包同时包含 32 和 64 位，它会自动判断你的系统类型并安装。

从 12.1 开始，Mathematica 仅支持 64 位操作系统。其他多项系统要求也都显著提高。

### 【Q8】64 位系统在安装了 VC2010 运行库后，那两个注册机仍然无法使用

【A8】对于 64 位系统，VC2010 运行库的 64 位 (x64) 和 32 位 (x86) 版本都要安装，然后那个注册机才能运行。也就是说，64 位系统需要安装本文百度网盘下载链接 VC2010 文件中 X86 和 X64 两个文件。具体请下载文件查看。

### 【Q9】激活不当，需要重置 Mathematica：Mathematica 已激活，但功能有限制，比如不能使用自由输入、虚拟全书、函数浏览器、帮助文档

* 自由输入 (Free-Form Input)
* 帮助文档 (Documentation)
* 虚拟全书 (Virtual Book)

（这是最常见的问题，也是激活不当的问题。）

【A9】首先，请确保你已经使用了正确的注册机！注册机的问题具体参见前文！

如果注册机正确，但还是有问题，那么，一般是因为之前安装过 Mathematica 但是激活不完全。

解决步骤是

1. 删除残余信息。
2. 再重新激活。

删除配置信息的方法，具体请参考官网的教程《[如何通过恢复 Mathematica 默认配置来解决常见问题 (How do I fix common problems by resetting Mathematica to its default configuration)](https://support.wolfram.com/kb/12464)》，建议中英文版本对照阅读。

下面仅介绍 Windows 上的删除方法。

首先，按照官网的说法，在启动 Mathematica 的时候，同时按住 <kbd>Ctrl</kbd> 和 <kbd>Shift</kbd>，直至 Mathematica 屏幕出现。

如果问题仍然存在，那么可以手动删除。

对于 **Windows 8 及更高版本**的系统，可以利用 PowerShell。请**以管理员权限**打开一个 **PowerShell** 窗口，然后执行以下步骤。（Windows 7 自带的 Windows PowerShell 2.0 很不稳定、功能匮乏。如有需要，[请更新](https://docs.microsoft.com/powershell/scripting/install/installing-windows-powershell)。）

第 1 步，执行下面这段命令

```powershell
Remove-Item -Path "$env:ProgramData\Mathematica\Licensing" -Recurse -Force
```

第 2 步，如果问题仍然存在，执行下面这段命令

```powershell
Remove-Item -Path @("$env:ProgramData\Mathematica", "$env:USERPROFILE\AppData\Local\Mathematica", "$env:USERPROFILE\AppData\Roaming\Mathematica", "$env:USERPROFILE\AppData\Local\Wolfram", "$env:USERPROFILE\AppData\Roaming\Wolfram") -Recurse -Force
```

第 3 步，如果问题仍然存在，**卸载 Mathematica**，之后，执行第 2 步的命令，再执行下面这段命令

```powershell
Remove-Item -Path @("Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Wolfram Research", "Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Mathematica") -Recurse -Force
```

> **注意**
>
> * 如果报错“无法找到路径”，那么，相应文件早已从您的计算机上删除，无需在意。
> * 如果发生其他错误，请仔细检查报错信息，并对症处理。参看 [Remove-Item](https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Management/Remove-Item)。

对于**较低版本的 Windows**，请阅读以下内容。

> **注意**
>
> * 以下 `%ProgramData%`、`%USERPROFILE%` 等都是 **Windows 环境变量**。Windows 资源管理器 (Windows Explorer) 可以自动识别它们。
> * 以下都是**隐藏文件夹**，需要[显示隐藏文件夹](https://support.microsoft.com/help/14201)。
> * Mathematica 的残留信息一定要清理干净！
> * 已经证实，在部分计算机上，即使正确使用注册机，并且完成此处所述的步骤，依旧无法清理干净残余信息。那么，这里还有最后一个办法（已在 Windows Vista 32 位，Mathematica 9.0.1 中文版测试）：
>   * 首先，在计算机上新建一个帐户：开始 -> 控制面板 -> 用户帐户和家庭安全 -> 添加或删除用户帐户 -> 创建一个新帐户（帐户的权限，笔者选的是“管理员 (Administrator)”，不过，大概 Guest 也可以？大家可以试一试，然后把结果编辑进来）。然后，把 Mathematica 安装在这个新的帐户里，就不用担心残留信息的问题了。安装和激活完成之后新建的帐户可以删除。

第 1 步，删除激活信息。

Windows XP 在这 2 个目录：

```text
C:\Documents and Settings\Administrator\Application Data\Mathematica\Licensing

C:\Documents and Settings\All Users\Application Data\Mathematica\Licensing
```

Windows 7 及更高版本的系统在：

```text
%ProgramData%\Mathematica\Licensing
```

之后，**通常**需要继续清理其他残留，**要全部删除**！（似乎，只有一些人会面临此问题，原因暂不明。已知的可能存在残留的地方列于下方，欢迎补充。）

第 2 步，如果问题仍然存在，删除下列文件夹：

```text
%ProgramData%\Mathematica
%USERPROFILE%\AppData\Local\Mathematica
%USERPROFILE%\AppData\Roaming\Mathematica
%USERPROFILE%\AppData\Local\Wolfram
%USERPROFILE%\AppData\Roaming\Wolfram
```

第 3 步，如果问题仍然存在，**卸载 Mathematica**，之后，执行第 2 步，再删除下列注册表键（对于不同版本的 Mathematica，可能存在下列几个位置之一）：

```text
HKEY_LOCAL_MACHINE\SOFTWARE\Wolfram Research
HKEY_LOCAL_MACHINE\SOFTWARE\Mathematica
```

> **几种打开注册表编辑器 (regedit) 的方法**
>
> * <kbd>Win</kbd> + <kbd>R</kbd>，键入 `regedit`，执行
> * <kbd>Win</kbd> + <kbd>S</kbd>，键入 `regedit`，执行
> * <kbd>Win</kbd> + <kbd>Q</kbd>，键入 `regedit`，执行
> * 打开 PowerShell 或 cmd，键入 `regedit`，执行
> * 开始菜单 -> 运行，键入 `regedit`，执行

### 【Q10】提示说：这份 Mathematica 使用的密码不允许英语以外的其它语言

提示说：

> 这份 Mathematica 使用的密码不允许英语以外的其它语言。关于启用更多的功能，请与 Wolfram Research 联系 (`http://www.wolfram.com`). 您必须重新启动前端。

【A10】因为你用英文注册机激活中文版。（认真看教程！不要跑外面去乱下注册机！🤦）

再强调一遍，**一定要用对注册机！**

要完全激活版本 8 和版本 9 的中文版，只能使用版本 8 的中文版注册机。

不清楚什么是中文版注册机的人，以及自以为使用了中文版注册机却依然出现这个问题的人，请使用本教程提供的注册机！

### 【Q11】Windows XP 32 位 最多能支持 Mathematica 多高的版本

【A11】版本 9。

* [Mathematica 9 system requirements - Wolfram Support](https://support.wolfram.com/12432)
* [Mathematica 10.0–10.3 system requirements - Wolfram Support](https://support.wolfram.com/23176)

### 【Q12】为什么每次点开注册机都出现“已停止工作”

![注册机已停止工作，在 Windows 8](http://ww4.sinaimg.cn/large/a15b4afegw1f7guucxxcbj20a60550so)

【A12】前文已经说了，请安装 VC 运行库。

### 【Q13】使用没问题，但界面出现乱码，如图

![Mathematica 9 界面乱码，在 Windows 7](http://ww4.sinaimg.cn/large/a15b4afegw1f7guv45c0ej20g400idfn)

【A13】似乎存在多种原因。

一种已经被证实的原因是，电脑的系统区域 (system locale) 被改动过，此种情况改回中文区即可解决。

### 【Q14】版本 10（不论中英文版）卡顿，卡在初始界面，界面显示不完全

【A14】具体参考<del><http://tieba.baidu.com/p/4039684644></del>（注：此链接因 妙谛莲花 被百度无故封号，目前暂无法访问）。卡顿问题在该帖 2 楼，卡在初始界面的问题在该帖 3 楼，界面显示不完全的问题在该帖 4 楼。

### 【Q15】Windows 10 最多能支持 Mathematica 多低的版本

【A15】至少版本 8 之后的都支持。（前面的没测试过。）

### 【Q16】安装完后打开出现未响应，如图所示

![Wolfram Mathematica 10.3 未响应，在 Windows 7](http://ww4.sinaimg.cn/large/a15b4afegw1f7guw7rirbj20fr0g5di1)

【A16】 原因是，没更新 Windows 的一个补丁。如果你把自动更新关了，打开更新，更新内容里有 Windows Service Pack，更新之后重新安装即可。

### 【Q17】 安装的时候出现无响应，如下图

![Wolfram Mathematica 10.4 已停止工作，在 Windows 7](http://ww4.sinaimg.cn/large/a15b4afegw1f7guwxv9lij20di0bljsm)

【A17】软件必须安装在**英文**名称的路径下。

### 【Q18】 安装后是否需要关闭 Mathematica 的自动更新

【A18】不需要。截止目前，Wolfram 对破解版没有任何打击措施。此外，有证据表明某些小的 bug 修复是通过自动更新进行的，所以，最好不要关。

### 【Q19】 为什么注册机一回车完就直接关了

【A19】正文里已经说了多遍，命令行注册机不能双击打开！右键选打开当然也不行，不要自作聪明！

请在命令行下使用注册机。也就是说，请打开命令行，然后调用这个注册机。

不明白什么叫“**打开命令行然后调用这个注册机**”的请使用上文提供的批处理文件！

### 【Q20】 安装后出现 `Error code: 702`

【A20】和 Mathematica 自带的字体安装未成功有关。

请仔细检查安全软件（比如，360 啊，360 啊，还有 360 啊）是否屏蔽了外部字体安装。参看 [Error code 702 on launch of Mathematica (Windows 10) - Wolfram Community](https://community.wolfram.com/groups/-/m/t/917946)。

### 【Q21】 软件是否可以安装在中文路径下

【A21】若想避免麻烦，安装时应尽量**避免使用中文路径**。

Mathematica **理论上**可以安装在中文路径下，但是，近几版 Mathematica 已多次出现了**和中文（确切地说是 Unicode）相关的 bug**。并且目前已经证实，至少 11.3 中文版，若是安装在中文路径下，会打不开。

大家也可积极对其他版本进行实验，丰富本教程内容。

Mathematica 的多个组件都有 Unicode 支持问题，而且长期未修复。参看 [How to workaround failures with Unicode filepaths - Stack Exchange](https://mathematica.stackexchange.com/q/143953)。
