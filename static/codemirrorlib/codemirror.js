(function (c, d) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = d())
    : typeof define === "function" && define.amd
    ? define(d)
    : (c.CodeMirror = d());
})(this, function () {
  var iP = navigator.userAgent;
  var ir = navigator.platform;
  var kc = /gecko\/\d/i.test(iP);
  var kv = /MSIE \d/.test(iP);
  var nf = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(iP);
  var kj = kv || nf;
  var kH = kj && (kv ? document.documentMode || 6 : nf[1]);
  var mU = /WebKit\//.test(iP);
  var j6 = mU && /Qt\/\d+\.\d+/.test(iP);
  var ju = /Chrome\//.test(iP);
  var iL = /Opera\//.test(iP);
  var ob = /Apple Computer/.test(navigator.vendor);
  var jI = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(iP);
  var iq = /PhantomJS/.test(iP);
  var hE = /AppleWebKit/.test(iP) && /Mobile\/\w+/.test(iP);
  var ie =
    hE || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(iP);
  var k9 = hE || /Mac/.test(ir);
  var i6 = /\bCrOS\b/.test(iP);
  var nW = /win/i.test(ir);
  var nE = iL && iP.match(/Version\/(\d*\.\d*)/);
  if (nE) {
    nE = Number(nE[1]);
  }
  if (nE && nE >= 15) {
    iL = false;
    mU = true;
  }
  var mW = k9 && (j6 || (iL && (nE == null || nE < 12.11)));
  var hT = kc || (kj && kH >= 9);
  function lO(a) {
    return new RegExp("(^|\\s)" + a + "(?:$|\\s)\\s*");
  }
  var kS = function (d, c) {
    var b = d.className;
    var e = lO(c).exec(b);
    if (e) {
      var a = b.slice(e.index + e[0].length);
      d.className = b.slice(0, e.index) + (a ? e[1] + a : "");
    }
  };
  function iN(b) {
    for (var a = b.childNodes.length; a > 0; --a) {
      b.removeChild(b.firstChild);
    }
    return b;
  }
  function mR(a, b) {
    return iN(a).appendChild(b);
  }
  function gZ(f, b, c, d) {
    var a = document.createElement(f);
    if (c) {
      a.className = c;
    }
    if (d) {
      a.style.cssText = d;
    }
    if (typeof b == "string") {
      a.appendChild(document.createTextNode(b));
    } else {
      if (b) {
        for (var e = 0; e < b.length; ++e) {
          a.appendChild(b[e]);
        }
      }
    }
    return a;
  }
  var ki;
  if (document.createRange) {
    ki = function (c, a, e, b) {
      var d = document.createRange();
      d.setEnd(b || c, e);
      d.setStart(c, a);
      return d;
    };
  } else {
    ki = function (d, a, c) {
      var e = document.body.createTextRange();
      try {
        e.moveToElementText(d.parentNode);
      } catch (b) {
        return e;
      }
      e.collapse(true);
      e.moveEnd("character", c);
      e.moveStart("character", a);
      return e;
    };
  }
  function hR(a, b) {
    if (b.nodeType == 3) {
      b = b.parentNode;
    }
    if (a.contains) {
      return a.contains(b);
    }
    do {
      if (b.nodeType == 11) {
        b = b.host;
      }
      if (b == a) {
        return true;
      }
    } while ((b = b.parentNode));
  }
  function j3() {
    var a;
    try {
      a = document.activeElement;
    } catch (b) {
      a = document.body || null;
    }
    while (a && a.root && a.root.activeElement) {
      a = a.root.activeElement;
    }
    return a;
  }
  function h6(c, a) {
    var b = c.className;
    if (!lO(a).test(b)) {
      c.className += (b ? " " : "") + a;
    }
  }
  function g9(b, d) {
    var c = b.split(" ");
    for (var a = 0; a < c.length; a++) {
      if (c[a] && !lO(c[a]).test(d)) {
        d += " " + c[a];
      }
    }
    return d;
  }
  var kf = function (a) {
    a.select();
  };
  if (hE) {
    kf = function (a) {
      a.selectionStart = 0;
      a.selectionEnd = a.value.length;
    };
  } else {
    if (kj) {
      kf = function (b) {
        try {
          b.select();
        } catch (a) {}
      };
    }
  }
  function mD(b) {
    var a = Array.prototype.slice.call(arguments, 1);
    return function () {
      return b.apply(null, a);
    };
  }
  function n0(c, d, b) {
    if (!d) {
      d = {};
    }
    for (var a in c) {
      if (c.hasOwnProperty(a) && (b !== false || !d.hasOwnProperty(a))) {
        d[a] = c[a];
      }
    }
    return d;
  }
  function mV(d, f, b, a, e) {
    if (f == null) {
      f = d.search(/[^\s\u00a0]/);
      if (f == -1) {
        f = d.length;
      }
    }
    for (var c = a || 0, h = e || 0; ; ) {
      var g = d.indexOf("\t", c);
      if (g < 0 || g >= f) {
        return h + (f - c);
      }
      h += g - c;
      h += b - (h % b);
      c = g + 1;
    }
  }
  function hA() {
    this.id = null;
  }
  hA.prototype.set = function (a, b) {
    clearTimeout(this.id);
    this.id = setTimeout(b, a);
  };
  function jb(a, c) {
    for (var b = 0; b < a.length; ++b) {
      if (a[b] == c) {
        return b;
      }
    }
    return -1;
  }
  var ko = 30;
  var kU = {
    toString: function () {
      return "CodeMirror.Pass";
    },
  };
  var ln = { scroll: false };
  var l9 = { origin: "*mouse" };
  var m4 = { origin: "+move" };
  function jM(c, e, b) {
    for (var a = 0, f = 0; ; ) {
      var g = c.indexOf("\t", a);
      if (g == -1) {
        g = c.length;
      }
      var d = g - a;
      if (g == c.length || f + d >= e) {
        return a + Math.min(d, e - f);
      }
      f += g - a;
      f += b - (f % b);
      a = g + 1;
      if (f >= e) {
        return a;
      }
    }
  }
  var gU = [""];
  function j7(a) {
    while (gU.length <= a) {
      gU.push(ji(gU) + " ");
    }
    return gU[a];
  }
  function ji(a) {
    return a[a.length - 1];
  }
  function mO(a, b) {
    var d = [];
    for (var c = 0; c < a.length; c++) {
      d[c] = b(a[c], c);
    }
    return d;
  }
  function kZ(a, e, d) {
    var c = 0,
      b = d(e);
    while (c < a.length && d(a[c]) <= b) {
      c++;
    }
    a.splice(c, 0, e);
  }
  function g8() {}
  function ks(b, a) {
    var c;
    if (Object.create) {
      c = Object.create(b);
    } else {
      g8.prototype = b;
      c = new g8();
    }
    if (a) {
      n0(a, c);
    }
    return c;
  }
  var mu =
    /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  function h0(a) {
    return (
      /\w/.test(a) ||
      (a > "\x80" && (a.toUpperCase() != a.toLowerCase() || mu.test(a)))
    );
  }
  function mo(a, b) {
    if (!b) {
      return h0(a);
    }
    if (b.source.indexOf("\\w") > -1 && h0(a)) {
      return true;
    }
    return b.test(a);
  }
  function hS(a) {
    for (var b in a) {
      if (a.hasOwnProperty(b) && a[b]) {
        return false;
      }
    }
    return true;
  }
  var ky =
    /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
  function iB(a) {
    return a.charCodeAt(0) >= 768 && ky.test(a);
  }
  function iU(b, c, d) {
    var a = this;
    this.input = d;
    a.scrollbarFiller = gZ("div", null, "CodeMirror-scrollbar-filler");
    a.scrollbarFiller.setAttribute("cm-not-content", "true");
    a.gutterFiller = gZ("div", null, "CodeMirror-gutter-filler");
    a.gutterFiller.setAttribute("cm-not-content", "true");
    a.lineDiv = gZ("div", null, "CodeMirror-code");
    a.selectionDiv = gZ("div", null, null, "position: relative; z-index: 1");
    a.cursorDiv = gZ("div", null, "CodeMirror-cursors");
    a.measure = gZ("div", null, "CodeMirror-measure");
    a.lineMeasure = gZ("div", null, "CodeMirror-measure");
    a.lineSpace = gZ(
      "div",
      [a.measure, a.lineMeasure, a.selectionDiv, a.cursorDiv, a.lineDiv],
      null,
      "position: relative; outline: none"
    );
    a.mover = gZ(
      "div",
      [gZ("div", [a.lineSpace], "CodeMirror-lines")],
      null,
      "position: relative"
    );
    a.sizer = gZ("div", [a.mover], "CodeMirror-sizer");
    a.sizerWidth = null;
    a.heightForcer = gZ(
      "div",
      null,
      null,
      "position: absolute; height: " + ko + "px; width: 1px;"
    );
    a.gutters = gZ("div", null, "CodeMirror-gutters");
    a.lineGutter = null;
    a.scroller = gZ(
      "div",
      [a.sizer, a.heightForcer, a.gutters],
      "CodeMirror-scroll"
    );
    a.scroller.setAttribute("tabIndex", "-1");
    a.wrapper = gZ(
      "div",
      [a.scrollbarFiller, a.gutterFiller, a.scroller],
      "CodeMirror"
    );
    if (kj && kH < 8) {
      a.gutters.style.zIndex = -1;
      a.scroller.style.paddingRight = 0;
    }
    if (!mU && !(kc && ie)) {
      a.scroller.draggable = true;
    }
    if (b) {
      if (b.appendChild) {
        b.appendChild(a.wrapper);
      } else {
        b(a.wrapper);
      }
    }
    a.viewFrom = a.viewTo = c.first;
    a.reportedViewFrom = a.reportedViewTo = c.first;
    a.view = [];
    a.renderedView = null;
    a.externalMeasured = null;
    a.viewOffset = 0;
    a.lastWrapHeight = a.lastWrapWidth = 0;
    a.updateLineNumbers = null;
    a.nativeBarWidth = a.barHeight = a.barWidth = 0;
    a.scrollbarsClipped = false;
    a.lineNumWidth = a.lineNumInnerWidth = a.lineNumChars = null;
    a.alignWidgets = false;
    a.cachedCharWidth = a.cachedTextHeight = a.cachedPaddingH = null;
    a.maxLine = null;
    a.maxLineLength = 0;
    a.maxLineChanged = false;
    a.wheelDX = a.wheelDY = a.wheelStartX = a.wheelStartY = null;
    a.shift = false;
    a.selForContextMenu = null;
    a.activeTouch = null;
    d.init(a);
  }
  function hm(c, a) {
    a -= c.first;
    if (a < 0 || a >= c.size) {
      throw new Error(
        "There is no line " + (a + c.first) + " in the document."
      );
    }
    var f = c;
    while (!f.lines) {
      for (var e = 0; ; ++e) {
        var b = f.children[e],
          d = b.chunkSize();
        if (a < d) {
          f = b;
          break;
        }
        a -= d;
      }
    }
    return f.lines[a];
  }
  function gY(d, a, c) {
    var e = [],
      b = a.line;
    d.iter(a.line, c.line + 1, function (g) {
      var f = g.text;
      if (b == c.line) {
        f = f.slice(0, c.ch);
      }
      if (b == a.line) {
        f = f.slice(a.ch);
      }
      e.push(f);
      ++b;
    });
    return e;
  }
  function gS(d, b, c) {
    var a = [];
    d.iter(b, c, function (e) {
      a.push(e.text);
    });
    return a;
  }
  function gV(d, b) {
    var c = b - d.height;
    if (c) {
      for (var a = d; a; a = a.parent) {
        a.height += c;
      }
    }
  }
  function m5(e) {
    if (e.parent == null) {
      return null;
    }
    var a = e.parent,
      b = jb(a.lines, e);
    for (var d = a.parent; d; a = d, d = d.parent) {
      for (var c = 0; ; ++c) {
        if (d.children[c] == a) {
          break;
        }
        b += d.children[c].chunkSize();
      }
    }
    return b + a.first;
  }
  function nj(c, d) {
    var f = c.first;
    outer: do {
      for (var g = 0; g < c.children.length; ++g) {
        var h = c.children[g],
          j = h.height;
        if (d < j) {
          c = h;
          continue outer;
        }
        d -= j;
        f += h.chunkSize();
      }
      return f;
    } while (!c.lines);
    var e = 0;
    for (; e < c.lines.length; ++e) {
      var a = c.lines[e],
        b = a.height;
      if (d < b) {
        break;
      }
      d -= b;
    }
    return f + e;
  }
  function k3(b, a) {
    return a >= b.first && a < b.first + b.size;
  }
  function jF(b, a) {
    return String(b.lineNumberFormatter(a + b.firstLineNumber));
  }
  function lA(a, b) {
    if (!(this instanceof lA)) {
      return new lA(a, b);
    }
    this.line = a;
    this.ch = b;
  }
  function kI(b, a) {
    return b.line - a.line || b.ch - a.ch;
  }
  function kz(a) {
    return lA(a.line, a.ch);
  }
  function nD(b, a) {
    return kI(b, a) < 0 ? a : b;
  }
  function m3(b, a) {
    return kI(b, a) < 0 ? b : a;
  }
  function jL(a, b) {
    return Math.max(a.first, Math.min(b, a.first + a.size - 1));
  }
  function i3(c, b) {
    if (b.line < c.first) {
      return lA(c.first, 0);
    }
    var a = c.first + c.size - 1;
    if (b.line > a) {
      return lA(a, hm(c, a).text.length);
    }
    return iu(b, hm(c, b.line).text.length);
  }
  function iu(b, c) {
    var a = b.ch;
    if (a == null || a > c) {
      return lA(b.line, c);
    } else {
      if (a < 0) {
        return lA(b.line, 0);
      } else {
        return b;
      }
    }
  }
  function lo(b, a) {
    var d = [];
    for (var c = 0; c < a.length; c++) {
      d[c] = i3(b, a[c]);
    }
    return d;
  }
  var hM = false;
  var gN = false;
  function ia() {
    hM = true;
  }
  function lf() {
    gN = true;
  }
  function h7(a, b, c) {
    this.marker = a;
    this.from = b;
    this.to = c;
  }
  function hr(b, d) {
    if (b) {
      for (var c = 0; c < b.length; ++c) {
        var a = b[c];
        if (a.marker == d) {
          return a;
        }
      }
    }
  }
  function iY(c, b) {
    var a;
    for (var d = 0; d < c.length; ++d) {
      if (c[d] != b) {
        (a || (a = [])).push(c[d]);
      }
    }
    return a;
  }
  function kP(a, b) {
    a.markedSpans = a.markedSpans ? a.markedSpans.concat([b]) : [b];
    b.marker.attachLine(a);
  }
  function nV(h, g, c) {
    var b;
    if (h) {
      for (var e = 0; e < h.length; ++e) {
        var a = h[e],
          d = a.marker;
        var j = a.from == null || (d.inclusiveLeft ? a.from <= g : a.from < g);
        if (
          j ||
          (a.from == g && d.type == "bookmark" && (!c || !a.marker.insertLeft))
        ) {
          var f = a.to == null || (d.inclusiveRight ? a.to >= g : a.to > g);
          (b || (b = [])).push(new h7(d, a.from, f ? null : a.to));
        }
      }
    }
    return b;
  }
  function oc(h, f, c) {
    var b;
    if (h) {
      for (var e = 0; e < h.length; ++e) {
        var a = h[e],
          d = a.marker;
        var g = a.to == null || (d.inclusiveRight ? a.to >= f : a.to > f);
        if (
          g ||
          (a.from == f && d.type == "bookmark" && (!c || a.marker.insertLeft))
        ) {
          var j =
            a.from == null || (d.inclusiveLeft ? a.from <= f : a.from < f);
          (b || (b = [])).push(
            new h7(d, j ? null : a.from - f, a.to == null ? null : a.to - f)
          );
        }
      }
    }
    return b;
  }
  function h5(q, d) {
    if (d.full) {
      return null;
    }
    var n = k3(q, d.from.line) && hm(q, d.from.line).markedSpans;
    var f = k3(q, d.to.line) && hm(q, d.to.line).markedSpans;
    if (!n && !f) {
      return null;
    }
    var g = d.from.ch,
      v = d.to.ch,
      b = kI(d.from, d.to) == 0;
    var h = nV(n, g, b);
    var e = oc(f, v, b);
    var a = d.text.length == 1,
      k = ji(d.text).length + (a ? g : 0);
    if (h) {
      for (var s = 0; s < h.length; ++s) {
        var t = h[s];
        if (t.to == null) {
          var c = hr(e, t.marker);
          if (!c) {
            t.to = g;
          } else {
            if (a) {
              t.to = c.to == null ? null : c.to + k;
            }
          }
        }
      }
    }
    if (e) {
      for (var j = 0; j < e.length; ++j) {
        var u = e[j];
        if (u.to != null) {
          u.to += k;
        }
        if (u.from == null) {
          var o = hr(h, u.marker);
          if (!o) {
            u.from = k;
            if (a) {
              (h || (h = [])).push(u);
            }
          }
        } else {
          u.from += k;
          if (a) {
            (h || (h = [])).push(u);
          }
        }
      }
    }
    if (h) {
      h = kn(h);
    }
    if (e && e != h) {
      e = kn(e);
    }
    var r = [h];
    if (!a) {
      var w = d.text.length - 2,
        p;
      if (w > 0 && h) {
        for (var l = 0; l < h.length; ++l) {
          if (h[l].to == null) {
            (p || (p = [])).push(new h7(h[l].marker, null, null));
          }
        }
      }
      for (var m = 0; m < w; ++m) {
        r.push(p);
      }
      r.push(e);
    }
    return r;
  }
  function kn(b) {
    for (var c = 0; c < b.length; ++c) {
      var a = b[c];
      if (
        a.from != null &&
        a.from == a.to &&
        a.marker.clearWhenEmpty !== false
      ) {
        b.splice(c--, 1);
      }
    }
    if (!b.length) {
      return null;
    }
    return b;
  }
  function l1(a, c, b) {
    var j = null;
    a.iter(c.line, b.line + 1, function (q) {
      if (q.markedSpans) {
        for (var p = 0; p < q.markedSpans.length; ++p) {
          var o = q.markedSpans[p].marker;
          if (o.readOnly && (!j || jb(j, o) == -1)) {
            (j || (j = [])).push(o);
          }
        }
      }
    });
    if (!j) {
      return null;
    }
    var h = [{ from: c, to: b }];
    for (var g = 0; g < j.length; ++g) {
      var f = j[g],
        l = f.find(0);
      for (var k = 0; k < h.length; ++k) {
        var m = h[k];
        if (kI(m.to, l.from) < 0 || kI(m.from, l.to) > 0) {
          continue;
        }
        var d = [k, 1],
          n = kI(m.from, l.from),
          e = kI(m.to, l.to);
        if (n < 0 || (!f.inclusiveLeft && !n)) {
          d.push({ from: m.from, to: l.from });
        }
        if (e > 0 || (!f.inclusiveRight && !e)) {
          d.push({ from: l.to, to: m.to });
        }
        h.splice.apply(h, d);
        k += d.length - 1;
      }
    }
    return h;
  }
  function hV(c) {
    var a = c.markedSpans;
    if (!a) {
      return;
    }
    for (var b = 0; b < a.length; ++b) {
      a[b].marker.detachLine(c);
    }
    c.markedSpans = null;
  }
  function mM(c, a) {
    if (!a) {
      return;
    }
    for (var b = 0; b < a.length; ++b) {
      a[b].marker.attachLine(c);
    }
    c.markedSpans = a;
  }
  function j5(a) {
    return a.inclusiveLeft ? -1 : 0;
  }
  function mH(a) {
    return a.inclusiveRight ? 1 : 0;
  }
  function lW(e, g) {
    var b = e.lines.length - g.lines.length;
    if (b != 0) {
      return b;
    }
    var f = e.find(),
      a = g.find();
    var d = kI(f.from, a.from) || j5(e) - j5(g);
    if (d) {
      return -d;
    }
    var c = kI(f.to, a.to) || mH(e) - mH(g);
    if (c) {
      return c;
    }
    return g.id - e.id;
  }
  function gO(e, a) {
    var f = gN && e.markedSpans,
      b;
    if (f) {
      for (var c = void 0, d = 0; d < f.length; ++d) {
        c = f[d];
        if (
          c.marker.collapsed &&
          (a ? c.from : c.to) == null &&
          (!b || lW(b, c.marker) < 0)
        ) {
          b = c.marker;
        }
      }
    }
    return b;
  }
  function kb(a) {
    return gO(a, true);
  }
  function jy(a) {
    return gO(a, false);
  }
  function jS(d, m, f, e, h) {
    var a = hm(d, m);
    var l = gN && a.markedSpans;
    if (l) {
      for (var j = 0; j < l.length; ++j) {
        var k = l[j];
        if (!k.marker.collapsed) {
          continue;
        }
        var b = k.marker.find(0);
        var c = kI(b.from, f) || j5(k.marker) - j5(h);
        var g = kI(b.to, e) || mH(k.marker) - mH(h);
        if ((c >= 0 && g <= 0) || (c <= 0 && g >= 0)) {
          continue;
        }
        if (
          (c <= 0 &&
            (k.marker.inclusiveRight && h.inclusiveLeft
              ? kI(b.to, f) >= 0
              : kI(b.to, f) > 0)) ||
          (c >= 0 &&
            (k.marker.inclusiveRight && h.inclusiveLeft
              ? kI(b.from, e) <= 0
              : kI(b.from, e) < 0))
        ) {
          return true;
        }
      }
    }
  }
  function jV(b) {
    var a;
    while ((a = kb(b))) {
      b = a.find(-1, true).line;
    }
    return b;
  }
  function kW(b) {
    var a, c;
    while ((a = jy(b))) {
      b = a.find(1, true).line;
      (c || (c = [])).push(b);
    }
    return c;
  }
  function nJ(b, d) {
    var a = hm(b, d),
      c = jV(a);
    if (a == c) {
      return d;
    }
    return m5(c);
  }
  function iJ(b, c) {
    if (c > b.lastLine()) {
      return c;
    }
    var d = hm(b, c),
      a;
    if (!il(b, d)) {
      return c;
    }
    while ((a = jy(d))) {
      d = a.find(1, true).line;
    }
    return m5(d) + 1;
  }
  function il(a, d) {
    var e = gN && d.markedSpans;
    if (e) {
      for (var b = void 0, c = 0; c < e.length; ++c) {
        b = e[c];
        if (!b.marker.collapsed) {
          continue;
        }
        if (b.from == null) {
          return true;
        }
        if (b.marker.widgetNode) {
          continue;
        }
        if (b.from == 0 && b.marker.inclusiveLeft && lJ(a, d, b)) {
          return true;
        }
      }
    }
  }
  function lJ(a, e, c) {
    if (c.to == null) {
      var f = c.marker.find(1, true);
      return lJ(a, f.line, hr(f.line.markedSpans, c.marker));
    }
    if (c.marker.inclusiveRight && c.to == e.text.length) {
      return true;
    }
    for (var b = void 0, d = 0; d < e.markedSpans.length; ++d) {
      b = e.markedSpans[d];
      if (
        b.marker.collapsed &&
        !b.marker.widgetNode &&
        b.from == c.to &&
        (b.to == null || b.to != c.from) &&
        (b.marker.inclusiveLeft || c.marker.inclusiveRight) &&
        lJ(a, e, b)
      ) {
        return true;
      }
    }
  }
  function m7(e) {
    e = jV(e);
    var c = 0,
      f = e.parent;
    for (var d = 0; d < f.lines.length; ++d) {
      var g = f.lines[d];
      if (g == e) {
        break;
      } else {
        c += g.height;
      }
    }
    for (var b = f.parent; b; f = b, b = f.parent) {
      for (var h = 0; h < b.children.length; ++h) {
        var a = b.children[h];
        if (a == f) {
          break;
        } else {
          c += a.height;
        }
      }
    }
    return c;
  }
  function hZ(e) {
    if (e.height == 0) {
      return 0;
    }
    var f = e.text.length,
      d,
      a = e;
    while ((d = kb(a))) {
      var c = d.find(0, true);
      a = c.from.line;
      f += c.from.ch - c.to.ch;
    }
    a = e;
    while ((d = jy(a))) {
      var b = d.find(0, true);
      f -= a.text.length - b.from.ch;
      a = b.to.line;
      f += a.text.length - b.to.ch;
    }
    return f;
  }
  function kY(a) {
    var b = a.display,
      c = a.doc;
    b.maxLine = hm(c, c.first);
    b.maxLineLength = hZ(b.maxLine);
    b.maxLineChanged = true;
    c.iter(function (d) {
      var e = hZ(d);
      if (e > b.maxLineLength) {
        b.maxLineLength = e;
        b.maxLine = d;
      }
    });
  }
  function iG(g, a, b, c) {
    if (!g) {
      return c(a, b, "ltr");
    }
    var d = false;
    for (var e = 0; e < g.length; ++e) {
      var f = g[e];
      if ((f.from < b && f.to > a) || (a == b && f.to == a)) {
        c(Math.max(f.from, a), Math.min(f.to, b), f.level == 1 ? "rtl" : "ltr");
        d = true;
      }
    }
    if (!d) {
      c(a, b, "ltr");
    }
  }
  function kT(a) {
    return a.level % 2 ? a.to : a.from;
  }
  function hJ(a) {
    return a.level % 2 ? a.from : a.to;
  }
  function md(b) {
    var a = ld(b);
    return a ? kT(a[0]) : 0;
  }
  function lj(b) {
    var a = ld(b);
    if (!a) {
      return b.text.length;
    }
    return hJ(ji(a));
  }
  function ne(d, c, b) {
    var a = d[0].level;
    if (c == a) {
      return true;
    }
    if (b == a) {
      return false;
    }
    return c < b;
  }
  var hz = null;
  function n6(e, a) {
    var c;
    hz = null;
    for (var d = 0; d < e.length; ++d) {
      var b = e[d];
      if (b.from < a && b.to > a) {
        return d;
      }
      if (b.from == a || b.to == a) {
        if (c == null) {
          c = d;
        } else {
          if (ne(e, b.level, e[c].level)) {
            if (b.from != b.to) {
              hz = c;
            }
            return d;
          } else {
            if (b.from != b.to) {
              hz = d;
            }
            return c;
          }
        }
      }
    }
    return c;
  }
  function hl(b, a, d, c) {
    if (!c) {
      return a + d;
    }
    do {
      a += d;
    } while (a > 0 && iB(b.text.charAt(a)));
    return a;
  }
  function ka(f, a, g, e) {
    var d = ld(f);
    if (!d) {
      return nn(f, a, g, e);
    }
    var b = n6(d, a),
      h = d[b];
    var c = hl(f, a, h.level % 2 ? -g : g, e);
    for (;;) {
      if (c > h.from && c < h.to) {
        return c;
      }
      if (c == h.from || c == h.to) {
        if (n6(d, c) == b) {
          return c;
        }
        h = d[(b += g)];
        return g > 0 == h.level % 2 ? h.to : h.from;
      } else {
        h = d[(b += g)];
        if (!h) {
          return null;
        }
        if (g > 0 == h.level % 2) {
          c = hl(f, h.to, -1, e);
        } else {
          c = hl(f, h.from, 1, e);
        }
      }
    }
  }
  function nn(c, a, e, d) {
    var b = a + e;
    if (d) {
      while (b > 0 && iB(c.text.charAt(b))) {
        b += e;
      }
    }
    return b < 0 || b > c.text.length ? null : b;
  }
  var mc = (function () {
    var e =
      "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
    var g =
      "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
    function h(l) {
      if (l <= 247) {
        return e.charAt(l);
      } else {
        if (1424 <= l && l <= 1524) {
          return "R";
        } else {
          if (1536 <= l && l <= 1773) {
            return g.charAt(l - 1536);
          } else {
            if (1774 <= l && l <= 2220) {
              return "r";
            } else {
              if (8192 <= l && l <= 8203) {
                return "w";
              } else {
                if (l == 8204) {
                  return "b";
                } else {
                  return "L";
                }
              }
            }
          }
        }
      }
    }
    var b = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
    var a = /[stwN]/,
      j = /[LRr]/,
      k = /[Lb1n]/,
      f = /[1n]/;
    var c = "L";
    function d(l, m, n) {
      this.level = l;
      this.from = m;
      this.to = n;
    }
    return function (s) {
      if (!b.test(s)) {
        return false;
      }
      var R = s.length,
        F = [];
      for (var l = 0; l < R; ++l) {
        F.push(h(s.charCodeAt(l)));
      }
      for (var H = 0, B = c; H < R; ++H) {
        var o = F[H];
        if (o == "m") {
          F[H] = B;
        } else {
          B = o;
        }
      }
      for (var J = 0, v = c; J < R; ++J) {
        var r = F[J];
        if (r == "1" && v == "r") {
          F[J] = "n";
        } else {
          if (j.test(r)) {
            v = r;
            if (r == "r") {
              F[J] = "R";
            }
          }
        }
      }
      for (var K = 1, A = F[0]; K < R - 1; ++K) {
        var w = F[K];
        if (w == "+" && A == "1" && F[K + 1] == "1") {
          F[K] = "1";
        } else {
          if (w == "," && A == F[K + 1] && (A == "1" || A == "n")) {
            F[K] = A;
          }
        }
        A = w;
      }
      for (var N = 0; N < R; ++N) {
        var y = F[N];
        if (y == ",") {
          F[N] = "N";
        } else {
          if (y == "%") {
            var m = void 0;
            for (m = N + 1; m < R && F[m] == "%"; ++m) {}
            var L =
              (N && F[N - 1] == "!") || (m < R && F[m] == "1") ? "1" : "N";
            for (var n = N; n < m; ++n) {
              F[n] = L;
            }
            N = m - 1;
          }
        }
      }
      for (var T = 0, S = c; T < R; ++T) {
        var C = F[T];
        if (S == "L" && C == "1") {
          F[T] = "L";
        } else {
          if (j.test(C)) {
            S = C;
          }
        }
      }
      for (var u = 0; u < R; ++u) {
        if (a.test(F[u])) {
          var P = void 0;
          for (P = u + 1; P < R && a.test(F[P]); ++P) {}
          var E = (u ? F[u - 1] : c) == "L";
          var x = (P < R ? F[P] : c) == "L";
          var G = E || x ? "L" : "R";
          for (var M = u; M < P; ++M) {
            F[M] = G;
          }
          u = P - 1;
        }
      }
      var p = [],
        t;
      for (var z = 0; z < R; ) {
        if (k.test(F[z])) {
          var Q = z;
          for (++z; z < R && k.test(F[z]); ++z) {}
          p.push(new d(0, Q, z));
        } else {
          var I = z,
            D = p.length;
          for (++z; z < R && F[z] != "L"; ++z) {}
          for (var O = I; O < z; ) {
            if (f.test(F[O])) {
              if (I < O) {
                p.splice(D, 0, new d(1, I, O));
              }
              var q = O;
              for (++O; O < z && f.test(F[O]); ++O) {}
              p.splice(D, 0, new d(2, q, O));
              I = O;
            } else {
              ++O;
            }
          }
          if (I < z) {
            p.splice(D, 0, new d(1, I, z));
          }
        }
      }
      if (p[0].level == 1 && (t = s.match(/^\s+/))) {
        p[0].from = t[0].length;
        p.unshift(new d(0, 0, t[0].length));
      }
      if (ji(p).level == 1 && (t = s.match(/\s+$/))) {
        ji(p).to -= t[0].length;
        p.push(new d(0, R - t[0].length, R));
      }
      if (p[0].level == 2) {
        p.unshift(new d(1, p[0].to, p[0].to));
      }
      if (p[0].level != ji(p).level) {
        p.push(new d(p[0].level, R, R));
      }
      return p;
    };
  })();
  function ld(b) {
    var a = b.order;
    if (a == null) {
      a = b.order = mc(b.text);
    }
    return a;
  }
  var hv = [];
  var nY = function (b, a, c) {
    if (b.addEventListener) {
      b.addEventListener(a, c, false);
    } else {
      if (b.attachEvent) {
        b.attachEvent("on" + a, c);
      } else {
        var d = b._handlers || (b._handlers = {});
        d[a] = (d[a] || hv).concat(c);
      }
    }
  };
  function h4(b, a) {
    return (b._handlers && b._handlers[a]) || hv;
  }
  function ih(a, e, b) {
    if (a.removeEventListener) {
      a.removeEventListener(e, b, false);
    } else {
      if (a.detachEvent) {
        a.detachEvent("on" + e, b);
      } else {
        var d = a._handlers,
          c = d && d[e];
        if (c) {
          var f = jb(c, b);
          if (f > -1) {
            d[e] = c.slice(0, f).concat(c.slice(f + 1));
          }
        }
      }
    }
  }
  function n9(a, b) {
    var e = h4(a, b);
    if (!e.length) {
      return;
    }
    var d = Array.prototype.slice.call(arguments, 2);
    for (var c = 0; c < e.length; ++c) {
      e[c].apply(null, d);
    }
  }
  function nT(a, b, c) {
    if (typeof b == "string") {
      b = {
        type: b,
        preventDefault: function () {
          this.defaultPrevented = true;
        },
      };
    }
    n9(a, c || b.type, a, b);
    return na(b) || b.codemirrorIgnore;
  }
  function lD(c) {
    var d = c._handlers && c._handlers.cursorActivity;
    if (!d) {
      return;
    }
    var a =
      c.curOp.cursorActivityHandlers || (c.curOp.cursorActivityHandlers = []);
    for (var b = 0; b < d.length; ++b) {
      if (jb(a, d[b]) == -1) {
        a.push(d[b]);
      }
    }
  }
  function iI(b, a) {
    return h4(b, a).length > 0;
  }
  function nA(a) {
    a.prototype.on = function (c, b) {
      nY(this, c, b);
    };
    a.prototype.off = function (c, b) {
      ih(this, c, b);
    };
  }
  function l7(a) {
    if (a.preventDefault) {
      a.preventDefault();
    } else {
      a.returnValue = false;
    }
  }
  function iT(a) {
    if (a.stopPropagation) {
      a.stopPropagation();
    } else {
      a.cancelBubble = true;
    }
  }
  function na(a) {
    return a.defaultPrevented != null
      ? a.defaultPrevented
      : a.returnValue == false;
  }
  function jK(a) {
    l7(a);
    iT(a);
  }
  function mb(a) {
    return a.target || a.srcElement;
  }
  function hi(b) {
    var a = b.which;
    if (a == null) {
      if (b.button & 1) {
        a = 1;
      } else {
        if (b.button & 2) {
          a = 3;
        } else {
          if (b.button & 4) {
            a = 2;
          }
        }
      }
    }
    if (k9 && b.ctrlKey && a == 1) {
      a = 3;
    }
    return a;
  }
  var kr = (function () {
    if (kj && kH < 9) {
      return false;
    }
    var a = gZ("div");
    return "draggable" in a || "dragDrop" in a;
  })();
  var hk;
  function lP(a) {
    if (hk == null) {
      var b = gZ("span", "\u200b");
      mR(a, gZ("span", [b, document.createTextNode("x")]));
      if (a.firstChild.offsetHeight != 0) {
        hk = b.offsetWidth <= 1 && b.offsetHeight > 2 && !(kj && kH < 8);
      }
    }
    var c = hk
      ? gZ("span", "\u200b")
      : gZ(
          "span",
          "\u00a0",
          null,
          "display: inline-block; width: 1px; margin-right: -1px"
        );
    c.setAttribute("cm-text", "");
    return c;
  }
  var hj;
  function m2(b) {
    if (hj != null) {
      return hj;
    }
    var a = mR(b, document.createTextNode("A\u062eA"));
    var c = ki(a, 0, 1).getBoundingClientRect();
    var d = ki(a, 1, 2).getBoundingClientRect();
    iN(b);
    if (!c || c.left == c.right) {
      return false;
    }
    return (hj = d.right - c.right < 3);
  }
  var hd =
    "\n\nb".split(/\n/).length != 3
      ? function (b) {
          var a = 0,
            e = [],
            c = b.length;
          while (a <= c) {
            var d = b.indexOf("\n", a);
            if (d == -1) {
              d = b.length;
            }
            var f = b.slice(a, b.charAt(d - 1) == "\r" ? d - 1 : d);
            var g = f.indexOf("\r");
            if (g != -1) {
              e.push(f.slice(0, g));
              a += g + 1;
            } else {
              e.push(f);
              a = d + 1;
            }
          }
          return e;
        }
      : function (a) {
          return a.split(/\r\n?|\n/);
        };
  var lv = window.getSelection
    ? function (b) {
        try {
          return b.selectionStart != b.selectionEnd;
        } catch (a) {
          return false;
        }
      }
    : function (b) {
        var c;
        try {
          c = b.ownerDocument.selection.createRange();
        } catch (a) {}
        if (!c || c.parentElement() != b) {
          return false;
        }
        return c.compareEndPoints("StartToEnd", c) != 0;
      };
  var jz = (function () {
    var a = gZ("div");
    if ("oncopy" in a) {
      return true;
    }
    a.setAttribute("oncopy", "return;");
    return typeof a.oncopy == "function";
  })();
  var hu = null;
  function n2(d) {
    if (hu != null) {
      return hu;
    }
    var c = mR(d, gZ("span", "x"));
    var b = c.getBoundingClientRect();
    var a = ki(c, 0, 1).getBoundingClientRect();
    return (hu = Math.abs(b.left - a.left) > 1);
  }
  var le = {};
  var nQ = {};
  function jE(a, b) {
    if (arguments.length > 2) {
      b.dependencies = Array.prototype.slice.call(arguments, 2);
    }
    le[a] = b;
  }
  function lT(b, a) {
    nQ[b] = a;
  }
  function hP(a) {
    if (typeof a == "string" && nQ.hasOwnProperty(a)) {
      a = nQ[a];
    } else {
      if (a && typeof a.name == "string" && nQ.hasOwnProperty(a.name)) {
        var b = nQ[a.name];
        if (typeof b == "string") {
          b = { name: b };
        }
        a = ks(b, a);
        a.name = b.name;
      } else {
        if (typeof a == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(a)) {
          return hP("application/xml");
        } else {
          if (typeof a == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(a)) {
            return hP("application/json");
          }
        }
      }
    }
    if (typeof a == "string") {
      return { name: a };
    } else {
      return a || { name: "null" };
    }
  }
  function h8(f, g) {
    g = hP(g);
    var c = le[g.name];
    if (!c) {
      return h8(f, "text/plain");
    }
    var b = c(f, g);
    if (iV.hasOwnProperty(g.name)) {
      var e = iV[g.name];
      for (var a in e) {
        if (!e.hasOwnProperty(a)) {
          continue;
        }
        if (b.hasOwnProperty(a)) {
          b["_" + a] = b[a];
        }
        b[a] = e[a];
      }
    }
    b.name = g.name;
    if (g.helperType) {
      b.helperType = g.helperType;
    }
    if (g.modeProps) {
      for (var d in g.modeProps) {
        b[d] = g.modeProps[d];
      }
    }
    return b;
  }
  var iV = {};
  function jc(b, c) {
    var a = iV.hasOwnProperty(b) ? iV[b] : (iV[b] = {});
    n0(c, a);
  }
  function nK(c, b) {
    if (b === true) {
      return b;
    }
    if (c.copyState) {
      return c.copyState(b);
    }
    var d = {};
    for (var a in b) {
      var e = b[a];
      if (e instanceof Array) {
        e = e.concat([]);
      }
      d[a] = e;
    }
    return d;
  }
  function hX(b, a) {
    var c;
    while (b.innerMode) {
      c = b.innerMode(a);
      if (!c || c.mode == b) {
        break;
      }
      a = c.state;
      b = c.mode;
    }
    return c || { mode: b, state: a };
  }
  function nR(b, c, a) {
    return b.startState ? b.startState(c, a) : true;
  }
  var hU = function (a, b) {
    this.pos = this.start = 0;
    this.string = a;
    this.tabSize = b || 8;
    this.lastColumnPos = this.lastColumnValue = 0;
    this.lineStart = 0;
  };
  hU.prototype = {
    eol: function () {
      return this.pos >= this.string.length;
    },
    sol: function () {
      return this.pos == this.lineStart;
    },
    peek: function () {
      return this.string.charAt(this.pos) || undefined;
    },
    next: function () {
      if (this.pos < this.string.length) {
        return this.string.charAt(this.pos++);
      }
    },
    eat: function (a) {
      var b = this.string.charAt(this.pos);
      var c;
      if (typeof a == "string") {
        c = b == a;
      } else {
        c = b && (a.test ? a.test(b) : a(b));
      }
      if (c) {
        ++this.pos;
        return b;
      }
    },
    eatWhile: function (a) {
      var b = this.pos;
      while (this.eat(a)) {}
      return this.pos > b;
    },
    eatSpace: function () {
      var b = this;
      var a = this.pos;
      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) {
        ++b.pos;
      }
      return this.pos > a;
    },
    skipToEnd: function () {
      this.pos = this.string.length;
    },
    skipTo: function (a) {
      var b = this.string.indexOf(a, this.pos);
      if (b > -1) {
        this.pos = b;
        return true;
      }
    },
    backUp: function (a) {
      this.pos -= a;
    },
    column: function () {
      if (this.lastColumnPos < this.start) {
        this.lastColumnValue = mV(
          this.string,
          this.start,
          this.tabSize,
          this.lastColumnPos,
          this.lastColumnValue
        );
        this.lastColumnPos = this.start;
      }
      return (
        this.lastColumnValue -
        (this.lineStart ? mV(this.string, this.lineStart, this.tabSize) : 0)
      );
    },
    indentation: function () {
      return (
        mV(this.string, null, this.tabSize) -
        (this.lineStart ? mV(this.string, this.lineStart, this.tabSize) : 0)
      );
    },
    match: function (b, f, d) {
      if (typeof b == "string") {
        var a = function (g) {
          return d ? g.toLowerCase() : g;
        };
        var c = this.string.substr(this.pos, b.length);
        if (a(c) == a(b)) {
          if (f !== false) {
            this.pos += b.length;
          }
          return true;
        }
      } else {
        var e = this.string.slice(this.pos).match(b);
        if (e && e.index > 0) {
          return null;
        }
        if (e && f !== false) {
          this.pos += e[0].length;
        }
        return e;
      }
    },
    current: function () {
      return this.string.slice(this.start, this.pos);
    },
    hideFirstChars: function (b, a) {
      this.lineStart += b;
      try {
        return a();
      } finally {
        this.lineStart -= b;
      }
    },
  };
  function ib(f, g, b, c) {
    var d = [f.state.modeGen],
      e = {};
    j2(
      f,
      g.text,
      f.doc.mode,
      b,
      function (k, j) {
        return d.push(k, j);
      },
      e,
      c
    );
    var h = function (j) {
      var l = f.state.overlays[j],
        k = 1,
        m = 0;
      j2(
        f,
        g.text,
        l.mode,
        true,
        function (r, p) {
          var n = k;
          while (m < r) {
            var q = d[k];
            if (q > r) {
              d.splice(k, 1, r, d[k + 1], q);
            }
            k += 2;
            m = Math.min(r, q);
          }
          if (!p) {
            return;
          }
          if (l.opaque) {
            d.splice(n, k - n, r, "overlay " + p);
            k = n + 2;
          } else {
            for (; n < k; n += 2) {
              var o = d[n + 1];
              d[n + 1] = (o ? o + " " : "") + "overlay " + p;
            }
          }
        },
        e
      );
    };
    for (var a = 0; a < f.state.overlays.length; ++a) {
      h(a);
    }
    return { styles: d, classes: e.bgClass || e.textClass ? e : null };
  }
  function jG(e, d, a) {
    if (!d.styles || d.styles[0] != e.state.modeGen) {
      var c = kM(e, m5(d));
      var b = ib(
        e,
        d,
        d.text.length > e.options.maxHighlightLength ? nK(e.doc.mode, c) : c
      );
      d.stateAfter = c;
      d.styles = b.styles;
      if (b.classes) {
        d.styleClasses = b.classes;
      } else {
        if (d.styleClasses) {
          d.styleClasses = null;
        }
      }
      if (a === e.doc.frontier) {
        e.doc.frontier++;
      }
    }
    return d.styles;
  }
  function kM(e, a, g) {
    var c = e.doc,
      d = e.display;
    if (!c.mode.startState) {
      return true;
    }
    var b = mv(e, a, g),
      f = b > c.first && hm(c, b - 1).stateAfter;
    if (!f) {
      f = nR(c.mode);
    } else {
      f = nK(c.mode, f);
    }
    c.iter(b, a, function (h) {
      k0(e, h.text, f);
      var j = b == a - 1 || b % 5 == 0 || (b >= d.viewFrom && b < d.viewTo);
      h.stateAfter = j ? nK(c.mode, f) : null;
      ++b;
    });
    if (g) {
      c.frontier = b;
    }
    return f;
  }
  function k0(d, a, e, f) {
    var b = d.doc.mode;
    var c = new hU(a, d.options.tabSize);
    c.start = c.pos = f || 0;
    if (a == "") {
      iz(b, e);
    }
    while (!c.eol()) {
      jj(b, c, e);
      c.start = c.pos;
    }
  }
  function iz(b, c) {
    if (b.blankLine) {
      return b.blankLine(c);
    }
    if (!b.innerMode) {
      return;
    }
    var a = hX(b, c);
    if (a.mode.blankLine) {
      return a.mode.blankLine(a.state);
    }
  }
  function jj(a, b, c, f) {
    for (var e = 0; e < 10; e++) {
      if (f) {
        f[0] = hX(a, c).mode;
      }
      var d = a.token(b, c);
      if (b.pos > b.start) {
        return d;
      }
    }
    throw new Error("Mode " + a.name + " failed to advance stream.");
  }
  function j4(c, f, j, k) {
    var d = function (n) {
      return {
        start: b.start,
        end: b.pos,
        string: b.current(),
        type: l || null,
        state: n ? nK(e.mode, m) : m,
      };
    };
    var e = c.doc,
      h = e.mode,
      l;
    f = i3(e, f);
    var a = hm(e, f.line),
      m = kM(c, f.line, j);
    var b = new hU(a.text, c.options.tabSize),
      g;
    if (k) {
      g = [];
    }
    while ((k || b.pos < f.ch) && !b.eol()) {
      b.start = b.pos;
      l = jj(h, b, m);
      if (k) {
        g.push(d(true));
      }
    }
    return k ? g : d();
  }
  function i8(c, d) {
    if (c) {
      for (;;) {
        var b = c.match(/(?:^|\s+)line-(background-)?(\S+)/);
        if (!b) {
          break;
        }
        c = c.slice(0, b.index) + c.slice(b.index + b[0].length);
        var a = b[1] ? "bgClass" : "textClass";
        if (d[a] == null) {
          d[a] = b[2];
        } else {
          if (!new RegExp("(?:^|s)" + b[2] + "(?:$|s)").test(d[a])) {
            d[a] += " " + b[2];
          }
        }
      }
    }
    return c;
  }
  function j2(e, c, l, p, k, n, m) {
    var o = l.flattenSpans;
    if (o == null) {
      o = e.options.flattenSpans;
    }
    var h = 0,
      j = null;
    var d = new hU(c, e.options.tabSize),
      g;
    var a = e.options.addModeClass && [null];
    if (c == "") {
      i8(iz(l, p), n);
    }
    while (!d.eol()) {
      if (d.pos > e.options.maxHighlightLength) {
        o = false;
        if (m) {
          k0(e, c, p, d.pos);
        }
        d.pos = c.length;
        g = null;
      } else {
        g = i8(jj(l, d, p, a), n);
      }
      if (a) {
        var b = a[0].name;
        if (b) {
          g = "m-" + (g ? b + " " + g : b);
        }
      }
      if (!o || j != g) {
        while (h < d.start) {
          h = Math.min(d.start, h + 5000);
          k(h, j);
        }
        j = g;
      }
      d.start = d.pos;
    }
    while (h < d.pos) {
      var f = Math.min(d.pos, h + 5000);
      k(f, j);
      h = f;
    }
  }
  function mv(e, b, h) {
    var k,
      g,
      f = e.doc;
    var j = h ? -1 : b - (e.doc.mode.innerMode ? 1000 : 100);
    for (var a = b; a > j; --a) {
      if (a <= f.first) {
        return f.first;
      }
      var c = hm(f, a - 1);
      if (c.stateAfter && (!h || a <= f.frontier)) {
        return a;
      }
      var d = mV(c.text, null, e.options.tabSize);
      if (g == null || k > d) {
        g = a - 1;
        k = d;
      }
    }
    return g;
  }
  function gW(b, c, a) {
    this.text = b;
    mM(this, c);
    this.height = a ? a(this) : 1;
  }
  nA(gW);
  gW.prototype.lineNo = function () {
    return m5(this);
  };
  function hY(e, a, d, c) {
    e.text = a;
    if (e.stateAfter) {
      e.stateAfter = null;
    }
    if (e.styles) {
      e.styles = null;
    }
    if (e.order != null) {
      e.order = null;
    }
    hV(e);
    mM(e, d);
    var b = c ? c(e) : 1;
    if (b != e.height) {
      gV(e, b);
    }
  }
  function nv(a) {
    a.parent = null;
    hV(a);
  }
  var lE = {};
  var nM = {};
  function hO(b, c) {
    if (!b || /^\s*$/.test(b)) {
      return null;
    }
    var a = c.addModeClass ? nM : lE;
    return a[b] || (a[b] = b.replace(/\S+/g, "cm-$&"));
  }
  function j0(c, d) {
    var e = gZ("span", null, null, mU ? "padding-right: .1px" : null);
    var f = {
      pre: gZ("pre", [e], "CodeMirror-line"),
      content: e,
      col: 0,
      pos: 0,
      cm: c,
      trailingSpace: false,
      splitSpaces: (kj || mU) && c.getOption("lineWrapping"),
    };
    d.measure = {};
    for (var g = 0; g <= (d.rest ? d.rest.length : 0); g++) {
      var a = g ? d.rest[g - 1] : d.line,
        h = void 0;
      f.pos = 0;
      f.addToken = ke;
      if (m2(c.display.measure) && (h = ld(a))) {
        f.addToken = lF(f.addToken, h);
      }
      f.map = [];
      var j = d != c.display.externalMeasured && m5(a);
      lK(a, f, jG(c, a, j));
      if (a.styleClasses) {
        if (a.styleClasses.bgClass) {
          f.bgClass = g9(a.styleClasses.bgClass, f.bgClass || "");
        }
        if (a.styleClasses.textClass) {
          f.textClass = g9(a.styleClasses.textClass, f.textClass || "");
        }
      }
      if (f.map.length == 0) {
        f.map.push(0, 0, f.content.appendChild(lP(c.display.measure)));
      }
      if (g == 0) {
        d.measure.map = f.map;
        d.measure.cache = {};
      } else {
        (d.measure.maps || (d.measure.maps = [])).push(f.map);
        (d.measure.caches || (d.measure.caches = [])).push({});
      }
    }
    if (mU) {
      var b = f.content.lastChild;
      if (
        /\bcm-tab\b/.test(b.className) ||
        (b.querySelector && b.querySelector(".cm-tab"))
      ) {
        f.content.className = "cm-tab-wrap-hack";
      }
    }
    n9(c, "renderLine", c, d.line, f.pre);
    if (f.pre.className) {
      f.textClass = g9(f.pre.className, f.textClass || "");
    }
    return f;
  }
  function hn(b) {
    var a = gZ("span", "\u2022", "cm-invalidchar");
    a.title = "\\u" + b.charCodeAt(0).toString(16);
    a.setAttribute("aria-label", a.title);
    return a;
  }
  function ke(e, k, u, c, g, r, l) {
    if (!k) {
      return;
    }
    var a = e.splitSpaces ? ma(k, e.trailingSpace) : k;
    var q = e.cm.state.specialChars,
      p = false;
    var b;
    if (!q.test(k)) {
      e.col += k.length;
      b = document.createTextNode(a);
      e.map.push(e.pos, e.pos + k.length, b);
      if (kj && kH < 9) {
        p = true;
      }
      e.pos += k.length;
    } else {
      b = document.createDocumentFragment();
      var n = 0;
      while (true) {
        q.lastIndex = n;
        var d = q.exec(k);
        var s = d ? d.index - n : k.length - n;
        if (s) {
          var h = document.createTextNode(a.slice(n, n + s));
          if (kj && kH < 9) {
            b.appendChild(gZ("span", [h]));
          } else {
            b.appendChild(h);
          }
          e.map.push(e.pos, e.pos + s, h);
          e.col += s;
          e.pos += s;
        }
        if (!d) {
          break;
        }
        n += s + 1;
        var t = void 0;
        if (d[0] == "\t") {
          var f = e.cm.options.tabSize,
            j = f - (e.col % f);
          t = b.appendChild(gZ("span", j7(j), "cm-tab"));
          t.setAttribute("role", "presentation");
          t.setAttribute("cm-text", "\t");
          e.col += j;
        } else {
          if (d[0] == "\r" || d[0] == "\n") {
            t = b.appendChild(
              gZ("span", d[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar")
            );
            t.setAttribute("cm-text", d[0]);
            e.col += 1;
          } else {
            t = e.cm.options.specialCharPlaceholder(d[0]);
            t.setAttribute("cm-text", d[0]);
            if (kj && kH < 9) {
              b.appendChild(gZ("span", [t]));
            } else {
              b.appendChild(t);
            }
            e.col += 1;
          }
        }
        e.map.push(e.pos, e.pos + 1, t);
        e.pos++;
      }
    }
    e.trailingSpace = a.charCodeAt(k.length - 1) == 32;
    if (u || c || g || p || l) {
      var o = u || "";
      if (c) {
        o += c;
      }
      if (g) {
        o += g;
      }
      var m = gZ("span", [b], o, l);
      if (r) {
        m.title = r;
      }
      return e.content.appendChild(m);
    }
    e.content.appendChild(b);
  }
  function ma(a, b) {
    if (a.length > 1 && !/  /.test(a)) {
      return a;
    }
    var e = b,
      f = "";
    for (var d = 0; d < a.length; d++) {
      var c = a.charAt(d);
      if (c == " " && e && (d == a.length - 1 || a.charCodeAt(d + 1) == 32)) {
        c = "\u00a0";
      }
      f += c;
      e = c == " ";
    }
    return f;
  }
  function lF(b, a) {
    return function (f, d, n, j, c, e, g) {
      n = n ? n + " cm-force-border" : "cm-force-border";
      var m = f.pos,
        k = m + d.length;
      for (;;) {
        var l = void 0;
        for (var h = 0; h < a.length; h++) {
          l = a[h];
          if (l.to > m && l.from <= m) {
            break;
          }
        }
        if (l.to >= k) {
          return b(f, d, n, j, c, e, g);
        }
        b(f, d.slice(0, l.to - m), n, j, null, e, g);
        j = null;
        d = d.slice(l.to - m);
        m = l.to;
      }
    };
  }
  function ny(e, c, b, d) {
    var a = !d && b.widgetNode;
    if (a) {
      e.map.push(e.pos, e.pos + c, a);
    }
    if (!d && e.cm.display.input.needsContentAttribute) {
      if (!a) {
        a = e.content.appendChild(document.createElement("span"));
      }
      a.setAttribute("cm-marker", b.id);
    }
    if (a) {
      e.cm.display.input.setUneditable(a);
      e.content.appendChild(a);
    }
    e.pos += c;
    e.trailingSpace = false;
  }
  function lK(d, A, e) {
    var o = d.markedSpans,
      h = d.text,
      C = 0;
    if (!o) {
      for (var l = 1; l < e.length; l += 2) {
        A.addToken(A, h.slice(C, (C = e[l])), hO(e[l + 1], A.cm.options));
      }
      return;
    }
    var w = h.length,
      q = 0,
      x = 1,
      a = "",
      s,
      c;
    var k = 0,
      v,
      m,
      D,
      g,
      t;
    for (;;) {
      if (k == q) {
        v = m = D = g = c = "";
        t = null;
        k = Infinity;
        var j = [],
          f = void 0;
        for (var z = 0; z < o.length; ++z) {
          var y = o[z],
            B = y.marker;
          if (B.type == "bookmark" && y.from == q && B.widgetNode) {
            j.push(B);
          } else {
            if (
              y.from <= q &&
              (y.to == null ||
                y.to > q ||
                (B.collapsed && y.to == q && y.from == q))
            ) {
              if (y.to != null && y.to != q && k > y.to) {
                k = y.to;
                m = "";
              }
              if (B.className) {
                v += " " + B.className;
              }
              if (B.css) {
                c = (c ? c + ";" : "") + B.css;
              }
              if (B.startStyle && y.from == q) {
                D += " " + B.startStyle;
              }
              if (B.endStyle && y.to == k) {
                (f || (f = [])).push(B.endStyle, y.to);
              }
              if (B.title && !g) {
                g = B.title;
              }
              if (B.collapsed && (!t || lW(t.marker, B) < 0)) {
                t = y;
              }
            } else {
              if (y.from > q && k > y.from) {
                k = y.from;
              }
            }
          }
        }
        if (f) {
          for (var n = 0; n < f.length; n += 2) {
            if (f[n + 1] == k) {
              m += " " + f[n];
            }
          }
        }
        if (!t || t.from == q) {
          for (var p = 0; p < j.length; ++p) {
            ny(A, 0, j[p]);
          }
        }
        if (t && (t.from || 0) == q) {
          ny(A, (t.to == null ? w + 1 : t.to) - q, t.marker, t.from == null);
          if (t.to == null) {
            return;
          }
          if (t.to == q) {
            t = false;
          }
        }
      }
      if (q >= w) {
        break;
      }
      var b = Math.min(w, k);
      while (true) {
        if (a) {
          var u = q + a.length;
          if (!t) {
            var r = u > b ? a.slice(0, b - q) : a;
            A.addToken(
              A,
              r,
              s ? s + v : v,
              D,
              q + r.length == k ? m : "",
              g,
              c
            );
          }
          if (u >= b) {
            a = a.slice(b - q);
            q = b;
            break;
          }
          q = u;
          D = "";
        }
        a = h.slice(C, (C = e[x++]));
        s = hO(e[x++], A.cm.options);
      }
    }
  }
  function lk(b, a, c) {
    this.line = a;
    this.rest = kW(a);
    this.size = this.rest ? m5(ji(this.rest)) - c + 1 : 1;
    this.node = this.text = null;
    this.hidden = il(b, a);
  }
  function hQ(e, a, b) {
    var c = [],
      f;
    for (var d = a; d < b; d = f) {
      var g = new lk(e.doc, hm(e.doc, d), d);
      f = d + g.size;
      c.push(g);
    }
    return c;
  }
  var lG = null;
  function js(a) {
    if (lG) {
      lG.ops.push(a);
    } else {
      a.ownsGroup = lG = { ops: [a], delayedCallbacks: [] };
    }
  }
  function nb(b) {
    var c = b.delayedCallbacks,
      d = 0;
    do {
      for (; d < c.length; d++) {
        c[d].call(null);
      }
      for (var e = 0; e < b.ops.length; e++) {
        var a = b.ops[e];
        if (a.cursorActivityHandlers) {
          while (a.cursorActivityCalled < a.cursorActivityHandlers.length) {
            a.cursorActivityHandlers[a.cursorActivityCalled++].call(null, a.cm);
          }
        }
      }
    } while (d < c.length);
  }
  function nX(b, c) {
    var a = b.ownsGroup;
    if (!a) {
      return;
    }
    try {
      nb(a);
    } finally {
      lG = null;
      c(a);
    }
  }
  var nB = null;
  function nw(a, c) {
    var g = h4(a, c);
    if (!g.length) {
      return;
    }
    var e = Array.prototype.slice.call(arguments, 2),
      b;
    if (lG) {
      b = lG.delayedCallbacks;
    } else {
      if (nB) {
        b = nB;
      } else {
        b = nB = [];
        setTimeout(n1, 0);
      }
    }
    var f = function (h) {
      b.push(function () {
        return g[h].apply(null, e);
      });
    };
    for (var d = 0; d < g.length; ++d) {
      f(d);
    }
  }
  function n1() {
    var b = nB;
    nB = null;
    for (var a = 0; a < b.length; ++a) {
      b[a]();
    }
  }
  function nC(d, e, b, a) {
    for (var f = 0; f < e.changes.length; f++) {
      var c = e.changes[f];
      if (c == "text") {
        iH(d, e);
      } else {
        if (c == "gutter") {
          jo(d, e, b, a);
        } else {
          if (c == "class") {
            kA(e);
          } else {
            if (c == "widget") {
              nc(d, e, a);
            }
          }
        }
      }
    }
    e.changes = null;
  }
  function jd(a) {
    if (a.node == a.text) {
      a.node = gZ("div", null, null, "position: relative");
      if (a.text.parentNode) {
        a.text.parentNode.replaceChild(a.node, a.text);
      }
      a.node.appendChild(a.text);
      if (kj && kH < 8) {
        a.node.style.zIndex = 2;
      }
    }
    return a.node;
  }
  function jA(c) {
    var a = c.bgClass
      ? c.bgClass + " " + (c.line.bgClass || "")
      : c.line.bgClass;
    if (a) {
      a += " CodeMirror-linebackground";
    }
    if (c.background) {
      if (a) {
        c.background.className = a;
      } else {
        c.background.parentNode.removeChild(c.background);
        c.background = null;
      }
    } else {
      if (a) {
        var b = jd(c);
        c.background = b.insertBefore(gZ("div", null, a), b.firstChild);
      }
    }
  }
  function lH(a, c) {
    var b = a.display.externalMeasured;
    if (b && b.line == c.line) {
      a.display.externalMeasured = null;
      c.measure = b.measure;
      return b.built;
    }
    return j0(a, c);
  }
  function iH(b, a) {
    var d = a.text.className;
    var c = lH(b, a);
    if (a.text == a.node) {
      a.node = c.pre;
    }
    a.text.parentNode.replaceChild(c.pre, a.text);
    a.text = c.pre;
    if (c.bgClass != a.bgClass || c.textClass != a.textClass) {
      a.bgClass = c.bgClass;
      a.textClass = c.textClass;
      kA(a);
    } else {
      if (d) {
        a.text.className = d;
      }
    }
  }
  function kA(b) {
    jA(b);
    if (b.line.wrapClass) {
      jd(b).className = b.line.wrapClass;
    } else {
      if (b.node != b.text) {
        b.node.className = "";
      }
    }
    var a = b.textClass
      ? b.textClass + " " + (b.line.textClass || "")
      : b.line.textClass;
    b.text.className = a || "";
  }
  function jo(d, f, g, e) {
    if (f.gutter) {
      f.node.removeChild(f.gutter);
      f.gutter = null;
    }
    if (f.gutterBackground) {
      f.node.removeChild(f.gutterBackground);
      f.gutterBackground = null;
    }
    if (f.line.gutterClass) {
      var l = jd(f);
      f.gutterBackground = gZ(
        "div",
        null,
        "CodeMirror-gutter-background " + f.line.gutterClass,
        "left: " +
          (d.options.fixedGutter ? e.fixedPos : -e.gutterTotalWidth) +
          "px; width: " +
          e.gutterTotalWidth +
          "px"
      );
      l.insertBefore(f.gutterBackground, f.text);
    }
    var j = f.line.gutterMarkers;
    if (d.options.lineNumbers || j) {
      var c = jd(f);
      var h = (f.gutter = gZ(
        "div",
        null,
        "CodeMirror-gutter-wrapper",
        "left: " +
          (d.options.fixedGutter ? e.fixedPos : -e.gutterTotalWidth) +
          "px"
      ));
      d.display.input.setUneditable(h);
      c.insertBefore(h, f.text);
      if (f.line.gutterClass) {
        h.className += " " + f.line.gutterClass;
      }
      if (d.options.lineNumbers && (!j || !j["CodeMirror-linenumbers"])) {
        f.lineNumber = h.appendChild(
          gZ(
            "div",
            jF(d.options, g),
            "CodeMirror-linenumber CodeMirror-gutter-elt",
            "left: " +
              e.gutterLeft["CodeMirror-linenumbers"] +
              "px; width: " +
              d.display.lineNumInnerWidth +
              "px"
          )
        );
      }
      if (j) {
        for (var k = 0; k < d.options.gutters.length; ++k) {
          var b = d.options.gutters[k],
            a = j.hasOwnProperty(b) && j[b];
          if (a) {
            h.appendChild(
              gZ(
                "div",
                [a],
                "CodeMirror-gutter-elt",
                "left: " +
                  e.gutterLeft[b] +
                  "px; width: " +
                  e.gutterWidth[b] +
                  "px"
              )
            );
          }
        }
      }
    }
  }
  function nc(c, e, a) {
    if (e.alignable) {
      e.alignable = null;
    }
    for (var b = e.node.firstChild, d = void 0; b; b = d) {
      d = b.nextSibling;
      if (b.className == "CodeMirror-linewidget") {
        e.node.removeChild(b);
      }
    }
    it(c, e, a);
  }
  function n8(c, d, b, a) {
    var e = lH(c, d);
    d.text = d.node = e.pre;
    if (e.bgClass) {
      d.bgClass = e.bgClass;
    }
    if (e.textClass) {
      d.textClass = e.textClass;
    }
    kA(d);
    jo(c, d, b, a);
    it(c, d, a);
    return d.node;
  }
  function it(d, b, a) {
    gX(d, b.line, b, a, true);
    if (b.rest) {
      for (var c = 0; c < b.rest.length; c++) {
        gX(d, b.rest[c], b, a, false);
      }
    }
  }
  function gX(b, a, e, c, g) {
    if (!a.widgets) {
      return;
    }
    var k = jd(e);
    for (var h = 0, d = a.widgets; h < d.length; ++h) {
      var f = d[h],
        j = gZ("div", [f.node], "CodeMirror-linewidget");
      if (!f.handleMouseEvents) {
        j.setAttribute("cm-ignore-events", "true");
      }
      no(f, j, e, c);
      b.display.input.setUneditable(j);
      if (g && f.above) {
        k.insertBefore(j, e.gutter || e.text);
      } else {
        k.appendChild(j);
      }
      nw(f, "redraw");
    }
  }
  function no(c, d, b, a) {
    if (c.noHScroll) {
      (b.alignable || (b.alignable = [])).push(d);
      var e = a.wrapperWidth;
      d.style.left = a.fixedPos + "px";
      if (!c.coverGutter) {
        e -= a.gutterTotalWidth;
        d.style.paddingLeft = a.gutterTotalWidth + "px";
      }
      d.style.width = e + "px";
    }
    if (c.coverGutter) {
      d.style.zIndex = 5;
      d.style.position = "relative";
      if (!c.noHScroll) {
        d.style.marginLeft = -a.gutterTotalWidth + "px";
      }
    }
  }
  function m0(b) {
    if (b.height != null) {
      return b.height;
    }
    var a = b.doc.cm;
    if (!a) {
      return 0;
    }
    if (!hR(document.body, b.node)) {
      var c = "position: relative;";
      if (b.coverGutter) {
        c += "margin-left: -" + a.display.gutters.offsetWidth + "px;";
      }
      if (b.noHScroll) {
        c += "width: " + a.display.wrapper.clientWidth + "px;";
      }
      mR(a.display.measure, gZ("div", [b.node], null, c));
    }
    return (b.height = b.node.parentNode.offsetHeight);
  }
  function my(c, a) {
    for (var b = mb(a); b != c.wrapper; b = b.parentNode) {
      if (
        !b ||
        (b.nodeType == 1 && b.getAttribute("cm-ignore-events") == "true") ||
        (b.parentNode == c.sizer && b != c.mover)
      ) {
        return true;
      }
    }
  }
  function hs(a) {
    return a.lineSpace.offsetTop;
  }
  function ni(a) {
    return a.mover.offsetHeight - a.lineSpace.offsetHeight;
  }
  function hw(b) {
    if (b.cachedPaddingH) {
      return b.cachedPaddingH;
    }
    var c = mR(b.measure, gZ("pre", "x"));
    var a = window.getComputedStyle
      ? window.getComputedStyle(c)
      : c.currentStyle;
    var d = { left: parseInt(a.paddingLeft), right: parseInt(a.paddingRight) };
    if (!isNaN(d.left) && !isNaN(d.right)) {
      b.cachedPaddingH = d;
    }
    return d;
  }
  function lh(a) {
    return ko - a.display.nativeBarWidth;
  }
  function i4(a) {
    return a.display.scroller.clientWidth - lh(a) - a.display.barWidth;
  }
  function m8(a) {
    return a.display.scroller.clientHeight - lh(a) - a.display.barHeight;
  }
  function kD(c, g, d) {
    var h = c.options.lineWrapping;
    var f = h && i4(c);
    if (!g.measure.heights || (h && g.measure.width != f)) {
      var e = (g.measure.heights = []);
      if (h) {
        g.measure.width = f;
        var a = g.text.firstChild.getClientRects();
        for (var k = 0; k < a.length - 1; k++) {
          var b = a[k],
            j = a[k + 1];
          if (Math.abs(b.bottom - j.bottom) > 2) {
            e.push((b.bottom + j.top) / 2 - d.top);
          }
        }
      }
      e.push(d.bottom - d.top);
    }
  }
  function jT(c, e, b) {
    if (c.line == e) {
      return { map: c.measure.map, cache: c.measure.cache };
    }
    for (var d = 0; d < c.rest.length; d++) {
      if (c.rest[d] == e) {
        return { map: c.measure.maps[d], cache: c.measure.caches[d] };
      }
    }
    for (var a = 0; a < c.rest.length; a++) {
      if (m5(c.rest[a]) > b) {
        return {
          map: c.measure.maps[a],
          cache: c.measure.caches[a],
          before: true,
        };
      }
    }
  }
  function mP(c, d) {
    d = jV(d);
    var a = m5(d);
    var e = (c.display.externalMeasured = new lk(c.doc, d, a));
    e.lineN = a;
    var b = (e.built = j0(c, e));
    e.text = b.pre;
    mR(c.display.lineMeasure, b.pre);
    return e;
  }
  function ic(b, d, a, c) {
    return mB(b, gP(b, d), a, c);
  }
  function hp(a, b) {
    if (b >= a.display.viewFrom && b < a.display.viewTo) {
      return a.display.view[iR(a, b)];
    }
    var c = a.display.externalMeasured;
    if (c && b >= c.lineN && b < c.lineN + c.size) {
      return c;
    }
  }
  function gP(c, d) {
    var b = m5(d);
    var e = hp(c, b);
    if (e && !e.text) {
      e = null;
    } else {
      if (e && e.changes) {
        nC(c, e, b, ho(c));
        c.curOp.forceUpdate = true;
      }
    }
    if (!e) {
      e = mP(c, d);
    }
    var a = jT(e, d, b);
    return {
      line: d,
      view: e,
      rect: null,
      map: a.map,
      cache: a.cache,
      before: a.before,
      hasHeights: false,
    };
  }
  function mB(e, a, c, g, d) {
    if (a.before) {
      c = -1;
    }
    var f = c + (g || ""),
      b;
    if (a.cache.hasOwnProperty(f)) {
      b = a.cache[f];
    } else {
      if (!a.rect) {
        a.rect = a.view.text.getBoundingClientRect();
      }
      if (!a.hasHeights) {
        kD(e, a.view, a.rect);
        a.hasHeights = true;
      }
      b = kL(e, a, c, g);
      if (!b.bogus) {
        a.cache[f] = b;
      }
    }
    return {
      left: b.left,
      right: b.right,
      top: d ? b.rtop : b.top,
      bottom: d ? b.rbottom : b.bottom,
    };
  }
  var jk = { left: 0, right: 0, top: 0, bottom: 0 };
  function n3(a, k, d) {
    var h, j, f, c, g, b;
    for (var e = 0; e < a.length; e += 3) {
      g = a[e];
      b = a[e + 1];
      if (k < g) {
        j = 0;
        f = 1;
        c = "left";
      } else {
        if (k < b) {
          j = k - g;
          f = j + 1;
        } else {
          if (e == a.length - 3 || (k == b && a[e + 3] > k)) {
            f = b - g;
            j = f - 1;
            if (k >= b) {
              c = "right";
            }
          }
        }
      }
      if (j != null) {
        h = a[e + 2];
        if (g == b && d == (h.insertLeft ? "left" : "right")) {
          c = d;
        }
        if (d == "left" && j == 0) {
          while (e && a[e - 2] == a[e - 3] && a[e - 1].insertLeft) {
            h = a[(e -= 3) + 2];
            c = "left";
          }
        }
        if (d == "right" && j == b - g) {
          while (
            e < a.length - 3 &&
            a[e + 3] == a[e + 4] &&
            !a[e + 5].insertLeft
          ) {
            h = a[(e += 3) + 2];
            c = "right";
          }
        }
        break;
      }
    }
    return {
      node: h,
      start: j,
      end: f,
      collapse: c,
      coverStart: g,
      coverEnd: b,
    };
  }
  function hW(d, e) {
    var b = jk;
    if (e == "left") {
      for (var c = 0; c < d.length; c++) {
        if ((b = d[c]).left != b.right) {
          break;
        }
      }
    } else {
      for (var a = d.length - 1; a >= 0; a--) {
        if ((b = d[a]).left != b.right) {
          break;
        }
      }
    }
    return b;
  }
  function kL(g, s, d, k) {
    var f = n3(s.map, d, k);
    var u = f.node,
      l = f.start,
      m = f.end,
      p = f.collapse;
    var o;
    if (u.nodeType == 3) {
      for (var j = 0; j < 4; j++) {
        while (l && iB(s.line.text.charAt(f.coverStart + l))) {
          --l;
        }
        while (
          f.coverStart + m < f.coverEnd &&
          iB(s.line.text.charAt(f.coverStart + m))
        ) {
          ++m;
        }
        if (kj && kH < 9 && l == 0 && m == f.coverEnd - f.coverStart) {
          o = u.parentNode.getBoundingClientRect();
        } else {
          o = hW(ki(u, l, m).getClientRects(), k);
        }
        if (o.left || o.right || l == 0) {
          break;
        }
        m = l;
        l = l - 1;
        p = "right";
      }
      if (kj && kH < 11) {
        o = kk(g.display.measure, o);
      }
    } else {
      if (l > 0) {
        p = k = "right";
      }
      var n;
      if (g.options.lineWrapping && (n = u.getClientRects()).length > 1) {
        o = n[k == "right" ? n.length - 1 : 0];
      } else {
        o = u.getBoundingClientRect();
      }
    }
    if (kj && kH < 9 && !l && (!o || (!o.left && !o.right))) {
      var h = u.parentNode.getClientRects()[0];
      if (h) {
        o = {
          left: h.left,
          right: h.left + kJ(g.display),
          top: h.top,
          bottom: h.bottom,
        };
      } else {
        o = jk;
      }
    }
    var a = o.top - s.rect.top,
      c = o.bottom - s.rect.top;
    var q = (a + c) / 2;
    var r = s.view.measure.heights;
    var t = 0;
    for (; t < r.length - 1; t++) {
      if (q < r[t]) {
        break;
      }
    }
    var v = t ? r[t - 1] : 0,
      b = r[t];
    var e = {
      left: (p == "right" ? o.right : o.left) - s.rect.left,
      right: (p == "left" ? o.left : o.right) - s.rect.left,
      top: v,
      bottom: b,
    };
    if (!o.left && !o.right) {
      e.bogus = true;
    }
    if (!g.options.singleCursorHeightPerLine) {
      e.rtop = a;
      e.rbottom = c;
    }
    return e;
  }
  function kk(c, b) {
    if (
      !window.screen ||
      screen.logicalXDPI == null ||
      screen.logicalXDPI == screen.deviceXDPI ||
      !n2(c)
    ) {
      return b;
    }
    var d = screen.logicalXDPI / screen.deviceXDPI;
    var a = screen.logicalYDPI / screen.deviceYDPI;
    return {
      left: b.left * d,
      right: b.right * d,
      top: b.top * a,
      bottom: b.bottom * a,
    };
  }
  function mS(a) {
    if (a.measure) {
      a.measure.cache = {};
      a.measure.heights = null;
      if (a.rest) {
        for (var b = 0; b < a.rest.length; b++) {
          a.measure.caches[b] = {};
        }
      }
    }
  }
  function nZ(b) {
    b.display.externalMeasure = null;
    iN(b.display.lineMeasure);
    for (var a = 0; a < b.display.view.length; a++) {
      mS(b.display.view[a]);
    }
  }
  function nm(a) {
    nZ(a);
    a.display.cachedCharWidth =
      a.display.cachedTextHeight =
      a.display.cachedPaddingH =
        null;
    if (!a.options.lineWrapping) {
      a.display.maxLineChanged = true;
    }
    a.display.lineNumChars = null;
  }
  function jQ() {
    return (
      window.pageXOffset ||
      (document.documentElement || document.body).scrollLeft
    );
  }
  function jW() {
    return (
      window.pageYOffset ||
      (document.documentElement || document.body).scrollTop
    );
  }
  function j8(c, f, d, j, g) {
    if (!g && f.widgets) {
      for (var h = 0; h < f.widgets.length; ++h) {
        if (f.widgets[h].above) {
          var a = m0(f.widgets[h]);
          d.top += a;
          d.bottom += a;
        }
      }
    }
    if (j == "line") {
      return d;
    }
    if (!j) {
      j = "local";
    }
    var e = m7(f);
    if (j == "local") {
      e += hs(c.display);
    } else {
      e -= c.display.viewOffset;
    }
    if (j == "page" || j == "window") {
      var k = c.display.lineSpace.getBoundingClientRect();
      e += k.top + (j == "window" ? 0 : jW());
      var b = k.left + (j == "window" ? 0 : jQ());
      d.left += b;
      d.right += b;
    }
    d.top += e;
    d.bottom += e;
    return d;
  }
  function hI(g, c, f) {
    if (f == "div") {
      return c;
    }
    var a = c.left,
      b = c.top;
    if (f == "page") {
      a -= jQ();
      b -= jW();
    } else {
      if (f == "local" || !f) {
        var e = g.display.sizer.getBoundingClientRect();
        a += e.left;
        b += e.top;
      }
    }
    var d = g.display.lineSpace.getBoundingClientRect();
    return { left: a - d.left, top: b - d.top };
  }
  function lU(c, a, b, d, e) {
    if (!d) {
      d = hm(c.doc, a.line);
    }
    return j8(c, d, ic(c, d, a.ch, e), b);
  }
  function lL(d, e, l, g, a, f) {
    g = g || hm(d.doc, e.line);
    if (!a) {
      a = gP(d, g);
    }
    function j(n, o) {
      var p = mB(d, a, n, o ? "right" : "left", f);
      if (o) {
        p.left = p.right;
      } else {
        p.right = p.left;
      }
      return j8(d, g, p, l);
    }
    function b(n, q) {
      var p = h[q],
        o = p.level % 2;
      if (n == kT(p) && q && p.level < h[q - 1].level) {
        p = h[--q];
        n = hJ(p) - (p.level % 2 ? 0 : 1);
        o = true;
      } else {
        if (n == hJ(p) && q < h.length - 1 && p.level < h[q + 1].level) {
          p = h[++q];
          n = kT(p) - (p.level % 2);
          o = false;
        }
      }
      if (o && n == p.to && n > p.from) {
        return j(n - 1);
      }
      return j(n, o);
    }
    var h = ld(g),
      c = e.ch;
    if (!h) {
      return j(c);
    }
    var m = n6(h, c);
    var k = b(c, m);
    if (hz != null) {
      k.other = b(c, hz);
    }
    return k;
  }
  function kw(c, a) {
    var b = 0;
    a = i3(c.doc, a);
    if (!c.options.lineWrapping) {
      b = kJ(c.display) * a.ch;
    }
    var e = hm(c.doc, a.line);
    var d = m7(e) + hs(c.display);
    return { left: b, right: b, top: d, bottom: d + e.height };
  }
  function g1(c, e, d, a) {
    var b = lA(c, e);
    b.xRel = a;
    if (d) {
      b.outside = true;
    }
    return b;
  }
  function hg(d, g, h) {
    var e = d.doc;
    h += d.display.viewOffset;
    if (h < 0) {
      return g1(e.first, 0, true, -1);
    }
    var j = nj(e, h),
      c = e.first + e.size - 1;
    if (j > c) {
      return g1(e.first + e.size - 1, hm(e, c).text.length, true, 1);
    }
    if (g < 0) {
      g = 0;
    }
    var k = hm(e, j);
    for (;;) {
      var b = mX(d, k, j, g, h);
      var f = jy(k);
      var a = f && f.find(0, true);
      if (f && (b.ch > a.from.ch || (b.ch == a.from.ch && b.xRel > 0))) {
        j = m5((k = a.to.line));
      } else {
        return b;
      }
    }
  }
  function mX(e, r, m, c, d) {
    var f = d - m7(r);
    var k = false,
      y = 2 * e.display.wrapper.clientWidth;
    var B = gP(e, r);
    function q(C) {
      var D = lL(e, lA(m, C), "line", r, B);
      k = true;
      if (f > D.bottom) {
        return D.left - y;
      } else {
        if (f < D.top) {
          return D.left + y;
        } else {
          k = false;
        }
      }
      return D.left;
    }
    var a = ld(r),
      z = r.text.length;
    var x = md(r),
      p = lj(r);
    var A = q(x),
      t = k,
      s = q(p),
      l = k;
    if (c > s) {
      return g1(m, p, l, 1);
    }
    for (;;) {
      if (a ? p == x || p == ka(r, x, 1) : p - x <= 1) {
        var b = c < A || c - A <= s - c ? x : p;
        var o = b == x ? t : l;
        var u = c - (b == x ? A : s);
        if (
          l &&
          !a &&
          !/\s/.test(r.text.charAt(b)) &&
          u > 0 &&
          b < r.text.length &&
          B.view.measure.heights.length > 1
        ) {
          var w = mB(e, B, b, "right");
          if (f <= w.bottom && f >= w.top && Math.abs(c - w.right) < u) {
            o = false;
            b++;
            u = c - w.right;
          }
        }
        while (iB(r.text.charAt(b))) {
          ++b;
        }
        var g = g1(m, b, o, u < -1 ? -1 : u > 1 ? 1 : 0);
        return g;
      }
      var h = Math.ceil(z / 2),
        j = x + h;
      if (a) {
        j = x;
        for (var v = 0; v < h; ++v) {
          j = ka(r, j, 1);
        }
      }
      var n = q(j);
      if (n > c) {
        p = j;
        s = n;
        if ((l = k)) {
          s += 1000;
        }
        z = h;
      } else {
        x = j;
        A = n;
        t = k;
        z -= h;
      }
    }
  }
  var n7;
  function nF(a) {
    if (a.cachedTextHeight != null) {
      return a.cachedTextHeight;
    }
    if (n7 == null) {
      n7 = gZ("pre");
      for (var b = 0; b < 49; ++b) {
        n7.appendChild(document.createTextNode("x"));
        n7.appendChild(gZ("br"));
      }
      n7.appendChild(document.createTextNode("x"));
    }
    mR(a.measure, n7);
    var c = n7.offsetHeight / 50;
    if (c > 3) {
      a.cachedTextHeight = c;
    }
    iN(a.measure);
    return c || 1;
  }
  function kJ(a) {
    if (a.cachedCharWidth != null) {
      return a.cachedCharWidth;
    }
    var c = gZ("span", "xxxxxxxxxx");
    var b = gZ("pre", [c]);
    mR(a.measure, b);
    var d = c.getBoundingClientRect(),
      e = (d.right - d.left) / 10;
    if (e > 2) {
      a.cachedCharWidth = e;
    }
    return e || 10;
  }
  function ho(g) {
    var b = g.display,
      d = {},
      e = {};
    var c = b.gutters.clientLeft;
    for (var a = b.gutters.firstChild, f = 0; a; a = a.nextSibling, ++f) {
      d[g.options.gutters[f]] = a.offsetLeft + a.clientLeft + c;
      e[g.options.gutters[f]] = a.clientWidth;
    }
    return {
      fixedPos: lw(b),
      gutterTotalWidth: b.gutters.offsetWidth,
      gutterLeft: d,
      gutterWidth: e,
      wrapperWidth: b.wrapper.clientWidth,
    };
  }
  function lw(a) {
    return (
      a.scroller.getBoundingClientRect().left -
      a.sizer.getBoundingClientRect().left
    );
  }
  function mp(b) {
    var c = nF(b.display),
      d = b.options.lineWrapping;
    var a =
      d && Math.max(5, b.display.scroller.clientWidth / kJ(b.display) - 3);
    return function (f) {
      if (il(b.doc, f)) {
        return 0;
      }
      var g = 0;
      if (f.widgets) {
        for (var e = 0; e < f.widgets.length; e++) {
          if (f.widgets[e].height) {
            g += f.widgets[e].height;
          }
        }
      }
      if (d) {
        return g + (Math.ceil(f.text.length / a) || 1) * c;
      } else {
        return g + c;
      }
    };
  }
  function lr(a) {
    var b = a.doc,
      c = mp(a);
    b.iter(function (e) {
      var d = c(e);
      if (d != e.height) {
        gV(e, d);
      }
    });
  }
  function kg(b, h, l, k) {
    var g = b.display;
    if (!l && mb(h).getAttribute("cm-not-content") == "true") {
      return null;
    }
    var d,
      f,
      c = g.lineSpace.getBoundingClientRect();
    try {
      d = h.clientX - c.left;
      f = h.clientY - c.top;
    } catch (h) {
      return null;
    }
    var e = hg(b, d, f),
      a;
    if (k && e.xRel == 1 && (a = hm(b.doc, e.line).text).length == e.ch) {
      var j = mV(a, a.length, b.options.tabSize) - a.length;
      e = lA(
        e.line,
        Math.max(0, Math.round((d - hw(b.display).left) / kJ(b.display)) - j)
      );
    }
    return e;
  }
  function iR(d, a) {
    if (a >= d.display.viewTo) {
      return null;
    }
    a -= d.display.viewFrom;
    if (a < 0) {
      return null;
    }
    var c = d.display.view;
    for (var b = 0; b < c.length; b++) {
      a -= c[b].size;
      if (a < 0) {
        return b;
      }
    }
  }
  function nu(a) {
    a.display.input.showSelection(a.display.input.prepareSelection());
  }
  function i9(c, j) {
    var d = c.doc,
      a = {};
    var e = (a.cursors = document.createDocumentFragment());
    var h = (a.selection = document.createDocumentFragment());
    for (var f = 0; f < d.sel.ranges.length; f++) {
      if (j === false && f == d.sel.primIndex) {
        continue;
      }
      var b = d.sel.ranges[f];
      if (
        b.from().line >= c.display.viewTo ||
        b.to().line < c.display.viewFrom
      ) {
        continue;
      }
      var g = b.empty();
      if (g || c.options.showCursorWhenSelecting) {
        mE(c, b.head, e);
      }
      if (!g) {
        ns(c, b, h);
      }
    }
    return a;
  }
  function mE(d, c, e) {
    var a = lL(d, c, "div", null, null, !d.options.singleCursorHeightPerLine);
    var b = e.appendChild(gZ("div", "\u00a0", "CodeMirror-cursor"));
    b.style.left = a.left + "px";
    b.style.top = a.top + "px";
    b.style.height =
      Math.max(0, a.bottom - a.top) * d.options.cursorHeight + "px";
    if (a.other) {
      var f = e.appendChild(
        gZ("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor")
      );
      f.style.display = "";
      f.style.left = a.other.left + "px";
      f.style.top = a.other.top + "px";
      f.style.height = (a.other.bottom - a.other.top) * 0.85 + "px";
    }
  }
  function ns(l, m, k) {
    var c = l.display,
      r = l.doc;
    var q = document.createDocumentFragment();
    var f = hw(l.display),
      n = f.left;
    var b = Math.max(c.sizerWidth, i4(l) - c.sizer.offsetLeft) - f.right;
    function e(t, u, v, w) {
      if (u < 0) {
        u = 0;
      }
      u = Math.round(u);
      w = Math.round(w);
      q.appendChild(
        gZ(
          "div",
          null,
          "CodeMirror-selected",
          "position: absolute; left: " +
            t +
            "px;\n                             top: " +
            u +
            "px; width: " +
            (v == null ? b - t : v) +
            "px;\n                             height: " +
            (w - u) +
            "px"
        )
      );
    }
    function p(y, w, t) {
      var x = hm(r, y);
      var v = x.text.length;
      var A, z;
      function u(B, C) {
        return lU(l, lA(y, B), "div", x, C);
      }
      iG(ld(x), w || 0, t == null ? v : t, function (B, C, I) {
        var F = u(B, "left"),
          E,
          D,
          G;
        if (B == C) {
          E = F;
          D = G = F.left;
        } else {
          E = u(C - 1, "right");
          if (I == "rtl") {
            var H = F;
            F = E;
            E = H;
          }
          D = F.left;
          G = E.right;
        }
        if (w == null && B == 0) {
          D = n;
        }
        if (E.top - F.top > 3) {
          e(D, F.top, null, F.bottom);
          D = n;
          if (F.bottom < E.top) {
            e(D, F.bottom, null, E.top);
          }
        }
        if (t == null && C == v) {
          G = b;
        }
        if (!A || F.top < A.top || (F.top == A.top && F.left < A.left)) {
          A = F;
        }
        if (
          !z ||
          E.bottom > z.bottom ||
          (E.bottom == z.bottom && E.right > z.right)
        ) {
          z = E;
        }
        if (D < n + 1) {
          D = n;
        }
        e(D, E.top, G - D, E.bottom);
      });
      return { start: A, end: z };
    }
    var s = m.from(),
      a = m.to();
    if (s.line == a.line) {
      p(s.line, s.ch, a.ch);
    } else {
      var o = hm(r, s.line),
        h = hm(r, a.line);
      var j = jV(o) == jV(h);
      var g = p(s.line, s.ch, j ? o.text.length + 1 : null).end;
      var d = p(a.line, j ? 0 : null, a.ch).start;
      if (j) {
        if (g.top < d.top - 2) {
          e(g.right, g.top, null, g.bottom);
          e(n, d.top, d.left, d.bottom);
        } else {
          e(g.right, g.top, d.left - g.right, g.bottom);
        }
      }
      if (g.bottom < d.top) {
        e(n, g.bottom, null, d.top);
      }
    }
    k.appendChild(q);
  }
  function ku(a) {
    if (!a.state.focused) {
      return;
    }
    var b = a.display;
    clearInterval(b.blinker);
    var c = true;
    b.cursorDiv.style.visibility = "";
    if (a.options.cursorBlinkRate > 0) {
      b.blinker = setInterval(function () {
        return (b.cursorDiv.style.visibility = (c = !c) ? "" : "hidden");
      }, a.options.cursorBlinkRate);
    } else {
      if (a.options.cursorBlinkRate < 0) {
        b.cursorDiv.style.visibility = "hidden";
      }
    }
  }
  function kh(a) {
    if (!a.state.focused) {
      a.display.input.focus();
      mm(a);
    }
  }
  function nk(a) {
    a.state.delayingBlurEvent = true;
    setTimeout(function () {
      if (a.state.delayingBlurEvent) {
        a.state.delayingBlurEvent = false;
        nL(a);
      }
    }, 100);
  }
  function mm(a, b) {
    if (a.state.delayingBlurEvent) {
      a.state.delayingBlurEvent = false;
    }
    if (a.options.readOnly == "nocursor") {
      return;
    }
    if (!a.state.focused) {
      n9(a, "focus", a, b);
      a.state.focused = true;
      h6(a.display.wrapper, "CodeMirror-focused");
      if (!a.curOp && a.display.selForContextMenu != a.doc.sel) {
        a.display.input.reset();
        if (mU) {
          setTimeout(function () {
            return a.display.input.reset(true);
          }, 20);
        }
      }
      a.display.input.receivedFocus();
    }
    ku(a);
  }
  function nL(a, b) {
    if (a.state.delayingBlurEvent) {
      return;
    }
    if (a.state.focused) {
      n9(a, "blur", a, b);
      a.state.focused = false;
      kS(a.display.wrapper, "CodeMirror-focused");
    }
    clearInterval(a.display.blinker);
    setTimeout(function () {
      if (!a.state.focused) {
        a.display.shift = false;
      }
    }, 150);
  }
  function ja(a) {
    var c = a.display,
      b = c.view;
    if (!c.alignWidgets && (!c.gutters.firstChild || !a.options.fixedGutter)) {
      return;
    }
    var e = lw(c) - c.scroller.scrollLeft + a.doc.scrollLeft;
    var j = c.gutters.offsetWidth,
      h = e + "px";
    for (var f = 0; f < b.length; f++) {
      if (!b[f].hidden) {
        if (a.options.fixedGutter) {
          if (b[f].gutter) {
            b[f].gutter.style.left = h;
          }
          if (b[f].gutterBackground) {
            b[f].gutterBackground.style.left = h;
          }
        }
        var d = b[f].alignable;
        if (d) {
          for (var g = 0; g < d.length; g++) {
            d[g].style.left = h;
          }
        }
      }
    }
    if (a.options.fixedGutter) {
      c.gutters.style.left = e + j + "px";
    }
  }
  function iE(e) {
    if (!e.options.lineNumbers) {
      return false;
    }
    var b = e.doc,
      g = jF(e.options, b.first + b.size - 1),
      c = e.display;
    if (g.length != c.lineNumChars) {
      var a = c.measure.appendChild(
        gZ("div", [gZ("div", g)], "CodeMirror-linenumber CodeMirror-gutter-elt")
      );
      var f = a.firstChild.offsetWidth,
        d = a.offsetWidth - f;
      c.lineGutter.style.width = "";
      c.lineNumInnerWidth = Math.max(f, c.lineGutter.offsetWidth - d) + 1;
      c.lineNumWidth = c.lineNumInnerWidth + d;
      c.lineNumChars = c.lineNumInnerWidth ? g.length : -1;
      c.lineGutter.style.width = c.lineNumWidth + "px";
      jO(e);
      return true;
    }
    return false;
  }
  function i(c) {
    var e = c.display;
    var j = e.lineDiv.offsetTop;
    for (var h = 0; h < e.view.length; h++) {
      var b = e.view[h],
        a = void 0;
      if (b.hidden) {
        continue;
      }
      if (kj && kH < 8) {
        var f = b.node.offsetTop + b.node.offsetHeight;
        a = f - j;
        j = f;
      } else {
        var g = b.node.getBoundingClientRect();
        a = g.bottom - g.top;
      }
      var d = b.line.height - a;
      if (a < 2) {
        a = nF(e);
      }
      if (d > 0.001 || d < -0.001) {
        gV(b.line, a);
        kX(b.line);
        if (b.rest) {
          for (var k = 0; k < b.rest.length; k++) {
            kX(b.rest[k]);
          }
        }
      }
    }
  }
  function kX(b) {
    if (b.widgets) {
      for (var a = 0; a < b.widgets.length; ++a) {
        b.widgets[a].height = b.widgets[a].node.parentNode.offsetHeight;
      }
    }
  }
  function lc(g, c, h) {
    var f = h && h.top != null ? Math.max(0, h.top) : g.scroller.scrollTop;
    f = Math.floor(f - hs(g));
    var a = h && h.bottom != null ? h.bottom : f + g.wrapper.clientHeight;
    var e = nj(c, f),
      d = nj(c, a);
    if (h && h.ensure) {
      var j = h.ensure.from.line,
        b = h.ensure.to.line;
      if (j < e) {
        e = j;
        d = nj(c, m7(hm(c, j)) + g.wrapper.clientHeight);
      } else {
        if (Math.min(b, c.lastLine()) >= d) {
          e = nj(c, m7(hm(c, b)) - g.wrapper.clientHeight);
          d = b;
        }
      }
    }
    return { from: e, to: Math.max(d, e + 1) };
  }
  function l4(a, b) {
    if (Math.abs(a.doc.scrollTop - b) < 2) {
      return;
    }
    a.doc.scrollTop = b;
    if (!kc) {
      lN(a, { top: b });
    }
    if (a.display.scroller.scrollTop != b) {
      a.display.scroller.scrollTop = b;
    }
    a.display.scrollbars.setScrollTop(b);
    if (kc) {
      lN(a);
    }
    ij(a, 100);
  }
  function nq(a, b, c) {
    if (c ? b == a.doc.scrollLeft : Math.abs(a.doc.scrollLeft - b) < 2) {
      return;
    }
    b = Math.min(
      b,
      a.display.scroller.scrollWidth - a.display.scroller.clientWidth
    );
    a.doc.scrollLeft = b;
    ja(a);
    if (a.display.scroller.scrollLeft != b) {
      a.display.scroller.scrollLeft = b;
    }
    a.display.scrollbars.setScrollLeft(b);
  }
  var iF = 0;
  var kG = null;
  if (kj) {
    kG = -0.53;
  } else {
    if (kc) {
      kG = 15;
    } else {
      if (ju) {
        kG = -0.7;
      } else {
        if (ob) {
          kG = -1 / 3;
        }
      }
    }
  }
  function ls(b) {
    var c = b.wheelDeltaX,
      a = b.wheelDeltaY;
    if (c == null && b.detail && b.axis == b.HORIZONTAL_AXIS) {
      c = b.detail;
    }
    if (a == null && b.detail && b.axis == b.VERTICAL_AXIS) {
      a = b.detail;
    } else {
      if (a == null) {
        a = b.wheelDelta;
      }
    }
    return { x: c, y: a };
  }
  function mF(a) {
    var b = ls(a);
    b.x *= kG;
    b.y *= kG;
    return b;
  }
  function k8(e, l) {
    var c = ls(l),
      a = c.x,
      b = c.y;
    var j = e.display,
      f = j.scroller;
    var m = f.scrollWidth > f.clientWidth;
    var n = f.scrollHeight > f.clientHeight;
    if (!((a && m) || (b && n))) {
      return;
    }
    if (b && k9 && mU) {
      outer: for (var d = l.target, g = j.view; d != f; d = d.parentNode) {
        for (var o = 0; o < g.length; o++) {
          if (g[o].node == d) {
            e.display.currentWheelTarget = d;
            break outer;
          }
        }
      }
    }
    if (a && !kc && !iL && kG != null) {
      if (b && n) {
        l4(
          e,
          Math.max(
            0,
            Math.min(f.scrollTop + b * kG, f.scrollHeight - f.clientHeight)
          )
        );
      }
      nq(
        e,
        Math.max(
          0,
          Math.min(f.scrollLeft + a * kG, f.scrollWidth - f.clientWidth)
        )
      );
      if (!b || (b && n)) {
        l7(l);
      }
      j.wheelStartX = null;
      return;
    }
    if (b && kG != null) {
      var p = b * kG;
      var h = e.doc.scrollTop,
        k = h + j.wrapper.clientHeight;
      if (p < 0) {
        h = Math.max(0, h + p - 50);
      } else {
        k = Math.min(e.doc.height, k + p + 50);
      }
      lN(e, { top: h, bottom: k });
    }
    if (iF < 20) {
      if (j.wheelStartX == null) {
        j.wheelStartX = f.scrollLeft;
        j.wheelStartY = f.scrollTop;
        j.wheelDX = a;
        j.wheelDY = b;
        setTimeout(function () {
          if (j.wheelStartX == null) {
            return;
          }
          var s = f.scrollLeft - j.wheelStartX;
          var q = f.scrollTop - j.wheelStartY;
          var r =
            (q && j.wheelDY && q / j.wheelDY) ||
            (s && j.wheelDX && s / j.wheelDX);
          j.wheelStartX = j.wheelStartY = null;
          if (!r) {
            return;
          }
          kG = (kG * iF + r) / (iF + 1);
          ++iF;
        }, 200);
      } else {
        j.wheelDX += a;
        j.wheelDY += b;
      }
    }
  }
  function kR(b) {
    var a = b.display,
      c = a.gutters.offsetWidth;
    var d = Math.round(b.doc.height + ni(b.display));
    return {
      clientHeight: a.scroller.clientHeight,
      viewHeight: a.wrapper.clientHeight,
      scrollWidth: a.scroller.scrollWidth,
      clientWidth: a.scroller.clientWidth,
      viewWidth: a.wrapper.clientWidth,
      barLeft: b.options.fixedGutter ? c : 0,
      docHeight: d,
      scrollHeight: d + lh(b) + a.barHeight,
      nativeBarWidth: a.nativeBarWidth,
      gutterWidth: c,
    };
  }
  function i7(d, e, c) {
    this.cm = c;
    var b = (this.vert = gZ(
      "div",
      [gZ("div", null, null, "min-width: 1px")],
      "CodeMirror-vscrollbar"
    ));
    var a = (this.horiz = gZ(
      "div",
      [gZ("div", null, null, "height: 100%; min-height: 1px")],
      "CodeMirror-hscrollbar"
    ));
    d(b);
    d(a);
    nY(b, "scroll", function () {
      if (b.clientHeight) {
        e(b.scrollTop, "vertical");
      }
    });
    nY(a, "scroll", function () {
      if (a.clientWidth) {
        e(a.scrollLeft, "horizontal");
      }
    });
    this.checkedZeroWidth = false;
    if (kj && kH < 8) {
      this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
    }
  }
  i7.prototype = n0(
    {
      update: function (d) {
        var b = d.scrollWidth > d.clientWidth + 1;
        var e = d.scrollHeight > d.clientHeight + 1;
        var a = d.nativeBarWidth;
        if (e) {
          this.vert.style.display = "block";
          this.vert.style.bottom = b ? a + "px" : "0";
          var f = d.viewHeight - (b ? a : 0);
          this.vert.firstChild.style.height =
            Math.max(0, d.scrollHeight - d.clientHeight + f) + "px";
        } else {
          this.vert.style.display = "";
          this.vert.firstChild.style.height = "0";
        }
        if (b) {
          this.horiz.style.display = "block";
          this.horiz.style.right = e ? a + "px" : "0";
          this.horiz.style.left = d.barLeft + "px";
          var c = d.viewWidth - d.barLeft - (e ? a : 0);
          this.horiz.firstChild.style.width =
            d.scrollWidth - d.clientWidth + c + "px";
        } else {
          this.horiz.style.display = "";
          this.horiz.firstChild.style.width = "0";
        }
        if (!this.checkedZeroWidth && d.clientHeight > 0) {
          if (a == 0) {
            this.zeroWidthHack();
          }
          this.checkedZeroWidth = true;
        }
        return { right: e ? a : 0, bottom: b ? a : 0 };
      },
      setScrollLeft: function (a) {
        if (this.horiz.scrollLeft != a) {
          this.horiz.scrollLeft = a;
        }
        if (this.disableHoriz) {
          this.enableZeroWidthBar(this.horiz, this.disableHoriz);
        }
      },
      setScrollTop: function (a) {
        if (this.vert.scrollTop != a) {
          this.vert.scrollTop = a;
        }
        if (this.disableVert) {
          this.enableZeroWidthBar(this.vert, this.disableVert);
        }
      },
      zeroWidthHack: function () {
        var a = k9 && !jI ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = a;
        this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
        this.disableHoriz = new hA();
        this.disableVert = new hA();
      },
      enableZeroWidthBar: function (c, a) {
        c.style.pointerEvents = "auto";
        function b() {
          var d = c.getBoundingClientRect();
          var e = document.elementFromPoint(d.left + 1, d.bottom - 1);
          if (e != c) {
            c.style.pointerEvents = "none";
          } else {
            a.set(1000, b);
          }
        }
        a.set(1000, b);
      },
      clear: function () {
        var a = this.horiz.parentNode;
        a.removeChild(this.horiz);
        a.removeChild(this.vert);
      },
    },
    i7.prototype
  );
  function hy() {}
  hy.prototype = n0(
    {
      update: function () {
        return { bottom: 0, right: 0 };
      },
      setScrollLeft: function () {},
      setScrollTop: function () {},
      clear: function () {},
    },
    hy.prototype
  );
  function hK(c, a) {
    if (!a) {
      a = kR(c);
    }
    var d = c.display.barWidth,
      e = c.display.barHeight;
    nN(c, a);
    for (
      var b = 0;
      (b < 4 && d != c.display.barWidth) || e != c.display.barHeight;
      b++
    ) {
      if (d != c.display.barWidth && c.options.lineWrapping) {
        i(c);
      }
      nN(c, kR(c));
      d = c.display.barWidth;
      e = c.display.barHeight;
    }
  }
  function nN(b, d) {
    var a = b.display;
    var c = a.scrollbars.update(d);
    a.sizer.style.paddingRight = (a.barWidth = c.right) + "px";
    a.sizer.style.paddingBottom = (a.barHeight = c.bottom) + "px";
    a.heightForcer.style.borderBottom = c.bottom + "px solid transparent";
    if (c.right && c.bottom) {
      a.scrollbarFiller.style.display = "block";
      a.scrollbarFiller.style.height = c.bottom + "px";
      a.scrollbarFiller.style.width = c.right + "px";
    } else {
      a.scrollbarFiller.style.display = "";
    }
    if (
      c.bottom &&
      b.options.coverGutterNextToScrollbar &&
      b.options.fixedGutter
    ) {
      a.gutterFiller.style.display = "block";
      a.gutterFiller.style.height = c.bottom + "px";
      a.gutterFiller.style.width = d.gutterWidth + "px";
    } else {
      a.gutterFiller.style.display = "";
    }
  }
  var lX = { native: i7, null: hy };
  function oa(a) {
    if (a.display.scrollbars) {
      a.display.scrollbars.clear();
      if (a.display.scrollbars.addClass) {
        kS(a.display.wrapper, a.display.scrollbars.addClass);
      }
    }
    a.display.scrollbars = new lX[a.options.scrollbarStyle](
      function (b) {
        a.display.wrapper.insertBefore(b, a.display.scrollbarFiller);
        nY(b, "mousedown", function () {
          if (a.state.focused) {
            setTimeout(function () {
              return a.display.input.focus();
            }, 0);
          }
        });
        b.setAttribute("cm-not-content", "true");
      },
      function (b, c) {
        if (c == "horizontal") {
          nq(a, b);
        } else {
          l4(a, b);
        }
      },
      a
    );
    if (a.display.scrollbars.addClass) {
      h6(a.display.wrapper, a.display.scrollbars.addClass);
    }
  }
  function iD(f, b) {
    if (nT(f, "scrollCursorIntoView")) {
      return;
    }
    var a = f.display,
      e = a.sizer.getBoundingClientRect(),
      d = null;
    if (b.top + e.top < 0) {
      d = true;
    } else {
      if (
        b.bottom + e.top >
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        d = false;
      }
    }
    if (d != null && !iq) {
      var c = gZ(
        "div",
        "\u200b",
        null,
        "position: absolute;\n                         top: " +
          (b.top - a.viewOffset - hs(f.display)) +
          "px;\n                         height: " +
          (b.bottom - b.top + lh(f) + a.barHeight) +
          "px;\n                         left: " +
          b.left +
          "px; width: 2px;"
      );
      f.display.lineSpace.appendChild(c);
      c.scrollIntoView(d);
      f.display.lineSpace.removeChild(c);
    }
  }
  function mx(a, d, h, j) {
    if (j == null) {
      j = 0;
    }
    var b;
    for (var g = 0; g < 5; g++) {
      var f = false;
      b = lL(a, d);
      var c = !h || h == d ? b : lL(a, h);
      var k = mn(
        a,
        Math.min(b.left, c.left),
        Math.min(b.top, c.top) - j,
        Math.max(b.left, c.left),
        Math.max(b.bottom, c.bottom) + j
      );
      var e = a.doc.scrollTop,
        l = a.doc.scrollLeft;
      if (k.scrollTop != null) {
        l4(a, k.scrollTop);
        if (Math.abs(a.doc.scrollTop - e) > 1) {
          f = true;
        }
      }
      if (k.scrollLeft != null) {
        nq(a, k.scrollLeft);
        if (Math.abs(a.doc.scrollLeft - l) > 1) {
          f = true;
        }
      }
      if (!f) {
        break;
      }
    }
    return b;
  }
  function mt(d, e, b, f, c) {
    var a = mn(d, e, b, f, c);
    if (a.scrollTop != null) {
      l4(d, a.scrollTop);
    }
    if (a.scrollLeft != null) {
      nq(d, a.scrollLeft);
    }
  }
  function mn(d, o, e, q, f) {
    var j = d.display,
      l = nF(d.display);
    if (e < 0) {
      e = 0;
    }
    var n =
      d.curOp && d.curOp.scrollTop != null
        ? d.curOp.scrollTop
        : j.scroller.scrollTop;
    var b = m8(d),
      r = {};
    if (f - e > b) {
      f = e + b;
    }
    var p = d.doc.height + ni(j);
    var h = e < l,
      k = f > p - l;
    if (e < n) {
      r.scrollTop = h ? 0 : e;
    } else {
      if (f > n + b) {
        var g = Math.min(e, (k ? p : f) - b);
        if (g != n) {
          r.scrollTop = g;
        }
      }
    }
    var a =
      d.curOp && d.curOp.scrollLeft != null
        ? d.curOp.scrollLeft
        : j.scroller.scrollLeft;
    var c = i4(d) - (d.options.fixedGutter ? j.gutters.offsetWidth : 0);
    var m = q - o > c;
    if (m) {
      q = o + c;
    }
    if (o < 10) {
      r.scrollLeft = 0;
    } else {
      if (o < a) {
        r.scrollLeft = Math.max(0, o - (m ? 0 : 10));
      } else {
        if (q > c + a - 3) {
          r.scrollLeft = q + (m ? 0 : 10) - c;
        }
      }
    }
    return r;
  }
  function lM(a, b, c) {
    if (b != null || c != null) {
      h2(a);
    }
    if (b != null) {
      a.curOp.scrollLeft =
        (a.curOp.scrollLeft == null ? a.doc.scrollLeft : a.curOp.scrollLeft) +
        b;
    }
    if (c != null) {
      a.curOp.scrollTop =
        (a.curOp.scrollTop == null ? a.doc.scrollTop : a.curOp.scrollTop) + c;
    }
  }
  function jl(b) {
    h2(b);
    var d = b.getCursor(),
      a = d,
      c = d;
    if (!b.options.lineWrapping) {
      a = d.ch ? lA(d.line, d.ch - 1) : d;
      c = lA(d.line, d.ch + 1);
    }
    b.curOp.scrollToPos = {
      from: a,
      to: c,
      margin: b.options.cursorScrollMargin,
      isCursor: true,
    };
  }
  function h2(c) {
    var d = c.curOp.scrollToPos;
    if (d) {
      c.curOp.scrollToPos = null;
      var a = kw(c, d.from),
        b = kw(c, d.to);
      var e = mn(
        c,
        Math.min(a.left, b.left),
        Math.min(a.top, b.top) - d.margin,
        Math.max(a.right, b.right),
        Math.max(a.bottom, b.bottom) + d.margin
      );
      c.scrollTo(e.scrollLeft, e.scrollTop);
    }
  }
  var iv = 0;
  function lY(a) {
    a.curOp = {
      cm: a,
      viewChanged: false,
      startHeight: a.doc.height,
      forceUpdate: false,
      updateInput: null,
      typing: false,
      changeObjs: null,
      cursorActivityHandlers: null,
      cursorActivityCalled: 0,
      selectionChanged: false,
      updateMaxLine: false,
      scrollLeft: null,
      scrollTop: null,
      scrollToPos: null,
      focus: false,
      id: ++iv,
    };
    js(a.curOp);
  }
  function ng(a) {
    var b = a.curOp;
    nX(b, function (c) {
      for (var d = 0; d < c.ops.length; d++) {
        c.ops[d].cm.curOp = null;
      }
      lQ(c);
    });
  }
  function lQ(b) {
    var f = b.ops;
    for (var g = 0; g < f.length; g++) {
      nH(f[g]);
    }
    for (var a = 0; a < f.length; a++) {
      m6(f[a]);
    }
    for (var c = 0; c < f.length; c++) {
      nP(f[c]);
    }
    for (var d = 0; d < f.length; d++) {
      m9(f[d]);
    }
    for (var e = 0; e < f.length; e++) {
      hG(f[e]);
    }
  }
  function nH(b) {
    var a = b.cm,
      c = a.display;
    mj(a);
    if (b.updateMaxLine) {
      kY(a);
    }
    b.mustUpdate =
      b.viewChanged ||
      b.forceUpdate ||
      b.scrollTop != null ||
      (b.scrollToPos &&
        (b.scrollToPos.from.line < c.viewFrom ||
          b.scrollToPos.to.line >= c.viewTo)) ||
      (c.maxLineChanged && a.options.lineWrapping);
    b.update =
      b.mustUpdate &&
      new n4(
        a,
        b.mustUpdate && { top: b.scrollTop, ensure: b.scrollToPos },
        b.forceUpdate
      );
  }
  function m6(a) {
    a.updatedDisplay = a.mustUpdate && mC(a.cm, a.update);
  }
  function nP(b) {
    var a = b.cm,
      c = a.display;
    if (b.updatedDisplay) {
      i(a);
    }
    b.barMeasure = kR(a);
    if (c.maxLineChanged && !a.options.lineWrapping) {
      b.adjustWidthTo = ic(a, c.maxLine, c.maxLine.text.length).left + 3;
      a.display.sizerWidth = b.adjustWidthTo;
      b.barMeasure.scrollWidth = Math.max(
        c.scroller.clientWidth,
        c.sizer.offsetLeft + b.adjustWidthTo + lh(a) + a.display.barWidth
      );
      b.maxScrollLeft = Math.max(
        0,
        c.sizer.offsetLeft + b.adjustWidthTo - i4(a)
      );
    }
    if (b.updatedDisplay || b.selectionChanged) {
      b.preparedSelection = c.input.prepareSelection(b.focus);
    }
  }
  function m9(b) {
    var a = b.cm;
    if (b.adjustWidthTo != null) {
      a.display.sizer.style.minWidth = b.adjustWidthTo + "px";
      if (b.maxScrollLeft < a.doc.scrollLeft) {
        nq(a, Math.min(a.display.scroller.scrollLeft, b.maxScrollLeft), true);
      }
      a.display.maxLineChanged = false;
    }
    var c =
      b.focus && b.focus == j3() && (!document.hasFocus || document.hasFocus());
    if (b.preparedSelection) {
      a.display.input.showSelection(b.preparedSelection, c);
    }
    if (b.updatedDisplay || b.startHeight != a.doc.height) {
      hK(a, b.barMeasure);
    }
    if (b.updatedDisplay) {
      kV(a, b.barMeasure);
    }
    if (b.selectionChanged) {
      ku(a);
    }
    if (a.state.focused && b.updateInput) {
      a.display.input.reset(b.typing);
    }
    if (c) {
      kh(b.cm);
    }
  }
  function hG(f) {
    var a = f.cm,
      d = a.display,
      b = a.doc;
    if (f.updatedDisplay) {
      kt(a, f.update);
    }
    if (
      d.wheelStartX != null &&
      (f.scrollTop != null || f.scrollLeft != null || f.scrollToPos)
    ) {
      d.wheelStartX = d.wheelStartY = null;
    }
    if (
      f.scrollTop != null &&
      (d.scroller.scrollTop != f.scrollTop || f.forceScroll)
    ) {
      b.scrollTop = Math.max(
        0,
        Math.min(d.scroller.scrollHeight - d.scroller.clientHeight, f.scrollTop)
      );
      d.scrollbars.setScrollTop(b.scrollTop);
      d.scroller.scrollTop = b.scrollTop;
    }
    if (
      f.scrollLeft != null &&
      (d.scroller.scrollLeft != f.scrollLeft || f.forceScroll)
    ) {
      b.scrollLeft = Math.max(
        0,
        Math.min(d.scroller.scrollWidth - d.scroller.clientWidth, f.scrollLeft)
      );
      d.scrollbars.setScrollLeft(b.scrollLeft);
      d.scroller.scrollLeft = b.scrollLeft;
      ja(a);
    }
    if (f.scrollToPos) {
      var c = mx(
        a,
        i3(b, f.scrollToPos.from),
        i3(b, f.scrollToPos.to),
        f.scrollToPos.margin
      );
      if (f.scrollToPos.isCursor && a.state.focused) {
        iD(a, c);
      }
    }
    var e = f.maybeHiddenMarkers,
      j = f.maybeUnhiddenMarkers;
    if (e) {
      for (var g = 0; g < e.length; ++g) {
        if (!e[g].lines.length) {
          n9(e[g], "hide");
        }
      }
    }
    if (j) {
      for (var h = 0; h < j.length; ++h) {
        if (j[h].lines.length) {
          n9(j[h], "unhide");
        }
      }
    }
    if (d.wrapper.offsetHeight) {
      b.scrollTop = a.display.scroller.scrollTop;
    }
    if (f.changeObjs) {
      n9(a, "changes", a, f.changeObjs);
    }
    if (f.update) {
      f.update.finish();
    }
  }
  function lI(a, b) {
    if (a.curOp) {
      return b();
    }
    lY(a);
    try {
      return b();
    } finally {
      ng(a);
    }
  }
  function mQ(a, b) {
    return function () {
      if (a.curOp) {
        return b.apply(a, arguments);
      }
      lY(a);
      try {
        return b.apply(a, arguments);
      } finally {
        ng(a);
      }
    };
  }
  function jC(a) {
    return function () {
      if (this.curOp) {
        return a.apply(this, arguments);
      }
      lY(this);
      try {
        return a.apply(this, arguments);
      } finally {
        ng(this);
      }
    };
  }
  function mg(a) {
    return function () {
      var b = this.cm;
      if (!b || b.curOp) {
        return a.apply(this, arguments);
      }
      lY(b);
      try {
        return a.apply(this, arguments);
      } finally {
        ng(b);
      }
    };
  }
  function np(c, e, d, b) {
    if (e == null) {
      e = c.doc.first;
    }
    if (d == null) {
      d = c.doc.first + c.doc.size;
    }
    if (!b) {
      b = 0;
    }
    var h = c.display;
    if (
      b &&
      d < h.viewTo &&
      (h.updateLineNumbers == null || h.updateLineNumbers > e)
    ) {
      h.updateLineNumbers = e;
    }
    c.curOp.viewChanged = true;
    if (e >= h.viewTo) {
      if (gN && nJ(c.doc, e) < h.viewTo) {
        jw(c);
      }
    } else {
      if (d <= h.viewFrom) {
        if (gN && iJ(c.doc, d + b) > h.viewFrom) {
          jw(c);
        } else {
          h.viewFrom += b;
          h.viewTo += b;
        }
      } else {
        if (e <= h.viewFrom && d >= h.viewTo) {
          jw(c);
        } else {
          if (e <= h.viewFrom) {
            var f = jq(c, d, d + b, 1);
            if (f) {
              h.view = h.view.slice(f.index);
              h.viewFrom = f.lineN;
              h.viewTo += b;
            } else {
              jw(c);
            }
          } else {
            if (d >= h.viewTo) {
              var k = jq(c, e, e, -1);
              if (k) {
                h.view = h.view.slice(0, k.index);
                h.viewTo = k.lineN;
              } else {
                jw(c);
              }
            } else {
              var g = jq(c, e, e, -1);
              var j = jq(c, d, d + b, 1);
              if (g && j) {
                h.view = h.view
                  .slice(0, g.index)
                  .concat(hQ(c, g.lineN, j.lineN))
                  .concat(h.view.slice(j.index));
                h.viewTo += b;
              } else {
                jw(c);
              }
            }
          }
        }
      }
    }
    var a = h.externalMeasured;
    if (a) {
      if (d < a.lineN) {
        a.lineN += b;
      } else {
        if (e < a.lineN + a.size) {
          h.externalMeasured = null;
        }
      }
    }
  }
  function lS(g, f, b) {
    g.curOp.viewChanged = true;
    var a = g.display,
      c = g.display.externalMeasured;
    if (c && f >= c.lineN && f < c.lineN + c.size) {
      a.externalMeasured = null;
    }
    if (f < a.viewFrom || f >= a.viewTo) {
      return;
    }
    var e = a.view[iR(g, f)];
    if (e.node == null) {
      return;
    }
    var d = e.changes || (e.changes = []);
    if (jb(d, b) == -1) {
      d.push(b);
    }
  }
  function jw(a) {
    a.display.viewFrom = a.display.viewTo = a.doc.first;
    a.display.view = [];
    a.display.viewOffset = 0;
  }
  function jq(a, g, e, h) {
    var d = iR(a, g),
      b,
      c = a.display.view;
    if (!gN || e == a.doc.first + a.doc.size) {
      return { index: d, lineN: e };
    }
    var j = a.display.viewFrom;
    for (var f = 0; f < d; f++) {
      j += c[f].size;
    }
    if (j != g) {
      if (h > 0) {
        if (d == c.length - 1) {
          return null;
        }
        b = j + c[d].size - g;
        d++;
      } else {
        b = j - g;
      }
      g += b;
      e += b;
    }
    while (nJ(a.doc, e) != e) {
      if (d == (h < 0 ? 0 : c.length - 1)) {
        return null;
      }
      e += h * c[d - (h < 0 ? 1 : 0)].size;
      d += h;
    }
    return { index: d, lineN: e };
  }
  function lm(c, a, b) {
    var d = c.display,
      e = d.view;
    if (e.length == 0 || a >= d.viewTo || b <= d.viewFrom) {
      d.view = hQ(c, a, b);
      d.viewFrom = a;
    } else {
      if (d.viewFrom > a) {
        d.view = hQ(c, a, d.viewFrom).concat(d.view);
      } else {
        if (d.viewFrom < a) {
          d.view = d.view.slice(iR(c, a));
        }
      }
      d.viewFrom = a;
      if (d.viewTo < b) {
        d.view = d.view.concat(hQ(c, d.viewTo, b));
      } else {
        if (d.viewTo > b) {
          d.view = d.view.slice(0, iR(c, b));
        }
      }
    }
    d.viewTo = b;
  }
  function jv(e) {
    var d = e.display.view,
      a = 0;
    for (var b = 0; b < d.length; b++) {
      var c = d[b];
      if (!c.hidden && (!c.node || c.changes)) {
        ++a;
      }
    }
    return a;
  }
  function ij(a, b) {
    if (a.doc.mode.startState && a.doc.frontier < a.display.viewTo) {
      a.state.highlight.set(b, mD(lu, a));
    }
  }
  function lu(c) {
    var a = c.doc;
    if (a.frontier < a.first) {
      a.frontier = a.first;
    }
    if (a.frontier >= c.display.viewTo) {
      return;
    }
    var d = +new Date() + c.options.workTime;
    var b = nK(a.mode, kM(c, a.frontier));
    var e = [];
    a.iter(
      a.frontier,
      Math.min(a.first + a.size, c.display.viewTo + 500),
      function (h) {
        if (a.frontier >= c.display.viewFrom) {
          var n = h.styles,
            j = h.text.length > c.options.maxHighlightLength;
          var l = ib(c, h, j ? nK(a.mode, b) : b, true);
          h.styles = l.styles;
          var f = h.styleClasses,
            m = l.classes;
          if (m) {
            h.styleClasses = m;
          } else {
            if (f) {
              h.styleClasses = null;
            }
          }
          var k =
            !n ||
            n.length != h.styles.length ||
            (f != m &&
              (!f ||
                !m ||
                f.bgClass != m.bgClass ||
                f.textClass != m.textClass));
          for (var g = 0; !k && g < n.length; ++g) {
            k = n[g] != h.styles[g];
          }
          if (k) {
            e.push(a.frontier);
          }
          h.stateAfter = j ? b : nK(a.mode, b);
        } else {
          if (h.text.length <= c.options.maxHighlightLength) {
            k0(c, h.text, b);
          }
          h.stateAfter = a.frontier % 5 == 0 ? nK(a.mode, b) : null;
        }
        ++a.frontier;
        if (+new Date() > d) {
          ij(c, c.options.workDelay);
          return true;
        }
      }
    );
    if (e.length) {
      lI(c, function () {
        for (var f = 0; f < e.length; f++) {
          lS(c, e[f], "text");
        }
      });
    }
  }
  function n4(d, b, c) {
    var a = d.display;
    this.viewport = b;
    this.visible = lc(a, d.doc, b);
    this.editorIsHidden = !a.wrapper.offsetWidth;
    this.wrapperHeight = a.wrapper.clientHeight;
    this.wrapperWidth = a.wrapper.clientWidth;
    this.oldDisplayWidth = i4(d);
    this.force = c;
    this.dims = ho(d);
    this.events = [];
  }
  n4.prototype.signal = function (b, a) {
    if (iI(b, a)) {
      this.events.push(arguments);
    }
  };
  n4.prototype.finish = function () {
    var a = this;
    for (var b = 0; b < this.events.length; b++) {
      n9.apply(null, a.events[b]);
    }
  };
  function mj(a) {
    var b = a.display;
    if (!b.scrollbarsClipped && b.scroller.offsetWidth) {
      b.nativeBarWidth = b.scroller.offsetWidth - b.scroller.clientWidth;
      b.heightForcer.style.height = lh(a) + "px";
      b.sizer.style.marginBottom = -b.nativeBarWidth + "px";
      b.sizer.style.borderRightWidth = lh(a) + "px";
      b.scrollbarsClipped = true;
    }
  }
  function mC(b, h) {
    var g = b.display,
      c = b.doc;
    if (h.editorIsHidden) {
      jw(b);
      return false;
    }
    if (
      !h.force &&
      h.visible.from >= g.viewFrom &&
      h.visible.to <= g.viewTo &&
      (g.updateLineNumbers == null || g.updateLineNumbers >= g.viewTo) &&
      g.renderedView == g.view &&
      jv(b) == 0
    ) {
      return false;
    }
    if (iE(b)) {
      jw(b);
      h.dims = ho(b);
    }
    var j = c.first + c.size;
    var e = Math.max(h.visible.from - b.options.viewportMargin, c.first);
    var d = Math.min(j, h.visible.to + b.options.viewportMargin);
    if (g.viewFrom < e && e - g.viewFrom < 20) {
      e = Math.max(c.first, g.viewFrom);
    }
    if (g.viewTo > d && g.viewTo - d < 20) {
      d = Math.min(j, g.viewTo);
    }
    if (gN) {
      e = nJ(b.doc, e);
      d = iJ(b.doc, d);
    }
    var k =
      e != g.viewFrom ||
      d != g.viewTo ||
      g.lastWrapHeight != h.wrapperHeight ||
      g.lastWrapWidth != h.wrapperWidth;
    lm(b, e, d);
    g.viewOffset = m7(hm(b.doc, g.viewFrom));
    b.display.mover.style.top = g.viewOffset + "px";
    var a = jv(b);
    if (
      !k &&
      a == 0 &&
      !h.force &&
      g.renderedView == g.view &&
      (g.updateLineNumbers == null || g.updateLineNumbers >= g.viewTo)
    ) {
      return false;
    }
    var f = j3();
    if (a > 4) {
      g.lineDiv.style.display = "none";
    }
    km(b, g.updateLineNumbers, h.dims);
    if (a > 4) {
      g.lineDiv.style.display = "";
    }
    g.renderedView = g.view;
    if (f && j3() != f && f.offsetHeight) {
      f.focus();
    }
    iN(g.cursorDiv);
    iN(g.selectionDiv);
    g.gutters.style.height = g.sizer.style.minHeight = 0;
    if (k) {
      g.lastWrapHeight = h.wrapperHeight;
      g.lastWrapWidth = h.wrapperWidth;
      ij(b, 400);
    }
    g.updateLineNumbers = null;
    return true;
  }
  function kt(e, a) {
    var c = a.viewport;
    for (var b = true; ; b = false) {
      if (!b || !e.options.lineWrapping || a.oldDisplayWidth == i4(e)) {
        if (c && c.top != null) {
          c = { top: Math.min(e.doc.height + ni(e.display) - m8(e), c.top) };
        }
        a.visible = lc(e.display, e.doc, c);
        if (
          a.visible.from >= e.display.viewFrom &&
          a.visible.to <= e.display.viewTo
        ) {
          break;
        }
      }
      if (!mC(e, a)) {
        break;
      }
      i(e);
      var d = kR(e);
      nu(e);
      hK(e, d);
      kV(e, d);
    }
    a.signal(e, "update", e);
    if (
      e.display.viewFrom != e.display.reportedViewFrom ||
      e.display.viewTo != e.display.reportedViewTo
    ) {
      a.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo);
      e.display.reportedViewFrom = e.display.viewFrom;
      e.display.reportedViewTo = e.display.viewTo;
    }
  }
  function lN(d, b) {
    var a = new n4(d, b);
    if (mC(d, a)) {
      i(d);
      kt(d, a);
      var c = kR(d);
      nu(d);
      hK(d, c);
      kV(d, c);
      a.finish();
    }
  }
  function km(c, m, d) {
    var g = c.display,
      a = c.options.lineNumbers;
    var o = g.lineDiv,
      b = o.firstChild;
    function h(p) {
      var q = p.nextSibling;
      if (mU && k9 && c.display.currentWheelTarget == p) {
        p.style.display = "none";
      } else {
        p.parentNode.removeChild(p);
      }
      return q;
    }
    var f = g.view,
      j = g.viewFrom;
    for (var l = 0; l < f.length; l++) {
      var k = f[l];
      if (k.hidden) {
      } else {
        if (!k.node || k.node.parentNode != o) {
          var n = n8(c, k, j, d);
          o.insertBefore(n, b);
        } else {
          while (b != k.node) {
            b = h(b);
          }
          var e = a && m != null && m <= j && k.lineNumber;
          if (k.changes) {
            if (jb(k.changes, "gutter") > -1) {
              e = false;
            }
            nC(c, k, j, d);
          }
          if (e) {
            iN(k.lineNumber);
            k.lineNumber.appendChild(document.createTextNode(jF(c.options, j)));
          }
          b = k.node.nextSibling;
        }
      }
      j += k.size;
    }
    while (b) {
      b = h(b);
    }
  }
  function jO(a) {
    var b = a.display.gutters.offsetWidth;
    a.display.sizer.style.marginLeft = b + "px";
  }
  function kV(a, b) {
    a.display.sizer.style.minHeight = b.docHeight + "px";
    a.display.heightForcer.style.top = b.docHeight + "px";
    a.display.gutters.style.height =
      b.docHeight + a.display.barHeight + lh(a) + "px";
  }
  function io(f) {
    var e = f.display.gutters,
      a = f.options.gutters;
    iN(e);
    var d = 0;
    for (; d < a.length; ++d) {
      var c = a[d];
      var b = e.appendChild(gZ("div", null, "CodeMirror-gutter " + c));
      if (c == "CodeMirror-linenumbers") {
        f.display.lineGutter = b;
        b.style.width = (f.display.lineNumWidth || 1) + "px";
      }
    }
    e.style.display = d ? "" : "none";
    jO(f);
  }
  function kK(a) {
    var b = jb(a.gutters, "CodeMirror-linenumbers");
    if (b == -1 && a.lineNumbers) {
      a.gutters = a.gutters.concat(["CodeMirror-linenumbers"]);
    } else {
      if (b > -1 && !a.lineNumbers) {
        a.gutters = a.gutters.slice(0);
        a.gutters.splice(b, 1);
      }
    }
  }
  function g0(a, b) {
    this.ranges = a;
    this.primIndex = b;
  }
  g0.prototype = {
    primary: function () {
      return this.ranges[this.primIndex];
    },
    equals: function (e) {
      var a = this;
      if (e == this) {
        return true;
      }
      if (
        e.primIndex != this.primIndex ||
        e.ranges.length != this.ranges.length
      ) {
        return false;
      }
      for (var c = 0; c < this.ranges.length; c++) {
        var d = a.ranges[c],
          b = e.ranges[c];
        if (kI(d.anchor, b.anchor) != 0 || kI(d.head, b.head) != 0) {
          return false;
        }
      }
      return true;
    },
    deepCopy: function () {
      var a = this;
      var c = [];
      for (var b = 0; b < this.ranges.length; b++) {
        c[b] = new lz(kz(a.ranges[b].anchor), kz(a.ranges[b].head));
      }
      return new g0(c, this.primIndex);
    },
    somethingSelected: function () {
      var a = this;
      for (var b = 0; b < this.ranges.length; b++) {
        if (!a.ranges[b].empty()) {
          return true;
        }
      }
      return false;
    },
    contains: function (a, e) {
      var b = this;
      if (!e) {
        e = a;
      }
      for (var c = 0; c < this.ranges.length; c++) {
        var d = b.ranges[c];
        if (kI(e, d.from()) >= 0 && kI(a, d.to()) <= 0) {
          return c;
        }
      }
      return -1;
    },
  };
  function lz(a, b) {
    this.anchor = a;
    this.head = b;
  }
  lz.prototype = {
    from: function () {
      return m3(this.anchor, this.head);
    },
    to: function () {
      return nD(this.anchor, this.head);
    },
    empty: function () {
      return (
        this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
      );
    },
  };
  function mA(j, b) {
    var g = j[b];
    j.sort(function (l, k) {
      return kI(l.from(), k.from());
    });
    b = jb(j, g);
    for (var e = 1; e < j.length; e++) {
      var a = j[e],
        h = j[e - 1];
      if (kI(h.to(), a.from()) >= 0) {
        var d = m3(h.from(), a.from()),
          c = nD(h.to(), a.to());
        var f = h.empty() ? a.from() == a.head : h.from() == h.head;
        if (e <= b) {
          --b;
        }
        j.splice(--e, 2, new lz(f ? c : d, f ? d : c));
      }
    }
    return new g0(j, b);
  }
  function j1(a, b) {
    return new g0([new lz(a, b || a)], 0);
  }
  function m1(a) {
    if (!a.text) {
      return a.to;
    }
    return lA(
      a.from.line + a.text.length - 1,
      ji(a.text).length + (a.text.length == 1 ? a.from.ch : 0)
    );
  }
  function nS(b, c) {
    if (kI(b, c.from) < 0) {
      return b;
    }
    if (kI(b, c.to) <= 0) {
      return m1(c);
    }
    var a = b.line + c.text.length - (c.to.line - c.from.line) - 1,
      d = b.ch;
    if (b.line == c.to.line) {
      d += m1(c).ch - c.to.ch;
    }
    return lA(a, d);
  }
  function iK(b, a) {
    var d = [];
    for (var c = 0; c < b.sel.ranges.length; c++) {
      var e = b.sel.ranges[c];
      d.push(new lz(nS(e.anchor, a), nS(e.head, a)));
    }
    return mA(d, b.sel.primIndex);
  }
  function ll(b, c, a) {
    if (b.line == c.line) {
      return lA(a.line, b.ch - c.ch + a.ch);
    } else {
      return lA(a.line + (b.line - c.line), b.ch);
    }
  }
  function nt(b, e, l) {
    var k = [];
    var m = lA(b.first, 0),
      a = m;
    for (var h = 0; h < e.length; h++) {
      var f = e[h];
      var c = ll(f.from, m, a);
      var d = ll(m1(f), m, a);
      m = f.to;
      a = d;
      if (l == "around") {
        var g = b.sel.ranges[h],
          j = kI(g.head, g.anchor) < 0;
        k[h] = new lz(j ? d : c, j ? c : d);
      } else {
        k[h] = new lz(c, c);
      }
    }
    return new g0(k, b.sel.primIndex);
  }
  function ly(a) {
    a.doc.mode = h8(a.options, a.doc.modeOption);
    h1(a);
  }
  function h1(a) {
    a.doc.iter(function (b) {
      if (b.stateAfter) {
        b.stateAfter = null;
      }
      if (b.styles) {
        b.styles = null;
      }
    });
    a.doc.frontier = a.doc.first;
    ij(a, 100);
    a.state.modeGen++;
    if (a.curOp) {
      np(a);
    }
  }
  function lR(a, b) {
    return (
      b.from.ch == 0 &&
      b.to.ch == 0 &&
      ji(b.text) == "" &&
      (!a.cm || a.cm.options.wholeLineUpdateBefore)
    );
  }
  function id(r, f, m, g) {
    function n(t) {
      return m ? m[t] : null;
    }
    function h(v, t, u) {
      hY(v, t, u, g);
      nw(v, "change", v, f);
    }
    function b(t, v) {
      var w = [];
      for (var u = t; u < v; ++u) {
        w.push(new gW(d[u], n(u), g));
      }
      return w;
    }
    var a = f.from,
      p = f.to,
      d = f.text;
    var e = hm(r, a.line),
      q = hm(r, p.line);
    var o = ji(d),
      s = n(d.length - 1),
      c = p.line - a.line;
    if (f.full) {
      r.insert(0, b(0, d.length));
      r.remove(d.length, r.size - d.length);
    } else {
      if (lR(r, f)) {
        var j = b(0, d.length - 1);
        h(q, q.text, s);
        if (c) {
          r.remove(a.line, c);
        }
        if (j.length) {
          r.insert(a.line, j);
        }
      } else {
        if (e == q) {
          if (d.length == 1) {
            h(e, e.text.slice(0, a.ch) + o + e.text.slice(p.ch), s);
          } else {
            var k = b(1, d.length - 1);
            k.push(new gW(o + e.text.slice(p.ch), s, g));
            h(e, e.text.slice(0, a.ch) + d[0], n(0));
            r.insert(a.line + 1, k);
          }
        } else {
          if (d.length == 1) {
            h(e, e.text.slice(0, a.ch) + d[0] + q.text.slice(p.ch), n(0));
            r.remove(a.line + 1, c);
          } else {
            h(e, e.text.slice(0, a.ch) + d[0], n(0));
            h(q, o + q.text.slice(p.ch), s);
            var l = b(1, d.length - 1);
            if (c > 1) {
              r.remove(a.line + 1, c - 1);
            }
            r.insert(a.line + 1, l);
          }
        }
      }
    }
    nw(r, "change", r, f);
  }
  function iA(b, c, d) {
    function a(j, e, g) {
      if (j.linked) {
        for (var f = 0; f < j.linked.length; ++f) {
          var h = j.linked[f];
          if (h.doc == e) {
            continue;
          }
          var k = g && h.sharedHist;
          if (d && !k) {
            continue;
          }
          c(h.doc, k);
          a(h.doc, j, k);
        }
      }
    }
    a(b, null, true);
  }
  function ip(a, b) {
    if (b.cm) {
      throw new Error("This document is already in use.");
    }
    a.doc = b;
    b.cm = a;
    lr(a);
    ly(a);
    if (!a.options.lineWrapping) {
      kY(a);
    }
    a.options.mode = b.modeOption;
    np(a);
  }
  function ha(a) {
    this.done = [];
    this.undone = [];
    this.undoDepth = Infinity;
    this.lastModTime = this.lastSelTime = 0;
    this.lastOp = this.lastSelOp = null;
    this.lastOrigin = this.lastSelOrigin = null;
    this.generation = this.maxGeneration = a || 1;
  }
  function k6(a, b) {
    var c = { from: kz(b.from), to: m1(b), text: gY(a, b.from, b.to) };
    nU(a, c, b.from.line, b.to.line + 1);
    iA(
      a,
      function (d) {
        return nU(d, c, b.from.line, b.to.line + 1);
      },
      true
    );
    return c;
  }
  function h3(b) {
    while (b.length) {
      var a = ji(b);
      if (a.ranges) {
        b.pop();
      } else {
        break;
      }
    }
  }
  function kl(b, a) {
    if (a) {
      h3(b.done);
      return ji(b.done);
    } else {
      if (b.done.length && !ji(b.done).ranges) {
        return ji(b.done);
      } else {
        if (b.done.length > 1 && !b.done[b.done.length - 2].ranges) {
          b.done.pop();
          return ji(b.done);
        }
      }
    }
  }
  function iX(d, f, a, g) {
    var h = d.history;
    h.undone.length = 0;
    var j = +new Date(),
      c;
    var b;
    if (
      (h.lastOp == g ||
        (h.lastOrigin == f.origin &&
          f.origin &&
          ((f.origin.charAt(0) == "+" &&
            d.cm &&
            h.lastModTime > j - d.cm.options.historyEventDelay) ||
            f.origin.charAt(0) == "*"))) &&
      (c = kl(h, h.lastOp == g))
    ) {
      b = ji(c.changes);
      if (kI(f.from, f.to) == 0 && kI(f.from, b.to) == 0) {
        b.to = m1(f);
      } else {
        c.changes.push(k6(d, f));
      }
    } else {
      var e = ji(h.done);
      if (!e || !e.ranges) {
        lx(d.sel, h.done);
      }
      c = { changes: [k6(d, f)], generation: h.generation };
      h.done.push(c);
      while (h.done.length > h.undoDepth) {
        h.done.shift();
        if (!h.done[0].ranges) {
          h.done.shift();
        }
      }
    }
    h.done.push(a);
    h.generation = ++h.maxGeneration;
    h.lastModTime = h.lastSelTime = j;
    h.lastOp = h.lastSelOp = g;
    h.lastOrigin = h.lastSelOrigin = f.origin;
    if (!b) {
      n9(d, "historyAdded");
    }
  }
  function nx(a, c, d, b) {
    var e = c.charAt(0);
    return (
      e == "*" ||
      (e == "+" &&
        d.ranges.length == b.ranges.length &&
        d.somethingSelected() == b.somethingSelected() &&
        new Date() - a.history.lastSelTime <=
          (a.cm ? a.cm.options.historyEventDelay : 500))
    );
  }
  function hN(a, d, c, e) {
    var b = a.history,
      f = e && e.origin;
    if (
      c == b.lastSelOp ||
      (f &&
        b.lastSelOrigin == f &&
        ((b.lastModTime == b.lastSelTime && b.lastOrigin == f) ||
          nx(a, f, ji(b.done), d)))
    ) {
      b.done[b.done.length - 1] = d;
    } else {
      lx(d, b.done);
    }
    b.lastSelTime = +new Date();
    b.lastSelOrigin = f;
    b.lastSelOp = c;
    if (e && e.clearRedo !== false) {
      h3(b.undone);
    }
  }
  function lx(c, a) {
    var b = ji(a);
    if (!(b && b.ranges && b.equals(c))) {
      a.push(c);
    }
  }
  function nU(f, a, b, d) {
    var c = a["spans_" + f.id],
      e = 0;
    f.iter(Math.max(f.first, b), Math.min(f.first + f.size, d), function (g) {
      if (g.markedSpans) {
        (c || (c = a["spans_" + f.id] = {}))[e] = g.markedSpans;
      }
      ++e;
    });
  }
  function l3(a) {
    if (!a) {
      return null;
    }
    var c;
    for (var b = 0; b < a.length; ++b) {
      if (a[b].marker.explicitlyCleared) {
        if (!c) {
          c = a.slice(0, b);
        }
      } else {
        if (c) {
          c.push(a[b]);
        }
      }
    }
    return !c ? a : c.length ? c : null;
  }
  function nI(b, a) {
    var c = a["spans_" + b.id];
    if (!c) {
      return null;
    }
    var e = [];
    for (var d = 0; d < a.text.length; ++d) {
      e.push(l3(c[d]));
    }
    return e;
  }
  function ix(b, d) {
    var k = nI(b, d);
    var a = h5(b, d);
    if (!k) {
      return a;
    }
    if (!a) {
      return k;
    }
    for (var g = 0; g < k.length; ++g) {
      var f = k[g],
        e = a[g];
      if (f && e) {
        spans: for (var h = 0; h < e.length; ++h) {
          var c = e[h];
          for (var j = 0; j < f.length; ++j) {
            if (f[j].marker == c.marker) {
              continue spans;
            }
          }
          f.push(c);
        }
      } else {
        if (e) {
          k[g] = e;
        }
      }
    }
    return k;
  }
  function mZ(a, j, b) {
    var l = [];
    for (var f = 0; f < a.length; ++f) {
      var k = a[f];
      if (k.ranges) {
        l.push(b ? g0.prototype.deepCopy.call(k) : k);
        continue;
      }
      var d = k.changes,
        c = [];
      l.push({ changes: c });
      for (var g = 0; g < d.length; ++g) {
        var e = d[g],
          h = void 0;
        c.push({ from: e.from, to: e.to, text: e.text });
        if (j) {
          for (var m in e) {
            if ((h = m.match(/^spans_(\d+)$/))) {
              if (jb(j, Number(h[1])) > -1) {
                ji(c)[m] = e[m];
                delete e[m];
              }
            }
          }
        }
      }
    }
    return l;
  }
  function im(a, f, b, d) {
    if ((a.cm && a.cm.display.shift) || a.extend) {
      var c = f.anchor;
      if (d) {
        var e = kI(b, c) < 0;
        if (e != kI(d, c) < 0) {
          c = b;
          b = d;
        } else {
          if (e != kI(b, d) < 0) {
            b = d;
          }
        }
      }
      return new lz(c, b);
    } else {
      return new lz(d || b, b);
    }
  }
  function g5(b, c, a, d) {
    mL(b, new g0([im(b, b.sel.primary(), c, a)], 0), d);
  }
  function mN(a, b, d) {
    var e = [];
    for (var c = 0; c < a.sel.ranges.length; c++) {
      e[c] = im(a, a.sel.ranges[c], b[c], null);
    }
    var f = mA(e, a.sel.primIndex);
    mL(a, f, d);
  }
  function k2(a, b, d, c) {
    var e = a.sel.ranges.slice(0);
    e[b] = d;
    mL(a, mA(e, a.sel.primIndex), c);
  }
  function ms(b, d, c, a) {
    mL(b, j1(d, c), a);
  }
  function lb(b, d, a) {
    var c = {
      ranges: d.ranges,
      update: function (g) {
        var e = this;
        this.ranges = [];
        for (var f = 0; f < g.length; f++) {
          e.ranges[f] = new lz(i3(b, g[f].anchor), i3(b, g[f].head));
        }
      },
      origin: a && a.origin,
    };
    n9(b, "beforeSelectionChange", b, c);
    if (b.cm) {
      n9(b.cm, "beforeSelectionChange", b.cm, c);
    }
    if (c.ranges != d.ranges) {
      return mA(c.ranges, c.ranges.length - 1);
    } else {
      return d;
    }
  }
  function ht(a, c, e) {
    var b = a.history.done,
      d = ji(b);
    if (d && d.ranges) {
      b[b.length - 1] = c;
      jN(a, c, e);
    } else {
      mL(a, c, e);
    }
  }
  function mL(b, c, a) {
    jN(b, c, a);
    hN(b, b.sel, b.cm ? b.cm.curOp.id : NaN, a);
  }
  function jN(b, c, d) {
    if (
      iI(b, "beforeSelectionChange") ||
      (b.cm && iI(b.cm, "beforeSelectionChange"))
    ) {
      c = lb(b, c, d);
    }
    var a =
      (d && d.bias) ||
      (kI(c.primary().head, b.sel.primary().head) < 0 ? -1 : 1);
    jD(b, kx(b, c, a, true));
    if (!(d && d.scroll === false) && b.cm) {
      jl(b.cm);
    }
  }
  function jD(b, a) {
    if (a.equals(b.sel)) {
      return;
    }
    b.sel = a;
    if (b.cm) {
      b.cm.curOp.updateInput = b.cm.curOp.selectionChanged = true;
      lD(b.cm);
    }
    nw(b, "cursorActivity", b);
  }
  function jt(a) {
    jD(a, kx(a, a.sel, null, false), ln);
  }
  function kx(a, k, d, c) {
    var g;
    for (var f = 0; f < k.ranges.length; f++) {
      var e = k.ranges[f];
      var j = k.ranges.length == a.sel.ranges.length && a.sel.ranges[f];
      var b = mJ(a, e.anchor, j && j.anchor, d, c);
      var h = mJ(a, e.head, j && j.head, d, c);
      if (g || b != e.anchor || h != e.head) {
        if (!g) {
          g = k.ranges.slice(0, f);
        }
        g[f] = new lz(b, h);
      }
    }
    return g ? mA(g, k.primIndex) : k;
  }
  function iS(b, d, j, k, f) {
    var a = hm(b, d.line);
    if (a.markedSpans) {
      for (var h = 0; h < a.markedSpans.length; ++h) {
        var m = a.markedSpans[h],
          l = m.marker;
        if (
          (m.from == null ||
            (l.inclusiveLeft ? m.from <= d.ch : m.from < d.ch)) &&
          (m.to == null || (l.inclusiveRight ? m.to >= d.ch : m.to > d.ch))
        ) {
          if (f) {
            n9(l, "beforeCursorEnter");
            if (l.explicitlyCleared) {
              if (!a.markedSpans) {
                break;
              } else {
                --h;
                continue;
              }
            }
          }
          if (!l.atomic) {
            continue;
          }
          if (j) {
            var e = l.find(k < 0 ? 1 : -1),
              c = void 0;
            if (k < 0 ? l.inclusiveRight : l.inclusiveLeft) {
              e = hF(b, e, -k, e && e.line == d.line ? a : null);
            }
            if (
              e &&
              e.line == d.line &&
              (c = kI(e, j)) &&
              (k < 0 ? c < 0 : c > 0)
            ) {
              return iS(b, e, d, k, f);
            }
          }
          var g = l.find(k < 0 ? -1 : 1);
          if (k < 0 ? l.inclusiveLeft : l.inclusiveRight) {
            g = hF(b, g, k, g.line == d.line ? a : null);
          }
          return g ? iS(b, g, d, k, f) : null;
        }
      }
    }
    return d;
  }
  function mJ(b, a, e, g, d) {
    var f = g || 1;
    var c =
      iS(b, a, e, f, d) ||
      (!d && iS(b, a, e, f, true)) ||
      iS(b, a, e, -f, d) ||
      (!d && iS(b, a, e, -f, true));
    if (!c) {
      b.cantEdit = true;
      return lA(b.first, 0);
    }
    return c;
  }
  function hF(c, b, d, a) {
    if (d < 0 && b.ch == 0) {
      if (b.line > c.first) {
        return i3(c, lA(b.line - 1));
      } else {
        return null;
      }
    } else {
      if (d > 0 && b.ch == (a || hm(c, b.line)).text.length) {
        if (b.line < c.first + c.size - 1) {
          return lA(b.line + 1, 0);
        } else {
          return null;
        }
      } else {
        return new lA(b.line, b.ch + d);
      }
    }
  }
  function nh(a) {
    a.setSelection(lA(a.firstLine(), 0), lA(a.lastLine()), ln);
  }
  function jR(d, b, c) {
    var a = {
      canceled: false,
      from: b.from,
      to: b.to,
      text: b.text,
      origin: b.origin,
      cancel: function () {
        return (a.canceled = true);
      },
    };
    if (c) {
      a.update = function (e, f, g, h) {
        if (e) {
          a.from = i3(d, e);
        }
        if (f) {
          a.to = i3(d, f);
        }
        if (g) {
          a.text = g;
        }
        if (h !== undefined) {
          a.origin = h;
        }
      };
    }
    n9(d, "beforeChange", d, a);
    if (d.cm) {
      n9(d.cm, "beforeChange", d.cm, a);
    }
    if (a.canceled) {
      return null;
    }
    return { from: a.from, to: a.to, text: a.text, origin: a.origin };
  }
  function mi(b, a, c) {
    if (b.cm) {
      if (!b.cm.curOp) {
        return mQ(b.cm, mi)(b, a, c);
      }
      if (b.cm.state.suppressEdits) {
        return;
      }
    }
    if (iI(b, "beforeChange") || (b.cm && iI(b.cm, "beforeChange"))) {
      a = jR(b, a, true);
      if (!a) {
        return;
      }
    }
    var d = hM && !c && l1(b, a.from, a.to);
    if (d) {
      for (var e = d.length - 1; e >= 0; --e) {
        mf(b, { from: d[e].from, to: d[e].to, text: e ? [""] : a.text });
      }
    } else {
      mf(b, a);
    }
  }
  function mf(c, b) {
    if (b.text.length == 1 && b.text[0] == "" && kI(b.from, b.to) == 0) {
      return;
    }
    var d = iK(c, b);
    iX(c, b, d, c.cm ? c.cm.curOp.id : NaN);
    ik(c, b, d, h5(c, b));
    var a = [];
    iA(c, function (e, f) {
      if (!f && jb(a, e.history) == -1) {
        kF(e.history, b);
        a.push(e.history);
      }
      ik(e, b, null, h5(e, b));
    });
  }
  function k5(c, d, a) {
    if (c.cm && c.cm.state.suppressEdits && !a) {
      return;
    }
    var e = c.history,
      n,
      l = c.sel;
    var o = d == "undo" ? e.done : e.undone,
      b = d == "undo" ? e.undone : e.done;
    var h = 0;
    for (; h < o.length; h++) {
      n = o[h];
      if (a ? n.ranges && !n.equals(c.sel) : !n.ranges) {
        break;
      }
    }
    if (h == o.length) {
      return;
    }
    e.lastOrigin = e.lastSelOrigin = null;
    for (;;) {
      n = o.pop();
      if (n.ranges) {
        lx(n, b);
        if (a && !n.equals(c.sel)) {
          mL(c, n, { clearRedo: false });
          return;
        }
        l = n;
      } else {
        break;
      }
    }
    var f = [];
    lx(l, b);
    b.push({ changes: f, generation: e.generation });
    e.generation = n.generation || ++e.maxGeneration;
    var m = iI(c, "beforeChange") || (c.cm && iI(c.cm, "beforeChange"));
    var g = function (r) {
      var s = n.changes[r];
      s.origin = d;
      if (m && !jR(c, s, false)) {
        o.length = 0;
        return {};
      }
      f.push(k6(c, s));
      var p = r ? iK(c, s) : ji(o);
      ik(c, s, p, ix(c, s));
      if (!r && c.cm) {
        c.cm.scrollIntoView({ from: s.from, to: m1(s) });
      }
      var q = [];
      iA(c, function (u, t) {
        if (!t && jb(q, u.history) == -1) {
          kF(u.history, s);
          q.push(u.history);
        }
        ik(u, s, null, ix(u, s));
      });
    };
    for (var k = n.changes.length - 1; k >= 0; --k) {
      var j = g(k);
      if (j) {
        return j.v;
      }
    }
  }
  function iC(d, b) {
    if (b == 0) {
      return;
    }
    d.first += b;
    d.sel = new g0(
      mO(d.sel.ranges, function (e) {
        return new lz(
          lA(e.anchor.line + b, e.anchor.ch),
          lA(e.head.line + b, e.head.ch)
        );
      }),
      d.sel.primIndex
    );
    if (d.cm) {
      np(d.cm, d.first, d.first - b, b);
      for (var c = d.cm.display, a = c.viewFrom; a < c.viewTo; a++) {
        lS(d.cm, a, "gutter");
      }
    }
  }
  function ik(b, a, d, f) {
    if (b.cm && !b.cm.curOp) {
      return mQ(b.cm, ik)(b, a, d, f);
    }
    if (a.to.line < b.first) {
      iC(b, a.text.length - 1 - (a.to.line - a.from.line));
      return;
    }
    if (a.from.line > b.lastLine()) {
      return;
    }
    if (a.from.line < b.first) {
      var c = a.text.length - 1 - (b.first - a.from.line);
      iC(b, c);
      a = {
        from: lA(b.first, 0),
        to: lA(a.to.line + c, a.to.ch),
        text: [ji(a.text)],
        origin: a.origin,
      };
    }
    var e = b.lastLine();
    if (a.to.line > e) {
      a = {
        from: a.from,
        to: lA(e, hm(b, e).text.length),
        text: [a.text[0]],
        origin: a.origin,
      };
    }
    a.removed = gY(b, a.from, a.to);
    if (!d) {
      d = iK(b, a);
    }
    if (b.cm) {
      n5(b.cm, a, f);
    } else {
      id(b, a, f);
    }
    jN(b, d, ln);
  }
  function n5(b, g, j) {
    var c = b.doc,
      h = b.display,
      f = g.from,
      d = g.to;
    var e = false,
      k = f.line;
    if (!b.options.lineWrapping) {
      k = m5(jV(hm(c, f.line)));
      c.iter(k, d.line + 1, function (o) {
        if (o == h.maxLine) {
          e = true;
          return true;
        }
      });
    }
    if (c.sel.contains(g.from, g.to) > -1) {
      lD(b);
    }
    id(c, g, j, mp(b));
    if (!b.options.lineWrapping) {
      c.iter(k, f.line + g.text.length, function (o) {
        var p = hZ(o);
        if (p > h.maxLineLength) {
          h.maxLine = o;
          h.maxLineLength = p;
          h.maxLineChanged = true;
          e = false;
        }
      });
      if (e) {
        b.curOp.updateMaxLine = true;
      }
    }
    c.frontier = Math.min(c.frontier, f.line);
    ij(b, 400);
    var a = g.text.length - (d.line - f.line) - 1;
    if (g.full) {
      np(b);
    } else {
      if (f.line == d.line && g.text.length == 1 && !lR(b.doc, g)) {
        lS(b, f.line, "text");
      } else {
        np(b, f.line, d.line + 1, a);
      }
    }
    var m = iI(b, "changes"),
      l = iI(b, "change");
    if (l || m) {
      var n = {
        from: f,
        to: d,
        text: g.text,
        removed: g.removed,
        origin: g.origin,
      };
      if (l) {
        nw(b, "change", b, n);
      }
      if (m) {
        (b.curOp.changeObjs || (b.curOp.changeObjs = [])).push(n);
      }
    }
    b.display.selForContextMenu = null;
  }
  function gT(d, e, a, b, c) {
    if (!b) {
      b = a;
    }
    if (kI(b, a) < 0) {
      var f = b;
      b = a;
      a = f;
    }
    if (typeof e == "string") {
      e = d.splitLines(e);
    }
    mi(d, { from: a, to: b, text: e, origin: c });
  }
  function ml(b, c, d, a) {
    if (d < b.line) {
      b.line += a;
    } else {
      if (c < b.line) {
        b.line = c;
        b.ch = 0;
      }
    }
  }
  function iO(f, d, c, b) {
    for (var g = 0; g < f.length; ++g) {
      var k = f[g],
        e = true;
      if (k.ranges) {
        if (!k.copied) {
          k = f[g] = k.deepCopy();
          k.copied = true;
        }
        for (var h = 0; h < k.ranges.length; h++) {
          ml(k.ranges[h].anchor, d, c, b);
          ml(k.ranges[h].head, d, c, b);
        }
        continue;
      }
      for (var j = 0; j < k.changes.length; ++j) {
        var a = k.changes[j];
        if (c < a.from.line) {
          a.from = lA(a.from.line + b, a.from.ch);
          a.to = lA(a.to.line + b, a.to.ch);
        } else {
          if (d <= a.to.line) {
            e = false;
            break;
          }
        }
      }
      if (!e) {
        f.splice(0, g + 1);
        g = 0;
      }
    }
  }
  function kF(e, a) {
    var c = a.from.line,
      d = a.to.line,
      b = a.text.length - (d - c) - 1;
    iO(e.done, c, d, b);
    iO(e.undone, c, d, b);
  }
  function jp(d, e, c, a) {
    var b = e,
      f = e;
    if (typeof e == "number") {
      f = hm(d, jL(d, e));
    } else {
      b = m5(e);
    }
    if (b == null) {
      return null;
    }
    if (a(f, b) && d.cm) {
      lS(d.cm, b, c);
    }
    return f;
  }
  function hH(c) {
    var a = this;
    this.lines = c;
    this.parent = null;
    var d = 0;
    for (var b = 0; b < c.length; ++b) {
      c[b].parent = a;
      d += c[b].height;
    }
    this.height = d;
  }
  hH.prototype = {
    chunkSize: function () {
      return this.lines.length;
    },
    removeInner: function (f, a) {
      var b = this;
      for (var d = f, c = f + a; d < c; ++d) {
        var e = b.lines[d];
        b.height -= e.height;
        nv(e);
        nw(e, "delete");
      }
      this.lines.splice(f, a);
    },
    collapse: function (a) {
      a.push.apply(a, this.lines);
    },
    insertInner: function (d, c, e) {
      var a = this;
      this.height += e;
      this.lines = this.lines.slice(0, d).concat(c).concat(this.lines.slice(d));
      for (var b = 0; b < c.length; ++b) {
        c[b].parent = a;
      }
    },
    iterN: function (c, a, b) {
      var d = this;
      for (var e = c + a; c < e; ++c) {
        if (b(d.lines[c])) {
          return true;
        }
      }
    },
  };
  function ig(c) {
    var a = this;
    this.children = c;
    var d = 0,
      f = 0;
    for (var e = 0; e < c.length; ++e) {
      var b = c[e];
      d += b.chunkSize();
      f += b.height;
      b.parent = a;
    }
    this.size = d;
    this.height = f;
    this.parent = null;
  }
  ig.prototype = {
    chunkSize: function () {
      return this.size;
    },
    removeInner: function (g, h) {
      var e = this;
      this.size -= h;
      for (var f = 0; f < this.children.length; ++f) {
        var j = e.children[f],
          c = j.chunkSize();
        if (g < c) {
          var d = Math.min(h, c - g),
            b = j.height;
          j.removeInner(g, d);
          e.height -= b - j.height;
          if (c == d) {
            e.children.splice(f--, 1);
            j.parent = null;
          }
          if ((h -= d) == 0) {
            break;
          }
          g = 0;
        } else {
          g -= c;
        }
      }
      if (
        this.size - h < 25 &&
        (this.children.length > 1 || !(this.children[0] instanceof hH))
      ) {
        var a = [];
        this.collapse(a);
        this.children = [new hH(a)];
        this.children[0].parent = this;
      }
    },
    collapse: function (c) {
      var a = this;
      for (var b = 0; b < this.children.length; ++b) {
        a.children[b].collapse(c);
      }
    },
    insertInner: function (j, a, b) {
      var f = this;
      this.size += a.length;
      this.height += b;
      for (var g = 0; g < this.children.length; ++g) {
        var k = f.children[g],
          d = k.chunkSize();
        if (j <= d) {
          k.insertInner(j, a, b);
          if (k.lines && k.lines.length > 50) {
            var h = (k.lines.length % 25) + 25;
            for (var c = h; c < k.lines.length; ) {
              var e = new hH(k.lines.slice(c, (c += 25)));
              k.height -= e.height;
              f.children.splice(++g, 0, e);
              e.parent = f;
            }
            k.lines = k.lines.slice(0, h);
            f.maybeSpill();
          }
          break;
        }
        j -= d;
      }
    },
    maybeSpill: function () {
      if (this.children.length <= 10) {
        return;
      }
      var c = this;
      do {
        var e = c.children.splice(c.children.length - 5, 5);
        var d = new ig(e);
        if (!c.parent) {
          var a = new ig(c.children);
          a.parent = c;
          c.children = [a, d];
          c = a;
        } else {
          c.size -= d.size;
          c.height -= d.height;
          var b = jb(c.parent.children, c);
          c.parent.children.splice(b + 1, 0, d);
        }
        d.parent = c.parent;
      } while (c.children.length > 10);
      c.parent.maybeSpill();
    },
    iterN: function (g, h, a) {
      var b = this;
      for (var f = 0; f < this.children.length; ++f) {
        var c = b.children[f],
          d = c.chunkSize();
        if (g < d) {
          var e = Math.min(h, d - g);
          if (c.iterN(g, e, a)) {
            return true;
          }
          if ((h -= e) == 0) {
            break;
          }
          g = 0;
        } else {
          g -= d;
        }
      }
    },
  };
  function kO(c, d, b) {
    var a = this;
    if (b) {
      for (var e in b) {
        if (b.hasOwnProperty(e)) {
          a[e] = b[e];
        }
      }
    }
    this.doc = c;
    this.node = d;
  }
  nA(kO);
  function lq(a, c, b) {
    if (m7(c) < ((a.curOp && a.curOp.scrollTop) || a.doc.scrollTop)) {
      lM(a, null, b);
    }
  }
  kO.prototype.clear = function () {
    var a = this;
    var f = this.doc.cm,
      d = this.line.widgets,
      e = this.line,
      b = m5(e);
    if (b == null || !d) {
      return;
    }
    for (var c = 0; c < d.length; ++c) {
      if (d[c] == a) {
        d.splice(c--, 1);
      }
    }
    if (!d.length) {
      e.widgets = null;
    }
    var g = m0(this);
    gV(e, Math.max(0, e.height - g));
    if (f) {
      lI(f, function () {
        lq(f, e, -g);
        lS(f, b, "widget");
      });
    }
  };
  kO.prototype.changed = function () {
    var d = this.height,
      b = this.doc.cm,
      c = this.line;
    this.height = null;
    var a = m0(this) - d;
    if (!a) {
      return;
    }
    gV(c, c.height + a);
    if (b) {
      lI(b, function () {
        b.curOp.forceUpdate = true;
        lq(b, c, a);
      });
    }
  };
  function nl(a, b, e, f) {
    var d = new kO(a, e, f);
    var c = a.cm;
    if (c && d.noHScroll) {
      c.display.alignWidgets = true;
    }
    jp(a, b, "widget", function (g) {
      var j = g.widgets || (g.widgets = []);
      if (d.insertAt == null) {
        j.push(d);
      } else {
        j.splice(Math.min(j.length - 1, Math.max(0, d.insertAt)), 0, d);
      }
      d.line = g;
      if (c && !il(a, g)) {
        var h = m7(g) < a.scrollTop;
        gV(g, g.height + m0(d));
        if (h) {
          lM(c, null, d.height);
        }
        c.curOp.forceUpdate = true;
      }
      return true;
    });
    return d;
  }
  var gQ = 0;
  function lV(b, a) {
    this.lines = [];
    this.type = a;
    this.doc = b;
    this.id = ++gQ;
  }
  nA(lV);
  lV.prototype.clear = function () {
    var g = this;
    if (this.explicitlyCleared) {
      return;
    }
    var c = this.doc.cm,
      k = c && !c.curOp;
    if (k) {
      lY(c);
    }
    if (iI(this, "clear")) {
      var b = this.find();
      if (b) {
        nw(this, "clear", b.from, b.to);
      }
    }
    var j = null,
      e = null;
    for (var h = 0; h < this.lines.length; ++h) {
      var a = g.lines[h];
      var d = hr(a.markedSpans, g);
      if (c && !g.collapsed) {
        lS(c, m5(a), "text");
      } else {
        if (c) {
          if (d.to != null) {
            e = m5(a);
          }
          if (d.from != null) {
            j = m5(a);
          }
        }
      }
      a.markedSpans = iY(a.markedSpans, d);
      if (d.from == null && g.collapsed && !il(g.doc, a) && c) {
        gV(a, nF(c.display));
      }
    }
    if (c && this.collapsed && !c.options.lineWrapping) {
      for (var l = 0; l < this.lines.length; ++l) {
        var m = jV(g.lines[l]),
          f = hZ(m);
        if (f > c.display.maxLineLength) {
          c.display.maxLine = m;
          c.display.maxLineLength = f;
          c.display.maxLineChanged = true;
        }
      }
    }
    if (j != null && c && this.collapsed) {
      np(c, j, e + 1);
    }
    this.lines.length = 0;
    this.explicitlyCleared = true;
    if (this.atomic && this.doc.cantEdit) {
      this.doc.cantEdit = false;
      if (c) {
        jt(c.doc);
      }
    }
    if (c) {
      nw(c, "markerCleared", c, this);
    }
    if (k) {
      ng(c);
    }
    if (this.parent) {
      this.parent.clear();
    }
  };
  lV.prototype.find = function (d, f) {
    var h = this;
    if (d == null && this.type == "bookmark") {
      d = 1;
    }
    var a, b;
    for (var e = 0; e < this.lines.length; ++e) {
      var g = h.lines[e];
      var c = hr(g.markedSpans, h);
      if (c.from != null) {
        a = lA(f ? g : m5(g), c.from);
        if (d == -1) {
          return a;
        }
      }
      if (c.to != null) {
        b = lA(f ? g : m5(g), c.to);
        if (d == 1) {
          return b;
        }
      }
    }
    return a && { from: a, to: b };
  };
  lV.prototype.changed = function () {
    var b = this.find(-1, true),
      c = this,
      a = this.doc.cm;
    if (!b || !a) {
      return;
    }
    lI(a, function () {
      var g = b.line,
        f = m5(b.line);
      var h = hp(a, f);
      if (h) {
        mS(h);
        a.curOp.selectionChanged = a.curOp.forceUpdate = true;
      }
      a.curOp.updateMaxLine = true;
      if (!il(c.doc, g) && c.height != null) {
        var d = c.height;
        c.height = null;
        var e = m0(c) - d;
        if (e) {
          gV(g, g.height + e);
        }
      }
    });
  };
  lV.prototype.attachLine = function (a) {
    if (!this.lines.length && this.doc.cm) {
      var b = this.doc.cm.curOp;
      if (!b.maybeHiddenMarkers || jb(b.maybeHiddenMarkers, this) == -1) {
        (b.maybeUnhiddenMarkers || (b.maybeUnhiddenMarkers = [])).push(this);
      }
    }
    this.lines.push(a);
  };
  lV.prototype.detachLine = function (a) {
    this.lines.splice(jb(this.lines, a), 1);
    if (!this.lines.length && this.doc.cm) {
      var b = this.doc.cm.curOp;
      (b.maybeHiddenMarkers || (b.maybeHiddenMarkers = [])).push(this);
    }
  };
  function i5(c, e, d, a, g) {
    if (a && a.shared) {
      return l6(c, e, d, a, g);
    }
    if (c.cm && !c.cm.curOp) {
      return mQ(c.cm, i5)(c, e, d, a, g);
    }
    var h = new lV(c, g),
      b = kI(e, d);
    if (a) {
      n0(a, h, false);
    }
    if (b > 0 || (b == 0 && h.clearWhenEmpty !== false)) {
      return h;
    }
    if (h.replacedWith) {
      h.collapsed = true;
      h.widgetNode = gZ("span", [h.replacedWith], "CodeMirror-widget");
      if (!a.handleMouseEvents) {
        h.widgetNode.setAttribute("cm-ignore-events", "true");
      }
      if (a.insertLeft) {
        h.widgetNode.insertLeft = true;
      }
    }
    if (h.collapsed) {
      if (
        jS(c, e.line, e, d, h) ||
        (e.line != d.line && jS(c, d.line, e, d, h))
      ) {
        throw new Error(
          "Inserting collapsed marker partially overlapping an existing one"
        );
      }
      lf();
    }
    if (h.addToHistory) {
      iX(c, { from: e, to: d, origin: "markText" }, c.sel, NaN);
    }
    var k = e.line,
      f = c.cm,
      l;
    c.iter(k, d.line + 1, function (m) {
      if (
        f &&
        h.collapsed &&
        !f.options.lineWrapping &&
        jV(m) == f.display.maxLine
      ) {
        l = true;
      }
      if (h.collapsed && k != e.line) {
        gV(m, 0);
      }
      kP(m, new h7(h, k == e.line ? e.ch : null, k == d.line ? d.ch : null));
      ++k;
    });
    if (h.collapsed) {
      c.iter(e.line, d.line + 1, function (m) {
        if (il(c, m)) {
          gV(m, 0);
        }
      });
    }
    if (h.clearOnEnter) {
      nY(h, "beforeCursorEnter", function () {
        return h.clear();
      });
    }
    if (h.readOnly) {
      ia();
      if (c.history.done.length || c.history.undone.length) {
        c.clearHistory();
      }
    }
    if (h.collapsed) {
      h.id = ++gQ;
      h.atomic = true;
    }
    if (f) {
      if (l) {
        f.curOp.updateMaxLine = true;
      }
      if (h.collapsed) {
        np(f, e.line, d.line + 1);
      } else {
        if (h.className || h.title || h.startStyle || h.endStyle || h.css) {
          for (var j = e.line; j <= d.line; j++) {
            lS(f, j, "text");
          }
        }
      }
      if (h.atomic) {
        jt(f.doc);
      }
      nw(f, "markerAdded", f, h);
    }
    return h;
  }
  function jZ(b, c) {
    var a = this;
    this.markers = b;
    this.primary = c;
    for (var d = 0; d < b.length; ++d) {
      b[d].parent = a;
    }
  }
  nA(jZ);
  jZ.prototype.clear = function () {
    var a = this;
    if (this.explicitlyCleared) {
      return;
    }
    this.explicitlyCleared = true;
    for (var b = 0; b < this.markers.length; ++b) {
      a.markers[b].clear();
    }
    nw(this, "clear");
  };
  jZ.prototype.find = function (b, a) {
    return this.primary.find(b, a);
  };
  function l6(d, a, b, f, g) {
    f = n0(f);
    f.shared = false;
    var c = [i5(d, a, b, f, g)],
      h = c[0];
    var e = f.widgetNode;
    iA(d, function (j) {
      if (e) {
        f.widgetNode = e.cloneNode(true);
      }
      c.push(i5(j, i3(j, a), i3(j, b), f, g));
      for (var k = 0; k < j.linked.length; ++k) {
        if (j.linked[k].isParent) {
          return;
        }
      }
      h = ji(c);
    });
    return new jZ(c, h);
  }
  function kd(a) {
    return a.findMarks(
      lA(a.first, 0),
      a.clipPos(lA(a.lastLine())),
      function (b) {
        return b.parent;
      }
    );
  }
  function kC(b, a) {
    for (var d = 0; d < a.length; d++) {
      var f = a[d],
        h = f.find();
      var g = b.clipPos(h.from),
        c = b.clipPos(h.to);
      if (kI(g, c)) {
        var e = i5(b, g, c, f.primary, f.primary.type);
        f.markers.push(e);
        e.parent = f;
      }
    }
  }
  function jP(a) {
    var c = function (e) {
      var g = a[e],
        h = [g.primary.doc];
      iA(g.primary.doc, function (j) {
        return h.push(j);
      });
      for (var f = 0; f < g.markers.length; f++) {
        var d = g.markers[f];
        if (jb(h, d.doc) == -1) {
          d.parent = null;
          g.markers.splice(f--, 1);
        }
      }
    };
    for (var b = 0; b < a.length; b++) {
      c(b);
    }
  }
  var jY = 0;
  var mT = function (c, d, b, e) {
    if (!(this instanceof mT)) {
      return new mT(c, d, b, e);
    }
    if (b == null) {
      b = 0;
    }
    ig.call(this, [new hH([new gW("", null)])]);
    this.first = b;
    this.scrollTop = this.scrollLeft = 0;
    this.cantEdit = false;
    this.cleanGeneration = 1;
    this.frontier = b;
    var a = lA(b, 0);
    this.sel = j1(a);
    this.history = new ha(null);
    this.id = ++jY;
    this.modeOption = d;
    this.lineSep = e;
    this.extend = false;
    if (typeof c == "string") {
      c = this.splitLines(c);
    }
    id(this, { from: a, to: a, text: c });
    mL(this, j1(a), ln);
  };
  mT.prototype = ks(ig.prototype, {
    constructor: mT,
    iter: function (b, c, a) {
      if (a) {
        this.iterN(b - this.first, c - b, a);
      } else {
        this.iterN(this.first, this.first + this.size, b);
      }
    },
    insert: function (c, b) {
      var d = 0;
      for (var a = 0; a < b.length; ++a) {
        d += b[a].height;
      }
      this.insertInner(c - this.first, b, d);
    },
    remove: function (a, b) {
      this.removeInner(a - this.first, b);
    },
    getValue: function (b) {
      var a = gS(this, this.first, this.first + this.size);
      if (b === false) {
        return a;
      }
      return a.join(b || this.lineSeparator());
    },
    setValue: mg(function (c) {
      var b = lA(this.first, 0),
        a = this.first + this.size - 1;
      mi(
        this,
        {
          from: b,
          to: lA(a, hm(this, a).text.length),
          text: this.splitLines(c),
          origin: "setValue",
          full: true,
        },
        true
      );
      mL(this, j1(b));
    }),
    replaceRange: function (d, b, c, a) {
      b = i3(this, b);
      c = c ? i3(this, c) : b;
      gT(this, d, b, c, a);
    },
    getRange: function (b, c, d) {
      var a = gY(this, i3(this, b), i3(this, c));
      if (d === false) {
        return a;
      }
      return a.join(d || this.lineSeparator());
    },
    getLine: function (b) {
      var a = this.getLineHandle(b);
      return a && a.text;
    },
    getLineHandle: function (a) {
      if (k3(this, a)) {
        return hm(this, a);
      }
    },
    getLineNumber: function (a) {
      return m5(a);
    },
    getLineHandleVisualStart: function (a) {
      if (typeof a == "number") {
        a = hm(this, a);
      }
      return jV(a);
    },
    lineCount: function () {
      return this.size;
    },
    firstLine: function () {
      return this.first;
    },
    lastLine: function () {
      return this.first + this.size - 1;
    },
    clipPos: function (a) {
      return i3(this, a);
    },
    getCursor: function (b) {
      var a = this.sel.primary(),
        c;
      if (b == null || b == "head") {
        c = a.head;
      } else {
        if (b == "anchor") {
          c = a.anchor;
        } else {
          if (b == "end" || b == "to" || b === false) {
            c = a.to();
          } else {
            c = a.from();
          }
        }
      }
      return c;
    },
    listSelections: function () {
      return this.sel.ranges;
    },
    somethingSelected: function () {
      return this.sel.somethingSelected();
    },
    setCursor: mg(function (a, b, c) {
      ms(this, i3(this, typeof a == "number" ? lA(a, b || 0) : a), null, c);
    }),
    setSelection: mg(function (c, b, a) {
      ms(this, i3(this, c), i3(this, b || c), a);
    }),
    extendSelection: mg(function (b, a, c) {
      g5(this, i3(this, b), a && i3(this, a), c);
    }),
    extendSelections: mg(function (b, a) {
      mN(this, lo(this, b), a);
    }),
    extendSelectionsBy: mg(function (b, a) {
      var c = mO(this.sel.ranges, b);
      mN(this, lo(this, c), a);
    }),
    setSelections: mg(function (f, b, d) {
      var a = this;
      if (!f.length) {
        return;
      }
      var e = [];
      for (var c = 0; c < f.length; c++) {
        e[c] = new lz(i3(a, f[c].anchor), i3(a, f[c].head));
      }
      if (b == null) {
        b = Math.min(f.length - 1, this.sel.primIndex);
      }
      mL(this, mA(e, b), d);
    }),
    addSelection: mg(function (c, b, d) {
      var a = this.sel.ranges.slice(0);
      a.push(new lz(i3(this, c), i3(this, b || c)));
      mL(this, mA(a, a.length - 1), d);
    }),
    getSelection: function (b) {
      var a = this;
      var e = this.sel.ranges,
        f;
      for (var d = 0; d < e.length; d++) {
        var c = gY(a, e[d].from(), e[d].to());
        f = f ? f.concat(c) : c;
      }
      if (b === false) {
        return f;
      } else {
        return f.join(b || this.lineSeparator());
      }
    },
    getSelections: function (b) {
      var a = this;
      var c = [],
        f = this.sel.ranges;
      for (var e = 0; e < f.length; e++) {
        var d = gY(a, f[e].from(), f[e].to());
        if (b !== false) {
          d = d.join(b || a.lineSeparator());
        }
        c[e] = d;
      }
      return c;
    },
    replaceSelection: function (c, a, e) {
      var b = [];
      for (var d = 0; d < this.sel.ranges.length; d++) {
        b[d] = c;
      }
      this.replaceSelections(b, a, e || "+input");
    },
    replaceSelections: mg(function (j, d, b) {
      var e = this;
      var c = [],
        g = this.sel;
      for (var f = 0; f < g.ranges.length; f++) {
        var a = g.ranges[f];
        c[f] = {
          from: a.from(),
          to: a.to(),
          text: e.splitLines(j[f]),
          origin: b,
        };
      }
      var k = d && d != "end" && nt(this, c, d);
      for (var h = c.length - 1; h >= 0; h--) {
        mi(e, c[h]);
      }
      if (k) {
        ht(this, k);
      } else {
        if (this.cm) {
          jl(this.cm);
        }
      }
    }),
    undo: mg(function () {
      k5(this, "undo");
    }),
    redo: mg(function () {
      k5(this, "redo");
    }),
    undoSelection: mg(function () {
      k5(this, "undo", true);
    }),
    redoSelection: mg(function () {
      k5(this, "redo", true);
    }),
    setExtending: function (a) {
      this.extend = a;
    },
    getExtending: function () {
      return this.extend;
    },
    historySize: function () {
      var b = this.history,
        e = 0,
        c = 0;
      for (var d = 0; d < b.done.length; d++) {
        if (!b.done[d].ranges) {
          ++e;
        }
      }
      for (var a = 0; a < b.undone.length; a++) {
        if (!b.undone[a].ranges) {
          ++c;
        }
      }
      return { undo: e, redo: c };
    },
    clearHistory: function () {
      this.history = new ha(this.history.maxGeneration);
    },
    markClean: function () {
      this.cleanGeneration = this.changeGeneration(true);
    },
    changeGeneration: function (a) {
      if (a) {
        this.history.lastOp =
          this.history.lastSelOp =
          this.history.lastOrigin =
            null;
      }
      return this.history.generation;
    },
    isClean: function (a) {
      return this.history.generation == (a || this.cleanGeneration);
    },
    getHistory: function () {
      return { done: mZ(this.history.done), undone: mZ(this.history.undone) };
    },
    setHistory: function (b) {
      var a = (this.history = new ha(this.history.maxGeneration));
      a.done = mZ(b.done.slice(0), null, true);
      a.undone = mZ(b.undone.slice(0), null, true);
    },
    setGutterMarker: mg(function (a, c, b) {
      return jp(this, a, "gutter", function (e) {
        var d = e.gutterMarkers || (e.gutterMarkers = {});
        d[c] = b;
        if (!b && hS(d)) {
          e.gutterMarkers = null;
        }
        return true;
      });
    }),
    clearGutter: mg(function (b) {
      var a = this;
      var c = this.first;
      this.iter(function (d) {
        if (d.gutterMarkers && d.gutterMarkers[b]) {
          jp(a, d, "gutter", function () {
            d.gutterMarkers[b] = null;
            if (hS(d.gutterMarkers)) {
              d.gutterMarkers = null;
            }
            return true;
          });
        }
        ++c;
      });
    }),
    lineInfo: function (a) {
      var b;
      if (typeof a == "number") {
        if (!k3(this, a)) {
          return null;
        }
        b = a;
        a = hm(this, a);
        if (!a) {
          return null;
        }
      } else {
        b = m5(a);
        if (b == null) {
          return null;
        }
      }
      return {
        line: b,
        handle: a,
        text: a.text,
        gutterMarkers: a.gutterMarkers,
        textClass: a.textClass,
        bgClass: a.bgClass,
        wrapClass: a.wrapClass,
        widgets: a.widgets,
      };
    },
    addLineClass: mg(function (b, c, a) {
      return jp(this, b, c == "gutter" ? "gutter" : "class", function (e) {
        var d =
          c == "text"
            ? "textClass"
            : c == "background"
            ? "bgClass"
            : c == "gutter"
            ? "gutterClass"
            : "wrapClass";
        if (!e[d]) {
          e[d] = a;
        } else {
          if (lO(a).test(e[d])) {
            return false;
          } else {
            e[d] += " " + a;
          }
        }
        return true;
      });
    }),
    removeLineClass: mg(function (b, c, a) {
      return jp(this, b, c == "gutter" ? "gutter" : "class", function (g) {
        var d =
          c == "text"
            ? "textClass"
            : c == "background"
            ? "bgClass"
            : c == "gutter"
            ? "gutterClass"
            : "wrapClass";
        var e = g[d];
        if (!e) {
          return false;
        } else {
          if (a == null) {
            g[d] = null;
          } else {
            var f = e.match(lO(a));
            if (!f) {
              return false;
            }
            var h = f.index + f[0].length;
            g[d] =
              e.slice(0, f.index) +
                (!f.index || h == e.length ? "" : " ") +
                e.slice(h) || null;
          }
        }
        return true;
      });
    }),
    addLineWidget: mg(function (b, c, a) {
      return nl(this, b, c, a);
    }),
    removeLineWidget: function (a) {
      a.clear();
    },
    markText: function (b, c, a) {
      return i5(this, i3(this, b), i3(this, c), a, (a && a.type) || "range");
    },
    setBookmark: function (b, a) {
      var c = {
        replacedWith: a && (a.nodeType == null ? a.widget : a),
        insertLeft: a && a.insertLeft,
        clearWhenEmpty: false,
        shared: a && a.shared,
        handleMouseEvents: a && a.handleMouseEvents,
      };
      b = i3(this, b);
      return i5(this, b, b, c, "bookmark");
    },
    findMarksAt: function (a) {
      a = i3(this, a);
      var b = [],
        d = hm(this, a.line).markedSpans;
      if (d) {
        for (var e = 0; e < d.length; ++e) {
          var c = d[e];
          if (
            (c.from == null || c.from <= a.ch) &&
            (c.to == null || c.to >= a.ch)
          ) {
            b.push(c.marker.parent || c.marker);
          }
        }
      }
      return b;
    },
    findMarks: function (a, c, e) {
      a = i3(this, a);
      c = i3(this, c);
      var d = [],
        b = a.line;
      this.iter(a.line, c.line + 1, function (h) {
        var f = h.markedSpans;
        if (f) {
          for (var g = 0; g < f.length; g++) {
            var j = f[g];
            if (
              !(
                (j.to != null && b == a.line && a.ch >= j.to) ||
                (j.from == null && b != a.line) ||
                (j.from != null && b == c.line && j.from >= c.ch)
              ) &&
              (!e || e(j.marker))
            ) {
              d.push(j.marker.parent || j.marker);
            }
          }
        }
        ++b;
      });
      return d;
    },
    getAllMarks: function () {
      var a = [];
      this.iter(function (c) {
        var d = c.markedSpans;
        if (d) {
          for (var b = 0; b < d.length; ++b) {
            if (d[b].from != null) {
              a.push(d[b].marker);
            }
          }
        }
      });
      return a;
    },
    posFromIndex: function (b) {
      var d,
        a = this.first,
        c = this.lineSeparator().length;
      this.iter(function (f) {
        var e = f.text.length + c;
        if (e > b) {
          d = b;
          return true;
        }
        b -= e;
        ++a;
      });
      return i3(this, lA(a, d));
    },
    indexFromPos: function (b) {
      b = i3(this, b);
      var a = b.ch;
      if (b.line < this.first || b.ch < 0) {
        return 0;
      }
      var c = this.lineSeparator().length;
      this.iter(this.first, b.line, function (d) {
        a += d.text.length + c;
      });
      return a;
    },
    copy: function (a) {
      var b = new mT(
        gS(this, this.first, this.first + this.size),
        this.modeOption,
        this.first,
        this.lineSep
      );
      b.scrollTop = this.scrollTop;
      b.scrollLeft = this.scrollLeft;
      b.sel = this.sel;
      b.extend = false;
      if (a) {
        b.history.undoDepth = this.history.undoDepth;
        b.setHistory(this.getHistory());
      }
      return b;
    },
    linkedDoc: function (b) {
      if (!b) {
        b = {};
      }
      var a = this.first,
        c = this.first + this.size;
      if (b.from != null && b.from > a) {
        a = b.from;
      }
      if (b.to != null && b.to < c) {
        c = b.to;
      }
      var d = new mT(
        gS(this, a, c),
        b.mode || this.modeOption,
        a,
        this.lineSep
      );
      if (b.sharedHist) {
        d.history = this.history;
      }
      (this.linked || (this.linked = [])).push({
        doc: d,
        sharedHist: b.sharedHist,
      });
      d.linked = [{ doc: this, isParent: true, sharedHist: b.sharedHist }];
      kC(d, kd(this));
      return d;
    },
    unlinkDoc: function (d) {
      var a = this;
      if (d instanceof hx) {
        d = d.doc;
      }
      if (this.linked) {
        for (var c = 0; c < this.linked.length; ++c) {
          var b = a.linked[c];
          if (b.doc != d) {
            continue;
          }
          a.linked.splice(c, 1);
          d.unlinkDoc(a);
          jP(kd(a));
          break;
        }
      }
      if (d.history == this.history) {
        var e = [d.id];
        iA(
          d,
          function (f) {
            return e.push(f.id);
          },
          true
        );
        d.history = new ha(null);
        d.history.done = mZ(this.history.done, e);
        d.history.undone = mZ(this.history.undone, e);
      }
    },
    iterLinkedDocs: function (a) {
      iA(this, a);
    },
    getMode: function () {
      return this.mode;
    },
    getEditor: function () {
      return this.cm;
    },
    splitLines: function (a) {
      if (this.lineSep) {
        return a.split(this.lineSep);
      }
      return hd(a);
    },
    lineSeparator: function () {
      return this.lineSep || "\n";
    },
  });
  mT.prototype.eachLine = mT.prototype.iter;
  var nr = 0;
  function l5(d) {
    var b = this;
    jx(b);
    if (nT(b, d) || my(b.display, d)) {
      return;
    }
    l7(d);
    if (kj) {
      nr = +new Date();
    }
    var c = kg(b, d, true),
      l = d.dataTransfer.files;
    if (!c || b.isReadOnly()) {
      return;
    }
    if (l && l.length && window.FileReader && window.File) {
      var h = l.length,
        a = Array(h),
        k = 0;
      var f = function (n, o) {
        if (
          b.options.allowDropFileTypes &&
          jb(b.options.allowDropFileTypes, n.type) == -1
        ) {
          return;
        }
        var p = new FileReader();
        p.onload = mQ(b, function () {
          var r = p.result;
          if (/[\x00-\x08\x0e-\x1f]{2}/.test(r)) {
            r = "";
          }
          a[o] = r;
          if (++k == h) {
            c = i3(b.doc, c);
            var q = {
              from: c,
              to: c,
              text: b.doc.splitLines(a.join(b.doc.lineSeparator())),
              origin: "paste",
            };
            mi(b.doc, q);
            ht(b.doc, j1(c, m1(q)));
          }
        });
        p.readAsText(n);
      };
      for (var e = 0; e < h; ++e) {
        f(l[e], e);
      }
    } else {
      if (b.state.draggingText && b.doc.sel.contains(c) > -1) {
        b.state.draggingText(d);
        setTimeout(function () {
          return b.display.input.focus();
        }, 20);
        return;
      }
      try {
        var m = d.dataTransfer.getData("Text");
        if (m) {
          var g;
          if (b.state.draggingText && !b.state.draggingText.copy) {
            g = b.listSelections();
          }
          jN(b.doc, j1(c, c));
          if (g) {
            for (var j = 0; j < g.length; ++j) {
              gT(b.doc, "", g[j].anchor, g[j].head, "drag");
            }
          }
          b.replaceSelection(m, "around", "paste");
          b.display.input.focus();
        }
      } catch (d) {}
    }
  }
  function l0(a, b) {
    if (kj && (!a.state.draggingText || +new Date() - nr < 100)) {
      jK(b);
      return;
    }
    if (nT(a, b) || my(a.display, b)) {
      return;
    }
    b.dataTransfer.setData("Text", a.getSelection());
    b.dataTransfer.effectAllowed = "copyMove";
    if (b.dataTransfer.setDragImage && !ob) {
      var c = gZ("img", null, null, "position: fixed; left: 0; top: 0;");
      c.src =
        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      if (iL) {
        c.width = c.height = 1;
        a.display.wrapper.appendChild(c);
        c._top = c.offsetTop;
      }
      b.dataTransfer.setDragImage(c, 0, 0);
      if (iL) {
        c.parentNode.removeChild(c);
      }
    }
  }
  function hD(b, d) {
    var a = kg(b, d);
    if (!a) {
      return;
    }
    var c = document.createDocumentFragment();
    mE(b, a, c);
    if (!b.display.dragCursor) {
      b.display.dragCursor = gZ(
        "div",
        null,
        "CodeMirror-cursors CodeMirror-dragcursors"
      );
      b.display.lineSpace.insertBefore(
        b.display.dragCursor,
        b.display.cursorDiv
      );
    }
    mR(b.display.dragCursor, c);
  }
  function jx(a) {
    if (a.display.dragCursor) {
      a.display.lineSpace.removeChild(a.display.dragCursor);
      a.display.dragCursor = null;
    }
  }
  function od(a) {
    if (!document.body.getElementsByClassName) {
      return;
    }
    var b = document.body.getElementsByClassName("CodeMirror");
    for (var c = 0; c < b.length; c++) {
      var d = b[c].CodeMirror;
      if (d) {
        a(d);
      }
    }
  }
  var mh = false;
  function l8() {
    if (mh) {
      return;
    }
    jn();
    mh = true;
  }
  function jn() {
    var a;
    nY(window, "resize", function () {
      if (a == null) {
        a = setTimeout(function () {
          a = null;
          od(nO);
        }, 100);
      }
    });
    nY(window, "blur", function () {
      return od(nL);
    });
  }
  function nO(a) {
    var b = a.display;
    if (
      b.lastWrapHeight == b.wrapper.clientHeight &&
      b.lastWrapWidth == b.wrapper.clientWidth
    ) {
      return;
    }
    b.cachedCharWidth = b.cachedTextHeight = b.cachedPaddingH = null;
    b.scrollbarsClipped = false;
    a.setSize();
  }
  var iQ = {
    3: "Enter",
    8: "Backspace",
    9: "Tab",
    13: "Enter",
    16: "Shift",
    17: "Ctrl",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Esc",
    32: "Space",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    44: "PrintScrn",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Mod",
    92: "Mod",
    93: "Mod",
    106: "*",
    107: "=",
    109: "-",
    110: ".",
    111: "/",
    127: "Delete",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
    63232: "Up",
    63233: "Down",
    63234: "Left",
    63235: "Right",
    63272: "Delete",
    63273: "Home",
    63275: "End",
    63276: "PageUp",
    63277: "PageDown",
    63302: "Insert",
  };
  for (var ii = 0; ii < 10; ii++) {
    iQ[ii + 48] = iQ[ii + 96] = String(ii);
  }
  for (var hb = 65; hb <= 90; hb++) {
    iQ[hb] = String.fromCharCode(hb);
  }
  for (var hc = 1; hc <= 12; hc++) {
    iQ[hc + 111] = iQ[hc + 63235] = "F" + hc;
  }
  var hq = {};
  hq.basic = {
    Left: "goCharLeft",
    Right: "goCharRight",
    Up: "goLineUp",
    Down: "goLineDown",
    End: "goLineEnd",
    Home: "goLineStartSmart",
    PageUp: "goPageUp",
    PageDown: "goPageDown",
    Delete: "delCharAfter",
    Backspace: "delCharBefore",
    "Shift-Backspace": "delCharBefore",
    Tab: "defaultTab",
    "Shift-Tab": "indentAuto",
    Enter: "newlineAndIndent",
    Insert: "toggleOverwrite",
    Esc: "singleSelection",
  };
  hq.pcDefault = {
    "Ctrl-A": "selectAll",
    "Ctrl-D": "deleteLine",
    "Ctrl-Z": "undo",
    "Shift-Ctrl-Z": "redo",
    "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart",
    "Ctrl-End": "goDocEnd",
    "Ctrl-Up": "goLineUp",
    "Ctrl-Down": "goLineDown",
    "Ctrl-Left": "goGroupLeft",
    "Ctrl-Right": "goGroupRight",
    "Alt-Left": "goLineStart",
    "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delGroupBefore",
    "Ctrl-Delete": "delGroupAfter",
    "Ctrl-S": "save",
    "Ctrl-F": "find",
    "Ctrl-G": "findNext",
    "Shift-Ctrl-G": "findPrev",
    "Shift-Ctrl-F": "replace",
    "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess",
    "Ctrl-]": "indentMore",
    "Ctrl-U": "undoSelection",
    "Shift-Ctrl-U": "redoSelection",
    "Alt-U": "redoSelection",
    fallthrough: "basic",
  };
  hq.emacsy = {
    "Ctrl-F": "goCharRight",
    "Ctrl-B": "goCharLeft",
    "Ctrl-P": "goLineUp",
    "Ctrl-N": "goLineDown",
    "Alt-F": "goWordRight",
    "Alt-B": "goWordLeft",
    "Ctrl-A": "goLineStart",
    "Ctrl-E": "goLineEnd",
    "Ctrl-V": "goPageDown",
    "Shift-Ctrl-V": "goPageUp",
    "Ctrl-D": "delCharAfter",
    "Ctrl-H": "delCharBefore",
    "Alt-D": "delWordAfter",
    "Alt-Backspace": "delWordBefore",
    "Ctrl-K": "killLine",
    "Ctrl-T": "transposeChars",
    "Ctrl-O": "openLine",
  };
  hq.macDefault = {
    "Cmd-A": "selectAll",
    "Cmd-D": "deleteLine",
    "Cmd-Z": "undo",
    "Shift-Cmd-Z": "redo",
    "Cmd-Y": "redo",
    "Cmd-Home": "goDocStart",
    "Cmd-Up": "goDocStart",
    "Cmd-End": "goDocEnd",
    "Cmd-Down": "goDocEnd",
    "Alt-Left": "goGroupLeft",
    "Alt-Right": "goGroupRight",
    "Cmd-Left": "goLineLeft",
    "Cmd-Right": "goLineRight",
    "Alt-Backspace": "delGroupBefore",
    "Ctrl-Alt-Backspace": "delGroupAfter",
    "Alt-Delete": "delGroupAfter",
    "Cmd-S": "save",
    "Cmd-F": "find",
    "Cmd-G": "findNext",
    "Shift-Cmd-G": "findPrev",
    "Cmd-Alt-F": "replace",
    "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess",
    "Cmd-]": "indentMore",
    "Cmd-Backspace": "delWrappedLineLeft",
    "Cmd-Delete": "delWrappedLineRight",
    "Cmd-U": "undoSelection",
    "Shift-Cmd-U": "redoSelection",
    "Ctrl-Up": "goDocStart",
    "Ctrl-Down": "goDocEnd",
    fallthrough: ["basic", "emacsy"],
  };
  hq["default"] = k9 ? hq.macDefault : hq.pcDefault;
  function la(f) {
    var h = f.split(/-(?!$)/);
    f = h[h.length - 1];
    var a, b, g, c;
    for (var d = 0; d < h.length - 1; d++) {
      var e = h[d];
      if (/^(cmd|meta|m)$/i.test(e)) {
        c = true;
      } else {
        if (/^a(lt)?$/i.test(e)) {
          a = true;
        } else {
          if (/^(c|ctrl|control)$/i.test(e)) {
            b = true;
          } else {
            if (/^s(hift)?$/i.test(e)) {
              g = true;
            } else {
              throw new Error("Unrecognized modifier name: " + e);
            }
          }
        }
      }
    }
    if (a) {
      f = "Alt-" + f;
    }
    if (b) {
      f = "Ctrl-" + f;
    }
    if (c) {
      f = "Cmd-" + f;
    }
    if (g) {
      f = "Shift-" + f;
    }
    return f;
  }
  function l2(c) {
    var j = {};
    for (var d in c) {
      if (c.hasOwnProperty(d)) {
        var b = c[d];
        if (/^(name|fallthrough|(de|at)tach)$/.test(d)) {
          continue;
        }
        if (b == "...") {
          delete c[d];
          continue;
        }
        var a = mO(d.split(" "), la);
        for (var e = 0; e < a.length; e++) {
          var g = void 0,
            h = void 0;
          if (e == a.length - 1) {
            h = a.join(" ");
            g = b;
          } else {
            h = a.slice(0, e + 1).join(" ");
            g = "...";
          }
          var f = j[h];
          if (!f) {
            j[h] = g;
          } else {
            if (f != g) {
              throw new Error("Inconsistent bindings for " + h);
            }
          }
        }
        delete c[d];
      }
    }
    for (var k in j) {
      c[k] = j[k];
    }
    return c;
  }
  function kN(d, c, a, e) {
    c = g6(c);
    var b = c.call ? c.call(d, e) : c[d];
    if (b === false) {
      return "nothing";
    }
    if (b === "...") {
      return "multi";
    }
    if (b != null && a(b)) {
      return "handled";
    }
    if (c.fallthrough) {
      if (Object.prototype.toString.call(c.fallthrough) != "[object Array]") {
        return kN(d, c.fallthrough, a, e);
      }
      for (var f = 0; f < c.fallthrough.length; f++) {
        var g = kN(d, c.fallthrough[f], a, e);
        if (g) {
          return g;
        }
      }
    }
  }
  function jm(b) {
    var a = typeof b == "string" ? b : iQ[b.keyCode];
    return a == "Ctrl" || a == "Alt" || a == "Shift" || a == "Mod";
  }
  function iw(d, b) {
    if (iL && d.keyCode == 34 && d["char"]) {
      return false;
    }
    var c = iQ[d.keyCode],
      a = c;
    if (a == null || d.altGraphKey) {
      return false;
    }
    if (d.altKey && c != "Alt") {
      a = "Alt-" + a;
    }
    if ((mW ? d.metaKey : d.ctrlKey) && c != "Ctrl") {
      a = "Ctrl-" + a;
    }
    if ((mW ? d.ctrlKey : d.metaKey) && c != "Cmd") {
      a = "Cmd-" + a;
    }
    if (!b && d.shiftKey && c != "Shift") {
      a = "Shift-" + a;
    }
    return a;
  }
  function g6(a) {
    return typeof a == "string" ? hq[a] : a;
  }
  function hL(g, a) {
    var f = g.doc.sel.ranges,
      c = [];
    for (var d = 0; d < f.length; d++) {
      var e = a(f[d]);
      while (c.length && kI(e.from, ji(c).to) <= 0) {
        var b = c.pop();
        if (kI(b.from, e.from) < 0) {
          e.from = b.from;
          break;
        }
      }
      c.push(e);
    }
    lI(g, function () {
      for (var h = c.length - 1; h >= 0; h--) {
        gT(g.doc, "", c[h].from, c[h].to, "+delete");
      }
      jl(g);
    });
  }
  var jg = {
    selectAll: nh,
    singleSelection: function (a) {
      return a.setSelection(a.getCursor("anchor"), a.getCursor("head"), ln);
    },
    killLine: function (a) {
      return hL(a, function (b) {
        if (b.empty()) {
          var c = hm(a.doc, b.head.line).text.length;
          if (b.head.ch == c && b.head.line < a.lastLine()) {
            return { from: b.head, to: lA(b.head.line + 1, 0) };
          } else {
            return { from: b.head, to: lA(b.head.line, c) };
          }
        } else {
          return { from: b.from(), to: b.to() };
        }
      });
    },
    deleteLine: function (a) {
      return hL(a, function (b) {
        return {
          from: lA(b.from().line, 0),
          to: i3(a.doc, lA(b.to().line + 1, 0)),
        };
      });
    },
    delLineLeft: function (a) {
      return hL(a, function (b) {
        return { from: lA(b.from().line, 0), to: b.from() };
      });
    },
    delWrappedLineLeft: function (a) {
      return hL(a, function (d) {
        var b = a.charCoords(d.head, "div").top + 5;
        var c = a.coordsChar({ left: 0, top: b }, "div");
        return { from: c, to: d.from() };
      });
    },
    delWrappedLineRight: function (a) {
      return hL(a, function (d) {
        var b = a.charCoords(d.head, "div").top + 5;
        var c = a.coordsChar(
          { left: a.display.lineDiv.offsetWidth + 100, top: b },
          "div"
        );
        return { from: d.from(), to: c };
      });
    },
    undo: function (a) {
      return a.undo();
    },
    redo: function (a) {
      return a.redo();
    },
    undoSelection: function (a) {
      return a.undoSelection();
    },
    redoSelection: function (a) {
      return a.redoSelection();
    },
    goDocStart: function (a) {
      return a.extendSelection(lA(a.firstLine(), 0));
    },
    goDocEnd: function (a) {
      return a.extendSelection(lA(a.lastLine()));
    },
    goLineStart: function (a) {
      return a.extendSelectionsBy(
        function (b) {
          return lp(a, b.head.line);
        },
        { origin: "+move", bias: 1 }
      );
    },
    goLineStartSmart: function (a) {
      return a.extendSelectionsBy(
        function (b) {
          return kq(a, b.head);
        },
        { origin: "+move", bias: 1 }
      );
    },
    goLineEnd: function (a) {
      return a.extendSelectionsBy(
        function (b) {
          return jU(a, b.head.line);
        },
        { origin: "+move", bias: -1 }
      );
    },
    goLineRight: function (a) {
      return a.extendSelectionsBy(function (c) {
        var b = a.charCoords(c.head, "div").top + 5;
        return a.coordsChar(
          { left: a.display.lineDiv.offsetWidth + 100, top: b },
          "div"
        );
      }, m4);
    },
    goLineLeft: function (a) {
      return a.extendSelectionsBy(function (c) {
        var b = a.charCoords(c.head, "div").top + 5;
        return a.coordsChar({ left: 0, top: b }, "div");
      }, m4);
    },
    goLineLeftSmart: function (a) {
      return a.extendSelectionsBy(function (d) {
        var c = a.charCoords(d.head, "div").top + 5;
        var b = a.coordsChar({ left: 0, top: c }, "div");
        if (b.ch < a.getLine(b.line).search(/\S/)) {
          return kq(a, d.head);
        }
        return b;
      }, m4);
    },
    goLineUp: function (a) {
      return a.moveV(-1, "line");
    },
    goLineDown: function (a) {
      return a.moveV(1, "line");
    },
    goPageUp: function (a) {
      return a.moveV(-1, "page");
    },
    goPageDown: function (a) {
      return a.moveV(1, "page");
    },
    goCharLeft: function (a) {
      return a.moveH(-1, "char");
    },
    goCharRight: function (a) {
      return a.moveH(1, "char");
    },
    goColumnLeft: function (a) {
      return a.moveH(-1, "column");
    },
    goColumnRight: function (a) {
      return a.moveH(1, "column");
    },
    goWordLeft: function (a) {
      return a.moveH(-1, "word");
    },
    goGroupRight: function (a) {
      return a.moveH(1, "group");
    },
    goGroupLeft: function (a) {
      return a.moveH(-1, "group");
    },
    goWordRight: function (a) {
      return a.moveH(1, "word");
    },
    delCharBefore: function (a) {
      return a.deleteH(-1, "char");
    },
    delCharAfter: function (a) {
      return a.deleteH(1, "char");
    },
    delWordBefore: function (a) {
      return a.deleteH(-1, "word");
    },
    delWordAfter: function (a) {
      return a.deleteH(1, "word");
    },
    delGroupBefore: function (a) {
      return a.deleteH(-1, "group");
    },
    delGroupAfter: function (a) {
      return a.deleteH(1, "group");
    },
    indentAuto: function (a) {
      return a.indentSelection("smart");
    },
    indentMore: function (a) {
      return a.indentSelection("add");
    },
    indentLess: function (a) {
      return a.indentSelection("subtract");
    },
    insertTab: function (a) {
      return a.replaceSelection("\t");
    },
    insertSoftTab: function (g) {
      var e = [],
        f = g.listSelections(),
        b = g.options.tabSize;
      for (var c = 0; c < f.length; c++) {
        var a = f[c].from();
        var d = mV(g.getLine(a.line), a.ch, b);
        e.push(j7(b - (d % b)));
      }
      g.replaceSelections(e);
    },
    defaultTab: function (a) {
      if (a.somethingSelected()) {
        a.indentSelection("add");
      } else {
        a.execCommand("insertTab");
      }
    },
    transposeChars: function (a) {
      return lI(a, function () {
        var e = a.listSelections(),
          f = [];
        for (var d = 0; d < e.length; d++) {
          if (!e[d].empty()) {
            continue;
          }
          var b = e[d].head,
            g = hm(a.doc, b.line).text;
          if (g) {
            if (b.ch == g.length) {
              b = new lA(b.line, b.ch - 1);
            }
            if (b.ch > 0) {
              b = new lA(b.line, b.ch + 1);
              a.replaceRange(
                g.charAt(b.ch - 1) + g.charAt(b.ch - 2),
                lA(b.line, b.ch - 2),
                b,
                "+transpose"
              );
            } else {
              if (b.line > a.doc.first) {
                var c = hm(a.doc, b.line - 1).text;
                if (c) {
                  b = new lA(b.line, 1);
                  a.replaceRange(
                    g.charAt(0) +
                      a.doc.lineSeparator() +
                      c.charAt(c.length - 1),
                    lA(b.line - 1, c.length - 1),
                    b,
                    "+transpose"
                  );
                }
              }
            }
          }
          f.push(new lz(b, b));
        }
        a.setSelections(f);
      });
    },
    newlineAndIndent: function (a) {
      return lI(a, function () {
        var d = a.listSelections();
        for (var c = d.length - 1; c >= 0; c--) {
          a.replaceRange(
            a.doc.lineSeparator(),
            d[c].anchor,
            d[c].head,
            "+input"
          );
        }
        d = a.listSelections();
        for (var b = 0; b < d.length; b++) {
          a.indentLine(d[b].from().line, null, true);
        }
        jl(a);
      });
    },
    openLine: function (a) {
      return a.replaceSelection("\n", "start");
    },
    toggleOverwrite: function (a) {
      return a.toggleOverwrite();
    },
  };
  function lp(f, b) {
    var e = hm(f.doc, b);
    var a = jV(e);
    if (a != e) {
      b = m5(a);
    }
    var d = ld(a);
    var c = !d ? 0 : d[0].level % 2 ? lj(a) : md(a);
    return lA(b, c);
  }
  function jU(e, a) {
    var f,
      d = hm(e.doc, a);
    while ((f = jy(d))) {
      d = f.find(1, true).line;
      a = null;
    }
    var c = ld(d);
    var b = !c ? d.text.length : c[0].level % 2 ? md(d) : lj(d);
    return lA(a == null ? m5(d) : a, b);
  }
  function kq(g, a) {
    var b = lp(g, a.line);
    var f = hm(g.doc, b.line);
    var e = ld(f);
    if (!e || e[0].level == 0) {
      var c = Math.max(0, f.text.search(/\S/));
      var d = a.line == b.line && a.ch <= c && a.ch;
      return lA(b.line, d ? 0 : c);
    }
    return b;
  }
  function he(e, a, c) {
    if (typeof a == "string") {
      a = jg[a];
      if (!a) {
        return false;
      }
    }
    e.display.input.ensurePolled();
    var b = e.display.shift,
      d = false;
    try {
      if (e.isReadOnly()) {
        e.state.suppressEdits = true;
      }
      if (c) {
        e.display.shift = false;
      }
      d = a(e) != kU;
    } finally {
      e.display.shift = b;
      e.state.suppressEdits = false;
    }
    return d;
  }
  function iy(d, c, a) {
    for (var b = 0; b < d.state.keyMaps.length; b++) {
      var e = kN(c, d.state.keyMaps[b], a, d);
      if (e) {
        return e;
      }
    }
    return (
      (d.options.extraKeys && kN(c, d.options.extraKeys, a, d)) ||
      kN(c, d.options.keyMap, a, d)
    );
  }
  var j9 = new hA();
  function mr(f, d, a, b) {
    var e = f.state.keySeq;
    if (e) {
      if (jm(d)) {
        return "handled";
      }
      j9.set(50, function () {
        if (f.state.keySeq == e) {
          f.state.keySeq = null;
          f.display.input.reset();
        }
      });
      d = e + " " + d;
    }
    var c = iy(f, d, b);
    if (c == "multi") {
      f.state.keySeq = d;
    }
    if (c == "handled") {
      nw(f, "keyHandled", f, d, a);
    }
    if (c == "handled" || c == "multi") {
      l7(a);
      ku(f);
    }
    if (e && !c && /\'$/.test(d)) {
      l7(a);
      return true;
    }
    return !!c;
  }
  function iM(a, b) {
    var c = iw(b, true);
    if (!c) {
      return false;
    }
    if (b.shiftKey && !a.state.keySeq) {
      return (
        mr(a, "Shift-" + c, b, function (d) {
          return he(a, d, true);
        }) ||
        mr(a, c, b, function (d) {
          if (typeof d == "string" ? /^go[A-Z]/.test(d) : d.motion) {
            return he(a, d);
          }
        })
      );
    } else {
      return mr(a, c, b, function (d) {
        return he(a, d);
      });
    }
  }
  function h9(a, b, c) {
    return mr(a, "'" + c + "'", b, function (d) {
      return he(a, d, true);
    });
  }
  var iW = null;
  function kp(b) {
    var a = this;
    a.curOp.focus = j3();
    if (nT(a, b)) {
      return;
    }
    if (kj && kH < 11 && b.keyCode == 27) {
      b.returnValue = false;
    }
    var d = b.keyCode;
    a.display.shift = d == 16 || b.shiftKey;
    var c = iM(a, b);
    if (iL) {
      iW = c ? d : null;
      if (!c && d == 88 && !jz && (k9 ? b.metaKey : b.ctrlKey)) {
        a.replaceSelection("", null, "cut");
      }
    }
    if (
      d == 18 &&
      !/\bCodeMirror-crosshair\b/.test(a.display.lineDiv.className)
    ) {
      mY(a);
    }
  }
  function mY(c) {
    var b = c.display.lineDiv;
    h6(b, "CodeMirror-crosshair");
    function a(d) {
      if (d.keyCode == 18 || !d.altKey) {
        kS(b, "CodeMirror-crosshair");
        ih(document, "keyup", a);
        ih(document, "mouseover", a);
      }
    }
    nY(document, "keyup", a);
    nY(document, "mouseover", a);
  }
  function me(a) {
    if (a.keyCode == 16) {
      this.doc.sel.shift = false;
    }
    nT(this, a);
  }
  function mw(a) {
    var c = this;
    if (
      my(c.display, a) ||
      nT(c, a) ||
      (a.ctrlKey && !a.altKey) ||
      (k9 && a.metaKey)
    ) {
      return;
    }
    var b = a.keyCode,
      e = a.charCode;
    if (iL && b == iW) {
      iW = null;
      l7(a);
      return;
    }
    if (iL && (!a.which || a.which < 10) && iM(c, a)) {
      return;
    }
    var d = String.fromCharCode(e == null ? b : e);
    if (d == "\x08") {
      return;
    }
    if (h9(c, a, d)) {
      return;
    }
    c.display.input.onKeyPress(a);
  }
  function jB(c) {
    var b = this,
      d = b.display;
    if (nT(b, c) || (d.activeTouch && d.input.supportsTouch())) {
      return;
    }
    d.input.ensurePolled();
    d.shift = c.shiftKey;
    if (my(d, c)) {
      if (!mU) {
        d.scroller.draggable = false;
        setTimeout(function () {
          return (d.scroller.draggable = true);
        }, 100);
      }
      return;
    }
    if (kE(b, c)) {
      return;
    }
    var a = kg(b, c);
    window.focus();
    switch (hi(c)) {
      case 1:
        if (b.state.selectingText) {
          b.state.selectingText(c);
        } else {
          if (a) {
            mK(b, c, a);
          } else {
            if (mb(c) == d.scroller) {
              l7(c);
            }
          }
        }
        break;
      case 2:
        if (mU) {
          b.state.lastMiddleDown = +new Date();
        }
        if (a) {
          g5(b.doc, a);
        }
        setTimeout(function () {
          return d.input.focus();
        }, 20);
        l7(c);
        break;
      case 3:
        if (hT) {
          mI(b, c);
        } else {
          nk(b);
        }
        break;
    }
  }
  var i1;
  var jr;
  function mK(h, b, a) {
    if (kj) {
      setTimeout(mD(kh, h), 0);
    } else {
      h.curOp.focus = j3();
    }
    var g = +new Date(),
      d;
    if (jr && jr.time > g - 400 && kI(jr.pos, a) == 0) {
      d = "triple";
    } else {
      if (i1 && i1.time > g - 400 && kI(i1.pos, a) == 0) {
        d = "double";
        jr = { time: g, pos: a };
      } else {
        d = "single";
        i1 = { time: g, pos: a };
      }
    }
    var c = h.doc.sel,
      f = k9 ? b.metaKey : b.ctrlKey,
      e;
    if (
      h.options.dragDrop &&
      kr &&
      !h.isReadOnly() &&
      d == "single" &&
      (e = c.contains(a)) > -1 &&
      (kI((e = c.ranges[e]).from(), a) < 0 || a.xRel > 0) &&
      (kI(e.to(), a) > 0 || a.xRel < 0)
    ) {
      gR(h, b, a, f);
    } else {
      kB(h, b, a, d, f);
    }
  }
  function gR(f, b, a, g) {
    var c = f.display,
      e = +new Date();
    var d = mQ(f, function (h) {
      if (mU) {
        c.scroller.draggable = false;
      }
      f.state.draggingText = false;
      ih(document, "mouseup", d);
      ih(c.scroller, "drop", d);
      if (
        Math.abs(b.clientX - h.clientX) + Math.abs(b.clientY - h.clientY) <
        10
      ) {
        l7(h);
        if (!g && +new Date() - 200 < e) {
          g5(f.doc, a);
        }
        if (mU || (kj && kH == 9)) {
          setTimeout(function () {
            document.body.focus();
            c.input.focus();
          }, 20);
        } else {
          c.input.focus();
        }
      }
    });
    if (mU) {
      c.scroller.draggable = true;
    }
    f.state.draggingText = d;
    d.copy = k9 ? b.altKey : b.ctrlKey;
    if (c.scroller.dragDrop) {
      c.scroller.dragDrop();
    }
    nY(document, "mouseup", d);
    nY(c.scroller, "drop", d);
  }
  function kB(m, t, n, p, k) {
    var a = m.display,
      r = m.doc;
    l7(t);
    var o,
      s,
      l = r.sel,
      q = l.ranges;
    if (k && !t.shiftKey) {
      s = r.sel.contains(n);
      if (s > -1) {
        o = q[s];
      } else {
        o = new lz(n, n);
      }
    } else {
      o = r.sel.primary();
      s = r.sel.primIndex;
    }
    if (i6 ? t.shiftKey && t.metaKey : t.altKey) {
      p = "rect";
      if (!k) {
        o = new lz(n, n);
      }
      n = kg(m, t, true, true);
      s = -1;
    } else {
      if (p == "double") {
        var v = m.findWordAt(n);
        if (m.display.shift || r.extend) {
          o = im(r, o, v.anchor, v.head);
        } else {
          o = v;
        }
      } else {
        if (p == "triple") {
          var g = new lz(lA(n.line, 0), i3(r, lA(n.line + 1, 0)));
          if (m.display.shift || r.extend) {
            o = im(r, o, g.anchor, g.head);
          } else {
            o = g;
          }
        } else {
          o = im(r, o, n);
        }
      }
    }
    if (!k) {
      s = 0;
      mL(r, new g0([o], 0), l9);
      l = r.sel;
    } else {
      if (s == -1) {
        s = q.length;
        mL(r, mA(q.concat([o]), s), { scroll: false, origin: "*mouse" });
      } else {
        if (q.length > 1 && q[s].empty() && p == "single" && !t.shiftKey) {
          mL(r, mA(q.slice(0, s).concat(q.slice(s + 1)), 0), {
            scroll: false,
            origin: "*mouse",
          });
          l = r.sel;
        } else {
          k2(r, s, o, l9);
        }
      }
    }
    var b = n;
    function c(B) {
      if (kI(b, B) == 0) {
        return;
      }
      b = B;
      if (p == "rect") {
        var J = [],
          E = m.options.tabSize;
        var K = mV(hm(r, n.line).text, n.ch, E);
        var x = mV(hm(r, B.line).text, B.ch, E);
        var I = Math.min(K, x),
          z = Math.max(K, x);
        for (
          var w = Math.min(n.line, B.line),
            G = Math.min(m.lastLine(), Math.max(n.line, B.line));
          w <= G;
          w++
        ) {
          var y = hm(r, w).text,
            H = jM(y, I, E);
          if (I == z) {
            J.push(new lz(lA(w, H), lA(w, H)));
          } else {
            if (y.length > H) {
              J.push(new lz(lA(w, H), lA(w, jM(y, z, E))));
            }
          }
        }
        if (!J.length) {
          J.push(new lz(n, n));
        }
        mL(r, mA(l.ranges.slice(0, s).concat(J), s), {
          origin: "*mouse",
          scroll: false,
        });
        m.scrollIntoView(B);
      } else {
        var D = o;
        var F = D.anchor,
          C = B;
        if (p != "single") {
          var A;
          if (p == "double") {
            A = m.findWordAt(B);
          } else {
            A = new lz(lA(B.line, 0), i3(r, lA(B.line + 1, 0)));
          }
          if (kI(A.anchor, F) > 0) {
            C = A.head;
            F = m3(D.from(), A.anchor);
          } else {
            C = A.anchor;
            F = nD(D.to(), A.head);
          }
        }
        var L = l.ranges.slice(0);
        L[s] = new lz(i3(r, F), C);
        mL(r, mA(L, s), l9);
      }
    }
    var e = a.wrapper.getBoundingClientRect();
    var j = 0;
    function u(x) {
      var z = ++j;
      var A = kg(m, x, true, p == "rect");
      if (!A) {
        return;
      }
      if (kI(A, b) != 0) {
        m.curOp.focus = j3();
        c(A);
        var w = lc(a, r);
        if (A.line >= w.to || A.line < w.from) {
          setTimeout(
            mQ(m, function () {
              if (j == z) {
                u(x);
              }
            }),
            150
          );
        }
      } else {
        var y = x.clientY < e.top ? -20 : x.clientY > e.bottom ? 20 : 0;
        if (y) {
          setTimeout(
            mQ(m, function () {
              if (j != z) {
                return;
              }
              a.scroller.scrollTop += y;
              u(x);
            }),
            50
          );
        }
      }
    }
    function f(w) {
      m.state.selectingText = false;
      j = Infinity;
      l7(w);
      a.input.focus();
      ih(document, "mousemove", d);
      ih(document, "mouseup", h);
      r.history.lastSelOrigin = null;
    }
    var d = mQ(m, function (w) {
      if (!hi(w)) {
        f(w);
      } else {
        u(w);
      }
    });
    var h = mQ(m, f);
    m.state.selectingText = h;
    nY(document, "mousemove", d);
    nY(document, "mouseup", h);
  }
  function hC(b, f, d, c) {
    var l, m;
    try {
      l = f.clientX;
      m = f.clientY;
    } catch (f) {
      return false;
    }
    if (l >= Math.floor(b.display.gutters.getBoundingClientRect().right)) {
      return false;
    }
    if (c) {
      l7(f);
    }
    var e = b.display;
    var g = e.lineDiv.getBoundingClientRect();
    if (m > g.bottom || !iI(b, d)) {
      return na(f);
    }
    m -= g.top - e.viewOffset;
    for (var j = 0; j < b.options.gutters.length; ++j) {
      var h = e.gutters.childNodes[j];
      if (h && h.getBoundingClientRect().right >= l) {
        var a = nj(b.doc, m);
        var k = b.options.gutters[j];
        n9(b, d, b, a, k, f);
        return na(f);
      }
    }
  }
  function kE(a, b) {
    return hC(a, b, "gutterClick", true);
  }
  function mI(a, b) {
    if (my(a.display, b) || jh(a, b)) {
      return;
    }
    if (nT(a, b, "contextmenu")) {
      return;
    }
    a.display.input.onContextMenu(b);
  }
  function jh(a, b) {
    if (!iI(a, "gutterContextMenu")) {
      return false;
    }
    return hC(a, b, "gutterContextMenu", false);
  }
  function lC(a) {
    a.display.wrapper.className =
      a.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
      a.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
    nm(a);
  }
  var kQ = {
    toString: function () {
      return "CodeMirror.Init";
    },
  };
  var hB = {};
  var mk = {};
  function i0(a) {
    var b = a.optionHandlers;
    function c(g, d, e, f) {
      a.defaults[g] = d;
      if (e) {
        b[g] = f
          ? function (h, j, k) {
              if (k != kQ) {
                e(h, j, k);
              }
            }
          : e;
      }
    }
    a.defineOption = c;
    a.Init = kQ;
    c(
      "value",
      "",
      function (e, d) {
        return e.setValue(d);
      },
      true
    );
    c(
      "mode",
      null,
      function (e, d) {
        e.doc.modeOption = d;
        ly(e);
      },
      true
    );
    c("indentUnit", 2, ly, true);
    c("indentWithTabs", false);
    c("smartIndent", true);
    c(
      "tabSize",
      4,
      function (d) {
        h1(d);
        nm(d);
        np(d);
      },
      true
    );
    c("lineSeparator", null, function (h, e) {
      h.doc.lineSep = e;
      if (!e) {
        return;
      }
      var f = [],
        d = h.doc.first;
      h.doc.iter(function (l) {
        for (var j = 0; ; ) {
          var k = l.text.indexOf(e, j);
          if (k == -1) {
            break;
          }
          j = k + e.length;
          f.push(lA(d, k));
        }
        d++;
      });
      for (var g = f.length - 1; g >= 0; g--) {
        gT(h.doc, e, f[g], lA(f[g].line, f[g].ch + e.length));
      }
    });
    c(
      "specialChars",
      /[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,
      function (f, d, e) {
        f.state.specialChars = new RegExp(
          d.source + (d.test("\t") ? "" : "|\t"),
          "g"
        );
        if (e != kQ) {
          f.refresh();
        }
      }
    );
    c(
      "specialCharPlaceholder",
      hn,
      function (d) {
        return d.refresh();
      },
      true
    );
    c("electricChars", true);
    c(
      "inputStyle",
      ie ? "contenteditable" : "textarea",
      function () {
        throw new Error(
          "inputStyle can not (yet) be changed in a running editor"
        );
      },
      true
    );
    c(
      "spellcheck",
      false,
      function (e, d) {
        return (e.getInputField().spellcheck = d);
      },
      true
    );
    c("rtlMoveVisually", !nW);
    c("wholeLineUpdateBefore", true);
    c(
      "theme",
      "default",
      function (d) {
        lC(d);
        k1(d);
      },
      true
    );
    c("keyMap", "default", function (h, d, g) {
      var f = g6(d);
      var e = g != kQ && g6(g);
      if (e && e.detach) {
        e.detach(h, f);
      }
      if (f.attach) {
        f.attach(h, e || null);
      }
    });
    c("extraKeys", null);
    c("lineWrapping", false, i2, true);
    c(
      "gutters",
      [],
      function (d) {
        kK(d.options);
        k1(d);
      },
      true
    );
    c(
      "fixedGutter",
      true,
      function (e, d) {
        e.display.gutters.style.left = d ? lw(e.display) + "px" : "0";
        e.refresh();
      },
      true
    );
    c(
      "coverGutterNextToScrollbar",
      false,
      function (d) {
        return hK(d);
      },
      true
    );
    c(
      "scrollbarStyle",
      "native",
      function (d) {
        oa(d);
        hK(d);
        d.display.scrollbars.setScrollTop(d.doc.scrollTop);
        d.display.scrollbars.setScrollLeft(d.doc.scrollLeft);
      },
      true
    );
    c(
      "lineNumbers",
      false,
      function (d) {
        kK(d.options);
        k1(d);
      },
      true
    );
    c("firstLineNumber", 1, k1, true);
    c(
      "lineNumberFormatter",
      function (d) {
        return d;
      },
      k1,
      true
    );
    c("showCursorWhenSelecting", false, nu, true);
    c("resetSelectionOnContextMenu", true);
    c("lineWiseCopyCut", true);
    c("readOnly", false, function (e, d) {
      if (d == "nocursor") {
        nL(e);
        e.display.input.blur();
        e.display.disabled = true;
      } else {
        e.display.disabled = false;
      }
      e.display.input.readOnlyChanged(d);
    });
    c(
      "disableInput",
      false,
      function (e, d) {
        if (!d) {
          e.display.input.reset();
        }
      },
      true
    );
    c("dragDrop", true, g2);
    c("allowDropFileTypes", null);
    c("cursorBlinkRate", 530);
    c("cursorScrollMargin", 0);
    c("cursorHeight", 1, nu, true);
    c("singleCursorHeightPerLine", true, nu, true);
    c("workTime", 100);
    c("workDelay", 100);
    c("flattenSpans", true, h1, true);
    c("addModeClass", false, h1, true);
    c("pollInterval", 100);
    c("undoDepth", 200, function (e, d) {
      return (e.doc.history.undoDepth = d);
    });
    c("historyEventDelay", 1250);
    c(
      "viewportMargin",
      10,
      function (d) {
        return d.refresh();
      },
      true
    );
    c("maxHighlightLength", 10000, h1, true);
    c("moveInputWithCursor", true, function (e, d) {
      if (!d) {
        e.display.input.resetPosition();
      }
    });
    c("tabindex", null, function (e, d) {
      return (e.display.input.getField().tabIndex = d || "");
    });
    c("autofocus", null);
  }
  function k1(a) {
    io(a);
    np(a);
    setTimeout(function () {
      return ja(a);
    }, 20);
  }
  function g2(f, b, e) {
    var a = e && e != kQ;
    if (!b != !a) {
      var d = f.display.dragFunctions;
      var c = b ? nY : ih;
      c(f.display.scroller, "dragstart", d.start);
      c(f.display.scroller, "dragenter", d.enter);
      c(f.display.scroller, "dragover", d.over);
      c(f.display.scroller, "dragleave", d.leave);
      c(f.display.scroller, "drop", d.drop);
    }
  }
  function i2(a) {
    if (a.options.lineWrapping) {
      h6(a.display.wrapper, "CodeMirror-wrap");
      a.display.sizer.style.minWidth = "";
      a.display.sizerWidth = null;
    } else {
      kS(a.display.wrapper, "CodeMirror-wrap");
      kY(a);
    }
    lr(a);
    np(a);
    nm(a);
    setTimeout(function () {
      return hK(a);
    }, 100);
  }
  function hx(g, e) {
    var h = this;
    if (!(this instanceof hx)) {
      return new hx(g, e);
    }
    this.options = e = e ? n0(e) : {};
    n0(hB, e, false);
    kK(e);
    var a = e.value;
    if (typeof a == "string") {
      a = new mT(a, e.mode, null, e.lineSeparator);
    }
    this.doc = a;
    var f = new hx.inputStyles[e.inputStyle](this);
    var b = (this.display = new iU(g, a, f));
    b.wrapper.CodeMirror = this;
    io(this);
    lC(this);
    if (e.lineWrapping) {
      this.display.wrapper.className += " CodeMirror-wrap";
    }
    if (e.autofocus && !ie) {
      b.input.focus();
    }
    oa(this);
    this.state = {
      keyMaps: [],
      overlays: [],
      modeGen: 0,
      overwrite: false,
      delayingBlurEvent: false,
      focused: false,
      suppressEdits: false,
      pasteIncoming: false,
      cutIncoming: false,
      selectingText: false,
      draggingText: false,
      highlight: new hA(),
      keySeq: null,
      specialChars: null,
    };
    if (kj && kH < 11) {
      setTimeout(function () {
        return h.display.input.reset(true);
      }, 20);
    }
    hf(this);
    l8();
    lY(this);
    this.curOp.forceUpdate = true;
    ip(this, a);
    if ((e.autofocus && !ie) || this.hasFocus()) {
      setTimeout(mD(mm, this), 20);
    } else {
      nL(this);
    }
    for (var c in mk) {
      if (mk.hasOwnProperty(c)) {
        mk[c](h, e[c], kQ);
      }
    }
    iE(this);
    if (e.finishInit) {
      e.finishInit(this);
    }
    for (var d = 0; d < a9.length; ++d) {
      a9[d](h);
    }
    ng(this);
    if (
      mU &&
      e.lineWrapping &&
      getComputedStyle(b.lineDiv).textRendering == "optimizelegibility"
    ) {
      b.lineDiv.style.textRendering = "auto";
    }
  }
  hx.defaults = hB;
  hx.optionHandlers = mk;
  function hf(h) {
    var c = h.display;
    nY(c.scroller, "mousedown", mQ(h, jB));
    if (kj && kH < 11) {
      nY(
        c.scroller,
        "dblclick",
        mQ(h, function (k) {
          if (nT(h, k)) {
            return;
          }
          var j = kg(h, k);
          if (!j || kE(h, k) || my(h.display, k)) {
            return;
          }
          l7(k);
          var l = h.findWordAt(j);
          g5(h.doc, l.anchor, l.head);
        })
      );
    } else {
      nY(c.scroller, "dblclick", function (j) {
        return nT(h, j) || l7(j);
      });
    }
    if (!hT) {
      nY(c.scroller, "contextmenu", function (j) {
        return mI(h, j);
      });
    }
    var a,
      f = { end: 0 };
    function b() {
      if (c.activeTouch) {
        a = setTimeout(function () {
          return (c.activeTouch = null);
        }, 1000);
        f = c.activeTouch;
        f.end = +new Date();
      }
    }
    function e(k) {
      if (k.touches.length != 1) {
        return false;
      }
      var j = k.touches[0];
      return j.radiusX <= 1 && j.radiusY <= 1;
    }
    function g(j, m) {
      if (m.left == null) {
        return true;
      }
      var k = m.left - j.left,
        l = m.top - j.top;
      return k * k + l * l > 20 * 20;
    }
    nY(c.scroller, "touchstart", function (j) {
      if (!nT(h, j) && !e(j)) {
        c.input.ensurePolled();
        clearTimeout(a);
        var k = +new Date();
        c.activeTouch = {
          start: k,
          moved: false,
          prev: k - f.end <= 300 ? f : null,
        };
        if (j.touches.length == 1) {
          c.activeTouch.left = j.touches[0].pageX;
          c.activeTouch.top = j.touches[0].pageY;
        }
      }
    });
    nY(c.scroller, "touchmove", function () {
      if (c.activeTouch) {
        c.activeTouch.moved = true;
      }
    });
    nY(c.scroller, "touchend", function (l) {
      var j = c.activeTouch;
      if (
        j &&
        !my(c, l) &&
        j.left != null &&
        !j.moved &&
        new Date() - j.start < 300
      ) {
        var k = h.coordsChar(c.activeTouch, "page"),
          m;
        if (!j.prev || g(j, j.prev)) {
          m = new lz(k, k);
        } else {
          if (!j.prev.prev || g(j, j.prev.prev)) {
            m = h.findWordAt(k);
          } else {
            m = new lz(lA(k.line, 0), i3(h.doc, lA(k.line + 1, 0)));
          }
        }
        h.setSelection(m.anchor, m.head);
        h.focus();
        l7(l);
      }
      b();
    });
    nY(c.scroller, "touchcancel", b);
    nY(c.scroller, "scroll", function () {
      if (c.scroller.clientHeight) {
        l4(h, c.scroller.scrollTop);
        nq(h, c.scroller.scrollLeft, true);
        n9(h, "scroll", h);
      }
    });
    nY(c.scroller, "mousewheel", function (j) {
      return k8(h, j);
    });
    nY(c.scroller, "DOMMouseScroll", function (j) {
      return k8(h, j);
    });
    nY(c.wrapper, "scroll", function () {
      return (c.wrapper.scrollTop = c.wrapper.scrollLeft = 0);
    });
    c.dragFunctions = {
      enter: function (j) {
        if (!nT(h, j)) {
          jK(j);
        }
      },
      over: function (j) {
        if (!nT(h, j)) {
          hD(h, j);
          jK(j);
        }
      },
      start: function (j) {
        return l0(h, j);
      },
      drop: mQ(h, l5),
      leave: function (j) {
        if (!nT(h, j)) {
          jx(h);
        }
      },
    };
    var d = c.input.getField();
    nY(d, "keyup", function (j) {
      return me.call(h, j);
    });
    nY(d, "keydown", mQ(h, kp));
    nY(d, "keypress", mQ(h, mw));
    nY(d, "focus", function (j) {
      return mm(h, j);
    });
    nY(d, "blur", function (j) {
      return nL(h, j);
    });
  }
  var a9 = [];
  hx.defineInitHook = function (a) {
    return a9.push(a);
  };
  function nz(r, l, a, n) {
    var b = r.doc,
      o;
    if (a == null) {
      a = "add";
    }
    if (a == "smart") {
      if (!b.mode.indent) {
        a = "prev";
      } else {
        o = kM(r, l);
      }
    }
    var g = r.options.tabSize;
    var q = hm(b, l),
      h = mV(q.text, null, g);
    if (q.stateAfter) {
      q.stateAfter = null;
    }
    var p = q.text.match(/^\s*/)[0],
      d;
    if (!n && !/\S/.test(q.text)) {
      d = 0;
      a = "not";
    } else {
      if (a == "smart") {
        d = b.mode.indent(o, q.text.slice(p.length), q.text);
        if (d == kU || d > 150) {
          if (!n) {
            return;
          }
          a = "prev";
        }
      }
    }
    if (a == "prev") {
      if (l > b.first) {
        d = mV(hm(b, l - 1).text, null, g);
      } else {
        d = 0;
      }
    } else {
      if (a == "add") {
        d = h + r.options.indentUnit;
      } else {
        if (a == "subtract") {
          d = h - r.options.indentUnit;
        } else {
          if (typeof a == "number") {
            d = h + a;
          }
        }
      }
    }
    d = Math.max(0, d);
    var c = "",
      e = 0;
    if (r.options.indentWithTabs) {
      for (var k = Math.floor(d / g); k; --k) {
        e += g;
        c += "\t";
      }
    }
    if (e < d) {
      c += j7(d - e);
    }
    if (c != p) {
      gT(b, c, lA(l, 0), lA(l, p.length), "+input");
      q.stateAfter = null;
      return true;
    } else {
      for (var m = 0; m < b.sel.ranges.length; m++) {
        var j = b.sel.ranges[m];
        if (j.head.line == l && j.head.ch < p.length) {
          var f = lA(l, p.length);
          k2(b, m, new lz(f, f));
          break;
        }
      }
    }
  }
  var lZ = null;
  function jJ(a) {
    lZ = a;
  }
  function g4(a, k, m, n, b) {
    var c = a.doc;
    a.display.shift = false;
    if (!n) {
      n = c.sel;
    }
    var l = a.state.pasteIncoming || b == "paste";
    var h = hd(k),
      p = null;
    if (l && n.ranges.length > 1) {
      if (lZ && lZ.text.join("\n") == k) {
        if (n.ranges.length % lZ.text.length == 0) {
          p = [];
          for (var j = 0; j < lZ.text.length; j++) {
            p.push(c.splitLines(lZ.text[j]));
          }
        }
      } else {
        if (h.length == n.ranges.length) {
          p = mO(h, function (r) {
            return [r];
          });
        }
      }
    }
    var g;
    for (var o = n.ranges.length - 1; o >= 0; o--) {
      var q = n.ranges[o];
      var d = q.from(),
        e = q.to();
      if (q.empty()) {
        if (m && m > 0) {
          d = lA(d.line, d.ch - m);
        } else {
          if (a.state.overwrite && !l) {
            e = lA(
              e.line,
              Math.min(hm(c, e.line).text.length, e.ch + ji(h).length)
            );
          } else {
            if (lZ && lZ.lineWise && lZ.text.join("\n") == k) {
              d = e = lA(d.line, 0);
            }
          }
        }
      }
      g = a.curOp.updateInput;
      var f = {
        from: d,
        to: e,
        text: p ? p[o % p.length] : h,
        origin: b || (l ? "paste" : a.state.cutIncoming ? "cut" : "+input"),
      };
      mi(a.doc, f);
      nw(a, "inputRead", a, f);
    }
    if (k && !l) {
      g7(a, k);
    }
    jl(a);
    a.curOp.updateInput = g;
    a.curOp.typing = true;
    a.state.pasteIncoming = a.state.cutIncoming = false;
  }
  function mz(b, a) {
    var c = b.clipboardData && b.clipboardData.getData("Text");
    if (c) {
      b.preventDefault();
      if (!a.isReadOnly() && !a.options.disableInput) {
        lI(a, function () {
          return g4(a, c, 0, null, "paste");
        });
      }
      return true;
    }
  }
  function g7(g, d) {
    if (!g.options.electricChars || !g.options.smartIndent) {
      return;
    }
    var c = g.doc.sel;
    for (var e = c.ranges.length - 1; e >= 0; e--) {
      var a = c.ranges[e];
      if (a.head.ch > 100 || (e && c.ranges[e - 1].head.line == a.head.line)) {
        continue;
      }
      var b = g.getModeAt(a.head);
      var h = false;
      if (b.electricChars) {
        for (var f = 0; f < b.electricChars.length; f++) {
          if (d.indexOf(b.electricChars.charAt(f)) > -1) {
            h = nz(g, a.head.line, "smart");
            break;
          }
        }
      } else {
        if (b.electricInput) {
          if (
            b.electricInput.test(
              hm(g.doc, a.head.line).text.slice(0, a.head.ch)
            )
          ) {
            h = nz(g, a.head.line, "smart");
          }
        }
      }
      if (h) {
        nw(g, "electricInput", g, a.head.line);
      }
    }
  }
  function jf(f) {
    var a = [],
      d = [];
    for (var c = 0; c < f.doc.sel.ranges.length; c++) {
      var e = f.doc.sel.ranges[c].head.line;
      var b = { anchor: lA(e, 0), head: lA(e + 1, 0) };
      d.push(b);
      a.push(f.getRange(b.anchor, b.head));
    }
    return { text: a, ranges: d };
  }
  function hh(b, a) {
    b.setAttribute("autocorrect", "off");
    b.setAttribute("autocapitalize", "off");
    b.setAttribute("spellcheck", !!a);
  }
  function nG() {
    var a = gZ(
      "textarea",
      null,
      null,
      "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"
    );
    var b = gZ(
      "div",
      [a],
      null,
      "overflow: hidden; position: relative; width: 3px; height: 0px;"
    );
    if (mU) {
      a.style.width = "1000px";
    } else {
      a.setAttribute("wrap", "off");
    }
    if (hE) {
      a.style.border = "1px solid black";
    }
    hh(a);
    return b;
  }
  var jX = function (a) {
    var c = a.optionHandlers;
    var b = (a.helpers = {});
    a.prototype = {
      constructor: a,
      focus: function () {
        window.focus();
        this.display.input.focus();
      },
      setOption: function (e, d) {
        var f = this.options,
          g = f[e];
        if (f[e] == d && e != "mode") {
          return;
        }
        f[e] = d;
        if (c.hasOwnProperty(e)) {
          mQ(this, c[e])(this, d, g);
        }
      },
      getOption: function (d) {
        return this.options[d];
      },
      getDoc: function () {
        return this.doc;
      },
      addKeyMap: function (d, e) {
        this.state.keyMaps[e ? "push" : "unshift"](g6(d));
      },
      removeKeyMap: function (e) {
        var d = this.state.keyMaps;
        for (var f = 0; f < d.length; ++f) {
          if (d[f] == e || d[f].name == e) {
            d.splice(f, 1);
            return true;
          }
        }
      },
      addOverlay: jC(function (f, e) {
        var d = f.token ? f : a.getMode(this.options, f);
        if (d.startState) {
          throw new Error("Overlays may not be stateful.");
        }
        kZ(
          this.state.overlays,
          {
            mode: d,
            modeSpec: f,
            opaque: e && e.opaque,
            priority: (e && e.priority) || 0,
          },
          function (g) {
            return g.priority;
          }
        );
        this.state.modeGen++;
        np(this);
      }),
      removeOverlay: jC(function (h) {
        var d = this;
        var f = this.state.overlays;
        for (var g = 0; g < f.length; ++g) {
          var e = f[g].modeSpec;
          if (e == h || (typeof h == "string" && e.name == h)) {
            f.splice(g, 1);
            d.state.modeGen++;
            np(d);
            return;
          }
        }
      }),
      indentLine: jC(function (d, f, e) {
        if (typeof f != "string" && typeof f != "number") {
          if (f == null) {
            f = this.options.smartIndent ? "smart" : "prev";
          } else {
            f = f ? "add" : "subtract";
          }
        }
        if (k3(this.doc, d)) {
          nz(this, d, f, e);
        }
      }),
      indentSelection: jC(function (e) {
        var h = this;
        var o = this.doc.sel.ranges,
          l = -1;
        for (var j = 0; j < o.length; j++) {
          var d = o[j];
          if (!d.empty()) {
            var g = d.from(),
              f = d.to();
            var n = Math.max(l, g.line);
            l = Math.min(h.lastLine(), f.line - (f.ch ? 0 : 1)) + 1;
            for (var k = n; k < l; ++k) {
              nz(h, k, e);
            }
            var m = h.doc.sel.ranges;
            if (g.ch == 0 && o.length == m.length && m[j].from().ch > 0) {
              k2(h.doc, j, new lz(g, m[j].to()), ln);
            }
          } else {
            if (d.head.line > l) {
              nz(h, d.head.line, e, true);
              l = d.head.line;
              if (j == h.doc.sel.primIndex) {
                jl(h);
              }
            }
          }
        }
      }),
      getTokenAt: function (d, e) {
        return j4(this, d, e);
      },
      getLineTokens: function (d, e) {
        return j4(this, lA(d), e, true);
      },
      getTokenTypeAt: function (j) {
        j = i3(this.doc, j);
        var e = jG(this, hm(this.doc, j.line));
        var l = 0,
          k = (e.length - 1) / 2,
          f = j.ch;
        var g;
        if (f == 0) {
          g = e[2];
        } else {
          for (;;) {
            var h = (l + k) >> 1;
            if ((h ? e[h * 2 - 1] : 0) >= f) {
              k = h;
            } else {
              if (e[h * 2 + 1] < f) {
                l = h + 1;
              } else {
                g = e[h * 2 + 2];
                break;
              }
            }
          }
        }
        var d = g ? g.indexOf("overlay ") : -1;
        return d < 0 ? g : d == 0 ? null : g.slice(0, d - 1);
      },
      getModeAt: function (d) {
        var e = this.doc.mode;
        if (!e.innerMode) {
          return e;
        }
        return a.innerMode(e, this.getTokenAt(d).state).mode;
      },
      getHelper: function (d, e) {
        return this.getHelpers(d, e)[0];
      },
      getHelpers: function (f, g) {
        var j = this;
        var d = [];
        if (!b.hasOwnProperty(g)) {
          return d;
        }
        var l = b[g],
          h = this.getModeAt(f);
        if (typeof h[g] == "string") {
          if (l[h[g]]) {
            d.push(l[h[g]]);
          }
        } else {
          if (h[g]) {
            for (var k = 0; k < h[g].length; k++) {
              var m = l[h[g][k]];
              if (m) {
                d.push(m);
              }
            }
          } else {
            if (h.helperType && l[h.helperType]) {
              d.push(l[h.helperType]);
            } else {
              if (l[h.name]) {
                d.push(l[h.name]);
              }
            }
          }
        }
        for (var n = 0; n < l._global.length; n++) {
          var e = l._global[n];
          if (e.pred(h, j) && jb(d, e.val) == -1) {
            d.push(e.val);
          }
        }
        return d;
      },
      getStateAfter: function (e, f) {
        var d = this.doc;
        e = jL(d, e == null ? d.first + d.size - 1 : e);
        return kM(this, e + 1, f);
      },
      cursorCoords: function (d, f) {
        var e,
          g = this.doc.sel.primary();
        if (d == null) {
          e = g.head;
        } else {
          if (typeof d == "object") {
            e = i3(this.doc, d);
          } else {
            e = d ? g.from() : g.to();
          }
        }
        return lL(this, e, f || "page");
      },
      charCoords: function (d, e) {
        return lU(this, i3(this.doc, d), e || "page");
      },
      coordsChar: function (e, d) {
        e = hI(this, e, d || "page");
        return hg(this, e.left, e.top);
      },
      lineAtHeight: function (e, d) {
        e = hI(this, { top: e, left: 0 }, d || "page").top;
        return nj(this.doc, e + this.display.viewOffset);
      },
      heightAtLine: function (g, j, d) {
        var h = false,
          f;
        if (typeof g == "number") {
          var e = this.doc.first + this.doc.size - 1;
          if (g < this.doc.first) {
            g = this.doc.first;
          } else {
            if (g > e) {
              g = e;
              h = true;
            }
          }
          f = hm(this.doc, g);
        } else {
          f = g;
        }
        return (
          j8(this, f, { top: 0, left: 0 }, j || "page", d).top +
          (h ? this.doc.height - m7(f) : 0)
        );
      },
      defaultTextHeight: function () {
        return nF(this.display);
      },
      defaultCharWidth: function () {
        return kJ(this.display);
      },
      getViewport: function () {
        return { from: this.display.viewFrom, to: this.display.viewTo };
      },
      addWidget: function (h, l, f, k, d) {
        var j = this.display;
        h = lL(this, i3(this.doc, h));
        var g = h.bottom,
          m = h.left;
        l.style.position = "absolute";
        l.setAttribute("cm-ignore-events", "true");
        this.display.input.setUneditable(l);
        j.sizer.appendChild(l);
        if (k == "over") {
          g = h.top;
        } else {
          if (k == "above" || k == "near") {
            var n = Math.max(j.wrapper.clientHeight, this.doc.height),
              e = Math.max(j.sizer.clientWidth, j.lineSpace.clientWidth);
            if (
              (k == "above" || h.bottom + l.offsetHeight > n) &&
              h.top > l.offsetHeight
            ) {
              g = h.top - l.offsetHeight;
            } else {
              if (h.bottom + l.offsetHeight <= n) {
                g = h.bottom;
              }
            }
            if (m + l.offsetWidth > e) {
              m = e - l.offsetWidth;
            }
          }
        }
        l.style.top = g + "px";
        l.style.left = l.style.right = "";
        if (d == "right") {
          m = j.sizer.clientWidth - l.offsetWidth;
          l.style.right = "0px";
        } else {
          if (d == "left") {
            m = 0;
          } else {
            if (d == "middle") {
              m = (j.sizer.clientWidth - l.offsetWidth) / 2;
            }
          }
          l.style.left = m + "px";
        }
        if (f) {
          mt(this, m, g, m + l.offsetWidth, g + l.offsetHeight);
        }
      },
      triggerOnKeyDown: jC(kp),
      triggerOnKeyPress: jC(mw),
      triggerOnKeyUp: me,
      execCommand: function (d) {
        if (jg.hasOwnProperty(d)) {
          return jg[d].call(null, this);
        }
      },
      triggerElectric: jC(function (d) {
        g7(this, d);
      }),
      findPosH: function (j, e, d, g) {
        var k = this;
        var h = 1;
        if (e < 0) {
          h = -1;
          e = -e;
        }
        var l = i3(this.doc, j);
        for (var f = 0; f < e; ++f) {
          l = lg(k.doc, l, h, d, g);
          if (l.hitSide) {
            break;
          }
        }
        return l;
      },
      moveH: jC(function (f, e) {
        var d = this;
        this.extendSelectionsBy(function (g) {
          if (d.display.shift || d.doc.extend || g.empty()) {
            return lg(d.doc, g.head, f, e, d.options.rtlMoveVisually);
          } else {
            return f < 0 ? g.from() : g.to();
          }
        }, m4);
      }),
      deleteH: jC(function (g, f) {
        var e = this.doc.sel,
          d = this.doc;
        if (e.somethingSelected()) {
          d.replaceSelection("", null, "+delete");
        } else {
          hL(this, function (j) {
            var h = lg(d, j.head, g, f, false);
            return g < 0 ? { from: h, to: j.head } : { from: j.head, to: h };
          });
        }
      }),
      findPosV: function (g, k, f, d) {
        var l = this;
        var n = 1,
          h = d;
        if (k < 0) {
          n = -1;
          k = -k;
        }
        var e = i3(this.doc, g);
        for (var m = 0; m < k; ++m) {
          var j = lL(l, e, "div");
          if (h == null) {
            h = j.left;
          } else {
            j.left = h;
          }
          e = lB(l, j, n, f);
          if (e.hitSide) {
            break;
          }
        }
        return e;
      },
      moveV: jC(function (h, f) {
        var j = this;
        var d = this.doc,
          e = [];
        var k = !this.display.shift && !d.extend && d.sel.somethingSelected();
        d.extendSelectionsBy(function (n) {
          if (k) {
            return h < 0 ? n.from() : n.to();
          }
          var l = lL(j, n.head, "div");
          if (n.goalColumn != null) {
            l.left = n.goalColumn;
          }
          e.push(l.left);
          var m = lB(j, l, h, f);
          if (f == "page" && n == d.sel.primary()) {
            lM(j, null, lU(j, m, "div").top - l.top);
          }
          return m;
        }, m4);
        if (e.length) {
          for (var g = 0; g < d.sel.ranges.length; g++) {
            d.sel.ranges[g].goalColumn = e[g];
          }
        }
      }),
      findWordAt: function (j) {
        var l = this.doc,
          e = hm(l, j.line).text;
        var k = j.ch,
          f = j.ch;
        if (e) {
          var d = this.getHelper(j, "wordChars");
          if ((j.xRel < 0 || f == e.length) && k) {
            --k;
          } else {
            ++f;
          }
          var g = e.charAt(k);
          var h = mo(g, d)
            ? function (m) {
                return mo(m, d);
              }
            : /\s/.test(g)
            ? function (m) {
                return /\s/.test(m);
              }
            : function (m) {
                return !/\s/.test(m) && !mo(m);
              };
          while (k > 0 && h(e.charAt(k - 1))) {
            --k;
          }
          while (f < e.length && h(e.charAt(f))) {
            ++f;
          }
        }
        return new lz(lA(j.line, k), lA(j.line, f));
      },
      toggleOverwrite: function (d) {
        if (d != null && d == this.state.overwrite) {
          return;
        }
        if ((this.state.overwrite = !this.state.overwrite)) {
          h6(this.display.cursorDiv, "CodeMirror-overwrite");
        } else {
          kS(this.display.cursorDiv, "CodeMirror-overwrite");
        }
        n9(this, "overwriteToggle", this, this.state.overwrite);
      },
      hasFocus: function () {
        return this.display.input.getField() == j3();
      },
      isReadOnly: function () {
        return !!(this.options.readOnly || this.doc.cantEdit);
      },
      scrollTo: jC(function (e, d) {
        if (e != null || d != null) {
          h2(this);
        }
        if (e != null) {
          this.curOp.scrollLeft = e;
        }
        if (d != null) {
          this.curOp.scrollTop = d;
        }
      }),
      getScrollInfo: function () {
        var d = this.display.scroller;
        return {
          left: d.scrollLeft,
          top: d.scrollTop,
          height: d.scrollHeight - lh(this) - this.display.barHeight,
          width: d.scrollWidth - lh(this) - this.display.barWidth,
          clientHeight: m8(this),
          clientWidth: i4(this),
        };
      },
      scrollIntoView: jC(function (d, e) {
        if (d == null) {
          d = { from: this.doc.sel.primary().head, to: null };
          if (e == null) {
            e = this.options.cursorScrollMargin;
          }
        } else {
          if (typeof d == "number") {
            d = { from: lA(d, 0), to: null };
          } else {
            if (d.from == null) {
              d = { from: d, to: null };
            }
          }
        }
        if (!d.to) {
          d.to = d.from;
        }
        d.margin = e || 0;
        if (d.from.line != null) {
          h2(this);
          this.curOp.scrollToPos = d;
        } else {
          var f = mn(
            this,
            Math.min(d.from.left, d.to.left),
            Math.min(d.from.top, d.to.top) - d.margin,
            Math.max(d.from.right, d.to.right),
            Math.max(d.from.bottom, d.to.bottom) + d.margin
          );
          this.scrollTo(f.scrollLeft, f.scrollTop);
        }
      }),
      setSize: jC(function (e, h) {
        var d = this;
        var f = function (j) {
          return typeof j == "number" || /^\d+$/.test(String(j)) ? j + "px" : j;
        };
        if (e != null) {
          this.display.wrapper.style.width = f(e);
        }
        if (h != null) {
          this.display.wrapper.style.height = f(h);
        }
        if (this.options.lineWrapping) {
          nZ(this);
        }
        var g = this.display.viewFrom;
        this.doc.iter(g, this.display.viewTo, function (k) {
          if (k.widgets) {
            for (var j = 0; j < k.widgets.length; j++) {
              if (k.widgets[j].noHScroll) {
                lS(d, g, "widget");
                break;
              }
            }
          }
          ++g;
        });
        this.curOp.forceUpdate = true;
        n9(this, "refresh", this);
      }),
      operation: function (d) {
        return lI(this, d);
      },
      refresh: jC(function () {
        var d = this.display.cachedTextHeight;
        np(this);
        this.curOp.forceUpdate = true;
        nm(this);
        this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop);
        jO(this);
        if (d == null || Math.abs(d - nF(this.display)) > 0.5) {
          lr(this);
        }
        n9(this, "refresh", this);
      }),
      swapDoc: jC(function (d) {
        var e = this.doc;
        e.cm = null;
        ip(this, d);
        nm(this);
        this.display.input.reset();
        this.scrollTo(d.scrollLeft, d.scrollTop);
        this.curOp.forceScroll = true;
        nw(this, "swapDoc", this, e);
        return e;
      }),
      getInputField: function () {
        return this.display.input.getField();
      },
      getWrapperElement: function () {
        return this.display.wrapper;
      },
      getScrollerElement: function () {
        return this.display.scroller;
      },
      getGutterElement: function () {
        return this.display.gutters;
      },
    };
    nA(a);
    a.registerHelper = function (e, f, d) {
      if (!b.hasOwnProperty(e)) {
        b[e] = a[e] = { _global: [] };
      }
      b[e][f] = d;
    };
    a.registerGlobalHelper = function (e, f, g, d) {
      a.registerHelper(e, f, d);
      b[e]._global.push({ pred: g, val: d });
    };
  };
  function lg(r, m, d, e, k) {
    var g = m.line,
      f = m.ch,
      s = d;
    var p = hm(r, g);
    function a() {
      var t = g + d;
      if (t < r.first || t >= r.first + r.size) {
        return false;
      }
      g = t;
      return (p = hm(r, t));
    }
    function b(t) {
      var u = (k ? ka : nn)(p, f, d, true);
      if (u == null) {
        if (!t && a()) {
          if (k) {
            f = (d < 0 ? lj : md)(p);
          } else {
            f = d < 0 ? p.text.length : 0;
          }
        } else {
          return false;
        }
      } else {
        f = u;
      }
      return true;
    }
    if (e == "char") {
      b();
    } else {
      if (e == "column") {
        b(true);
      } else {
        if (e == "word" || e == "group") {
          var c = null,
            j = e == "group";
          var q = r.cm && r.cm.getHelper(m, "wordChars");
          for (var l = true; ; l = false) {
            if (d < 0 && !b(!l)) {
              break;
            }
            var o = p.text.charAt(f) || "\n";
            var n = mo(o, q)
              ? "w"
              : j && o == "\n"
              ? "n"
              : !j || /\s/.test(o)
              ? null
              : "p";
            if (j && !l && !n) {
              n = "s";
            }
            if (c && c != n) {
              if (d < 0) {
                d = 1;
                b();
              }
              break;
            }
            if (n) {
              c = n;
            }
            if (d > 0 && !b(!l)) {
              break;
            }
          }
        }
      }
    }
    var h = mJ(r, lA(g, f), m, s, true);
    if (!kI(m, h)) {
      h.hitSide = true;
    }
    return h;
  }
  function lB(b, g, k, c) {
    var d = b.doc,
      e = g.left,
      f;
    if (c == "page") {
      var h = Math.min(
        b.display.wrapper.clientHeight,
        window.innerHeight || document.documentElement.clientHeight
      );
      var a = Math.max(h - 0.5 * nF(b.display), 3);
      f = (k > 0 ? g.bottom : g.top) + k * a;
    } else {
      if (c == "line") {
        f = k > 0 ? g.bottom + 3 : g.top - 3;
      }
    }
    var j;
    for (;;) {
      j = hg(b, e, f);
      if (!j.outside) {
        break;
      }
      if (k < 0 ? f <= 0 : f >= d.height) {
        j.hitSide = true;
        break;
      }
      f += k * 5;
    }
    return j;
  }
  function k7(a) {
    this.cm = a;
    this.lastAnchorNode =
      this.lastAnchorOffset =
      this.lastFocusNode =
      this.lastFocusOffset =
        null;
    this.polling = new hA();
    this.composing = null;
    this.gracePeriod = false;
    this.readDOMTimeout = null;
  }
  k7.prototype = n0(
    {
      init: function (d) {
        var a = this;
        var e = this,
          c = e.cm;
        var b = (e.div = d.lineDiv);
        hh(b, c.options.spellcheck);
        nY(b, "paste", function (g) {
          if (nT(c, g) || mz(g, c)) {
            return;
          }
          if (kH <= 11) {
            setTimeout(
              mQ(c, function () {
                if (!e.pollContent()) {
                  np(c);
                }
              }),
              20
            );
          }
        });
        nY(b, "compositionstart", function (g) {
          a.composing = { data: g.data };
        });
        nY(b, "compositionupdate", function (g) {
          if (!a.composing) {
            a.composing = { data: g.data };
          }
        });
        nY(b, "compositionend", function (g) {
          if (a.composing) {
            if (g.data != a.composing.data) {
              a.readFromDOMSoon();
            }
            a.composing = null;
          }
        });
        nY(b, "touchstart", function () {
          return e.forceCompositionEnd();
        });
        nY(b, "input", function () {
          if (!a.composing) {
            a.readFromDOMSoon();
          }
        });
        function f(k) {
          if (nT(c, k)) {
            return;
          }
          if (c.somethingSelected()) {
            jJ({ lineWise: false, text: c.getSelections() });
            if (k.type == "cut") {
              c.replaceSelection("", null, "cut");
            }
          } else {
            if (!c.options.lineWiseCopyCut) {
              return;
            } else {
              var g = jf(c);
              jJ({ lineWise: true, text: g.text });
              if (k.type == "cut") {
                c.operation(function () {
                  c.setSelections(g.ranges, 0, ln);
                  c.replaceSelection("", null, "cut");
                });
              }
            }
          }
          if (k.clipboardData) {
            k.clipboardData.clearData();
            var l = lZ.text.join("\n");
            k.clipboardData.setData("Text", l);
            if (k.clipboardData.getData("Text") == l) {
              k.preventDefault();
              return;
            }
          }
          var m = nG(),
            j = m.firstChild;
          c.display.lineSpace.insertBefore(m, c.display.lineSpace.firstChild);
          j.value = lZ.text.join("\n");
          var h = document.activeElement;
          kf(j);
          setTimeout(function () {
            c.display.lineSpace.removeChild(m);
            h.focus();
            if (h == b) {
              e.showPrimarySelection();
            }
          }, 50);
        }
        nY(b, "copy", f);
        nY(b, "cut", f);
      },
      prepareSelection: function () {
        var a = i9(this.cm, false);
        a.focus = this.cm.state.focused;
        return a;
      },
      showSelection: function (b, a) {
        if (!b || !this.cm.display.view.length) {
          return;
        }
        if (b.focus || a) {
          this.showPrimarySelection();
        }
        this.showMultipleSelections(b);
      },
      showPrimarySelection: function () {
        var k = window.getSelection(),
          g = this.cm.doc.sel.primary();
        var j = mG(this.cm, k.anchorNode, k.anchorOffset);
        var e = mG(this.cm, k.focusNode, k.focusOffset);
        if (
          j &&
          !j.bad &&
          e &&
          !e.bad &&
          kI(m3(j, e), g.from()) == 0 &&
          kI(nD(j, e), g.to()) == 0
        ) {
          return;
        }
        var l = mq(this.cm, g.from());
        var f = mq(this.cm, g.to());
        if (!l && !f) {
          return;
        }
        var b = this.cm.display.view;
        var h = k.rangeCount && k.getRangeAt(0);
        if (!l) {
          l = { node: b[0].measure.map[2], offset: 0 };
        } else {
          if (!f) {
            var m = b[b.length - 1].measure;
            var a = m.maps ? m.maps[m.maps.length - 1] : m.map;
            f = {
              node: a[a.length - 1],
              offset: a[a.length - 2] - a[a.length - 3],
            };
          }
        }
        var d;
        try {
          d = ki(l.node, l.offset, f.offset, f.node);
        } catch (c) {}
        if (d) {
          if (!kc && this.cm.state.focused) {
            k.collapse(l.node, l.offset);
            if (!d.collapsed) {
              k.removeAllRanges();
              k.addRange(d);
            }
          } else {
            k.removeAllRanges();
            k.addRange(d);
          }
          if (h && k.anchorNode == null) {
            k.addRange(h);
          } else {
            if (kc) {
              this.startGracePeriod();
            }
          }
        }
        this.rememberSelection();
      },
      startGracePeriod: function () {
        var a = this;
        clearTimeout(this.gracePeriod);
        this.gracePeriod = setTimeout(function () {
          a.gracePeriod = false;
          if (a.selectionChanged()) {
            a.cm.operation(function () {
              return (a.cm.curOp.selectionChanged = true);
            });
          }
        }, 20);
      },
      showMultipleSelections: function (a) {
        mR(this.cm.display.cursorDiv, a.cursors);
        mR(this.cm.display.selectionDiv, a.selection);
      },
      rememberSelection: function () {
        var a = window.getSelection();
        this.lastAnchorNode = a.anchorNode;
        this.lastAnchorOffset = a.anchorOffset;
        this.lastFocusNode = a.focusNode;
        this.lastFocusOffset = a.focusOffset;
      },
      selectionInEditor: function () {
        var b = window.getSelection();
        if (!b.rangeCount) {
          return false;
        }
        var a = b.getRangeAt(0).commonAncestorContainer;
        return hR(this.div, a);
      },
      focus: function () {
        if (this.cm.options.readOnly != "nocursor") {
          if (!this.selectionInEditor()) {
            this.showSelection(this.prepareSelection(), true);
          }
          this.div.focus();
        }
      },
      blur: function () {
        this.div.blur();
      },
      getField: function () {
        return this.div;
      },
      supportsTouch: function () {
        return true;
      },
      receivedFocus: function () {
        var a = this;
        if (this.selectionInEditor()) {
          this.pollSelection();
        } else {
          lI(this.cm, function () {
            return (a.cm.curOp.selectionChanged = true);
          });
        }
        function b() {
          if (a.cm.state.focused) {
            a.pollSelection();
            a.polling.set(a.cm.options.pollInterval, b);
          }
        }
        this.polling.set(this.cm.options.pollInterval, b);
      },
      selectionChanged: function () {
        var a = window.getSelection();
        return (
          a.anchorNode != this.lastAnchorNode ||
          a.anchorOffset != this.lastAnchorOffset ||
          a.focusNode != this.lastFocusNode ||
          a.focusOffset != this.lastFocusOffset
        );
      },
      pollSelection: function () {
        if (
          !this.composing &&
          this.readDOMTimeout == null &&
          !this.gracePeriod &&
          this.selectionChanged()
        ) {
          var b = window.getSelection(),
            a = this.cm;
          this.rememberSelection();
          var d = mG(a, b.anchorNode, b.anchorOffset);
          var c = mG(a, b.focusNode, b.focusOffset);
          if (d && c) {
            lI(a, function () {
              mL(a.doc, j1(d, c), ln);
              if (d.bad || c.bad) {
                a.curOp.selectionChanged = true;
              }
            });
          }
        }
      },
      pollContent: function () {
        if (this.readDOMTimeout != null) {
          clearTimeout(this.readDOMTimeout);
          this.readDOMTimeout = null;
        }
        var f = this.cm,
          t = f.display,
          v = f.doc.sel.primary();
        var u = v.from(),
          m = v.to();
        if (u.ch == 0 && u.line > f.firstLine()) {
          u = lA(u.line - 1, hm(f.doc, u.line - 1).length);
        }
        if (m.ch == hm(f.doc, m.line).text.length && m.line < f.lastLine()) {
          m = lA(m.line + 1, 0);
        }
        if (u.line < t.viewFrom || m.line > t.viewTo - 1) {
          return false;
        }
        var j, l, g;
        if (u.line == t.viewFrom || (j = iR(f, u.line)) == 0) {
          l = m5(t.view[0].line);
          g = t.view[0].node;
        } else {
          l = m5(t.view[j].line);
          g = t.view[j - 1].node.nextSibling;
        }
        var w = iR(f, m.line);
        var d, a;
        if (w == t.view.length - 1) {
          d = t.viewTo - 1;
          a = t.lineDiv.lastChild;
        } else {
          d = m5(t.view[w + 1].line) - 1;
          a = t.view[w + 1].node.previousSibling;
        }
        if (!g) {
          return false;
        }
        var s = f.doc.splitLines(g3(f, g, a, l, d));
        var b = gY(f.doc, lA(l, 0), lA(d, hm(f.doc, d).text.length));
        while (s.length > 1 && b.length > 1) {
          if (ji(s) == ji(b)) {
            s.pop();
            b.pop();
            d--;
          } else {
            if (s[0] == b[0]) {
              s.shift();
              b.shift();
              l++;
            } else {
              break;
            }
          }
        }
        var x = 0,
          o = 0;
        var e = s[0],
          p = b[0],
          q = Math.min(e.length, p.length);
        while (x < q && e.charCodeAt(x) == p.charCodeAt(x)) {
          ++x;
        }
        var h = ji(s),
          r = ji(b);
        var n = Math.min(
          h.length - (s.length == 1 ? x : 0),
          r.length - (b.length == 1 ? x : 0)
        );
        while (
          o < n &&
          h.charCodeAt(h.length - o - 1) == r.charCodeAt(r.length - o - 1)
        ) {
          ++o;
        }
        s[s.length - 1] = h.slice(0, h.length - o).replace(/^\u200b+/, "");
        s[0] = s[0].slice(x).replace(/\u200b+$/, "");
        var k = lA(l, x);
        var c = lA(d, b.length ? ji(b).length - o : 0);
        if (s.length > 1 || s[0] || kI(k, c)) {
          gT(f.doc, s, k, c, "+input");
          return true;
        }
      },
      ensurePolled: function () {
        this.forceCompositionEnd();
      },
      reset: function () {
        this.forceCompositionEnd();
      },
      forceCompositionEnd: function () {
        if (!this.composing) {
          return;
        }
        this.composing = null;
        if (!this.pollContent()) {
          np(this.cm);
        }
        this.div.blur();
        this.div.focus();
      },
      readFromDOMSoon: function () {
        var a = this;
        if (this.readDOMTimeout != null) {
          return;
        }
        this.readDOMTimeout = setTimeout(function () {
          a.readDOMTimeout = null;
          if (a.composing) {
            return;
          }
          if (a.cm.isReadOnly() || !a.pollContent()) {
            lI(a.cm, function () {
              return np(a.cm);
            });
          }
        }, 80);
      },
      setUneditable: function (a) {
        a.contentEditable = "false";
      },
      onKeyPress: function (a) {
        a.preventDefault();
        if (!this.cm.isReadOnly()) {
          mQ(this.cm, g4)(
            this.cm,
            String.fromCharCode(a.charCode == null ? a.keyCode : a.charCode),
            0
          );
        }
      },
      readOnlyChanged: function (a) {
        this.div.contentEditable = String(a != "nocursor");
      },
      onContextMenu: g8,
      resetPosition: g8,
      needsContentAttribute: true,
    },
    k7.prototype
  );
  function mq(d, f) {
    var e = hp(d, f.line);
    if (!e || e.hidden) {
      return null;
    }
    var b = hm(d.doc, f.line);
    var j = jT(e, b, f.line);
    var h = ld(b),
      g = "left";
    if (h) {
      var a = n6(h, f.ch);
      g = a % 2 ? "right" : "left";
    }
    var c = n3(j.map, f.ch, g);
    c.offset = c.collapse == "right" ? c.end : c.start;
    return c;
  }
  function jH(b, a) {
    if (a) {
      b.bad = true;
    }
    return b;
  }
  function g3(c, e, d, h, k) {
    var a = "",
      j = false,
      b = c.doc.lineSeparator();
    function g(l) {
      return function (m) {
        return m.id == l;
      };
    }
    function f(o) {
      if (o.nodeType == 1) {
        var r = o.getAttribute("cm-text");
        if (r != null) {
          if (r == "") {
            a += o.textContent.replace(/\u200b/g, "");
          } else {
            a += r;
          }
          return;
        }
        var p = o.getAttribute("cm-marker"),
          l;
        if (p) {
          var n = c.findMarks(lA(h, 0), lA(k + 1, 0), g(+p));
          if (n.length && (l = n[0].find())) {
            a += gY(c.doc, l.from, l.to).join(b);
          }
          return;
        }
        if (o.getAttribute("contenteditable") == "false") {
          return;
        }
        for (var q = 0; q < o.childNodes.length; q++) {
          f(o.childNodes[q]);
        }
        if (/^(pre|div|p)$/i.test(o.nodeName)) {
          j = true;
        }
      } else {
        if (o.nodeType == 3) {
          var m = o.nodeValue;
          if (!m) {
            return;
          }
          if (j) {
            a += b;
            j = false;
          }
          a += m;
        }
      }
    }
    for (;;) {
      f(e);
      if (e == d) {
        break;
      }
      e = e.nextSibling;
    }
    return a;
  }
  function mG(f, c, a) {
    var b;
    if (c == f.display.lineDiv) {
      b = f.display.lineDiv.childNodes[a];
      if (!b) {
        return jH(f.clipPos(lA(f.display.viewTo - 1)), true);
      }
      c = null;
      a = 0;
    } else {
      for (b = c; ; b = b.parentNode) {
        if (!b || b == f.display.lineDiv) {
          return null;
        }
        if (b.parentNode && b.parentNode == f.display.lineDiv) {
          break;
        }
      }
    }
    for (var d = 0; d < f.display.view.length; d++) {
      var e = f.display.view[d];
      if (e.node == b) {
        return li(e, c, a);
      }
    }
  }
  function li(h, m, k) {
    var p = h.text.firstChild,
      n = false;
    if (!m || !hR(p, m)) {
      return jH(lA(m5(h.line), 0), true);
    }
    if (m == p) {
      n = true;
      m = p.childNodes[k];
      k = 0;
      if (!m) {
        var a = h.rest ? ji(h.rest) : h.line;
        return jH(lA(m5(a), a.text.length), n);
      }
    }
    var l = m.nodeType == 3 ? m : null,
      c = m;
    if (!l && m.childNodes.length == 1 && m.firstChild.nodeType == 3) {
      l = m.firstChild;
      if (k) {
        k = l.nodeValue.length;
      }
    }
    while (c.parentNode != p) {
      c = c.parentNode;
    }
    var q = h.measure,
      e = q.maps;
    function j(y, t, w) {
      for (var u = -1; u < (e ? e.length : 0); u++) {
        var s = u < 0 ? q.map : e[u];
        for (var v = 0; v < s.length; v += 3) {
          var x = s[v + 2];
          if (x == y || x == t) {
            var r = m5(u < 0 ? h.line : h.rest[u]);
            var z = s[v] + w;
            if (w < 0 || x != y) {
              z = s[v + (w ? 1 : 0)];
            }
            return lA(r, z);
          }
        }
      }
    }
    var b = j(l, c, k);
    if (b) {
      return jH(b, n);
    }
    for (
      var g = c.nextSibling, f = l ? l.nodeValue.length - k : 0;
      g;
      g = g.nextSibling
    ) {
      b = j(g, g.firstChild, 0);
      if (b) {
        return jH(lA(b.line, b.ch - f), n);
      } else {
        f += g.textContent.length;
      }
    }
    for (var d = c.previousSibling, o = k; d; d = d.previousSibling) {
      b = j(d, d.firstChild, -1);
      if (b) {
        return jH(lA(b.line, b.ch + o), n);
      } else {
        o += d.textContent.length;
      }
    }
  }
  function lt(a) {
    this.cm = a;
    this.prevInput = "";
    this.pollingFast = false;
    this.polling = new hA();
    this.inaccurateSelection = false;
    this.hasSelection = false;
    this.composing = null;
  }
  lt.prototype = n0(
    {
      init: function (f) {
        var a = this;
        var g = this,
          e = this.cm;
        var b = (this.wrapper = nG());
        var d = (this.textarea = b.firstChild);
        f.wrapper.insertBefore(b, f.wrapper.firstChild);
        if (hE) {
          d.style.width = "0px";
        }
        nY(d, "input", function () {
          if (kj && kH >= 9 && a.hasSelection) {
            a.hasSelection = null;
          }
          g.poll();
        });
        nY(d, "paste", function (h) {
          if (nT(e, h) || mz(h, e)) {
            return;
          }
          e.state.pasteIncoming = true;
          g.fastPoll();
        });
        function c(j) {
          if (nT(e, j)) {
            return;
          }
          if (e.somethingSelected()) {
            jJ({ lineWise: false, text: e.getSelections() });
            if (g.inaccurateSelection) {
              g.prevInput = "";
              g.inaccurateSelection = false;
              d.value = lZ.text.join("\n");
              kf(d);
            }
          } else {
            if (!e.options.lineWiseCopyCut) {
              return;
            } else {
              var h = jf(e);
              jJ({ lineWise: true, text: h.text });
              if (j.type == "cut") {
                e.setSelections(h.ranges, null, ln);
              } else {
                g.prevInput = "";
                d.value = h.text.join("\n");
                kf(d);
              }
            }
          }
          if (j.type == "cut") {
            e.state.cutIncoming = true;
          }
        }
        nY(d, "cut", c);
        nY(d, "copy", c);
        nY(f.scroller, "paste", function (h) {
          if (my(f, h) || nT(e, h)) {
            return;
          }
          e.state.pasteIncoming = true;
          g.focus();
        });
        nY(f.lineSpace, "selectstart", function (h) {
          if (!my(f, h)) {
            l7(h);
          }
        });
        nY(d, "compositionstart", function () {
          var h = e.getCursor("from");
          if (g.composing) {
            g.composing.range.clear();
          }
          g.composing = {
            start: h,
            range: e.markText(h, e.getCursor("to"), {
              className: "CodeMirror-composing",
            }),
          };
        });
        nY(d, "compositionend", function () {
          if (g.composing) {
            g.poll();
            g.composing.range.clear();
            g.composing = null;
          }
        });
      },
      prepareSelection: function () {
        var g = this.cm,
          b = g.display,
          c = g.doc;
        var e = i9(g);
        if (g.options.moveInputWithCursor) {
          var a = lL(g, c.sel.primary().head, "div");
          var f = b.wrapper.getBoundingClientRect(),
            d = b.lineDiv.getBoundingClientRect();
          e.teTop = Math.max(
            0,
            Math.min(b.wrapper.clientHeight - 10, a.top + d.top - f.top)
          );
          e.teLeft = Math.max(
            0,
            Math.min(b.wrapper.clientWidth - 10, a.left + d.left - f.left)
          );
        }
        return e;
      },
      showSelection: function (b) {
        var a = this.cm,
          c = a.display;
        mR(c.cursorDiv, b.cursors);
        mR(c.selectionDiv, b.selection);
        if (b.teTop != null) {
          this.wrapper.style.top = b.teTop + "px";
          this.wrapper.style.left = b.teLeft + "px";
        }
      },
      reset: function (e) {
        if (this.contextMenuPending) {
          return;
        }
        var g,
          f,
          d = this.cm,
          b = d.doc;
        if (d.somethingSelected()) {
          this.prevInput = "";
          var a = b.sel.primary();
          g =
            jz &&
            (a.to().line - a.from().line > 100 ||
              (f = d.getSelection()).length > 1000);
          var c = g ? "-" : f || d.getSelection();
          this.textarea.value = c;
          if (d.state.focused) {
            kf(this.textarea);
          }
          if (kj && kH >= 9) {
            this.hasSelection = c;
          }
        } else {
          if (!e) {
            this.prevInput = this.textarea.value = "";
            if (kj && kH >= 9) {
              this.hasSelection = null;
            }
          }
        }
        this.inaccurateSelection = g;
      },
      getField: function () {
        return this.textarea;
      },
      supportsTouch: function () {
        return false;
      },
      focus: function () {
        if (
          this.cm.options.readOnly != "nocursor" &&
          (!ie || j3() != this.textarea)
        ) {
          try {
            this.textarea.focus();
          } catch (a) {}
        }
      },
      blur: function () {
        this.textarea.blur();
      },
      resetPosition: function () {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      },
      receivedFocus: function () {
        this.slowPoll();
      },
      slowPoll: function () {
        var a = this;
        if (this.pollingFast) {
          return;
        }
        this.polling.set(this.cm.options.pollInterval, function () {
          a.poll();
          if (a.cm.state.focused) {
            a.slowPoll();
          }
        });
      },
      fastPoll: function () {
        var c = false,
          a = this;
        a.pollingFast = true;
        function b() {
          var d = a.poll();
          if (!d && !c) {
            c = true;
            a.polling.set(60, b);
          } else {
            a.pollingFast = false;
            a.slowPoll();
          }
        }
        a.polling.set(20, b);
      },
      poll: function () {
        var a = this;
        var f = this.cm,
          g = this.textarea,
          e = this.prevInput;
        if (
          this.contextMenuPending ||
          !f.state.focused ||
          (lv(g) && !e && !this.composing) ||
          f.isReadOnly() ||
          f.options.disableInput ||
          f.state.keySeq
        ) {
          return false;
        }
        var c = g.value;
        if (c == e && !f.somethingSelected()) {
          return false;
        }
        if (
          (kj && kH >= 9 && this.hasSelection === c) ||
          (k9 && /[\uf700-\uf7ff]/.test(c))
        ) {
          f.display.input.reset();
          return false;
        }
        if (f.doc.sel == f.display.selForContextMenu) {
          var d = c.charCodeAt(0);
          if (d == 8203 && !e) {
            e = "\u200b";
          }
          if (d == 8666) {
            this.reset();
            return this.cm.execCommand("undo");
          }
        }
        var b = 0,
          h = Math.min(e.length, c.length);
        while (b < h && e.charCodeAt(b) == c.charCodeAt(b)) {
          ++b;
        }
        lI(f, function () {
          g4(
            f,
            c.slice(b),
            e.length - b,
            null,
            a.composing ? "*compose" : null
          );
          if (c.length > 1000 || c.indexOf("\n") > -1) {
            g.value = a.prevInput = "";
          } else {
            a.prevInput = c;
          }
          if (a.composing) {
            a.composing.range.clear();
            a.composing.range = f.markText(
              a.composing.start,
              f.getCursor("to"),
              { className: "CodeMirror-composing" }
            );
          }
        });
        return true;
      },
      ensurePolled: function () {
        if (this.pollingFast && this.poll()) {
          this.pollingFast = false;
        }
      },
      onKeyPress: function () {
        if (kj && kH >= 9) {
          this.hasSelection = null;
        }
        this.fastPoll();
      },
      onContextMenu: function (l) {
        var e = this,
          d = e.cm,
          j = d.display,
          p = e.textarea;
        var f = kg(d, l),
          g = j.scroller.scrollTop;
        if (!f || iL) {
          return;
        }
        var m = d.options.resetSelectionOnContextMenu;
        if (m && d.doc.sel.contains(f) == -1) {
          mQ(d, mL)(d.doc, j1(f), ln);
        }
        var k = p.style.cssText,
          a = e.wrapper.style.cssText;
        e.wrapper.style.cssText = "position: absolute";
        var b = e.wrapper.getBoundingClientRect();
        p.style.cssText =
          "position: absolute; width: 30px; height: 30px;\n      top: " +
          (l.clientY - b.top - 5) +
          "px; left: " +
          (l.clientX - b.left - 5) +
          "px;\n      z-index: 1000; background: " +
          (kj ? "rgba(255, 255, 255, .05)" : "transparent") +
          ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
        var c;
        if (mU) {
          c = window.scrollY;
        }
        j.input.focus();
        if (mU) {
          window.scrollTo(null, c);
        }
        j.input.reset();
        if (!d.somethingSelected()) {
          p.value = e.prevInput = " ";
        }
        e.contextMenuPending = true;
        j.selForContextMenu = d.doc.sel;
        clearTimeout(j.detectingSelectAll);
        function n() {
          if (p.selectionStart != null) {
            var r = d.somethingSelected();
            var q = "\u200b" + (r ? p.value : "");
            p.value = "\u21da";
            p.value = q;
            e.prevInput = r ? "" : "\u200b";
            p.selectionStart = 1;
            p.selectionEnd = q.length;
            j.selForContextMenu = d.doc.sel;
          }
        }
        function h() {
          e.contextMenuPending = false;
          e.wrapper.style.cssText = a;
          p.style.cssText = k;
          if (kj && kH < 9) {
            j.scrollbars.setScrollTop((j.scroller.scrollTop = g));
          }
          if (p.selectionStart != null) {
            if (!kj || (kj && kH < 9)) {
              n();
            }
            var r = 0,
              q = function () {
                if (
                  j.selForContextMenu == d.doc.sel &&
                  p.selectionStart == 0 &&
                  p.selectionEnd > 0 &&
                  e.prevInput == "\u200b"
                ) {
                  mQ(d, nh)(d);
                } else {
                  if (r++ < 10) {
                    j.detectingSelectAll = setTimeout(q, 500);
                  } else {
                    j.input.reset();
                  }
                }
              };
            j.detectingSelectAll = setTimeout(q, 200);
          }
        }
        if (kj && kH >= 9) {
          n();
        }
        if (hT) {
          jK(l);
          var o = function () {
            ih(window, "mouseup", o);
            setTimeout(h, 20);
          };
          nY(window, "mouseup", o);
        } else {
          setTimeout(h, 50);
        }
      },
      readOnlyChanged: function (a) {
        if (!a) {
          this.reset();
        }
      },
      setUneditable: g8,
      needsContentAttribute: false,
    },
    lt.prototype
  );
  function je(c, b) {
    b = b ? n0(b) : {};
    b.value = c.value;
    if (!b.tabindex && c.tabIndex) {
      b.tabindex = c.tabIndex;
    }
    if (!b.placeholder && c.placeholder) {
      b.placeholder = c.placeholder;
    }
    if (b.autofocus == null) {
      var a = j3();
      b.autofocus =
        a == c || (c.getAttribute("autofocus") != null && a == document.body);
    }
    function f() {
      c.value = d.getValue();
    }
    var e;
    if (c.form) {
      nY(c.form, "submit", f);
      if (!b.leaveSubmitMethodAlone) {
        var j = c.form;
        e = j.submit;
        try {
          var g = (j.submit = function () {
            f();
            j.submit = e;
            j.submit();
            j.submit = g;
          });
        } catch (h) {}
      }
    }
    b.finishInit = function (k) {
      k.save = f;
      k.getTextArea = function () {
        return c;
      };
      k.toTextArea = function () {
        k.toTextArea = isNaN;
        f();
        c.parentNode.removeChild(k.getWrapperElement());
        c.style.display = "";
        if (c.form) {
          ih(c.form, "submit", f);
          if (typeof c.form.submit == "function") {
            c.form.submit = e;
          }
        }
      };
    };
    c.style.display = "none";
    var d = hx(function (k) {
      return c.parentNode.insertBefore(k, c.nextSibling);
    }, b);
    return d;
  }
  function iZ(a) {
    a.off = ih;
    a.on = nY;
    a.wheelEventPixels = mF;
    a.Doc = mT;
    a.splitLines = hd;
    a.countColumn = mV;
    a.findColumn = jM;
    a.isWordChar = h0;
    a.Pass = kU;
    a.signal = n9;
    a.Line = gW;
    a.changeEnd = m1;
    a.scrollbarModel = lX;
    a.Pos = lA;
    a.cmpPos = kI;
    a.modes = le;
    a.mimeModes = nQ;
    a.resolveMode = hP;
    a.getMode = h8;
    a.modeExtensions = iV;
    a.extendMode = jc;
    a.copyState = nK;
    a.startState = nR;
    a.innerMode = hX;
    a.commands = jg;
    a.keyMap = hq;
    a.keyName = iw;
    a.isModifierKey = jm;
    a.lookupKey = kN;
    a.normalizeKeyMap = l2;
    a.StringStream = hU;
    a.SharedTextMarker = jZ;
    a.TextMarker = lV;
    a.LineWidget = kO;
    a.e_preventDefault = l7;
    a.e_stopPropagation = iT;
    a.e_stop = jK;
    a.addClass = h6;
    a.contains = hR;
    a.rmClass = kS;
    a.keyNames = iQ;
  }
  i0(hx);
  jX(hx);
  var k4 = "iter insert remove copy getEditor constructor".split(" ");
  for (var nd in mT.prototype) {
    if (mT.prototype.hasOwnProperty(nd) && jb(k4, nd) < 0) {
      hx.prototype[nd] = (function (a) {
        return function () {
          return a.apply(this.doc, arguments);
        };
      })(mT.prototype[nd]);
    }
  }
  nA(mT);
  hx.inputStyles = { textarea: lt, contenteditable: k7 };
  hx.defineMode = function (a) {
    if (!hx.defaults.mode && a != "null") {
      hx.defaults.mode = a;
    }
    jE.apply(this, arguments);
  };
  hx.defineMIME = lT;
  hx.defineMode("null", function () {
    return {
      token: function (a) {
        return a.skipToEnd();
      },
    };
  });
  hx.defineMIME("text/plain", "null");
  hx.defineExtension = function (a, b) {
    hx.prototype[a] = b;
  };
  hx.defineDocExtension = function (a, b) {
    mT.prototype[a] = b;
  };
  hx.fromTextArea = je;
  iZ(hx);
  hx.version = "5.21.0";
  return hx;
});
