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
    setAudioSrc(this, 'iframe');

  });

  function highlightTrack(element) {
    $(".highlightTrack").removeClass("highlightTrack");
    $(element).addClass("highlightTrack");

  }

  function _setElementSrc(element, tag, array) {
    var item = $(tag);
    var index = $(element).attr('data-number');
    item.attr('src', array[index]);
    item.show();
  }

  function setImgSrc(element, tag) {
    _setElementSrc(element, tag, playlistPics);
  }

  function setAudioSrc(element, tag) {
    _setElementSrc(element, tag, trackPlayers);
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
  return "<img src='images/record_icon_small.png' ></img>";
}
