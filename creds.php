<?php


//Database Credentials
if ($_SERVER['SERVER_ADDR'] == '127.0.0.1' || $_SERVER['SERVER_ADDR'] == '::1') $cur_ipnum = 'localhost'; 
 else $cur_ipnum = $_SERVER['SERVER_ADDR'];
 
 define('DATABASE_HOST',$cur_ipnum);
 define('DATABASE_USER','root');
 define('DATABASE_PASS','');
 define('DATABASE_NAME','testapi');
 



?>