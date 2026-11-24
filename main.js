(function () {
  const data = window.BYRDS_EYE || { gallery: [] };
  const grid = document.querySelector("[data-gallery]");
  const labels = { portraits: "Portraits", culture: "Culture", street: "Street", events: "Events" };

  function fillMedia(el, src, alt) {
    if (src) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = alt || "";
      img.loading = "lazy";
      el.appendChild(img);
    } else {
      el.classList.add("placeholder");
    }
  }

  // Hero and about images
  const hero = document.querySelector("[data-hero]");
  if (hero) fillMedia(hero, data.hero, "");
  const about = document.querySelector("[data-about]");
  if (about) fillMedia(about, data.about, "Deshaun Frye behind the camera");

  // Gallery
  data.gallery.forEach((item, i) => {
    const tile = document.createElement("button");
    tile.className = "tile tile-" + (item.shape || "square");
    tile.dataset.category = item.category;
    tile.dataset.index = i;
    tile.setAttribute("aria-label", "Open " + item.title);
    fillMedia(tile, item.src, item.title);
    tile.style.setProperty("--hue", (i * 47) % 360);
    const cap = document.createElement("span");
    cap.className = "tile-cap";
    cap.innerHTML = "<strong></strong><em></em>";
    cap.querySelector("strong").textContent = item.title;
    cap.querySelector("em").textContent = labels[item.category] || "";
    tile.appendChild(cap);
    grid.appendChild(tile);
  });

  // Filters
  const filters = document.querySelectorAll(".filter");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      const f = btn.dataset.filter;
      grid.querySelectorAll(".tile").forEach((t) => {
        t.hidden = f !== "all" && t.dataset.category !== f;
      });
    });
  });

  // Lightbox
  const lb = document.querySelector("[data-lightbox]");
  const lbMedia = lb.querySelector("[data-lightbox-media]");
  const lbCap = lb.querySelector("[data-lightbox-caption]");
  let current = 0;

  function visibleTiles() {
    return [...grid.querySelectorAll(".tile")].filter((t) => !t.hidden);
  }
  function show(index) {
    current = index;
    const item = data.gallery[index];
    lbMedia.innerHTML = "";
    lbMedia.className = "lightbox-media";
    fillMedia(lbMedia, item.src, item.title);
    lbMedia.style.setProperty("--hue", (index * 47) % 360);
    lbCap.textContent = item.title + " · " + (labels[item.category] || "");
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function close() {
    lb.hidden = true;
    document.body.style.overflow = "";
  }
  function step(dir) {
    const tiles = visibleTiles().map((t) => +t.dataset.index);
    const pos = tiles.indexOf(current);
    show(tiles[(pos + dir + tiles.length) % tiles.length]);
  }

  grid.addEventListener("click", (e) => {
    const tile = e.target.closest(".tile");
    if (tile) show(+tile.dataset.index);
  });
  lb.querySelector(".lightbox-close").addEventListener("click", close);
  lb.querySelector(".lightbox-prev").addEventListener("click", () => step(-1));
  lb.querySelector(".lightbox-next").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { links.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
  });

  // Contact form: no backend yet, so open an Instagram DM-ready message.
  const form = document.querySelector("[data-contact]");
  const note = document.querySelector("[data-form-note]");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = "Thanks! Booking requests aren't wired up yet, so please DM @byrdz_eye on Instagram for now.";
  });

  document.querySelector("[data-year]").textContent = new Date().getFullYear();
})();
