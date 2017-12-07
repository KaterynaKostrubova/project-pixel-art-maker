// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// function makeGrid() {

// // Your code goes here!

// }

  $(document).ready(function(){
  
  function makeGrid(){
    
      $("#submit").click(function(){
      
        let inpRow = $("#input_height").val();
        let inpCol = $("#input_width").val();
      
        $("#pixel_canvas").html("<table id='grid'></table>");
          for(let i = 1; i <= inpRow; i++){
             $("#pixel_canvas #grid").append("<tr id='row'></tr>");
             for (let n = 1; n <= inpCol; n++){
                        $('#pixel_canvas #grid #row:last').append("<td></td>");
                    }
          }
         }); 
    
    
        $("#colorPicker").click(function () {
          let currentColor =  $("#colorPicker").attr("value", "#ffffff");

          $("td").click(function(){
           let bg = $(this).css("background-color", currentColor.val());

           });
   
         });
    
        $("#clear").click(function(){
          $("td").css("background-color", "#ffffff");
        })

  }
    
    makeGrid();
  });