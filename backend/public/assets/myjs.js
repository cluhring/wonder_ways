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

  $(".pretty-picture").each(function(){
    $(this).click(function(){
      $('#imagepreview').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
      $('.modal-title').text($(this).attr('alt')); // here asign animal name to the modal when the user click the picture
      $('#imagemodal').modal('toggle'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
    });
  });
});
