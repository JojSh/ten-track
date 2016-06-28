describe("tenTrack", function() {

  var tenTrack;
  var samplePlaylist;

  beforeEach(function() {
    tenTrack = new TenTrack();
    samplePlaylist = ["Trevino - L.A. View",
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
  });

  it("should be started with an empty playlist", function() {
    expect(tenTrack.playlist).toEqual([]);
  });

  it("can be reset with a list of tracks", function() {
    tenTrack.setPlaylist(samplePlaylist);
    expect(tenTrack.playlist).toEqual(samplePlaylist);
  });

});
