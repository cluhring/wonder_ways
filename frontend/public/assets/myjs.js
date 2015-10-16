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
      if ($(this).attr("title") !== "") {
        $('.modal-title').html('<a href="https://en.wikipedia.org/w/index.php?title=' +
          $(this).attr("alt").replace(/\s+/g, '_') +
          '" class="modal-header" target="_blank" alt="' +
          $(this).attr("alt") + '">' +
          $(this).attr("title") + '</a>')
        } else {
        $('.modal-title').html('<a href="https://en.wikipedia.org/w/index.php?title=' +
          $(this).attr("alt").replace(/\s+/g, '_') +
          '" class="modal-header" target="_blank" alt="' +
          $(this).attr("alt") + '">' +
          $(this).attr("alt") + '</a>')
        }; // here asign animal name + wikilink to the modal when the user click the picture
      $('#imagemodal').modal('toggle'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
    });
  });

  $(".music-notes").each(function() {
    $(this).mouseover(function() {
      $(this).attr('src', $(this).attr('title'));
    });
  });

  $(".music-notes").each(function() {
    $(this).mouseout(function() {
      $(this).attr('src', $(this).attr('alt'));
    });
  });
});
