<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>页面每刷新一次，加载不同的背景图片</title>
	<style>
	#changebg{width: 964px;height: 460px;margin: 0 auto;}
    </style>
</head>

<body>

<div id="changebg"></div>

<script>
//这里可以添加图片路径，每个路径用""包起来，每个路径之间用逗号分开，要在英文状态下输入符号。

var bg_img=[

    "https://ghproxy.net/raw.githubusercontent.com/yf20230412/master/main/TvBox/img/12.jpg",

    "https://ghproxy.net/raw.githubusercontent.com/yf20230412/master/main/TvBox/img/13.jpg",

    "https://ghproxy.net/raw.githubusercontent.com/yf20230412/master/main/TvBox/img/14.jpg",

    "https://ghproxy.net/raw.githubusercontent.com/yf20230412/master/main/TvBox/img/15.jpg"
    
] 

document.getElementById("changebg").style.background="url("+bg_img[Math.floor(Math.random()*(bg_img.length))]+")";  

</script>
</body>
</html>