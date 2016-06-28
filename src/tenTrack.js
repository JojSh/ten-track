function TenTrack() {
  this.playlist = [];

}

TenTrack.prototype.setPlaylist = function(tracks) {
  this.playlist = tracks;
};

var samplePlaylist = ["Trevino - L.A. View",
                      "Gold Panda - Time Eater",
                       "NT89 - Red Rupture",
                       "Recondite - Andever",
                       "Four Tet - Reservoir",
                       "Whitesquare - Moving Up",
                       "Midland - Vigilante",
                       "Drumcell - Conflict Divide",
                       "Answer Code Request - Meta",
                       "Shlomo - Escape the Void"
                      ];

function display(ary) {
  var things = "";
  ary.forEach(function(track) {
    var thing = ("<li>" + track + "</li>");
    console.log(thing);
    things += thing;
  });
  return things;
}

function test() {
  console.log("test has run!");
  return (2 * 7);
}
