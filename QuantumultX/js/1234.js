/****************************

[rewrite_local]
^https:\/\/a\.hellobike\.com\/evehicle\/api  url script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/haluo.js


[mitm]
hostname = a.hellobike.com

****************************/
var body = $response.body;

body = body.replace(/\"cardLevel":\d+/g, 
'\"cardLevel":20');
body = body.replace(/\"cardExpireTime":'.*?\'/g, '\"cardExpireTime":"2999.09.09"');

body = body.replace(/\"expireType":\d+/g, '\"expireType":1');
body = body.replace(/\"expireDate":.*?\,/g, '\"expireDate":"2999.09.09"');
body = body.replace(/\"cardEndTime":'.*?\'/g, '\"cardEndTime":"2999-06-20T23:59:59"');
body = body.replace(/\"oneYearCard":\w+/g, '\"oneYearCard":true');

$done({body});


