import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  B as n,
  C as r,
  D as i,
  E as a,
  F as o,
  I as s,
  L as c,
  M as l,
  N as u,
  O as d,
  P as f,
  S as p,
  T as m,
  V as h,
  a as g,
  b as _,
  c as v,
  d as y,
  f as b,
  g as x,
  h as S,
  i as C,
  k as w,
  l as T,
  m as E,
  o as D,
  p as O,
  s as k,
  u as A,
  v as j,
  w as ee,
  x as M,
  y as te,
  z as ne,
} from "./react.guramC8M.mjs";
import {
  A as re,
  B as ie,
  C as ae,
  D as oe,
  E as se,
  F as ce,
  H as le,
  I as ue,
  L as de,
  M as fe,
  N as pe,
  O as me,
  R as he,
  S as N,
  T as ge,
  U as _e,
  V as P,
  W as ve,
  _ as ye,
  a as be,
  b as xe,
  c as Se,
  d as F,
  f as Ce,
  g as I,
  h as we,
  i as Te,
  j as Ee,
  k as De,
  l as Oe,
  m as ke,
  n as Ae,
  o as je,
  p as Me,
  r as Ne,
  s as Pe,
  u as Fe,
  v as Ie,
  w as Le,
  x as Re,
  y as ze,
  z as Be,
} from "./motion.BkENN8JI.mjs";
function Ve(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function He(e) {
  return typeof e == `function`;
}
function Ue(e) {
  return typeof e == `boolean`;
}
function L(e) {
  return typeof e == `string`;
}
function R(e) {
  return Number.isFinite(e);
}
function We(e) {
  return Array.isArray(e);
}
function z(e) {
  return typeof e == `object` && !!e && !We(e);
}
function Ge(e) {
  for (let t in e) return !1;
  return !0;
}
function Ke(e) {
  return e === void 0;
}
function qe(e) {
  return e === null;
}
function Je(e) {
  return e == null;
}
function Ye(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function Xe(e) {
  return z(e) && He(e.return);
}
function Ze(e) {
  return z(e) && He(e.then);
}
function Qe(e) {
  return e instanceof Promise;
}
function $e(e) {
  return `url('${Ve(e)}')`;
}
function et(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${e ? `${e}\n` : ``}In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${n ? `:\n${n}` : `.`}`;
}
function B(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function V(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function tt() {
  return H.location.origin === `https://screenshot.framer.invalid`;
}
function nt(e, t, n = Ct) {
  if (e && !n.has(e) && typeof document < `u`) {
    if ((n.add(e), !t)) {
      if (!wt) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) wt = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = wt;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function rt(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? G.variable(e) : e === `` ? `""` : e;
}
function it(e) {
  return e !== Pt && e !== Ft;
}
function at(e) {
  for (let t in e) if (it(t) && e?.[t] === !0) return !0;
  return !1;
}
function ot(e, t, n, r, i) {
  let a = p.useRef(null),
    o = p.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = p.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !at(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = p.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        at(n) ? o(e) : r?.(e);
      },
      [o, r, t]
    );
  return p.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function st(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return ct(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return lt(r);
    case `lower-roman`:
    case `upper-roman`:
      return dt(r);
    default:
      return ct(r);
  }
}
function ct(e) {
  return String(e).length;
}
function lt(e) {
  let t = 1;
  for (; ut(t) < e; ) t++;
  return t;
}
function ut(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function dt(e) {
  let t = 0;
  for (let n of zt) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function ft(e, t) {
  return G.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function pt(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
var mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  H,
  St,
  U,
  Ct,
  wt,
  Tt,
  W,
  Et,
  Dt,
  Ot,
  kt,
  G,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt;
function Zt() {
  return (Zt = e(() => {
    (ne(),
      a(),
      (mt = () => {}),
      (ht = h !== void 0),
      (gt =
        ht &&
        (n.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(n.userAgent))),
      (_t = ht && typeof h.requestIdleCallback == `function`),
      (vt = _t ? h.requestIdleCallback : setTimeout),
      (yt = () => mt),
      (bt = () => !0),
      (xt = () => !1),
      (H = ht
        ? h
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (St = { target: tt() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (U = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => St.target,
        hasRestrictions: () => {
          let e = St.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Ct = /* @__PURE__ */ new Set()),
      (Tt = /* @__PURE__ */ (function (e) {
        return (
          (e.Padding = `--framer-input-padding`),
          (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
          (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
          (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
          (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
          (e.CornerShape = `--framer-input-corner-shape`),
          (e.BorderColor = `--framer-input-border-color`),
          (e.BorderTopWidth = `--framer-input-border-top-width`),
          (e.BorderRightWidth = `--framer-input-border-right-width`),
          (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
          (e.BorderLeftWidth = `--framer-input-border-left-width`),
          (e.BorderStyle = `--framer-input-border-style`),
          (e.Background = `--framer-input-background`),
          (e.FontFamily = `--framer-input-font-family`),
          (e.FontWeight = `--framer-input-font-weight`),
          (e.FontSize = `--framer-input-font-size`),
          (e.FontColor = `--framer-input-font-color`),
          (e.FontStyle = `--framer-input-font-style`),
          (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
          (e.FontTextAlignment = `--framer-input-font-text-alignment`),
          (e.FontLineHeight = `--framer-input-font-line-height`),
          (e.FontOpenType = `--framer-input-font-open-type-features`),
          (e.FontVariationAxes = `--framer-input-font-variation-axes`),
          (e.PlaceholderColor = `--framer-input-placeholder-color`),
          (e.BoxShadow = `--framer-input-box-shadow`),
          (e.FocusedBorderColor = `--framer-input-focused-border-color`),
          (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
          (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
          (e.FocusedBackground = `--framer-input-focused-background`),
          (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
          (e.FocusedTransition = `--framer-input-focused-transition`),
          (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
          (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
          (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
          (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
          (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
          (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
          (e.InvalidTextColor = `--framer-input-invalid-text-color`),
          (e.IconBackgroundImage = `--framer-input-icon-image`),
          (e.IconMaskImage = `--framer-input-icon-mask-image`),
          (e.IconColor = `--framer-input-icon-color`),
          (e.IconContent = `--framer-input-icon-content`),
          (e.WrapperHeight = `--framer-input-wrapper-height`),
          e
        );
      })({})),
      (W = Tt),
      (Et = `framer-form-input`),
      (Dt = `framer-form-input-wrapper`),
      (Ot = `framer-form-input-empty`),
      (kt = `framer-form-input-forced-focus`),
      (G = /* @__PURE__ */ (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (B(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${rt(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            B(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (At = [
        G(`.${Et}`, {
          padding: G.variable(W.Padding),
          background: `transparent`,
          fontFamily: G.variable(W.FontFamily),
          fontWeight: G.variable(W.FontWeight),
          fontSize: G.variable(W.FontSize),
          fontStyle: G.variable(W.FontStyle),
          color: G.variable(W.FontColor),
          fontFeatureSettings: G.variable(W.FontOpenType),
          fontVariationSettings: G.variable(W.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: G.variable(W.WrapperHeight, `100%`),
          letterSpacing: G.variable(W.FontLetterSpacing),
          textAlign: G.variable(W.FontTextAlignment),
          lineHeight: G.variable(W.FontLineHeight),
        }),
        G(`.${Et}:focus-visible`, { outline: `none` }),
      ]),
      (jt = [G(`.${Dt}`, { overflow: `hidden` })]),
      (Mt = `var(${W.BorderTopWidth}) var(${W.BorderRightWidth}) var(${W.BorderBottomWidth}) var(${W.BorderLeftWidth})`),
      (Nt = [
        `.${Dt}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${W.BorderRadiusTopLeft});
        border-top-right-radius: var(${W.BorderRadiusTopRight});
        border-bottom-right-radius: var(${W.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${W.BorderRadiusBottomLeft});
        corner-shape: var(${W.CornerShape});
        border-color: var(${W.BorderColor});
        border-top-width: var(${W.BorderTopWidth});
        border-right-width: var(${W.BorderRightWidth});
        border-bottom-width: var(${W.BorderBottomWidth});
        border-left-width: var(${W.BorderLeftWidth});
        border-style: var(${W.BorderStyle});
        transition: var(${W.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (Pt = `customError`),
      (Ft = `valid`),
      (It = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `16px`,
        maskRepeat: `no-repeat`,
        maskSize: `16px`,
        backgroundColor: G.variable(W.IconColor),
      }),
      (Lt = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `16px`,
        boxSizing: `content-box`,
        padding: G.variable(W.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...It,
      }),
      (Rt = `--max-list-digits`),
      (zt = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (Bt = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Vt = { display: `inline-block` }),
      (Ht = { display: `block` }),
      (Ut = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Bt.display};
            flex-direction: ${Bt.flexDirection};
            justify-content: ${Bt.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${ft([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${ft([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${ft([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${Vt.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${ft([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${ft([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ft([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${ft([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${ft([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        /* Linked images keep the radius and padding of their image style. */
        a.framer-text:where(:not(.framer-image)):hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${ft([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${ft([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${ft([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${ft([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${ft([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ft([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${ft([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${ft([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ft([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${ft([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ft([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${ft([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${ft([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ft([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${Ht.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        /* A linked image gets its image style on both the link and the image; only the image draws the border and shadow. */
        a.framer-image.framer-text {
            border: none;
            box-shadow: none;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${Rt}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${pt(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (Wt = `--text-truncation-display-inline-for-safari-16`),
      (Gt = `--text-truncation-display-none-for-safari-16`),
      (Kt = `--text-truncation-line-break-for-safari-16`),
      (qt = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (Jt = `(background: -webkit-named-image(i))`),
      (Yt = `(contain-intrinsic-size: inherit)`),
      (Xt = [
        `@supports ${Jt} and (not ${Yt}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${qt.join(`, `)} { display: var(${Wt}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${qt.map((e) => `${e}::after`).join(`, `)} { content: var(${Kt}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Gt}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${Wt}, ${Vt.display}) }
    }`,
      ]));
  }))();
}
function Qt(e, t, n) {
  if (C_.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (C_.set(e, t), t))
    .catch((t) => {
      throw (C_.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(mt), C_.set(e, r));
}
function $t(e, t) {
  ht && (w_.set(e, t), T_.has(e) && Qt(e, t, `registered loader ${e}`));
}
function en() {
  if (!ht) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(E_),
      i = r ? e.slice(1) : e;
    if (!i) continue;
    T_.add(i);
    let a = w_.get(i);
    a
      ? Qt(i, a, `registered loader ${i}`)
      : r &&
        Qt(
          i,
          () =>
            import(
              /* @vite-ignore */
              n
            ),
          n
        );
  }
}
function tn(e) {
  return typeof e == `object` && !!e && !E(e) && O_ in e;
}
function nn(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function rn(e, t = `default`, n) {
  n && $t(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !C_.has(n)) return;
      let e = C_.get(n);
      Qe(e) ? s(() => e) : (i = nn(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = nn(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = O(function (t, r) {
      if (
        (_(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && D_ !== void 0 && D_.add(n), !i)) throw s(e);
      return /* @__PURE__ */ D(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function an(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function on(e) {
  return e === null || !(A_ in e) ? !1 : typeof e.equals == `function`;
}
function sn(e, t) {
  return e === t || (e !== e && t !== t);
}
function cn(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!sn(e[r], t[r])) return !1;
  return !0;
}
function ln(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!hn(e[r], t[r], !0)) return !1;
  return !0;
}
function un(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!sn(r, t.get(n))) return !1;
  return !0;
}
function dn(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!hn(r, t.get(n), !0)) return !1;
  return !0;
}
function fn(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function pn(e, t) {
  let n = k_(e);
  if (n.length !== k_(t).length) return !1;
  for (let r of n)
    if (!an(t, r) || (!(r === `_owner` && an(e, `$$typeof`) && e.$$typeof) && !sn(e[r], t[r])))
      return !1;
  return !0;
}
function mn(e, t) {
  let n = k_(e);
  if (n.length !== k_(t).length) return !1;
  for (let r of n)
    if (!an(t, r) || (!(r === `_owner` && an(e, `$$typeof`) && e.$$typeof) && !hn(e[r], t[r], !0)))
      return !1;
  return !0;
}
function hn(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? ln(e, t) : cn(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? dn(e, t) : un(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return fn(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? on(e) && on(t)
        ? e.equals(t)
        : n
          ? mn(e, t)
          : pn(e, t)
      : !1;
}
function gn(e, t, n = !0) {
  try {
    return hn(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function _n(e) {
  return p.useCallback((t) => e[t], [e]);
}
function vn({ api: e, children: t }) {
  return /* @__PURE__ */ D(j_.Provider, { value: e, children: t });
}
function yn() {
  return p.useContext(j_);
}
function bn({ routes: e, children: t }) {
  let n = _n(e),
    r = u(() => ({ getRoute: n }), [n]);
  return /* @__PURE__ */ D(j_.Provider, { value: r, children: t });
}
function xn() {
  let e = yn(),
    t = l(M_),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = t?.routeId ? void 0 : e.currentCanonicalPathVariables,
    a = n ? e.getRoute?.(n) : void 0;
  return u(() => {
    if (n && a) return { ...a, id: n, pathVariables: r, canonicalPathVariables: i };
  }, [i, n, r, a]);
}
function Sn() {
  let e = xn();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Cn(e) {
  let t = xn(),
    n = p.useRef(t);
  !gn(n.current, t) && t && ((n.current = t), e(t));
}
function wn(e) {
  let t = yn();
  if (e) return t.getRoute?.(e);
}
function Tn(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function En(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Dn(e, t) {
  let n = xn(),
    r = wn(t) ?? n;
  return p.useMemo(() => (r ? Tn(r, e) : e), [e, r]);
}
function On() {
  return xn()?.pathVariables;
}
function kn(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === B_
  );
}
function An(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function jn(e) {
  return typeof Buffer < `u` && Buffer.isBuffer(e);
}
function Mn(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Nn(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Mn(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Pn(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Fn(e) {
  return V_.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function In(e) {
  return !(!Number.isInteger(e) || e < 0 || e > R_);
}
function Ln(e) {
  return !(!Number.isInteger(e) || e < 0 || e > L_);
}
function Rn(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return In(+e);
}
function zn(e) {
  for (var t = e.length - 1; t >= 0 && !Rn(e[t]); t--);
  return t + 1;
}
function Bn(e) {
  let t = Object.keys(e);
  return ((t.length = zn(t)), t);
}
function Vn(e) {
  return new Uint8Array(e).toBase64();
}
function Hn(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function Un(e) {
  return Buffer.from(e).toString(`base64`);
}
function Wn(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function Gn(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function Kn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function qn(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function Jn(e, t, n) {
  return Yn(JSON.parse(e), t, n);
}
function Yn(e, t, n) {
  let r = qn(Z_, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === -1) return r.fromPrimitive(void 0);
    if (e === -3) return r.fromPrimitive(NaN);
    if (e === -4) return r.fromPrimitive(1 / 0);
    if (e === -5) return r.fromPrimitive(-1 / 0);
    if (e === -6) return r.fromPrimitive(-0);
    if (n || typeof e != `number`) throw Error(`Invalid input`);
    if (e in a) return a[e];
    if (e >= i.length) throw Error(`Invalid input`);
    let c = i[e];
    if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
    else if (Array.isArray(c)) {
      if (typeof c[0] == `string`) {
        let n = c[0],
          l = t && Object.hasOwn(t, n) ? t[n] : void 0;
        if (l) {
          let t = c[1];
          if ((typeof t != `number` && (t = i.push(c[1]) - 1), Object.hasOwn(a, t)))
            return (a[e] = l(a[t]));
          if (((o ??= /* @__PURE__ */ new Set()), o.has(t)))
            throw Error(`Invalid circular reference`);
          return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
        }
        switch (n) {
          case `Date`:
            a[e] = r.fromISOString(c[1]);
            break;
          case `Set`:
            let t = r.createSet();
            a[e] = t;
            for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
            break;
          case `Map`:
            let o = r.createMap();
            a[e] = o;
            for (let e = 1; e < c.length; e += 2) r.addEntry(o, s(c[e]), s(c[e + 1]));
            break;
          case `RegExp`:
            a[e] = r.fromRegExpInfo(c[1], c[2]);
            break;
          case `Object`: {
            let t = c[1];
            if (typeof i[t] == `object` && i[t][0] !== `BigInt`) throw Error(`Invalid input`);
            a[e] = r.box(s(t));
            break;
          }
          case `BigInt`:
            a[e] = r.fromPrimitive(BigInt(c[1]));
            break;
          case `null`:
            let l = r.createNullPrototypeObject();
            a[e] = l;
            for (let e = 1; e < c.length; e += 2) {
              let t = c[e];
              if (typeof t != `string`) throw Error(`Cannot parse an object with a non-string key`);
              if (t === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              r.set(l, t, s(c[e + 1]));
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = s(c[1]);
            a[e] = r.fromViewInfo(n, t, c[2], c[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = c[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            a[e] = r.fromArrayBuffer(G_(t));
            break;
          }
          case `URL`:
          case `URLSearchParams`:
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`:
            a[e] = r.fromStringValue(n, c[1]);
            break;
          default:
            throw Error(`Unknown type ${n}`);
        }
      } else if (c[0] === -7) {
        let t = c[1];
        if (!Ln(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!In(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== -2 && r.set(t, e, s(n));
        }
      }
    } else {
      let t = r.createObject();
      a[e] = t;
      for (let e of Object.keys(c)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        r.set(t, e, s(c[e]));
      }
    }
    return a[e];
  }
  return s(0);
}
function Xn(e, t, n) {
  let r = Zn(!1, e, t, n);
  return typeof r == `string` ? r : `[${r.join(`,`)}]`;
}
function Zn(e, t, n, r) {
  let i = qn(J_, r?.operations),
    a = [],
    o = /* @__PURE__ */ new Map(),
    s = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) s.push({ key: e, fn: n[e] });
  let c = [],
    l = 0;
  function u(n, r) {
    let d = i.typeOf(n);
    if (d === `undefined`) return -1;
    let f;
    if (d === `number`) {
      if (((f = i.toPrimitive(n)), Number.isNaN(f))) return -3;
      if (f === 1 / 0) return -4;
      if (f === -1 / 0) return -5;
      if (f === 0 && 1 / f < 0) return -6;
    }
    let p = i.identify(n);
    if (o.has(p)) return o.get(p);
    ((r ??= l++), o.set(p, r));
    for (let { key: e, fn: t } of s) {
      let i = t(n);
      if (i) return ((a[r] = `["${e}",${u(i)}]`), r);
    }
    if (d === `function`) throw new z_(`Cannot stringify a function`, c, n, t);
    if (d === `symbol`) throw new z_(`Cannot stringify a Symbol primitive`, c, n, t);
    let m = ``;
    if (d !== `object`) m = Qn(d === `number` ? f : i.toPrimitive(n));
    else if (i.isThenable(n)) {
      if (!e)
        throw new z_(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          c,
          n,
          t
        );
      ((m = i.toPromise(n).then((e) => {
        let t = u(e, r);
        t < 0 && (a[r] = t);
      })),
        m.catch(() => {}));
    } else {
      let e = i.tagOf(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          m = `["Object",${u(i.unbox(n))}]`;
          break;
        case `Date`:
          m = `["Date","${i.toISOString(n)}"]`;
          break;
        case `URL`:
          m = `["URL",${Nn(i.toStringValue(n))}]`;
          break;
        case `URLSearchParams`:
          m = `["URLSearchParams",${Nn(i.toStringValue(n))}]`;
          break;
        case `RegExp`:
          let { source: r, flags: a } = i.regExpInfo(n);
          m = a ? `["RegExp",${Nn(r)},"${a}"]` : `["RegExp",${Nn(r)}]`;
          break;
        case `Array`: {
          let e = !1,
            t = i.lengthOf(n);
          m = `[`;
          for (let r = 0; r < t; r += 1)
            if ((r > 0 && (m += `,`), i.hasOwn(n, r)))
              (c.push(`[${r}]`), (m += u(i.get(n, r))), c.pop());
            else if (e) m += -2;
            else {
              let r = i.indicesOf(n),
                a = r.length,
                o = String(t).length;
              if ((t - a) * 3 > 4 + o + a * (o + 1)) {
                m = `[-7,` + t;
                for (let e = 0; e < r.length; e++) {
                  let t = r[e];
                  (c.push(`[${t}]`), (m += `,` + t + `,` + u(i.get(n, t))), c.pop());
                }
                break;
              }
              ((e = !0), (m += -2));
            }
          m += `]`;
          break;
        }
        case `Set`:
          m = `["Set"`;
          for (let e of i.valuesOf(n)) m += `,${u(e)}`;
          m += `]`;
          break;
        case `Map`:
          m = `["Map"`;
          for (let [e, t] of i.entriesOf(n)) {
            let n = i.typeOf(e),
              r = n !== `object` && n !== `function` && n !== `symbol`;
            (c.push(`.get(${r ? Qn(i.toPrimitive(e)) : `...`})`),
              (m += `,${u(e)},${u(t)}`),
              c.pop());
          }
          m += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.length}`),
            (m += `]`));
          break;
        }
        case `DataView`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.byteLength}`),
            (m += `]`));
          break;
        }
        case `ArrayBuffer`:
          m = `["ArrayBuffer","${W_(i.toArrayBuffer(n))}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          m = `["${e}",${Nn(i.toStringValue(n))}]`;
          break;
        default: {
          let e = i.shapeOf(n);
          if (e.kind === `not-plain`) throw new z_(`Cannot stringify arbitrary non-POJOs`, c, n, t);
          if (e.kind === `symbol-keys`)
            throw new z_(`Cannot stringify POJOs with symbolic keys`, c, n, t);
          if (e.kind === `null-proto`) {
            m = `["null"`;
            for (let r of e.keys) {
              if (r === `__proto__`)
                throw new z_(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (c.push(Fn(r)), (m += `,${Nn(r)},${u(i.get(n, r))}`), c.pop());
            }
            m += `]`;
          } else {
            m = `{`;
            let r = !1;
            for (let a of e.keys) {
              if (a === `__proto__`)
                throw new z_(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (r && (m += `,`),
                (r = !0),
                c.push(Fn(a)),
                (m += `${Nn(a)}:${u(i.get(n, a))}`),
                c.pop());
            }
            m += `}`;
          }
        }
      }
    }
    return ((a[r] = m), r);
  }
  let d = u(t);
  return d < 0 ? `${d}` : a;
}
function Qn(e) {
  let t = typeof e;
  return t === `string`
    ? Nn(e)
    : e === void 0
      ? `-1`
      : e === 0 && 1 / e < 0
        ? `-6`
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function $n(e, t, n = `lazy`) {
  switch ((H.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function er(e) {
  return L(e) && (e === `` || Q_.test(e));
}
function tr() {
  return {
    [$_.QueryCache]: /* @__PURE__ */ new Map(),
    [$_.CollectionUtilsCache]: /* @__PURE__ */ new Map(),
  };
}
function nr() {
  if (!ht) return;
  if (ev !== void 0) return ev;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      ev = Jn(e.text) ?? tr();
    } catch (e) {
      ((ev = tr()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      vt(() => {
        (e?.remove(), (e = null));
      }),
      ev
    );
  }
}
function rr(e, t) {
  if (
    (console.warn(
      et(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    $n(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function ir(e, t) {
  let n = nr();
  return n ? n[e].has(t) : !1;
}
function ar(e, t) {
  let n = nr();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function or(e) {
  return e?.id ?? `default`;
}
function sr(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function cr(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (iv.has(n)) return iv.get(n);
    let r = new ov(n, t);
    return (iv.set(n, r), r);
  };
}
function lr({ children: e, collectionUtils: t }) {
  let n = u(() => ({ get: cr(t) }), [t]);
  return /* @__PURE__ */ D(av.Provider, { value: n, children: e });
}
function ur() {
  return l(av);
}
function dr(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function fr() {
  return n === void 0 ? void 0 : n;
}
function pr() {
  let e = fr();
  return e ? sv.test(e.platform) : !1;
}
function mr() {
  let e = fr();
  return e
    ? cv.test(e.platform)
      ? !0
      : lv.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function hr() {
  return pr() || mr();
}
function gr() {
  let e = fr();
  return e ? uv.test(e.userAgent) : !1;
}
function _r() {
  let e = fr();
  return e ? dv.test(e.userAgent) && fv.test(e.vendor) && !gr() : !1;
}
function vr() {
  let e = fr();
  return e ? pv.test(e.userAgent) && mv.test(e.vendor) : !1;
}
function yr() {
  let e = fr();
  return e ? hv.test(e.userAgent) : !1;
}
function br() {
  return typeof document == `object`;
}
function xr() {
  let e = fr();
  if (!e) return -1;
  let t = gv.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Sr() {
  let e = fr();
  return e ? _v.test(e.userAgent) : !1;
}
function Cr() {
  return !1;
}
function wr() {
  let e = fr();
  return e && vv.test(e.userAgent) ? `tablet` : e && yv.test(e.userAgent) ? `phone` : `desktop`;
}
function Tr() {
  return wr() === `desktop`;
}
function Er(e) {
  return hr() ? e.metaKey : e.ctrlKey;
}
function Dr() {}
async function Or() {}
function kr(e) {
  return typeof e == `function` ? e() : e;
}
function Ar(e, t) {
  return Cv[e] > Cv[t];
}
function jr() {
  if (typeof scheduler < `u`) return scheduler;
}
function Mr(e, t) {
  let n = e?.priority,
    r = jr();
  return n === `background`
    ? (t?.() ?? dr(1))
    : r?.yield
      ? r.yield(e).catch(Dr)
      : r?.postTask
        ? r.postTask(Dr, e).catch(Dr)
        : t
          ? t()
          : n === `user-blocking`
            ? wv
            : dr(0);
}
function Nr(e, t, n) {
  let r = -1 / 0,
    i,
    a = /* @__PURE__ */ new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    br() && (document.addEventListener(`visibilitychange`, s), h.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, Tv),
        e(() => {
          Mr(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return br()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : Mr(a, t);
    return i ? u(o) : o;
  }
  function f(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function p(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? bv : xv),
        s = br() && document.hidden ? Sv : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return f(a, e, o);
  }
  function m(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !br() && !t ? (n ? void 0 : wv) : n ? p(i, r) : d(i);
  }
  return m;
}
function Pr(e, t = !1) {
  let n = ``;
  if (h !== void 0) {
    if (t) n = h.location.search;
    else {
      let e = h.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? h.location.search : e === `` ? `` : `?${e}`;
    }
  }
  return n ? Fr(n, e) : e;
}
function Fr(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Ov && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Ir(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(kv)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !L(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = Qe(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = Qe(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = Qe(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    t &&
      n &&
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function Lr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Rr({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Ir(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Lr(u.path, t.slug)),
    o && u.path && (u.path = Pr(u.path, !0)),
    u
  );
}
async function zr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(kv)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (L(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Br({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === "default") return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await zr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function Vr({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Br({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await Rr({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return gn(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function Hr() {
  return p.useContext(Mv);
}
function Ur() {
  return Hr().activeLocale?.code ?? `en-US`;
}
function Wr() {
  return p.useContext(Nv);
}
function Gr() {
  let e = ur(),
    { getRoute: n } = yn(),
    { activeLocale: r, locales: i } = Hr();
  return t(
    (t, a, o) => {
      if (!t || !n) return;
      let s = n(t),
        { pathVariables: c } = a;
      return qr(
        s,
        {
          routeId: t,
          pathVariables: c,
          locale: a.locale ?? r ?? void 0,
          locales: i,
          collectionUtils: e,
        },
        o
      );
    },
    [n, e, r, i]
  );
}
function Kr(e, t = !0) {
  let n = Gr();
  _(() => {
    if (t && Pv) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function qr(e, t, n = {}) {
  if (!Pv || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !tn(o)) return;
  let s = a && !!t;
  if (!o.getStatus().hasLoaded || s) {
    i && (await Dv({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await Jr(n, e, t, r));
    } catch {}
  }
}
async function Jr(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await Vr({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === P_),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function Yr() {
  if (Fv) return;
  Fv = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (h.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((h.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), $n(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function Xr({ children: e, value: t }) {
  return /* @__PURE__ */ D(Iv.Provider, { value: t, children: e });
}
function Zr() {
  return p.useContext(Iv);
}
function Qr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function $r(e) {
  let t = Lv,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Rv; ) ((n = e.next(t)), r.push(n.value), (t += Lv));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Lv }
  );
}
function ei(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function ti(e) {
  let { innerWidth: t, innerHeight: n } = h,
    [r, i] = ei(e.x),
    [a, o] = ei(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function ni(e) {
  let [t, n] = ei(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function ri(e) {
  let { x: t, y: n } = ti(e);
  return Math.hypot(Math.max(t, h.innerWidth - t), Math.max(n, h.innerHeight - n));
}
function ii(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function ai(e) {
  return e ? Vv[e] : void 0;
}
function oi(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (si(t)) {
    let { easing: e, duration: n } = $r(
      oe({ keyframes: [0, 1], ...ci(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = ai(n?.mask?.type),
    o = ii(n, `start`, e, a),
    s = ii({ ...Hv, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function si(e) {
  return e.type === `spring`;
}
function ci(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function li({ exit: e = Wv, enter: t }) {
  let n = document.createElement(`style`);
  n.id = Uv;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += oi(`exit`, e)),
    (r += oi(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function ui() {
  vt(() => {
    I.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(Uv);
      e && document.head.removeChild(e);
    });
  });
}
function di() {
  return !!document.startViewTransition;
}
function fi(e) {
  return new Promise((t) => {
    I.render(() => {
      (performance.mark(`framer-vt-style`), li(e), t());
    });
  });
}
async function pi(e, t, n) {
  if (!di()) {
    e();
    return;
  }
  if ((await fi(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(Gv),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), ui());
      })
      .catch(Gv),
    r
  );
}
function mi() {
  let e = Zr(),
    n = M(void 0);
  return (
    _(() => {
      n.current &&= (n.current(), void 0);
    }),
    t(
      (t, r, i, a) => {
        let o = Qr(t, r, e);
        if (o) {
          let e = new Promise((e) => {
            n.current = e;
          });
          return pi(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function hi(e, t) {
  vt(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function gi(e, t) {
  vt(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function _i(e) {
  vt(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = /* @__PURE__ */ new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = /* @__PURE__ */ new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
//! Credit to Astro | MIT License
function vi(e, t, n, r = d) {
  r(() => {
    let t = async (e) => (await Dv({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function yi(e) {
  let n = M(/* @__PURE__ */ new Set());
  return (
    vi(
      () => {
        for (let e of n.current) e();
        n.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    t(
      (t) => {
        let r,
          i = new Promise((e) => {
            ((r = e), n.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: t, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: t }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: t,
            ignore: () => {
              ((s = !0), r && (n.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function bi(e) {
  return z(e) && `routeId` in e;
}
function xi(e = h.history.state) {
  return bi(e) ? e : void 0;
}
function Si(e) {
  return e?.entryId;
}
function Ci(e) {
  Jv = e;
}
function wi() {
  return Jv;
}
function Ti() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Ei(e, t) {
  return Di(e, Si(e) ?? Si(t));
}
function Di(e, t = Ti()) {
  return { ...e, entryId: t };
}
function Oi(e, t) {
  (performance.mark(`framer-history-replace`), Ci(Ei(e, xi())), t && hi(t, h.location.href));
  let n =
    !t || t === h.location.href
      ? h.History.prototype.replaceState.bind(h.history)
      : h.history.replaceState.bind(h.history);
  try {
    n(Jv, ``, t);
  } catch {}
}
function ki(e) {
  (performance.mark(`framer-history-replace`),
    Ci(Di(e)),
    History.prototype.replaceState.call(h.history, Jv, ``, void 0));
}
function Ai(e) {
  let t = h.navigation?.transition;
  if (!t) {
    e();
    return;
  }
  let n = () => {
    let n = h.navigation.transition;
    n && n !== t ? Ai(e) : e();
  };
  t.finished.then(n, n);
}
function ji(e, t) {
  (performance.mark(`framer-history-push`), Ci(Di(e)), hi(t, h.location.href), Yr());
  try {
    h.history.pushState(Jv, ``, t);
  } catch {}
}
function Mi({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
  initialContentLocaleId: i,
  initialCanonicalPathVariables: a,
}) {
  d(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let o = h.location.hash ? h.location.hash.slice(1) : void 0;
    Oi({
      ...xi(),
      routeId: t,
      hash: o,
      pathVariables: n,
      localeId: r,
      contentLocaleId: i,
      canonicalPathVariables: a,
    });
  }, []);
}
function Ni(e, n, r) {
  let i = mi(),
    a = yi(`framer-route-change`),
    { onHistoryTraversal: o, usesCustomScrollRestoration: s } = e,
    c = s ? `manual` : `after-transition`,
    l = M(void 0),
    u = t(() => {
      (l.current?.resolve(), (l.current = void 0));
    }, []),
    d = t(
      async ({ state: e }) => {
        if (!bi(e)) return;
        let t = a({ popstate: !0 }),
          s = En();
        (t.promise.finally(s), Si(wi()) !== (Si(e) ?? Si(xi())) && o(), Ci(e));
        let {
            routeId: l,
            hash: d,
            pathVariables: f,
            localeId: p,
            contentLocaleId: m,
            canonicalPathVariables: g,
          } = e,
          _ = L(d) ? d : h.location.hash ? h.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (r(
                l,
                L(p) ? p : void 0,
                _,
                h.location.pathname + h.location.search + h.location.hash,
                z(f) ? f : void 0,
                m,
                g,
                !0,
                t,
                !1
              ),
              !0);
          },
          b = c === `after-transition`;
        (await Promise.resolve(i(n.current, l, y))
          .then((e) => e?.updateCallbackDone)
          .catch(y)
          .finally(() => {
            b || u();
          }),
          await t.promise,
          b && u(),
          await h.navigation?.transition?.finished.catch(mt),
          qv(),
          hi(h.location.href));
      },
      [n, a, o, u, r, i, c]
    ),
    f = t(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        bi(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                l.current = { resolve: e, reject: t };
              }),
                (l.current = void 0));
            },
            scroll: c,
          });
      },
      [c]
    );
  _(
    () => (
      h.addEventListener(`popstate`, d),
      Yv && h.navigation.addEventListener(`navigate`, f),
      () => {
        (h.removeEventListener(`popstate`, d),
          Yv && h.navigation.removeEventListener(`navigate`, f));
      }
    ),
    [d, f]
  );
}
async function Pi(e) {
  return (
    (await fetch(e, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect` &&
    ((h.location.href = h.location.origin + e), !0)
  );
}
function Fi() {
  let e = ur();
  return t((t) => Ii({ ...t, collectionUtils: e }), [e]);
}
async function Ii({ sitePrefix: e, ...t }) {
  let n = await Rr(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!L(n.path)) throw Error(`Expected result.path to be a string`);
      if (
        (n.isMissingInLocale ||
          (t.route.includedLocales && !t.route.includedLocales.includes(t.nextLocale.id))) &&
        (await Pi(e + n.path))
      )
        return;
    } catch {}
    return n;
  }
}
function Li(e, t) {
  let n = Si(xi());
  n &&
    Ai(() => {
      let r = xi();
      if (!r || Si(r) !== n) return;
      let i = { ...r.paginationInfo, [e]: t };
      Oi({ ...r, paginationInfo: i });
    });
}
function Ri(e) {
  let n = M(Promise.resolve()),
    r = M(),
    i = t(
      (t) => {
        if (t.navigationType === `traverse` || !t.canIntercept) return;
        let i = r.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          t.intercept({ handler: () => n.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return t(
    (e, t, a) => {
      Yv
        ? ((n.current = e),
          (r.current = t),
          h.navigation.addEventListener(`navigate`, i),
          a?.(),
          e.finally(() => {
            n.current === e &&
              ((r.current = void 0), h.navigation.removeEventListener(`navigate`, i));
          }))
        : a?.();
    },
    [i]
  );
}
function zi(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function Bi(e) {
  return zi(e.trim().toLowerCase().replace(Xv, `-`));
}
function Vi({ children: e, value: t }) {
  return /* @__PURE__ */ D(Qv.Provider, { value: t, children: e });
}
function Hi() {
  return l(Qv);
}
function Ui(e, t) {
  let n = j(() => ({ inputs: t, result: e() }))[0],
    r = M(!0),
    i = M(n),
    a =
      r.current || (t && i.current.inputs && gn(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    _(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function Wi(e, t) {
  return Ui(() => e, t);
}
function Gi() {
  return h.location.search;
}
function Ki() {
  return ``;
}
function qi(e) {
  return (
    ey.add(e),
    h.addEventListener(`popstate`, e),
    () => {
      (ey.delete(e), h.removeEventListener(`popstate`, e));
    }
  );
}
function Ji() {
  for (let e of ey) e();
}
function Yi({ children: e, routerRenderKey: n, isNavigationCommitPending: r }) {
  let i = Hi() === `preview`,
    [a, s] = j(``),
    c = M(n);
  $v(() => {
    c.current = n;
  }, [n]);
  let l = w(qi, Gi, Ki),
    u = te(l),
    d = n !== te(n),
    f = i ? a : d ? l : u,
    p = t(
      async (e) => {
        if (i) {
          o(() => {
            s((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let t = r(),
          a = n;
        if ((await Dv({ continueAfter: `paint` }), t || r() || c.current !== a)) return;
        let l = xi();
        if (!l) return;
        let u = new URL(h.location.href),
          d = e(u.searchParams).toString();
        u.search = d;
        let f = l.queryParamBackAnchorSearch,
          p = h.location.search.slice(1),
          m = f === void 0 && d !== p,
          g = f !== void 0 && d === f,
          _ = { ...l, queryParamBackAnchorSearch: g ? void 0 : (f ?? (m ? p : void 0)) },
          v = u.toString();
        (m || g ? ji(_, v) : Oi(_, v), Ji());
      },
      [r, i, n]
    ),
    m = Ui(() => ({ urlSearchParams: new URLSearchParams(f), replaceSearchParams: p }), [f, p]);
  return /* @__PURE__ */ D(ty.Provider, { value: m, children: e });
}
function Xi(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Zi(e),
    [r, i] = Zi(t),
    a = Qi(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Zi(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Qi(e, t) {
  if (e === t || ((e = `/` + $i(e)), (t = `/` + $i(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = iy(e, 1 + s);
    if (n !== iy(t, 1 + s)) break;
    n === ry && (o = s);
  }
  if (s === a) {
    if (i > a) {
      if (iy(t, 1 + s) === ry) return oy(t, 1 + s + 1);
      if (s === 0) return oy(t, 1 + s);
    } else r > a && (iy(e, 1 + s) === ry ? (o = s) : s === 0 && (o = 0));
  }
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || iy(e, s) === ry) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${oy(t, 1 + o)}`;
}
function $i(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = iy(e, o);
    else if (cy(a)) break;
    else a = ry;
    if (cy(a)) {
      if (r !== o - 1 && i !== 1) {
        if (i === 2) {
          if (t.length < 2 || n !== 2 || iy(t, t.length - 1) !== ny || iy(t, t.length - 2) !== ny) {
            if (t.length > 2) {
              let e = ay(t, sy);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = oy(t, 0, e)), (n = t.length - 1 - ay(t, sy))),
                (r = o),
                (i = 0));
              continue;
            }
            if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
        } else
          (t.length > 0 ? (t += `${sy}${oy(e, r + 1, o)}`) : (t = oy(e, r + 1, o)),
            (n = o - r - 1));
      }
      ((r = o), (i = 0));
    } else a === ny && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function ea(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || h.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function ta(e, t) {
  let n = e.replace(kv, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function na(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return ta(i, r);
  }
  if (e.includes(`:`)) return ta(e, r);
  let i = t.elements?.[e];
  return i ? ta(i, r) : e;
}
function ra(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: f,
  }
) {
  let p;
  if ((i && e && (p = na(i, e, o)), l)) return p ?? ``;
  let m = t ?? `/`;
  (n && d && (m = n[d] ?? m), r && (m = m.replace(kv, (e, t) => String(r[t] || e))));
  let g = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace(kv, (e, t) => String(a[t] || e)));
  let _ = !!(m === g && p),
    v = !_ && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && m !== g;
  if (s) {
    if (ly.has(m) && h !== void 0) {
      let e = ea(u);
      g = Xi(h.location.pathname, e + g);
    } else g = Xi(m, g);
  } else g = Lr(g, f);
  let y = _ || v;
  return ((c || y) && (g = Pr(g, y)), p && (g = `${g}#${p}`), g);
}
function ia(e, t) {
  let n = document.currentScript?.parentElement;
  n &&
    n.addEventListener(`submit`, (r) => {
      n.hasAttribute(e) || (r.preventDefault(), n.setAttribute(t, ``));
    });
}
function aa() {
  return `(${ia.toString()})("${fy}","${py}")`;
}
function oa(e, t) {
  _(() => {
    let n = e.current;
    if (!n || (n.setAttribute(fy, ``), !n.hasAttribute(py))) return;
    n.removeAttribute(py);
    let r = !1;
    return (
      queueMicrotask(() => {
        r || (n.reportValidity() && t(n));
      }),
      () => {
        r = !0;
      }
    );
  }, []);
}
function sa() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[uy] = 1), e);
}
function ca() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[uy] = 1), e);
}
function la(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function ua(e) {
  return uy in e && e[uy] === 1;
}
function da(e) {
  return dy in e.nativeEvent && e.nativeEvent[dy] === 1;
}
function fa(e) {
  let t = M(!1),
    n = M(null),
    r = w(yt, xt, my);
  return (
    _(() => {
      if (!r) return;
      let i = n.current;
      if (t.current || !i) return;
      t.current = !0;
      let a = la(i),
        o = i[a];
      if (o === (a === `checked` ? !!e : e)) return;
      if (i.type === `radio` && o === !0) {
        ((i.checked = !1), i.dispatchEvent(ca()));
        return;
      }
      if (a === `checked`) {
        let e = ca();
        ((e[dy] = 1), i.dispatchEvent(e), i.dispatchEvent(ca()));
        return;
      }
      if (i.nodeName === `SELECT`) {
        i.dispatchEvent(sa());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i), a)?.set;
      if (!s) return;
      s.call(i, ``);
      let c = sa();
      ((c[dy] = 1),
        i.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(i, o), i.dispatchEvent(sa()));
        }));
    }, [r]),
    n
  );
}
function pa() {
  if (!hy) return;
  ((_y = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  hy.forEach((n) => t.addEventListener(n, gy, e));
}
function ma() {
  return (
    _(() => {
      if (!_y || !hy) return;
      let e = { capture: !0 },
        t = document.body;
      (hy.forEach((n) => t.removeEventListener(n, gy, e)),
        (hy = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function ha(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function ga(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function _a() {
  ((yy = new vy()), yy.render.markStart());
}
function va() {
  (f(() => {
    yy?.useInsertionEffects.markRouterStart();
  }, []),
    d(() => {
      yy?.useLayoutEffects.markRouterStart();
    }, []),
    _(() => {
      yy?.useEffects.markRouterStart();
    }, []));
}
function ya() {
  (f(() => {
    (yy?.render.markEnd(), yy?.useInsertionEffects.markStart());
  }, []),
    d(() => {
      (yy?.useLayoutEffects.markStart(),
        document.visibilityState === `visible`
          ? I.read(() => {
              (yy?.browserRendering.requestAnimationFrame.markStart(),
                yy?.unattributedHydrationOverhead.measure());
            })
          : (by = !0));
    }, []),
    _(() => {
      (yy?.useEffects.markStart(),
        yy?.browserRendering.hasStarted ||
          (yy?.mutationEffects.measure(), yy?.useEffects.markAreSynchronous()));
    }, []));
}
function ba() {
  (f(() => {
    yy?.useInsertionEffects.markEnd();
  }, []),
    d(() => {
      (yy?.useLayoutEffects.markEnd(),
        !(by || document.visibilityState !== `visible`) &&
          I.read(() => {
            (yy?.browserRendering.requestAnimationFrame.markEnd(),
              Dv().then(() => {
                yy?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    _(() => {
      yy?.useEffects.markEnd();
    }, []));
}
function xa() {
  return (ya(), null);
}
function Sa() {
  return (ba(), null);
}
function Ca(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return p.isValidElement(e) ? p.cloneElement(e, n) : /* @__PURE__ */ D(e, { ...n });
}
function wa() {
  return wy;
}
function Ta(e) {
  if (Ty?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      B(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Oa(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          B(t, `localizedPath must be defined`);
          let i = Oa(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    Ty = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: Ty.pathRoutes,
    paths: Ty.paths,
    pathRoutesLocalized: Ty.pathRoutesLocalized,
    pathsLocalized: Ty.pathsLocalized,
  };
}
function Ea(e, t, n = !0, r = wa()) {
  return Da(e, t, r, n);
}
function Da(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Ta(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = ka(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = ka(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = ka(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = ka(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Oa(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function ka(e, t) {
  let n = [],
    r = Aa(t).replace(kv, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
    } else {
      if (r === void 0) throw Error(`Path variable values cannot be undefined`);
      o[t] = r;
    }
  }
  return { isMatch: !0, pathVariables: o };
}
function Aa(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
async function ja({
  routes: e,
  routeId: t,
  pathVariables: n,
  localeId: r,
  locales: i,
  collectionUtils: a,
}) {
  let o = e[t],
    s = i ?? [],
    c = { get: cr(a) },
    l = s.find(({ id: e }) => e === P_),
    u = s.find(({ id: e }) => e === (r ?? `default`)) ?? null,
    d = (
      o?.collectionId
        ? zr({ activeLocale: u, collectionUtils: c, currentRoute: o, pathVariables: n })
        : Promise.resolve(void 0)
    )
      .then((e) => e ?? null)
      .catch(
        (e) => (console.error(et(`Failed to resolve the initial collection item id.`, e)), null)
      );
  return {
    ...(await Vr({
      activeLocale: u,
      defaultLocale: l,
      collectionUtilsCache: c,
      locales: s,
      pathVariables: n,
      route: o,
      routeId: t,
    })),
    collectionItemId: d,
  };
}
function Ma(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function Na(e) {
  let t = /* @__PURE__ */ new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = Ma(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function Pa(e, t) {
  let n = e.toLowerCase(),
    r = Na(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function Fa(e) {
  if (h === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in h)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function Ia() {
  let e = Fa(`abtests`);
  return new URLSearchParams(e?.description);
}
function La(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Ra(e, t) {
  for (let [n, r] of t) La(e, n, r);
}
function za(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Ba(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Va(e, t) {
  if (h === void 0) return t;
  let n = t;
  if (t) {
    Ba(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Ra(e, Ia()), za(e), n);
}
function Ha(e) {
  (_(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    f(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Ua(e, ...t) {
  Ey.has(e) || (Ey.add(e), console.warn(e, ...t));
}
function Wa(e, t, n) {
  Ua(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Ga(e) {
  return (
    typeof e == `object` &&
    !!e &&
    ky in e &&
    e[ky] instanceof Function &&
    Ay in e &&
    e[Ay] instanceof Function
  );
}
function Ka(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Oy(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function qa(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Ja(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Ya(e) {
  return Math.round(e * 2) / 2;
}
function Xa(e, t) {
  return { x: e, y: t };
}
function Za(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0) {
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  }
  return u;
}
function Qa(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function $a(e) {
  let t = eo(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function eo(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function to(e, t, n) {
  return (
    (Py.rgb_r = e / 255),
    (Py.rgb_g = t / 255),
    (Py.rgb_b = n / 255),
    Py.rgbToHsluv(),
    { h: Py.hsluv_h, s: Py.hsluv_s, l: Py.hsluv_l }
  );
}
function no(e, t, n, r = 1) {
  return (
    (Py.hsluv_h = e),
    (Py.hsluv_s = t),
    (Py.hsluv_l = n),
    Py.hsluvToRgb(),
    { r: Py.rgb_r * 255, g: Py.rgb_g * 255, b: Py.rgb_b * 255, a: r }
  );
}
function ro(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function io(e, t, n) {
  return {
    r: Qa(e) ? fo(e, 255) * 255 : 0,
    g: Qa(t) ? fo(t, 255) * 255 : 0,
    b: Qa(n) ? fo(n, 255) * 255 : 0,
  };
}
function ao(e, t, n, r) {
  let i = [
    ho(Math.round(e).toString(16)),
    ho(Math.round(t).toString(16)),
    ho(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function oo(e, t, n) {
  let r,
    i,
    a = fo(e, 255),
    o = fo(t, 255),
    s = fo(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function so(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function co(e, t, n) {
  let r, i, a;
  if (((e = fo(e, 360)), (t = fo(t * 100, 100)), (n = fo(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = so(s, o, e + 1 / 3)), (i = so(s, o, e)), (a = so(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function lo(e, t, n) {
  ((e = fo(e, 255)), (t = fo(t, 255)), (n = fo(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function uo(e, t, n) {
  ((e = fo(e, 360) * 6), (t = fo(t * 100, 100)), (n = fo(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function fo(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    po(e) && (e = `100%`);
    let t = mo(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function po(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function mo(e) {
  return typeof e == `string` && e.includes(`%`);
}
function ho(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function go(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = My[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Fy.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Fy.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Fy.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: $a(r[2] ?? ``), l: $a(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Fy.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: $a(r[2] ?? ``),
              l: $a(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Fy.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: $a(r[2] ?? ``), v: $a(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Fy.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: $a(r[2] ?? ``),
                  v: $a(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Fy.hex8.exec(t))
                ? {
                    r: _o(r[1] ?? ``),
                    g: _o(r[2] ?? ``),
                    b: _o(r[3] ?? ``),
                    a: vo(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Fy.hex6.exec(t))
                  ? {
                      r: _o(r[1] ?? ``),
                      g: _o(r[2] ?? ``),
                      b: _o(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Fy.hex4.exec(t))
                    ? {
                        r: _o(`${r[1]}${r[1]}`),
                        g: _o(`${r[2]}${r[2]}`),
                        b: _o(`${r[3]}${r[3]}`),
                        a: vo(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Fy.hex3.exec(t))
                      ? {
                          r: _o(`${r[1]}${r[1]}`),
                          g: _o(`${r[2]}${r[2]}`),
                          b: _o(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function _o(e) {
  return parseInt(e, 16);
}
function vo(e) {
  return _o(e) / 255;
}
function yo(e) {
  let t = Iy.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function bo(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function xo({ r: e, g: t, b: n, a: r }) {
  return { r: bo(e), g: bo(t), b: bo(n), a: r };
}
function So(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Co({ r: e, g: t, b: n, a: r }) {
  return { r: So(e), g: So(t), b: So(n), a: r };
}
function wo({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function To(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Eo({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = To(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Do(e) {
  return By(zy(e));
}
function Oo(e) {
  return Ry(Ly(e));
}
function ko(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Mo({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Ao(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Mo(e)
              : No(e)),
    i
  );
}
function Ao(e) {
  let t = go(e);
  if (t) return t.format === `hsl` ? No(t) : t.format === `hsv` ? jo(t) : Mo(t);
}
function jo(e) {
  let t = uo(e.h, e.s, e.v);
  return { ...oo(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Po(e.a) };
}
function Mo(e) {
  let t = io(e.r, e.g, e.b);
  return { ...oo(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Po(e.a) };
}
function No(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Qa(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Qa(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = eo(e.s)),
    (r = Qa(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = eo(e.l)),
    (i = co(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Po(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Fo({ children: e }) {
  if (l(eb).top) return /* @__PURE__ */ D(v, { children: e });
  let n = M({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = M({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = M(/* @__PURE__ */ new Set()).current,
    a = t(({ id: e, name: t, duplicatedFrom: a }) => {
      if (!e) return null;
      let o = t ? `byName` : `byId`,
        s = n.current[o][e];
      if (s) return s;
      let c = t || e;
      if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
        return (
          n.current.count[o][c] === void 0 &&
            ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
          i.add(c),
          c
        );
      let l;
      if (a?.length)
        for (let s = a.length - 1; s >= 0; s--) {
          let c = a[s];
          B(!!c, `duplicatedId must be defined`);
          let u = n.current[o][c],
            d = n.current.byLastId[c];
          if (d && !l) {
            let e = n.current.byLayoutId[d],
              r = !e || e === t;
            d && !i.has(d) && (!t || r) && (l = [d, c]);
          }
          let f = u ? n.current.byLayoutId[u] : void 0,
            p = !f || f === t;
          if (u && !i.has(u) && (!t || p))
            return ((r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u);
        }
      let u = n.current.byLastId[e];
      if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
      if (l) {
        let [t, n] = l;
        return ((r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t);
      }
      let d = n.current.byPossibleId[e];
      if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
      let f = a?.[0],
        p = t || f || e,
        { layoutId: m, value: h } = Io(p, (n.current.count[o][p] ?? -1) + 1, i);
      if (((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)) {
        let e = a[a.length - 1];
        if ((e && (r.current.byLastId[e] = m), a.length > 1))
          for (let e = 0; e < a.length - 1; e++) {
            let t = a[e];
            t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
          }
      }
      return ((r.current.byLayoutId[m] = c), i.add(m), m);
    }, []),
    o = t(() => {
      ((n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear());
    }, []),
    s = M({ getLayoutId: a, persistLayoutIdCache: o, top: !0, enabled: !0 }).current;
  return /* @__PURE__ */ D(eb.Provider, { value: s, children: e });
}
function Io(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Lo({ enabled: e = !0, ...t }) {
  let n = l(eb),
    r = u(() => ({ ...n, enabled: e }), [e]);
  return /* @__PURE__ */ D(eb.Provider, { ...t, value: r });
}
function Ro(e) {
  let t = M(null);
  return (t.current === null && (t.current = e()), t.current);
}
function zo(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Bo(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return /* @__PURE__ */ T(`div`, {
    style: nb,
    children: [
      /* @__PURE__ */ D(`div`, { className: `text`, style: ib, children: r }),
      i && /* @__PURE__ */ D(`div`, { className: `text`, style: ab, children: i }),
    ],
  });
}
function Bo(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Vo() {
  let e = U.current();
  return e === U.canvas || e === U.export;
}
function Ho() {
  let [e] = j(() => Vo());
  return e;
}
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function Uo(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Wo(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of _b) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Go(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Ko(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < 512) continue;
    let n = Go(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Go(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function qo(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of gb) {
    let n = Go(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Jo(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = qo(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  }
  return { src: n, srcSet: Ko(n, t, Wo(t.pixelWidth, t.pixelHeight)) };
}
function Yo() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: $e(pb.imagePlaceholderSvg),
  };
}
function Xo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Zo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Qo(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...hb,
    objectPosition: Zo(e.positionX, e.positionY),
    objectFit: Xo(e.fit),
  };
}
function $o(e) {
  let n = p.useRef(e ? `auto` : `async`),
    r = t((e) => {
      ((n.current = `auto`), (e.decoding = `auto`));
    }, []),
    i = t(
      (e) => {
        r(e.currentTarget);
      },
      [r]
    ),
    a = t(
      (e) => {
        e?.complete && r(e);
      },
      [r]
    );
  return { decoding: n.current, onImageLoad: i, onImageMount: a };
}
function es({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = pb.useImageSource(e, t, n),
    s = Qo(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = $o(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Jo(e.nodeFixedSize, e, o);
  return /* @__PURE__ */ D(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function ts({ image: e, containerSize: t, nodeId: n }) {
  let r = p.useRef(null),
    i = pb.useImageElement(e, t, n),
    a = Qo(e);
  return (
    p.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    /* @__PURE__ */ D(`div`, { ref: r, style: { display: `contents`, ...hb } })
  );
}
function ns({ nodeId: e, image: t, containerSize: n }) {
  let r = p.useRef(null),
    i = pb.useImageSource(t, n, e);
  return (
    p.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Qo(t);
      pb.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    /* @__PURE__ */ D(`div`, { ref: r, style: { display: `contents`, ...hb } })
  );
}
function rs({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (L(t.src)) {
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = R(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Ya(e * (t.pixelWidth / 2)),
        s = pb.useImageSource(t, n);
      ((r = {
        ...vb,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Zo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        U.current() === U.canvas
          ? pb.canRenderOptimizedCanvasImage(pb.useImageSource(t))
            ? /* @__PURE__ */ D(ns, { image: t, ...n })
            : /* @__PURE__ */ D(ts, { image: t, ...n })
          : /* @__PURE__ */ D(es, { image: t, avoidAsyncDecoding: U.current() === U.export, ...n });
  }
  let o = a ? vb : (r ?? { ...vb, ...Yo() });
  return i
    ? /* @__PURE__ */ D(N.div, {
        layoutId: e,
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      })
    : /* @__PURE__ */ D(`div`, {
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      });
}
function is(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  (typeof r == `number`
    ? (o = s = c = l = r)
    : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    (o !== 0 || s !== 0 || c !== 0 || l !== 0) &&
      (n && o === s && o === c && o === l
        ? (t.border = `${o}px ${i} ${a}`)
        : ((t.borderStyle = e.borderStyle),
          (t.borderColor = e.borderColor),
          (t.borderTopWidth = `${o}px`),
          (t.borderBottomWidth = `${s}px`),
          (t.borderLeftWidth = `${c}px`),
          (t.borderRightWidth = `${l}px`))));
}
function as(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...hb,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), /* @__PURE__ */ D(N.div, { style: n }))
    : (is(e, n, !1), /* @__PURE__ */ D(N.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function os(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function ss(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !bb.isImageObject(t)) return;
  let r = null;
  if (((r = L(n) ? { alt: ``, src: n } : Oy.get(t, null)), bb.isImageObject(r))) return os(r, e);
}
function cs(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function ls(e) {
  return typeof e != `string` && typeof e != `number`;
}
function us(e) {
  return e != null && typeof e != `boolean` && !cs(e);
}
function K(e) {
  return Number.isFinite(e);
}
function ds(e) {
  return (Math.PI / 180) * e;
}
function fs(e) {
  return Ke(e) ? !1 : e === 2 || e === 5;
}
function ps(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function ms(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return hs(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function hs(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      V(e, `unknown constraint key`);
  }
}
function gs(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(ms(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(ms(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function _s(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(ms(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(ms(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function vs(e, t, n, r, i) {
  let a = _s(K(e) ? e : Tb, n, r, i),
    o = gs(K(t) ? t : Eb, n, r, i);
  return (
    K(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (K(n.left) && K(n.right)
        ? (o = a / n.aspectRatio)
        : (K(n.top) && K(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function ys(e, t) {
  return !K(e) || !K(t) ? null : e + t;
}
function bs(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function xs(e) {
  return !e._constraints || bs(e) ? !1 : e._constraints.enabled;
}
function Ss(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    K(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    K(n) && K(r) ? { width: n, height: r } : null
  );
}
function Cs(e) {
  let t = Ss(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return K(n) && K(r) ? { x: n, y: r, ...t } : null;
}
function ws(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!xs(e) || r) return Cs(e);
  let i = Ts(e),
    a = Es(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return wb.toRect(i, o, null, n, null);
}
function Ts(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Cb.quickfix({
      left: K(t),
      right: K(n),
      top: K(r),
      bottom: K(i),
      widthType: ps(c),
      heightType: ps(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Es(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Ds() {
  return p.useContext(Db).parentSize;
}
function Os(e) {
  return typeof e == `object`;
}
function ks(e) {
  return Os(e) ? e.width : e;
}
function As(e) {
  return Os(e) ? e.height : e;
}
function js(e, t) {
  return /* @__PURE__ */ D(Ob, { parentSize: t, children: e });
}
function Ms(e) {
  return ws(e, Ds(), !0);
}
function Ns({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Ps(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Fs(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? N[e] : N.div;
}
function Is() {
  return !1;
}
function Ls() {
  return tt() ? U.preview : U.current();
}
function Rs() {
  return (Ib ??= import("./chunk.B3RYC8bk.W3Anb3Ni.mjs").then((e) => {
    if (((Lb = e.getCombinedCSSRules), br())) for (let e of Lb()) nt(e, void 0);
    return e;
  }));
}
function zs() {
  return Lb ? Lb() : (br() && Rs(), []);
}
function Bs(e) {
  return Nb(e, zs, `framer-lib-combinedCSSRules`);
}
function Vs(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function Hs(e, t) {
  let n = {};
  return (
    U.current() === U.canvas &&
      Vs(n, Rb ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function Us(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Ws(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = p.Children.map(t, (e) =>
        p.isValidElement(e) ? p.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function Gs(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function Ks(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: c, enabled: d } = l(eb);
  return u(() => {
    if (!d) return e.layoutId;
    let l = t || e.layoutId;
    if (!l && (s || !i || o)) return;
    let u = l || c({ id: i, name: r, duplicatedFrom: a });
    if (u) return n ? `${u}-${n}` : u;
  }, [d]);
}
function qs() {
  let [e, t] = p.useState(0);
  return p.useCallback(() => t((e) => e + 1), []);
}
function Js(e) {
  let t = qs();
  _(() => {
    let n = e?.current;
    if (n)
      return (
        Vb?.observeElementWithCallback(e.current, t),
        () => {
          Vb?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Ys(e) {
  return [
    ...(e.firstElementChild &&
    e.firstElementChild.hasAttribute(`data-framer-size-compatibility-wrapper`)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Xs)
    .map(Zs);
}
function Xs(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Zs(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Xs);
  return t ? Zs(t) : e;
}
function Qs(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = l(zb),
    u = U.current() === U.canvas;
  $v(() => {
    !u ||
      c ||
      s ||
      (t.current && i && a && o && pb.queueMeasureRequest(Us(i), t.current, n(t.current)));
  });
}
function $s(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && pb.queueMeasureRequest(Us(t.id), t, Ys(t));
}
function ec(e) {
  e.willChange = `transform`;
  let t = U.current() === U.canvas;
  Wb && t && (e.translateZ = Hb);
}
function tc(e) {
  ((e.willChange = `transform`), nc(e, !0));
}
function nc(e, t) {
  let n = U.current() === U.canvas;
  if (!Wb || !n) return;
  let r = (L(e.transform) && e.transform) || ``;
  t ? r.includes(Ub) || (e.transform = r + Ub) : (e.transform = r.replace(Ub, ``));
}
function rc(e, t, n, r = !0) {
  if (!e) return;
  let i = ob(e.style),
    a = n || i[t],
    o = () => {
      ic(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function ic(e) {
  return L(e) || R(e) || qe(e);
}
function ac(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function oc(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  ac(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function sc(e, t) {
  let n = [e, t];
  return Jb.test(e) ? e : oc(1e3, Yb, n, () => qb.multiplyAlpha(e, t));
}
function cc(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: sc(e.value, t) }))
  );
}
function lc(e, t) {
  let n = 0;
  return (
    cc(e, t).forEach((e) => {
      n ^= Kb(e.value) ^ e.position;
    }),
    n
  );
}
function uc(e) {
  return e && Xb.every((t) => t in e);
}
function dc(e) {
  return e && Zb.every((t) => t in e);
}
function fc({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || Uy(t)
      ? (n.backgroundColor = t)
      : Y.isColorObject(e) && (n.backgroundColor = e.initialValue || Y.toRgbString(e))
    : e &&
      ((e = Oy.get(e, null)),
      typeof e == `string` || Uy(e)
        ? (n.background = e)
        : $b.isLinearGradient(e)
          ? (n.background = $b.toCSS(e))
          : tx.isRadialGradient(e)
            ? (n.background = tx.toCSS(e))
            : Y.isColorObject(e) && (n.backgroundColor = e.initialValue || Y.toRgbString(e)));
}
function q(e, t, n, r) {
  (r === void 0 && (r = t), e[t] !== void 0 && (n[r] = e[t]));
}
function pc(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function mc(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function hc(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    xe(n)
      ? (t.cornerShape = re(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    q(e, `size`, t),
    q(e, `width`, t),
    q(e, `height`, t),
    q(e, `minWidth`, t),
    q(e, `minHeight`, t),
    q(e, `top`, t),
    q(e, `right`, t),
    q(e, `bottom`, t),
    q(e, `left`, t),
    q(e, `position`, t),
    q(e, `overflow`, t),
    q(e, `opacity`, t),
    e._border?.borderWidth || q(e, `border`, t),
    q(e, `borderRadius`, t),
    q(e, `radius`, t, `borderRadius`),
    q(e, `color`, t),
    q(e, `shadow`, t, `boxShadow`),
    q(e, `x`, t),
    q(e, `y`, t),
    q(e, `z`, t),
    q(e, `rotate`, t),
    q(e, `rotateX`, t),
    q(e, `rotateY`, t),
    q(e, `rotateZ`, t),
    q(e, `scale`, t),
    q(e, `scaleX`, t),
    q(e, `scaleY`, t),
    q(e, `skew`, t),
    q(e, `skewX`, t),
    q(e, `skewY`, t),
    q(e, `originX`, t),
    q(e, `originY`, t),
    q(e, `originZ`, t),
    fc(e, t),
    t
  );
}
function gc(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof ob(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function _c(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (rx.has(t)) return `pointer`;
}
function vc(e) {
  return yc(e) ? !0 : e.style ? !!yc(e.style) : !1;
}
function yc(e) {
  return ix in e && (e[ix] === `scroll` || e[ix] === `auto`);
}
function bc(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = ge(e.minWidth),
    h = ge(e.minHeight),
    g = ge(e.maxWidth),
    _ = ge(e.maxHeight);
  return {
    top: ge(n),
    left: ge(t),
    bottom: ge(r),
    right: ge(i),
    width: ge(a),
    height: ge(o),
    size: ge(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function xc(e) {
  let t = l(zb),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = bc(e),
    s = Ms(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: U.current() === U.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !gc(e) && !e.__fromCanvasComponent && !vc(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (c.pointerEvents = `none`);
  let f = p.Children.count(e.children) > 0 &&
      p.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    m = hc(e);
  (a === void 0 && !i && (pc(m) || (c.width = ax.width), mc(m) || (c.height = ax.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let h = {};
  (xs(o) &&
    s &&
    !Ns(e) &&
    (h = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, f, r, m, h, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    Gb.applyWillChange(e, c, !0));
  let g = c;
  c.transform || (g = { x: 0, y: 0, ...c });
  let _ = Vo();
  return (
    e.positionSticky
      ? (!_ || pb.isOnPageCanvas || t) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = pb.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, s]
  );
}
function Sc(e) {
  let t = {};
  for (let n in e)
    (Re(n) || cb(n)) && !ox.has(n)
      ? (t[n] = ob(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof ob(e)[n] != `boolean` && !e.transition && (t.transition = ob(e)[n]));
  return t;
}
function Cc(e) {
  return `data-framer-name` in e;
}
function wc(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Tc(e) {
  return /* @__PURE__ */ D(N.div, { layoutId: lx, style: fx, children: e.children });
}
function Ec(e, t) {
  He(e) ? e(t) : Dc(e) && (e.current = t);
}
function Dc(e) {
  return z(e) && `current` in e;
}
function Oc() {
  let e = Ro(() => /* @__PURE__ */ new Set()),
    t = Ro(() => /* @__PURE__ */ new Map());
  return Ro(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      i !== n.current &&
        ((n.current = i),
        r && r(i),
        t.forEach((e, t) => {
          e ? e() : t(null);
        }),
        i === null
          ? (t.clear(), e.clear())
          : e.forEach((e) => {
              let n = e(i);
              t.set(e, n);
            }));
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function kc(e) {
  let t = M(null),
    n = Oc();
  return Ro(() => (Dc(e) ? n(e) : He(e) ? n(t, e) : n(t)));
}
function Ac(e, t, n) {
  let r = M(),
    i = M();
  (Ui(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function jc(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new px({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Mc(e, t, n) {
  let r = Ro(() => `${n.rootMargin}`),
    i = l(mx),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Ac(
    e,
    (e) => {
      if (a && e !== null) return jc(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function Nc(e, t, n) {
  let r = p.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n,
    c = p.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Fc(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
        } else if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
        }
      },
      [a, o?.y, t]
    );
  hx(e, c, { threshold: gx, rootMargin: s, enabled: i ?? !0 });
}
function Pc(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, H.innerHeight);
}
function Fc({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Pc(t, e) >= r;
}
function Ic() {
  return l(bx);
}
function Lc() {
  return /* @__PURE__ */ new Map();
}
function Rc() {
  return Ro(Lc);
}
function zc(e, t = []) {
  let { register: n, deregister: r } = l(xx);
  _(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function Bc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Vc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (K(t.originX) && (r.originX = t.originX),
      K(t.originY) && (r.originY = t.originY),
      K(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (K(n.originX) && (r.originX = n.originX),
      K(n.originY) && (r.originY = n.originY),
      K(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Hc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Uc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return Dx.PushLeft;
    case `left`:
      return Dx.PushRight;
    case `bottom`:
      return Dx.PushUp;
    case `top`:
      return Dx.PushDown;
  }
}
function Wc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Dx.OverlayLeft;
    case `left`:
      return Dx.OverlayRight;
    case `bottom`:
      return Dx.OverlayUp;
    case `top`:
      return Dx.OverlayDown;
  }
}
function Gc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Dx.FlipLeft;
    case `left`:
      return Dx.FlipRight;
    case `bottom`:
      return Dx.FlipUp;
    case `top`:
      return Dx.FlipDown;
  }
}
function Kc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Jc(e, t.transition, t.component);
    case `removeOverlay`:
      return Yc(e);
    case `add`:
      return Xc(e, t.key, t.transition, t.component);
    case `remove`:
      return $c(e);
    case `update`:
      return qc(e, t.key, t.component);
    case `back`:
      return Zc(e);
    case `forward`:
      return Qc(e);
    default:
      return;
  }
}
function qc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Jc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function Yc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function Xc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? il(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = nl(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = el(e, t, c),
    p = rl(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function Zc(e) {
  let t = { ...e.containers },
    n = $c(e);
  if (n) return ((n.containers = t), n);
}
function Qc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Xc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function $c(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (B(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = tl(e, r, n),
    u = rl(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function el(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function tl(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function nl(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function rl(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = al(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function il(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).some((t) => t.key === e)
        ? !0
        : !r.slice(0, t - 1).some((t) => t.key === e);
}
function al(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (e === n || e === r) {
    if (e === n && n > r) {
      let t = i[e];
      return ol(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return ol(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return ol(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return ol(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function ol(e, t, n) {
  let r = {},
    i = {};
  return (
    kx.forEach((e) => {
      ((r[e] = wx[e]), (i[e] = { ...n, from: wx[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${ob(wx)[a]}%` : ob(wx)[a];
        ((ob(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function sl(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function cl({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function ll({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : Nx;
}
function ul({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function dl(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function fl(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
  if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  }
  {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function pl(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function ml(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function hl(e, t) {
  let { current: n, history: r } = t;
  if (e !== n) {
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
  }
}
function gl(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return Nx;
}
function _l(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function vl(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function yl(e) {
  return p.Children.map(e.component, (t) => {
    if (!us(t) || !ls(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? z(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      p.cloneElement(t, n)
    );
  });
}
function bl(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function xl(e, t) {
  let n = ie(),
    r = ce();
  return /* @__PURE__ */ D(Mx, {
    ref: (e) => {
      t && (typeof t == `function` ? t(e) : (t.current = e));
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Sl(e) {
  return z(e) && Ix in e;
}
function Cl(e) {
  return z(e) || He(e);
}
function wl(e) {
  return !!e && Lx in e && e[Lx] === !0;
}
function Tl(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
      case `dimension`:
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `sharedtype`: {
        if (!(`definition` in e) || !Sl(e.definition)) return;
        let { definition: t } = e;
        switch (t.kind) {
          case `enum`:
            return L(e.defaultValue) && t.options.includes(e.defaultValue)
              ? e.defaultValue
              : void 0;
          default:
            t.kind;
            return;
        }
      }
      case `boolean`:
        return Ue(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return Ke(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return We(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return We(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = z(e.defaultValue) ? e.defaultValue : {};
        return (z(e.controls) && El(t, e.controls), t);
      }
      case `array`:
        return We(e.defaultValue) ? e.defaultValue : void 0;
      case `motionvalue`:
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function El(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Ke(i) || wl(r)) continue;
    let a = Tl(r);
    Ke(a) || (e[n] = a);
  }
}
function Dl(e) {
  if (z(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Ol(e, t) {
  Cl(e) && El(Dl(e), t);
}
function kl(e, t) {
  Object.assign(e, { [Rx]: t });
}
function Al(e, t, n) {
  (Object.assign(e, { propertyControls: t }), Ol(e, t), n !== void 0 && kl(e, n));
}
function jl(e) {
  return e.propertyControls;
}
function Ml(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Nl(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Pl(e, t) {
  let n = [];
  (K(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    K(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    K(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    K(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    K(e.invert) && n.push(`invert(${e.invert / 100})`),
    K(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    K(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    K(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Ml(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Fl(e, t) {
  K(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Il(e, t) {
  (Fl(e, t), Pl(e, t));
}
function Ll(e, t) {
  let n,
    r = (...r) => {
      (H.clearTimeout(n), (n = H.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      H.clearTimeout(n);
    }),
    r
  );
}
function Rl(...e) {
  return e.filter(Boolean).join(` `);
}
function zl(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = Bl(i);
    a && t.has(a) ? (n[a] = e[i]) : (r[i] = e[i]);
  }
  return [n, r];
}
function Bl(e) {
  if (e.startsWith(Jx)) return e.substr(Yx);
}
function Vl(e, t, n) {
  let r = i.map(e, (e) => (E(e) ? c(e, t) : e));
  return n ? r : /* @__PURE__ */ D(v, { children: r });
}
function Hl(e) {
  let t = Ro(() => Ul(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Ul(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Wl(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Wl(t)));
    },
    r = !1;
  function a(a, o) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      i.count(a) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      i.map(a, (e) => {
        if (E(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = He(o) ? o(e.props) : o;
          return c(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return /* @__PURE__ */ D(v, { children: a(e, t) });
  };
  return (
    (o.cloneAsArray = a),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: o,
    }
  );
}
function Wl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Ec(n, e), Ec(t, e));
  };
}
function Gl(e, t, n, r, i, a, o, s) {
  let c = p.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !p.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !Yl(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = Jl([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = Jl([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let m = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = /* @__PURE__ */ D(
        Zx.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = ql(e, a, r);
    (f.length
      ? (B(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = /* @__PURE__ */ D(
          `div`,
          { className: `${Qx} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : B(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(d));
  }
  return (
    B(!s || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? m : [...m, /* @__PURE__ */ D(`div`, { className: $x }, `property-overrides-separator`)]
  );
}
function Kl(e) {
  return e.split(`-`)[2];
}
function ql(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${Kl(a)}`);
  }
  return r;
}
function Jl(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Yl(e, t) {
  for (let n of Object.keys(t)) if (!gn(e[n], t[n], !0)) return !0;
  return !1;
}
function Xl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Zl(e) {
  return p.forwardRef(({ optimized: t, ...n }, r) => {
    let i = p.useContext(Xx),
      a = p.useContext(Zx)?.variants,
      o = n[sS];
    o && !br() && aS.setAll(o, a, t ? n : null, i);
    let s = lS(n);
    return /* @__PURE__ */ D(e, { ref: r, ...n, ...s });
  });
}
function Ql(e) {
  return L(e) || Array.isArray(e);
}
function $l(e) {
  return e in fS;
}
function eu(e, t) {
  let n = Ro(() => ({ values: dS(t ? e : void 0) }));
  return (
    p.useEffect(() => {
      if (!t)
        for (let e of uS) {
          let t = fS[e];
          Ke(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function tu(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: n,
    loopTransition: r,
    loopRepeatType: i,
    loop: a,
    loopPauseOffscreen: s,
  },
  c
) {
  let l = Be(),
    d = Ro(dS),
    f = M(!1),
    p = gS(),
    m = M(null),
    h = t(async () => {
      if (!a) return;
      let e = r || void 0,
        t = f.current && i === `mirror`,
        n = t ? fS : a,
        o = t ? a : fS;
      return (
        (f.current = !f.current),
        (m.current = Promise.all(
          uS.map((t) => {
            if (!(l && t !== `opacity`))
              return (
                d[t].jump(o[t] ?? fS[t]),
                new Promise((r) => {
                  let i = { ...e, onComplete: () => r() },
                    a = n[t] ?? o[t];
                  typeof a == `number` && Me(d[t], a, i);
                })
              );
          })
        )),
        m.current
      );
    }, [a, i, r, l]),
    [g, v] = j(!1),
    y = M(!1),
    b = t(async () => {
      e && y.current && (await h(), await p(n ?? 0), b());
    }, [h, p, e, n]),
    x = t(() => {
      y.current || ((y.current = !0), o(() => v(!0)), b());
    }, [b]),
    S = t((e = !0) => {
      (uS.forEach((e) => {
        d[e].stop();
      }),
        uS.forEach((e) => {
          d[e].set(fS[e]);
        }),
        (f.current = !1),
        e && ((y.current = !1), o(() => v(!1))));
    }, []),
    C = e && a,
    w = t(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (_(() => {
    if (C)
      return (
        document.addEventListener(`visibilitychange`, w),
        () => {
          document.removeEventListener(`visibilitychange`, w);
        }
      );
  }, [C, w]),
    _(() => {
      (C && s) || (C ? x() : S());
    }, [x, S, s, C]),
    _(() => () => S(), [S]));
  let T = M(!1),
    E = t(async () => {
      m.current && (await m.current, !T.current && S());
    }, [S]),
    D = t(
      (e) => {
        e.isIntersecting ? ((T.current = !0), x()) : ((T.current = !1), E());
      },
      [x, E]
    );
  hx(c, D, { enabled: C && s });
  let O = g || !s;
  return u(() => ({ values: d, style: C && O ? pS : mS }), [C, O]);
}
function nu(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function ru(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = p.useRef(null),
    c = Be(),
    u = p.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : nu(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: d } = P(),
    f = _e(d, u),
    m = de(a && s.current === null ? `hidden` : n),
    h = de(0),
    g = l(mx);
  return (
    Ac(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = jc(g, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            I.update(() => {
              (f.set(u(d.get())), a && m.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Cn(() => {
      o && f.set(0);
    }),
    { values: { y: c || !o ? h : f }, style: o ? { ...pS, visibility: m } : mS }
  );
}
function iu(e) {
  return typeof e == `object` && !!e;
}
function au(e) {
  if (iu(e)) return e?.transition;
}
function ou(e, t, n, r, i, a) {
  let o = au(e);
  return Promise.all(
    uS.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = iu(e) ? (e?.[s] ?? fS[s]) : fS[s];
          if ((xe(u) && (u = u.get()), !R(u))) return c();
          let d = ve.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (L(i) && !l?.hasAnimated && H.MotionHandoffAnimation) {
            let e = H.MotionHandoffAnimation(i, s, I);
            e && (f = e);
          } else L(i) && H.MotionCancelOptimisedAnimation?.(i, s, I);
          a ? l.set(u) : Me(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function su(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  l
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = he(),
    g = M({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = Ro(() => {
      let e = d ?? c;
      if (!z(e)) return { values: dS() };
      let t = {};
      for (let n in e) {
        let r = z(e) ? e[n] : void 0;
        R(r) && (t[n] = r);
      }
      return { values: dS(t) };
    });
  Ac(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = ve.get(e);
      if (n) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!$l(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, R(t) ? t : fS[e]);
        }
      }
    },
    [f]
  );
  let v = Be();
  Ac(o, (e) => {
    if (!s) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            ou(f, _, v, o, l).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              ou(p, _, v, o, l)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    !gn(f, t) &&
      f &&
      (Object.assign(g.current, { lastAnimate: f }),
      ou(f, _, v, o, l, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = s && f;
  return u(() => ({ values: _.values, style: y ? pS : mS }), [y]);
}
function cu(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function lu(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = cu(o.current, document.documentElement) - yS - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function uu(e, t = 0) {
  return e < t ? `up` : `down`;
}
function du(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Sn();
  p.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return se((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = uu(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < bS) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function fu(e, t, n) {
  let r = lu(e, t),
    i = [...SS],
    a = r[0];
  if (!R(a)) return CS;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!R(e)) return CS;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function pu(e) {
  return {
    x: e?.x ?? fS.x,
    y: e?.y ?? fS.y,
    scale: e?.scale ?? fS.scale,
    opacity: e?.opacity ?? fS.opacity,
    transformPerspective: e?.transformPerspective ?? fS.transformPerspective,
    rotate: e?.rotate ?? fS.rotate,
    rotateX: e?.rotateX ?? fS.rotateX,
    rotateY: e?.rotateY ?? fS.rotateY,
    skewX: e?.skewX ?? fS.skewX,
    skewY: e?.skewY ?? fS.skewY,
    transition: e?.transition ?? void 0,
  };
}
function mu({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return p.useMemo(
    () => ({
      initial: r ?? pu({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? pu({ opacity: t }),
      exit: i ?? pu(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function hu(e, t) {
  let n = Be(),
    r = mu(e),
    i = e.styleAppearEffectEnabled,
    a = eu(i ? r.initial : r.animate, i),
    o = p.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Sn(),
    c = p.useRef(),
    l = p.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = ve.get(t.current);
      c.current = Promise.all(
        uS.map((e) => {
          s && a.values[e].set(r.initial[e] ?? fS[e]);
          let t = o[e] ?? fS[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (R(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && Me(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && o.current.lastAppearState === !0;
  Nc(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      t
        ? (o.current.scheduledAppearState = e)
        : ((o.current.scheduledAppearState = void 0),
          (o.current.lastAppearState = e),
          n !== e && l(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    p.useEffect(() => {
      if (!f) return;
      let t = { initial: !0 },
        n = `initial`;
      return se((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = fu(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = De(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = ob(r)[u];
        d && l(d);
      });
    }, [s, f]),
    du(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Cn(() => {
      if (i && (e.targets || e.scrollDirection))
        for (let e of uS) a.values[e].set(r.initial?.[e] ?? fS[e]);
    }),
    u(() => ({ values: a.values, style: i ? pS : mS }), [i])
  );
}
function gu(e, t) {
  let n = p.useRef({});
  p.useEffect(() => {
    if (t !== void 0)
      for (let r of k_(e)) {
        let i = e[r],
          a,
          o;
        function s() {
          let e = n.current[r];
          (e && e.stop(),
            (n.current[r] = ke({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: a,
            })));
        }
        i.attach((e, t) => ((o = e), (a = t), I.postRender(s), i.get()));
      }
  }, [JSON.stringify(t)]);
}
function _u(e, t) {
  let n = ES();
  return {
    inputRange: lu(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of uS) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function vu(e) {
  let t = ES();
  for (let { target: n } of e) for (let e of uS) t[e]?.push(n[e]);
  return t;
}
function yu(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = Be(),
    s = eu(TS(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = Sn();
  return (
    d(() => {
      if (!c && l)
        return se((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = _u(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of uS)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(De(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    Ac(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = vu(n);
        return se(
          (e, { y: t }) => {
            for (let e of uS)
              (o && e !== `opacity`) ||
                (DS.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(De(t.progress, DS, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    gu(s.values, r),
    Cn(() => {
      if (c) return;
      let e = TS(n, o);
      for (let t of uS) s.values[t].set(e?.[t] ?? fS[t]);
    }),
    p.useMemo(() => ({ values: s.values, style: t ? pS : mS }), [t])
  );
}
function bu(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function xu(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Bl(n);
    if (r) {
      for (let i of kS)
        if (OS[i]?.has(r)) {
          t[i][r] = ob(e)[n];
          break;
        }
    } else t.forwardedProps[n] = ob(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = bu(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = bu(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Su(e) {
  return z(e) && MS in e;
}
function Cu(e, t) {
  if (!e || !z(e)) return t;
  for (let n in e) {
    let r = e[n];
    xe(r) && $l(n) && R(r.get()) && t[n].push(r);
  }
}
function wu(e) {
  return L(e) || Array.isArray(e);
}
function Tu({ componentIdentifier: e, children: t }) {
  return t(l(PS)[e] ?? {});
}
function Eu() {
  return p.useContext(FS);
}
function Du(e) {
  let t = Ks(e),
    { layoutIdKey: n, duplicatedFrom: r, ...i } = e;
  return { layoutId: t, ...i };
}
function Ou(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function ku() {
  if (h === void 0 || VS)
    return /* @__PURE__ */ D(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw US;
}
function Au({ children: e }) {
  return l(GS)
    ? /* @__PURE__ */ D(v, { children: e })
    : /* @__PURE__ */ D(S, { fallback: WS, children: e });
}
function ju() {
  return /* @__PURE__ */ D(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Mu(e, t) {
  if (!ht || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  $n(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Nu(...e) {
  console.error(...e);
}
function Pu() {
  return U.current() !== U.canvas;
}
function Fu({ getErrorMessage: e, fallback: t, children: n }) {
  return Pu()
    ? /* @__PURE__ */ D(Iu, {
        fallback: t,
        children: /* @__PURE__ */ D(qS, { fallback: t, getErrorMessage: e, children: n }),
      })
    : n;
}
function Iu({ children: e, fallback: t = KS }) {
  return h === void 0
    ? /* @__PURE__ */ D(S, { fallback: t, children: e })
    : /* @__PURE__ */ D(Au, { children: e });
}
function Lu() {
  return /* @__PURE__ */ D(`div`, {
    style: {
      padding: `12px 16px`,
      borderWidth: 1,
      borderRadius: 6,
      borderStyle: `solid`,
      borderColor: `rgba(149, 149, 149, 0.15)`,
      backgroundColor: `rgba(149, 149, 149, 0.1)`,
      fontSize: 12,
      color: `#a5a5a5`,
    },
    children: `Code component disabled`,
  });
}
function Ru() {
  return p.useContext(YS);
}
function zu() {
  let e = Ru();
  return p.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function Bu({ children: e, scopeId: t, nodeId: n }) {
  let r = Ru(),
    i = p.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return /* @__PURE__ */ D(YS.Provider, { value: i, children: e });
}
function Vu(e, t) {
  return `${XS}${e}:${t}`;
}
function Hu(e, t) {
  return Wu(`component`, e, t);
}
function Uu(e, t) {
  return Wu(`override`, e, t);
}
function Wu(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor → open Quick Actions (press Cmd+K or Ctrl+K) → paste this: ${Vu(t, n)} → click “Show Layer”.`;
}
function Gu(e, t, n, r, i, a) {
  let o = qu(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Ku(e, t, n, r) {
  return qu(e, t, n, r);
}
function qu(e, t, n, r) {
  return !!(Ke(n) || (n === 1 && r && e === t));
}
function Ju(e, t, n, r, i, a) {
  let o = Ru();
  if (Ke(t) || Ke(n)) return /* @__PURE__ */ D(JS, { children: e });
  let { disableCustomCode: s } = zS();
  return s && r
    ? /* @__PURE__ */ D(Lu, {})
    : (Gu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = /* @__PURE__ */ D(Fu, {
          getErrorMessage: Hu.bind(null, t, n),
          fallback: null,
          children: e,
        })),
      i && (e = /* @__PURE__ */ D(Bu, { scopeId: t, nodeId: n, children: e })),
      e);
}
function Yu() {
  if ($S !== void 0 || h === void 0) return;
  let e = H.matchMedia(`(any-hover: hover)`);
  (($S = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== $S) {
        $S = t;
        for (let e of eC) e();
      }
    }));
}
function Xu() {
  return (Yu(), Zu());
}
function Zu() {
  return $S ?? !1;
}
function Qu(e) {
  return (
    eC.add(e),
    Yu(),
    () => {
      eC.delete(e);
    }
  );
}
function $u(e = !1) {
  let [t, n] = j(e);
  return (
    $v(function () {
      function e(e = !0) {
        let t = Zu();
        e ? o(() => n(t)) : n(t);
      }
      let t = Qu(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function ed(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function td(e) {
  return !(!e || e.placement || e.alignment);
}
function nd(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      V(e);
  }
}
function rd(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${nd(t)}, -100%`;
    case `right`:
      return `0%, ${nd(t)}`;
    case `bottom`:
      return `${nd(t)}, 0%`;
    case `left`:
      return `-100%, ${nd(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function id(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(`data-framer-portal-id`)) {
      let e = n.getAttribute(sC);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function ad(e) {
  let { registerCursors: t } = l(tC),
    n = Ro(() => e),
    r = m();
  d(() => t(n, r), [t, r]);
}
function od(e) {
  return !!(e && typeof e == `object` && lC in e);
}
function sd(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function cd() {
  return U.current() === U.canvas;
}
function ld(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function ud(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function dd(e, t, n, r) {
  if (L(e)) {
    let i = ld(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = Ea(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function fd(e) {
  return L(e) && e.startsWith(`data:${gC}`);
}
function pd(e) {
  if (fd(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(17),
        r = t.searchParams,
        i = r.has(fC) ? r.get(fC) : void 0,
        a,
        o = r.get(pC),
        s = r.get(mC),
        c = r.get(hC);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function md(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = pd(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function hd(e) {
  if (!fd(e)) return e;
  let t = pd(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: gd(i) };
}
function gd(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function _d(e, n, r, a, o, s) {
  let c = l(_C),
    d = zu(),
    f = u(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: d }), [n, r, d]),
    p = yn(),
    m = xn(),
    { locales: h } = Hr(),
    g = u(() => {
      let e = od(a) ? a : hd(a);
      if (e) return dd(e, p, m, h);
    }, [m, a, p, h]),
    _ = !!(!cd() && c?.nodeId && f.nodeId),
    v = t(
      (e) => {
        o.href &&
          (e.preventDefault(),
          e.stopPropagation(),
          Er(e) ? bd(o.href, ``, `_blank`) : g ? o.navigate?.() : bd(o.href, o.rel, o.target));
      },
      [o, g]
    ),
    b = t(
      (e) => {
        o.href && (e.preventDefault(), e.stopPropagation(), bd(o.href, ``, `_blank`));
      },
      [o]
    ),
    x = t(
      (e) => {
        o.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          g ? o.navigate?.() : bd(o.href, o.rel, o.target));
      },
      [o, g]
    );
  Ac(
    s,
    (e) => {
      e !== null && _ && (e.dataset.hydrated = `true`);
    },
    [_]
  );
  let S = e;
  return (
    _ &&
      (i.forEach(e, (e) => {
        yd(e) &&
          (B(
            vd(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          B(
            vd(f),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          dC.collectNestedLink(c, f));
      }),
      (S = i.map(e, (e) => {
        if (!yd(e)) return e;
        let t = xd(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: v,
            onAuxClick: b,
            onKeyDown: x,
            as: r.as && xd(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return y(t, { ...i, ref: a }, n);
      }))),
    /* @__PURE__ */ D(_C.Provider, { value: f, children: S })
  );
}
function vd(e) {
  return !Ke(e?.nodeId);
}
function yd(e) {
  return E(e) && (xd(e.type) !== e.type || xd(e.props.as) !== e.props.as);
}
function bd(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function xd(e) {
  return e === `a` ? `span` : ze(e) && Ee(e) === `a` ? N.span : e;
}
function Sd({ component: e, props: t }) {
  let n = l(Xx),
    r = y(e, t);
  if ((`variant` in t && t.variant != null) || !n) return r;
  let { activeVariantId: i, humanReadableVariantMap: a } = n;
  if (!i || !a) return r;
  let o = {};
  for (let [e, t] of Object.entries(a)) o[t] = { variant: e };
  return /* @__PURE__ */ D(tS, { overrides: o, breakpoint: i, children: r });
}
function Cd(e) {
  yC = e;
}
function wd() {
  return yC;
}
function Td(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Td(e.parentElement, t)
      : null;
}
function Ed({ children: e }) {
  return /* @__PURE__ */ D(Au, { children: e });
}
function Dd(e) {
  return O(function (t, n) {
    return /* @__PURE__ */ D(Ed, { children: /* @__PURE__ */ D(e, { ...t, ref: n }) });
  });
}
function Od(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Ad(e, t, o, s, a, c, l, i, r);
}
function kd(e, t, n, r) {
  if (e.routes && e.getRoute && ld(t))
    try {
      let [i, a] = t.split(`#`, 2);
      B(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      B(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = Ea(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function Ad(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = ra(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function jd() {
  let e = l(xC),
    t = xn()?.pathVariables;
  return e || t;
}
function Md(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(bC)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Nd() {
  return !!Fa(`ss-only-routes`);
}
function Pd(e) {
  if (h === void 0) return;
  let t = h.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function Fd(e) {
  return Pa(`rewrite`, e)?.description === `external`;
}
function Id() {
  if (!zS().checkServerSideRouter) return !1;
  if (TC === void 0) {
    let e = Nd();
    ((EC = !e && vr() && xr() < 16.4), (TC = e || EC));
  }
  return TC;
}
function Ld(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: Fd(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === wd() ? `client` : `server` };
}
async function Rd(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (EC &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((EC = !1), Pa(`ss-only-routes`, t.headers.get(`server-timing`)) || (TC = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return Ld(t, e);
}
function zd(e, t) {
  SC.has(e) && SC.set(e, t);
}
async function Bd(e) {
  await dr(CC);
  try {
    zd(e, await Rd(e));
  } catch {
    SC.delete(e);
  }
}
async function Vd(e) {
  try {
    let t = await Rd(e);
    return (zd(e, t), t);
  } catch {
    return (Bd(e), { decision: `server` });
  }
}
function Hd(e) {
  if (!Id()) return;
  let t = Pd(e);
  if (!t || t.origin !== h.location.origin) return;
  let n = t.href;
  SC.has(n) || SC.set(n, Vd(n));
}
function Ud(e) {
  let t = Pd(e);
  if (!t) return;
  let n = SC.get(t.href);
  return n && !Qe(n) ? n : void 0;
}
async function Wd(e) {
  let t = Pd(e);
  if (!t) return;
  let n = SC.get(t.href);
  if (n) return Qe(n) ? Promise.race([n, dr(wC).then(() => void 0)]) : n;
}
function Gd() {
  let e = n.connection || n.mozConnection || n.webkitConnection || {},
    t = n.deviceMemory && n.deviceMemory < kC,
    r,
    i,
    a;
  function o() {
    ((r = e.effectiveType || ``),
      (i = e.saveData || r.includes(`2g`)),
      (a = r === `3g` || t ? AC : jC));
  }
  (e.addEventListener?.(`change`, o), o());
  let s = new IntersectionObserver(u, { threshold: OC }),
    c = 0;
  async function l(e, t) {
    if (i) return;
    Hd(e.navigationUrl);
    let { id: n, preload: r } = e,
      o = PC.get(n);
    if (!o?.size || NC.has(n)) return;
    if (c >= a) {
      setTimeout(() => l(e, t), DC);
      return;
    }
    (++c, NC.add(n));
    let u = r()?.catch(() => {});
    (s.unobserve(t), MC.delete(t));
    for (let e of o) (s.unobserve(e), MC.delete(e));
    (o.clear(), PC.delete(n), await u, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = MC.get(e);
      if (!n || NC.has(n.id)) {
        (s.unobserve(e), MC.delete(e));
        continue;
      }
      let r = n.id,
        i = PC.get(r),
        a = PC.get(r)?.size ?? 0;
      t.isIntersecting
        ? (i ? i.add(e) : PC.set(r, /* @__PURE__ */ new Set([e])), setTimeout(() => l(n, e), DC))
        : (i && i.delete(e), a <= 1 && PC.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!NC.has(n))
      return (
        MC.set(e, { id: n, preload: t, navigationUrl: r }),
        s.observe(e),
        () => {
          (MC.delete(e), s.unobserve(e));
        }
      );
  };
}
function Kd(e, t) {
  let n = ld(e),
    r = {
      href: e === `` || ud(e, n) ? e : `https://${e}`,
      target: qd(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Pr(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function qd(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Jd(e, t) {
  console.warn(
    et(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Yd(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Jd(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return Qe(i) ? i.catch(Jd) : i;
  } catch (e) {
    Jd(e);
  }
}
async function Xd(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      B(a, `unresolvedSlug should be defined`);
      let o = Yd(a, r, n),
        s = Qe(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function Zd(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Yd(o, r, n);
      Qe(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Qd() {
  let e = ur();
  return t((t, n, r, i = []) => Zd(t, n, r, e, i), [e]);
}
function $d({ nodeId: e, clickTrackingId: n, router: r, href: i, activeLocale: a }) {
  let o = ur();
  return t(
    async (t) => {
      if (!r.pageviewEventData?.current) return;
      let s =
          r.pageviewEventData.current instanceof Promise
            ? await r.pageviewEventData.current
            : r.pageviewEventData.current,
        c = od(i) ? i : hd(i);
      if (!od(c))
        return $n(
          `published_site_click`,
          {
            ...s,
            href: t ? ef(t) : null,
            nodeId: e ?? null,
            trackingId: n || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = r?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = o?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (L(t)) {
          let n = e.getRecordIdBySlug(t, a || void 0);
          f = (Qe(n) ? await n : n) ?? null;
        }
      }
      return $n(
        `published_site_click`,
        {
          ...s,
          href: t ? ef(t) : null,
          nodeId: e ?? null,
          trackingId: n ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, n, r, i, a, o]
  );
}
function ef(e) {
  try {
    let t = new URL(e, H.document.baseURI);
    return t.origin === H.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function tf(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function nf(e, t, n) {
  return async (r) => {
    let i = Er(r),
      a = Td(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    s
      ? (r.preventDefault(), n(c))
      : (await Dv({
          priority: `user-blocking`,
          ensureContinueBeforeUnload: !0,
          continueAfter: `paint`,
        }),
        c());
  };
}
function rf(e, t, n) {
  return async (r) => {
    let i = await af(t);
    i.decision === `client` ? n(r) : of(t ?? e, r, i.redirectUrl);
  };
}
async function af(e) {
  return !e || !Id()
    ? { decision: `client` }
    : Ud(e) || (Hd(e), (await Wd(e)) ?? { decision: `server` });
}
async function of(e, t, n) {
  (await Dv({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    h.location.assign(sf(e, n)));
}
function sf(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, h.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function cf(e) {
  let t = ea(e);
  if (t && h.location.pathname === t) {
    let e = new URL(h.location.href);
    return ((e.pathname = `${t}/`), e.href);
  }
  return h.location.href;
}
function lf(e, t, n) {
  if (t || h === void 0) return;
  let r = cf(n),
    i;
  try {
    i = new URL(e, r);
  } catch {
    return;
  }
  let a = new URL(r);
  if (i.origin === a.origin && (i.pathname !== a.pathname || i.search !== a.search)) return i.href;
}
function uf(e, t, n, r, i, a, o, s) {
  if (!n) return Kd(e, r);
  let c = kd(t, e, s, o);
  if (!c) return Kd(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Kd(e, r);
  let m = ra(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !gt,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = qd(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = lf(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = rf(m, _, (e) =>
      tf(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: nf(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Md(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function df(e, t, n) {
  let r = ff(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (He(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (He(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function ff(e, t) {
  let n = z(e) ? e : void 0,
    r = n && !Ge(n),
    i = t && !Ge(t);
  if (r || i) return { ...n, ...t };
}
function pf(e, t, n) {
  if (!(t && mr())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: mf } : { ...i, onTap: r }) : e;
}
function mf(e) {
  let t = Td(e.target);
  t && t.getAttribute(`target`) !== `_blank` && e.preventDefault();
}
function hf(e, t, n, r, i, a) {
  let o = od(e) ? e : hd(e);
  if (!od(o)) return L(e) ? Kd(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (Qe(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return ra(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function gf() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l; ) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function _f() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, gf(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: LC, difficulty: RC, tokenLength: zC, maxTime: BC }));
  });
}
function vf(e) {
  let t = /* @__PURE__ */ new Set();
  for (let n of e.elements)
    yf(n) && !n.disabled && n.name && (n.name.startsWith(`__framer`) || t.add(n.name));
  return Array.from(t);
}
function yf(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function bf(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function xf(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function Sf() {
  let e = p.useContext(ew),
    t = p.useMemo(
      () =>
        UC.map((e) => ({
          inputRef: p.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: p.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${VC}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: p.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [GC.name]: e.originalName,
                [GC.value]: o,
                [GC.setAttribute]: e.methodsUsed.setAttribute,
                [GC.valueProperty]: e.methodsUsed.valueProperty,
                [GC.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [GC.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [GC.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${VC}_${KC.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${VC}_${KC.fieldCount}`, r.toString()),
          n.append(`${VC}_${KC.fieldFilledCount}`, i.toString()),
          n.append(`${VC}_${KC.hpVersion}`, HC),
          n.append(`${VC}_${KC.siteId}`, e || ``),
          n.append(`${VC}_${KC.timeToSubmissionSinceModuleLoad}`, qC()));
      },
      [t, e]
    ),
  };
}
function Cf({ states: e }) {
  return /* @__PURE__ */ D(v, {
    children: e.map((e) => /* @__PURE__ */ D(JC, { inputStateRef: e }, `hp_${e.originalName}`)),
  });
}
function wf({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          Tf(e, t, n);
        })
      : Tf(e.pageviewEventData.current, t, n));
}
function Tf(e, t, n) {
  return $n(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function Ef({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? $C : QC;
    case `incomplete`:
      return e === `error` ? $C : ZC;
    case `submit`:
      return YC;
    case `success`:
      return XC;
    case `error`:
      return $C;
    default:
      V(t);
  }
}
function Df({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function Of(e) {
  e.preventDefault();
}
function kf(e, t) {
  let n = ud(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function Af(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (Af(t)) return !0;
  return !1;
}
async function jf(e, t, n, r) {
  let i = await _f();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": bf(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw Mf(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function Mf(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    z(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function Nf({ EditorBar: e, fast: t = !1 }) {
  let n = l(ew),
    r = w(yt, t ? iw : aw, xt),
    i = zS(),
    a = u(() => {
      let e = {},
        t;
      for (t in i)
        i.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = i[t]);
      return e;
    }, [i]);
  return !e || !n || !r
    ? null
    : /* @__PURE__ */ D(rw, {
        children: /* @__PURE__ */ D(S, {
          children: /* @__PURE__ */ D(e, { framerSiteId: n, features: a }),
        }),
      });
}
function Pf(e, t) {
  return e.replace(kv, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Ff({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = M(),
    i = M(),
    a = M(t),
    o = M(null);
  ((a.current = t),
    _(() => {
      e && ((r.current ??= /* @__PURE__ */ new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = j(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? /* @__PURE__ */ new Set(),
      getCurrentRoutePath: () =>
        a.current ? Lf(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? Lf(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && If(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return /* @__PURE__ */ D(ow.Provider, { value: s, children: n });
}
async function If(e, t) {
  if (!er(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    $n(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Lf(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? Pf(r.path, n) : r.path) : ``;
}
function Rf(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function zf() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((sw = e.timeZone), (cw = e.locale));
}
function Bf({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  ji(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: xi()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function Vf(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = xi();
  ji(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function Hf(e, t, n, r) {
  let i = xi();
  t.path &&
    i?.hash !== n.hash &&
    (r?.(),
    ji(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      ra(t, n)
    ));
}
function Uf() {
  return xr() >= 17 ? fw : dw;
}
function Wf(e = Xf) {
  let t = (e) => {
    e.persisted && $f();
  };
  vr() && (h.addEventListener(`pageshow`, t), (uw = Date.now() - Uf()));
  let n = Gf(),
    r = Zf(e);
  return function () {
    (h.removeEventListener(`pageshow`, t), n(), r());
  };
}
function Gf() {
  let e = h.history.scrollRestoration;
  return (
    (h.history.scrollRestoration = `manual`),
    function () {
      h.history.scrollRestoration = e;
    }
  );
}
function Kf(e) {
  return z(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function qf() {
  return { x: h.scrollX, y: h.scrollY };
}
function Jf() {
  let e = xi();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (Kf(t)) return t;
}
function Yf(e) {
  let t = xi();
  t && (Oi({ ...t, scrollPosition: e }), vr() && (uw = Date.now()));
}
function Xf(e, t = !1) {
  let n = Jf();
  if (!(n && n.x === e.x && n.y === e.y)) {
    if (vr() && !t) {
      let e = Uf();
      if (Date.now() - uw < e) return;
    }
    Yf(e);
  }
}
function Zf(e) {
  let t = () => {
      e(qf());
    },
    n = () => {
      e(qf(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), h.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), h.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in h)) {
    let e = Qf(t);
    return function () {
      (i(), e());
    };
  }
  return (
    h.addEventListener(`scrollend`, t),
    function () {
      (i(), h.removeEventListener(`scrollend`, t));
    }
  );
}
function Qf(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), t !== void 0 && Si(xi()) === t && e());
    },
    a = () => {
      let e = Si(xi());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = vr() ? Uf() : 100;
      t = h.setTimeout(i, a);
    };
  return (
    h.addEventListener(`scroll`, a),
    function () {
      (h.removeEventListener(`scroll`, a), r());
    }
  );
}
function $f() {
  let e = Jf();
  return e ? (h.scrollTo(e.x, e.y), !0) : !1;
}
function ep(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function tp(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (ep(n, t), !0);
}
function np(e, t, n) {
  n !== `preserve-scroll-position` &&
    I.render(
      () => {
        (n === `restore-scroll-position` && $f()) || tp(e, t) || h.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function rp(e, t) {
  I.read(() => {
    h.scrollY === 0 &&
      h.scrollX === 0 &&
      I.render(
        () => {
          $f() || tp(e, t);
        },
        !1,
        !0
      );
  });
}
function ip(e) {
  let n = zS().scrollRestoration,
    r = M(void 0),
    i = M(!1),
    a = !(!n || e),
    o = t(
      (e) => {
        ((r.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = t((e, t = !1) => {
      i.current || Xf(e, t);
    }, []),
    c = t(() => {
      a && (i.current = !0);
    }, [a]),
    l = t(() => r.current !== void 0 || i.current, []),
    u = t((e, t) => {
      let n = r.current;
      n &&
        n.routeId === e &&
        n.remountKey === t &&
        ((r.current = void 0), (i.current = !1), np(n.hash, n.shouldSmoothScroll, n.behavior));
    }, []);
  return (
    d(() => {
      if (a) return Wf(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: u,
    }
  );
}
function ap({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: i } = n;
  return (
    d(() => {
      r(e, t);
    }),
    _(() => {
      i && rp(h.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function op() {
  let [e, t] = p.useState(0);
  return [e, p.useCallback(() => t((e) => e + 1), [])];
}
function sp({ children: e, loadSnippetsModule: t }) {
  return /* @__PURE__ */ D(Cw.Provider, { value: t, children: e });
}
function cp() {
  return p.useContext(Cw);
}
function lp(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function up(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (B(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (B(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      V(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await dp(a.createContextualFragment(e), r, i));
}
async function dp(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = fp(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await dp(r, e, null)));
  }
}
function fp(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return pp(r, t, n);
}
function pp(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function mp(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = yw), (n = bw));
      break;
    case `bodyEnd`:
      ((t = xw), (n = Sw));
      break;
    case `headStart`:
      ((t = hw), (n = gw));
      break;
    case `headEnd`:
      ((t = _w), (n = vw));
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function hp(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = lp(e),
    s = t.nextSibling;
  for (; s && s !== n; ) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function gp(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = mp(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = hp(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((_p(t, o), s)) {
      await up(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = lp(e.id),
      u = `${c}\n${e.code}\n${l}`,
      d = yp(e.id, n, r, i);
    d ? await up(u, d, `afterend`) : await up(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function _p(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    (vp(n) && n.remove(), (n = e));
  }
}
function vp(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function yp(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = hp(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function bp() {
  let e = cp();
  return t(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(pw)?.dataset[mw] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await gp(t, n, r);
      }
    },
    [e]
  );
}
function xp(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function Sp({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: s,
}) {
  if (!e || !t || !n || !r) return;
  let c,
    l = [],
    u = o.find((e) => e.id === P_),
    { path: d } = await Rr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
  d && (c = xp(d, e));
  let f;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o, isMissingInLocale: c } = await Rr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    if (!o || c) continue;
    let d = xp(o, e);
    (l.push({ href: d, hrefLang: n.code }), n.id === "default" && (f = d));
  }
  return (
    f && l.push({ href: f, hrefLang: `x-default` }),
    () => {
      (gi(c, h.location.href), _i(l));
    }
  );
}
function Cp({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = ur(),
    l = bp();
  _(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && Mu(e);
        }),
        d)
      : ((e.id === t.id
          ? /* @__PURE__ */ Or()
          : Rr({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === P_),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: c,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await Sp({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && Mu(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function wp(e) {
  if (!e) return mt;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Tp(e) {
  let n = Ri(e),
    r = M(void 0),
    i = t(() => {
      (r.current?.abort(), (r.current = void 0));
    }, []);
  return {
    startNavigation: t(
      async (e, t, a, o = !0) => {
        i();
        let s = o ? new AbortController() : void 0;
        r.current = s;
        let c = s?.signal,
          l = En(c);
        if ((t.promise.finally(l), a === void 0)) return (e(c), t.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(mt);
        if ((n(d, s, a), e(c), await t.promise, c?.aborted)) return;
        let f = h.navigation?.transition;
        u();
        try {
          await f?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || qv();
      },
      [i, n]
    ),
    cancelPendingNavigation: i,
  };
}
function Ep({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: r,
  initialRoute: i,
  notFoundPage: a,
  collectionUtils: c,
  routes: l,
  initialLocaleId: f,
  initialCollectionItemId: p,
  initialContentLocaleIdOverride: m,
  locales: g = N_,
  initialCanonicalPathVariables: v,
  preserveQueryParams: y = !1,
  LayoutTemplate: b,
  EditorBar: x,
  siteCanonicalURL: S,
  adaptLayoutToTextDirection: C,
}) {
  (va(),
    Mi({
      disabled: n,
      routeId: i,
      initialPathVariables: r,
      initialLocaleId: f,
      initialContentLocaleId: m,
      initialCanonicalPathVariables: v,
    }));
  let w = mi(),
    [E, O] = op(),
    k = yi(`framer-route-change`),
    A = u(() => (!zS().synchronousNavigationOnDesktop || !Tr() ? o : (e) => e()), []),
    j = M(!0),
    ee = M(),
    te = M(0),
    ne = M(i),
    re = M(r),
    ie = M(),
    ae = M(f),
    oe = ip(n),
    { isNavigationCommitPending: se, usesCustomScrollRestoration: ce } = oe,
    { startNavigation: le, cancelPendingNavigation: ue } = Tp(ce),
    de = ur(),
    fe = oe.scheduleScroll,
    pe = ae.current,
    me = ne.current,
    he = re.current,
    N = l[me],
    ge = N?.path;
  if (!N) throw Error(`Router cannot find route for ${me}`);
  let _e = u(() => g.find(({ id: e }) => e === P_), [g]),
    P = u(() => g.find(({ id: e }) => (pe ? e === pe : e === "default")) ?? null, [pe, g]),
    {
      contentLocale: ve,
      currentCanonicalPathVariables: ye,
      pageExistsInCurrentLocale: be,
      setRouteContentState: xe,
    } = Op({
      activeLocale: P,
      currentRoute: N,
      initialCanonicalPathVariables: v,
      initialContentLocaleIdOverride: m,
      locales: g,
      routes: l,
    }),
    Se = P?.textDirection ?? `ltr`,
    F = C ? Se : `ltr`;
  d(() => {
    C && document.documentElement.setAttribute(`dir`, Se);
  }, [Se, C]);
  let Ce = P?.code;
  d(() => {
    Ce && document.documentElement.setAttribute(`lang`, Ce);
  }, [Ce]);
  let I = Fi(),
    we = u(
      () => ({
        activeLocale: P,
        contentLocale: ve,
        locales: g,
        setLocale: async (e) => {
          let t = ++te.current,
            r = k({ localized: !0 });
          if ((await Dv({ priority: `user-blocking`, continueAfter: `paint` }), t !== te.current)) {
            r.ignore?.();
            return;
          }
          let i;
          L(e) ? (i = e) : z(e) && (i = e.id);
          let a = g.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = ne.current,
            s = l[o];
          if (!s) {
            r.ignore?.();
            return;
          }
          let c = ea(S);
          try {
            let e = await I({
              currentLocale: P,
              nextLocale: a,
              route: s,
              routeId: o,
              defaultLocale: _e,
              pathVariables: re.current,
              preserveQueryParams: y,
              sitePrefix: c,
            });
            if (!e || t !== te.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && c + e.path,
              { contentLocaleId: l, canonicalPathVariables: u } = await Vr({
                activeLocale: a,
                defaultLocale: _e,
                collectionUtilsCache: de,
                locales: g,
                pathVariables: e.pathVariables,
                route: s,
                routeId: o,
              });
            if (t !== te.current) {
              r.ignore?.();
              return;
            }
            ((j.current = !1),
              (ae.current = a.id),
              (ee.current = i),
              (re.current = e.pathVariables),
              xe(l, u));
            let d = s.path && e.pathVariables ? Pf(s.path, e.pathVariables) : s.path;
            (fe({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              le(
                () => {
                  w(o, o, () => A(O));
                },
                r,
                n
                  ? void 0
                  : i
                    ? () => {
                        Bf({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: l,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [P, _e, ve, n, O, g, y, xe, l, fe, le, w, k, A, I, de, S]
    ),
    Te = t(
      (e, t, n, r, i, a, o, s, c, u, d) => {
        j.current = !1;
        let f = ne.current,
          p = l[e],
          m = Tn(p, n),
          h = p?.path && i ? Pf(p.path, i) : p?.path;
        ((ne.current = e),
          (ae.current = t),
          (re.current = i),
          (ie.current = void 0),
          xe(a, o),
          (ee.current = r),
          fe({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: u ?? !1,
            behavior: s
              ? ce
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          s
            ? (ue(), A(O))
            : le(
                (t) => {
                  w(f, e, () => A(O), t);
                },
                c,
                d,
                !0
              ));
      },
      [O, xe, l, ce, fe, le, w, A, ue]
    );
  (Ni(oe, ne, Te),
    _(() => {
      if (n) return;
      let e = () => {
        let e = xi(),
          t = h.location.hash === `` ? void 0 : h.location.hash.slice(1);
        (e && Tn(l[e.routeId], e.hash) === t) ||
          ki({
            ...(e ||
              (wi() ?? { routeId: ne.current, pathVariables: re.current, localeId: ae.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (h.addEventListener(`hashchange`, e), () => h.removeEventListener(`hashchange`, e));
    }, [n, l]));
  let Ee = t(
      async (e, t, r, i, a) => {
        let o = l[e],
          s = tn(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          u = k({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          d = wp(a);
        if (
          (Dv({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await Dv({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = /* @__PURE__ */ new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(kv)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Tn(o, t),
          p = re.current,
          m = ae.current;
        if (
          ie.current === void 0 &&
          Rf({ routeId: ne.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = se();
          if (a) {
            let t = o?.path && r ? Pf(o.path, r) : o?.path;
            fe({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ue();
          (u.ignore?.(), !a && ce && np(f, i, `scroll-to-hash-or-top`));
          let s = l[e];
          (!n &&
            s &&
            Hf(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: t,
                localeId: m,
                preserveQueryParams: y,
                siteCanonicalURL: S,
              },
              d
            ),
            !a && !ce && np(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let h = l[ne.current],
          _ =
            ea(S) +
            ra(o, {
              currentRoutePath: h?.path,
              currentRoutePathLocalized: h?.pathLocalized,
              currentPathVariables: p,
              hash: t,
              pathVariables: r,
              localeId: m,
              localeSlug: g.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: y,
              relative: !1,
              siteCanonicalURL: S,
            }),
          v = {};
        ie.current = v;
        let { contentLocaleId: b, canonicalPathVariables: x } = await Vr({
          activeLocale: P,
          defaultLocale: _e,
          collectionUtilsCache: de,
          locales: g,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        ie.current === v &&
          Te(
            e,
            m,
            t,
            _,
            r,
            b,
            x,
            !1,
            u,
            i,
            n
              ? void 0
              : () => {
                  (d(),
                    Vf(e, o, {
                      historyPath: _,
                      currentRoutePath: h?.path,
                      hash: t,
                      pathVariables: r,
                      contentLocaleId: b,
                      canonicalPathVariables: x,
                      localeId: m,
                    }));
                }
          );
      },
      [ue, l, g, Te, n, y, S, k, ce, se, fe, de, _e, P]
    ),
    De = _n(l),
    Oe = ee.current,
    ke = lw(N, me, Oe, he, P, p),
    Ae = j.current;
  Cp({
    activeLocale: P,
    contentLocale: ve,
    currentPathVariables: he,
    currentRoute: N,
    currentRouteId: me,
    isInitialNavigation: Ae,
    locales: g,
    siteCanonicalURL: S,
  });
  let je = u(
      () => ({
        navigate: Ee,
        getRoute: De,
        currentRouteId: me,
        currentPathVariables: he,
        currentCanonicalPathVariables: ye,
        routes: l,
        collectionUtils: c,
        preserveQueryParams: y,
        pageviewEventData: ke,
        siteCanonicalURL: S,
        isInitialNavigation: Ae,
      }),
      [Ee, De, me, he, ye, l, c, y, S, ke, Ae]
    ),
    Me = ge && he ? Pf(ge, he) : ge,
    Ne = `${pe}${Me}`,
    Pe = Ro(() => ({ ...e, display: `contents` }));
  return /* @__PURE__ */ D(vn, {
    api: je,
    children: /* @__PURE__ */ D(Mv.Provider, {
      value: we,
      children: /* @__PURE__ */ D(Nv.Provider, {
        value: F,
        children: /* @__PURE__ */ D(aC, {
          children: /* @__PURE__ */ D(Yi, {
            routerRenderKey: E,
            isNavigationCommitPending: oe.isNavigationCommitPending,
            children: /* @__PURE__ */ T(Ff, {
              currentRoutePath: Me,
              routerAPI: je,
              children: [
                x && /* @__PURE__ */ D(Nf, { EditorBar: x, fast: !0 }),
                /* @__PURE__ */ D(HS, {
                  children: /* @__PURE__ */ T(Au, {
                    children: [
                      /* @__PURE__ */ D(xy.Start, {}),
                      /* @__PURE__ */ D(ap, {
                        currentRouteId: me,
                        remountKey: Ne,
                        scrollRestoration: oe,
                      }),
                      /* @__PURE__ */ D(Cy, {
                        notFoundPage: a,
                        defaultPageStyle: e,
                        routerRenderKey: E,
                        children: /* @__PURE__ */ D(Dp, {
                          LayoutTemplate: b,
                          webPageId: N?.abTestingVariantId ?? me,
                          style: e,
                          children: (t) =>
                            /* @__PURE__ */ D(
                              s,
                              { children: be ? Ca(N.page, t ? Pe : e) : a && Ca(a, e) },
                              Ne
                            ),
                        }),
                      }),
                      x && /* @__PURE__ */ D(Nf, { EditorBar: x }),
                      /* @__PURE__ */ D(ma, {}),
                      /* @__PURE__ */ D(xy.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function Dp({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? /* @__PURE__ */ D(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function Op({
  activeLocale: e,
  currentRoute: n,
  initialCanonicalPathVariables: r,
  initialContentLocaleIdOverride: i,
  locales: a,
  routes: o,
}) {
  let s = M(r),
    c = M(i),
    l = c.current,
    d = !e || !n.includedLocales || n.includedLocales.includes(e.id),
    f = u(() => {
      if (!e) return null;
      let t;
      return (
        (t = d
          ? (l ?? n?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(o).find((e) => e.path && ly.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        t ? (a.find(({ id: e }) => e === t) ?? e) : e
      );
    }, [e, n, a, l, d, o]),
    p = t((e, t) => {
      ((c.current = e), (s.current = t));
    }, []);
  return {
    contentLocale: f,
    currentCanonicalPathVariables: s.current,
    pageExistsInCurrentLocale: d,
    setRouteContentState: p,
  };
}
function kp(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function Ap(e) {
  return typeof e == `object` && !!e;
}
function jp(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Ap(r)) return;
    r = r[e];
  }
  return r;
}
function Mp(e) {
  return `${e.credentials}:${e.url}`;
}
function Np(e) {
  return L(e) && !Number.isNaN(Number(e));
}
function Pp(e, t) {
  switch (e) {
    case `string`:
      return L(t) || R(t);
    case `color`:
      return L(t);
    case `boolean`:
      return Ue(t);
    case `number`:
      return R(t) || Np(t);
    case `link`:
    case `image`:
      return L(t) && ud(t, !1);
    default:
      return !1;
  }
}
function Fp(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = jp(e.data, t.resultKeyPath);
  if (Ke(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Pp(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Ip(e) {
  return Math.max(e * 1e3, Tw);
}
function Lp(e, t) {
  if (U.current() === U.canvas) return !1;
  let n = Ip(t);
  return Date.now() >= e + n;
}
function Rp({ client: e, children: t }) {
  return /* @__PURE__ */ D(jw.Provider, { value: e, children: t });
}
function zp(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: f = !1,
    skipAnimations: m = !1,
    includeDataObserver: h = !1,
    localeId: g,
    locales: _,
    preserveQueryParams: v,
    EditorBar: y,
    defaultPageStyle: b,
    disableHistory: x,
    LayoutTemplate: S,
    siteCanonicalURL: C,
    adaptLayoutToTextDirection: w,
    loadSnippetsModule: T,
    initialCollectionItemId: E,
    initialContentLocaleIdOverride: O,
  } = e;
  if (
    (p.useEffect(() => {
      n || Qy.start();
    }, []),
    n)
  )
    return /* @__PURE__ */ D(Vi, {
      value: r ?? `preview`,
      children: /* @__PURE__ */ D(Te, {
        reducedMotion: m ? `always` : f ? `user` : `never`,
        skipAnimations: m,
        children: /* @__PURE__ */ D(lr, {
          collectionUtils: l,
          children: /* @__PURE__ */ D(Rp, {
            client: u,
            children: /* @__PURE__ */ D(Aw, {
              children: /* @__PURE__ */ D(ew.Provider, {
                value: a,
                children: /* @__PURE__ */ D(sp, {
                  loadSnippetsModule: T,
                  children: /* @__PURE__ */ D(Ep, {
                    initialRoute: i,
                    initialPathVariables: o,
                    initialCanonicalPathVariables: s,
                    initialLocaleId: g,
                    initialCollectionItemId: E,
                    initialContentLocaleIdOverride: O,
                    routes: c,
                    collectionUtils: l,
                    notFoundPage: d,
                    locales: _,
                    defaultPageStyle: b ?? { minHeight: `100vh`, width: `auto` },
                    preserveQueryParams: v,
                    EditorBar: y,
                    disableHistory: x,
                    LayoutTemplate: S,
                    siteCanonicalURL: C,
                    adaptLayoutToTextDirection: w,
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  {
    let e = h ? qx : p.Fragment;
    return /* @__PURE__ */ D(e, {
      children: /* @__PURE__ */ D(bn, {
        routes: c,
        children: /* @__PURE__ */ D(Px, {
          children: p.isValidElement(t) ? t : p.createElement(t, { key: i }),
        }),
      }),
    });
  }
}
function Bp(e, t) {
  let n = yn(),
    { activeLocale: r } = Hr(),
    i = Qd();
  return Ui(() => {
    let t = [],
      a = (e) => {
        if (e)
          return L(e) || od(e)
            ? hf(e, n, void 0, void 0, r, o)
            : hf(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function Vp(e) {
  return {
    trace(...t) {
      return pb.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return pb.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return pb.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return pb.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return pb.getLogger(e)?.error(...t);
    },
    get enabled() {
      return pb.getLogger(e) !== void 0;
    },
  };
}
function Hp() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function Up() {
  var e =
      typeof SuppressedError == `function`
        ? SuppressedError
        : function (e, t) {
            var n = Error();
            return ((n.name = `SuppressedError`), (n.error = e), (n.suppressed = t), n);
          },
    t = {},
    n = [];
  function r(e, t) {
    if (t != null) {
      if (Object(t) !== t)
        throw TypeError(
          `using declarations can only be used with objects, functions, null, or undefined.`
        );
      if (e) var r = t[Symbol.asyncDispose || Symbol.for(`Symbol.asyncDispose`)];
      if (r === void 0 && ((r = t[Symbol.dispose || Symbol.for(`Symbol.dispose`)]), e)) var i = r;
      if (typeof r != `function`) throw TypeError(`Object is not disposable.`);
      (i &&
        (r = function () {
          try {
            i.call(t);
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        n.push({ v: t, d: r, a: e }));
    } else e && n.push({ d: t, a: e });
    return t;
  }
  return {
    e: t,
    u: r.bind(null, !1),
    a: r.bind(null, !0),
    d: function () {
      var r,
        i = this.e,
        a = 0;
      function o() {
        for (; (r = n.pop()); )
          try {
            if (!r.a && a === 1) return ((a = 0), n.push(r), Promise.resolve().then(o));
            if (r.d) {
              var e = r.d.call(r.v);
              if (r.a) return ((a |= 2), Promise.resolve(e).then(o, s));
            } else a |= 1;
          } catch (e) {
            return s(e);
          }
        if (a === 1) return i === t ? Promise.resolve() : Promise.reject(i);
        if (i !== t) throw i;
      }
      function s(n) {
        return ((i = i === t ? n : new e(n, i)), o());
      }
      return o();
    },
  };
}
function Wp() {
  return Nw.priority;
}
function Gp(e) {
  let t = Nw;
  return (
    (Nw = e),
    {
      [Hp()]() {
        Nw = t;
      },
    }
  );
}
function Kp(e = Nw.priority, t = Nw.canYield) {
  if (!t || e === void 0) return;
  let n = kr(e);
  return Dv({ batch: !0, priority: n });
}
function qp(e) {
  try {
    var t = Up();
    t.u(Gp({ priority: Nw.priority, canYield: !1 }));
    let n = e.next();
    return (B(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    t.e = e;
  } finally {
    t.d();
  }
}
async function Jp(e, t, n = Nw.priority, r = Nw.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0)
    try {
      var o = Up();
      (o.u(Gp(i)), (a = e.next()));
    } catch (e) {
      o.e = e;
    } finally {
      o.d();
    }
  for (; !a.done; )
    try {
      var s = Up();
      let t = await a.value,
        o = Kp(n, r);
      (o && (await o), s.u(Gp(i)), (a = e.next(t)));
    } catch (e) {
      s.e = e;
    } finally {
      s.d();
    }
  return a.value;
}
function Yp(e, t = Nw.priority, n = Nw.canYield) {
  try {
    var r = Up();
    r.u(Gp({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Jp(e, i, t, n);
  } catch (e) {
    r.e = e;
  } finally {
    r.d();
  }
}
function* Xp(e, t = Nw.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (Xe(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Jp(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Zp(e, t = Nw.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Kp(t);
    r && (yield r);
    let o = e[a];
    if (Xe(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Jp(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function Qp(e) {
  return tm(e) || im(e);
}
function $p(e) {
  return We(e) && e.every(z);
}
function em(e) {
  return z(e) && He(e.read) && He(e.preload);
}
function tm(e) {
  return $p(e) || em(e);
}
function nm(e) {
  return z(e) && z(e.schema);
}
function rm(e) {
  return z(e) && z(e.collectionByLocaleId);
}
function im(e) {
  return nm(e) || rm(e);
}
function am(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Pm(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function om(e, t) {
  return e?.type === `array`
    ? { type: `array`, value: e.value.map((e) => Pw.cast(e, t.definition)) }
    : null;
}
function sm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function cm(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function lm(e) {
  return cm(e)?.value ?? !1;
}
function um(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function dm(e) {
  return e?.type === `color` ? e : null;
}
function fm(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function pm(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return Ye(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function mm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function hm(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function gm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function _m(e) {
  return e?.type === `file` ? e : null;
}
function vm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function ym(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function bm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function xm(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Sm(e) {
  return xm(e)?.value ?? null;
}
function Cm(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Pm(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function wm(e, t) {
  if (e?.type === `object`) {
    let n = {},
      r = Object.entries(t.definitions);
    for (let [t, i] of r) {
      let r = e.value[t] ?? null;
      n[t] = Pw.cast(r, i);
    }
    return { type: `object`, value: n };
  }
  return null;
}
function Tm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Em(e) {
  return e?.type === `responsiveimage` ? e : null;
}
function Dm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Om(e) {
  return e?.type === `richtext` ? e : null;
}
function km(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Am(e) {
  return e?.type === `vectorsetitem` ? e : null;
}
function jm(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Mm(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Nm(e) {
  return Mm(e)?.value ?? null;
}
function Pm(e, t, n) {
  if (qe(e) || qe(t)) return (B(e === t), 0);
  switch (e.type) {
    case `array`:
      return (B(e.type === t.type), am(e, t, n));
    case `boolean`:
      return (B(e.type === t.type), sm(e, t));
    case `color`:
      return (B(e.type === t.type), um(e, t));
    case `date`:
      return (B(e.type === t.type), fm(e, t));
    case `enum`:
      return (B(e.type === t.type), mm(e, t));
    case `file`:
      return (B(e.type === t.type), gm(e, t));
    case `link`:
      return (B(e.type === t.type), vm(e, t));
    case `number`:
      return (B(e.type === t.type), bm(e, t));
    case `object`:
      return (B(e.type === t.type), Cm(e, t, n));
    case `responsiveimage`:
      return (B(e.type === t.type), Tm(e, t));
    case `richtext`:
      return (B(e.type === t.type), Dm(e, t));
    case `vectorsetitem`:
      return (B(e.type === t.type), km(e, t));
    case `string`:
      return (B(e.type === t.type), jm(e, t, n));
    default:
      V(e);
  }
}
async function Fm(e, t) {
  return em(e) ? (await e.preload(t), e.read(t)) : e;
}
function Im(e) {
  return e.includes(zw);
}
function Lm(e) {
  if (!im(e) || !e.id) return;
  let t = Lw.get(e.id);
  if (!t) return (Lw.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Rm(e) {
  let t = Lm(e);
  if (t) return t;
  let n = Rw.get(e);
  if (n) return n;
  let r = `${zw}${Math.random().toString(16).slice(2)}`;
  return (Rw.set(e, r), r);
}
function zm(e, t) {
  if (tm(e)) {
    let n = Rm(e) + (t?.id ?? `default`),
      r = Bw.get(n);
    if (r) return r;
    let i = new Iw(e, t);
    return (Bw.set(n, i), i);
  }
  if (nm(e)) return e;
  if (rm(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  V(e, `Unsupported collection type`);
}
function Bm(e) {
  return e;
}
function Vm(e) {
  return He(e.getHash);
}
function J(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    z(r) && Vm(r) ? (n += r.getHash()) : (n += JSON.stringify(r) ?? ``);
  }
  return Bm(`${n})`);
}
function Hm(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function Um(e) {
  if (e !== void 0) return kr(e);
}
function Wm(e, t) {
  return { collectionId: Rm(e), pointer: t };
}
function Gm(e) {
  return z(e) && L(e.collectionId);
}
function Km(e, t) {
  return { collectionId: Rm(e), pointer: t };
}
function qm(e) {
  return z(e) && L(e.collectionId);
}
function Jm(e, t) {
  let n = /* @__PURE__ */ new Map();
  function r(e) {
    if (z(e)) {
      if (e.type === `Collection` && Qp(e.data)) {
        let r = zm(e.data, t),
          i = Rm(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    } else if (We(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Ym(e) {
  return e;
}
function Xm(e) {
  return e;
}
function Zm(e) {
  return e;
}
function Qm() {
  return 25;
}
function $m() {
  return 12500;
}
function eh(e) {
  return Array(e).fill({ type: `All` });
}
function th(e) {
  return e;
}
function nh(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new qT(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function rh(e) {
  let t = /* @__PURE__ */ new Set();
  if (!e) return t;
  nh(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (nh(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function ih(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) ih(n, t);
      return;
    case `object`:
      for (let n in e.value) ih(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function ah(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function oh(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function sh(e) {
  return `${e.functionName}(${e.arguments.map((e) => fh(e)).join(`, `)})`;
}
function ch(e) {
  let t = `CASE`;
  e.value && (t += ` ${fh(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${fh(n.when)} THEN ${fh(n.then)}`;
  return (e.else && (t += ` ELSE ${fh(e.else)}`), (t += ` END`), t);
}
function lh(e) {
  let t = fh(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function uh(e) {
  let t = fh(e.left),
    n = fh(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function dh(e) {
  return `CAST(${fh(e.value)} as ${e.dataType})`;
}
function fh(e) {
  switch (e.type) {
    case `Identifier`:
      return ah(e);
    case `LiteralValue`:
      return oh(e);
    case `FunctionCall`:
      return sh(e);
    case `Case`:
      return ch(e);
    case `UnaryOperation`:
      return lh(e);
    case `BinaryOperation`:
      return uh(e);
    case `TypeCast`:
      return dh(e);
    case `Select`:
      return `${_h(e)}`;
    default:
      V(e);
  }
}
function ph(e) {
  return nm(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function mh(e) {
  let t = `${hh(e.left)} LEFT JOIN ${hh(e.right)}`;
  return (e.constraint && (t += ` ON ${fh(e.constraint)}`), t);
}
function hh(e) {
  switch (e.type) {
    case `Collection`:
      return ph(e);
    case `LeftJoin`:
      return mh(e);
    default:
      V(e);
  }
}
function gh(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `\n${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `\n\t${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function _h(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = fh(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${hh(e.from)}`),
    e.where && (t += ` WHERE ${fh(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${fh(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${fh(e.limit)}`),
    e.offset && (t += ` OFFSET ${fh(e.offset)}`),
    gh(t)
  );
}
function vh(e) {
  return z(e) && e.type === `Collection`;
}
function yh(e, t) {
  return vh(t) && Qp(t.data) ? Rm(t.data) : t;
}
function bh(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, yh) + n;
}
function xh(e) {
  if (h === void 0) return;
  let t = xi()?.paginationInfo?.[e]?.currentPage;
  return typeof t == `number` ? t : void 0;
}
function Sh(e, t) {
  return e ? 1 : (xh(t) ?? 1);
}
function Ch(e, t, n, r = !1) {
  return Th(wh(n, r), Math.ceil(e / t));
}
function wh(e, n) {
  let { isInitialNavigation: r = !0 } = yn(),
    [i, a] = ee(),
    s = xh(e),
    c = M(r ? s : void 0),
    [l, u] = j(() => Sh(r, e)),
    d = M(l);
  _(
    function () {
      if (!r) return;
      let e = c.current;
      e === void 0 || e === d.current ? (c.current = void 0) : ((d.current = e), o(() => u(e)));
    },
    [r]
  );
  let f = t(
      (t) => {
        let n = c.current;
        (n === void 0 || n === d.current) && ((c.current = void 0), Li(e, t));
      },
      [e]
    ),
    p = cd(),
    m = M(!1);
  return {
    currentPage: l,
    isLoading: i,
    loadNextPage: t(
      async (e) => {
        if (!p && !(d.current >= e) && !m.current) {
          m.current = !0;
          try {
            if ((await Dv({ priority: `user-blocking`, continueAfter: `paint` }), d.current >= e))
              return;
            let t = Math.min(d.current + 1, e);
            ((d.current = t),
              (n ? a : o)(() => {
                u(t);
              }));
          } finally {
            m.current = !1;
          }
        }
      },
      [n, p]
    ),
    persistToHistory: f,
  };
}
function Th({ currentPage: e, isLoading: n, loadNextPage: r, persistToHistory: i }, a) {
  let o = u(() => ({ currentPage: e, hasNextPage: e < a, totalPages: a, isLoading: n }), [e, a, n]);
  return (
    $v(() => {
      i(o);
    }, [i, o]),
    { paginationInfo: o, loadMore: t(() => r(a), [r, a]) }
  );
}
function Eh(e) {
  let { activeLocale: t } = Hr();
  return uE.get(e, t).use();
}
function Dh(e) {
  return Eh({ ...e, select: [] }).length;
}
function Oh(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(Ke(e) || z(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function kh(e) {
  let t = M(e);
  return (
    f(() => {
      t.current = e;
    }, [e]),
    Wi((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function Ah(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function jh() {
  return /* @__PURE__ */ new Set();
}
function Mh(e) {
  let t = Ro(jh),
    n = Ro(jh);
  return (
    zc(() => () => Ah(n, t)),
    _(() => () => Ah(n, t), []),
    _(() => {
      Ah(n, t);
    }, [e]),
    M({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Nh(e, t, n) {
  return p.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Ph(e) {
  for (let [t, n] of Object.entries(e)) if (H.matchMedia(n).matches) return t;
}
function Fh(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && H.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Ih(e, n, r = !0) {
  let i = l(jx),
    a = Ho(),
    s = tt(),
    c = br() && (!a || s),
    u = M(c ? (Ph(n) ?? e) : e),
    d = M(r && i ? e : u.current),
    f = qs(),
    p = ue(),
    m = t(
      (e) => {
        if (e !== u.current || e !== d.current) {
          function t() {
            ((u.current = d.current = e),
              o(() => {
                f();
              }));
          }
          a
            ? t()
            : p(() => {
                t();
              });
        }
      },
      [p, f, a]
    );
  return (
    $v(() => {
      a && m(s ? (Ph(n) ?? e) : e);
    }, [e, s, a, n, m]),
    $v(() => {
      r && i === !0 && m(u.current);
    }, []),
    _(() => {
      if (!c || s) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = H.matchMedia(r),
          i = (e) => {
            e.matches && m(t);
          };
        (Lh(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => Rh(e, t));
    }, [s, n, m, c]),
    [u.current, d.current]
  );
}
function Lh(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Rh(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function zh(e) {
  setTimeout(e, 1);
}
function Bh(e) {
  let t = /* @__PURE__ */ new Set(),
    n = Fh(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Vh(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (_t ? H.requestIdleCallback : zh)(() => {
    document.querySelector(dE)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Vh(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Hh(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Vh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Hh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Uh() {
  let e = Ro(() => /* @__PURE__ */ new Map());
  return p.useCallback((t) => {
    let n = e.get(t);
    if (n) return n;
    let r = x();
    return (e.set(t, r), r);
  }, []);
}
function Wh(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function Gh(e, t) {
  if (Vo()) return;
  let n = p.useRef(!0),
    r = p.useRef(t);
  (zc((t, i) => {
    let a = t && !i;
    if (!n.current && a) {
      let t = Wh(r.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    p.useEffect(() => {
      if (n.current) {
        let t = Wh(r.current, e);
        t && t();
      }
    }, [e]));
}
function Kh(e) {
  return z(e) && fE in e && e.page !== void 0;
}
function qh(e, t, n) {
  let { paginationInfo: r, loadMore: i } = Ch(Dh(e), t, n, !0);
  return {
    paginatedQuery: u(() => {
      let n = t * r.currentPage;
      if (e.limit) {
        if (e.limit.type !== `LiteralValue` || typeof e.limit.value != `number`)
          throw Error(`Unexpected type for query limit`);
        n = Math.min(n, e.limit.value);
      }
      return { ...e, limit: { type: `LiteralValue`, value: n } };
    }, [e, t, r]),
    paginationInfo: r,
    loadMore: i,
  };
}
function Jh(e, t) {
  return `${e}-${t}`;
}
function Yh(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (B(r !== void 0, `nextVariant should be defined`), r);
}
function Xh(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Zh(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Qh(e, t) {
  return t[e] || `framer-v-${e}`;
}
function $h(e, t, n) {
  return e && n.has(e) ? e : t;
}
function eg() {
  let e = M(),
    n = M(),
    r = t(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (n.current = void 0));
    }, []);
  return (
    _(
      () => () => {
        r();
      },
      [r]
    ),
    t(
      (t) => {
        if (!document.hidden) {
          (t(), r());
          return;
        }
        if (((n.current = t), e.current)) return;
        let i = () => {
          document.hidden || (n.current?.(), r());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [r]
    )
  );
}
function tg() {
  let e = M(),
    n = M(!1),
    r = M(),
    i = l(mx);
  return (
    _(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    t(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = jc(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function ng(e) {
  let n = eg(),
    r = tg();
  return t(
    (t, i = !1) => {
      gt ? t() : n(i && e ? () => r(t, e) : t);
    },
    [n, r, e]
  );
}
async function rg() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (hE = () => {
        (e(), (t = void 0));
      }));
  });
}
function ig(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (mE = rg()));
}
function ag() {
  (performance.mark(`click-received-listener`), (mE = void 0), hE?.(), (hE = void 0));
}
function og(e = !1) {
  _(() => {
    e &&
      (document.addEventListener(`pointerup`, ig, !0),
      document.__proto__.addEventListener.call(document, `click`, ag, !0));
  }, [e]);
}
function sg({
  variant: e,
  defaultVariant: n,
  transitions: r,
  enabledGestures: i,
  cycleOrder: a = [],
  variantProps: s = {},
  variantClassNames: c = {},
  ref: l,
}) {
  let d = qs(),
    f = cd(),
    p = Ro(() => new Set(a));
  og(zS().yieldOnTap);
  let m = ng(l),
    h = M({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: $h(e, n, p),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: n,
      enabledGestures: i,
      cycleOrder: a,
      transitions: r,
    }),
    g = t((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = $h(e, a, p),
        s = Zh(i?.[o], t, n, !1, r);
      return [o, s ? Jh(o, s) : void 0];
    }, []),
    _ = t(
      async (e, t, n, r, i = !1, a = !1) => {
        let [s, c] = g(r);
        if (s === e && c === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = s || n),
          (h.current.gestureVariant = c));
        let l = zS().yieldOnTap && h.current.isPressedHasUpdated;
        (l &&
          mE &&
          (performance.mark(`wait-for-tap-start`),
          await mE,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          l &&
            (performance.mark(`yield-on-tap-start`),
            await Dv({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: u,
          isPressed: f,
          isHoveredHasUpdated: p,
          isPressedHasUpdated: _,
        } = h.current;
        u || p || f || _ ? o(d) : m(() => o(d), i);
      },
      [g, d, m]
    ),
    v = t(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !f && zS().disableHoverOnMobile && !Xu() && (e = !1);
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_, f]
    ),
    y = t(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current,
          o = e === pE ? Yh(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = t(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), m(() => o(d), !0));
    }, [d, m]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: C,
      enabledGestures: w,
      isHovered: T,
      isPressed: E,
      isError: D,
      loadedBaseVariant: O,
    } = h.current,
    k = Nh(h.current.baseVariant, h.current.gestureVariant, s);
  return u(() => {
    let e = [];
    x !== C && e.push(x);
    let t = w?.[x]?.loading,
      n = !D && !f && !!t && !O[x],
      r = n ? Jh(x, `loading`) : S;
    r && e.push(r);
    let i = w?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: Xh(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: k,
        gestureHandlers: a,
        classNames: Rl(Qh(x, c), Zh(i, T, E, n, D)),
      }
    );
  }, [x, S, T, E, O, k, y, C, w, v, b, c]);
}
function cg(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (zS().disableCustomCode) return e;
  if (!Pu()) return ug(e, r, t, n);
  let a = lg(e, r, t, n),
    o = !1;
  function s(r, s) {
    let c = Ru();
    if (Ku(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? /* @__PURE__ */ D(Zv.Provider, {
            value: n,
            children: /* @__PURE__ */ D(Fu, {
              getErrorMessage: Uu.bind(null, t, n),
              fallback: /* @__PURE__ */ D(e, { ...r, ref: s }),
              children: /* @__PURE__ */ D(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Nu(a.error), Nu(Uu(t, n)), Mu(a.error), !0)),
          /* @__PURE__ */ D(e, { ...r, ref: s }));
    if (a.status === `success`)
      return /* @__PURE__ */ D(Zv.Provider, {
        value: n,
        children: /* @__PURE__ */ D(a.Component, { ...r, ref: s }),
      });
    throw a.error;
  }
  return p.forwardRef(s);
}
function lg(e, t, n, r) {
  try {
    return { status: `success`, Component: ug(e, t, n, r) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function ug(e, t, n, r) {
  let i = gE.get(t);
  i || ((i = /* @__PURE__ */ new WeakMap()), gE.set(t, i));
  let a = i.get(e);
  a || ((a = /* @__PURE__ */ new Map()), i.set(e, a));
  let o = `${n}:${r}`;
  if (a.has(o)) return a.get(o);
  let s = t(e);
  return (a.set(o, s), s);
}
function dg(e, t, n) {
  let r = [],
    i = lu(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!R(e)) return yE;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return R(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : yE;
}
function fg(e, t, n, r = xE) {
  let [i, a] = p.useState(e),
    [o, s] = p.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      p.useCallback(
        (e) => {
          da(e) ||
            (t && a(r(e)),
            n &&
              p.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function pg(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function mg() {
  return /* @__PURE__ */ D(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: /* @__PURE__ */ D(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function hg(e) {
  return e === void 0 ? `__undefined__` : R(e) ? String(e) : e === `` ? `__empty__` : e;
}
function gg(e, t) {
  switch (e) {
    case `left`:
      return !1;
    case `right`:
      return !0;
    case `end`:
      return t === `ltr`;
    case void 0:
    case `start`:
    case `center`:
    case `justify`:
      return t === `rtl`;
    default:
      return V(e);
  }
}
function _g(e, t) {
  _(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (h.addEventListener(`keyup`, n), () => h.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function vg(e, t, n, r) {
  let i = h.innerHeight - r,
    a = Math.min(h.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function yg(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new h.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function bg() {
  return (
    document.getElementById(`template-overlay`) ??
    document.getElementById(`overlay`) ??
    document.body
  );
}
function xg(e, t) {
  return R(e) ? e : (t ?? 0);
}
function Sg(e) {
  return xg(e?.paddingTop, e?.padding) + xg(e?.paddingBottom, e?.padding);
}
function Cg(e) {
  return xg(e?.paddingLeft, e?.padding) + xg(e?.paddingRight, e?.padding);
}
function wg(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Cg(e)}px)`,
      srcSet: Jo(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Tg(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in RE)) continue;
    let n = RE[t],
      r = e[t];
    if (R(n) && R(r) && n !== r) return !0;
  }
  return !1;
}
function Eg(e) {
  let t = ve.get(e.current);
  if (!t) return !1;
  if (Tg(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Tg(e.latestValues)) return !0;
  return !1;
}
function Dg(e) {
  return O(function ({ lightbox: n, lightboxClassName: r, onClick: i, ...a }, c) {
    let d = l(be),
      f = l(_E),
      p = !!f,
      h = M(null),
      g = c ?? h,
      y = M(),
      b = u(() => wg(n, a.background), [n, a.background]),
      [x, S] = j(!1),
      [w, E] = j(),
      O = t(() => {
        n &&
          (x
            ? o(() => {
                S(!0);
              })
            : I.read(() => {
                if (!g.current) return;
                let e = getComputedStyle(g.current),
                  t =
                    g.current.getAttribute(`data-border`) === `true`
                      ? getComputedStyle(g.current, `::after`)
                      : void 0,
                  r = g.current.offsetWidth ?? 1,
                  i = g.current.offsetHeight ?? 1,
                  a = Eg(g) || p ? { duration: 0 } : n.transition;
                o(() => {
                  (E({
                    borderRadius: e.borderRadius,
                    aspectRatio: r / (i || 1),
                    borderTop: t?.borderTopWidth,
                    borderRight: t?.borderRightWidth,
                    borderBottom: t?.borderBottomWidth,
                    borderLeft: t?.borderLeftWidth,
                    borderStyle: t?.borderStyle,
                    borderColor: t?.borderColor,
                    transition: a,
                    imageRendering: e.imageRendering,
                    filter: e.filter,
                  }),
                    S(!0),
                    f?.stop());
                });
              }));
      }, [n, x, g, f?.stop, p]),
      k = w?.aspectRatio ?? 1,
      A = kh(() => {
        if (!n || !b?.src) return;
        let e = y.current?.[b.src];
        if (e) return e;
        let t = vg(k, n.maxWidth, Cg(n), Sg(n)),
          r = yg(b, { width: t, height: t * k });
        return ((y.current = { [b.src]: r }), r);
      }),
      ee = t(
        async (e) => {
          (i?.(e), !x && n && b && (await A(), O()));
        },
        [i, O, x, b, n, A]
      ),
      te = t((e) => {
        (e?.stopPropagation(),
          o(() => {
            S(!1);
          }));
      }, []);
    (_g(x, te),
      _(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            A();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, A),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, A));
          }
        );
      }, [A, g, n]));
    let ne = m(),
      re = w?.transition ?? a.transition ?? d.transition,
      ie = w?.borderRadius,
      ae = w?.imageRendering,
      oe = w?.filter,
      se = w?.borderTop,
      ce = w?.borderRight,
      le = w?.borderBottom,
      ue = w?.borderLeft,
      de = w?.borderStyle,
      fe = w?.borderColor,
      pe = !!(se || ce || le || ue || de || fe),
      me = pe
        ? {
            "--border-top-width": se,
            "--border-right-width": ce,
            "--border-bottom-width": le,
            "--border-left-width": ue,
            "--border-style": de,
            "--border-color": fe,
          }
        : void 0,
      he = { [sC]: a.id },
      ge = xg(n?.paddingTop, n?.padding),
      _e = xg(n?.paddingBottom, n?.padding),
      P = xg(n?.paddingLeft, n?.padding),
      ve = xg(n?.paddingRight, n?.padding),
      ye = w?.borderRadius ? { ...a.style, borderRadius: w.borderRadius } : a.style,
      xe = x ? (a.layoutDependency ? `${a.layoutDependency}-open` : `open`) : a.layoutDependency,
      Se = p && x ? void 0 : (a.layoutId ?? (n ? ne : void 0));
    return /* @__PURE__ */ T(v, {
      children: [
        /* @__PURE__ */ D(e, {
          ...a,
          style: ye,
          onClick: ee,
          layoutId: Se,
          ref: g,
          layoutDependency: xe,
          transition: re,
        }),
        /* @__PURE__ */ D(Ae, {
          onExitComplete: () => {
            o(() => {
              (E(void 0), f?.start());
            });
          },
          children:
            x &&
            n &&
            b &&
            /* @__PURE__ */ D(
              s,
              {
                children: C(
                  /* @__PURE__ */ T(v, {
                    children: [
                      /* @__PURE__ */ D(N.div, {
                        ...he,
                        className: r,
                        onClick: te,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: re,
                        initial: zE,
                        animate: BE,
                        exit: zE,
                      }),
                      /* @__PURE__ */ D(N.div, {
                        ...he,
                        className: r,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${ge}px ${ve}px ${_e}px ${P}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: /* @__PURE__ */ D(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: k,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: /* @__PURE__ */ D(N.div, {
                            layoutId: Se,
                            transition: re,
                            onClick: O,
                            className: `framer-lightbox-container`,
                            "data-border": pe,
                            style: {
                              aspectRatio: k,
                              borderRadius: ie,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ae,
                              filter: oe,
                              ...me,
                            },
                            children: /* @__PURE__ */ D(rs, {
                              image: b,
                              alt: b.alt,
                              draggable: a.draggable,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  bg()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Og(e) {
  let t = {};
  for (let n in e) (Re(n) || cb(n)) && (t[n] = e[n]);
  return t;
}
function kg(e, t) {
  return UE && !t
    ? Document.parseHTMLUnsafe(e)
    : ((HE ??= new DOMParser()), HE.parseFromString(e, t ?? `text/html`));
}
function Ag(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function jg(e, t, n, r) {
  return e.replace(WE, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = pd(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Kh(f) || !Kh(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Tn(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = hd(u);
    if (!_ || L(_)) return e;
    Md(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(bC, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Xi(m, v)), i + o + `"${Ag(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Mg(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Ng(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Pg(e, t, n) {
  let r = M([]);
  Mg(r.current, e) ||
    ((r.current = e),
    pb.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      t && n.current && U.current() === U.canvas && e > 0 && $s(n.current);
    }));
}
function Fg() {
  return { current: null };
}
async function Ig(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        ((n = e), e === null ? t.abort() : r(e));
      },
      configurable: !0,
    }),
    i
  );
}
function Lg(e) {
  return e in JE;
}
function Rg(e, t) {
  let n = {};
  for (let r in e) {
    if (!Lg(r)) continue;
    let i = e[r],
      a = JE[r];
    Ke(i) || Ke(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function zg(e, t = `character`, n, r, i) {
  if (r) {
    let t = Fg();
    return (n.add(t), /* @__PURE__ */ D(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = e.length <= 12;
        return /* @__PURE__ */ T(
          s,
          {
            children: [
              /* @__PURE__ */ D(`span`, {
                style: { whiteSpace: o ? `nowrap` : `unset` },
                children: e.match(YE)?.map((e, t) => {
                  let r = Fg();
                  return (
                    n.add(r),
                    /* @__PURE__ */ D(`span`, { ref: r, style: i, children: e }, e + t)
                  );
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Fg();
        return (
          n.add(o),
          /* @__PURE__ */ T(
            s,
            {
              children: [
                /* @__PURE__ */ D(`span`, { ref: o, style: i, children: e }),
                a ? null : ` `,
              ],
            },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function Bg(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      V(t);
  }
}
function Vg(e) {
  let t = [];
  return (
    R(e.x) && t.push(`translateX(${e.x}px)`),
    R(e.y) && t.push(`translateY(${e.y}px)`),
    R(e.scale) && t.push(`scale(${e.scale})`),
    R(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    R(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    R(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    R(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    R(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Hg(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Vg(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Vg(n.effect),
              };
      }
    default:
      V(i);
  }
}
function Ug(e, t, n) {
  let r = Ro(() => /* @__PURE__ */ new Set()),
    i = Vo(),
    a = n || !i,
    o = Be(),
    s = M({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let c = e?.trigger ?? `onMount`,
    l = e?.target,
    d = e?.threshold;
  _(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            Gg(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          V(t);
      }
    }
    switch (c) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? ye(n, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = l?.ref?.current;
        return t
          ? ye(t, e, {
              amount: d ?? 0,
              root: document,
              margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        V(c);
    }
  }, [a, r, n, t, l, d, c]);
  let f = !!e,
    p = e ? Bg(e) : void 0;
  return u(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !f)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = Hg(a, n || Wg(e, t, i), s.current.effect, o);
        return {
          text: (e) => zg(e, p, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Fg();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            Gg(p, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            V(t);
        }
      },
    }),
    [a, f, r, n, p]
  );
}
function Wg(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Gg(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Rg(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await Kg(n, u);
      if (
        e === null ||
        (Me(e, l, { ...r, restDelta: 0.001, delay: me(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Me(e, n, { ...r, restDelta: 0.001, delay: me(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Ig(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (I.read(() => {
          ((e = qg(n)),
            e.length !== 0 &&
              I.update(() => {
                let t = e.map((e, t) =>
                  Me(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Me(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      V(e);
  }
}
async function Kg(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Ig(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function qg(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function Jg(e) {
  return e.type === s;
}
function Yg(e) {
  return e.type === `br`;
}
function Xg(e, t, n, r, a = {}, o, s = Jg(e) ? -1 : 0) {
  let l = i.toArray(e.props.children);
  Ke(n) || (l = l.slice(0, 1));
  let u = !0;
  l = l.map((e) => {
    if (((!E(e) || !Yg(e)) && (u = !1), E(e))) return Xg(e, t, n, r, a, o, s + 1);
    let i = Ke(n) ? e : n;
    return L(i) && o ? o.text(i) : i;
  });
  let { "data-preset-tag": d, ...f } = e.props;
  if (L(e.type) || ze(e.type)) {
    let n = Ee(e.type) || e.type,
      c = d || n,
      p = L(c) ? t?.[c] : void 0;
    ((f.className = Rl(`framer-text`, f.className, p)),
      o && s === 0 && !u && Object.assign(f, o.props(f.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = Zg(l, a);
      f.id = e;
      let t = Rl(`framer-text`, h),
        n = /* @__PURE__ */ D(`a`, { href: `#${e}`, className: t, children: l });
      ((f.style = { ...f.style, scrollMarginTop: r }), (l = [n]));
    }
    c === `ol` &&
      (f.style = {
        ...f.style,
        [Rt]: $g(f.start ?? 1, i.count(f.children), f.style?.[`--list-style-type`] ?? ``),
      });
  }
  return c(e, f, ...l);
}
function Zg(e, t) {
  let n = Bi(e.map(Qg).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function Qg(e) {
  return L(e) || R(e)
    ? e.toString()
    : E(e)
      ? Qg(e.props.children)
      : Array.isArray(e)
        ? e.map(Qg).join(``)
        : ``;
}
function $g(e, t, n) {
  return st(Number(e) || 1, t, n);
}
function e_(e) {
  try {
    let t = kg(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function t_(e, t) {
  r_(e, n_(t));
}
function n_(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function r_(e, t) {
  (i_(e, t),
    Array.from(e.children).forEach((e) => {
      r_(e, t);
    }));
}
function i_(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function a_(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (t?.[1] !== void 0 && t?.[2] !== void 0 && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (cD[t[2]] || 1));
}
function o_(e) {
  let t = a_(e.getAttribute(`width`)),
    n = a_(e.getAttribute(`height`));
  if (typeof t == `number` && typeof n == `number` && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function s_(e) {
  return e > lD ? `lazy` : void 0;
}
function c_(e, t, n) {
  let r = d_(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function l_(e) {
  return e ? (e.fonts ?? wa()) : wa();
}
function u_(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : d_(e);
}
function d_(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    f_(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(p_) })
      : t.fonts.push(p_(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function f_(e) {
  return dD in e;
}
function p_(e) {
  let t = m_(e) || h_(e) ? e : g_(e);
  return h_(t) ? t : __(t);
}
function m_(e) {
  return `source` in e;
}
function h_(e) {
  return `cssFamilyName` in e;
}
function g_(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function __(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${uD}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function v_(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function y_(e, t) {
  let n = Dv({ batch: !0, priority: t.priority, signal: t.signal });
  return n ? n.then(e) : e();
}
async function b_(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = Dv({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function x_(e) {
  return e.loader;
}
function S_(e, t, n) {
  let r = x_(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Y,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  X,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Z,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  Q,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  $,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD;
function fD() {
  return (fD = e(() => {
    (ne(),
      Ie(),
      Zt(),
      a(),
      k(),
      g(),
      (C_ = /* @__PURE__ */ new Map()),
      (w_ = /* @__PURE__ */ new Map()),
      (T_ = /* @__PURE__ */ new Set()),
      (E_ = `:`),
      (D_ = ht ? void 0 : /* @__PURE__ */ new Set()),
      (O_ = `preload`),
      (k_ = Object.keys),
      (A_ = `equals`),
      (j_ = /* @__PURE__ */ p.createContext({})),
      (M_ = /* @__PURE__ */ p.createContext({})),
      (N_ = []),
      (P_ = `default`),
      (F_ = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (I_ = class e {
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = F_.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && $t(t, e));
        }
        then(e, t) {
          return this.promiseState === F_.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === F_.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== F_.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && D_ !== void 0 && D_.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = F_.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = F_.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && C_.has(this.cacheHash) ? C_.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!Qe(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === F_.Fulfilled) return this.value;
          throw this.promiseState === F_.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (L_ = 2 ** 32 - 1),
      (R_ = L_ - 1),
      (z_ = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (B_ = /* @__PURE__ */ Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (V_ = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (H_ = typeof Uint8Array.fromBase64 == `function`),
      (U_ = typeof process == `object` && process.versions?.node !== void 0),
      (W_ = H_ ? Vn : U_ ? Un : Gn),
      (G_ = H_ ? Hn : U_ ? Wn : Kn),
      (K_ = /* @__PURE__ */ Object.freeze({ kind: `not-plain` })),
      (q_ = /* @__PURE__ */ Object.freeze({ kind: `symbol-keys` })),
      (J_ = /* @__PURE__ */ Object.freeze({
        identify: (e) => e,
        typeOf: (e) => (e === null ? `null` : typeof e),
        toPrimitive: (e) => e,
        tagOf: (e) => An(e),
        isThenable: (e) => typeof e.then == `function`,
        toPromise: (e) => Promise.resolve(e),
        unbox: (e) => e.valueOf(),
        toISOString: (e) => (isNaN(e.getDate()) ? `` : e.toISOString()),
        toStringValue: (e) => e.toString(),
        regExpInfo: (e) => ({ source: e.source, flags: e.flags }),
        valuesOf: (e) => e,
        entriesOf: (e) => e,
        viewInfo: (e) => (
          jn(e) && (e = new Uint8Array(e)),
          {
            buffer: e.buffer,
            byteOffset: e.byteOffset,
            byteLength: e.byteLength,
            length: e.length,
            bufferByteLength: e.buffer.byteLength,
          }
        ),
        toArrayBuffer: (e) => e,
        lengthOf: (e) => e.length,
        hasOwn: (e, t) => Object.hasOwn(e, t),
        indicesOf: (e) => Bn(e),
        shapeOf: (e) =>
          kn(e)
            ? Pn(e).length > 0
              ? q_
              : {
                  kind: Object.getPrototypeOf(e) === null ? `null-proto` : `plain`,
                  keys: Object.keys(e),
                }
            : K_,
        get: (e, t) => e[t],
      })),
      (Y_ = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, `byteLength`).get),
      (X_ =
        typeof SharedArrayBuffer > `u`
          ? void 0
          : Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, `byteLength`).get),
      (Z_ = /* @__PURE__ */ Object.freeze({
        fromPrimitive: (e) => e,
        fromISOString: (e) => new Date(e),
        fromStringValue: (e, t) =>
          e === `URL`
            ? new URL(t)
            : e === `URLSearchParams`
              ? new URLSearchParams(t)
              : Temporal[e.slice(9)].from(t),
        fromArrayBuffer: (e) => e,
        fromRegExpInfo: (e, t) => new RegExp(e, t),
        fromViewInfo: (e, t, n, r) => {
          try {
            Y_.call(t);
          } catch (e) {
            if (!X_) throw e;
            X_.call(t);
          }
          let i = globalThis[e];
          return n === void 0 ? new i(t) : new i(t, n, r);
        },
        box: (e) => Object(e),
        createArray: (e) => Array(e),
        createSparseArray: (e) => {
          let t = [];
          return ((t[R_] = void 0), delete t[R_], (t.length = e), t);
        },
        createObject: () => ({}),
        createNullPrototypeObject: () => Object.create(null),
        createSet: () => /* @__PURE__ */ new Set(),
        createMap: () => /* @__PURE__ */ new Map(),
        set: (e, t, n) => {
          e[t] = n;
        },
        addValue: (e, t) => {
          e.add(t);
        },
        addEntry: (e, t, n) => {
          e.set(t, n);
        },
      })),
      (Q_ = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      ($_ = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (tv = class {
        payload = tr();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return Xn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (nv = ht ? void 0 : new tv()),
      (rv = $_.CollectionUtilsCache),
      (iv = /* @__PURE__ */ new WeakMap()),
      (av = /* @__PURE__ */ A(void 0)),
      (ov = class {
        collectionId;
        module;
        cacheMap = /* @__PURE__ */ new Map();
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new I_(async () => {
              try {
                let t = await e();
                return (B(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(et(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = or(n),
            i = sr(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (nv !== void 0) {
              if (Qe(e)) return e.then((e) => (nv.set(rv, i, e), e));
              nv.set(rv, i, e);
            }
            return e;
          }
          if (ir(rv, i)) {
            let e = ar(rv, i);
            return (this.cacheMap.set(i, new I_(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = Qe(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(et(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (nv !== void 0 && nv.set(rv, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new I_(async () => {
            try {
              let e = Qe(s) ? await s : s;
              return (nv !== void 0 && nv.set(rv, i, e), e);
            } catch (e) {
              console.error(et(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (sv = /Mac/u),
      (cv = /iPhone|iPod|iPad/iu),
      (lv = /MacIntel/iu),
      (uv = /Edg\//u),
      (dv = /Chrome/u),
      (fv = /Google Inc/u),
      (pv = /Safari/u),
      (mv = /Apple Computer/u),
      (hv = /Firefox\/\d+\.\d+$/u),
      (gv = /Version\/([\d.]+)/u),
      (_v = /FramerX/u),
      (vv = /tablet|iPad|Nexus 9/iu),
      (yv = /mobi/iu),
      (bv = 1e3 / 60),
      (xv = 40),
      (Sv = 500),
      (Cv = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (wv = /* @__PURE__ */ Promise.resolve()),
      (Tv = 100),
      (Ev = (e) => {
        I.read(e, !1, !0);
      }),
      (Dv = /* @__PURE__ */ Nr(Ev)),
      (Ov = `framer_variant`),
      (kv = /* @__PURE__ */ RegExp(`:([a-z]\\w*)`, `gi`)),
      (Av = async () => {}),
      (jv = { contentLocale: null, activeLocale: null, locales: [], setLocale: Av }),
      (Mv = /* @__PURE__ */ (() => {
        let e = p.createContext(jv);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Nv = /* @__PURE__ */ (() => {
        let e = p.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (Pv = !gt),
      (Fv = !1),
      (Iv = /* @__PURE__ */ p.createContext({ global: void 0, routes: {} })),
      (Lv = 10),
      (Rv = 1e4),
      (zv = (e) => `--view-transition-${e}`),
      (Bv = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${zv(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${zv(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${zv(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (Vv = {
        circle: {
          makeKeyframe: (e, t) => `${zv(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${zv(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${ri(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${zv(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: Bv,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${ni(e.x)} ${ni(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = ei(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${zv(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${zv(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${zv(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${zv(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${zv(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${zv(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (Hv = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (Uv = `view-transition-styles`),
      (Wv = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (Gv = () => {}),
      (qv = () => {
        let e = document.title;
        e &&
          (document.ariaNotify
            ? document.ariaNotify(e, { priority: `high` })
            : (Kv ||
                ((Kv = document.createElement(`div`)),
                Kv.setAttribute(`aria-live`, `assertive`),
                Kv.setAttribute(`aria-atomic`, `true`),
                (Kv.style.position = `absolute`),
                (Kv.style.transform = `scale(0)`),
                document.body.append(Kv)),
              setTimeout(() => {
                Kv.textContent = e;
              }, 60)));
      }),
      (Yv =
        ht &&
        typeof h.navigation?.back == `function` &&
        !(
          /* @__PURE__ */ (() => {
            if (n === void 0) return !1;
            let e = n.userAgent,
              t = e.indexOf(`Chrome/`),
              r = +e.slice(t + 7, e.indexOf(`.`, t));
            return r > 101 && r < 128;
          })()
        ) &&
        !vr()),
      (Xv = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (Zv = /* @__PURE__ */ p.createContext(null)),
      (Qv = /* @__PURE__ */ (() => {
        let e = A(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      ($v = typeof document < `u` ? d : _),
      (ey = /* @__PURE__ */ new Set()),
      (ty = /* @__PURE__ */ (() => {
        let e = A({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (ny = 46),
      (ry = 47),
      (iy = (e, t) => e.charCodeAt(t)),
      (ay = (e, t) => e.lastIndexOf(t)),
      (oy = (e, t, n) => e.slice(t, n)),
      (sy = `/`),
      (cy = (e) => e === ry),
      (ly = /* @__PURE__ */ new Set([`/404.html`, `/404`, `/404/`])),
      (uy = `__f_replay`),
      (dy = `__f_replay_ignore`),
      (fy = `data-framer-form-hydrated`),
      (py = `data-framer-form-pending-submit`),
      (my = () => ht),
      (hy =
        /* @__PURE__ */ `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (gy = (e) => {
        e.target?.closest?.(`#main`) &&
          (ua(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (_y = !1),
      (vy = class {
        markRenderStart = ha(() => {
          performance.mark(`framer-hydration-start`);
        });
        markRenderEnd = ha(() => {
          (performance.mark(`framer-hydration-render-end`),
            ga(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        });
        markUseInsertionEffectsStart = ha(() => {
          performance.mark(`framer-hydration-insertion-effects-start`);
        });
        markUseInsertionEffectRouterStart = ha(() => {
          performance.mark(`framer-hydration-router-insertion-effect`);
        });
        markUseInsertionEffectsEnd = ha(() => {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            ga(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        });
        markUseLayoutEffectsStart = ha(() => {
          performance.mark(`framer-hydration-layout-effects-start`);
        });
        markRouterUseLayoutEffectStart = ha(() => {
          performance.mark(`framer-hydration-router-layout-effect`);
        });
        markUseLayoutEffectsEnd = ha(() => {
          (performance.mark(`framer-hydration-layout-effects-end`),
            ga(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        });
        markUseEffectsStart = ha(() => {
          performance.mark(`framer-hydration-effects-start`);
        });
        markUseEffectsRouterStart = ha(() => {
          performance.mark(`framer-hydration-router-effect`);
        });
        markUseEffectsAreSynchronous = ha(() => {
          performance.mark(`framer-hydration-effects-sync`);
        });
        markUseEffectsEnd = ha(() => {
          (performance.mark(`framer-hydration-effects-end`),
            ga(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        });
        markRafStart = ha(() => {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        });
        markRafEnd = ha(() => {
          (performance.mark(`framer-hydration-browser-raf-end`),
            ga(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        });
        markLayoutStylePaintEnd = ha(() => {
          (performance.mark(`framer-hydration-first-paint`),
            ga(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            ga(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        });
        measureMutationEffects = ha(() => {
          ga(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        });
        measureUnattributedHydrationOverhead = ha(() => {
          ga(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        });
        render = { markStart: () => this.markRenderStart(), markEnd: () => this.markRenderEnd() };
        mutationEffects = { measure: () => this.measureMutationEffects() };
        useInsertionEffects = {
          markStart: () => this.markUseInsertionEffectsStart(),
          markRouterStart: () => this.markUseInsertionEffectRouterStart(),
          markEnd: () => this.markUseInsertionEffectsEnd(),
        };
        useLayoutEffects = {
          markStart: () => this.markUseLayoutEffectsStart(),
          markRouterStart: () => this.markRouterUseLayoutEffectStart(),
          markEnd: () => this.markUseLayoutEffectsEnd(),
        };
        useEffects = {
          markStart: () => this.markUseEffectsStart(),
          markRouterStart: () => this.markUseEffectsRouterStart(),
          markEnd: () => this.markUseEffectsEnd(),
          markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
        };
        browserRendering = {
          hasStarted: !1,
          requestAnimationFrame: {
            markStart: () => this.markRafStart(),
            markEnd: () => this.markRafEnd(),
          },
          layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
        };
        unattributedHydrationOverhead = {
          measure: () => this.measureUnattributedHydrationOverhead(),
        };
      }),
      (by = !1),
      (xy = { Start: xa, End: Sa }),
      (Sy = class extends Error {}),
      (Cy = class extends b {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof Sy)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Ca(e, t);
        }
      }),
      (wy = /* @__PURE__ */ Object.freeze([])),
      (Ey = /* @__PURE__ */ new Set()),
      (Dy = class {
        observers = /* @__PURE__ */ new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (Oy = /* @__PURE__ */ (() => {
        function e(e) {
          return (
            Wa(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Ga(e) ? e : new jy(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = /* @__PURE__ */ new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Ga(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              t[n] = Ga(r) ? r.get() : r;
            }
            return t;
          }),
          e
        );
      })()),
      (ky = `onUpdate`),
      (Ay = `finishTransaction`),
      (jy = class {
        value;
        observers = new Dy();
        constructor(e) {
          this.value = e;
        }
        static interpolationFor(e, t) {
          if (Ga(e)) return Ka(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Ga(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      (function (e) {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Ja(e.x, t.x), y: Ja(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(e) {
          let t = Xa.centroid(e),
            n = /* @__PURE__ */ new Map();
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            i && n.set(i, Math.atan2(i.y - t.y, i.x - t.x));
          }
          return e.sort((e, t) => (n.get(e) ?? 0) - (n.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((Xa ||= {})),
      (My = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (Ny = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (Ny.hexChars = `0123456789abcdef`),
      (Ny.refY = 1),
      (Ny.refU = 0.19783000664283),
      (Ny.refV = 0.46831999493879),
      (Ny.kappa = 903.2962962),
      (Ny.epsilon = 0.0088564516),
      (Ny.m_r0 = 3.240969941904521),
      (Ny.m_r1 = -1.537383177570093),
      (Ny.m_r2 = -0.498610760293),
      (Ny.m_g0 = -0.96924363628087),
      (Ny.m_g1 = 1.87596750150772),
      (Ny.m_g2 = 0.041555057407175),
      (Ny.m_b0 = 0.055630079696993),
      (Ny.m_b1 = -0.20397695888897),
      (Ny.m_b2 = 1.056971514242878),
      (Py = /* @__PURE__ */ new Ny()),
      (Fy = /* @__PURE__ */ (() => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
          t = `[\\s|\\(]+(` + e + `)[,|\\s]+(` + e + `)[,|\\s]+(` + e + `)\\s*\\)?`,
          n =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)\\s*\\)?`;
        return {
          rgb: RegExp(`rgb` + t),
          rgba: RegExp(`rgba` + n),
          hsl: RegExp(`hsl` + t),
          hsla: RegExp(`hsla` + n),
          hsv: RegExp(`hsv` + t),
          hsva: RegExp(`hsva` + n),
          hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
          hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
          hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
          hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        };
      })()),
      (Iy =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Ly = (e) => {
        let { r: t, g: n, b: r, a: i } = xo(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Ry = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Co({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (zy = (e) => {
        let { r: t, g: n, b: r, a: i } = xo(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (By = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Co({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Vy = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return wo(this);
        }
        rgb() {
          return Oo(this);
        }
        hsl() {
          return oo(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Eo(t));
            case `srgb`:
              return new e(Do(Eo(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Do({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = Y(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = yo(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!L(t) || !Y.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Hy = /* @__PURE__ */ new Map()),
      (Y = /* @__PURE__ */ (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Hy.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Hy.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = ko(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          }
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && go(e) !== !1),
          (e.isColorObject = (e) =>
            z(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => ao(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Vy.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...to(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = lo(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = lo(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = ao(e.r, e.g, e.b, !0);
            for (let e of Object.keys(My)) if (My[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Za(i, [0, 1], [t.r, r.r], a),
                g: Za(i, [0, 1], [t.g, r.g], a),
                b: Za(i, [0, 1], [t.b, r.b], a),
                a: Za(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Za(i, [0, 1], [u, u + f], a),
                s: Za(i, [0, 1], [c.s, l.s], a),
                l: Za(i, [0, 1], [c.l, l.l], a),
                a: Za(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(no(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => oo(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !(
              (t.toLowerCase().slice(-5) !== `color` && t !== `fill` && t !== `stroke`) ||
              typeof n != `string` ||
              !e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (Uy = (e) => e instanceof Pe),
      (Wy = /* @__PURE__ */ F((e, t) => {
        var n = Object.prototype.hasOwnProperty,
          r = `~`;
        function i() {}
        Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
        function a(e, t, n) {
          ((this.fn = e), (this.context = t), (this.once = n || !1));
        }
        function o(e, t, n, i, o) {
          if (typeof n != `function`) throw TypeError(`The listener must be a function`);
          var s = new a(n, i || e, o),
            c = r ? r + t : t;
          return (
            e._events[c]
              ? e._events[c].fn
                ? (e._events[c] = [e._events[c], s])
                : e._events[c].push(s)
              : ((e._events[c] = s), e._eventsCount++),
            e
          );
        }
        function s(e, t) {
          --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
        }
        function c() {
          ((this._events = new i()), (this._eventsCount = 0));
        }
        ((c.prototype.eventNames = function () {
          var e = [],
            t,
            i;
          if (this._eventsCount === 0) return e;
          for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
          return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
        }),
          (c.prototype.listeners = function (e) {
            var t = r ? r + e : e,
              n = this._events[t];
            if (!n) return [];
            if (n.fn) return [n.fn];
            for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
            return o;
          }),
          (c.prototype.listenerCount = function (e) {
            var t = r ? r + e : e,
              n = this._events[t];
            return n ? (n.fn ? 1 : n.length) : 0;
          }),
          (c.prototype.emit = function (e, t, n, i, a, o) {
            var s = r ? r + e : e;
            if (!this._events[s]) return !1;
            var c = this._events[s],
              l = arguments.length,
              u,
              d;
            if (c.fn) {
              switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                case 1:
                  return (c.fn.call(c.context), !0);
                case 2:
                  return (c.fn.call(c.context, t), !0);
                case 3:
                  return (c.fn.call(c.context, t, n), !0);
                case 4:
                  return (c.fn.call(c.context, t, n, i), !0);
                case 5:
                  return (c.fn.call(c.context, t, n, i, a), !0);
                case 6:
                  return (c.fn.call(c.context, t, n, i, a, o), !0);
              }
              for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
              c.fn.apply(c.context, u);
            } else {
              var f = c.length,
                p;
              for (d = 0; d < f; d++)
                switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                  case 1:
                    c[d].fn.call(c[d].context);
                    break;
                  case 2:
                    c[d].fn.call(c[d].context, t);
                    break;
                  case 3:
                    c[d].fn.call(c[d].context, t, n);
                    break;
                  case 4:
                    c[d].fn.call(c[d].context, t, n, i);
                    break;
                  default:
                    if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                    c[d].fn.apply(c[d].context, u);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (e, t, n) {
            return o(this, e, t, n, !1);
          }),
          (c.prototype.once = function (e, t, n) {
            return o(this, e, t, n, !0);
          }),
          (c.prototype.removeListener = function (e, t, n, i) {
            var a = r ? r + e : e;
            if (!this._events[a]) return this;
            if (!t) return (s(this, a), this);
            var o = this._events[a];
            if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
            else {
              for (var c = 0, l = [], u = o.length; c < u; c++)
                (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
              l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (e) {
            var t;
            return (
              e
                ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                : ((this._events = new i()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = r),
          (c.EventEmitter = c),
          t !== void 0 && (t.exports = c));
      })),
      (Gy = Wy().EventEmitter),
      (Ky = class {
        _emitter = new Gy();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (qy = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Jy = H.requestAnimationFrame || qy),
      (Yy = (e) => Jy(e)),
      (Xy = 1 / 60),
      (Zy = class extends Ky {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          Xy = e;
        }
        static get TimeStep() {
          return Xy;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return (this._started || ((this._frame = 0), (this._started = !0), Yy(this.tick)), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Xy;
        }
        tick = () => {
          this._started &&
            (Yy(this.tick),
            this.emit(`update`, this._frame, Xy),
            this.emit(`render`, this._frame, Xy),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (Qy = /* @__PURE__ */ new Zy()),
      ($y = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Ce({
        borderTopWidth: $y(`y`),
        borderLeftWidth: $y(`x`),
        borderRightWidth: $y(`x`),
        borderBottomWidth: $y(`y`),
      }),
      (eb = /* @__PURE__ */ p.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (tb = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (nb = {
        ...tb,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (rb = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (ib = { ...rb, fontWeight: 500 }),
      (ab = {
        ...rb,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (ob = (e) => e),
      (sb =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (cb = /* #__PURE__ */ Uo(
        (e) =>
          sb.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (lb = (e) => () => {
        Ua(e);
      }),
      (ub = () => () => {}),
      (db = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = pb.useImageSource(e, t, n);
          return u(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        fontStore: {
          isSelectorLoaded() {
            return !0;
          },
          async loadFonts() {
            return { newlyLoadedFontCount: 0 };
          },
          async loadWebFontsFromSelectors() {
            return [];
          },
          async loadMissingFonts() {},
        },
        isOnPageCanvas: !1,
      }),
      (fb = !1),
      (pb = /* @__PURE__ */ new Proxy(db, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? ub()
              : lb(
                  fb
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (mb = {
        isSelectorLoaded(e) {
          return pb.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return pb.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return pb.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return pb.fontStore.loadMissingFonts(e, t);
        },
      }),
      (hb = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (gb = [1, 2, 2.2]),
      (_b = [512, 1024, 2048, 4096]),
      (vb = { position: `absolute`, ...hb, top: 0, right: 0, bottom: 0, left: 0 }),
      (yb = `src`),
      (bb = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && yb in e;
        },
      }),
      (xb = /* @__PURE__ */ (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = ds(Xa.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(Xa(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => Xa.distance(e.a, e.b)),
          e
        );
      })()),
      (X = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => X.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: qa(e.x, t),
          y: qa(e.y, t),
          width: qa(e.width, t),
          height: qa(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: X.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: X.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: Xa.distance(t, n), height: Xa.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(X.minX)), y: Math.min(...e.map(X.minY)) },
            n = { x: Math.max(...e.map(X.maxX)), y: Math.max(...e.map(X.maxY)) };
          return X.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: X.minX(e), y: X.minY(e) },
          { x: X.minX(e), y: X.maxY(e) },
          { x: X.maxX(e), y: X.minY(e) },
          { x: X.maxX(e), y: X.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < X.minX(e) ||
            t.x > X.maxX(e) ||
            t.y < X.minY(e) ||
            t.y > X.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of X.points(t)) if (!X.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= X.maxX(e) || X.maxX(t) <= e.x || t.y >= X.maxY(e) || X.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = X.maxX(e),
            r = X.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = X.maxY(e),
            r = X.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => !t.some((t) => X.intersects(t, e)),
        isEqual: (e, t) => X.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > X.maxX(e) && (n = t.x - X.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > X.maxY(e) && (r = t.y - X.maxY(e)),
            Xa.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: X.minX(e), y: X.minY(e) },
            r = { x: X.minX(t), y: X.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = X.minX(e),
            r = X.minY(e),
            i = X.maxX(e),
            a = X.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = X.cornerPoints(e);
          return [xb(t, n), xb(n, r), xb(r, i), xb(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  V(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              V(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  V(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              V(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = X.center(e),
            r = xb(t, n),
            i = X.edges(e);
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if (t && xb.intersection(r, t, !0)) {
              let n = Sb[e];
              return (B(n, () => `Invalid edge name: ${JSON.stringify(Sb)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          B(r, `Rect array is empty`);
          let i = X.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            B(o);
            let s = X.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Sb = [`top`, `right`, `bottom`, `left`]),
      (Cb = {
        quickfix: (e) => (
          (fs(e.widthType) || fs(e.heightType)) && (e.aspectRatio = null),
          K(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || fs(e.widthType) || K(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || fs(e.heightType) || K(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (wb = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = Cb.quickfix({
              left: K(t) || Ga(t),
              right: K(n) || Ga(n),
              top: K(r) || Ga(r),
              bottom: K(i) || Ga(i),
              widthType: ps(a),
              heightType: ps(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = Oy.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Oy.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Oy.getNumber(t) : null,
              right: d.right ? Oy.getNumber(n) : null,
              top: d.top ? Oy.getNumber(r) : null,
              bottom: d.bottom ? Oy.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? Oy.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Oy.getNumber(t?.sizing.height) : null,
            c = ys(e.left, e.right);
          if (o && K(c)) i = o - c;
          else if (n && fs(e.widthType)) i = n.width;
          else if (K(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                V(e.widthType);
            }
          let l = ys(e.top, e.bottom);
          if (s && K(l)) a = s - l;
          else if (n && fs(e.heightType)) a = n.height;
          else if (K(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                V(e.heightType);
            }
          return vs(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = wb.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Oy.getNumber(l.width) : null,
            d = l ? Oy.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? X.pixelAligned(f) : f;
        },
      }),
      (Tb = 200),
      (Eb = 200),
      (Db = /* @__PURE__ */ p.createContext({ parentSize: 0 })),
      (Ob = (e) => {
        let t = Ds(),
          { parentSize: n, children: r } = e,
          i = p.useMemo(() => ({ parentSize: n }), [ks(n), As(n)]);
        return t === 1
          ? r
            ? /* @__PURE__ */ D(v, { children: r })
            : null
          : /* @__PURE__ */ D(Db.Provider, { value: i, children: r });
      }),
      (kb = /* @__PURE__ */ p.createContext(void 0)),
      (Ab = `style[data-framer-css-ssr-minified]`),
      (jb = /* #__PURE__ */ (() => {
        if (!br()) return /* @__PURE__ */ new Set();
        let e = document.querySelector(Ab)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : /* @__PURE__ */ new Set();
      })()),
      (Mb = `data-framer-css-ssr`),
      (Nb = (e, t, n) => (
        Is() &&
          n !== void 0 &&
          !He(t) &&
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).filter(Boolean),
        p.forwardRef((r, i) => {
          let { sheet: a, cache: o } = p.useContext(kb) ?? {},
            s = n;
          if (!br()) {
            He(t) && (t = t(Ls(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Fb.add(e, s);
          }
          return (
            f(() => {
              (s && jb.has(s)) ||
                (He(t)
                  ? t(Ls(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && nt(e, a, o));
            }, []),
            /* @__PURE__ */ D(e, { ...r, ref: i })
          );
        })
      )),
      (Pb = class {
        styles = /* @__PURE__ */ new Set();
        componentIds = /* @__PURE__ */ new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (Fb = /* @__PURE__ */ new Pb()),
      (Rb = /* @__PURE__ */ _r()),
      (zb = /* @__PURE__ */ p.createContext(!1)),
      (Bb = class {
        sharedResizeObserver;
        callbacks = /* @__PURE__ */ new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (Vb = br() ? new Bb() : void 0),
      (Hb = `0.000001px`),
      (Ub = ` translateZ(${Hb})`),
      (Wb = Sr() || vr() || Cr()),
      (Gb = /* @__PURE__ */ (() => {
        class e extends b {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? ec(t) : tc(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !gn(this.props, e);
          }
          componentDidUpdate(e) {
            ob(this.props).clip &&
              ob(this.props).radius === 0 &&
              ob(e).radius !== 0 &&
              rc(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (Kb = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (qb = {
        hueRotate: (e, t) => Y.toHslString(Y.hueRotate(Y(e), t)),
        setAlpha: (e, t) => Y.toRgbString(Y.alpha(Y(e), t)),
        getAlpha: (e) => {
          let t = go(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => Y.toRgbString(Y.multiplyAlpha(Y(e), t)),
        toHexValue: (e) => Y.toHex(Y(e)).toUpperCase(),
        toHex: (e) => Y.toHexString(Y(e)).toUpperCase(),
        toRgb: (e) => Y.toRgb(Y(e)),
        toRgbString: (e) => Y.toRgbString(Y(e)),
        toHSV: (e) => Y.toHsv(Y(e)),
        toHSL: (e) => Y.toHsl(Y(e)),
        toHslString: (e) => Y.toHslString(Y(e)),
        toHsvString: (e) => Y.toHsvString(Y(e)),
        hsvToHSLString: (e) => Y.toHslString(Y(ro(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => Y.toHex(Y(ro(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => Y.toHexString(Y(ro(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => Y.toRgbString(Y(ro(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => ro(e.h, e.s, e.v),
        rgbaToString: (e) => Y.toRgbString(Y(e)),
        rgbToHexValue: (e) => Y.toHex(Y(e)),
        rgbToHexString: (e) => Y.toHexString(Y(e)),
        hslToString: (e) => Y.toHslString(Y(e)),
        hslToRgbString: (e) => Y.toRgbString(Y(e)),
        toColorPickerSquare: (e) => Y.toRgbString(Y({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => Y(e).isValid !== !1,
        equals: (e, t) =>
          Y.isP3String(e) || Y.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = Y(e)),
              typeof t == `string` && (t = Y(t)),
              Y.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = Y(e);
          return t.a === 1 ? Y.toHexString(t) : Y.toRgbString(t);
        },
        toFormatString: (e) => (Y.isP3String(e) ? e : Y.toRgbString(Y(e))),
      }),
      (Jb = /var\(.+\)/u),
      (Yb = /* @__PURE__ */ new Map()),
      (Xb = [`stops`]),
      (Zb = [`start`, `end`]),
      (Qb = [`angle`, `alpha`]),
      ($b = {
        isLinearGradient: (e) => z(e) && Qb.every((t) => t in e) && (dc(e) || uc(e)),
        hash: (e) => e.angle ^ lc(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = cc(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (ex = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (tx = {
        isRadialGradient: (e) => z(e) && ex.every((t) => t in e) && (dc(e) || uc(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ lc(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = cc(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (nx = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (rx = /* @__PURE__ */ new Set([...nx, ...nx.map((e) => `${e}Capture`)])),
      (ix = `overflow`),
      (ax = { x: 0, y: 0, width: 200, height: 200 }),
      (ox = /* @__PURE__ */ new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (sx = /* @__PURE__ */ O(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = Ws(e),
          u = Sc(s),
          d = Ks(e),
          f = _c(e),
          p = M(null),
          m = t ?? p,
          h = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": f,
            "data-framer-highlight": f === `pointer` || void 0,
            "data-layoutid": d,
            "data-framer-offset-parent-id": ob(e)[`data-framer-offset-parent-id`],
          };
        !Cc(e) && n && (ob(h)[`data-framer-name`] = n);
        let [g, _] = xc(s),
          y = bc(s),
          b = Ns(y),
          x = r && !(_ && !b && xs(y)) ? r : void 0;
        (x ? (u.transformTemplate ||= Gs(r)) : (u.transformTemplate ||= void 0),
          Object.assign(h, Hs(x, s.style)),
          Qs(e, m));
        let S = ss(e),
          C = wc(s, y, _, l(zb)),
          w = js(
            /* @__PURE__ */ T(v, {
              children: [
                S
                  ? /* @__PURE__ */ D(rs, {
                      alt: e.alt ?? ``,
                      image: S,
                      containerSize: _ ?? void 0,
                      nodeId: e.id && Us(e.id),
                      layoutId: d,
                    })
                  : null,
                c,
                /* @__PURE__ */ D(as, { ...a, border: i, layoutId: d }),
              ],
            }),
            C
          ),
          E = Fs(e.as),
          O = Ps(S);
        return (
          e.fitImageDimension &&
            O &&
            ((g[e.fitImageDimension] = `auto`), (g.aspectRatio = O.width / O.height)),
          /* @__PURE__ */ T(E, { ...h, ...u, layoutId: d, style: g, ref: m, children: [w, o] })
        );
      })),
      (cx = /* @__PURE__ */ Bs(
        /* @__PURE__ */ O(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? /* @__PURE__ */ D(sx, { ...e, ref: t }) : null;
        })
      )),
      (lx = `__LAYOUT_TREE_ROOT`),
      (ux = /* @__PURE__ */ p.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (dx = class extends b {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity:
                  t.options.layoutId === `__LAYOUT_TREE_ROOT` && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return /* @__PURE__ */ D(ux.Provider, {
            value: this.sharedLayoutContext,
            children: this.props.children,
          });
        }
      }),
      (fx = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (px = class {
        sharedIntersectionObserver;
        callbacks = /* @__PURE__ */ new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (mx = /* @__PURE__ */ A(/* @__PURE__ */ new Map())),
      (hx = typeof IntersectionObserver > `u` ? mt : Mc),
      (gx = /* @__PURE__ */ Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (_x = /* @__PURE__ */ p.createContext(null)),
      (vx = class extends b {
        layoutMaybeMutated = !1;
        projectionNodes = /* @__PURE__ */ new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) =>
          e.options.layoutId === `__LAYOUT_TREE_ROOT` && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return /* @__PURE__ */ D(Oe.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (yx = (e) => {
        let t = p.useContext(ux);
        return /* @__PURE__ */ D(vx, { ...e, sharedLayoutContext: t });
      }),
      (bx = /* @__PURE__ */ p.createContext(!0)),
      (xx = /* @__PURE__ */ A({ register: () => {}, deregister: () => {} })),
      (Sx = ({ isCurrent: e, isOverlayed: n, children: r }) => {
        let i = Rc(),
          a = t(
            (e) => {
              i.has(e)
                ? console.warn(`NavigationTargetWrapper: already registered`)
                : i.set(e, void 0);
            },
            [i]
          ),
          o = t(
            (e) => {
              (i.get(e)?.(), i.delete(e));
            },
            [i]
          ),
          s = M({ register: a, deregister: o }).current;
        return (
          _(
            () => (
              i.forEach((t, r) => {
                let a = r(e, n);
                i.set(r, He(a) ? a : void 0);
              }),
              () => {
                i.forEach((e, t) => {
                  e && (e(), i.set(t, void 0));
                });
              }
            ),
            [e, n, i]
          ),
          /* @__PURE__ */ D(xx.Provider, { value: s, children: r })
        );
      }),
      (Cx = /* @__PURE__ */ p.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
        backfaceVisible: u,
        exitBackfaceVisible: d,
        animation: f,
        exitAnimation: p,
        instant: m,
        initialProps: h,
        exitProps: g,
        position: v = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: y,
        index: b,
        areMagicMotionLayersPresent: x,
        id: S,
        isInitial: C,
      }) {
        let w = fe(),
          E = l(Se),
          { persistLayoutIdCache: O } = l(eb),
          k = M({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Vc({}, h, a),
          }),
          A = M(null),
          j = E !== null && !E.isPresent;
        (t && k.current.wasCurrent === void 0 && O(),
          _(() => {
            if (e || !w) return;
            if (j) {
              k.current = { ...k.current, wasBeingRemoved: j };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = k.current,
              o = (t && !i) || (!j && k.current.wasBeingRemoved && t),
              s = n && !r,
              c = Vc(k.current.origins, h, a),
              l = k.current.wasReset;
            (o || s
              ? (w.stop(), w.start({ zIndex: b, ...c, ...a }), (l = !1))
              : l === !1 && (w.stop(), w.set({ zIndex: b, ...wx, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, j]));
        let ee = m ? { type: !1 } : `velocity` in f ? { ...f, velocity: 0 } : f,
          te = m ? { type: !1 } : p || f,
          ne = { ...v };
        ((ne.left === void 0 || ne.right === void 0) && (ne.width = `auto`),
          (ne.top === void 0 || ne.bottom === void 0) && (ne.height = `auto`));
        let re = (Hc(a) || Hc(h)) && (e || t || n) ? 1200 : void 0,
          ie = { ...wx, ...k.current.origins },
          ae = e
            ? {
                initial: { ...ie, ...h },
                animate: { ...ie, ...a, transition: ee },
                exit: { ...ie, ...g, transition: f },
              }
            : { animate: w, exit: { ...ie, ...g, transition: te } },
          oe = !(j || x === !1),
          se = !!t && oe,
          ce = t && C;
        return /* @__PURE__ */ T(cx, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || j || (t && y) ? b : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: re,
          },
          children: [
            e &&
              /* @__PURE__ */ D(cx, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: f,
                initial: { opacity: m && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: j ? void 0 : c,
              }),
            /* @__PURE__ */ D(cx, {
              ...ne,
              ...ae,
              transition: {
                default: ee,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: j ? d : u,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: ce || e || (t && y) ? 1 : 0 },
              "data-is-present": oe ? void 0 : !1,
              ref: A,
              children: /* @__PURE__ */ D(_x.Provider, {
                value: A,
                children: /* @__PURE__ */ D(bx.Provider, {
                  value: se,
                  children: /* @__PURE__ */ D(Sx, {
                    isCurrent: se,
                    isOverlayed: r,
                    children: /* @__PURE__ */ D(yx, {
                      isLead: t,
                      animatesLayout: !!y,
                      transition: ee,
                      isExiting: !oe,
                      isOverlayed: r,
                      id: S,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, Bc)),
      (wx = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (Tx = class {
        warning = () => {
          Ua(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (Ex = /* @__PURE__ */ A(/* @__PURE__ */ new Tx())),
      (Dx = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (Ox = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (kx = /* @__PURE__ */ k_(wx)),
      (Ax = /* @__PURE__ */ p.createContext(void 0)),
      (jx = /* @__PURE__ */ p.createContext(void 0)),
      (Mx = /* @__PURE__ */ (() => {
        class e extends b {
          #e = null;
          state = Ox();
          static defaultProps = { enabled: !0 };
          static contextType = Ax;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !us(t) || !ls(t)) return;
            let n = { ...Dx.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = Kc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!us(t) || !ls(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, Dx.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = Kc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !us(e) || !ls(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, Dx.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, Dx.Fade, t);
          }
          push(e, t) {
            this.#i(e, Uc(t), t);
          }
          modal(e, t) {
            this.#i(e, Dx.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, Wc(t), t);
          }
          flip(e, t) {
            this.#i(e, Gc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, Dx.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = sl(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              B(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              B(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                /* @__PURE__ */ D(
                  Cx,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: _l(o, e),
                    transitionProps: u,
                    animation: gl(o, e),
                    backfaceVisible: ml(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: /* @__PURE__ */ D(Tc, {
                      children: yl({ component: n, transition: l?.transition }),
                    }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              /* @__PURE__ */ D(
                Cx,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: pl(n, t),
                  transitionProps: hl(n, t),
                  instant: _l(n, t, !0),
                  animation: gl(n, t),
                  exitProps: e.transition.enter,
                  visible: vl(n, t),
                  backdropColor: dl(e.transition),
                  backfaceVisible: fl(n, t),
                  onTapBackdrop: bl(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: yl({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return /* @__PURE__ */ D(cx, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: /* @__PURE__ */ D(Ex.Provider, {
                value: this,
                children: /* @__PURE__ */ T(jx.Provider, {
                  value: i,
                  children: [
                    /* @__PURE__ */ D(Cx, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: cl(n),
                      animation: ll(n),
                      backfaceVisible: ul(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: /* @__PURE__ */ D(Fo, {
                        children: /* @__PURE__ */ D(dx, {
                          children: /* @__PURE__ */ D(Ae, {
                            presenceAffectsLayout: !1,
                            children: a,
                          }),
                        }),
                      }),
                    }),
                    /* @__PURE__ */ D(Ae, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (Nx = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (Px = /* @__PURE__ */ Bs(/* @__PURE__ */ p.forwardRef(xl))),
      (Fx = /* @__PURE__ */ (function (e) {
        return (
          (e.Boolean = `boolean`),
          (e.Number = `number`),
          (e.MotionValue = `motionvalue`),
          (e.Dimension = `dimension`),
          (e.String = `string`),
          (e.RichText = `richtext`),
          (e.FusedNumber = `fusednumber`),
          (e.Enum = `enum`),
          (e.SegmentedEnum = `segmentedenum`),
          (e.Color = `color`),
          (e.Image = `image`),
          (e.ResponsiveImage = `responsiveimage`),
          (e.File = `file`),
          (e.ComponentInstance = `componentinstance`),
          (e.Slot = `slot`),
          (e.Array = `array`),
          (e.EventHandler = `eventhandler`),
          (e.ChangeHandler = `changehandler`),
          (e.Transition = `transition`),
          (e.BoxShadow = `boxshadow`),
          (e.Link = `link`),
          (e.Date = `date`),
          (e.Object = `object`),
          (e.Font = `font`),
          (e.PageScope = `pagescope`),
          (e.ScrollSectionRef = `scrollsectionref`),
          (e.CustomCursor = `customcursor`),
          (e.Border = `border`),
          (e.Cursor = `cursor`),
          (e.Padding = `padding`),
          (e.BorderRadius = `borderradius`),
          (e.Gap = `gap`),
          (e.CollectionReference = `collectionreference`),
          (e.MultiCollectionReference = `multicollectionreference`),
          (e.TrackingId = `trackingid`),
          (e.VectorSetItem = `vectorsetitem`),
          (e.LinkRelValues = `linkrelvalues`),
          (e.Location = `location`),
          (e.SharedType = `sharedtype`),
          e
        );
      })({})),
      (Ix = /* @__PURE__ */ Symbol.for(`framer.sharedEnum`)),
      (Lx = `optional`),
      (Rx = `outputControls`),
      (zx = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (Bx = /* @__PURE__ */ Symbol(`private`)),
      (Vx = /* @__PURE__ */ (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [Bx]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new Dy(),
                reset() {
                  for (let t in i)
                    if (zx(i, t)) {
                      let n = zx(e, t) ? ob(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: /* @__PURE__ */ new Set(),
              },
            },
            i = new Proxy(r, Ux);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[Bx].reset()),
          (e.addObserver = (e, t) => e[Bx].observers.add(t)),
          e
        );
      })()),
      (Hx = class {
        set = (e, t, n, r) => {
          if (t === Bx) return !1;
          let i = e[Bx],
            a,
            o;
          if (
            (Ga(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = Oy(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = ob(e)[t];
          if (l !== void 0) {
            Ga(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (ob(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === Bx) return ob(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[Bx].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(Bx);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== Bx) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (Ux = /* @__PURE__ */ new Hx()),
      (Wx = /* @__PURE__ */ (() => {
        function e(t = {}) {
          let n = Vx(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => Vx.resetObject(e));
          }),
          (e.addObserver = (e, t) => Vx.addObserver(e, t)),
          e
        );
      })()),
      (Gx = { update: 0 }),
      (Kx = /* @__PURE__ */ p.createContext({ update: NaN })),
      (qx = class extends b {
        observers = [];
        state = Gx;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), Qy.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), Wx.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            Wx._stores.forEach((e) => {
              let t = Wx.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            /* @__PURE__ */ D(Kx.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      (Jx = `__framer__`),
      (Yx = 10),
      (Xx = /* @__PURE__ */ p.createContext(void 0)),
      (Zx = /* @__PURE__ */ p.createContext(void 0)),
      (Qx = `ssr-variant`),
      ($x = `ssr-variant-group-separator`),
      (eS = /* @__PURE__ */ p.forwardRef(function (e, t) {
        let n = Hl(t),
          r = p.useContext(Zx),
          i = p.useSyncExternalStore(yt, xt, bt),
          a = Ro(() => (i ? (br() ? 1 : 2) : 0)),
          o = p.useContext(Xx);
        return Ui(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, Xl(t, c, i));
            case 1:
              return Gl(i, s, c, u, l, d, n, t);
            case 2:
              return Gl(i, s, c, u, l, d, Vl, void 0);
            default:
              V(a);
          }
        }, [o, r, n, e]);
      })),
      (tS = /* @__PURE__ */ Nb(eS, `.${Qx} { display: contents }`, `PropertyOverrides`)),
      (nS = `default`),
      (rS = /* @__PURE__ */ new Set([nS])),
      (iS = class {
        entries = /* @__PURE__ */ new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (B(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (B(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
          }
        }
        setHash(e, t = nS, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return nS;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = Kl(r)) : nS;
        }
        setAll(e, t = rS, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = He(n.transformTemplate) ? n.transformTemplate?.({}, oS) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: z(a) ? a : void 0,
              animate: z(o) ? o : void 0,
              transformTemplate: L(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (aS = /* @__PURE__ */ new iS()),
      (oS = `__Appear_Animation_Transform__`),
      (sS = `data-framer-appear-id`),
      (cS = `data-framer-appear-animation`),
      (lS = (e) => {
        if (Vo())
          return {
            animate: Ql(e.animate) ? e.animate : void 0,
            initial: Ql(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (uS = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (dS = (e) => ({
        x: ae(e?.x ?? 0),
        y: ae(e?.y ?? 0),
        opacity: ae(e?.opacity ?? 1),
        scale: ae(e?.scale ?? 1),
        rotate: ae(e?.rotate ?? 0),
        rotateX: ae(e?.rotateX ?? 0),
        rotateY: ae(e?.rotateY ?? 0),
        skewX: ae(e?.skewX ?? 0),
        skewY: ae(e?.skewY ?? 0),
        transformPerspective: ae(e?.transformPerspective ?? 0),
      })),
      (fS = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (pS = /* @__PURE__ */ Object.freeze({ willChange: `transform` })),
      (mS = /* @__PURE__ */ Object.freeze({})),
      (hS = /* @__PURE__ */ new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (gS = () => {
        let e = M();
        return (
          _(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (_S = /* @__PURE__ */ new Set([
        `speed`,
        `adjustPosition`,
        `offset`,
        `parallaxTransformEnabled`,
      ])),
      (vS = /* @__PURE__ */ new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (yS = 1),
      (bS = 4),
      (xS = /* @__PURE__ */ new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (SS = [`animate`, `animate`]),
      (CS = { inputRange: [], outputRange: [] }),
      (wS = /* @__PURE__ */ new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (TS = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (ES = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (DS = [0, 1]),
      (OS = { parallax: _S, styleAppear: xS, styleTransform: wS, loop: hS, presence: vS }),
      (kS = /* @__PURE__ */ k_(OS)),
      (AS = (e) => e.reduce((e, t) => (e += t), 0)),
      (jS = (e) => e.reduce((e, t) => (e *= t), 1)),
      (MS = `current`),
      (NS = (e) =>
        p.forwardRef((t, n) => {
          let r = !ze(e);
          if (t.__withFX) {
            let i = { ...t };
            return (
              r || Reflect.deleteProperty(i, `__withFX`),
              /* @__PURE__ */ D(e, { ...i, animate: void 0, initial: void 0, exit: void 0, ref: n })
            );
          }
          let i = lS(t);
          if (i) return /* @__PURE__ */ D(e, { ...xu(t).forwardedProps, ...i, ref: n });
          let {
              parallax: a = {},
              styleAppear: o = {},
              styleTransform: s = {},
              presence: c = {},
              loop: l = {},
              forwardedProps: u,
              targetOpacityValue: d,
              withPerspective: f,
              inSmartComponent: m = !1,
            } = xu(t),
            h = kc(n),
            { values: g, style: _ } = su(
              c,
              h,
              m,
              Ke(d) ? t.style : { ...t.style, opacity: void 0 },
              t[Le]
            ),
            { values: v, style: y } = ru(a, h, t.style?.visibility),
            { values: b, style: x } = yu(s, h),
            { values: S, style: C } = hu(o, h),
            { values: w, style: T } = tu(l, h),
            E = p.useMemo(() => {
              let e = new Pe(d ?? 1);
              return {
                scale: [S.scale, w.scale, g.scale, b.scale],
                opacity: [S.opacity, w.opacity, g.opacity, e, b.opacity],
                x: [S.x, w.x, g.x, b.x],
                y: [S.y, w.y, v.y, g.y, b.y],
                rotate: [S.rotate, w.rotate, g.rotate, b.rotate],
                rotateX: [S.rotateX, w.rotateX, g.rotateX, b.rotateX],
                rotateY: [S.rotateY, w.rotateY, g.rotateY, b.rotateY],
                skewX: [S.skewX, w.skewX, g.skewX, b.skewX],
                skewY: [S.skewY, w.skewY, g.skewY, b.skewY],
                transformPerspective: [b.transformPerspective, S.transformPerspective],
              };
            }, [d, b, v, S, w, g]);
          Cu(t.style, E);
          let O = _e(E.scale, jS),
            k = _e(E.opacity, jS),
            A = _e(E.x, AS),
            j = _e(E.y, AS),
            ee = _e(E.rotate, AS),
            M = _e(E.rotateX, AS),
            te = _e(E.rotateY, AS),
            ne = _e(E.skewX, AS),
            re = _e(E.skewY, AS),
            ie = _e(E.transformPerspective, AS),
            { drag: ae, dragConstraints: oe } = u;
          Js(ae && Su(oe) ? oe : void 0);
          let se = {
            opacity: k,
            scale: O,
            x: A,
            y: j,
            rotate: ee,
            rotateX: M,
            rotateY: te,
            skewX: ne,
            skewY: re,
          };
          Ke(f) && (se.transformPerspective = ie);
          let ce = wu(t.animate) ? t.animate : void 0,
            le = wu(t.initial) ? t.initial : void 0,
            ue = wu(t.exit) ? t.exit : void 0,
            de = m && !c.presenceInitial ? { initial: le, animate: ce, exit: ue } : {},
            fe = r ? { __withFX: !0 } : {};
          return /* @__PURE__ */ D(e, {
            ...u,
            ...de,
            ...fe,
            style: { ...t.style, ...y, ...x, ...T, ...se, ...C, ..._ },
            values: g,
            ref: h,
          });
        })),
      (PS = /* @__PURE__ */ A({})),
      (FS = /* @__PURE__ */ p.createContext({})),
      (IS = /* @__PURE__ */ p.forwardRef(function (
        { width: e, height: t, y: n, children: r, ...i },
        a
      ) {
        let o = p.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Hl(a);
        return /* @__PURE__ */ D(FS.Provider, { value: o, children: s(r, i) });
      })),
      (LS = (e) =>
        p.forwardRef((t, n) => {
          let r = Du(t);
          return /* @__PURE__ */ D(e, { ...r, ref: n });
        })),
      (RS = {}),
      (zS = () => RS),
      (BS = (e) => {
        RS = e;
      }),
      (VS = !1),
      (HS = class extends b {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Ou(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              et(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          $n(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Ou(e)) throw e;
          return ((VS = !0), this.props.children);
        }
      }),
      (US = h === void 0 ? null : new Promise(() => {})),
      (WS = /* @__PURE__ */ D(ku, {})),
      (GS = /* @__PURE__ */ (() => {
        let e = A(!1);
        return ((e.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`), e);
      })()),
      (KS = /* @__PURE__ */ D(ju, {})),
      (qS = class extends b {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Nu(this.props.getErrorMessage(), t?.componentStack), Mu(e, t));
        }
        render() {
          let { children: e, fallback: t = KS } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (JS = class extends b {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Mu(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (YS = /* @__PURE__ */ p.createContext(void 0)),
      (XS = `code-crash:`),
      (ZS = /* @__PURE__ */ LS(
        /* @__PURE__ */ p.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            rendersWithMotion: c,
            __withFX: l,
            ...u
          },
          d
        ) {
          let f = Ro(() => (t ? `${t}-container` : void 0)),
            m = Fs(n),
            h = Ju(
              p.Children.map(e, (e) =>
                p.isValidElement(e) ? p.cloneElement(e, { layoutId: t ?? e.props.layoutId }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return /* @__PURE__ */ D(m, {
            layoutId: f,
            ...u,
            ref: d,
            children: /* @__PURE__ */ D(zb.Provider, {
              value: !0,
              children: /* @__PURE__ */ D(Zv.Provider, {
                value: i ?? null,
                children: /* @__PURE__ */ D(Lo, {
                  enabled: !1,
                  children: /* @__PURE__ */ D(Ne, {
                    id: t ?? ``,
                    inherit: u.layout ? !0 : `id`,
                    children: h,
                  }),
                }),
              }),
            }),
          });
        })
      )),
      (QS = /* @__PURE__ */ p.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = Ju(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Fs(f);
          return /* @__PURE__ */ D(Zv.Provider, {
            value: a ?? null,
            children: /* @__PURE__ */ D(n, { ...u, ref: t, style: e.style, children: d }),
          });
        }
        {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return /* @__PURE__ */ D(Zv.Provider, {
            value: a ?? null,
            children: /* @__PURE__ */ D(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (eC = /* @__PURE__ */ new Set()),
      (tC = /* @__PURE__ */ A({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (nC = `framer-cursor-none`),
      (rC = `framer-pointer-events-none`),
      (iC = /* @__PURE__ */ r(function ({ children: e }) {
        let t = Ro(() => {
            let e = /* @__PURE__ */ new Set(),
              t = {},
              n = /* @__PURE__ */ new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = ed(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = Be();
        return /* @__PURE__ */ T(tC.Provider, {
          value: t,
          children: [e, !n && /* @__PURE__ */ D(cC, {})],
        });
      })),
      (aC = /* @__PURE__ */ Nb(
        iC,
        [
          `.${nC}, .${nC} * { cursor: none !important; }`,
          `.${rC}, .${rC} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (oC = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (sC = `data-framer-portal-id`),
      (cC = /* @__PURE__ */ r(function () {
        let { onRegisterCursors: e } = l(tC),
          n = $u(!1),
          r = de(0),
          i = de(0),
          a = de(0),
          o = M(null),
          s = M({ cursors: {}, cursorHash: void 0 }),
          c = qs();
        (_(() => {
          if (!n) return;
          let e = 0,
            t = 0;
          function l() {
            (r.set(e), i.set(t), Me(a, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (Ge(s.current.cursors)) return;
            let n = id(e, t);
            n !== s.current.cursorHash && ((s.current.cursorHash = n), I.update(() => c()));
          };
          function d(n) {
            n.pointerType === `touch`
              ? we(u)
              : (I.read(u, !0), (e = n.clientX), (t = n.clientY), I.update(l));
          }
          function f(e) {
            if (e.target === o.current || !o.current) return;
            let t = new PointerEvent(e.type, {
              bubbles: !0,
              cancelable: e.cancelable,
              pointerType: e.pointerType,
              pointerId: e.pointerId,
              composed: e.composed,
              isPrimary: e.isPrimary,
              buttons: e.buttons,
              button: e.button,
            });
            I.update(() => {
              o.current?.dispatchEvent(t);
            });
          }
          return (
            H.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            I.read(u, !0),
            () => {
              (H.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                we(u));
            }
          );
        }, [a, r, i, c, n]),
          _(() => {
            if (!n) return;
            function e() {
              Me(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              H.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), H.removeEventListener(`blur`, e));
              }
            );
          }, [a, n]),
          d(() => {
            function t(e) {
              ((s.current.cursors = e),
                (s.current.cursorHash = Ge(e) ? null : id(r.get(), i.get())),
                c());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(nC, !1));
            };
          }, [r, i, e, c]));
        let { cursors: u, cursorHash: f } = s.current,
          p = f ? u[f] : null,
          m = td(p);
        d(() => {
          n && document.body.classList.toggle(nC, m);
        }, [m, n]);
        let h = p?.component,
          g = p?.transition ?? { duration: 0 },
          v = g.duration === void 0 ? g : { ...g, duration: g.duration * 1e3 },
          y = le(r, v),
          b = le(i, v),
          x = _e(() => y.get() + (p?.offset?.x ?? 0)),
          C = _e(() => b.get() + (p?.offset?.y ?? 0)),
          w = p?.alignment,
          T = p?.placement,
          E = t((e, t) => `translate(${rd(T, w)}) ${t}`, [w, T]);
        return !n || !p || !h
          ? null
          : /* @__PURE__ */ D(S, {
              children: /* @__PURE__ */ D(h, {
                transformTemplate: E,
                style: { ...oC, x, y: C, opacity: a },
                globalTapTarget: !0,
                variant: p?.variant,
                ref: o,
                className: rC,
              }),
            });
      })),
      (lC = `webPageId`),
      (uC = class {
        collectedLinks = /* @__PURE__ */ new Map();
        nestingInfo = /* @__PURE__ */ new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = /* @__PURE__ */ new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            B(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (B(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((ht && !Cr()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(sd(e), e), this.collectedLinks.set(sd(t), t));
          let n = this.nestingInfo.get(sd(e)) ?? /* @__PURE__ */ new Set();
          (n.add(sd(t)), this.nestingInfo.set(sd(e), n));
        }
      }),
      (dC = /* @__PURE__ */ new uC()),
      (fC = `element`),
      (pC = `collection`),
      (mC = `collectionItemId`),
      (hC = `pathVariables`),
      (gC = `framer/page-link,`),
      (_C = /* @__PURE__ */ A(void 0)),
      (vC = class extends b {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((h.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(et(gt ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          $n(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (gt && document.getElementById(`main`)?.innerHTML) || ``;
          return /* @__PURE__ */ D(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${et()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (bC = /:([a-z]\w*)/gi),
      (xC = /* @__PURE__ */ A(void 0)),
      (SC = /* @__PURE__ */ new Map()),
      (CC = 500),
      (wC = 500),
      (EC = !1),
      (DC = 500),
      (OC = 0.9),
      (kC = 1.7),
      (AC = 4),
      (jC = 1 / 0),
      (MC = /* @__PURE__ */ new WeakMap()),
      (NC = /* @__PURE__ */ new Set()),
      (PC = /* @__PURE__ */ new Map()),
      (FC = !Pv || typeof IntersectionObserver > `u` ? null : /* @__PURE__ */ Gd()),
      (IC = /* @__PURE__ */ Dd(
        /* @__PURE__ */ O(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...d
          },
          f
        ) {
          let p = yn(),
            m = xn(),
            h = jd(),
            { activeLocale: g, locales: _ } = Hr(),
            v = Qd(),
            y = Gr(),
            b = cd(),
            x = $d({ nodeId: s, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            S = u(() => {
              if (!t) return {};
              let e = od(t) ? t : hd(t);
              if (!e) return {};
              if (L(e))
                return uf(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (Qe(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = Od(p, m, e, g, c, h),
                S = qd(n, !0),
                C = S === `_blank`,
                w = lf(u, C, p.siteCanonicalURL),
                T = { pathVariables: f, locale: b },
                E = rf(u, w, (e) =>
                  tf(
                    p,
                    l,
                    () =>
                      y(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    f,
                    r,
                    e
                  )
                );
              return {
                href: u,
                target: S,
                onClick: nf(u, x, E),
                "data-framer-page-link-current": (m && Md(m, e, h)) || void 0,
                navigate: E,
                preload: () =>
                  y(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
                _navigationUrl: w,
              };
            }, [t, p, g, h, n, m, r, x, a, _, o, v, y]),
            C = kc(E(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: w,
              preload: T,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = S;
          Ac(
            C,
            (e) => {
              if (e !== null && D && T && A && !b)
                return FC?.(e, T, `${D}:${k?.id}:${JSON.stringify(O)}`, A);
            },
            [T, D, O, k, A, b]
          );
          let ee = !!w;
          return _d(
            Hl(f).cloneAsArray(e, (e) => df(e, { ...d, ...pf(j, l, ee) }, C)),
            c,
            s,
            t,
            S,
            C
          );
        })
      )),
      (LC = `framer`),
      (RC = 3),
      (zC = 30),
      (BC = 1e4),
      (VC = `__framer`),
      (HC = `3`),
      (UC = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (WC = /* @__PURE__ */ Date.now()),
      (GC = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (KC = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (qC = () => ((Date.now() - WC) / 1e3).toFixed(2)),
      (JC = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          p.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          p.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = qC())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = qC()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = qC()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          /* @__PURE__ */ D(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (YC = { state: `pending` }),
      (XC = { state: `success` }),
      (ZC = { state: `incomplete` }),
      (QC = { state: `complete` }),
      ($C = { state: `error` }),
      (ew = /* @__PURE__ */ p.createContext(void 0)),
      (tw = /* @__PURE__ */ p.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: r,
          onError: i,
          onLoading: a,
          submitTrackingId: s,
          nodeId: c,
          ...u
        },
        d
      ) {
        let f = p.useRef(null),
          m = pe(d, f),
          {
            states: h,
            convertHoneypotFieldsForSubmission: g,
            replaceHoneypotWithMetadata: _,
          } = Sf(),
          v = yn(),
          y = xn(),
          b = jd(),
          x = ur(),
          [S, C] = p.useReducer(Ef, ZC),
          { activeLocale: w, locales: E } = Hr(),
          O = l(ew),
          k = p.useRef({ onSuccess: r, onError: i, onLoading: a });
        k.current = { onSuccess: r, onError: i, onLoading: a };
        let A = p.useRef(!1);
        async function j(e) {
          if (L(e)) {
            let t = kd(v, e, b, E);
            if (!t) {
              kf(e, f);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            v.navigate?.(n, r, i);
            return;
          }
          B(
            od(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await Xd(e.unresolvedPathSlugs, e.unresolvedHashSlugs, w, x),
            { routeId: n, elementId: r, pathVariables: i } = Od(v, y, e, w, t, b);
          v.navigate?.(n, r, i);
        }
        let ee = (e) => {
          (e.preventDefault(), M(e.currentTarget));
        };
        async function M(t) {
          if (!e || !O || A.current) return;
          ((A.current = !0), g());
          let r = new FormData(t),
            i = vf(t);
          (await Dv({ priority: `user-visible`, continueAfter: `paint` }),
            _(r),
            o(() => C({ type: `submit` })),
            xf(r, H.document));
          for (let [e, t] of r) t instanceof File && r.delete(e);
          try {
            (k.current.onLoading?.(),
              wf({ router: v, nodeId: c, submitTrackingId: s, activeLocale: w }),
              await jf(e, r, i, O),
              o(() => C({ type: `success` })),
              k.current.onSuccess?.(),
              n && (await j(n)));
          } catch (e) {
            (o(() => C({ type: `error` })), k.current.onError?.(), console.error(e));
          }
          A.current = !1;
        }
        let te = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), ee(e)));
          },
          ne = async (e) => {
            let t = e.currentTarget;
            (await Dv({ priority: `background`, continueAfter: `paint` }),
              o(() => C({ type: Af(t) ? `incomplete` : `complete` })));
          };
        oa(f, (e) => void M(e));
        let re = p.useMemo(() => t(S), [t, S]);
        return /* @__PURE__ */ T(N.form, {
          ...u,
          method: `post`,
          "data-framer-form": ``,
          onSubmit: Df(S) ? ee : Of,
          onKeyDown: te,
          onChange: ne,
          ref: m,
          children: [
            re,
            /* @__PURE__ */ D(Cf, { states: h }),
            /* @__PURE__ */ D(`script`, { dangerouslySetInnerHTML: { __html: aa() } }),
            /* @__PURE__ */ T(`noscript`, {
              children: [
                /* @__PURE__ */ D(`style`, {
                  children: `[data-framer-form] input[name=framer-noscript] { position: absolute; transform: scale(0); }`,
                }),
                /* @__PURE__ */ D(`input`, {
                  required: !0,
                  pattern: `(?!)`,
                  name: `framer-noscript`,
                  tabIndex: -1,
                  "aria-label": `Enable JavaScript to submit this form`,
                  title: `Enable JavaScript to submit this form`,
                }),
                /* @__PURE__ */ D(`p`, { children: `Enable JavaScript to submit this form.` }),
              ],
            }),
          ],
        });
      })),
      (nw = `__framer_force_showing_editorbar_since`),
      (rw = class extends b {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (iw = () => {
        try {
          return !!localStorage[nw];
        } catch {
          return !1;
        }
      }),
      (aw = () => !iw()),
      (ow = /* @__PURE__ */ (() => {
        let e = A(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (sw = null),
      (cw = null),
      vt(zf),
      (lw = (e, t, n, r, i, a) => {
        let o = l(ew),
          s = M(),
          c = ur(),
          u = M(!0);
        return (
          _(() => {
            function l() {
              (!sw || !cw) && zf();
              let s = n ? new URL(n, H.location.href) : H.location,
                l = {
                  version: 2,
                  abTestId: e?.abTestId,
                  framerSiteId: o ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: i?.code || null,
                  referrer: null,
                  url: s.href,
                  hostname: s.hostname,
                  pathname: s.pathname,
                  search: s.search || null,
                  hash: s.hash || null,
                  timezone: sw,
                  locale: cw,
                },
                d = u.current && a !== void 0 ? a : void 0;
              return e?.collectionId && r
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && c?.get(e.collectionId),
                        [a] = Object.values(r);
                      if (n && L(a)) {
                        let e = n.getRecordIdBySlug(a, i || void 0);
                        t = (Qe(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...l, collectionItemId: t };
                  })()
                : l;
            }
            (async () => {
              let e = (s.current = l()),
                t = e instanceof Promise ? await e : e;
              ((s.current = t),
                u.current ? (u.current = !1) : $n(`published_site_pageview`, t, `eager`));
            })();
            let d = async (e) => {
              if (e.persisted) {
                let e = (s.current = l()),
                  t = e instanceof Promise ? await e : e;
                ((s.current = t), $n(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              h.addEventListener(`pageshow`, d),
              () => {
                h.removeEventListener(`pageshow`, d);
              }
            );
          }, [e, t, n, r, i, o, c, a]),
          s
        );
      }),
      (uw = 0),
      (dw = 500),
      (fw = 200),
      (pw = `main`),
      (mw = `framerGeneratedPage`),
      (hw = `<!-- Start of headStart -->`),
      (gw = `<!-- End of headStart -->`),
      (_w = `<!-- Start of headEnd -->`),
      (vw = `<!-- End of headEnd -->`),
      (yw = `<!-- Start of bodyStart -->`),
      (bw = `<!-- End of bodyStart -->`),
      (xw = `<!-- Start of bodyEnd -->`),
      (Sw = `<!-- End of bodyEnd -->`),
      (Cw = /* @__PURE__ */ p.createContext(void 0)),
      (ww = { status: `loading`, data: void 0 }),
      (Tw = 5e3),
      (Ew = () => {}),
      (Dw = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = /* @__PURE__ */ new Map();
        #e = /* @__PURE__ */ new Map();
        #t = /* @__PURE__ */ new Set();
        #n = /* @__PURE__ */ new Map();
        #r = /* @__PURE__ */ new Map();
        #i = /* @__PURE__ */ new Map();
        #a = /* @__PURE__ */ new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = Mp(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Mp(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = Math.min(Ip(r), 2 ** 31 - 1),
            a = H.setInterval(() => {
              if (document.visibilityState === `hidden`) return;
              let n = this.#r.get(t);
              r && n && this.fetchWithCache({ ...e, cacheDuration: r });
            }, i);
          this.#a.set(t, a);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Lp(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = Ll(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Lp(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!br() || !ud(e.url, !1)) return;
          let t = Mp(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Fp(n, e);
          return (e.resultOutputType === `image` && L(i) && (await kp(i).catch(Ew)), i);
        }
        async fetchWithCache(e) {
          if (!br()) return;
          let t = Mp(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Lp(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, ww);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: /* @__PURE__ */ Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!t || this.#t.has(e)) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!ud(r, !1)) return Ew;
          let a = Mp(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? /* @__PURE__ */ new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n && (n.delete(t), n.size === 0 && (this.#e.delete(a), this.stopQueryRefetching(e)));
            }
          );
        }
      }),
      (Ow = /* @__PURE__ */ A(void 0)),
      (kw = /* @__PURE__ */ A(!0)),
      (Aw = ({ children: e, client: t }) => {
        let [n] = j(() => t ?? new Dw()),
          [r, i] = j(!0);
        return (
          _(
            () => (
              n.hydrateCache(),
              o(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          /* @__PURE__ */ D(kw.Provider, {
            value: r,
            children: /* @__PURE__ */ D(Ow.Provider, { value: n, children: e }),
          })
        );
      }),
      (jw = /* @__PURE__ */ (() => {
        let e = A(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (je.WillChange = class extends Fe {
        add(e) {
          e !== `backgroundColor` && super.add(e);
        }
      }),
      (Mw = /* @__PURE__ */ Dd(
        /* @__PURE__ */ O(function ({ links: e, children: t, ...n }, r) {
          return Hl(r)(t(Bp((t) => e.map(t), [e])), n);
        })
      )),
      (Nw = { priority: void 0, canYield: !0 }),
      (Pw = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return om(e, t);
            case `boolean`:
              return cm(e);
            case `color`:
              return dm(e);
            case `date`:
              return pm(e);
            case `enum`:
              return hm(e);
            case `file`:
              return _m(e);
            case `link`:
              return ym(e);
            case `number`:
              return xm(e);
            case `object`:
              return wm(e, t);
            case `responsiveimage`:
              return Em(e);
            case `richtext`:
              return Om(e);
            case `string`:
              return Mm(e);
            case `vectorsetitem`:
              return Am(e);
            case `unknown`:
              return e;
            default:
              V(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Ue(e)
            ? { type: `boolean`, value: e }
            : Ye(e)
              ? { type: `date`, value: e.toISOString() }
              : R(e)
                ? { type: `number`, value: e }
                : L(e)
                  ? { type: `string`, value: e }
                  : We(e)
                    ? { type: `array`, value: e.map(Pw.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && Pm(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && Pm(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && Pm(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && Pm(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && Pm(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => Pw.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Pw.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Nm(e),
            i = Nm(t);
          return qe(r) || qe(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Nm(e),
            i = Nm(t);
          return qe(r) || qe(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Nm(e),
            i = Nm(t);
          return qe(r) || qe(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          return e?.type === `array` ? e.value.length : 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(Pw.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return L(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              V(e);
          }
        },
      }),
      (Fw = { type: `unknown`, isNullable: !0 }),
      (Iw = class {
        collection;
        locale;
        schema;
        indexes = [];
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = jl(e);
          B(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (B(n !== `array`, `Array properties are not supported`),
              B(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (Je(i)) continue;
            let a = this.schema[t];
            Ke(a) ||
              (B(a.type !== `unknown`, `Invalid definition type`),
              (n[t] =
                a.type === `richtext`
                  ? { type: a.type, value: { itemIndex: r, key: t } }
                  : { type: a.type, value: i }));
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await Fm(this.collection, this.locale))[t]?.[n];
          return I_.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Fm(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Kp(e);
            i && (await i);
            let a = t[r];
            B(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Fm(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Kp(t);
            e && (await e);
            let a = n[Number(i)];
            (B(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (Lw = /* @__PURE__ */ new Map()),
      (Rw = /* @__PURE__ */ new WeakMap()),
      (zw = `$r_`),
      (Bw = /* @__PURE__ */ new Map()),
      (Vw = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Jm(e, t)), (this.priority = Hm(n)));
        }
        *resolveArrayValue(e) {
          return yield* Zp(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* Xp(t);
        }
        richTextCache = /* @__PURE__ */ new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          B(Gm(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          B(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? /* @__PURE__ */ new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return Ze(t) ? yield t : t;
        }
        vectorSetItemCache = /* @__PURE__ */ new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          B(qm(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (B(n, `Can't find collection for vector set item pointer`),
            B(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? /* @__PURE__ */ new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return Ze(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (Hw = `index`),
      (Uw = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), J(this.name, ...e));
        }
      }),
      (Ww = class {
        id;
        name;
        data;
        indexes = new Kw();
        fields = new Z();
        fieldByName = /* @__PURE__ */ new Map();
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (Gw = class {
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Z();
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
      }),
      (Kw = class extends Uw {
        name = `Indexes`;
      }),
      (qw = class {
        id;
        name;
        definition;
        collection;
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        getValue(e) {
          B(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                B(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Wm(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                B(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Km(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Z = class extends Uw {
        name = `Fields`;
      }),
      (Jw = class {
        field;
        direction;
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        getHash() {
          return J(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (Yw = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return J(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== `index`) return !1;
          return !0;
        }
      }),
      (Xw = class {
        ordering;
        resolvedFields;
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        getHash() {
          return J(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (Zw = class e {
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (B(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (B(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = /* @__PURE__ */ new Map();
        constructor(e) {
          this.parent = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new Yw();
        }
        getRequiredResolvedFields() {
          let e = new Z();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new Xw(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          B(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (B(e, `Field must exist`), e.field);
        }
      }),
      (Qw = 1e3),
      (Q = class e {
        network;
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = Qm(),
            i = $m(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      ($w = class {
        pointers = /* @__PURE__ */ new Map();
        values = /* @__PURE__ */ new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (eT = class e {
        fields;
        tuples;
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Z();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = /* @__PURE__ */ new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Z();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = /* @__PURE__ */ new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (tT = class {
        isSynchronous;
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      (nT = class extends tT {
        group;
        getGroup() {
          return (B(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (B(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return qp(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Jp(this.evaluate(void 0), void 0, e);
        }
      }),
      (rT = class {
        input;
        field;
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        getHash() {
          return J(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (iT = class e extends nT {
        input;
        projections;
        passthrough;
        inputGroup;
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return J(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Z();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Z();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new Xw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new rT(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Zp(
              n.tuples.map((t) =>
                Zp(
                  this.projections.map((n) => Xp({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new $w();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            B(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (aT = { type: 0 }),
      (oT = class extends tT {
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        evaluateSync() {
          return qp(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Jp(this.evaluate(void 0, void 0));
        }
      }),
      (sT = { type: 0 }),
      (cT = class {
        when;
        then;
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        getHash() {
          return J(`CaseCondition`, this.when, this.then);
        }
      }),
      (lT = class e extends oT {
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        constructor(e, t, n) {
          let r = new Z(),
            i = new Z(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        getHash() {
          return J(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new cT(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* Xp({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Zp(
              this.conditions.map((n) =>
                Xp({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Pw.equal(n, e, sT)) return t;
          } else for (let { when: e, then: t } of r) if (lm(e)) return t;
          return i;
        }
      }),
      (uT = class {
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        build() {
          let e = new Zw();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Z(),
            o;
          if (t.orderBy) {
            o = new Yw();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (Ke(t)) continue;
                a.add(t.field);
                let r = new Jw(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new qw(Zm(this.fieldId++), void 0, t.definition, void 0),
                  a = new rT(t, r);
                i.push(a);
                let s = new Jw(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Z(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (Ke(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              B(n.alias, `Subqueries should have an alias`);
              let r = Zm(this.fieldId++),
                a = n.alias,
                s = new qw(r, a, t.definition, void 0),
                c = new rT(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              V(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = zm(t.data, this.locale),
            i = t.alias,
            a = new Ww(Ym(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new qw(Zm(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new qw(Zm(this.fieldId++), Hw, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: Hw, collectionName: i });
            let t = new Yw(),
              r = new Jw(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new Yw(),
              o = new Gw(Xm(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new Yw(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              V(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              V(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(Fw, null);
        }
        buildLiteralValue(e) {
          let t = Pw.parse(e.value);
          return this.normalizer.newScalarConstant(Fw, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (B(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              V(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new dT(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new dT(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new cT(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              V(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              V(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (dT = class {
        inScope;
        referencedFields = new Z();
        referencedOuterFields = new Z();
        constructor(e) {
          this.inScope = e;
        }
      }),
      (fT = class e extends nT {
        input;
        predicate;
        inputGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return J(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new Xw(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Zp(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => lm(n[t] ?? null));
        }
      }),
      (pT = class e extends nT {
        index;
        query;
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        getHash() {
          return J(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * Qw : 50 * Qw);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, Wp()),
            i = Wp(),
            a = [];
          for (let n of r) {
            let r = Kp(i);
            r && (yield r);
            let o = new $w();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new eT(n, a);
        }
      }),
      (mT = class e extends nT {
        left;
        right;
        leftGroup;
        rightGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return J(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new Xw(new Yw(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Xp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (hT = class e extends nT {
        collection;
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        getHash() {
          return J(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * Qw);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(Wp()),
            r = Wp(),
            i = [];
          for (let a of n) {
            let n = Kp(r);
            n && (yield n);
            let o = new $w();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new eT(t, i);
        }
      }),
      (gT = class e extends nT {
        left;
        right;
        leftGroup;
        rightGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return J(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new Xw(new Yw(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Xp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (_T = class e extends oT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Xp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: lm(n) && lm(r) };
        }
      }),
      (vT = class extends oT {
        definition;
        value;
        constructor(e, t) {
          let n = new Z(),
            r = new Z();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        getHash() {
          return J(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (yT = { type: 0 }),
      (bT = class e extends oT {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return J(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Xp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Pw.contains(n, r, yT) };
        }
      }),
      (xT = { type: 0 }),
      (ST = class e extends oT {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return J(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Xp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Pw.endsWith(n, r, xT) };
        }
      }),
      (CT = class e extends oT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Xp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Pw.equal(n, r, aT) };
        }
      }),
      (wT = class e extends oT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Xp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Pw.greaterThan(n, r, aT) };
        }
      }),
      (TT = class e extends oT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Xp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Pw.greaterThanOrEqual(n, r, aT) };
        }
      }),
      (ET = class e extends oT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Xp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Pw.lessThan(n, r, aT) };
        }
      }),
      (DT = class e extends oT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Xp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Pw.lessThanOrEqual(n, r, aT) };
        }
      }),
      (OT = class e extends oT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Xp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Pw.equal(n, r, aT) };
        }
      }),
      (kT = class e extends oT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Xp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: lm(n) || lm(r) };
        }
      }),
      (AT = { type: 0 }),
      (jT = class e extends oT {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return J(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Xp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Pw.startsWith(n, r, AT) };
        }
      }),
      (MT = class {
        normalizer;
        memo;
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof fT) {
            if (e.predicate instanceof _T) {
              let n = new mT(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof kT) {
              let n = new gT(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof hT)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new pT(n, eh(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof fT) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof hT)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof CT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof vT &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = eh(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new pT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof OT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof vT &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = eh(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new pT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ET &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof vT &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = eh(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new pT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof DT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof vT &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = eh(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new pT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof wT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof vT &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = eh(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new pT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof TT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof vT &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = eh(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new pT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof bT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof vT &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = eh(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new pT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof jT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof vT &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = eh(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new pT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ST &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof vT &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = eh(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new pT(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (NT = class {
        id;
        relational;
        nodes = [];
        winners = /* @__PURE__ */ new Map();
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new PT();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          B(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (PT = class {
        node;
        cost = new Q(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (FT = class {
        outputFields;
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (IT = class {
        nodes = /* @__PURE__ */ new Map();
        groups = [];
        addGroup(e) {
          let t = new NT(th(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new FT(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            B(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (LT = class e extends nT {
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return J(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Z();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Z(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new Xw(new Yw(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = /* @__PURE__ */ new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new eT(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new $w();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Xp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof CT) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new eT(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new $w();
              (n.merge(i),
                n.merge(a),
                lm(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (RT = class e extends nT {
        input;
        limit;
        ordering;
        inputGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return J(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new Xw(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* Xp({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Sm(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (zT = class e extends nT {
        input;
        offset;
        ordering;
        inputGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return J(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new Xw(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* Xp({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Sm(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (BT = class e extends oT {
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return J(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Z(),
            t = Object.values(this.namedFields);
          for (let n of t) Ke(n.collection) || e.add(n);
          return new Xw(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new $w();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (VT = class e extends oT {
        input;
        definition;
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            B(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return J(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return Pw.cast(n, this.definition);
        }
      }),
      (HT = class e extends oT {
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return J(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Z();
          return (Ke(this.field.collection) || e.add(this.field), new Xw(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new $w();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (UT = { type: 0 }),
      (WT = class e extends oT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Xp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Pw.in(n, r, UT) };
        }
      }),
      (GT = { type: 1 }),
      (KT = class e extends oT {
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return J(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Xp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Pw.indexOf(n, r, GT) };
        }
      }),
      (qT = class extends Error {}),
      (JT = class e extends oT {
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Xp({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = rh(n),
            a = rh(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (YT = class e extends oT {
        input;
        definition = { type: `number`, isNullable: !1 };
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        getHash() {
          return J(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: Pw.length(n) };
        }
      }),
      (XT = class e extends oT {
        input;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        getHash() {
          return J(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !lm(yield* this.input.evaluate(e, t)) };
        }
      }),
      (ZT = { type: 0 }),
      (QT = class e extends oT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Xp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Pw.in(n, r, ZT) };
        }
      }),
      ($T = class extends oT {
        field;
        isOuterField;
        definition;
        constructor(e, t) {
          B(e.name !== Hw, `Invalid field name`);
          let n = new Z(),
            r = new Z();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        getHash() {
          return J(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (B(e, `Context must exist`), e.getValue(this.field))
            : (B(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (eE = class {
        memo;
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new hT(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new pT(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new LT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof vT && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof LT && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new fT(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new iT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof iT &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new RT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new zT(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof vT) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new $T(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new vT(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof XT)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof CT) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof OT) return this.newScalarEquals(e.left, e.right);
          if (e instanceof ET) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof DT) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof wT) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof TT) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof _T) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof kT) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new XT(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof vT && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof vT && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof vT && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof vT && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new _T(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof vT && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof vT && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof vT && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof vT && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new kT(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof $T;
          if (t instanceof $T && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new CT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof $T;
          if (t instanceof $T && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new OT(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof $T;
          if (t instanceof $T && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ET(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof $T;
          if (t instanceof $T && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new DT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof $T;
          if (t instanceof $T && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new wT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof $T;
          if (t instanceof $T && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new TT(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new WT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new QT(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new cT(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new lT(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new bT(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new jT(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new ST(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new YT(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new KT(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new BT(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new HT(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new JT(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new VT(e, t);
          return this.finishScalar(n);
        }
      }),
      (tE = class extends nT {}),
      (nE = class e extends tE {
        input;
        fields;
        resolver;
        inputGroup;
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return J(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Z();
          return new Xw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * Qw).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          B(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = /* @__PURE__ */ new Map();
          for (let e of this.fields) {
            B(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Z()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) ih(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                B(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new $w();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (B(s, `Item not found`), B(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (rE = { type: 0 }),
      (iE = class e extends tE {
        input;
        ordering;
        inputGroup;
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return J(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== `index` && (Ke(e.collection) || t.add(e));
          return new Xw(new Yw(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === `index`) {
                let r = n.collection;
                B(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                B(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                B(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Pw.equal(a, o, rE)) {
                if (qe(a) || Pw.lessThan(a, o, rE)) return i ? -1 : 1;
                if (qe(o) || Pw.greaterThan(a, o, rE)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (aE = class {
        query;
        locale;
        resolver;
        memo = new IT();
        normalizer = new eE(this.memo);
        explorer = new MT(this.normalizer);
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        optimize(e) {
          let t = new uT(this.normalizer, this.query, this.locale).build(),
            n = Kp(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (B(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new nE(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new iE(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (oE = /* @__PURE__ */ Vp(`query-engine`)),
      (sE = class {
        async evalQuery(e, t, n, r) {
          oE.enabled && oE.debug(`Query:\n${_h(e)}`);
          let i = new Vw(e, t, r),
            a = new aE(e, t, i),
            o = Kp(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = Qe(s) ? await s : s,
            u = Kp(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = Kp(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(Xp(a, r)));
          }
          let h = Yp(Zp(m, r), r);
          return n ? [Qe(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new Vw(t, n, r);
          return Yp(
            Zp(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return Xp(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (cE = $_.QueryCache),
      (lE = class {
        queryEngine;
        maxSize;
        cache = /* @__PURE__ */ new Map();
        serializedCache = nv === void 0 ? void 0 : /* @__PURE__ */ new Map();
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state !== `pending` &&
                (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          let r = bh(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = Um(n) ?? `user-visible`,
              o = Um(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && Ar(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              nv !== void 0 &&
                this.serializedCache !== void 0 &&
                !Im(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && nv.set(cE, r, e);
            }
            return i.value;
          }
          let a = new I_(() => {
            let i = Im(r),
              a = i ? void 0 : ar(cE, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                rr(e, r);
              }
            return nv !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(([e, t]) => (this.serializedCache?.set(r, t), nv.set(cE, r, t), e))
              : this.queryEngine.query(e, t, n);
          });
          return (this.cache.set(r, { value: a, priority: n }), this.prune(), a);
        }
      }),
      (uE = /* @__PURE__ */ new lE(/* @__PURE__ */ new sE())),
      (dE = `style[data-framer-breakpoint-css]`),
      (fE = `page`),
      (pE = /* @__PURE__ */ Symbol(`cycle`)),
      (gE = /* @__PURE__ */ new WeakMap()),
      (_E = /* @__PURE__ */ (() => {
        let e = A(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (vE = /* @__PURE__ */ new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (yE = { inputRange: [], outputRange: [] }),
      (bE = (e) =>
        p.forwardRef((t, n) => {
          if (U.current() === U.canvas) return /* @__PURE__ */ D(e, { ...t, ref: n });
          let [r, i] = zl(t, vE),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: d,
              scrollDirection: f,
            } = r,
            [m, h] = p.useState(o),
            g = p.useRef(!1),
            _ = kc(n);
          Nc(
            _,
            (e) => {
              r.targets ||
                r.scrollDirection ||
                (s && g.current === !0) ||
                (g.current !== e &&
                  ((g.current = e),
                  p.startTransition(() => {
                    h(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } }
          );
          let v = Sn(),
            y = p.useRef(v);
          return (
            p.useEffect(() => {
              if (f || !u) return;
              y.current !== v && ((y.current = v), p.startTransition(() => h(o)));
              let e = {},
                t;
              return se((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = dg(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(De(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  p.startTransition(() => {
                    h(l);
                  }));
              });
            }, [v, s, c, u, t.variant, f, d]),
            du(f, (e) => p.startTransition(() => h(e)), { enabled: l, repeat: !s }),
            Cn(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              p.startTransition(() => h(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? /* @__PURE__ */ D(e, { ...i, variant: m ?? t.variant, ref: _ })
              : /* @__PURE__ */ D(e, { ...i })
          );
        })),
      (xE = (e) => e.target.value),
      (SE = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (CE = /* @__PURE__ */ O(function (e, n) {
        let {
            "aria-label": r,
            "aria-labelledby": i,
            "aria-describedby": a,
            autoFocus: s,
            className: c,
            inputName: l,
            max: u,
            min: d,
            placeholder: f,
            required: p,
            step: m,
            style: h,
            type: g,
            maxLength: _,
            value: v,
            defaultValue: y,
            autofillEnabled: b,
            onChange: x,
            onBlur: S,
            onInvalid: C,
            onFocus: w,
            onValid: E,
            onClear: O,
            ...k
          } = e,
          A = pg(v ?? y, g),
          [j, ee, M] = fg(A ?? ``, !0, x),
          te = fa(A),
          ne = t(() => {
            (ee(``), O && o(() => O()));
          }, [O, ee]),
          re = ot(E, C, M, S, w),
          ie = t(
            (e) => {
              e.target === e.currentTarget && te.current?.focus();
            },
            [te]
          );
        if (g === `hidden`)
          return /* @__PURE__ */ D(N.input, { type: `hidden`, name: l, defaultValue: y });
        let ae = b === !1 ? SE : void 0,
          oe = !!j,
          se = !!O && oe,
          ce = Rl($, Dt, c, g === `text` && wE, g === `textarea` && TE);
        return /* @__PURE__ */ T(N.div, {
          ref: n,
          onClick: ie,
          style: h,
          className: ce,
          ...k,
          children: [
            g === `textarea`
              ? /* @__PURE__ */ D(N.textarea, {
                  ref: te,
                  ...ae,
                  ...re,
                  "aria-label": r,
                  "aria-labelledby": i,
                  "aria-describedby": a,
                  required: p,
                  autoFocus: s,
                  name: l,
                  placeholder: f,
                  className: Et,
                  value: j,
                  maxLength: _,
                })
              : /* @__PURE__ */ D(N.input, {
                  ref: te,
                  ...ae,
                  ...re,
                  "aria-label": r,
                  "aria-labelledby": i,
                  "aria-describedby": a,
                  type: g,
                  required: p,
                  autoFocus: s,
                  name: l,
                  placeholder: f,
                  className: Rl(Et, !oe && `framer-form-input-empty`),
                  value: j,
                  min: d,
                  max: u,
                  step: m,
                  maxLength: _,
                }),
            se &&
              /* @__PURE__ */ D(`button`, {
                type: `button`,
                className: EE,
                onClick: ne,
                "aria-label": `Clear`,
                children: /* @__PURE__ */ D(mg, {}),
              }),
          ],
        });
      })),
      ($ = `framer-form-text-input`),
      (wE = `framer-form-text-input-type`),
      (TE = `framer-form-textarea-input-type`),
      (EE = `framer-form-text-input-clear`),
      (DE = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (OE = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (kE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (AE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (jE = /* @__PURE__ */ Nb(
        CE,
        [
          ...At,
          ...Nt,
          ...jt,
          G(`.${Dt}`, {
            boxShadow: G.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: G.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: G.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: G.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: G.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: G.variable(`--framer-input-corner-shape`),
            background: G.variable(`--framer-input-background`),
            transition: G.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          G(`.${$} .${Et}::placeholder`, { color: G.variable(`--framer-input-placeholder-color`) }),
          G(`.${$}`, {
            display: `flex`,
            alignItems: `center`,
            padding: G.variable(`--framer-input-padding`),
          }),
          G(`.${$} .${Et}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          G(`.${$}.${TE}`, { padding: 0 }),
          G(`.${$}.${TE} textarea.${Et}`, {
            width: `100%`,
            padding: G.variable(`--framer-input-padding`),
          }),
          G(`.${$} .${Et}[type="date"], .${$} .${Et}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          G(`.${$} .${Et}::-webkit-date-and-time-value`, { textAlign: `start` }),
          G(`.${$} textarea`, {
            display: `flex`,
            resize: G.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          G(`.${$} textarea::-webkit-resizer`, { background: `no-repeat ${$e(DE)}` }),
          G(`.${$}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${$e(OE)}` }),
          G(`.${$} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          G(`.${$} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          G(`.${$} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          G(`.${$} .${Et}::-webkit-datetime-edit`, {
            height: G.variable(`--framer-input-font-line-height`),
          }),
          G(`.${$} .${Et}.${Ot}::-webkit-datetime-edit`, {
            color: G.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": G.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          G(`.${$}.${wE}::before`, {
            content: G.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `16px`,
            height: `16px`,
            marginRight: `8px`,
            ...It,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: G.variable(`--framer-input-icon-mask-image`),
            backgroundImage: G.variable(`--framer-input-icon-image`),
          }),
          G(`.${$} .${Et}[type="date"]::before, .${$} .${Et}[type="time"]::before`, {
            ...Lt,
            paddingLeft: `10px`,
            maskPosition: `10px center`,
            backgroundPosition: `10px center`,
          }),
          G(`.${$} .${Et}[type="date"]::before`, {
            maskImage: G.variable(`--framer-input-icon-mask-image`, $e(kE)),
            backgroundImage: G.variable(`--framer-input-icon-image`),
          }),
          G(`.${$} .${Et}[type="time"]::before`, {
            maskImage: G.variable(`--framer-input-icon-mask-image`, $e(AE)),
            backgroundImage: G.variable(`--framer-input-icon-image`),
          }),
          G(`.${$} .${Et}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: G.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `16px`,
            height: `100%`,
          }),
          G(`.${$}:focus-within, .${$}.${kt}`, {
            boxShadow: G.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: G.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          G(`.${$}:focus-within::after, .${$}.${kt}::after`, {
            borderColor: G.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: G.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: G.variable(`--framer-input-focused-border-width`, Mt),
          }),
          G(`.${EE}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `16px`,
            height: `16px`,
            marginLeft: `8px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: G.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          G(`.${EE}:hover, .${EE}:focus-visible`, {
            color: G.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (ME = /* @__PURE__ */ p.forwardRef(function (e, t) {
        let {
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            autoFocus: a,
            className: o,
            inputName: s,
            required: c,
            hidden: l,
            defaultValue: u,
            value: d,
            selectOptions: f,
            textAlignment: p,
            style: m,
            onValid: h,
            onChange: g,
            onBlur: _,
            onInvalid: v,
            onFocus: y,
            ...b
          } = e,
          x = cd(),
          S = Wr(),
          C = !x && d !== void 0,
          w = d ?? ``,
          [T, , E] = fg(w, C, g),
          O = fa(C ? w : u),
          k = ot(h, v, E, _, y);
        return l
          ? /* @__PURE__ */ D(N.input, { type: `hidden`, name: s, defaultValue: u })
          : /* @__PURE__ */ D(N.div, {
              ref: t,
              style: m,
              className: Rl(Dt, NE, gg(p, S) && PE, o),
              ...b,
              children: /* @__PURE__ */ D(
                N.select,
                {
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  ref: O,
                  name: s,
                  autoFocus: a,
                  required: c,
                  className: Et,
                  defaultValue: u,
                  value: C ? T : void 0,
                  ...k,
                  children: f?.map((e, t) => {
                    switch (e.type) {
                      case `divider`:
                        return /* @__PURE__ */ D(`hr`, {}, t);
                      case `option`:
                        return /* @__PURE__ */ D(
                          `option`,
                          {
                            value: e.value ?? e.title,
                            disabled: e.disabled,
                            children: e.title ?? e.value,
                          },
                          t
                        );
                      default:
                        return V(e);
                    }
                  }),
                },
                x ? hg(u) : void 0
              ),
            });
      })),
      (NE = `framer-form-select-wrapper`),
      (PE = `framer-form-select-caret-left`),
      (FE = 16),
      (IE = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${FE}" height="${FE}"><path d="M 3.5 6 L 8 10.5 L 12.5 6" fill="transparent" stroke-width="1.5" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`),
      (LE = /* @__PURE__ */ Nb(
        ME,
        [
          ...At,
          ...Nt,
          ...jt,
          G(`.${NE}`, {
            padding: G.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            background: G.variable(`--framer-input-background`),
            borderTopLeftRadius: G.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: G.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: G.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: G.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: G.variable(`--framer-input-corner-shape`),
            boxShadow: G.variable(`--framer-input-box-shadow`),
            transition: G.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          G(`.${NE} select`, {
            appearance: `none`,
            "-webkit-appearance": `none`,
            padding: G.variable(`--framer-input-padding`),
            background: `transparent`,
          }),
          G(`.${NE}::before`, {
            ...Lt,
            paddingLeft: `10px`,
            backgroundPosition: `10px center`,
            maskPosition: `10px center`,
            backgroundImage: G.variable(`--framer-input-icon-image`),
            maskImage: G.variable(`--framer-input-icon-mask-image`, `url('${IE}')`),
          }),
          G(`.${PE}`, {
            padding: G.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
          }),
          G(`.${PE}::before`, {
            left: 0,
            right: `auto`,
            padding: G.variable(`--framer-input-padding`),
            paddingRight: `10px`,
            backgroundPosition: `right 10px center`,
            maskPosition: `right 10px center`,
          }),
          G(`.${NE} select:required:invalid`, {
            color: G.variable(`--framer-input-invalid-text-color`),
          }),
          G(`.${NE}:focus-within, .${NE}.${kt}`, {
            background: G.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
            boxShadow: G.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
          }),
          G(`.${NE}:focus-within::after, .${NE}.${kt}::after`, {
            borderColor: G.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: G.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: G.variable(`--framer-input-focused-border-width`, Mt),
          }),
          G(`.${NE} select option`, { color: `#000` }),
          G(`.${NE} select option:disabled`, { color: `rgba(0, 0, 0, 0.4)` }),
        ],
        `framer-lib-form-select`
      )),
      (RE = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (zE = { opacity: 0 }),
      (BE = { opacity: 1 }),
      (VE = /* @__PURE__ */ Dg(
        /* @__PURE__ */ p.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            d = { ...c },
            f = u(() => Ps(n), [n]),
            [m, h] = j();
          p.useEffect(() => {
            if (!n?.src || !s || f) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                o(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, s, f]);
          let g = f ?? m;
          (s && g && ((d[s] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background);
          let _ = Fs(e.as);
          return /* @__PURE__ */ T(_, {
            ...l,
            style: d,
            ref: t,
            draggable: a,
            children: [n && /* @__PURE__ */ D(rs, { image: n, alt: i, draggable: a }), r],
          });
        })
      )),
      (UE = !yr() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (WE =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (GE = `{{ text-placeholder }}`),
      (KE = `rich-text-wrapper`),
      (qE = /* @__PURE__ */ Bs(
        /* @__PURE__ */ O(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: o,
              textFromDesign: s,
              fonts: c = [],
              width: d,
              height: f,
              left: p,
              right: m,
              top: h,
              bottom: g,
              center: v,
              className: y,
              stylesPresetsClassName: b,
              visible: x = !0,
              opacity: S,
              rotation: C = 0,
              verticalAlignment: w = `top`,
              isEditable: T = !1,
              environment: E = U.current,
              withExternalLayout: O = !1,
              positionSticky: k,
              positionStickyTop: A,
              positionStickyRight: j,
              positionStickyBottom: ee,
              positionStickyLeft: te,
              __htmlStructure: ne,
              __fromCanvasComponent: re = !1,
              _forwardedOverrideId: ie,
              _forwardedOverrides: ae,
              _usesDOMRect: oe,
              children: se,
              ...ce
            } = e,
            le = Ds(),
            ue = Ks(e),
            de = M(null),
            fe = t ?? de,
            { navigate: pe, getRoute: me } = yn(),
            he = xn();
          (Kr(e.preload ?? []), Qs(e, fe));
          let ge = l(zb),
            _e = cd(),
            P = o,
            ve = ie ?? n;
          if (ve && ae) {
            let e = ae[ve];
            typeof e == `string` && (P = e);
          }
          let ye = ``;
          if (P) {
            let e = Ag(P);
            ye = ne ? ne.replace(GE, e) : `<p>${e}</p>`;
          } else if (i) ye = i;
          else if (s) {
            let e = Ag(s);
            ye = ne ? ne.replace(GE, e) : `<p>${e}</p>`;
          } else a && (ye = a);
          let be = jd(),
            xe = u(() => (_e || !me || !he ? ye : jg(ye, me, he, be)), [ye, me, he, be]);
          if (
            (_(() => {
              let e = fe.current;
              if (e === null) return;
              function t(e) {
                let t = Td(e.target, fe.current);
                !Er(e) &&
                  pe &&
                  t &&
                  t.getAttribute(`target`) !== `_blank` &&
                  md(pe, t, be) &&
                  e.preventDefault();
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [pe, be]),
            Pg(c, re, fe),
            !x)
          )
            return null;
          let Se = T && E() === U.canvas,
            F = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Ng(w),
              opacity: Se ? 0 : S,
              flexShrink: 0,
            },
            Ce = U.hasRestrictions(),
            I = ws(e, le || 0, !1),
            we = oe && (d === `auto` || f === `auto`),
            Te = !!e.transformTemplate || !I || !Ce || re || we,
            Ee = Te ? (e.transformTemplate ?? Gs(v)) : void 0;
          if (!O) {
            if (I && Ce && !we) {
              let e = Oy.getNumber(C).toFixed(4);
              ((F.transform = `translate(${I.x}px, ${I.y}px) rotate(${e}deg)`),
                (F.width = I.width),
                (F.minWidth = I.width),
                (F.height = I.height));
            } else
              ((F.left = p),
                (F.right = m),
                (F.top = h),
                (F.bottom = g),
                (F.width = d),
                (F.height = f),
                (F.rotate = C));
            k
              ? (!_e || ge) &&
                ((F.position = `sticky`),
                (F.willChange = `transform`),
                (F.top = A),
                (F.right = j),
                (F.bottom = ee),
                (F.left = te))
              : _e && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`);
          }
          return (
            Il(e, F),
            Nl(e, F),
            Object.assign(F, e.style),
            /* @__PURE__ */ D(N.div, {
              id: n,
              ref: fe,
              ...Og(ob(ce)),
              ...Hs(Te ? v : void 0, e.style),
              style: F,
              layoutId: ue,
              "data-framer-name": r,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": v,
              className: Rl(y, b, KE),
              transformTemplate: Ee,
              dangerouslySetInnerHTML: { __html: xe },
            })
          );
        })
      )),
      (JE = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (YE =
        /\p{Regional_Indicator}{2}|\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?(?:\u{200d}\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?)*|./gu),
      (XE = /* @__PURE__ */ O(function (e, t) {
        return /* @__PURE__ */ D(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ZE = /* @__PURE__ */ N.create(XE)),
      (QE = /* @__PURE__ */ O(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return /* @__PURE__ */ D(ZE, {
          ...r,
          ref: i,
          viewBox: t,
          children: /* @__PURE__ */ D(N.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      ($E = []),
      (eD = `RichTextContainer`),
      (tD = /* @__PURE__ */ O(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: s,
            bottom: c,
            center: d,
            children: f,
            environment: p = U.current,
            fonts: m = $E,
            height: h,
            isEditable: g = !1,
            left: _,
            name: v,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: x,
            positionStickyLeft: S,
            positionStickyRight: C,
            positionStickyTop: w,
            right: T,
            rotation: E = 0,
            style: O,
            _initialStyle: k,
            stylesPresetsClassNames: A,
            text: j,
            top: ee,
            verticalAlignment: te = `top`,
            visible: ne = !0,
            width: re,
            withExternalLayout: ie = !1,
            viewBox: ae,
            viewBoxScale: oe = 1,
            effect: se,
            ...ce
          } = e,
          le = Ds(),
          ue = p(),
          de = ue === U.canvas,
          fe = de || ue === U.export,
          pe = l(zb),
          me = Ks(e),
          he = M(null),
          N = t ?? he;
        (Qs(e, N), Pg(m, n, N));
        let ge = Ug(se, N),
          _e = u(() => {
            if (f) return Xg(f, A, j, o, void 0, ge.getTokenizer());
          }, [f, A, j, o, ge]);
        if (!ne) return null;
        let P = { opacity: g && de ? 0 : y },
          ve = Ng(te);
        ve !== Bt.justifyContent && (P.justifyContent = ve);
        let ye = {},
          be = U.hasRestrictions(),
          xe = ws(e, le || 0, !1),
          Se = a && (re === `auto` || h === `auto`),
          F = !!e.transformTemplate || !xe || !be || n || Se,
          Ce = F ? (e.transformTemplate ?? Gs(d)) : void 0;
        (ie ||
          (xe && be && !Se
            ? ((ye.x = xe.x + (R(O?.x) ? O.x : 0)),
              (ye.y = xe.y + (R(O?.y) ? O.y : 0)),
              (ye.left = 0),
              (ye.top = 0),
              (P.rotate = Oy.getNumber(E)),
              (P.width = xe.width),
              (P.minWidth = xe.width),
              (P.height = xe.height))
            : ((P.left = _),
              (P.right = T),
              (P.top = ee),
              (P.bottom = c),
              (P.width = re),
              (P.height = h),
              (P.rotate = E)),
          b
            ? (!fe || pe) &&
              ((P.position = `sticky`),
              (P.willChange = `transform`),
              (P.top = w),
              (P.right = C),
              (P.bottom = x),
              (P.left = S))
            : de && (e.positionFixed || e.positionAbsolute) && (P.position = `absolute`)),
          Il(e, P),
          Nl(e, P),
          Object.assign(P, k, O, ye),
          me && (ce.layout = `preserve-aspect`));
        let I = Fs(e.as),
          we = ce[`data-framer-name`] ?? v,
          Te = Og(ob(ce)),
          Ee = Hs(F ? d : void 0, O);
        return L(e.viewBox)
          ? e.as === void 0
            ? /* @__PURE__ */ D(QE, {
                ...Te,
                ...Ee,
                ref: N,
                style: P,
                layoutId: me,
                viewBox: ae,
                viewBoxScale: oe,
                transformTemplate: Ce,
                "data-framer-name": we,
                "data-framer-component-type": eD,
                children: _e,
              })
            : /* @__PURE__ */ D(I, {
                ...Te,
                ...Ee,
                ref: N,
                style: P,
                layoutId: me,
                transformTemplate: Ce,
                "data-framer-name": we,
                "data-framer-component-type": eD,
                children: /* @__PURE__ */ D(QE, {
                  viewBox: ae,
                  viewBoxScale: oe,
                  style: { width: `100%`, height: `100%` },
                  children: _e,
                }),
              })
          : /* @__PURE__ */ D(I, {
              ...Te,
              ...Ee,
              ref: N,
              style: P,
              layoutId: me,
              transformTemplate: Ce,
              "data-framer-name": we,
              "data-framer-component-type": eD,
              children: _e,
            });
      })),
      (nD = /* @__PURE__ */ Bs(
        /* @__PURE__ */ O(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (L(a)) {
            !r.stylesPresetsClassName &&
              z(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [L(t) ? `html` : `htmlFromDesign`]: a };
            return /* @__PURE__ */ D(qE, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && L(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return /* @__PURE__ */ D(tD, { ...r, ref: i, children: E(a) ? a : void 0 });
        })
      )),
      (rD = /* @__PURE__ */ br()),
      (iD = class {
        id;
        svg;
        innerHTML;
        viewBox;
        count;
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
      }),
      (aD = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (oD = class {
        entries = /* @__PURE__ */ new Map();
        vectorSetItems = /* @__PURE__ */ new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(Kb(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = e_(e);
            (s &&
              (t && t_(s, n),
              (s.id = n),
              (o = o_(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (e && e !== ``) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          rD && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = aD),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          rD && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new iD(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !rD) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        rD && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${aD}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (sD = /* @__PURE__ */ new oD()),
      (cD = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 16,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (lD = 1e3),
      (uD = `Variable`),
      (dD = `explicitInter`),
      (Pe.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = ae(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  }))();
}
export {
  ja as $,
  mb as A,
  Dv as At,
  Oh as B,
  Mw as C,
  sg as Ct,
  Al as D,
  Zl as Dt,
  c_ as E,
  NS as Et,
  oS as F,
  Xt as Ft,
  rn as G,
  Ea as H,
  Mb as I,
  _a as J,
  D_ as K,
  l_ as L,
  cS as M,
  Zt as Mt,
  aS as N,
  nt as Nt,
  Fb as O,
  v_ as Ot,
  sS as P,
  Ut as Pt,
  Bh as Q,
  u_ as R,
  sE as S,
  yn as St,
  QS as T,
  cg as Tt,
  en as U,
  nv as V,
  fD as W,
  Va as X,
  dC as Y,
  uE as Z,
  Sy as _,
  Hr as _t,
  ZS as a,
  pa as at,
  xC as b,
  Eh as bt,
  zo as c,
  On as ct,
  LE as d,
  Uh as dt,
  b_ as et,
  Xx as f,
  Ih as ft,
  IC as g,
  Ur as gt,
  I_ as h,
  qh as ht,
  IS as i,
  sD as it,
  S_ as j,
  U as jt,
  Rl as k,
  bE as kt,
  tw as l,
  xn as lt,
  VE as m,
  cd as mt,
  Ed as n,
  Cd as nt,
  Fx as o,
  Mh as ot,
  vC as p,
  Ic as pt,
  Rs as q,
  Tu as r,
  BS as rt,
  pE as s,
  Eu as st,
  Sd as t,
  y_ as tt,
  jE as u,
  ad as ut,
  Xr as v,
  Ha as vt,
  nD as w,
  Nb as wt,
  tS as x,
  Dn as xt,
  zp as y,
  Gh as yt,
  s_ as z,
};
//# sourceMappingURL=framer.mQNi9T2E.mjs.map
