/*
[rewrite_local]


^https?:\/\/lanfanapp\.com\/api\/v1 url script-response-body https://raw.githubusercontent.com/yf20230412/master/main/QuantumultX/js/laifan.js


[mitm]

hostname = lanfanapp.com


*******************************/

var body=$response.body;
body = body.replace(/"is_prime":\w+/g,'"is_prime":true');

body = body.replace(/"is_purchased":\w+/g, '"is_purchased":true';

body = body.replace(/"unlocked":\w+/g, '"unlocked":true');

$done({body});


