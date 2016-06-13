$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    var formData = 
    $('input[name=name]').val();
    $.ajax({
      type: "GET",
      url: 'https://pokeapi.co/api/v2/pokemon/'+ formData,
      success: function (response) {
        
          document.getElementById('Pokemon').innerHTML = "The Pokemon is: " + formData;
      }
    });
  });


});

//$.each(item, function(key,value){
  ////console.log("key: " + key);
  //console.log("value: " + value);
//})