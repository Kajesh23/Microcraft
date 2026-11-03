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
  C as g,
  Ct as ee,
  D as _,
  E as v,
  L as y,
  R as b,
  St as te,
  W as x,
  Z as S,
  _t as ne,
  a as C,
  b as w,
  bt as T,
  et as E,
  f as D,
  ft as O,
  g as re,
  gt as ie,
  ht as k,
  i as A,
  j,
  k as M,
  m as N,
  mt as ae,
  n as P,
  o as F,
  ot as oe,
  st as se,
  tt as I,
  ut as ce,
  vt as le,
  w as L,
  wt as R,
  x as z,
  xt as ue,
  z as B,
} from "./framer.mQNi9T2E.mjs";
import { d as de, f as fe, i as pe, m as me, p as he, r as V } from "./toplevel-deps.CrcF9UeY.mjs";
import { i as ge, r as H } from "./shared-lib.BnN6DsbI.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./ilUlJnLkH.DR4o7BiV.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./NxCe_AOfF.C08H5wkL.mjs";
import { n as Te, t as U } from "./R5Uj4EVTC.lsbn4xQe.mjs";
import { n as Ee, t as W } from "./W4OPXwR7T.nUq7tz0b.mjs";
import { i as De, r as G, t as Oe } from "./l9KTJXLB2.D9kwcrFC.mjs";
import { n as ke, r as Ae } from "./fj84GYcOQ.BHr6Pe9j.mjs";
function je(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, K;
function qe() {
  return (qe = e(() => {
    (u(),
      x(),
      h(),
      t(),
      _e(),
      me(),
      xe(),
      (Me = [`sWroL4jtb`, `ssPu0rkj0`, `midIYS1nj`]),
      (Ne = `framer-35mDv`),
      (Pe = {
        midIYS1nj: `framer-v-duqdgv`,
        ssPu0rkj0: `framer-v-18wlyn8`,
        sWroL4jtb: `framer-v-rivwm`,
      }),
      (Fe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ie = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Le = (e, t, n) => {
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
      (Re = { dateStyle: `medium`, timeZone: `UTC` }),
      (ze = (e, t) => Le(e, Re, t)),
      (Be = ({ value: e, children: t }) => {
        let n = r(p),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ c(p.Provider, { value: o, children: t });
      }),
      (Ve = f.create(n)),
      (He = { Desktop: `sWroL4jtb`, Phone: `midIYS1nj`, Tablet: `ssPu0rkj0` }),
      (Ue = ({
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
        variant: He[l.variant] ?? l.variant ?? `sWroL4jtb`,
        YyZ63RYdx: s ?? l.YyZ63RYdx ?? `5 Design Trends That Will Define 2024`,
      })),
      (We = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ge = /*#__PURE__*/ l(function (e, t) {
        let r = d(null),
          i = t ?? r,
          o = a(),
          { activeLocale: l, setLocale: u } = ne(),
          p = se(),
          {
            style: h,
            className: g,
            layoutId: _,
            variant: v,
            PJapEKDdl: y,
            e_QuhfS_F: b,
            iL1cgq2Ht: te,
            gokezjqxK: x,
            YyZ63RYdx: S,
            TQYgSSnNw: C,
            ...w
          } = Ue(e),
          {
            baseVariant: T,
            classNames: E,
            clearLoadingGesture: D,
            gestureHandlers: O,
            gestureVariant: k,
            isLoading: A,
            setGestureState: j,
            setVariant: ae,
            variants: P,
          } = ee({
            cycleOrder: Me,
            defaultVariant: `sWroL4jtb`,
            ref: i,
            variant: v,
            variantClassNames: Pe,
          }),
          F = We(e, P),
          oe = M(Ne, be, de, we),
          I = ie(),
          ce = ze(x, I);
        return /*#__PURE__*/ c(m, {
          id: _ ?? o,
          children: /*#__PURE__*/ c(Ve, {
            animate: P,
            initial: !1,
            children: /*#__PURE__*/ c(Be, {
              value: Fe,
              children: /*#__PURE__*/ c(re, {
                href: y,
                motionChild: !0,
                nodeId: `sWroL4jtb`,
                scopeId: `VySWabwrG`,
                children: /*#__PURE__*/ s(f.a, {
                  ...w,
                  ...O,
                  className: `${M(oe, `framer-rivwm`, g, E)} framer-zyfctv`,
                  "data-framer-name": `Desktop`,
                  layoutDependency: F,
                  layoutId: `sWroL4jtb`,
                  ref: i,
                  style: { ...h },
                  ...je(
                    {
                      midIYS1nj: { "data-framer-name": `Phone` },
                      ssPu0rkj0: { "data-framer-name": `Tablet` },
                    },
                    T,
                    k
                  ),
                  children: [
                    /*#__PURE__*/ c(N, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: B((p?.y || 0) + 0 + 0),
                        sizes: p?.width || `100vw`,
                        ...Ie(b),
                      },
                      className: `framer-uako81`,
                      "data-framer-name": `Image`,
                      layoutDependency: F,
                      layoutId: `Q1luQTFGC`,
                      style: {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                      children: /*#__PURE__*/ c(f.div, {
                        className: `framer-10xmrlf`,
                        "data-framer-name": `Blog Badge`,
                        layoutDependency: F,
                        layoutId: `SZqKUmuHc`,
                        style: {
                          backgroundColor: `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                          borderBottomLeftRadius: 20,
                          borderBottomRightRadius: 20,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                        children: /*#__PURE__*/ c(L, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ c(n, {
                            children: /*#__PURE__*/ c(f.h4, {
                              className: `framer-styles-preset-usoyrg`,
                              "data-styles-preset": `ilUlJnLkH`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-1eung3n, var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255)))`,
                              },
                              children: `Most Viewed`,
                            }),
                          }),
                          className: `framer-ndafpz`,
                          fonts: [`Inter`],
                          layoutDependency: F,
                          layoutId: `sA8R1_uHt`,
                          style: {
                            "--extracted-1eung3n": `var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    /*#__PURE__*/ s(f.div, {
                      className: `framer-e51uty`,
                      "data-framer-name": `Meta Wrap`,
                      layoutDependency: F,
                      layoutId: `cMVW2isIH`,
                      children: [
                        /*#__PURE__*/ c(f.div, {
                          className: `framer-1b5xlq2`,
                          "data-border": !0,
                          "data-framer-name": `Category Badge`,
                          layoutDependency: F,
                          layoutId: `MOIbniCtF`,
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
                          children: /*#__PURE__*/ c(L, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ c(n, {
                              children: /*#__PURE__*/ c(f.p, {
                                className: `framer-styles-preset-a6ucvx`,
                                "data-styles-preset": `JLWig38Pv`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223)))`,
                                },
                                children: `Insights`,
                              }),
                            }),
                            className: `framer-uuhxr4`,
                            "data-framer-name": `Category`,
                            fonts: [`Inter`],
                            layoutDependency: F,
                            layoutId: `X3e5BaNAe`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: te,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        /*#__PURE__*/ c(L, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ c(n, {
                            children: /*#__PURE__*/ c(f.p, {
                              className: `framer-styles-preset-a6ucvx`,
                              "data-styles-preset": `JLWig38Pv`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48)))`,
                              },
                              children: `Apr 30, 2025`,
                            }),
                          }),
                          className: `framer-8m1m28`,
                          "data-framer-name": `Date`,
                          fonts: [`Inter`],
                          layoutDependency: F,
                          layoutId: `AyXCPHv10`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                          },
                          text: ce,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    /*#__PURE__*/ c(L, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ c(n, {
                        children: /*#__PURE__*/ c(f.h3, {
                          className: `framer-styles-preset-12q7ivy`,
                          "data-styles-preset": `NxCe_AOfF`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48)))`,
                          },
                          children: `5 Design Trends That Will Define 2024`,
                        }),
                      }),
                      className: `framer-1oarvzt`,
                      "data-framer-name": `Title`,
                      fonts: [`Inter`],
                      layoutDependency: F,
                      layoutId: `pF4lDM1vK`,
                      style: {
                        "--extracted-a0htzi": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                      },
                      text: S,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    /*#__PURE__*/ c(L, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ c(n, {
                        children: /*#__PURE__*/ c(f.p, {
                          className: `framer-styles-preset-a6ucvx`,
                          "data-styles-preset": `JLWig38Pv`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48)))`,
                          },
                          children: `Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve.`,
                        }),
                      }),
                      className: `framer-1b4t2vt`,
                      "data-framer-name": `Description`,
                      fonts: [`Inter`],
                      layoutDependency: F,
                      layoutId: `gZEbp4rSZ`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                      },
                      text: C,
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
      (Ke = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-35mDv.framer-zyfctv, .framer-35mDv .framer-zyfctv { display: block; }`,
        `.framer-35mDv.framer-rivwm { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 540px; }`,
        `.framer-35mDv .framer-uako81 { flex: none; height: 500px; position: relative; width: 100%; }`,
        `.framer-35mDv .framer-10xmrlf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 20px; overflow: hidden; padding: 10px 20px 10px 20px; position: absolute; top: 20px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-35mDv .framer-ndafpz, .framer-35mDv .framer-uuhxr4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-35mDv .framer-e51uty { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-35mDv .framer-1b5xlq2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 3px 15px 3px 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-35mDv .framer-8m1m28 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-35mDv .framer-1oarvzt, .framer-35mDv .framer-1b4t2vt { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-35mDv.framer-v-18wlyn8.framer-rivwm { width: 500px; }`,
        `.framer-35mDv.framer-v-duqdgv.framer-rivwm { width: 350px; }`,
        `.framer-35mDv.framer-v-duqdgv .framer-uako81 { height: 350px; }`,
        ...ve,
        ...fe,
        ...Se,
        `.framer-35mDv[data-border="true"]::after, .framer-35mDv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (K = R(Ge, Ke, `framer-35mDv`)),
      (K.displayName = `Pinned Post Card`),
      (K.defaultProps = { height: 671, width: 540 }),
      _(K, {
        variant: {
          options: [`sWroL4jtb`, `ssPu0rkj0`, `midIYS1nj`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: F.Enum,
        },
        PJapEKDdl: { title: `Link`, type: F.Link },
        e_QuhfS_F: { title: `Blog Cover Image`, type: F.ResponsiveImage },
        iL1cgq2Ht: { defaultValue: `Insights`, title: `Category`, type: F.String },
        gokezjqxK: { defaultValue: `2025-04-30T00:00:00.000Z`, title: `Date`, type: F.Date },
        YyZ63RYdx: {
          defaultValue: `5 Design Trends That Will Define 2024`,
          title: `Title`,
          type: F.String,
        },
        TQYgSSnNw: {
          defaultValue: `Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve.`,
          title: `Description`,
          type: F.String,
        },
      }),
      v(
        K,
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
          ...b(ye),
          ...b(he),
          ...b(Ce),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var Je, Ye, Xe, Ze, Qe, $e, et, q, tt, nt, J, Y, X, rt, it, Z, at, Q, ot, st, ct, $, lt;
function ut() {
  return (ut = e(() => {
    (u(),
      x(),
      h(),
      t(),
      ge(),
      Te(),
      qe(),
      Ee(),
      pe(),
      De(),
      ke(),
      (Je = y(K)),
      (Ye = y(W)),
      (Xe = y(U)),
      (Ze = y(H)),
      (Qe = y(V)),
      ($e = {
        cDKT59Dz6: `(max-width: 809.98px)`,
        KupTBx_YA: `(min-width: 810px) and (max-width: 1199.98px)`,
        onzzsu3Uk: `(min-width: 1200px)`,
      }),
      (et = []),
      (q = `framer-kaz9m`),
      (tt = {
        cDKT59Dz6: `framer-v-q3ap1d`,
        KupTBx_YA: `framer-v-ckec4a`,
        onzzsu3Uk: `framer-v-xv5uzo`,
      }),
      (nt = (e, t, n) => (e && t ? `position` : n)),
      (J = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (X = () => ({
        from: { alias: `waf8EhSAY`, data: Oe, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        select: [
          { collection: `waf8EhSAY`, name: `SG0PXpmii`, type: `Identifier` },
          { collection: `waf8EhSAY`, name: `qA77RzyS1`, type: `Identifier` },
          { collection: `waf8EhSAY`, name: `xd_Q4amJC`, type: `Identifier` },
          { collection: `waf8EhSAY`, name: `ZDyO9OD9Q`, type: `Identifier` },
          { collection: `waf8EhSAY`, name: `wWT4jlIQ9`, type: `Identifier` },
          { collection: `waf8EhSAY`, name: `TCax3X2ch`, type: `Identifier` },
          { collection: `waf8EhSAY`, name: `id`, type: `Identifier` },
        ],
        where: { collection: `waf8EhSAY`, name: `XDfrub6Bk`, type: `Identifier` },
      })),
      (rt = ({ query: e, pageSize: t, children: n }) => n(T(e))),
      (it = (e, t, n) =>
        e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
      (Z = () => ({
        from: { alias: `iQM2u8AP_`, data: Oe, type: `Collection` },
        select: [
          { collection: `iQM2u8AP_`, name: `SG0PXpmii`, type: `Identifier` },
          { collection: `iQM2u8AP_`, name: `qA77RzyS1`, type: `Identifier` },
          { collection: `iQM2u8AP_`, name: `xd_Q4amJC`, type: `Identifier` },
          { collection: `iQM2u8AP_`, name: `ZDyO9OD9Q`, type: `Identifier` },
          { collection: `iQM2u8AP_`, name: `wWT4jlIQ9`, type: `Identifier` },
          { collection: `iQM2u8AP_`, name: `TCax3X2ch`, type: `Identifier` },
          { collection: `iQM2u8AP_`, name: `id`, type: `Identifier` },
        ],
        where: {
          operator: `not`,
          type: `UnaryOperation`,
          value: { collection: `iQM2u8AP_`, name: `XDfrub6Bk`, type: `Identifier` },
        },
      })),
      (at = ({ query: e, pageSize: t, children: n }) => {
        let { paginatedQuery: r, paginationInfo: i, loadMore: a } = k(e, t, `iQM2u8AP_`);
        return n(T(r), i, a);
      }),
      (Q = { Desktop: `onzzsu3Uk`, Phone: `cDKT59Dz6`, Tablet: `KupTBx_YA` }),
      (ot = ({ value: e }) =>
        ae()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (st = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Q[r.variant] ?? r.variant ?? `onzzsu3Uk`,
      })),
      (ct = {
        alignment: `center`,
        component: V,
        offset: { x: 20, y: 20 },
        placement: `right`,
        transition: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` },
        variant: `aXN7J563X`,
      }),
      ($ = R(
        /* @__PURE__ */ l(function (e, t) {
          let l = d(null),
            u = t ?? l;
          a();
          let { activeLocale: h, setLocale: ee } = ne(),
            _ = se(),
            { style: v, className: y, layoutId: b, variant: x, ...S } = st(e),
            T = i(() => Ae({}, h), [h]);
          le(T);
          let [E, re] = O(x, $e, !1),
            ie = M(q),
            k = r(D)?.isLayoutTemplate,
            j = !!r(p)?.transition?.layout,
            N = nt(k, j),
            ae = ue(`N_e6IgS3E`),
            F = d(null);
          te();
          let { activeVariantCallback: I, delay: R } = oe(void 0),
            B = ({ loadMore: e }) =>
              I(async (...t) => {
                e();
              });
          return (
            ce({ "1bde3zh": ct }),
            /*#__PURE__*/ c(D.Provider, {
              value: {
                activeVariantId: E,
                humanReadableVariantMap: Q,
                primaryVariantId: `onzzsu3Uk`,
                variantClassNames: tt,
              },
              children: /*#__PURE__*/ s(m, {
                id: b ?? `fj84GYcOQ`,
                children: [
                  /*#__PURE__*/ c(ot, {
                    value: `html body { background: var(--token-4795dafb-4261-43d3-aa0c-b3831681376e, rgb(255, 255, 255)); }`,
                  }),
                  /*#__PURE__*/ s(f.div, {
                    ...S,
                    className: M(ie, `framer-xv5uzo`, y),
                    ref: u,
                    style: { ...v },
                    children: [
                      /*#__PURE__*/ c(f.section, {
                        className: `framer-x1o4hl`,
                        "data-framer-name": `Blog`,
                        id: ae,
                        layout: N,
                        ref: F,
                        children: /*#__PURE__*/ s(`div`, {
                          className: `framer-kfnbgk`,
                          "data-framer-name": `Container`,
                          children: [
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-1wr7s0f`,
                              "data-framer-name": `Text Wrap`,
                              children: [
                                /*#__PURE__*/ c(z, {
                                  breakpoint: E,
                                  overrides: {
                                    cDKT59Dz6: {
                                      children: /*#__PURE__*/ c(n, {
                                        children: /*#__PURE__*/ c(`h1`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7QW50b25pby03MDA=`,
                                            "--framer-font-family": `"Antonio", "Antonio Placeholder", sans-serif`,
                                            "--framer-font-size": `56px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-letter-spacing": `-0.03em`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                            "--framer-text-transform": `uppercase`,
                                          },
                                          children: `Design Insights & Ideas`,
                                        }),
                                      }),
                                    },
                                    KupTBx_YA: {
                                      children: /*#__PURE__*/ c(n, {
                                        children: /*#__PURE__*/ c(`h1`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7QW50b25pby03MDA=`,
                                            "--framer-font-family": `"Antonio", "Antonio Placeholder", sans-serif`,
                                            "--framer-font-size": `96px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-letter-spacing": `-0.03em`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                            "--framer-text-transform": `uppercase`,
                                          },
                                          children: `Design Insights & Ideas`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: /*#__PURE__*/ c(L, {
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
                                          "--framer-text-color": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                                          "--framer-text-transform": `uppercase`,
                                        },
                                        children: `Design Insights & Ideas`,
                                      }),
                                    }),
                                    className: `framer-8v1m88`,
                                    fonts: [`GF;Antonio-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ c(L, {
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
                                      children: `From design trends to creative processes, these articles offer insights to help you elevate your craft, solve challenges, and spark new ideas for your projects.`,
                                    }),
                                  }),
                                  className: `framer-mvv5ul`,
                                  fonts: [`Inter-Light`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-1vuezom`,
                              "data-framer-name": `Post Wrap`,
                              children: [
                                /*#__PURE__*/ c(`div`, {
                                  className: `framer-go0c1w`,
                                  "data-framer-name": `Pinned Post`,
                                  children: /*#__PURE__*/ c(P, {
                                    children: /*#__PURE__*/ c(rt, {
                                      query: X(),
                                      children: (e, t, n) =>
                                        /*#__PURE__*/ c(o, {
                                          children: e?.map(
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
                                                  id: `waf8EhSAY-${e}`,
                                                  children: /*#__PURE__*/ c(w.Provider, {
                                                    value: { SG0PXpmii: n },
                                                    children: /*#__PURE__*/ c(g, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { SG0PXpmii: n },
                                                            webPageId: `XUv0H5ZdT`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { SG0PXpmii: n },
                                                            webPageId: `XUv0H5ZdT`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { SG0PXpmii: n },
                                                            webPageId: `XUv0H5ZdT`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (e) =>
                                                        /*#__PURE__*/ c(z, {
                                                          breakpoint: E,
                                                          overrides: {
                                                            cDKT59Dz6: {
                                                              width: `calc(min(${_?.width || `100vw`}, 1200px) - 40px)`,
                                                              y: (_?.y || 0) + 376.6,
                                                            },
                                                            KupTBx_YA: { y: (_?.y || 0) + 460.6 },
                                                          },
                                                          children: /*#__PURE__*/ c(A, {
                                                            height: 671,
                                                            width: `max(min(${_?.width || `100vw`}, 1200px) - 80px, 50px)`,
                                                            y: (_?.y || 0) + 507,
                                                            children: /*#__PURE__*/ c(z, {
                                                              breakpoint: E,
                                                              overrides: {
                                                                cDKT59Dz6: {
                                                                  "data-framer-cursor": void 0,
                                                                },
                                                                KupTBx_YA: {
                                                                  "data-framer-cursor": void 0,
                                                                },
                                                              },
                                                              children: /*#__PURE__*/ c(C, {
                                                                className: `framer-6yi4dk-container`,
                                                                "data-framer-cursor": `1bde3zh`,
                                                                nodeId: `zwMG0yu8I`,
                                                                scopeId: `fj84GYcOQ`,
                                                                children: /*#__PURE__*/ c(z, {
                                                                  breakpoint: E,
                                                                  overrides: {
                                                                    cDKT59Dz6: {
                                                                      PJapEKDdl: e[2],
                                                                      variant: Y(`midIYS1nj`),
                                                                    },
                                                                    KupTBx_YA: {
                                                                      PJapEKDdl: e[1],
                                                                      variant: Y(`ssPu0rkj0`),
                                                                    },
                                                                  },
                                                                  children: /*#__PURE__*/ c(K, {
                                                                    e_QuhfS_F: J(t),
                                                                    gokezjqxK: o,
                                                                    height: `100%`,
                                                                    id: `zwMG0yu8I`,
                                                                    iL1cgq2Ht: G.xd_Q4amJC?.(a, h),
                                                                    layoutId: `zwMG0yu8I`,
                                                                    PJapEKDdl: e[0],
                                                                    style: { width: `100%` },
                                                                    TQYgSSnNw: r,
                                                                    variant: Y(`sWroL4jtb`),
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
                                        }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(`div`, {
                                  className: `framer-n33i8d`,
                                  children: /*#__PURE__*/ c(P, {
                                    children: /*#__PURE__*/ c(at, {
                                      pageSize: 6,
                                      query: Z(),
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
                                                    id: `iQM2u8AP_-${e}`,
                                                    children: /*#__PURE__*/ c(w.Provider, {
                                                      value: { SG0PXpmii: n },
                                                      children: /*#__PURE__*/ c(g, {
                                                        links: [
                                                          {
                                                            href: {
                                                              pathVariables: { SG0PXpmii: n },
                                                              webPageId: `XUv0H5ZdT`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { SG0PXpmii: n },
                                                              webPageId: `XUv0H5ZdT`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { SG0PXpmii: n },
                                                              webPageId: `XUv0H5ZdT`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (e) =>
                                                          /*#__PURE__*/ c(z, {
                                                            breakpoint: E,
                                                            overrides: {
                                                              cDKT59Dz6: {
                                                                width: `calc(min(${_?.width || `100vw`}, 1200px) - 40px)`,
                                                                y: (_?.y || 0) + 1127.6,
                                                              },
                                                              KupTBx_YA: {
                                                                y: (_?.y || 0) + 1922.6,
                                                              },
                                                            },
                                                            children: /*#__PURE__*/ c(A, {
                                                              height: 491,
                                                              width: `max((min(${_?.width || `100vw`}, 1200px) - 120px) / 2, 50px)`,
                                                              y: (_?.y || 0) + 1969,
                                                              children: /*#__PURE__*/ c(z, {
                                                                breakpoint: E,
                                                                overrides: {
                                                                  cDKT59Dz6: {
                                                                    "data-framer-cursor": void 0,
                                                                  },
                                                                  KupTBx_YA: {
                                                                    "data-framer-cursor": void 0,
                                                                  },
                                                                },
                                                                children: /*#__PURE__*/ c(C, {
                                                                  className: `framer-1d5u98s-container`,
                                                                  "data-framer-cursor": `1bde3zh`,
                                                                  nodeId: `YZpXzs0nv`,
                                                                  scopeId: `fj84GYcOQ`,
                                                                  children: /*#__PURE__*/ c(z, {
                                                                    breakpoint: E,
                                                                    overrides: {
                                                                      cDKT59Dz6: {
                                                                        PJapEKDdl: e[2],
                                                                        variant: Y(`d6C7vBEYV`),
                                                                      },
                                                                      KupTBx_YA: {
                                                                        PJapEKDdl: e[1],
                                                                        variant: Y(`iCTJAkoKO`),
                                                                      },
                                                                    },
                                                                    children: /*#__PURE__*/ c(W, {
                                                                      e_QuhfS_F: J(t),
                                                                      gokezjqxK: o,
                                                                      height: `100%`,
                                                                      id: `YZpXzs0nv`,
                                                                      iL1cgq2Ht: G.xd_Q4amJC?.(
                                                                        a,
                                                                        h
                                                                      ),
                                                                      layoutId: `YZpXzs0nv`,
                                                                      PJapEKDdl: e[0],
                                                                      style: { width: `100%` },
                                                                      TQYgSSnNw: r,
                                                                      variant: Y(`tR8IcUdoO`),
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
                                            /*#__PURE__*/ c(z, {
                                              breakpoint: E,
                                              overrides: {
                                                cDKT59Dz6: {
                                                  width: `calc(min(${_?.width || `100vw`}, 1200px) - 40px)`,
                                                  y: (_?.y || 0) + 1698.6,
                                                },
                                                KupTBx_YA: { y: (_?.y || 0) + 2493.6 },
                                              },
                                              children: /*#__PURE__*/ c(A, {
                                                height: 48,
                                                y: (_?.y || 0) + 2540,
                                                children: /*#__PURE__*/ c(C, {
                                                  className: `framer-1rtmnaw-container`,
                                                  nodeId: `rdWNpt4nj`,
                                                  scopeId: `fj84GYcOQ`,
                                                  children: /*#__PURE__*/ c(z, {
                                                    breakpoint: E,
                                                    overrides: {
                                                      cDKT59Dz6: { style: { width: `100%` } },
                                                    },
                                                    children: /*#__PURE__*/ c(U, {
                                                      height: `100%`,
                                                      id: `rdWNpt4nj`,
                                                      layoutId: `rdWNpt4nj`,
                                                      variant: it(
                                                        t,
                                                        {
                                                          disabled: `kzpAWV2zT`,
                                                          loading: `Hs4Rz8sw6`,
                                                        },
                                                        Y(`acmOmCnX4`)
                                                      ),
                                                      width: `100%`,
                                                      Wld3NDzSj: B({ loadMore: n }),
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
                      /*#__PURE__*/ c(A, {
                        children: /*#__PURE__*/ c(C, {
                          className: `framer-qjoxwd-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layout: N,
                          nodeId: `H8B0mZd1L`,
                          scopeId: `fj84GYcOQ`,
                          children: /*#__PURE__*/ c(H, {
                            height: `100%`,
                            id: `H8B0mZd1L`,
                            intensity: 10,
                            layoutId: `H8B0mZd1L`,
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
        }),
        [
          `.framer-kaz9m.framer-z8f15q, .framer-kaz9m .framer-z8f15q { display: block; }`,
          `.framer-kaz9m.framer-xv5uzo { align-content: center; align-items: center; background-color: var(--token-4795dafb-4261-43d3-aa0c-b3831681376e, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-kaz9m .framer-x1o4hl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 60px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-kaz9m .framer-kfnbgk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: hidden; padding: 120px 40px 120px 40px; position: relative; width: 100%; }`,
          `.framer-kaz9m .framer-1wr7s0f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-kaz9m .framer-8v1m88 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-kaz9m .framer-mvv5ul { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-kaz9m .framer-1vuezom { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-kaz9m .framer-go0c1w { display: grid; flex: none; gap: 40px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
          `.framer-kaz9m .framer-6yi4dk-container, .framer-kaz9m .framer-1d5u98s-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
          `.framer-kaz9m .framer-n33i8d { display: grid; flex: none; gap: 80px 40px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
          `.framer-kaz9m .framer-1rtmnaw-container { align-self: start; flex: none; grid-column: span 2; height: auto; justify-self: center; position: relative; width: fit-content; }`,
          `.framer-kaz9m .framer-qjoxwd-container { flex: none; height: auto; position: relative; width: auto; }`,
          `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-kaz9m.framer-xv5uzo { width: 810px; } .framer-kaz9m .framer-x1o4hl { padding: 40px 0px 0px 0px; }}`,
          `@media (max-width: 809.98px) { .framer-kaz9m.framer-xv5uzo { width: 390px; } .framer-kaz9m .framer-x1o4hl { flex-direction: column; padding: 40px 0px 0px 0px; } .framer-kaz9m .framer-kfnbgk { padding: 80px 20px 80px 20px; } .framer-kaz9m .framer-go0c1w { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; } .framer-kaz9m .framer-6yi4dk-container, .framer-kaz9m .framer-1d5u98s-container { align-self: unset; } .framer-kaz9m .framer-n33i8d { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; } .framer-kaz9m .framer-1rtmnaw-container { align-self: unset; width: 100%; }}`,
        ],
        `framer-kaz9m`
      )),
      ($.displayName = `Blogs`),
      ($.defaultProps = { height: 3350.8, width: 1200 }),
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
            ],
          },
          ...Je,
          ...Ye,
          ...Xe,
          ...Ze,
          ...Qe,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = S.get(X(), n, r),
            a = S.get(Z(), n, r);
          return E(
            [
              () => i.preload(),
              () => a.preload(),
              async () => {
                let e = (await I(() => i.readMaybeAsync(), t)) ?? [];
                return E(
                  e.flatMap((e) => () => j(K, {}, t)),
                  t
                );
              },
              async () => {
                let e = (await I(() => a.readMaybeAsync(), t)) ?? [];
                return E(
                  e.flatMap((e) => [() => j(W, {}, t), () => j(U, {}, t)]),
                  t
                );
              },
            ],
            t
          );
        },
      }),
      (lt = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `Framerfj84GYcOQ`,
            slots: [],
            annotations: {
              framerComponentViewportWidth: `true`,
              framerAutoSizeImages: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"KupTBx_YA":{"layout":["fixed","auto"]},"cDKT59Dz6":{"layout":["fixed","auto"]}}}`,
              framerColorSyntax: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerImmutableVariables: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerContractVersion: `1`,
              framerResponsiveScreen: `true`,
              framerScrollSections: `{"N_e6IgS3E":{"pattern":":N_e6IgS3E","name":"blog"}}`,
              framerIntrinsicHeight: `3350.8`,
              framerIntrinsicWidth: `1200`,
              framerDisplayContentsDiv: `false`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
ut();
export { lt as __FramerMetadata__, $ as default, et as queryParamNames };
//# sourceMappingURL=aTriuFmZYPnbiAkYBr0eVxUV28ee51_9hCx5-hScqUI.DO6-WNhS.mjs.map
