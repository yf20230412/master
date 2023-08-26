/*******************
 项目名称：千亦视界
 下载地址：https://apps.apple.com/cn/app/%E5%8D%83%E4%BA%A6%E8%A7%86%E7%95%8C/id1515230550
 脚本作者：风言锋语
 使用声明：仅供参考，转载与售卖！
 ****************************
 ^http[s]?:\/\/app\.thwlqy\.com\/login\/login\/veifys\.html url script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/qysj.js
 
 hostname = app.thwlqy.com
 
 ****************************/
var body = $response.body; 
let obj = JSON.parse($response.body);
obj.msg.time = -1 ;
$done({body: JSON.stringify(obj)});
