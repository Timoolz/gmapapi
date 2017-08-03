<?php


//class Database{
//    public $db;
//    public function __contruct(){
//        $this->db = new PDO('mysql:host='.DATABASE_HOST.';dbname='.DATABASE_NAME.';charset=utf8',DATABASE_USER, DATABASE_PASS);
//        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//        $this->db->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
//    }
//    
//}

    try{
        $dbh = new PDO('mysql:host='.DATABASE_HOST.';dbname='.DATABASE_NAME.';charset=utf8',DATABASE_USER, DATABASE_PASS);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE); 
        
    }
    catch(PDOException $e){
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }       
            
   





?>