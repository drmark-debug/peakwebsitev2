(function () {
  if (window.__pkA11y) return; window.__pkA11y = true;
  var d = document, reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  d.documentElement.lang = d.documentElement.lang || "en";
  var css = d.createElement("style");
  css.textContent =
    ":focus-visible{outline:2px solid #fff !important;outline-offset:2px !important;box-shadow:0 0 0 4px #003B51 !important;border-radius:4px}" +
    ".pk-skip{position:fixed;left:16px;top:-80px;z-index:1000;background:#003B51;color:#fff;padding:12px 18px;border-radius:999px;font:700 13px/1 var(--pk-font-body),sans-serif;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transition:top .15s}" +
    ".pk-skip:focus{top:12px}[data-pk-hide]{display:none !important}" +
    ".pk-vtoggle{position:absolute;right:12px;bottom:12px;z-index:3;width:44px;height:44px;border-radius:999px;border:0;background:rgba(0,59,81,.82);color:#fff;display:grid;place-items:center;cursor:pointer;padding:0}" +
    ".pk-vtoggle:hover{background:#003B51}.pk-vtoggle svg{width:16px;height:16px;fill:currentColor}" +
    "@media (prefers-reduced-motion: reduce){html{scroll-behavior:auto !important}*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important}}";
  d.head.appendChild(css);
  var PAUSE = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="2" width="3.5" height="12" rx="1"/><rect x="9.5" y="2" width="3.5" height="12" rx="1"/></svg>';
  var PLAY = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11a.8.8 0 0 0 1.2.7l9-5.5a.8.8 0 0 0 0-1.4l-9-5.5A.8.8 0 0 0 4 2.5z"/></svg>';
  function sync(b, v) { var p = v.paused; b.innerHTML = p ? PLAY : PAUSE; b.setAttribute("aria-label", p ? "Play background video" : "Pause background video"); b.setAttribute("aria-pressed", p ? "true" : "false"); }
  function wire(v) {
    if (v.__pk || v.controls || !v.loop || v.hasAttribute("data-pk-bg")) return; v.__pk = true;
    var host = v.parentElement; if (!host) return;
    if (getComputedStyle(host).position === "static") host.style.position = "relative";
    var b = d.createElement("button"); b.type = "button"; b.className = "pk-vtoggle";
    var bgs = function () { return host.querySelectorAll("video[data-pk-bg]"); };
    b.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); if (v.paused) { v.__pkUser = false; v.play(); bgs().forEach(function (x) { x.play(); }); } else { v.__pkUser = true; v.pause(); bgs().forEach(function (x) { x.pause(); }); } });
    v.addEventListener("play", function () { if (v.__pkUser) { v.pause(); return; } sync(b, v); });
    v.addEventListener("pause", function () { sync(b, v); });
    if (reduce) { v.__pkUser = true; v.removeAttribute("autoplay"); v.autoplay = false; v.pause(); bgs().forEach(function (x) { x.autoplay = false; x.pause(); }); }
    host.appendChild(b); sync(b, v);
  }
  function skip() {
    if (d.querySelector(".pk-skip") || !d.body) return;
    var a = d.createElement("a"); a.className = "pk-skip"; a.href = "#main-content"; a.textContent = "Skip to main content";
    a.addEventListener("click", function (e) {
      var h = d.querySelector("header"), t = d.getElementById("main-content") || d.querySelector("main") || (h && h.nextElementSibling);
      if (!t) return; e.preventDefault(); if (!t.id) t.id = "main-content"; if (!t.hasAttribute("tabindex")) t.setAttribute("tabindex", "-1");
      t.focus({ preventScroll: true }); window.scrollTo(0, t.getBoundingClientRect().top + window.scrollY - 90);
    });
    d.body.insertBefore(a, d.body.firstChild);
  }

  var PK_SLOTS = {"aes-ba-0-before":"assets/slots/aes-ba-0-before.webp","aes-doctor":"assets/slots/aes-doctor.webp","aes-hero-video":"assets/slots/aes-hero-video.webp","cta-banner":"assets/slots/cta-banner.webp","fa-test-labs":"assets/slots/fa-test-labs.webp","fa-test-review":"assets/slots/fa-test-review.webp","gut-gimap":"assets/slots/gut-gimap.webp","gut-hero":"assets/slots/gut-hero.webp","hero-photo":"assets/slots/hero-photo.webp","lng-doctor":"assets/slots/lng-doctor.webp","lng-hero":"assets/slots/lng-hero.webp","map-face-female":"assets/slots/map-face-female.webp","map-face-male":"assets/slots/map-face-male.webp","mem-cta-banner":"assets/slots/mem-cta-banner.webp","mem-hero":"assets/slots/mem-hero.webp","svc-iv-therapy-hero":"assets/slots/svc-iv-therapy-hero.webp","svc-laser-resurfacing-ba-0-combined":"assets/slots/svc-laser-resurfacing-ba-0-combined.webp","svc-laser-resurfacing-ba-1-before":"assets/slots/svc-laser-resurfacing-ba-1-before.webp","svc-laser-resurfacing-hero":"assets/slots/svc-laser-resurfacing-hero.webp","svc-mens-hormones-hero":"assets/slots/svc-mens-hormones-hero.webp","svc-microneedling-hero":"assets/slots/svc-microneedling-hero.webp","svc-neurotoxins-hero":"assets/slots/svc-neurotoxins-hero.webp","svc-skin-boosters-hero":"assets/slots/svc-skin-boosters-hero.webp","svc-skin-laser-card-laser-resurfacing":"assets/slots/svc-skin-laser-card-laser-resurfacing.webp","team-mark":"assets/slots/team-mark.webp"};
  function hideTarget(el) { var fig = el.closest("figure"); return fig || el.parentElement; }
  function slots() {
    d.querySelectorAll("[data-pk-hide]").forEach(function (t) { t.__pkKeep = false; });
    d.querySelectorAll("image-slot").forEach(function (el) {
      var id = el.id || "";
      if (!id || id.indexOf("{{") > -1 || /-loading-/.test(id)) return;
      if (el.__pkSrc && el.getAttribute("src") !== el.__pkSrc) el.setAttribute("src", el.__pkSrc);
      if (PK_SLOTS[id]) { if (el.getAttribute("src") !== PK_SLOTS[id]) el.setAttribute("src", PK_SLOTS[id]); el.__pkSrc = PK_SLOTS[id]; return; }
      if (el.getAttribute("src")) return;
      var t = hideTarget(el); if (!t) return;
      t.__pkKeep = true; if (!t.hasAttribute("data-pk-hide")) t.setAttribute("data-pk-hide", "");
    });
    d.querySelectorAll("section").forEach(function (s) {
      var figs = s.querySelectorAll("figure"); if (!figs.length) return;
      var vis = 0; figs.forEach(function (f) { if (!f.hasAttribute("data-pk-hide")) vis++; });
      if (!vis) { s.__pkKeep = true; if (!s.hasAttribute("data-pk-hide")) s.setAttribute("data-pk-hide", ""); }
    });
    d.querySelectorAll("[data-pk-hide]").forEach(function (t) { if (!t.__pkKeep) t.removeAttribute("data-pk-hide"); });
  }
  function scan() { skip(); d.querySelectorAll("video").forEach(wire); slots(); }
  d.addEventListener("click", function (e) { d.querySelectorAll("details[data-pk-menu][open]").forEach(function (x) { if (!x.contains(e.target)) x.removeAttribute("open"); }); });
  d.addEventListener("keydown", function (e) { if (e.key === "Escape") d.querySelectorAll("details[data-pk-menu][open]").forEach(function (x) { x.removeAttribute("open"); var s = x.querySelector("summary"); if (s) s.focus(); }); });
  d.addEventListener("mouseover", function (e) { var x = e.target.closest && e.target.closest("details[data-pk-menu]"); d.querySelectorAll("details[data-pk-menu][open]").forEach(function (y) { if (y !== x && y.__pkHover) { y.removeAttribute("open"); y.__pkHover = false; } }); if (x && !x.open && window.matchMedia("(hover: hover)").matches) { x.setAttribute("open", ""); x.__pkHover = true; } });
  d.addEventListener("mouseout", function (e) { var x = e.target.closest && e.target.closest("details[data-pk-menu]"); if (x && x.__pkHover && !x.contains(e.relatedTarget)) { x.removeAttribute("open"); x.__pkHover = false; } });
  function start() { scan(); new MutationObserver(scan).observe(d.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["src", "id", "style"] }); }
  if (d.body) start(); else d.addEventListener("DOMContentLoaded", start);
})();
