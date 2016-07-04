function TenTrack() {
  this.playlist = [];
}

TenTrack.prototype.setPlaylist = function(tracks) {
  this.playlist = tracks;
};

function display(ary) {
  var element = "";
  ary.forEach(function(track, index) {
    var components = ("<p data-number="+index+">" + track + "</p>");
    element += components;
  });
  return element;
}

function displayPic(picAry, index) {
  // return picAry[index];
  return "<img id='disappearingthing' src='" + picAry[index] + "'></img>";
}


function forLoop(ary) {
  for (var i = 0; i < ary.length; i++ ) {
    console.log(i);
    return i;
  }
}
