import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
  I as n,
  M as r,
  N as i,
  T as a,
  l as o,
  o as s,
  p as c,
  s as l,
  x as u,
} from "./react.guramC8M.mjs";
import { S as d, a as f, r as p, t as m } from "./motion.BkENN8JI.mjs";
import {
  Ct as h,
  D as g,
  E as _,
  R as v,
  W as y,
  _t as b,
  g as x,
  k as S,
  m as C,
  o as w,
  st as T,
  w as E,
  wt as D,
  z as O,
} from "./framer.mQNi9T2E.mjs";
import { i as k, n as A, r as j, t as M } from "./JLWig38Pv.ClFxyf2Q.mjs";
import { i as N, n as P, r as F, t as I } from "./NxCe_AOfF.D_dhC_6n.mjs";
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var R, z, B, V, H, U, W, G, K, q, J, Y, X;
function Z() {
  return (Z = e(() => {
    (l(),
      y(),
      m(),
      t(),
      k(),
      N(),
      (R = [`Nm23U4KzB`, `wf2bJ0Rkt`, `aY1MF0Kit`]),
      (z = `framer-npdqa`),
      (B = {
        aY1MF0Kit: `framer-v-1e2yv15`,
        Nm23U4KzB: `framer-v-1bqvk3x`,
        wf2bJ0Rkt: `framer-v-whr7xe`,
      }),
      (V = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (U = ({ value: e, children: t }) => {
        let n = r(f),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ s(f.Provider, { value: o, children: t });
      }),
      (W = d.create(n)),
      (G = { Desktop: `Nm23U4KzB`, Phone: `aY1MF0Kit`, Tablet: `wf2bJ0Rkt` }),
      (K = ({
        height: e,
        id: t,
        link: n,
        mainCoverImage: r,
        projectType: i,
        shortDescription: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        FumyGvkff: r ?? c.FumyGvkff,
        gVfhhB2xJ:
          a ??
          c.gVfhhB2xJ ??
          `Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve.`,
        k4eXt2vC2: n ?? c.k4eXt2vC2,
        kvs4o1nXL: o ?? c.kvs4o1nXL ?? `Black Geometric Prisms`,
        uX_zd3BzO: i ?? c.uX_zd3BzO ?? `Branding`,
        variant: G[c.variant] ?? c.variant ?? `Nm23U4KzB`,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = /*#__PURE__*/ c(function (e, t) {
        let r = u(null),
          i = t ?? r,
          c = a(),
          { activeLocale: l, setLocale: f } = b(),
          m = T(),
          {
            style: g,
            className: _,
            layoutId: v,
            variant: y,
            k4eXt2vC2: w,
            FumyGvkff: D,
            uX_zd3BzO: k,
            kvs4o1nXL: A,
            gVfhhB2xJ: j,
            ...N
          } = K(e),
          {
            baseVariant: P,
            classNames: F,
            clearLoadingGesture: G,
            gestureHandlers: J,
            gestureVariant: Y,
            isLoading: X,
            setGestureState: Z,
            setVariant: ee,
            variants: Q,
          } = h({
            cycleOrder: R,
            defaultVariant: `Nm23U4KzB`,
            ref: i,
            variant: y,
            variantClassNames: B,
          }),
          $ = q(e, Q),
          te = S(z, M, I);
        return /*#__PURE__*/ s(p, {
          id: v ?? c,
          children: /*#__PURE__*/ s(W, {
            animate: Q,
            initial: !1,
            children: /*#__PURE__*/ s(U, {
              value: V,
              children: /*#__PURE__*/ s(x, {
                href: w,
                motionChild: !0,
                nodeId: `Nm23U4KzB`,
                scopeId: `IcEbHhKzr`,
                children: /*#__PURE__*/ o(d.a, {
                  ...N,
                  ...J,
                  className: `${S(te, `framer-1bqvk3x`, _, F)} framer-10pp7uv`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: $,
                  layoutId: `Nm23U4KzB`,
                  ref: i,
                  style: { ...g },
                  ...L(
                    {
                      aY1MF0Kit: { "data-framer-name": `Phone` },
                      wf2bJ0Rkt: { "data-framer-name": `Tablet` },
                    },
                    P,
                    Y
                  ),
                  children: [
                    /*#__PURE__*/ s(C, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: O((m?.y || 0) + 0 + 0),
                        sizes: m?.width || `100vw`,
                        ...H(D),
                      },
                      className: `framer-akdoji`,
                      layoutDependency: $,
                      layoutId: `X_DHXh9Oa`,
                      style: {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                    }),
                    /*#__PURE__*/ o(d.div, {
                      className: `framer-1q2ssst`,
                      "data-framer-name": `Project Info`,
                      layoutDependency: $,
                      layoutId: `UKK_IAB5t`,
                      children: [
                        /*#__PURE__*/ s(d.div, {
                          className: `framer-1xg25zf`,
                          "data-border": !0,
                          "data-framer-name": `Category Badge`,
                          layoutDependency: $,
                          layoutId: `hBRcoXOR4`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            borderBottomLeftRadius: 99,
                            borderBottomRightRadius: 99,
                            borderTopLeftRadius: 99,
                            borderTopRightRadius: 99,
                          },
                          children: /*#__PURE__*/ s(E, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(n, {
                              children: /*#__PURE__*/ s(d.p, {
                                className: `framer-styles-preset-a6ucvx`,
                                "data-styles-preset": `JLWig38Pv`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223)))`,
                                },
                                children: `Branding`,
                              }),
                            }),
                            className: `framer-1qaut3e`,
                            "data-framer-name": `Category`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `xZJl1ZQ9p`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                            },
                            text: k,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        /*#__PURE__*/ s(E, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ s(n, {
                            children: /*#__PURE__*/ s(d.h3, {
                              className: `framer-styles-preset-12q7ivy`,
                              "data-styles-preset": `NxCe_AOfF`,
                              style: { "--framer-text-alignment": `left` },
                              children: `Black Geometric Prisms`,
                            }),
                          }),
                          className: `framer-a27xm9`,
                          "data-framer-name": `Title`,
                          fonts: [`Inter`],
                          layoutDependency: $,
                          layoutId: `XgU21a9Np`,
                          text: A,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        /*#__PURE__*/ s(E, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ s(n, {
                            children: /*#__PURE__*/ s(d.p, {
                              className: `framer-styles-preset-a6ucvx`,
                              "data-styles-preset": `JLWig38Pv`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48)))`,
                              },
                              children: `Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve.`,
                            }),
                          }),
                          className: `framer-5wou89`,
                          "data-framer-name": `Description`,
                          fonts: [`Inter`],
                          layoutDependency: $,
                          layoutId: `KtNjwkeuP`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                          },
                          text: j,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Y = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-npdqa.framer-10pp7uv, .framer-npdqa .framer-10pp7uv { display: block; }`,
        `.framer-npdqa.framer-1bqvk3x { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 540px; }`,
        `.framer-npdqa .framer-akdoji { flex: none; height: 320px; position: relative; width: 100%; }`,
        `.framer-npdqa .framer-1q2ssst { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-npdqa .framer-1xg25zf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 3px 15px 3px 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-npdqa .framer-1qaut3e { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-npdqa .framer-a27xm9, .framer-npdqa .framer-5wou89 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-npdqa.framer-v-whr7xe.framer-1bqvk3x { width: 450px; }`,
        `.framer-npdqa.framer-v-whr7xe .framer-akdoji { height: 260px; }`,
        `.framer-npdqa.framer-v-1e2yv15.framer-1bqvk3x { width: 300px; }`,
        `.framer-npdqa.framer-v-1e2yv15 .framer-akdoji { height: 200px; }`,
        ...A,
        ...P,
        `.framer-npdqa[data-border="true"]::after, .framer-npdqa [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (X = D(J, Y, `framer-npdqa`)),
      (X.displayName = `Project Card`),
      (X.defaultProps = { height: 490.6, width: 540 }),
      g(X, {
        variant: {
          options: [`Nm23U4KzB`, `wf2bJ0Rkt`, `aY1MF0Kit`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: w.Enum,
        },
        k4eXt2vC2: { title: `Link`, type: w.Link },
        FumyGvkff: { title: `Main Cover Image*`, type: w.ResponsiveImage },
        uX_zd3BzO: { defaultValue: `Branding`, title: `Project Type`, type: w.String },
        kvs4o1nXL: { defaultValue: `Black Geometric Prisms`, title: `Title`, type: w.String },
        gVfhhB2xJ: {
          defaultValue: `Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve.`,
          displayTextArea: !1,
          title: `Short Description`,
          type: w.String,
        },
      }),
      _(
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
          ...v(j),
          ...v(F),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { Z as n, X as t };
//# sourceMappingURL=IcEbHhKzr.D4hIlWtt.mjs.map
