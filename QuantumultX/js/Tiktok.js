
/******************************

脚本功能：iPhone（免拔卡）解锁 TikTok
下载地址：
软件版本：21.0.0
脚本作者：Yearsf
更新时间：2023-04-13

使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
仅支持旧版解锁的重写
*******************************

[rewrite_remote]


(?<=_region=)CN(?=&) url 307 KR
(?<=&mcc_mnc=)4 url 307 2
^(https?:\/\/(tnc|dm)[\w-]+\.\w+\.com\/.+)(\?)(.+) url 302 $1$3

[mitm] 

hostname = *.tik-tokapi.com, *.byteoversea.com, *.tiktokv.com

*******************************/