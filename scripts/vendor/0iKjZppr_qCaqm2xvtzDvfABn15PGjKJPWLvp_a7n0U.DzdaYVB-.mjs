import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
  I as n,
  M as r,
  N as i,
  T as a,
  c as o,
  l as s,
  o as c,
  p as l,
  s as u,
  x as d,
} from "./react.guramC8M.mjs";
import { S as f, a as p, r as m, t as h } from "./motion.BkENN8JI.mjs";
import {
  B as g,
  C as ee,
  Ct as te,
  D as _,
  E as v,
  Et as y,
  L as b,
  R as x,
  St as ne,
  W as S,
  Z as C,
  _ as re,
  _t as ie,
  a as w,
  b as T,
  bt as E,
  ct as ae,
  et as D,
  f as oe,
  ft as se,
  gt as ce,
  ht as le,
  i as O,
  j as k,
  k as A,
  l as ue,
  m as j,
  mt as M,
  n as de,
  o as N,
  ot as fe,
  st as pe,
  tt as P,
  u as me,
  ut as he,
  vt as ge,
  w as F,
  wt as I,
  x as L,
  xt as _e,
} from "./framer.mQNi9T2E.mjs";
import { c as R, i as z, l as B, r as V, s as ve, u as H } from "./toplevel-deps.CrcF9UeY.mjs";
import { i as U, r as ye } from "./shared-lib.BnN6DsbI.mjs";
import { i as W, n as G, r as K, t as be } from "./ilUlJnLkH.DR4o7BiV.mjs";
import { i as q, n as xe, r as Se, t as Ce } from "./NxCe_AOfF.C08H5wkL.mjs";
import { i as we, n as Te, r as Ee, t as De } from "./ZRloE2uUu.DrAzey9J.mjs";
import { i as Oe, n as ke, r as Ae, t as je } from "./djOUw0pzb.BWV5LaTY.mjs";
import { i as Me, n as Ne, r as Pe, t as Fe } from "./TTqvVnbYq.mRW82p5T.mjs";
import { n as Ie, t as Le } from "./R5Uj4EVTC.lsbn4xQe.mjs";
import { n as Re, t as ze } from "./W4OPXwR7T.nUq7tz0b.mjs";
import { i as Be, r as Ve, t as He } from "./l9KTJXLB2.D9kwcrFC.mjs";
import { a as Ue, i as We } from "./SV7i6KgIh.ZRsSxFYZ.mjs";
function Ge(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, J;
function ct() {
  return (ct = e(() => {
    (u(),
      S(),
      h(),
      t(),
      W(),
      (Ke = y(f.div)),
      (qe = { cQ2kvYGkr: { hover: !0, pressed: !0 } }),
      (Je = [`cQ2kvYGkr`, `SaGivTSL1`, `sMOzyUWE6`, `sck1kedce`, `BkuMd8FW9`]),
      (Ye = `framer-MJ1QL`),
      (Xe = {
        BkuMd8FW9: `framer-v-1u0ay1q`,
        cQ2kvYGkr: `framer-v-1g6zxo6`,
        SaGivTSL1: `framer-v-155fgdk`,
        sck1kedce: `framer-v-7jhp2j`,
        sMOzyUWE6: `framer-v-juzi7b`,
      }),
      (Ze = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Qe = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      ($e = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (et = (e, t) => `translateX(-50%) ${t}`),
      (tt = ({ value: e, children: t }) => {
        let n = r(p),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ c(p.Provider, { value: o, children: t });
      }),
      (nt = f.create(n)),
      (rt = {
        Default: `cQ2kvYGkr`,
        Disabled: `sMOzyUWE6`,
        Error: `BkuMd8FW9`,
        Loading: `SaGivTSL1`,
        Success: `sck1kedce`,
      }),
      (it = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: rt[r.variant] ?? r.variant ?? `cQ2kvYGkr`,
      })),
      (at = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ot = /*#__PURE__*/ l(function (e, t) {
        let r = d(null),
          i = t ?? r,
          o = a(),
          { activeLocale: l, setLocale: u } = ie();
        pe();
        let { style: p, className: h, layoutId: g, variant: ee, ..._ } = it(e),
          {
            baseVariant: v,
            classNames: y,
            clearLoadingGesture: b,
            gestureHandlers: x,
            gestureVariant: ne,
            isLoading: S,
            setGestureState: C,
            setVariant: re,
            variants: w,
          } = te({
            cycleOrder: Je,
            defaultVariant: `cQ2kvYGkr`,
            enabledGestures: qe,
            ref: i,
            variant: ee,
            variantClassNames: Xe,
          }),
          T = at(e, w),
          E = A(Ye, be),
          ae = () => v !== `SaGivTSL1`,
          D = () => v === `SaGivTSL1`;
        return /*#__PURE__*/ c(m, {
          id: g ?? o,
          children: /*#__PURE__*/ c(nt, {
            animate: w,
            initial: !1,
            children: /*#__PURE__*/ c(tt, {
              value: Ze,
              children: /*#__PURE__*/ s(f.button, {
                ..._,
                ...x,
                className: A(E, `framer-1g6zxo6`, h, y),
                "data-framer-name": `Default`,
                "data-reset": `button`,
                layoutDependency: T,
                layoutId: `cQ2kvYGkr`,
                ref: i,
                style: {
                  backgroundColor: `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                  borderBottomLeftRadius: 99,
                  borderBottomRightRadius: 99,
                  borderTopLeftRadius: 99,
                  borderTopRightRadius: 99,
                  opacity: 1,
                  ...p,
                },
                variants: {
                  "cQ2kvYGkr-hover": { opacity: 1 },
                  "cQ2kvYGkr-pressed": { opacity: 1 },
                  BkuMd8FW9: {
                    backgroundColor: `var(--token-63c1aa9b-b60d-46e8-b1c7-6d9c05a923bd, rgb(255, 34, 68))`,
                    opacity: 1,
                  },
                  sck1kedce: {
                    backgroundColor: `var(--token-4baed98b-3751-4e60-b570-600a506f091e, rgb(11, 222, 102))`,
                    opacity: 1,
                  },
                  sMOzyUWE6: {
                    backgroundColor: `var(--token-7d1fd828-621c-47fc-b270-6f2c2fff9ca2, rgb(143, 143, 143))`,
                    opacity: 0.5,
                  },
                },
                ...Ge(
                  {
                    "cQ2kvYGkr-hover": { "data-framer-name": void 0 },
                    "cQ2kvYGkr-pressed": { "data-framer-name": void 0 },
                    BkuMd8FW9: { "data-framer-name": `Error` },
                    SaGivTSL1: { "data-framer-name": `Loading` },
                    sck1kedce: { "data-framer-name": `Success` },
                    sMOzyUWE6: { "data-framer-name": `Disabled` },
                  },
                  v,
                  ne
                ),
                children: [
                  ae() &&
                    /*#__PURE__*/ c(F, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ c(n, {
                        children: /*#__PURE__*/ c(f.h4, {
                          className: `framer-styles-preset-usoyrg`,
                          "data-styles-preset": `ilUlJnLkH`,
                          style: {
                            "--framer-text-color": `var(--extracted-1eung3n, var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255)))`,
                          },
                          children: `Subscribe`,
                        }),
                      }),
                      className: `framer-cbdtin`,
                      fonts: [`Inter`],
                      layoutDependency: T,
                      layoutId: `po5IASyM9`,
                      style: {
                        "--extracted-1eung3n": `var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      variants: {
                        BkuMd8FW9: {
                          "--extracted-1eung3n": `var(--token-39a5a1be-d79a-43ee-a7a4-d32ef142beed, rgb(255, 255, 255))`,
                        },
                        sck1kedce: {
                          "--extracted-1eung3n": `var(--token-ffb0ff11-cab3-40ad-af6c-69f4ede46c1e, rgb(0, 0, 0))`,
                        },
                        sMOzyUWE6: {
                          "--extracted-1eung3n": `var(--token-a228d207-519c-4c30-ace3-fe8c17413ec0, rgb(218, 218, 218))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Ge(
                        {
                          BkuMd8FW9: {
                            children: /*#__PURE__*/ c(n, {
                              children: /*#__PURE__*/ c(f.h4, {
                                className: `framer-styles-preset-usoyrg`,
                                "data-styles-preset": `ilUlJnLkH`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1eung3n, var(--token-39a5a1be-d79a-43ee-a7a4-d32ef142beed, rgb(255, 255, 255)))`,
                                },
                                children: `Something went wrong`,
                              }),
                            }),
                          },
                          sck1kedce: {
                            children: /*#__PURE__*/ c(n, {
                              children: /*#__PURE__*/ c(f.h4, {
                                className: `framer-styles-preset-usoyrg`,
                                "data-styles-preset": `ilUlJnLkH`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1eung3n, var(--token-ffb0ff11-cab3-40ad-af6c-69f4ede46c1e, rgb(0, 0, 0)))`,
                                },
                                children: `success`,
                              }),
                            }),
                          },
                          sMOzyUWE6: {
                            children: /*#__PURE__*/ c(n, {
                              children: /*#__PURE__*/ c(f.h4, {
                                className: `framer-styles-preset-usoyrg`,
                                "data-styles-preset": `ilUlJnLkH`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1eung3n, var(--token-a228d207-519c-4c30-ace3-fe8c17413ec0, rgb(218, 218, 218)))`,
                                },
                                children: `Subscribe`,
                              }),
                            }),
                          },
                        },
                        v,
                        ne
                      ),
                    }),
                  D() &&
                    /*#__PURE__*/ c(f.div, {
                      className: `framer-k6h1wu`,
                      "data-framer-name": `Spinner`,
                      layoutDependency: T,
                      layoutId: `OLHiPJg5A`,
                      style: {
                        mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                        WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                      },
                      children: /*#__PURE__*/ c(Ke, {
                        __framer__loop: $e,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: `loop`,
                        __framer__loopTransition: Qe,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-x3f5b9`,
                        "data-framer-name": `Conic`,
                        layoutDependency: T,
                        layoutId: `oCTE0Pkd8`,
                        style: {
                          background: `conic-gradient(from 0deg at 50% 50%, var(--token-a3859f8f-41d4-4be1-a56e-27b66efaa3e1, rgba(255, 255, 255, 0)) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                        },
                        children: /*#__PURE__*/ c(f.div, {
                          className: `framer-pfo3oj`,
                          "data-framer-name": `Rounding`,
                          layoutDependency: T,
                          layoutId: `jByzTzliH`,
                          style: {
                            backgroundColor: `var(--token-39a5a1be-d79a-43ee-a7a4-d32ef142beed, rgb(255, 255, 255))`,
                            borderBottomLeftRadius: 1,
                            borderBottomRightRadius: 1,
                            borderTopLeftRadius: 1,
                            borderTopRightRadius: 1,
                          },
                          transformTemplate: et,
                        }),
                      }),
                    }),
                ],
              }),
            }),
          }),
        });
      })),
      (st = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-MJ1QL.framer-1aeukup, .framer-MJ1QL .framer-1aeukup { display: block; }`,
        `.framer-MJ1QL.framer-1g6zxo6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 6px 40px 10px 40px; position: relative; width: min-content; }`,
        `.framer-MJ1QL .framer-cbdtin { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
        `.framer-MJ1QL .framer-k6h1wu { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
        `.framer-MJ1QL .framer-x3f5b9 { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }`,
        `.framer-MJ1QL .framer-pfo3oj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
        `.framer-MJ1QL.framer-v-155fgdk.framer-1g6zxo6 { cursor: unset; padding: 10px 40px 10px 40px; }`,
        `.framer-MJ1QL.framer-v-juzi7b.framer-1g6zxo6, .framer-MJ1QL.framer-v-7jhp2j.framer-1g6zxo6, .framer-MJ1QL.framer-v-1u0ay1q.framer-1g6zxo6 { cursor: unset; }`,
        ...G,
      ]),
      (J = I(ot, st, `framer-MJ1QL`)),
      (J.displayName = `Subscribe Button`),
      (J.defaultProps = { height: 50, width: 176 }),
      _(J, {
        variant: {
          options: [`cQ2kvYGkr`, `SaGivTSL1`, `sMOzyUWE6`, `sck1kedce`, `BkuMd8FW9`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: N.Enum,
        },
      }),
      v(
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
          ...x(K),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  Y,
  X,
  Z,
  St,
  Ct,
  Q,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  $,
  Mt;
function Nt() {
  return (Nt = e(() => {
    (u(),
      S(),
      h(),
      t(),
      U(),
      ct(),
      Ie(),
      Re(),
      z(),
      Be(),
      Oe(),
      W(),
      q(),
      Me(),
      H(),
      we(),
      We(),
      (lt = b(J)),
      (ut = b(ze)),
      (dt = b(Le)),
      (ft = b(ye)),
      (pt = b(V)),
      (mt = {
        BdxEY0ddd: `(min-width: 810px) and (max-width: 1199.98px)`,
        M_fzwrFkC: `(max-width: 809.98px)`,
        vxpsol9Gl: `(min-width: 1200px)`,
      }),
      (ht = []),
      (gt = `framer-vNocY`),
      (_t = {
        BdxEY0ddd: `framer-v-1bzc4j9`,
        M_fzwrFkC: `framer-v-1nlvvau`,
        vxpsol9Gl: `framer-v-bb8acl`,
      }),
      (vt = (e, t, n) => (e && t ? `position` : n)),
      (yt = (e, t, n) => {
        if (typeof e != `string`) return ``;
        let r = new Date(e);
        if (isNaN(r.getTime())) return ``;
        let i = `en-US`;
        try {
          return r.toLocaleString(n || i, t);
        } catch {
          return r.toLocaleString(i, t);
        }
      }),
      (bt = { dateStyle: `medium`, timeZone: `UTC` }),
      (xt = (e, t) => yt(e, bt, t)),
      (Y = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (X = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (St = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
          default:
            return n;
        }
      }),
      (Ct = (e, t, n) =>
        e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
      (Q = (e) => ({
        from: { alias: `SHOm12BAW`, data: He, type: `Collection` },
        select: [
          { collection: `SHOm12BAW`, name: `SG0PXpmii`, type: `Identifier` },
          { collection: `SHOm12BAW`, name: `qA77RzyS1`, type: `Identifier` },
          { collection: `SHOm12BAW`, name: `xd_Q4amJC`, type: `Identifier` },
          { collection: `SHOm12BAW`, name: `ZDyO9OD9Q`, type: `Identifier` },
          { collection: `SHOm12BAW`, name: `wWT4jlIQ9`, type: `Identifier` },
          { collection: `SHOm12BAW`, name: `TCax3X2ch`, type: `Identifier` },
          { collection: `SHOm12BAW`, name: `id`, type: `Identifier` },
        ],
        where: {
          operator: `not`,
          type: `UnaryOperation`,
          value: {
            left: { collection: `SHOm12BAW`, name: `wWT4jlIQ9`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: e },
            type: `BinaryOperation`,
          },
        },
      })),
      (wt = ({ query: e, pageSize: t, children: n }) => {
        let { paginatedQuery: r, paginationInfo: i, loadMore: a } = le(e, t, `SHOm12BAW`);
        return n(E(r), i, a);
      }),
      (Tt = { Desktop: `vxpsol9Gl`, Phone: `M_fzwrFkC`, Tablet: `BdxEY0ddd` }),
      (Et = ({ value: e }) =>
        M()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Dt = (e) => ({
        from: { alias: `SV7i6KgIh`, data: He, type: `Collection` },
        select: [
          { collection: `SV7i6KgIh`, name: `wWT4jlIQ9`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `ZDyO9OD9Q`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `xd_Q4amJC`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `TCax3X2ch`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `qA77RzyS1`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `geD8An_ku`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `lheOj_gmz`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `yuNEwB0La`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `SZVp51a6o`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `FKQ07Yx6S`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `BbXoJLzCn`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `nL_5jEb0F`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `GhPul5CYi`, type: `Identifier` },
          { collection: `SV7i6KgIh`, name: `xINUrYZ8C`, type: `Identifier` },
        ],
        where: e,
      })),
      (Ot = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Tt[r.variant] ?? r.variant ?? `vxpsol9Gl`,
      })),
      (kt = {
        alignment: `center`,
        component: V,
        offset: { x: 20, y: 20 },
        placement: `right`,
        transition: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` },
        variant: `aXN7J563X`,
      }),
      (At = /*#__PURE__*/ l(function (e, t) {
        let l = d(null),
          u = t ?? l;
        a();
        let { activeLocale: h, setLocale: te } = ie(),
          _ = pe(),
          v = ae(),
          [y] = E(Dt(g(v, `SV7i6KgIh`)));
        if (!y) throw new re(`No data matches path variables: ${JSON.stringify(v)}`);
        let {
            style: b,
            className: x,
            layoutId: S,
            variant: C,
            wWT4jlIQ9: D = y.wWT4jlIQ9 ?? ``,
            ZDyO9OD9Q: le = y.ZDyO9OD9Q,
            xd_Q4amJC: k = y.xd_Q4amJC,
            TCax3X2ch: M = y.TCax3X2ch ?? ``,
            qA77RzyS1: N = y.qA77RzyS1,
            geD8An_ku: P = y.geD8An_ku ?? ``,
            lheOj_gmz: I = y.lheOj_gmz,
            yuNEwB0La: R = y.yuNEwB0La ?? ``,
            SZVp51a6o: z = y.SZVp51a6o,
            FKQ07Yx6S: B = y.FKQ07Yx6S ?? ``,
            BbXoJLzCn: V = y.BbXoJLzCn,
            nL_5jEb0F: H = y.nL_5jEb0F,
            GhPul5CYi: U = y.GhPul5CYi ?? ``,
            xINUrYZ8C: W = y.xINUrYZ8C,
            ...G
          } = Ot(e),
          K = i(() => Ue({ TCax3X2ch: M, wWT4jlIQ9: D }, h), [D, M, h]);
        ge(K);
        let [q, xe] = se(C, mt, !1),
          Se = A(gt, je, Fe, Ce, be, ve, De),
          we = r(oe)?.isLayoutTemplate,
          Te = !!r(p)?.transition?.layout,
          Ee = vt(we, Te),
          Oe = _e(`Y6b0HmZtt`),
          ke = d(null),
          Ae = Ve.xd_Q4amJC?.(k, h),
          Me = ce(),
          Ne = xt(le, Me),
          Pe = X(P),
          Ie = X(R),
          Re = X(B),
          Be = X(I),
          He = X(H),
          We = X(U),
          Ge = X(W);
        ne();
        let { activeVariantCallback: Ke, delay: qe } = fe(void 0),
          Je = ({ loadMore: e }) =>
            Ke(async (...t) => {
              e();
            });
        return (
          he({ "1bde3zh": kt }),
          /*#__PURE__*/ c(oe.Provider, {
            value: {
              activeVariantId: q,
              humanReadableVariantMap: Tt,
              primaryVariantId: `vxpsol9Gl`,
              variantClassNames: _t,
            },
            children: /*#__PURE__*/ s(m, {
              id: S ?? `SV7i6KgIh`,
              children: [
                /*#__PURE__*/ c(Et, {
                  value: `html body { background: var(--token-4795dafb-4261-43d3-aa0c-b3831681376e, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ s(f.div, {
                  ...G,
                  className: A(Se, `framer-bb8acl`, x),
                  ref: u,
                  style: { ...b },
                  children: [
                    /*#__PURE__*/ c(f.section, {
                      className: `framer-1yxmu09`,
                      "data-framer-name": `Blog Page`,
                      id: Oe,
                      layout: Ee,
                      ref: ke,
                      children: /*#__PURE__*/ s(`div`, {
                        className: `framer-wmcrxg`,
                        "data-framer-name": `Container`,
                        children: [
                          /*#__PURE__*/ s(`div`, {
                            className: `framer-1do4apx`,
                            "data-framer-name": `Blog Content`,
                            children: [
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-11osgkg`,
                                "data-framer-name": `Text Wrap`,
                                children: [
                                  /*#__PURE__*/ c(F, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(n, {
                                      children: /*#__PURE__*/ c(`h1`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7QW50b25pby03MDA=`,
                                          "--framer-font-family": `"Antonio", "Antonio Placeholder", sans-serif`,
                                          "--framer-font-size": `120px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-letter-spacing": `-0.03em`,
                                          "--framer-line-height": `1.1em`,
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                          "--framer-text-transform": `uppercase`,
                                        },
                                        children: `5 Design Trends That Will Define 2024`,
                                      }),
                                    }),
                                    className: `framer-4bq2uw`,
                                    "data-framer-name": `Title`,
                                    fonts: [`GF;Antonio-700`],
                                    text: D,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(F, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(n, {
                                      children: /*#__PURE__*/ c(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `SW50ZXItTGlnaHQ=`,
                                          "--framer-font-size": `18px`,
                                          "--framer-font-weight": `300`,
                                          "--framer-line-height": `1.5em`,
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                        },
                                        children: `Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve.`,
                                      }),
                                    }),
                                    className: `framer-wvewzl`,
                                    "data-framer-name": `Description`,
                                    fonts: [`Inter-Light`],
                                    text: M,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ s(`div`, {
                                    className: `framer-1wqgtpj`,
                                    "data-framer-name": `Meta Wrap`,
                                    children: [
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-hib9yx`,
                                        "data-border": !0,
                                        "data-framer-name": `Category Badge`,
                                        children: /*#__PURE__*/ c(F, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ c(n, {
                                            children: /*#__PURE__*/ c(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `SW50ZXItTGlnaHQ=`,
                                                "--framer-font-size": `14px`,
                                                "--framer-font-weight": `300`,
                                                "--framer-line-height": `1.5em`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                                              },
                                              children: `Content`,
                                            }),
                                          }),
                                          className: `framer-137808m`,
                                          "data-framer-name": `Category`,
                                          fonts: [`Inter-Light`],
                                          text: Ae,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      /*#__PURE__*/ c(F, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ c(n, {
                                          children: /*#__PURE__*/ c(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `SW50ZXItTGlnaHQ=`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `300`,
                                              "--framer-line-height": `1.5em`,
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                            },
                                            children: `Content`,
                                          }),
                                        }),
                                        className: `framer-2jq318`,
                                        "data-framer-name": `Description`,
                                        fonts: [`Inter-Light`],
                                        text: /*#__PURE__*/ c(`time`, {
                                          dateTime: le,
                                          children: Ne,
                                        }),
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ c(L, {
                                breakpoint: q,
                                overrides: {
                                  BdxEY0ddd: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      sizes: `calc(min(${_?.width || `100vw`}, 1000px) - 80px)`,
                                      ...Y(N),
                                    },
                                  },
                                  M_fzwrFkC: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      sizes: `calc(min(${_?.width || `100vw`}, 1000px) - 40px)`,
                                      ...Y(N),
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ c(j, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    sizes: `min(${_?.width || `100vw`}, 1000px)`,
                                    ...Y(N),
                                  },
                                  className: `framer-1gzal23`,
                                  "data-framer-name": `Cover Image`,
                                }),
                              }),
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-h2onum`,
                                "data-framer-name": `Content Wrap`,
                                children: [
                                  /*#__PURE__*/ s(`div`, {
                                    className: `framer-15kzqo1`,
                                    "data-framer-name": `Content Wrap / Top`,
                                    children: [
                                      /*#__PURE__*/ s(`div`, {
                                        className: `framer-29z1th`,
                                        "data-framer-name": `Content Block`,
                                        children: [
                                          Pe !== !1 &&
                                            /*#__PURE__*/ c(F, {
                                              __fromCanvasComponent: !0,
                                              children: P,
                                              className: `framer-cxonyi`,
                                              "data-framer-name": `Content - 1`,
                                              fonts: [`Inter`],
                                              stylesPresetsClassNames: {
                                                a: `framer-styles-preset-1tmbphv`,
                                                h1: `framer-styles-preset-monjet`,
                                                h2: `framer-styles-preset-1yryej1`,
                                                h3: `framer-styles-preset-12q7ivy`,
                                                h4: `framer-styles-preset-usoyrg`,
                                                img: `framer-styles-preset-gja1aj`,
                                                p: `framer-styles-preset-2xtk3q`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          /*#__PURE__*/ c(L, {
                                            breakpoint: q,
                                            overrides: {
                                              BdxEY0ddd: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  sizes: `calc(min(${_?.width || `100vw`}, 1000px) - 80px)`,
                                                  ...Y(I),
                                                },
                                              },
                                              M_fzwrFkC: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  sizes: `calc(min(${_?.width || `100vw`}, 1000px) - 40px)`,
                                                  ...Y(I),
                                                },
                                              },
                                            },
                                            children: /*#__PURE__*/ c(j, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                sizes: `min(${_?.width || `100vw`}, 1000px)`,
                                                ...Y(I),
                                              },
                                              className: `framer-ozuso7`,
                                              "data-framer-name": `Image - 1`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ s(`div`, {
                                        className: `framer-dlxhgm`,
                                        "data-framer-name": `Content Block`,
                                        children: [
                                          Ie !== !1 &&
                                            /*#__PURE__*/ c(F, {
                                              __fromCanvasComponent: !0,
                                              children: R,
                                              className: `framer-11f5q1h`,
                                              "data-framer-name": `Content - 2`,
                                              fonts: [`Inter`],
                                              stylesPresetsClassNames: {
                                                a: `framer-styles-preset-1tmbphv`,
                                                h1: `framer-styles-preset-monjet`,
                                                h2: `framer-styles-preset-1yryej1`,
                                                h3: `framer-styles-preset-12q7ivy`,
                                                h4: `framer-styles-preset-usoyrg`,
                                                p: `framer-styles-preset-2xtk3q`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          /*#__PURE__*/ c(L, {
                                            breakpoint: q,
                                            overrides: {
                                              BdxEY0ddd: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  sizes: `calc(min(${_?.width || `100vw`}, 1000px) - 80px)`,
                                                  ...Y(z),
                                                },
                                              },
                                              M_fzwrFkC: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  sizes: `calc(min(${_?.width || `100vw`}, 1000px) - 40px)`,
                                                  ...Y(z),
                                                },
                                              },
                                            },
                                            children: /*#__PURE__*/ c(j, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                sizes: `min(${_?.width || `100vw`}, 1000px)`,
                                                ...Y(z),
                                              },
                                              className: `framer-1p4b9fr`,
                                              "data-framer-name": `Image - 2`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ s(`div`, {
                                        className: `framer-1uktb8d`,
                                        "data-framer-name": `Content Block`,
                                        children: [
                                          Re !== !1 &&
                                            /*#__PURE__*/ c(F, {
                                              __fromCanvasComponent: !0,
                                              children: B,
                                              className: `framer-1pnnbmy`,
                                              "data-framer-name": `Content - 3`,
                                              fonts: [`Inter`],
                                              stylesPresetsClassNames: {
                                                a: `framer-styles-preset-1tmbphv`,
                                                h1: `framer-styles-preset-monjet`,
                                                h2: `framer-styles-preset-1yryej1`,
                                                h3: `framer-styles-preset-12q7ivy`,
                                                h4: `framer-styles-preset-usoyrg`,
                                                p: `framer-styles-preset-2xtk3q`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          Be !== !1 &&
                                            /*#__PURE__*/ s(`div`, {
                                              className: `framer-13i55bx`,
                                              "data-framer-name": `Image Wrap`,
                                              children: [
                                                /*#__PURE__*/ c(L, {
                                                  breakpoint: q,
                                                  overrides: {
                                                    BdxEY0ddd: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        sizes: `calc(min(${_?.width || `100vw`}, 1000px) - 80px)`,
                                                        ...Y(V),
                                                      },
                                                    },
                                                    M_fzwrFkC: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        sizes: `calc(min(${_?.width || `100vw`}, 1000px) - 40px)`,
                                                        ...Y(V),
                                                      },
                                                    },
                                                  },
                                                  children: /*#__PURE__*/ c(j, {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      sizes: `max(min(${_?.width || `100vw`}, 1000px), 1px)`,
                                                      ...Y(V),
                                                    },
                                                    className: `framer-wpj3ju`,
                                                    "data-framer-name": `Image - 3`,
                                                  }),
                                                }),
                                                He !== !1 &&
                                                  /*#__PURE__*/ c(L, {
                                                    breakpoint: q,
                                                    overrides: {
                                                      BdxEY0ddd: {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          sizes: `calc(min(${_?.width || `100vw`}, 1000px) - 80px)`,
                                                          ...Y(H),
                                                        },
                                                      },
                                                      M_fzwrFkC: {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          sizes: `calc(min(${_?.width || `100vw`}, 1000px) - 40px)`,
                                                          ...Y(H),
                                                        },
                                                      },
                                                    },
                                                    children: /*#__PURE__*/ c(j, {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        sizes: `max(min(${_?.width || `100vw`}, 1000px), 1px)`,
                                                        ...Y(H),
                                                      },
                                                      className: `framer-ydzqc8`,
                                                      "data-framer-name": `Image - 4`,
                                                    }),
                                                  }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      /*#__PURE__*/ s(`div`, {
                                        className: `framer-dypkmf`,
                                        "data-framer-name": `Content Block`,
                                        children: [
                                          We !== !1 &&
                                            /*#__PURE__*/ c(F, {
                                              __fromCanvasComponent: !0,
                                              children: U,
                                              className: `framer-5lr7mr`,
                                              "data-framer-name": `Content - 4`,
                                              fonts: [`Inter`],
                                              stylesPresetsClassNames: {
                                                a: `framer-styles-preset-1tmbphv`,
                                                h1: `framer-styles-preset-monjet`,
                                                h2: `framer-styles-preset-1yryej1`,
                                                h3: `framer-styles-preset-12q7ivy`,
                                                h4: `framer-styles-preset-usoyrg`,
                                                p: `framer-styles-preset-2xtk3q`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          Ge !== !1 &&
                                            /*#__PURE__*/ c(L, {
                                              breakpoint: q,
                                              overrides: {
                                                BdxEY0ddd: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    sizes: `calc(min(${_?.width || `100vw`}, 1000px) - 80px)`,
                                                    ...Y(W),
                                                  },
                                                },
                                                M_fzwrFkC: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    sizes: `calc(min(${_?.width || `100vw`}, 1000px) - 40px)`,
                                                    ...Y(W),
                                                  },
                                                },
                                              },
                                              children: /*#__PURE__*/ c(j, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  sizes: `min(${_?.width || `100vw`}, 1000px)`,
                                                  ...Y(W),
                                                },
                                                className: `framer-1vf5qw8`,
                                                "data-framer-name": `Image - 5`,
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ c(`div`, {
                                    className: `framer-ez7w6s`,
                                    "data-framer-name": `Content Wrap / Bottom`,
                                    children: /*#__PURE__*/ c(ue, {
                                      className: `framer-wcew2z`,
                                      nodeId: `YQMoj2Tbb`,
                                      children: (e) =>
                                        /*#__PURE__*/ s(o, {
                                          children: [
                                            /*#__PURE__*/ s(`div`, {
                                              className: `framer-1i8kg4w`,
                                              "data-framer-name": `Text Wrap`,
                                              children: [
                                                /*#__PURE__*/ c(L, {
                                                  breakpoint: q,
                                                  overrides: {
                                                    M_fzwrFkC: {
                                                      children: /*#__PURE__*/ c(n, {
                                                        children: /*#__PURE__*/ c(`h3`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--font-selector": `R0Y7QW50b25pby1yZWd1bGFy`,
                                                            "--framer-font-family": `"Antonio", "Antonio Placeholder", sans-serif`,
                                                            "--framer-font-size": `24px`,
                                                            "--framer-line-height": `1.3em`,
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255))`,
                                                            "--framer-text-transform": `uppercase`,
                                                          },
                                                          children: `Like what you see? There’s more.`,
                                                        }),
                                                      }),
                                                    },
                                                  },
                                                  children: /*#__PURE__*/ c(F, {
                                                    __fromCanvasComponent: !0,
                                                    children: /*#__PURE__*/ c(n, {
                                                      children: /*#__PURE__*/ c(`h3`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7QW50b25pby1yZWd1bGFy`,
                                                          "--framer-font-family": `"Antonio", "Antonio Placeholder", sans-serif`,
                                                          "--framer-font-size": `32px`,
                                                          "--framer-line-height": `1.3em`,
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255))`,
                                                          "--framer-text-transform": `uppercase`,
                                                        },
                                                        children: `Like what you see? There’s more.`,
                                                      }),
                                                    }),
                                                    className: `framer-dva35b`,
                                                    "data-framer-name": `Description`,
                                                    fonts: [`GF;Antonio-regular`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(F, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ c(n, {
                                                    children: /*#__PURE__*/ c(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `SW50ZXItTGlnaHQ=`,
                                                        "--framer-font-size": `14px`,
                                                        "--framer-font-weight": `300`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255))`,
                                                      },
                                                      children: `Get monthly inspiration, blog updates, and creative process notes — handcrafted for fellow creators.`,
                                                    }),
                                                  }),
                                                  className: `framer-rhavh6`,
                                                  "data-framer-name": `Description`,
                                                  fonts: [`Inter-Light`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            /*#__PURE__*/ s(`div`, {
                                              className: `framer-17ayule`,
                                              "data-framer-name": `Subscribe Button Wrap`,
                                              children: [
                                                /*#__PURE__*/ c(`label`, {
                                                  className: `framer-1s8v0k0`,
                                                  children: /*#__PURE__*/ c(me, {
                                                    className: `framer-t5wunw`,
                                                    inputName: `Email`,
                                                    placeholder: `jane@framer.com`,
                                                    required: !0,
                                                    type: `email`,
                                                  }),
                                                }),
                                                /*#__PURE__*/ c(L, {
                                                  breakpoint: q,
                                                  overrides: {
                                                    BdxEY0ddd: {
                                                      width: `calc(max(min(${_?.width || `100vw`}, 1000px) - 80px, 1px) - 80px)`,
                                                    },
                                                    M_fzwrFkC: {
                                                      width: `calc(max(min(${_?.width || `100vw`}, 1000px) - 40px, 1px) - 60px)`,
                                                    },
                                                  },
                                                  children: /*#__PURE__*/ c(O, {
                                                    height: 50,
                                                    width: `min(max((max(min(${_?.width || `100vw`}, 1000px), 1px) - 110px) / 2, 1px), (max(min(${_?.width || `100vw`}, 1000px), 1px) - 80px) * 0.35)`,
                                                    children: /*#__PURE__*/ c(w, {
                                                      className: `framer-1vt3dcp-container`,
                                                      nodeId: `ePOHK5lPZ`,
                                                      scopeId: `SV7i6KgIh`,
                                                      children: /*#__PURE__*/ c(J, {
                                                        height: `100%`,
                                                        id: `ePOHK5lPZ`,
                                                        layoutId: `ePOHK5lPZ`,
                                                        style: { width: `100%` },
                                                        type: `submit`,
                                                        variant: St(
                                                          e,
                                                          {
                                                            error: `BkuMd8FW9`,
                                                            pending: `SaGivTSL1`,
                                                            success: `sck1kedce`,
                                                          },
                                                          Z(`cQ2kvYGkr`)
                                                        ),
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /*#__PURE__*/ s(`div`, {
                            className: `framer-zozcrt`,
                            "data-framer-name": `Post Wrap`,
                            children: [
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-62q6nn`,
                                "data-framer-name": `Divider`,
                                children: [
                                  /*#__PURE__*/ c(F, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(n, {
                                      children: /*#__PURE__*/ c(`h3`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7QW50b25pby1yZWd1bGFy`,
                                          "--framer-font-family": `"Antonio", "Antonio Placeholder", sans-serif`,
                                          "--framer-font-size": `32px`,
                                          "--framer-line-height": `1.3em`,
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                          "--framer-text-transform": `uppercase`,
                                        },
                                        children: `More to Discover`,
                                      }),
                                    }),
                                    className: `framer-15kpbpt`,
                                    "data-framer-name": `Title`,
                                    fonts: [`GF;Antonio-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(`div`, {
                                    className: `framer-1lkirm`,
                                    "data-framer-name": `Line`,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-421gt0`,
                                children: /*#__PURE__*/ c(de, {
                                  children: /*#__PURE__*/ c(wt, {
                                    pageSize: 2,
                                    query: Q(D),
                                    children: (e, t, n) =>
                                      /*#__PURE__*/ s(o, {
                                        children: [
                                          e?.map(
                                            (
                                              {
                                                id: e,
                                                qA77RzyS1: t,
                                                SG0PXpmii: n,
                                                TCax3X2ch: r,
                                                wWT4jlIQ9: i,
                                                xd_Q4amJC: a,
                                                ZDyO9OD9Q: o,
                                              },
                                              s
                                            ) => (
                                              (n ??= ``),
                                              (i ??= ``),
                                              (r ??= ``),
                                              /*#__PURE__*/ c(
                                                m,
                                                {
                                                  id: `SHOm12BAW-${e}`,
                                                  children: /*#__PURE__*/ c(T.Provider, {
                                                    value: { SG0PXpmii: n },
                                                    children: /*#__PURE__*/ c(ee, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { SG0PXpmii: n },
                                                            webPageId: `SV7i6KgIh`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { SG0PXpmii: n },
                                                            webPageId: `SV7i6KgIh`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { SG0PXpmii: n },
                                                            webPageId: `SV7i6KgIh`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (e) =>
                                                        /*#__PURE__*/ c(L, {
                                                          breakpoint: q,
                                                          overrides: {
                                                            BdxEY0ddd: {
                                                              width: `max((min(${_?.width || `100vw`}, 1000px) - 120px) / 2, 50px)`,
                                                            },
                                                            M_fzwrFkC: {
                                                              width: `calc(min(${_?.width || `100vw`}, 1000px) - 40px)`,
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ c(O, {
                                                            height: 491,
                                                            width: `max((min(${_?.width || `100vw`}, 1000px) - 40px) / 2, 50px)`,
                                                            children: /*#__PURE__*/ c(L, {
                                                              breakpoint: q,
                                                              overrides: {
                                                                BdxEY0ddd: {
                                                                  "data-framer-cursor": void 0,
                                                                },
                                                                M_fzwrFkC: {
                                                                  "data-framer-cursor": void 0,
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ c(w, {
                                                                className: `framer-1ew3yxc-container`,
                                                                "data-framer-cursor": `1bde3zh`,
                                                                nodeId: `bp5cb6PWJ`,
                                                                scopeId: `SV7i6KgIh`,
                                                                children: /*#__PURE__*/ c(L, {
                                                                  breakpoint: q,
                                                                  overrides: {
                                                                    BdxEY0ddd: {
                                                                      PJapEKDdl: e[1],
                                                                      variant: Z(`iCTJAkoKO`),
                                                                    },
                                                                    M_fzwrFkC: {
                                                                      PJapEKDdl: e[2],
                                                                      variant: Z(`d6C7vBEYV`),
                                                                    },
                                                                  },
                                                                  children: /*#__PURE__*/ c(ze, {
                                                                    e_QuhfS_F: Y(t),
                                                                    gokezjqxK: o,
                                                                    height: `100%`,
                                                                    id: `bp5cb6PWJ`,
                                                                    iL1cgq2Ht: Ve.xd_Q4amJC?.(a, h),
                                                                    layoutId: `bp5cb6PWJ`,
                                                                    PJapEKDdl: e[0],
                                                                    style: { width: `100%` },
                                                                    TQYgSSnNw: r,
                                                                    variant: Z(`tR8IcUdoO`),
                                                                    width: `100%`,
                                                                    YyZ63RYdx: i,
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                },
                                                e
                                              )
                                            )
                                          ),
                                          /*#__PURE__*/ c(L, {
                                            breakpoint: q,
                                            overrides: {
                                              M_fzwrFkC: {
                                                width: `calc(min(${_?.width || `100vw`}, 1000px) - 40px)`,
                                              },
                                            },
                                            children: /*#__PURE__*/ c(O, {
                                              height: 48,
                                              children: /*#__PURE__*/ c(w, {
                                                className: `framer-v3gyib-container`,
                                                nodeId: `foOpSzkYA`,
                                                scopeId: `SV7i6KgIh`,
                                                children: /*#__PURE__*/ c(L, {
                                                  breakpoint: q,
                                                  overrides: {
                                                    M_fzwrFkC: { style: { width: `100%` } },
                                                  },
                                                  children: /*#__PURE__*/ c(Le, {
                                                    height: `100%`,
                                                    id: `foOpSzkYA`,
                                                    layoutId: `foOpSzkYA`,
                                                    variant: Ct(
                                                      t,
                                                      {
                                                        disabled: `kzpAWV2zT`,
                                                        loading: `Hs4Rz8sw6`,
                                                      },
                                                      Z(`acmOmCnX4`)
                                                    ),
                                                    width: `100%`,
                                                    Wld3NDzSj: Je({ loadMore: n }),
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
                            ],
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ c(O, {
                      children: /*#__PURE__*/ c(w, {
                        className: `framer-1oscjb5-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: Ee,
                        nodeId: `mzBXy0E0c`,
                        scopeId: `SV7i6KgIh`,
                        children: /*#__PURE__*/ c(ye, {
                          height: `100%`,
                          id: `mzBXy0E0c`,
                          intensity: 10,
                          layoutId: `mzBXy0E0c`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (jt = [
        `.framer-vNocY.framer-1n5kssu, .framer-vNocY .framer-1n5kssu { display: block; }`,
        `.framer-vNocY.framer-bb8acl { align-content: center; align-items: center; background-color: var(--token-4795dafb-4261-43d3-aa0c-b3831681376e, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-vNocY .framer-1yxmu09 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 60px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-vNocY .framer-wmcrxg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 1000px; overflow: visible; padding: 120px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-1do4apx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-11osgkg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-4bq2uw, .framer-vNocY .framer-wvewzl, .framer-vNocY .framer-dva35b { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-vNocY .framer-1wqgtpj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-hib9yx { --border-bottom-width: 1px; --border-color: var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, #6a71df); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 99px; border-bottom-right-radius: 99px; border-top-left-radius: 99px; border-top-right-radius: 99px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 3px 15px 3px 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-vNocY .framer-137808m { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-vNocY .framer-2jq318, .framer-vNocY .framer-15kpbpt { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-vNocY .framer-1gzal23 { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: 600px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-h2onum { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-15kzqo1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-29z1th, .framer-vNocY .framer-dlxhgm, .framer-vNocY .framer-1uktb8d, .framer-vNocY .framer-dypkmf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-cxonyi, .framer-vNocY .framer-5lr7mr { --framer-paragraph-spacing: 32px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-vNocY .framer-ozuso7, .framer-vNocY .framer-1p4b9fr, .framer-vNocY .framer-1vf5qw8 { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: 450px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-11f5q1h, .framer-vNocY .framer-1pnnbmy { --framer-paragraph-spacing: 20px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-vNocY .framer-13i55bx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-wpj3ju, .framer-vNocY .framer-ydzqc8 { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: 1 0 0px; height: 400px; position: relative; width: 1px; }`,
        `.framer-vNocY .framer-ez7w6s { align-content: center; align-items: center; background-color: var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, #6a71df); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 100px; width: 100%; z-index: 1; }`,
        `.framer-vNocY .framer-wcew2z { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 40px; position: relative; width: 1px; }`,
        `.framer-vNocY .framer-1i8kg4w { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; max-width: 65%; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-vNocY .framer-rhavh6 { flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-vNocY .framer-17ayule { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 35%; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-vNocY .framer-1s8v0k0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-t5wunw { --framer-input-background: var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, #ffffff); --framer-input-border-radius-bottom-left: 99px; --framer-input-border-radius-bottom-right: 99px; --framer-input-border-radius-top-left: 99px; --framer-input-border-radius-top-right: 99px; --framer-input-font-color: var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, #303030); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px 20px 12px 20px; --framer-input-placeholder-color: var(--token-7d1fd828-621c-47fc-b270-6f2c2fff9ca2, #8f8f8f); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-1vt3dcp-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-zozcrt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-62q6nn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-1lkirm { background-color: var(--token-7d1fd828-621c-47fc-b270-6f2c2fff9ca2, #8f8f8f); flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-vNocY .framer-421gt0 { display: grid; flex: none; gap: 80px 40px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-1ew3yxc-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-vNocY .framer-v3gyib-container { align-self: start; flex: none; grid-column: span 2; height: auto; justify-self: center; position: relative; width: fit-content; }`,
        `.framer-vNocY .framer-1oscjb5-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...ke,
        ...Ne,
        ...xe,
        ...G,
        ...R,
        ...Te,
        `.framer-vNocY[data-border="true"]::after, .framer-vNocY [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-vNocY.framer-bb8acl { width: 810px; } .framer-vNocY .framer-1yxmu09 { padding: 40px 0px 0px 0px; } .framer-vNocY .framer-wmcrxg { padding: 120px 40px 120px 40px; } .framer-vNocY .framer-1gzal23 { height: 500px; } .framer-vNocY .framer-h2onum { gap: 40px; } .framer-vNocY .framer-ozuso7, .framer-vNocY .framer-1p4b9fr, .framer-vNocY .framer-1vf5qw8 { height: 350px; } .framer-vNocY .framer-13i55bx, .framer-vNocY .framer-wcew2z { flex-direction: column; } .framer-vNocY .framer-wpj3ju, .framer-vNocY .framer-ydzqc8 { flex: none; height: 350px; width: 100%; } .framer-vNocY .framer-1i8kg4w { align-self: unset; flex: none; gap: 10px; height: min-content; justify-content: center; max-width: unset; width: 100%; } .framer-vNocY .framer-rhavh6 { max-width: 500px; } .framer-vNocY .framer-17ayule { flex: none; max-width: unset; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-vNocY.framer-bb8acl { width: 390px; } .framer-vNocY .framer-1yxmu09 { flex-direction: column; padding: 40px 0px 0px 0px; } .framer-vNocY .framer-wmcrxg { padding: 80px 20px 80px 20px; } .framer-vNocY .framer-1do4apx { gap: 80px; } .framer-vNocY .framer-1gzal23 { height: 350px; } .framer-vNocY .framer-h2onum { gap: 40px; } .framer-vNocY .framer-15kzqo1 { gap: 80px; max-width: 100%; } .framer-vNocY .framer-ozuso7, .framer-vNocY .framer-1p4b9fr, .framer-vNocY .framer-1vf5qw8 { height: 200px; } .framer-vNocY .framer-13i55bx { flex-direction: column; } .framer-vNocY .framer-wpj3ju, .framer-vNocY .framer-ydzqc8 { flex: none; height: 200px; width: 100%; } .framer-vNocY .framer-ez7w6s { max-width: 100%; position: relative; top: unset; } .framer-vNocY .framer-wcew2z { flex-direction: column; gap: 20px; padding: 30px; } .framer-vNocY .framer-1i8kg4w { align-self: unset; flex: none; gap: 10px; height: min-content; justify-content: center; max-width: unset; width: 100%; } .framer-vNocY .framer-17ayule { flex: none; max-width: unset; width: 100%; } .framer-vNocY .framer-421gt0 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; } .framer-vNocY .framer-1ew3yxc-container { align-self: unset; } .framer-vNocY .framer-v3gyib-container { align-self: unset; width: 100%; }}`,
      ]),
      ($ = I(At, jt, `framer-vNocY`)),
      ($.displayName = `Blogs`),
      ($.defaultProps = { height: 0, width: 1200 }),
      v(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Antonio`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Antonio`,
                url: `https://fonts.gstatic.com/s/antonio/v22/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVyW9htNY2DwSXlM.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/BkDpl4ghaqvMi1btKFyG2tdbec.woff2`,
                weight: `300`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/zAMK70AQRFSShJgUiaR5IiIhgzk.woff2`,
                weight: `300`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/IETjvc5qzUaRoaruDpPSwCUM8.woff2`,
                weight: `300`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/oLCoaT3ioA0fHdJnWR9W6k7NY.woff2`,
                weight: `300`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/Sj0PCHQSBjFmEp6NBWg6FNaKc.woff2`,
                weight: `300`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/aqiiD4LUKkKzXdjGL5UzHq8bo5w.woff2`,
                weight: `300`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/H4TfENUY1rh8R9UaSD6vngjJP3M.woff2`,
                weight: `300`,
              },
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
              {
                cssFamilyName: `Antonio`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Antonio`,
                url: `https://fonts.gstatic.com/s/antonio/v22/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVxx8RtNY2DwSXlM.woff2`,
                weight: `400`,
              },
            ],
          },
          ...lt,
          ...ut,
          ...dt,
          ...ft,
          ...pt,
          ...x(Ae),
          ...x(Pe),
          ...x(Se),
          ...x(K),
          ...x(B),
          ...x(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = P(() => C.get(Dt(g(t.pathVariables, `SV7i6KgIh`)), n, r).readMaybeAsync(), t);
          return D(
            [
              async () => {
                let [e] = (await i) ?? [];
                return P(() => C.get(Q(e?.wWT4jlIQ9), n, r).preload(), t);
              },
              () => k(J, {}, t),
              async () => {
                let [e] = (await i) ?? [],
                  a = (await P(() => C.get(Q(e?.wWT4jlIQ9), n, r).readMaybeAsync(), t)) ?? [];
                return D(
                  a.flatMap((e) => [() => k(ze, {}, t), () => k(Le, {}, t)]),
                  t
                );
              },
            ],
            t
          );
        },
      }),
      (Mt = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerSV7i6KgIh`,
            slots: [],
            annotations: {
              framerScrollSections: `{"Y6b0HmZtt":{"pattern":":Y6b0HmZtt","name":"blog"}}`,
              framerLayoutTemplateFlowEffect: `true`,
              framerColorSyntax: `true`,
              framerIntrinsicWidth: `1200`,
              framerIntrinsicHeight: `0`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"BdxEY0ddd":{"layout":["fixed","auto"]},"M_fzwrFkC":{"layout":["fixed","auto"]}}}`,
              framerAutoSizeImages: `true`,
              framerDisplayContentsDiv: `false`,
              framerAcceptsLayoutTemplate: `true`,
              framerContractVersion: `1`,
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerResponsiveScreen: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Nt();
export { Mt as __FramerMetadata__, $ as default, ht as queryParamNames };
//# sourceMappingURL=0iKjZppr_qCaqm2xvtzDvfABn15PGjKJPWLvp_a7n0U.DzdaYVB-.mjs.map
