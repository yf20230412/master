/*************************


[rewrite_local]

^https:\/\/book\.haitunwallet\.com url script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/haitun2.js


[mitm]

hostname = book.haitunwallet.com

***************************/

var yf=JSON.parse($response.body);
const tt = '/app/account/members';
const yy = '/app/vip/status';
const zz= '/app/user/userInfo';
if ($request.url.indexOf(tt) != -1){
    yf.data={
        "vipStatus" : 1,
        body ：JSON.stringify(yf),
    };
}
if ($request.url.indexOf(yy) != -1){
    yf.data={
        "endTime" : "2999-09-09",
        "status" : 1,
        body ：JSON.stringify(yf),
    };
}
    if ($request.url.indexOf(zz) != -1){
        yf.data={
            "ctime" : 88888888888,
            "count" : 1,
            body = JSON.stringify(yf),
        };
    }
    $done({body : JSON.stringify(yf)});
