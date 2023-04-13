# 重写规则配置片段包含若干条重写规则，并可以包含若干作用于 MitM 的主机名；可通过资源引用的方式使用。
# 片段文件将保存在 Quantumult X 目录下的 Profiles 子目录中。
# 样例可参见 https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-import-rewrite.snippet
 
 
 
;^http://example.com/resource1/4/ url reject-dict
/******************************

脚本功能：白描-OCR 文字识别+解锁黄金会员
下载地址：https://is.gd/qInUpQ
软件版本：3.3.7
脚本作者：彭于晏💞
更新时间：2022-9-29
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/baimiao\.uzero\.cn\/api\/v\d\.user\/appLaunchWithUser$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/baimiao.js

[mitm] 

hostname = baimiao.uzero.cn

*******************************/