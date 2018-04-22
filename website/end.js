<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 75f43517f2741d96ed28f03a110493502cef5dc4
function my(){

    var s = document.getElementById("start").value;
    
    var e = document.getElementById("end").value;
    
    var i = document.getElementById("inc").value;
    
    var s1 = parseInt(s);
    
    var e1 = parseInt(e);
    
    var i1 = parseInt(i);
    
    var x;
    
    var loop = [];
    
    var loop1 = [];
    
    var i = 0;
    
    function lp(){

        if(i1>0){
            for(x=s1; x<=e1; x+=i1){
                loop.push(x);
            }
        } else {
            for(x=s1; x<=e1; x-=i1){
                loop.push(x);
            }
        }
    
        
            
        
        
        loop.toString();
        
        document.write("The generated array is ",loop);
        
        document.write("<br />");
    
    }
    
    function sum(){
    
        for(x = s1 ;x<=e1 ; x+=i1 ){
        
        i = i+ x;
        
        }
    
        document.write("The sum is ",i);
        
        document.write("<br />");
    
    }
    
    function binary(){
    
        for(x = s1 ;x<=e1 ; x+=i1 ){
        
        loop1.push(parseInt(x, 10).toString(2));
        
        }
    
        loop1.toString();
        
        document.write("The binary of absolute element values are: ",loop1);
        
        document.write("<br />");
    
    }
    
    lp();
    
    sum();
    
    binary();
    
<<<<<<< HEAD
=======
=======
function my(){

    var s = document.getElementById("start").value;
    
    var e = document.getElementById("end").value;
    
    var i = document.getElementById("inc").value;
    
    var s1 = parseInt(s);
    
    var e1 = parseInt(e);
    
    var i1 = parseInt(i);
    
    var x;
    
    var loop = [];
    
    var loop1 = [];
    
    var i = 0;
    
    function lp(){

        if(i1>0){
            for(x=s1; x<=e1; x+=i1){
                loop.push(x);
            }
        } else {
            for(x=s1; x<=e1; x-=i1){
                loop.push(x);
            }
        }
    
        
            
        
        
        loop.toString();
        
        document.write("The generated array is ",loop);
        
        document.write("<br />");
    
    }
    
    function sum(){
    
        for(x = s1 ;x<=e1 ; x+=i1 ){
        
        i = i+ x;
        
        }
    
        document.write("The sum is ",i);
        
        document.write("<br />");
    
    }
    
    function binary(){
    
        for(x = s1 ;x<=e1 ; x+=i1 ){
        
        loop1.push(parseInt(x, 10).toString(2));
        
        }
    
        loop1.toString();
        
        document.write("The binary of absolute element values are: ",loop1);
        
        document.write("<br />");
    
    }
    
    lp();
    
    sum();
    
    binary();
    
>>>>>>> bdceef5ba07e49e68b2fa1e2f47cb34b668ac1b9
>>>>>>> 75f43517f2741d96ed28f03a110493502cef5dc4
    }