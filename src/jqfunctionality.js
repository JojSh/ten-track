$(document).ready(function() {

  $('#disappearingthing').hide();

  // $('#track0').hover(function() {
  //     $('#disappearingthing').show();
  //   },
  //   function() {
  //     $('#disappearingthing').hide();
  //   }
  // );

  $('#tracks p').hover(function() {
      var img = $('#disappearingthing');
      var id = $(this).attr('data-number');
      img.attr('src', playlistPics[id]);
      img.show();
      // $('#disappearingthing').show();
    },
    function() {
      $('#disappearingthing').hide();
    }
  );


});
