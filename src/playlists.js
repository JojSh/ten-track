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

var playlistPics = ["https://i1.sndcdn.com/artworks-000162517285-kcp88z-t500x500.jpg",
                      "https://i1.sndcdn.com/artworks-000148194161-zh77v7-t500x500.jpg",
                       "https://i1.sndcdn.com/artworks-000161737209-cjkz58-t500x500.jpg",
                       "https://i1.sndcdn.com/artworks-000166507496-rw6tha-t500x500.jpg",
                       "styling/images/four_tet_reservoirs.png",
                       "https://i1.sndcdn.com/artworks-000165227595-oe3jzz-t500x500.jpg",
                       "https://i1.sndcdn.com/artworks-000165212860-214e2n-t500x500.jpg",
                       "https://i1.sndcdn.com/artworks-000146463684-hrtcgx-t500x500.jpg",
                       "https://i1.sndcdn.com/artworks-000165550600-ybgs19-t500x500.jpg",
                       "https://i1.sndcdn.com/artworks-000162617544-iz2kf0-t500x500.jpg"
                      ];
// var playlistObject = [{ 'title': 'Trevino - L.A. View', 'imgURL': 'https://i1.sndcdn.com/artworks-000162517285-kcp88z-t500x500.jpg'},
//                       { 'title': 'NT89 - Red Rupture', 'imgURL': 'https://i1.sndcdn.com/artworks-000148194161-zh77v7-t500x500.jpg'}
//                     ];

var trackPlayers = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/263791810&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247860480&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262623246&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/270788368&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
                    "Four Tet - Reservoir",
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/266764857&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/266750035&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/246172258&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265053420&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/263914971&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
                    ];

function chopScUrl(string) {
  var chop = string.split('src="')
  return (chop[1].split('"><'))[0]
}
