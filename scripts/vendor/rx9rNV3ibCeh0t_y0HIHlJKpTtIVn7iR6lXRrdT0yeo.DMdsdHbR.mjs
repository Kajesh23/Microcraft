import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
  I as n,
  P as r,
  T as ee,
  b as te,
  l as i,
  o as a,
  p as o,
  s,
  x as c,
} from "./react.guramC8M.mjs";
import { S as l, r as ne, t as u } from "./motion.BkENN8JI.mjs";
import {
  C as re,
  E as d,
  L as f,
  R as p,
  St as ie,
  W as m,
  _t as ae,
  a as h,
  f as g,
  ft as oe,
  i as _,
  k as v,
  m as y,
  mt as b,
  st as x,
  ut as se,
  w as S,
  wt as C,
  x as w,
  xt as ce,
  z as T,
} from "./framer.mQNi9T2E.mjs";
import {
  A as E,
  d as D,
  f as O,
  i as k,
  k as A,
  m as j,
  p as M,
  r as N,
} from "./toplevel-deps.CrcF9UeY.mjs";
import { i as P, r as F } from "./shared-lib.BnN6DsbI.mjs";
import { i as le, n as ue, r as de, t as I } from "./djOUw0pzb.BWV5LaTY.mjs";
import { n as L, r as R } from "./qcDDX8i1m.iJrDj8mF.mjs";
var z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (s(),
      m(),
      u(),
      t(),
      P(),
      E(),
      k(),
      le(),
      j(),
      L(),
      (z = f(A)),
      (B = f(F)),
      (V = f(N)),
      (H = {
        GcibH95gb: `(max-width: 809px)`,
        UBUeshZrg: `(min-width: 1200px)`,
        z35Xd2E37: `(min-width: 810px) and (max-width: 1199px)`,
      }),
      (U = `framer-I0REV`),
      (W = {
        GcibH95gb: `framer-v-7b2qqr`,
        UBUeshZrg: `framer-v-1glcezb`,
        z35Xd2E37: `framer-v-66j45j`,
      }),
      (G = ({ value: e }) =>
        b()
          ? null
          : /*#__PURE__*/ a(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (K = { Desktop: `UBUeshZrg`, Phone: `GcibH95gb`, Tablet: `z35Xd2E37` }),
      (q = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: K[r.variant] ?? r.variant ?? `UBUeshZrg`,
      })),
      (J = {
        alignment: `center`,
        component: N,
        offset: { x: 20, y: 20 },
        placement: `right`,
        transition: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` },
        variant: `GqW150rHi`,
      }),
      (Y = /*#__PURE__*/ o(function (e, t) {
        let o = c(null),
          s = t ?? o,
          u = ee(),
          { activeLocale: d, setLocale: f } = ae(),
          p = x(),
          { style: m, className: b, layoutId: C, variant: E, ...O } = q(e);
        (te(() => {
          let e = R(void 0, d);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, d]),
          r(() => {
            let e = R(void 0, d);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, d]));
        let [k, j] = oe(E, H, !1),
          M = v(U, I, D),
          N = ce(`m5Wy_vbq5`),
          P = c(null);
        return (
          ie(),
          se({ "1hyjosv": J }),
          /*#__PURE__*/ a(g.Provider, {
            value: { primaryVariantId: `UBUeshZrg`, variantClassNames: W },
            children: /*#__PURE__*/ i(ne, {
              id: C ?? u,
              children: [
                /*#__PURE__*/ a(G, {
                  value: `html body { background: var(--token-4795dafb-4261-43d3-aa0c-b3831681376e, rgb(255, 255, 255)); }`,
                }),
                /*#__PURE__*/ i(l.div, {
                  ...O,
                  className: v(M, `framer-1glcezb`, b),
                  ref: s,
                  style: { ...m },
                  children: [
                    /*#__PURE__*/ a(`section`, {
                      className: `framer-1iod3j4`,
                      "data-framer-name": `Hero`,
                      id: N,
                      ref: P,
                      children: /*#__PURE__*/ i(`div`, {
                        className: `framer-gpnol1`,
                        "data-framer-name": `Container`,
                        children: [
                          /*#__PURE__*/ a(`div`, {
                            className: `framer-1nefwx3`,
                            "data-framer-name": `Hero Heading Wrap / Left`,
                            children: /*#__PURE__*/ a(S, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(n, {
                                children: /*#__PURE__*/ a(`h1`, {
                                  className: `framer-styles-preset-monjet`,
                                  "data-styles-preset": `djOUw0pzb`,
                                  style: {
                                    "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                  },
                                  children: `404`,
                                }),
                              }),
                              className: `framer-h4rk4j`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          /*#__PURE__*/ a(`div`, {
                            className: `framer-87uv3u`,
                            "data-framer-name": `Hero Heading Wrap / Right`,
                            children: /*#__PURE__*/ a(S, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(n, {
                                children: /*#__PURE__*/ a(`h1`, {
                                  className: `framer-styles-preset-monjet`,
                                  "data-styles-preset": `djOUw0pzb`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                  },
                                  children: `oops!`,
                                }),
                              }),
                              className: `framer-188607s`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ i(`div`, {
                      className: `framer-arqox3`,
                      "data-framer-name": `404 Image Wrap`,
                      children: [
                        /*#__PURE__*/ i(l.div, {
                          className: `framer-gc4pwf`,
                          "data-framer-name": `404 Image`,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ a(w, {
                              breakpoint: k,
                              overrides: {
                                GcibH95gb: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: T((p?.y || 0) + 0 + 0 + 276 + 0),
                                    pixelHeight: 1800,
                                    pixelWidth: 1200,
                                    sizes: `180px`,
                                    src: `https://framerusercontent.com/images/rOqFilA8RpIjfoVVNgLDAjVvnwQ.jpg`,
                                    srcSet: `https://framerusercontent.com/images/rOqFilA8RpIjfoVVNgLDAjVvnwQ.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/rOqFilA8RpIjfoVVNgLDAjVvnwQ.jpg 1200w`,
                                  },
                                },
                                z35Xd2E37: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: T((p?.y || 0) + 0 + 0 + 234 + 0),
                                    pixelHeight: 1800,
                                    pixelWidth: 1200,
                                    sizes: `260px`,
                                    src: `https://framerusercontent.com/images/rOqFilA8RpIjfoVVNgLDAjVvnwQ.jpg`,
                                    srcSet: `https://framerusercontent.com/images/rOqFilA8RpIjfoVVNgLDAjVvnwQ.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/rOqFilA8RpIjfoVVNgLDAjVvnwQ.jpg 1200w`,
                                  },
                                },
                              },
                              children: /*#__PURE__*/ a(y, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: T((p?.y || 0) + 0 + 0 + 240 + 0),
                                  pixelHeight: 1800,
                                  pixelWidth: 1200,
                                  sizes: `340px`,
                                  src: `https://framerusercontent.com/images/rOqFilA8RpIjfoVVNgLDAjVvnwQ.jpg`,
                                  srcSet: `https://framerusercontent.com/images/rOqFilA8RpIjfoVVNgLDAjVvnwQ.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/rOqFilA8RpIjfoVVNgLDAjVvnwQ.jpg 1200w`,
                                },
                                className: `framer-nekz7x`,
                                "data-framer-name": `Image`,
                                style: { transformPerspective: 2e3 },
                              }),
                            }),
                            /*#__PURE__*/ a(re, {
                              links: [
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                /*#__PURE__*/ a(w, {
                                  breakpoint: k,
                                  overrides: {
                                    GcibH95gb: { y: (p?.y || 0) + 0 + 0 + 276 + 308 - 54 },
                                    z35Xd2E37: { y: (p?.y || 0) + 0 + 0 + 234 + 392 - 66 },
                                  },
                                  children: /*#__PURE__*/ a(_, {
                                    height: 40,
                                    y: (p?.y || 0) + 0 + 0 + 240 + 476 - 66,
                                    children: /*#__PURE__*/ a(w, {
                                      breakpoint: k,
                                      overrides: {
                                        GcibH95gb: { "data-framer-cursor": void 0 },
                                        z35Xd2E37: { "data-framer-cursor": void 0 },
                                      },
                                      children: /*#__PURE__*/ a(h, {
                                        className: `framer-13tj7wk-container`,
                                        "data-framer-cursor": `1hyjosv`,
                                        nodeId: `V26IPDZjE`,
                                        scopeId: `qcDDX8i1m`,
                                        children: /*#__PURE__*/ a(w, {
                                          breakpoint: k,
                                          overrides: {
                                            GcibH95gb: { irMOXbliE: e[2] },
                                            z35Xd2E37: { irMOXbliE: e[1] },
                                          },
                                          children: /*#__PURE__*/ a(A, {
                                            height: `100%`,
                                            id: `V26IPDZjE`,
                                            irMOXbliE: e[0],
                                            layoutId: `V26IPDZjE`,
                                            style: { height: `100%` },
                                            variant: `xe29Ciwqa`,
                                            width: `100%`,
                                            XhpeZnPQ4: `Back Home`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ a(S, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ a(n, {
                            children: /*#__PURE__*/ a(`p`, {
                              className: `framer-styles-preset-a6ucvx`,
                              "data-styles-preset": `JLWig38Pv`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                              },
                              children: `The page you were looking for can't be found.`,
                            }),
                          }),
                          className: `framer-yqwdvk`,
                          fonts: [`Inter`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    /*#__PURE__*/ a(`div`, {
                      className: `framer-gofz05`,
                      "data-framer-name": `Spotlight / Soft Light`,
                    }),
                    /*#__PURE__*/ a(`div`, {
                      className: `framer-1l7ga0m`,
                      "data-framer-name": `Spotlight / Color Dodge`,
                    }),
                    /*#__PURE__*/ a(_, {
                      children: /*#__PURE__*/ a(h, {
                        className: `framer-12tk8hm-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `dNOieD5pJ`,
                        scopeId: `qcDDX8i1m`,
                        children: /*#__PURE__*/ a(F, {
                          height: `100%`,
                          id: `dNOieD5pJ`,
                          intensity: 10,
                          layoutId: `dNOieD5pJ`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (X = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-I0REV.framer-8ctdc6, .framer-I0REV .framer-8ctdc6 { display: block; }`,
        `.framer-I0REV.framer-1glcezb { align-content: center; align-items: center; background-color: var(--token-4795dafb-4261-43d3-aa0c-b3831681376e, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-I0REV .framer-1iod3j4 { flex: none; gap: 10px; height: 100vh; overflow: hidden; position: relative; width: 100%; z-index: 1; }`,
        `.framer-I0REV .framer-gpnol1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 370px; height: 100vh; justify-content: center; left: calc(50.00000000000002% - min(1200px, 100%) / 2); max-width: 1200px; overflow: hidden; padding: 0px; position: absolute; top: calc(50.00000000000002% - 100vh / 2); width: 100%; }`,
        `.framer-I0REV .framer-1nefwx3 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; max-width: 50%; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-I0REV .framer-h4rk4j, .framer-I0REV .framer-188607s { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-I0REV .framer-87uv3u { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; max-width: 50%; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-I0REV .framer-arqox3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100vh; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-I0REV .framer-gc4pwf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: min-content; }`,
        `.framer-I0REV .framer-nekz7x { aspect-ratio: 0.7142857142857143 / 1; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: var(--framer-aspect-ratio-supported, 476px); overflow: visible; position: relative; transform-style: preserve-3d; width: 340px; }`,
        `.framer-I0REV .framer-13tj7wk-container { bottom: 26px; flex: none; height: 40px; left: 50%; position: absolute; transform: translateX(-50%); width: auto; z-index: 10; }`,
        `.framer-I0REV .framer-yqwdvk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-I0REV .framer-gofz05 { -webkit-filter: blur(100px); background-color: var(--token-1e4a4a22-afd8-42f6-ae69-95001aaf48ae, #000000); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; filter: blur(100px); flex: none; height: 329px; left: calc(50.00000000000002% - 645px / 2); mix-blend-mode: soft-light; overflow: hidden; pointer-events: none; position: absolute; top: 205px; width: 645px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-I0REV .framer-1l7ga0m { -webkit-filter: blur(62px); background-color: var(--token-37ca97ef-81c7-4731-ba05-2bafe1f2a4f5, #d69f27); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; filter: blur(62px); flex: none; height: 523px; left: calc(50.00000000000002% - 607px / 2); mix-blend-mode: color-dodge; opacity: 0.15; overflow: hidden; pointer-events: none; position: absolute; top: 108px; width: 607px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-I0REV .framer-12tk8hm-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...ue,
        ...O,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-I0REV.framer-1glcezb { width: 810px; } .framer-I0REV .framer-gpnol1 { flex-direction: column; gap: 450px; } .framer-I0REV .framer-1nefwx3 { align-content: center; align-items: center; flex: none; height: min-content; max-width: 100%; overflow: visible; padding: 7px 0px 0px 0px; width: 100%; } .framer-I0REV .framer-87uv3u { align-content: center; align-items: center; flex: none; height: 110px; max-width: 100%; width: 100%; } .framer-I0REV .framer-nekz7x { height: var(--framer-aspect-ratio-supported, 364px); width: 260px; } .framer-I0REV .framer-yqwdvk { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-I0REV .framer-gofz05 { height: 304px; left: calc(50.00000000000002% - 492px / 2); top: 277px; width: 492px; } .framer-I0REV .framer-1l7ga0m { height: 483px; left: calc(50.00000000000002% - 557px / 2); top: 191px; width: 557px; }}`,
        `@media (max-width: 809px) { .framer-I0REV.framer-1glcezb { width: 390px; } .framer-I0REV .framer-gpnol1 { flex-direction: column; gap: 300px; } .framer-I0REV .framer-1nefwx3 { align-content: center; align-items: center; flex: none; height: min-content; max-width: 100%; overflow: visible; padding: 0px 0px 30px 0px; width: 100%; } .framer-I0REV .framer-87uv3u { align-content: center; align-items: center; flex: none; height: min-content; max-width: 100%; padding: 0px 0px 15px 0px; width: 100%; } .framer-I0REV .framer-arqox3 { padding: 0px 20px 0px 20px; } .framer-I0REV .framer-nekz7x { height: var(--framer-aspect-ratio-supported, 308px); width: 180px; } .framer-I0REV .framer-13tj7wk-container { bottom: 14px; } .framer-I0REV .framer-yqwdvk { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-I0REV .framer-gofz05 { height: 193px; left: calc(50.00000000000002% - 265px / 2); top: 229px; width: 265px; } .framer-I0REV .framer-1l7ga0m { height: 277px; left: calc(50.00000000000002% - 250px / 2); opacity: 0.23; top: 203px; width: 250px; }}`,
      ]),
      (Z = C(Y, X, `framer-I0REV`)),
      (Z.displayName = `Page`),
      (Z.defaultProps = { height: 1011, width: 1200 }),
      d(
        Z,
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
          ...z,
          ...B,
          ...V,
          ...p(de),
          ...p(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerqcDDX8i1m`,
            slots: [],
            annotations: {
              framerColorSyntax: `true`,
              framerResponsiveScreen: ``,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"z35Xd2E37":{"layout":["fixed","fixed"]},"GcibH95gb":{"layout":["fixed","fixed"]}}}`,
              framerContractVersion: `1`,
              framerIntrinsicHeight: `1011`,
              framerDisplayContentsDiv: `false`,
              framerAutoSizeImages: `true`,
              framerImmutableVariables: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerScrollSections: `{"m5Wy_vbq5":{"pattern":":m5Wy_vbq5","name":"hero"}}`,
              framerIntrinsicWidth: `1200`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Q as __FramerMetadata__, Z as default };
//# sourceMappingURL=rx9rNV3ibCeh0t_y0HIHlJKpTtIVn7iR6lXRrdT0yeo.DMdsdHbR.mjs.map
