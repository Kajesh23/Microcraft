import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  B as n,
  C as r,
  E as i,
  F as a,
  I as o,
  O as s,
  V as c,
  _ as l,
  a as u,
  b as d,
  d as f,
  h as p,
  i as ee,
  n as m,
  r as h,
  t as g,
  v as _,
  x as v,
  z as y,
} from "./react.guramC8M.mjs";
import {
  $ as b,
  At as x,
  G as S,
  H as C,
  J as w,
  Ot as T,
  Q as E,
  St as te,
  U as ne,
  W as re,
  X as D,
  _t as ie,
  at as ae,
  c as O,
  h as k,
  lt as A,
  nt as j,
  p as M,
  q as N,
  rt as P,
  v as F,
  y as I,
} from "./framer.mQNi9T2E.mjs";
import { n as L, t as R } from "./toplevel-deps.CrcF9UeY.mjs";
function z({ webPageId: e, children: t, style: n, ...r }) {
  let i = {},
    a =
      {
        augiA20Il: i,
        dZoiRDoY3: i,
        fj84GYcOQ: i,
        fOQOmLscg: i,
        o1ZMLh8zw: i,
        qcDDX8i1m: i,
        SV7i6KgIh: i,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `o1ZMLh8zw`:
    case `dZoiRDoY3`:
    case `fj84GYcOQ`:
    case `qcDDX8i1m`:
    case `SV7i6KgIh`:
    case `fOQOmLscg`:
      return f(R, { ...a, key: `Main`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function B(e) {
  switch (e) {
    case `augiA20Il`:
    case `o1ZMLh8zw`:
    case `dZoiRDoY3`:
    case `fj84GYcOQ`:
    case `qcDDX8i1m`:
    case `SV7i6KgIh`:
    case `fOQOmLscg`:
      return [
        { hash: `egmbj8`, mediaQuery: `(min-width: 1200px)` },
        { hash: `160pjv0`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1gmdhm4`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
function V({ routeId: e, pathVariables: t, localeId: n }) {
  return (
    (Q ??= b({
      routes: G,
      routeId: e,
      pathVariables: t,
      localeId: n,
      locales: K,
      collectionUtils: q,
    })),
    Q
  );
}
async function H({
  routeId: e,
  pathVariables: n,
  canonicalPathVariables: i,
  localeId: a,
  collectionItemId: l,
  contentLocaleId: u,
  shouldResolveInitialRouteContentState: p = !1,
}) {
  (P({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    j(Y));
  let m = G[e].page.preload(),
    h = G[e];
  if (p && l === void 0 && h.collectionId) {
    let t = await V({ routeId: e, pathVariables: n, localeId: a });
    ((u ??= t.contentLocaleId), (i ??= t.canonicalPathVariables));
  }
  let g = f(I, {
      isWebsite: !0,
      environment: `site`,
      routeId: e,
      pathVariables: n,
      canonicalPathVariables: i,
      routes: G,
      collectionUtils: q,
      serverDatabaseClient: J,
      framerSiteId: Y,
      notFoundPage: S(() => import("./rx9rNV3ibCeh0t_y0HIHlJKpTtIVn7iR6lXRrdT0yeo.DMdsdHbR.mjs")),
      isReducedMotion: !0,
      localeId: a,
      locales: K,
      preserveQueryParams: !1,
      siteCanonicalURL: `https://harsharadh.framer.website`,
      EditorBar:
        c === void 0
          ? void 0
          : (() => {
              if (Z) console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
              else
                return S(async () => {
                  c.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: A, useLocaleInfo: ie, useRouter: te },
                    react: {
                      createElement: f,
                      Fragment: o,
                      memo: r,
                      useCallback: t,
                      useEffect: d,
                      useRef: v,
                      useState: _,
                      useLayoutEffect: s,
                    },
                    "react-dom": { createPortal: ee },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
            })(),
      adaptLayoutToTextDirection: !1,
      LayoutTemplate: z,
      loadSnippetsModule: new k(
        () => import("./8NIuH9QxhoskudfzsuNYXsC0g5pIT3euLCiGGKjewSs.CGWdY7f-.mjs")
      ),
      initialCollectionItemId: l,
      initialContentLocaleIdOverride: u,
    }),
    y = f(M, { children: g }),
    b = f(F, {
      children: y,
      value: {
        global: {
          enter: {
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.2,
              ease: [0.27, 0, 0.51, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `0px`,
          },
          exit: {
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0.2,
              duration: 0.2,
              ease: [0.27, 0, 0.51, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `0px`,
          },
        },
        routes: {},
      },
    });
  return (await m, b);
}
function U() {
  X && c.__framer_events.push(arguments);
}
async function W(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || c.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    U(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, o, s, l, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (r = d.routeId),
        (i = d.localeId),
        (o = d.contentLocaleId),
        (s = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (r = D(G, r)));
    else {
      D(G, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((s ??= {}), (s[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = C(G, decodeURIComponent(location.pathname), !0, K);
        ((r = e.routeId), (i = e.localeId), (s = e.pathVariables));
      }
    }
    let f = H({
      routeId: r,
      localeId: i,
      contentLocaleId: o,
      pathVariables: s,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    c !== void 0 &&
      (async () => {
        let e = G[r],
          t = K.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n;
        n =
          d?.collectionItemId === void 0
            ? e?.collectionId
              ? await (
                  await V({ routeId: r, pathVariables: s, localeId: i })
                ).collectionItemId
              : null
            : d.collectionItemId;
        let a = Intl.DateTimeFormat().resolvedOptions(),
          o = a.timeZone,
          l = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          c.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Y,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: c.location.href,
              hostname: c.location.hostname || null,
              pathname: c.location.pathname || null,
              hash: c.location.hash || null,
              search: c.location.search || null,
              timezone: o,
              locale: l,
            },
            `eager`,
          ]),
          await x({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (T(`framer-rewrite-breakpoints`, () => {
          (E(u), c.__framer_onRewriteBreakpoints?.(u));
        }),
        (Z ? (e) => e() : a)(() => {
          (w(), ae(), g(t, p, { onRecoverableError: n }));
        }))
      : (await N(), h(t, { onRecoverableError: n }).render(p));
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    if (
      (y(),
      re(),
      i(),
      u(),
      m(),
      L(),
      (G = {
        augiA20Il: {
          elementPatterns: {
            Aa2FRDhar: `:FCspUx7gv-project-3`,
            nxWENchwD: `:FCspUx7gv-project-1`,
            TXuvFJlxM: `:FCspUx7gv-project-2`,
            uO7X4uyFD: `:FCspUx7gv-project`,
          },
          elements: {
            Aa2FRDhar: `project-3`,
            ipBsBnvZr: `featured-project-1`,
            kEmlb9aLa: `featured-project-3`,
            nxWENchwD: `project-1`,
            pygupB0pf: `contact`,
            q1iYpJuA5: `featured-project-2`,
            Rd4N98ip7: `service`,
            TXuvFJlxM: `project-2`,
            uO7X4uyFD: `project`,
            wdZDumqQr: `hero`,
            Y32c4RXpa: `blog`,
            z940ZBfKS: `about`,
            ZSGta1iBW: `featured-project-4`,
          },
          page: S(() => import("./4BpVYPJr3AS1qhULpPNjSXUsflHOv0ksXeC5LZAj2XY.BR6FrPCc.mjs")),
          path: `/`,
        },
        o1ZMLh8zw: {
          elements: {
            CK2m24XLr: `service`,
            GWkmEURv4: `about`,
            hFDd0E5_9: `tech-stack`,
            QcV4RDVh7: `experience`,
            VYkM1TJPS: `process`,
            Y7aWERawl: `contact`,
          },
          page: S(() => import("./KTzGegc6tuRSpINLIZcqzauFAGYqe7mQGlu06ZkvGSE.-WjI4tlm.mjs")),
          path: `/about`,
        },
        dZoiRDoY3: {
          elementPatterns: {
            OYAWPcky5: `:FCspUx7gv-project-1`,
            Ttzi8G0Ja: `:FCspUx7gv-project-4`,
            TYRweC7ro: `:FCspUx7gv-project-2`,
            x1s23MOZT: `:FCspUx7gv-project-3`,
          },
          elements: {
            FZeXSkr6y: `featured-project-4`,
            guXryEOZu: `featured-project-1`,
            nTHHEk5gD: `featured-project-2`,
            OYAWPcky5: `project-1`,
            Ttzi8G0Ja: `project-4`,
            TYRweC7ro: `project-2`,
            wKhPU1J7p: `project`,
            x1s23MOZT: `project-3`,
            zDqvDICyl: `featured-project-3`,
          },
          page: S(() => import("./MUvXT3e7Ocslmq6TbmRM3jK1qjwSOYpfHI79BmH0IJk.DUUZCyRW.mjs")),
          path: `/projects`,
        },
        fj84GYcOQ: {
          elements: { N_e6IgS3E: `blog` },
          page: S(() => import("./aTriuFmZYPnbiAkYBr0eVxUV28ee51_9hCx5-hScqUI.DO6-WNhS.mjs")),
          path: `/blogs`,
        },
        qcDDX8i1m: {
          elements: { m5Wy_vbq5: `hero` },
          page: S(() => import("./rx9rNV3ibCeh0t_y0HIHlJKpTtIVn7iR6lXRrdT0yeo.DMdsdHbR.mjs")),
          path: `/404`,
        },
        SV7i6KgIh: {
          collectionId: `l9KTJXLB2`,
          elements: { Y6b0HmZtt: `blog` },
          page: S(() => import("./0iKjZppr_qCaqm2xvtzDvfABn15PGjKJPWLvp_a7n0U.DzdaYVB-.mjs")),
          path: `/blogs/:SG0PXpmii`,
        },
        fOQOmLscg: {
          collectionId: `vW1JQClGO`,
          elements: { hJaoMbn0r: `process` },
          page: S(() => import("./taxsAPSI5CaDAeR6XVOV1LcbJtRxsOeQuynCHPFmrOA.DLv9_ffb.mjs")),
          path: `/projects/:FCspUx7gv`,
        },
      }),
      (K = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
      (q = {
        l9KTJXLB2: async () =>
          (await import("./aTY9JZeehqVUh2wGo7nKeeyaHjbJqZxvZD1t4wj2moA.DpltKfCD.mjs"))?.utils,
        vW1JQClGO: async () =>
          (await import("./HcUDFlv0N0vT6q5hfNSkQUCH4XlFkYExteUCCY_Z35M.EYoKWMx0.mjs"))?.utils,
      }),
      (J = void 0),
      (Y = `47a1a2030d383d0fcef6594efa622b530b9386226b6b63c0d7dac4407fcde7f7`),
      (X = typeof document < `u`),
      (Z = X && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(n.userAgent)),
      X)
    ) {
      ((c.__framer_importFromPackage = (e, t) => () =>
        f(O, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
        (c.__framer_events = c.__framer_events || []),
        ne());
      let e = document.getElementById(`main`);
      `framerHydrateV2` in e.dataset ? W(!0, e) : W(!1, e);
    }
  }))();
}
$();
export { B as getLayoutTemplateBreakpoints, H as getPageRoot };
//# sourceMappingURL=script_main.U3ac34pV.mjs.map
