
# **<font color=#ff0000>前言</font>**



###   1.tvbox配置：
   
> #### （1）99.json  影视仓；

> #### （2）88.json  动漫仓；

> #### （3）33.json  少儿仓。

---- 

###  2. APP推荐: 

（1）FongMi版本  项目地址：https://github.com/FongMi/TV 支持直播多线路、自动换源、直播倍速，手机投屏；

（2）q215613905版本  项目地址：https://github.com/q215613905/TVBoxOS 支持直播回放；

（3）takagen99版本  项目地址：https://github.com/takagen99/Box 支持直播回放，界面美观；

（4）皮皮虾版本  发布频道：https://t.me/pipixiawerun 支持直播回放，支持弹幕；

（5）新版猫影视   项目地址：https://github.com/catvod/CatVodOpen 界面简洁，支持多平台。


----
###  3. TVBox各路大佬配置（排名不分先后）：

（1）唐三：https://gh.t4tv.hz.cz/newtang.bmp

（2）Fongmi：https://ghproxy.com/https://raw.githubusercontent.com/gaotianliuyun/fongmi/main/json/config.json

（3）俊于：http://home.jundie.top:81/top98.json

（4）饭太硬：http://饭太硬.top/tv

（5）肥猫：http://我不是.肥猫.love:63/接口禁止贩卖

（6）霜辉月明py：https://ghproxy.com/raw.githubusercontent.com/lm317379829/PyramidStore/pyramid/py.json

（7）小米小爆脾气：http://xhww.fun:63/小米/DEMO.json

（8）小雅：http://drpy.site/js1

（9）菜妮丝：https://tvbox.cainisi.cf

（10）运输车：https://github.moeyy.xyz/https://raw.githubusercontent.com/52670576/tvbox/main/ysc.json

（11）多多：https://yydsys.top/duo

（12）南风：https://agit.ai/Yoursmile7/TVBox/raw/branch/master/XC.json

（13）神器：https://神器每日推送.tk/pz.json

（14）巧技：http://pandown.pro/tvbox/tvbox.json

（15）那里花开：http://hz752.love:63/tk.json

（16）吾爱有三：http://52bsj.vip:98/0805

（17）潇洒：https://download.kstore.space/download/2863/01.txt

（18）佰欣园：https://ghproxy.com/https://raw.githubusercontent.com/chengxueli818913/maoTV/main/44.txt

（19）胖虎：https://notabug.org/imbig66/tv-spider-man/raw/master/配置/0801.json

（20）云星日记：http://itvbox.cc/tvbox/云星日记/1.m3u8

（21）Yoursmile7：https://agit.ai/Yoursmile7/TVBox/raw/branch/master/XC.json

（22）Ray：https://ghproxy.com/https://raw.githubusercontent.com/dxawi/0/main/0.json

（23）甜蜜：https://kebedd69.github.io/TVbox-interface/py甜蜜.json

（24）月光宝盒：https://jihulab.com/ygbh1/box/-/raw/main/月光宝盒

（25）好人：https://xhdwc.tk/0

（26）荷城茶秀：http://45.125.46.184:8083/荷城茶秀.json

（27）业余多仓：http://111.67.195.139/yydf/duocangjk.json

（28）蜂蜜：https://ghproxy.com/https://raw.githubusercontent.com/FongMi/CatVodSpider/main/json/config.json

（29）猫爪：https://codeberg.org/AK47/drpy-js/raw/branch/main/js.json

（30）道长：https://pastebin.com/raw/5NHaxyGR

----

### 4. 随机轮换壁纸：

（1）https://bing.img.run/rand.php

（2）http://www.kf666888.cn/api/tvbox/img

（3）https://picsum.photos/1280/720/?blur=10

（4）http://刚刚.live/图 

（5）http://饭.eu.org/深色壁纸/api.php,

（6）https://www.dmoe.cc/random.php

（7）https://api.btstu.cn/sjbz/zsy.php

（8）https://api.btstu.cn/sjbz/?lx=dongman

（9）http://api.btstu.cn/sjbz/?lx=meizi

（10）http://api.btstu.cn/sjbz/?lx=suiji

（11）https://pictures.catvod.eu.org/


----
>### 自用仓库，如果喜欢，请Fork自用，谢谢！

>### 尽自己所能更新，不保证配置的有效性和时效性。

----


### 点播站位
| changeable | 1    | 是否换源 | 0：关闭；1：启用        |
| recordable | 1    | 是否记录| 0：关闭；1：启用        |
| playerType | none | 播放器  | 0：系統；1：IJK；2：EXO |
| timeout    | 15   | 播放超时 | 单位：秒             |
| header     | none | 标头   | 格式：json          |
| playUrl     | none | 指定解析   | 格式：https://          |
### 直播站位

| 栏位名称       | 预设值   | 说明    | 其他               |
|------------|-------|-------|------------------|
| ua         | none  | 用户代理  |                  |
| referer    | none  | 参照地址  |                  |
| epg        | none  | 节目地址  |                  |
| logo       | none  | 台標地址  |                  |
| pass       | false | 是否免密碼 |                  |
| boot       | false | 是否自啟動 |                  |
| playerType | none  | 播放器   | 0：系統；1：IJK；2：EXO |
| timeout    | 15    | 播放超时  | 单位：秒             |
| header     | none  | 标头    | 格式：json          |
| playUrl     | none | 指定解析   | 格式：https://          |



# <table><tr><td bgcolor=yellow>**json内资源格式参数介绍**</td></tr></table>
----

```json 
* {"key'".//"key_ [资源名称] ",

* "name'"://"资源名称",

* "type":0,//这里对应爬虫类型，XML=0、JSON=1、自定义爬虫=3

* "api*":"csp_",//jar内文件名称,对应API类型

* "searchable":1,//是否搜索 关闭=0,打开=1

* "quickSeach":1,/是否快速搜索，也就是详情页的快速搜索 关闭=0,打开=1

* "filterable":O, //是否参与筛选 关闭=0

* "jar":"  ",//[jar文件地址]

* "md5": " ", //md5值，可以不填。写了加载能快几秒

* "ext":" "，//txt、json文件地址,扩展信息

* "playUrl": " ", //播放解析地址

* "click": "ddys tv;#vjsp > button"

* "categories":[" [自定义资源列表]”
```
----
  
### `vip高清1_1234,#genre#  密码：1234`
----

# **节点去广告规则转换**

* https://ghproxy.net/https://raw.githubusercontent.com/yf20230412/master/main/clash/config/ACL4SSR_Online_Full.ini

### 通过**[URL解码/编码](https://tool.ip138.com/urlencode/)**变成如下形式

- [x] https%3A%2F%2Fghproxy.net%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2Fyf20230412%2Fmaster%2Fmain%2Fclash%2Fconfig%2FACL4SSR_Online_Full.ini

## 公式：

 https://api.dler.io/sub?target=clash&new_name=true&url=节点转码后替换此处&config=https%3A%2F%2Fghproxy.net%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2Fyf20230412%2Fmaster%2Fmain%2Fclash%2Fconfig%2FACL4SSR_Online_Full.ini
