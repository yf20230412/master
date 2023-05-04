/* ***************************
⚠️如果放远程，请把haluo.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:哈啰出行会员
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️


[rewrite_local]
^https:\/\/a\.hellobike\.com\/evehicle\/api  url script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/haluo.js


[mitm]
hostname = a.hellobike.com

*************************** */
var body=$response.body;
body = body.replace(/"cardLevel\":\d+/g,'"cardLevel": 20');
body = body.replace(/"cardExpireTime\":".*?\"/g,'"cardExpireTime": "2999.06.20"');
body = body.replace(/"expireType\":\d/g,'"expireType": 0');
body = body.replace(/"expireDate\":".*?\"/g,'"expireDate":"2999.06.20"');
body = body.replace(/"cardEndTime\":".*?\"/g,'"cardEndTime":"2999-06-20T23:59:59"');
$done(body);
