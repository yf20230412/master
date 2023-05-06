
/*****************************

脚本名称:海豚会员破解

*******************************


[rewrite_local]
^https:\/\/book\.haitunwallet\.com url script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/haitun.js


[mitm]
hostname = book.haitunwallet.com


******************************/
var body=$response.body;
body = body.replace(/"vipStatus\":\d+/g,'"vipStatus":1');
body = body.replace(/"status\":\d+/g,'"status":1');
body = body.replace(/"endTime\":"\d+-\d+-\d+"/g,'"endTime":"2999-07-10"');
body = body.replace(/"count\":\d+/g,'"count":1');
body = body.replace(/"ctime\":\d+/g,'"ctime":1680187630');
body = body.replace(/"buttonTitle\":".*?\"/g,'"buttonTitle":"未完成"'
$done(body);
