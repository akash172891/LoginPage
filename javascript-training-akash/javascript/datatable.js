/* -----------------------------------------------------------------------POSTS------------------------------------------------------------------------------------------- */
$(document).ready(function(){

/*-----------------------------------------POSTS--------------------------- */
    $('#Posts').click(function(e){
        e.preventDefault();


        let x = $("#userId").val();

        if(x===""){
           alert("Enter a user id");
           return;
        }

        let url = 'https://jsonplaceholder.typicode.com/Posts?userId=' + x;
        
        $.getJSON(url, function(Response) {
          console.log(Response);
          const newTable = $("<table></table>");
          newTable.append("<thead><th>id</th><th>title</th><th>body</th></thead>");
          let tableBody = $("<tbody></tbody>");
          newTable.append(tableBody);
        
          $.each(Response, function(index, obj) {
            let newRow = $("<tr></tr>");
        
            let idCell = $("<td></td>").text(obj.id);
            let titleCell = $("<td></td>").text(obj.title);
            let bodyCell = $("<td></td>").text(obj.body);
        
            newRow.append(idCell, titleCell, bodyCell);
            tableBody.append(newRow);
          });
        
          $("#target").empty().append(newTable);
          newTable.css('width', '100%');
          newTable.DataTable({
            search: {
              return: true
            }
          });
        });
        

    })
    
/**------------------------------------POSTSDONE------------------------------ */
// let posts=document.getElementById("Posts");

//     posts.addEventListener("click",function(e){
        
//         e.preventDefault();
//         let x=document.getElementById("userId").value;
//         let url = 'https://jsonplaceholder.typicode.com/Posts?userId='+x;
//         fetch(url)
//         .then(data => data.json())
//         .then(Response=> {
//             console.log(Response);
//             const newTable = document.createElement("table");
//             newTable.innerHTML = "<thead><th>id</th><th>title</th><th>body</th></thead>";
//            let tablebody=document.createElement("tbody");
//            newTable.appendChild(tablebody);
//             Response.map((obj)=>{
//                 console.log(obj);
//                 let newrow=document.createElement("tr");
                
//                 let myid=document.createElement("td");
//                 let mytitle=document.createElement("td");
//                 let mybody=document.createElement("td");
                
//                 myid.innerText=obj.id;
//                 mytitle.innerText=obj.title;
//                 mybody.innerText=obj.body;
               
//                 newrow.appendChild(myid);
//                 newrow.appendChild(mytitle);
//                 newrow.appendChild(mybody);
//                 tablebody.appendChild(newrow);

//             })

         

//             const target = document.getElementById('target');
//             target.replaceChildren();
//             target.appendChild(newTable);
//             newTable.style.width='100%';
//             new DataTable(newTable,{
//                 search : {
//                     return : true
//                 }
//             });
            

//             return Response;
//         });

        
        
        
        
        

        
//     })
/* -----------------------------------------------------ALBUMS--------------------------------------------------------------------------------------------- */

    $('#albums').click(function(e){
        e.preventDefault();
        let x = $("#userId").val();
        if(x===""){
            alert("Enter a user id");
            return;
         }
        let url = 'https://jsonplaceholder.typicode.com/albums?userId=' + x;
        
        $.getJSON(url, function(Response) {
          console.log(Response);
          const newTable = $("<table></table>");
          newTable.append("<thead><th>User id</th><th>id</th><th>title</th></thead>");
          let tableBody = $("<tbody></tbody>");
          newTable.append(tableBody);
        
          $.each(Response, function(index, obj) {
            let newRow = $("<tr></tr>");
        
            let idCell = $("<td></td>").text(obj.userId);
            let titleCell = $("<td></td>").text(obj.id);
            let bodyCell = $("<td></td>").text(obj.title);
        
            newRow.append(idCell, titleCell, bodyCell);
            tableBody.append(newRow);
          });
        
          $("#target").empty().append(newTable);
          newTable.css('width', '100%');
          newTable.DataTable({
            search: {
              return: true
            }
          });
        });
    })






// let albums=document.getElementById("albums");

//     albums.addEventListener("click",function(e){
        
//         e.preventDefault();
//         let x=document.getElementById("userId").value;
//         let url = 'https://jsonplaceholder.typicode.com/Posts?userId='+x;
//         fetch(url)
//         .then(data => data.json())
//         .then(Response=> {
//             console.log(Response);
//             const newTable = document.createElement("table");
//             newTable.innerHTML = "<thead><th>id</th><th>title</th></thead>";
//             let tablebody=document.createElement("tbody");
//             newTable.appendChild(tablebody);
//             Response.map((obj)=>{
//                 console.log(obj);
//                 let newrow=document.createElement("tr");
//                 let myid=document.createElement("td");
//                 let mytitle=document.createElement("td");
               
//                 myid.innerText=obj.id;
//                 mytitle.innerText=obj.title;
                
//                 newrow.appendChild(myid);
//                 newrow.appendChild(mytitle);
//                 tablebody.appendChild(newrow);

//             })
//             const target = document.getElementById('target');
//             target.replaceChildren();
//             target.appendChild(newTable);
            
//             new DataTable(newTable,{
//                 search : {
//                     return : true
//                 }
//             }
//                 )
//             return Response;
//         });
//     });

/**--------------------------------------------------------------albumsdone-------------------------------------------------------------------------- */




// $("#comments").on("click", async function(e) {
//     e.preventDefault();
//     let x = $("#userId").val();
//     if(x===""){
//         alert("Enter a user id");
//         return;
//      }
//     let url = 'https://jsonplaceholder.typicode.com/Posts?userId=' + x;
  
//     try {
//       const dataResponse = await $.getJSON(url);
//       const data = dataResponse;
//       const postIds = $.map(data, function(obj) {
//         return obj.id;
//       });

//       $('#commentsTable').empty();
//       let newTable = $("#commentsTable");
      
//       newTable.append("<thead><th>Post id</th><th>it</th><th>name</th><th>email</th><th>body</th></thead>");
//       let tablebody = $("<tbody></tbody>");
//       newTable.append(tablebody);

//     const comment = postIds.map(x=>$.getJSON('https://jsonplaceholder.typicode.com/comments?postId=' +x ))
//      // console.log(comment);
//     Promise.all(comment)
//     .then((values)=>{
//         //console.log(values);
//         for(const comments of values){
//             $.each(comments, function(index, values) {
//                 let newrow = $("<tr></tr>");
        
//                 let mypostid = $("<td></td>").text(values.postId);
//                 newrow.append(mypostid);
        
//                 let myit = $("<td></td>").text(values.id);
//                 newrow.append(myit);
        
//                 let myname = $("<td></td>").text(values.name);
//                 newrow.append(myname);
        
//                 let myemail = $("<td></td>").text(values.email);
//                 newrow.append(myemail);
        
//                 let mybody = $("<td></td>").text(values.body);
//                 newrow.append(mybody);
        
//                 tablebody.append(newrow);
//               });
//         }
//         $("#target").empty().append(newTable);
//         newTable.css("width", "100%");


    
//         new DataTable("#commentsTable", {
//             search: {
//             return: true
//             }
//         });

//     })

//     //   for (const postId of postIds) {
//     //     const commentsUrl = 'https://jsonplaceholder.typicode.com/comments?postId=' + postId;
//     //     const commentsResponse = await $.getJSON(commentsUrl);
//     //     const comments = commentsResponse;
  
       
//     //   }
  
      
//     } catch (error) {
//       console.log(error);
//     }
//   });
  





    /*-------------------------------------------------------------------COMMENTS------------------------------------------------------------------------------------------- */


    $('#comments').click(function(e){
        e.preventDefault();

        let x=$('#userId').val();
        if(x===""){
            alert("Enter a user id");
            return;
         }
        let url = 'https://jsonplaceholder.typicode.com/Posts?userId='+x;

        $.getJSON(url,function(Response){
            console.log(Response);
            const something=Response.map(x=>x.id);

            let postIds=Object.values(something);
           // $('#commentsTable').empty();
            const newTable = $("<table></table>");
            newTable.append("<thead><th>Post id</th><th>it</th><th>name</th><th>email</th><th>body</th></thead>");
            let tablebody = $("<tbody></tbody>");
            newTable.append(tablebody);
            const comment = postIds.map(x=>$.getJSON('https://jsonplaceholder.typicode.com/comments?postId=' +x ))
            Promise.all(comment)
            .then((values)=>{
                //console.log(values);
                for(const comments of values){
                    $.each(comments, function(index, values) {
                        let newrow = $("<tr></tr>");
                
                        let mypostid = $("<td></td>").text(values.postId);
                        newrow.append(mypostid);
                
                        let myit = $("<td></td>").text(values.id);
                        newrow.append(myit);
                
                        let myname = $("<td></td>").text(values.name);
                        newrow.append(myname);
                
                        let myemail = $("<td></td>").text(values.email);
                        newrow.append(myemail);
                
                        let mybody = $("<td></td>").text(values.body);
                        newrow.append(mybody);
                
                        tablebody.append(newrow);
                      });
                }
                $("#target").empty().append(newTable);
                newTable.css("width", "100%");
        
        
            
                new DataTable(newTable, {
                    search: {
                    return: true
                    }
                });
        
            })


        })

    })

    // let comments=document.getElementById("comments");

    // comments.addEventListener("click",function(e){
        
    //     e.preventDefault();
    //     let x=document.getElementById("userId").value;
    //     let url = 'https://jsonplaceholder.typicode.com/Posts?userId='+x;
    //     fetch(url)
    //     .then(data => data.json())
    //     .then(Response=> Response.map(obj=>obj.id))
    //     .then(Response=>{

    //        // console.log(Response);
    //         let postids=Object.values(Response);
    //         //console.log(postids);

    //         //creating table and table body
    //         let newTable = document.createElement("table");
    //         newTable.setAttribute("id","commentsTable");
    //         newTable.innerHTML = "<thead><th>Post id</th><th>it</th><th>name</th><th>email</th><th>body</th></thead>";
    //         let tablebody=document.createElement("tbody");
    //         newTable.appendChild(tablebody);

    //         postids.forEach(y => {
    //             commentsUrl='https://jsonplaceholder.typicode.com/comments?postId='+y;
    //             fetch(commentsUrl)
    //             .then(data=>data.json())
    //             .then(Response=>{
    //                 //console.log(Response);
                   
                   
    //                     Response.forEach((xy)=>{
    //                         console.log(xy);
    //                         let newrow=document.createElement("tr");
                            
    //                         let mypostid=document.createElement("td");
    //                         mypostid.innerText=xy.postId;
    //                         newrow.appendChild(mypostid);

    //                         let myit=document.createElement("td");
    //                         myit.innerText=xy.id;
    //                         newrow.appendChild(myit);

    //                         let myname=document.createElement("td");
    //                         myname.innerText=xy.name;
    //                         newrow.appendChild(myname);

    //                         let myemail=document.createElement("td");
    //                         myemail.innerText=xy.email
    //                         newrow.appendChild(myemail);

    //                         let mybody=document.createElement("td");
    //                         mybody.innerText=xy.body;
    //                         newrow.appendChild(mybody);
    //                         tablebody.appendChild(newrow);

    //                     })
                    
    //             })
                
    //         });
    //         const target = document.getElementById('target');
    //         target.replaceChildren();
    //         target.appendChild(newTable);
    //         newTable.style.width='100%';
            
          
    //     })
    //     .then(obj=>{
    //         new DataTable('#commentsTable',{
    //             search : {
    //                 return : true
    //             }
    //         });
    //     });

        
        
        
        
        

        
    // })






    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    

    // let comments = document.getElementById("comments");

    // comments.addEventListener("click", async function(e) {
    //     e.preventDefault();
    //     let x = document.getElementById("userId").value;
    //     let url = 'https://jsonplaceholder.typicode.com/Posts?userId=' + x;

    //     try {
    //         const dataResponse = await fetch(url);
    //         const data = await dataResponse.json();
    //         const postIds = data.map(obj => obj.id);

    //         let newTable = document.createElement("table");
    //        let elem =document.querySelector("table");
    //         elem.setAttribute("class","display-compact");
    //         newTable.innerHTML = "<thead><th>Post id</th><th>it</th><th>name</th><th>email</th><th>body</th></thead>";
    //         let tablebody = document.createElement("tbody");
            
    //         newTable.appendChild(tablebody);

    //         for (const postId of postIds) {
    //         const commentsUrl = 'https://jsonplaceholder.typicode.com/comments?postId=' + postId;
    //         const commentsResponse = await fetch(commentsUrl);
    //         const comments = await commentsResponse.json();

    //         comments.forEach((comment) => {
    //             let newrow = document.createElement("tr");
    //             let mypostid = document.createElement("td");
                
    //             mypostid.innerText = comment.postId;
    //             newrow.appendChild(mypostid);

    //             let myit = document.createElement("td");
    //             myit.innerText = comment.id;
    //             newrow.appendChild(myit);

    //             let myname = document.createElement("td");
    //             myname.innerText = comment.name;
    //             newrow.appendChild(myname);

    //             let myemail = document.createElement("td");
    //             myemail.innerText = comment.email;
    //             newrow.appendChild(myemail);

    //             let mybody = document.createElement("td");
    //             mybody.innerText = comment.body;
    //             newrow.appendChild(mybody);

    //             tablebody.appendChild(newrow);
    //         });
    //         }

    //         const target = document.getElementById('target');
    //         target.replaceChildren();
    //         target.appendChild(newTable);
    //         newTable.style.width = '100%';
            
    //         new DataTable('#commentsTable', {
    //         search: {
    //             return: true
    //         }
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // });
    
    
    

    /* -------------------------------------------------------------------TODOS--------------------------------------------------------------------------------------------- */
    // let todos=document.getElementById("todos");

    // todos.addEventListener("click",function(e){
        
    //     e.preventDefault();
    //     let x=document.getElementById("userId").value;
    //     let url = 'https://jsonplaceholder.typicode.com/todos?userId='+x;
    //     fetch(url)
    //     .then(data => data.json())
    //     .then(Response=> {
    //         console.log(Response);
    //         const newTable = document.createElement("table");
    //         newTable.innerHTML = "<thead><th>id</th><th>title</th></thead>";
    //        let tablebody=document.createElement("tbody");
    //        newTable.appendChild(tablebody);
    //         Response.map((obj)=>{
    //             console.log(obj);
    //             let newrow=document.createElement("tr");
                
    //             let myid=document.createElement("td");
    //             let mytitle=document.createElement("td");
               
                
    //             myid.innerText=obj.id;
    //             mytitle.innerText=obj.title;
               
               
    //             newrow.appendChild(myid);
    //             newrow.appendChild(mytitle);
              
    //             tablebody.appendChild(newrow);

    //         })

         

    //         const target = document.getElementById('target');
    //         target.replaceChildren();
    //         target.appendChild(newTable);
    //         newTable.style.width='100%';
    //         new DataTable(newTable,{
    //             search : {
    //                 return : true
    //             }
    //         });
            

    //         return Response;
    //     });

        
        
        
        
        

        
    // })


    $('#todos').click(function(e){
        e.preventDefault();
        let x = $("#userId").val();
        if(x===""){
            alert("Enter a user id");
            return;
         }
        let url = 'https://jsonplaceholder.typicode.com/albums?userId=' + x;
        
        $.getJSON(url, function(Response) {
          console.log(Response);
          const newTable = $("<table></table>");
          newTable.append("<thead><th>id</th><th>title</th></thead>");
          let tableBody = $("<tbody></tbody>");
          newTable.append(tableBody);
        
          $.each(Response, function(index, obj) {
            let newRow = $("<tr></tr>");
        
            
            let titleCell = $("<td></td>").text(obj.id);
            let bodyCell = $("<td></td>").text(obj.title);
        
            newRow.append( titleCell, bodyCell);
            tableBody.append(newRow);
          });
        
          $("#target").empty().append(newTable);
          newTable.css('width', '100%');
          newTable.DataTable({
            search: {
              return: true
            }
          });
        });
    })






})





    

