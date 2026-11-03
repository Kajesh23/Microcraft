import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
  I as n,
  M as r,
  N as i,
  T as a,
  b as o,
  c as s,
  j as ee,
  l as c,
  o as l,
  p as u,
  s as d,
  v as f,
  x as p,
} from "./react.guramC8M.mjs";
import { L as m, P as h, S as g, a as _, p as v, r as y, t as b } from "./motion.BkENN8JI.mjs";
import {
  A as x,
  C as S,
  Ct as C,
  D as w,
  Dt as T,
  E,
  Et as D,
  L as O,
  R as k,
  St as A,
  T as j,
  W as M,
  Z as N,
  _t as te,
  a as P,
  b as ne,
  bt as re,
  dt as ie,
  et as ae,
  f as oe,
  ft as se,
  g as F,
  i as I,
  j as L,
  jt as ce,
  k as R,
  m as le,
  mt as ue,
  n as de,
  o as z,
  st as fe,
  tt as pe,
  ut as me,
  vt as he,
  w as B,
  wt as V,
  x as H,
  xt as U,
  z as W,
} from "./framer.mQNi9T2E.mjs";
import {
  C as ge,
  D as _e,
  E as ve,
  T as ye,
  _ as be,
  b as xe,
  g as Se,
  h as Ce,
  i as we,
  r as G,
  v as Te,
  w as Ee,
  x as De,
  y as Oe,
} from "./toplevel-deps.CrcF9UeY.mjs";
import { i as ke, r as Ae } from "./shared-lib.BnN6DsbI.mjs";
import {
  a as je,
  i as Me,
  n as Ne,
  o as Pe,
  r as Fe,
  s as Ie,
  t as Le,
} from "./utils-MaUy.CyWEbMU4.mjs";
import { i as Re, n as ze, r as Be, t as Ve } from "./ilUlJnLkH.DR4o7BiV.mjs";
import { i as He, n as Ue, r as We, t as Ge } from "./NxCe_AOfF.C08H5wkL.mjs";
import { a as Ke, c as qe, o as Je, s as Ye } from "./JLWig38Pv.ClFxyf2Q.mjs";
import { i as Xe, n as Ze, r as Qe, t as $e } from "./ZRloE2uUu.DrAzey9J.mjs";
import { n as et, t as K } from "./ZEOox1xX9.B6zZbset.mjs";
import { a as tt, r as nt, t as rt } from "./vW1JQClGO.HbGkyAHl.mjs";
import { i as it, n as at, r as ot, t as st } from "./djOUw0pzb.BWV5LaTY.mjs";
import { i as ct, n as lt, r as ut, t as dt } from "./TTqvVnbYq.mRW82p5T.mjs";
import { n as ft, r as pt } from "./augiA20Il.DDSdY2I5.mjs";
function mt(e) {
  let t = p(null);
  return (
    o(() => {
      ((t.current.parentNode.style.marginLeft = e.margin + e.unit),
        (t.current.parentNode.style.marginTop = e.margin + e.unit));
    }),
    /*#__PURE__*/ l(`div`, { ref: t })
  );
}
function ht() {
  return (ht = e(() => {
    (d(),
      t(),
      M(),
      w(mt, {
        unit: {
          type: z.Enum,
          defaultValue: `px`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `horizontal`,
          options: [`px`, `%`],
          optionTitles: [`Pixel`, `Percent`],
        },
        margin: { type: z.Number, max: 0, min: -1e3, defaultValue: -3 },
      }));
  }))();
}
function gt(e) {
  let { mode: t, start: n, end: r, value: i, decimals: a, commas: ee, color: l, animation: u } = e,
    d = ce.current() === ce.canvas,
    _ = e.tag,
    y = g[e.tag],
    b = t == "default",
    x = b ? n : i,
    S = b ? u.transition : e.transition,
    C = (e) => {
      let t = e.toFixed(a);
      return (ee && (t = t.replace(/\B(?=(\d{3})+(?!\d))/g, `,`)), t);
    },
    [w, T] = f(x),
    [E, D] = f(w),
    [O, k] = f(null),
    A = p(null),
    j = h(A, { once: !e.animation.replay, amount: `some` });
  m(i);
  let M = (e, t) => {
    d ||
      (O && O.stop(),
      D(t),
      k(
        v(e, t, {
          ...S,
          onUpdate: (e) => {
            T(e);
          },
        })
      ));
  };
  return (
    o(() => {
      b && u.trigger == `appear` && M(n, r);
    }, []),
    o(() => {
      b && u.trigger == `layerInView` && (j ? M(n, r) : (O && O.stop(), T(n)));
    }, [j]),
    o(() => {
      b || M(w, i);
    }, [i]),
    /*#__PURE__*/ c(s, {
      children: [
        /*#__PURE__*/ c(_, {
          style: {
            ...e.style,
            margin: 0,
            opacity: 0,
            pointerEvents: `none`,
            userSelect: `none`,
            textWrap: e.balance ? `balance` : void 0,
            fontVariantNumeric: e.monospace ? `tabular-nums` : void 0,
            textAlign: `center`,
            ...e.font,
          },
          children: [e.prefix, C(d ? x : E), e.suffix],
        }),
        /*#__PURE__*/ c(y, {
          ref: A,
          style: {
            position: `absolute`,
            inset: 0,
            userSelect: e.userSelect ? `auto` : `none`,
            fontVariantNumeric: e.monospace ? `tabular-nums` : void 0,
            margin: 0,
            ...(l.mode == `solid`
              ? { color: l.color }
              : {
                  WebkitBackgroundClip: `text`,
                  WebkitTextFillColor: `transparent`,
                  backgroundImage: `linear-gradient(${l.angle}deg, ${l.startColor}, ${l.endColor})`,
                }),
            textDecoration: e.decoration,
            textWrap: e.balance ? `balance` : void 0,
            textAlign: `center`,
            ...e.font,
            ...e.style,
          },
          children: [e.prefix, C(d ? x : w), e.suffix],
        }),
      ],
    })
  );
}
function _t() {
  return (_t = e(() => {
    (d(),
      M(),
      t(),
      b(),
      (gt.displayName = `Animated Number Counter`),
      w(gt, {
        mode: {
          type: z.Enum,
          options: [`default`, `variants`],
          optionTitles: [`Default`, `Variants`],
          displaySegmentedControl: !0,
        },
        value: { type: z.Number, defaultValue: 0, hidden: (e) => e.mode !== `variants` },
        start: { type: z.Number, defaultValue: 0, hidden: (e) => e.mode !== "default" },
        end: { type: z.Number, defaultValue: 100, hidden: (e) => e.mode !== "default" },
        animation: {
          type: z.Object,
          icon: `effect`,
          hidden: (e) => e.mode !== "default",
          controls: {
            trigger: {
              type: z.Enum,
              defaultValue: `layerInView`,
              options: [`appear`, `layerInView`],
              optionTitles: [`Appear`, `Layer in View`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            replay: {
              type: z.Boolean,
              defaultValue: !0,
              hidden(e) {
                return e.trigger !== `layerInView`;
              },
            },
            transition: {
              type: z.Transition,
              defaultValue: { type: `spring`, duration: 1, bounce: 0 },
            },
          },
        },
        transition: {
          type: z.Transition,
          defaultValue: { type: `spring`, duration: 1, bounce: 0 },
          hidden: (e) => e.mode !== `variants`,
        },
        decimals: {
          type: z.Enum,
          defaultValue: 0,
          options: [0, 1, 2, 3],
          optionTitles: [`Off`, `1`, `2`, `3`],
          displaySegmentedControl: !0,
        },
        commas: { type: z.Boolean, defaultValue: !0 },
        font: {
          type: `font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: { fontSize: 16, lineHeight: 1 },
        },
        color: {
          type: z.Object,
          controls: {
            mode: {
              type: z.Enum,
              defaultValue: `solid`,
              options: [`solid`, `gradient`],
              optionTitles: [`Solid`, `Gradient`],
              displaySegmentedControl: !0,
            },
            color: { type: z.Color, defaultValue: `#000`, hidden: (e) => e.mode !== `solid` },
            startColor: {
              type: z.Color,
              defaultValue: `#000`,
              hidden: (e) => e.mode !== `gradient`,
            },
            endColor: { type: z.Color, defaultValue: `#FFF`, hidden: (e) => e.mode !== `gradient` },
            angle: {
              type: z.Number,
              defaultValue: 180,
              min: -360,
              max: 360,
              unit: `°`,
              hidden: (e) => e.mode !== `gradient`,
            },
          },
        },
        prefix: { type: z.String, placeholder: `Prefix` },
        suffix: { type: z.String, placeholder: `Suffix` },
        decoration: {
          type: z.Enum,
          defaultValue: `none`,
          options: [`none`, `underline`, `line-through`],
          optionTitles: [`None`, `Underline`, `Strikethrough`],
        },
        balance: { type: z.Boolean, defaultValue: !1 },
        userSelect: { type: z.Boolean, defaultValue: !0 },
        tag: {
          type: z.Enum,
          defaultValue: `p`,
          displaySegmentedControl: !0,
          options: [`h1`, `h2`, `h3`, `p`],
          optionTitles: [`H1`, `H2`, `H3`, `P`],
        },
        monospace: {
          type: z.Boolean,
          defaultValue: !1,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }))();
}
var vt, yt, bt;
function xt() {
  return (xt = e(() => {
    (M(),
      x.loadFonts([`Inter-SemiBold`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-SemiBoldItalic`]),
      (vt = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/1ZFS7N918ojhhd0nQWdj3jz4w.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/zSsEuoJdh8mcFVk976C05ZfQr8.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/6FI2EneKzM3qBy5foOZXey7coCA.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/qrVgiXNd6RuQjETYQiVQ9nqCk.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (yt = [
        `.framer-BPuyJ .framer-styles-preset-6nl8p7:not(.rich-text-wrapper), .framer-BPuyJ .framer-styles-preset-6nl8p7.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, #303030); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-BPuyJ .framer-styles-preset-6nl8p7:not(.rich-text-wrapper), .framer-BPuyJ .framer-styles-preset-6nl8p7.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, #303030); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-BPuyJ .framer-styles-preset-6nl8p7:not(.rich-text-wrapper), .framer-BPuyJ .framer-styles-preset-6nl8p7.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, #303030); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (bt = `framer-BPuyJ`));
  }))();
}
function St(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, q;
function Ft() {
  return (Ft = e(() => {
    (d(),
      M(),
      b(),
      t(),
      _t(),
      xt(),
      (Ct = O(gt)),
      (wt = [`KvPlWvX2H`, `jnBlTqivc`]),
      (Tt = `framer-aPeZU`),
      (Et = { jnBlTqivc: `framer-v-1flsvbn`, KvPlWvX2H: `framer-v-1y7zim2` }),
      (Dt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ot = ({ value: e, children: t }) => {
        let n = r(_),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(_.Provider, { value: o, children: t });
      }),
      (kt = g.create(n)),
      (At = { Desktop: `KvPlWvX2H`, Phone: `jnBlTqivc` }),
      (jt = ({ color: e, end: t, height: n, id: r, suffix: i, title: a, width: o, ...s }) => ({
        ...s,
        CSvrESaLr: a ?? s.CSvrESaLr ?? `Years of Experience`,
        k4k7YmQcq: t ?? s.k4k7YmQcq ?? 12,
        RK_0HRuzk:
          e ?? s.RK_0HRuzk ?? `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
        S0H9a8_hu: i ?? s.S0H9a8_hu,
        variant: At[s.variant] ?? s.variant ?? `KvPlWvX2H`,
      })),
      (Mt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Nt = /*#__PURE__*/ u(function (e, t) {
        let r = p(null),
          i = t ?? r,
          o = a(),
          { activeLocale: s, setLocale: ee } = te();
        fe();
        let {
            style: u,
            className: d,
            layoutId: f,
            variant: m,
            k4k7YmQcq: h,
            CSvrESaLr: _,
            RK_0HRuzk: v,
            S0H9a8_hu: b,
            ...x
          } = jt(e),
          {
            baseVariant: S,
            classNames: w,
            clearLoadingGesture: T,
            gestureHandlers: E,
            gestureVariant: D,
            isLoading: O,
            setGestureState: k,
            setVariant: A,
            variants: M,
          } = C({
            cycleOrder: wt,
            defaultVariant: `KvPlWvX2H`,
            ref: i,
            variant: m,
            variantClassNames: Et,
          }),
          N = Mt(e, M),
          P = R(Tt, bt);
        return /*#__PURE__*/ l(y, {
          id: f ?? o,
          children: /*#__PURE__*/ l(kt, {
            animate: M,
            initial: !1,
            children: /*#__PURE__*/ l(Ot, {
              value: Dt,
              children: /*#__PURE__*/ c(g.div, {
                ...x,
                ...E,
                className: R(P, `framer-1y7zim2`, d, w),
                "data-framer-name": `Desktop`,
                layoutDependency: N,
                layoutId: `KvPlWvX2H`,
                ref: i,
                style: { ...u },
                ...St({ jnBlTqivc: { "data-framer-name": `Phone` } }, S, D),
                children: [
                  /*#__PURE__*/ l(I, {
                    children: /*#__PURE__*/ l(j, {
                      className: `framer-zfw4zw-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: N,
                      layoutId: `urtqdFyEC-container`,
                      nodeId: `urtqdFyEC`,
                      rendersWithMotion: !0,
                      scopeId: `nh6yvBpJu`,
                      children: /*#__PURE__*/ l(gt, {
                        animation: {
                          replay: !0,
                          transition: { bounce: 0, delay: 0, duration: 1, type: `spring` },
                          trigger: `layerInView`,
                        },
                        balance: !1,
                        color: {
                          angle: 180,
                          color: `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                          endColor: `rgb(255, 255, 255)`,
                          mode: `solid`,
                          startColor: `rgb(0, 0, 0)`,
                        },
                        commas: !0,
                        decimals: 0,
                        decoration: `none`,
                        end: h,
                        font: {
                          fontFamily: `"Antonio", "Antonio Placeholder", sans-serif`,
                          fontFeatureSettings: `'zero' on, 'tnum' on`,
                          fontSize: `60px`,
                          fontStyle: `normal`,
                          fontWeight: 700,
                          letterSpacing: `0em`,
                          lineHeight: `1em`,
                        },
                        height: `100%`,
                        id: `urtqdFyEC`,
                        layoutId: `urtqdFyEC`,
                        mode: `default`,
                        monospace: !1,
                        prefix: ``,
                        start: 0,
                        suffix: b,
                        tag: `h3`,
                        transition: { bounce: 0, delay: 0, duration: 1, type: `spring` },
                        userSelect: !0,
                        value: 1e3,
                        width: `100%`,
                        ...St(
                          {
                            jnBlTqivc: {
                              font: {
                                fontFamily: `"Antonio", "Antonio Placeholder", sans-serif`,
                                fontFeatureSettings: `'zero' on, 'tnum' on`,
                                fontSize: `48px`,
                                fontStyle: `normal`,
                                fontWeight: 700,
                                letterSpacing: `0em`,
                                lineHeight: `1.1em`,
                              },
                            },
                          },
                          S,
                          D
                        ),
                      }),
                    }),
                  }),
                  /*#__PURE__*/ l(B, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ l(n, {
                      children: /*#__PURE__*/ l(g.p, {
                        className: `framer-styles-preset-6nl8p7`,
                        "data-styles-preset": `EBQDvGnCv`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-RK_0HRuzk-nh6yvBpJu))`,
                        },
                        children: `Years of Ezperience`,
                      }),
                    }),
                    className: `framer-nnrta1`,
                    fonts: [`Inter`],
                    layoutDependency: N,
                    layoutId: `QepdMxesI`,
                    style: {
                      "--extracted-r6o4lv": `var(--variable-reference-RK_0HRuzk-nh6yvBpJu)`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                      "--variable-reference-RK_0HRuzk-nh6yvBpJu": v,
                    },
                    text: _,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (Pt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-aPeZU.framer-tjezek, .framer-aPeZU .framer-tjezek { display: block; }`,
        `.framer-aPeZU.framer-1y7zim2 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-aPeZU .framer-zfw4zw-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-aPeZU .framer-nnrta1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-aPeZU.framer-v-1flsvbn.framer-1y7zim2 { align-content: flex-end; align-items: flex-end; flex-direction: row; gap: 10px; }`,
        ...yt,
      ]),
      (q = V(Nt, Pt, `framer-aPeZU`)),
      (q.displayName = `Number Card`),
      (q.defaultProps = { height: 88.4, width: 174.133 }),
      w(q, {
        variant: {
          options: [`KvPlWvX2H`, `jnBlTqivc`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: z.Enum,
        },
        k4k7YmQcq: { defaultValue: 12, title: `End`, type: z.Number },
        CSvrESaLr: {
          defaultValue: `Years of Experience`,
          displayTextArea: !1,
          title: `Title`,
          type: z.String,
        },
        RK_0HRuzk: {
          defaultValue: `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
          title: `Color`,
          type: z.Color,
        },
        S0H9a8_hu: { defaultValue: ``, placeholder: `Suffix`, title: `Suffix`, type: z.String },
      }),
      E(
        q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Antonio`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/antonio/v21/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVyW9htNY2DwSXlM.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Ct,
          ...k(vt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function It(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, J;
function Xt() {
  return (Xt = e(() => {
    (d(),
      M(),
      b(),
      t(),
      Re(),
      (Lt = { AOB11ZrFP: { hover: !0 } }),
      (Rt = [`AOB11ZrFP`, `jUTnzztGG`]),
      (zt = `framer-InsWF`),
      (Bt = { AOB11ZrFP: `framer-v-ta7ls3`, jUTnzztGG: `framer-v-1ph514i` }),
      (Vt = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (Ht = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Ut = ({ value: e, children: t }) => {
        let n = r(_),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(_.Provider, { value: o, children: t });
      }),
      (Wt = g.create(n)),
      (Gt = { "Tablet & Phone": `jUTnzztGG`, Desktop: `AOB11ZrFP` }),
      (Kt = ({ height: e, id: t, link: n, radius: r, title: i, width: a, ...o }) => ({
        ...o,
        eI1zBfJVT: n ?? o.eI1zBfJVT,
        P4LIfja12: r ?? o.P4LIfja12 ?? `99px`,
        v6UsQ4OJm: i ?? o.v6UsQ4OJm ?? `Read More`,
        variant: Gt[o.variant] ?? o.variant ?? `AOB11ZrFP`,
      })),
      (qt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Jt = /*#__PURE__*/ u(function (e, t) {
        let r = p(null),
          i = t ?? r,
          o = a(),
          { activeLocale: s, setLocale: ee } = te();
        fe();
        let {
            style: u,
            className: d,
            layoutId: f,
            variant: m,
            v6UsQ4OJm: h,
            P4LIfja12: _,
            eI1zBfJVT: v,
            ...b
          } = Kt(e),
          {
            baseVariant: x,
            classNames: S,
            clearLoadingGesture: w,
            gestureHandlers: T,
            gestureVariant: E,
            isLoading: D,
            setGestureState: O,
            setVariant: k,
            variants: A,
          } = C({
            cycleOrder: Rt,
            defaultVariant: `AOB11ZrFP`,
            enabledGestures: Lt,
            ref: i,
            variant: m,
            variantClassNames: Bt,
          }),
          j = qt(e, A),
          M = R(zt, Ve),
          N = () => x !== `jUTnzztGG`;
        return /*#__PURE__*/ l(y, {
          id: f ?? o,
          children: /*#__PURE__*/ l(Wt, {
            animate: A,
            initial: !1,
            children: /*#__PURE__*/ l(Ut, {
              value: Ht,
              children: /*#__PURE__*/ l(F, {
                href: v,
                motionChild: !0,
                nodeId: `AOB11ZrFP`,
                openInNewTab: !1,
                scopeId: `QtnGPi4Hi`,
                children: /*#__PURE__*/ c(g.a, {
                  ...b,
                  ...T,
                  className: `${R(M, `framer-ta7ls3`, d, S)} framer-q5god6`,
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: j,
                  layoutId: `AOB11ZrFP`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: Vt(_, 3),
                    borderBottomRightRadius: Vt(_, 2),
                    borderTopLeftRadius: Vt(_, 0),
                    borderTopRightRadius: Vt(_, 1),
                    ...u,
                  },
                  variants: {
                    "AOB11ZrFP-hover": { backgroundColor: `rgba(0, 0, 0, 0)` },
                    jUTnzztGG: {
                      backgroundColor: `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                    },
                  },
                  ...It(
                    {
                      "AOB11ZrFP-hover": { "data-framer-name": void 0 },
                      jUTnzztGG: { "data-framer-name": `Tablet & Phone` },
                    },
                    x,
                    E
                  ),
                  children: [
                    N() &&
                      /*#__PURE__*/ l(g.div, {
                        className: `framer-hvqhah`,
                        "data-framer-name": `Color BG`,
                        layoutDependency: j,
                        layoutId: `K3XmH3faO`,
                        style: {
                          backgroundColor: `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                          borderBottomLeftRadius: 99,
                          borderBottomRightRadius: 99,
                          borderTopLeftRadius: 99,
                          borderTopRightRadius: 99,
                          originX: 1,
                          originY: 0,
                        },
                      }),
                    /*#__PURE__*/ l(B, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ l(n, {
                        children: /*#__PURE__*/ l(g.h4, {
                          className: `framer-styles-preset-usoyrg`,
                          "data-styles-preset": `ilUlJnLkH`,
                          style: {
                            "--framer-text-color": `var(--extracted-1eung3n, var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223)))`,
                          },
                          children: `Read More`,
                        }),
                      }),
                      className: `framer-bh1npw`,
                      fonts: [`Inter`],
                      layoutDependency: j,
                      layoutId: `bxTmymltq`,
                      style: {
                        "--extracted-1eung3n": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: h,
                      variants: {
                        "AOB11ZrFP-hover": {
                          "--extracted-1eung3n": `var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255))`,
                        },
                        jUTnzztGG: {
                          "--extracted-1eung3n": `var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...It(
                        {
                          "AOB11ZrFP-hover": {
                            children: /*#__PURE__*/ l(n, {
                              children: /*#__PURE__*/ l(g.h4, {
                                className: `framer-styles-preset-usoyrg`,
                                "data-styles-preset": `ilUlJnLkH`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1eung3n, var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255)))`,
                                },
                                children: `Read More`,
                              }),
                            }),
                          },
                          jUTnzztGG: {
                            children: /*#__PURE__*/ l(n, {
                              children: /*#__PURE__*/ l(g.h4, {
                                className: `framer-styles-preset-usoyrg`,
                                "data-styles-preset": `ilUlJnLkH`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1eung3n, var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255)))`,
                                },
                                children: `Read More`,
                              }),
                            }),
                          },
                        },
                        x,
                        E
                      ),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Yt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-InsWF.framer-q5god6, .framer-InsWF .framer-q5god6 { display: block; }`,
        `.framer-InsWF.framer-ta7ls3 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 6px 40px 8px 40px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-InsWF .framer-hvqhah { bottom: -15px; flex: none; height: 15px; left: -19px; overflow: visible; position: absolute; width: 15px; z-index: 1; }`,
        `.framer-InsWF .framer-bh1npw { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-InsWF.framer-v-1ph514i.framer-ta7ls3 { cursor: unset; }`,
        `.framer-InsWF.framer-v-ta7ls3.hover .framer-hvqhah { bottom: -58px; height: unset; left: -26px; right: -27px; top: -126px; width: unset; }`,
        ...ze,
        `.framer-InsWF[data-border="true"]::after, .framer-InsWF [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (J = V(Jt, Yt, `framer-InsWF`)),
      (J.displayName = `Primary Button`),
      (J.defaultProps = { height: 48, width: 181 }),
      w(J, {
        variant: {
          options: [`AOB11ZrFP`, `jUTnzztGG`],
          optionTitles: [`Desktop`, `Tablet & Phone`],
          title: `Variant`,
          type: z.Enum,
        },
        v6UsQ4OJm: {
          defaultValue: `Read More`,
          displayTextArea: !1,
          title: `Title`,
          type: z.String,
        },
        P4LIfja12: { defaultValue: `99px`, title: `Radius`, type: z.BorderRadius },
        eI1zBfJVT: { title: `Link`, type: z.Link },
      }),
      E(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...k(Be),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Zt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, Y;
function un() {
  return (un = e(() => {
    (d(),
      M(),
      b(),
      t(),
      Te(),
      qe(),
      Xe(),
      (Qt = [`cjkDSP2qE`, `yAincoNeC`]),
      ($t = `framer-rGvvn`),
      (en = { cjkDSP2qE: `framer-v-1jgmiek`, yAincoNeC: `framer-v-19x0wet` }),
      (tn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (nn = ({ value: e, children: t }) => {
        let n = r(_),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(_.Provider, { value: o, children: t });
      }),
      (rn = { "Desktop & Tablet": `cjkDSP2qE`, Phone: `yAincoNeC` }),
      (an = g.create(n)),
      (on = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: rn[r.variant] ?? r.variant ?? `cjkDSP2qE`,
      })),
      (sn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (cn = /*#__PURE__*/ u(function (e, t) {
        let r = p(null),
          i = t ?? r,
          o = a(),
          { activeLocale: s, contentLocale: ee, setLocale: u } = te();
        fe();
        let { style: d, className: f, layoutId: m, variant: h, ..._ } = on(e),
          {
            baseVariant: v,
            classNames: b,
            clearLoadingGesture: x,
            gestureHandlers: S,
            gestureVariant: w,
            isLoading: T,
            setGestureState: E,
            setVariant: D,
            variants: O,
          } = C({
            cycleOrder: Qt,
            defaultVariant: `cjkDSP2qE`,
            ref: i,
            variant: h,
            variantClassNames: en,
          }),
          k = sn(e, O),
          A = R($t, Ce, Ke, $e);
        return /*#__PURE__*/ l(y, {
          id: m ?? o,
          children: /*#__PURE__*/ l(an, {
            animate: O,
            initial: !1,
            children: /*#__PURE__*/ l(nn, {
              value: tn,
              children: /*#__PURE__*/ l(g.div, {
                ..._,
                ...S,
                className: R(A, `framer-1jgmiek`, f, b),
                "data-framer-name": `Desktop & Tablet`,
                layoutDependency: k,
                layoutId: `cjkDSP2qE`,
                ref: i,
                style: { ...d },
                ...Zt({ yAincoNeC: { "data-framer-name": `Phone` } }, v, w),
                children: /*#__PURE__*/ c(g.div, {
                  className: `framer-zw9vyd`,
                  "data-framer-name": `Text Wrap`,
                  layoutDependency: k,
                  layoutId: `QrapRS_M2`,
                  children: [
                    /*#__PURE__*/ l(B, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ l(n, {
                        children: /*#__PURE__*/ l(g.p, {
                          className: `framer-styles-preset-6nl8p7`,
                          "data-styles-preset": `EBQDvGnCv`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48)))`,
                          },
                          children: ` Email :`,
                        }),
                      }),
                      className: `framer-1ayqvr4`,
                      fonts: [`Inter`],
                      layoutDependency: k,
                      layoutId: `iuoq51p1u`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    /*#__PURE__*/ l(B, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ l(n, {
                        children: /*#__PURE__*/ l(g.p, {
                          className: `framer-styles-preset-17cdd8a`,
                          "data-styles-preset": `UezruUh9E`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7d1fd828-621c-47fc-b270-6f2c2fff9ca2, rgb(143, 143, 143)))`,
                          },
                          children: /*#__PURE__*/ l(F, {
                            href: `mailto:yharshavardhan065@gmail.com`,
                            motionChild: !0,
                            nodeId: `skJVLy6cr`,
                            openInNewTab: !0,
                            relValues: [],
                            scopeId: `Uu9UKaNP4`,
                            smoothScroll: !1,
                            children: /*#__PURE__*/ l(g.a, {
                              className: `framer-styles-preset-1tmbphv`,
                              "data-styles-preset": `ZRloE2uUu`,
                              children: ` yharshavardhan065@gmail.com`,
                            }),
                          }),
                        }),
                      }),
                      className: `framer-1b4b9bc`,
                      fonts: [`Inter`],
                      layoutDependency: k,
                      layoutId: `skJVLy6cr`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-7d1fd828-621c-47fc-b270-6f2c2fff9ca2, rgb(143, 143, 143))`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (ln = [
        `.framer-rGvvn.framer-1r97v75, .framer-rGvvn .framer-1r97v75 { display: block; }`,
        `.framer-rGvvn.framer-1jgmiek { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-rGvvn .framer-zw9vyd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-rGvvn .framer-1ayqvr4, .framer-rGvvn .framer-1b4b9bc { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-rGvvn.framer-v-19x0wet.framer-1jgmiek { align-content: center; align-items: center; justify-content: flex-start; }`,
        `.framer-rGvvn.framer-v-19x0wet .framer-zw9vyd { align-content: center; align-items: center; flex-direction: row; gap: 5px; }`,
        ...Se,
        ...Je,
        ...Ze,
      ]),
      (Y = V(cn, ln, `framer-rGvvn`)),
      (Y.displayName = `Email Info Card`),
      (Y.defaultProps = { height: 50.4, width: 275.833 }),
      w(Y, {
        variant: {
          options: [`cjkDSP2qE`, `yAincoNeC`],
          optionTitles: [`Desktop & Tablet`, `Phone`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      E(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...k(be),
          ...k(Ye),
          ...k(Qe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var dn, fn, pn;
function mn() {
  return (mn = e(() => {
    (M(),
      x.loadFonts([`Inter-Light`, `Inter`, `Inter-Italic`, `Inter-LightItalic`]),
      (dn = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/BkDpl4ghaqvMi1btKFyG2tdbec.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/zAMK70AQRFSShJgUiaR5IiIhgzk.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/IETjvc5qzUaRoaruDpPSwCUM8.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/oLCoaT3ioA0fHdJnWR9W6k7NY.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/Sj0PCHQSBjFmEp6NBWg6FNaKc.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/v2q8JTTTs7McDMSEhnxAIBqd0.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/H4TfENUY1rh8R9UaSD6vngjJP3M.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/vFzuJY0c65av44uhEKB6vyjFMg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/YYB6GZmCWnZq3RWZOghuZIOxQY.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/miJTzODdiyIr3tRo9KEoqXXk2PM.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/6ZMhcggRFfEfbf7lncCpaUbA.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/8sCN6PGUr4I8q5hC5twAXfcwqV0.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/aUYDUTztS7anQw5JuwCncXeLOBY.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/5mDAOkC5Wpzo7NkuE9oYfqlY2u4.woff2`,
              weight: `300`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/yDiPvYxioBHsicnYxpPW35WQmx8.woff2`,
              weight: `300`,
            },
          ],
        },
      ]),
      (fn = [
        `.framer-m8D3R .framer-styles-preset-17cdd8a:not(.rich-text-wrapper), .framer-m8D3R .framer-styles-preset-17cdd8a.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 300; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, #303030); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-m8D3R .framer-styles-preset-17cdd8a:not(.rich-text-wrapper), .framer-m8D3R .framer-styles-preset-17cdd8a.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 300; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, #303030); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-m8D3R .framer-styles-preset-17cdd8a:not(.rich-text-wrapper), .framer-m8D3R .framer-styles-preset-17cdd8a.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 300; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, #303030); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (pn = `framer-m8D3R`));
  }))();
}
var hn, gn, _n;
function vn() {
  return (vn = e(() => {
    (M(),
      x.loadFonts([]),
      (hn = [{ explicitInter: !0, fonts: [] }]),
      (gn = [
        `.framer-FPPlp .framer-styles-preset-1tmbphv:not(.rich-text-wrapper), .framer-FPPlp .framer-styles-preset-1tmbphv.rich-text-wrapper a { --framer-link-current-text-color: var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, #303030); --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, #6a71df); --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, #303030); --framer-link-text-decoration: none; transition-delay: 0s; transition-duration: 0.2s; transition-property: color; transition-timing-function: cubic-bezier(0.5, 0, 0.88, 0.77); }`,
      ]),
      (_n = `framer-FPPlp`));
  }))();
}
function yn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, X;
function jn() {
  return (jn = e(() => {
    (d(),
      M(),
      b(),
      t(),
      xt(),
      mn(),
      vn(),
      (bn = [`s7qx4Xixl`, `qeDkaMItm`]),
      (xn = `framer-dQlw8`),
      (Sn = { qeDkaMItm: `framer-v-q2nnth`, s7qx4Xixl: `framer-v-n8eci7` }),
      (Cn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (wn = ({ value: e, children: t }) => {
        let n = r(_),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ l(_.Provider, { value: o, children: t });
      }),
      (Tn = g.create(n)),
      (En = { "Desktop & Tablet": `s7qx4Xixl`, Phone: `qeDkaMItm` }),
      (Dn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: En[r.variant] ?? r.variant ?? `s7qx4Xixl`,
      })),
      (On = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (kn = /*#__PURE__*/ u(function (e, t) {
        let r = p(null),
          i = t ?? r,
          o = a(),
          { activeLocale: s, setLocale: ee } = te();
        fe();
        let { style: u, className: d, layoutId: f, variant: m, ...h } = Dn(e),
          {
            baseVariant: _,
            classNames: v,
            clearLoadingGesture: b,
            gestureHandlers: x,
            gestureVariant: S,
            isLoading: w,
            setGestureState: T,
            setVariant: E,
            variants: D,
          } = C({
            cycleOrder: bn,
            defaultVariant: `s7qx4Xixl`,
            ref: i,
            variant: m,
            variantClassNames: Sn,
          }),
          O = On(e, D),
          k = R(xn, bt, pn, _n);
        return /*#__PURE__*/ l(y, {
          id: f ?? o,
          children: /*#__PURE__*/ l(Tn, {
            animate: D,
            initial: !1,
            children: /*#__PURE__*/ l(wn, {
              value: Cn,
              children: /*#__PURE__*/ l(g.div, {
                ...h,
                ...x,
                className: R(k, `framer-n8eci7`, d, v),
                "data-framer-name": `Desktop & Tablet`,
                layoutDependency: O,
                layoutId: `s7qx4Xixl`,
                ref: i,
                style: { ...u },
                ...yn({ qeDkaMItm: { "data-framer-name": `Phone` } }, _, S),
                children: /*#__PURE__*/ c(g.div, {
                  className: `framer-1mw2538`,
                  "data-framer-name": `Text Wrap`,
                  layoutDependency: O,
                  layoutId: `K3E_K26FT`,
                  children: [
                    /*#__PURE__*/ l(B, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ l(n, {
                        children: /*#__PURE__*/ l(g.p, {
                          className: `framer-styles-preset-6nl8p7`,
                          "data-styles-preset": `EBQDvGnCv`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48)))`,
                          },
                          children: `Call Today :`,
                        }),
                      }),
                      className: `framer-1hlvsc8`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `PxoSNDZvm`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    /*#__PURE__*/ l(B, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ l(n, {
                        children: /*#__PURE__*/ c(g.p, {
                          className: `framer-styles-preset-17cdd8a`,
                          "data-styles-preset": `UezruUh9E`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223)))`,
                          },
                          children: [
                            /*#__PURE__*/ l(F, {
                              href: `tel:+1 (555) 123-4567`,
                              motionChild: !0,
                              nodeId: `A_8KyUaSy`,
                              openInNewTab: !0,
                              relValues: [],
                              scopeId: `YHVFtKKGl`,
                              smoothScroll: !1,
                              children: /*#__PURE__*/ l(g.a, {
                                className: `framer-styles-preset-1tmbphv`,
                                "data-styles-preset": `ZRloE2uUu`,
                                children: `+`,
                              }),
                            }),
                            `91 9342638298`,
                          ],
                        }),
                      }),
                      className: `framer-85icue`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `A_8KyUaSy`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (An = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-dQlw8.framer-h36qgb, .framer-dQlw8 .framer-h36qgb { display: block; }`,
        `.framer-dQlw8.framer-n8eci7 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-dQlw8 .framer-1mw2538 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-dQlw8 .framer-1hlvsc8, .framer-dQlw8 .framer-85icue { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-dQlw8.framer-v-q2nnth.framer-n8eci7 { align-content: center; align-items: center; justify-content: flex-start; }`,
        `.framer-dQlw8.framer-v-q2nnth .framer-1mw2538 { align-content: center; align-items: center; flex-direction: row; gap: 5px; }`,
        ...yt,
        ...fn,
        ...gn,
      ]),
      (X = V(kn, An, `framer-dQlw8`)),
      (X.displayName = `Phone Info Card`),
      (X.defaultProps = { height: 50.4, width: 144.467 }),
      w(X, {
        variant: {
          options: [`s7qx4Xixl`, `qeDkaMItm`],
          optionTitles: [`Desktop & Tablet`, `Phone`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      E(
        X,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...k(vt),
          ...k(dn),
          ...k(hn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Z(e) {
  let {
      color: t,
      selectByList: n,
      iconSearch: r,
      iconSelection: i,
      onClick: a,
      onMouseDown: s,
      onMouseUp: c,
      onMouseEnter: u,
      onMouseLeave: d,
      weight: m,
      mirrored: h,
    } = e,
    _ = p(!1),
    v = ge(Mn, n, r, i, Fn),
    [y, b] = f(v === `Home` ? Ee(ee) : null);
  async function x() {
    try {
      let e = await import(
        /* webpackIgnore: true */
        `${Nn}${v}.js@0.0.57`
      );
      _.current && b(e.default(ee));
    } catch {
      _.current && b(null);
    }
  }
  o(
    () => (
      (_.current = !0),
      x(),
      () => {
        _.current = !1;
      }
    ),
    [v]
  );
  let S = ce.current() === ce.canvas ? /*#__PURE__*/ l(_e, {}) : null;
  return /*#__PURE__*/ l(g.div, {
    style: { display: `contents` },
    onClick: a,
    onMouseEnter: u,
    onMouseLeave: d,
    onMouseDown: s,
    onMouseUp: c,
    children: y
      ? /*#__PURE__*/ l(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 256 256`,
          style: {
            userSelect: `none`,
            width: `100%`,
            height: `100%`,
            display: `inline-block`,
            fill: t,
            color: t,
            flexShrink: 0,
            transform: h ? `scale(-1, 1)` : void 0,
          },
          focusable: `false`,
          color: t,
          children: /*#__PURE__*/ l(y, { color: t, weight: m }),
        })
      : S,
  });
}
var Mn, Nn, Pn, Fn;
function In() {
  return (In = e(() => {
    (d(),
      t(),
      M(),
      b(),
      ve(),
      ye(),
      Le(),
      (Mn =
        /* @__PURE__ */ `Acorn.AddressBook.AddressBookTabs.AirTrafficControl.Airplane.AirplaneInFlight.AirplaneLanding.AirplaneTakeoff.AirplaneTaxiing.AirplaneTilt.Airplay.Alarm.Alien.AlignBottom.AlignBottomSimple.AlignCenterVertical.AlignLeft.AlignLeftSimple.AlignRight.AlignRightSimple.AlignTop.AlignTopSimple.AmazonLogo.Ambulance.Anchor.AnchorSimple.AndroidLogo.Angle.AngularLogo.Aperture.AppStoreLogo.AppWindow.AppleLogo.ApplePodcastsLogo.ApproximateEquals.Archive.ArchiveBox.ArchiveTray.Armchair.ArrowArcLeft.ArrowArcRight.ArrowBendDownLeft.ArrowBendDownRight.ArrowBendLeftDown.ArrowBendLeftUp.ArrowBendRightDown.ArrowBendRightUp.ArrowBendUpLeft.ArrowBendUpRight.ArrowCircleDown.ArrowCircleDownLeft.ArrowCircleDownRight.ArrowCircleLeft.ArrowCircleRight.ArrowCircleUp.ArrowCircleUpLeft.ArrowCircleUpRight.ArrowClockwise.ArrowDown.ArrowDownLeft.ArrowDownRight.ArrowElbowDownLeft.ArrowElbowDownRight.ArrowElbowLeft.ArrowElbowLeftDown.ArrowElbowLeftUp.ArrowElbowRight.ArrowElbowRightDown.ArrowElbowRightUp.ArrowElbowUpLeft.ArrowElbowUpRight.ArrowFatDown.ArrowFatLeft.ArrowFatLineDown.ArrowFatLineLeft.ArrowFatLineRight.ArrowFatLineUp.ArrowFatLinesDown.ArrowFatLinesLeft.ArrowFatLinesRight.ArrowFatLinesUp.ArrowFatRight.ArrowFatUp.ArrowLeft.ArrowLineDown.ArrowLineDownLeft.ArrowLineDownRight.ArrowLineLeft.ArrowLineRight.ArrowLineUp.ArrowLineUpLeft.ArrowLineUpRight.ArrowRight.ArrowSquareDown.ArrowSquareDownLeft.ArrowSquareDownRight.ArrowSquareIn.ArrowSquareLeft.ArrowSquareOut.ArrowSquareRight.ArrowSquareUp.ArrowSquareUpLeft.ArrowSquareUpRight.ArrowUDownLeft.ArrowUDownRight.ArrowULeftDown.ArrowULeftUp.ArrowURightDown.ArrowURightUp.ArrowUUpLeft.ArrowUUpRight.ArrowUp.ArrowUpLeft.ArrowUpRight.ArrowsClockwise.ArrowsDownUp.ArrowsHorizontal.ArrowsIn.ArrowsInCardinal.ArrowsInLineVertical.ArrowsInSimple.ArrowsLeftRight.ArrowsMerge.ArrowsOut.ArrowsOutCardinal.ArrowsOutSimple.ArrowsSplit.ArrowsVertical.Article.ArticleMedium.ArticleNyTimes.Asclepius.Asterisk.AsteriskSimple.At.Atom.Avocado.Axe.Baby.BabyCarriage.Backpack.Backspace.Bag.BagSimple.Balloon.Bandaids.Bank.Barbell.Barcode.Barn.Barricade.Baseball.BaseballCap.BaseballHelmet.Basket.Basketball.Bathtub.BatteryCharging.BatteryEmpty.BatteryFull.BatteryHigh.BatteryLow.BatteryMedium.BatteryPlus.BatteryPlusVertical.BatteryVerticalEmpty.BatteryVerticalFull.BatteryVerticalHigh.BatteryVerticalLow.BatteryWarning.BeachBall.Beanie.Bed.BeerBottle.BeerStein.BehanceLogo.Bell.BellRinging.BellSimple.BellSimpleRinging.BellSimpleSlash.BellSimpleZ.BellSlash.BellZ.Belt.BezierCurve.Bicycle.Binary.Binoculars.Biohazard.Bird.Blueprint.Bluetooth.BluetoothConnected.BluetoothSlash.BluetoothX.Boat.Bomb.Bone.Book.BookBookmark.BookOpen.BookOpenText.BookOpenUser.BookUser.Bookmark.BookmarkSimple.Bookmarks.BookmarksSimple.Books.Boot.Boules.BoundingBox.BowlFood.BowlSteam.BowlingBall.BoxArrowDown.BoxArrowUp.BoxingGlove.BracketsAngle.BracketsCurly.BracketsRound.BracketsSquare.Brain.Brandy.Bread.Bridge.Briefcase.BriefcaseMetal.Broadcast.Broom.Browser.Browsers.Bug.BugBeetle.BugDroid.Building.BuildingApartment.BuildingOffice.Buildings.Bulldozer.Bus.Butterfly.CableCar.Cactus.Cake.Calculator.Calendar.CalendarBlank.CalendarCheck.CalendarDot.CalendarDots.CalendarHeart.CalendarMinus.CalendarPlus.CalendarSlash.CalendarStar.CalendarX.CallBell.Camera.CameraPlus.CameraRotate.CameraSlash.Campfire.Car.CarBattery.CarProfile.CarSimple.Cardholder.Cards.CardsThree.CaretCircleDoubleUp.CaretCircleDown.CaretCircleLeft.CaretCircleRight.CaretCircleUp.CaretCircleUpDown.CaretDoubleDown.CaretDoubleLeft.CaretDoubleRight.CaretDoubleUp.CaretDown.CaretLeft.CaretLineDown.CaretLineLeft.CaretLineRight.CaretLineUp.CaretRight.CaretUp.CaretUpDown.Carrot.CashRegister.CassetteTape.CastleTurret.Cat.CellSignalFull.CellSignalHigh.CellSignalLow.CellSignalMedium.CellSignalNone.CellSignalSlash.CellSignalX.CellTower.Certificate.Chair.Chalkboard.ChalkboardSimple.ChalkboardTeacher.Champagne.ChargingStation.ChartBar.ChartBarHorizontal.ChartDonut.ChartLine.ChartLineDown.ChartLineUp.ChartPie.ChartPieSlice.ChartPolar.ChartScatter.Chat.ChatCentered.ChatCenteredDots.ChatCenteredSlash.ChatCenteredText.ChatCircle.ChatCircleDots.ChatCircleSlash.ChatCircleText.ChatDots.ChatSlash.ChatTeardrop.ChatTeardropDots.ChatTeardropSlash.ChatTeardropText.ChatText.Chats.ChatsCircle.ChatsTeardrop.Check.CheckCircle.CheckFat.CheckSquare.CheckSquareOffset.Checkerboard.Checks.Cheers.Cheese.ChefHat.Cherries.Church.Cigarette.CigaretteSlash.Circle.CircleDashed.CircleHalf.CircleHalfTilt.CircleNotch.CirclesFour.CirclesThree.CirclesThreePlus.Circuitry.City.Clipboard.ClipboardText.Clock.ClockAfternoon.ClockClockwise.ClockCountdown.ClockUser.ClosedCaptioning.Cloud.CloudArrowDown.CloudArrowUp.CloudCheck.CloudFog.CloudLightning.CloudMoon.CloudRain.CloudSlash.CloudSnow.CloudSun.CloudWarning.CloudX.Clover.Club.CoatHanger.CodaLogo.Code.CodeBlock.CodeSimple.CodepenLogo.CodesandboxLogo.Coffee.CoffeeBean.Coin.CoinVertical.Coins.Columns.ColumnsPlusLeft.ColumnsPlusRight.Command.Compass.CompassRose.CompassTool.ComputerTower.Confetti.ContactlessPayment.Control.Cookie.CookingPot.Copy.CopySimple.Copyleft.Copyright.CornersIn.CornersOut.Couch.CourtBasketball.Cow.CowboyHat.Cpu.Crane.CraneTower.CreditCard.Cricket.Crop.Cross.Crosshair.CrosshairSimple.Crown.CrownCross.CrownSimple.Cube.CubeFocus.CubeTransparent.CurrencyBtc.CurrencyCircleDollar.CurrencyCny.CurrencyDollar.CurrencyDollarSimple.CurrencyEth.CurrencyEur.CurrencyGbp.CurrencyInr.CurrencyJpy.CurrencyKrw.CurrencyKzt.CurrencyNgn.CurrencyRub.Cursor.CursorClick.CursorText.Cylinder.Database.Desk.Desktop.DesktopTower.Detective.DevToLogo.DeviceMobile.DeviceMobileCamera.DeviceMobileSlash.DeviceMobileSpeaker.DeviceRotate.DeviceTablet.DeviceTabletCamera.DeviceTabletSpeaker.Devices.Diamond.DiamondsFour.DiceFive.DiceFour.DiceOne.DiceSix.DiceThree.DiceTwo.Disc.DiscoBall.DiscordLogo.Divide.Dna.Dog.Door.DoorOpen.Dot.DotOutline.DotsNine.DotsSix.DotsSixVertical.DotsThree.DotsThreeCircle.DotsThreeOutline.DotsThreeVertical.Download.DownloadSimple.Dress.Dresser.DribbbleLogo.Drone.Drop.DropHalf.DropHalfBottom.DropSimple.DropSlash.DropboxLogo.Ear.EarSlash.Egg.EggCrack.Eject.EjectSimple.Elevator.Empty.Engine.Envelope.EnvelopeOpen.EnvelopeSimple.EnvelopeSimpleOpen.Equalizer.Equals.Eraser.EscalatorDown.EscalatorUp.Exam.ExclamationMark.Exclude.ExcludeSquare.Export.Eye.EyeClosed.EyeSlash.Eyedropper.EyedropperSample.Eyeglasses.Eyes.FaceMask.FacebookLogo.Factory.Faders.FadersHorizontal.FalloutShelter.Fan.Farm.FastForward.FastForwardCircle.Feather.FediverseLogo.FigmaLogo.File.FileArchive.FileArrowDown.FileArrowUp.FileAudio.FileC.FileCloud.FileCode.FileCpp.FileCss.FileCsv.FileDashed.FileDoc.FileHtml.FileImage.FileIni.FileJpg.FileJs.FileJsx.FileLock.FileMagnifyingGlass.FileMd.FileMinus.FilePdf.FilePlus.FilePng.FilePpt.FilePy.FileRs.FileSql.FileSvg.FileText.FileTs.FileTsx.FileTxt.FileVideo.FileVue.FileX.FileXls.FileZip.Files.FilmReel.FilmScript.FilmSlate.FilmStrip.Fingerprint.FingerprintSimple.FinnTheHuman.Fire.FireExtinguisher.FireSimple.FireTruck.FirstAid.FirstAidKit.Fish.FishSimple.Flag.FlagBanner.FlagBannerFold.FlagCheckered.FlagPennant.Flame.Flashlight.Flask.FlipHorizontal.FlipVertical.FloppyDisk.FloppyDiskBack.FlowArrow.Flower.FlowerLotus.FlowerTulip.FlyingSaucer.Folder.FolderDashed.FolderLock.FolderMinus.FolderNotch.FolderNotchMinus.FolderNotchOpen.FolderNotchPlus.FolderOpen.FolderPlus.FolderSimple.FolderSimpleDashed.FolderSimpleLock.FolderSimpleMinus.FolderSimplePlus.FolderSimpleStar.FolderSimpleUser.FolderStar.FolderUser.Folders.Football.FootballHelmet.Footprints.ForkKnife.FourK.FrameCorners.FramerLogo.Function.Funnel.FunnelSimple.FunnelSimpleX.FunnelX.GameController.Garage.GasCan.GasPump.Gauge.Gavel.Gear.GearFine.GearSix.GenderFemale.GenderIntersex.GenderMale.GenderNeuter.GenderNonbinary.GenderTransgender.Ghost.Gif.Gift.GitBranch.GitCommit.GitDiff.GitFork.GitMerge.GitPullRequest.GithubLogo.GitlabLogo.GitlabLogoSimple.Globe.GlobeHemisphereEast.GlobeHemisphereWest.GlobeSimple.GlobeSimpleX.GlobeStand.GlobeX.Goggles.Golf.GoodreadsLogo.GoogleCardboardLogo.GoogleChromeLogo.GoogleDriveLogo.GoogleLogo.GooglePhotosLogo.GooglePlayLogo.GooglePodcastsLogo.Gps.GpsFix.GpsSlash.Gradient.GraduationCap.Grains.GrainsSlash.Graph.GraphicsCard.GreaterThan.GreaterThanOrEqual.GridFour.GridNine.Guitar.HairDryer.Hamburger.Hammer.Hand.HandArrowDown.HandArrowUp.HandCoins.HandDeposit.HandEye.HandFist.HandGrabbing.HandHeart.HandPalm.HandPeace.HandPointing.HandSoap.HandSwipeLeft.HandSwipeRight.HandTap.HandWaving.HandWithdraw.Handbag.HandbagSimple.HandsClapping.HandsPraying.Handshake.HardDrive.HardDrives.HardHat.Hash.HashStraight.HeadCircuit.Headlights.Headphones.Headset.Heart.HeartBreak.HeartHalf.HeartStraight.HeartStraightBreak.Heartbeat.Hexagon.HighDefinition.HighHeel.Highlighter.HighlighterCircle.Hockey.Hoodie.Horse.Hospital.Hourglass.HourglassHigh.HourglassLow.HourglassMedium.HourglassSimple.HourglassSimpleHigh.HourglassSimpleLow.House.HouseLine.HouseSimple.Hurricane.IceCream.IdentificationBadge.IdentificationCard.Image.ImageBroken.ImageSquare.Images.ImagesSquare.Infinity.Info.InstagramLogo.Intersect.IntersectSquare.IntersectThree.Intersection.Invoice.Island.Jar.JarLabel.Jeep.Joystick.Kanban.Key.KeyReturn.Keyboard.Keyhole.Knife.Ladder.LadderSimple.Lamp.LampPendant.Laptop.Lasso.LastfmLogo.Layout.Leaf.Lectern.Lego.LegoSmiley.LessThan.LessThanOrEqual.LetterCircleH.LetterCircleP.LetterCircleV.Lifebuoy.Lightbulb.LightbulbFilament.Lighthouse.Lightning.LightningA.LightningSlash.LineSegment.LineSegments.LineVertical.Link.LinkBreak.LinkSimple.LinkSimpleBreak.LinkSimpleHorizontal.LinkedinLogo.LinktreeLogo.LinuxLogo.List.ListBullets.ListChecks.ListDashes.ListHeart.ListMagnifyingGlass.ListNumbers.ListPlus.ListStar.Lock.LockKey.LockKeyOpen.LockLaminated.LockLaminatedOpen.LockOpen.LockSimple.LockSimpleOpen.Lockers.Log.MagicWand.Magnet.MagnetStraight.MagnifyingGlass.MagnifyingGlassMinus.MagnifyingGlassPlus.Mailbox.MapPin.MapPinArea.MapPinLine.MapPinPlus.MapPinSimple.MapPinSimpleArea.MapPinSimpleLine.MapTrifold.MarkdownLogo.MarkerCircle.Martini.MaskHappy.MaskSad.MastodonLogo.MathOperations.MatrixLogo.Medal.MedalMilitary.MediumLogo.Megaphone.MegaphoneSimple.MemberOf.Memory.MessengerLogo.MetaLogo.Meteor.Metronome.Microphone.MicrophoneSlash.MicrophoneStage.Microscope.MicrosoftExcelLogo.MicrosoftOutlookLogo.MicrosoftTeamsLogo.MicrosoftWordLogo.Minus.MinusCircle.MinusSquare.Money.MoneyWavy.Monitor.MonitorArrowUp.MonitorPlay.Moon.MoonStars.Moped.MopedFront.Mosque.Motorcycle.Mountains.Mouse.MouseLeftClick.MouseMiddleClick.MouseRightClick.MouseScroll.MouseSimple.MusicNote.MusicNoteSimple.MusicNotes.MusicNotesMinus.MusicNotesPlus.MusicNotesSimple.NavigationArrow.Needle.Network.NetworkSlash.NetworkX.Newspaper.NewspaperClipping.NotEquals.NotMemberOf.NotSubsetOf.NotSupersetOf.Notches.Note.NoteBlank.NotePencil.Notebook.Notepad.Notification.NotionLogo.NuclearPlant.NumberCircleEight.NumberCircleFive.NumberCircleFour.NumberCircleNine.NumberCircleOne.NumberCircleSeven.NumberCircleSix.NumberCircleThree.NumberCircleTwo.NumberCircleZero.NumberEight.NumberFive.NumberFour.NumberNine.NumberOne.NumberSeven.NumberSix.NumberSquareEight.NumberSquareFive.NumberSquareFour.NumberSquareNine.NumberSquareOne.NumberSquareSeven.NumberSquareSix.NumberSquareThree.NumberSquareTwo.NumberSquareZero.NumberThree.NumberTwo.NumberZero.Numpad.Nut.NyTimesLogo.Octagon.OfficeChair.Onigiri.OpenAiLogo.Option.Orange.OrangeSlice.Oven.Package.PaintBrush.PaintBrushBroad.PaintBrushHousehold.PaintBucket.PaintRoller.Palette.Panorama.Pants.PaperPlane.PaperPlaneRight.PaperPlaneTilt.Paperclip.PaperclipHorizontal.Parachute.Paragraph.Parallelogram.Park.Password.Path.PatreonLogo.Pause.PauseCircle.PawPrint.PaypalLogo.Peace.Pen.PenNib.PenNibStraight.Pencil.PencilCircle.PencilLine.PencilRuler.PencilSimple.PencilSimpleLine.PencilSimpleSlash.PencilSlash.Pentagon.Pentagram.Pepper.Percent.Person.PersonArmsSpread.PersonSimple.PersonSimpleBike.PersonSimpleCircle.PersonSimpleHike.PersonSimpleRun.PersonSimpleSki.PersonSimpleSwim.PersonSimpleTaiChi.PersonSimpleThrow.PersonSimpleWalk.Perspective.Phone.PhoneCall.PhoneDisconnect.PhoneIncoming.PhoneList.PhoneOutgoing.PhonePause.PhonePlus.PhoneSlash.PhoneTransfer.PhoneX.PhosphorLogo.Pi.PianoKeys.PicnicTable.PictureInPicture.PiggyBank.Pill.PingPong.PintGlass.PinterestLogo.Pinwheel.Pipe.PipeWrench.PixLogo.Pizza.Placeholder.Planet.Plant.Play.PlayCircle.PlayPause.Playlist.Plug.PlugCharging.Plugs.PlugsConnected.Plus.PlusCircle.PlusMinus.PlusSquare.PokerChip.PoliceCar.Polygon.Popcorn.Popsicle.PottedPlant.Power.Prescription.Presentation.PresentationChart.Printer.Prohibit.ProhibitInset.ProjectorScreen.ProjectorScreenChart.Pulse.PushPin.PushPinSimple.PushPinSimpleSlash.PushPinSlash.PuzzlePiece.QrCode.Question.QuestionMark.Queue.Quotes.Rabbit.Racquet.Radical.Radio.RadioButton.Radioactive.Rainbow.RainbowCloud.Ranking.ReadCvLogo.Receipt.ReceiptX.Record.Rectangle.RectangleDashed.Recycle.RedditLogo.Repeat.RepeatOnce.ReplitLogo.Resize.Rewind.RewindCircle.RoadHorizon.Robot.Rocket.RocketLaunch.Rows.RowsPlusBottom.RowsPlusTop.Rss.RssSimple.Rug.Ruler.Sailboat.Scales.Scan.ScanSmiley.Scissors.Scooter.Screencast.Screwdriver.Scribble.ScribbleLoop.Scroll.Seal.SealCheck.SealPercent.SealQuestion.SealWarning.Seat.Seatbelt.SecurityCamera.Selection.SelectionAll.SelectionBackground.SelectionForeground.SelectionInverse.SelectionPlus.SelectionSlash.Shapes.Share.ShareFat.ShareNetwork.Shield.ShieldCheck.ShieldCheckered.ShieldChevron.ShieldPlus.ShieldSlash.ShieldStar.ShieldWarning.ShippingContainer.ShirtFolded.ShootingStar.ShoppingBag.ShoppingBagOpen.ShoppingCart.ShoppingCartSimple.Shovel.Shower.Shrimp.Shuffle.ShuffleAngular.ShuffleSimple.Sidebar.SidebarSimple.Sigma.SignIn.SignOut.Signature.Signpost.SimCard.Siren.SketchLogo.SkipBack.SkipBackCircle.SkipForward.SkipForwardCircle.Skull.SkypeLogo.SlackLogo.Sliders.SlidersHorizontal.Slideshow.Smiley.SmileyAngry.SmileyBlank.SmileyMeh.SmileyMelting.SmileyNervous.SmileySad.SmileySticker.SmileyWink.SmileyXEyes.SnapchatLogo.Sneaker.SneakerMove.Snowflake.SoccerBall.Sock.SolarPanel.SolarRoof.SortAscending.SortDescending.SoundcloudLogo.Spade.Sparkle.SpeakerHifi.SpeakerHigh.SpeakerLow.SpeakerNone.SpeakerSimpleHigh.SpeakerSimpleLow.SpeakerSimpleNone.SpeakerSimpleSlash.SpeakerSimpleX.SpeakerSlash.SpeakerX.Speedometer.Sphere.Spinner.SpinnerBall.SpinnerGap.Spiral.SplitHorizontal.SplitVertical.SpotifyLogo.SprayBottle.Square.SquareHalf.SquareHalfBottom.SquareLogo.SquareSplitVertical.SquaresFour.Stack.StackMinus.StackOverflowLogo.StackPlus.StackSimple.Stairs.Stamp.StandardDefinition.Star.StarAndCrescent.StarFour.StarHalf.StarOfDavid.SteamLogo.SteeringWheel.Steps.Stethoscope.Sticker.Stool.Stop.StopCircle.Storefront.Strategy.StripeLogo.Student.SubsetOf.SubsetProperOf.Subtitles.SubtitlesSlash.Subtract.SubtractSquare.Subway.Suitcase.SuitcaseRolling.SuitcaseSimple.Sun.SunDim.SunHorizon.Sunglasses.SupersetOf.SupersetProperOf.Swap.Swatches.SwimmingPool.Sword.Synagogue.Syringe.TShirt.Table.Tabs.Tag.TagChevron.TagSimple.Target.Taxi.TeaBag.TelegramLogo.Television.TelevisionSimple.TennisBall.Tent.Terminal.TerminalWindow.TestTube.TextAUnderline.TextAa.TextAlignCenter.TextAlignJustify.TextAlignLeft.TextAlignRight.TextB.TextColumns.TextH.TextHFive.TextHFour.TextHOne.TextHSix.TextHThree.TextHTwo.TextIndent.TextItalic.TextOutdent.TextStrikethrough.TextSubscript.TextSuperscript.TextT.TextTSlash.TextUnderline.Textbox.Thermometer.ThermometerCold.ThermometerHot.ThermometerSimple.ThreadsLogo.ThreeD.ThumbsDown.ThumbsUp.Ticket.TidalLogo.TiktokLogo.Tilde.Timer.TipJar.Tipi.Tire.ToggleLeft.ToggleRight.Toilet.ToiletPaper.Toolbox.Tooth.Tornado.Tote.ToteSimple.Towel.Tractor.Trademark.TrademarkRegistered.TrafficCone.TrafficSign.TrafficSignal.Train.TrainRegional.TrainSimple.Tram.Translate.Trash.TrashSimple.Tray.TrayArrowDown.TrayArrowUp.TreasureChest.Tree.TreeEvergreen.TreePalm.TreeStructure.TreeView.TrendDown.TrendUp.Triangle.TriangleDashed.Trolley.TrolleySuitcase.Trophy.Truck.TruckTrailer.TumblrLogo.TwitchLogo.TwitterLogo.Umbrella.UmbrellaSimple.Union.Unite.UniteSquare.Upload.UploadSimple.Usb.User.UserCheck.UserCircle.UserCircleCheck.UserCircleDashed.UserCircleGear.UserCircleMinus.UserCirclePlus.UserFocus.UserGear.UserList.UserMinus.UserPlus.UserRectangle.UserSound.UserSquare.UserSwitch.Users.UsersFour.UsersThree.Van.Vault.VectorThree.VectorTwo.Vibrate.Video.VideoCamera.VideoCameraSlash.VideoConference.Vignette.VinylRecord.VirtualReality.Virus.Visor.Voicemail.Volleyball.Wall.Wallet.Warehouse.Warning.WarningCircle.WarningDiamond.WarningOctagon.WashingMachine.Watch.WaveSawtooth.WaveSine.WaveSquare.WaveTriangle.Waveform.WaveformSlash.Waves.Webcam.WebcamSlash.WebhooksLogo.WechatLogo.WhatsappLogo.Wheelchair.WheelchairMotion.WifiHigh.WifiLow.WifiMedium.WifiNone.WifiSlash.WifiX.Wind.Windmill.WindowsLogo.Wine.Wrench.X.XCircle.XLogo.XSquare.Yarn.YinYang.YoutubeLogo`.split(
          `.`
        )),
      (Nn = `https://framer.com/m/phosphor-icons/`),
      (Pn = [`thin`, `light`, `regular`, `bold`, `fill`, `duotone`]),
      (Fn = Mn.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (Z.displayName = `Phosphor`),
      (Z.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `House`,
        iconSearch: `House`,
        color: `#66F`,
        selectByList: !0,
        weight: `regular`,
        mirrored: !1,
      }),
      w(Z, {
        selectByList: {
          type: z.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: Z.defaultProps.selectByList,
        },
        iconSelection: {
          type: z.Enum,
          options: Mn,
          defaultValue: Z.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Phosphor site](https://phosphoricons.com/)`,
        },
        iconSearch: {
          type: z.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        color: { type: z.Color, title: `Color`, defaultValue: Z.defaultProps.color },
        weight: {
          type: z.Enum,
          title: `Weight`,
          optionTitles: Pn.map((e) => e.charAt(0).toUpperCase() + e.slice(1)),
          options: Pn,
          defaultValue: Z.defaultProps.weight,
        },
        mirrored: {
          type: z.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: Z.defaultProps.mirrored,
        },
        ...De,
      }));
  }))();
}
var Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  Q,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  $,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or;
function kr() {
  return (kr = e(() => {
    (d(),
      M(),
      b(),
      t(),
      ht(),
      xe(),
      ke(),
      Ie(),
      Ft(),
      Xt(),
      je(),
      un(),
      we(),
      jn(),
      et(),
      Fe(),
      In(),
      tt(),
      it(),
      He(),
      ct(),
      qe(),
      ft(),
      (Ln = O(Pe)),
      (Rn = D(g.div)),
      (zn = T(Rn)),
      (Bn = O(mt)),
      (Vn = T(g.div)),
      (Hn = O(Me)),
      (Un = O(q)),
      (Wn = O(Y)),
      (Gn = O(Oe)),
      (Kn = O(Z)),
      (qn = O(J)),
      (Jn = O(K)),
      (Yn = D(g.div)),
      (Xn = O(Ne)),
      (Zn = O(Ae)),
      (Qn = O(G)),
      ($n = {
        KlICeir_c: `(max-width: 809.98px)`,
        WQLkyLRf1: `(min-width: 1200px)`,
        xPPcDrn0O: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (er = []),
      (tr = `framer-viC2t`),
      (nr = {
        KlICeir_c: `framer-v-1g0zrk7`,
        WQLkyLRf1: `framer-v-72rtr7`,
        xPPcDrn0O: `framer-v-15fhgrh`,
      }),
      (rr = (e, t, n) => (e && t ? `position` : n)),
      (ir = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: { bounce: 0, delay: 0, duration: 1, type: `spring` },
        x: 0,
        y: 0,
      }),
      (ar = {
        opacity: 1,
        rotate: 0,
        rotateX: -180,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 0,
      }),
      (or = (e, t) => `translate(-50%, -50%) ${t}`),
      (sr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.3, duration: 1, type: `spring` },
        x: 0,
        y: 0,
      }),
      (cr = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 150,
        y: 0,
      }),
      (lr = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: -150,
        y: 0,
      }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ur = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (dr = () => ({
        from: { alias: `ipBsBnvZr`, data: rt, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        select: [
          { collection: `ipBsBnvZr`, name: `FCspUx7gv`, type: `Identifier` },
          { collection: `ipBsBnvZr`, name: `gPcsfhEl_`, type: `Identifier` },
          { collection: `ipBsBnvZr`, name: `txuc2BYLR`, type: `Identifier` },
          { collection: `ipBsBnvZr`, name: `dMzbnq2mw`, type: `Identifier` },
          { collection: `ipBsBnvZr`, name: `AtZcGqORN`, type: `Identifier` },
          { collection: `ipBsBnvZr`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `ipBsBnvZr`, name: `iQr9kKVMg`, type: `Identifier` },
          operator: `and`,
          right: {
            left: { collection: `ipBsBnvZr`, name: `id`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: `hsfqEIKny` },
            type: `BinaryOperation`,
          },
          type: `BinaryOperation`,
        },
      })),
      (fr = ({ query: e, pageSize: t, children: n }) => n(re(e))),
      (pr = () => ({
        from: { alias: `q1iYpJuA5`, data: rt, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        select: [
          { collection: `q1iYpJuA5`, name: `FCspUx7gv`, type: `Identifier` },
          { collection: `q1iYpJuA5`, name: `gPcsfhEl_`, type: `Identifier` },
          { collection: `q1iYpJuA5`, name: `txuc2BYLR`, type: `Identifier` },
          { collection: `q1iYpJuA5`, name: `dMzbnq2mw`, type: `Identifier` },
          { collection: `q1iYpJuA5`, name: `AtZcGqORN`, type: `Identifier` },
          { collection: `q1iYpJuA5`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `q1iYpJuA5`, name: `iQr9kKVMg`, type: `Identifier` },
          operator: `and`,
          right: {
            left: { collection: `q1iYpJuA5`, name: `id`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: `QjyDwLndn` },
            type: `BinaryOperation`,
          },
          type: `BinaryOperation`,
        },
      })),
      (mr = () => ({
        from: { alias: `kEmlb9aLa`, data: rt, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        select: [
          { collection: `kEmlb9aLa`, name: `FCspUx7gv`, type: `Identifier` },
          { collection: `kEmlb9aLa`, name: `gPcsfhEl_`, type: `Identifier` },
          { collection: `kEmlb9aLa`, name: `txuc2BYLR`, type: `Identifier` },
          { collection: `kEmlb9aLa`, name: `dMzbnq2mw`, type: `Identifier` },
          { collection: `kEmlb9aLa`, name: `AtZcGqORN`, type: `Identifier` },
          { collection: `kEmlb9aLa`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `kEmlb9aLa`, name: `iQr9kKVMg`, type: `Identifier` },
          operator: `and`,
          right: {
            left: { collection: `kEmlb9aLa`, name: `id`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: `AjRdQzlTz` },
            type: `BinaryOperation`,
          },
          type: `BinaryOperation`,
        },
      })),
      (hr = () => ({
        from: { alias: `ZSGta1iBW`, data: rt, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        select: [
          { collection: `ZSGta1iBW`, name: `FCspUx7gv`, type: `Identifier` },
          { collection: `ZSGta1iBW`, name: `gPcsfhEl_`, type: `Identifier` },
          { collection: `ZSGta1iBW`, name: `txuc2BYLR`, type: `Identifier` },
          { collection: `ZSGta1iBW`, name: `dMzbnq2mw`, type: `Identifier` },
          { collection: `ZSGta1iBW`, name: `AtZcGqORN`, type: `Identifier` },
          { collection: `ZSGta1iBW`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `ZSGta1iBW`, name: `iQr9kKVMg`, type: `Identifier` },
          operator: `and`,
          right: {
            left: { collection: `ZSGta1iBW`, name: `id`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue` },
            type: `BinaryOperation`,
          },
          type: `BinaryOperation`,
        },
      })),
      (gr = { Desktop: `WQLkyLRf1`, Phone: `KlICeir_c`, Tablet: `xPPcDrn0O` }),
      (_r = ({ value: e }) =>
        ue()
          ? null
          : /*#__PURE__*/ l(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (vr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: gr[r.variant] ?? r.variant ?? `WQLkyLRf1`,
      })),
      ($ = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (yr = {
        alignment: `center`,
        component: G,
        offset: { x: 20, y: 20 },
        placement: `right`,
        transition: $,
        variant: `KLjCoIcyD`,
      }),
      (br = {
        alignment: `center`,
        component: G,
        offset: { x: 20, y: 20 },
        placement: `right`,
        transition: $,
        variant: `ufuSaLvSw`,
      }),
      (xr = {
        alignment: `center`,
        component: G,
        offset: { x: 20, y: 20 },
        placement: `right`,
        transition: $,
        variant: `XNCvIX3vN`,
      }),
      (Sr = {
        alignment: `center`,
        component: G,
        offset: { x: 20, y: 20 },
        placement: `right`,
        transition: $,
        variant: `Sp03k19zq`,
      }),
      (Cr = {
        alignment: `center`,
        component: G,
        offset: { x: 20, y: 20 },
        placement: `right`,
        transition: $,
        variant: `GqW150rHi`,
      }),
      (wr = {
        alignment: `center`,
        component: G,
        offset: { x: 20, y: 20 },
        placement: `right`,
        transition: $,
        variant: `aXN7J563X`,
      }),
      (Tr = /*#__PURE__*/ u(function (e, t) {
        let o = p(null),
          ee = t ?? o;
        a();
        let { activeLocale: u, contentLocale: d, setLocale: f } = te(),
          m = fe(),
          { style: h, className: v, layoutId: b, variant: x, ...C } = vr(e),
          w = i(() => pt({}, d), [d]);
        he(w);
        let [T, E] = se(x, $n, !1),
          D = R(tr, Ge, st, Ke, dt),
          O = r(oe)?.isLayoutTemplate,
          k = !!r(_)?.transition?.layout,
          j = rr(O, k),
          M = p(null),
          N = p(null),
          re = U(`wdZDumqQr`),
          ae = p(null),
          L = U(`Rd4N98ip7`),
          ce = U(`z940ZBfKS`);
        A();
        let ue = p(null),
          z = U(`ipBsBnvZr`),
          pe = p(null),
          V = U(`uO7X4uyFD`),
          ge = ie(),
          _e = p(null),
          ve = U(`q1iYpJuA5`),
          ye = U(`nxWENchwD`),
          be = p(null),
          xe = U(`kEmlb9aLa`),
          Se = U(`TXuvFJlxM`),
          Ce = U(`ZSGta1iBW`),
          we = U(`Aa2FRDhar`),
          G = U(`pygupB0pf`),
          Te = p(null);
        return (
          me({ "12j85ib": br, "16q859": Sr, "1bde3zh": wr, "1hyjosv": Cr, l38x1i: xr, m5u3ny: yr }),
          /*#__PURE__*/ l(oe.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: gr,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: nr,
            },
            children: /*#__PURE__*/ c(y, {
              id: b ?? `augiA20Il`,
              children: [
                /*#__PURE__*/ l(_r, {
                  value: `html body { background: var(--token-4795dafb-4261-43d3-aa0c-b3831681376e, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ c(g.div, {
                  ...C,
                  className: R(D, `framer-72rtr7`, v),
                  ref: ee,
                  style: { ...h },
                  children: [
                    /*#__PURE__*/ c(g.div, {
                      className: `framer-10wy60n`,
                      "data-framer-name": `OutterWraper`,
                      layout: j,
                      children: [
                        /*#__PURE__*/ l(`div`, {
                          className: `framer-o0zby`,
                          "data-framer-name": `Sticky Wrap`,
                          children: /*#__PURE__*/ l(`div`, {
                            className: `framer-m09soj`,
                            "data-framer-name": `Sticky Container`,
                            children: /*#__PURE__*/ l(H, {
                              breakpoint: T,
                              overrides: {
                                KlICeir_c: { __framer__styleTransformEffectEnabled: void 0 },
                                xPPcDrn0O: {
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: M,
                                      target: {
                                        opacity: 1,
                                        rotate: 10,
                                        rotateX: 0,
                                        rotateY: 150,
                                        scale: 0.85,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 200,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: N,
                                      target: {
                                        opacity: 1,
                                        rotate: 5,
                                        rotateX: 0,
                                        rotateY: 340,
                                        scale: 0.9,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 200,
                                        y: 0,
                                      },
                                    },
                                  ],
                                },
                              },
                              children: /*#__PURE__*/ c(zn, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    ref: M,
                                    target: {
                                      opacity: 1,
                                      rotate: 10,
                                      rotateX: 0,
                                      rotateY: 150,
                                      scale: 0.9,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 340,
                                      y: 0,
                                    },
                                  },
                                  {
                                    ref: N,
                                    target: {
                                      opacity: 1,
                                      rotate: 5,
                                      rotateX: 0,
                                      rotateY: 340,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 340,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onScrollTarget`,
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                animate: ir,
                                className: `framer-43x9nz`,
                                "data-framer-appear-id": `43x9nz`,
                                "data-framer-name": `Avatar Wrap`,
                                initial: ar,
                                optimized: !0,
                                style: { transformPerspective: 1200 },
                                children: [
                                  /*#__PURE__*/ c(g.div, {
                                    className: `framer-1526o8l`,
                                    "data-framer-name": `Avatar Card Flip`,
                                    style: { transformPerspective: 2e3 },
                                    children: [
                                      /*#__PURE__*/ l(H, {
                                        breakpoint: T,
                                        overrides: {
                                          KlICeir_c: {
                                            background: {
                                              alt: `Portrait of portfolio creator – back view`,
                                              fit: `fill`,
                                              intrinsicHeight: 3763,
                                              intrinsicWidth: 5825,
                                              loading: W((m?.y || 0) + 346),
                                              pixelHeight: 3763,
                                              pixelWidth: 5825,
                                              sizes: `180px`,
                                              src: `../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-87dc89.jpg`,
                                              srcSet: `../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI.jpg 512w,../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-24d46d.jpg 1024w,../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-bba5f8.jpg 2048w,../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-0bbfaf.jpg 4096w,../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-87dc89.jpg 5825w`,
                                            },
                                          },
                                          xPPcDrn0O: {
                                            background: {
                                              alt: `Portrait of portfolio creator – back view`,
                                              fit: `fill`,
                                              intrinsicHeight: 3763,
                                              intrinsicWidth: 5825,
                                              loading: W((m?.y || 0) + 304),
                                              pixelHeight: 3763,
                                              pixelWidth: 5825,
                                              sizes: `260px`,
                                              src: `../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-87dc89.jpg`,
                                              srcSet: `../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI.jpg 512w,../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-24d46d.jpg 1024w,../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-bba5f8.jpg 2048w,../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-0bbfaf.jpg 4096w,../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-87dc89.jpg 5825w`,
                                            },
                                          },
                                        },
                                        children: /*#__PURE__*/ l(le, {
                                          background: {
                                            alt: `Portrait of portfolio creator – back view`,
                                            fit: `fill`,
                                            intrinsicHeight: 3763,
                                            intrinsicWidth: 5825,
                                            loading: W((m?.y || 0) + 262),
                                            pixelHeight: 3763,
                                            pixelWidth: 5825,
                                            sizes: `340px`,
                                            src: `../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-87dc89.jpg`,
                                            srcSet: `../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI.jpg 512w,../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-24d46d.jpg 1024w,../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-bba5f8.jpg 2048w,../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-0bbfaf.jpg 4096w,../../assets/images/5t9gJgOWcexZUq9LeRfaEA7LdI-87dc89.jpg 5825w`,
                                          },
                                          className: `framer-1y3f9q6`,
                                          "data-framer-name": `Avatar Card / Back`,
                                          style: { rotateY: 180, transformPerspective: 1200 },
                                          transformTemplate: or,
                                        }),
                                      }),
                                      /*#__PURE__*/ l(H, {
                                        breakpoint: T,
                                        overrides: {
                                          KlICeir_c: {
                                            background: {
                                              alt: `Portrait of portfolio creator – front view`,
                                              fit: `fill`,
                                              loading: W((m?.y || 0) + 346),
                                              pixelHeight: 483,
                                              pixelWidth: 465,
                                              sizes: `180px`,
                                              src: `../../assets/images/d2lNC19CqfgAvF19NHQKsBDVNKE.jpg`,
                                            },
                                          },
                                          xPPcDrn0O: {
                                            background: {
                                              alt: `Portrait of portfolio creator – front view`,
                                              fit: `fill`,
                                              loading: W((m?.y || 0) + 304),
                                              pixelHeight: 483,
                                              pixelWidth: 465,
                                              sizes: `260px`,
                                              src: `../../assets/images/d2lNC19CqfgAvF19NHQKsBDVNKE.jpg`,
                                            },
                                          },
                                        },
                                        children: /*#__PURE__*/ l(le, {
                                          background: {
                                            alt: `Portrait of portfolio creator – front view`,
                                            fit: `fill`,
                                            loading: W((m?.y || 0) + 262),
                                            pixelHeight: 483,
                                            pixelWidth: 465,
                                            sizes: `340px`,
                                            src: `../../assets/images/d2lNC19CqfgAvF19NHQKsBDVNKE.jpg`,
                                          },
                                          className: `framer-174865s`,
                                          "data-framer-name": `Avatar Card / Front`,
                                          style: { transformPerspective: 1200 },
                                          transformTemplate: or,
                                        }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ l(H, {
                                    breakpoint: T,
                                    overrides: {
                                      KlICeir_c: {
                                        height: 50,
                                        width: `50px`,
                                        y: (m?.y || 0) + 574,
                                      },
                                      xPPcDrn0O: {
                                        height: 100,
                                        width: `80px`,
                                        y: (m?.y || 0) + 641.0588,
                                      },
                                    },
                                    children: /*#__PURE__*/ l(I, {
                                      height: 120,
                                      width: `120px`,
                                      y: (m?.y || 0) + 672,
                                      children: /*#__PURE__*/ l(H, {
                                        breakpoint: T,
                                        overrides: { KlICeir_c: { transformTemplate: void 0 } },
                                        children: /*#__PURE__*/ l(P, {
                                          className: `framer-owsqmh-container`,
                                          nodeId: `Ib7Yaza05`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          style: { z: 30 },
                                          transformTemplate: or,
                                          children: /*#__PURE__*/ l(H, {
                                            breakpoint: T,
                                            overrides: { KlICeir_c: { GGbVCRwzY: void 0 } },
                                            children: /*#__PURE__*/ l(Pe, {
                                              GGbVCRwzY: M,
                                              height: `100%`,
                                              id: `Ib7Yaza05`,
                                              layoutId: `Ib7Yaza05`,
                                              style: { height: `100%`, width: `100%` },
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        /*#__PURE__*/ c(`div`, {
                          className: `framer-15t8qm9`,
                          "data-framer-name": `Content`,
                          children: [
                            /*#__PURE__*/ l(`section`, {
                              className: `framer-iesngu`,
                              "data-framer-name": `Hero`,
                              id: re,
                              ref: ae,
                              children: /*#__PURE__*/ c(`div`, {
                                className: `framer-bo4nxh`,
                                "data-framer-name": `Container`,
                                children: [
                                  /*#__PURE__*/ l(Vn, {
                                    animate: sr,
                                    className: `framer-bmwyn`,
                                    "data-framer-appear-id": `bmwyn`,
                                    "data-framer-name": `Hero Heading Wrap / Left`,
                                    initial: cr,
                                    optimized: !0,
                                    children: /*#__PURE__*/ c(`div`, {
                                      className: `framer-su46cm`,
                                      "data-framer-name": `Heading Wrap`,
                                      children: [
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-eownb9`,
                                          "data-framer-name": `Text Wrap`,
                                          children: /*#__PURE__*/ l(B, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ l(n, {
                                              children: /*#__PURE__*/ l(`p`, {
                                                className: `framer-styles-preset-12q7ivy`,
                                                "data-styles-preset": `NxCe_AOfF`,
                                                style: {
                                                  "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                },
                                                children: `Harshavardhan`,
                                              }),
                                            }),
                                            className: `framer-r8sngb`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        /*#__PURE__*/ l(I, {
                                          children: /*#__PURE__*/ l(P, {
                                            className: `framer-9caroe-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `ml18X2rZx`,
                                            scopeId: `augiA20Il`,
                                            children: /*#__PURE__*/ l(H, {
                                              breakpoint: T,
                                              overrides: { KlICeir_c: { margin: 0 } },
                                              children: /*#__PURE__*/ l(mt, {
                                                height: `100%`,
                                                id: `ml18X2rZx`,
                                                layoutId: `ml18X2rZx`,
                                                margin: -10,
                                                unit: `px`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ l(B, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ l(n, {
                                            children: /*#__PURE__*/ l(`h1`, {
                                              className: `framer-styles-preset-monjet`,
                                              "data-styles-preset": `djOUw0pzb`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                              },
                                              children: `Digital`,
                                            }),
                                          }),
                                          className: `framer-t476v9`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  /*#__PURE__*/ l(Vn, {
                                    animate: sr,
                                    className: `framer-14gfby1`,
                                    "data-framer-appear-id": `14gfby1`,
                                    "data-framer-name": `Hero Heading Wrap / Right`,
                                    initial: lr,
                                    optimized: !0,
                                    children: /*#__PURE__*/ c(`div`, {
                                      className: `framer-ba1bwc`,
                                      "data-framer-name": `Heading Wrap`,
                                      children: [
                                        /*#__PURE__*/ l(B, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ l(n, {
                                            children: /*#__PURE__*/ l(`h1`, {
                                              className: `framer-styles-preset-monjet`,
                                              "data-styles-preset": `djOUw0pzb`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                              },
                                              children: `design `,
                                            }),
                                          }),
                                          className: `framer-h6ciaq`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-1behxzj`,
                                          "data-framer-name": `Text Wrap`,
                                          children: /*#__PURE__*/ l(H, {
                                            breakpoint: T,
                                            overrides: {
                                              KlICeir_c: {
                                                children: /*#__PURE__*/ l(n, {
                                                  children: /*#__PURE__*/ l(`p`, {
                                                    className: `framer-styles-preset-17cdd8a`,
                                                    "data-styles-preset": `UezruUh9E`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                    },
                                                    children: `I'm an aspiring Digital System Design Engineer`,
                                                  }),
                                                }),
                                              },
                                            },
                                            children: /*#__PURE__*/ l(B, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ l(n, {
                                                children: /*#__PURE__*/ l(`p`, {
                                                  className: `framer-styles-preset-17cdd8a`,
                                                  "data-styles-preset": `UezruUh9E`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `right`,
                                                    "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                  },
                                                  children: `I'm an aspiring Digital System Design Engineer`,
                                                }),
                                              }),
                                              className: `framer-q5jzto`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            /*#__PURE__*/ l(`section`, {
                              className: `framer-1mkj5ho`,
                              "data-framer-name": `Service`,
                              id: L,
                              ref: M,
                              children: /*#__PURE__*/ l(`div`, {
                                className: `framer-cby2j3`,
                                "data-framer-name": `Container`,
                                children: /*#__PURE__*/ c(`div`, {
                                  className: `framer-aukzsn`,
                                  "data-framer-name": `Service Column`,
                                  children: [
                                    /*#__PURE__*/ c(`div`, {
                                      className: `framer-8g10km`,
                                      "data-framer-name": `Text Wrap`,
                                      children: [
                                        /*#__PURE__*/ l(B, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ l(n, {
                                            children: /*#__PURE__*/ l(`h2`, {
                                              className: `framer-styles-preset-1yryej1`,
                                              "data-styles-preset": `TTqvVnbYq`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                              },
                                              children: `WHAT I CAN DO FOR YOU`,
                                            }),
                                          }),
                                          className: `framer-1qlmjyg`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ l(B, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ l(n, {
                                            children: /*#__PURE__*/ l(`p`, {
                                              className: `framer-styles-preset-17cdd8a`,
                                              "data-styles-preset": `UezruUh9E`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                              },
                                              children: `I design and validate dependable digital hardware—from RTL and timing analysis to FPGA-based systems—turning complex communication and signal-processing ideas into implementation-ready solutions.`,
                                            }),
                                          }),
                                          className: `framer-dhjg6f`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ l(H, {
                                      breakpoint: T,
                                      overrides: {
                                        KlICeir_c: {
                                          width: `calc(min(${m?.width || `100vw`}, 1200px) - 40px)`,
                                          y: (m?.y || 0) + 1353,
                                        },
                                        xPPcDrn0O: {
                                          width: `calc((min(${m?.width || `100vw`}, 1200px) - 80px) * 0.5)`,
                                        },
                                      },
                                      children: /*#__PURE__*/ l(I, {
                                        height: 332,
                                        width: `600px`,
                                        y: (m?.y || 0) + 1470.5,
                                        children: /*#__PURE__*/ l(P, {
                                          className: `framer-1pu3wi0-container`,
                                          id: `1pu3wi0`,
                                          nodeId: `FlT2LNGek`,
                                          scopeId: `augiA20Il`,
                                          children: /*#__PURE__*/ l(H, {
                                            breakpoint: T,
                                            overrides: {
                                              KlICeir_c: { variant: Q(`c6Iattpbp`) },
                                              xPPcDrn0O: { variant: Q(`c6Iattpbp`) },
                                            },
                                            children: /*#__PURE__*/ l(Me, {
                                              f_sVGawhc: `12j85ib`,
                                              ffERl2oPY: `jkbdfbskfbs`,
                                              height: `100%`,
                                              id: `FlT2LNGek`,
                                              layoutId: `FlT2LNGek`,
                                              meEXkm2wT: `l38x1i`,
                                              nZH086i07: `m5u3ny`,
                                              style: { width: `100%` },
                                              variant: Q(`ljuFfSHo5`),
                                              width: `100%`,
                                              Yccfta4rC: `16q859`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            /*#__PURE__*/ l(`section`, {
                              className: `framer-jnkhxp`,
                              "data-framer-name": `About`,
                              id: ce,
                              ref: N,
                              children: /*#__PURE__*/ l(`div`, {
                                className: `framer-1nnsoah`,
                                "data-framer-name": `Container`,
                                children: /*#__PURE__*/ c(`div`, {
                                  className: `framer-1ku9a3t`,
                                  "data-framer-name": `About Wrap`,
                                  children: [
                                    /*#__PURE__*/ c(`div`, {
                                      className: `framer-u3rr7b`,
                                      "data-framer-name": `Text Wrap`,
                                      children: [
                                        /*#__PURE__*/ l(B, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ l(n, {
                                            children: /*#__PURE__*/ l(`h2`, {
                                              className: `framer-styles-preset-1yryej1`,
                                              "data-styles-preset": `TTqvVnbYq`,
                                              style: {
                                                "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                              },
                                              children: `About me`,
                                            }),
                                          }),
                                          className: `framer-gswedo`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ l(B, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ l(n, {
                                            children: /*#__PURE__*/ l(`p`, {
                                              className: `framer-styles-preset-17cdd8a`,
                                              "data-styles-preset": `UezruUh9E`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                              },
                                              children: `I’m an aspiring electronics engineer specializing in digital system design, with a passion for physical IC design. I enjoy turning ideas into silicon by blending creativity with precision, and I’m driven to build circuits that form the foundation of tomorrow’s technology.`,
                                            }),
                                          }),
                                          className: `framer-13sexmm`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-u8r5tp`,
                                      "data-framer-name": `Number Card Wrap`,
                                      children: /*#__PURE__*/ l(H, {
                                        breakpoint: T,
                                        overrides: {
                                          KlICeir_c: { width: void 0, y: (m?.y || 0) + 2108 },
                                          xPPcDrn0O: {
                                            width: `max((min(min(${m?.width || `100vw`}, 1200px) - 80px, (min(${m?.width || `100vw`}, 1200px) - 80px) * 0.55) - 20px) / 2, 50px)`,
                                            y: (m?.y || 0) + 2453.5,
                                          },
                                        },
                                        children: /*#__PURE__*/ l(I, {
                                          height: 88,
                                          width: `max(min(max(min(${m?.width || `100vw`}, 1200px) - 80px, 1px), 600px) / 3, 50px)`,
                                          y: (m?.y || 0) + 2463.5,
                                          children: /*#__PURE__*/ l(P, {
                                            className: `framer-wzht7u-container`,
                                            nodeId: `irBoYf_Rz`,
                                            scopeId: `augiA20Il`,
                                            children: /*#__PURE__*/ l(H, {
                                              breakpoint: T,
                                              overrides: { KlICeir_c: { variant: Q(`jnBlTqivc`) } },
                                              children: /*#__PURE__*/ l(q, {
                                                CSvrESaLr: `Completed Projects`,
                                                height: `100%`,
                                                id: `irBoYf_Rz`,
                                                k4k7YmQcq: 5,
                                                layoutId: `irBoYf_Rz`,
                                                RK_0HRuzk: `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                S0H9a8_hu: ``,
                                                variant: Q(`KvPlWvX2H`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-s5afec`,
                                      "data-framer-name": `Contact Info Grid`,
                                      children: /*#__PURE__*/ l(H, {
                                        breakpoint: T,
                                        overrides: {
                                          KlICeir_c: {
                                            width: `calc(min(${m?.width || `100vw`}, 1200px) - 40px)`,
                                            y: (m?.y || 0) + 2236,
                                          },
                                          xPPcDrn0O: {
                                            width: `max((min(min(${m?.width || `100vw`}, 1200px) - 80px, (min(${m?.width || `100vw`}, 1200px) - 80px) * 0.55) - 20px) / 2, 50px)`,
                                            y: (m?.y || 0) + 2601.5,
                                          },
                                        },
                                        children: /*#__PURE__*/ l(I, {
                                          height: 50,
                                          width: `max(min(max(min(${m?.width || `100vw`}, 1200px) - 80px, 1px), 600px) / 3, 50px)`,
                                          y: (m?.y || 0) + 2591.5,
                                          children: /*#__PURE__*/ l(P, {
                                            className: `framer-upxcb6-container`,
                                            nodeId: `PRnNsWRcP`,
                                            scopeId: `augiA20Il`,
                                            children: /*#__PURE__*/ l(H, {
                                              breakpoint: T,
                                              overrides: {
                                                KlICeir_c: {
                                                  style: { width: `100%` },
                                                  variant: Q(`yAincoNeC`),
                                                },
                                              },
                                              children: /*#__PURE__*/ l(Y, {
                                                height: `100%`,
                                                id: `PRnNsWRcP`,
                                                layoutId: `PRnNsWRcP`,
                                                variant: Q(`cjkDSP2qE`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ c(`div`, {
                                      className: `framer-ifrid8`,
                                      "data-framer-name": `Social Icon Wrap`,
                                      children: [
                                        /*#__PURE__*/ l(F, {
                                          href: `https://www.linkedin.com/in/harshavardhan-y-037372303/`,
                                          motionChild: !0,
                                          nodeId: `DjUGtjMq4`,
                                          openInNewTab: !0,
                                          scopeId: `augiA20Il`,
                                          children: /*#__PURE__*/ l(g.a, {
                                            className: `framer-1blrhjt framer-lux5qc`,
                                            "data-framer-name": `Icon Wrap`,
                                            children: /*#__PURE__*/ l(I, {
                                              children: /*#__PURE__*/ l(P, {
                                                className: `framer-fub7ep-container`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                nodeId: `SCbhIev2c`,
                                                scopeId: `augiA20Il`,
                                                children: /*#__PURE__*/ l(Oe, {
                                                  color: `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                  height: `100%`,
                                                  iconSearch: `x-logo`,
                                                  iconSelection: `LinkedinLogo`,
                                                  id: `SCbhIev2c`,
                                                  layoutId: `SCbhIev2c`,
                                                  mirrored: !1,
                                                  selectByList: !0,
                                                  style: { height: `100%`, width: `100%` },
                                                  weight: `fill`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ l(F, {
                                          href: `https://github.com/Kajesh23`,
                                          motionChild: !0,
                                          nodeId: `DPt_zwyMu`,
                                          openInNewTab: !0,
                                          scopeId: `augiA20Il`,
                                          children: /*#__PURE__*/ l(g.a, {
                                            className: `framer-1jvvc3y framer-lux5qc`,
                                            "data-framer-name": `Icon Wrap`,
                                            children: /*#__PURE__*/ l(I, {
                                              children: /*#__PURE__*/ l(P, {
                                                className: `framer-143amxx-container`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                nodeId: `nUjXcyj1s`,
                                                scopeId: `augiA20Il`,
                                                children: /*#__PURE__*/ l(Oe, {
                                                  color: `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                  height: `100%`,
                                                  iconSearch: `instagram-logo`,
                                                  iconSelection: `GithubLogo`,
                                                  id: `nUjXcyj1s`,
                                                  layoutId: `nUjXcyj1s`,
                                                  mirrored: !1,
                                                  selectByList: !0,
                                                  style: { height: `100%`, width: `100%` },
                                                  weight: `fill`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        /*#__PURE__*/ l(F, {
                                          href: `https://drive.google.com/file/d/1YB0-4Q4BfELdZR84n4Vzu8y7pueTeD0T/view?usp=sharing`,
                                          motionChild: !0,
                                          nodeId: `eE6T4c315`,
                                          openInNewTab: !0,
                                          relValues: [],
                                          scopeId: `augiA20Il`,
                                          children: /*#__PURE__*/ l(g.a, {
                                            className: `framer-30cdzv framer-lux5qc`,
                                            "data-framer-name": `Icon Wrap`,
                                            children: /*#__PURE__*/ l(I, {
                                              children: /*#__PURE__*/ l(P, {
                                                className: `framer-1aym00j-container`,
                                                isAuthoredByUser: !0,
                                                nodeId: `dI5nxmb88`,
                                                scopeId: `augiA20Il`,
                                                children: /*#__PURE__*/ l(Z, {
                                                  color: `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                  height: `100%`,
                                                  iconSearch: `behance-logo`,
                                                  iconSelection: `File`,
                                                  id: `dI5nxmb88`,
                                                  layoutId: `dI5nxmb88`,
                                                  mirrored: !1,
                                                  selectByList: !0,
                                                  style: { height: `100%`, width: `100%` },
                                                  weight: `fill`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    /*#__PURE__*/ l(S, {
                                      links: [
                                        {
                                          href: { webPageId: `o1ZMLh8zw` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `o1ZMLh8zw` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `o1ZMLh8zw` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ l(H, {
                                          breakpoint: T,
                                          overrides: {
                                            KlICeir_c: {
                                              width: `calc(min(${m?.width || `100vw`}, 1200px) - 40px)`,
                                              y: (m?.y || 0) + 2396,
                                            },
                                            xPPcDrn0O: { y: (m?.y || 0) + 2761.5 },
                                          },
                                          children: /*#__PURE__*/ l(I, {
                                            height: 48,
                                            y: (m?.y || 0) + 2751.5,
                                            children: /*#__PURE__*/ l(H, {
                                              breakpoint: T,
                                              overrides: {
                                                KlICeir_c: { "data-framer-cursor": void 0 },
                                                xPPcDrn0O: { "data-framer-cursor": void 0 },
                                              },
                                              children: /*#__PURE__*/ l(P, {
                                                className: `framer-nbkoze-container`,
                                                "data-framer-cursor": `1hyjosv`,
                                                nodeId: `rdts6Dye6`,
                                                scopeId: `augiA20Il`,
                                                children: /*#__PURE__*/ l(H, {
                                                  breakpoint: T,
                                                  overrides: {
                                                    KlICeir_c: {
                                                      eI1zBfJVT: e[2],
                                                      style: { width: `100%` },
                                                      variant: Q(`jUTnzztGG`),
                                                    },
                                                    xPPcDrn0O: {
                                                      eI1zBfJVT: e[1],
                                                      variant: Q(`jUTnzztGG`),
                                                    },
                                                  },
                                                  children: /*#__PURE__*/ l(J, {
                                                    eI1zBfJVT: e[0],
                                                    height: `100%`,
                                                    id: `rdts6Dye6`,
                                                    layoutId: `rdts6Dye6`,
                                                    P4LIfja12: `99px`,
                                                    v6UsQ4OJm: `My Story`,
                                                    variant: Q(`AOB11ZrFP`),
                                                    width: `100%`,
                                                    XZXBfRxwF: `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ l(g.section, {
                      className: `framer-chfl5`,
                      "data-framer-name": `Project`,
                      layout: j,
                      children: /*#__PURE__*/ c(`div`, {
                        className: `framer-ms03og`,
                        "data-framer-name": `Container`,
                        children: [
                          /*#__PURE__*/ l(`div`, {
                            className: `framer-1qtkzxq`,
                            "data-framer-name": `Text Wrap`,
                            children: /*#__PURE__*/ l(B, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ l(n, {
                                children: /*#__PURE__*/ l(`h2`, {
                                  className: `framer-styles-preset-1yryej1`,
                                  "data-styles-preset": `TTqvVnbYq`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `start`,
                                    "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                  },
                                  children: `FEATURED PROJECTS`,
                                }),
                              }),
                              className: `framer-vosmgd`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          /*#__PURE__*/ c(`div`, {
                            className: `framer-lyues5`,
                            "data-framer-name": `Featured Project Wrap`,
                            children: [
                              /*#__PURE__*/ l(H, {
                                breakpoint: T,
                                overrides: {
                                  KlICeir_c: { __framer__styleTransformEffectEnabled: void 0 },
                                },
                                children: /*#__PURE__*/ l(Yn, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: ue,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 0.8,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 1,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-gonwtm`,
                                  "data-framer-name": `Featured Project - 1`,
                                  id: z,
                                  ref: pe,
                                  children: /*#__PURE__*/ l(de, {
                                    children: /*#__PURE__*/ l(fr, {
                                      query: dr(),
                                      children: (e, t, n) =>
                                        /*#__PURE__*/ l(s, {
                                          children: e?.map(
                                            (
                                              {
                                                AtZcGqORN: e,
                                                dMzbnq2mw: t,
                                                FCspUx7gv: n,
                                                gPcsfhEl_: r,
                                                id: i,
                                                txuc2BYLR: a,
                                              },
                                              o
                                            ) => (
                                              (n ??= ``),
                                              (a ??= ``),
                                              (t ??= ``),
                                              /*#__PURE__*/ l(
                                                y,
                                                {
                                                  id: `ipBsBnvZr-${i}`,
                                                  children: /*#__PURE__*/ l(ne.Provider, {
                                                    value: { FCspUx7gv: n },
                                                    children: /*#__PURE__*/ l(S, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { FCspUx7gv: n },
                                                            webPageId: `fOQOmLscg`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { FCspUx7gv: n },
                                                            webPageId: `fOQOmLscg`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { FCspUx7gv: n },
                                                            webPageId: `fOQOmLscg`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (i) =>
                                                        /*#__PURE__*/ l(H, {
                                                          breakpoint: T,
                                                          overrides: {
                                                            KlICeir_c: {
                                                              width: `calc(min(${m?.width || `100vw`}, 1200px) - 40px)`,
                                                              y: (m?.y || 0) + 2721,
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ l(I, {
                                                            height: 800,
                                                            width: `calc(min(${m?.width || `100vw`}, 1200px) - 80px)`,
                                                            y: (m?.y || 0) + 3237,
                                                            children: /*#__PURE__*/ l(P, {
                                                              className: `framer-3dq8xf-container`,
                                                              id: `${n}-${V}`,
                                                              nodeId: `uO7X4uyFD`,
                                                              ref: ge(`${n}-${V}`),
                                                              scopeId: `augiA20Il`,
                                                              children: /*#__PURE__*/ l(H, {
                                                                breakpoint: T,
                                                                overrides: {
                                                                  KlICeir_c: {
                                                                    f6GhLQWMp: void 0,
                                                                    QNIR2J_BM: i[2],
                                                                    variant: Q(`PuNdfJHuC`),
                                                                  },
                                                                  xPPcDrn0O: {
                                                                    f6GhLQWMp: void 0,
                                                                    QNIR2J_BM: i[1],
                                                                    variant: Q(`zHkStyin7`),
                                                                  },
                                                                },
                                                                children: /*#__PURE__*/ l(K, {
                                                                  f6GhLQWMp: `1bde3zh`,
                                                                  height: `100%`,
                                                                  id: `uO7X4uyFD`,
                                                                  KBFHunrYp: a,
                                                                  layoutId: `uO7X4uyFD`,
                                                                  MeFTBGBlh: t,
                                                                  QNIR2J_BM: i[0],
                                                                  style: { width: `100%` },
                                                                  U5OyUEe9n: nt.gPcsfhEl_?.(r, d),
                                                                  variant: Q(`jtHvjzfih`),
                                                                  w0GA6APtY: ur(e),
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                },
                                                i
                                              )
                                            )
                                          ),
                                        }),
                                    }),
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ l(H, {
                                breakpoint: T,
                                overrides: {
                                  KlICeir_c: { __framer__styleTransformEffectEnabled: void 0 },
                                },
                                children: /*#__PURE__*/ l(Yn, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: _e,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 0.8,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 1,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-po18jb`,
                                  "data-framer-name": `Featured Project - 2`,
                                  id: ve,
                                  ref: ue,
                                  children: /*#__PURE__*/ l(de, {
                                    children: /*#__PURE__*/ l(fr, {
                                      query: pr(),
                                      children: (e, t, n) =>
                                        /*#__PURE__*/ l(s, {
                                          children: e?.map(
                                            (
                                              {
                                                AtZcGqORN: e,
                                                dMzbnq2mw: t,
                                                FCspUx7gv: n,
                                                gPcsfhEl_: r,
                                                id: i,
                                                txuc2BYLR: a,
                                              },
                                              o
                                            ) => (
                                              (n ??= ``),
                                              (a ??= ``),
                                              (t ??= ``),
                                              /*#__PURE__*/ l(
                                                y,
                                                {
                                                  id: `q1iYpJuA5-${i}`,
                                                  children: /*#__PURE__*/ l(ne.Provider, {
                                                    value: { FCspUx7gv: n },
                                                    children: /*#__PURE__*/ l(S, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { FCspUx7gv: n },
                                                            webPageId: `fOQOmLscg`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { FCspUx7gv: n },
                                                            webPageId: `fOQOmLscg`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { FCspUx7gv: n },
                                                            webPageId: `fOQOmLscg`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (i) =>
                                                        /*#__PURE__*/ l(H, {
                                                          breakpoint: T,
                                                          overrides: {
                                                            KlICeir_c: {
                                                              width: `calc(min(${m?.width || `100vw`}, 1200px) - 40px)`,
                                                              y: (m?.y || 0) + 3601,
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ l(I, {
                                                            height: 800,
                                                            width: `calc(min(${m?.width || `100vw`}, 1200px) - 80px)`,
                                                            y: (m?.y || 0) + 4157,
                                                            children: /*#__PURE__*/ l(P, {
                                                              className: `framer-gnxkyz-container`,
                                                              id: `${n}-${ye}`,
                                                              nodeId: `nxWENchwD`,
                                                              ref: ge(`${n}-${ye}`),
                                                              scopeId: `augiA20Il`,
                                                              children: /*#__PURE__*/ l(H, {
                                                                breakpoint: T,
                                                                overrides: {
                                                                  KlICeir_c: {
                                                                    f6GhLQWMp: void 0,
                                                                    QNIR2J_BM: i[2],
                                                                    variant: Q(`PuNdfJHuC`),
                                                                  },
                                                                  xPPcDrn0O: {
                                                                    f6GhLQWMp: void 0,
                                                                    QNIR2J_BM: i[1],
                                                                    variant: Q(`zHkStyin7`),
                                                                  },
                                                                },
                                                                children: /*#__PURE__*/ l(K, {
                                                                  f6GhLQWMp: `1bde3zh`,
                                                                  height: `100%`,
                                                                  id: `nxWENchwD`,
                                                                  KBFHunrYp: a,
                                                                  layoutId: `nxWENchwD`,
                                                                  MeFTBGBlh: t,
                                                                  QNIR2J_BM: i[0],
                                                                  style: { width: `100%` },
                                                                  U5OyUEe9n: nt.gPcsfhEl_?.(r, d),
                                                                  variant: Q(`jtHvjzfih`),
                                                                  w0GA6APtY: ur(e),
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                },
                                                i
                                              )
                                            )
                                          ),
                                        }),
                                    }),
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ l(H, {
                                breakpoint: T,
                                overrides: {
                                  KlICeir_c: { __framer__styleTransformEffectEnabled: void 0 },
                                },
                                children: /*#__PURE__*/ l(Yn, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: be,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 0.8,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 1,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-cyub70`,
                                  "data-framer-name": `Featured Project - 3`,
                                  id: xe,
                                  ref: _e,
                                  children: /*#__PURE__*/ l(de, {
                                    children: /*#__PURE__*/ l(fr, {
                                      query: mr(),
                                      children: (e, t, n) =>
                                        /*#__PURE__*/ l(s, {
                                          children: e?.map(
                                            (
                                              {
                                                AtZcGqORN: e,
                                                dMzbnq2mw: t,
                                                FCspUx7gv: n,
                                                gPcsfhEl_: r,
                                                id: i,
                                                txuc2BYLR: a,
                                              },
                                              o
                                            ) => (
                                              (n ??= ``),
                                              (a ??= ``),
                                              (t ??= ``),
                                              /*#__PURE__*/ l(
                                                y,
                                                {
                                                  id: `kEmlb9aLa-${i}`,
                                                  children: /*#__PURE__*/ l(ne.Provider, {
                                                    value: { FCspUx7gv: n },
                                                    children: /*#__PURE__*/ l(S, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { FCspUx7gv: n },
                                                            webPageId: `fOQOmLscg`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { FCspUx7gv: n },
                                                            webPageId: `fOQOmLscg`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { FCspUx7gv: n },
                                                            webPageId: `fOQOmLscg`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (i) =>
                                                        /*#__PURE__*/ l(H, {
                                                          breakpoint: T,
                                                          overrides: {
                                                            KlICeir_c: {
                                                              width: `calc(min(${m?.width || `100vw`}, 1200px) - 40px)`,
                                                              y: (m?.y || 0) + 4481,
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ l(I, {
                                                            height: 800,
                                                            width: `calc(min(${m?.width || `100vw`}, 1200px) - 80px)`,
                                                            y: (m?.y || 0) + 5077,
                                                            children: /*#__PURE__*/ l(P, {
                                                              className: `framer-1c1pnsi-container`,
                                                              id: `${n}-${Se}`,
                                                              nodeId: `TXuvFJlxM`,
                                                              ref: ge(`${n}-${Se}`),
                                                              scopeId: `augiA20Il`,
                                                              children: /*#__PURE__*/ l(H, {
                                                                breakpoint: T,
                                                                overrides: {
                                                                  KlICeir_c: {
                                                                    f6GhLQWMp: void 0,
                                                                    QNIR2J_BM: i[2],
                                                                    variant: Q(`PuNdfJHuC`),
                                                                  },
                                                                  xPPcDrn0O: {
                                                                    f6GhLQWMp: void 0,
                                                                    QNIR2J_BM: i[1],
                                                                    variant: Q(`zHkStyin7`),
                                                                  },
                                                                },
                                                                children: /*#__PURE__*/ l(K, {
                                                                  f6GhLQWMp: `1bde3zh`,
                                                                  height: `100%`,
                                                                  id: `TXuvFJlxM`,
                                                                  KBFHunrYp: a,
                                                                  layoutId: `TXuvFJlxM`,
                                                                  MeFTBGBlh: t,
                                                                  QNIR2J_BM: i[0],
                                                                  style: { width: `100%` },
                                                                  U5OyUEe9n: nt.gPcsfhEl_?.(r, d),
                                                                  variant: Q(`jtHvjzfih`),
                                                                  w0GA6APtY: ur(e),
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                },
                                                i
                                              )
                                            )
                                          ),
                                        }),
                                    }),
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ l(`div`, {
                                className: `framer-1tmw4tn`,
                                "data-framer-name": `Featured Project - 4`,
                                id: Ce,
                                ref: be,
                                children: /*#__PURE__*/ l(de, {
                                  children: /*#__PURE__*/ l(fr, {
                                    query: hr(),
                                    children: (e, t, n) =>
                                      /*#__PURE__*/ l(s, {
                                        children: e?.map(
                                          (
                                            {
                                              AtZcGqORN: e,
                                              dMzbnq2mw: t,
                                              FCspUx7gv: n,
                                              gPcsfhEl_: r,
                                              id: i,
                                              txuc2BYLR: a,
                                            },
                                            o
                                          ) => (
                                            (n ??= ``),
                                            (a ??= ``),
                                            (t ??= ``),
                                            /*#__PURE__*/ l(
                                              y,
                                              {
                                                id: `ZSGta1iBW-${i}`,
                                                children: /*#__PURE__*/ l(ne.Provider, {
                                                  value: { FCspUx7gv: n },
                                                  children: /*#__PURE__*/ l(S, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { FCspUx7gv: n },
                                                          webPageId: `fOQOmLscg`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { FCspUx7gv: n },
                                                          webPageId: `fOQOmLscg`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { FCspUx7gv: n },
                                                          webPageId: `fOQOmLscg`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (i) =>
                                                      /*#__PURE__*/ l(H, {
                                                        breakpoint: T,
                                                        overrides: {
                                                          KlICeir_c: {
                                                            width: `calc(min(${m?.width || `100vw`}, 1200px) - 40px)`,
                                                            y: (m?.y || 0) + 5361,
                                                          },
                                                        },
                                                        children: /*#__PURE__*/ l(I, {
                                                          height: 800,
                                                          width: `calc(min(${m?.width || `100vw`}, 1200px) - 80px)`,
                                                          y: (m?.y || 0) + 5997,
                                                          children: /*#__PURE__*/ l(P, {
                                                            className: `framer-10lwgx6-container`,
                                                            id: `${n}-${we}`,
                                                            nodeId: `Aa2FRDhar`,
                                                            ref: ge(`${n}-${we}`),
                                                            scopeId: `augiA20Il`,
                                                            children: /*#__PURE__*/ l(H, {
                                                              breakpoint: T,
                                                              overrides: {
                                                                KlICeir_c: {
                                                                  f6GhLQWMp: void 0,
                                                                  QNIR2J_BM: i[2],
                                                                  variant: Q(`PuNdfJHuC`),
                                                                },
                                                                xPPcDrn0O: {
                                                                  f6GhLQWMp: void 0,
                                                                  QNIR2J_BM: i[1],
                                                                  variant: Q(`zHkStyin7`),
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ l(K, {
                                                                f6GhLQWMp: `1bde3zh`,
                                                                height: `100%`,
                                                                id: `Aa2FRDhar`,
                                                                KBFHunrYp: a,
                                                                layoutId: `Aa2FRDhar`,
                                                                MeFTBGBlh: t,
                                                                QNIR2J_BM: i[0],
                                                                style: { width: `100%` },
                                                                U5OyUEe9n: nt.gPcsfhEl_?.(r, d),
                                                                variant: Q(`jtHvjzfih`),
                                                                w0GA6APtY: ur(e),
                                                                width: `100%`,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                }),
                                              },
                                              i
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ l(`div`, {
                            className: `framer-zgpjzi`,
                            "data-framer-name": `Button Wrap`,
                            children: /*#__PURE__*/ l(S, {
                              links: [
                                { href: { webPageId: `dZoiRDoY3` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `dZoiRDoY3` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `dZoiRDoY3` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                /*#__PURE__*/ l(H, {
                                  breakpoint: T,
                                  overrides: {
                                    KlICeir_c: {
                                      width: `max(min(${m?.width || `100vw`}, 1200px) - 40px, 1px)`,
                                      y: (m?.y || 0) + 6200,
                                    },
                                  },
                                  children: /*#__PURE__*/ l(I, {
                                    height: 48,
                                    y: (m?.y || 0) + 6836,
                                    children: /*#__PURE__*/ l(H, {
                                      breakpoint: T,
                                      overrides: {
                                        KlICeir_c: { "data-framer-cursor": void 0 },
                                        xPPcDrn0O: { "data-framer-cursor": void 0 },
                                      },
                                      children: /*#__PURE__*/ l(P, {
                                        className: `framer-7fuyv6-container`,
                                        "data-framer-cursor": `1hyjosv`,
                                        nodeId: `jwTmJ5i1w`,
                                        scopeId: `augiA20Il`,
                                        children: /*#__PURE__*/ l(H, {
                                          breakpoint: T,
                                          overrides: {
                                            KlICeir_c: {
                                              eI1zBfJVT: e[2],
                                              style: { width: `100%` },
                                              variant: Q(`jUTnzztGG`),
                                            },
                                            xPPcDrn0O: { eI1zBfJVT: e[1], variant: Q(`jUTnzztGG`) },
                                          },
                                          children: /*#__PURE__*/ l(J, {
                                            eI1zBfJVT: e[0],
                                            height: `100%`,
                                            id: `jwTmJ5i1w`,
                                            layoutId: `jwTmJ5i1w`,
                                            P4LIfja12: `99px`,
                                            v6UsQ4OJm: `Browse All Projects`,
                                            variant: Q(`AOB11ZrFP`),
                                            width: `100%`,
                                            XZXBfRxwF: `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ l(g.section, {
                      className: `framer-owrpuq`,
                      "data-framer-name": `Contact`,
                      id: G,
                      layout: j,
                      ref: Te,
                      children: /*#__PURE__*/ c(`div`, {
                        className: `framer-19x0bz9`,
                        "data-framer-name": `Container`,
                        children: [
                          /*#__PURE__*/ l(`div`, {
                            className: `framer-nvqzqz`,
                            "data-framer-name": `Avatar Column`,
                            children: /*#__PURE__*/ c(g.div, {
                              className: `framer-1ckq09x`,
                              "data-framer-name": `Avatar Wrap`,
                              style: { transformPerspective: 1200 },
                              children: [
                                /*#__PURE__*/ l(H, {
                                  breakpoint: T,
                                  overrides: {
                                    KlICeir_c: {
                                      background: {
                                        alt: `Portrait of portfolio creator`,
                                        fit: `fill`,
                                        loading: W((m?.y || 0) + 6408),
                                        pixelHeight: 483,
                                        pixelWidth: 465,
                                        sizes: `180px`,
                                        src: `../../assets/images/d2lNC19CqfgAvF19NHQKsBDVNKE.jpg`,
                                      },
                                    },
                                    xPPcDrn0O: {
                                      background: {
                                        alt: `Portrait of portfolio creator`,
                                        fit: `fill`,
                                        loading: W((m?.y || 0) + 7124),
                                        pixelHeight: 483,
                                        pixelWidth: 465,
                                        sizes: `260px`,
                                        src: `../../assets/images/d2lNC19CqfgAvF19NHQKsBDVNKE.jpg`,
                                      },
                                    },
                                  },
                                  children: /*#__PURE__*/ l(le, {
                                    background: {
                                      alt: `Portrait of portfolio creator`,
                                      fit: `fill`,
                                      loading: W((m?.y || 0) + 7238),
                                      pixelHeight: 483,
                                      pixelWidth: 465,
                                      sizes: `340px`,
                                      src: `../../assets/images/d2lNC19CqfgAvF19NHQKsBDVNKE.jpg`,
                                    },
                                    className: `framer-5cjz9e`,
                                    "data-framer-name": `Avatar Image`,
                                  }),
                                }),
                                /*#__PURE__*/ l(H, {
                                  breakpoint: T,
                                  overrides: {
                                    KlICeir_c: { height: 50, width: `50px`, y: (m?.y || 0) + 6636 },
                                    xPPcDrn0O: {
                                      height: 100,
                                      width: `80px`,
                                      y: (m?.y || 0) + 7461.0588,
                                    },
                                  },
                                  children: /*#__PURE__*/ l(I, {
                                    height: 120,
                                    width: `120px`,
                                    y: (m?.y || 0) + 7648,
                                    children: /*#__PURE__*/ l(H, {
                                      breakpoint: T,
                                      overrides: { KlICeir_c: { transformTemplate: void 0 } },
                                      children: /*#__PURE__*/ l(P, {
                                        className: `framer-qh2v9z-container`,
                                        nodeId: `mYSICkfKR`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        style: { z: 30 },
                                        transformTemplate: or,
                                        children: /*#__PURE__*/ l(Pe, {
                                          height: `100%`,
                                          id: `mYSICkfKR`,
                                          layoutId: `mYSICkfKR`,
                                          style: { height: `100%`, width: `100%` },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          /*#__PURE__*/ c(`div`, {
                            className: `framer-3nw2d6`,
                            "data-framer-name": `Contact Column`,
                            children: [
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-r7eqr2`,
                                "data-framer-name": `Text Wrap`,
                                children: [
                                  /*#__PURE__*/ l(B, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ l(n, {
                                      children: /*#__PURE__*/ l(`h2`, {
                                        className: `framer-styles-preset-1yryej1`,
                                        "data-styles-preset": `TTqvVnbYq`,
                                        style: {
                                          "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                        },
                                        children: `Let's work together`,
                                      }),
                                    }),
                                    className: `framer-1i7iup8`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ l(B, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ l(n, {
                                      children: /*#__PURE__*/ l(`p`, {
                                        className: `framer-styles-preset-17cdd8a`,
                                        "data-styles-preset": `UezruUh9E`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                        },
                                        children: `Let’s build something impactful together !`,
                                      }),
                                    }),
                                    className: `framer-13dqa49`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ l(H, {
                                breakpoint: T,
                                overrides: {
                                  KlICeir_c: {
                                    width: `calc(min(${m?.width || `100vw`}, 1200px) - 40px)`,
                                    y: (m?.y || 0) + 7029,
                                  },
                                  xPPcDrn0O: {
                                    width: `calc(min(${m?.width || `100vw`}, 1200px) - 80px)`,
                                    y: (m?.y || 0) + 7869,
                                  },
                                },
                                children: /*#__PURE__*/ l(I, {
                                  height: 431,
                                  width: `calc((min(${m?.width || `100vw`}, 1200px) - 80px) * 0.5)`,
                                  y: (m?.y || 0) + 7397,
                                  children: /*#__PURE__*/ l(P, {
                                    className: `framer-eeue67-container`,
                                    nodeId: `eMRjb5fhr`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ l(H, {
                                      breakpoint: T,
                                      overrides: {
                                        KlICeir_c: { SS24lCwdh: void 0, variant: Q(`opmlwK5iG`) },
                                        xPPcDrn0O: { SS24lCwdh: void 0, variant: Q(`BvKdiO4EB`) },
                                      },
                                      children: /*#__PURE__*/ l(Ne, {
                                        height: `100%`,
                                        id: `eMRjb5fhr`,
                                        layoutId: `eMRjb5fhr`,
                                        SS24lCwdh: `1hyjosv`,
                                        style: { width: `100%` },
                                        variant: Q(`VXsLvoTtn`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ l(I, {
                      children: /*#__PURE__*/ l(P, {
                        className: `framer-foun8u-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: j,
                        nodeId: `IvmHhEgzx`,
                        scopeId: `augiA20Il`,
                        children: /*#__PURE__*/ l(Ae, {
                          height: `100%`,
                          id: `IvmHhEgzx`,
                          intensity: 10,
                          layoutId: `IvmHhEgzx`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Er = [
        `.framer-viC2t.framer-lux5qc, .framer-viC2t .framer-lux5qc { display: block; }`,
        `.framer-viC2t.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-4795dafb-4261-43d3-aa0c-b3831681376e, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-viC2t .framer-10wy60n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-o0zby { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 300vh; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-viC2t .framer-m09soj { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: sticky; top: 0px; width: 1px; z-index: 1; }`,
        `.framer-viC2t .framer-43x9nz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-viC2t .framer-1526o8l { aspect-ratio: 0.7142857142857143 / 1; flex: none; height: auto; overflow: visible; position: relative; transform-style: preserve-3d; width: 340px; }`,
        `.framer-viC2t .framer-1y3f9q6 { aspect-ratio: 0.7142857142857143 / 1; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: auto; left: 50%; overflow: hidden; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 340px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-viC2t .framer-174865s { aspect-ratio: 0.7142857142857143 / 1; backface-visibility: hidden; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: auto; left: 50%; overflow: hidden; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 340px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-viC2t .framer-owsqmh-container, .framer-viC2t .framer-qh2v9z-container { aspect-ratio: 1 / 1; flex: none; height: auto; left: 1%; position: absolute; top: 99%; transform: translate(-50%, -50%); width: 120px; z-index: 10; }`,
        `.framer-viC2t .framer-15t8qm9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 0px; transform: translateX(-50%); width: 100%; z-index: 1; }`,
        `.framer-viC2t .framer-iesngu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-viC2t .framer-bo4nxh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 370px; height: 100vh; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-bmwyn { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; max-width: 50%; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-viC2t .framer-su46cm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 10px 0px 0px; position: relative; width: min-content; }`,
        `.framer-viC2t .framer-eownb9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 5px; overflow: hidden; padding: 0px; position: absolute; top: -45px; width: 293px; z-index: 1; }`,
        `.framer-viC2t .framer-r8sngb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-viC2t .framer-9caroe-container, .framer-viC2t .framer-nbkoze-container, .framer-viC2t .framer-7fuyv6-container, .framer-viC2t .framer-foun8u-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-viC2t .framer-t476v9, .framer-viC2t .framer-h6ciaq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-viC2t .framer-14gfby1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; max-width: 50%; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-viC2t .framer-ba1bwc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-viC2t .framer-1behxzj { align-content: center; align-items: center; bottom: -65px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: 0px; width: 90%; z-index: 1; }`,
        `.framer-viC2t .framer-q5jzto { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-viC2t .framer-1mkj5ho { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-viC2t .framer-cby2j3, .framer-viC2t .framer-1nnsoah { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-aukzsn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 600px; }`,
        `.framer-viC2t .framer-8g10km, .framer-viC2t .framer-1qtkzxq, .framer-viC2t .framer-r7eqr2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-1qlmjyg, .framer-viC2t .framer-gswedo, .framer-viC2t .framer-1i7iup8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-viC2t .framer-dhjg6f, .framer-viC2t .framer-13sexmm, .framer-viC2t .framer-13dqa49 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-viC2t .framer-1pu3wi0-container, .framer-viC2t .framer-3dq8xf-container, .framer-viC2t .framer-gnxkyz-container, .framer-viC2t .framer-1c1pnsi-container, .framer-viC2t .framer-10lwgx6-container, .framer-viC2t .framer-eeue67-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-jnkhxp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-viC2t .framer-1ku9a3t { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 600px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-viC2t .framer-u3rr7b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-u8r5tp { display: grid; flex: none; gap: 0px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-wzht7u-container, .framer-viC2t .framer-upxcb6-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-s5afec { display: grid; flex: none; gap: 0px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-ifrid8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-viC2t .framer-1blrhjt, .framer-viC2t .framer-1jvvc3y, .framer-viC2t .framer-30cdzv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-viC2t .framer-fub7ep-container, .framer-viC2t .framer-143amxx-container, .framer-viC2t .framer-1aym00j-container { flex: none; height: 30px; position: relative; width: 30px; }`,
        `.framer-viC2t .framer-chfl5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-ms03og { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 39px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 120px 40px 120px 40px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-viC2t .framer-vosmgd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 1200px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-viC2t .framer-lyues5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-gonwtm, .framer-viC2t .framer-po18jb, .framer-viC2t .framer-cyub70, .framer-viC2t .framer-1tmw4tn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; top: 80px; width: 100%; z-index: 1; }`,
        `.framer-viC2t .framer-zgpjzi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-owrpuq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-viC2t .framer-19x0bz9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 120px 40px 120px 40px; position: relative; width: 100%; }`,
        `.framer-viC2t .framer-nvqzqz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 50%; }`,
        `.framer-viC2t .framer-1ckq09x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: min-content; }`,
        `.framer-viC2t .framer-5cjz9e { aspect-ratio: 0.7142857142857143 / 1; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: auto; overflow: visible; position: relative; width: 340px; }`,
        `.framer-viC2t .framer-3nw2d6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 50%; }`,
        ...Ue,
        ...at,
        ...Je,
        ...lt,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-viC2t.framer-72rtr7 { width: 810px; } .framer-viC2t .framer-1526o8l, .framer-viC2t .framer-1y3f9q6, .framer-viC2t .framer-174865s, .framer-viC2t .framer-5cjz9e { width: 260px; } .framer-viC2t .framer-owsqmh-container, .framer-viC2t .framer-qh2v9z-container { width: 80px; } .framer-viC2t .framer-bo4nxh { flex-direction: column; gap: 430px; } .framer-viC2t .framer-bmwyn { align-content: flex-start; align-items: flex-start; flex: none; height: min-content; max-width: 100%; overflow: visible; padding: 7px 0px 0px 100px; width: 100%; } .framer-viC2t .framer-su46cm { align-content: flex-start; align-items: flex-start; } .framer-viC2t .framer-eownb9 { align-self: stretch; left: unset; padding: 0px 0px 0px 5px; position: relative; top: unset; width: auto; } .framer-viC2t .framer-14gfby1 { align-content: flex-end; align-items: flex-end; flex: none; height: min-content; max-width: 100%; padding: 0px 100px 0px 0px; width: 100%; } .framer-viC2t .framer-ba1bwc { align-content: flex-end; align-items: flex-end; flex-direction: column; } .framer-viC2t .framer-1behxzj { align-self: stretch; bottom: unset; position: relative; right: unset; width: auto; } .framer-viC2t .framer-aukzsn { width: 50%; } .framer-viC2t .framer-1nnsoah { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 60px; } .framer-viC2t .framer-1ku9a3t { flex: none; max-width: 55%; width: 100%; } .framer-viC2t .framer-u3rr7b { width: 365px; } .framer-viC2t .framer-u8r5tp { gap: 20px 20px; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); } .framer-viC2t .framer-s5afec { gap: 20px; grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-viC2t .framer-19x0bz9 { flex-direction: column; gap: 80px; } .framer-viC2t .framer-3nw2d6 { width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-viC2t.framer-72rtr7 { width: 390px; } .framer-viC2t .framer-o0zby { flex-direction: column; height: 100vh; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; } .framer-viC2t .framer-m09soj { flex: none; width: 100%; } .framer-viC2t .framer-1526o8l, .framer-viC2t .framer-1y3f9q6, .framer-viC2t .framer-174865s, .framer-viC2t .framer-5cjz9e { width: 180px; } .framer-viC2t .framer-owsqmh-container, .framer-viC2t .framer-qh2v9z-container { bottom: 30px; left: -23px; top: unset; transform: unset; width: 50px; } .framer-viC2t .framer-15t8qm9 { left: unset; position: relative; top: unset; transform: unset; } .framer-viC2t .framer-bo4nxh { flex-direction: column; gap: 280px; } .framer-viC2t .framer-bmwyn { align-content: center; align-items: center; flex: none; height: min-content; max-width: 100%; overflow: visible; padding: 25px 0px 0px 0px; width: 100%; } .framer-viC2t .framer-su46cm { padding: 0px; } .framer-viC2t .framer-eownb9 { align-self: stretch; justify-content: center; left: unset; position: relative; top: unset; width: auto; } .framer-viC2t .framer-14gfby1 { align-content: center; align-items: center; flex: none; height: min-content; max-width: 100%; width: 100%; } .framer-viC2t .framer-ba1bwc { flex-direction: column; width: 100%; } .framer-viC2t .framer-1behxzj { bottom: unset; gap: 0px; padding: 0px 20px 0px 20px; position: relative; right: unset; width: 100%; } .framer-viC2t .framer-1mkj5ho { flex-direction: column; height: min-content; } .framer-viC2t .framer-cby2j3, .framer-viC2t .framer-ms03og { padding: 80px 20px 80px 20px; } .framer-viC2t .framer-aukzsn, .framer-viC2t .framer-nbkoze-container, .framer-viC2t .framer-nvqzqz, .framer-viC2t .framer-3nw2d6 { width: 100%; } .framer-viC2t .framer-jnkhxp { height: min-content; } .framer-viC2t .framer-1nnsoah { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 40px; padding: 80px 20px 80px 20px; } .framer-viC2t .framer-1ku9a3t { flex: none; max-width: 100%; width: 100%; } .framer-viC2t .framer-u8r5tp { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; justify-content: flex-start; width: min-content; } .framer-viC2t .framer-wzht7u-container { align-self: unset; width: auto; } .framer-viC2t .framer-s5afec { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: flex-start; } .framer-viC2t .framer-upxcb6-container { align-self: unset; } .framer-viC2t .framer-chfl5, .framer-viC2t .framer-owrpuq { flex-direction: column; } .framer-viC2t .framer-lyues5 { gap: 80px; } .framer-viC2t .framer-gonwtm, .framer-viC2t .framer-po18jb, .framer-viC2t .framer-cyub70, .framer-viC2t .framer-1tmw4tn { gap: 80px; position: relative; top: unset; } .framer-viC2t .framer-7fuyv6-container { flex: 1 0 0px; width: 1px; } .framer-viC2t .framer-19x0bz9 { flex-direction: column; gap: 40px; padding: 80px 20px 80px 20px; }}`,
      ]),
      (Dr = V(Tr, Er, `framer-viC2t`)),
      (Dr.displayName = `Home`),
      (Dr.defaultProps = { height: 5877.53, width: 1200 }),
      E(
        Dr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Ln,
          ...Bn,
          ...Hn,
          ...Un,
          ...Wn,
          ...Gn,
          ...Kn,
          ...qn,
          ...Jn,
          ...Xn,
          ...Zn,
          ...Qn,
          ...k(We),
          ...k(ot),
          ...k(Ye),
          ...k(ut),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Dr.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = N.get(dr(), n, r),
            a = N.get(pr(), n, r),
            o = N.get(mr(), n, r),
            s = N.get(hr(), n, r);
          return ae(
            [
              () => i.preload(),
              () => a.preload(),
              () => o.preload(),
              () => s.preload(),
              () => L(Pe, {}, t),
              () => L(Me, {}, t),
              () => L(q, {}, t),
              () => L(X, {}, t),
              () => L(Y, {}, t),
              () => L(J, {}, t),
              () => L(Ne, {}, t),
              async () => {
                let e = (await pe(() => i.readMaybeAsync(), t)) ?? [];
                return ae(
                  e.flatMap((e) => () => L(K, {}, t)),
                  t
                );
              },
              async () => {
                let e = (await pe(() => a.readMaybeAsync(), t)) ?? [];
                return ae(
                  e.flatMap((e) => () => L(K, {}, t)),
                  t
                );
              },
              async () => {
                let e = (await pe(() => o.readMaybeAsync(), t)) ?? [];
                return ae(
                  e.flatMap((e) => () => L(K, {}, t)),
                  t
                );
              },
              async () => {
                let e = (await pe(() => s.readMaybeAsync(), t)) ?? [];
                return ae(
                  e.flatMap((e) => () => L(K, {}, t)),
                  t
                );
              },
            ],
            t
          );
        },
      }),
      (Or = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `1200`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"xPPcDrn0O":{"layout":["fixed","auto"]},"KlICeir_c":{"layout":["fixed","auto"]}}}`,
              framerResponsiveScreen: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerAutoSizeImages: `true`,
              framerImmutableVariables: `true`,
              framerContractVersion: `1`,
              framerColorSyntax: `true`,
              framerComponentViewportWidth: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerDisplayContentsDiv: `false`,
              framerScrollSections: `{"wdZDumqQr":{"pattern":":wdZDumqQr","name":"hero"},"Rd4N98ip7":{"pattern":":Rd4N98ip7","name":"service"},"z940ZBfKS":{"pattern":":z940ZBfKS","name":"about"},"ipBsBnvZr":{"pattern":":ipBsBnvZr","name":"featured-project-1"},"uO7X4uyFD":{"pattern":":FCspUx7gv-:uO7X4uyFD","name":"project","slugs":{"FCspUx7gv":{"identifier":"local-module:collection/vW1JQClGO:default","provider":"ipBsBnvZr"}}},"q1iYpJuA5":{"pattern":":q1iYpJuA5","name":"featured-project-2"},"nxWENchwD":{"pattern":":FCspUx7gv-:nxWENchwD","name":"project","slugs":{"FCspUx7gv":{"identifier":"local-module:collection/vW1JQClGO:default","provider":"q1iYpJuA5"}}},"kEmlb9aLa":{"pattern":":kEmlb9aLa","name":"featured-project-3"},"TXuvFJlxM":{"pattern":":FCspUx7gv-:TXuvFJlxM","name":"project","slugs":{"FCspUx7gv":{"identifier":"local-module:collection/vW1JQClGO:default","provider":"kEmlb9aLa"}}},"ZSGta1iBW":{"pattern":":ZSGta1iBW","name":"featured-project-4"},"Aa2FRDhar":{"pattern":":FCspUx7gv-:Aa2FRDhar","name":"project","slugs":{"FCspUx7gv":{"identifier":"local-module:collection/vW1JQClGO:default","provider":"ZSGta1iBW"}}},"pygupB0pf":{"pattern":":pygupB0pf","name":"contact"}}`,
              framerIntrinsicHeight: `5877.53`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
kr();
export { Or as __FramerMetadata__, Dr as default, er as queryParamNames };
//# sourceMappingURL=4BpVYPJr3AS1qhULpPNjSXUsflHOv0ksXeC5LZAj2XY.BR6FrPCc.mjs.map
