/*
  Gallery content for the site.

  To add a real photo:
    1. Drop the file in /images (for example images/portrait-01.jpg).
    2. Set its `src` below to "images/portrait-01.jpg".
  Entries without a `src` show a styled placeholder, so the layout works
  before any photos are added.

  category: portraits | culture | street | events
  shape:    tall | wide | square (controls the tile size in the grid)
*/
window.BYRDS_EYE = {
  hero: "",   // e.g. "images/hero.jpg"
  about: "",  // e.g. "images/about.jpg"
  gallery: [
    { title: "Hands up", category: "portraits", shape: "tall", src: "images/hands-up.jpg" },
    { title: "Streetcar night", category: "street", shape: "tall", src: "" },
    { title: "Locs & denim", category: "portraits", shape: "square", src: "" },
    { title: "Heritage parade", category: "culture", shape: "wide", src: "" },
    { title: "Canal line", category: "street", shape: "square", src: "" },
    { title: "Under the overpass", category: "portraits", shape: "tall", src: "" },
    { title: "Super Sunday", category: "culture", shape: "tall", src: "" },
    { title: "Jazz Fest", category: "events", shape: "wide", src: "" },
    { title: "MASA", category: "culture", shape: "square", src: "" },
    { title: "Golden hour", category: "portraits", shape: "square", src: "" },
    { title: "IAMS", category: "events", shape: "tall", src: "" },
    { title: "11:11", category: "street", shape: "wide", src: "" }
  ]
};
