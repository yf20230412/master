/*******************************

脚本名称:☘️风言锋语💯

软件版本：

更新时间：

QQ反馈群:🌺75929916

TG反馈: 🌺https://t.me/china_yf2020

使用说明:🚫此脚本仅供学习与交流,请勿转载与贩卖！


[rewrite_local]


^https?:\/\/lanfanapp\.com\/api\/v1 script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/laifan.js


[mitm]

hostname = lanfanapp.com


*******************************/
var yf=$response.body;
yf = yf.replace(/"is_prime":\w+/g,'"is_prime":true');

yf = yf.replace(/"is_purchased":\w+/g,'"is_purchased":true';

yf = yf.replace(/"unlocked":\w+/g,'"unlocked":true');

$done({body:yf});
