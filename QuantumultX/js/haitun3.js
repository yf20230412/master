


[rewrite_local]

^https?:\/\/book\.haitunwallet\.com
url script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/haitun1.js


[mitm]
hostname = book.haitunwallet.com



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const xx = '/app/account/members';
const yy = '/app/vip/status';
const zz = '/app/user/userInfo';

if (url.indexOf(xx) != -1) {
    obj.data.vipStatus = 1,
    body = JSON.stringify(obj);
}
if (url.indexOf(yy) != -1) {
    obj.data.status = 1,
    obj.data.endTime = "2999-01-01",
    body = JSON.stringify(obj);
    }
if (url.indexOf(zz) != -1) {
    obj.data.ctime = 18888888888,
    obj.data.count = 1,
    body = JSON.stringify(obj);
    }
    $done({body});
