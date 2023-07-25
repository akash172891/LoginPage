$(document).ready(function(){
    $('#mform').submit((e)=> {
        e.preventDefault();
        
    
    //    fetch('https://jsonplaceholder.typicode.com/users',{
    //         method:'POST',
    //         body: new FormData(mform)
    //     }).then(result => result.json())
    //     .then(result =>{
    //         if(confirm("You are registered... You id is "+result.id + "...  click OK to Login")){
    //                 window.location="login.html"
    //     }} );
    
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'POST',
            data: new FormData($('#mform')[0]),
            processData: false,
            contentType: false
          }).done(function(result) {
            if (confirm("You are registered... Your id is " + result.id + "... Click OK to Login")) {
              window.location = "login.html";
            }
          });
          
    
        // let usr=document.getElementById("UserName");
       
        // console.log(usr.value);
        // alert("form submitted");
    })
    
})