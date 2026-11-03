import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
  I as n,
  M as r,
  N as i,
  T as a,
  c as ee,
  l as o,
  o as s,
  p as te,
  s as c,
  x as l,
} from "./react.guramC8M.mjs";
import { S as u, a as ne, r as re, t as ie } from "./motion.BkENN8JI.mjs";
import {
  B as ae,
  C as oe,
  E as d,
  L as f,
  R as p,
  St as se,
  W as m,
  Z as h,
  _ as ce,
  _t as le,
  a as g,
  b as ue,
  bt as _,
  et as v,
  f as de,
  ft as fe,
  ht as pe,
  i as y,
  j as b,
  k as me,
  lt as he,
  m as ge,
  mt as _e,
  n as ve,
  ot as ye,
  st as be,
  tt as x,
  ut as xe,
  vt as Se,
  w as S,
  wt as Ce,
  x as C,
  xt as we,
  z as w,
} from "./framer.mQNi9T2E.mjs";
import {
  _ as T,
  d as Te,
  f as E,
  g as D,
  h as Ee,
  i as O,
  m as k,
  p as A,
  r as j,
  v as M,
} from "./toplevel-deps.CrcF9UeY.mjs";
import { i as N, r as P } from "./shared-lib.BnN6DsbI.mjs";
import { i as F, n as De, r as Oe, t as ke } from "./ilUlJnLkH.DR4o7BiV.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./NxCe_AOfF.C08H5wkL.mjs";
import { a as Pe, c as Fe, o as I, s as Ie } from "./JLWig38Pv.ClFxyf2Q.mjs";
import { i as Le, n as Re, r as ze, t as Be } from "./ZRloE2uUu.DrAzey9J.mjs";
import { a as L, r as Ve, t as R } from "./vW1JQClGO.HbGkyAHl.mjs";
import { i as He, n as Ue, r as We, t as Ge } from "./djOUw0pzb.BWV5LaTY.mjs";
import { i as Ke, n as qe, r as Je, t as Ye } from "./TTqvVnbYq.mRW82p5T.mjs";
import { n as Xe, t as z } from "./IcEbHhKzr.D4hIlWtt.mjs";
import { n as Ze, t as B } from "./R5Uj4EVTC.lsbn4xQe.mjs";
import { a as Qe, i as V } from "./fOQOmLscg.BmeqRF7t.mjs";
var H, U, $e, W, et, tt, nt, rt, it, G, at, K, q, J, Y, X, ot, Z, st, Q, ct, lt, ut, dt, $, ft;
function pt() {
  return (pt = e(() => {
    (c(),
      m(),
      ie(),
      t(),
      N(),
      Xe(),
      Ze(),
      O(),
      L(),
      He(),
      M(),
      F(),
      k(),
      Ae(),
      Ke(),
      Fe(),
      Le(),
      V(),
      (H = f(z)),
      (U = f(B)),
      ($e = f(P)),
      (W = f(j)),
      (et = {
        Dt1TMf4cX: `(min-width: 1200px)`,
        iR0wNfE7U: `(max-width: 809.98px)`,
        LwELRSlJZ: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (tt = () => typeof document < `u`),
      (nt = []),
      (rt = `framer-1ghYk`),
      (it = {
        Dt1TMf4cX: `framer-v-1khqozz`,
        iR0wNfE7U: `framer-v-e4tdzq`,
        LwELRSlJZ: `framer-v-14ov7fe`,
      }),
      (G = void 0),
      (at = (e, t, n) => (e && t ? `position` : n)),
      (K = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Y = (e, t, n) =>
        e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
      (X = (e) => ({
        from: { alias: `HVqwqsCpo`, data: R, type: `Collection` },
        select: [
          { collection: `HVqwqsCpo`, name: `FCspUx7gv`, type: `Identifier` },
          { collection: `HVqwqsCpo`, name: `AtZcGqORN`, type: `Identifier` },
          { collection: `HVqwqsCpo`, name: `gPcsfhEl_`, type: `Identifier` },
          { collection: `HVqwqsCpo`, name: `txuc2BYLR`, type: `Identifier` },
          { collection: `HVqwqsCpo`, name: `id`, type: `Identifier` },
        ],
        where: {
          operator: `not`,
          type: `UnaryOperation`,
          value: {
            left: { collection: `HVqwqsCpo`, name: `id`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: e },
            type: `BinaryOperation`,
          },
        },
      })),
      (ot = ({ query: e, pageSize: t, children: n }) => {
        let { paginatedQuery: r, paginationInfo: i, loadMore: a } = pe(e, t, `HVqwqsCpo`);
        return n(_(r), i, a);
      }),
      (Z = { Desktop: `Dt1TMf4cX`, Phone: `iR0wNfE7U`, Tablet: `LwELRSlJZ` }),
      (st = ({ value: e }) =>
        _e()
          ? null
          : /*#__PURE__*/ s(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Q = (e) => ({
        from: { alias: `fOQOmLscg`, data: R, type: `Collection` },
        select: [
          { collection: `fOQOmLscg`, name: `txuc2BYLR`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `gPcsfhEl_`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `Cgfgqj7KU`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `J8sDnFjS0`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `aaJdfYesh`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `dMzbnq2mw`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `AtZcGqORN`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `BDYn_1i4J`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `GUwUlkOlg`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `l_cB_OdHP`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `LCqLUxlhK`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `lWBIMPM8u`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `Kdq3qCWEi`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `VlrhhnzCF`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `XlJpyojfY`, type: `Identifier` },
          { collection: `fOQOmLscg`, name: `id`, type: `Identifier` },
        ],
        where: e,
      })),
      (ct = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Z[r.variant] ?? r.variant ?? `Dt1TMf4cX`,
      })),
      (lt = {
        alignment: `center`,
        component: j,
        offset: { x: 20, y: 20 },
        placement: `right`,
        transition: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` },
        variant: `aXN7J563X`,
      }),
      (ut = /*#__PURE__*/ te(function (e, t) {
        let te = l(null),
          c = t ?? te;
        a();
        let { activeLocale: ie, contentLocale: d, setLocale: f } = le(),
          p = be(),
          m = he()?.pathVariables,
          [h] = _(Q(ae(m, `fOQOmLscg`)));
        if (!h) throw new ce(`No data matches path variables: ${JSON.stringify(m)}`);
        let {
            style: v,
            className: pe,
            layoutId: b,
            variant: _e,
            txuc2BYLR: x = h.txuc2BYLR ?? ``,
            gPcsfhEl_: Ce = h.gPcsfhEl_,
            Cgfgqj7KU: T = h.Cgfgqj7KU ?? ``,
            J8sDnFjS0: E = h.J8sDnFjS0 ?? ``,
            aaJdfYesh: D = h.aaJdfYesh ?? ``,
            dMzbnq2mw: O = h.dMzbnq2mw ?? ``,
            AtZcGqORN: k = h.AtZcGqORN,
            BDYn_1i4J: A = h.BDYn_1i4J ?? ``,
            GUwUlkOlg: j = h.GUwUlkOlg ?? ``,
            l_cB_OdHP: M = h.l_cB_OdHP ?? ``,
            LCqLUxlhK: N = h.LCqLUxlhK ?? ``,
            lWBIMPM8u: F = h.lWBIMPM8u ?? ``,
            Kdq3qCWEi: De = h.Kdq3qCWEi ?? ``,
            VlrhhnzCF: Oe = h.VlrhhnzCF ?? ``,
            XlJpyojfY: Ae = h.XlJpyojfY ?? ``,
            id: je = h.id,
            ...Me
          } = ct(e),
          Fe = i(() => Qe({ txuc2BYLR: x }, d), [x, d]);
        Se(Fe);
        let [I, Ie] = fe(_e, et, !1),
          Le = me(rt, Te, Ge, Pe, Ee, Ne, Ye, ke, Be),
          Re = r(de)?.isLayoutTemplate,
          ze = !!r(ne)?.transition?.layout,
          L = at(Re, ze),
          R = we(`hJaoMbn0r`),
          He = l(null),
          Ue = Ve.gPcsfhEl_?.(Ce, d),
          We = K(T),
          Ke = K(E),
          qe = K(G),
          Je = K(D),
          Xe = K(A),
          Ze = K(M),
          V = K(F),
          H = () => !tt() || I === `LwELRSlJZ`;
        se();
        let { activeVariantCallback: U, delay: $e } = ye(void 0),
          W = ({ loadMore: e }) =>
            U(async (...t) => {
              e();
            });
        return (
          xe({ "1bde3zh": lt }),
          /*#__PURE__*/ s(de.Provider, {
            value: {
              activeVariantId: I,
              humanReadableVariantMap: Z,
              primaryVariantId: `Dt1TMf4cX`,
              variantClassNames: it,
            },
            children: /*#__PURE__*/ o(re, {
              id: b ?? `fOQOmLscg`,
              children: [
                /*#__PURE__*/ s(st, {
                  value: `html body { background: var(--token-4795dafb-4261-43d3-aa0c-b3831681376e, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ o(u.div, {
                  ...Me,
                  className: me(Le, `framer-1khqozz`, pe),
                  ref: c,
                  style: { ...v },
                  children: [
                    /*#__PURE__*/ o(u.section, {
                      className: `framer-8sfk0v`,
                      "data-framer-name": `Project Page`,
                      id: R,
                      layout: L,
                      ref: He,
                      children: [
                        /*#__PURE__*/ s(`div`, {
                          className: `framer-cteomf`,
                          "data-framer-name": `Container`,
                          children: /*#__PURE__*/ o(`div`, {
                            className: `framer-xd66zl`,
                            "data-framer-name": `Project Wrap`,
                            children: [
                              /*#__PURE__*/ o(`div`, {
                                className: `framer-1hzlb29`,
                                "data-framer-name": `Project Info`,
                                children: [
                                  /*#__PURE__*/ s(`div`, {
                                    className: `framer-1v2wpp3`,
                                    "data-border": !0,
                                    "data-framer-name": `Category Badge`,
                                    children: /*#__PURE__*/ s(S, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ s(n, {
                                        children: /*#__PURE__*/ s(`p`, {
                                          className: `framer-styles-preset-a6ucvx`,
                                          "data-styles-preset": `JLWig38Pv`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                                          },
                                          children: `Branding`,
                                        }),
                                      }),
                                      className: `framer-if68a2`,
                                      "data-framer-name": `Category`,
                                      fonts: [`Inter`],
                                      text: Ue,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  /*#__PURE__*/ o(`div`, {
                                    className: `framer-bg2ou9`,
                                    "data-framer-name": `Text Wrap`,
                                    children: [
                                      /*#__PURE__*/ s(S, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ s(n, {
                                          children: /*#__PURE__*/ s(`h1`, {
                                            className: `framer-styles-preset-monjet`,
                                            "data-styles-preset": `djOUw0pzb`,
                                            style: {
                                              "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                            },
                                            children: `Black Geometric Prisms`,
                                          }),
                                        }),
                                        className: `framer-1v95j2s`,
                                        fonts: [`Inter`],
                                        text: x,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ s(S, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ s(n, {
                                          children: /*#__PURE__*/ s(`p`, {
                                            className: `framer-styles-preset-17cdd8a`,
                                            "data-styles-preset": `UezruUh9E`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                            },
                                            children: `A collection of sharp, angular black prisms floating against a gradient dark background, showcasing a modern and sophisticated approach to digital 3D geometric composition.`,
                                          }),
                                        }),
                                        className: `framer-g51fm7`,
                                        fonts: [`Inter`],
                                        text: O,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ o(`div`, {
                                    className: `framer-9vchyd`,
                                    "data-framer-name": `Project Meta Grid`,
                                    children: [
                                      We !== !1 &&
                                        /*#__PURE__*/ o(`div`, {
                                          className: `framer-ucq79y`,
                                          "data-framer-name": `Year`,
                                          children: [
                                            /*#__PURE__*/ s(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ s(n, {
                                                children: /*#__PURE__*/ s(`p`, {
                                                  className: `framer-styles-preset-17cdd8a`,
                                                  "data-styles-preset": `UezruUh9E`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                  },
                                                  children: `Year : `,
                                                }),
                                              }),
                                              className: `framer-dkapi6`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ s(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ s(n, {
                                                children: /*#__PURE__*/ s(`p`, {
                                                  className: `framer-styles-preset-6nl8p7`,
                                                  "data-styles-preset": `EBQDvGnCv`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                                                  },
                                                  children: `2025`,
                                                }),
                                              }),
                                              className: `framer-10ht2bi`,
                                              fonts: [`Inter`],
                                              text: T,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      Ke !== !1 &&
                                        /*#__PURE__*/ o(`div`, {
                                          className: `framer-qvtad8`,
                                          "data-framer-name": `Industry`,
                                          children: [
                                            /*#__PURE__*/ s(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ s(n, {
                                                children: /*#__PURE__*/ s(`p`, {
                                                  className: `framer-styles-preset-17cdd8a`,
                                                  "data-styles-preset": `UezruUh9E`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                  },
                                                  children: `Industry : `,
                                                }),
                                              }),
                                              className: `framer-hd27vn`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ s(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ s(n, {
                                                children: /*#__PURE__*/ s(`p`, {
                                                  className: `framer-styles-preset-6nl8p7`,
                                                  "data-styles-preset": `EBQDvGnCv`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                                                  },
                                                  children: `Tech`,
                                                }),
                                              }),
                                              className: `framer-soz8c7`,
                                              fonts: [`Inter`],
                                              text: E,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      qe !== !1 &&
                                        /*#__PURE__*/ o(`div`, {
                                          className: `framer-bnybur`,
                                          "data-framer-name": `Client`,
                                          children: [
                                            /*#__PURE__*/ s(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ s(n, {
                                                children: /*#__PURE__*/ s(`p`, {
                                                  className: `framer-styles-preset-17cdd8a`,
                                                  "data-styles-preset": `UezruUh9E`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                  },
                                                  children: `Client : `,
                                                }),
                                              }),
                                              className: `framer-zsr618`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ s(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ s(n, {
                                                children: /*#__PURE__*/ s(`p`, {
                                                  className: `framer-styles-preset-6nl8p7`,
                                                  "data-styles-preset": `EBQDvGnCv`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                                                  },
                                                  children: `Studio Prism`,
                                                }),
                                              }),
                                              className: `framer-ke9duc`,
                                              fonts: [`Inter`],
                                              text: G,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      Je !== !1 &&
                                        /*#__PURE__*/ o(`div`, {
                                          className: `framer-1vw394m`,
                                          "data-framer-name": `Project Duration`,
                                          children: [
                                            /*#__PURE__*/ s(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ s(n, {
                                                children: /*#__PURE__*/ s(`p`, {
                                                  className: `framer-styles-preset-17cdd8a`,
                                                  "data-styles-preset": `UezruUh9E`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                  },
                                                  children: `Project Duration : `,
                                                }),
                                              }),
                                              className: `framer-16n088f`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ s(S, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ s(n, {
                                                children: /*#__PURE__*/ s(`p`, {
                                                  className: `framer-styles-preset-6nl8p7`,
                                                  "data-styles-preset": `EBQDvGnCv`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                                                  },
                                                  children: `4 weeks`,
                                                }),
                                              }),
                                              className: `framer-2og4je`,
                                              fonts: [`Inter`],
                                              text: D,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ o(`div`, {
                                className: `framer-gft8cu`,
                                "data-framer-name": `Project Content`,
                                children: [
                                  /*#__PURE__*/ s(C, {
                                    breakpoint: I,
                                    overrides: {
                                      iR0wNfE7U: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: w((p?.y || 0) + 1523.2),
                                          pixelHeight: 715,
                                          pixelWidth: 1200,
                                          sizes: `min(max(min(${p?.width || `100vw`}, 1000px) - 40px, 1px), 1200px)`,
                                          ...q(k),
                                        },
                                      },
                                      LwELRSlJZ: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: w((p?.y || 0) + 1461.2),
                                          pixelHeight: 715,
                                          pixelWidth: 1200,
                                          sizes: `min(max(min(${p?.width || `100vw`}, 1000px) - 80px, 1px), 1200px)`,
                                          ...q(k),
                                        },
                                      },
                                    },
                                    children: /*#__PURE__*/ s(ge, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: w((p?.y || 0) + 1481.2),
                                        pixelHeight: 715,
                                        pixelWidth: 1200,
                                        sizes: `min(max(min(${p?.width || `100vw`}, 1000px), 1px), 1200px)`,
                                        ...q(k),
                                      },
                                      className: `framer-x2aubg`,
                                      "data-framer-name": `Main Cover Image`,
                                    }),
                                  }),
                                  Xe !== !1 &&
                                    /*#__PURE__*/ s(`div`, {
                                      className: `framer-yug2gv`,
                                      "data-framer-name": `Content - 1`,
                                      children: /*#__PURE__*/ o(`div`, {
                                        className: `framer-1gfqlny`,
                                        "data-framer-name": `Text Wrap`,
                                        children: [
                                          /*#__PURE__*/ s(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ s(n, {
                                              children: /*#__PURE__*/ s(`h3`, {
                                                className: `framer-styles-preset-12q7ivy`,
                                                "data-styles-preset": `NxCe_AOfF`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                },
                                                children: `Problem :`,
                                              }),
                                            }),
                                            className: `framer-18anff1`,
                                            fonts: [`Inter`],
                                            text: A,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ s(S, {
                                            __fromCanvasComponent: !0,
                                            children: j,
                                            className: `framer-1vhbqme`,
                                            fonts: [`Inter`],
                                            stylesPresetsClassNames: {
                                              a: `framer-styles-preset-1tmbphv`,
                                              h1: `framer-styles-preset-monjet`,
                                              h2: `framer-styles-preset-1yryej1`,
                                              h3: `framer-styles-preset-12q7ivy`,
                                              h4: `framer-styles-preset-usoyrg`,
                                              img: `framer-styles-preset-gja1aj`,
                                              p: `framer-styles-preset-17cdd8a`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    }),
                                  Ze !== !1 &&
                                    /*#__PURE__*/ s(`div`, {
                                      className: `framer-wq639z`,
                                      "data-framer-name": `Content - 2`,
                                      children: /*#__PURE__*/ o(`div`, {
                                        className: `framer-sn9jlo`,
                                        "data-framer-name": `Text Wrap`,
                                        children: [
                                          /*#__PURE__*/ s(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ s(n, {
                                              children: /*#__PURE__*/ s(`h3`, {
                                                className: `framer-styles-preset-12q7ivy`,
                                                "data-styles-preset": `NxCe_AOfF`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                },
                                                children: `Solution :`,
                                              }),
                                            }),
                                            className: `framer-1n8nzfo`,
                                            fonts: [`Inter`],
                                            text: M,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ s(S, {
                                            __fromCanvasComponent: !0,
                                            children: N,
                                            className: `framer-1ie159x`,
                                            fonts: [`Inter`],
                                            stylesPresetsClassNames: {
                                              a: `framer-styles-preset-1tmbphv`,
                                              h1: `framer-styles-preset-monjet`,
                                              h2: `framer-styles-preset-1yryej1`,
                                              h3: `framer-styles-preset-12q7ivy`,
                                              h4: `framer-styles-preset-usoyrg`,
                                              img: `framer-styles-preset-gja1aj`,
                                              p: `framer-styles-preset-17cdd8a`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    }),
                                  V !== !1 &&
                                    /*#__PURE__*/ s(`div`, {
                                      className: `framer-462qb7`,
                                      "data-framer-name": `Content - 3`,
                                      children: /*#__PURE__*/ o(`div`, {
                                        className: `framer-1tkusgt`,
                                        "data-framer-name": `Text Wrap`,
                                        children: [
                                          /*#__PURE__*/ s(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ s(n, {
                                              children: /*#__PURE__*/ s(`h3`, {
                                                className: `framer-styles-preset-12q7ivy`,
                                                "data-styles-preset": `NxCe_AOfF`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                },
                                                children: `Challenge :`,
                                              }),
                                            }),
                                            className: `framer-r1zyi8`,
                                            fonts: [`Inter`],
                                            text: F,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ s(S, {
                                            __fromCanvasComponent: !0,
                                            children: De,
                                            className: `framer-qvgxh8`,
                                            fonts: [`Inter`],
                                            stylesPresetsClassNames: {
                                              a: `framer-styles-preset-1tmbphv`,
                                              h1: `framer-styles-preset-monjet`,
                                              h2: `framer-styles-preset-1yryej1`,
                                              h3: `framer-styles-preset-12q7ivy`,
                                              h4: `framer-styles-preset-usoyrg`,
                                              img: `framer-styles-preset-gja1aj`,
                                              p: `framer-styles-preset-17cdd8a`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    }),
                                  V !== !1 &&
                                    /*#__PURE__*/ s(`div`, {
                                      className: `framer-18ipohh`,
                                      "data-framer-name": `Content - 4`,
                                      children: /*#__PURE__*/ o(`div`, {
                                        className: `framer-3vw5q8`,
                                        "data-framer-name": `Text Wrap`,
                                        children: [
                                          /*#__PURE__*/ s(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ s(n, {
                                              children: /*#__PURE__*/ s(`h3`, {
                                                className: `framer-styles-preset-12q7ivy`,
                                                "data-styles-preset": `NxCe_AOfF`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                                },
                                                children: `Summary :`,
                                              }),
                                            }),
                                            className: `framer-da6i2l`,
                                            fonts: [`Inter`],
                                            text: Oe,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ s(S, {
                                            __fromCanvasComponent: !0,
                                            children: Ae,
                                            className: `framer-9xrpb7`,
                                            fonts: [`Inter`],
                                            stylesPresetsClassNames: {
                                              a: `framer-styles-preset-1tmbphv`,
                                              h1: `framer-styles-preset-monjet`,
                                              h2: `framer-styles-preset-1yryej1`,
                                              h3: `framer-styles-preset-12q7ivy`,
                                              h4: `framer-styles-preset-usoyrg`,
                                              img: `framer-styles-preset-gja1aj`,
                                              p: `framer-styles-preset-17cdd8a`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                              H() &&
                                /*#__PURE__*/ s(S, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ s(n, {
                                    children: /*#__PURE__*/ s(`p`, { children: `my` }),
                                  }),
                                  className: `framer-2sc3fn hidden-1khqozz hidden-e4tdzq`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ s(`div`, {
                          className: `framer-1yl3b4c`,
                          "data-framer-name": `Container`,
                          children: /*#__PURE__*/ o(`div`, {
                            className: `framer-wwqymz`,
                            "data-framer-name": `Projects Wrap`,
                            children: [
                              /*#__PURE__*/ o(`div`, {
                                className: `framer-138ntut`,
                                "data-framer-name": `Divider`,
                                children: [
                                  /*#__PURE__*/ s(S, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ s(n, {
                                      children: /*#__PURE__*/ s(`h2`, {
                                        className: `framer-styles-preset-1yryej1`,
                                        "data-styles-preset": `TTqvVnbYq`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                        },
                                        children: `More Projects`,
                                      }),
                                    }),
                                    className: `framer-jv2mmi`,
                                    "data-framer-name": `Title`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ s(`div`, {
                                    className: `framer-vxh2lk`,
                                    "data-framer-name": `Line`,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-5y67f2`,
                                children: /*#__PURE__*/ s(ve, {
                                  children: /*#__PURE__*/ s(ot, {
                                    pageSize: 6,
                                    query: X(je),
                                    children: (e, t, n) =>
                                      /*#__PURE__*/ o(ee, {
                                        children: [
                                          e?.map(
                                            (
                                              {
                                                AtZcGqORN: e,
                                                FCspUx7gv: t,
                                                gPcsfhEl_: n,
                                                id: r,
                                                txuc2BYLR: i,
                                              },
                                              a
                                            ) => (
                                              (t ??= ``),
                                              (i ??= ``),
                                              /*#__PURE__*/ s(
                                                re,
                                                {
                                                  id: `HVqwqsCpo-${r}`,
                                                  children: /*#__PURE__*/ s(ue.Provider, {
                                                    value: { FCspUx7gv: t },
                                                    children: /*#__PURE__*/ s(oe, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { FCspUx7gv: t },
                                                            webPageId: `fOQOmLscg`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { FCspUx7gv: t },
                                                            webPageId: `fOQOmLscg`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { FCspUx7gv: t },
                                                            webPageId: `fOQOmLscg`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (t) =>
                                                        /*#__PURE__*/ s(C, {
                                                          breakpoint: I,
                                                          overrides: {
                                                            iR0wNfE7U: {
                                                              width: `max(min(${p?.width || `100vw`}, 1000px) - 40px, 1px)`,
                                                              y: (p?.y || 0) + 2546.4,
                                                            },
                                                            LwELRSlJZ: {
                                                              width: `max((max(min(${p?.width || `100vw`}, 1000px) - 80px, 1px) - 40px) / 2, 50px)`,
                                                              y: (p?.y || 0) + 2970.4,
                                                            },
                                                          },
                                                          children: /*#__PURE__*/ s(y, {
                                                            height: 490,
                                                            width: `max((max(min(${p?.width || `100vw`}, 1000px), 1px) - 40px) / 2, 50px)`,
                                                            y: (p?.y || 0) + 2874.4,
                                                            children: /*#__PURE__*/ s(C, {
                                                              breakpoint: I,
                                                              overrides: {
                                                                iR0wNfE7U: {
                                                                  "data-framer-cursor": void 0,
                                                                },
                                                                LwELRSlJZ: {
                                                                  "data-framer-cursor": void 0,
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ s(g, {
                                                                className: `framer-1bkno3o-container`,
                                                                "data-framer-cursor": `1bde3zh`,
                                                                nodeId: `JO7FxJI2M`,
                                                                scopeId: `fOQOmLscg`,
                                                                children: /*#__PURE__*/ s(C, {
                                                                  breakpoint: I,
                                                                  overrides: {
                                                                    iR0wNfE7U: {
                                                                      k4eXt2vC2: t[2],
                                                                      variant: J(`aY1MF0Kit`),
                                                                    },
                                                                    LwELRSlJZ: {
                                                                      k4eXt2vC2: t[1],
                                                                      variant: J(`wf2bJ0Rkt`),
                                                                    },
                                                                  },
                                                                  children: /*#__PURE__*/ s(z, {
                                                                    FumyGvkff: q(e),
                                                                    gVfhhB2xJ: `Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve.`,
                                                                    height: `100%`,
                                                                    id: `JO7FxJI2M`,
                                                                    k4eXt2vC2: t[0],
                                                                    kvs4o1nXL: i,
                                                                    layoutId: `JO7FxJI2M`,
                                                                    style: { width: `100%` },
                                                                    uX_zd3BzO: Ve.gPcsfhEl_?.(n, d),
                                                                    variant: J(`Nm23U4KzB`),
                                                                    width: `100%`,
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                },
                                                r
                                              )
                                            )
                                          ),
                                          /*#__PURE__*/ s(C, {
                                            breakpoint: I,
                                            overrides: {
                                              iR0wNfE7U: {
                                                width: `max(min(${p?.width || `100vw`}, 1000px) - 40px, 1px)`,
                                                y: (p?.y || 0) + 3116.4,
                                              },
                                              LwELRSlJZ: { y: (p?.y || 0) + 3540.4 },
                                            },
                                            children: /*#__PURE__*/ s(y, {
                                              height: 48,
                                              y: (p?.y || 0) + 3444.4,
                                              children: /*#__PURE__*/ s(g, {
                                                className: `framer-1g96y2m-container`,
                                                nodeId: `MOj8m7oj2`,
                                                scopeId: `fOQOmLscg`,
                                                children: /*#__PURE__*/ s(C, {
                                                  breakpoint: I,
                                                  overrides: {
                                                    iR0wNfE7U: { style: { width: `100%` } },
                                                  },
                                                  children: /*#__PURE__*/ s(B, {
                                                    height: `100%`,
                                                    id: `MOj8m7oj2`,
                                                    layoutId: `MOj8m7oj2`,
                                                    variant: Y(
                                                      t,
                                                      {
                                                        disabled: `kzpAWV2zT`,
                                                        loading: `Hs4Rz8sw6`,
                                                      },
                                                      J(`acmOmCnX4`)
                                                    ),
                                                    width: `100%`,
                                                    Wld3NDzSj: W({ loadMore: n }),
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
                        }),
                      ],
                    }),
                    /*#__PURE__*/ s(y, {
                      children: /*#__PURE__*/ s(g, {
                        className: `framer-1ajsr4v-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: L,
                        nodeId: `zDYoaTvED`,
                        scopeId: `fOQOmLscg`,
                        children: /*#__PURE__*/ s(P, {
                          height: `100%`,
                          id: `zDYoaTvED`,
                          intensity: 10,
                          layoutId: `zDYoaTvED`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (dt = [
        `.framer-1ghYk.framer-3pw6w8, .framer-1ghYk .framer-3pw6w8 { display: block; }`,
        `.framer-1ghYk.framer-1khqozz { align-content: center; align-items: center; background-color: var(--token-4795dafb-4261-43d3-aa0c-b3831681376e, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-1ghYk .framer-8sfk0v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 60px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-1ghYk .framer-cteomf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 120px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-xd66zl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-1ghYk .framer-1hzlb29 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-1v2wpp3 { --border-bottom-width: 1px; --border-color: var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, #6a71df); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 99px; border-bottom-right-radius: 99px; border-top-left-radius: 99px; border-top-right-radius: 99px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 3px 15px 3px 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-1ghYk .framer-if68a2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-1ghYk .framer-bg2ou9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-1v95j2s, .framer-1ghYk .framer-g51fm7, .framer-1ghYk .framer-dkapi6, .framer-1ghYk .framer-10ht2bi, .framer-1ghYk .framer-hd27vn, .framer-1ghYk .framer-soz8c7, .framer-1ghYk .framer-zsr618, .framer-1ghYk .framer-ke9duc, .framer-1ghYk .framer-16n088f, .framer-1ghYk .framer-2og4je, .framer-1ghYk .framer-18anff1, .framer-1ghYk .framer-1vhbqme, .framer-1ghYk .framer-1n8nzfo, .framer-1ghYk .framer-1ie159x, .framer-1ghYk .framer-r1zyi8, .framer-1ghYk .framer-qvgxh8, .framer-1ghYk .framer-da6i2l, .framer-1ghYk .framer-9xrpb7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-1ghYk .framer-9vchyd { display: grid; flex: none; gap: 10px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-ucq79y, .framer-1ghYk .framer-qvtad8, .framer-1ghYk .framer-bnybur, .framer-1ghYk .framer-1vw394m { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-gft8cu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-x2aubg { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: 600px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-1ghYk .framer-yug2gv, .framer-1ghYk .framer-wq639z, .framer-1ghYk .framer-18ipohh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-1gfqlny, .framer-1ghYk .framer-sn9jlo, .framer-1ghYk .framer-1tkusgt, .framer-1ghYk .framer-3vw5q8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-462qb7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-2sc3fn { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-1ghYk .framer-1yl3b4c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 0px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-wwqymz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-1ghYk .framer-138ntut { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-jv2mmi { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-1ghYk .framer-vxh2lk { background-color: var(--token-7d1fd828-621c-47fc-b270-6f2c2fff9ca2, #8f8f8f); flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-1ghYk .framer-5y67f2 { display: grid; flex: none; gap: 80px 40px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-1bkno3o-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-1ghYk .framer-1g96y2m-container { align-self: start; flex: none; grid-column: span 2; height: auto; justify-self: center; position: relative; width: fit-content; }`,
        `.framer-1ghYk .framer-1ajsr4v-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...E,
        ...Ue,
        ...I,
        ...D,
        ...je,
        ...qe,
        ...De,
        ...Re,
        `.framer-1ghYk[data-border="true"]::after, .framer-1ghYk [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-1ghYk.framer-1khqozz { width: 810px; } .framer-1ghYk .framer-8sfk0v { padding: 40px 0px 0px 0px; } .framer-1ghYk .framer-cteomf { padding: 120px 40px 120px 40px; } .framer-1ghYk .framer-x2aubg { height: 500px; } .framer-1ghYk .framer-1yl3b4c { padding: 0px 40px 120px 40px; }}`,
        `@media (max-width: 809.98px) { .framer-1ghYk.framer-1khqozz { width: 390px; } .framer-1ghYk .framer-8sfk0v { padding: 40px 0px 0px 0px; } .framer-1ghYk .framer-cteomf { padding: 80px 20px 80px 20px; } .framer-1ghYk .framer-xd66zl { gap: 40px; } .framer-1ghYk .framer-9vchyd { grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); } .framer-1ghYk .framer-gft8cu { gap: 80px; } .framer-1ghYk .framer-x2aubg { height: 350px; } .framer-1ghYk .framer-1yl3b4c { padding: 0px 20px 80px 20px; } .framer-1ghYk .framer-5y67f2 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; } .framer-1ghYk .framer-1bkno3o-container { align-self: unset; } .framer-1ghYk .framer-1g96y2m-container { align-self: unset; width: 100%; }}`,
      ]),
      ($ = Ce(ut, dt, `framer-1ghYk`)),
      ($.displayName = `Page`),
      ($.defaultProps = { height: 4939.8, width: 1200 }),
      d(
        $,
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
          ...H,
          ...U,
          ...$e,
          ...W,
          ...p(A),
          ...p(We),
          ...p(Ie),
          ...p(T),
          ...p(Me),
          ...p(Je),
          ...p(Oe),
          ...p(ze),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = x(() => h.get(Q(ae(t.pathVariables, `fOQOmLscg`)), n, r).readMaybeAsync(), t);
          return v(
            [
              async () => {
                let [e] = (await i) ?? [];
                return x(() => h.get(X(e?.id), n, r).preload(), t);
              },
              async () => {
                let [e] = (await i) ?? [],
                  a = (await x(() => h.get(X(e?.id), n, r).readMaybeAsync(), t)) ?? [];
                return v(
                  a.flatMap((e) => [() => b(z, {}, t), () => b(B, {}, t)]),
                  t
                );
              },
            ],
            t
          );
        },
      }),
      (ft = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerfOQOmLscg`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerIntrinsicWidth: `1200`,
              framerAcceptsLayoutTemplate: `true`,
              framerColorSyntax: `true`,
              framerImmutableVariables: `true`,
              framerScrollSections: `{"hJaoMbn0r":{"pattern":":hJaoMbn0r","name":"process"}}`,
              framerResponsiveScreen: `true`,
              framerAutoSizeImages: `true`,
              framerIntrinsicHeight: `4939.8`,
              framerLayoutTemplateFlowEffect: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"LwELRSlJZ":{"layout":["fixed","auto"]},"iR0wNfE7U":{"layout":["fixed","auto"]}}}`,
              framerDisplayContentsDiv: `false`,
              framerComponentViewportWidth: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
pt();
export { ft as __FramerMetadata__, $ as default, nt as queryParamNames };
//# sourceMappingURL=taxsAPSI5CaDAeR6XVOV1LcbJtRxsOeQuynCHPFmrOA.DLv9_ffb.mjs.map
