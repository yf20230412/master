
# **clash配置文件**


## clash 配置文件格式为 yaml 格式，格式如下

```json 

port: 7890
socks-port: 7891
allow-lan: true
mode: Rule
log-level: info
external-controller: :9090
proxies:
  - {name: cfmem.com - 🇭🇰 gq - 香港Amazon数据中心 20-1}
proxy-groups:
  - name: 🔰 节点选择
    type: select
    proxies:
      - ♻️ 自动选择
      - 🎯 全球直连
      - cfmem.com - 🇭🇰 gq - 香港Amazon数据中心 20-1
rules:
  - DOMAIN-SUFFIX,local,🎯 全球直连
  
```  
---- 
## clash 配置文件可能是这样的结构里面最主要的有3部分。

### 一、proxies

proxies 代表节点数据，所有的分流规则都是按照这些节点数据来的，这里可以有很多个节点数据，可以是 trojan, ss, vmess 类型都可以，我们来看个例子：

```json 

- {name: cfmem.com - 🇭🇰 gq - 香港Amazon数据中心 20-1, server: xxxx, port: 59113, type: vmess, uuid: 1111111, alterId: 0, cipher: auto, tls: false}

- { name: '🇭🇰香港 01 | 专线', type: trojan, server: xxxx-airport.com, port: 443, password:xxxx743af7c0efe1, udp: true, sni: 144-22-163-118.nhost.00cdn.com, skip-cert-verify: true }


```  

clash 用统一的格式来定义不同的节点类型，用 type 来进行区分，特有的属性只需要在这个结构体加上自己属性就可以， clash 客户端会根据 type 不同而来读数据

### 二、proxy-groups

可以把 proxy-groups 理解为一道又道的过滤网，当你发出一个请求时，这个请求将会被在哪一层的过滤网给拦截下来，取决于你的 rules 与 请求匹配。我们来解析一下 proxy-groups 里面的参数。

1. name 

代表组的名称，组的名称可以随意命名，但建议取有意义的名称，组的名称可以被其它的组引用，也可以放在规则里面

2. type

* type 代表这个组的类型，有下面四种情况

* select 手动选择，该组在节点列表上，手动选择列表或者 proxy-group

* url-test 延迟最低节点，测试该组所有节点的延迟
 
* fallback 回落，连接该组第一个节点，不可用时切换到下一个节点

* load-balance 负载均衡，由该组2个以上的节点提供链接

3. proxies

这里可以是组名称或者节点名称，依次从上到下进行选择，比如看下面这个

```json 

- name: 🔰 节点选择
    type: select
    proxies:
      - ♻️ 自动选择
      - 🎯 全球直连
      - cfmem.com - 🇭🇰 gq - 香港Amazon数据中心 20-1
      - cfmem.com - 🇭🇰 gq - 香港Amazon数据中心 26-2
      - cfmem.com - 🇭🇰 gq - 香港Amazon数据中心 28-3
      - cfmem.com - 🇭🇰 香港-4
      - cfmem.com - 🇭🇰 香港 2-5
      - cfmem.com - 🇭🇰 香港 3-6
      - cfmem.com - 🇭🇰 香港 4-7
      - cfmem.com - 🇭🇰 香港 10-8
      - cfmem.com - 🇭🇰 香港 11-9
  - name: ♻️ 自动选择
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    proxies:
      - cfmem.com - 🇭🇰 gq - 香港Amazon数据中心 20-1
      - cfmem.com - 🇭🇰 gq - 香港Amazon数据中心 26-2
      - cfmem.com - 🇭🇰 gq - 香港Amazon数据中心 28-3
      - cfmem.com - 🇭🇰 香港-4
      - cfmem.com - 🇭🇰 香港 2-5
      - cfmem.com - 🇭🇰 香港 3-6
      - cfmem.com - 🇭🇰 香港 4-7
      - cfmem.com - 🇭🇰 香港 10-8
      - cfmem.com - 🇭🇰 香港 11-9
      - cfmem.com - 🇭🇰 香港 12-10
  - name: 🌍 国外媒体
    type: select
    proxies:
      - 🔰 节点选择
      - ♻️ 自动选择
      - 🎯 全球直连
      - cfmem.com - 🇭🇰 gq - 香港Amazon数据中心 20-1

```  

名称为自动选择的组会每间隔 300 毫秒去 ping 节点数据，测试的地址是：http://www.gstatic.com/generate_204

而 国外媒体这一项是手动选择默认选择第一个 节点选择，节点选择的第一个是自动选择，所以默认是根据 ping 值来选择节点的

4. rules

rules 也就是具体的分发规则了，规则一般由 名称 + , + 地址 + 组名组成 我们来看下，其中 no-resolve 表示不要解析这条规则，只处理直接 ip 访问请求

```json

rules:
  - DOMAIN-SUFFIX,local,🎯 全球直连
  - IP-CIDR,192.168.0.0/16,🎯 全球直连,no-resolve
  - IP-CIDR,10.0.0.0/8,🎯 全球直连,no-resolve
  - IP-CIDR,172.16.0.0/12,🎯 全球直连,no-resolve
  - IP-CIDR,127.0.0.0/8,🎯 全球直连,no-resolve
  - IP-CIDR,100.64.0.0/10,🎯 全球直连,no-resolve
  - IP-CIDR6,::1/128,🎯 全球直连,no-resolve
  - IP-CIDR6,fc00::/7,🎯 全球直连,no-resolve
  - IP-CIDR6,fe80::/10,🎯 全球直连,no-resolve
  - IP-CIDR6,fd00::/8,🎯 全球直连,no-resolve
  - DOMAIN-KEYWORD,1drv,Ⓜ️ 微软服务

```  

规则前缀有这些内容

* DOMAIN-SUFFIX 表示包含什么后缀的域名

* IP-CIDR IPV4匹配

* IP-CIDR6 IPV6匹配

* DOMAIN-KEYWORD,xxx 表示包含 xxx域名关键字的链接

* DOMAIN abc.hello.com 表示包含完整的域名

* PROCESS-NAME 表示进程名称

* GEOIP 数据库（国家代码）匹配

* MATCH 全匹配（一般放在最后）

### 三、示例

比如我们在电脑访问 www.youtube.com 那么规则是怎么走的呢，可以看一下

![图片一](https://ghproxy.net/https://raw.githubusercontent.com/yf20230412/master/main/TvBox/img/clash1.png)

分组由上到下是 国外媒体 -> 国内媒体 -> 微软服务 -> 电报服务 -> 苹果服务 -> 全球直连 -> 全球拦截 -> 漏网之鱼，那么看一看 youtube.com 这条规则加在那个分组里

 >- DOMAIN-SUFFIX,youtube.com,🌍 国外媒体
 
 可以看到 youtube 是在 国外媒体分组里，那么在这里要看国外媒体选择的是那个节点
 
 ![图片二](https://ghproxy.net/https://raw.githubusercontent.com/yf20230412/master/main/TvBox/img/clash2.png)
 
 可以看到国外媒体选择的是 香港2-5 这个节点，选择是的延迟最低的节点，所以 youtube 走的是这个代理。
 
假如我们把  - DOMAIN-SUFFIX,youtube.com,🌍 国外媒体 这一条规则拿掉，访问 youtube.com 还是没有问题的，那是什么情况呢？我们再来看下配置文件，找到最后一条

>- MATCH,🐟 漏网之鱼

也就是如果里面规则都没有找到的话，到了最后一条就是直接用代理，我们把这一条再去掉，刷新配置文件，这时候再访问 youtube.com 就访问不了


### 四、自定义转换配置

方法一：

直接替换订阅链接到下面的链接中

```json

https://api.dler.io/sub?target=clash&new_name=true&url=你的订阅链接（URL编码）&config=ACL4SSR_Online_Full.ini文件（URL编码）

```

URL编码转换工具

- [x] https://tool.ip138.com/urlencode/

- [x] https://www.urlencoder.org/

将https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini 规则链接转 URLEncode 

变成：https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR_Online_Full.ini

将你的订阅节点：https://9c4be001.no-xxxx 转 URLEncode 
变成：https%3A%2F%2F9c4be001.no-xxxx

示例：

>https://api.dler.io/sub?target=clash&new_name=true&url=https%3A%2F%2F9c4be001.no-xxxx&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR_Online_Full.ini

将链接导入clash即可

方法二：
订阅转换站(可自行搭建引用我的配置文件，也可以使用下方转换站)

https://wyatt323.github.io/  

或

https://acl4ssr-sub.github.io/

也可以自行搭建nginx容器后将前端文件放入对应文件夹，后端和规则配置我已经在文件中写好了

出处：https://github.com/Wyatt323/OpenClash-Rules/tree/main


### 五、快速转换节点

## **ACL4SSR_Online_Full.ini文件规则[传送门](https://ghproxy.net/https://raw.githubusercontent.com/yf20230412/master/main/clash/config/ACL4SSR_Online_Full.ini)**

```json

https://api.dler.io/sub?target=clash&new_name=true&url=此处替换你的订阅链接,链接需转码（URL编码）&config=https%3A%2F%2Fghproxy.net%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2Fyf20230412%2Fmaster%2Fmain%2Fclash%2Fconfig%2FACL4SSR_Online_Full.ini

```

### 六、总结

clash 客户端通过配置文件配置节点的信息与分流规则，这里面的组，可以理解成过滤网，由上到下。规则组的规则呢，则是在 rules 里面配置的，rules 通过配置 DOMAIN-SUFFIX，IP-CIDR，IP-CIDR6 等信息来配置当前请求应该还是不应该走代理

