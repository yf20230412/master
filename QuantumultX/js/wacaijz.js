/*******************
 项目名称：挖财记账
 下载地址：https://too.st/5ez
 脚本作者：风言锋语
 使用声明：仅供参考，转载与售卖！
 ****************************
 [rewrite_local]
^https?:\/\/jz\.wacai\.com url script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/wacaijz.js
[mitm]
hostname = jz.wacai.com
***********************/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const dd = '/api/usercenter';
const tt = '/api';
if (url.indexOf(dd) != -1) {
    obj.data.isVip=1,
    obj.data.sex=0,
body = JSON.stringify(obj);
}
if (url.indexOf(tt) != -1) {
    obj.data.adFreePermanentVip=true,
    obj.data.adFreeVipEnable=1,
    obj.data.expireDaysDays=99999,
    obj.data.freeSendAdFreeVipEnable=1,
    obj.data.freeSendVipEnable=1,
    obj.data.isPermanentVip=true,
    obj.data.matchVipTrial=true,
    obj.data.vipMemberEnable=1,
    obj.data.vipType=2,
body = JSON.stringify(obj);    
}
$done({body});
