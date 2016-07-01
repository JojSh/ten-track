$(document).ready(function() {

  $('#disappearingthing').hide();



  $('#tracks').hover(function() {
      $('#disappearingthing').show();
    },
    function() {
      $('#disappearingthing').hide();
    }
  );

});
