
 # PHP自建随机图
 
### `第一种方法`   
 
实现随机显示一张图片。

在同一目录下创建img.txt和index.php。目录名字可以随便起，比如API。

打开img.txt文件粘贴图片地址，一行一张。列入：

    https://static.likepoems.com/2020/02/19/607a4e34144a56fba8.jpg
    https://static.likepoems.com/2020/02/19/30a36bd30357fa2710.jpg
    https://static.likepoems.com/2020/02/06/385ea1fb5a0a337613.jpg
    https://static.likepoems.com/2020/02/12/202101261046307867.png

在index.php输入下面代码并保存：


         <?php
         /*
         *代码来自omii.top
         */
         //存放api随机图链接的文件名img.txt
         $filename = "img.txt";
         if(!file_exists($filename)){
             die('文件不存在');
         }
          
         //从文本获取链接
         $pics = [];
         $fs = fopen($filename, "r");
         while(!feof($fs)){
             $line=trim(fgets($fs));
             if($line!='' && substr($str , 0 , 1) != '#'){
                 array_push($pics, $line);
             }
         }
          
         // 从数组随机获取链接
         $pic = $pics[random_int(0, count($pics) - 1)]; 
          
         //返回指定格式
         $type=$_GET['type'];
         switch($type){
          
         //JSON返回
         case 'json':
             header('Content-type:text/json');
             die(json_encode(['pic'=>$pic]));
          
         default:
             die(header("Location: $pic"));
         }
          
         ?>

   

访问路径：你的域名/api 即可显示一张随机图片。

### `第二种方法` 
实现通过判断UA实现手机和电脑设备访问给出不，同随机图片的功能。

同一目录下比如：API下创建img.txt及img-m.txt,名字随便起，你能区分就好。img.txt存放电脑图片，img-m.txt存放手机图片。判断UA代码，下载保存。以上完成后创建index.php文件内容如下：

     <?php
     /*
      *代码来自omii.top
     */
     function is_mobile(){
         require('./Mobile_Detect.php');
         $MobileDetect = new Mobile_Detect();
      
         if ($MobileDetect->isTablet()) {
             // 平板定义为PC类
             return false;
         } elseif ($MobileDetect->isMobile()) {
             return true;
         } else {
             return false;
         }
     }
      
     // 电脑与手机用不同的壁纸
     if(is_mobile()){
        // 手机壁纸
        $filename = "img-m.txt";
     }else{
        // 电脑壁纸
        $filename = "img.txt";
     }
      
     //存放api随机图链接的文件名img.txt
     if(!file_exists($filename)){
         die('文件不存在');
     }
      
     //从文本获取链接
     $pics = [];
     $fs = fopen($filename, "r");
     while(!feof($fs)){
         $line=trim(fgets($fs));
         if($line!='' && substr($str , 0 , 1) != '#'){
             array_push($pics, $line);
         }
     }
      
     // 从数组随机获取链接
     $pic = $pics[random_int(0, count($pics) - 1)]; 
      
     //返回指定格式
     $type=$_GET['type'];
     switch($type){
      
     //JSON返回
     case 'json':
         header('Content-type:text/json');
         die(json_encode(['pic'=>$pic]));
      
     default:
         die(header("Location: $pic"));
     }
      
     ?>   

  

 

访问路径：你的域名/api

注意：如果把index.php改名。访问路径为 你的域名/api/xx.php

