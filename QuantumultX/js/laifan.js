/*******************************
脚本名字:懒饭
脚本作者:   🍭风言锋语🍎
软件版本：
更新时间：
QQ反馈群:🌺75929916
TG反馈: 🌺https://t.me/china_yf2020
使用说明:此脚本仅供学习与交流,请勿转载与贩卖！


[rewrite_local]


^https?:\/\/lanfanapp\.com\/api\/v1 url script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/laifan.js


[mitm]

hostname = lanfanapp.com


*******************************/
var y=$response.body;

y = y.replace(/"is_purchased":\w+/g, '"is_purchased":true');

y = y.replace(/"is_prime":\w+/g,'"is_prime":true');

y = y.replace(/"unlocked":\w+/g, '"unlocked":true');

y = y.replace(/"expires_time":".*?\"/g, '"expires_time":"2999-09-09"');

y = y.replace(/"prime_contract":\w+/g, '"prime_contract":true');

y = y.replace(/"has_prev":\w+/g, '"has_prev":true');

y = y.replace(/"n_collects":\d+/g, '"n_collects":1');

y = y.replace(/"text":".*?\"/g, '"text":"永久会员"');


$done({body:y});




