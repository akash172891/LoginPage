$(document).ready(function(){
        $('#loginForm').on("submit",function(e){
            e.preventDefault();
            let x = $('#LoginId').val();
            let userdata;
            let url = 'https://jsonplaceholder.typicode.com/users?id=' + x;
            $.getJSON(url)
              .done(function(Response) {
                console.log(Response);
                if (Response) {
                  if (confirm("Successfully Logged in..Click OK to continue")) {
                    window.location = 'datatable.html';
                  }
                }
              });
            
              
        })
})

