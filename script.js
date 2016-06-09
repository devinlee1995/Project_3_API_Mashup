$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    var formData = 
      $('input[name=name]').val();
    $.ajax({
      type: "GET",
      url: 'https://pokeapi.co/api/v2/pokemon/'+ formData,
      success: function (response) {
          document.getElementById('Pokemon').innerHTML = formData;
          var list_sprites= response.sprites;
             var img = new Image();
             img.src = list_sprites.front_default;
            $("#div1").html("");
            div1.appendChild(img);

      }
    });
  });
});

//$.each(item, function(key,value){
  //console.log("key: " + key);
  //console.log("value: " + value);
//})