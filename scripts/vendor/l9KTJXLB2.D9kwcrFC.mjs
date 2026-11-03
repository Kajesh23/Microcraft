import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { E as t, I as n, d as r, m as i, o as a, s as o } from "./react.guramC8M.mjs";
import { S as s } from "./motion.BkENN8JI.mjs";
import {
  At as c,
  D as l,
  S as u,
  W as d,
  g as ee,
  o as f,
  r as te,
  t as ne,
} from "./framer.mQNi9T2E.mjs";
function p(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function m(e) {
  return typeof e == `function` ? e() : e;
}
function re(e, t) {
  return j[e] > j[t];
}
function h(e) {
  let t;
  for (let n of e) {
    let e = m(n);
    if (((t === void 0 || re(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function g(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function _(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function v(e) {
  throw Error(`Unexpected value: ${e}`);
}
function y(e, t, n, r) {
  (_(e >= t, e, `outside lower bound for`, r), _(e <= n, e, `outside upper bound for`, r));
}
function b(e) {
  return typeof e == `string`;
}
function x(e) {
  return Number.isFinite(e);
}
function S(e) {
  return e === null;
}
function C(e) {
  if (S(e)) return 0;
  switch (e.type) {
    case `array`:
      return 1;
    case `boolean`:
      return 2;
    case `color`:
      return 3;
    case `date`:
      return 4;
    case `enum`:
      return 5;
    case `file`:
      return 6;
    case `responsiveimage`:
      return 10;
    case `link`:
      return 7;
    case `number`:
      return 8;
    case `object`:
      return 9;
    case `richtext`:
      return 11;
    case `string`:
      return 12;
    case `vectorsetitem`:
      return 13;
    default:
      v(e);
  }
}
function ie(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = O.read(e);
    n.push(t);
  }
  return { type: `array`, value: n };
}
function ae(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) O.write(e, n);
}
function oe(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = O.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function se(e) {
  return { type: `boolean`, value: e.readUint8() !== 0 };
}
function ce(e, t) {
  e.writeUint8(+!!t.value);
}
function le(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ue(e) {
  return { type: `color`, value: e.readString() };
}
function de(e, t) {
  e.writeString(t.value);
}
function fe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function pe(e) {
  let t = e.readInt64();
  return { type: `date`, value: new Date(t).toISOString() };
}
function me(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function he(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function ge(e) {
  return { type: `enum`, value: e.readString() };
}
function _e(e, t) {
  e.writeString(t.value);
}
function ve(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ye(e) {
  return { type: `file`, value: e.readString() };
}
function be(e, t) {
  e.writeString(t.value);
}
function xe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Se(e) {
  return { type: `link`, value: e.readJson() };
}
function Ce(e, t) {
  e.writeJson(t.value);
}
function we(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Te(e) {
  return { type: `number`, value: e.readFloat64() };
}
function Ee(e, t) {
  e.writeFloat64(t.value);
}
function De(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Oe(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = O.read(e);
  }
  return { type: `object`, value: n };
}
function ke(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), O.write(e, r));
}
function Ae(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = O.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function je(e) {
  return { type: `responsiveimage`, value: e.readJson() };
}
function Me(e, t) {
  e.writeJson(t.value);
}
function Ne(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Pe(e) {
  let t = e.readInt8();
  if (t === 0) return { type: `richtext`, value: e.readUint32() };
  if (t === 1) return { type: `richtext`, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Fe(e, t) {
  if (x(t.value)) (e.writeInt8(0), e.writeUint32(t.value));
  else if (b(t.value)) (e.writeInt8(1), e.writeString(t.value));
  else throw Error(`Invalid rich text pointer`);
}
function Ie(e, t) {
  let n = e.value,
    r = t.value;
  if ((x(n) && x(r)) || (b(n) && b(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Le(e) {
  return { type: `string`, value: e.readString() };
}
function Re(e, t) {
  e.writeString(t.value);
}
function ze(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Be(e) {
  return { type: `vectorsetitem`, value: e.readUint32() };
}
function Ve(e, t) {
  e.writeUint32(t.value);
}
function He(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Ue(e) {
  let t = Math.floor(it * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function w(e, t) {
  let n = We(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await V(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new ot(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function T(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function We(e) {
  _(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function E(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = O.read(e);
  }
  return t;
}
function* Ge(e) {
  for (let t of e) yield* t.prioritySources;
}
var D,
  O,
  Ke,
  k,
  qe,
  A,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  j,
  M,
  N,
  et,
  tt,
  P,
  F,
  I,
  L,
  R,
  nt,
  z,
  rt,
  B,
  it,
  at,
  V,
  ot,
  H,
  st,
  ct;
function lt() {
  return (lt = e(() => {
    (d(),
      (Ke = Object.create),
      (k = Object.defineProperty),
      (qe = Object.getOwnPropertyDescriptor),
      (A = Object.getOwnPropertyNames),
      (Je = Object.getPrototypeOf),
      (Ye = Object.prototype.hasOwnProperty),
      (Xe = (e, t) =>
        function () {
          try {
            return (t || (0, e[A(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (Ze = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of A(t))
            Ye.call(e, i) ||
              i === n ||
              k(e, i, { get: () => t[i], enumerable: !(r = qe(t, i)) || r.enumerable });
        return e;
      }),
      (Qe = (e, t, n) => (
        (n = e == null ? {} : Ke(Je(e))),
        Ze(!t && e && e.__esModule ? n : k(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      ($e = Qe(
        Xe({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = /* @__PURE__ */ (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (e && !1 === e.batch) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (e && !1 === e.cache) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return /* @__PURE__ */ new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) o(t);
                              else {
                                try {
                                  n = e._batchLoadFn(t.keys);
                                } catch (n) {
                                  return a(
                                    e,
                                    t,
                                    TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                        String(n) +
                                        `.`
                                    )
                                  );
                                }
                                if (!n || typeof n.then != `function`)
                                  return a(
                                    e,
                                    t,
                                    TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                        String(n) +
                                        `.`
                                    )
                                  );
                                n.then(function (e) {
                                  if (!s(e))
                                    throw TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                        String(e) +
                                        `.`
                                    );
                                  if (e.length !== t.keys.length)
                                    throw TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                        String(t.keys) +
                                        `

Values:
` +
                                        String(e)
                                    );
                                  o(t);
                                  for (var n = 0; n < t.callbacks.length; n++) {
                                    var r = e[n];
                                    r instanceof Error
                                      ? t.callbacks[n].reject(r)
                                      : t.callbacks[n].resolve(r);
                                  }
                                }).catch(function (n) {
                                  a(e, t, n);
                                });
                              }
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (j = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (M = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (N =
        ((D = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = M.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = M.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = M.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = M.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = M.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = M.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = M.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = M.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = M.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = M.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (p(this, `bytes`, void 0),
              p(this, `offset`, 0),
              p(this, `view`, void 0),
              (this.bytes = e),
              (this.view = g(this.bytes)));
          }
        }),
        p(D, `textDecoder`, new TextDecoder()),
        D)),
      (et = 1024),
      (tt = 1.5),
      (P = (e) => 2 ** e - 1),
      (F = (e) => -(2 ** (e - 1))),
      (I = (e) => 2 ** (e - 1) - 1),
      (L = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: F(8),
        Int16: F(16),
        Int32: F(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (R = {
        Uint8: P(8),
        Uint16: P(16),
        Uint32: P(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: I(8),
        Int16: I(16),
        Int32: I(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (nt = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * tt) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = g(n)));
        }
        writeUint8(e) {
          y(e, L.Uint8, R.Uint8, `Uint8`);
          let t = M.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          y(e, L.Uint16, R.Uint16, `Uint16`);
          let t = M.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          y(e, L.Uint32, R.Uint32, `Uint32`);
          let t = M.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          y(e, L.Uint64, R.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          y(e, L.BigUint64, R.BigUint64, `BigUint64`);
          let t = M.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          y(e, L.Int8, R.Int8, `Int8`);
          let t = M.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          y(e, L.Int16, R.Int16, `Int16`);
          let t = M.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          y(e, L.Int32, R.Int32, `Int32`);
          let t = M.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          y(e, L.Int64, R.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          y(e, L.BigInt64, R.BigInt64, `BigInt64`);
          let t = M.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = M.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = M.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (p(this, `offset`, 0),
            p(this, `bytes`, new Uint8Array(et)),
            p(this, `view`, g(this.bytes)),
            p(this, `encoder`, new TextEncoder()),
            p(this, `encodedStrings`, /* @__PURE__ */ new Map()));
        }
      }),
      (z = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            _(x(n), `Invalid chunkId`),
            _(x(r), `Invalid offset`),
            _(x(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (_(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (p(this, `chunkId`, void 0),
            p(this, `offset`, void 0),
            p(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return ie(e);
            case 2:
              return se(e);
            case 3:
              return ue(e);
            case 4:
              return pe(e);
            case 5:
              return ge(e);
            case 6:
              return ye(e);
            case 7:
              return Se(e);
            case 8:
              return Te(e);
            case 9:
              return Oe(e);
            case 10:
              return je(e);
            case 11:
              return Pe(e);
            case 12:
              return Le(e);
            case 13:
              return Be(e);
            default:
              v(t);
          }
        }),
          (e.write = function (e, t) {
            let n = C(t);
            if ((e.writeUint8(n), !S(t)))
              switch (t.type) {
                case `array`:
                  return ae(e, t);
                case `boolean`:
                  return ce(e, t);
                case `color`:
                  return de(e, t);
                case `date`:
                  return me(e, t);
                case `enum`:
                  return _e(e, t);
                case `file`:
                  return be(e, t);
                case `link`:
                  return Ce(e, t);
                case `number`:
                  return Ee(e, t);
                case `object`:
                  return ke(e, t);
                case `responsiveimage`:
                  return Me(e, t);
                case `richtext`:
                  return Fe(e, t);
                case `vectorsetitem`:
                  return Ve(e, t);
                case `string`:
                  return Re(e, t);
                default:
                  v(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = C(e),
              i = C(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (S(e) || S(t)) return 0;
            switch (e.type) {
              case `array`:
                return (_(t.type === `array`), oe(e, t, n));
              case `boolean`:
                return (_(t.type === `boolean`), le(e, t));
              case `color`:
                return (_(t.type === `color`), fe(e, t));
              case `date`:
                return (_(t.type === `date`), he(e, t));
              case `enum`:
                return (_(t.type === `enum`), ve(e, t));
              case `file`:
                return (_(t.type === `file`), xe(e, t));
              case `link`:
                return (_(t.type === `link`), we(e, t));
              case `number`:
                return (_(t.type === `number`), De(e, t));
              case `object`:
                return (_(t.type === `object`), Ae(e, t, n));
              case `responsiveimage`:
                return (_(t.type === `responsiveimage`), Ne(e, t));
              case `richtext`:
                return (_(t.type === `richtext`), Ie(e, t));
              case `vectorsetitem`:
                return (_(t.type === `vectorsetitem`), He(e, t));
              case `string`:
                return (_(t.type === `string`), ze(e, t, n));
              default:
                v(e);
            }
          }));
      })((O ||= {})),
      (rt = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = O.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static async deserialize(t, n) {
          let r = new N(t),
            i = r.readJson(),
            a = r.readUint8(),
            o = [];
          for (let e = 0; e < a; e++) {
            let e = r.readString();
            o.push(e);
          }
          let s = new e(o, { collation: i }),
            c = r.readUint32(),
            l = () => {
              let e = [];
              for (let t = 0; t < a; t++) {
                let t = O.read(r);
                e.push(t);
              }
              let t = z.read(r);
              s.entries.push({ values: e, pointer: t });
            };
          for (let e = 0; e < c; e++) {
            let e = n?.();
            (e && (await e), l());
          }
          return s;
        }
        serialize() {
          let e = new nt();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) O.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          (p(this, `fieldNames`, void 0),
            p(this, `options`, void 0),
            p(this, `entries`, []),
            (this.fieldNames = e),
            (this.options = t));
        }
      }),
      (B = 3),
      (it = 250),
      (at = [408, 429, 500, 502, 503, 504]),
      (V = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!at.includes(r.status) || ++n > B) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > B) throw e;
          }
          await Ue(n);
        }
      }),
      (ot = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((_(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = T(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((_(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = T(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          p(this, `chunks`, []);
        }
      }),
      (H = class {
        async loadModel() {
          let [e] = await w(this.options.url, [this.options.range]);
          return (
            _(e, `Failed to load model`),
            rt.deserialize(e, () => {
              let e = h(this.modelPrioritySources);
              return e ? c({ batch: !0, priority: e }) : void 0;
            })
          );
        }
        async getModel(e) {
          return (
            this.model ||
              (e && this.modelPrioritySources.add(e),
              (this.modelPromise ??= this.loadModel().finally(() => {
                this.modelPrioritySources.clear();
              })),
              (this.model ??= await this.modelPromise)),
            this.model
          );
        }
        async lookupItems(e, t) {
          _(e.length === this.fields.length, `Invalid query length`);
          let n = [(await this.getModel(t)).entries];
          for (let [r, i] of e.entries()) {
            let e = [];
            for (let a of n) {
              let n,
                o = t ? c({ batch: !0, priority: m(t) }) : void 0;
              switch ((o && (await o), i.type)) {
                case `All`:
                  n = [a];
                  break;
                case `Equals`:
                  n = this.queryEquals(a, i, r);
                  break;
                case `NotEquals`:
                  n = this.queryNotEquals(a, i, r);
                  break;
                case `LessThan`:
                  n = this.queryLessThan(a, i, r);
                  break;
                case `GreaterThan`:
                  n = this.queryGreaterThan(a, i, r);
                  break;
                case `Contains`:
                  n = await this.queryContains(a, i, r, t);
                  break;
                case `StartsWith`:
                  n = await this.queryStartsWith(a, i, r, t);
                  break;
                case `EndsWith`:
                  n = await this.queryEndsWith(a, i, r, t);
                  break;
                default:
                  v(i);
              }
              e.push(...n);
            }
            n = e;
          }
          let r = [];
          for (let e of n)
            for (let n of e) {
              let e = t ? c({ batch: !0, priority: m(t) }) : void 0;
              e && (await e);
              let i = {};
              for (let e = 0; e < this.options.fieldNames.length; e++) {
                let t = this.options.fieldNames[e];
                i[t] = n.values[e];
              }
              r.push({ pointer: n.pointer.toString(), data: i });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > O.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            O.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        async findItems(e, t, n, r) {
          let i = [],
            a = 0;
          for (let o = 0; o < e.length; o++) {
            let s = n ? c({ batch: !0, priority: m(n) }) : void 0;
            s && (await s);
            let l = e[o].values[t];
            if (!r(l)) {
              if (a < o) {
                let t = e.slice(a, o);
                i.push(t);
              }
              a = o + 1;
            }
          }
          if (a < e.length) {
            let t = e.slice(a);
            i.push(t);
          }
          return i;
        }
        constructor(e) {
          (p(this, `options`, void 0),
            p(this, `schema`, void 0),
            p(this, `fields`, void 0),
            p(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            p(this, `modelPromise`, void 0),
            p(this, `model`, void 0),
            p(this, `modelPrioritySources`, /* @__PURE__ */ new Set()),
            p(this, `collation`, void 0),
            (this.options = e));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (_(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (st = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = V(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new N(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = h(this.scanPrioritySources),
                        t = e ? c({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = E(n),
                        o = n.getOffset() - i,
                        s = new z(this.id, i, o).toString(),
                        l = { pointer: s, data: a };
                      (this.itemLoader.prime(
                        { pointer: s, prioritySources: /* @__PURE__ */ new Set() },
                        l
                      ),
                        r.push(l));
                    }
                    return r;
                  })
                  .finally(() => {
                    ((this.isScanning = !1), this.scanPrioritySources.clear());
                  }))),
            this.itemsPromise
          );
        }
        resolveItem(e, t) {
          let n = this.itemPrioritySources.get(e);
          (n || ((n = /* @__PURE__ */ new Set()), this.itemPrioritySources.set(e, n)),
            t && n.add(t));
          let r = this.itemLoader.load({ pointer: e, prioritySources: n }),
            i = () => this.itemPrioritySources.delete(e);
          return (r.then(i, i), r);
        }
        constructor(e, t) {
          (p(this, `id`, void 0),
            p(this, `url`, void 0),
            p(this, `itemsPromise`, void 0),
            p(this, `isScanning`, !1),
            p(this, `scanPrioritySources`, /* @__PURE__ */ new Set()),
            p(this, `itemPrioritySources`, /* @__PURE__ */ new Map()),
            p(
              this,
              `itemLoader`,
              new $e.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = z.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await w(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = h(Ge(e)),
                      a = i ? c({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    _(o, `Missing range bytes`);
                    let s = E(new N(o)),
                      l = e[t]?.pointer;
                    (_(l, `Missing pointer`), r.push({ pointer: l, data: s }));
                  }
                  return r;
                },
                { maxBatchSize: 250, cacheKeyFn: (e) => e.pointer }
              )
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (ct = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = z.fromString(e),
                r = this.chunks[n.chunkId];
              return (_(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = z.fromString(e.pointer),
            r = z.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return O.compare(e, t, n);
        }
        constructor(e) {
          (p(this, `options`, void 0),
            p(this, `id`, void 0),
            p(this, `schema`, void 0),
            p(this, `indexes`, void 0),
            p(this, `resolveRichText`, void 0),
            p(this, `resolveVectorSetItem`, void 0),
            p(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new st(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  }))();
}
function ut(e) {
  return typeof e == `object` && !!e && !(/*#__PURE__*/ i(e)) && ht in e;
}
function dt(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function ft(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    typeof i == `number` ? (e[r] = n(i, t)) : pt(t, i, n);
  }
}
function pt(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : pt(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || ft(e, t, n);
  }
}
function mt(e) {
  let t = /* @__PURE__ */ new Map();
  return (i) => {
    let o = t.get(i);
    if (o) return o;
    let c = (function t(i) {
      switch (i[0]) {
        case 1: {
          let [, ...e] = i,
            a = e.map(t);
          return /*#__PURE__*/ r(n, void 0, ...a);
        }
        case 2: {
          let [, e, ...n] = i,
            a = n.map(t);
          return /*#__PURE__*/ r(ee, e, ...a);
        }
        case 3: {
          let [, n, r, o] = i;
          ft(r, o, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (ut(i) && i.preload(), i) : r;
          });
          let s = e[n];
          return (
            dt(s, `Module not found`),
            ut(s) && s.preload(),
            /*#__PURE__*/ a(te, {
              componentIdentifier: n,
              children: (e) => /*#__PURE__*/ a(ne, { component: s, props: { ...e, ...r } }),
            })
          );
        }
        case 4: {
          let [, e, n, ...a] = i,
            o = a.map(t);
          return r(e === `a` ? s.a : e, n, ...o);
        }
        case 5: {
          let [, e] = i;
          return e;
        }
      }
    })(JSON.parse(i));
    return (t.set(i, c), c);
  };
}
var U, W, ht, gt, _t;
function vt() {
  return (vt = e(() => {
    (o(),
      d(),
      t(),
      (ht = `preload`),
      (gt =
        (((U = gt || {})[(U.Fragment = 1)] = `Fragment`),
        (U[(U.Link = 2)] = `Link`),
        (U[(U.Module = 3)] = `Module`),
        (U[(U.Tag = 4)] = `Tag`),
        (U[(U.Text = 5)] = `Text`),
        U)),
      (_t =
        (((W = _t || {})[(W.RichText = 1)] = `RichText`),
        (W[(W.VectorSetItem = 2)] = `VectorSetItem`),
        W)));
  }))();
}
var G,
  K,
  yt,
  q,
  bt,
  xt,
  St,
  Ct,
  J,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Y,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  X,
  Z,
  Q,
  Ut,
  Wt,
  Gt;
function $() {
  return ($ = e(() => {
    (d(),
      lt(),
      vt(),
      (G = {
        BbXoJLzCn: { isNullable: !0, type: f.ResponsiveImage },
        createdAt: { isNullable: !0, type: f.Date },
        FKQ07Yx6S: { isNullable: !0, type: f.RichText },
        geD8An_ku: { isNullable: !0, type: f.RichText },
        GhPul5CYi: { isNullable: !0, type: f.RichText },
        id: { isNullable: !1, type: f.String },
        lheOj_gmz: { isNullable: !0, type: f.ResponsiveImage },
        nextItemId: { isNullable: !0, type: f.String },
        nL_5jEb0F: { isNullable: !0, type: f.ResponsiveImage },
        previousItemId: { isNullable: !0, type: f.String },
        qA77RzyS1: { isNullable: !0, type: f.ResponsiveImage },
        SG0PXpmii: { isNullable: !0, type: f.String },
        SZVp51a6o: { isNullable: !0, type: f.ResponsiveImage },
        TCax3X2ch: { isNullable: !0, type: f.String },
        updatedAt: { isNullable: !0, type: f.Date },
        wWT4jlIQ9: { isNullable: !0, type: f.String },
        xd_Q4amJC: { isNullable: !0, type: f.Enum },
        XDfrub6Bk: { isNullable: !0, type: f.Boolean },
        xINUrYZ8C: { isNullable: !0, type: f.ResponsiveImage },
        Ys4f1doBs: { isNullable: !0, type: f.Boolean },
        yuNEwB0La: { isNullable: !0, type: f.RichText },
        ZDyO9OD9Q: { isNullable: !0, type: f.Date },
      }),
      (K = new URL(
        `./l9KTJXLB2-indexes-default-0.framercms`,
        `https://framerusercontent.com/modules/eeKU9MJvtDUnjjVxBL1v/uDWP3xkaA8L1TCCbAGg5/l9KTJXLB2.js`
      ).href.replace(`/modules/`, `/cms/`)),
      (yt = [`id`]),
      (q = { type: 1 }),
      (bt = [`previousItemId`]),
      (xt = [`nextItemId`]),
      (St = [`id`, `SG0PXpmii`]),
      (Ct = [`SG0PXpmii`, `id`]),
      (J = { type: 0 }),
      (wt = [`wWT4jlIQ9`]),
      (Tt = [`SG0PXpmii`]),
      (Et = [`ZDyO9OD9Q`]),
      (Dt = [`xd_Q4amJC`]),
      (Ot = [`XDfrub6Bk`]),
      (kt = [`Ys4f1doBs`]),
      (At = [`TCax3X2ch`]),
      (jt = [`qA77RzyS1`]),
      (Mt = [`geD8An_ku`]),
      (Nt = [`lheOj_gmz`]),
      (Pt = [`yuNEwB0La`]),
      (Ft = [`SZVp51a6o`]),
      (It = [`FKQ07Yx6S`]),
      (Y = [`BbXoJLzCn`]),
      (Lt = [`nL_5jEb0F`]),
      (Rt = [`GhPul5CYi`]),
      (zt = [`xINUrYZ8C`]),
      (Bt = []),
      (Vt = (e) => {
        let t = Bt[e];
        if (t) return t().then((e) => e.default);
      }),
      (Ht = mt({})),
      (X = new u()),
      (Z = {
        collectionByLocaleId: {
          default: new ct({
            chunks: [
              new URL(
                `./l9KTJXLB2-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/eeKU9MJvtDUnjjVxBL1v/uDWP3xkaA8L1TCCbAGg5/l9KTJXLB2.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `55a807e5-0a0a-4480-963a-2fce6dff29a2default`,
            indexes: [
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: yt,
                range: { from: 0, to: 169 },
                url: K,
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: bt,
                range: { from: 169, to: 337 },
                url: K,
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: xt,
                range: { from: 337, to: 501 },
                url: K,
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: St,
                range: { from: 501, to: 962 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: Ct,
                range: { from: 962, to: 1423 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: wt,
                range: { from: 1423, to: 1795 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: Tt,
                range: { from: 1795, to: 2166 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: Et,
                range: { from: 2166, to: 2312 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: Dt,
                range: { from: 2312, to: 2488 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: Ot,
                range: { from: 2488, to: 2592 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: kt,
                range: { from: 2592, to: 2696 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: At,
                range: { from: 2696, to: 3552 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: jt,
                range: { from: 3552, to: 6593 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: Mt,
                range: { from: 6593, to: 9786 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: Nt,
                range: { from: 9786, to: 12880 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: Pt,
                range: { from: 12880, to: 16138 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: Ft,
                range: { from: 16138, to: 18628 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: It,
                range: { from: 18628, to: 22890 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: Y,
                range: { from: 22890, to: 25675 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: Lt,
                range: { from: 25675, to: 28549 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: Rt,
                range: { from: 28549, to: 31732 },
                url: K,
              }),
              new H({
                collation: J,
                collectionSchema: G,
                fieldNames: zt,
                range: { from: 31732, to: 34837 },
                url: K,
              }),
            ],
            resolveRichText: Ht,
            resolveVectorSetItem: Vt,
            schema: G,
          }),
        },
        displayName: `Blogs`,
        id: `55a807e5-0a0a-4480-963a-2fce6dff29a2`,
      }),
      l(Z, {
        wWT4jlIQ9: { defaultValue: ``, title: `Title`, type: f.String },
        SG0PXpmii: { preventLocalization: !1, title: `Slug`, type: f.String },
        ZDyO9OD9Q: { title: `Date`, type: f.Date },
        xd_Q4amJC: {
          defaultValue: `C4UmQZf7Q`,
          options: [`C4UmQZf7Q`, `x_4a8lkC8`, `yirQOlVkR`, `obhLdPYCS`],
          optionTitles: [`Insights`, `Resources`, `Tutorials`, `Updates`],
          title: `Category Type`,
          type: f.Enum,
        },
        XDfrub6Bk: { defaultValue: !1, title: `Pinned Post`, type: f.Boolean },
        Ys4f1doBs: { defaultValue: !0, title: `Featured`, type: f.Boolean },
        TCax3X2ch: { defaultValue: ``, title: `Description`, type: f.String },
        qA77RzyS1: { title: `Blog Cover Image`, type: f.ResponsiveImage },
        geD8An_ku: { defaultValue: ``, title: `Content - 1`, type: f.RichText },
        lheOj_gmz: { title: `Image - 1`, type: f.ResponsiveImage },
        yuNEwB0La: { defaultValue: ``, title: `Content - 2`, type: f.RichText },
        SZVp51a6o: { title: `Image - 2`, type: f.ResponsiveImage },
        FKQ07Yx6S: { defaultValue: ``, title: `Content - 3`, type: f.RichText },
        BbXoJLzCn: { title: `Image - 3`, type: f.ResponsiveImage },
        nL_5jEb0F: { title: `Image - 4`, type: f.ResponsiveImage },
        GhPul5CYi: { defaultValue: ``, title: `Content - 4`, type: f.RichText },
        xINUrYZ8C: { title: `Image - 5`, type: f.ResponsiveImage },
        createdAt: { title: `Created`, type: f.Date },
        updatedAt: { title: `Updated`, type: f.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/l9KTJXLB2:default`,
          title: `Previous`,
          type: f.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/l9KTJXLB2:default`,
          title: `Next`,
          type: f.CollectionReference,
        },
      }),
      (Q = (e, t) => {
        switch ((t?.fallback, e)) {
          case `C4UmQZf7Q`:
            return `Insights`;
          case `x_4a8lkC8`:
            return `Resources`;
          case `yirQOlVkR`:
            return `Tutorials`;
          case `obhLdPYCS`:
            return `Updates`;
          default:
            return ``;
        }
      }),
      (Ut = { xd_Q4amJC: Q }),
      (Wt = {
        async getSlugByRecordId(e, t) {
          let [n] = await X.query(
            {
              from: { data: Z, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `SG0PXpmii`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.SG0PXpmii;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await X.query(
            {
              from: { data: Z, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `SG0PXpmii`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.id;
        },
      }),
      (Gt = {
        exports: {
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerAutoSizeImages: `true`,
              framerData: `true`,
              framerSlug: `SG0PXpmii`,
              framerCollectionUtils: `1`,
              framerColorSyntax: `false`,
              framerEnumToDisplayNameUtils: `2`,
              framerCollectionId: `l9KTJXLB2`,
              framerContractVersion: `1`,
              framerRecordIdKey: `id`,
            },
          },
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          utils: { type: `variable`, annotations: { framerContractVersion: `1` } },
          xd_Q4amJCToDisplayName: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { Wt as a, $ as i, Gt as n, Q as o, Ut as r, Z as t };
//# sourceMappingURL=l9KTJXLB2.D9kwcrFC.mjs.map
