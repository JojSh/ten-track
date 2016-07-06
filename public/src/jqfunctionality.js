$(document).ready(function() {

  var clicked = false;

  $('#tracks p').hover(function() {
    setImgSrc(this, '#disappearingthing');
    },
    function() {
      hideIfNotClicked('#disappearingthing');
    }
  );

  function hideIfNotClicked(element) {
    if (clicked === false) {
      $(element).hide();
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

function _setElementSrc(element, tag, attribute) {
  var item = $(tag);
  var index = $(element).attr('data-number');
  item.attr('src', playlistObjects[index][attribute]);
  item.show();
}

  function setImgSrc(element, tag) {
    _setElementSrc(element, tag, 'imgURL');
  }

  function setAudioSrc(element, tag) {
    _setElementSrc(element, tag, 'playerURL');
  }

});

function displayTrackList(objects) {
  var element = "";
  objects.forEach(function(obj, index) {
    var components = ("<p data-number="+index+">" + recordPic() +" "+ obj.title + "</p>");
    element += components;
  });
  return element;
}


function recordPic() {
  return "<img src='styling/images/record_icon_small.png' ></img>";
}
