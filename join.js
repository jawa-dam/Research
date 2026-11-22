document.addEventListener("DOMContentLoaded", function () {
  // ——— Mobile menu toggle ———
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".navlinks");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ——— Random accent palette ———
  var palettes = [
    { accent: "#2563eb", soft: "rgba(37,99,235,.06)",  border: "rgba(37,99,235,.18)",  gs: "#2563eb", gm: "#7c3aed", ge: "#ec4899" },
    { accent: "#0891b2", soft: "rgba(8,145,178,.06)",   border: "rgba(8,145,178,.18)",  gs: "#0891b2", gm: "#2563eb", ge: "#7c3aed" },
    { accent: "#7c3aed", soft: "rgba(124,58,237,.06)",  border: "rgba(124,58,237,.18)", gs: "#7c3aed", gm: "#ec4899", ge: "#f59e0b" },
    { accent: "#059669", soft: "rgba(5,150,105,.06)",   border: "rgba(5,150,105,.18)",  gs: "#059669", gm: "#0891b2", ge: "#2563eb" },
    { accent: "#4f46e5", soft: "rgba(79,70,229,.06)",   border: "rgba(79,70,229,.18)",  gs: "#4f46e5", gm: "#ec4899", ge: "#f97316" }
  ];
  var p = palettes[Math.floor(Math.random() * palettes.length)];
  var root = document.documentElement;
  root.style.setProperty("--accent", p.accent);
  root.style.setProperty("--accent-soft", p.soft);
  root.style.setProperty("--accent-border", p.border);
  root.style.setProperty("--grad-start", p.gs);
  root.style.setProperty("--grad-mid", p.gm);
  root.style.setProperty("--grad-end", p.ge);

  // ——— Per-card icon tints ———
  var tints = [
    "rgba(37,99,235,.09)", "rgba(8,145,178,.09)", "rgba(124,58,237,.09)",
    "rgba(5,150,105,.09)", "rgba(217,119,6,.09)", "rgba(236,72,153,.09)",
    "rgba(79,70,229,.09)"
  ];

  // ——— Fisher-Yates shuffle ———
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function shuffleChildren(selector) {
    var parent = document.querySelector(selector);
    if (!parent) return;
    var items = Array.from(parent.children);
    shuffle(items);
    items.forEach(function (el) { parent.appendChild(el); });
  }

  shuffleChildren(".role-grid");
  shuffleChildren(".benefit-grid");

  // Assign shuffled icon tints to role cards
  shuffle(tints);
  document.querySelectorAll(".role-card .role-icon").forEach(function (icon, i) {
    icon.style.background = tints[i % tints.length];
  });

  // ——— Scroll-triggered reveal ———
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.dataset.delay || "0", 10);
          setTimeout(function () { entry.target.classList.add("visible"); }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".role-card").forEach(function (card, i) {
      card.style.transition = "opacity .5s ease " + (i * 0.07) + "s, transform .5s ease " + (i * 0.07) + "s, border-color .3s ease, box-shadow .3s ease";
      card.dataset.delay = "0";
      observer.observe(card);
    });

    document.querySelectorAll(".benefit").forEach(function (el, i) {
      el.style.transition = "opacity .5s ease " + (i * 0.06) + "s, transform .5s ease " + (i * 0.06) + "s, box-shadow .3s ease";
      el.dataset.delay = "0";
      observer.observe(el);
    });
  } else {
    document.querySelectorAll(".role-card, .benefit").forEach(function (el) {
      el.classList.add("visible");
    });
  }
});
