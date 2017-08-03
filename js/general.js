$.noConflict();
  jQuery( document ).ready(function( $ ) {
    
    $( document).on("click", "#bringsup", function(){
        
        $('#showsup').load("./signup.php"); 
                
        
     
        
    })
    
    $( document).on("click", "#logout", function(){
        
        document.location = "./logout.php"; 
                
        
     
        
    })
    
    
    $( document).on("click", "#auroute", function(){
        
        $('#au').load("./aa1.php"); 
                
        
     
        
    })
    
  
  
  })
  
 