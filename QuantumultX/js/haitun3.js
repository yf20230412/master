
/*************************

[rewrite_local]

^https?:\/\/book\.haitunwallet\.com url script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/haitun3.js


[mitm]
hostname = book.haitunwallet.com

*************************/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const xx = '/app/account/members';
const yy = '/app/vip/status';
if (url.indexOf(xx) != -1) {
    obj.data.vipStatus = 1,
    body = JSON.stringify(obj);
}
if (url.indexOf(yy) != -1) {
    obj.data.status = 1,
    obj.data.endTime = "2999-09-09",
    body = JSON.stringify(obj);
    }
    $done({body});
