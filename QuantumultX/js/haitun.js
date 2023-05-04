
/*****************************
⚠️如果放远程，请把haitun.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:海豚会员破解
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************


[rewrite_local]
^https?:\/\/book\.haitunwallet\.com
url script-response-body haitun.js


[mitm]
hostname = book.haitunwallet.com


*******************************/
 
var body=$response.body;
body = body.replace(/"vipStatus\":\d/g,'"vipStatus":1');
body = body.replace(/"status\":\d/g,'"status":1');
body = body.replace(/"endTime\":"\d+-\d+-\d+"/g,'"endTime":"2999-07-10"');
body = body.replace(/"count\":\d+/g,'"count":1');

body = body.replace(/"ctime\":\d+/g,'"ctime":1680187630');
$done(body);
