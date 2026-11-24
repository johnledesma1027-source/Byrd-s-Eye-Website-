/*
  Gallery content for the site. Photos by Deshaun Frye (@byrdz_eye).

  To add a photo:
    1. Put the full-size file in /images (about 2000px on the long side)
       and a smaller copy (about 800px) in /images/thumbs with the same name.
    2. Add an entry below with that file name as `img`.
  Entries without an `img` show a styled placeholder.

  category: portraits | culture | street | events
  shape:    tall | wide | square (controls the tile size in the grid)
*/
window.BYRDS_EYE = {
  hero: "images/hero.jpg",
  about: "images/about.jpg", // photo of Deshaun from @deshaunfrye
  gallery: [
    { title: "Hands up", category: "portraits", shape: "tall", img: "hands-up.jpg" },
    { title: "Streetcar night", category: "street", shape: "tall", img: "streetcar-night.jpg" },
    { title: "Game day", category: "events", shape: "wide", img: "game-day.jpg" },
    { title: "Locs & denim", category: "portraits", shape: "tall", img: "locs-and-denim.jpg" },
    { title: "Heritage", category: "culture", shape: "tall", img: "heritage.jpg" },
    { title: "King's float", category: "culture", shape: "wide", img: "kings-float.jpg" },
    { title: "Purple", category: "portraits", shape: "tall", img: "purple-hoodie.jpg" },
    { title: "Joy", category: "street", shape: "tall", img: "joy-theater.jpg" },
    { title: "Turn up", category: "events", shape: "wide", img: "party.jpg" },
    { title: "On duty", category: "portraits", shape: "tall", img: "on-duty.jpg" },
    { title: "Black & white", category: "street", shape: "tall", img: "black-and-white.jpg" },
    { title: "Ladies' night", category: "events", shape: "wide", img: "ladies-night.jpg" },
    { title: "Clasped", category: "portraits", shape: "tall", img: "clasped.jpg" },
    { title: "Canal line", category: "street", shape: "tall", img: "canal-line.jpg" },
    { title: "On the mic", category: "culture", shape: "wide", img: "on-the-mic.jpg" },
    { title: "Under the overpass", category: "portraits", shape: "tall", img: "under-the-overpass.jpg" },
    { title: "The crew", category: "events", shape: "tall", img: "the-crew.jpg" },
    { title: "Game day crew", category: "events", shape: "wide", img: "game-day-crew.jpg" },
    { title: "Monochrome", category: "portraits", shape: "tall", img: "monochrome.jpg" },
    { title: "Patrol", category: "street", shape: "tall", img: "patrol.jpg" },
    { title: "Denim blue", category: "portraits", shape: "tall", img: "denim-blue.jpg" },
    { title: "Night out", category: "events", shape: "tall", img: "night-out.jpg" }
  ]
};
