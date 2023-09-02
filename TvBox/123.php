<?php
function read(...$filelist) {
$list = [];
foreach ($filelist as $file) {
$handle = fopen($file, 'r');
while (($line = fgets($handle)) !== false) {
array_push($list, trim($line));
}
fclose($handle);
}
return $list;
}
$list = read('https://pan.shangui.cc/f/2Dbvhx/cx.txt');
$url = $list[array_rand($list)];
header("Location: {$url}");
<audio autoplay="autoplay" loop=""> <source src="https://ghproxy.net/https://raw.githubusercontent.com/yf20230412/master/main/TvBox/123.php" type="audio/mpeg"> </audio>
