import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { B as t, S as n, W as r } from "./framer.mQNi9T2E.mjs";
import { i, t as a } from "./l9KTJXLB2.D9kwcrFC.mjs";
function o(e, t) {
  let n = e?.wWT4jlIQ9,
    r = e?.TCax3X2ch;
  return {
    breakpoints: [
      { hash: `bb8acl`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1bzc4j9`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1nlvvau`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{TCax3X2ch}}` : l(r)}`,
    elements: { Y6b0HmZtt: `blog` },
    robots: `max-image-preview:large`,
    serializationId: `framer-vNocY`,
    title: `${n === void 0 ? `{{wWT4jlIQ9}}` : l(n)} - DigiPorto`,
    viewport: `width=device-width`,
  };
}
async function s(e, r) {
  let i = new n(),
    s = {
      from: { alias: `SV7i6KgIh`, data: a, type: `Collection` },
      select: [
        { collection: `SV7i6KgIh`, name: `wWT4jlIQ9`, type: `Identifier` },
        { collection: `SV7i6KgIh`, name: `TCax3X2ch`, type: `Identifier` },
      ],
      where: t(e, `SV7i6KgIh`),
    },
    c = await i.query(s, r);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, r);
}
async function c(e, t) {
  let r = new n(),
    i = {
      from: { alias: `SV7i6KgIh`, data: a, type: `Collection` },
      select: [
        { collection: `SV7i6KgIh`, name: `wWT4jlIQ9`, type: `Identifier` },
        { collection: `SV7i6KgIh`, name: `TCax3X2ch`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `SV7i6KgIh`, name: t, type: `Identifier` });
  return (await r.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l, u, d;
function f() {
  return (f = e(() => {
    (r(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          fetchMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { o as a, f as i, c as n, u as o, s as r, d as t };
//# sourceMappingURL=SV7i6KgIh.ZRsSxFYZ.mjs.map
