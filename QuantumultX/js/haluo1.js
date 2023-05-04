
/**********************************
[rewrite_local]
^https?:\/\/a\.hellobike\.com url script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/haluo1.js

[mitm]
hostname = a.hellobike.com
*****************************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const tt = '/evehicle/api';
if (url.indexOf(tt) != -1) {
    obj.data.cardLevel=20,
    obj.data.cardExpireTime="2999.06.20",
    obj.data.expireType=0,
    obj.data.expireDate="2999.06.20",
    obj.data.cardEndTime="2999-06-20T23:59:59",
    obj.data.remainingDays=9999,
    obj.data.overdueDays=9999,
    body = JSON.stringify(obj);
}
$done({body});
