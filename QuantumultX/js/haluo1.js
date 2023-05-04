/************************************
脚本名称:哈啰单车会员破解
脚本作者: 🍭风言锋语🍎
软件版本：
更新时间：2023.05.03
QQ反馈群:🌺75929916
TG反馈: 🌺https://t.me/china_yf
使用说明:此脚本仅供学习与交流,请勿转载与贩卖！
***********************************************/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const tt = '/evehicle/api';

if (url.indexOf(tt) != -1) {

    obj.data.cardLevel=20;
    obj.data.cardExpireTime="2999.06.20";
    obj.data.expireType=0;
    obj.data.expireDate="2999.06.20";
    obj.data.cardEndTime="2999-06-20T23:59:59";
    obj.data.remainingDays=9999;
    obj.data.overdueDays=9999;
    body = JSON.stringify(obj);
}
$done({body});