import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component, m as missing_component, e as escape, f as add_attribute, d as each, h as createEventDispatcher } from "../../../chunks/ssr.js";
import { d as derived, w as writable } from "../../../chunks/index.js";
var r = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, t$1 = function(r2) {
  return "string" == typeof r2 ? r2.length > 0 : "number" == typeof r2;
}, n = function(r2, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = Math.pow(10, t2)), Math.round(n2 * r2) / n2 + 0;
}, e = function(r2, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 1), r2 > n2 ? n2 : r2 > t2 ? r2 : t2;
}, u = function(r2) {
  return (r2 = isFinite(r2) ? r2 % 360 : 0) > 0 ? r2 : r2 + 360;
}, a = function(r2) {
  return { r: e(r2.r, 0, 255), g: e(r2.g, 0, 255), b: e(r2.b, 0, 255), a: e(r2.a) };
}, o$1 = function(r2) {
  return { r: n(r2.r), g: n(r2.g), b: n(r2.b), a: n(r2.a, 3) };
}, i = /^#([0-9a-f]{3,8})$/i, s = function(r2) {
  var t2 = r2.toString(16);
  return t2.length < 2 ? "0" + t2 : t2;
}, h = function(r2) {
  var t2 = r2.r, n2 = r2.g, e2 = r2.b, u2 = r2.a, a2 = Math.max(t2, n2, e2), o2 = a2 - Math.min(t2, n2, e2), i2 = o2 ? a2 === t2 ? (n2 - e2) / o2 : a2 === n2 ? 2 + (e2 - t2) / o2 : 4 + (t2 - n2) / o2 : 0;
  return { h: 60 * (i2 < 0 ? i2 + 6 : i2), s: a2 ? o2 / a2 * 100 : 0, v: a2 / 255 * 100, a: u2 };
}, b = function(r2) {
  var t2 = r2.h, n2 = r2.s, e2 = r2.v, u2 = r2.a;
  t2 = t2 / 360 * 6, n2 /= 100, e2 /= 100;
  var a2 = Math.floor(t2), o2 = e2 * (1 - n2), i2 = e2 * (1 - (t2 - a2) * n2), s2 = e2 * (1 - (1 - t2 + a2) * n2), h2 = a2 % 6;
  return { r: 255 * [e2, i2, o2, o2, s2, e2][h2], g: 255 * [s2, e2, e2, i2, o2, o2][h2], b: 255 * [o2, o2, s2, e2, e2, i2][h2], a: u2 };
}, g = function(r2) {
  return { h: u(r2.h), s: e(r2.s, 0, 100), l: e(r2.l, 0, 100), a: e(r2.a) };
}, d = function(r2) {
  return { h: n(r2.h), s: n(r2.s), l: n(r2.l), a: n(r2.a, 3) };
}, f = function(r2) {
  return b((n2 = (t2 = r2).s, { h: t2.h, s: (n2 *= ((e2 = t2.l) < 50 ? e2 : 100 - e2) / 100) > 0 ? 2 * n2 / (e2 + n2) * 100 : 0, v: e2 + n2, a: t2.a }));
  var t2, n2, e2;
}, c = function(r2) {
  return { h: (t2 = h(r2)).h, s: (u2 = (200 - (n2 = t2.s)) * (e2 = t2.v) / 100) > 0 && u2 < 200 ? n2 * e2 / 100 / (u2 <= 100 ? u2 : 200 - u2) * 100 : 0, l: u2 / 2, a: t2.a };
  var t2, n2, e2, u2;
}, l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, p = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, y = { string: [[function(r2) {
  var t2 = i.exec(r2);
  return t2 ? (r2 = t2[1]).length <= 4 ? { r: parseInt(r2[0] + r2[0], 16), g: parseInt(r2[1] + r2[1], 16), b: parseInt(r2[2] + r2[2], 16), a: 4 === r2.length ? n(parseInt(r2[3] + r2[3], 16) / 255, 2) : 1 } : 6 === r2.length || 8 === r2.length ? { r: parseInt(r2.substr(0, 2), 16), g: parseInt(r2.substr(2, 2), 16), b: parseInt(r2.substr(4, 2), 16), a: 8 === r2.length ? n(parseInt(r2.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r2) {
  var t2 = v.exec(r2) || m.exec(r2);
  return t2 ? t2[2] !== t2[4] || t2[4] !== t2[6] ? null : a({ r: Number(t2[1]) / (t2[2] ? 100 / 255 : 1), g: Number(t2[3]) / (t2[4] ? 100 / 255 : 1), b: Number(t2[5]) / (t2[6] ? 100 / 255 : 1), a: void 0 === t2[7] ? 1 : Number(t2[7]) / (t2[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t2) {
  var n2 = l.exec(t2) || p.exec(t2);
  if (!n2)
    return null;
  var e2, u2, a2 = g({ h: (e2 = n2[1], u2 = n2[2], void 0 === u2 && (u2 = "deg"), Number(e2) * (r[u2] || 1)), s: Number(n2[3]), l: Number(n2[4]), a: void 0 === n2[5] ? 1 : Number(n2[5]) / (n2[6] ? 100 : 1) });
  return f(a2);
}, "hsl"]], object: [[function(r2) {
  var n2 = r2.r, e2 = r2.g, u2 = r2.b, o2 = r2.a, i2 = void 0 === o2 ? 1 : o2;
  return t$1(n2) && t$1(e2) && t$1(u2) ? a({ r: Number(n2), g: Number(e2), b: Number(u2), a: Number(i2) }) : null;
}, "rgb"], [function(r2) {
  var n2 = r2.h, e2 = r2.s, u2 = r2.l, a2 = r2.a, o2 = void 0 === a2 ? 1 : a2;
  if (!t$1(n2) || !t$1(e2) || !t$1(u2))
    return null;
  var i2 = g({ h: Number(n2), s: Number(e2), l: Number(u2), a: Number(o2) });
  return f(i2);
}, "hsl"], [function(r2) {
  var n2 = r2.h, a2 = r2.s, o2 = r2.v, i2 = r2.a, s2 = void 0 === i2 ? 1 : i2;
  if (!t$1(n2) || !t$1(a2) || !t$1(o2))
    return null;
  var h2 = function(r3) {
    return { h: u(r3.h), s: e(r3.s, 0, 100), v: e(r3.v, 0, 100), a: e(r3.a) };
  }({ h: Number(n2), s: Number(a2), v: Number(o2), a: Number(s2) });
  return b(h2);
}, "hsv"]] }, N = function(r2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var e2 = t2[n2][0](r2);
    if (e2)
      return [e2, t2[n2][1]];
  }
  return [null, void 0];
}, x = function(r2) {
  return "string" == typeof r2 ? N(r2.trim(), y.string) : "object" == typeof r2 && null !== r2 ? N(r2, y.object) : [null, void 0];
}, M = function(r2, t2) {
  var n2 = c(r2);
  return { h: n2.h, s: e(n2.s + 100 * t2, 0, 100), l: n2.l, a: n2.a };
}, H = function(r2) {
  return (299 * r2.r + 587 * r2.g + 114 * r2.b) / 1e3 / 255;
}, $ = function(r2, t2) {
  var n2 = c(r2);
  return { h: n2.h, s: n2.s, l: e(n2.l + 100 * t2, 0, 100), a: n2.a };
}, j = function() {
  function r2(r3) {
    this.parsed = x(r3)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r2.prototype.isValid = function() {
    return null !== this.parsed;
  }, r2.prototype.brightness = function() {
    return n(H(this.rgba), 2);
  }, r2.prototype.isDark = function() {
    return H(this.rgba) < 0.5;
  }, r2.prototype.isLight = function() {
    return H(this.rgba) >= 0.5;
  }, r2.prototype.toHex = function() {
    return r3 = o$1(this.rgba), t2 = r3.r, e2 = r3.g, u2 = r3.b, i2 = (a2 = r3.a) < 1 ? s(n(255 * a2)) : "", "#" + s(t2) + s(e2) + s(u2) + i2;
    var r3, t2, e2, u2, a2, i2;
  }, r2.prototype.toRgb = function() {
    return o$1(this.rgba);
  }, r2.prototype.toRgbString = function() {
    return r3 = o$1(this.rgba), t2 = r3.r, n2 = r3.g, e2 = r3.b, (u2 = r3.a) < 1 ? "rgba(" + t2 + ", " + n2 + ", " + e2 + ", " + u2 + ")" : "rgb(" + t2 + ", " + n2 + ", " + e2 + ")";
    var r3, t2, n2, e2, u2;
  }, r2.prototype.toHsl = function() {
    return d(c(this.rgba));
  }, r2.prototype.toHslString = function() {
    return r3 = d(c(this.rgba)), t2 = r3.h, n2 = r3.s, e2 = r3.l, (u2 = r3.a) < 1 ? "hsla(" + t2 + ", " + n2 + "%, " + e2 + "%, " + u2 + ")" : "hsl(" + t2 + ", " + n2 + "%, " + e2 + "%)";
    var r3, t2, n2, e2, u2;
  }, r2.prototype.toHsv = function() {
    return r3 = h(this.rgba), { h: n(r3.h), s: n(r3.s), v: n(r3.v), a: n(r3.a, 3) };
    var r3;
  }, r2.prototype.invert = function() {
    return w({ r: 255 - (r3 = this.rgba).r, g: 255 - r3.g, b: 255 - r3.b, a: r3.a });
    var r3;
  }, r2.prototype.saturate = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w(M(this.rgba, r3));
  }, r2.prototype.desaturate = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w(M(this.rgba, -r3));
  }, r2.prototype.grayscale = function() {
    return w(M(this.rgba, -1));
  }, r2.prototype.lighten = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w($(this.rgba, r3));
  }, r2.prototype.darken = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w($(this.rgba, -r3));
  }, r2.prototype.rotate = function(r3) {
    return void 0 === r3 && (r3 = 15), this.hue(this.hue() + r3);
  }, r2.prototype.alpha = function(r3) {
    return "number" == typeof r3 ? w({ r: (t2 = this.rgba).r, g: t2.g, b: t2.b, a: r3 }) : n(this.rgba.a, 3);
    var t2;
  }, r2.prototype.hue = function(r3) {
    var t2 = c(this.rgba);
    return "number" == typeof r3 ? w({ h: r3, s: t2.s, l: t2.l, a: t2.a }) : n(t2.h);
  }, r2.prototype.isEqual = function(r3) {
    return this.toHex() === w(r3).toHex();
  }, r2;
}(), w = function(r2) {
  return r2 instanceof j ? r2 : new j(r2);
}, S = [], k = function(r2) {
  r2.forEach(function(r3) {
    S.indexOf(r3) < 0 && (r3(j, y), S.push(r3));
  });
};
var o = function(o2) {
  var t2 = o2 / 255;
  return t2 < 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
}, t = function(t2) {
  return 0.2126 * o(t2.r) + 0.7152 * o(t2.g) + 0.0722 * o(t2.b);
};
function a11yPlugin(o2) {
  o2.prototype.luminance = function() {
    return o3 = t(this.rgba), void 0 === (r2 = 2) && (r2 = 0), void 0 === n2 && (n2 = Math.pow(10, r2)), Math.round(n2 * o3) / n2 + 0;
    var o3, r2, n2;
  }, o2.prototype.contrast = function(r2) {
    void 0 === r2 && (r2 = "#FFF");
    var n2, a2, i2, e2, v2, u2, d2, c2 = r2 instanceof o2 ? r2 : new o2(r2);
    return e2 = this.rgba, v2 = c2.toRgb(), u2 = t(e2), d2 = t(v2), n2 = u2 > d2 ? (u2 + 0.05) / (d2 + 0.05) : (d2 + 0.05) / (u2 + 0.05), void 0 === (a2 = 2) && (a2 = 0), void 0 === i2 && (i2 = Math.pow(10, a2)), Math.floor(i2 * n2) / i2 + 0;
  }, o2.prototype.isReadable = function(o3, t2) {
    return void 0 === o3 && (o3 = "#FFF"), void 0 === t2 && (t2 = {}), this.contrast(o3) >= (e2 = void 0 === (i2 = (r2 = t2).size) ? "normal" : i2, "AAA" === (a2 = void 0 === (n2 = r2.level) ? "AA" : n2) && "normal" === e2 ? 7 : "AA" === a2 && "large" === e2 ? 3 : 4.5);
    var r2, n2, a2, i2, e2;
  };
}
const keyPressed = writable({
  ArrowLeft: 0,
  ArrowUp: 0,
  ArrowRight: 0,
  ArrowDown: 0
});
const keyPressedCustom = derived(keyPressed, ($keyPressed) => {
  return {
    ...$keyPressed,
    ArrowV: $keyPressed.ArrowUp + $keyPressed.ArrowDown,
    ArrowH: $keyPressed.ArrowLeft + $keyPressed.ArrowRight,
    ArrowVH: $keyPressed.ArrowUp + $keyPressed.ArrowDown + $keyPressed.ArrowLeft + $keyPressed.ArrowRight
  };
});
const Picker_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".picker.s-Z0ZYzgehap2s{position:relative;width:100%;height:100%;background:linear-gradient(#ffffff00, #000000ff),\n			linear-gradient(0.25turn, #ffffffff, #00000000), var(--color-bg);outline:none;user-select:none}",
  map: null
};
const Picker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_keyPressed;
  let $$unsubscribe_keyPressedCustom;
  validate_store(keyPressed, "keyPressed");
  $$unsubscribe_keyPressed = subscribe(keyPressed, (value) => value);
  validate_store(keyPressedCustom, "keyPressedCustom");
  $$unsubscribe_keyPressedCustom = subscribe(keyPressedCustom, (value) => value);
  let { components } = $$props;
  let { h: h2 } = $$props;
  let { s: s2 } = $$props;
  let { v: v2 } = $$props;
  let { isOpen } = $$props;
  let { toRight } = $$props;
  let { isDark } = $$props;
  let picker;
  let focused = false;
  let colorBg;
  let pos = { x: 100, y: 0 };
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.h === void 0 && $$bindings.h && h2 !== void 0)
    $$bindings.h(h2);
  if ($$props.s === void 0 && $$bindings.s && s2 !== void 0)
    $$bindings.s(s2);
  if ($$props.v === void 0 && $$bindings.v && v2 !== void 0)
    $$bindings.v(v2);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.toRight === void 0 && $$bindings.toRight && toRight !== void 0)
    $$bindings.toRight(toRight);
  if ($$props.isDark === void 0 && $$bindings.isDark && isDark !== void 0)
    $$bindings.isDark(isDark);
  $$result.css.add(css$c);
  {
    if (typeof h2 === "number")
      colorBg = w({ h: h2, s: 100, v: 100, a: 1 }).toHex();
  }
  {
    if (typeof s2 === "number" && typeof v2 === "number" && picker)
      pos = { x: s2, y: 100 - v2 };
  }
  $$unsubscribe_keyPressed();
  $$unsubscribe_keyPressedCustom();
  return ` ${validate_component(components.pickerWrapper || missing_component, "svelte:component").$$render($$result, { focused, toRight }, {}, {
    default: () => {
      return ` <div class="picker s-Z0ZYzgehap2s" tabindex="0" style="${"--color-bg: " + escape(colorBg, true) + ";"}" aria-label="saturation and brightness picker (arrow keyboard navigation)"${add_attribute("aria-valuemin", 0, 0)}${add_attribute("aria-valuemax", 100, 0)} aria-valuetext="${"saturation " + escape(pos.x?.toFixed(), true) + "%, brightness " + escape(pos.y?.toFixed(), true) + "%"}"${add_attribute("this", picker, 0)}>${validate_component(components.pickerIndicator || missing_component, "svelte:component").$$render(
        $$result,
        {
          pos,
          isDark,
          hex: w({ h: h2, s: s2, v: v2, a: 1 }).toHex()
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
const Slider_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ".slider.s-5jZzVULuZGNX{--gradient:#ff0000, #ffff00 17.2%, #ffff00 18.2%, #00ff00 33.3%, #00ffff 49.5%, #00ffff 51.5%,\n			#0000ff 67.7%, #ff00ff 83.3%, #ff0000;position:relative;width:100%;height:100%;background:linear-gradient(var(--gradient));outline:none;user-select:none}.to-right.s-5jZzVULuZGNX{background:linear-gradient(0.25turn, var(--gradient))}",
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_keyPressed;
  let $$unsubscribe_keyPressedCustom;
  validate_store(keyPressed, "keyPressed");
  $$unsubscribe_keyPressed = subscribe(keyPressed, (value) => value);
  validate_store(keyPressedCustom, "keyPressedCustom");
  $$unsubscribe_keyPressedCustom = subscribe(keyPressedCustom, (value) => value);
  let { components } = $$props;
  let { toRight } = $$props;
  let slider;
  let { h: h2 } = $$props;
  let pos = 0;
  let focused = false;
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.toRight === void 0 && $$bindings.toRight && toRight !== void 0)
    $$bindings.toRight(toRight);
  if ($$props.h === void 0 && $$bindings.h && h2 !== void 0)
    $$bindings.h(h2);
  $$result.css.add(css$b);
  {
    if (typeof h2 === "number" && slider)
      pos = 100 * h2 / 360;
  }
  $$unsubscribe_keyPressed();
  $$unsubscribe_keyPressedCustom();
  return ` ${validate_component(components.sliderWrapper || missing_component, "svelte:component").$$render($$result, { focused, toRight }, {}, {
    default: () => {
      return ` <div class="${["slider s-5jZzVULuZGNX", toRight ? "to-right" : ""].join(" ").trim()}" tabindex="0" aria-label="hue picker (arrow keyboard navigation)"${add_attribute("aria-valuemin", 0, 0)}${add_attribute("aria-valuemax", 360, 0)}${add_attribute("aria-valuenow", Math.round(h2), 0)}${add_attribute("this", slider, 0)}>${validate_component(components.sliderIndicator || missing_component, "svelte:component").$$render($$result, { pos, toRight }, {}, {})}</div>`;
    }
  })}`;
});
const Alpha_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".alpha.s-88FKg5co8aIz:after{position:absolute;content:'';inset:0;background:linear-gradient(#00000000, var(--alpha-color));z-index:0}.to-right.s-88FKg5co8aIz:after{background:linear-gradient(0.25turn, #00000000, var(--alpha-color))}.alpha.s-88FKg5co8aIz{position:relative;width:100%;height:100%;background-image:linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%),\n			linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);background-size:var(--pattern-size-2x, 12px) var(--pattern-size-2x, 12px);background-position:0 0, var(--pattern-size, 6px) var(--pattern-size, 6px);outline:none;user-select:none}",
  map: null
};
const Alpha = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_keyPressed;
  let $$unsubscribe_keyPressedCustom;
  validate_store(keyPressed, "keyPressed");
  $$unsubscribe_keyPressed = subscribe(keyPressed, (value) => value);
  validate_store(keyPressedCustom, "keyPressedCustom");
  $$unsubscribe_keyPressedCustom = subscribe(keyPressedCustom, (value) => value);
  let { components } = $$props;
  let { isOpen } = $$props;
  let { a: a2 = 1 } = $$props;
  let { hex } = $$props;
  let { toRight } = $$props;
  let alpha;
  let focused = false;
  let pos;
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.a === void 0 && $$bindings.a && a2 !== void 0)
    $$bindings.a(a2);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  if ($$props.toRight === void 0 && $$bindings.toRight && toRight !== void 0)
    $$bindings.toRight(toRight);
  $$result.css.add(css$a);
  {
    if (typeof a2 === "number" && alpha)
      pos = 100 * a2;
  }
  $$unsubscribe_keyPressed();
  $$unsubscribe_keyPressedCustom();
  return ` ${validate_component(components.alphaWrapper || missing_component, "svelte:component").$$render($$result, { focused, toRight }, {}, {
    default: () => {
      return ` <div class="${["alpha s-88FKg5co8aIz", toRight ? "to-right" : ""].join(" ").trim()}" tabindex="0" style="${"--alpha-color: " + escape(hex?.substring(0, 7), true)}" aria-label="transparency picker (arrow keyboard navigation)"${add_attribute("aria-valuemin", 0, 0)}${add_attribute("aria-valuemax", 100, 0)}${add_attribute("aria-valuenow", Math.round(pos), 0)} aria-valuetext="${escape(pos?.toFixed(), true) + "%"}"${add_attribute("this", alpha, 0)}>${validate_component(components.alphaIndicator || missing_component, "svelte:component").$$render($$result, { pos, toRight }, {}, {})}</div>`;
    }
  })}`;
});
const TextInput_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".text-input.s-y2RTI0cG0Xn1{display:flex;flex-direction:column;gap:10px;margin:10px 5px 5px}.input-container.s-y2RTI0cG0Xn1{display:flex;flex:1;gap:10px}input.s-y2RTI0cG0Xn1,button.s-y2RTI0cG0Xn1{flex:1;border:none;background-color:#eee;padding:0;border-radius:5px;height:30px;line-height:30px;text-align:center}input.s-y2RTI0cG0Xn1{width:5px}button.s-y2RTI0cG0Xn1{cursor:pointer;flex:1;margin:0;transition:background-color 0.2s}button.s-y2RTI0cG0Xn1:hover{background-color:#ccc}input.s-y2RTI0cG0Xn1:focus,button.s-y2RTI0cG0Xn1:focus{outline:none}input.s-y2RTI0cG0Xn1:focus-visible,button.s-y2RTI0cG0Xn1:focus-visible{outline:2px solid var(--focus-color, red);outline-offset:2px}",
  map: null
};
const TextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let a2;
  let { isAlpha } = $$props;
  let { rgb } = $$props;
  let { hsv } = $$props;
  let { hex } = $$props;
  let { canChangeMode } = $$props;
  const modes = ["HEX", "RGB", "HSV"];
  let mode = 0;
  if ($$props.isAlpha === void 0 && $$bindings.isAlpha && isAlpha !== void 0)
    $$bindings.isAlpha(isAlpha);
  if ($$props.rgb === void 0 && $$bindings.rgb && rgb !== void 0)
    $$bindings.rgb(rgb);
  if ($$props.hsv === void 0 && $$bindings.hsv && hsv !== void 0)
    $$bindings.hsv(hsv);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  if ($$props.canChangeMode === void 0 && $$bindings.canChangeMode && canChangeMode !== void 0)
    $$bindings.canChangeMode(canChangeMode);
  $$result.css.add(css$9);
  Math.round(hsv.h);
  Math.round(hsv.s);
  Math.round(hsv.v);
  a2 = hsv.a === void 0 ? 1 : Math.round(hsv.a * 100) / 100;
  return `<div class="text-input s-y2RTI0cG0Xn1">${`<div class="input-container s-y2RTI0cG0Xn1"><input${add_attribute("value", hex, 0)} style="flex: 3" class="s-y2RTI0cG0Xn1"> ${isAlpha ? `<input aria-label="hexadecimal color"${add_attribute("value", a2, 0)} type="number" min="0" max="1" step="0.01" class="s-y2RTI0cG0Xn1">` : ``}</div>`} ${canChangeMode ? `<button aria-label="${"change inputs to " + escape(modes[(mode + 1) % 3], true)}" class="s-y2RTI0cG0Xn1">${escape(modes[mode])}</button>` : ``} </div>`;
});
const SliderIndicator_svelte_svelte_type_style_lang$1 = "";
const css$8 = {
  code: "div.s-rJz-MNJKj-wb{position:absolute;width:9.5px;height:9.5px;background-color:white;border-radius:5px;margin-left:1.5px;pointer-events:none;z-index:1;border:1px solid black;box-sizing:border-box}",
  map: null
};
const SliderIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let top;
  let { pos } = $$props;
  let { toRight } = $$props;
  if ($$props.pos === void 0 && $$bindings.pos && pos !== void 0)
    $$bindings.pos(pos);
  if ($$props.toRight === void 0 && $$bindings.toRight && toRight !== void 0)
    $$bindings.toRight(toRight);
  $$result.css.add(css$8);
  top = `calc(${pos} * (var(--picker-height, 200px) - 14px) / 100 + 2px)`;
  return `<div class="slider-indicator s-rJz-MNJKj-wb" style="${"top: " + escape(top, true)}"></div>`;
});
const PickerIndicator_svelte_svelte_type_style_lang$1 = "";
const css$7 = {
  code: "div.s-HYGLtEYkwmFV{position:absolute;width:10px;height:10px;background-color:white;border-radius:5px;pointer-events:none;z-index:1;transition:box-shadow 0.2s}",
  map: null
};
const PickerIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let left;
  let top;
  let { pos } = $$props;
  let { hex } = $$props;
  let { isDark } = $$props;
  if ($$props.pos === void 0 && $$bindings.pos && pos !== void 0)
    $$bindings.pos(pos);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  if ($$props.isDark === void 0 && $$bindings.isDark && isDark !== void 0)
    $$bindings.isDark(isDark);
  $$result.css.add(css$7);
  left = `calc(${pos.x} * (var(--picker-width, 200px) - 14px) / 100 + 2px)`;
  top = `calc(${pos.y} * (var(--picker-height, 200px) - 14px) / 100 + 2px)`;
  return `<div class="picker-indicator s-HYGLtEYkwmFV"${add_attribute("style", `left: ${left}; top: ${top}; box-shadow: 0 0 4px ${isDark ? "white" : "black"};`, 0)}></div>`;
});
const ArrowKeyHandler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_keyPressed;
  validate_store(keyPressed, "keyPressed");
  $$unsubscribe_keyPressed = subscribe(keyPressed, (value) => value);
  $$unsubscribe_keyPressed();
  return ``;
});
const PickerWrapper_svelte_svelte_type_style_lang$1 = "";
const css$6 = {
  code: "div.s-8SjsP0UOGb0E{display:inline-block;margin-right:5px;width:var(--picker-width, 200px);height:var(--picker-height, 200px);border-radius:8px;overflow:hidden;outline:2px solid transparent;outline-offset:3px;transition:outline 0.2s ease-in-out;user-select:none}div.focused.s-8SjsP0UOGb0E{outline:2px solid var(--focus-color, red)}",
  map: null
};
const PickerWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { focused } = $$props;
  let { toRight } = $$props;
  if ($$props.focused === void 0 && $$bindings.focused && focused !== void 0)
    $$bindings.focused(focused);
  if ($$props.toRight === void 0 && $$bindings.toRight && toRight !== void 0)
    $$bindings.toRight(toRight);
  $$result.css.add(css$6);
  return `<div class="${["picker-wrapper s-8SjsP0UOGb0E", focused ? "focused" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </div>`;
});
const SliderWrapper_svelte_svelte_type_style_lang$1 = "";
const css$5 = {
  code: "div.s-iot3gJ3zc_hR{display:inline-block;margin-right:5px;width:var(--slider-width, 12px);height:var(--picker-height, 200px);border-radius:6px;overflow:hidden;user-select:none;outline:2px solid transparent;outline-offset:3px;transition:outline 0.2s ease-in-out}div.focused.s-iot3gJ3zc_hR{outline:2px solid var(--focus-color, red)}",
  map: null
};
const SliderWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { focused } = $$props;
  let { toRight } = $$props;
  if ($$props.focused === void 0 && $$bindings.focused && focused !== void 0)
    $$bindings.focused(focused);
  if ($$props.toRight === void 0 && $$bindings.toRight && toRight !== void 0)
    $$bindings.toRight(toRight);
  $$result.css.add(css$5);
  return `<div class="${["slider-wrapper s-iot3gJ3zc_hR", focused ? "focused" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </div>`;
});
const Input_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "label.s-HDXX_OeeC9pP{display:flex;align-items:center;gap:8px;cursor:pointer;border-radius:3px;margin:4px}.container.s-HDXX_OeeC9pP{position:relative;display:block;display:flex;align-items:center;justify-content:center}input.s-HDXX_OeeC9pP{margin:0;padding:0;border:none;width:4px;height:4px;flex-shrink:0;cursor:pointer;border-radius:50%;margin:0 12px}.alpha.s-HDXX_OeeC9pP{clip-path:circle(50%);background-image:linear-gradient(\n				to right,\n				rgba(238, 238, 238, 0.75),\n				rgba(238, 238, 238, 0.75)\n			),\n			linear-gradient(to right, black 50%, white 50%),\n			linear-gradient(to bottom, black 50%, white 50%);background-blend-mode:normal, difference, normal;background-size:12px 12px}.alpha.s-HDXX_OeeC9pP,.color.s-HDXX_OeeC9pP{position:absolute;width:30px;height:30px;border-radius:15px;user-select:none}input.s-HDXX_OeeC9pP:focus{outline:2px solid var(--focus-color, red);outline-offset:15px}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { labelWrapper } = $$props;
  let { hex } = $$props;
  let { label } = $$props;
  let { isOpen } = $$props;
  if ($$props.labelWrapper === void 0 && $$bindings.labelWrapper && labelWrapper !== void 0)
    $$bindings.labelWrapper(labelWrapper);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  $$result.css.add(css$4);
  return ` <label class="s-HDXX_OeeC9pP"${add_attribute("this", labelWrapper, 0)}><div class="container s-HDXX_OeeC9pP"><input type="color"${add_attribute("value", hex, 0)} aria-haspopup="dialog" class="s-HDXX_OeeC9pP"> <div class="alpha s-HDXX_OeeC9pP"></div> <div class="color s-HDXX_OeeC9pP" style="${"background: " + escape(hex, true)}"></div></div> ${escape(label)} </label>`;
});
const Wrapper_svelte_svelte_type_style_lang$1 = "";
const css$3 = {
  code: "div.s-HwPlJpGf9UO6{padding:8px 5px 5px 8px;background-color:white;margin:0 10px 10px;border:1px solid black;border-radius:12px;display:none;width:max-content}.isOpen.s-HwPlJpGf9UO6{display:block}.isPopup.s-HwPlJpGf9UO6{position:absolute;top:30px;z-index:var(--picker-z-index, 2)}",
  map: null
};
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { wrapper } = $$props;
  let { isOpen } = $$props;
  let { isPopup } = $$props;
  let { toRight } = $$props;
  if ($$props.wrapper === void 0 && $$bindings.wrapper && wrapper !== void 0)
    $$bindings.wrapper(wrapper);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.isPopup === void 0 && $$bindings.isPopup && isPopup !== void 0)
    $$bindings.isPopup(isPopup);
  if ($$props.toRight === void 0 && $$bindings.toRight && toRight !== void 0)
    $$bindings.toRight(toRight);
  $$result.css.add(css$3);
  return `<div class="${[
    "wrapper s-HwPlJpGf9UO6",
    (isOpen ? "isOpen" : "") + " " + (isPopup ? "isPopup" : "")
  ].join(" ").trim()}"${add_attribute("role", isPopup ? "dialog" : void 0, 0)} aria-label="color picker"${add_attribute("this", wrapper, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const A11yNotice_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "details.s-Zh0HGW8Tijz6.s-Zh0HGW8Tijz6{width:245px;margin:8px auto}summary.s-Zh0HGW8Tijz6.s-Zh0HGW8Tijz6{margin-bottom:8px;cursor:pointer;transition:color 0.2s}summary.s-Zh0HGW8Tijz6.s-Zh0HGW8Tijz6:hover{color:blue}.not-closable.s-Zh0HGW8Tijz6 summary.s-Zh0HGW8Tijz6{pointer-events:none}.not-closable.s-Zh0HGW8Tijz6 summary.s-Zh0HGW8Tijz6{list-style:none}.s-Zh0HGW8Tijz6.s-Zh0HGW8Tijz6:focus-visible,span.s-Zh0HGW8Tijz6 :focus-visible{border-radius:2px;outline:2px solid var(--focus-color, red);outline-offset:2px}",
  map: null
};
const A11yNotice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let closable;
  let _a11yColors;
  let { components } = $$props;
  let { a11yColors } = $$props;
  let { hex } = $$props;
  let { color } = $$props;
  let { a11yGuidelines } = $$props;
  let { isA11yOpen } = $$props;
  let { isA11yClosable } = $$props;
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.a11yColors === void 0 && $$bindings.a11yColors && a11yColors !== void 0)
    $$bindings.a11yColors(a11yColors);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.a11yGuidelines === void 0 && $$bindings.a11yGuidelines && a11yGuidelines !== void 0)
    $$bindings.a11yGuidelines(a11yGuidelines);
  if ($$props.isA11yOpen === void 0 && $$bindings.isA11yOpen && isA11yOpen !== void 0)
    $$bindings.isA11yOpen(isA11yOpen);
  if ($$props.isA11yClosable === void 0 && $$bindings.isA11yClosable && isA11yClosable !== void 0)
    $$bindings.isA11yClosable(isA11yClosable);
  $$result.css.add(css$2);
  closable = isA11yOpen && !isA11yClosable;
  _a11yColors = a11yColors.map((a11yColor) => ({
    ...a11yColor,
    contrast: color?.contrast(a11yColor.hex)
  }));
  return `<details class="${"a11y-notice " + escape(closable ? "not-closable" : "", true) + " s-Zh0HGW8Tijz6"}" ${isA11yOpen ? "open" : ""}><summary${add_attribute("tabindex", closable ? -1 : void 0, 0)} class="s-Zh0HGW8Tijz6">${validate_component(components.a11ySummary || missing_component, "svelte:component").$$render($$result, { a11yColors: _a11yColors, hex }, {}, {})}</summary> <div class="s-Zh0HGW8Tijz6">${each(_a11yColors, ({ contrast, hex: a11yHex, placeholder, reverse, size }) => {
    return `${validate_component(components.a11ySingleNotice || missing_component, "svelte:component").$$render(
      $$result,
      {
        contrast,
        textColor: reverse ? a11yHex : hex,
        bgColor: reverse ? hex : a11yHex,
        placeholder,
        size
      },
      {},
      {}
    )}`;
  })} ${a11yGuidelines ? `<span class="s-Zh0HGW8Tijz6"><!-- HTML_TAG_START -->${a11yGuidelines}<!-- HTML_TAG_END --></span>` : ``}</div> </details>`;
});
const A11ySingleNotice_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".a11y-single-notice.s-7GftGIJ1byRi.s-7GftGIJ1byRi{display:flex;align-items:center;margin:4px 0;gap:12px;height:48px}.large.s-7GftGIJ1byRi.s-7GftGIJ1byRi{font-size:22px}.score.s-7GftGIJ1byRi.s-7GftGIJ1byRi{width:95px;flex-shrink:0;margin-bottom:10px}.score.s-7GftGIJ1byRi p.s-7GftGIJ1byRi{margin-bottom:2px}.grade.s-7GftGIJ1byRi.s-7GftGIJ1byRi{border-radius:50px;padding:2px 8px;background-color:orange;font-weight:bold}.grade-ok.s-7GftGIJ1byRi.s-7GftGIJ1byRi{background-color:green;color:white}p.s-7GftGIJ1byRi.s-7GftGIJ1byRi{margin:0}.lorem.s-7GftGIJ1byRi.s-7GftGIJ1byRi{flex:1;text-align:center;padding:4px 8px;border-radius:4px;border:1px solid black;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}",
  map: null
};
const A11ySingleNotice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { textColor } = $$props;
  let { bgColor } = $$props;
  let { placeholder = void 0 } = $$props;
  let { contrast = 1 } = $$props;
  let { size = void 0 } = $$props;
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.contrast === void 0 && $$bindings.contrast && contrast !== void 0)
    $$bindings.contrast(contrast);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$1);
  return `<div class="a11y-single-notice s-7GftGIJ1byRi"><p class="${"lorem " + escape(size === "large" && "large", true) + " s-7GftGIJ1byRi"}" style="${"color: " + escape(textColor, true) + "; background-color: " + escape(bgColor, true)}">${escape(placeholder || "Lorem Ipsum")}</p> <div class="score s-7GftGIJ1byRi"><p class="s-7GftGIJ1byRi">contrast: ${escape(contrast >= 10 ? contrast.toFixed(1) : contrast)}</p> <span class="${[
    "grade s-7GftGIJ1byRi",
    contrast > (size === "large" ? 3 : 4.5) ? "grade-ok" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-16z76xm">AA</span> <span class="${[
    "grade s-7GftGIJ1byRi",
    contrast > (size === "large" ? 4.5 : 7) ? "grade-ok" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-y2ho91">AAA</span></div> </div>`;
});
function getNumberOfGradeFailed({ contrast, size }) {
  if (!contrast) {
    return 1;
  }
  if (size === "large") {
    return contrast < 3 ? 2 : contrast < 4.5 ? 1 : 0;
  } else {
    return contrast < 4.5 ? 2 : contrast < 7 ? 1 : 0;
  }
}
const A11ySummary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count;
  let message;
  let { a11yColors } = $$props;
  let { hex } = $$props;
  if ($$props.a11yColors === void 0 && $$bindings.a11yColors && a11yColors !== void 0)
    $$bindings.a11yColors(a11yColors);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  count = a11yColors.map(getNumberOfGradeFailed).reduce((acc, c2) => acc + c2);
  message = count ? `⚠️ ${count} contrast grade${count && "s"} fail` : "Contrast grade information";
  return `${escape(message)}`;
});
const ColorPicker_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.s-eqiUpkI59eG7{position:relative}",
  map: null
};
const ColorPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  k([a11yPlugin]);
  let { components = {} } = $$props;
  const dispatch = createEventDispatcher();
  let { label = "Choose a color" } = $$props;
  let { isAlpha = true } = $$props;
  let { isInput = true } = $$props;
  let { isTextInput = true } = $$props;
  let { canChangeMode = true } = $$props;
  let { isA11y = false } = $$props;
  let { a11yColors = [{ hex: "#ffffff" }] } = $$props;
  let { a11yGuidelines = '<p style="margin: 0; font-size: 12px;">Learn more at <a href="https://webaim.org/articles/contrast/" target="_blank">WebAIM contrast guide</a></p>' } = $$props;
  let { isA11yOpen = false } = $$props;
  let { isA11yClosable = true } = $$props;
  let { isPopup = isInput } = $$props;
  let { isOpen = !isInput } = $$props;
  let { toRight = false } = $$props;
  let { disableCloseClickOutside = false } = $$props;
  let { rgb = { r: 255, g: 0, b: 0, a: 1 } } = $$props;
  let { hsv = { h: 0, s: 100, v: 100, a: 1 } } = $$props;
  let { hex = "#ff0000" } = $$props;
  let { color = void 0 } = $$props;
  let { isDark = false } = $$props;
  let _rgb = { r: 255, g: 0, b: 0, a: 1 };
  let _hsv = { h: 0, s: 100, v: 100, a: 1 };
  let _hex = "#ff0000";
  let span;
  const default_components = {
    sliderIndicator: SliderIndicator,
    pickerIndicator: PickerIndicator,
    alphaIndicator: SliderIndicator,
    pickerWrapper: PickerWrapper,
    sliderWrapper: SliderWrapper,
    alphaWrapper: SliderWrapper,
    textInput: TextInput,
    a11yNotice: A11yNotice,
    a11ySingleNotice: A11ySingleNotice,
    a11ySummary: A11ySummary,
    input: Input,
    wrapper: Wrapper
  };
  function getComponents() {
    return { ...default_components, ...components };
  }
  let labelWrapper;
  let wrapper;
  function updateColor() {
    if (hsv.h === _hsv.h && hsv.s === _hsv.s && hsv.v === _hsv.v && hsv.a === _hsv.a && rgb.r === _rgb.r && rgb.g === _rgb.g && rgb.b === _rgb.b && rgb.a === _rgb.a && hex === _hex) {
      return;
    }
    if (hsv.a === void 0)
      hsv.a = 1;
    if (_hsv.a === void 0)
      _hsv.a = 1;
    if (rgb.a === void 0)
      rgb.a = 1;
    if (_rgb.a === void 0)
      _rgb.a = 1;
    if (hex?.substring(7) === "ff")
      hex = hex.substring(0, 7);
    if (hex?.substring(7) === "ff")
      hex = hex.substring(0, 7);
    if (hsv.h !== _hsv.h || hsv.s !== _hsv.s || hsv.v !== _hsv.v || hsv.a !== _hsv.a) {
      color = w(hsv);
      rgb = color.toRgb();
      hex = color.toHex();
    } else if (rgb.r !== _rgb.r || rgb.g !== _rgb.g || rgb.b !== _rgb.b || rgb.a !== _rgb.a) {
      color = w(rgb);
      hex = color.toHex();
      hsv = color.toHsv();
    } else if (hex !== _hex) {
      color = w(hex);
      rgb = color.toRgb();
      hsv = color.toHsv();
    }
    if (color) {
      isDark = color.isDark();
    }
    _hsv = Object.assign({}, hsv);
    _rgb = Object.assign({}, rgb);
    _hex = hex;
    dispatch("input", { color, hsv, rgb, hex });
  }
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.isAlpha === void 0 && $$bindings.isAlpha && isAlpha !== void 0)
    $$bindings.isAlpha(isAlpha);
  if ($$props.isInput === void 0 && $$bindings.isInput && isInput !== void 0)
    $$bindings.isInput(isInput);
  if ($$props.isTextInput === void 0 && $$bindings.isTextInput && isTextInput !== void 0)
    $$bindings.isTextInput(isTextInput);
  if ($$props.canChangeMode === void 0 && $$bindings.canChangeMode && canChangeMode !== void 0)
    $$bindings.canChangeMode(canChangeMode);
  if ($$props.isA11y === void 0 && $$bindings.isA11y && isA11y !== void 0)
    $$bindings.isA11y(isA11y);
  if ($$props.a11yColors === void 0 && $$bindings.a11yColors && a11yColors !== void 0)
    $$bindings.a11yColors(a11yColors);
  if ($$props.a11yGuidelines === void 0 && $$bindings.a11yGuidelines && a11yGuidelines !== void 0)
    $$bindings.a11yGuidelines(a11yGuidelines);
  if ($$props.isA11yOpen === void 0 && $$bindings.isA11yOpen && isA11yOpen !== void 0)
    $$bindings.isA11yOpen(isA11yOpen);
  if ($$props.isA11yClosable === void 0 && $$bindings.isA11yClosable && isA11yClosable !== void 0)
    $$bindings.isA11yClosable(isA11yClosable);
  if ($$props.isPopup === void 0 && $$bindings.isPopup && isPopup !== void 0)
    $$bindings.isPopup(isPopup);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.toRight === void 0 && $$bindings.toRight && toRight !== void 0)
    $$bindings.toRight(toRight);
  if ($$props.disableCloseClickOutside === void 0 && $$bindings.disableCloseClickOutside && disableCloseClickOutside !== void 0)
    $$bindings.disableCloseClickOutside(disableCloseClickOutside);
  if ($$props.rgb === void 0 && $$bindings.rgb && rgb !== void 0)
    $$bindings.rgb(rgb);
  if ($$props.hsv === void 0 && $$bindings.hsv && hsv !== void 0)
    $$bindings.hsv(hsv);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.isDark === void 0 && $$bindings.isDark && isDark !== void 0)
    $$bindings.isDark(isDark);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (hsv || rgb || hex) {
        updateColor();
      }
    }
    $$rendered = `${validate_component(ArrowKeyHandler, "ArrowKeyHandler").$$render($$result, {}, {}, {})}  <span class="color-picker s-eqiUpkI59eG7"${add_attribute("this", span, 0)}>${isInput ? `${validate_component(getComponents().input || missing_component, "svelte:component").$$render(
      $$result,
      { hex, label, labelWrapper, isOpen },
      {
        labelWrapper: ($$value) => {
          labelWrapper = $$value;
          $$settled = false;
        },
        isOpen: ($$value) => {
          isOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<input type="hidden"${add_attribute("value", hex, 0)}>`} ${validate_component(getComponents().wrapper || missing_component, "svelte:component").$$render(
      $$result,
      { isOpen, isPopup, toRight, wrapper },
      {
        wrapper: ($$value) => {
          wrapper = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Picker, "Picker").$$render(
            $$result,
            {
              components: getComponents(),
              h: hsv.h,
              toRight,
              isDark,
              s: hsv.s,
              v: hsv.v,
              isOpen
            },
            {
              s: ($$value) => {
                hsv.s = $$value;
                $$settled = false;
              },
              v: ($$value) => {
                hsv.v = $$value;
                $$settled = false;
              },
              isOpen: ($$value) => {
                isOpen = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(Slider, "Slider").$$render(
            $$result,
            {
              components: getComponents(),
              toRight,
              h: hsv.h
            },
            {
              h: ($$value) => {
                hsv.h = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${isAlpha ? `${validate_component(Alpha, "Alpha").$$render(
            $$result,
            {
              components: getComponents(),
              hex,
              toRight,
              a: hsv.a,
              isOpen
            },
            {
              a: ($$value) => {
                hsv.a = $$value;
                $$settled = false;
              },
              isOpen: ($$value) => {
                isOpen = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${isTextInput ? `${validate_component(getComponents().textInput || missing_component, "svelte:component").$$render(
            $$result,
            { isAlpha, canChangeMode, hex, rgb, hsv },
            {
              hex: ($$value) => {
                hex = $$value;
                $$settled = false;
              },
              rgb: ($$value) => {
                rgb = $$value;
                $$settled = false;
              },
              hsv: ($$value) => {
                hsv = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${isA11y ? `${validate_component(getComponents().a11yNotice || missing_component, "svelte:component").$$render(
            $$result,
            {
              components: getComponents(),
              a11yColors,
              color,
              hex,
              a11yGuidelines,
              isA11yOpen,
              isA11yClosable
            },
            {},
            {}
          )}` : ``}`;
        }
      }
    )} </span>`;
  } while (!$$settled);
  return $$rendered;
});
const PickerIndicator_svelte_svelte_type_style_lang = "";
const PickerWrapper_svelte_svelte_type_style_lang = "";
const SliderIndicator_svelte_svelte_type_style_lang = "";
const SliderWrapper_svelte_svelte_type_style_lang = "";
const Wrapper_svelte_svelte_type_style_lang = "";
const A11yHorizontalWrapper_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let hex = "#f2ff00";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="col-8"><h1><a href="/" data-svelte-h="svelte-1sfs9jc">GOA Web</a></h1> <div id="map-div" class="container"><!-- HTML_TAG_START -->${data.svg_string}<!-- HTML_TAG_END --></div></div> <div class="col">${validate_component(ColorPicker, "ColorPicker").$$render(
      $$result,
      {
        label: "Land",
        isAlpha: false,
        canChangeMode: false,
        hex
      },
      {
        hex: ($$value) => {
          hex = $$value;
          $$settled = false;
        }
      },
      {}
    )} </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
