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
    setAudioSrc('iframe');

  });

  function highlightTrack(element) {
    $(".highlightTrack").removeClass("highlightTrack");
    $(element).addClass("highlightTrack");

  }

  function setImgSrc(element, tag) {
    var img = $(tag);
    var index = $(element).attr('data-number');
    img.attr('src', playlistPics[index]);
    img.show();
  }

  function setAudioSrc(tag) {
    var player = $(tag);
    player.attr('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/272292332&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
    player.show();
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
