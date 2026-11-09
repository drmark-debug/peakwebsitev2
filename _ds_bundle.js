/* @ds-bundle: {"namespace":"PeakDS","components":[{"name":"Badge","sourcePath":"components/components/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/components/Button/Button.jsx"},{"name":"Callout","sourcePath":"components/components/Callout/Callout.jsx"},{"name":"Card","sourcePath":"components/components/Card/Card.jsx"},{"name":"Field","sourcePath":"components/components/Field/Field.jsx"},{"name":"Login","sourcePath":"components/scenes/Login/Login.jsx"},{"name":"StatCard","sourcePath":"components/components/StatCard/StatCard.jsx"}],"sourceHashes":{"components/components/Badge/Badge.jsx":"bf6453687800","components/components/Badge/Badge.d.ts":"a296c182d592","components/components/Badge/Badge.prompt.md":"86653d7b4f49","components/components/Button/Button.jsx":"2f4d8295f3d0","components/components/Button/Button.d.ts":"6ccabe108138","components/components/Button/Button.prompt.md":"1129fb1ba9fc","components/components/Callout/Callout.jsx":"a520c2cb37da","components/components/Callout/Callout.d.ts":"9775d1446e45","components/components/Callout/Callout.prompt.md":"2bebb9bc2bc3","components/components/Card/Card.jsx":"87b92013bf4b","components/components/Card/Card.d.ts":"cc3520f68682","components/components/Card/Card.prompt.md":"35ff7841b4c5","components/components/Field/Field.jsx":"6beab4ea1702","components/components/Field/Field.d.ts":"ad1641680c6a","components/components/Field/Field.prompt.md":"a5c886e45686","components/scenes/Login/Login.jsx":"b30f771d0031","components/scenes/Login/Login.d.ts":"0a8c3d447b3d","components/scenes/Login/Login.prompt.md":"635179903612","components/components/StatCard/StatCard.jsx":"52383780a217","components/components/StatCard/StatCard.d.ts":"ef7eb36acd8c","components/components/StatCard/StatCard.prompt.md":"1bb1f7dbd0f0"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
"use strict";
var PeakDS = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e2) {
      throw err = [e2], e2;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e2) {
      throw mod = 0, e2;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function jsx(t, p, k2) {
        return R.createElement(t, k2 === void 0 ? p : Object.assign({ key: k2 }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsx;
      module.exports.jsxDEV = jsx;
      module.exports.Fragment = R.Fragment;
    }
  });

  // dist/peak-ds.js
  var peak_ds_exports = {};
  __export(peak_ds_exports, {
    Badge: () => D,
    Button: () => v,
    Callout: () => H,
    Card: () => N,
    Field: () => w,
    Login: () => I,
    StatCard: () => E
  });
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var import_react = __toESM(require_react_shim(), 1);
  var v = import_react.default.forwardRef(
    function({
      variant: l = "primary",
      size: i = "md",
      block: o = false,
      leadingIcon: n,
      trailingIcon: r,
      className: t,
      children: _,
      type: d = "button",
      ...m
    }, p) {
      const c = [
        "pk-btn",
        `pk-btn--${l}`,
        `pk-btn--${i}`,
        o ? "pk-btn--block" : "",
        t ?? ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { ref: p, type: d, className: c, ...m, children: [
        n,
        _,
        r
      ] });
    }
  );
  function N({
    accent: a = "none",
    elevation: l = "outlined",
    interactive: i = false,
    className: o,
    children: n,
    ...r
  }) {
    const t = [
      "pk-card",
      l === "elevated" ? "pk-card--elevated" : "",
      l === "flat" ? "pk-card--flat" : "",
      i ? "pk-card--interactive" : "",
      o ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: t, ...r, children: [
      a !== "none" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `pk-card__accent pk-card__accent--${a}` }),
      n
    ] });
  }
  function j({ eyebrow: a, title: l, className: i, children: o, ...n }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: ["pk-card__body", i ?? ""].filter(Boolean).join(" "), ...n, children: [
      a && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pk-card__eyebrow", children: a }),
      l && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "pk-card__title", children: l }),
      o
    ] });
  }
  function P({ className: a, children: l, ...i }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: ["pk-card__text", a ?? ""].filter(Boolean).join(" "), ...i, children: l });
  }
  function x({ className: a, children: l, ...i }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: ["pk-card__footer", a ?? ""].filter(Boolean).join(" "), ...i, children: l });
  }
  N.Body = j;
  N.Text = P;
  N.Footer = x;
  function D({
    tone: a = "slate",
    variant: l = "soft",
    dot: i = false,
    className: o,
    children: n,
    ...r
  }) {
    const t = [
      "pk-badge",
      `pk-badge--${a}`,
      l === "soft" ? "pk-badge--soft" : "",
      l === "outline" ? "pk-badge--outline" : "",
      o ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: t, ...r, children: [
      i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-badge__dot" }),
      n
    ] });
  }
  var $ = { up: "\u25B2", down: "\u25BC", flat: "\u2014" };
  function E({
    label: a,
    value: l,
    unit: i,
    delta: o,
    trend: n = "flat",
    higherIsBetter: r = true,
    caption: t,
    accent: _ = false,
    className: d,
    ...m
  }) {
    let p = n;
    n === "up" ? p = r ? "up" : "down" : n === "down" && (p = r ? "down" : "up");
    const c = ["pk-stat", _ ? "pk-stat--accent" : "", d ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: c, ...m, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pk-stat__label", children: a }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pk-stat__value-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-stat__value", children: l }),
        i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-stat__unit", children: i }),
        o != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: `pk-stat__delta pk-stat__delta--${p}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-stat__delta-arrow", children: $[n] }),
          o
        ] })
      ] }),
      t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pk-stat__caption", children: t })
    ] });
  }
  var z = {
    info: "i",
    success: "\u2713",
    warning: "!",
    critical: "!",
    education: "\u2605"
  };
  function H({
    tone: a = "info",
    title: l,
    icon: i,
    className: o,
    children: n,
    ...r
  }) {
    const t = ["pk-callout", `pk-callout--${a}`, o ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { role: "note", className: t, ...r, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-callout__icon", "aria-hidden": "true", children: i ?? z[a] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pk-callout__content", children: [
        l && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pk-callout__title", children: l }),
        n && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pk-callout__body", children: n })
      ] })
    ] });
  }
  var A = 0;
  var w = import_react.default.forwardRef(
    function({
      label: l,
      hint: i,
      error: o,
      size: n = "md",
      leadingIcon: r,
      trailingIcon: t,
      block: _ = true,
      className: d,
      id: m,
      type: p = "text",
      disabled: c,
      ...y
    }, B) {
      const u = import_react.default.useRef();
      u.current || (u.current = `pk-field-${++A}`);
      const h = m ?? u.current, b = `${h}-desc`, f = !!o, g = o ?? i, C = [
        "pk-field",
        `pk-field--${n}`,
        f ? "pk-field--invalid" : "",
        c ? "pk-field--disabled" : "",
        _ ? "pk-field--block" : "",
        d ?? ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: C, children: [
        l && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "pk-field__label", htmlFor: h, children: l }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pk-field__control", children: [
          r && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-field__icon pk-field__icon--leading", "aria-hidden": "true", children: r }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              ref: B,
              id: h,
              type: p,
              className: "pk-field__input",
              disabled: c,
              "aria-invalid": f || void 0,
              "aria-describedby": g ? b : void 0,
              ...y
            }
          ),
          t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-field__icon pk-field__icon--trailing", children: t })
        ] }),
        g && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "p",
          {
            id: b,
            className: "pk-field__message",
            role: f ? "alert" : void 0,
            children: g
          }
        )
      ] });
    }
  );
  function I({ onSubmit: a, error: l }) {
    const [i, o] = import_react.default.useState(false), [n, r] = import_react.default.useState(""), [t, _] = import_react.default.useState(""), [d, m] = import_react.default.useState(true);
    function p(c) {
      c.preventDefault(), a == null || a({ email: n, password: t, remember: d });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pk-login", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { className: "pk-login__brand", "aria-hidden": "true", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pk-login__brand-top", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pk-login__logo", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-login__logo-mark", children: "PEAK" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-login__logo-sub", children: "by MD" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pk-login__brand-copy", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pk-login__script", children: "Optimized for life." }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "pk-login__brand-headline", children: "Physician-led optimization through data, diagnostics, and personalized care." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { className: "pk-login__trust", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-login__trust-dot" }),
            "Board-certified physician oversight"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-login__trust-dot" }),
            "Your labs, biological age & protocols in one place"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-login__trust-dot" }),
            "HIPAA-compliant, encrypted, private"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { className: "pk-login__panel", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", { className: "pk-login__form", onSubmit: p, noValidate: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: "pk-login__form-head", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pk-login__eyebrow", children: "Member Portal" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "pk-login__title", children: "Welcome back" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "pk-login__subtitle", children: "Sign in to view your diagnostics, plan, and progress." })
          ] }),
          l && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pk-login__error", role: "alert", children: l }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            w,
            {
              label: "Email",
              type: "email",
              name: "email",
              size: "lg",
              autoComplete: "email",
              placeholder: "you@example.com",
              value: n,
              onChange: (c) => r(c.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            w,
            {
              label: "Password",
              type: i ? "text" : "password",
              name: "password",
              size: "lg",
              autoComplete: "current-password",
              placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
              value: t,
              onChange: (c) => _(c.target.value),
              required: true,
              trailingIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  type: "button",
                  onClick: () => o((c) => !c),
                  "aria-pressed": i,
                  "aria-label": i ? "Hide password" : "Show password",
                  children: i ? "Hide" : "Show"
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pk-login__row", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "pk-login__remember", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "input",
                {
                  type: "checkbox",
                  checked: d,
                  onChange: (c) => m(c.target.checked)
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Keep me signed in" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: "pk-login__link", href: "#forgot", children: "Forgot password?" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, { type: "submit", variant: "primary", size: "lg", block: true, children: "Sign in" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pk-login__divider", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "New to Peak by MD?" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            v,
            {
              type: "button",
              variant: "secondary",
              size: "lg",
              block: true,
              onClick: () => a == null ? void 0 : a({ email: "", password: "", remember: d }),
              children: "Book a consult"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { className: "pk-login__footer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pk-login__lock", "aria-hidden": "true", children: "\u{1F512}" }),
          "Protected health information. HIPAA-compliant & encrypted in transit."
        ] })
      ] })
    ] });
  }
  return __toCommonJS(peak_ds_exports);
})();
window.PeakDS=PeakDS.__dsMainNs?Object.assign({},PeakDS,PeakDS.__dsMainNs,{__dsMainNs:undefined}):PeakDS;
