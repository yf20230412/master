//注意：

//1.location和“:”号间不能有空格，否则不会跳转。

//2.在用header前不能有任何的输出。

//3.header后的PHP代码还会被执行。例如，将浏览器重定向到//


<?php
 
//重定向浏览器 
 
header("Location: https://www.baidu.com/"); 
 
//跳转至网址 
 
exit;
 
?>
 
