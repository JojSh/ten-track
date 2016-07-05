$(document).ready(function() {

  var clicked = false;

  $('#tracks p').hover(function() {
    setImgSrc(this, '#disappearingthing');
    },
    function() {
      hideIfNotClicked('#disappearingthing');
    }
  );

  function hideIfNotClicked(pic) {
    if (clicked === false) {
      $(pic).hide();
    }
  }

  $('#tracks p').on('click', function(){
    clicked = true;
    highlightTrack(this);
    setImgSrc(this, '#pics');

  });

  function highlightTrack(element) {
    $(".highlightTrack").removeClass("highlightTrack");
    $(element).addClass("highlightTrack");

  }

  function setImgSrc(element, divID) {
    var img = $(divID);
    var id = $(element).attr('data-number');
    img.attr('src', playlistPics[id]);
    img.show();
  }

});

function display(ary) {
  var element = "";
  ary.forEach(function(track, index) {
    var components = ("<p data-number="+index+">" + recordPic() +" "+ track + "</p>");
    element += components;
  });
  return element;
}

function recordPic() {
  return "<img src='styling/images/record_icon_small.png' ></img>";
}
