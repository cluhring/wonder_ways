$(document).ready(function(){
  $("#direct").click(function(){
    if($(this).text()==='Hide Directions'){
      $('div.leaflet-routing-alternatives-container').hide();
      $(this).text('Show Directions');
    }else{
      $('div.leaflet-routing-alternatives-container').show();
      $(this).text('Hide Directions');
    }
  });
});
