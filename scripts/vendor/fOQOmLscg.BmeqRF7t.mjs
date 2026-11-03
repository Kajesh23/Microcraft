import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { B as t, S as n, W as r } from "./framer.mQNi9T2E.mjs";
import { n as i, t as a } from "./shared-lib.BnN6DsbI.mjs";
import { a as o, t as s } from "./vW1JQClGO.HbGkyAHl.mjs";
function c(e, t) {
  let n = e?.txuc2BYLR;
  return {
    breakpoints: [
      { hash: `1khqozz`, mediaQuery: `(min-width: 1200px)` },
      { hash: `14ov7fe`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `e4tdzq`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: { hJaoMbn0r: `process` },
    robots: `max-image-preview:large`,
    serializationId: `framer-1ghYk`,
    title: `${n === void 0 ? `{{txuc2BYLR}}` : d(n)} - DigiPorto`,
    viewport: `width=device-width`,
  };
}
async function l(e, r) {
  let i = new n(),
    a = {
      from: { alias: `fOQOmLscg`, data: s, type: `Collection` },
      select: [{ collection: `fOQOmLscg`, name: `txuc2BYLR`, type: `Identifier` }],
      where: t(e, `fOQOmLscg`),
    },
    o = await i.query(a, r);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, r);
}
async function u(e, t) {
  let r = new n(),
    i = {
      from: { alias: `fOQOmLscg`, data: s, type: `Collection` },
      select: [{ collection: `fOQOmLscg`, name: `txuc2BYLR`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `fOQOmLscg`, name: t, type: `Identifier` });
  return (await r.query(i, t)).map((n) => ({
    metadata: c(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var d, f, p;
function m() {
  return (m = e(() => {
    (r(),
      o(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = 1),
      (p = {
        exports: {
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { c as a, m as i, u as n, f as o, l as r, p as t };
//# sourceMappingURL=fOQOmLscg.BmeqRF7t.mjs.map
