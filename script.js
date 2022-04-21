button=document.getElementById('button')



button.addEventListener('click',function(){
    var message=document.getElementById('message');
  
    var reg=document.getElementById('regex').value;
    
    var test=document.getElementById('test').value;
     document.getElementById('message').value=""

    if(test.match(reg)){
        document.getElementById("message").innerHTML="Match found"
        document.getElementById("message").style="color:rgb(86, 255, 83)"

    }
    else{
        document.getElementById("message").innerHTML="No match found !"
        document.getElementById("message").style="color:rgb(245, 32, 32)"
    }

})