---
layout: default
title: {{ site.title }}
---

# Mathematica 激活指南

首先还是要强调一句：
**用盗版是不得已的，大家有能力的话还是要支持正版（学生版80美元——最外层页面写的确实是$161，但是你[进入购买页面](https://store.wolfram.com/arrive.cgi?Qualifier=STUD&URI=/view/app/mathematica/student&Country=CN)就会变成$80了）！**
购买方法的一些介绍： <http://tieba.baidu.com/p/2570976088>

---

此外，在近期，Wolfram 推出了**免费**的 **Wolfram Engine for developers**。此软件实质上就是一个**没有笔记本界面也没有本地自带帮助**的 Mathematica。但是，再强调一次，它是**免费**的！ 并且，虽然自带笔记本被锁了，但你可以[用 Jupiter 笔记本](https://mathematica.stackexchange.com/q/198839/1871)啊。总之，Windows 版的链接在这里（其他版本暂时没人传……）：

链接:

[Windows 版（百度盘）](https://pan.baidu.com/s/1k2QxF05XnSKd1QIWz-y9vw)
提取码: `skr5`

[Linux版（蓝奏云）](https://www.lanzous.com/b00n4te9a/)（由于蓝奏云限制 请自己删除文件后缀名最后的.e）
密码：`dn3c`

Wolfram Engine 的激活方法可参考[官网的介绍](http://support.wolfram.com/kb/45743)。

---

[百度贴吧](http://tieba.baidu.com/f?kw=mathematica)里的帖子不能编辑，很不方便。

但大家<del>在注册失败这事上可以说是拥有无穷的创造力</del>，注册过程又会出现新的问题。故开此文档，整理注册激活 Mathematica 过程及注册过程中可能碰到的问题。大家以后注册时如果出现新的问题，欢迎补充整理。

在贴吧置顶中提出“新的问题”前请先仔细阅读本文。**问重了的直接删**。

询问为什么一回车注册机就关了的，直接删，加封禁十天。

**教程中的地址均未失效，异常只是百度盘暂时抽风，在地址栏上重新回车一次（不能直接刷新！）就能看到下载链了！**

同时，请意识到，没有被本文涵盖的问题通常是**不太常见**的。所以，如果真的希望问题尽快得到解决，那么，在提出“新的问题”时请**尽可能详细**地给出背景信息。【失败的**具体**症状（你单单说一句“我下载失败了”或是“我这里密钥总是不对”没有任何意义），操作系统是否做过什么特殊的设置，是否使用过××优化大师，系统自动更新是否已打开，等等。】

## Mathematica 软件下载

这里提供 MMA 8 中文版、 MMA 9 中英文版、 MMA 10 中英文版、MMA 11 中英文版、MMA 12 的英文版 的百度网盘地址，和 MMA 7 中文版、 MMA 5 英文版、MMA 3 英文版、MMA 1 英文版 的下载地址。

另，官网的下载地址目前在大陆被墙，所以害怕有病毒什么的以至非要去官网下载的同学请自己想办法爬墙。
本文提供的安装包和官网是一样的，若不信，可对比 MD5。

> * Linux/macOS 可用 Unix utility `md5sum`；
> * Windows 可用 PowerShell 的 `Get-FileHash -Algorithm MD5`。

**以下地址均未失效，异常只是百度盘暂时抽风，在地址栏上重新回车一次（不能直接刷新！）就能看到下载链了！**

> **注意**
>
> 英文版也可以调出中文提示，但是它没有中文帮助。只有带了**中文帮助**的才叫中文版！
>
> ---
>
> Linux 版无中文版，自行汉化的方法可参考 <http://tieba.baidu.com/p/4024190694>。
>
> ---
>
> Windows 版对 HDPI 显示器的支持不佳，导致显示模糊。该问题可能会长期存在。可以通过设置 **高 DPI 缩放替代** 为 **应用程序**，以及调节 Wolfram 笔记本的缩放等措施来暂缓。
>
> ---
>
> 没有太多需求的初学者可以考虑先上手版本 8，参考 <http://tieba.baidu.com/p/3204136180>。*仍请注意兼容性等问题。*
>
> ---
>
> **如无特殊原因请不要选择过老的版本！**
>
> 1. 较老的 Mathematica 与现代的有许多不兼容之处。
> 2. 较老的 Mathematica 往往与现代的计算机不兼容，尤其是 Mac。
> 3. 在版本 7 以前，Mathematica 无官方中文版。
> 4. 早期 Mathematica 的自带文档非常简略。
> 5. [绘图和动画等功能在版本 6 时有过重大修改](https://note.youdao.com/noteshare?id=0c2719208239696d61182199327bd38c)。

### Mathematica 12.0

> **警告**
>
> 测试发现，版本 12 新增了一个与 **非 ASCII 字符** 相关的 bug：
>
> `SystemOpen` 函数无法打开含有中文字符的路径，若经常使用此函数，请谨慎升级。
>
> ——同时，希望买了正版的同学去向官方反馈一下这个 bug。（目前仅在中文版下做了测试，不确定英文版是否受到影响。）

> **注意**
>
> 英文版也可以调出中文提示，但是它没有中文帮助。只有带了**中文帮助**的才叫中文版！
>
> Linux 版无中文版，自行汉化的方法可参考 <http://tieba.baidu.com/p/4024190694>。

[Mathematica 12.0 中文版（Win版）](https://pan.baidu.com/s/1_X6Qf9722bo7nV-eI_kY_Q)
提取码: `fhtc`

[Mathematica 12.0 中文版（Mac版）](https://pan.baidu.com/s/18M5m9qBKyrNQNfm0xcvd8Q)
提取码: `1234`

[Mathematica 12.0.0 英文版 (Win版 + Mac版 + Linux版 + 破解工具 + 防止破解工具一回车就关的命令行)，百度盘链接](https://pan.baidu.com/s/1NaUrPg5HAmMOiRpy7PdLhQ) 提取码: `cz8n`

磁力链接

```uri
magnet:?xt=urn:btih:8a7dfb91ab64e034b51c9f8573eac905243708e7&dn=Mathematica 12.0 with Keygen (Win&Linux&Mac)&tr=udp://tracker4.itzmx.com:2710/announce&tr=http://tracker.vivancos.eu/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://torrentclub.tech:6969/announce&tr=http://gwp2-v19.rinet.ru:80/announce&tr=https://tracker.fastdownload.xyz:443/announce&tr=https://tracker.vectahosting.eu:2053/announce&tr=udp://tracker.trackton.ga:7070/announce&tr=udp://tracker.novg.net:6969/announce&tr=udp://open.demonii.si:1337/announce&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.tvunderground.org.ru:3218/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://exodus.desync.com:6969/announce&tr=http://torrent.nwps.ws:80/announce&tr=udp://pubt.in:2710/announce&tr=http://share.camoe.cn:8080/announce&tr=http://torrentclub.tech:6969/announce&tr=udp://tracker.nyaa.uk:6969/announce&tr=udp://tracker.coppersurfer.tk:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://ipv4.tracker.harry.lu:80/announce&tr=udp://amigacity.xyz:6969/announce&tr=https://tracker.gbitt.info:443/announce&tr=http://open.acgnxtracker.com:80/announce&tr=udp://chihaya.toss.li:9696/announce&tr=udp://tracker2.itzmx.com:6961/announce&tr=udp://explodie.org:6969/announce&tr=https://t.quic.ws:443/announce&tr=http://amigacity.xyz:6969/announce&tr=udp://tracker.uw0.xyz:6969/announce&tr=udp://carapax.net:6969/announce&tr=http://tracker.tvunderground.org.ru:3218/announce&tr=udp://tracker.swateam.org.uk:2710/announce&tr=http://tracker.gbitt.info:80/announce&tr=udp://tracker.dyn.im:6969/announce&tr=http://open.trackerlist.xyz:80/announce&tr=udp://tracker.justseed.it:1337/announce&tr=http://retracker.mgts.by:80/announce&tr=udp://bt.xxx-tracker.com:2710/announce&tr=https://1337.abcvg.info:443/announce&tr=http://t.acg.rip:6699/announce&tr=http://tracker.opentrackr.org:1337/announce&tr=udp://retracker.lanta-net.ru:2710/announce&tr=http://carapax.net:6969/announce&tr=udp://retracker.baikal-telecom.net:2710/announce&tr=http://tracker.torrentyorg.pl:80/announce&tr=udp://zephir.monocul.us:6969/announce&tr=wss://tracker.openwebtorrent.com:443/announce&tr=http://0d.kebhana.mx:443/announce&tr=udp://tracker.iamhansen.xyz:2000/announce&tr=udp://denis.stalker.upeer.me:6969/announce&tr=http://tracker1.itzmx.com:8080/announce&tr=http://tracker2.itzmx.com:6961/announce&tr=http://explodie.org:6969/announce&tr=http://tracker3.itzmx.com:6961/announce&tr=udp://home.penza.com.ru:6969/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=udp://retracker.netbynet.ru:2710/announce&tr=http://mail2.zelenaya.net:80/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://tracker.filepit.to:6969/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.supertracker.net:1337/announce&tr=http://tracker.bz:80/announce&tr=udp://thetracker.org:80/announce&tr=udp://tracker.open-internet.nl:6969/announce&tr=http://tracker.port443.xyz:6969/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://tracker.filemail.com:6969/announce&tr=udp://tracker.leechers-paradise.org:6969/announce&tr=udp://retracker.sevstar.net:2710/announce&tr=http://retracker.sevstar.net:2710/announce&tr=udp://packages.crunchbangplusplus.org:6969/announce&tr=http://tracker.novg.net:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=udp://open.stealth.si:80/announce&tr=http://tracker4.itzmx.com:2710/announce&tr=http://tracker.internetwarriors.net:1337/announce&tr=http://vps02.net.orel.ru:80/announce
```

### Mathematica 11.3

> **警告**
>
> 已证实，此版本必须安装在**英文路径**下，否则会打不开。其他版本是否有此问题暂不清楚。

> **注意**
>
> 英文版也可以调出中文提示，但是它没有中文帮助。只有带了**中文帮助**的才叫中文版！
>
> Linux 版无中文版，自行汉化的方法可参考 <http://tieba.baidu.com/p/4024190694>。

Mathematica 11.3.0 中文版 (Win版 + 破解工具)，磁力链接：

```uri
magnet:?xt=urn:btih:29de7b51d85fa418c0af9812fd127a5acad158bd
```

[MMA 11.3.0 中文版 Win版，百度盘](https://pan.baidu.com/s/1SPqELlJYaLwgsJRLbMg8OA) 密码: `3nem`

Mathematica 11.3.0 中文版 (Mac版 + 破解工具)，磁力链接：

```uri
magnet:?xt=urn:btih:b60c78d79a57b1fdb6d891d54dbf691cfbcff99c
```

[MMA 11.3.0 中文版 Mac版，百度盘](https://pan.baidu.com/s/1Imn6SLCnzDlBIifTHjoOKw) 密码: `7si9`

Mathematica 11.3.0 英文版 (Win + Linux + Mac + 破解工具)，磁力链接：

```uri
magnet:?xt=urn:btih:aad5462ec9e4c20d350a53caff59bf6b7758a249
```

11.3 的中文帮助可在 <http://tieba.baidu.com/p/5696398243> 找到。

### Mathematica 10.4

> **注意**
>
> 英文版也可以调出中文提示，但是它没有中文帮助。只有带了**中文帮助**的才叫中文版！
>
> Linux 版无中文版，自行汉化的方法可参考 <http://tieba.baidu.com/p/4024190694>。

对于最新的 版本 10 中文版，自版本 9.0.1 持续至今的中文帮助搜索能力退化问题已经得到了解决。（10.3.0 版本时，部分电脑需要使用 <http://tieba.baidu.com/p/4172398243> 中的方法进行修复，10.3.1 后似乎已无此问题）

[MMA 10.4.1 中文版](http://pan.baidu.com/s/1o8NEPei) 密码: `wx9u`

[MMA 10.4 英文版](http://pan.baidu.com/s/1jHbldtG)

[MMA 10.4 英文版（Linux版）](http://pan.baidu.com/s/1kUrz2qr)（前面已经说了 Linux 版没中文）

[MMA 10.4 英文版（Mac版）](http://pan.baidu.com/s/1i3RfiNb)

[CDF Player 10.3.1 英文版](http://pan.baidu.com/s/1i4kFX7v)

### Mathematica 9.0.1

> **警告**
>
> 版本9 的注册是历代最烦，并且有中文帮助搜索能力退化的问题，不推荐使用。

> **注意**
>
> 英文版也可以调出中文提示，但是它没有中文帮助。只有带了**中文帮助**的才叫中文版！
>
> Linux 版无中文版，自行汉化的方法可参考 <http://tieba.baidu.com/p/4024190694>。

[MMA 9.0.1 中文版](http://pan.baidu.com/share/link?shareid=341776&uk=353288367)

[MMA 9.0.1 英文版](http://pan.baidu.com/s/1qWL166g)

[MMA 9.0.1 英文版](http://pan.baidu.com/s/1ntxRa5N)（Linux 版，前面已经说了 Linux 版没中文）

[MMA 9.0.1 英文版（Mac 版）](http://pan.baidu.com/s/1pJ0QFfd)

### Mathematica 8.0

> **注意**
>
> 英文版也可以调出中文提示，但是它没有中文帮助。只有带了**中文帮助**的才叫中文版！
>
> Linux 版无中文版，自行汉化的方法可参考 <http://tieba.baidu.com/p/4024190694>。

[MMA 8.0.4 中文版](http://pan.baidu.com/s/1skUb3n3)（MD5：`6aebc6776548f7b6ed134efafdb2af5d`）

### 早期版本

这里再次强调，**如无特殊原因请不要选择过老的版本！**

1. 较老的 Mathematica 与现代的有许多不兼容之处。
2. 较老的 Mathematica 往往与现代的计算机不兼容，尤其是 Mac。
3. 在版本 7 以前，Mathematica 无官方中文版。
4. 早期 Mathematica 的自带文档非常简略。
5. [绘图和动画等功能在版本 6 时有过重大修改](https://note.youdao.com/noteshare?id=0c2719208239696d61182199327bd38c)。
6. 更多内容参考 <http://tieba.baidu.com/p/3204136180>。

所以，**如无特殊原因请不要选择过老版本的 Mathematica！**

[MMA 7.0 中文版](https://pan.baidu.com/s/1VOeMOe15755SaulpTXD4ig)，提取码 `axir`。注意，中文文档需要手动覆盖，搞不清怎么覆盖的就用高版本！

[MMA 5.0 英文版](https://pan.baidu.com/s/1MWnpsZ8QA2DBZXf1N6ayRg) 提取码：`8nb9` （WinXP可用。）

[MMA 4.1 英文版](https://pan.baidu.com/s/1FrZSuxlO4CULYIRfyhLa-Q) 提取码：`hcqq` （WinXP可用。）

[MMA 3.0 英文版](https://pan.baidu.com/s/1hscUVwo) 提取码: `n73z` （WinXP可用。）

[MMA 2.1 英文版（Win3.1版）](https://pan.baidu.com/s/1RkmZUQxYxDMfV2sfe5HZsg) 提取码：`p7o2` （IMG格式软盘镜像，可以装在WMWare的Win98虚拟机上。）

[MMA 1.2 英文版（DOS版）](https://pan.baidu.com/s/1eRMJX54) 提取码: `ihbx` （FLP格式VMWare软盘镜像，可以装在WMWare的Win98虚拟机上，并且似乎硬盘至少要两个分区，否则画不了图。）

至于有版本收藏癖好的朋友，请自己去网上找吧。

## Mathematica 软件的注册

本文注册以 Mathematica 8 为例，并且假定你从来没有在你的电脑上安装注册过任何版本的 Mathematica。

后续版本的注册方式大致相同，不同之处下面有说明。其他版本的注册，不在此教程范围，请自行度娘或谷哥，或者在贴吧置顶帖中跟帖讨论。

但是，这里再次强调，**希望大家不要使用过老的版本！**

**注册步骤**如下

### 下载安装软件以及注册机

> **注意**
>
> Windows 10 下要打开防火墙！

**注册机会被杀软误报是常识，还是，吓不住的请买正版，购买方法在本文开头。**

**Windows 10 自带的杀软（Windows Defender）会将版本10 以上版本的注册机直接干掉。解压前，请打开 Windows Defender 设置，将解压路径从那个杀软的查杀路径里排除出去（Exclusions），或者暂停 Real-time protection。**

**以下地址均未失效，异常只是百度盘暂时抽风，在地址栏上重新回车一次（不能直接刷新！）就能看到下载链了！**

本文中，没有特别注明小版本的注册机都是通用的。例如，11.1 注册机既可以注册 11.1.0 又可以注册 11.1.1。

版本 12 的注册机（同时适用于中文版及英文版）已经附在上面的下载链里了！
注意，这次又是一回车就会关的命令行了，也就是说这个注册机**不能直接双击打开**！不知道怎么开这个注册机的请使用附带的批处理文件（就那个扩展名为 `.bat` 的东西）。用法已经写在文件名上了！再强调一遍，再问注册机为什么关的**删+封十天**！

[MMA 11.3 注册机](https://pan.baidu.com/s/1zCO8b5KCqCM61RMzcD_ILg) 密码: `94kn`
（这个是 HTML 的注册机，不需要用命令行打开。注意这个注册机需要你在第二个框**随便按××××-××××-××××××的格式**输入一个激活密钥（Activation Key）！还有这个密钥必须要填回软件里！还有，第一个框当然也要填！如果不知道该填什么的话请参考下文！）

[MMA 10.4 注册机](http://pan.baidu.com/s/1dF8xg0h)
（此注册机可以完全注册 10.4.0 及 10.4.1 中英文版。这个注册机是**不能直接双击打开**的！ 不要再抱怨什么“回车完注册机就关了”！请在命令行下使用。也就是说，请打开命令行然后调用这个注册机。 不明白什么叫“打开命令行然后调用这个注册机”的<del>请乖乖用版本8的注册机多试几次</del> 请下载[这个批处理文件（密码: `uh59`）](https://pan.baidu.com/s/1HR2bwacizkNrPRmYi1Kmvw)， 用法已经写在文件名上了。还有，密码里的 ::1 也是密码的一部分！）（此注册机生成的 Key 每回都是1234-4321-123456， 不要大惊小怪！重要的是那个密码！还有“1234-4321-123456”中间的横杠也是 Key 的一部分，不要擅自去掉！）

> <del>[新版注册机（可用于版8，9，10）下载地址](http://pan.baidu.com/share/link?shareid=188221&uk=1661347987)（注意注册版本9时需要多试几次，下详。版本10亦可使用本注册机，但需试很多次，成功率极低。）</del>可用于8，9，10版的新版注册机下载地址现已失效，且吧主电脑里没存档，故暂时无法补档，手里有这个注册机的童鞋欢迎补上。不过，看了本教程的你应该也注意到了，这个新版注册机其实并不好使。对版本8，新旧注册机没区别，对版本9，部分计算机可能没法用新注册机注册，还不如用旧版，也就多一道手续；更何况——这里再强调一遍——版本9的自带帮助有搜索能力退化的问题，新手别用！
>
> [旧版注册机（可用于版8，9，10）下载地址](http://pan.baidu.com/s/1eQGtvF0) （注意注册版本9时需要多试几次，下详。已证实部分计算机必须使用旧版注册机才能完全注册版本9。使用这个注册机注册版本9时要多点步骤，下详。同样的，密码里的 `::1` 也是密码的一部分！版本10亦可使用本注册机，但需试很多次，成功率极低。）
>
> 注意，这两个注册机运行需要 VC2010 运行库 (Microsoft Visual C++ 2010 Redistributable Package)，如果下载下来不能运行注册机，请下载 [VC2010 运行库](http://pan.baidu.com/share/link?shareid=386759&uk=1661347987)。

下载好运行库，安装之后，注册机应该就能运行，不要嫌麻烦！

安装 Mathematica 软件，安装完成之后会弹出激活对话框，如下图：

![1](http://ww4.sinaimg.cn/large/a15b4afegw1f7gukpbbqcj20i80dltaf)

这里要选择下方的**其它方式激活**，切记！！！！！（不要再说什么激活密钥没用，因为你选了在线激活。）然后在弹出的页面中选中手动激活：

![2](http://ww4.sinaimg.cn/large/a15b4afegw1f7guljc5s9j20i80dlgne)

记下在新的页面中出现的 Math ID：

![3](http://ww4.sinaimg.cn/large/a15b4afegw1f7gulhnsflj20i80dl0uk)

注意，是**把你电脑上的这排数复制下来**，别去抄上面图里的数！

此时不要关闭弹出的激活界面，打开注册机（注册机的扩展名是 `.exe`，别去点那个 again.nfo！），将 Math ID 复制进注册机第一个输入框中，然后回车，或者点击注册机下方 Save mathpass 得到 Activation Key 和 Password。如图：

![4](http://ww4.sinaimg.cn/large/a15b4afegw1f7gulg7i3hj208h0b2gmm)

注意：图中所示的是老版注册机的界面，它的 Activation Key 的格式是
`4位数字-4位数字-5位字母`，或者里面有 `::1`。

使用新版注册机算出来的 Activation Key 是 `4-4-6` 的形式。这里强烈不推荐使用新版注册机注册版本9和版本10，因为已经证实在许多计算机上，新版注册机无法完全注册版本9和版本10。老注册机在注册版本9时可能要多点步骤，下详。

还有，以上截图是版本 8、9 注册机的截图，版本 10 至版本 11.2 注册机只有那个黑乎乎的命令行界面，但**使用方法和这个注册机没什么不同，不要大惊小怪**！

最后再强调一遍，版本 11.3 的第 2 个框是用来填激活密钥（Activation Key）的，只要按 ××××-××××-×××××× 的格式随便填一个就可以！
注意，填回软件时，填在软件里的激活密钥（Activation Key）必须和填在注册机中的一致！还有，11.3 版注册机的第一个框当然也要填！
如果读到这里你依旧不知道该填什么，请仔细阅读上文关于版本 8、9 注册机的解说！

### 填写 Activation Key 和 Password

算出 Activation Key 和 Password 后，复制粘贴，填入 Mathematica 激活界面对应输入框即可。
（注意：如果你使用了老版注册机或者版本 10 英文版的新注册机，那么，不要忘了把 Password 中的 `::1` 也给一起复制了！那也是密码的一部分！）
（如果你要手抄的话，注意这两个冒号都是英文冒号！）

如果是 MMA 8 中文版，那么按照本文步骤，100% 注册成功，Enjoy it！

如果是 MMA 9 中文版，那么注册步骤一样，只是不一定 100% 成功，需要多试几次，一定要多试几次！！！
如果人品好，两三次就成功了；如果人品实在差，试了30、40次都没有成功，那么还是老实安装 MMA 8 中文版吧，足够你学习使用了。

再强调一次，注册中文版不要用英文版注册机，否则开不了帮助！

如果是 MMA 9 英文版，那么注册步骤也一样，只是不用纠结，因为有 MMA 9 版本所对应的英文注册机([下载链接](http://pan.baidu.com/share/link?shareid=549603888&uk=1661347987)，注意这个只能用来注册英文版！）

如果是版本 10 和版本 11 中英文版，注册步骤比版本 8 和 9 还要简单，并成功率 100%（？），Enjoy it!

打开软件请双击新生成的桌面图标，非要跑到开始菜单甚至安装文件夹里去开的话，请点 `Mathematica.exe`，不要跑去点 MathKernel.exe！

> 话说为什么总有人喜欢点这两个，因为看到个 Kernel 所以觉得这个更接近真理吗？

版本 9 及之前的 Mathematica 的界面就是一个细长条，不要大惊小怪！新建笔记本（就是用来写代码的那请点击细长条上的 文件 -> 新建 -> 笔记本，或者直接按 <kbd>Ctrl</kbd> + <kbd>N</kbd>！

### 使用老版注册机注册 9 时所需的额外步骤

由于一些尚不明确的原因（此部分欢迎补充），有部分朋友的电脑在使用新版注册机注册版本9中文版时依旧会出现中文帮助打不开的问题。

目前发现的唯一对策是使用老版注册机。老版注册机一度被认为无法正常注册版本9中文版，但是事实并非如此。使用老版注册机注册后所需的额外步骤如下：

打开软件，点击顶部菜单的 编辑 -> 偏好设置 -> 界面 -> 菜单和对话框语言设置 -> ChineseSimplified；之后关闭软件重启，自带帮助就可以顺利打开了！

## Mathematica 入门

“那么软件装好之后该怎么学习呢？”

这里建议先阅读以下几篇文章：

[《写给新手》](http://note.youdao.com/noteshare?id=058e6037396d925af1f4abe4d54a52a8)

[《怎样算阶乘（一）—— Mathematica 是个计算器》](http://note.youdao.com/noteshare?id=c5114ccda3270199fd801952cf785bff)

[《你查过自带帮助了吗？你真的会查自带帮助吗？》](http://note.youdao.com/noteshare?id=abd51087f44c0b6a41ff6022d549dc41)

[《有的字母蓝，有的字母黑，你知道为什么吗？你对语法着色有认识吗？》](http://note.youdao.com/noteshare?id=06adaac6aaf85c87c4cd6fdf715b418c)

## 注册 Mathematica 时可能碰到的问题

### 【Q1】为何安装 Mathematica 的时候，没有弹出激活界面？

【A1】如果电脑上之前安装过 Mathematica，而电脑又没有重装过；MMA 卸载之后，注册文件 `mathpass` 不会自动删除，这样再安装 MMA，就不会弹出激活界面了；
但如果之前是成功注册的话，比如之前成功注册了 MMA8，然后将 MMA8 卸载，安装 MMA9，这时 MMA9 不会弹出激活界面，而实际上 MMA 9 已经是注册了。

验证是不是完整注册的一个办法是，尝试自由格式输入是否可用。

而这也是那些人品不行，注册几十次都不成功但却一定要使用 MMA9 中文版 的朋友可以采用的一个方法，就是先安装 MMA 8 中文版，按照本文步骤注册成功后，卸载 MMA 8，然后再安装 MMA 9，这样就可以使用 MMA 9 中文版全部功能了。

### 【Q2】macOS 或者 Linux 系统怎么使用某些注册机？

【A2】

1. 在自己电脑上安装好 Mathematica；
2. 然后在别人安装有 Windows 系统的电脑上运行注册机；
3. 将你电脑 Mathematica 弹出的激活界面上的 Math ID 敲键盘敲入注册机相应输入框中进行注册。

因为本文提供的一些注册机只有 Windows 版本。而注册机算出来的 Activation Key 和 Password，是对应于 Math ID 的，跟硬件设备无关。

### 【Q3】如何实现 MMA 帮助文档中英文切换？（满足某些有特殊癖好的朋友）

【A3】如果你电脑上安装的是 MMA 英文版，那么，从别人安装了中文版 MMA 的电脑里把他的中文帮助文档拷到你电脑上 MMA 的安装文件夹里（`Wolfram Research\Mathematica\9.0\Documentation`）就可以。

然后在 MMA 偏好设置里语言选英语就是英文帮助文档，选中文就是中文帮助文档了。

当然，切换语言要重新启动 MMA ，而且代价是你的 MMA 文件夹占用硬盘空间几乎增加一倍。

### 【Q4】注册机里 Computer Name 是否分大小写？

【A4】不分。

### 【Q5】注册机算出来的 Activation Key 只有13位？

【A5】因为使用了旧版的注册机，此注册机也可以用，但要多些步骤，上详。

### 【Q6】出现下图的问题

![q6](http://ww4.sinaimg.cn/large/a15b4afegw1f7gusak0ctj20b406haai)

【A6】打印机服务（Print Spooler）没开。

解决方案之一：
请在运行 (<kbd>Win</kbd> + <kbd>R</kbd>) 中输入 `msconfig`, 转到 **服务** 选项卡，打开 Print Spooler 服务，重启电脑。

### 【Q6.5】出现下图的问题（`Error code: 698`），内核可以启动，但主程序启动不了

![q6.5](http://ww4.sinaimg.cn/large/a15b4afegw1f7gutazpgmj20az06xwf2)

【A6.5】

1. 首先，打开系统服务中心，在里面找到 Windows 防火墙，启动它；
2. 然后去你的 Mathematica 的安装目录找到 SystemFiles -> Fonts 文件夹，把里面所有的 ttf 文件 双击点开（或者右键单击）并安装一遍；
3. 就应该能用了。

（Windows 10 特有功能：如果不打开防火墙，ttf 字体文件就打不开，所以就无法安装。）

### 【Q7】此文链接中的 Mathematica 支持 64 位系统嘛？

【A7】Mathematica 安装包同时包含 32 和 64 位，它会自动判断你的系统类型并安装。

### 【Q8】64位系统在安装了 VC2010 运行库 后，那两个注册机仍然无法使用

【A8】对于64位系统，VC2010 运行库的 64 位和 32 位版本都要安装，然后注册机才能运行。也就是说，64 位系统需要安装本文下载链接 VC2010 文件中 X86 和 X64 两个文件。具体请下载文件查看。

### 【Q9】注册不当：Mathematica 已注册，但功能有限制，比如自由输入不能使用，虚拟全书、函数浏览器、帮助文档不能使用

（这是大家碰到最多的问题，也是注册不当的问题）

【A9】首先，请确保你已经使用了正确的注册机！注册机的问题具体参见前文！

如果在注册机正确的情况下还是有问题，那一般是因为之前安装过 Mathematica 但是注册不完全。

解决办法是，清理残余信息，再重新注册。至于如何清理，按照官网的说法，只要在启动软件的时候按住 <kbd>Ctrl</kbd> 和 <kbd>Shift</kbd> 即可。

如果仍然存在问题，那么可以手动清理，方法如下。更多内容可以参考官网的[这篇教程](https://support.wolfram.com/kb/12464)。

如果您使用 **Windows 8 及更高版本**的系统，请**以管理员权限**打开一个 **PowerShell** 窗口，

首先，执行下面这段命令

```powershell
Remove-Item -Path "$env:ProgramData\Mathematica\Licensing" -Recurse -Force
```

如果仍然存在问题，执行下面这段命令（**你可能首先需要卸载 Mathematica**）

```powershell
Remove-Item -Path @("Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Wolfram Research", "Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Mathematica", "$env:USERPROFILE\AppData\Local\Mathematica", "$env:USERPROFILE\AppData\Roaming\Mathematica") -Recurse -Force
```

> **注意**
>
> 如果报错“无法找到路径”，那么，相应文件早已从您的计算机上删除；无需在意。
> 如果发生其他错误，请仔细检查报错信息，并对症处理。

如果您使用**较低版本的 Windows**，请继续阅读。

> **注意**
>
> 1. 以下 `%ProgramData%`、`%USERPROFILE%` 等都是 **Windows 环境变量**。Windows 资源管理器 可以自动识别它们。
> 2. 以下都是**隐藏文件夹**，需要显示隐藏文件夹。这个怎么做无需多说了。
> 3. MMA 的残留信息一定要清理干净！
> 4. 已经证实，在部分计算机上，即使使用旧版注册机，并且完成此处所述的步骤，依旧无法清理干净残余信息。那么这里还有最后一个办法：首先在计算机上新建一个帐户（开始 -> 控制面板 -> 用户帐户和家庭安全 -> 添加或删除用户帐户 -> 创建一个新帐户） ——帐户的权限，笔者选的是“管理员（Administrator）”，不过，大概 Guest 也可以？大家可以试一试，然后把结果编辑进来——然后把 Mathematica 安装在这个新的帐户里，就不用担心残留信息的问题了。安装和激活完成之后新建的帐户可以删除。

首先，清理注册信息

Windows XP 在这 2 个目录：

```text
C:\Documents and Settings\Administrator\Application Data\Mathematica\Licensing

C:\Documents and Settings\All Users\Application Data\Mathematica\Licensing
```

Windows 7 32位/64位 及更高版本系统在：

```text
%ProgramData%\Mathematica\Licensing
```

之后，**通常**需要继续清理其他残留，**要全部删除**！（**你可能首先需要卸载 Mathematica**）（似乎，不是每个人都会面临此问题，原因暂不明，欢迎补充）

目前已知的可能存在残留的地方有：

注册表（对于不同版本的 Mathematica，可能存在以下几个位置之一）：

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

文件夹：

```text
%USERPROFILE%\AppData\Local\Mathematica
%USERPROFILE%\AppData\Roaming\Mathematica
```

### 【Q10】提示说：这份 Mathematica 使用的密码不允许英语以外的其它语言

提示说：

> 这份 Mathematica 使用的密码不允许英语以外的其它语言. 关于启用更多的功能，请与 Wolfram Research 联系(`http://www.wolfram.com`). 您必须重新启动前端.

【A10】因为你用英文注册机注册了中文版。（叫你不认真看教程、跑外面去乱下注册机！🤦‍）

再强调一遍，**一定要用对注册机！**

要完全注册 版本8 和 版本9 的中文版，只能使用 版本8 的中文版注册机。

弄不清什么是中文版注册机的人，以及自以为使用了中文版注册机却依然出现这个问题的人，请使用本教程中提供的注册机！

### 【Q11】Windows XP 32位 最多能支持 Mathematica 多高的版本？

【A11】版本9

### 【Q12】为什么每回点开注册机都出现这个？

![q12](http://ww4.sinaimg.cn/large/a15b4afegw1f7guucxxcbj20a60550so)

【A12】上面的教程已经说了，请安装 VC运行库。

### 【Q13】使用没问题，但界面出现乱码，如图

![q13](http://ww4.sinaimg.cn/large/a15b4afegw1f7guv45c0ej20g400idfn)

【A13】似乎存在多种原因。

一种已经被证实的原因是，电脑的系统地区被改动过，此种情况改回中文区即可解决。

### 【Q14】版本10（不论中英文版）卡顿，卡在初始界面，界面显示不完全

【A14】具体参考<del>[此帖](http://tieba.baidu.com/p/4039684644)</del>(注：此链接因 妙谛莲花 被百度无故封号，目前暂无法访问)。卡顿问题在该帖2楼，卡在初始界面的问题在该帖3楼，界面显示不完全的问题在该帖4楼。

### 【Q15】Windows 10 最多能支持 Mathematica 多低的版本？

【A15】至少 版本8 之后的都支持。（前面的没测试过。）

### 【Q16】安装完后打开出现未响应，如图所示

![q16](http://ww4.sinaimg.cn/large/a15b4afegw1f7guw7rirbj20fr0g5di1)

【A16】 原因是，没更新 Windows 的一个补丁。如果你把自动更新关了，打开更新，更新内容里有 Windows Service Pack，更新之后重新安装即可。

### 【Q17】 安装的时候出现无响应，如下图

![q17](http://ww4.sinaimg.cn/large/a15b4afegw1f7guwxv9lij20di0bljsm)

【A17】软件必须安装在**英文**名称的文件夹下。

### 【Q18】 安装后是否需要关闭 Mathematica 的自动更新？

【A18】不需要。截止目前，Wolfram 对破解版没有任何打击措施。此外，有证据表明某些小的 bug 修复是通过自动更新进行的，所以，最好不要关。

### 【Q19】 注册机一回车完就直接关了，怎么回事啊？

【A19】教程的正文里已经说了三遍，版本10及以后的注册机是不能直接双击打开的！右键选打开当然也是不行的，不要自作聪明！

请在命令行下使用注册机。也就是说，请打开命令行，然后调用这个注册机。

不明白什么叫“**打开命令行然后调用这个注册机**”的请使用上文提供的批处理文件！

### 【Q20】 安装后出现 `Error code: 702`？

【A20】和 Mathematica 自带的字体安装未成功有关。

请仔细检查杀软（比如，360啊，360啊，还有360啊）是否屏蔽了外部字体安装。更多讨论请参看[此帖](http://community.wolfram.com/groups/-/m/t/917946)。

### 【Q21】 软件是否可以安装在中文路径下？

【A21】Mathematica **理论上**是可以安装在中文路径下的，但是近几版 Mathematica 已多次出现了**和中文（确切地说是 Unicode）相关的 bug**。并且目前已经证实，至少 11.3 中文版，若是安装在中文路径下，软件会打不开。

所以，若想避免麻烦，安装时应尽量避免使用中文路径。大家也可积极对其他版本进行实验，丰富本教程内容。
