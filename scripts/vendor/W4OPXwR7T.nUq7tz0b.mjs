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
import { S as d, a as f, r as ee, t as p } from "./motion.BkENN8JI.mjs";
import {
  Ct as m,
  D as h,
  E as g,
  R as _,
  W as v,
  _t as y,
  g as b,
  gt as x,
  k as S,
  m as C,
  o as w,
  st as T,
  w as E,
  wt as D,
  z as te,
} from "./framer.mQNi9T2E.mjs";
import { d as ne, f as O, m as k, p as A } from "./toplevel-deps.CrcF9UeY.mjs";
import { i as j, n as M, r as N, t as re } from "./NxCe_AOfF.C08H5wkL.mjs";
function P(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X;
function Z() {
  return (Z = e(() => {
    (l(),
      v(),
      p(),
      t(),
      k(),
      j(),
      (F = [`tR8IcUdoO`, `iCTJAkoKO`, `d6C7vBEYV`]),
      (I = `framer-zcZJ5`),
      (L = {
        d6C7vBEYV: `framer-v-71nmjt`,
        iCTJAkoKO: `framer-v-3jwyy`,
        tR8IcUdoO: `framer-v-11lleoz`,
      }),
      (R = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (z = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (B = (e, t, n) => {
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
      (V = { dateStyle: `medium`, timeZone: `UTC` }),
      (H = (e, t) => B(e, V, t)),
      (U = ({ value: e, children: t }) => {
        let n = r(f),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ s(f.Provider, { value: o, children: t });
      }),
      (W = d.create(n)),
      (G = { Desktop: `tR8IcUdoO`, Phone: `d6C7vBEYV`, Tablet: `iCTJAkoKO` }),
      (K = ({
        blogCoverImage: e,
        category: t,
        date: n,
        description: r,
        height: i,
        id: a,
        link: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        e_QuhfS_F: e ?? l.e_QuhfS_F,
        gokezjqxK: n ?? l.gokezjqxK ?? `2025-04-30T00:00:00.000Z`,
        iL1cgq2Ht: t ?? l.iL1cgq2Ht ?? `Insights`,
        PJapEKDdl: o ?? l.PJapEKDdl,
        TQYgSSnNw:
          r ??
          l.TQYgSSnNw ??
          `Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve.`,
        variant: G[l.variant] ?? l.variant ?? `tR8IcUdoO`,
        YyZ63RYdx: s ?? l.YyZ63RYdx ?? `5 Design Trends That Will Define 2024`,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = /*#__PURE__*/ c(function (e, t) {
        let r = u(null),
          i = t ?? r,
          c = a(),
          { activeLocale: l, setLocale: f } = y(),
          p = T(),
          {
            style: h,
            className: g,
            layoutId: _,
            variant: v,
            PJapEKDdl: w,
            e_QuhfS_F: D,
            iL1cgq2Ht: O,
            gokezjqxK: k,
            YyZ63RYdx: A,
            TQYgSSnNw: j,
            ...M
          } = K(e),
          {
            baseVariant: N,
            classNames: B,
            clearLoadingGesture: V,
            gestureHandlers: G,
            gestureVariant: J,
            isLoading: Y,
            setGestureState: X,
            setVariant: Z,
            variants: Q,
          } = m({
            cycleOrder: F,
            defaultVariant: `tR8IcUdoO`,
            ref: i,
            variant: v,
            variantClassNames: L,
          }),
          $ = q(e, Q),
          ie = S(I, ne, re),
          ae = x(),
          oe = H(k, ae);
        return /*#__PURE__*/ s(ee, {
          id: _ ?? c,
          children: /*#__PURE__*/ s(W, {
            animate: Q,
            initial: !1,
            children: /*#__PURE__*/ s(U, {
              value: R,
              children: /*#__PURE__*/ s(b, {
                href: w,
                motionChild: !0,
                nodeId: `tR8IcUdoO`,
                scopeId: `W4OPXwR7T`,
                children: /*#__PURE__*/ o(d.a, {
                  ...M,
                  ...G,
                  className: `${S(ie, `framer-11lleoz`, g, B)} framer-gkkdwl`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: $,
                  layoutId: `tR8IcUdoO`,
                  ref: i,
                  style: { ...h },
                  ...P(
                    {
                      d6C7vBEYV: { "data-framer-name": `Phone` },
                      iCTJAkoKO: { "data-framer-name": `Tablet` },
                    },
                    N,
                    J
                  ),
                  children: [
                    /*#__PURE__*/ s(C, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: te((p?.y || 0) + 0 + 0),
                        sizes: p?.width || `100vw`,
                        ...z(D),
                      },
                      className: `framer-kbt7fe`,
                      layoutDependency: $,
                      layoutId: `rkALm68b7`,
                      style: {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                    }),
                    /*#__PURE__*/ o(d.div, {
                      className: `framer-14yp0n0`,
                      "data-framer-name": `Meta Wrap`,
                      layoutDependency: $,
                      layoutId: `VIOa0YJq3`,
                      children: [
                        /*#__PURE__*/ s(d.div, {
                          className: `framer-1yww66c`,
                          "data-border": !0,
                          "data-framer-name": `Category Badge`,
                          layoutDependency: $,
                          layoutId: `LsLeGgR9K`,
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
                                children: `Insights`,
                              }),
                            }),
                            className: `framer-8i7wx2`,
                            "data-framer-name": `Category`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `diazKtkqW`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: O,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
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
                              children: `Apr 30, 2025`,
                            }),
                          }),
                          className: `framer-1y1o6q6`,
                          "data-framer-name": `Date`,
                          fonts: [`Inter`],
                          layoutDependency: $,
                          layoutId: `l_KavaPHs`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                          },
                          text: oe,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    /*#__PURE__*/ s(E, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ s(n, {
                        children: /*#__PURE__*/ s(d.h3, {
                          className: `framer-styles-preset-12q7ivy`,
                          "data-styles-preset": `NxCe_AOfF`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48)))`,
                          },
                          children: `5 Design Trends That Will Define 2024`,
                        }),
                      }),
                      className: `framer-1i9yuzm`,
                      "data-framer-name": `Title`,
                      fonts: [`Inter`],
                      layoutDependency: $,
                      layoutId: `VP12UxLgT`,
                      style: {
                        "--extracted-a0htzi": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                      },
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
                      className: `framer-1igatmi`,
                      "data-framer-name": `Description`,
                      fonts: [`Inter`],
                      layoutDependency: $,
                      layoutId: `WXh7OVNrn`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                      },
                      text: j,
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
      (Y = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-zcZJ5.framer-gkkdwl, .framer-zcZJ5 .framer-gkkdwl { display: block; }`,
        `.framer-zcZJ5.framer-11lleoz { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 540px; }`,
        `.framer-zcZJ5 .framer-kbt7fe { flex: none; height: 320px; position: relative; width: 100%; }`,
        `.framer-zcZJ5 .framer-14yp0n0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zcZJ5 .framer-1yww66c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 3px 15px 3px 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-zcZJ5 .framer-8i7wx2 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-zcZJ5 .framer-1y1o6q6 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-zcZJ5 .framer-1i9yuzm, .framer-zcZJ5 .framer-1igatmi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zcZJ5.framer-v-3jwyy.framer-11lleoz { width: 500px; }`,
        `.framer-zcZJ5.framer-v-3jwyy .framer-kbt7fe { height: 260px; }`,
        `.framer-zcZJ5.framer-v-71nmjt.framer-11lleoz { width: 350px; }`,
        `.framer-zcZJ5.framer-v-71nmjt .framer-kbt7fe { height: 200px; }`,
        ...O,
        ...M,
        `.framer-zcZJ5[data-border="true"]::after, .framer-zcZJ5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (X = D(J, Y, `framer-zcZJ5`)),
      (X.displayName = `Blog Card`),
      (X.defaultProps = { height: 491, width: 540 }),
      h(X, {
        variant: {
          options: [`tR8IcUdoO`, `iCTJAkoKO`, `d6C7vBEYV`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: w.Enum,
        },
        PJapEKDdl: { title: `Link`, type: w.Link },
        e_QuhfS_F: { title: `Blog Cover Image`, type: w.ResponsiveImage },
        iL1cgq2Ht: { defaultValue: `Insights`, title: `Category`, type: w.String },
        gokezjqxK: { defaultValue: `2025-04-30T00:00:00.000Z`, title: `Date`, type: w.Date },
        YyZ63RYdx: {
          defaultValue: `5 Design Trends That Will Define 2024`,
          title: `Title`,
          type: w.String,
        },
        TQYgSSnNw: {
          defaultValue: `Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve.`,
          title: `Description`,
          type: w.String,
        },
      }),
      g(
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
          ..._(A),
          ..._(N),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { Z as n, X as t };
//# sourceMappingURL=W4OPXwR7T.nUq7tz0b.mjs.map
