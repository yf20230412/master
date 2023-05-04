/*************************


[rewrite_local]

^https:\/\/book\.haitunwallet\.com url script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/haitun2.js


[mitm]

hostname = book.haitunwallet.com

***************************/
var body = $response.body;
var obj =JSON.parse(body);
const tt = '/app/account/members';
const yy = '/app/vip/status';
const zz= '/app/user/userInfo';
if ($request.url.indexOf(tt) != -1){
    obj.data={
        "vipStatus" : 1,
    };
    body = JSON.stringify(obj);
}
if ($request.url.indexOf(yy) != -1){
    obj.data={
        "endTime" : "2999-09-09",
        "status" : 1,  
    };
    body = JSON.stringify(obj);
}
    if ($request.url.indexOf(zz) != -1){
        obj.data={
            "ctime" : 88888888888,
            "count" : 1,
        };
        body = JSON.stringify(obj);
    }
    $done({body});
