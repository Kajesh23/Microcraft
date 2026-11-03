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
  x as ee,
} from "./react.guramC8M.mjs";
import { S as u, a as d, r as te, t as f } from "./motion.BkENN8JI.mjs";
import {
  A as p,
  Ct as m,
  D as h,
  E as g,
  R as _,
  W as v,
  _t as y,
  g as b,
  k as x,
  m as S,
  o as C,
  st as ne,
  w,
  wt as T,
  z as E,
} from "./framer.mQNi9T2E.mjs";
import { i as D, n as O, r as k, t as A } from "./JLWig38Pv.ClFxyf2Q.mjs";
import { i as j, n as M, r as N, t as P } from "./NxCe_AOfF.D_dhC_6n.mjs";
var F, I, L;
function R() {
  return (R = e(() => {
    (v(),
      p.loadFonts([`GF;Antonio-700`]),
      (F = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Antonio`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/antonio/v19/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVyW9htNY2DwSXlM.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (I = [
        `.framer-Lwdtj .framer-styles-preset-1yryej1:not(.rich-text-wrapper), .framer-Lwdtj .framer-styles-preset-1yryej1.rich-text-wrapper h2 { --framer-font-family: "Antonio", "Antonio Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, #303030); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-Lwdtj .framer-styles-preset-1yryej1:not(.rich-text-wrapper), .framer-Lwdtj .framer-styles-preset-1yryej1.rich-text-wrapper h2 { --framer-font-family: "Antonio", "Antonio Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, #303030); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-Lwdtj .framer-styles-preset-1yryej1:not(.rich-text-wrapper), .framer-Lwdtj .framer-styles-preset-1yryej1.rich-text-wrapper h2 { --framer-font-family: "Antonio", "Antonio Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 42px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, #303030); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
      ]),
      (L = `framer-Lwdtj`));
  }))();
}
function z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (l(),
      v(),
      f(),
      t(),
      D(),
      j(),
      R(),
      (B = [`jtHvjzfih`, `zHkStyin7`, `PuNdfJHuC`]),
      (V = `framer-kaAj1`),
      (H = {
        jtHvjzfih: `framer-v-1agbwxy`,
        PuNdfJHuC: `framer-v-1kyhu9h`,
        zHkStyin7: `framer-v-1t6bu7f`,
      }),
      (U = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (W = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (G = ({ value: e, children: t }) => {
        let n = r(d),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return /*#__PURE__*/ s(d.Provider, { value: o, children: t });
      }),
      (K = u.create(n)),
      (q = { Desktop: `jtHvjzfih`, Phone: `PuNdfJHuC`, Tablet: `zHkStyin7` }),
      (J = ({
        cursor: e,
        height: t,
        id: n,
        link: r,
        mainCoverImage: i,
        projectType: a,
        shortDescription: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        f6GhLQWMp: e ?? l.f6GhLQWMp,
        KBFHunrYp: s ?? l.KBFHunrYp ?? `Summer Vibes Festival Campaign`,
        MeFTBGBlh:
          o ??
          l.MeFTBGBlh ??
          `Created promotional materials for the "Summer Vibes Festival," including posters, flyers, and social media graphics.`,
        QNIR2J_BM: r ?? l.QNIR2J_BM,
        U5OyUEe9n: a ?? l.U5OyUEe9n ?? `Design Verification`,
        variant: q[l.variant] ?? l.variant ?? `jtHvjzfih`,
        w0GA6APtY: i ??
          l.w0GA6APtY ?? {
            pixelHeight: 800,
            pixelWidth: 1200,
            src: `https://framerusercontent.com/images/w08JBQPFYIq2vr4OfcD9W6vxEug.jpeg?width=1200&height=800`,
            srcSet: `https://framerusercontent.com/images/w08JBQPFYIq2vr4OfcD9W6vxEug.jpeg?scale-down-to=512&width=1200&height=800 512w,https://framerusercontent.com/images/w08JBQPFYIq2vr4OfcD9W6vxEug.jpeg?scale-down-to=1024&width=1200&height=800 1024w,https://framerusercontent.com/images/w08JBQPFYIq2vr4OfcD9W6vxEug.jpeg?width=1200&height=800 1200w`,
          },
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = /*#__PURE__*/ c(function (e, t) {
        let r = ee(null),
          i = t ?? r,
          c = a(),
          { activeLocale: l, setLocale: d } = y(),
          f = ne(),
          {
            style: p,
            className: h,
            layoutId: g,
            variant: _,
            U5OyUEe9n: v,
            KBFHunrYp: C,
            MeFTBGBlh: T,
            QNIR2J_BM: D,
            w0GA6APtY: O,
            f6GhLQWMp: k,
            ...j
          } = J(e),
          {
            baseVariant: M,
            classNames: N,
            clearLoadingGesture: F,
            gestureHandlers: I,
            gestureVariant: R,
            isLoading: q,
            setGestureState: X,
            setVariant: Z,
            variants: Q,
          } = m({
            cycleOrder: B,
            defaultVariant: `jtHvjzfih`,
            ref: i,
            variant: _,
            variantClassNames: H,
          }),
          $ = Y(e, Q),
          re = x(V, A, L, P),
          ie = () => M !== `PuNdfJHuC`,
          ae = () => M === `PuNdfJHuC`;
        return /*#__PURE__*/ s(te, {
          id: g ?? c,
          children: /*#__PURE__*/ s(K, {
            animate: Q,
            initial: !1,
            children: /*#__PURE__*/ s(G, {
              value: U,
              children: /*#__PURE__*/ s(u.div, {
                ...j,
                ...I,
                className: x(re, `framer-1agbwxy`, h, N),
                "data-framer-name": `Desktop`,
                layoutDependency: $,
                layoutId: `jtHvjzfih`,
                ref: i,
                style: { ...p },
                ...z(
                  {
                    PuNdfJHuC: { "data-framer-name": `Phone` },
                    zHkStyin7: { "data-framer-name": `Tablet` },
                  },
                  M,
                  R
                ),
                children: /*#__PURE__*/ o(u.div, {
                  className: `framer-16vqrdk`,
                  "data-framer-name": `Project Item`,
                  layoutDependency: $,
                  layoutId: `mzYJkerGb`,
                  children: [
                    /*#__PURE__*/ s(b, {
                      href: D,
                      motionChild: !0,
                      nodeId: `Fg_XLmb_G`,
                      scopeId: `ZEOox1xX9`,
                      children: /*#__PURE__*/ o(u.a, {
                        className: `framer-ensd48 framer-j3v7uw`,
                        "data-framer-name": `Project Cover`,
                        layoutDependency: $,
                        layoutId: `Fg_XLmb_G`,
                        style: {
                          borderBottomLeftRadius: 20,
                          borderBottomRightRadius: 20,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                        children: [
                          /*#__PURE__*/ s(S, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: E(
                                (f?.y || 0) + (0 + ((f?.height || 800) - 0 - 400) / 2) + 0 + 0 + 0
                              ),
                              sizes: `max(${f?.width || `100vw`}, 1px)`,
                              ...W(O),
                            },
                            className: `framer-11gwpp8`,
                            "data-framer-cursor": k,
                            layoutDependency: $,
                            layoutId: `bPQaPTBZb`,
                            ...z(
                              {
                                PuNdfJHuC: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: E(
                                      (f?.y || 0) +
                                        (0 + ((f?.height || 433) - 0 - 391) / 2) +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    sizes: `max(${f?.width || `100vw`}, 1px)`,
                                    ...W(O),
                                  },
                                },
                                zHkStyin7: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: E(
                                      (f?.y || 0) +
                                        (0 + ((f?.height || 500) - 0 - 500) / 2) +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    sizes: `max(${f?.width || `100vw`}, 1px)`,
                                    ...W(O),
                                  },
                                },
                              },
                              M,
                              R
                            ),
                          }),
                          /*#__PURE__*/ s(u.div, {
                            className: `framer-17rrz4o`,
                            "data-framer-name": `Overlay Gradient`,
                            layoutDependency: $,
                            layoutId: `PsavakAmG`,
                            style: {
                              background: `linear-gradient(180deg, rgba(12, 12, 13, 0.45) 0%, rgba(12, 12, 13, 0.8) 100%)`,
                              opacity: 0.6,
                            },
                          }),
                          /*#__PURE__*/ o(u.div, {
                            className: `framer-12s38yx`,
                            "data-framer-name": `Project Info`,
                            layoutDependency: $,
                            layoutId: `Y2S6zQMc2`,
                            children: [
                              /*#__PURE__*/ s(u.div, {
                                className: `framer-12o7i4v`,
                                "data-framer-name": `Category Badge`,
                                layoutDependency: $,
                                layoutId: `EV_IR2Iw2`,
                                style: {
                                  backgroundColor: `var(--token-54672876-03f0-4dca-8fdb-32c421a5c4d1, rgb(106, 113, 223))`,
                                  borderBottomLeftRadius: 99,
                                  borderBottomRightRadius: 99,
                                  borderTopLeftRadius: 99,
                                  borderTopRightRadius: 99,
                                },
                                children: /*#__PURE__*/ s(w, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ s(n, {
                                    children: /*#__PURE__*/ s(u.p, {
                                      className: `framer-styles-preset-a6ucvx`,
                                      "data-styles-preset": `JLWig38Pv`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255)))`,
                                      },
                                      children: `Graphic Design`,
                                    }),
                                  }),
                                  className: `framer-1rmvwl7`,
                                  "data-framer-name": `Category`,
                                  fonts: [`Inter`],
                                  layoutDependency: $,
                                  layoutId: `G7026GFrk`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-861b2ae9-dee3-4143-a255-6faa9a39d943, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: v,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              /*#__PURE__*/ o(u.div, {
                                className: `framer-1d4qpws`,
                                "data-framer-name": `Text Wrap`,
                                layoutDependency: $,
                                layoutId: `M8KPFX7uu`,
                                children: [
                                  /*#__PURE__*/ s(w, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ s(n, {
                                      children: /*#__PURE__*/ s(u.h2, {
                                        className: `framer-styles-preset-1yryej1`,
                                        "data-styles-preset": `TTqvVnbYq`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-1of0zx5, var(--token-39a5a1be-d79a-43ee-a7a4-d32ef142beed, rgb(255, 255, 255)))`,
                                        },
                                        children: `Summer Vibes Festival Campaign`,
                                      }),
                                    }),
                                    className: `framer-qhutoj`,
                                    fonts: [`Inter`],
                                    layoutDependency: $,
                                    layoutId: `fdvifwMwM`,
                                    style: {
                                      "--extracted-1of0zx5": `var(--token-39a5a1be-d79a-43ee-a7a4-d32ef142beed, rgb(255, 255, 255))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    text: C,
                                    variants: {
                                      PuNdfJHuC: {
                                        "--extracted-a0htzi": `var(--token-39a5a1be-d79a-43ee-a7a4-d32ef142beed, rgb(255, 255, 255))`,
                                      },
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...z(
                                      {
                                        PuNdfJHuC: {
                                          children: /*#__PURE__*/ s(n, {
                                            children: /*#__PURE__*/ s(u.h3, {
                                              className: `framer-styles-preset-12q7ivy`,
                                              "data-styles-preset": `NxCe_AOfF`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-a0htzi, var(--token-39a5a1be-d79a-43ee-a7a4-d32ef142beed, rgb(255, 255, 255)))`,
                                              },
                                              children: `Summer Vibes Festival Campaign`,
                                            }),
                                          }),
                                        },
                                      },
                                      M,
                                      R
                                    ),
                                  }),
                                  ie() &&
                                    /*#__PURE__*/ s(w, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ s(n, {
                                        children: /*#__PURE__*/ s(u.p, {
                                          className: `framer-styles-preset-a6ucvx`,
                                          "data-styles-preset": `JLWig38Pv`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-39a5a1be-d79a-43ee-a7a4-d32ef142beed, rgb(255, 255, 255)))`,
                                          },
                                          children: `Created promotional materials for the "Summer Vibes Festival," including posters, flyers, and social media graphics.`,
                                        }),
                                      }),
                                      className: `framer-m8h9u9`,
                                      fonts: [`Inter`],
                                      layoutDependency: $,
                                      layoutId: `EQxrqRHp_`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-39a5a1be-d79a-43ee-a7a4-d32ef142beed, rgb(255, 255, 255))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: T,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    ae() &&
                      /*#__PURE__*/ s(w, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ s(n, {
                          children: /*#__PURE__*/ s(u.p, {
                            className: `framer-styles-preset-a6ucvx`,
                            "data-styles-preset": `JLWig38Pv`,
                            style: {
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48)))`,
                            },
                            children: `Created promotional materials for the "Summer Vibes Festival," including posters, flyers, and social media graphics.`,
                          }),
                        }),
                        className: `framer-ldojh2`,
                        fonts: [`Inter`],
                        layoutDependency: $,
                        layoutId: `a3Gsvz9GU`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-a9f688eb-778b-4a71-929e-ebf8a014b4cf, rgb(48, 48, 48))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: T,
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
      (Z = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-kaAj1.framer-j3v7uw, .framer-kaAj1 .framer-j3v7uw { display: block; }`,
        `.framer-kaAj1.framer-1agbwxy { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-kaAj1 .framer-16vqrdk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kaAj1 .framer-ensd48 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kaAj1 .framer-11gwpp8 { aspect-ratio: 1.5 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 800px); overflow: hidden; position: relative; width: 1px; }`,
        `.framer-kaAj1 .framer-17rrz4o { flex: none; height: 100%; left: 0px; pointer-events: none; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-kaAj1 .framer-12s38yx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: visible; padding: 0px; pointer-events: none; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`,
        `.framer-kaAj1 .framer-12o7i4v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 3px 15px 3px 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kaAj1 .framer-1rmvwl7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-kaAj1 .framer-1d4qpws { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kaAj1 .framer-qhutoj { flex: none; height: auto; max-width: 800px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-kaAj1 .framer-m8h9u9, .framer-kaAj1 .framer-ldojh2 { flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-kaAj1.framer-v-1t6bu7f.framer-1agbwxy { width: 500px; }`,
        `.framer-kaAj1.framer-v-1t6bu7f .framer-16vqrdk { align-content: flex-start; align-items: flex-start; }`,
        `.framer-kaAj1.framer-v-1t6bu7f .framer-ensd48, .framer-kaAj1.framer-v-1kyhu9h .framer-ensd48 { order: 0; }`,
        `.framer-kaAj1.framer-v-1t6bu7f .framer-11gwpp8 { aspect-ratio: unset; height: 500px; }`,
        `.framer-kaAj1.framer-v-1kyhu9h.framer-1agbwxy { width: 350px; }`,
        `.framer-kaAj1.framer-v-1kyhu9h .framer-16vqrdk { gap: 20px; }`,
        `.framer-kaAj1.framer-v-1kyhu9h .framer-11gwpp8 { aspect-ratio: unset; height: 350px; }`,
        `.framer-kaAj1.framer-v-1kyhu9h .framer-12s38yx { gap: 10px; }`,
        `.framer-kaAj1.framer-v-1kyhu9h .framer-1d4qpws { padding: 0px 20px 0px 20px; }`,
        `.framer-kaAj1.framer-v-1kyhu9h .framer-ldojh2 { order: 1; }`,
        ...O,
        ...I,
        ...M,
      ]),
      (Q = T(X, Z, `framer-kaAj1`)),
      (Q.displayName = `Featured Project Card`),
      (Q.defaultProps = { height: 800, width: 1200 }),
      h(Q, {
        variant: {
          options: [`jtHvjzfih`, `zHkStyin7`, `PuNdfJHuC`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: C.Enum,
        },
        U5OyUEe9n: { defaultValue: `Design Verification`, title: `Project Type`, type: C.String },
        KBFHunrYp: {
          defaultValue: `Summer Vibes Festival Campaign`,
          title: `Title`,
          type: C.String,
        },
        MeFTBGBlh: {
          defaultValue: `Created promotional materials for the "Summer Vibes Festival," including posters, flyers, and social media graphics.`,
          title: `Short Description`,
          type: C.String,
        },
        QNIR2J_BM: { title: `Link`, type: C.Link },
        w0GA6APtY: {
          __defaultAssetReference: `data:framer/asset-reference,w08JBQPFYIq2vr4OfcD9W6vxEug.jpeg?originalFilename=Cyberpunk+Neon+Visor.jpeg&preferredSize=auto`,
          title: `Main Cover Image*`,
          type: C.ResponsiveImage,
        },
        f6GhLQWMp: { title: `Cursor`, type: C.CustomCursor },
      }),
      g(
        Q,
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
          ..._(k),
          ..._(F),
          ..._(N),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { $ as n, Q as t };
//# sourceMappingURL=ZEOox1xX9.B6zZbset.mjs.map
