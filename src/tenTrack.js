function TenTrack() {
  this.playlist = [];

}

TenTrack.prototype.setPlaylist = function(tracks) {
  this.playlist = tracks;
};

function display(ary, picAry) {
  var things = "";
  ary.forEach(function(track, index) {
    var thing = ("<li>" + track + displayPic(picAry, index) + "</li>");
    console.log(thing);
    things += thing;
  });
  return things;
}

function displayPic(picAry, index) {
  return "<img id='disappearingthing' src='" + picAry[index] + "'></img>";
};

function test() {
  console.log("test has run!");
  return (2 * 7);
}
