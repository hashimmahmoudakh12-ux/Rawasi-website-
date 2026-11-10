/* =========================================================================
   Rawasi Adventures — main.js
   Vanilla JS, no build step. Renders trips from data/trips.js and shared
   content from data/site.js, and powers every interactive piece.
   ========================================================================= */
(function () {
  "use strict";

  var doc = document.documentElement;
  var ROOT = doc.getAttribute("data-root") || "";
  var TRIPS = window.RAWASI_TRIPS || [];
  var SITE = window.RAWASI_SITE || { links: {}, faq: [], guides: [], packing: [], refund: [] };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function url(path) { return !path || /^(https?:|mailto:|tel:|#)/.test(path) ? path : ROOT + path; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function money(n) { return "$" + Number(n).toLocaleString("en-US"); }
  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }
  function today() { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function parseDate(s) { var p = String(s).split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function isPast(t) { return parseDate(t.endDate) < today(); }
  function statusOf(t) {
    if (t.status === "soldout") return { key: "soldout", label: "Sold out" };
    if (isPast(t)) return { key: "soldout", label: "Completed" };
    if (t.status === "waitlist") return { key: "waitlist", label: "Join the waitlist" };
    if (t.status === "soon") return { key: "soon", label: "Coming soon" };
    return { key: "open", label: "Registration open" };
  }
  function findTrip(slug) { return TRIPS.filter(function (t) { return t.slug === slug; })[0]; }
  function featuredTrip() {
    var up = TRIPS.filter(function (t) { return !isPast(t); }).sort(function (a, b) { return parseDate(a.startDate) - parseDate(b.startDate); });
    return TRIPS.filter(function (t) { return t.featured && !isPast(t); })[0] || up[0] || TRIPS[0];
  }

  var ICONS = {
    mountain: '<path d="M3 20l6.5-11 4 6.5L16 12l5 8z"/><path d="M8 11.5l1.5 1.5 1.5-1.5"/>',
    water: '<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/>',
    tent: '<path d="M3 20L12 4l9 16z"/><path d="M12 4v16M9 20l3-6 3 6"/>',
    fish: '<path d="M3 12c3-5 10-6 14-2l4-3v10l-4-3c-4 4-11 3-14-2z"/><circle cx="15" cy="11" r=".6" fill="currentColor"/>',
    moon: '<path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z"/>',
    people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.2c3 0 6 1.8 6 5.8"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    chevron: '<path d="M6 9l6 6 6-6"/>',
    play: '<path d="M7 4.5v15l13-7.5z" fill="currentColor" stroke="none"/>'
  };
  function icon(name, cls) {
    return '<svg class="' + (cls || "icon") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------- static links (WhatsApp / IG / YouTube / phone / email) ---------- */
  function initLinks() {
    $$("[data-link]").forEach(function (a) {
      var k = a.getAttribute("data-link"), L = SITE.links || {};
      if (k === "phone-call") a.href = "tel:" + L.phone;
      else if (k === "phone-text") a.href = "sms:" + L.phone;
      else if (k === "email") a.href = "mailto:" + L.email;
      else if (L[k]) a.href = L[k];
      if (/^https?:/.test(a.href)) { a.target = "_blank"; a.rel = "noopener"; }
    });
    $$("[data-text]").forEach(function (el) { var v = (SITE.links || {})[el.getAttribute("data-text")]; if (v) el.textContent = v; });
    $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* ---------- theme (light / dark) ---------- */
  function initTheme() {
    var toggles = $$("[data-theme-toggle]");
    function sync() { var dark = doc.getAttribute("data-theme") === "dark"; toggles.forEach(function (t) { t.checked = dark; }); }
    toggles.forEach(function (t) {
      t.addEventListener("change", function () {
        var theme = t.checked ? "dark" : "light";
        doc.setAttribute("data-theme", theme);
        store("rawasi-theme", theme);
        sync();
      });
    });
    sync();
  }

  /* ---------- nav ---------- */
  function initNav() {
    var nav = $(".nav");
    if (!nav) return;
    var ticking = false;
    function onScroll() {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
      ticking = false;
    }
    window.addEventListener("scroll", function () { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
    onScroll();

    var burger = $(".burger"), menu = $(".menu");
    if (!burger || !menu) return;
    function setOpen(open) {
      doc.classList.toggle("menu-open", open);
      document.body.classList.toggle("menu-open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menu.setAttribute("aria-hidden", String(!open));
      if (open) { var first = $("a", menu); if (first) setTimeout(function () { first.focus(); }, 50); }
    }
    burger.addEventListener("click", function () { setOpen(burger.getAttribute("aria-expanded") !== "true"); });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && doc.classList.contains("menu-open")) { setOpen(false); burger.focus(); } });
    window.addEventListener("resize", function () { if (window.innerWidth >= 900) setOpen(false); });
  }

  /* ---------- scroll reveal ---------- */
  var revealObserver = null;
  function observeReveals(ctx) {
    var els = $$(".reveal:not(.is-visible)", ctx);
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-visible"); }); return; }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-visible"); revealObserver.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    els.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- parallax ---------- */
  function initParallax() {
    if (reduceMotion) return;
    var items = $$("[data-parallax]");
    if (!items.length) return;
    var ticking = false;
    function update() {
      var vh = window.innerHeight;
      items.forEach(function (el) {
        var r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        var speed = parseFloat(el.getAttribute("data-parallax")) || 0.2;
        el.style.transform = "translate3d(0," + (-r.top * speed).toFixed(1) + "px,0)";
      });
      ticking = false;
    }
    window.addEventListener("scroll", function () { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }

  /* ---------- hero video ---------- */
  function initHeroVideo() {
    $$("video[data-hero-video]").forEach(function (v) {
      if (reduceMotion) { v.removeAttribute("autoplay"); v.pause(); v.style.display = "none"; return; }
      v.muted = true;
      v.addEventListener("error", function () { v.style.display = "none"; }, true);
      var p = v.play && v.play();
      if (p && p.catch) p.catch(function () { /* autoplay blocked — poster image stays */ });
    });
  }

  /* ---------- trip cards ---------- */
  function tripCard(t, i) {
    var s = statusOf(t), past = isPast(t);
    var price = t.price ? '<span class="trip-card__price">' + money(t.price) + " <small>/ person</small></span>" : '<span class="trip-card__price muted">' + esc(t.groupSize || "") + "</span>";
    return '<a class="card trip-card reveal' + (past ? " is-past" : "") + '" style="--d:' + (i * 0.08) + 's" href="' + url(t.page) + '">' +
      '<div class="trip-card__media"><img src="' + url(t.image) + '" alt="' + esc(t.shortTitle) + '" loading="lazy" width="1800" height="1200">' +
      '<span class="badge badge--' + s.key + '">' + s.label + "</span></div>" +
      '<div class="trip-card__body">' +
      '<span class="trip-card__meta">' + esc(t.dates) + " · " + esc(t.shortLocation || t.location) + "</span>" +
      '<h3 class="trip-card__title">' + esc(t.shortTitle || t.title) + "</h3>" +
      '<div class="trip-card__foot">' + price + '<span class="link-more">' + (past ? "See recap" : "Learn more") + "</span></div>" +
      "</div></a>";
  }

  function initTripGrid() {
    var grid = $("[data-trip-grid]");
    if (!grid) return;
    var filter = "all";
    function render() {
      var list = TRIPS.filter(function (t) { return filter === "all" || (filter === "past" ? isPast(t) : !isPast(t)); })
        .sort(function (a, b) {
          var pa = isPast(a), pb = isPast(b);
          if (pa !== pb) return pa ? 1 : -1;
          return pa ? parseDate(b.startDate) - parseDate(a.startDate) : parseDate(a.startDate) - parseDate(b.startDate);
        });
      grid.innerHTML = list.length ? list.map(tripCard).join("") :
        '<div class="empty" style="grid-column:1/-1"><p>No ' + filter + ' trips right now.</p><a class="link-more" data-link="whatsapp" href="' + SITE.links.whatsapp + '">Join the WhatsApp group for updates</a></div>';
      observeReveals(grid);
    }
    var seg = $("[data-segmented]");
    if (seg) initSegmented(seg, function (v) { filter = v; render(); });
    render();
  }

  function initSegmented(seg, onChange) {
    var btns = $$("button", seg);
    var ind = document.createElement("span");
    ind.className = "segmented__indicator"; ind.setAttribute("aria-hidden", "true");
    seg.insertBefore(ind, seg.firstChild);
    function move(btn) { ind.style.width = btn.offsetWidth + "px"; ind.style.transform = "translateX(" + btn.offsetLeft + "px)"; }
    function select(btn, focus) {
      btns.forEach(function (b) { var on = b === btn; b.setAttribute("aria-selected", String(on)); b.tabIndex = on ? 0 : -1; });
      move(btn); if (focus) btn.focus();
      onChange(btn.getAttribute("data-value"));
    }
    btns.forEach(function (b, i) {
      b.addEventListener("click", function () { select(b); });
      b.addEventListener("keydown", function (e) {
        var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (d) { e.preventDefault(); select(btns[(i + d + btns.length) % btns.length], true); }
      });
    });
    var current = btns.filter(function (b) { return b.getAttribute("aria-selected") === "true"; })[0] || btns[0];
    btns.forEach(function (b) { b.tabIndex = b === current ? 0 : -1; });
    requestAnimationFrame(function () { move(current); });
    window.addEventListener("resize", function () { move($('button[aria-selected="true"]', seg) || current); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { move($('button[aria-selected="true"]', seg) || current); });
  }

  /* ---------- featured trip (home) ---------- */
  function initFeatured() {
    var el = $("[data-featured-trip]");
    if (!el) return;
    var t = featuredTrip();
    if (!t) return;
    var s = statusOf(t);
    el.innerHTML =
      '<article class="featured reveal">' +
      '<div class="featured__media"><img src="' + url(t.image) + '" alt="' + esc(t.shortTitle) + '" loading="lazy"><span class="badge badge--' + s.key + '">' + s.label + "</span></div>" +
      '<div class="featured__body">' +
      '<span class="eyebrow">Next trip · ' + esc(t.eyebrow || "") + "</span>" +
      '<h3 class="featured__title">' + esc(t.shortTitle) + "</h3>" +
      '<p class="muted">' + esc(t.summary) + "</p>" +
      '<div class="featured__facts">' +
      '<div><div class="fact__label">Dates</div><div class="fact__value">' + esc(t.dates) + "</div></div>" +
      '<div><div class="fact__label">Group</div><div class="fact__value">' + esc(t.groupSize) + "</div></div>" +
      '<div><div class="fact__label">Where</div><div class="fact__value">' + esc(t.shortLocation) + "</div></div>" +
      (t.price ? '<div><div class="fact__label">From</div><div class="fact__value fact__value--price">' + money(t.price) + "</div></div>" : "") +
      "</div>" +
      '<div class="btn-row"><a class="btn" href="' + url(t.registerUrl || t.page) + '">Reserve your spot</a><a class="link-more" href="' + url(t.page) + '">Learn more</a></div>' +
      "</div></article>";
  }

  /* ---------- FAQ accordion ---------- */
  function faqHTML(ids) {
    var list = ids ? ids.map(function (id) { return SITE.faq.filter(function (f) { return f.id === id; })[0]; }).filter(Boolean) : SITE.faq;
    return '<div class="accordion">' + list.map(function (f, i) {
      var id = "faq-" + f.id + "-" + Math.random().toString(36).slice(2, 7);
      return '<div class="acc reveal" style="--d:' + Math.min(i * 0.04, 0.3) + 's">' +
        '<h3 style="margin:0;font-size:inherit"><button class="acc__btn" aria-expanded="false" aria-controls="' + id + '" id="' + id + '-b">' +
        "<span>" + esc(f.q) + '</span><span class="acc__chev">' + icon("chevron") + "</span></button></h3>" +
        '<div class="acc__panel" id="' + id + '" role="region" aria-labelledby="' + id + '-b" hidden><div><div class="acc__inner">' + f.a + "</div></div></div></div>";
    }).join("") + "</div>";
  }

  function initAccordions(ctx) {
    $$(".acc__btn", ctx).forEach(function (btn) {
      if (btn._acc) return; btn._acc = true;
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") !== "true";
        btn.setAttribute("aria-expanded", String(open));
        if (open) {
          panel.hidden = false;
          requestAnimationFrame(function () { requestAnimationFrame(function () { panel.classList.add("is-open"); }); });
        } else {
          panel.classList.remove("is-open");
          var done = function () { if (btn.getAttribute("aria-expanded") === "false") panel.hidden = true; panel.removeEventListener("transitionend", done); };
          if (reduceMotion) done(); else panel.addEventListener("transitionend", done);
        }
      });
    });
  }

  function initFAQ() {
    $$("[data-faq]").forEach(function (el) {
      var ids = el.getAttribute("data-faq");
      el.innerHTML = faqHTML(ids ? ids.split(",") : null);
    });
  }

  /* ---------- packing checklist ---------- */
  function packingHTML(extras, key) {
    var check = icon("check").replace('stroke-width="1.8"', 'stroke-width="3.2"').replace('stroke="currentColor"', 'stroke="#1a1410"');
    function item(name, i, grp) {
      var id = "pk-" + key + "-" + grp + i;
      return '<label class="pack-item" for="' + id + '"><input type="checkbox" id="' + id + '" data-pack="' + esc(grp + ":" + name) + '"><span class="pack-item__box">' + check + "</span><span>" + esc(name) + "</span></label>";
    }
    var html = '<div class="packing" data-packing-list="' + key + '"><h4>Essentials</h4>' + SITE.packing.map(function (n, i) { return item(n, i, "base"); }).join("");
    if (extras && extras.length) html += "<h4>Winter extras ❄︎</h4>" + extras.map(function (n, i) { return item(n, i, "extra"); }).join("");
    return html + '<p class="packing__progress" aria-live="polite"></p></div>';
  }
  function initPacking(ctx) {
    $$("[data-packing]", ctx).forEach(function (el) {
      if (el._packed) return; el._packed = true;
      var trip = findTrip(doc.getAttribute("data-trip") || "") || featuredTrip();
      var key = trip ? trip.slug : "general";
      el.innerHTML = packingHTML(trip && trip.packingExtras, key);
      var boxes = $$("input", el), prog = $(".packing__progress", el), skey = "rawasi-pack-" + key;
      var saved = {}; try { saved = JSON.parse(store(skey) || "{}"); } catch (e) {}
      function update() {
        var n = boxes.filter(function (b) { return b.checked; }).length;
        prog.textContent = n === boxes.length ? "All packed. Bismillah — see you on the trail." : n + " of " + boxes.length + " packed";
      }
      boxes.forEach(function (b) {
        b.checked = !!saved[b.getAttribute("data-pack")];
        b.addEventListener("change", function () { saved[b.getAttribute("data-pack")] = b.checked; store(skey, JSON.stringify(saved)); update(); });
      });
      if (trip && trip.packingExtras && trip.packingExtras.length) {
        var note = document.createElement("p");
        note.className = "packing__progress";
        note.textContent = "Showing the list for " + trip.shortTitle + ".";
        el.insertBefore(note, el.firstChild);
      }
      update();
    });
  }

  function refundHTML() {
    return '<div class="refund">' + SITE.refund.map(function (r) {
      return '<div class="refund__item"><div class="refund__when">' + esc(r.when) + '</div><div class="refund__val">' + esc(r.refund) + "</div></div>";
    }).join("") + '</div><p class="refund-note">' + esc(SITE.refundNote) + "</p>";
  }
  function initRefund(ctx) { $$("[data-refund]", ctx).forEach(function (el) { el.innerHTML = refundHTML(); }); }

  /* ---------- guides ---------- */
  function initGuides() {
    $$("[data-guides]").forEach(function (el) {
      var style = el.getAttribute("data-guides");
      if (style === "cards") {
        el.innerHTML = SITE.guides.map(function (g, i) {
          return '<div class="card guide-card reveal" style="--d:' + i * 0.08 + 's"><img src="' + url(g.image) + '" alt="' + esc(g.name) + '" loading="lazy">' +
            "<h3>" + esc(g.name) + '</h3><div class="guide__role">' + esc(g.role) + "</div><p>" + esc(g.bio) + "</p></div>";
        }).join("");
      } else {
        el.innerHTML = SITE.guides.map(function (g) {
          return '<div class="guide"><img src="' + url(g.image) + '" alt="' + esc(g.name) + '" loading="lazy"><div><h3>' + esc(g.name) +
            '</h3><div class="guide__role">' + esc(g.role) + "</div><p>" + esc(g.bio) + "</p></div></div>";
        }).join("");
      }
    });
  }

  /* ---------- lite YouTube ---------- */
  function videoHTML(id, label, poster) {
    return '<div class="video reveal" data-youtube="' + esc(id) + '"><img src="' + url(poster) + '" alt="" loading="lazy">' +
      '<button class="video__play" aria-label="Play video: ' + esc(label) + '"><span>' + icon("play") + "</span></button>" +
      '<span class="video__label">' + esc(label) + "</span></div>";
  }
  function initVideos(ctx) {
    $$("[data-youtube]", ctx).forEach(function (el) {
      if (el._yt) return; el._yt = true;
      var btn = $("button", el);
      btn && btn.addEventListener("click", function () {
        var id = el.getAttribute("data-youtube");
        if (location.protocol === "file:") { window.open("https://youtu.be/" + id, "_blank", "noopener"); return; }
        el.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1" title="Rawasi Adventures video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      });
    });
  }

  /* ---------- lightbox ---------- */
  function initLightbox(ctx) {
    var triggers = $$("[data-lightbox]", ctx);
    if (!triggers.length) return;
    var dlg = $("#lightbox");
    if (!dlg) {
      dlg = document.createElement("dialog");
      dlg.id = "lightbox"; dlg.className = "lightbox"; dlg.setAttribute("aria-label", "Photo viewer");
      dlg.innerHTML = '<figure style="margin:0"><img alt=""><figcaption></figcaption></figure><button class="lightbox__close" aria-label="Close">✕</button>';
      document.body.appendChild(dlg);
      $(".lightbox__close", dlg).addEventListener("click", function () { dlg.close(); });
      dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    }
    triggers.forEach(function (b) {
      b.addEventListener("click", function () {
        var img = $("img", b);
        $("img", dlg).src = img.src; $("img", dlg).alt = img.alt; $("figcaption", dlg).textContent = img.alt;
        if (dlg.showModal) dlg.showModal(); else window.open(img.src, "_blank");
      });
    });
  }

  /* ---------- trip detail page ---------- */
  function renderTripPage(main, t) {
    var s = statusOf(t), past = isPast(t) || t.status === "soldout";
    var h = "";

    // Hero
    h += '<section class="hero hero--trip"><div class="hero__media" data-parallax="0.25">' +
      '<img src="' + url(t.heroImage || t.image) + '" alt="" fetchpriority="high">' +
      (t.heroVideo ? '<video data-hero-video autoplay muted loop playsinline preload="metadata" poster="' + url(t.heroImage || t.image) + '"><source src="' + url(t.heroVideo) + '" type="video/mp4"></video>' : "") +
      '</div><div class="hero__content">' +
      '<span class="badge badge--inline badge--' + s.key + '" style="background:rgba(255,255,255,.88);color:#1d1d1f">' + s.label + "</span>" +
      '<p class="eyebrow" style="display:block;margin-top:18px;color:var(--gold)">' + esc(t.eyebrow) + "</p>" +
      "<h1>" + esc(t.title) + "</h1>" +
      '<div class="hero-meta"><span class="chip">📅 ' + esc(t.dates) + '</span><span class="chip">📍 ' + esc(t.location) + '</span><span class="chip">👥 ' + esc(t.groupSize) + "</span></div>" +
      '<div class="btn-row" style="margin-top:28px">' +
      (past ? '<a class="btn" href="' + url(featuredTrip().page) + '">Join the next one</a>' : '<a class="btn" href="#reserve">Reserve your spot</a>') +
      '<a class="btn btn--ghost" href="#overview">' + (past ? "See the recap" : "Learn more") + "</a></div></div></section>";

    h += '<div class="section"><div class="container"><div class="trip-layout"><div class="trip-main">';

    // Overview
    h += '<section id="overview" class="reveal"><span class="eyebrow">' + (past ? "Recap" : "Overview") + "</span>" +
      '<h2>' + esc(t.headline || (past ? "We came as strangers. We left as brothers." : "Step into the wild.")) + "</h2>" +
      '<p class="lead">' + esc(t.summary) + "</p>" +
      '<div class="hero-meta" style="margin-top:20px">' + (t.tags || []).map(function (x) { return '<span class="chip chip--light">' + esc(x) + "</span>"; }).join("") + "</div></section>";

    if (past && t.stats) {
      h += '<section class="reveal"><div class="stats" style="padding:32px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)">' + t.stats.map(function (st) {
        return '<div><div class="stat__value">' + esc(st.value) + '</div><div class="stat__label">' + esc(st.label) + "</div></div>";
      }).join("") + "</div></section>";
    }

    if (t.flyer) {
      h += '<section id="flyer" class="flyer reveal"><div class="flyer__text"><span class="eyebrow">Trip flyer</span><h2>Share it with a brother.</h2>' +
        '<p class="muted">Send the flyer to someone who needs this trip. Tap to enlarge.</p>' +
        '<div class="btn-row"><a class="btn btn--dark btn--sm" href="' + url(t.flyer) + '" download>Download flyer</a></div></div>' +
        '<button class="flyer__img" data-lightbox aria-label="Enlarge trip flyer"><img src="' + url(t.flyer) + '" alt="' + esc(t.flyerAlt || t.title + " flyer") + '" loading="lazy" width="1600" height="2000"></button></section>';
    }

    if (!past && t.highlights) {
      h += '<section><h2 class="reveal">Highlights</h2><div class="highlights">' + t.highlights.map(function (x, i) {
        return '<div class="highlight reveal" style="--d:' + i * 0.05 + 's"><span class="highlight__icon gold">' + icon(x.icon, "icon") + "</span><h3>" + esc(x.title) + "</h3><p>" + esc(x.text) + "</p></div>";
      }).join("") + "</div></section>";
    }

    if (past && t.recap) {
      h += '<section><h2 class="reveal">Moments from the trail</h2><div class="highlights highlights--2">' + t.recap.map(function (x, i) {
        return '<div class="highlight reveal" style="--d:' + i * 0.05 + 's"><h3>' + esc(x.title) + "</h3><p>" + esc(x.text) + "</p></div>";
      }).join("") + "</div></section>";
    }

    if (past && (t.gallery || t.youtube)) {
      h += '<section id="gallery"><h2 class="reveal">Photos & video</h2>' +
        (t.youtube ? '<div style="margin-bottom:12px">' + videoHTML(t.youtube, "Watch the trip film", t.gallery && t.gallery[0] ? t.gallery[0].src : t.image) + "</div>" : "") +
        '<div class="gallery reveal">' + (t.gallery || []).map(function (g) {
          return '<button data-lightbox aria-label="View photo: ' + esc(g.alt) + '"><img src="' + url(g.src) + '" alt="' + esc(g.alt) + '" loading="lazy"></button>';
        }).join("") + "</div></section>";
    }

    // Included
    h += '<section class="reveal"><h2>What’s included</h2><ul class="check-list">' + t.included.map(function (x) {
      return "<li><strong>" + esc(x.title) + "</strong><span>" + esc(x.text) + "</span></li>";
    }).join("") + "</ul>" + (past ? "" : '<p class="muted" style="margin-top:12px;font-size:15px">You bring your own backpacking gear — or rent from us below.</p>') + "</section>";

    // Itinerary
    h += '<section id="itinerary"><h2 class="reveal">Itinerary</h2>' + (t.itineraryNote ? '<span class="note reveal">⏳ ' + esc(t.itineraryNote) + "</span>" : "") +
      '<div class="timeline">' + t.itinerary.map(function (d, i) {
        return '<div class="timeline__item reveal" style="--d:' + i * 0.06 + 's"><span class="timeline__dot"></span>' +
          '<div class="timeline__day">' + esc(d.day) + " · " + esc(d.date) + '</div><h3 class="timeline__title">' + esc(d.title) + "</h3>" +
          '<ul class="timeline__items">' + d.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>";
      }).join("") + "</div></section>";

    // Guides
    h += '<section><h2 class="reveal">Your guides</h2><div class="guides reveal" data-guides></div></section>';

    if (!past) {
      h += '<section id="packing" class="reveal"><h2>What to pack</h2><p class="muted">Tap to tick items off — your list is saved on this device.</p><div data-packing></div></section>';
      h += '<section id="faq"><h2 class="reveal">Questions</h2><div data-faq="' + (t.faqIds || []).join(",") + '"></div><p style="margin-top:20px"><a class="link-more" href="' + url("faq.html") + '">See all FAQs</a></p></section>';
      h += '<section id="refund" class="reveal"><h2>Refund policy</h2><div data-refund></div></section>';
    }

    h += "</div>"; // trip-main

    // Aside
    if (past) {
      var next = featuredTrip();
      h += '<aside><div class="price-card soldout-cta reveal"><span class="badge badge--inline badge--soldout">Sold out</span>' +
        '<h3 style="font-size:24px;margin:0 0 8px">This trip has ended.</h3><p class="muted">' + (next && next !== t ? "Join the next one: " + esc(next.shortTitle) + ", " + esc(next.dates) + "." : "Join the WhatsApp group to hear about the next trip first.") + "</p>" +
        (next && next !== t ? '<a class="btn btn--block" href="' + url(next.page) + '">Join the next one</a>' : "") +
        '<a class="btn btn--ghost btn--block" style="margin-top:10px" data-link="whatsapp" href="' + SITE.links.whatsapp + '">Join WhatsApp group</a></div></aside>';
    } else {
      h += '<aside id="reserve"><div class="price-card reveal" data-price-card>' +
        '<span class="badge badge--inline badge--' + s.key + '">' + s.label + "</span>" +
        '<div style="margin-top:16px" class="price-card__label">Trip price</div>' +
        '<div class="price-card__price">' + money(t.price) + "</div>" +
        '<div class="price-card__note">' + esc(t.priceNote || "per person") + "</div>" +
        (t.rentals && t.rentals.length ? '<h3>Gear rental add-ons</h3><p class="price-card__sub">Don’t have gear? Rent ours. Book at least 5 days before the trip.</p>' +
          t.rentals.map(function (r) {
            return '<div class="addon"><div><div class="addon__name" id="lbl-' + r.id + '">' + esc(r.name) + '</div><div class="addon__price">+' + money(r.price) + '</div></div>' +
              '<label class="switch"><input type="checkbox" role="switch" data-rental="' + r.id + '" data-price="' + r.price + '" aria-labelledby="lbl-' + r.id + '"><span class="switch__track"></span></label></div>';
          }).join("") : "") +
        '<ul class="price-lines" data-lines></ul>' +
        '<div class="price-total"><span>Total</span><span data-total>' + money(t.price) + "</span></div>" +
        '<a class="btn btn--block" id="register" href="' + url(t.registerUrl || "#register") + '" data-reserve>Reserve your spot</a>' +
        '<p class="price-card__fine">' + esc(t.statusNote || "") + "</p></div></aside>";
    }
    h += "</div></div></div>";

    // Final CTA
    h += '<section class="section section--ink"><div class="container"><div class="center reveal"><p class="quote">“Connect to Allah by connecting to His creation.”</p>' +
      '<div class="btn-row btn-row--center" style="margin-top:36px">' +
      (past ? '<a class="btn" href="' + url("trips.html") + '">See upcoming trips</a>' : '<a class="btn" href="#reserve">Reserve your spot</a>') +
      '<a class="btn btn--ghost" data-link="whatsapp" href="' + SITE.links.whatsapp + '">Join WhatsApp group</a></div></div></div></section>';

    // Mobile reserve bar
    if (!past) {
      h += '<div class="reserve-bar" data-reserve-bar aria-hidden="true"><div><div class="reserve-bar__label">' + esc(t.dates) + '</div><div class="reserve-bar__price" data-total>' + money(t.price) + "</div></div>" +
        '<a class="btn btn--sm" href="' + url(t.registerUrl || "#register") + '" tabindex="-1" data-reserve>Reserve</a></div>';
    }
    main.innerHTML = h;
  }

  function initPriceCard(t) {
    var card = $("[data-price-card]");
    if (!card) return;
    var toggles = $$("[data-rental]", card), lines = $("[data-lines]", card);
    var reserveLinks = $$("[data-reserve]");
    function update(animate) {
      var total = t.price, picked = [];
      toggles.forEach(function (tg) { if (tg.checked) { total += +tg.getAttribute("data-price"); picked.push(tg); } });
      lines.innerHTML = picked.length ? '<li><span>Trip</span><span>' + money(t.price) + "</span></li>" + picked.map(function (tg) {
        var r = t.rentals.filter(function (x) { return x.id === tg.getAttribute("data-rental"); })[0];
        return "<li><span>" + esc(r.name) + "</span><span>+" + money(r.price) + "</span></li>";
      }).join("") : "";
      $$("[data-total]").forEach(function (el) {
        el.textContent = money(total);
        if (animate && !reduceMotion) { el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }
      });
      // pass selected rentals to the registration link as a query string
      var ids = picked.map(function (tg) { return tg.getAttribute("data-rental"); }).join(",");
      reserveLinks.forEach(function (a) {
        var base = url(t.registerUrl || "#register");
        if (/^https?:/.test(base) && ids) a.href = base + (base.indexOf("?") > -1 ? "&" : "?") + "rentals=" + ids;
        else a.href = base;
      });
      store("rawasi-rentals-" + t.slug, ids);
    }
    var saved = (store("rawasi-rentals-" + t.slug) || "").split(",");
    toggles.forEach(function (tg) { tg.checked = saved.indexOf(tg.getAttribute("data-rental")) > -1; tg.addEventListener("change", function () { update(true); }); });
    update(false);

    var bar = $("[data-reserve-bar]");
    if (bar && "IntersectionObserver" in window) {
      var hero = $(".hero"), heroGone = false, cardVisible = false;
      function sync() {
        var show = heroGone && !cardVisible;
        bar.classList.toggle("is-visible", show);
        bar.setAttribute("aria-hidden", String(!show));
        $$("a", bar).forEach(function (a) { a.tabIndex = show ? 0 : -1; });
      }
      new IntersectionObserver(function (e) { heroGone = !e[0].isIntersecting; sync(); }, { threshold: 0.05 }).observe(hero);
      new IntersectionObserver(function (e) { cardVisible = e[0].isIntersecting; sync(); }, { threshold: 0.2 }).observe(card);
    }
  }

  function initTripPage() {
    var main = $("[data-trip-page]");
    if (!main) return;
    var t = findTrip(main.getAttribute("data-trip-page"));
    if (!t) { main.innerHTML = '<div class="page-hero container"><h1 class="title">Trip not found</h1><p class="lead">Check the slug in data/trips.js.</p></div>'; return; }
    doc.setAttribute("data-trip", t.slug);
    renderTripPage(main, t);
    initPriceCard(t);
  }

  /* ---------- contact form ---------- */
  function initContactForm() {
    var form = $("[data-contact-form]");
    if (!form) return;
    var status = $(".form__status", form);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var data = new FormData(form);
      var action = form.getAttribute("action") || "";
      if (!action || action.indexOf("YOUR_FORM_ID") > -1) {
        // No Formspree ID yet → open the visitor's email app instead.
        var body = "Name: " + data.get("name") + "\nEmail: " + data.get("email") + "\nPhone: " + (data.get("phone") || "-") + "\n\n" + data.get("message");
        window.location.href = "mailto:" + SITE.links.email + "?subject=" + encodeURIComponent("Rawasi Adventures — message from " + data.get("name")) + "&body=" + encodeURIComponent(body);
        status.textContent = "Opening your email app…";
        return;
      }
      status.textContent = "Sending…";
      fetch(action, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw new Error(); form.reset(); status.textContent = "JazakAllahu khairan — we’ll be in touch soon."; })
        .catch(function () { status.textContent = "Something went wrong. Please text or email us instead."; });
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    initTripPage();
    initFeatured();
    initTripGrid();
    initFAQ();
    initGuides();
    initPacking();
    initRefund();
    initAccordions();
    initVideos();
    initLightbox();
    initLinks();
    initTheme();
    initNav();
    initHeroVideo();
    initParallax();
    initContactForm();
    observeReveals();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
