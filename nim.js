!function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.neplayer = e() : t.neplayer = e()
}("undefined" != typeof self ? self : this, function() {
	return function(t) {
		function e(n) {
			if (i[n]) return i[n].exports;
			var r = i[n] = {
				i: n,
				l: !1,
				exports: {}
			};
			return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
		}
		var i = {};
		return e.m = t, e.c = i, e.d = function(t, i, n) {
			e.o(t, i) || Object.defineProperty(t, i, {
				configurable: !1,
				enumerable: !0,
				get: n
			})
		}, e.n = function(t) {
			var i = t && t.__esModule ? function() {
					return t.
					default
				} : function() {
					return t
				};
			return e.d(i, "a", i), i
		}, e.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, e.p = "", e(e.s = 5)
	}([function(t, e, i) {
		function n(t) {
			return t && "object" == typeof t && "default" in t ? t.
			default : t
		}
		function r(t, e) {
			ue(t).forEach(function(i) {
				return e(t[i], i)
			})
		}
		function a(t, e) {
			var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
			return ue(t).reduce(function(i, n) {
				return e(i, t[n], n)
			}, i)
		}
		function s(t) {
			for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
			return Object.assign ? Object.assign.apply(Object, [t].concat(i)) : (i.forEach(function(e) {
				e && r(e, function(e, i) {
					t[i] = e
				})
			}), t)
		}
		function o(t) {
			return !!t && "object" === (void 0 === t ? "undefined" : ie(t))
		}
		function u(t) {
			return o(t) && "[object Object]" === oe.call(t) && t.constructor === Object
		}
		function l(t, e) {
			if (!t || !e) return "";
			if ("function" == typeof Ct.getComputedStyle) {
				var i = Ct.getComputedStyle(t);
				return i ? i[e] : ""
			}
			return t.currentStyle[e] || ""
		}
		function c(t) {
			return "string" == typeof t && /\S/.test(t)
		}
		function d(t) {
			if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
		}
		function h(t) {
			return new RegExp("(^|\\s)" + t + "($|\\s)")
		}
		function p() {
			return Ot === Ct.document && void 0 !== Ot.createElement
		}
		function f(t) {
			return o(t) && 1 === t.nodeType
		}
		function m() {
			try {
				return Ct.parent !== Ct.self
			} catch (t) {
				return !0
			}
		}
		function g(t) {
			return function(e, i) {
				if (!c(e)) return Ot[t](null);
				c(i) && (i = Ot.querySelector(i));
				var n = f(i) ? i : Ot;
				return n[t] && n[t](e)
			}
		}
		function y() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
				e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments[3],
				r = Ot.createElement(t);
			return Object.getOwnPropertyNames(e).forEach(function(t) {
				var i = e[t]; - 1 !== t.indexOf("aria-") || "role" === t || "type" === t ? (pe.warn(At(fe, t, i)), r.setAttribute(t, i)) : "textContent" === t ? v(r, i) : r[t] = i
			}), Object.getOwnPropertyNames(i).forEach(function(t) {
				r.setAttribute(t, i[t])
			}), n && B(r, n), r
		}
		function v(t, e) {
			return void 0 === t.textContent ? t.innerText = e : t.textContent = e, t
		}
		function _(t, e) {
			e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
		}
		function b(t, e) {
			return d(e), t.classList ? t.classList.contains(e) : h(e).test(t.className)
		}
		function T(t, e) {
			return t.classList ? t.classList.add(e) : b(t, e) || (t.className = (t.className + " " + e).trim()), t
		}
		function S(t, e) {
			return t.classList ? t.classList.remove(e) : (d(e), t.className = t.className.split(/\s+/).filter(function(t) {
				return t !== e
			}).join(" ")), t
		}
		function w(t, e, i) {
			var n = b(t, e);
			if ("function" == typeof i && (i = i(t, e)), "boolean" != typeof i && (i = !n), i !== n) return i ? T(t, e) : S(t, e), t
		}
		function k(t, e) {
			Object.getOwnPropertyNames(e).forEach(function(i) {
				var n = e[i];
				null === n || void 0 === n || !1 === n ? t.removeAttribute(i) : t.setAttribute(i, !0 === n ? "" : n)
			})
		}
		function E(t) {
			var e = {};
			if (t && t.attributes && t.attributes.length > 0) for (var i = t.attributes, n = i.length - 1; n >= 0; n--) {
				var r = i[n].name,
					a = i[n].value;
				"boolean" != typeof t[r] && -1 === ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,".indexOf("," + r + ",") || (a = null !== a), e[r] = a
			}
			return e
		}
		function C(t, e) {
			return t.getAttribute(e)
		}
		function O(t, e, i) {
			t.setAttribute(e, i)
		}
		function A(t, e) {
			t.removeAttribute(e)
		}
		function P() {
			Ot.body.focus(), Ot.onselectstart = function() {
				return !1
			}
		}
		function x() {
			Ot.onselectstart = function() {
				return !0
			}
		}
		function I(t) {
			if (t && t.getBoundingClientRect && t.parentNode) {
				var e = t.getBoundingClientRect(),
					i = {};
				return ["bottom", "height", "left", "right", "top", "width"].forEach(function(t) {
					void 0 !== e[t] && (i[t] = e[t])
				}), i.height || (i.height = parseFloat(l(t, "height"))), i.width || (i.width = parseFloat(l(t, "width"))), i
			}
		}
		function L(t) {
			var e = void 0;
			if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {
				left: 0,
				top: 0
			};
			var i = Ot.documentElement,
				n = Ot.body,
				r = i.clientLeft || n.clientLeft || 0,
				a = Ct.pageXOffset || n.scrollLeft,
				s = e.left + a - r,
				o = i.clientTop || n.clientTop || 0,
				u = Ct.pageYOffset || n.scrollTop,
				l = e.top + u - o;
			return {
				left: Math.round(s),
				top: Math.round(l)
			}
		}
		function j(t, e) {
			var i = {}, n = L(t),
				r = t.offsetWidth,
				a = t.offsetHeight,
				s = n.top,
				o = n.left,
				u = e.pageY,
				l = e.pageX;
			return e.changedTouches && (l = e.changedTouches[0].pageX, u = e.changedTouches[0].pageY), i.y = Math.max(0, Math.min(1, (s - u + a) / a)), i.x = Math.max(0, Math.min(1, (l - o) / r)), i
		}
		function M(t) {
			return o(t) && 3 === t.nodeType
		}
		function D(t) {
			for (; t.firstChild;) t.removeChild(t.firstChild);
			return t
		}
		function R(t) {
			return "function" == typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map(function(t) {
				return "function" == typeof t && (t = t()), f(t) || M(t) ? t : "string" == typeof t && /\S/.test(t) ? Ot.createTextNode(t) : void 0
			}).filter(function(t) {
				return t
			})
		}
		function B(t, e) {
			return R(e).forEach(function(e) {
				return t.appendChild(e)
			}), t
		}
		function N(t, e) {
			return B(D(t), e)
		}
		function U(t) {
			return void 0 === t.button && void 0 === t.buttons || (0 === t.button && void 0 === t.buttons || (9 === $t || 0 === t.button && 1 === t.buttons))
		}
		function F() {
			return ve++
		}
		function H(t) {
			var e = t[be];
			return e || (e = t[be] = F()), _e[e] || (_e[e] = {}), _e[e]
		}
		function V(t) {
			var e = t[be];
			return !!e && !! Object.getOwnPropertyNames(_e[e]).length
		}
		function q(t) {
			var e = t[be];
			if (e) {
				delete _e[e];
				try {
					delete t[be]
				} catch (e) {
					t.removeAttribute ? t.removeAttribute(be) : t[be] = null
				}
			}
		}
		function G(t, e) {
			var i = H(t);
			0 === i.handlers[e].length && (delete i.handlers[e], t.removeEventListener ? t.removeEventListener(e, i.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && q(t)
		}
		function W(t, e, i, n) {
			i.forEach(function(i) {
				t(e, i, n)
			})
		}
		function z(t) {
			function e() {
				return !0
			}
			function i() {
				return !1
			}
			if (!t || !t.isPropagationStopped) {
				var n = t || Ct.event;
				t = {};
				for (var r in n) "layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && ("returnValue" === r && n.preventDefault || (t[r] = n[r]));
				if (t.target || (t.target = t.srcElement || Ot), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function() {
					n.preventDefault && n.preventDefault(), t.returnValue = !1, n.returnValue = !1, t.defaultPrevented = !0
				}, t.defaultPrevented = !1, t.stopPropagation = function() {
					n.stopPropagation && n.stopPropagation(), t.cancelBubble = !0, n.cancelBubble = !0, t.isPropagationStopped = e
				}, t.isPropagationStopped = i, t.stopImmediatePropagation = function() {
					n.stopImmediatePropagation && n.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
				}, t.isImmediatePropagationStopped = i, null !== t.clientX && void 0 !== t.clientX) {
					var a = Ot.documentElement,
						s = Ot.body;
					t.pageX = t.clientX + (a && a.scrollLeft || s && s.scrollLeft || 0) - (a && a.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (a && a.scrollTop || s && s.scrollTop || 0) - (a && a.clientTop || s && s.clientTop || 0)
				}
				t.which = t.charCode || t.keyCode, null !== t.button && void 0 !== t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
			}
			return t
		}
		function X(t, e, i) {
			if (Array.isArray(e)) return W(X, t, e, i);
			var n = H(t);
			if (n.handlers || (n.handlers = {}), n.handlers[e] || (n.handlers[e] = []), i.guid || (i.guid = F()), n.handlers[e].push(i), n.dispatcher || (n.disabled = !1, n.dispatcher = function(e, i) {
				if (!n.disabled) {
					e = z(e);
					var r = n.handlers[e.type];
					if (r) for (var a = r.slice(0), s = 0, o = a.length; s < o && !e.isImmediatePropagationStopped(); s++) try {
						a[s].call(t, e, i)
					} catch (t) {
						pe.error(t)
					}
				}
			}), 1 === n.handlers[e].length) if (t.addEventListener) {
				var r = !1;
				Te && Se.indexOf(e) > -1 && (r = {
					passive: !0
				}), t.addEventListener(e, n.dispatcher, r)
			} else t.attachEvent && t.attachEvent("on" + e, n.dispatcher)
		}
		function Y(t, e, i) {
			if (V(t)) {
				var n = H(t);
				if (n.handlers) {
					if (Array.isArray(e)) return W(Y, t, e, i);
					var r = function(t, e) {
						n.handlers[e] = [], G(t, e)
					};
					if (void 0 !== e) {
						var a = n.handlers[e];
						if (a) {
							if (!i) return void r(t, e);
							if (i.guid) for (var s = 0; s < a.length; s++) a[s].guid === i.guid && a.splice(s--, 1);
							G(t, e)
						}
					} else for (var o in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, o) && r(t, o)
				}
			}
		}
		function K(t, e, i) {
			var n = V(t) ? H(t) : {}, r = t.parentNode || t.ownerDocument;
			if ("string" == typeof e && (e = {
				type: e,
				target: t
			}), e = z(e), n.dispatcher && n.dispatcher.call(t, e, i), r && !e.isPropagationStopped() && !0 === e.bubbles) K.call(null, r, e, i);
			else if (!r && !e.defaultPrevented) {
				var a = H(e.target);
				e.target[e.type] && (a.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), a.disabled = !1)
			}
			return !e.defaultPrevented
		}
		function $(t, e, i) {
			if (Array.isArray(e)) return W($, t, e, i);
			var n = function n() {
				Y(t, e, n), i.apply(this, arguments)
			};
			n.guid = i.guid = i.guid || F(), X(t, e, n)
		}
		function J(t, e) {
			e && (Ee = e), Ct.setTimeout(Ce, t)
		}
		function Q(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = e.eventBusKey;
			if (i) {
				if (!t[i].nodeName) throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
				t.eventBusEl_ = t[i]
			} else t.eventBusEl_ = y("span", {
				className: "vjs-event-bus"
			});
			return s(t, Ue), t.on("dispose", function() {
				t.off(), Ct.setTimeout(function() {
					t.eventBusEl_ = null
				}, 0)
			}), t
		}
		function Z(t, e) {
			return s(t, Fe), t.state = s({}, t.state, e), "function" == typeof t.handleStateChanged && Le(t) && t.on("statechanged", t.handleStateChanged), t
		}
		function tt(t) {
			return "string" != typeof t ? t : t.charAt(0).toUpperCase() + t.slice(1)
		}
		function et(t, e) {
			return tt(t) === tt(e)
		}
		function it() {
			for (var t = {}, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
			return i.forEach(function(e) {
				e && r(e, function(e, i) {
					if (!u(e)) return void(t[i] = e);
					u(t[i]) || (t[i] = {}), t[i] = it(t[i], e)
				})
			}), t
		}
		function nt(t, e, i) {
			if ("number" != typeof e || e < 0 || e > i) throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is non-numeric or out of bounds (0-" + i + ").")
		}
		function rt(t, e, i, n) {
			return nt(t, n, i.length - 1), i[n][e]
		}
		function at(t) {
			return void 0 === t || 0 === t.length ? {
				length: 0,
				start: function() {
					throw new Error("This TimeRanges object is empty")
				},
				end: function() {
					throw new Error("This TimeRanges object is empty")
				}
			} : {
				length: t.length,
				start: rt.bind(null, "start", 0, t),
				end: rt.bind(null, "end", 1, t)
			}
		}
		function st(t, e) {
			return Array.isArray(t) ? at(t) : void 0 === t || void 0 === e ? at() : at([
				[t, e]
			])
		}
		function ot(t, e) {
			var i = 0,
				n = void 0,
				r = void 0;
			if (!e) return 0;
			t && t.length || (t = st(0, 0));
			for (var a = 0; a < t.length; a++) n = t.start(a), r = t.end(a), r > e && (r = e), i += r - n;
			return i / e
		}
		function ut(t) {
			if (t instanceof ut) return t;
			"number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : o(t) && ("number" == typeof t.code && (this.code = t.code), s(this, t)), this.message || (this.message = ut.defaultMessages[this.code] || "")
		}
		function lt(t) {
			return void 0 !== t && "function" == typeof t.then
		}
		function ct(t) {
			lt(t) && t.then(null, function(t) {})
		}
		function dt(t, e, i, n) {
			var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, a = t.textTracks();
			r.kind = e, i && (r.label = i), n && (r.language = n), r.tech = t;
			var s = new xi.text.TrackClass(r);
			return a.addTrack(s), s
		}
		function ht(t, e) {
			Li[t] = Li[t] || [], Li[t].push(e)
		}
		function pt(t, e, i) {
			t.setTimeout(function() {
				return vt(e, Li[e.type], i, t)
			}, 1)
		}
		function ft(t, e) {
			t.forEach(function(t) {
				return t.setTech && t.setTech(e)
			})
		}
		function mt(t, e, i) {
			return t.reduceRight(yt(i), e[i]())
		}
		function gt(t, e, i, n) {
			return e[i](t.reduce(yt(i), n))
		}
		function yt(t) {
			return function(e, i) {
				return i[t] ? i[t](e) : e
			}
		}
		function vt() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
				i = arguments[2],
				n = arguments[3],
				r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
				a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
				o = e[0],
				u = e.slice(1);
			if ("string" == typeof o) vt(t, Li[o], i, n, r, a);
			else if (o) {
				var l = o(n);
				l.setSource(s({}, t), function(e, s) {
					if (e) return vt(t, u, i, n, r, a);
					r.push(l), vt(s, t.type === s.type ? u : Li[s.type], i, n, r, a)
				})
			} else u.length ? vt(t, u, i, n, r, a) : a ? i(t, r) : vt(t, Li["*"], i, n, r, !0)
		}
		function _t(t, e) {
			return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
		}
		function bt(t, e, i) {
			try {
				t.style[e] = i
			} catch (t) {
				return
			}
		}
		function Tt(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
			t = t < 0 ? 0 : t;
			var i = Math.floor(t % 60),
				n = Math.floor(t / 60 % 60),
				r = Math.floor(t / 3600),
				a = Math.floor(e / 60 % 60),
				s = Math.floor(e / 3600);
			return (isNaN(t) || t === 1 / 0) && (r = n = i = "-"), r = r > 0 || s > 0 ? r + ":" : "", n = ((r || a >= 10) && n < 10 ? "0" + n : n) + ":", i = i < 10 ? "0" + i : i, r + n + i
		}
		function St(t, e) {
			if (e && (t = e(t)), t && "none" !== t) return t
		}
		function wt(t, e) {
			return St(t.options[t.options.selectedIndex].value, e)
		}
		function kt(t, e, i) {
			if (e) for (var n = 0; n < t.options.length; n++) if (St(t.options[n].value, i) === e) {
				t.selectedIndex = n;
				break
			}
		}
		function Et(t, e, i) {
			var n = void 0;
			if ("string" == typeof t) {
				var r = Et.getPlayers();
				if (0 === t.indexOf("#") && (t = t.slice(1)), r[t]) return e && pe.warn('Player "' + t + '" is already initialised. Options will not be applied.'), i && r[t].ready(i), r[t];
				n = me("#" + t)
			} else n = t;
			if (!n || !n.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
			if (n.player || rr.players[n.playerId]) return n.player || rr.players[n.playerId];
			f(n) && !Ot.body.contains(n) && pe.warn("The element supplied is not included in the DOM"), e = e || {}, Et.hooks("beforesetup").forEach(function(t) {
				var i = t(n, it(e));
				if (!o(i) || Array.isArray(i)) return void pe.error("please return an object in beforesetup hooks");
				e = it(e, i)
			});
			var a = He.getComponent("Player"),
				s = new a(n, e, i);
			return Et.hooks("setup").forEach(function(t) {
				return t(s)
			}), s
		}
		var Ct = n(i(1)),
			Ot = n(i(6)),
			At = n(i(8)),
			Pt = n(i(9)),
			xt = n(i(10)),
			It = n(i(15)),
			Lt = "6.6.0",
			jt = Ct.navigator && Ct.navigator.userAgent || "",
			Mt = /AppleWebKit\/([\d.]+)/i.exec(jt),
			Dt = Mt ? parseFloat(Mt.pop()) : null,
			Rt = /iPad/i.test(jt),
			Bt = /iPhone/i.test(jt) && !Rt,
			Nt = /iPod/i.test(jt),
			Ut = Bt || Rt || Nt,
			Ft = function() {
				var t = jt.match(/OS (\d+)_/i);
				return t && t[1] ? t[1] : null
			}(),
			Ht = /Android/i.test(jt),
			Vt = function() {
				var t = jt.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
				if (!t) return null;
				var e = t[1] && parseFloat(t[1]),
					i = t[2] && parseFloat(t[2]);
				return e && i ? parseFloat(t[1] + "." + t[2]) : e || null
			}(),
			qt = Ht && /webkit/i.test(jt) && Vt < 2.3,
			Gt = Ht && Vt < 5 && Dt < 537,
			Wt = /Firefox/i.test(jt),
			zt = /Edge/i.test(jt),
			Xt = !zt && /Chrome/i.test(jt),
			Yt = function() {
				var t = jt.match(/Chrome\/(\d+)/);
				return t && t[1] ? parseFloat(t[1]) : null
			}(),
			Kt = /MSIE\s8\.0/.test(jt),
			$t = function() {
				var t = /MSIE\s(\d+)\.\d/.exec(jt),
					e = t && parseFloat(t[1]);
				return !e && /Trident\/7.0/i.test(jt) && /rv:11.0/.test(jt) && (e = 11), e
			}(),
			Jt = /Safari/i.test(jt) && !Xt && !Ht && !zt,
			Qt = Jt || Ut,
			Zt = p() && ("ontouchstart" in Ct || Ct.DocumentTouch && Ct.document instanceof Ct.DocumentTouch),
			te = p() && "backgroundSize" in Ct.document.createElement("video").style,
			ee = (Object.freeze || Object)({
				IS_IPAD: Rt,
				IS_IPHONE: Bt,
				IS_IPOD: Nt,
				IS_IOS: Ut,
				IOS_VERSION: Ft,
				IS_ANDROID: Ht,
				ANDROID_VERSION: Vt,
				IS_OLD_ANDROID: qt,
				IS_NATIVE_ANDROID: Gt,
				IS_FIREFOX: Wt,
				IS_EDGE: zt,
				IS_CHROME: Xt,
				CHROME_VERSION: Yt,
				IS_IE8: Kt,
				IE_VERSION: $t,
				IS_SAFARI: Jt,
				IS_ANY_SAFARI: Qt,
				TOUCH_ENABLED: Zt,
				BACKGROUND_SIZE_SUPPORTED: te
			}),
			ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, ne = function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}, re = function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}, ae = function(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}, se = function(t, e) {
				return t.raw = e, t
			}, oe = Object.prototype.toString,
			ue = function(t) {
				return o(t) ? Object.keys(t) : []
			}, le = void 0,
			ce = "info",
			de = [],
			he = function(t, e) {
				var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !! $t && $t < 11,
					n = le.levels[ce],
					r = new RegExp("^(" + n + ")$");
				if ("log" !== t && e.unshift(t.toUpperCase() + ":"), de && de.push([].concat(e)), e.unshift("VIDEOJS:"), Ct.console) {
					var a = Ct.console[t];
					a || "debug" !== t || (a = Ct.console.info || Ct.console.log), a && n && r.test(t) && (i && (e = e.map(function(t) {
						if (o(t) || Array.isArray(t)) try {
							return JSON.stringify(t)
						} catch (e) {
							return String(t)
						}
						return String(t)
					}).join(" ")), a.apply ? a[Array.isArray(e) ? "apply" : "call"](Ct.console, e) : a(e))
				}
			};
		le = function() {
			for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
			he("log", e)
		}, le.levels = {
			all: "debug|log|warn|error",
			off: "",
			debug: "debug|log|warn|error",
			info: "log|warn|error",
			warn: "warn|error",
			error: "error",
			DEFAULT: ce
		}, le.level = function(t) {
			if ("string" == typeof t) {
				if (!le.levels.hasOwnProperty(t)) throw new Error('"' + t + '" in not a valid log level');
				ce = t
			}
			return ce
		}, le.history = function() {
			return de ? [].concat(de) : []
		}, le.history.clear = function() {
			de && (de.length = 0)
		}, le.history.disable = function() {
			null !== de && (de.length = 0, de = null)
		}, le.history.enable = function() {
			null === de && (de = [])
		}, le.error = function() {
			for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
			return he("error", e)
		}, le.warn = function() {
			for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
			return he("warn", e)
		}, le.debug = function() {
			for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
			return he("debug", e)
		};
		var pe = le,
			fe = se(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]),
			me = g("querySelector"),
			ge = g("querySelectorAll"),
			ye = (Object.freeze || Object)({
				isReal: p,
				isEl: f,
				isInFrame: m,
				createEl: y,
				textContent: v,
				prependTo: _,
				hasClass: b,
				addClass: T,
				removeClass: S,
				toggleClass: w,
				setAttributes: k,
				getAttributes: E,
				getAttribute: C,
				setAttribute: O,
				removeAttribute: A,
				blockTextSelection: P,
				unblockTextSelection: x,
				getBoundingClientRect: I,
				findPosition: L,
				getPointerPosition: j,
				isTextNode: M,
				emptyEl: D,
				normalizeContent: R,
				appendContent: B,
				insertContent: N,
				isSingleLeftClick: U,
				$: me,
				$$: ge
			}),
			ve = 1,
			_e = {}, be = "vdata" + (new Date).getTime(),
			Te = !1;
		! function() {
			try {
				var t = Object.defineProperty({}, "passive", {
					get: function() {
						Te = !0
					}
				});
				Ct.addEventListener("test", null, t), Ct.removeEventListener("test", null, t)
			} catch (t) {}
		}();
		var Se = ["touchstart", "touchmove"],
			we = (Object.freeze || Object)({
				fixEvent: z,
				on: X,
				off: Y,
				trigger: K,
				one: $
			}),
			ke = !1,
			Ee = void 0,
			Ce = function() {
				if (p()) {
					var t = Ot.getElementsByTagName("video"),
						e = Ot.getElementsByTagName("audio"),
						i = Ot.getElementsByTagName("video-js"),
						n = [];
					if (t && t.length > 0) for (var r = 0, a = t.length; r < a; r++) n.push(t[r]);
					if (e && e.length > 0) for (var s = 0, o = e.length; s < o; s++) n.push(e[s]);
					if (i && i.length > 0) for (var u = 0, l = i.length; u < l; u++) n.push(i[u]);
					if (n && n.length > 0) for (var c = 0, d = n.length; c < d; c++) {
						var h = n[c];
						if (!h || !h.getAttribute) {
							J(1);
							break
						}
						if (void 0 === h.player) {
							var f = h.getAttribute("data-setup");
							null !== f && Ee(h)
						}
					} else ke || J(1)
				}
			};
		p() && "complete" === Ot.readyState ? ke = !0 : $(Ct, "load", function() {
			ke = !0
		});
		var Oe = function(t) {
			var e = Ot.createElement("style");
			return e.className = t, e
		}, Ae = function(t, e) {
			t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
		}, Pe = function(t, e, i) {
			e.guid || (e.guid = F());
			var n = function() {
				return e.apply(t, arguments)
			};
			return n.guid = i ? i + "_" + e.guid : e.guid, n
		}, xe = function(t, e) {
			var i = Date.now();
			return function() {
				var n = Date.now();
				n - i >= e && (t.apply(void 0, arguments), i = n)
			}
		}, Ie = function() {};
		Ie.prototype.allowedEvents_ = {}, Ie.prototype.on = function(t, e) {
			var i = this.addEventListener;
			this.addEventListener = function() {}, X(this, t, e), this.addEventListener = i
		}, Ie.prototype.addEventListener = Ie.prototype.on, Ie.prototype.off = function(t, e) {
			Y(this, t, e)
		}, Ie.prototype.removeEventListener = Ie.prototype.off, Ie.prototype.one = function(t, e) {
			var i = this.addEventListener;
			this.addEventListener = function() {}, $(this, t, e), this.addEventListener = i
		}, Ie.prototype.trigger = function(t) {
			var e = t.type || t;
			"string" == typeof t && (t = {
				type: e
			}), t = z(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), K(this, t)
		}, Ie.prototype.dispatchEvent = Ie.prototype.trigger;
		var Le = function(t) {
			return t instanceof Ie || !! t.eventBusEl_ && ["on", "one", "off", "trigger"].every(function(e) {
				return "function" == typeof t[e]
			})
		}, je = function(t) {
			return "string" == typeof t && /\S/.test(t) || Array.isArray(t) && !! t.length
		}, Me = function(t) {
			if (!t.nodeName && !Le(t)) throw new Error("Invalid target; must be a DOM node or evented object.")
		}, De = function(t) {
			if (!je(t)) throw new Error("Invalid event type; must be a non-empty string or array.")
		}, Re = function(t) {
			if ("function" != typeof t) throw new Error("Invalid listener; must be a function.")
		}, Be = function(t, e) {
			var i = e.length < 3 || e[0] === t || e[0] === t.eventBusEl_,
				n = void 0,
				r = void 0,
				a = void 0;
			return i ? (n = t.eventBusEl_, e.length >= 3 && e.shift(), r = e[0], a = e[1]) : (n = e[0], r = e[1], a = e[2]), Me(n), De(r), Re(a), a = Pe(t, a), {
				isTargetingSelf: i,
				target: n,
				type: r,
				listener: a
			}
		}, Ne = function(t, e, i, n) {
			Me(t), t.nodeName ? we[e](t, i, n) : t[e](i, n)
		}, Ue = {
			on: function() {
				for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
				var r = Be(this, i),
					a = r.isTargetingSelf,
					s = r.target,
					o = r.type,
					u = r.listener;
				if (Ne(s, "on", o, u), !a) {
					var l = function() {
						return t.off(s, o, u)
					};
					l.guid = u.guid;
					var c = function() {
						return t.off("dispose", l)
					};
					c.guid = u.guid, Ne(this, "on", "dispose", l), Ne(s, "on", "dispose", c)
				}
			},
			one: function() {
				for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
				var r = Be(this, i),
					a = r.isTargetingSelf,
					s = r.target,
					o = r.type,
					u = r.listener;
				if (a) Ne(s, "one", o, u);
				else {
					var l = function e() {
						for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
						t.off(s, o, e), u.apply(null, n)
					};
					l.guid = u.guid, Ne(s, "one", o, l)
				}
			},
			off: function(t, e, i) {
				if (!t || je(t)) Y(this.eventBusEl_, t, e);
				else {
					var n = t,
						r = e;
					Me(n), De(r), Re(i), i = Pe(this, i), this.off("dispose", i), n.nodeName ? (Y(n, r, i), Y(n, "dispose", i)) : Le(n) && (n.off(r, i), n.off("dispose", i))
				}
			},
			trigger: function(t, e) {
				return K(this.eventBusEl_, t, e)
			}
		}, Fe = {
			state: {},
			setState: function(t) {
				var e = this;
				"function" == typeof t && (t = t());
				var i = void 0;
				return r(t, function(t, n) {
					e.state[n] !== t && (i = i || {}, i[n] = {
						from: e.state[n],
						to: t
					}), e.state[n] = t
				}), i && Le(this) && this.trigger({
					changes: i,
					type: "statechanged"
				}), i
			}
		}, He = function() {
			function t(e, i, n) {
				if (ne(this, t), !e && this.play ? this.player_ = e = this : this.player_ = e, this.options_ = it({}, this.options_), i = this.options_ = it(this.options_, i), this.id_ = i.id || i.el && i.el.id, !this.id_) {
					var r = e && e.id && e.id() || "no_player";
					this.id_ = r + "_component_" + F()
				}
				this.name_ = i.name || null, i.el ? this.el_ = i.el : !1 !== i.createEl && (this.el_ = this.createEl()), !1 !== i.evented && Q(this, {
					eventBusKey: this.el_ ? "el_" : null
				}), Z(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, !1 !== i.initChildren && this.initChildren(), this.ready(n), !1 !== i.reportTouchActivity && this.enableTouchActivity()
			}
			return t.prototype.dispose = function() {
				if (this.trigger({
					type: "dispose",
					bubbles: !1
				}), this.children_) for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
				this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), q(this.el_), this.el_ = null), this.player_ = null
			}, t.prototype.player = function() {
				return this.player_
			}, t.prototype.options = function(t) {
				return pe.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), t ? (this.options_ = it(this.options_, t), this.options_) : this.options_
			}, t.prototype.el = function() {
				return this.el_
			}, t.prototype.createEl = function(t, e, i) {
				return y(t, e, i)
			}, t.prototype.localize = function(t, e) {
				var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
					n = this.player_.language && this.player_.language(),
					r = this.player_.languages && this.player_.languages(),
					a = r && r[n],
					s = n && n.split("-")[0],
					o = r && r[s],
					u = i;
				return a && a[t] ? u = a[t] : o && o[t] && (u = o[t]), e && (u = u.replace(/\{(\d+)\}/g, function(t, i) {
					var n = e[i - 1],
						r = n;
					return void 0 === n && (r = t), r
				})), u
			}, t.prototype.contentEl = function() {
				return this.contentEl_ || this.el_
			}, t.prototype.id = function() {
				return this.id_
			}, t.prototype.name = function() {
				return this.name_
			}, t.prototype.children = function() {
				return this.children_
			}, t.prototype.getChildById = function(t) {
				return this.childIndex_[t]
			}, t.prototype.getChild = function(t) {
				if (t) return t = tt(t), this.childNameIndex_[t]
			}, t.prototype.addChild = function(e) {
				var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
					r = void 0,
					a = void 0;
				if ("string" == typeof e) {
					a = tt(e);
					var s = i.componentClass || a;
					i.name = a;
					var o = t.getComponent(s);
					if (!o) throw new Error("Component " + s + " does not exist");
					if ("function" != typeof o) return null;
					r = new o(this.player_ || this, i)
				} else r = e;
				if (this.children_.splice(n, 0, r), "function" == typeof r.id && (this.childIndex_[r.id()] = r), a = a || r.name && tt(r.name()), a && (this.childNameIndex_[a] = r), "function" == typeof r.el && r.el()) {
					var u = this.contentEl().children,
						l = u[n] || null;
					this.contentEl().insertBefore(r.el(), l)
				}
				return r
			}, t.prototype.removeChild = function(t) {
				if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
					for (var e = !1, i = this.children_.length - 1; i >= 0; i--) if (this.children_[i] === t) {
						e = !0, this.children_.splice(i, 1);
						break
					}
					if (e) {
						this.childIndex_[t.id()] = null, this.childNameIndex_[t.name()] = null;
						var n = t.el();
						n && n.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
					}
				}
			}, t.prototype.initChildren = function() {
				var e = this,
					i = this.options_.children;
				if (i) {
					var n = this.options_,
						r = function(t) {
							var i = t.name,
								r = t.opts;
							if (void 0 !== n[i] && (r = n[i]), !1 !== r) {
								!0 === r && (r = {}), r.playerOptions = e.options_.playerOptions;
								var a = e.addChild(i, r);
								a && (e[i] = a)
							}
						}, a = void 0,
						s = t.getComponent("Tech");
					a = Array.isArray(i) ? i : Object.keys(i), a.concat(Object.keys(this.options_).filter(function(t) {
						return !a.some(function(e) {
							return "string" == typeof e ? t === e : t === e.name
						})
					})).map(function(t) {
						var n = void 0,
							r = void 0;
						return "string" == typeof t ? (n = t, r = i[n] || e.options_[n] || {}) : (n = t.name, r = t), {
							name: n,
							opts: r
						}
					}).filter(function(e) {
						var i = t.getComponent(e.opts.componentClass || tt(e.name));
						return i && !s.isTech(i)
					}).forEach(r)
				}
			}, t.prototype.buildCSSClass = function() {
				return ""
			}, t.prototype.ready = function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (t) return this.isReady_ ? void(e ? t.call(this) : this.setTimeout(t, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(t))
			}, t.prototype.triggerReady = function() {
				this.isReady_ = !0, this.setTimeout(function() {
					var t = this.readyQueue_;
					this.readyQueue_ = [], t && t.length > 0 && t.forEach(function(t) {
						t.call(this)
					}, this), this.trigger("ready")
				}, 1)
			}, t.prototype.$ = function(t, e) {
				return me(t, e || this.contentEl())
			}, t.prototype.$$ = function(t, e) {
				return ge(t, e || this.contentEl())
			}, t.prototype.hasClass = function(t) {
				return b(this.el_, t)
			}, t.prototype.addClass = function(t) {
				T(this.el_, t)
			}, t.prototype.removeClass = function(t) {
				S(this.el_, t)
			}, t.prototype.toggleClass = function(t, e) {
				w(this.el_, t, e)
			}, t.prototype.show = function() {
				this.removeClass("vjs-hidden")
			}, t.prototype.hide = function() {
				this.addClass("vjs-hidden")
			}, t.prototype.lockShowing = function() {
				this.addClass("vjs-lock-showing")
			}, t.prototype.unlockShowing = function() {
				this.removeClass("vjs-lock-showing")
			}, t.prototype.getAttribute = function(t) {
				return C(this.el_, t)
			}, t.prototype.setAttribute = function(t, e) {
				O(this.el_, t, e)
			}, t.prototype.removeAttribute = function(t) {
				A(this.el_, t)
			}, t.prototype.width = function(t, e) {
				return this.dimension("width", t, e)
			}, t.prototype.height = function(t, e) {
				return this.dimension("height", t, e)
			}, t.prototype.dimensions = function(t, e) {
				this.width(t, !0), this.height(e)
			}, t.prototype.dimension = function(t, e, i) {
				if (void 0 !== e) return null !== e && e === e || (e = 0), -1 !== ("" + e).indexOf("%") || -1 !== ("" + e).indexOf("px") ? this.el_.style[t] = e : this.el_.style[t] = "auto" === e ? "" : e + "px", void(i || this.trigger("componentresize"));
				if (!this.el_) return 0;
				var n = this.el_.style[t],
					r = n.indexOf("px");
				return -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + tt(t)], 10)
			}, t.prototype.currentDimension = function(t) {
				var e = 0;
				if ("width" !== t && "height" !== t) throw new Error("currentDimension only accepts width or height value");
				if ("function" == typeof Ct.getComputedStyle) {
					var i = Ct.getComputedStyle(this.el_);
					e = i.getPropertyValue(t) || i[t]
				}
				if (0 === (e = parseFloat(e))) {
					var n = "offset" + tt(t);
					e = this.el_[n]
				}
				return e
			}, t.prototype.currentDimensions = function() {
				return {
					width: this.currentDimension("width"),
					height: this.currentDimension("height")
				}
			}, t.prototype.currentWidth = function() {
				return this.currentDimension("width")
			}, t.prototype.currentHeight = function() {
				return this.currentDimension("height")
			}, t.prototype.focus = function() {
				this.el_.focus()
			}, t.prototype.blur = function() {
				this.el_.blur()
			}, t.prototype.emitTapEvents = function() {
				var t = 0,
					e = null,
					i = void 0;
				this.on("touchstart", function(n) {
					1 === n.touches.length && (e = {
						pageX: n.touches[0].pageX,
						pageY: n.touches[0].pageY
					}, t = (new Date).getTime(), i = !0)
				}), this.on("touchmove", function(t) {
					if (t.touches.length > 1) i = !1;
					else if (e) {
						var n = t.touches[0].pageX - e.pageX,
							r = t.touches[0].pageY - e.pageY,
							a = Math.sqrt(n * n + r * r);
						a > 10 && (i = !1)
					}
				});
				var n = function() {
					i = !1
				};
				this.on("touchleave", n), this.on("touchcancel", n), this.on("touchend", function(n) {
					if (e = null, !0 === i) {
						(new Date).getTime() - t < 200 && (n.preventDefault(), this.trigger("tap"))
					}
				})
			}, t.prototype.enableTouchActivity = function() {
				if (this.player() && this.player().reportUserActivity) {
					var t = Pe(this.player(), this.player().reportUserActivity),
						e = void 0;
					this.on("touchstart", function() {
						t(), this.clearInterval(e), e = this.setInterval(t, 250)
					});
					var i = function(i) {
						t(), this.clearInterval(e)
					};
					this.on("touchmove", t), this.on("touchend", i), this.on("touchcancel", i)
				}
			}, t.prototype.setTimeout = function(t, e) {
				var i = this;
				t = Pe(this, t);
				var n = Ct.setTimeout(t, e),
					r = function() {
						return i.clearTimeout(n)
					};
				return r.guid = "vjs-timeout-" + n, this.on("dispose", r), n
			}, t.prototype.clearTimeout = function(t) {
				Ct.clearTimeout(t);
				var e = function() {};
				return e.guid = "vjs-timeout-" + t, this.off("dispose", e), t
			}, t.prototype.setInterval = function(t, e) {
				var i = this;
				t = Pe(this, t);
				var n = Ct.setInterval(t, e),
					r = function() {
						return i.clearInterval(n)
					};
				return r.guid = "vjs-interval-" + n, this.on("dispose", r), n
			}, t.prototype.clearInterval = function(t) {
				Ct.clearInterval(t);
				var e = function() {};
				return e.guid = "vjs-interval-" + t, this.off("dispose", e), t
			}, t.prototype.requestAnimationFrame = function(t) {
				var e = this;
				if (this.supportsRaf_) {
					t = Pe(this, t);
					var i = Ct.requestAnimationFrame(t),
						n = function() {
							return e.cancelAnimationFrame(i)
						};
					return n.guid = "vjs-raf-" + i, this.on("dispose", n), i
				}
				return this.setTimeout(t, 1e3 / 60)
			}, t.prototype.cancelAnimationFrame = function(t) {
				if (this.supportsRaf_) {
					Ct.cancelAnimationFrame(t);
					var e = function() {};
					return e.guid = "vjs-raf-" + t, this.off("dispose", e), t
				}
				return this.clearTimeout(t)
			}, t.registerComponent = function(e, i) {
				if ("string" != typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
				var n = t.getComponent("Tech"),
					r = n && n.isTech(i),
					a = t === i || t.prototype.isPrototypeOf(i.prototype);
				if (r || !a) {
					var s = void 0;
					throw s = r ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + e + '"; ' + s + ".")
				}
				e = tt(e), t.components_ || (t.components_ = {});
				var o = t.getComponent("Player");
				if ("Player" === e && o && o.players) {
					var u = o.players,
						l = Object.keys(u);
					if (u && l.length > 0 && l.map(function(t) {
						return u[t]
					}).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
				}
				return t.components_[e] = i, i
			}, t.getComponent = function(e) {
				if (e) return e = tt(e), t.components_ && t.components_[e] ? t.components_[e] : void 0
			}, t
		}();
		He.prototype.supportsRaf_ = "function" == typeof Ct.requestAnimationFrame && "function" == typeof Ct.cancelAnimationFrame, He.registerComponent("Component", He);
		for (var Ve = {}, qe = [
			["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
			["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
			["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
			["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
			["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
		], Ge = qe[0], We = void 0, ze = 0; ze < qe.length; ze++) if (qe[ze][1] in Ot) {
			We = qe[ze];
			break
		}
		if (We) for (var Xe = 0; Xe < We.length; Xe++) Ve[Ge[Xe]] = We[Xe];
		ut.prototype.code = 0, ut.prototype.message = "", ut.prototype.status = null, ut.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], ut.defaultMessages = {
			1: "You aborted the media playback",
			2: "A network error caused the media download to fail part-way.",
			3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
			4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
			5: "The media is encrypted and we do not have the keys to decrypt it."
		};
		for (var Ye = 0; Ye < ut.errorTypes.length; Ye++) ut[ut.errorTypes[Ye]] = Ye, ut.prototype[ut.errorTypes[Ye]] = Ye;
		var Ke = function(t) {
			return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(e, i, n) {
				return t[i] && (e[i] = t[i]), e
			}, {
				cues: t.cues && Array.prototype.map.call(t.cues, function(t) {
					return {
						startTime: t.startTime,
						endTime: t.endTime,
						text: t.text,
						id: t.id
					}
				})
			})
		}, $e = function(t) {
			var e = t.$$("track"),
				i = Array.prototype.map.call(e, function(t) {
					return t.track
				});
			return Array.prototype.map.call(e, function(t) {
				var e = Ke(t.track);
				return t.src && (e.src = t.src), e
			}).concat(Array.prototype.filter.call(t.textTracks(), function(t) {
				return -1 === i.indexOf(t)
			}).map(Ke))
		}, Je = function(t, e) {
			return t.forEach(function(t) {
				var i = e.addRemoteTextTrack(t).track;
				!t.src && t.cues && t.cues.forEach(function(t) {
					return i.addCue(t)
				})
			}), e.textTracks()
		}, Qe = {
			textTracksToJson: $e,
			jsonToTextTracks: Je,
			trackToJson_: Ke
		}, Ze = "vjs-modal-dialog",
			ti = function(t) {
				function e(i, n) {
					ne(this, e);
					var r = ae(this, t.call(this, i, n));
					return r.opened_ = r.hasBeenOpened_ = r.hasBeenFilled_ = !1, r.closeable(!r.options_.uncloseable), r.content(r.options_.content), r.contentEl_ = y("div", {
						className: Ze + "-content"
					}, {
						role: "document"
					}), r.descEl_ = y("p", {
						className: Ze + "-description vjs-control-text",
						id: r.el().getAttribute("aria-describedby")
					}), v(r.descEl_, r.description()), r.el_.appendChild(r.descEl_), r.el_.appendChild(r.contentEl_), r
				}
				return re(e, t), e.prototype.createEl = function() {
					return t.prototype.createEl.call(this, "div", {
						className: this.buildCSSClass(),
						tabIndex: -1
					}, {
						"aria-describedby": this.id() + "_description",
						"aria-hidden": "true",
						"aria-label": this.label(),
						role: "dialog"
					})
				}, e.prototype.dispose = function() {
					this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, t.prototype.dispose.call(this)
				}, e.prototype.buildCSSClass = function() {
					return Ze + " vjs-hidden " + t.prototype.buildCSSClass.call(this)
				}, e.prototype.handleKeyPress = function(t) {
					27 === t.which && this.closeable() && this.close()
				}, e.prototype.label = function() {
					return this.localize(this.options_.label || "Modal Window")
				}, e.prototype.description = function() {
					var t = this.options_.description || this.localize("This is a modal window.");
					return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), t
				}, e.prototype.open = function() {
					if (!this.opened_) {
						var t = this.player();
						this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !t.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && t.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", Pe(this, this.handleKeyPress)), this.hadControls_ = t.controls(), t.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
					}
				}, e.prototype.opened = function(t) {
					return "boolean" == typeof t && this[t ? "open" : "close"](), this.opened_
				}, e.prototype.close = function() {
					if (this.opened_) {
						var t = this.player();
						this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && t.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", Pe(this, this.handleKeyPress)), this.hadControls_ && t.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
					}
				}, e.prototype.closeable = function(t) {
					if ("boolean" == typeof t) {
						var e = this.closeable_ = !! t,
							i = this.getChild("closeButton");
						if (e && !i) {
							var n = this.contentEl_;
							this.contentEl_ = this.el_, i = this.addChild("closeButton", {
								controlText: "Close Modal Dialog"
							}), this.contentEl_ = n, this.on(i, "close", this.close)
						}!e && i && (this.off(i, "close", this.close), this.removeChild(i), i.dispose())
					}
					return this.closeable_
				}, e.prototype.fill = function() {
					this.fillWith(this.content())
				}, e.prototype.fillWith = function(t) {
					var e = this.contentEl(),
						i = e.parentNode,
						n = e.nextSibling;
					this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(e), this.empty(), N(e, t), this.trigger("modalfill"), n ? i.insertBefore(e, n) : i.appendChild(e);
					var r = this.getChild("closeButton");
					r && i.appendChild(r.el_)
				}, e.prototype.empty = function() {
					this.trigger("beforemodalempty"), D(this.contentEl()), this.trigger("modalempty")
				}, e.prototype.content = function(t) {
					return void 0 !== t && (this.content_ = t), this.content_
				}, e.prototype.conditionalFocus_ = function() {
					var t = Ot.activeElement,
						e = this.player_.el_;
					this.previouslyActiveEl_ = null, (e.contains(t) || e === t) && (this.previouslyActiveEl_ = t, this.focus(), this.on(Ot, "keydown", this.handleKeyDown))
				}, e.prototype.conditionalBlur_ = function() {
					this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null), this.off(Ot, "keydown", this.handleKeyDown)
				}, e.prototype.handleKeyDown = function(t) {
					if (9 === t.which) {
						for (var e = this.focusableEls_(), i = this.el_.querySelector(":focus"), n = void 0, r = 0; r < e.length; r++) if (i === e[r]) {
							n = r;
							break
						}
						Ot.activeElement === this.el_ && (n = 0), t.shiftKey && 0 === n ? (e[e.length - 1].focus(), t.preventDefault()) : t.shiftKey || n !== e.length - 1 || (e[0].focus(), t.preventDefault())
					}
				}, e.prototype.focusableEls_ = function() {
					var t = this.el_.querySelectorAll("*");
					return Array.prototype.filter.call(t, function(t) {
						return (t instanceof Ct.HTMLAnchorElement || t instanceof Ct.HTMLAreaElement) && t.hasAttribute("href") || (t instanceof Ct.HTMLInputElement || t instanceof Ct.HTMLSelectElement || t instanceof Ct.HTMLTextAreaElement || t instanceof Ct.HTMLButtonElement) && !t.hasAttribute("disabled") || t instanceof Ct.HTMLIFrameElement || t instanceof Ct.HTMLObjectElement || t instanceof Ct.HTMLEmbedElement || t.hasAttribute("tabindex") && -1 !== t.getAttribute("tabindex") || t.hasAttribute("contenteditable")
					})
				}, e
			}(He);
		ti.prototype.options_ = {
			pauseOnOpen: !0,
			temporary: !0
		}, He.registerComponent("ModalDialog", ti);
		var ei = function(t) {
			function e() {
				var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
				ne(this, e);
				var a = ae(this, t.call(this));
				if (!r && (r = a, Kt)) {
					r = Ot.createElement("custom");
					for (var s in e.prototype) "constructor" !== s && (r[s] = e.prototype[s])
				}
				r.tracks_ = [], Object.defineProperty(r, "length", {
					get: function() {
						return this.tracks_.length
					}
				});
				for (var o = 0; o < n.length; o++) r.addTrack(n[o]);
				return i = r, ae(a, i)
			}
			return re(e, t), e.prototype.addTrack = function(t) {
				var e = this.tracks_.length;
				"" + e in this || Object.defineProperty(this, e, {
					get: function() {
						return this.tracks_[e]
					}
				}), -1 === this.tracks_.indexOf(t) && (this.tracks_.push(t), this.trigger({
					track: t,
					type: "addtrack"
				}))
			}, e.prototype.removeTrack = function(t) {
				for (var e = void 0, i = 0, n = this.length; i < n; i++) if (this[i] === t) {
					e = this[i], e.off && e.off(), this.tracks_.splice(i, 1);
					break
				}
				e && this.trigger({
					track: e,
					type: "removetrack"
				})
			}, e.prototype.getTrackById = function(t) {
				for (var e = null, i = 0, n = this.length; i < n; i++) {
					var r = this[i];
					if (r.id === t) {
						e = r;
						break
					}
				}
				return e
			}, e
		}(Ie);
		ei.prototype.allowedEvents_ = {
			change: "change",
			addtrack: "addtrack",
			removetrack: "removetrack"
		};
		for (var ii in ei.prototype.allowedEvents_) ei.prototype["on" + ii] = null;
		var ni = function(t, e) {
			for (var i = 0; i < t.length; i++) Object.keys(t[i]).length && e.id !== t[i].id && (t[i].enabled = !1)
		}, ri = function(t) {
			function e() {
				var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
				ne(this, e);
				for (var a = void 0, s = r.length - 1; s >= 0; s--) if (r[s].enabled) {
					ni(r, r[s]);
					break
				}
				if (Kt) {
					a = Ot.createElement("custom");
					for (var o in ei.prototype) "constructor" !== o && (a[o] = ei.prototype[o]);
					for (var u in e.prototype) "constructor" !== u && (a[u] = e.prototype[u])
				}
				return a = i = ae(this, t.call(this, r, a)), a.changing_ = !1, n = a, ae(i, n)
			}
			return re(e, t), e.prototype.addTrack = function(e) {
				var i = this;
				e.enabled && ni(this, e), t.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("enabledchange", function() {
					i.changing_ || (i.changing_ = !0, ni(i, e), i.changing_ = !1, i.trigger("change"))
				})
			}, e
		}(ei),
			ai = function(t, e) {
				for (var i = 0; i < t.length; i++) Object.keys(t[i]).length && e.id !== t[i].id && (t[i].selected = !1)
			}, si = function(t) {
				function e() {
					var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
					ne(this, e);
					for (var a = void 0, s = r.length - 1; s >= 0; s--) if (r[s].selected) {
						ai(r, r[s]);
						break
					}
					if (Kt) {
						a = Ot.createElement("custom");
						for (var o in ei.prototype) "constructor" !== o && (a[o] = ei.prototype[o]);
						for (var u in e.prototype) "constructor" !== u && (a[u] = e.prototype[u])
					}
					return a = i = ae(this, t.call(this, r, a)), a.changing_ = !1, Object.defineProperty(a, "selectedIndex", {
						get: function() {
							for (var t = 0; t < this.length; t++) if (this[t].selected) return t;
							return -1
						},
						set: function() {}
					}), n = a, ae(i, n)
				}
				return re(e, t), e.prototype.addTrack = function(e) {
					var i = this;
					e.selected && ai(this, e), t.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("selectedchange", function() {
						i.changing_ || (i.changing_ = !0, ai(i, e), i.changing_ = !1, i.trigger("change"))
					})
				}, e
			}(ei),
			oi = function(t) {
				function e() {
					var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
					ne(this, e);
					var a = void 0;
					if (Kt) {
						a = Ot.createElement("custom");
						for (var s in ei.prototype) "constructor" !== s && (a[s] = ei.prototype[s]);
						for (var o in e.prototype) "constructor" !== o && (a[o] = e.prototype[o])
					}
					return a = i = ae(this, t.call(this, r, a)), n = a, ae(i, n)
				}
				return re(e, t), e.prototype.addTrack = function(e) {
					t.prototype.addTrack.call(this, e), e.addEventListener("modechange", Pe(this, function() {
						this.trigger("change")
					})), -1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", Pe(this, function() {
						this.trigger("selectedlanguagechange")
					}))
				}, e
			}(ei),
			ui = function() {
				function t() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
					ne(this, t);
					var i = this;
					if (Kt) {
						i = Ot.createElement("custom");
						for (var n in t.prototype) "constructor" !== n && (i[n] = t.prototype[n])
					}
					i.trackElements_ = [], Object.defineProperty(i, "length", {
						get: function() {
							return this.trackElements_.length
						}
					});
					for (var r = 0, a = e.length; r < a; r++) i.addTrackElement_(e[r]);
					if (Kt) return i
				}
				return t.prototype.addTrackElement_ = function(t) {
					var e = this.trackElements_.length;
					"" + e in this || Object.defineProperty(this, e, {
						get: function() {
							return this.trackElements_[e]
						}
					}), -1 === this.trackElements_.indexOf(t) && this.trackElements_.push(t)
				}, t.prototype.getTrackElementByTrack_ = function(t) {
					for (var e = void 0, i = 0, n = this.trackElements_.length; i < n; i++) if (t === this.trackElements_[i].track) {
						e = this.trackElements_[i];
						break
					}
					return e
				}, t.prototype.removeTrackElement_ = function(t) {
					for (var e = 0, i = this.trackElements_.length; e < i; e++) if (t === this.trackElements_[e]) {
						this.trackElements_.splice(e, 1);
						break
					}
				}, t
			}(),
			li = function() {
				function t(e) {
					ne(this, t);
					var i = this;
					if (Kt) {
						i = Ot.createElement("custom");
						for (var n in t.prototype) "constructor" !== n && (i[n] = t.prototype[n])
					}
					if (t.prototype.setCues_.call(i, e), Object.defineProperty(i, "length", {
						get: function() {
							return this.length_
						}
					}), Kt) return i
				}
				return t.prototype.setCues_ = function(t) {
					var e = this.length || 0,
						i = 0,
						n = t.length;
					this.cues_ = t, this.length_ = t.length;
					var r = function(t) {
						"" + t in this || Object.defineProperty(this, "" + t, {
							get: function() {
								return this.cues_[t]
							}
						})
					};
					if (e < n) for (i = e; i < n; i++) r.call(this, i)
				}, t.prototype.getCueById = function(t) {
					for (var e = null, i = 0, n = this.length; i < n; i++) {
						var r = this[i];
						if (r.id === t) {
							e = r;
							break
						}
					}
					return e
				}, t
			}(),
			ci = {
				alternative: "alternative",
				captions: "captions",
				main: "main",
				sign: "sign",
				subtitles: "subtitles",
				commentary: "commentary"
			}, di = {
				alternative: "alternative",
				descriptions: "descriptions",
				main: "main",
				"main-desc": "main-desc",
				translation: "translation",
				commentary: "commentary"
			}, hi = {
				subtitles: "subtitles",
				captions: "captions",
				descriptions: "descriptions",
				chapters: "chapters",
				metadata: "metadata"
			}, pi = {
				disabled: "disabled",
				hidden: "hidden",
				showing: "showing"
			}, fi = function(t) {
				function e() {
					var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					ne(this, e);
					var r = ae(this, t.call(this)),
						a = r;
					if (Kt) {
						a = Ot.createElement("custom");
						for (var s in e.prototype) "constructor" !== s && (a[s] = e.prototype[s])
					}
					var o = {
						id: n.id || "vjs_track_" + F(),
						kind: n.kind || "",
						label: n.label || "",
						language: n.language || ""
					};
					for (var u in o)! function(t) {
						Object.defineProperty(a, t, {
							get: function() {
								return o[t]
							},
							set: function() {}
						})
					}(u);
					return i = a, ae(r, i)
				}
				return re(e, t), e
			}(Ie),
			mi = function(t) {
				var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
					i = Ot.createElement("a");
				i.href = t;
				var n = "" === i.host && "file:" !== i.protocol,
					r = void 0;
				n && (r = Ot.createElement("div"), r.innerHTML = '<a href="' + t + '"></a>', i = r.firstChild, r.setAttribute("style", "display:none; position:absolute;"), Ot.body.appendChild(r));
				for (var a = {}, s = 0; s < e.length; s++) a[e[s]] = i[e[s]];
				return "http:" === a.protocol && (a.host = a.host.replace(/:80$/, "")), "https:" === a.protocol && (a.host = a.host.replace(/:443$/, "")), a.protocol || (a.protocol = Ct.location.protocol), n && Ot.body.removeChild(r), a
			}, gi = function(t) {
				if (!t.match(/^https?:\/\//)) {
					var e = Ot.createElement("div");
					e.innerHTML = '<a href="' + t + '">x</a>', t = e.firstChild.href
				}
				return t
			}, yi = function(t) {
				if ("string" == typeof t) {
					var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,
						i = e.exec(t);
					if (i) return i.pop().toLowerCase()
				}
				return ""
			}, vi = function(t) {
				var e = Ct.location,
					i = mi(t);
				return (":" === i.protocol ? e.protocol : i.protocol) + i.host !== e.protocol + e.host
			}, _i = (Object.freeze || Object)({
				parseUrl: mi,
				getAbsoluteURL: gi,
				getFileExtension: yi,
				isCrossOrigin: vi
			}),
			bi = function(t, e) {
				var i = new Ct.WebVTT.Parser(Ct, Ct.vttjs, Ct.WebVTT.StringDecoder()),
					n = [];
				i.oncue = function(t) {
					e.addCue(t)
				}, i.onparsingerror = function(t) {
					n.push(t)
				}, i.onflush = function() {
					e.trigger({
						type: "loadeddata",
						target: e
					})
				}, i.parse(t), n.length > 0 && (Ct.console && Ct.console.groupCollapsed && Ct.console.groupCollapsed("Text Track parsing errors for " + e.src), n.forEach(function(t) {
					return pe.error(t)
				}), Ct.console && Ct.console.groupEnd && Ct.console.groupEnd()), i.flush()
			}, Ti = function(t, e) {
				var i = {
					uri: t
				}, n = vi(t);
				n && (i.cors = n), xt(i, Pe(this, function(t, i, n) {
					if (t) return pe.error(t, i);
					if (e.loaded_ = !0, "function" != typeof Ct.WebVTT) {
						if (e.tech_) {
							var r = function() {
								return bi(n, e)
							};
							e.tech_.on("vttjsloaded", r), e.tech_.on("vttjserror", function() {
								pe.error("vttjs failed to load, stopping trying to process " + e.src), e.tech_.off("vttjsloaded", r)
							})
						}
					} else bi(n, e)
				}))
			}, Si = function(t) {
				function e() {
					var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					if (ne(this, e), !r.tech) throw new Error("A tech was not provided.");
					var a = it(r, {
						kind: hi[r.kind] || "subtitles",
						language: r.language || r.srclang || ""
					}),
						s = pi[a.mode] || "disabled",
						o = a.
					default;
					"metadata" !== a.kind && "chapters" !== a.kind || (s = "hidden");
					var u = i = ae(this, t.call(this, a));
					if (u.tech_ = a.tech, Kt) for (var l in e.prototype) "constructor" !== l && (u[l] = e.prototype[l]);
					u.cues_ = [], u.activeCues_ = [];
					var c = new li(u.cues_),
						d = new li(u.activeCues_),
						h = !1,
						p = Pe(u, function() {
							this.activeCues, h && (this.trigger("cuechange"), h = !1)
						});
					return "disabled" !== s && u.tech_.ready(function() {
						u.tech_.on("timeupdate", p)
					}, !0), Object.defineProperty(u, "default", {
						get: function() {
							return o
						},
						set: function() {}
					}), Object.defineProperty(u, "mode", {
						get: function() {
							return s
						},
						set: function(t) {
							var e = this;
							pi[t] && (s = t, "showing" === s && this.tech_.ready(function() {
								e.tech_.on("timeupdate", p)
							}, !0), this.trigger("modechange"))
						}
					}), Object.defineProperty(u, "cues", {
						get: function() {
							return this.loaded_ ? c : null
						},
						set: function() {}
					}), Object.defineProperty(u, "activeCues", {
						get: function() {
							if (!this.loaded_) return null;
							if (0 === this.cues.length) return d;
							for (var t = this.tech_.currentTime(), e = [], i = 0, n = this.cues.length; i < n; i++) {
								var r = this.cues[i];
								r.startTime <= t && r.endTime >= t ? e.push(r) : r.startTime === r.endTime && r.startTime <= t && r.startTime + .5 >= t && e.push(r)
							}
							if (h = !1, e.length !== this.activeCues_.length) h = !0;
							else for (var a = 0; a < e.length; a++) - 1 === this.activeCues_.indexOf(e[a]) && (h = !0);
							return this.activeCues_ = e, d.setCues_(this.activeCues_), d
						},
						set: function() {}
					}), a.src ? (u.src = a.src, Ti(a.src, u)) : u.loaded_ = !0, n = u, ae(i, n)
				}
				return re(e, t), e.prototype.addCue = function(t) {
					var e = t;
					if (Ct.vttjs && !(t instanceof Ct.vttjs.VTTCue)) {
						e = new Ct.vttjs.VTTCue(t.startTime, t.endTime, t.text);
						for (var i in t) i in e || (e[i] = t[i]);
						e.id = t.id, e.originalCue_ = t
					}
					for (var n = this.tech_.textTracks(), r = 0; r < n.length; r++) n[r] !== this && n[r].removeCue(e);
					this.cues_.push(e), this.cues.setCues_(this.cues_)
				}, e.prototype.removeCue = function(t) {
					for (var e = this.cues_.length; e--;) {
						var i = this.cues_[e];
						if (i === t || i.originalCue_ && i.originalCue_ === t) {
							this.cues_.splice(e, 1), this.cues.setCues_(this.cues_);
							break
						}
					}
				}, e
			}(fi);
		Si.prototype.allowedEvents_ = {
			cuechange: "cuechange"
		};
		var wi = function(t) {
			function e() {
				var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				ne(this, e);
				var a = it(r, {
					kind: di[r.kind] || ""
				}),
					s = i = ae(this, t.call(this, a)),
					o = !1;
				if (Kt) for (var u in e.prototype) "constructor" !== u && (s[u] = e.prototype[u]);
				return Object.defineProperty(s, "enabled", {
					get: function() {
						return o
					},
					set: function(t) {
						"boolean" == typeof t && t !== o && (o = t, this.trigger("enabledchange"))
					}
				}), a.enabled && (s.enabled = a.enabled), s.loaded_ = !0, n = s, ae(i, n)
			}
			return re(e, t), e
		}(fi),
			ki = function(t) {
				function e() {
					var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					ne(this, e);
					var a = it(r, {
						kind: ci[r.kind] || ""
					}),
						s = i = ae(this, t.call(this, a)),
						o = !1;
					if (Kt) for (var u in e.prototype) "constructor" !== u && (s[u] = e.prototype[u]);
					return Object.defineProperty(s, "selected", {
						get: function() {
							return o
						},
						set: function(t) {
							"boolean" == typeof t && t !== o && (o = t, this.trigger("selectedchange"))
						}
					}), a.selected && (s.selected = a.selected), n = s, ae(i, n)
				}
				return re(e, t), e
			}(fi),
			Ei = 0,
			Ci = 2,
			Oi = function(t) {
				function e() {
					var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					ne(this, e);
					var n = ae(this, t.call(this)),
						r = void 0,
						a = n;
					if (Kt) {
						a = Ot.createElement("custom");
						for (var s in e.prototype) "constructor" !== s && (a[s] = e.prototype[s])
					}
					var o = new Si(i);
					if (a.kind = o.kind, a.src = o.src, a.srclang = o.language, a.label = o.label, a.
					default = o.
					default, Object.defineProperty(a, "readyState", {
						get: function() {
							return r
						}
					}), Object.defineProperty(a, "track", {
						get: function() {
							return o
						}
					}), r = Ei, o.addEventListener("loadeddata", function() {
						r = Ci, a.trigger({
							type: "load",
							target: a
						})
					}), Kt) {
						var u;
						return u = a, ae(n, u)
					}
					return n
				}
				return re(e, t), e
			}(Ie);
		Oi.prototype.allowedEvents_ = {
			load: "load"
		}, Oi.NONE = Ei, Oi.LOADING = 1, Oi.LOADED = Ci, Oi.ERROR = 3;
		var Ai = {
			audio: {
				ListClass: ri,
				TrackClass: wi,
				capitalName: "Audio"
			},
			video: {
				ListClass: si,
				TrackClass: ki,
				capitalName: "Video"
			},
			text: {
				ListClass: oi,
				TrackClass: Si,
				capitalName: "Text"
			}
		};
		Object.keys(Ai).forEach(function(t) {
			Ai[t].getterName = t + "Tracks", Ai[t].privateName = t + "Tracks_"
		});
		var Pi = {
			remoteText: {
				ListClass: oi,
				TrackClass: Si,
				capitalName: "RemoteText",
				getterName: "remoteTextTracks",
				privateName: "remoteTextTracks_"
			},
			remoteTextEl: {
				ListClass: ui,
				TrackClass: Oi,
				capitalName: "RemoteTextTrackEls",
				getterName: "remoteTextTrackEls",
				privateName: "remoteTextTrackEls_"
			}
		}, xi = it(Ai, Pi);
		Pi.names = Object.keys(Pi), Ai.names = Object.keys(Ai), xi.names = [].concat(Pi.names).concat(Ai.names);
		var Ii = function(t) {
			function e() {
				var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
				ne(this, e), i.reportTouchActivity = !1;
				var r = ae(this, t.call(this, null, i, n));
				return r.hasStarted_ = !1, r.on("playing", function() {
					this.hasStarted_ = !0
				}), r.on("loadstart", function() {
					this.hasStarted_ = !1
				}), xi.names.forEach(function(t) {
					var e = xi[t];
					i && i[e.getterName] && (r[e.privateName] = i[e.getterName])
				}), r.featuresProgressEvents || r.manualProgressOn(), r.featuresTimeupdateEvents || r.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function(t) {
					!1 === i["native" + t + "Tracks"] && (r["featuresNative" + t + "Tracks"] = !1)
				}), !1 === i.nativeCaptions || !1 === i.nativeTextTracks ? r.featuresNativeTextTracks = !1 : !0 !== i.nativeCaptions && !0 !== i.nativeTextTracks || (r.featuresNativeTextTracks = !0), r.featuresNativeTextTracks || r.emulateTextTracks(), r.autoRemoteTextTracks_ = new xi.text.ListClass, r.initTrackListeners(), i.nativeControlsForTouch || r.emitTapEvents(), r.constructor && (r.name_ = r.constructor.name || "Unknown Tech"), r
			}
			return re(e, t), e.prototype.manualProgressOn = function() {
				this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
			}, e.prototype.manualProgressOff = function() {
				this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
			}, e.prototype.trackProgress = function(t) {
				this.stopTrackingProgress(), this.progressInterval = this.setInterval(Pe(this, function() {
					var t = this.bufferedPercent();
					this.bufferedPercent_ !== t && this.trigger("progress"), this.bufferedPercent_ = t, 1 === t && this.stopTrackingProgress()
				}), 500)
			}, e.prototype.onDurationChange = function(t) {
				this.duration_ = this.duration()
			}, e.prototype.buffered = function() {
				return st(0, 0)
			}, e.prototype.bufferedPercent = function() {
				return ot(this.buffered(), this.duration_)
			}, e.prototype.stopTrackingProgress = function() {
				this.clearInterval(this.progressInterval)
			}, e.prototype.manualTimeUpdatesOn = function() {
				this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
			}, e.prototype.manualTimeUpdatesOff = function() {
				this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
			}, e.prototype.trackCurrentTime = function() {
				this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
					this.trigger({
						type: "timeupdate",
						target: this,
						manuallyTriggered: !0
					})
				}, 250)
			}, e.prototype.stopTrackingCurrentTime = function() {
				this.clearInterval(this.currentTimeInterval), this.trigger({
					type: "timeupdate",
					target: this,
					manuallyTriggered: !0
				})
			}, e.prototype.dispose = function() {
				this.clearTracks(Ai.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
			}, e.prototype.clearTracks = function(t) {
				var e = this;
				t = [].concat(t), t.forEach(function(t) {
					for (var i = e[t + "Tracks"]() || [], n = i.length; n--;) {
						var r = i[n];
						"text" === t && e.removeRemoteTextTrack(r), i.removeTrack(r)
					}
				})
			}, e.prototype.cleanupAutoTextTracks = function() {
				for (var t = this.autoRemoteTextTracks_ || [], e = t.length; e--;) {
					var i = t[e];
					this.removeRemoteTextTrack(i)
				}
			}, e.prototype.reset = function() {}, e.prototype.error = function(t) {
				return void 0 !== t && (this.error_ = new ut(t), this.trigger("error")), this.error_
			}, e.prototype.played = function() {
				return this.hasStarted_ ? st(0, 0) : st()
			}, e.prototype.setCurrentTime = function() {
				this.manualTimeUpdates && this.trigger({
					type: "timeupdate",
					target: this,
					manuallyTriggered: !0
				})
			}, e.prototype.initTrackListeners = function() {
				var t = this;
				Ai.names.forEach(function(e) {
					var i = Ai[e],
						n = function() {
							t.trigger(e + "trackchange")
						}, r = t[i.getterName]();
					r.addEventListener("removetrack", n), r.addEventListener("addtrack", n), t.on("dispose", function() {
						r.removeEventListener("removetrack", n), r.removeEventListener("addtrack", n)
					})
				})
			}, e.prototype.addWebVttScript_ = function() {
				var t = this;
				if (!Ct.WebVTT) if (Ot.body.contains(this.el())) {
					if (!this.options_["vtt.js"] && u(It) && Object.keys(It).length > 0) return void this.trigger("vttjsloaded");
					var e = Ot.createElement("script");
					e.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js", e.onload = function() {
						t.trigger("vttjsloaded")
					}, e.onerror = function() {
						t.trigger("vttjserror")
					}, this.on("dispose", function() {
						e.onload = null, e.onerror = null
					}), Ct.WebVTT = !0, this.el().parentNode.appendChild(e)
				} else this.ready(this.addWebVttScript_)
			}, e.prototype.emulateTextTracks = function() {
				var t = this,
					e = this.textTracks(),
					i = this.remoteTextTracks(),
					n = function(t) {
						return e.addTrack(t.track)
					}, r = function(t) {
						return e.removeTrack(t.track)
					};
				i.on("addtrack", n), i.on("removetrack", r), this.addWebVttScript_();
				var a = function() {
					return t.trigger("texttrackchange")
				}, s = function() {
					a();
					for (var t = 0; t < e.length; t++) {
						var i = e[t];
						i.removeEventListener("cuechange", a), "showing" === i.mode && i.addEventListener("cuechange", a)
					}
				};
				s(), e.addEventListener("change", s), e.addEventListener("addtrack", s), e.addEventListener("removetrack", s), this.on("dispose", function() {
					i.off("addtrack", n), i.off("removetrack", r), e.removeEventListener("change", s), e.removeEventListener("addtrack", s), e.removeEventListener("removetrack", s);
					for (var t = 0; t < e.length; t++) {
						e[t].removeEventListener("cuechange", a)
					}
				})
			}, e.prototype.addTextTrack = function(t, e, i) {
				if (!t) throw new Error("TextTrack kind is required but was not provided");
				return dt(this, t, e, i)
			}, e.prototype.createRemoteTextTrack = function(t) {
				var e = it(t, {
					tech: this
				});
				return new Pi.remoteTextEl.TrackClass(e)
			}, e.prototype.addRemoteTextTrack = function() {
				var t = this,
					e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments[1],
					n = this.createRemoteTextTrack(e);
				return !0 !== i && !1 !== i && (pe.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), i = !0), this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack(n.track), !0 !== i && this.ready(function() {
					return t.autoRemoteTextTracks_.addTrack(n.track)
				}), n
			}, e.prototype.removeRemoteTextTrack = function(t) {
				var e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
				this.remoteTextTrackEls().removeTrackElement_(e), this.remoteTextTracks().removeTrack(t), this.autoRemoteTextTracks_.removeTrack(t)
			}, e.prototype.getVideoPlaybackQuality = function() {
				return {}
			}, e.prototype.setPoster = function() {}, e.prototype.playsinline = function() {}, e.prototype.setPlaysinline = function() {}, e.prototype.canPlayType = function() {
				return ""
			}, e.canPlayType = function() {
				return ""
			}, e.canPlaySource = function(t, i) {
				return e.canPlayType(t.type)
			}, e.isTech = function(t) {
				return t.prototype instanceof e || t instanceof e || t === e
			}, e.registerTech = function(t, i) {
				if (e.techs_ || (e.techs_ = {}), !e.isTech(i)) throw new Error("Tech " + t + " must be a Tech");
				if (!e.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
				if (!e.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
				return t = tt(t), e.techs_[t] = i, "Tech" !== t && e.defaultTechOrder_.push(t), i
			}, e.getTech = function(t) {
				if (t) return t = tt(t), e.techs_ && e.techs_[t] ? e.techs_[t] : Ct && Ct.videojs && Ct.videojs[t] ? (pe.warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), Ct.videojs[t]) : void 0
			}, e
		}(He);
		xi.names.forEach(function(t) {
			var e = xi[t];
			Ii.prototype[e.getterName] = function() {
				return this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName]
			}
		}), Ii.prototype.featuresVolumeControl = !0, Ii.prototype.featuresFullscreenResize = !1, Ii.prototype.featuresPlaybackRate = !1, Ii.prototype.featuresProgressEvents = !1, Ii.prototype.featuresTimeupdateEvents = !1, Ii.prototype.featuresNativeTextTracks = !1, Ii.withSourceHandlers = function(t) {
			t.registerSourceHandler = function(e, i) {
				var n = t.sourceHandlers;
				n || (n = t.sourceHandlers = []), void 0 === i && (i = n.length), n.splice(i, 0, e)
			}, t.canPlayType = function(e) {
				for (var i = t.sourceHandlers || [], n = void 0, r = 0; r < i.length; r++) if (n = i[r].canPlayType(e)) return n;
				return ""
			}, t.selectSourceHandler = function(e, i) {
				for (var n = t.sourceHandlers || [], r = 0; r < n.length; r++) if (n[r].canHandleSource(e, i)) return n[r];
				return null
			}, t.canPlaySource = function(e, i) {
				var n = t.selectSourceHandler(e, i);
				return n ? n.canHandleSource(e, i) : ""
			}, ["seekable", "duration"].forEach(function(t) {
				var e = this[t];
				"function" == typeof e && (this[t] = function() {
					return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments)
				})
			}, t.prototype), t.prototype.setSource = function(e) {
				var i = t.selectSourceHandler(e, this.options_);
				i || (t.nativeSourceHandler ? i = t.nativeSourceHandler : pe.error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), i !== t.nativeSourceHandler && (this.currentSource_ = e), this.sourceHandler_ = i.handleSource(e, this, this.options_), this.on("dispose", this.disposeSourceHandler)
			}, t.prototype.disposeSourceHandler = function() {
				this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
			}
		}, He.registerComponent("Tech", Ii), Ii.registerTech("Tech", Ii), Ii.defaultTechOrder_ = [];
		var Li = {}, ji = {
			buffered: 1,
			currentTime: 1,
			duration: 1,
			seekable: 1,
			played: 1
		}, Mi = {
			setCurrentTime: 1
		}, Di = function t(e) {
			if (Array.isArray(e)) {
				var i = [];
				e.forEach(function(e) {
					e = t(e), Array.isArray(e) ? i = i.concat(e) : o(e) && i.push(e)
				}), e = i
			} else e = "string" == typeof e && e.trim() ? [{
				src: e
			}] : o(e) && "string" == typeof e.src && e.src && e.src.trim() ? [e] : [];
			return e
		}, Ri = function(t) {
			function e(i, n, r) {
				ne(this, e);
				var a = it({
					createEl: !1
				}, n),
					s = ae(this, t.call(this, i, a, r));
				if (n.playerOptions.sources && 0 !== n.playerOptions.sources.length) i.src(n.playerOptions.sources);
				else for (var o = 0, u = n.playerOptions.techOrder; o < u.length; o++) {
					var l = tt(u[o]),
						c = Ii.getTech(l);
					if (l || (c = He.getComponent(l)), c && c.isSupported()) {
						i.loadTech_(l);
						break
					}
				}
				return s
			}
			return re(e, t), e
		}(He);
		He.registerComponent("MediaLoader", Ri);
		var Bi = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.emitTapEvents(), r.enable(), r
			}
			return re(e, t), e.prototype.createEl = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
					i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				i = s({
					innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
					className: this.buildCSSClass(),
					tabIndex: 0
				}, i), "button" === e && pe.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), n = s({
					role: "button",
					"aria-live": "polite"
				}, n), this.tabIndex_ = i.tabIndex;
				var r = t.prototype.createEl.call(this, e, i, n);
				return this.createControlTextEl(r), r
			}, e.prototype.dispose = function() {
				this.controlTextEl_ = null, t.prototype.dispose.call(this)
			}, e.prototype.createControlTextEl = function(t) {
				return this.controlTextEl_ = y("span", {
					className: "vjs-control-text"
				}), t && t.appendChild(this.controlTextEl_), this.controlText(this.controlText_, t), this.controlTextEl_
			}, e.prototype.controlText = function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
				if (void 0 === t) return this.controlText_ || "Need Text";
				var i = this.localize(t);
				this.controlText_ = t, v(this.controlTextEl_, i), this.nonIconControl || e.setAttribute("title", i)
			}, e.prototype.buildCSSClass = function() {
				return "vjs-control vjs-button " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.enable = function() {
				this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur))
			}, e.prototype.disable = function() {
				this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur)
			}, e.prototype.handleClick = function(t) {}, e.prototype.handleFocus = function(t) {
				X(Ot, "keydown", Pe(this, this.handleKeyPress))
			}, e.prototype.handleKeyPress = function(e) {
				32 === e.which || 13 === e.which ? (e.preventDefault(), this.trigger("click")) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
			}, e.prototype.handleBlur = function(t) {
				Y(Ot, "keydown", Pe(this, this.handleKeyPress))
			}, e
		}(He);
		He.registerComponent("ClickableComponent", Bi);
		var Ni = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.update(), i.on("posterchange", Pe(r, r.update)), r
			}
			return re(e, t), e.prototype.dispose = function() {
				this.player().off("posterchange", this.update), t.prototype.dispose.call(this)
			}, e.prototype.createEl = function() {
				var t = y("div", {
					className: "vjs-poster",
					tabIndex: -1
				});
				return te || (this.fallbackImg_ = y("img"), t.appendChild(this.fallbackImg_)), t
			}, e.prototype.update = function(t) {
				var e = this.player().poster();
				this.setSrc(e), e ? this.show() : this.hide()
			}, e.prototype.setSrc = function(t) {
				if (this.fallbackImg_) this.fallbackImg_.src = t;
				else {
					var e = "";
					t && (e = 'url("' + t + '")'), this.el_.style.backgroundImage = e
				}
			}, e.prototype.handleClick = function(t) {
				this.player_.controls() && (this.player_.paused() ? this.player_.play() : this.player_.pause())
			}, e
		}(Bi);
		He.registerComponent("PosterImage", Ni);
		var Ui = {
			monospace: "monospace",
			sansSerif: "sans-serif",
			serif: "serif",
			monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
			monospaceSerif: '"Courier New", monospace',
			proportionalSansSerif: "sans-serif",
			proportionalSerif: "serif",
			casual: '"Comic Sans MS", Impact, fantasy',
			script: '"Monotype Corsiva", cursive',
			smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
		}, Fi = function(t) {
			function e(i, n, r) {
				ne(this, e);
				var a = ae(this, t.call(this, i, n, r));
				return i.on("loadstart", Pe(a, a.toggleDisplay)), i.on("texttrackchange", Pe(a, a.updateDisplay)), i.on("loadstart", Pe(a, a.preselectTrack)), i.ready(Pe(a, function() {
					if (i.tech_ && i.tech_.featuresNativeTextTracks) return void this.hide();
					i.on("fullscreenchange", Pe(this, this.updateDisplay));
					for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++) this.player_.addRemoteTextTrack(t[e], !0);
					this.preselectTrack()
				})), a
			}
			return re(e, t), e.prototype.preselectTrack = function() {
				for (var t = {
					captions: 1,
					subtitles: 1
				}, e = this.player_.textTracks(), i = this.player_.cache_.selectedLanguage, n = void 0, r = void 0, a = void 0, s = 0; s < e.length; s++) {
					var o = e[s];
					i && i.enabled && i.language === o.language ? o.kind === i.kind ? a = o : a || (a = o) : i && !i.enabled ? (a = null, n = null, r = null) : o.
					default && ("descriptions" !== o.kind || n ? o.kind in t && !r && (r = o) : n = o)
				}
				a ? a.mode = "showing" : r ? r.mode = "showing" : n && (n.mode = "showing")
			}, e.prototype.toggleDisplay = function() {
				this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
			}, e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: "vjs-text-track-display"
				}, {
					"aria-live": "off",
					"aria-atomic": "true"
				})
			}, e.prototype.clearDisplay = function() {
				"function" == typeof Ct.WebVTT && Ct.WebVTT.processCues(Ct, [], this.el_)
			}, e.prototype.updateDisplay = function() {
				var t = this.player_.textTracks();
				this.clearDisplay();
				for (var e = null, i = null, n = t.length; n--;) {
					var r = t[n];
					"showing" === r.mode && ("descriptions" === r.kind ? e = r : i = r)
				}
				i ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(i)) : e && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(e))
			}, e.prototype.updateForTrack = function(t) {
				if ("function" == typeof Ct.WebVTT && t.activeCues) {
					for (var e = this.player_.textTrackSettings.getValues(), i = [], n = 0; n < t.activeCues.length; n++) i.push(t.activeCues[n]);
					Ct.WebVTT.processCues(Ct, i, this.el_);
					for (var r = i.length; r--;) {
						var a = i[r];
						if (a) {
							var s = a.displayState;
							if (e.color && (s.firstChild.style.color = e.color), e.textOpacity && bt(s.firstChild, "color", _t(e.color || "#fff", e.textOpacity)), e.backgroundColor && (s.firstChild.style.backgroundColor = e.backgroundColor), e.backgroundOpacity && bt(s.firstChild, "backgroundColor", _t(e.backgroundColor || "#000", e.backgroundOpacity)), e.windowColor && (e.windowOpacity ? bt(s, "backgroundColor", _t(e.windowColor, e.windowOpacity)) : s.style.backgroundColor = e.windowColor), e.edgeStyle && ("dropshadow" === e.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === e.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === e.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === e.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), e.fontPercent && 1 !== e.fontPercent) {
								var o = Ct.parseFloat(s.style.fontSize);
								s.style.fontSize = o * e.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px"
							}
							e.fontFamily && "default" !== e.fontFamily && ("small-caps" === e.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = Ui[e.fontFamily])
						}
					}
				}
			}, e
		}(He);
		He.registerComponent("TextTrackDisplay", Fi);
		var Hi = function(t) {
			function e() {
				return ne(this, e), ae(this, t.apply(this, arguments))
			}
			return re(e, t), e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: "vjs-loading-spinner",
					dir: "ltr"
				})
			}, e
		}(He);
		He.registerComponent("LoadingSpinner", Hi);
		var Vi = function(t) {
			function e() {
				return ne(this, e), ae(this, t.apply(this, arguments))
			}
			return re(e, t), e.prototype.createEl = function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				t = "button", e = s({
					innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
					className: this.buildCSSClass()
				}, e), i = s({
					type: "button",
					"aria-live": "polite"
				}, i);
				var n = He.prototype.createEl.call(this, t, e, i);
				return this.createControlTextEl(n), n
			}, e.prototype.addChild = function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = this.constructor.name;
				return pe.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), He.prototype.addChild.call(this, t, e)
			}, e.prototype.enable = function() {
				t.prototype.enable.call(this), this.el_.removeAttribute("disabled")
			}, e.prototype.disable = function() {
				t.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
			}, e.prototype.handleKeyPress = function(e) {
				32 !== e.which && 13 !== e.which && t.prototype.handleKeyPress.call(this, e)
			}, e
		}(Bi);
		He.registerComponent("Button", Vi);
		var qi = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.mouseused_ = !1, r.on("mousedown", r.handleMouseDown), r
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-big-play-button"
			}, e.prototype.handleClick = function(t) {
				var e = this.player_.play();
				if (!(this.mouseused_ && t.clientX && t.clientY)) {
					var i = this.player_.getChild("controlBar"),
						n = i && i.getChild("playToggle");
					if (!n) return void this.player_.focus();
					var r = function() {
						return n.focus()
					};
					lt(e) ? e.then(r, function() {}) : this.setTimeout(r, 1)
				}
			}, e.prototype.handleKeyPress = function(e) {
				this.mouseused_ = !1, t.prototype.handleKeyPress.call(this, e)
			}, e.prototype.handleMouseDown = function(t) {
				this.mouseused_ = !0
			}, e
		}(Vi);
		qi.prototype.controlText_ = "Play Video", He.registerComponent("BigPlayButton", qi);
		var Gi = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.controlText(n && n.controlText || r.localize("Close")), r
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-close-button " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.handleClick = function(t) {
				this.trigger({
					type: "close",
					bubbles: !1
				})
			}, e
		}(Vi);
		He.registerComponent("CloseButton", Gi);
		var Wi = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.on(i, "play", r.handlePlay), r.on(i, "pause", r.handlePause), r.on(i, "ended", r.handleEnded), r
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-play-control " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.handleClick = function(t) {
				this.player_.paused() ? this.player_.play() : this.player_.pause()
			}, e.prototype.handleSeeked = function(t) {
				this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(t) : this.handlePlay(t)
			}, e.prototype.handlePlay = function(t) {
				this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
			}, e.prototype.handlePause = function(t) {
				this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
			}, e.prototype.handleEnded = function(t) {
				this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
			}, e
		}(Vi);
		Wi.prototype.controlText_ = "Play", He.registerComponent("PlayToggle", Wi);
		var zi = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.throttledUpdateContent = xe(Pe(r, r.updateContent), 25), r.on(i, "timeupdate", r.throttledUpdateContent), r
			}
			return re(e, t), e.prototype.createEl = function(e) {
				var i = this.buildCSSClass(),
					n = t.prototype.createEl.call(this, "div", {
						className: i + " vjs-time-control vjs-control"
					});
				return this.contentEl_ = y("div", {
					className: i + "-display"
				}, {
					"aria-live": "off"
				}, y("span", {
					className: "vjs-control-text",
					textContent: this.localize(this.controlText_)
				})), this.updateTextNode_(), n.appendChild(this.contentEl_), n
			}, e.prototype.dispose = function() {
				this.contentEl_ = null, this.textNode_ = null, t.prototype.dispose.call(this)
			}, e.prototype.updateTextNode_ = function() {
				if (this.contentEl_) {
					for (; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
					this.textNode_ = Ot.createTextNode(this.formattedTime_ || "0:00"), this.contentEl_.appendChild(this.textNode_)
				}
			}, e.prototype.formatTime_ = function(t) {
				return Tt(t)
			}, e.prototype.updateFormattedTime_ = function(t) {
				var e = this.formatTime_(t);
				e !== this.formattedTime_ && (this.formattedTime_ = e, this.requestAnimationFrame(this.updateTextNode_))
			}, e.prototype.updateContent = function(t) {}, e
		}(He);
		zi.prototype.controlText_ = "Time", He.registerComponent("TimeDisplay", zi);
		var Xi = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.on(i, "ended", r.handleEnded), r
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-current-time"
			}, e.prototype.updateContent = function(t) {
				var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
				this.updateFormattedTime_(e)
			}, e.prototype.handleEnded = function(t) {
				this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
			}, e
		}(zi);
		Xi.prototype.controlText_ = "Current Time", He.registerComponent("CurrentTimeDisplay", Xi);
		var Yi = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.on(i, "durationchange", r.updateContent), r.on(i, "loadedmetadata", r.throttledUpdateContent), r
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-duration"
			}, e.prototype.updateContent = function(t) {
				var e = this.player_.duration();
				e && this.duration_ !== e && (this.duration_ = e, this.updateFormattedTime_(e))
			}, e
		}(zi);
		Yi.prototype.controlText_ = "Duration Time", He.registerComponent("DurationDisplay", Yi);
		var Ki = function(t) {
			function e() {
				return ne(this, e), ae(this, t.apply(this, arguments))
			}
			return re(e, t), e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: "vjs-time-control vjs-time-divider",
					innerHTML: "<div><span>/</span></div>"
				})
			}, e
		}(He);
		He.registerComponent("TimeDivider", Ki);
		var $i = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.on(i, "durationchange", r.throttledUpdateContent), r.on(i, "ended", r.handleEnded), r
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-remaining-time"
			}, e.prototype.formatTime_ = function(e) {
				return "-" + t.prototype.formatTime_.call(this, e)
			}, e.prototype.updateContent = function(t) {
				this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
			}, e.prototype.handleEnded = function(t) {
				this.player_.duration() && this.updateFormattedTime_(0)
			}, e
		}(zi);
		$i.prototype.controlText_ = "Remaining Time", He.registerComponent("RemainingTimeDisplay", $i);
		var Ji = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.updateShowing(), r.on(r.player(), "durationchange", r.updateShowing), r
			}
			return re(e, t), e.prototype.createEl = function() {
				var e = t.prototype.createEl.call(this, "div", {
					className: "vjs-live-control vjs-control"
				});
				return this.contentEl_ = y("div", {
					className: "vjs-live-display",
					innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE")
				}, {
					"aria-live": "off"
				}), e.appendChild(this.contentEl_), e
			}, e.prototype.dispose = function() {
				this.contentEl_ = null, t.prototype.dispose.call(this)
			}, e.prototype.updateShowing = function(t) {
				this.player().duration() === 1 / 0 ? this.show() : this.hide()
			}, e
		}(He);
		He.registerComponent("LiveDisplay", Ji);
		var Qi = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.bar = r.getChild(r.options_.barName), r.vertical( !! r.options_.vertical), r.enable(), r
			}
			return re(e, t), e.prototype.enabled = function() {
				return this.enabled_
			}, e.prototype.enable = function() {
				this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
			}, e.prototype.disable = function() {
				if (this.enabled()) {
					var t = this.bar.el_.ownerDocument;
					this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
				}
			}, e.prototype.createEl = function(e) {
				var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				return i.className = i.className + " vjs-slider", i = s({
					tabIndex: 0
				}, i), n = s({
					role: "slider",
					"aria-valuenow": 0,
					"aria-valuemin": 0,
					"aria-valuemax": 100,
					tabIndex: 0
				}, n), t.prototype.createEl.call(this, e, i, n)
			}, e.prototype.handleMouseDown = function(t) {
				var e = this.bar.el_.ownerDocument;
				t.preventDefault(), P(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(e, "mousemove", this.handleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchmove", this.handleMouseMove), this.on(e, "touchend", this.handleMouseUp), this.handleMouseMove(t)
			}, e.prototype.handleMouseMove = function(t) {}, e.prototype.handleMouseUp = function() {
				var t = this.bar.el_.ownerDocument;
				x(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.update()
			}, e.prototype.update = function() {
				if (this.el_) {
					var t = this.getPercent(),
						e = this.bar;
					if (e) {
						("number" != typeof t || t !== t || t < 0 || t === 1 / 0) && (t = 0);
						var i = (100 * t).toFixed(2) + "%",
							n = e.el().style;
						return this.vertical() ? n.height = i : n.width = i, t
					}
				}
			}, e.prototype.calculateDistance = function(t) {
				var e = j(this.el_, t);
				return this.vertical() ? e.y : e.x
			}, e.prototype.handleFocus = function() {
				this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
			}, e.prototype.handleKeyPress = function(t) {
				37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepBack()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepForward())
			}, e.prototype.handleBlur = function() {
				this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
			}, e.prototype.handleClick = function(t) {
				t.stopImmediatePropagation(), t.preventDefault()
			}, e.prototype.vertical = function(t) {
				if (void 0 === t) return this.vertical_ || !1;
				this.vertical_ = !! t, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
			}, e
		}(He);
		He.registerComponent("Slider", Qi);
		var Zi = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.partEls_ = [], r.on(i, "progress", r.update), r
			}
			return re(e, t), e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: "vjs-load-progress",
					innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
				})
			}, e.prototype.dispose = function() {
				this.partEls_ = null, t.prototype.dispose.call(this)
			}, e.prototype.update = function(t) {
				var e = this.player_.buffered(),
					i = this.player_.duration(),
					n = this.player_.bufferedEnd(),
					r = this.partEls_,
					a = function(t, e) {
						var i = t / e || 0;
						return 100 * (i >= 1 ? 1 : i) + "%"
					};
				this.el_.style.width = a(n, i);
				for (var s = 0; s < e.length; s++) {
					var o = e.start(s),
						u = e.end(s),
						l = r[s];
					l || (l = this.el_.appendChild(y()), r[s] = l), l.style.left = a(o, n), l.style.width = a(u - o, n)
				}
				for (var c = r.length; c > e.length; c--) this.el_.removeChild(r[c - 1]);
				r.length = e.length
			}, e
		}(He);
		He.registerComponent("LoadProgressBar", Zi);
		var tn = function(t) {
			function e() {
				return ne(this, e), ae(this, t.apply(this, arguments))
			}
			return re(e, t), e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: "vjs-time-tooltip"
				})
			}, e.prototype.update = function(t, e, i) {
				var n = I(this.el_),
					r = I(this.player_.el()),
					a = t.width * e;
				if (r && n) {
					var s = t.left - r.left + a,
						o = t.width - a + (r.right - t.right),
						u = n.width / 2;
					s < u ? u += u - s : o < u && (u = o), u < 0 ? u = 0 : u > n.width && (u = n.width), this.el_.style.right = "-" + u + "px", v(this.el_, i)
				}
			}, e
		}(He);
		He.registerComponent("TimeTooltip", tn);
		var en = function(t) {
			function e() {
				return ne(this, e), ae(this, t.apply(this, arguments))
			}
			return re(e, t), e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: "vjs-play-progress vjs-slider-bar",
					innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
				})
			}, e.prototype.update = function(t, e) {
				var i = this;
				this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function() {
					var n = i.player_.scrubbing() ? i.player_.getCache().currentTime : i.player_.currentTime(),
						r = Tt(n, i.player_.duration()),
						a = i.getChild("timeTooltip");
					a && a.update(t, e, r)
				})
			}, e
		}(He);
		en.prototype.options_ = {
			children: []
		}, $t && !($t > 8) || Ut || Ht || en.prototype.options_.children.push("timeTooltip"), He.registerComponent("PlayProgressBar", en);
		var nn = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.update = xe(Pe(r, r.update), 25), r
			}
			return re(e, t), e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: "vjs-mouse-display"
				})
			}, e.prototype.update = function(t, e) {
				var i = this;
				this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function() {
					var n = i.player_.duration(),
						r = Tt(e * n, n);
					i.el_.style.left = t.width * e + "px", i.getChild("timeTooltip").update(t, e, r)
				})
			}, e
		}(He);
		nn.prototype.options_ = {
			children: ["timeTooltip"]
		}, He.registerComponent("MouseTimeDisplay", nn);
		var rn = 30,
			an = function(t) {
				function e(i, n) {
					ne(this, e);
					var r = ae(this, t.call(this, i, n));
					return r.update = xe(Pe(r, r.update), rn), r.on(i, "timeupdate", r.update), r.on(i, "ended", r.handleEnded), r.updateInterval = null, r.on(i, ["playing"], function() {
						r.clearInterval(r.updateInterval), r.updateInterval = r.setInterval(function() {
							r.requestAnimationFrame(function() {
								r.update()
							})
						}, rn)
					}), r.on(i, ["ended", "pause", "waiting"], function() {
						r.clearInterval(r.updateInterval)
					}), r.on(i, ["timeupdate", "ended"], r.update), r
				}
				return re(e, t), e.prototype.createEl = function() {
					return t.prototype.createEl.call(this, "div", {
						className: "vjs-progress-holder"
					}, {
						"aria-label": this.localize("Progress Bar")
					})
				}, e.prototype.update_ = function(t, e) {
					var i = this.player_.duration();
					this.el_.setAttribute("aria-valuenow", (100 * e).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [Tt(t, i), Tt(i, i)], "{1} of {2}")), this.bar.update(I(this.el_), e)
				}, e.prototype.update = function(e) {
					var i = t.prototype.update.call(this);
					return this.update_(this.getCurrentTime_(), i), i
				}, e.prototype.getCurrentTime_ = function() {
					return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
				}, e.prototype.handleEnded = function(t) {
					this.update_(this.player_.duration(), 1)
				}, e.prototype.getPercent = function() {
					var t = this.getCurrentTime_() / this.player_.duration();
					return t >= 1 ? 1 : t
				}, e.prototype.handleMouseDown = function(e) {
					U(e) && (this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), t.prototype.handleMouseDown.call(this, e))
				}, e.prototype.handleMouseMove = function(t) {
					if (U(t)) {
						var e = this.calculateDistance(t) * this.player_.duration();
						e === this.player_.duration() && (e -= .1), this.player_.currentTime(e)
					}
				}, e.prototype.enable = function() {
					t.prototype.enable.call(this);
					var e = this.getChild("mouseTimeDisplay");
					e && e.show()
				}, e.prototype.disable = function() {
					t.prototype.disable.call(this);
					var e = this.getChild("mouseTimeDisplay");
					e && e.hide()
				}, e.prototype.handleMouseUp = function(e) {
					t.prototype.handleMouseUp.call(this, e), this.player_.scrubbing(!1), this.player_.trigger({
						type: "timeupdate",
						target: this,
						manuallyTriggered: !0
					}), this.videoWasPlaying && this.player_.play()
				}, e.prototype.stepForward = function() {
					this.player_.currentTime(this.player_.currentTime() + 5)
				}, e.prototype.stepBack = function() {
					this.player_.currentTime(this.player_.currentTime() - 5)
				}, e.prototype.handleAction = function(t) {
					this.player_.paused() ? this.player_.play() : this.player_.pause()
				}, e.prototype.handleKeyPress = function(e) {
					32 === e.which || 13 === e.which ? (e.preventDefault(), this.handleAction(e)) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
				}, e
			}(Qi);
		an.prototype.options_ = {
			children: ["loadProgressBar", "playProgressBar"],
			barName: "playProgressBar"
		}, $t && !($t > 8) || Ut || Ht || an.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), an.prototype.playerEvent = "timeupdate", He.registerComponent("SeekBar", an);
		var sn = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.handleMouseMove = xe(Pe(r, r.handleMouseMove), 25), r.throttledHandleMouseSeek = xe(Pe(r, r.handleMouseSeek), 25), r.enable(), r
			}
			return re(e, t), e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: "vjs-progress-control vjs-control"
				})
			}, e.prototype.handleMouseMove = function(t) {
				var e = this.getChild("seekBar"),
					i = e.getChild("mouseTimeDisplay"),
					n = e.el(),
					r = I(n),
					a = j(n, t).x;
				a > 1 ? a = 1 : a < 0 && (a = 0), i && i.update(r, a)
			}, e.prototype.handleMouseSeek = function(t) {
				this.getChild("seekBar").handleMouseMove(t)
			}, e.prototype.enabled = function() {
				return this.enabled_
			}, e.prototype.disable = function() {
				this.children().forEach(function(t) {
					return t.disable && t.disable()
				}), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
			}, e.prototype.enable = function() {
				this.children().forEach(function(t) {
					return t.enable && t.enable()
				}), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
			}, e.prototype.handleMouseDown = function(t) {
				var e = this.el_.ownerDocument;
				this.on(e, "mousemove", this.throttledHandleMouseSeek), this.on(e, "touchmove", this.throttledHandleMouseSeek), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
			}, e.prototype.handleMouseUp = function(t) {
				var e = this.el_.ownerDocument;
				this.off(e, "mousemove", this.throttledHandleMouseSeek), this.off(e, "touchmove", this.throttledHandleMouseSeek), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
			}, e
		}(He);
		sn.prototype.options_ = {
			children: ["seekBar"]
		}, He.registerComponent("ProgressControl", sn);
		var on = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.on(i, "fullscreenchange", r.handleFullscreenChange), r
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-fullscreen-control " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.handleFullscreenChange = function(t) {
				this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
			}, e.prototype.handleClick = function(t) {
				this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
			}, e
		}(Vi);
		on.prototype.controlText_ = "Fullscreen", He.registerComponent("FullscreenToggle", on);
		var un = function(t, e) {
			e.tech_ && !e.tech_.featuresVolumeControl && t.addClass("vjs-hidden"), t.on(e, "loadstart", function() {
				e.tech_.featuresVolumeControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
			})
		}, ln = function(t) {
			function e() {
				return ne(this, e), ae(this, t.apply(this, arguments))
			}
			return re(e, t), e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: "vjs-volume-level",
					innerHTML: '<span class="vjs-control-text"></span>'
				})
			}, e
		}(He);
		He.registerComponent("VolumeLevel", ln);
		var cn = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.on("slideractive", r.updateLastVolume_), r.on(i, "volumechange", r.updateARIAAttributes), i.ready(function() {
					return r.updateARIAAttributes()
				}), r
			}
			return re(e, t), e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: "vjs-volume-bar vjs-slider-bar"
				}, {
					"aria-label": this.localize("Volume Level"),
					"aria-live": "polite"
				})
			}, e.prototype.handleMouseDown = function(e) {
				U(e) && t.prototype.handleMouseDown.call(this, e)
			}, e.prototype.handleMouseMove = function(t) {
				U(t) && (this.checkMuted(), this.player_.volume(this.calculateDistance(t)))
			}, e.prototype.checkMuted = function() {
				this.player_.muted() && this.player_.muted(!1)
			}, e.prototype.getPercent = function() {
				return this.player_.muted() ? 0 : this.player_.volume()
			}, e.prototype.stepForward = function() {
				this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
			}, e.prototype.stepBack = function() {
				this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
			}, e.prototype.updateARIAAttributes = function(t) {
				var e = this.player_.muted() ? 0 : this.volumeAsPercentage_();
				this.el_.setAttribute("aria-valuenow", e), this.el_.setAttribute("aria-valuetext", e + "%")
			}, e.prototype.volumeAsPercentage_ = function() {
				return Math.round(100 * this.player_.volume())
			}, e.prototype.updateLastVolume_ = function() {
				var t = this,
					e = this.player_.volume();
				this.one("sliderinactive", function() {
					0 === t.player_.volume() && t.player_.lastVolume_(e)
				})
			}, e
		}(Qi);
		cn.prototype.options_ = {
			children: ["volumeLevel"],
			barName: "volumeLevel"
		}, cn.prototype.playerEvent = "volumechange", He.registerComponent("VolumeBar", cn);
		var dn = function(t) {
			function e(i) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				ne(this, e), n.vertical = n.vertical || !1, (void 0 === n.volumeBar || u(n.volumeBar)) && (n.volumeBar = n.volumeBar || {}, n.volumeBar.vertical = n.vertical);
				var r = ae(this, t.call(this, i, n));
				return un(r, i), r.throttledHandleMouseMove = xe(Pe(r, r.handleMouseMove), 25), r.on("mousedown", r.handleMouseDown), r.on("touchstart", r.handleMouseDown), r.on(r.volumeBar, ["focus", "slideractive"], function() {
					r.volumeBar.addClass("vjs-slider-active"), r.addClass("vjs-slider-active"), r.trigger("slideractive")
				}), r.on(r.volumeBar, ["blur", "sliderinactive"], function() {
					r.volumeBar.removeClass("vjs-slider-active"), r.removeClass("vjs-slider-active"), r.trigger("sliderinactive")
				}), r
			}
			return re(e, t), e.prototype.createEl = function() {
				var e = "vjs-volume-horizontal";
				return this.options_.vertical && (e = "vjs-volume-vertical"), t.prototype.createEl.call(this, "div", {
					className: "vjs-volume-control vjs-control " + e
				})
			}, e.prototype.handleMouseDown = function(t) {
				var e = this.el_.ownerDocument;
				this.on(e, "mousemove", this.throttledHandleMouseMove), this.on(e, "touchmove", this.throttledHandleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
			}, e.prototype.handleMouseUp = function(t) {
				var e = this.el_.ownerDocument;
				this.off(e, "mousemove", this.throttledHandleMouseMove), this.off(e, "touchmove", this.throttledHandleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
			}, e.prototype.handleMouseMove = function(t) {
				this.volumeBar.handleMouseMove(t)
			}, e
		}(He);
		dn.prototype.options_ = {
			children: ["volumeBar"]
		}, He.registerComponent("VolumeControl", dn);
		var hn = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return un(r, i), r.on(i, ["loadstart", "volumechange"], r.update), r
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-mute-control " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.handleClick = function(t) {
				var e = this.player_.volume(),
					i = this.player_.lastVolume_();
				if (0 === e) {
					var n = i < .1 ? .1 : i;
					this.player_.volume(n), this.player_.muted(!1)
				} else this.player_.muted(!this.player_.muted())
			}, e.prototype.update = function(t) {
				this.updateIcon_(), this.updateControlText_()
			}, e.prototype.updateIcon_ = function() {
				var t = this.player_.volume(),
					e = 3;
				0 === t || this.player_.muted() ? e = 0 : t < .33 ? e = 1 : t < .67 && (e = 2);
				for (var i = 0; i < 4; i++) S(this.el_, "vjs-vol-" + i);
				T(this.el_, "vjs-vol-" + e)
			}, e.prototype.updateControlText_ = function() {
				var t = this.player_.muted() || 0 === this.player_.volume(),
					e = t ? "Unmute" : "Mute";
				this.controlText() !== e && this.controlText(e)
			}, e
		}(Vi);
		hn.prototype.controlText_ = "Mute", He.registerComponent("MuteToggle", hn);
		var pn = function(t) {
			function e(i) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				ne(this, e), void 0 !== n.inline ? n.inline = n.inline : n.inline = !0, (void 0 === n.volumeControl || u(n.volumeControl)) && (n.volumeControl = n.volumeControl || {}, n.volumeControl.vertical = !n.inline);
				var r = ae(this, t.call(this, i, n));
				return un(r, i), r.on(r.volumeControl, ["slideractive"], r.sliderActive_), r.on(r.muteToggle, "focus", r.sliderActive_), r.on(r.volumeControl, ["sliderinactive"], r.sliderInactive_), r.on(r.muteToggle, "blur", r.sliderInactive_), r
			}
			return re(e, t), e.prototype.sliderActive_ = function() {
				this.addClass("vjs-slider-active")
			}, e.prototype.sliderInactive_ = function() {
				this.removeClass("vjs-slider-active")
			}, e.prototype.createEl = function() {
				var e = "vjs-volume-panel-horizontal";
				return this.options_.inline || (e = "vjs-volume-panel-vertical"), t.prototype.createEl.call(this, "div", {
					className: "vjs-volume-panel vjs-control " + e
				})
			}, e
		}(He);
		pn.prototype.options_ = {
			children: ["muteToggle", "volumeControl"]
		}, He.registerComponent("VolumePanel", pn);
		var fn = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return n && (r.menuButton_ = n.menuButton), r.focusedChild_ = -1, r.on("keydown", r.handleKeyPress), r
			}
			return re(e, t), e.prototype.addItem = function(t) {
				this.addChild(t), t.on("click", Pe(this, function(e) {
					this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== t.name() && this.menuButton_.focus())
				}))
			}, e.prototype.createEl = function() {
				var e = this.options_.contentElType || "ul";
				this.contentEl_ = y(e, {
					className: "vjs-menu-content"
				}), this.contentEl_.setAttribute("role", "menu");
				var i = t.prototype.createEl.call(this, "div", {
					append: this.contentEl_,
					className: "vjs-menu"
				});
				return i.appendChild(this.contentEl_), X(i, "click", function(t) {
					t.preventDefault(), t.stopImmediatePropagation()
				}), i
			}, e.prototype.dispose = function() {
				this.contentEl_ = null, t.prototype.dispose.call(this)
			}, e.prototype.handleKeyPress = function(t) {
				37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepForward()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepBack())
			}, e.prototype.stepForward = function() {
				var t = 0;
				void 0 !== this.focusedChild_ && (t = this.focusedChild_ + 1), this.focus(t)
			}, e.prototype.stepBack = function() {
				var t = 0;
				void 0 !== this.focusedChild_ && (t = this.focusedChild_ - 1), this.focus(t)
			}, e.prototype.focus = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					e = this.children().slice();
				e.length && e[0].className && /vjs-menu-title/.test(e[0].className) && e.shift(), e.length > 0 && (t < 0 ? t = 0 : t >= e.length && (t = e.length - 1), this.focusedChild_ = t, e[t].el_.focus())
			}, e
		}(He);
		He.registerComponent("Menu", fn);
		var mn = function(t) {
			function e(i) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				r.menuButton_ = new Vi(i, n), r.menuButton_.controlText(r.controlText_), r.menuButton_.el_.setAttribute("aria-haspopup", "true");
				var a = Vi.prototype.buildCSSClass();
				return r.menuButton_.el_.className = r.buildCSSClass() + " " + a, r.menuButton_.removeClass("vjs-control"), r.addChild(r.menuButton_), r.update(), r.enabled_ = !0, r.on(r.menuButton_, "tap", r.handleClick), r.on(r.menuButton_, "click", r.handleClick), r.on(r.menuButton_, "focus", r.handleFocus), r.on(r.menuButton_, "blur", r.handleBlur), r.on("keydown", r.handleSubmenuKeyPress), r
			}
			return re(e, t), e.prototype.update = function() {
				var t = this.createMenu();
				this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
			}, e.prototype.createMenu = function() {
				var t = new fn(this.player_, {
					menuButton: this
				});
				if (this.hideThreshold_ = 0, this.options_.title) {
					var e = y("li", {
						className: "vjs-menu-title",
						innerHTML: tt(this.options_.title),
						tabIndex: -1
					});
					this.hideThreshold_ += 1, t.children_.unshift(e), _(e, t.contentEl())
				}
				if (this.items = this.createItems(), this.items) for (var i = 0; i < this.items.length; i++) t.addItem(this.items[i]);
				return t
			}, e.prototype.createItems = function() {}, e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: this.buildWrapperCSSClass()
				}, {})
			}, e.prototype.buildWrapperCSSClass = function() {
				var e = "vjs-menu-button";
				return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + Vi.prototype.buildCSSClass() + " " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.buildCSSClass = function() {
				var e = "vjs-menu-button";
				return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.controlText = function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
				return this.menuButton_.controlText(t, e)
			}, e.prototype.handleClick = function(t) {
				this.one(this.menu.contentEl(), "mouseleave", Pe(this, function(t) {
					this.unpressButton(), this.el_.blur()
				})), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
			}, e.prototype.focus = function() {
				this.menuButton_.focus()
			}, e.prototype.blur = function() {
				this.menuButton_.blur()
			}, e.prototype.handleFocus = function() {
				X(Ot, "keydown", Pe(this, this.handleKeyPress))
			}, e.prototype.handleBlur = function() {
				Y(Ot, "keydown", Pe(this, this.handleKeyPress))
			}, e.prototype.handleKeyPress = function(t) {
				27 === t.which || 9 === t.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus())) : 38 !== t.which && 40 !== t.which || this.buttonPressed_ || (this.pressButton(), t.preventDefault())
			}, e.prototype.handleSubmenuKeyPress = function(t) {
				27 !== t.which && 9 !== t.which || (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus()))
			}, e.prototype.pressButton = function() {
				if (this.enabled_) {
					if (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), Ut && m()) return;
					this.menu.focus()
				}
			}, e.prototype.unpressButton = function() {
				this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
			}, e.prototype.disable = function() {
				this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
			}, e.prototype.enable = function() {
				this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
			}, e
		}(He);
		He.registerComponent("MenuButton", mn);
		var gn = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = n.tracks,
					a = ae(this, t.call(this, i, n));
				if (a.items.length <= 1 && a.hide(), !r) return ae(a);
				var s = Pe(a, a.update);
				return r.addEventListener("removetrack", s), r.addEventListener("addtrack", s), a.player_.on("ready", s), a.player_.on("dispose", function() {
					r.removeEventListener("removetrack", s), r.removeEventListener("addtrack", s)
				}), a
			}
			return re(e, t), e
		}(mn);
		He.registerComponent("TrackButton", gn);
		var yn = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.selectable = n.selectable, r.selected(n.selected), r.selectable ? r.el_.setAttribute("role", "menuitemcheckbox") : r.el_.setAttribute("role", "menuitem"), r
			}
			return re(e, t), e.prototype.createEl = function(e, i, n) {
				return this.nonIconControl = !0, t.prototype.createEl.call(this, "li", s({
					className: "vjs-menu-item",
					innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
					tabIndex: -1
				}, i), n)
			}, e.prototype.handleClick = function(t) {
				this.selected(!0)
			}, e.prototype.selected = function(t) {
				this.selectable && (t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected")) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText("")))
			}, e
		}(Bi);
		He.registerComponent("MenuItem", yn);
		var vn = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = n.track,
					a = i.textTracks();
				n.label = r.label || r.language || "Unknown", n.selected = "showing" === r.mode;
				var s = ae(this, t.call(this, i, n));
				s.track = r;
				var o = function() {
					for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
					s.handleTracksChange.apply(s, e)
				}, u = function() {
					for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
					s.handleSelectedLanguageChange.apply(s, e)
				};
				if (i.on(["loadstart", "texttrackchange"], o), a.addEventListener("change", o), a.addEventListener("selectedlanguagechange", u), s.on("dispose", function() {
					i.off(["loadstart", "texttrackchange"], o), a.removeEventListener("change", o), a.removeEventListener("selectedlanguagechange", u)
				}), void 0 === a.onchange) {
					var l = void 0;
					s.on(["tap", "click"], function() {
						if ("object" !== ie(Ct.Event)) try {
							l = new Ct.Event("change")
						} catch (t) {}
						l || (l = Ot.createEvent("Event"), l.initEvent("change", !0, !0)), a.dispatchEvent(l)
					})
				}
				return s.handleTracksChange(), s
			}
			return re(e, t), e.prototype.handleClick = function(e) {
				var i = this.track.kind,
					n = this.track.kinds,
					r = this.player_.textTracks();
				if (n || (n = [i]), t.prototype.handleClick.call(this, e), r) for (var a = 0; a < r.length; a++) {
					var s = r[a];
					s === this.track && n.indexOf(s.kind) > -1 ? "showing" !== s.mode && (s.mode = "showing") : "disabled" !== s.mode && (s.mode = "disabled")
				}
			}, e.prototype.handleTracksChange = function(t) {
				this.selected("showing" === this.track.mode)
			}, e.prototype.handleSelectedLanguageChange = function(t) {
				if ("showing" === this.track.mode) {
					var e = this.player_.cache_.selectedLanguage;
					if (e && e.enabled && e.language === this.track.language && e.kind !== this.track.kind) return;
					this.player_.cache_.selectedLanguage = {
						enabled: !0,
						language: this.track.language,
						kind: this.track.kind
					}
				}
			}, e.prototype.dispose = function() {
				this.track = null, t.prototype.dispose.call(this)
			}, e
		}(yn);
		He.registerComponent("TextTrackMenuItem", vn);
		var _n = function(t) {
			function e(i, n) {
				return ne(this, e), n.track = {
					player: i,
					kind: n.kind,
					kinds: n.kinds,
					default: !1,
					mode: "disabled"
				}, n.kinds || (n.kinds = [n.kind]), n.label ? n.track.label = n.label : n.track.label = n.kinds.join(" and ") + " off", n.selectable = !0, ae(this, t.call(this, i, n))
			}
			return re(e, t), e.prototype.handleTracksChange = function(t) {
				for (var e = this.player().textTracks(), i = !0, n = 0, r = e.length; n < r; n++) {
					var a = e[n];
					if (this.options_.kinds.indexOf(a.kind) > -1 && "showing" === a.mode) {
						i = !1;
						break
					}
				}
				this.selected(i)
			}, e.prototype.handleSelectedLanguageChange = function(t) {
				for (var e = this.player().textTracks(), i = !0, n = 0, r = e.length; n < r; n++) {
					var a = e[n];
					if (["captions", "descriptions", "subtitles"].indexOf(a.kind) > -1 && "showing" === a.mode) {
						i = !1;
						break
					}
				}
				i && (this.player_.cache_.selectedLanguage = {
					enabled: !1
				})
			}, e
		}(vn);
		He.registerComponent("OffTextTrackMenuItem", _n);
		var bn = function(t) {
			function e(i) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return ne(this, e), n.tracks = i.textTracks(), ae(this, t.call(this, i, n))
			}
			return re(e, t), e.prototype.createItems = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vn,
					i = void 0;
				this.label_ && (i = this.label_ + " off"), t.push(new _n(this.player_, {
					kinds: this.kinds_,
					kind: this.kind_,
					label: i
				})), this.hideThreshold_ += 1;
				var n = this.player_.textTracks();
				Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
				for (var r = 0; r < n.length; r++) {
					var a = n[r];
					if (this.kinds_.indexOf(a.kind) > -1) {
						var s = new e(this.player_, {
							track: a,
							selectable: !0
						});
						s.addClass("vjs-" + a.kind + "-menu-item"), t.push(s)
					}
				}
				return t
			}, e
		}(gn);
		He.registerComponent("TextTrackButton", bn);
		var Tn = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = n.track,
					a = n.cue,
					s = i.currentTime();
				n.selectable = !0, n.label = a.text, n.selected = a.startTime <= s && s < a.endTime;
				var o = ae(this, t.call(this, i, n));
				return o.track = r, o.cue = a, r.addEventListener("cuechange", Pe(o, o.update)), o
			}
			return re(e, t), e.prototype.handleClick = function(e) {
				t.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
			}, e.prototype.update = function(t) {
				var e = this.cue,
					i = this.player_.currentTime();
				this.selected(e.startTime <= i && i < e.endTime)
			}, e
		}(yn);
		He.registerComponent("ChaptersTrackMenuItem", Tn);
		var Sn = function(t) {
			function e(i, n, r) {
				return ne(this, e), ae(this, t.call(this, i, n, r))
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-chapters-button " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.buildWrapperCSSClass = function() {
				return "vjs-chapters-button " + t.prototype.buildWrapperCSSClass.call(this)
			}, e.prototype.update = function(e) {
				this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()), t.prototype.update.call(this)
			}, e.prototype.setTrack = function(t) {
				if (this.track_ !== t) {
					if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
						var e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
						e && e.removeEventListener("load", this.updateHandler_), this.track_ = null
					}
					if (this.track_ = t, this.track_) {
						this.track_.mode = "hidden";
						var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
						i && i.addEventListener("load", this.updateHandler_)
					}
				}
			}, e.prototype.findChaptersTrack = function() {
				for (var t = this.player_.textTracks() || [], e = t.length - 1; e >= 0; e--) {
					var i = t[e];
					if (i.kind === this.kind_) return i
				}
			}, e.prototype.getMenuCaption = function() {
				return this.track_ && this.track_.label ? this.track_.label : this.localize(tt(this.kind_))
			}, e.prototype.createMenu = function() {
				return this.options_.title = this.getMenuCaption(), t.prototype.createMenu.call(this)
			}, e.prototype.createItems = function() {
				var t = [];
				if (!this.track_) return t;
				var e = this.track_.cues;
				if (!e) return t;
				for (var i = 0, n = e.length; i < n; i++) {
					var r = e[i],
						a = new Tn(this.player_, {
							track: this.track_,
							cue: r
						});
					t.push(a)
				}
				return t
			}, e
		}(bn);
		Sn.prototype.kind_ = "chapters", Sn.prototype.controlText_ = "Chapters", He.registerComponent("ChaptersButton", Sn);
		var wn = function(t) {
			function e(i, n, r) {
				ne(this, e);
				var a = ae(this, t.call(this, i, n, r)),
					s = i.textTracks(),
					o = Pe(a, a.handleTracksChange);
				return s.addEventListener("change", o), a.on("dispose", function() {
					s.removeEventListener("change", o)
				}), a
			}
			return re(e, t), e.prototype.handleTracksChange = function(t) {
				for (var e = this.player().textTracks(), i = !1, n = 0, r = e.length; n < r; n++) {
					var a = e[n];
					if (a.kind !== this.kind_ && "showing" === a.mode) {
						i = !0;
						break
					}
				}
				i ? this.disable() : this.enable()
			}, e.prototype.buildCSSClass = function() {
				return "vjs-descriptions-button " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.buildWrapperCSSClass = function() {
				return "vjs-descriptions-button " + t.prototype.buildWrapperCSSClass.call(this)
			}, e
		}(bn);
		wn.prototype.kind_ = "descriptions", wn.prototype.controlText_ = "Descriptions", He.registerComponent("DescriptionsButton", wn);
		var kn = function(t) {
			function e(i, n, r) {
				return ne(this, e), ae(this, t.call(this, i, n, r))
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-subtitles-button " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.buildWrapperCSSClass = function() {
				return "vjs-subtitles-button " + t.prototype.buildWrapperCSSClass.call(this)
			}, e
		}(bn);
		kn.prototype.kind_ = "subtitles", kn.prototype.controlText_ = "Subtitles", He.registerComponent("SubtitlesButton", kn);
		var En = function(t) {
			function e(i, n) {
				ne(this, e), n.track = {
					player: i,
					kind: n.kind,
					label: n.kind + " settings",
					selectable: !1,
					default: !1,
					mode: "disabled"
				}, n.selectable = !1, n.name = "CaptionSettingsMenuItem";
				var r = ae(this, t.call(this, i, n));
				return r.addClass("vjs-texttrack-settings"), r.controlText(", opens " + n.kind + " settings dialog"), r
			}
			return re(e, t), e.prototype.handleClick = function(t) {
				this.player().getChild("textTrackSettings").open()
			}, e
		}(vn);
		He.registerComponent("CaptionSettingsMenuItem", En);
		var Cn = function(t) {
			function e(i, n, r) {
				return ne(this, e), ae(this, t.call(this, i, n, r))
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-captions-button " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.buildWrapperCSSClass = function() {
				return "vjs-captions-button " + t.prototype.buildWrapperCSSClass.call(this)
			}, e.prototype.createItems = function() {
				var e = [];
				return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (e.push(new En(this.player_, {
					kind: this.kind_
				})), this.hideThreshold_ += 1), t.prototype.createItems.call(this, e)
			}, e
		}(bn);
		Cn.prototype.kind_ = "captions", Cn.prototype.controlText_ = "Captions", He.registerComponent("CaptionsButton", Cn);
		var On = function(t) {
			function e() {
				return ne(this, e), ae(this, t.apply(this, arguments))
			}
			return re(e, t), e.prototype.createEl = function(e, i, n) {
				var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
				return "captions" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), r += "</span>", t.prototype.createEl.call(this, e, s({
					innerHTML: r
				}, i), n)
			}, e
		}(vn);
		He.registerComponent("SubsCapsMenuItem", On);
		var An = function(t) {
			function e(i) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.label_ = "subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(r.player_.language_) > -1 && (r.label_ = "captions"), r.menuButton_.controlText(tt(r.label_)), r
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-subs-caps-button " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.buildWrapperCSSClass = function() {
				return "vjs-subs-caps-button " + t.prototype.buildWrapperCSSClass.call(this)
			}, e.prototype.createItems = function() {
				var e = [];
				return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (e.push(new En(this.player_, {
					kind: this.label_
				})), this.hideThreshold_ += 1), e = t.prototype.createItems.call(this, e, On)
			}, e
		}(bn);
		An.prototype.kinds_ = ["captions", "subtitles"], An.prototype.controlText_ = "Subtitles", He.registerComponent("SubsCapsButton", An);
		var Pn = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = n.track,
					a = i.audioTracks();
				n.label = r.label || r.language || "Unknown", n.selected = r.enabled;
				var s = ae(this, t.call(this, i, n));
				s.track = r;
				var o = Pe(s, s.handleTracksChange);
				return a.addEventListener("change", o), s.on("dispose", function() {
					a.removeEventListener("change", o)
				}), s
			}
			return re(e, t), e.prototype.handleClick = function(e) {
				var i = this.player_.audioTracks();
				t.prototype.handleClick.call(this, e);
				for (var n = 0; n < i.length; n++) {
					var r = i[n];
					r.enabled = r === this.track
				}
			}, e.prototype.handleTracksChange = function(t) {
				this.selected(this.track.enabled)
			}, e
		}(yn);
		He.registerComponent("AudioTrackMenuItem", Pn);
		var xn = function(t) {
			function e(i) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return ne(this, e), n.tracks = i.audioTracks(), ae(this, t.call(this, i, n))
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-audio-button " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.buildWrapperCSSClass = function() {
				return "vjs-audio-button " + t.prototype.buildWrapperCSSClass.call(this)
			}, e.prototype.createItems = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
				this.hideThreshold_ = 1;
				for (var e = this.player_.audioTracks(), i = 0; i < e.length; i++) {
					var n = e[i];
					t.push(new Pn(this.player_, {
						track: n,
						selectable: !0
					}))
				}
				return t
			}, e
		}(gn);
		xn.prototype.controlText_ = "Audio Track", He.registerComponent("AudioTrackButton", xn);
		var In = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = n.rate,
					a = parseFloat(r, 10);
				n.label = r, n.selected = 1 === a, n.selectable = !0;
				var s = ae(this, t.call(this, i, n));
				return s.label = r, s.rate = a, s.on(i, "ratechange", s.update), s
			}
			return re(e, t), e.prototype.handleClick = function(e) {
				t.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
			}, e.prototype.update = function(t) {
				this.selected(this.player().playbackRate() === this.rate)
			}, e
		}(yn);
		In.prototype.contentElType = "button", He.registerComponent("PlaybackRateMenuItem", In);
		var Ln = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.updateVisibility(), r.updateLabel(), r.on(i, "loadstart", r.updateVisibility), r.on(i, "ratechange", r.updateLabel), r
			}
			return re(e, t), e.prototype.createEl = function() {
				var e = t.prototype.createEl.call(this);
				return this.labelEl_ = y("div", {
					className: "vjs-playback-rate-value",
					innerHTML: "1x"
				}), e.appendChild(this.labelEl_), e
			}, e.prototype.dispose = function() {
				this.labelEl_ = null, t.prototype.dispose.call(this)
			}, e.prototype.buildCSSClass = function() {
				return "vjs-playback-rate " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.buildWrapperCSSClass = function() {
				return "vjs-playback-rate " + t.prototype.buildWrapperCSSClass.call(this)
			}, e.prototype.createMenu = function() {
				var t = new fn(this.player()),
					e = this.playbackRates();
				if (e) for (var i = e.length - 1; i >= 0; i--) t.addChild(new In(this.player(), {
					rate: e[i] + "x"
				}));
				return t
			}, e.prototype.updateARIAAttributes = function() {
				this.el().setAttribute("aria-valuenow", this.player().playbackRate())
			}, e.prototype.handleClick = function(t) {
				for (var e = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++) if (i[r] > e) {
					n = i[r];
					break
				}
				this.player().playbackRate(n)
			}, e.prototype.playbackRates = function() {
				return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
			}, e.prototype.playbackRateSupported = function() {
				return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
			}, e.prototype.updateVisibility = function(t) {
				this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
			}, e.prototype.updateLabel = function(t) {
				this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
			}, e
		}(mn);
		Ln.prototype.controlText_ = "Playback Rate", He.registerComponent("PlaybackRateMenuButton", Ln);
		var jn = function(t) {
			function e() {
				return ne(this, e), ae(this, t.apply(this, arguments))
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: this.buildCSSClass()
				})
			}, e
		}(He);
		He.registerComponent("Spacer", jn);
		var Mn = function(t) {
			function e() {
				return ne(this, e), ae(this, t.apply(this, arguments))
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.createEl = function() {
				var e = t.prototype.createEl.call(this, {
					className: this.buildCSSClass()
				});
				return e.innerHTML = "&nbsp;", e
			}, e
		}(jn);
		He.registerComponent("CustomControlSpacer", Mn);
		var Dn = function(t) {
			function e() {
				return ne(this, e), ae(this, t.apply(this, arguments))
			}
			return re(e, t), e.prototype.createEl = function() {
				return t.prototype.createEl.call(this, "div", {
					className: "vjs-control-bar",
					dir: "ltr"
				}, {
					role: "group"
				})
			}, e
		}(He);
		Dn.prototype.options_ = {
			children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
		}, He.registerComponent("ControlBar", Dn);
		var Rn = function(t) {
			function e(i, n) {
				ne(this, e);
				var r = ae(this, t.call(this, i, n));
				return r.on(i, "error", r.open), r
			}
			return re(e, t), e.prototype.buildCSSClass = function() {
				return "vjs-error-display " + t.prototype.buildCSSClass.call(this)
			}, e.prototype.content = function() {
				var t = this.player().error();
				return t ? this.localize(t.message) : ""
			}, e
		}(ti);
		Rn.prototype.options_ = it(ti.prototype.options_, {
			pauseOnOpen: !1,
			fillAlways: !0,
			temporary: !1,
			uncloseable: !0
		}), He.registerComponent("ErrorDisplay", Rn);
		var Bn = ["#000", "Black"],
			Nn = ["#00F", "Blue"],
			Un = ["#0FF", "Cyan"],
			Fn = ["#0F0", "Green"],
			Hn = ["#F0F", "Magenta"],
			Vn = ["#F00", "Red"],
			qn = ["#FFF", "White"],
			Gn = ["#FF0", "Yellow"],
			Wn = ["1", "Opaque"],
			zn = ["0.5", "Semi-Transparent"],
			Xn = ["0", "Transparent"],
			Yn = {
				backgroundColor: {
					selector: ".vjs-bg-color > select",
					id: "captions-background-color-%s",
					label: "Color",
					options: [Bn, qn, Vn, Fn, Nn, Gn, Hn, Un]
				},
				backgroundOpacity: {
					selector: ".vjs-bg-opacity > select",
					id: "captions-background-opacity-%s",
					label: "Transparency",
					options: [Wn, zn, Xn]
				},
				color: {
					selector: ".vjs-fg-color > select",
					id: "captions-foreground-color-%s",
					label: "Color",
					options: [qn, Bn, Vn, Fn, Nn, Gn, Hn, Un]
				},
				edgeStyle: {
					selector: ".vjs-edge-style > select",
					id: "%s",
					label: "Text Edge Style",
					options: [
						["none", "None"],
						["raised", "Raised"],
						["depressed", "Depressed"],
						["uniform", "Uniform"],
						["dropshadow", "Dropshadow"]
					]
				},
				fontFamily: {
					selector: ".vjs-font-family > select",
					id: "captions-font-family-%s",
					label: "Font Family",
					options: [
						["proportionalSansSerif", "Proportional Sans-Serif"],
						["monospaceSansSerif", "Monospace Sans-Serif"],
						["proportionalSerif", "Proportional Serif"],
						["monospaceSerif", "Monospace Serif"],
						["casual", "Casual"],
						["script", "Script"],
						["small-caps", "Small Caps"]
					]
				},
				fontPercent: {
					selector: ".vjs-font-percent > select",
					id: "captions-font-size-%s",
					label: "Font Size",
					options: [
						["0.50", "50%"],
						["0.75", "75%"],
						["1.00", "100%"],
						["1.25", "125%"],
						["1.50", "150%"],
						["1.75", "175%"],
						["2.00", "200%"],
						["3.00", "300%"],
						["4.00", "400%"]
					],
					default: 2,
					parser: function(t) {
						return "1.00" === t ? null : Number(t)
					}
				},
				textOpacity: {
					selector: ".vjs-text-opacity > select",
					id: "captions-foreground-opacity-%s",
					label: "Transparency",
					options: [Wn, zn]
				},
				windowColor: {
					selector: ".vjs-window-color > select",
					id: "captions-window-color-%s",
					label: "Color"
				},
				windowOpacity: {
					selector: ".vjs-window-opacity > select",
					id: "captions-window-opacity-%s",
					label: "Transparency",
					options: [Xn, zn, Wn]
				}
			};
		Yn.windowColor.options = Yn.backgroundColor.options;
		var Kn = function(t) {
			function e(i, n) {
				ne(this, e), n.temporary = !1;
				var a = ae(this, t.call(this, i, n));
				return a.updateDisplay = Pe(a, a.updateDisplay), a.fill(), a.hasBeenOpened_ = a.hasBeenFilled_ = !0, a.endDialog = y("p", {
					className: "vjs-control-text",
					textContent: a.localize("End of dialog window.")
				}), a.el().appendChild(a.endDialog), a.setDefaults(), void 0 === n.persistTextTrackSettings && (a.options_.persistTextTrackSettings = a.options_.playerOptions.persistTextTrackSettings), a.on(a.$(".vjs-done-button"), "click", function() {
					a.saveSettings(), a.close()
				}), a.on(a.$(".vjs-default-button"), "click", function() {
					a.setDefaults(), a.updateDisplay()
				}), r(Yn, function(t) {
					a.on(a.$(t.selector), "change", a.updateDisplay)
				}), a.options_.persistTextTrackSettings && a.restoreSettings(), a
			}
			return re(e, t), e.prototype.dispose = function() {
				this.endDialog = null, t.prototype.dispose.call(this)
			}, e.prototype.createElSelect_ = function(t) {
				var e = this,
					i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "label",
					r = Yn[t],
					a = r.id.replace("%s", this.id_);
				return ["<" + n + ' id="' + a + '" class="' + ("label" === n ? "vjs-label" : "") + '">', this.localize(r.label), "</" + n + ">", '<select aria-labelledby="' + ("" !== i ? i + " " : "") + a + '">'].concat(r.options.map(function(t) {
					var n = a + "-" + t[1];
					return ['<option id="' + n + '" value="' + t[0] + '" ', 'aria-labelledby="' + ("" !== i ? i + " " : "") + a + " " + n + '">', e.localize(t[1]), "</option>"].join("")
				})).concat("</select>").join("")
			}, e.prototype.createElFgColor_ = function() {
				var t = "captions-text-legend-" + this.id_;
				return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", t), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", t), "</span>", "</fieldset>"].join("")
			}, e.prototype.createElBgColor_ = function() {
				var t = "captions-background-" + this.id_;
				return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", t), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", t), "</span>", "</fieldset>"].join("")
			}, e.prototype.createElWinColor_ = function() {
				var t = "captions-window-" + this.id_;
				return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", t), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", t), "</span>", "</fieldset>"].join("")
			}, e.prototype.createElColors_ = function() {
				return y("div", {
					className: "vjs-track-settings-colors",
					innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
				})
			}, e.prototype.createElFont_ = function() {
				return y("div", {
					className: 'vjs-track-settings-font">',
					innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
				})
			}, e.prototype.createElControls_ = function() {
				var t = this.localize("restore all settings to the default values");
				return y("div", {
					className: "vjs-track-settings-controls",
					innerHTML: ['<button class="vjs-default-button" title="' + t + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + t + "</span>", "</button>", '<button class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
				})
			}, e.prototype.content = function() {
				return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
			}, e.prototype.label = function() {
				return this.localize("Caption Settings Dialog")
			}, e.prototype.description = function() {
				return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
			}, e.prototype.buildCSSClass = function() {
				return t.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
			}, e.prototype.getValues = function() {
				var t = this;
				return a(Yn, function(e, i, n) {
					var r = wt(t.$(i.selector), i.parser);
					return void 0 !== r && (e[n] = r), e
				}, {})
			}, e.prototype.setValues = function(t) {
				var e = this;
				r(Yn, function(i, n) {
					kt(e.$(i.selector), t[n], i.parser)
				})
			}, e.prototype.setDefaults = function() {
				var t = this;
				r(Yn, function(e) {
					var i = e.hasOwnProperty("default") ? e.
					default : 0;
					t.$(e.selector).selectedIndex = i
				})
			}, e.prototype.restoreSettings = function() {
				var t = void 0;
				try {
					t = JSON.parse(Ct.localStorage.getItem("vjs-text-track-settings"))
				} catch (t) {
					pe.warn(t)
				}
				t && this.setValues(t)
			}, e.prototype.saveSettings = function() {
				if (this.options_.persistTextTrackSettings) {
					var t = this.getValues();
					try {
						Object.keys(t).length ? Ct.localStorage.setItem("vjs-text-track-settings", JSON.stringify(t)) : Ct.localStorage.removeItem("vjs-text-track-settings")
					} catch (t) {
						pe.warn(t)
					}
				}
			}, e.prototype.updateDisplay = function() {
				var t = this.player_.getChild("textTrackDisplay");
				t && t.updateDisplay()
			}, e.prototype.conditionalBlur_ = function() {
				this.previouslyActiveEl_ = null, this.off(Ot, "keydown", this.handleKeyDown);
				var t = this.player_.controlBar,
					e = t && t.subsCapsButton,
					i = t && t.captionsButton;
				e ? e.focus() : i && i.focus()
			}, e
		}(ti);
		He.registerComponent("TextTrackSettings", Kn);
		var $n = se(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
			Jn = function(t) {
				function e(i, n) {
					ne(this, e);
					var r = ae(this, t.call(this, i, n)),
						a = i.source,
						s = !1;
					if (a && (r.el_.currentSrc !== a.src || i.tag && 3 === i.tag.initNetworkState_) ? r.setSource(a) : r.handleLateInit_(r.el_), r.el_.hasChildNodes()) {
						for (var o = r.el_.childNodes, u = o.length, l = []; u--;) {
							var c = o[u];
							"track" === c.nodeName.toLowerCase() && (r.featuresNativeTextTracks ? (r.remoteTextTrackEls().addTrackElement_(c), r.remoteTextTracks().addTrack(c.track), r.textTracks().addTrack(c.track), s || r.el_.hasAttribute("crossorigin") || !vi(c.src) || (s = !0)) : l.push(c))
						}
						for (var d = 0; d < l.length; d++) r.el_.removeChild(l[d])
					}
					return r.proxyNativeTracks_(), r.featuresNativeTextTracks && s && pe.warn(At($n)), r.restoreMetadataTracksInIOSNativePlayer_(), (Zt || Bt || Gt) && !0 === i.nativeControlsForTouch && r.setControls(!0), r.proxyWebkitFullscreen_(), r.triggerReady(), r
				}
				return re(e, t), e.prototype.dispose = function() {
					e.disposeMediaElement(this.el_), this.options_ = null, t.prototype.dispose.call(this)
				}, e.prototype.restoreMetadataTracksInIOSNativePlayer_ = function() {
					var t = this.textTracks(),
						e = void 0,
						i = function() {
							e = [];
							for (var i = 0; i < t.length; i++) {
								var n = t[i];
								"metadata" === n.kind && e.push({
									track: n,
									storedMode: n.mode
								})
							}
						};
					i(), t.addEventListener("change", i), this.on("dispose", function() {
						return t.removeEventListener("change", i)
					});
					var n = function i() {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							"disabled" === r.track.mode && r.track.mode !== r.storedMode && (r.track.mode = r.storedMode)
						}
						t.removeEventListener("change", i)
					};
					this.on("webkitbeginfullscreen", function() {
						t.removeEventListener("change", i), t.removeEventListener("change", n), t.addEventListener("change", n)
					}), this.on("webkitendfullscreen", function() {
						t.removeEventListener("change", i), t.addEventListener("change", i), t.removeEventListener("change", n)
					})
				}, e.prototype.proxyNativeTracks_ = function() {
					var t = this;
					Ai.names.forEach(function(e) {
						var i = Ai[e],
							n = t.el()[i.getterName],
							r = t[i.getterName]();
						if (t["featuresNative" + i.capitalName + "Tracks"] && n && n.addEventListener) {
							var a = {
								change: function(t) {
									r.trigger({
										type: "change",
										target: r,
										currentTarget: r,
										srcElement: r
									})
								},
								addtrack: function(t) {
									r.addTrack(t.track)
								},
								removetrack: function(t) {
									r.removeTrack(t.track)
								}
							}, s = function() {
								for (var t = [], e = 0; e < r.length; e++) {
									for (var i = !1, a = 0; a < n.length; a++) if (n[a] === r[e]) {
										i = !0;
										break
									}
									i || t.push(r[e])
								}
								for (; t.length;) r.removeTrack(t.shift())
							};
							Object.keys(a).forEach(function(e) {
								var i = a[e];
								n.addEventListener(e, i), t.on("dispose", function(t) {
									return n.removeEventListener(e, i)
								})
							}), t.on("loadstart", s), t.on("dispose", function(e) {
								return t.off("loadstart", s)
							})
						}
					})
				}, e.prototype.createEl = function() {
					var t = this.options_.tag;
					if (!t || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
						if (t) {
							var i = t.cloneNode(!0);
							t.parentNode && t.parentNode.insertBefore(i, t), e.disposeMediaElement(t), t = i
						} else {
							t = Ot.createElement("video");
							var n = this.options_.tag && E(this.options_.tag),
								r = it({}, n);
							Zt && !0 === this.options_.nativeControlsForTouch || delete r.controls, k(t, s(r, {
								id: this.options_.techId,
								class: "vjs-tech"
							}))
						}
						t.playerId = this.options_.playerId
					}
					void 0 !== this.options_.preload && O(t, "preload", this.options_.preload);
					for (var a = ["loop", "muted", "playsinline", "autoplay"], o = 0; o < a.length; o++) {
						var u = a[o],
							l = this.options_[u];
						void 0 !== l && (l ? O(t, u, u) : A(t, u), t[u] = l)
					}
					return t
				}, e.prototype.handleLateInit_ = function(t) {
					if (0 !== t.networkState && 3 !== t.networkState) {
						if (0 === t.readyState) {
							var e = !1,
								i = function() {
									e = !0
								};
							this.on("loadstart", i);
							var n = function() {
								e || this.trigger("loadstart")
							};
							return this.on("loadedmetadata", n), void this.ready(function() {
								this.off("loadstart", i), this.off("loadedmetadata", n), e || this.trigger("loadstart")
							})
						}
						var r = ["loadstart"];
						r.push("loadedmetadata"), t.readyState >= 2 && r.push("loadeddata"), t.readyState >= 3 && r.push("canplay"), t.readyState >= 4 && r.push("canplaythrough"), this.ready(function() {
							r.forEach(function(t) {
								this.trigger(t)
							}, this)
						})
					}
				}, e.prototype.setCurrentTime = function(t) {
					try {
						this.el_.currentTime = t
					} catch (t) {
						pe(t, "Video is not ready. (Video.js)")
					}
				}, e.prototype.duration = function() {
					var t = this;
					if (this.el_.duration === 1 / 0 && Ht && Xt && 0 === this.el_.currentTime) {
						var e = function e() {
							t.el_.currentTime > 0 && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", e))
						};
						return this.on("timeupdate", e), NaN
					}
					return this.el_.duration || NaN
				}, e.prototype.width = function() {
					return this.el_.offsetWidth
				}, e.prototype.height = function() {
					return this.el_.offsetHeight
				}, e.prototype.proxyWebkitFullscreen_ = function() {
					var t = this;
					if ("webkitDisplayingFullscreen" in this.el_) {
						var e = function() {
							this.trigger("fullscreenchange", {
								isFullscreen: !1
							})
						}, i = function() {
							"webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", e), this.trigger("fullscreenchange", {
								isFullscreen: !0
							}))
						};
						this.on("webkitbeginfullscreen", i), this.on("dispose", function() {
							t.off("webkitbeginfullscreen", i), t.off("webkitendfullscreen", e)
						})
					}
				}, e.prototype.supportsFullScreen = function() {
					if ("function" == typeof this.el_.webkitEnterFullScreen) {
						var t = Ct.navigator && Ct.navigator.userAgent || "";
						if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
					}
					return !1
				}, e.prototype.enterFullScreen = function() {
					var t = this.el_;
					t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() {
						t.pause(), t.webkitEnterFullScreen()
					}, 0)) : t.webkitEnterFullScreen()
				}, e.prototype.exitFullScreen = function() {
					this.el_.webkitExitFullScreen()
				}, e.prototype.src = function(t) {
					if (void 0 === t) return this.el_.src;
					this.setSrc(t)
				}, e.prototype.reset = function() {
					e.resetMediaElement(this.el_)
				}, e.prototype.currentSrc = function() {
					return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
				}, e.prototype.setControls = function(t) {
					this.el_.controls = !! t
				}, e.prototype.addTextTrack = function(e, i, n) {
					return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, i, n) : t.prototype.addTextTrack.call(this, e, i, n)
				}, e.prototype.createRemoteTextTrack = function(e) {
					if (!this.featuresNativeTextTracks) return t.prototype.createRemoteTextTrack.call(this, e);
					var i = Ot.createElement("track");
					return e.kind && (i.kind = e.kind), e.label && (i.label = e.label), (e.language || e.srclang) && (i.srclang = e.language || e.srclang), e.
					default && (i.
					default = e.
					default), e.id && (i.id = e.id), e.src && (i.src = e.src), i
				}, e.prototype.addRemoteTextTrack = function(e, i) {
					var n = t.prototype.addRemoteTextTrack.call(this, e, i);
					return this.featuresNativeTextTracks && this.el().appendChild(n), n
				}, e.prototype.removeRemoteTextTrack = function(e) {
					if (t.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks) for (var i = this.$$("track"), n = i.length; n--;) e !== i[n] && e !== i[n].track || this.el().removeChild(i[n])
				}, e.prototype.getVideoPlaybackQuality = function() {
					if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
					var t = {};
					return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (t.droppedVideoFrames = this.el().webkitDroppedFrameCount, t.totalVideoFrames = this.el().webkitDecodedFrameCount), Ct.performance && "function" == typeof Ct.performance.now ? t.creationTime = Ct.performance.now() : Ct.performance && Ct.performance.timing && "number" == typeof Ct.performance.timing.navigationStart && (t.creationTime = Ct.Date.now() - Ct.performance.timing.navigationStart), t
				}, e
			}(Ii);
		if (p()) {
			Jn.TEST_VID = Ot.createElement("video");
			var Qn = Ot.createElement("track");
			Qn.kind = "captions", Qn.srclang = "en", Qn.label = "English", Jn.TEST_VID.appendChild(Qn)
		}
		Jn.isSupported = function() {
			try {
				Jn.TEST_VID.volume = .5
			} catch (t) {
				return !1
			}
			return !(!Jn.TEST_VID || !Jn.TEST_VID.canPlayType)
		}, Jn.canPlayType = function(t) {
			return Jn.TEST_VID.canPlayType(t)
		}, Jn.canPlaySource = function(t, e) {
			return Jn.canPlayType(t.type)
		}, Jn.canControlVolume = function() {
			try {
				var t = Jn.TEST_VID.volume;
				return Jn.TEST_VID.volume = t / 2 + .1, t !== Jn.TEST_VID.volume
			} catch (t) {
				return !1
			}
		}, Jn.canControlPlaybackRate = function() {
			if (Ht && Xt && Yt < 58) return !1;
			try {
				var t = Jn.TEST_VID.playbackRate;
				return Jn.TEST_VID.playbackRate = t / 2 + .1, t !== Jn.TEST_VID.playbackRate
			} catch (t) {
				return !1
			}
		}, Jn.supportsNativeTextTracks = function() {
			return Qt
		}, Jn.supportsNativeVideoTracks = function() {
			return !(!Jn.TEST_VID || !Jn.TEST_VID.videoTracks)
		}, Jn.supportsNativeAudioTracks = function() {
			return !(!Jn.TEST_VID || !Jn.TEST_VID.audioTracks)
		}, Jn.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], Jn.prototype.featuresVolumeControl = Jn.canControlVolume(), Jn.prototype.featuresPlaybackRate = Jn.canControlPlaybackRate(), Jn.prototype.movingMediaElementInDOM = !Ut, Jn.prototype.featuresFullscreenResize = !0, Jn.prototype.featuresProgressEvents = !0, Jn.prototype.featuresTimeupdateEvents = !0, Jn.prototype.featuresNativeTextTracks = Jn.supportsNativeTextTracks(), Jn.prototype.featuresNativeVideoTracks = Jn.supportsNativeVideoTracks(), Jn.prototype.featuresNativeAudioTracks = Jn.supportsNativeAudioTracks();
		var Zn = Jn.TEST_VID && Jn.TEST_VID.constructor.prototype.canPlayType,
			tr = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
			er = /^video\/mp4/i;
		Jn.patchCanPlayType = function() {
			Vt >= 4 && !Wt ? Jn.TEST_VID.constructor.prototype.canPlayType = function(t) {
				return t && tr.test(t) ? "maybe" : Zn.call(this, t)
			} : qt && (Jn.TEST_VID.constructor.prototype.canPlayType = function(t) {
				return t && er.test(t) ? "maybe" : Zn.call(this, t)
			})
		}, Jn.unpatchCanPlayType = function() {
			var t = Jn.TEST_VID.constructor.prototype.canPlayType;
			return Jn.TEST_VID.constructor.prototype.canPlayType = Zn, t
		}, Jn.patchCanPlayType(), Jn.disposeMediaElement = function(t) {
			if (t) {
				for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
				t.removeAttribute("src"), "function" == typeof t.load && function() {
					try {
						t.load()
					} catch (t) {}
				}()
			}
		}, Jn.resetMediaElement = function(t) {
			if (t) {
				for (var e = t.querySelectorAll("source"), i = e.length; i--;) t.removeChild(e[i]);
				t.removeAttribute("src"), "function" == typeof t.load && function() {
					try {
						t.load()
					} catch (t) {}
				}()
			}
		}, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(t) {
			Jn.prototype[t] = function() {
				return this.el_[t] || this.el_.hasAttribute(t)
			}
		}), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(t) {
			Jn.prototype["set" + tt(t)] = function(e) {
				this.el_[t] = e, e ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t)
			}
		}), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function(t) {
			Jn.prototype[t] = function() {
				return this.el_[t]
			}
		}), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function(t) {
			Jn.prototype["set" + tt(t)] = function(e) {
				this.el_[t] = e
			}
		}), ["pause", "load", "play"].forEach(function(t) {
			Jn.prototype[t] = function() {
				return this.el_[t]()
			}
		}), Ii.withSourceHandlers(Jn), Jn.nativeSourceHandler = {}, Jn.nativeSourceHandler.canPlayType = function(t) {
			try {
				return Jn.TEST_VID.canPlayType(t)
			} catch (t) {
				return ""
			}
		}, Jn.nativeSourceHandler.canHandleSource = function(t, e) {
			if (t.type) return Jn.nativeSourceHandler.canPlayType(t.type);
			if (t.src) {
				var i = yi(t.src);
				return Jn.nativeSourceHandler.canPlayType("video/" + i)
			}
			return ""
		}, Jn.nativeSourceHandler.handleSource = function(t, e, i) {
			e.setSrc(t.src)
		}, Jn.nativeSourceHandler.dispose = function() {}, Jn.registerSourceHandler(Jn.nativeSourceHandler), Ii.registerTech("Html5", Jn);
		var ir = se(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),
			nr = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "ratechange", "resize", "volumechange", "texttrackchange"],
			rr = function(t) {
				function e(i, n, r) {
					if (ne(this, e), i.id = i.id || "vjs_video_" + F(), n = s(e.getTagSettings(i), n), n.initChildren = !1, n.createEl = !1, n.evented = !1, n.reportTouchActivity = !1, !n.language) if ("function" == typeof i.closest) {
						var a = i.closest("[lang]");
						a && a.getAttribute && (n.language = a.getAttribute("lang"))
					} else for (var o = i; o && 1 === o.nodeType;) {
						if (E(o).hasOwnProperty("lang")) {
							n.language = o.getAttribute("lang");
							break
						}
						o = o.parentNode
					}
					var u = ae(this, t.call(this, null, n, r));
					if (u.isReady_ = !1, u.hasStarted_ = !1, u.userActive_ = !1, !u.options_ || !u.options_.techOrder || !u.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
					if (u.tag = i, u.tagAttributes = i && E(i), u.language(u.options_.language), n.languages) {
						var l = {};
						Object.getOwnPropertyNames(n.languages).forEach(function(t) {
							l[t.toLowerCase()] = n.languages[t]
						}), u.languages_ = l
					} else u.languages_ = e.prototype.options_.languages;
					u.cache_ = {}, u.poster_ = n.poster || "", u.controls_ = !! n.controls, u.cache_.lastVolume = 1, i.controls = !1, i.removeAttribute("controls"), u.scrubbing_ = !1, u.el_ = u.createEl(), Q(u, {
						eventBusKey: "el_"
					});
					var c = it(u.options_);
					if (n.plugins) {
						var d = n.plugins;
						Object.keys(d).forEach(function(t) {
							if ("function" != typeof this[t]) throw new Error('plugin "' + t + '" does not exist');
							this[t](d[t])
						}, u)
					}
					u.options_.playerOptions = c, u.middleware_ = [], u.initChildren(), u.isAudio("audio" === i.nodeName.toLowerCase()), u.controls() ? u.addClass("vjs-controls-enabled") : u.addClass("vjs-controls-disabled"), u.el_.setAttribute("role", "region"), u.isAudio() ? u.el_.setAttribute("aria-label", u.localize("Audio Player")) : u.el_.setAttribute("aria-label", u.localize("Video Player")), u.isAudio() && u.addClass("vjs-audio"), u.flexNotSupported_() && u.addClass("vjs-no-flex"), Ut || u.addClass("vjs-workinghover"), e.players[u.id_] = u;
					var h = Lt.split(".")[0];
					return u.addClass("vjs-v" + h), u.userActive(!0), u.reportUserActivity(), u.listenForUserActivity_(), u.on("fullscreenchange", u.handleFullscreenChange_), u.on("stageclick", u.handleStageClick_), u.changingSrc_ = !1, u.playWaitingForReady_ = !1, u.playOnLoadstart_ = null, u.forceAutoplayInChrome_(), u
				}
				return re(e, t), e.prototype.dispose = function() {
					this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), e.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), t.prototype.dispose.call(this)
				}, e.prototype.createEl = function() {
					var e = this.tag,
						i = void 0,
						n = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player"),
						r = "video-js" === this.tag.tagName.toLowerCase();
					n ? i = this.el_ = e.parentNode : r || (i = this.el_ = t.prototype.createEl.call(this, "div"));
					var a = E(e);
					if (r) {
						for (i = this.el_ = e, e = this.tag = Ot.createElement("video"); i.children.length;) e.appendChild(i.firstChild);
						b(i, "video-js") || T(i, "video-js"), i.appendChild(e), n = this.playerElIngest_ = i
					}
					if (e.setAttribute("tabindex", "-1"), e.removeAttribute("width"), e.removeAttribute("height"), Object.getOwnPropertyNames(a).forEach(function(t) {
						"class" === t ? (i.className += " " + a[t], r && (e.className += " " + a[t])) : (i.setAttribute(t, a[t]), r && e.setAttribute(t, a[t]))
					}), e.playerId = e.id, e.id += "_html5_api", e.className = "vjs-tech", e.player = i.player = this, this.addClass("vjs-paused"), !0 !== Ct.VIDEOJS_NO_DYNAMIC_STYLE) {
						this.styleEl_ = Oe("vjs-styles-dimensions");
						var s = me(".vjs-styles-defaults"),
							o = me("head");
						o.insertBefore(this.styleEl_, s ? s.nextSibling : o.firstChild)
					}
					this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
					for (var u = e.getElementsByTagName("a"), l = 0; l < u.length; l++) {
						var c = u.item(l);
						T(c, "vjs-hidden"), c.setAttribute("hidden", "hidden")
					}
					return e.initNetworkState_ = e.networkState, e.parentNode && !n && e.parentNode.insertBefore(i, e), _(e, i), this.children_.unshift(e), this.el_.setAttribute("lang", this.language_), this.el_ = i, i
				}, e.prototype.width = function(t, e) {
					return this.dimension("width", t, e)
				}, e.prototype.height = function(t, e) {
					return this.dimension("height", t, e)
				}, e.prototype.dimension = function(t, e, i) {
					var n = t + "_";
					if (void 0 === e) return this[n] || 0;
					if ("" === e) return this[n] = void 0, void this.updateStyleEl_();
					var r = parseFloat(e);
					if (isNaN(r)) return void pe.error('Improper value "' + e + '" supplied for for ' + t);
					this[n] = r, this.updateStyleEl_(), this.isReady_ && !i && this.trigger("playerresize")
				}, e.prototype.fluid = function(t) {
					if (void 0 === t) return !!this.fluid_;
					this.fluid_ = !! t, t ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), this.updateStyleEl_()
				}, e.prototype.aspectRatio = function(t) {
					if (void 0 === t) return this.aspectRatio_;
					if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
					this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_()
				}, e.prototype.updateStyleEl_ = function() {
					if (!0 === Ct.VIDEOJS_NO_DYNAMIC_STYLE) {
						var t = "number" == typeof this.width_ ? this.width_ : this.options_.width,
							e = "number" == typeof this.height_ ? this.height_ : this.options_.height,
							i = this.tech_ && this.tech_.el();
						return void(i && (t >= 0 && (i.width = t), e >= 0 && (i.height = e)))
					}
					var n = void 0,
						r = void 0,
						a = void 0,
						s = void 0;
					a = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
					var o = a.split(":"),
						u = o[1] / o[0];
					n = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / u : this.videoWidth() || 300, r = void 0 !== this.height_ ? this.height_ : n * u, s = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(s), Ae(this.styleEl_, "\n      ." + s + " {\n        width: " + n + "px;\n        height: " + r + "px;\n      }\n\n      ." + s + ".vjs-fluid {\n        padding-top: " + 100 * u + "%;\n      }\n    ")
				}, e.prototype.loadTech_ = function(t, e) {
					var i = this;
					this.tech_ && this.unloadTech_();
					var n = tt(t),
						r = t.charAt(0).toLowerCase() + t.slice(1);
					"Html5" !== n && this.tag && (Ii.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = n, this.isReady_ = !1;
					var a = {
						source: e,
						nativeControlsForTouch: this.options_.nativeControlsForTouch,
						playerId: this.id(),
						techId: this.id() + "_" + n + "_api",
						autoplay: this.options_.autoplay,
						playsinline: this.options_.playsinline,
						preload: this.options_.preload,
						loop: this.options_.loop,
						muted: this.options_.muted,
						poster: this.poster(),
						language: this.language(),
						playerElIngest: this.playerElIngest_ || !1,
						"vtt.js": this.options_["vtt.js"]
					};
					xi.names.forEach(function(t) {
						var e = xi[t];
						a[e.getterName] = i[e.privateName]
					}), s(a, this.options_[n]), s(a, this.options_[r]), s(a, this.options_[t.toLowerCase()]), this.tag && (a.tag = this.tag), e && e.src === this.cache_.src && this.cache_.currentTime > 0 && (a.startTime = this.cache_.currentTime);
					var o = Ii.getTech(t);
					if (!o) throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'");
					this.tech_ = new o(a), this.tech_.ready(Pe(this, this.handleTechReady_), !0), Qe.jsonToTextTracks(this.textTracksJson_ || [], this.tech_), nr.forEach(function(t) {
						i.on(i.tech_, t, i["handleTech" + tt(t) + "_"])
					}), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_), this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === n && this.tag || _(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
				}, e.prototype.unloadTech_ = function() {
					var t = this;
					xi.names.forEach(function(e) {
						var i = xi[e];
						t[i.privateName] = t[i.getterName]()
					}), this.textTracksJson_ = Qe.textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1
				}, e.prototype.tech = function(t) {
					return void 0 === t && pe.warn(At(ir)), this.tech_
				}, e.prototype.addTechControlsListeners_ = function() {
					this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
				}, e.prototype.removeTechControlsListeners_ = function() {
					this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
				}, e.prototype.handleTechReady_ = function() {
					if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) try {
						delete this.tag.poster
					} catch (t) {
						pe("deleting tag.poster throws in some browsers", t)
					}
				}, e.prototype.handleTechLoadStart_ = function() {
					this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay"))
				}, e.prototype.hasStarted = function(t) {
					if (void 0 === t) return this.hasStarted_;
					t !== this.hasStarted_ && (this.hasStarted_ = t, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
				}, e.prototype.handleTechPlay_ = function() {
					this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
				}, e.prototype.handleTechWaiting_ = function() {
					var t = this;
					this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function() {
						return t.removeClass("vjs-waiting")
					})
				}, e.prototype.handleTechCanPlay_ = function() {
					this.removeClass("vjs-waiting"), this.trigger("canplay")
				}, e.prototype.handleTechCanPlayThrough_ = function() {
					this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
				}, e.prototype.handleTechPlaying_ = function() {
					this.removeClass("vjs-waiting"), this.trigger("playing")
				}, e.prototype.handleTechSeeking_ = function() {
					this.addClass("vjs-seeking"), this.trigger("seeking")
				}, e.prototype.handleTechSeeked_ = function() {
					this.removeClass("vjs-seeking"), this.trigger("seeked")
				}, e.prototype.handleTechFirstPlay_ = function() {
					this.options_.starttime && (pe.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
				}, e.prototype.handleTechPause_ = function() {
					this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
				}, e.prototype.handleTechEnded_ = function() {
					this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
				}, e.prototype.handleTechDurationChange_ = function() {
					this.duration(this.techGet_("duration"))
				}, e.prototype.handleTechClick_ = function(t) {
					U(t) && this.controls_ && (this.paused() ? this.play() : this.pause())
				}, e.prototype.handleTechTap_ = function() {
					this.userActive(!this.userActive())
				}, e.prototype.handleTechTouchStart_ = function() {
					this.userWasActive = this.userActive()
				}, e.prototype.handleTechTouchMove_ = function() {
					this.userWasActive && this.reportUserActivity()
				}, e.prototype.handleTechTouchEnd_ = function(t) {
					t.preventDefault()
				}, e.prototype.handleFullscreenChange_ = function() {
					this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
				}, e.prototype.handleStageClick_ = function() {
					this.reportUserActivity()
				}, e.prototype.handleTechFullscreenChange_ = function(t, e) {
					e && this.isFullscreen(e.isFullscreen), this.trigger("fullscreenchange")
				}, e.prototype.handleTechError_ = function() {
					var t = this.tech_.error();
					this.error(t)
				}, e.prototype.handleTechTextData_ = function() {
					var t = null;
					arguments.length > 1 && (t = arguments[1]), this.trigger("textdata", t)
				}, e.prototype.getCache = function() {
					return this.cache_
				}, e.prototype.techCall_ = function(t, e) {
					this.ready(function() {
						if (t in Mi) return gt(this.middleware_, this.tech_, t, e);
						try {
							this.tech_ && this.tech_[t](e)
						} catch (t) {
							throw pe(t), t
						}
					}, !0)
				}, e.prototype.techGet_ = function(t) {
					if (this.tech_ && this.tech_.isReady_) {
						if (t in ji) return mt(this.middleware_, this.tech_, t);
						try {
							return this.tech_[t]()
						} catch (e) {
							if (void 0 === this.tech_[t]) throw pe("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e), e;
							if ("TypeError" === e.name) throw pe("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1, e;
							throw pe(e), e
						}
					}
				}, e.prototype.play = function() {
					var t = this;
					if (this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_), this.isReady_) {
						if (!this.changingSrc_ && (this.src() || this.currentSrc())) return this.techGet_("play");
						this.playOnLoadstart_ = function() {
							t.playOnLoadstart_ = null, ct(t.play())
						}, this.one("loadstart", this.playOnLoadstart_)
					} else {
						if (this.playWaitingForReady_) return;
						this.playWaitingForReady_ = !0, this.ready(function() {
							t.playWaitingForReady_ = !1, ct(t.play())
						})
					}
				}, e.prototype.pause = function() {
					this.techCall_("pause")
				}, e.prototype.paused = function() {
					return !1 !== this.techGet_("paused")
				}, e.prototype.played = function() {
					return this.techGet_("played") || st(0, 0)
				}, e.prototype.scrubbing = function(t) {
					if (void 0 === t) return this.scrubbing_;
					this.scrubbing_ = !! t, t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
				}, e.prototype.currentTime = function(t) {
					return void 0 !== t ? (t < 0 && (t = 0), void this.techCall_("setCurrentTime", t)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
				}, e.prototype.duration = function(t) {
					if (void 0 === t) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
					t = parseFloat(t), t < 0 && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange"))
				}, e.prototype.remainingTime = function() {
					return this.duration() - this.currentTime()
				}, e.prototype.remainingTimeDisplay = function() {
					return Math.floor(this.duration()) - Math.floor(this.currentTime())
				}, e.prototype.buffered = function() {
					var t = this.techGet_("buffered");
					return t && t.length || (t = st(0, 0)), t
				}, e.prototype.bufferedPercent = function() {
					return ot(this.buffered(), this.duration())
				}, e.prototype.bufferedEnd = function() {
					var t = this.buffered(),
						e = this.duration(),
						i = t.end(t.length - 1);
					return i > e && (i = e), i
				}, e.prototype.volume = function(t) {
					var e = void 0;
					return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall_("setVolume", e), void(e > 0 && this.lastVolume_(e))) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e)
				}, e.prototype.muted = function(t) {
					return void 0 !== t ? void this.techCall_("setMuted", t) : this.techGet_("muted") || !1
				}, e.prototype.defaultMuted = function(t) {
					return void 0 !== t ? this.techCall_("setDefaultMuted", t) : this.techGet_("defaultMuted") || !1
				}, e.prototype.lastVolume_ = function(t) {
					return void 0 !== t && 0 !== t ? void(this.cache_.lastVolume = t) : this.cache_.lastVolume
				}, e.prototype.supportsFullScreen = function() {
					return this.techGet_("supportsFullScreen") || !1
				}, e.prototype.isFullscreen = function(t) {
					return void 0 !== t ? void(this.isFullscreen_ = !! t) : !! this.isFullscreen_
				}, e.prototype.requestFullscreen = function() {
					var t = Ve;
					this.isFullscreen(!0), t.requestFullscreen ? (X(Ot, t.fullscreenchange, Pe(this, function e(i) {
						this.isFullscreen(Ot[t.fullscreenElement]), !1 === this.isFullscreen() && Y(Ot, t.fullscreenchange, e), this.trigger("fullscreenchange")
					})), this.el_[t.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
				}, e.prototype.exitFullscreen = function() {
					var t = Ve;
					this.isFullscreen(!1), t.requestFullscreen ? Ot[t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
				}, e.prototype.enterFullWindow = function() {
					this.isFullWindow = !0, this.docOrigOverflow = Ot.documentElement.style.overflow, X(Ot, "keydown", Pe(this, this.fullWindowOnEscKey)), Ot.documentElement.style.overflow = "hidden", T(Ot.body, "vjs-full-window"), this.trigger("enterFullWindow")
				}, e.prototype.fullWindowOnEscKey = function(t) {
					27 === t.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
				}, e.prototype.exitFullWindow = function() {
					this.isFullWindow = !1, Y(Ot, "keydown", this.fullWindowOnEscKey), Ot.documentElement.style.overflow = this.docOrigOverflow, S(Ot.body, "vjs-full-window"), this.trigger("exitFullWindow")
				}, e.prototype.canPlayType = function(t) {
					for (var e = void 0, i = 0, n = this.options_.techOrder; i < n.length; i++) {
						var r = n[i],
							a = Ii.getTech(r);
						if (a || (a = He.getComponent(r)), a) {
							if (a.isSupported() && (e = a.canPlayType(t))) return e
						} else pe.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
					}
					return ""
				}, e.prototype.selectSource = function(t) {
					var e = this,
						i = this.options_.techOrder.map(function(t) {
							return [t, Ii.getTech(t)]
						}).filter(function(t) {
							var e = t[0],
								i = t[1];
							return i ? i.isSupported() : (pe.error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.'), !1)
						}),
						n = function(t, e, i) {
							var n = void 0;
							return t.some(function(t) {
								return e.some(function(e) {
									if (n = i(t, e)) return !0
								})
							}), n
						}, r = function(t, i) {
							var n = t[0];
							if (t[1].canPlaySource(i, e.options_[n.toLowerCase()])) return {
								source: i,
								tech: n
							}
						};
					return (this.options_.sourceOrder ? n(t, i, function(t) {
						return function(e, i) {
							return t(i, e)
						}
					}(r)) : n(i, t, r)) || !1
				}, e.prototype.src = function(t) {
					var e = this;
					if (void 0 === t) return this.cache_.src || "";
					var i = Di(t);
					if (!i.length) return void this.setTimeout(function() {
						this.error({
							code: 4,
							message: this.localize(this.options_.notSupportedMessage)
						})
					}, 0);
					this.cache_.sources = i, this.changingSrc_ = !0, this.cache_.source = i[0], pt(this, i[0], function(t, n) {
						if (e.middleware_ = n, e.src_(t)) return i.length > 1 ? e.src(i.slice(1)) : (e.setTimeout(function() {
							this.error({
								code: 4,
								message: this.localize(this.options_.notSupportedMessage)
							})
						}, 0), void e.triggerReady());
						e.changingSrc_ = !1, e.cache_.src = t.src, ft(n, e.tech_)
					})
				}, e.prototype.src_ = function(t) {
					var e = this.selectSource([t]);
					return !e || (et(e.tech, this.techName_) ? (this.ready(function() {
						this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), "auto" === this.options_.preload && this.load()
					}, !0), !1) : (this.changingSrc_ = !0, this.loadTech_(e.tech, e.source), !1))
				}, e.prototype.load = function() {
					this.techCall_("load")
				}, e.prototype.reset = function() {
					this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset")
				}, e.prototype.currentSources = function() {
					var t = this.currentSource(),
						e = [];
					return 0 !== Object.keys(t).length && e.push(t), this.cache_.sources || e
				}, e.prototype.currentSource = function() {
					return this.cache_.source || {}
				}, e.prototype.currentSrc = function() {
					return this.currentSource() && this.currentSource().src || ""
				}, e.prototype.currentType = function() {
					return this.currentSource() && this.currentSource().type || ""
				}, e.prototype.preload = function(t) {
					return void 0 !== t ? (this.techCall_("setPreload", t), void(this.options_.preload = t)) : this.techGet_("preload")
				}, e.prototype.autoplay = function(t) {
					return void 0 !== t ? (this.techCall_("setAutoplay", t), this.options_.autoplay = t, void this.ready(this.forceAutoplayInChrome_)) : this.techGet_("autoplay", t)
				}, e.prototype.forceAutoplayInChrome_ = function() {
					this.paused() && (this.autoplay() || this.options_.autoplay) && Xt && !Ht && this.play()
				}, e.prototype.playsinline = function(t) {
					return void 0 !== t ? (this.techCall_("setPlaysinline", t), this.options_.playsinline = t, this) : this.techGet_("playsinline")
				}, e.prototype.loop = function(t) {
					return void 0 !== t ? (this.techCall_("setLoop", t), void(this.options_.loop = t)) : this.techGet_("loop")
				}, e.prototype.poster = function(t) {
					if (void 0 === t) return this.poster_;
					t || (t = ""), this.poster_ = t, this.techCall_("setPoster", t), this.trigger("posterchange")
				}, e.prototype.handleTechPosterChange_ = function() {
					!this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "", this.trigger("posterchange"))
				}, e.prototype.controls = function(t) {
					if (void 0 === t) return !!this.controls_;
					t = !! t, this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
				}, e.prototype.usingNativeControls = function(t) {
					if (void 0 === t) return !!this.usingNativeControls_;
					t = !! t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
				}, e.prototype.error = function(t) {
					return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t, this.removeClass("vjs-error"), void(this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new ut(t), this.addClass("vjs-error"), pe.error("(CODE:" + this.error_.code + " " + ut.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error"))
				}, e.prototype.reportUserActivity = function(t) {
					this.userActivity_ = !0
				}, e.prototype.userActive = function(t) {
					if (void 0 === t) return this.userActive_;
					if ((t = !! t) !== this.userActive_) {
						if (this.userActive_ = t, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
						this.tech_ && this.tech_.one("mousemove", function(t) {
							t.stopPropagation(), t.preventDefault()
						}), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
					}
				}, e.prototype.listenForUserActivity_ = function() {
					var t = void 0,
						e = void 0,
						i = void 0,
						n = Pe(this, this.reportUserActivity),
						r = function(t) {
							t.screenX === e && t.screenY === i || (e = t.screenX, i = t.screenY, n())
						}, a = function() {
							n(), this.clearInterval(t), t = this.setInterval(n, 250)
						}, s = function(e) {
							n(), this.clearInterval(t)
						};
					this.on("mousedown", a), this.on("mousemove", r), this.on("mouseup", s), this.on("keydown", n), this.on("keyup", n);
					var o = void 0;
					this.setInterval(function() {
						if (this.userActivity_) {
							this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(o);
							var t = this.options_.inactivityTimeout;
							t <= 0 || (o = this.setTimeout(function() {
								this.userActivity_ || this.userActive(!1)
							}, t))
						}
					}, 250)
				}, e.prototype.playbackRate = function(t) {
					return void 0 !== t ? void this.techCall_("setPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1
				}, e.prototype.defaultPlaybackRate = function(t) {
					return void 0 !== t ? this.techCall_("setDefaultPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
				}, e.prototype.isAudio = function(t) {
					return void 0 !== t ? void(this.isAudio_ = !! t) : !! this.isAudio_
				}, e.prototype.addTextTrack = function(t, e, i) {
					if (this.tech_) return this.tech_.addTextTrack(t, e, i)
				}, e.prototype.addRemoteTextTrack = function(t, e) {
					if (this.tech_) return this.tech_.addRemoteTextTrack(t, e)
				}, e.prototype.removeRemoteTextTrack = function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.track,
						i = void 0 === e ? arguments[0] : e;
					if (this.tech_) return this.tech_.removeRemoteTextTrack(i)
				}, e.prototype.getVideoPlaybackQuality = function() {
					return this.techGet_("getVideoPlaybackQuality")
				}, e.prototype.videoWidth = function() {
					return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
				}, e.prototype.videoHeight = function() {
					return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
				}, e.prototype.language = function(t) {
					if (void 0 === t) return this.language_;
					this.language_ = String(t).toLowerCase()
				}, e.prototype.languages = function() {
					return it(e.prototype.options_.languages, this.languages_)
				}, e.prototype.toJSON = function() {
					var t = it(this.options_),
						e = t.tracks;
					t.tracks = [];
					for (var i = 0; i < e.length; i++) {
						var n = e[i];
						n = it(n), n.player = void 0, t.tracks[i] = n
					}
					return t
				}, e.prototype.createModal = function(t, e) {
					var i = this;
					e = e || {}, e.content = t || "";
					var n = new ti(this, e);
					return this.addChild(n), n.on("dispose", function() {
						i.removeChild(n)
					}), n.open(), n
				}, e.getTagSettings = function(t) {
					var e = {
						sources: [],
						tracks: []
					}, i = E(t),
						n = i["data-setup"];
					if (b(t, "vjs-fluid") && (i.fluid = !0), null !== n) {
						var r = Pt(n || "{}"),
							a = r[0],
							o = r[1];
						a && pe.error(a), s(i, o)
					}
					if (s(e, i), t.hasChildNodes()) for (var u = t.childNodes, l = 0, c = u.length; l < c; l++) {
						var d = u[l],
							h = d.nodeName.toLowerCase();
						"source" === h ? e.sources.push(E(d)) : "track" === h && e.tracks.push(E(d))
					}
					return e
				}, e.prototype.flexNotSupported_ = function() {
					var t = Ot.createElement("i");
					return !("flexBasis" in t.style || "webkitFlexBasis" in t.style || "mozFlexBasis" in t.style || "msFlexBasis" in t.style || "msFlexOrder" in t.style)
				}, e
			}(He);
		xi.names.forEach(function(t) {
			var e = xi[t];
			rr.prototype[e.getterName] = function() {
				return this.tech_ ? this.tech_[e.getterName]() : (this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName])
			}
		}), rr.players = {};
		var ar = Ct.navigator;
		rr.prototype.options_ = {
			techOrder: Ii.defaultTechOrder_,
			html5: {},
			flash: {},
			inactivityTimeout: 2e3,
			playbackRates: [],
			children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
			language: ar && (ar.languages && ar.languages[0] || ar.userLanguage || ar.language) || "en",
			languages: {},
			notSupportedMessage: "No compatible source was found for this media."
		}, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function(t) {
			rr.prototype[t] = function() {
				return this.techGet_(t)
			}
		}), nr.forEach(function(t) {
			rr.prototype["handleTech" + tt(t) + "_"] = function() {
				return this.trigger(t)
			}
		}), He.registerComponent("Player", rr);
		var sr = {}, or = function(t) {
			return sr.hasOwnProperty(t)
		}, ur = function(t) {
			return or(t) ? sr[t] : void 0
		}, lr = function(t, e) {
			t.activePlugins_ = t.activePlugins_ || {}, t.activePlugins_[e] = !0
		}, cr = function(t, e, i) {
			var n = (i ? "before" : "") + "pluginsetup";
			t.trigger(n, e), t.trigger(n + ":" + e.name, e)
		}, dr = function(t, e) {
			var i = function() {
				cr(this, {
					name: t,
					plugin: e,
					instance: null
				}, !0);
				var i = e.apply(this, arguments);
				return lr(this, t), cr(this, {
					name: t,
					plugin: e,
					instance: i
				}), i
			};
			return Object.keys(e).forEach(function(t) {
				i[t] = e[t]
			}), i
		}, hr = function(t, e) {
			return e.prototype.name = t,
			function() {
				cr(this, {
					name: t,
					plugin: e,
					instance: null
				}, !0);
				for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
				var a = new(Function.prototype.bind.apply(e, [null].concat([this].concat(n))));
				return this[t] = function() {
					return a
				}, cr(this, a.getEventHash()), a
			}
		}, pr = function() {
			function t(e) {
				if (ne(this, t), this.constructor === t) throw new Error("Plugin must be sub-classed; not directly instantiated.");
				this.player = e, Q(this), delete this.trigger, Z(this, this.constructor.defaultState), lr(e, this.name), this.dispose = Pe(this, this.dispose), e.on("dispose", this.dispose)
			}
			return t.prototype.version = function() {
				return this.constructor.VERSION
			}, t.prototype.getEventHash = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return t.name = this.name, t.plugin = this.constructor, t.instance = this, t
			}, t.prototype.trigger = function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return K(this.eventBusEl_, t, this.getEventHash(e))
			}, t.prototype.handleStateChanged = function(t) {}, t.prototype.dispose = function() {
				var t = this.name,
					e = this.player;
				this.trigger("dispose"), this.off(), e.off("dispose", this.dispose), e.activePlugins_[t] = !1, this.player = this.state = null, e[t] = hr(t, sr[t])
			}, t.isBasic = function(e) {
				var i = "string" == typeof e ? ur(e) : e;
				return "function" == typeof i && !t.prototype.isPrototypeOf(i.prototype)
			}, t.registerPlugin = function(e, i) {
				if ("string" != typeof e) throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + (void 0 === e ? "undefined" : ie(e)) + ".");
				if (or(e)) pe.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!');
				else if (rr.prototype.hasOwnProperty(e)) throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!');
				if ("function" != typeof i) throw new Error('Illegal plugin for "' + e + '", must be a function, was ' + (void 0 === i ? "undefined" : ie(i)) + ".");
				return sr[e] = i, "plugin" !== e && (t.isBasic(i) ? rr.prototype[e] = dr(e, i) : rr.prototype[e] = hr(e, i)), i
			}, t.deregisterPlugin = function(t) {
				if ("plugin" === t) throw new Error("Cannot de-register base plugin.");
				or(t) && (delete sr[t], delete rr.prototype[t])
			}, t.getPlugins = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.keys(sr),
					e = void 0;
				return t.forEach(function(t) {
					var i = ur(t);
					i && (e = e || {}, e[t] = i)
				}), e
			}, t.getPluginVersion = function(t) {
				var e = ur(t);
				return e && e.VERSION || ""
			}, t
		}();
		pr.getPlugin = ur, pr.BASE_PLUGIN_NAME = "plugin", pr.registerPlugin("plugin", pr), rr.prototype.usingPlugin = function(t) {
			return !!this.activePlugins_ && !0 === this.activePlugins_[t]
		}, rr.prototype.hasPlugin = function(t) {
			return !!or(t)
		};
		var fr = function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : ie(e)));
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (t.super_ = e)
		}, mr = function(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = function() {
				t.apply(this, arguments)
			}, n = {};
			"object" === (void 0 === e ? "undefined" : ie(e)) ? (e.constructor !== Object.prototype.constructor && (i = e.constructor), n = e) : "function" == typeof e && (i = e), fr(i, t);
			for (var r in n) n.hasOwnProperty(r) && (i.prototype[r] = n[r]);
			return i
		};
		if ("undefined" == typeof HTMLVideoElement && p() && (Ot.createElement("video"), Ot.createElement("audio"), Ot.createElement("track"), Ot.createElement("video-js")), Et.hooks_ = {}, Et.hooks = function(t, e) {
			return Et.hooks_[t] = Et.hooks_[t] || [], e && (Et.hooks_[t] = Et.hooks_[t].concat(e)), Et.hooks_[t]
		}, Et.hook = function(t, e) {
			Et.hooks(t, e)
		}, Et.hookOnce = function(t, e) {
			Et.hooks(t, [].concat(e).map(function(e) {
				return function i() {
					Et.removeHook(t, i), e.apply(void 0, arguments)
				}
			}))
		}, Et.removeHook = function(t, e) {
			var i = Et.hooks(t).indexOf(e);
			return !(i <= -1) && (Et.hooks_[t] = Et.hooks_[t].slice(), Et.hooks_[t].splice(i, 1), !0)
		}, !0 !== Ct.VIDEOJS_NO_DYNAMIC_STYLE && p()) {
			var gr = me(".vjs-styles-defaults");
			if (!gr) {
				gr = Oe("vjs-styles-defaults");
				var yr = me("head");
				yr && yr.insertBefore(gr, yr.firstChild), Ae(gr, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
			}
		}
		J(1, Et), Et.VERSION = Lt, Et.options = rr.prototype.options_, Et.getPlayers = function() {
			return rr.players
		}, Et.players = rr.players, Et.getComponent = He.getComponent, Et.registerComponent = function(t, e) {
			Ii.isTech(e) && pe.warn("The " + t + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), He.registerComponent.call(He, t, e)
		}, Et.getTech = Ii.getTech, Et.registerTech = Ii.registerTech, Et.use = ht, Et.browser = ee, Et.TOUCH_ENABLED = Zt, Et.extend = mr, Et.mergeOptions = it, Et.bind = Pe, Et.registerPlugin = pr.registerPlugin, Et.plugin = function(t, e) {
			return pe.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), pr.registerPlugin(t, e)
		}, Et.getPlugins = pr.getPlugins, Et.getPlugin = pr.getPlugin, Et.getPluginVersion = pr.getPluginVersion, Et.addLanguage = function(t, e) {
			var i;
			return t = ("" + t).toLowerCase(), Et.options.languages = it(Et.options.languages, (i = {}, i[t] = e, i)), Et.options.languages[t]
		}, Et.log = pe, Et.createTimeRange = Et.createTimeRanges = st, Et.formatTime = Tt, Et.parseUrl = mi, Et.isCrossOrigin = vi, Et.EventTarget = Ie, Et.on = X, Et.one = $, Et.off = Y, Et.trigger = K, Et.xhr = xt, Et.TextTrack = Si, Et.AudioTrack = wi, Et.VideoTrack = ki, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function(t) {
			Et[t] = function() {
				return pe.warn("videojs." + t + "() is deprecated; use videojs.dom." + t + "() instead"), ye[t].apply(null, arguments)
			}
		}), Et.computedStyle = l, Et.dom = ye, Et.url = _i, t.exports = Et
	}, function(t, e, i) {
		var n;
		n = "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, t.exports = n
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = i(0),
			a = n(r),
			s = i(4),
			o = n(s),
			u = "2.0.0";
		a.
		default.options.flash.swf = "//nos.netease.com/vod163/nep.swf", window.Uint8Array || (window.Uint8Array = function() {});
		var l = {}, c = ["html5", "flash"],
			d = function(t) {
				var e = t.id,
					i = t.options,
					n = t.callback;
				this.corePlayer = (0, a.
				default)(e, i, n), this._initEvt(i), !1 !== i.statistics && o.
				default.call(this.corePlayer)
			}, h = d.prototype;
		h._initEvt = function(t) {
			this._pullTimeout(t)
		}, h._pullTimeout = function(t) {
			var e = this.corePlayer,
				i = void 0,
				n = !1,
				r = t && t.streamTimeoutTime || 3e4,
				a = function() {
					var n = e.currentTime();
					i && clearTimeout(i), i = setTimeout(function() {
						if (e.currentTime() - n > 2) return void console;
						e.reset(), e.error({
							code: 7,
							message: t.errMsg7 || "拉流超时"
						})
					}, r)
				}, s = function() {
					clearTimeout(i), i = null, setTimeout(function() {
						n || (e.reset(), e.error({
							code: 7,
							message: t.errMsg7 || "拉流超时"
						}))
					}, r)
				};
			e.on(["waiting", "play"], a), e.on(["playing", "canplay"], s);
			var o = function(t) {
				n = !0
			};
			e.on("loadeddata", o)
		}, h.getVersion = function() {
			return u
		}, h.getCurrentPosition = function() {
			return 1e3 * this.corePlayer.currentTime()
		}, h.getDuration = function() {
			return 1e3 * this.corePlayer.duration()
		}, h.getPlayableDuration = function() {
			return 1e3 * this.corePlayer.bufferedEnd()
		}, h.getVideoWidth = function() {
			return this.corePlayer.videoWidth()
		}, h.getVideoHeight = function() {
			return this.corePlayer.videoHeight()
		}, h.resize = function(t, e) {
			this.corePlayer.width(t), this.corePlayer.height(e)
		}, h.play = function() {
			this.corePlayer.play()
		}, h.pause = function() {
			this.corePlayer.pause()
		}, h.reset = function() {
			this.corePlayer.reset()
		}, h.release = function() {
			var t = this.corePlayer.id_;
			this.corePlayer.dispose(), l && t && l[t] && (l[t] = null)
		}, h.seekTo = function(t) {
			this.corePlayer.currentTime(t / 1e3)
		}, h.src = h.setDataSource = function(t) {
			function e(t) {
				var e = t.src,
					n = {
						pullUrl: e,
						version: u
					}, r = new XMLHttpRequest;
				r.open("POST", "//gslb.live.126.net/getpullurl", !0), r.setRequestHeader("Content-Type", "application/json;charset=utf-8"), r.send(JSON.stringify(n)), r.onreadystatechange = function() {
					if (4 === r.readyState) if (200 === r.status) for (var e = JSON.parse(r.response), n = 0; n < e.pullUrls.length; n++) t.src = e.pullUrls[n].url, i.corePlayer.src(t);
					else i.corePlayer.src(t);
					else i.corePlayer.src(t)
				}
			}
			var i = this;
			if (!0 === i.corePlayer.options_.gslb) if (p.checkFlash()) if (t.length) for (var n = 0; n < t.length; n++) e(t[n]);
			else e(t);
			else if (t.length) {
				for (var r = [], a = 0, s = t.length; a < s; a++) - 1 === t[a].type.indexOf("flv") && r.push(t[a]);
				if (r.length > 0) for (var o = 0; o < r.length; o++) e(r[o]);
				else window.alert("请检查flash")
			} else e(t);
			else this.corePlayer.src(t)
		}, h.setMute = function(t) {
			return this.corePlayer.muted(t)
		}, h.setVolume = function(t) {
			this.corePlayer.volume(t)
		}, h.getVolume = function() {
			return this.corePlayer.volume()
		}, h.enterFullscreen = function() {
			this.corePlayer.requestFullscreen()
		}, h.exitFullscreen = function() {
			this.corePlayer.exitFullscreen()
		}, h.getPlayState = function() {
			return this.corePlayer.ended() ? 3 : this.corePlayer.paused() ? 2 : 1
		}, h.onPlayState = function(t, e) {
			var i;
			switch (t) {
				case 1:
					i = "play";
					break;
				case 2:
					i = "pause";
					break;
				case 3:
					i = "ended"
			}
			this.corePlayer.on(i, e)
		}, h.onError = function(t) {
			var e = this.corePlayer;
			e.on("error", function() {
				var i = {}, n = e.error();
				n && (i = {
					errCode: n.code,
					errMsg: n.message
				}), t(i)
			})
		}, h.refresh = function() {
			this.setDataSource({
				src: this.corePlayer.cache_.src,
				type: this.corePlayer.currentType_
			}), this.play()
		}, h.on = function() {
			var t = this.corePlayer;
			return t.on.apply(t, arguments), this
		}, h.off = function() {
			var t = this.corePlayer;
			return t.off.apply(t, arguments), this
		};
		var p = function(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments[2];
			return l[t] ? l[t] : (e.techOrder || (e.techOrder = c), new d({
				id: t,
				options: e,
				callback: i
			}))
		};
		p.lib = a.
		default, p.cache = l, p.version = u, p.setSWF = function(t) {
			a.
			default.options.flash.swf = t
		}, p._setMode = function(t) {
			"mobile" === t && (c = ["html5"])
		}, p.checkFlash = function() {
			var t = 0,
				e = 0;
			if (document.all) {
				var i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
				if (i) {
					t = 1;
					var n = i.GetVariable("$version");
					e = parseInt(n.split(" ")[1].split(",")[0])
				}
			} else if (navigator.plugins && navigator.plugins.length > 0) {
				var r = navigator.plugins["Shockwave Flash"];
				if (r) {
					t = 1;
					for (var a = r.description.split(" "), s = 0; s < a.length; ++s) isNaN(parseInt(a[s])) || (e = parseInt(a[s]))
				}
			}
			return !!t && {
				f: t,
				v: e
			}
		}, e.
		default = p, t.exports = e.
		default
	}, function(t, e) {
		function i(t) {
			var e = n.call(t);
			return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
		}
		t.exports = i;
		var n = Object.prototype.toString
	}, function(t, e, i) {
		"use strict";

		function n() {
			var t = this,
				e = s.
			default.version, i = (new Date).getTime().toString() + Math.round(1e10 * Math.random()).toString(), n = void 0, a = function() {
				var e = t.currentSrc().toLowerCase();
				"rtmp" === e.substring(0, 4) ? n = "rtmp" : -1 !== e.indexOf("mp4") ? n = "mp4" : -1 !== e.indexOf("flv") ? n = 0 === t.duration() ? "flv-live" : "flv-vod" : -1 !== e.indexOf("m3u8") && (n = "hls")
			}, o = {
				create_time: (new Date).getTime().toString(),
				deviceId: function() {
					var t, e = new Date,
						i = new RegExp("(^| )neplayer_deviceId=([^;]*)(;|$)");
					return void 0 === document.cookie.match(i) ? t = (void 0)[2] : (t = (new Date).getTime().toString() + Math.round(1e10 * Math.random()).toString(), e.setTime(e.getTime() + 31536e6), document.cookie = "neplayer_deviceId=" + t + ";expires=" + e.toGMTString()), t
				}(),
				manufacturer: navigator.userAgent,
				platform: "web",
				sdk_version: "v" + e
			}, u = void 0, l = "statistic.live.126.net", c = function() {
				function e(t) {
					r++, i = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), i.open("POST", "//" + l + "/sdkstats/report/type=4", !0), i.setRequestHeader("Content-Type", "application/json;charset=utf-8"), i.timeout = 2e3, i.onload = i.ontimeout = i.onerror = function(i) {
						i = i || {}, ("timeout" === i.type || "error" === i.type || !this.status || 200 !== this.status && 304 !== this.status) && (l = "sdkstats.live.126.net" === l ? "statistic.live.126.net" : "sdkstats.live.126.net", 1 === r && e(t))
					}, i.send(t)
				}
				var i, n;
				u.real_a_kbps && 0 === u.real_a_kbps.length && delete u.real_a_kbps, u.real_p_v_fps && 0 === u.real_p_v_fps.length && delete u.real_p_v_fps, u.real_v_fps && 0 === u.real_v_fps.length && delete u.real_v_fps, u.real_v_kbps && 0 === u.real_v_kbps.length && delete u.real_v_kbps, u.real_block_num && 0 === u.real_block_num.length && delete u.real_block_num, u && u.print_time && u.print_time.length > 1 && (n = u.print_time.length, u.real_a_kbps && n > u.real_a_kbps.length && (n = u.real_a_kbps.length), u.real_p_v_fps && n > u.real_p_v_fps.length && (n = u.real_p_v_fps.length), u.real_v_fps && n > u.real_v_fps.length && (n = u.real_v_fps.length), u.real_v_kbps && n > u.real_v_kbps.length && (n = u.real_v_kbps.length), u.real_block_num && n > u.real_block_num.length && (n = u.real_block_num.length), u.print_time.length = n, u.real_a_kbps && (u.real_a_kbps.length = n, u.real_a_kbps = u.real_a_kbps.join(",")), u.real_p_v_fps && (u.real_p_v_fps.length = n, u.real_p_v_fps = u.real_p_v_fps.join(",")), u.real_v_fps && (u.real_v_fps.length = n, u.real_v_fps = u.real_v_fps.join(",")), u.real_v_kbps && (u.real_v_kbps.length = n, u.real_v_kbps = u.real_v_kbps.join(",")), u.real_block_num && (u.real_block_num.length = n, u.real_block_num = u.real_block_num.join(","))), u.print_time = u.print_time.join(","), u.real_a_kbps && u.real_a_kbps instanceof Array && (u.real_a_kbps = u.real_a_kbps.join(",")), u.real_p_v_fps && u.real_p_v_fps instanceof Array && (u.real_p_v_fps = u.real_p_v_fps.join(",")), u.real_v_fps && u.real_v_fps instanceof Array && (u.real_v_fps = u.real_v_fps.join(",")), u.real_v_kbps && u.real_v_kbps instanceof Array && (u.real_v_kbps = u.real_v_kbps.join(",")), u.real_block_num && u.real_block_num instanceof Array && (u.real_block_num = u.real_block_num.join(",")), u.real_v_res = t.videoWidth() + "x" + t.videoHeight();
				var r = 0;
				e(JSON.stringify(u)), u.print_time = []
			}, d = void 0, h = 0, p = 0, f = void 0, m = 0, g = void 0, y = void 0, v = 0, _ = void 0, b = function() {
				var e = t.tech({
					IWillNotUseThisInPlugins: !0
				}),
					a = e.el_;
				if (u.print_time.push) {
					switch (u.print_time.push((new Date).getTime()), n) {
						case "mp4":
						case "hls":
							"object" === (void 0 === a ? "undefined" : r(a)) ? (a.webkitAudioDecodedByteCount && (f = a.webkitAudioDecodedByteCount, u.real_a_kbps.push(~~ (8 * (f - p) / 1e3)), p = f), a.webkitDecodedFrameCount ? (g = a.webkitDecodedFrameCount, y = g - m, u.real_block_num.push(y > 10 ? 0 : 1), u.real_p_v_fps.push(y), m = g) : a.mozDecodedFrames && (g = a.mozDecodedFrames, y = g - m, u.real_block_num.push(y > 10 ? 0 : 1), u.real_p_v_fps.push(y), m = g), a.webkitVideoDecodedByteCount && (_ = a.webkitVideoDecodedByteCount, u.real_v_kbps.push(~~ (8 * (_ - v) / 1e3)), v = _)) : "function" == typeof a && (void 0 !== t.currentFPS() && u.real_p_v_fps.push(~~t.currentFPS()), void 0 !== t.metaFPS() && u.real_v_fps.push(~~t.currentFPS()), void 0 !== t.isBlock() && u.real_block_num.push(t.isBlock() ? 1 : 0));
							break;
						case "flv-vod":
						case "flv-live":
						case "rtmp":
							"function" == typeof a && (void 0 !== t.currentFPS() && u.real_p_v_fps.push(~~t.currentFPS()), void 0 !== t.metaFPS() && u.real_v_fps.push(~~t.currentFPS()), void 0 !== t.isBlock() && u.real_block_num.push(t.isBlock() ? 1 : 0))
					}
					h++, 60 === h && (h = 0, c(), u = {
						create_time: o.create_time,
						deviceId: o.deviceId,
						manufacturer: o.manufacturer,
						platform: o.platform,
						print_time: [],
						pull_url: t.currentSrc(),
						real_a_kbps: [],
						real_p_v_fps: [],
						real_v_fps: [],
						real_v_kbps: [],
						real_v_res: "",
						sdk_version: o.sdk_version,
						sessionId: i,
						real_block_num: []
					})
				}
			};
			t.on("play", function() {
				t.seeking() || (clearInterval(d), o.create_time = (new Date).getTime().toString(), u = {
					create_time: o.create_time,
					deviceId: o.deviceId,
					manufacturer: o.manufacturer,
					platform: o.platform,
					print_time: [(new Date).getTime()],
					pull_url: t.currentSrc(),
					sdk_version: o.sdk_version,
					sessionId: i
				}, c(), u.print_time = [], u.real_a_kbps = [], u.real_p_v_fps = [], u.real_v_fps = [], u.real_v_kbps = [], u.real_v_res = "", u.real_block_num = [], setTimeout(a, 100), h = 0, p = 0, m = 0, v = 0, d = setInterval(b, 1e3))
			}), t.on("pause", function() {
				t.seeking() || (clearInterval(d), c())
			}), t.on("ended", function() {
				clearInterval(d)
			}), t.on("error", function() {
				clearInterval(d)
			})
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, a = i(2),
			s = function(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(a);
		e.
		default = n, t.exports = e.
		default
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = i(2),
			r = function(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(n);
		i(19), i(20), i(21), i(4), i(22), e.
		default = r.
		default, t.exports = e.
		default
	}, function(t, e, i) {
		var n, r = "undefined" != typeof window ? window : {}, a = i(7);
		"undefined" != typeof document ? n = document : (n = r["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = r["__GLOBAL_DOCUMENT_CACHE@4"] = a), t.exports = n
	}, function(t, e) {}, function(t, e) {
		function i(t) {
			return t.replace(/\n\r?\s*/g, "")
		}
		t.exports = function(t) {
			for (var e = "", n = 0; n < arguments.length; n++) e += i(t[n]) + (arguments[n + 1] || "");
			return e
		}
	}, function(t, e) {
		function i(t, e) {
			var i, n = null;
			try {
				i = JSON.parse(t, e)
			} catch (t) {
				n = t
			}
			return [n, i]
		}
		t.exports = i
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			for (var e in t) if (t.hasOwnProperty(e)) return !1;
			return !0
		}
		function r(t, e, i) {
			var n = t;
			return c(e) ? (i = e, "string" == typeof t && (n = {
				uri: t
			})) : n = h(e, {
				uri: t
			}), n.callback = i, n
		}
		function a(t, e, i) {
			return e = r(t, e, i), s(e)
		}
		function s(t) {
			function e() {
				4 === c.readyState && setTimeout(s, 0)
			}
			function i() {
				var t = void 0;
				if (t = c.response ? c.response : c.responseText || o(c), b) try {
					t = JSON.parse(t)
				} catch (t) {}
				return t
			}
			function r(t) {
				return clearTimeout(f), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, l(t, T)
			}
			function s() {
				if (!p) {
					var e;
					clearTimeout(f), e = t.useXDR && void 0 === c.status ? 200 : 1223 === c.status ? 204 : c.status;
					var n = T,
						r = null;
					return 0 !== e ? (n = {
						body: i(),
						statusCode: e,
						method: g,
						headers: {},
						url: m,
						rawRequest: c
					}, c.getAllResponseHeaders && (n.headers = d(c.getAllResponseHeaders()))) : r = new Error("Internal XMLHttpRequest Error"), l(r, n, n.body)
				}
			}
			if (void 0 === t.callback) throw new Error("callback argument missing");
			var u = !1,
				l = function(e, i, n) {
					u || (u = !0, t.callback(e, i, n))
				}, c = t.xhr || null;
			c || (c = t.cors || t.useXDR ? new a.XDomainRequest : new a.XMLHttpRequest);
			var h, p, f, m = c.url = t.uri || t.url,
				g = c.method = t.method || "GET",
				y = t.body || t.data,
				v = c.headers = t.headers || {}, _ = !! t.sync,
				b = !1,
				T = {
					body: void 0,
					headers: {},
					statusCode: 0,
					method: g,
					url: m,
					rawRequest: c
				};
			if ("json" in t && !1 !== t.json && (b = !0, v.accept || v.Accept || (v.Accept = "application/json"), "GET" !== g && "HEAD" !== g && (v["content-type"] || v["Content-Type"] || (v["Content-Type"] = "application/json"), y = JSON.stringify(!0 === t.json ? y : t.json))), c.onreadystatechange = e, c.onload = s, c.onerror = r, c.onprogress = function() {}, c.onabort = function() {
				p = !0
			}, c.ontimeout = r, c.open(g, m, !_, t.username, t.password), _ || (c.withCredentials = !! t.withCredentials), !_ && t.timeout > 0 && (f = setTimeout(function() {
				if (!p) {
					p = !0, c.abort("timeout");
					var t = new Error("XMLHttpRequest timeout");
					t.code = "ETIMEDOUT", r(t)
				}
			}, t.timeout)), c.setRequestHeader) for (h in v) v.hasOwnProperty(h) && c.setRequestHeader(h, v[h]);
			else if (t.headers && !n(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
			return "responseType" in t && (c.responseType = t.responseType), "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(c), c.send(y || null), c
		}
		function o(t) {
			if ("document" === t.responseType) return t.responseXML;
			var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
			return "" !== t.responseType || e ? null : t.responseXML
		}
		function u() {}
		var l = i(1),
			c = i(3),
			d = i(11),
			h = i(14);
		t.exports = a, a.XMLHttpRequest = l.XMLHttpRequest || u, a.XDomainRequest = "withCredentials" in new a.XMLHttpRequest ? a.XMLHttpRequest : l.XDomainRequest,
		function(t, e) {
			for (var i = 0; i < t.length; i++) e(t[i])
		}(["get", "put", "post", "patch", "head", "delete"], function(t) {
			a["delete" === t ? "del" : t] = function(e, i, n) {
				return i = r(e, i, n), i.method = t.toUpperCase(), s(i)
			}
		})
	}, function(t, e, i) {
		var n = i(12),
			r = i(13),
			a = function(t) {
				return "[object Array]" === Object.prototype.toString.call(t)
			};
		t.exports = function(t) {
			if (!t) return {};
			var e = {};
			return r(n(t).split("\n"), function(t) {
				var i = t.indexOf(":"),
					r = n(t.slice(0, i)).toLowerCase(),
					s = n(t.slice(i + 1));
				void 0 === e[r] ? e[r] = s : a(e[r]) ? e[r].push(s) : e[r] = [e[r], s]
			}), e
		}
	}, function(t, e) {
		function i(t) {
			return t.replace(/^\s*|\s*$/g, "")
		}
		e = t.exports = i, e.left = function(t) {
			return t.replace(/^\s*/, "")
		}, e.right = function(t) {
			return t.replace(/\s*$/, "")
		}
	}, function(t, e, i) {
		function n(t, e, i) {
			if (!o(e)) throw new TypeError("iterator must be a function");
			arguments.length < 3 && (i = this), "[object Array]" === u.call(t) ? r(t, e, i) : "string" == typeof t ? a(t, e, i) : s(t, e, i)
		}
		function r(t, e, i) {
			for (var n = 0, r = t.length; n < r; n++) l.call(t, n) && e.call(i, t[n], n, t)
		}
		function a(t, e, i) {
			for (var n = 0, r = t.length; n < r; n++) e.call(i, t.charAt(n), n, t)
		}
		function s(t, e, i) {
			for (var n in t) l.call(t, n) && e.call(i, t[n], n, t)
		}
		var o = i(3);
		t.exports = n;
		var u = Object.prototype.toString,
			l = Object.prototype.hasOwnProperty
	}, function(t, e) {
		function i() {
			for (var t = {}, e = 0; e < arguments.length; e++) {
				var i = arguments[e];
				for (var r in i) n.call(i, r) && (t[r] = i[r])
			}
			return t
		}
		t.exports = i;
		var n = Object.prototype.hasOwnProperty
	}, function(t, e, i) {
		var n = i(1),
			r = t.exports = {
				WebVTT: i(16),
				VTTCue: i(17),
				VTTRegion: i(18)
			};
		n.vttjs = r, n.WebVTT = r.WebVTT;
		var a = r.VTTCue,
			s = r.VTTRegion,
			o = n.VTTCue,
			u = n.VTTRegion;
		r.shim = function() {
			n.VTTCue = a, n.VTTRegion = s
		}, r.restore = function() {
			n.VTTCue = o, n.VTTRegion = u
		}, n.VTTCue || r.shim()
	}, function(t, e) {
		function i(t, e) {
			this.name = "ParsingError", this.code = t.code, this.message = e || t.message
		}
		function n(t) {
			function e(t, e, i, n) {
				return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | n) / 1e3
			}
			var i = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
			return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
		}
		function r() {
			this.values = g(null)
		}
		function a(t, e, i, n) {
			var r = n ? t.split(n) : [t];
			for (var a in r) if ("string" == typeof r[a]) {
				var s = r[a].split(i);
				if (2 === s.length) {
					var o = s[0],
						u = s[1];
					e(o, u)
				}
			}
		}
		function s(t, e, s) {
			function o() {
				var e = n(t);
				if (null === e) throw new i(i.Errors.BadTimeStamp, "Malformed timestamp: " + l);
				return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
			}
			function u() {
				t = t.replace(/^\s+/, "")
			}
			var l = t;
			if (u(), e.startTime = o(), u(), "--\x3e" !== t.substr(0, 3)) throw new i(i.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + l);
			t = t.substr(3), u(), e.endTime = o(), u(),
			function(t, e) {
				var i = new r;
				a(t, function(t, e) {
					switch (t) {
						case "region":
							for (var n = s.length - 1; n >= 0; n--) if (s[n].id === e) {
								i.set(t, s[n].region);
								break
							}
							break;
						case "vertical":
							i.alt(t, e, ["rl", "lr"]);
							break;
						case "line":
							var r = e.split(","),
								a = r[0];
							i.integer(t, a), i.percent(t, a) && i.set("snapToLines", !1), i.alt(t, a, ["auto"]), 2 === r.length && i.alt("lineAlign", r[1], ["start", "middle", "end"]);
							break;
						case "position":
							r = e.split(","), i.percent(t, r[0]), 2 === r.length && i.alt("positionAlign", r[1], ["start", "middle", "end"]);
							break;
						case "size":
							i.percent(t, e);
							break;
						case "align":
							i.alt(t, e, ["start", "middle", "end", "left", "right"])
					}
				}, /:/, /\s/), e.region = i.get("region", null), e.vertical = i.get("vertical", ""), e.line = i.get("line", "auto"), e.lineAlign = i.get("lineAlign", "start"), e.snapToLines = i.get("snapToLines", !0), e.size = i.get("size", 100), e.align = i.get("align", "middle"), e.position = i.get("position", {
					start: 0,
					left: 0,
					middle: 50,
					end: 100,
					right: 100
				}, e.align), e.positionAlign = i.get("positionAlign", {
					start: "start",
					left: "start",
					middle: "middle",
					end: "end",
					right: "end"
				}, e.align)
			}(t, e)
		}
		function o(t, e) {
			function i(t) {
				return y[t]
			}
			for (var r, a = t.document.createElement("div"), s = a, o = []; null !== (r = function() {
				if (!e) return null;
				var t = e.match(/^([^<]*)(<[^>]+>?)?/);
				return function(t) {
					return e = e.substr(t.length), t
				}(t[1] ? t[1] : t[2])
			}());) if ("<" !== r[0]) s.appendChild(t.document.createTextNode(function(t) {
				for (; c = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(c[0], i);
				return t
			}(r)));
			else {
				if ("/" === r[1]) {
					o.length && o[o.length - 1] === r.substr(2).replace(">", "") && (o.pop(), s = s.parentNode);
					continue
				}
				var u, l = n(r.substr(1, r.length - 2));
				if (l) {
					u = t.document.createProcessingInstruction("timestamp", l), s.appendChild(u);
					continue
				}
				var c = r.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
				if (!c) continue;
				if (!(u = function(e, i) {
					var n = v[e];
					if (!n) return null;
					var r = t.document.createElement(n);
					r.localName = n;
					var a = _[e];
					return a && i && (r[a] = i.trim()), r
				}(c[1], c[3]))) continue;
				if (! function(t, e) {
					return !b[e.localName] || b[e.localName] === t.localName
				}(s, u)) continue;
				c[2] && (u.className = c[2].substr(1).replace(".", " ")), o.push(c[1]), s.appendChild(u), s = u
			}
			return a
		}
		function u(t) {
			for (var e = 0; e < T.length; e++) {
				var i = T[e];
				if (t >= i[0] && t <= i[1]) return !0
			}
			return !1
		}
		function l(t) {
			function e(t, e) {
				for (var i = e.childNodes.length - 1; i >= 0; i--) t.push(e.childNodes[i])
			}
			function i(t) {
				if (!t || !t.length) return null;
				var n = t.pop(),
					r = n.textContent || n.innerText;
				if (r) {
					var a = r.match(/^.*(\n|\r)/);
					return a ? (t.length = 0, a[0]) : r
				}
				return "ruby" === n.tagName ? i(t) : n.childNodes ? (e(t, n), i(t)) : void 0
			}
			var n, r = [],
				a = "";
			if (!t || !t.childNodes) return "ltr";
			for (e(r, t); a = i(r);) for (var s = 0; s < a.length; s++) if (n = a.charCodeAt(s), u(n)) return "rtl";
			return "ltr"
		}
		function c(t) {
			if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
			if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
			for (var e = t.track, i = e.textTrackList, n = 0, r = 0; r < i.length && i[r] !== e; r++) "showing" === i[r].mode && n++;
			return -1 * ++n
		}
		function d() {}
		function h(t, e, i) {
			var n = /MSIE\s8\.0/.test(navigator.userAgent),
				r = "rgba(255, 255, 255, 1)",
				a = "rgba(0, 0, 0, 0.8)";
			n && (r = "rgb(255, 255, 255)", a = "rgb(0, 0, 0)"), d.call(this), this.cue = e, this.cueDiv = o(t, e.text);
			var s = {
				color: r,
				backgroundColor: a,
				position: "relative",
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				display: "inline"
			};
			n || (s.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", s.unicodeBidi = "plaintext"), this.applyStyles(s, this.cueDiv), this.div = t.document.createElement("div"), s = {
				textAlign: "middle" === e.align ? "center" : e.align,
				font: i.font,
				whiteSpace: "pre-line",
				position: "absolute"
			}, n || (s.direction = l(this.cueDiv), s.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(s), this.div.appendChild(this.cueDiv);
			var u = 0;
			switch (e.positionAlign) {
				case "start":
					u = e.position;
					break;
				case "middle":
					u = e.position - e.size / 2;
					break;
				case "end":
					u = e.position - e.size
			}
			"" === e.vertical ? this.applyStyles({
				left: this.formatStyle(u, "%"),
				width: this.formatStyle(e.size, "%")
			}) : this.applyStyles({
				top: this.formatStyle(u, "%"),
				height: this.formatStyle(e.size, "%")
			}), this.move = function(t) {
				this.applyStyles({
					top: this.formatStyle(t.top, "px"),
					bottom: this.formatStyle(t.bottom, "px"),
					left: this.formatStyle(t.left, "px"),
					right: this.formatStyle(t.right, "px"),
					height: this.formatStyle(t.height, "px"),
					width: this.formatStyle(t.width, "px")
				})
			}
		}
		function p(t) {
			var e, i, n, r, a = /MSIE\s8\.0/.test(navigator.userAgent);
			if (t.div) {
				i = t.div.offsetHeight, n = t.div.offsetWidth, r = t.div.offsetTop;
				var s = (s = t.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
				t = t.div.getBoundingClientRect(), e = s ? Math.max(s[0] && s[0].height || 0, t.height / s.length) : 0
			}
			this.left = t.left, this.right = t.right, this.top = t.top || r, this.height = t.height || i, this.bottom = t.bottom || r + (t.height || i), this.width = t.width || n, this.lineHeight = void 0 !== e ? e : t.lineHeight, a && !this.lineHeight && (this.lineHeight = 13)
		}
		function f(t, e, i, n) {
			var r = new p(e),
				a = e.cue,
				s = c(a),
				o = [];
			if (a.snapToLines) {
				var u;
				switch (a.vertical) {
					case "":
						o = ["+y", "-y"], u = "height";
						break;
					case "rl":
						o = ["+x", "-x"], u = "width";
						break;
					case "lr":
						o = ["-x", "+x"], u = "width"
				}
				var l = r.lineHeight,
					d = l * Math.round(s),
					h = i[u] + l,
					f = o[0];
				Math.abs(d) > h && (d = d < 0 ? -1 : 1, d *= Math.ceil(h / l) * l), s < 0 && (d += "" === a.vertical ? i.height : i.width, o = o.reverse()), r.move(f, d)
			} else {
				var m = r.lineHeight / i.height * 100;
				switch (a.lineAlign) {
					case "middle":
						s -= m / 2;
						break;
					case "end":
						s -= m
				}
				switch (a.vertical) {
					case "":
						e.applyStyles({
							top: e.formatStyle(s, "%")
						});
						break;
					case "rl":
						e.applyStyles({
							left: e.formatStyle(s, "%")
						});
						break;
					case "lr":
						e.applyStyles({
							right: e.formatStyle(s, "%")
						})
				}
				o = ["+y", "-x", "+x", "-y"], r = new p(e)
			}
			var g = function(t, e) {
				for (var r, a = new p(t), s = 1, o = 0; o < e.length; o++) {
					for (; t.overlapsOppositeAxis(i, e[o]) || t.within(i) && t.overlapsAny(n);) t.move(e[o]);
					if (t.within(i)) return t;
					var u = t.intersectPercentage(i);
					s > u && (r = new p(t), s = u), t = new p(a)
				}
				return r || a
			}(r, o);
			e.move(g.toCSSCompatValues(i))
		}
		function m() {}
		var g = Object.create || function() {
				function t() {}
				return function(e) {
					if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
					return t.prototype = e, new t
				}
			}();
		i.prototype = g(Error.prototype), i.prototype.constructor = i, i.Errors = {
			BadSignature: {
				code: 0,
				message: "Malformed WebVTT signature."
			},
			BadTimeStamp: {
				code: 1,
				message: "Malformed time stamp."
			}
		}, r.prototype = {
			set: function(t, e) {
				this.get(t) || "" === e || (this.values[t] = e)
			},
			get: function(t, e, i) {
				return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
			},
			has: function(t) {
				return t in this.values
			},
			alt: function(t, e, i) {
				for (var n = 0; n < i.length; ++n) if (e === i[n]) {
					this.set(t, e);
					break
				}
			},
			integer: function(t, e) {
				/^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
			},
			percent: function(t, e) {
				return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e), !0)
			}
		};
		var y = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&lrm;": "‎",
			"&rlm;": "‏",
			"&nbsp;": " "
		}, v = {
			c: "span",
			i: "i",
			b: "b",
			u: "u",
			ruby: "ruby",
			rt: "rt",
			v: "span",
			lang: "span"
		}, _ = {
			v: "title",
			lang: "lang"
		}, b = {
			rt: "ruby"
		}, T = [
			[1470, 1470],
			[1472, 1472],
			[1475, 1475],
			[1478, 1478],
			[1488, 1514],
			[1520, 1524],
			[1544, 1544],
			[1547, 1547],
			[1549, 1549],
			[1563, 1563],
			[1566, 1610],
			[1645, 1647],
			[1649, 1749],
			[1765, 1766],
			[1774, 1775],
			[1786, 1805],
			[1807, 1808],
			[1810, 1839],
			[1869, 1957],
			[1969, 1969],
			[1984, 2026],
			[2036, 2037],
			[2042, 2042],
			[2048, 2069],
			[2074, 2074],
			[2084, 2084],
			[2088, 2088],
			[2096, 2110],
			[2112, 2136],
			[2142, 2142],
			[2208, 2208],
			[2210, 2220],
			[8207, 8207],
			[64285, 64285],
			[64287, 64296],
			[64298, 64310],
			[64312, 64316],
			[64318, 64318],
			[64320, 64321],
			[64323, 64324],
			[64326, 64449],
			[64467, 64829],
			[64848, 64911],
			[64914, 64967],
			[65008, 65020],
			[65136, 65140],
			[65142, 65276],
			[67584, 67589],
			[67592, 67592],
			[67594, 67637],
			[67639, 67640],
			[67644, 67644],
			[67647, 67669],
			[67671, 67679],
			[67840, 67867],
			[67872, 67897],
			[67903, 67903],
			[67968, 68023],
			[68030, 68031],
			[68096, 68096],
			[68112, 68115],
			[68117, 68119],
			[68121, 68147],
			[68160, 68167],
			[68176, 68184],
			[68192, 68223],
			[68352, 68405],
			[68416, 68437],
			[68440, 68466],
			[68472, 68479],
			[68608, 68680],
			[126464, 126467],
			[126469, 126495],
			[126497, 126498],
			[126500, 126500],
			[126503, 126503],
			[126505, 126514],
			[126516, 126519],
			[126521, 126521],
			[126523, 126523],
			[126530, 126530],
			[126535, 126535],
			[126537, 126537],
			[126539, 126539],
			[126541, 126543],
			[126545, 126546],
			[126548, 126548],
			[126551, 126551],
			[126553, 126553],
			[126555, 126555],
			[126557, 126557],
			[126559, 126559],
			[126561, 126562],
			[126564, 126564],
			[126567, 126570],
			[126572, 126578],
			[126580, 126583],
			[126585, 126588],
			[126590, 126590],
			[126592, 126601],
			[126603, 126619],
			[126625, 126627],
			[126629, 126633],
			[126635, 126651],
			[1114109, 1114109]
		];
		d.prototype.applyStyles = function(t, e) {
			e = e || this.div;
			for (var i in t) t.hasOwnProperty(i) && (e.style[i] = t[i])
		}, d.prototype.formatStyle = function(t, e) {
			return 0 === t ? 0 : t + e
		}, h.prototype = g(d.prototype), h.prototype.constructor = h, p.prototype.move = function(t, e) {
			switch (e = void 0 !== e ? e : this.lineHeight, t) {
				case "+x":
					this.left += e, this.right += e;
					break;
				case "-x":
					this.left -= e, this.right -= e;
					break;
				case "+y":
					this.top += e, this.bottom += e;
					break;
				case "-y":
					this.top -= e, this.bottom -= e
			}
		}, p.prototype.overlaps = function(t) {
			return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
		}, p.prototype.overlapsAny = function(t) {
			for (var e = 0; e < t.length; e++) if (this.overlaps(t[e])) return !0;
			return !1
		}, p.prototype.within = function(t) {
			return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
		}, p.prototype.overlapsOppositeAxis = function(t, e) {
			switch (e) {
				case "+x":
					return this.left < t.left;
				case "-x":
					return this.right > t.right;
				case "+y":
					return this.top < t.top;
				case "-y":
					return this.bottom > t.bottom
			}
		}, p.prototype.intersectPercentage = function(t) {
			return Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)) * Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)) / (this.height * this.width)
		}, p.prototype.toCSSCompatValues = function(t) {
			return {
				top: this.top - t.top,
				bottom: t.bottom - this.bottom,
				left: this.left - t.left,
				right: t.right - this.right,
				height: this.height,
				width: this.width
			}
		}, p.getSimpleBoxPosition = function(t) {
			var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
				i = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
				n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
			return t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t, {
				left: t.left,
				right: t.right,
				top: t.top || n,
				height: t.height || e,
				bottom: t.bottom || n + (t.height || e),
				width: t.width || i
			}
		}, m.StringDecoder = function() {
			return {
				decode: function(t) {
					if (!t) return "";
					if ("string" != typeof t) throw new Error("Error - expected string data.");
					return decodeURIComponent(encodeURIComponent(t))
				}
			}
		}, m.convertCueToDOMTree = function(t, e) {
			return t && e ? o(t, e) : null
		};
		m.processCues = function(t, e, i) {
			if (!t || !e || !i) return null;
			for (; i.firstChild;) i.removeChild(i.firstChild);
			var n = t.document.createElement("div");
			if (n.style.position = "absolute", n.style.left = "0", n.style.right = "0", n.style.top = "0", n.style.bottom = "0", n.style.margin = "1.5%", i.appendChild(n), function(t) {
				for (var e = 0; e < t.length; e++) if (t[e].hasBeenReset || !t[e].displayState) return !0;
				return !1
			}(e)) {
				var r = [],
					a = p.getSimpleBoxPosition(n),
					s = Math.round(.05 * a.height * 100) / 100,
					o = {
						font: s + "px sans-serif"
					};
				! function() {
					for (var i, s, u = 0; u < e.length; u++) s = e[u], i = new h(t, s, o), n.appendChild(i.div), f(t, i, a, r), s.displayState = i.div, r.push(p.getSimpleBoxPosition(i))
				}()
			} else for (var u = 0; u < e.length; u++) n.appendChild(e[u].displayState)
		}, m.Parser = function(t, e, i) {
			i || (i = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
		}, m.Parser.prototype = {
			reportOrThrowError: function(t) {
				if (!(t instanceof i)) throw t;
				this.onparsingerror && this.onparsingerror(t)
			},
			parse: function(t) {
				function e() {
					for (var t = l.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];)++e;
					var i = t.substr(0, e);
					return "\r" === t[e] && ++e, "\n" === t[e] && ++e, l.buffer = t.substr(e), i
				}
				function o(t) {
					var e = new r;
					if (a(t, function(t, i) {
						switch (t) {
							case "id":
								e.set(t, i);
								break;
							case "width":
								e.percent(t, i);
								break;
							case "lines":
								e.integer(t, i);
								break;
							case "regionanchor":
							case "viewportanchor":
								var n = i.split(",");
								if (2 !== n.length) break;
								var a = new r;
								if (a.percent("x", n[0]), a.percent("y", n[1]), !a.has("x") || !a.has("y")) break;
								e.set(t + "X", a.get("x")), e.set(t + "Y", a.get("y"));
								break;
							case "scroll":
								e.alt(t, i, ["up"])
						}
					}, /=/, /\s/), e.has("id")) {
						var i = new(l.vttjs.VTTRegion || l.window.VTTRegion);
						i.width = e.get("width", 100), i.lines = e.get("lines", 3), i.regionAnchorX = e.get("regionanchorX", 0), i.regionAnchorY = e.get("regionanchorY", 100), i.viewportAnchorX = e.get("viewportanchorX", 0), i.viewportAnchorY = e.get("viewportanchorY", 100), i.scroll = e.get("scroll", ""), l.onregion && l.onregion(i), l.regionList.push({
							id: e.get("id"),
							region: i
						})
					}
				}
				function u(t) {
					var e = new r;
					a(t, function(t, i) {
						switch (t) {
							case "MPEGT":
								e.integer(t + "S", i);
								break;
							case "LOCA":
								e.set(t + "L", n(i))
						}
					}, /[^\d]:/, /,/), l.ontimestampmap && l.ontimestampmap({
						MPEGTS: e.get("MPEGTS"),
						LOCAL: e.get("LOCAL")
					})
				}
				var l = this;
				t && (l.buffer += l.decoder.decode(t, {
					stream: !0
				}));
				try {
					var c;
					if ("INITIAL" === l.state) {
						if (!/\r\n|\n/.test(l.buffer)) return this;
						c = e();
						var d = c.match(/^WEBVTT([ \t].*)?$/);
						if (!d || !d[0]) throw new i(i.Errors.BadSignature);
						l.state = "HEADER"
					}
					for (var h = !1; l.buffer;) {
						if (!/\r\n|\n/.test(l.buffer)) return this;
						switch (h ? h = !1 : c = e(), l.state) {
							case "HEADER":
								/:/.test(c) ? function(t) {
									t.match(/X-TIMESTAMP-MAP/) ? a(t, function(t, e) {
										switch (t) {
											case "X-TIMESTAMP-MAP":
												u(e)
										}
									}, /=/) : a(t, function(t, e) {
										switch (t) {
											case "Region":
												o(e)
										}
									}, /:/)
								}(c) : c || (l.state = "ID");
								continue;
							case "NOTE":
								c || (l.state = "ID");
								continue;
							case "ID":
								if (/^NOTE($|[ \t])/.test(c)) {
									l.state = "NOTE";
									break
								}
								if (!c) continue;
								if (l.cue = new(l.vttjs.VTTCue || l.window.VTTCue)(0, 0, ""), l.state = "CUE", -1 === c.indexOf("--\x3e")) {
									l.cue.id = c;
									continue
								}
							case "CUE":
								try {
									s(c, l.cue, l.regionList)
								} catch (t) {
									l.reportOrThrowError(t), l.cue = null, l.state = "BADCUE";
									continue
								}
								l.state = "CUETEXT";
								continue;
							case "CUETEXT":
								var p = -1 !== c.indexOf("--\x3e");
								if (!c || p && (h = !0)) {
									l.oncue && l.oncue(l.cue), l.cue = null, l.state = "ID";
									continue
								}
								l.cue.text && (l.cue.text += "\n"), l.cue.text += c;
								continue;
							case "BADCUE":
								c || (l.state = "ID");
								continue
						}
					}
				} catch (t) {
					l.reportOrThrowError(t), "CUETEXT" === l.state && l.cue && l.oncue && l.oncue(l.cue), l.cue = null, l.state = "INITIAL" === l.state ? "BADWEBVTT" : "BADCUE"
				}
				return this
			},
			flush: function() {
				var t = this;
				try {
					if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new i(i.Errors.BadSignature)
				} catch (e) {
					t.reportOrThrowError(e)
				}
				return t.onflush && t.onflush(), this
			}
		}, t.exports = m
	}, function(t, e) {
		function i(t) {
			return "string" == typeof t && ( !! o[t.toLowerCase()] && t.toLowerCase())
		}
		function n(t) {
			return "string" == typeof t && ( !! u[t.toLowerCase()] && t.toLowerCase())
		}
		function r(t) {
			for (var e = 1; e < arguments.length; e++) {
				var i = arguments[e];
				for (var n in i) t[n] = i[n]
			}
			return t
		}
		function a(t, e, a) {
			var o = this,
				u = /MSIE\s8\.0/.test(navigator.userAgent),
				l = {};
			u ? o = document.createElement("custom") : l.enumerable = !0, o.hasBeenReset = !1;
			var c = "",
				d = !1,
				h = t,
				p = e,
				f = a,
				m = null,
				g = "",
				y = !0,
				v = "auto",
				_ = "start",
				b = 50,
				T = "middle",
				S = 50,
				w = "middle";
			if (Object.defineProperty(o, "id", r({}, l, {
				get: function() {
					return c
				},
				set: function(t) {
					c = "" + t
				}
			})), Object.defineProperty(o, "pauseOnExit", r({}, l, {
				get: function() {
					return d
				},
				set: function(t) {
					d = !! t
				}
			})), Object.defineProperty(o, "startTime", r({}, l, {
				get: function() {
					return h
				},
				set: function(t) {
					if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
					h = t, this.hasBeenReset = !0
				}
			})), Object.defineProperty(o, "endTime", r({}, l, {
				get: function() {
					return p
				},
				set: function(t) {
					if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
					p = t, this.hasBeenReset = !0
				}
			})), Object.defineProperty(o, "text", r({}, l, {
				get: function() {
					return f
				},
				set: function(t) {
					f = "" + t, this.hasBeenReset = !0
				}
			})), Object.defineProperty(o, "region", r({}, l, {
				get: function() {
					return m
				},
				set: function(t) {
					m = t, this.hasBeenReset = !0
				}
			})), Object.defineProperty(o, "vertical", r({}, l, {
				get: function() {
					return g
				},
				set: function(t) {
					var e = i(t);
					if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
					g = e, this.hasBeenReset = !0
				}
			})), Object.defineProperty(o, "snapToLines", r({}, l, {
				get: function() {
					return y
				},
				set: function(t) {
					y = !! t, this.hasBeenReset = !0
				}
			})), Object.defineProperty(o, "line", r({}, l, {
				get: function() {
					return v
				},
				set: function(t) {
					if ("number" != typeof t && t !== s) throw new SyntaxError("An invalid number or illegal string was specified.");
					v = t, this.hasBeenReset = !0
				}
			})), Object.defineProperty(o, "lineAlign", r({}, l, {
				get: function() {
					return _
				},
				set: function(t) {
					var e = n(t);
					if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
					_ = e, this.hasBeenReset = !0
				}
			})), Object.defineProperty(o, "position", r({}, l, {
				get: function() {
					return b
				},
				set: function(t) {
					if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
					b = t, this.hasBeenReset = !0
				}
			})), Object.defineProperty(o, "positionAlign", r({}, l, {
				get: function() {
					return T
				},
				set: function(t) {
					var e = n(t);
					if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
					T = e, this.hasBeenReset = !0
				}
			})), Object.defineProperty(o, "size", r({}, l, {
				get: function() {
					return S
				},
				set: function(t) {
					if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
					S = t, this.hasBeenReset = !0
				}
			})), Object.defineProperty(o, "align", r({}, l, {
				get: function() {
					return w
				},
				set: function(t) {
					var e = n(t);
					if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
					w = e, this.hasBeenReset = !0
				}
			})), o.displayState = void 0, u) return o
		}
		var s = "auto",
			o = {
				"": !0,
				lr: !0,
				rl: !0
			}, u = {
				start: !0,
				middle: !0,
				end: !0,
				left: !0,
				right: !0
			};
		a.prototype.getCueAsHTML = function() {
			return WebVTT.convertCueToDOMTree(window, this.text)
		}, t.exports = a
	}, function(t, e) {
		function i(t) {
			return "string" == typeof t && ( !! a[t.toLowerCase()] && t.toLowerCase())
		}
		function n(t) {
			return "number" == typeof t && t >= 0 && t <= 100
		}
		function r() {
			var t = 100,
				e = 3,
				r = 0,
				a = 100,
				s = 0,
				o = 100,
				u = "";
			Object.defineProperties(this, {
				width: {
					enumerable: !0,
					get: function() {
						return t
					},
					set: function(e) {
						if (!n(e)) throw new Error("Width must be between 0 and 100.");
						t = e
					}
				},
				lines: {
					enumerable: !0,
					get: function() {
						return e
					},
					set: function(t) {
						if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
						e = t
					}
				},
				regionAnchorY: {
					enumerable: !0,
					get: function() {
						return a
					},
					set: function(t) {
						if (!n(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
						a = t
					}
				},
				regionAnchorX: {
					enumerable: !0,
					get: function() {
						return r
					},
					set: function(t) {
						if (!n(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
						r = t
					}
				},
				viewportAnchorY: {
					enumerable: !0,
					get: function() {
						return o
					},
					set: function(t) {
						if (!n(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
						o = t
					}
				},
				viewportAnchorX: {
					enumerable: !0,
					get: function() {
						return s
					},
					set: function(t) {
						if (!n(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
						s = t
					}
				},
				scroll: {
					enumerable: !0,
					get: function() {
						return u
					},
					set: function(t) {
						var e = i(t);
						if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
						u = e
					}
				}
			})
		}
		var a = {
			"": !0,
			up: !0
		};
		t.exports = r
	}, function(t, e, i) {
		! function(e, n) {
			t.exports = n(i(0))
		}(0, function(t) {
			"use strict";

			function e(t) {
				y[t] = function() {
					return this.el_.vjs_getProperty(t)
				}
			}
			t = t && t.hasOwnProperty("default") ? t.
			default : t;
			var i, n = "undefined" != typeof window ? window : "undefined" != typeof self ? self : {};
			i = "undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {};
			for (var r = i, a = function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}, s = function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}, o = function(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}, u = t.getComponent("Tech"), l = t.dom, c = t.url, d = t.createTimeRange, h = t.mergeOptions, p = r && r.navigator || {}, f = function(t) {
				function e(i, n) {
					a(this, e);
					var s = o(this, t.call(this, i, n));
					return i.source && s.ready(function() {
						this.setSource(i.source)
					}, !0), i.startTime && s.ready(function() {
						this.load(), this.play(), this.currentTime(i.startTime)
					}, !0), r.videojs = r.videojs || {}, r.videojs.Flash = r.videojs.Flash || {}, r.videojs.Flash.onReady = e.onReady, r.videojs.Flash.onEvent = e.onEvent, r.videojs.Flash.onError = e.onError, s.on("seeked", function() {
						this.lastSeekTarget_ = void 0
					}), s
				}
				return s(e, t), e.prototype.createEl = function() {
					var t = this.options_;
					t.swf || (t.swf = "https://vjs.zencdn.net/swf/5.4.1/video-js.swf");
					var i = t.techId,
						n = h({
							readyFunction: "videojs.Flash.onReady",
							eventProxyFunction: "videojs.Flash.onEvent",
							errorEventProxyFunction: "videojs.Flash.onError",
							autoplay: t.autoplay,
							preload: t.preload,
							loop: t.loop,
							muted: t.muted
						}, t.flashVars),
						r = h({
							wmode: "opaque",
							bgcolor: "#000000"
						}, t.params),
						a = h({
							id: i,
							name: i,
							class: "vjs-tech"
						}, t.attributes);
					return this.el_ = e.embed(t.swf, n, r, a), this.el_.tech = this, this.el_
				}, e.prototype.play = function() {
					this.ended() && this.setCurrentTime(0), this.el_.vjs_play()
				}, e.prototype.pause = function() {
					this.el_.vjs_pause()
				}, e.prototype.src = function(t) {
					return void 0 === t ? this.currentSrc() : this.setSrc(t)
				}, e.prototype.setSrc = function(t) {
					var e = this;
					t = c.getAbsoluteURL(t), this.el_.vjs_src(t), this.autoplay() && this.setTimeout(function() {
						return e.play()
					}, 0)
				}, e.prototype.seeking = function() {
					return void 0 !== this.lastSeekTarget_
				}, e.prototype.setCurrentTime = function(e) {
					var i = this.seekable();
					i.length && (e = e > i.start(0) ? e : i.start(0), e = e < i.end(i.length - 1) ? e : i.end(i.length - 1), this.lastSeekTarget_ = e, this.trigger("seeking"), this.el_.vjs_setProperty("currentTime", e), t.prototype.setCurrentTime.call(this))
				}, e.prototype.currentTime = function() {
					return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
				}, e.prototype.currentSrc = function() {
					return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc")
				}, e.prototype.duration = function() {
					if (0 === this.readyState()) return NaN;
					var t = this.el_.vjs_getProperty("duration");
					return t >= 0 ? t : 1 / 0
				}, e.prototype.load = function() {
					this.el_.vjs_load()
				}, e.prototype.poster = function() {
					this.el_.vjs_getProperty("poster")
				}, e.prototype.setPoster = function() {}, e.prototype.seekable = function() {
					var t = this.duration();
					return 0 === t ? d() : d(0, t)
				}, e.prototype.buffered = function() {
					var t = this.el_.vjs_getProperty("buffered");
					return 0 === t.length ? d() : d(t[0][0], t[0][1])
				}, e.prototype.supportsFullScreen = function() {
					return !1
				}, e.prototype.enterFullScreen = function() {
					return !1
				}, e.prototype.getVideoPlaybackQuality = function() {
					var t = this.el_.vjs_getProperty("getVideoPlaybackQuality");
					return r.performance && "function" == typeof r.performance.now ? t.creationTime = r.performance.now() : r.performance && r.performance.timing && "number" == typeof r.performance.timing.navigationStart && (t.creationTime = r.Date.now() - r.performance.timing.navigationStart), t
				}, e
			}(u), m = ["rtmpConnection", "rtmpStream", "preload", "defaultPlaybackRate", "playbackRate", "autoplay", "loop", "controls", "volume", "muted", "defaultMuted"], g = ["networkState", "readyState", "initialTime", "startOffsetTime", "paused", "ended", "videoWidth", "videoHeight"], y = f.prototype, v = 0; v < m.length; v++) e(m[v]),
			function(t) {
				var e = t.charAt(0).toUpperCase() + t.slice(1);
				y["set" + e] = function(e) {
					return this.el_.vjs_setProperty(t, e)
				}
			}(m[v]);
			for (var _ = 0; _ < g.length; _++) e(g[_]);
			return f.isSupported = function() {
				return !!(t.browser.IS_CHROME && !t.browser.IS_ANDROID || t.browser.IS_SAFARI && !t.browser.IS_IOS) || f.version()[0] >= 10
			}, u.withSourceHandlers(f), f.nativeSourceHandler = {}, f.nativeSourceHandler.canPlayType = function(t) {
				return t in f.formats ? "maybe" : ""
			}, f.nativeSourceHandler.canHandleSource = function(t, e) {
				var i = void 0;
				return i = t.type ? t.type.replace(/;.*/, "").toLowerCase() : function(t) {
					var e = c.getFileExtension(t);
					return e ? "video/" + e : ""
				}(t.src), f.nativeSourceHandler.canPlayType(i)
			}, f.nativeSourceHandler.handleSource = function(t, e, i) {
				e.setSrc(t.src)
			}, f.nativeSourceHandler.dispose = function() {}, f.registerSourceHandler(f.nativeSourceHandler), f.formats = {
				"video/flv": "FLV",
				"video/x-flv": "FLV",
				"video/mp4": "MP4",
				"video/m4v": "MP4"
			}, f.onReady = function(t) {
				var e = l.$("#" + t),
					i = e && e.tech;
				i && i.el() && f.checkReady(i)
			}, f.checkReady = function(t) {
				t.el() && (t.el().vjs_getProperty ? t.triggerReady() : this.setTimeout(function() {
					f.checkReady(t)
				}, 50))
			}, f.onEvent = function(t, e) {
				var i = l.$("#" + t).tech,
					n = Array.prototype.slice.call(arguments, 2);
				i.setTimeout(function() {
					i.trigger(e, n)
				}, 1)
			}, f.onError = function(t, e) {
				var i = l.$("#" + t).tech;
				if ("srcnotfound" === e) return i.error(4);
				"string" == typeof e ? i.error("FLASH: " + e) : (e.origin = "flash", i.error(e))
			}, f.version = function() {
				var t = "0,0,0";
				try {
					t = new r.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
				} catch (e) {
					try {
						p.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (p.plugins["Shockwave Flash 2.0"] || p.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
					} catch (t) {}
				}
				return t.split(",")
			}, f.embed = function(t, e, i, n) {
				var r = f.getEmbedCode(t, e, i, n);
				return l.createEl("div", {
					innerHTML: r
				}).childNodes[0]
			}, f.getEmbedCode = function(t, e, i, n) {
				var r = "",
					a = "",
					s = "";
				return e && Object.getOwnPropertyNames(e).forEach(function(t) {
					r += t + "=" + e[t] + "&amp;"
				}), i = h({
					movie: t,
					flashvars: r,
					allowScriptAccess: "always",
					allowNetworking: "all"
				}, i), Object.getOwnPropertyNames(i).forEach(function(t) {
					a += '<param name="' + t + '" value="' + i[t] + '" />'
				}), n = h({
					data: t,
					width: "100%",
					height: "100%"
				}, n), Object.getOwnPropertyNames(n).forEach(function(t) {
					s += t + '="' + n[t] + '" '
				}), '<object type="application/x-shockwave-flash" ' + s + ">" + a + "</object>"
			},
			function(t) {
				t.streamingFormats = {
					"rtmp/mp4": "MP4",
					"rtmp/flv": "FLV"
				}, t.streamFromParts = function(t, e) {
					return t + "&" + e
				}, t.streamToParts = function(t) {
					var e = {
						connection: "",
						stream: ""
					};
					if (!t) return e;
					var i = t.search(/&(?!\w+=)/),
						n = void 0;
					return -1 !== i ? n = i + 1 : 0 === (i = n = t.lastIndexOf("/") + 1) && (i = n = t.length), e.connection = t.substring(0, i), e.stream = t.substring(n, t.length), e
				}, t.isStreamingType = function(e) {
					return e in t.streamingFormats
				}, t.RTMP_RE = /^rtmp[set]?:\/\//i, t.isStreamingSrc = function(e) {
					return t.RTMP_RE.test(e)
				}, t.rtmpSourceHandler = {}, t.rtmpSourceHandler.canPlayType = function(e) {
					return t.isStreamingType(e) ? "maybe" : ""
				}, t.rtmpSourceHandler.canHandleSource = function(e, i) {
					var n = t.rtmpSourceHandler.canPlayType(e.type);
					return n || (t.isStreamingSrc(e.src) ? "maybe" : "")
				}, t.rtmpSourceHandler.handleSource = function(e, i, n) {
					var r = t.streamToParts(e.src);
					i.setRtmpConnection(r.connection), i.setRtmpStream(r.stream)
				}, t.registerSourceHandler(t.rtmpSourceHandler)
			}(f), u.getTech("Flash") ? (t.log.warn("Not using videojs-flash as it appears to already be registered"), t.log.warn("videojs-flash should only be used with video.js@6 and above")) : t.registerTech("Flash", f), f.VERSION = "2.1.0", f
		})
	}, function(t, e, i) {
		(function(e) {
			var i, i;
			! function(e) {
				t.exports = e()
			}(function() {
				var t;
				return function t(e, n, r) {
					function a(o, u) {
						if (!n[o]) {
							if (!e[o]) {
								var l = "function" == typeof i && i;
								if (!u && l) return i(o, !0);
								if (s) return s(o, !0);
								var c = new Error("Cannot find module '" + o + "'");
								throw c.code = "MODULE_NOT_FOUND", c
							}
							var d = n[o] = {
								exports: {}
							};
							e[o][0].call(d.exports, function(t) {
								var i = e[o][1][t];
								return a(i || t)
							}, d, d.exports, t, e, n, r)
						}
						return n[o].exports
					}
					for (var s = "function" == typeof i && i, o = 0; o < r.length; o++) a(r[o]);
					return a
				}({
					1: [function(t, e, i) {
						"use strict";
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var n = function() {
							function t(t, e) {
								var i = [],
									n = !0,
									r = !1,
									a = void 0;
								try {
									for (var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
								} catch (t) {
									r = !0, a = t
								} finally {
									try {
										!n && o.
										return &&o.
										return ()
									} finally {
										if (r) throw a
									}
								}
								return i
							}
							return function(e, i) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return t(e, i);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}
						}(),
							r = t("global/window"),
							a = function(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}(r),
							s = function(t, e) {
								for (var i = t.cues, n = 0; n < i.length; n++) {
									var r = i[n];
									if (e >= r.adStartTime && e <= r.adEndTime) return r
								}
								return null
							}, o = function(t, e) {
								var i = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2];
								if (t.segments) for (var r = i, o = void 0, u = 0; u < t.segments.length; u++) {
									var l = t.segments[u];
									if (o || (o = s(e, r + l.duration / 2)), o) {
										if ("cueIn" in l) {
											o.endTime = r, o.adEndTime = r, r += l.duration, o = null;
											continue
										}
										if (r < o.endTime) {
											r += l.duration;
											continue
										}
										o.endTime += l.duration
									} else if ("cueOut" in l && (o = new a.
									default.VTTCue(r, r + l.duration, l.cueOut), o.adStartTime = r, o.adEndTime = r + parseFloat(l.cueOut), e.addCue(o)), "cueOutCont" in l) {
										var c = void 0,
											d = void 0,
											h = l.cueOutCont.split("/").map(parseFloat),
											p = n(h, 2);
										c = p[0], d = p[1], o = new a.
										default.VTTCue(r, r + l.duration, ""), o.adStartTime = r - c, o.adEndTime = o.adStartTime + d, e.addCue(o)
									}
									r += l.duration
								}
							};
						i.
						default = {
							updateAdCues: o,
							findAdCue: s
						}, e.exports = i.
						default
					}, {
						"global/window": 32
					}],
					2: [function(t, e, i) {
						"use strict";
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var n = function(t, e) {
							return t.start(e) + "-" + t.end(e)
						}, r = function(t, e) {
							var i = t.toString(16);
							return "00".substring(0, 2 - i.length) + i + (e % 2 ? " " : "")
						}, a = function(t) {
							return t >= 32 && t < 126 ? String.fromCharCode(t) : "."
						}, s = function(t) {
							var e = {};
							return Object.keys(t).forEach(function(i) {
								var n = t[i];
								ArrayBuffer.isView(n) ? e[i] = {
									bytes: n.buffer,
									byteOffset: n.byteOffset,
									byteLength: n.byteLength
								} : e[i] = n
							}), e
						}, o = function(t) {
							var e = t.byterange || {
								length: 1 / 0,
								offset: 0
							};
							return [e.length, e.offset, t.resolvedUri].join(",")
						}, u = {
							hexDump: function(t) {
								for (var e = Array.prototype.slice.call(t), i = "", n = void 0, s = void 0, o = 0; o < e.length / 16; o++) n = e.slice(16 * o, 16 * o + 16).map(r).join(""), s = e.slice(16 * o, 16 * o + 16).map(a).join(""), i += n + " " + s + "\n";
								return i
							},
							tagDump: function(t) {
								return u.hexDump(t.bytes)
							},
							textRanges: function(t) {
								var e = "",
									i = void 0;
								for (i = 0; i < t.length; i++) e += n(t, i) + " ";
								return e
							},
							createTransferableMessage: s,
							initSegmentId: o
						};
						i.
						default = u, e.exports = i.
						default
					}, {}],
					3: [function(t, e, i) {
						"use strict";
						Object.defineProperty(i, "__esModule", {
							value: !0
						}), i.
						default = {
							GOAL_BUFFER_LENGTH: 30,
							MAX_GOAL_BUFFER_LENGTH: 60,
							GOAL_BUFFER_LENGTH_RATE: 1,
							BANDWIDTH_VARIANCE: 1.2,
							BUFFER_LOW_WATER_LINE: 0,
							MAX_BUFFER_LOW_WATER_LINE: 30,
							BUFFER_LOW_WATER_LINE_RATE: 1
						}, e.exports = i.
						default
					}, {}],
					4: [function(t, e, i) {
						"use strict";
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var n = t("global/window"),
							r = function(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}(n),
							a = t("aes-decrypter"),
							s = t("./bin-utils"),
							o = function(t) {
								t.onmessage = function(t) {
									var e = t.data,
										i = new Uint8Array(e.encrypted.bytes, e.encrypted.byteOffset, e.encrypted.byteLength),
										n = new Uint32Array(e.key.bytes, e.key.byteOffset, e.key.byteLength / 4),
										o = new Uint32Array(e.iv.bytes, e.iv.byteOffset, e.iv.byteLength / 4);
									new a.Decrypter(i, n, o, function(t, i) {
										r.
										default.postMessage((0, s.createTransferableMessage)({
											source: e.source,
											decrypted: i
										}), [i.buffer])
									})
								}
							};
						i.
						default = function(t) {
							return new o(t)
						}, e.exports = i.
						default
					}, {
						"./bin-utils": 2,
						"aes-decrypter": 25,
						"global/window": 32
					}],
					5: [function(t, i, n) {
						(function(i) {
							"use strict";

							function r(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							function a(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}
							function s(t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var o = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
								u = function(t, e, i) {
									for (var n = !0; n;) {
										var r = t,
											a = e,
											s = i;
										n = !1, null === r && (r = Function.prototype);
										var o = Object.getOwnPropertyDescriptor(r, a);
										if (void 0 !== o) {
											if ("value" in o) return o.value;
											var u = o.get;
											if (void 0 === u) return;
											return u.call(s)
										}
										var l = Object.getPrototypeOf(r);
										if (null === l) return;
										t = l, e = a, i = s, n = !0, o = l = void 0
									}
								}, l = t("./playlist-loader"),
								c = r(l),
								d = t("./playlist.js"),
								h = t("./segment-loader"),
								p = r(h),
								f = t("./vtt-segment-loader"),
								m = r(f),
								g = t("./ranges"),
								y = r(g),
								v = "undefined" != typeof window ? e : void 0 !== i ? i.videojs : null,
								_ = r(v),
								b = t("./ad-cue-tags"),
								T = r(b),
								S = t("./sync-controller"),
								w = r(S),
								k = t("videojs-contrib-media-sources/es5/codec-utils"),
								E = t("webworkify"),
								C = r(E),
								O = t("./decrypter-worker"),
								A = r(O),
								P = t("./config"),
								x = r(P),
								I = t("./util/codecs.js"),
								L = t("./media-groups"),
								j = void 0,
								M = {
									videoCodec: "avc1",
									videoObjectTypeIndicator: ".4d400d",
									audioProfile: "2"
								}, D = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"],
								R = function(t) {
									return this.audioSegmentLoader_[t] + this.mainSegmentLoader_[t]
								}, B = function(t) {
									return t.replace(/avc1\.(\d+)\.(\d+)/i, function(t) {
										return (0, k.translateLegacyCodecs)([t])[0]
									})
								};
							n.mapLegacyAvcCodecs_ = B;
							var N = function(t, e, i) {
								return t + "/" + e + '; codecs="' + i.filter(function(t) {
									return !!t
								}).join(", ") + '"'
							}, U = function(t) {
								return t.segments && t.segments.length && t.segments[0].map ? "mp4" : "mp2t"
							}, F = function(t) {
								var e = t.attributes || {};
								return e.CODECS ? (0, I.parseCodecs)(e.CODECS) : M
							}, H = function(t, e) {
								var i = U(e),
									n = F(e),
									r = e.attributes || {}, a = !0,
									s = !1;
								if (!e) return [];
								if (t.mediaGroups.AUDIO && r.AUDIO) {
									var o = t.mediaGroups.AUDIO[r.AUDIO];
									if (o) {
										s = !0, a = !1;
										for (var u in o) if (!o[u].uri) {
											a = !0;
											break
										}
									}
								}
								s && !n.audioProfile && (_.
								default.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"), n.audioProfile = M.audioProfile);
								var l = {};
								n.videoCodec && (l.video = "" + n.videoCodec + n.videoObjectTypeIndicator), n.audioProfile && (l.audio = "mp4a.40." + n.audioProfile);
								var c = N("audio", i, [l.audio]),
									d = N("video", i, [l.video]),
									h = N("video", i, [l.video, l.audio]);
								return s ? !a && l.video ? [d, c] : [h, c] : l.video ? [h] : [c]
							};
							n.mimeTypesForPlaylist_ = H;
							var V = function(t) {
								function e(t) {
									var i = this;
									a(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this);
									var n = t.url,
										r = t.withCredentials,
										s = t.mode,
										o = t.tech,
										l = t.bandwidth,
										d = t.externHls,
										h = t.useCueTags,
										f = t.blacklistDuration,
										g = t.enableLowInitialPlaylist;
									if (!n) throw new Error("A non-empty playlist URL is required");
									j = d, this.withCredentials = r, this.tech_ = o, this.hls_ = o.hls, this.mode_ = s, this.useCueTags_ = h, this.blacklistDuration = f, this.enableLowInitialPlaylist = g, this.useCueTags_ && (this.cueTagsTrack_ = this.tech_.addTextTrack("metadata", "ad-cues"), this.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), this.requestOptions_ = {
										withCredentials: this.withCredentials,
										timeout: null
									}, this.mediaTypes_ = (0, L.createMediaTypes)(), this.mediaSource = new _.
									default.MediaSource({
										mode: s
									}), this.mediaSource.addEventListener("sourceopen", this.handleSourceOpen_.bind(this)), this.seekable_ = _.
									default.createTimeRanges(), this.hasPlayed_ = function() {
										return !1
									}, this.syncController_ = new w.
									default (t), this.segmentMetadataTrack_ = o.addRemoteTextTrack({
										kind: "metadata",
										label: "segment-metadata"
									}, !1).track, this.decrypter_ = (0, C.
									default)(A.
									default);
									var y = {
										hls: this.hls_,
										mediaSource: this.mediaSource,
										currentTime: this.tech_.currentTime.bind(this.tech_),
										seekable: function() {
											return i.seekable()
										},
										seeking: function() {
											return i.tech_.seeking()
										},
										duration: function() {
											return i.mediaSource.duration
										},
										hasPlayed: function() {
											return i.hasPlayed_()
										},
										goalBufferLength: function() {
											return i.goalBufferLength()
										},
										bandwidth: l,
										syncController: this.syncController_,
										decrypter: this.decrypter_
									};
									this.masterPlaylistLoader_ = new c.
									default (n, this.hls_, this.withCredentials), this.setupMasterPlaylistLoaderListeners_(), this.mainSegmentLoader_ = new p.
									default (_.
									default.mergeOptions(y, {
										segmentMetadataTrack: this.segmentMetadataTrack_,
										loaderType: "main"
									}), t), this.audioSegmentLoader_ = new p.
									default (_.
									default.mergeOptions(y, {
										loaderType: "audio"
									}), t), this.subtitleSegmentLoader_ = new m.
									default (_.
									default.mergeOptions(y, {
										loaderType: "vtt"
									}), t), this.setupSegmentLoaderListeners_(), D.forEach(function(t) {
										i[t + "_"] = R.bind(i, t)
									}), this.masterPlaylistLoader_.load()
								}
								return s(e, t), o(e, [{
									key: "setupMasterPlaylistLoaderListeners_",
									value: function() {
										var t = this;
										this.masterPlaylistLoader_.on("loadedmetadata", function() {
											var e = t.masterPlaylistLoader_.media(),
												i = 1.5 * t.masterPlaylistLoader_.targetDuration * 1e3;
											(0, d.isLowestEnabledRendition)(t.masterPlaylistLoader_.master, t.masterPlaylistLoader_.media()) ? t.requestOptions_.timeout = 0 : t.requestOptions_.timeout = i, e.endList && "none" !== t.tech_.preload() && (t.mainSegmentLoader_.playlist(e, t.requestOptions_), t.mainSegmentLoader_.load()), (0, L.setupMediaGroups)({
												segmentLoaders: {
													AUDIO: t.audioSegmentLoader_,
													SUBTITLES: t.subtitleSegmentLoader_,
													main: t.mainSegmentLoader_
												},
												tech: t.tech_,
												requestOptions: t.requestOptions_,
												masterPlaylistLoader: t.masterPlaylistLoader_,
												mode: t.mode_,
												hls: t.hls_,
												master: t.master(),
												mediaTypes: t.mediaTypes_,
												blacklistCurrentPlaylist: t.blacklistCurrentPlaylist.bind(t)
											}), t.triggerPresenceUsage_(t.master(), e);
											try {
												t.setupSourceBuffers_()
											} catch (e) {
												return _.
												default.log.warn("Failed to create SourceBuffers", e), t.mediaSource.endOfStream("decode")
											}
											t.setupFirstPlay(), t.trigger("selectedinitialmedia")
										}), this.masterPlaylistLoader_.on("loadedplaylist", function() {
											var e = t.masterPlaylistLoader_.media();
											if (!e) {
												var i = void 0;
												return t.enableLowInitialPlaylist && (i = t.selectInitialPlaylist()), i || (i = t.selectPlaylist()), t.initialMedia_ = i, void t.masterPlaylistLoader_.media(t.initialMedia_)
											}
											t.useCueTags_ && t.updateAdCues_(e), t.mainSegmentLoader_.playlist(e, t.requestOptions_), t.updateDuration(), t.tech_.paused() || t.mainSegmentLoader_.load(), e.endList || function() {
												var e = function() {
													var e = t.seekable();
													0 !== e.length && t.mediaSource.addSeekableRange_(e.start(0), e.end(0))
												};
												t.duration() !== 1 / 0 ? function() {
													var i = function i() {
														t.duration() === 1 / 0 ? e() : t.tech_.one("durationchange", i)
													};
													t.tech_.one("durationchange", i)
												}() : e()
											}()
										}), this.masterPlaylistLoader_.on("error", function() {
											t.blacklistCurrentPlaylist(t.masterPlaylistLoader_.error)
										}), this.masterPlaylistLoader_.on("mediachanging", function() {
											t.mainSegmentLoader_.abort(), t.mainSegmentLoader_.pause()
										}), this.masterPlaylistLoader_.on("mediachange", function() {
											var e = t.masterPlaylistLoader_.media(),
												i = 1.5 * t.masterPlaylistLoader_.targetDuration * 1e3;
											(0, d.isLowestEnabledRendition)(t.masterPlaylistLoader_.master, t.masterPlaylistLoader_.media()) ? t.requestOptions_.timeout = 0 : t.requestOptions_.timeout = i, t.mainSegmentLoader_.playlist(e, t.requestOptions_), t.mainSegmentLoader_.load(), t.tech_.trigger({
												type: "mediachange",
												bubbles: !0
											})
										}), this.masterPlaylistLoader_.on("playlistunchanged", function() {
											var e = t.masterPlaylistLoader_.media();
											t.stuckAtPlaylistEnd_(e) && (t.blacklistCurrentPlaylist({
												message: "Playlist no longer updating."
											}), t.tech_.trigger("playliststuck"))
										}), this.masterPlaylistLoader_.on("renditiondisabled", function() {
											t.tech_.trigger({
												type: "usage",
												name: "hls-rendition-disabled"
											})
										}), this.masterPlaylistLoader_.on("renditionenabled", function() {
											t.tech_.trigger({
												type: "usage",
												name: "hls-rendition-enabled"
											})
										})
									}
								}, {
									key: "triggerPresenceUsage_",
									value: function(t, e) {
										var i = t.mediaGroups || {}, n = !0,
											r = Object.keys(i.AUDIO);
										for (var a in i.AUDIO) for (var s in i.AUDIO[a]) {
											var o = i.AUDIO[a][s];
											o.uri || (n = !1)
										}
										n && this.tech_.trigger({
											type: "usage",
											name: "hls-demuxed"
										}), Object.keys(i.SUBTITLES).length && this.tech_.trigger({
											type: "usage",
											name: "hls-webvtt"
										}), j.Playlist.isAes(e) && this.tech_.trigger({
											type: "usage",
											name: "hls-aes"
										}), j.Playlist.isFmp4(e) && this.tech_.trigger({
											type: "usage",
											name: "hls-fmp4"
										}), r.length && Object.keys(i.AUDIO[r[0]]).length > 1 && this.tech_.trigger({
											type: "usage",
											name: "hls-alternate-audio"
										}), this.useCueTags_ && this.tech_.trigger({
											type: "usage",
											name: "hls-playlist-cue-tags"
										})
									}
								}, {
									key: "setupSegmentLoaderListeners_",
									value: function() {
										var t = this;
										this.mainSegmentLoader_.on("bandwidthupdate", function() {
											var e = t.selectPlaylist(),
												i = t.masterPlaylistLoader_.media(),
												n = t.tech_.buffered(),
												r = n.length ? n.end(n.length - 1) - t.tech_.currentTime() : 0,
												a = t.bufferLowWaterLine();
											(!i.endList || t.duration() < x.
											default.MAX_BUFFER_LOW_WATER_LINE || e.attributes.BANDWIDTH < i.attributes.BANDWIDTH || r >= a) && t.masterPlaylistLoader_.media(e), t.tech_.trigger("bandwidthupdate")
										}), this.mainSegmentLoader_.on("progress", function() {
											t.trigger("progress")
										}), this.mainSegmentLoader_.on("error", function() {
											t.blacklistCurrentPlaylist(t.mainSegmentLoader_.error())
										}), this.mainSegmentLoader_.on("syncinfoupdate", function() {
											t.onSyncInfoUpdate_()
										}), this.mainSegmentLoader_.on("timestampoffset", function() {
											t.tech_.trigger({
												type: "usage",
												name: "hls-timestamp-offset"
											})
										}), this.audioSegmentLoader_.on("syncinfoupdate", function() {
											t.onSyncInfoUpdate_()
										}), this.mainSegmentLoader_.on("ended", function() {
											t.onEndOfStream()
										}), this.mainSegmentLoader_.on("earlyabort", function() {
											t.blacklistCurrentPlaylist({
												message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
											}, 120)
										}), this.mainSegmentLoader_.on("reseteverything", function() {
											t.tech_.trigger("hls-reset")
										}), this.mainSegmentLoader_.on("segmenttimemapping", function(e) {
											t.tech_.trigger({
												type: "hls-segment-time-mapping",
												mapping: e.mapping
											})
										}), this.audioSegmentLoader_.on("ended", function() {
											t.onEndOfStream()
										})
									}
								}, {
									key: "mediaSecondsLoaded_",
									value: function() {
										return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
									}
								}, {
									key: "load",
									value: function() {
										this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
									}
								}, {
									key: "fastQualityChange_",
									value: function() {
										var t = this.selectPlaylist();
										t !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(t), this.mainSegmentLoader_.resetLoader())
									}
								}, {
									key: "play",
									value: function() {
										if (!this.setupFirstPlay()) {
											this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_() && this.load();
											var t = this.tech_.seekable();
											return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < t.start(0) ? this.tech_.setCurrentTime(t.end(t.length - 1)) : void 0
										}
									}
								}, {
									key: "setupFirstPlay",
									value: function() {
										var t = this,
											e = this.masterPlaylistLoader_.media();
										if (!e || this.tech_.paused() || this.hasPlayed_()) return !1;
										if (!e.endList) {
											var i = function() {
												var e = t.seekable();
												return e.length ? _.
												default.browser.IE_VERSION && "html5" === t.mode_ && 0 === t.tech_.readyState() ? (t.tech_.one("loadedmetadata", function() {
													t.trigger("firstplay"), t.tech_.setCurrentTime(e.end(0)), t.hasPlayed_ = function() {
														return !0
													}
												}), {
													v: !1
												}) : (t.trigger("firstplay"), void t.tech_.setCurrentTime(e.end(0))) : {
													v: !1
												}
											}();
											if ("object" == typeof i) return i.v
										}
										return this.hasPlayed_ = function() {
											return !0
										}, this.load(), !0
									}
								}, {
									key: "handleSourceOpen_",
									value: function() {
										try {
											this.setupSourceBuffers_()
										} catch (t) {
											return _.
											default.log.warn("Failed to create Source Buffers", t), this.mediaSource.endOfStream("decode")
										}
										this.tech_.autoplay() && this.tech_.play(), this.trigger("sourceopen")
									}
								}, {
									key: "onEndOfStream",
									value: function() {
										var t = this.mainSegmentLoader_.ended_;
										this.mediaTypes_.AUDIO.activePlaylistLoader && (t = t && this.audioSegmentLoader_.ended_), t && this.mediaSource.endOfStream()
									}
								}, {
									key: "stuckAtPlaylistEnd_",
									value: function(t) {
										if (!this.seekable().length) return !1;
										var e = this.syncController_.getExpiredTime(t, this.mediaSource.duration);
										if (null === e) return !1;
										var i = j.Playlist.playlistEnd(t, e),
											n = this.tech_.currentTime(),
											r = this.tech_.buffered();
										if (!r.length) return i - n <= y.
										default.SAFE_TIME_DELTA;
										var a = r.end(r.length - 1);
										return a - n <= y.
										default.SAFE_TIME_DELTA && i - a <= y.
										default.SAFE_TIME_DELTA
									}
								}, {
									key: "blacklistCurrentPlaylist",
									value: function(t, e) {
										void 0 === t && (t = {});
										var i = void 0,
											n = void 0;
										if (i = t.playlist || this.masterPlaylistLoader_.media(), e = e || t.blacklistDuration || this.blacklistDuration, !i) {
											this.error = t;
											try {
												return this.mediaSource.endOfStream("network")
											} catch (t) {
												return this.trigger("error")
											}
										}
										var r = 1 === this.masterPlaylistLoader_.master.playlists.filter(d.isEnabled).length;
										return r ? (_.
										default.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."), this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(r)) : (i.excludeUntil = Date.now() + 1e3 * e, this.tech_.trigger("blacklistplaylist"), this.tech_.trigger({
											type: "usage",
											name: "hls-rendition-blacklisted"
										}), n = this.selectPlaylist(), _.
										default.log.warn("Problem encountered with the current HLS playlist." + (t.message ? " " + t.message : "") + " Switching to another playlist."), this.masterPlaylistLoader_.media(n))
									}
								}, {
									key: "pauseLoading",
									value: function() {
										this.mainSegmentLoader_.pause(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause()
									}
								}, {
									key: "setCurrentTime",
									value: function(t) {
										var e = y.
										default.findRange(this.tech_.buffered(), t);
										return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? e && e.length && "flash" !== this.mode_ ? t : (this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()), void this.load()) : 0
									}
								}, {
									key: "duration",
									value: function() {
										return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration : j.Playlist.duration(this.masterPlaylistLoader_.media()) : 0
									}
								}, {
									key: "seekable",
									value: function() {
										return this.seekable_
									}
								}, {
									key: "onSyncInfoUpdate_",
									value: function() {
										var t = void 0,
											e = void 0;
										if (this.masterPlaylistLoader_) {
											var i = this.masterPlaylistLoader_.media();
											if (i) {
												var n = this.syncController_.getExpiredTime(i, this.mediaSource.duration);
												if (null !== n && (t = j.Playlist.seekable(i, n), 0 !== t.length)) {
													if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
														if (i = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (n = this.syncController_.getExpiredTime(i, this.mediaSource.duration))) return;
														if (e = j.Playlist.seekable(i, n), 0 === e.length) return
													}
													e ? e.start(0) > t.end(0) || t.start(0) > e.end(0) ? this.seekable_ = t : this.seekable_ = _.
													default.createTimeRanges([
														[e.start(0) > t.start(0) ? e.start(0) : t.start(0), e.end(0) < t.end(0) ? e.end(0) : t.end(0)]
													]) : this.seekable_ = t, this.tech_.trigger("seekablechanged")
												}
											}
										}
									}
								}, {
									key: "updateDuration",
									value: function() {
										var t = this,
											e = this.mediaSource.duration,
											i = j.Playlist.duration(this.masterPlaylistLoader_.media()),
											n = this.tech_.buffered(),
											r = function e() {
												t.mediaSource.duration = i, t.tech_.trigger("durationchange"), t.mediaSource.removeEventListener("sourceopen", e)
											};
										n.length > 0 && (i = Math.max(i, n.end(n.length - 1))), e !== i && ("open" !== this.mediaSource.readyState ? this.mediaSource.addEventListener("sourceopen", r) : r())
									}
								}, {
									key: "dispose",
									value: function() {
										var t = this;
										this.decrypter_.terminate(), this.masterPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), ["AUDIO", "SUBTITLES"].forEach(function(e) {
											var i = t.mediaTypes_[e].groups;
											for (var n in i) i[n].forEach(function(t) {
												t.playlistLoader && t.playlistLoader.dispose()
											})
										}), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose()
									}
								}, {
									key: "master",
									value: function() {
										return this.masterPlaylistLoader_.master
									}
								}, {
									key: "media",
									value: function() {
										return this.masterPlaylistLoader_.media() || this.initialMedia_
									}
								}, {
									key: "setupSourceBuffers_",
									value: function() {
										var t = this.masterPlaylistLoader_.media(),
											e = void 0;
										if (t && "open" === this.mediaSource.readyState) {
											if (e = H(this.masterPlaylistLoader_.master, t), e.length < 1) return this.error = "No compatible SourceBuffer configuration for the variant stream:" + t.resolvedUri, this.mediaSource.endOfStream("decode");
											this.mainSegmentLoader_.mimeType(e[0]), e[1] && this.audioSegmentLoader_.mimeType(e[1]), this.excludeIncompatibleVariants_(t)
										}
									}
								}, {
									key: "excludeIncompatibleVariants_",
									value: function(t) {
										var e = this.masterPlaylistLoader_.master,
											i = 2,
											n = null,
											r = void 0;
										t.attributes.CODECS && (r = (0, I.parseCodecs)(t.attributes.CODECS), n = r.videoCodec, i = r.codecCount), e.playlists.forEach(function(t) {
											var e = {
												codecCount: 2,
												videoCodec: null
											};
											if (t.attributes.CODECS) {
												var r = t.attributes.CODECS;
												e = (0, I.parseCodecs)(r), window.MediaSource && window.MediaSource.isTypeSupported && !window.MediaSource.isTypeSupported('video/mp4; codecs="' + B(r) + '"') && (t.excludeUntil = 1 / 0)
											}
											e.codecCount !== i && (t.excludeUntil = 1 / 0), e.videoCodec !== n && (t.excludeUntil = 1 / 0)
										})
									}
								}, {
									key: "updateAdCues_",
									value: function(t) {
										var e = 0,
											i = this.seekable();
										i.length && (e = i.start(0)), T.
										default.updateAdCues(t, this.cueTagsTrack_, e)
									}
								}, {
									key: "goalBufferLength",
									value: function() {
										var t = this.tech_.currentTime(),
											e = x.
										default.GOAL_BUFFER_LENGTH, i = x.
										default.GOAL_BUFFER_LENGTH_RATE, n = Math.max(e, x.
										default.MAX_GOAL_BUFFER_LENGTH);
										return Math.min(e + t * i, n)
									}
								}, {
									key: "bufferLowWaterLine",
									value: function() {
										var t = this.tech_.currentTime(),
											e = x.
										default.BUFFER_LOW_WATER_LINE, i = x.
										default.BUFFER_LOW_WATER_LINE_RATE, n = Math.max(e, x.
										default.MAX_BUFFER_LOW_WATER_LINE);
										return Math.min(e + t * i, n)
									}
								}]), e
							}(_.
							default.EventTarget);
							n.MasterPlaylistController = V
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./ad-cue-tags": 1,
						"./config": 3,
						"./decrypter-worker": 4,
						"./media-groups": 6,
						"./playlist-loader": 9,
						"./playlist.js": 11,
						"./ranges": 12,
						"./segment-loader": 16,
						"./sync-controller": 18,
						"./util/codecs.js": 19,
						"./vtt-segment-loader": 20,
						"videojs-contrib-media-sources/es5/codec-utils": 65,
						webworkify: 76
					}],
					6: [function(t, i, n) {
						(function(i) {
							"use strict";

							function r(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var a = "undefined" != typeof window ? e : void 0 !== i ? i.videojs : null,
								s = r(a),
								o = t("./playlist-loader"),
								u = r(o),
								l = function() {}, c = function(t) {
									var e = t.
									default ? "main" : "alternative";
									return t.characteristics && t.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (e = "main-desc"), e
								}, d = function(t, e) {
									t.abort(), t.pause(), e && e.activePlaylistLoader && (e.activePlaylistLoader.pause(), e.activePlaylistLoader = null)
								};
							n.stopLoaders = d;
							var h = function(t, e) {
								e.activePlaylistLoader = t, t.load()
							};
							n.startLoaders = h;
							var p = function(t, e) {
								return function() {
									var i = e.segmentLoaders,
										n = i[t],
										r = i.main,
										a = e.mediaTypes[t],
										s = a.activeTrack(),
										o = a.activeGroup(s),
										u = a.activePlaylistLoader;
									if (d(n, a), o) {
										if (!o.playlistLoader) return void(u && r.resetEverything());
										n.resyncLoader(), h(o.playlistLoader, a)
									}
								}
							};
							n.onGroupChanged = p;
							var f = function(t, e) {
								return function() {
									var i = e.segmentLoaders,
										n = i[t],
										r = i.main,
										a = e.mediaTypes[t],
										s = a.activeTrack(),
										o = a.activeGroup(s),
										u = a.activePlaylistLoader;
									if (d(n, a), o) {
										if (!o.playlistLoader) return void r.resetEverything();
										if (u === o.playlistLoader) return void h(o.playlistLoader, a);
										n.track && n.track(s), n.resetEverything(), h(o.playlistLoader, a)
									}
								}
							};
							n.onTrackChanged = f;
							var m = {
								AUDIO: function(t, e) {
									return function() {
										var i = e.segmentLoaders[t],
											n = e.mediaTypes[t],
											r = e.blacklistCurrentPlaylist;
										d(i, n);
										var a = n.activeTrack(),
											o = n.activeGroup(),
											u = (o.filter(function(t) {
												return t.
												default
											})[0] || o[0]).id,
											l = n.tracks[u];
										if (a === l) return void r({
											message: "Problem encountered loading the default audio track."
										});
										s.
										default.log.warn("Problem encountered loading the alternate audio track.Switching back to default.");
										for (var c in n.tracks) n.tracks[c].enabled = n.tracks[c] === l;
										n.onTrackChanged()
									}
								},
								SUBTITLES: function(t, e) {
									return function() {
										var i = e.segmentLoaders[t],
											n = e.mediaTypes[t];
										s.
										default.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), d(i, n);
										var r = n.activeTrack();
										r && (r.mode = "disabled"), n.onTrackChanged()
									}
								}
							};
							n.onError = m;
							var g = {
								AUDIO: function(t, e, i) {
									if (e) {
										var n = i.tech,
											r = i.requestOptions,
											a = i.segmentLoaders[t];
										e.on("loadedmetadata", function() {
											var t = e.media();
											a.playlist(t, r), (!n.paused() || t.endList && "none" !== n.preload()) && a.load()
										}), e.on("loadedplaylist", function() {
											a.playlist(e.media(), r), n.paused() || a.load()
										}), e.on("error", m[t](t, i))
									}
								},
								SUBTITLES: function(t, e, i) {
									var n = i.tech,
										r = i.requestOptions,
										a = i.segmentLoaders[t],
										s = i.mediaTypes[t];
									e.on("loadedmetadata", function() {
										var t = e.media();
										a.playlist(t, r), a.track(s.activeTrack()), (!n.paused() || t.endList && "none" !== n.preload()) && a.load()
									}), e.on("loadedplaylist", function() {
										a.playlist(e.media(), r), n.paused() || a.load()
									}), e.on("error", m[t](t, i))
								}
							};
							n.setupListeners = g;
							var y = {
								AUDIO: function(t, e) {
									var i = e.mode,
										n = e.hls,
										r = e.segmentLoaders[t],
										a = e.requestOptions.withCredentials,
										o = e.master.mediaGroups,
										l = e.mediaTypes[t],
										d = l.groups,
										h = l.tracks;
									o[t] && 0 !== Object.keys(o[t]).length && "html5" === i || (o[t] = {
										main: {
											default: {
												default: !0
											}
										}
									});
									for (var p in o[t]) {
										d[p] || (d[p] = []);
										for (var f in o[t][p]) {
											var y = o[t][p][f],
												v = void 0;
											if (v = y.resolvedUri ? new u.
											default (y.resolvedUri, n, a) : null, y = s.
											default.mergeOptions({
												id: f,
												playlistLoader: v
											}, y), g[t](t, y.playlistLoader, e), d[p].push(y), void 0 === h[f]) {
												var _ = new s.
												default.AudioTrack({
													id: f,
													kind: c(y),
													enabled: !1,
													language: y.language,
													default: y.
													default,
													label: f
												});
												h[f] = _
											}
										}
									}
									r.on("error", m[t](t, e))
								},
								SUBTITLES: function(t, e) {
									var i = e.tech,
										n = e.hls,
										r = e.segmentLoaders[t],
										a = e.requestOptions.withCredentials,
										o = e.master.mediaGroups,
										l = e.mediaTypes[t],
										c = l.groups,
										d = l.tracks;
									for (var h in o[t]) {
										c[h] || (c[h] = []);
										for (var p in o[t][h]) if (!o[t][h][p].forced) {
											var f = o[t][h][p];
											if (f = s.
											default.mergeOptions({
												id: p,
												playlistLoader: new u.
												default (f.resolvedUri, n, a)
											}, f), g[t](t, f.playlistLoader, e), c[h].push(f), void 0 === d[p]) {
												var y = i.addRemoteTextTrack({
													id: p,
													kind: "subtitles",
													enabled: !1,
													language: f.language,
													label: p
												}, !1).track;
												d[p] = y
											}
										}
									}
									r.on("error", m[t](t, e))
								},
								"CLOSED-CAPTIONS": function(t, e) {
									var i = e.tech,
										n = e.master.mediaGroups,
										r = e.mediaTypes[t],
										a = r.groups,
										o = r.tracks;
									for (var u in n[t]) {
										a[u] || (a[u] = []);
										for (var l in n[t][u]) {
											var c = n[t][u][l];
											if (c.instreamId.match(/CC\d/) && (a[u].push(s.
											default.mergeOptions({
												id: l
											}, c)), void 0 === o[l])) {
												var d = i.addRemoteTextTrack({
													id: c.instreamId,
													kind: "captions",
													enabled: !1,
													language: c.language,
													label: l
												}, !1).track;
												o[l] = d
											}
										}
									}
								}
							};
							n.initialize = y;
							var v = function(t, e) {
								return function(i) {
									var n = e.masterPlaylistLoader,
										r = e.mediaTypes[t].groups,
										a = n.media();
									if (!a) return null;
									var s = null;
									return a.attributes[t] && (s = r[a.attributes[t]]), s = s || r.main, void 0 === i ? s : null === i ? null : s.filter(function(t) {
										return t.id === i.id
									})[0] || null
								}
							};
							n.activeGroup = v;
							var _ = {
								AUDIO: function(t, e) {
									return function() {
										var i = e.mediaTypes[t].tracks;
										for (var n in i) if (i[n].enabled) return i[n];
										return null
									}
								},
								SUBTITLES: function(t, e) {
									return function() {
										var i = e.mediaTypes[t].tracks;
										for (var n in i) if ("showing" === i[n].mode) return i[n];
										return null
									}
								}
							};
							n.activeTrack = _;
							var b = function(t) {
								["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(e) {
									y[e](e, t)
								});
								var e = t.mediaTypes,
									i = t.masterPlaylistLoader,
									n = t.tech,
									r = t.hls;
								["AUDIO", "SUBTITLES"].forEach(function(i) {
									e[i].activeGroup = v(i, t), e[i].activeTrack = _[i](i, t), e[i].onGroupChanged = p(i, t), e[i].onTrackChanged = f(i, t)
								});
								var a = e.AUDIO.activeGroup(),
									s = (a.filter(function(t) {
										return t.
										default
									})[0] || a[0]).id;
								e.AUDIO.tracks[s].enabled = !0, e.AUDIO.onTrackChanged(), i.on("mediachange", function() {
									["AUDIO", "SUBTITLES"].forEach(function(t) {
										return e[t].onGroupChanged()
									})
								});
								var o = function() {
									e.AUDIO.onTrackChanged(), n.trigger({
										type: "usage",
										name: "hls-audio-change"
									})
								};
								n.audioTracks().addEventListener("change", o), n.remoteTextTracks().addEventListener("change", e.SUBTITLES.onTrackChanged), r.on("dispose", function() {
									n.audioTracks().removeEventListener("change", o), n.remoteTextTracks().removeEventListener("change", e.SUBTITLES.onTrackChanged)
								}), n.clearTracks("audio");
								for (var u in e.AUDIO.tracks) n.audioTracks().addTrack(e.AUDIO.tracks[u])
							};
							n.setupMediaGroups = b;
							var T = function() {
								var t = {};
								return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(e) {
									t[e] = {
										groups: {},
										tracks: {},
										activePlaylistLoader: null,
										activeGroup: l,
										activeTrack: l,
										onGroupChanged: l,
										onTrackChanged: l
									}
								}), t
							};
							n.createMediaTypes = T
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./playlist-loader": 9
					}],
					7: [function(t, i, n) {
						(function(i) {
							"use strict";
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var r = "undefined" != typeof window ? e : void 0 !== i ? i.videojs : null,
								a = function(t) {
									return t && t.__esModule ? t : {
										default: t
									}
								}(r),
								s = t("./bin-utils"),
								o = {
									FAILURE: 2,
									TIMEOUT: -101,
									ABORTED: -102
								};
							n.REQUEST_ERRORS = o;
							var u = function(t) {
								var e = void 0;
								return e = t.offset + t.length - 1, "bytes=" + t.offset + "-" + e
							}, l = function(t) {
								var e = {};
								return t.byterange && (e.Range = u(t.byterange)), e
							}, c = function(t) {
								t.forEach(function(t) {
									t.abort()
								})
							}, d = function(t) {
								return {
									bandwidth: t.bandwidth,
									bytesReceived: t.bytesReceived || 0,
									roundTripTime: t.roundTripTime || 0
								}
							}, h = function(t) {
								var e = t.target,
									i = Date.now() - e.requestTime,
									n = {
										bandwidth: 1 / 0,
										bytesReceived: 0,
										roundTripTime: i || 0
									};
								return n.bytesReceived = t.loaded, n.bandwidth = Math.floor(n.bytesReceived / n.roundTripTime * 8 * 1e3), n
							}, p = function(t, e) {
								return e.timedout ? {
									status: e.status,
									message: "HLS request timed-out at URL: " + e.uri,
									code: o.TIMEOUT,
									xhr: e
								} : e.aborted ? {
									status: e.status,
									message: "HLS request aborted at URL: " + e.uri,
									code: o.ABORTED,
									xhr: e
								} : t ? {
									status: e.status,
									message: "HLS request errored at URL: " + e.uri,
									code: o.FAILURE,
									xhr: e
								} : null
							}, f = function(t, e) {
								return function(i, n) {
									var r = n.response,
										a = p(i, n);
									if (a) return e(a, t);
									if (16 !== r.byteLength) return e({
										status: n.status,
										message: "Invalid HLS key at URL: " + n.uri,
										code: o.FAILURE,
										xhr: n
									}, t);
									var s = new DataView(r);
									return t.key.bytes = new Uint32Array([s.getUint32(0), s.getUint32(4), s.getUint32(8), s.getUint32(12)]), e(null, t)
								}
							}, m = function(t, e) {
								return function(i, n) {
									var r = n.response,
										a = p(i, n);
									return a ? e(a, t) : 0 === r.byteLength ? e({
										status: n.status,
										message: "Empty HLS segment content at URL: " + n.uri,
										code: o.FAILURE,
										xhr: n
									}, t) : (t.map.bytes = new Uint8Array(n.response), e(null, t))
								}
							}, g = function(t, e) {
								return function(i, n) {
									var r = n.response,
										a = p(i, n);
									return a ? e(a, t) : 0 === r.byteLength ? e({
										status: n.status,
										message: "Empty HLS segment content at URL: " + n.uri,
										code: o.FAILURE,
										xhr: n
									}, t) : (t.stats = d(n), t.key ? t.encryptedBytes = new Uint8Array(n.response) : t.bytes = new Uint8Array(n.response), e(null, t))
								}
							}, y = function(t, e, i) {
								var n = function n(r) {
									if (r.data.source === e.requestId) {
										t.removeEventListener("message", n);
										var a = r.data.decrypted;
										return e.bytes = new Uint8Array(a.bytes, a.byteOffset, a.byteLength), i(null, e)
									}
								};
								t.addEventListener("message", n), t.postMessage((0, s.createTransferableMessage)({
									source: e.requestId,
									encrypted: e.encryptedBytes,
									key: e.key.bytes,
									iv: e.key.iv
								}), [e.encryptedBytes.buffer, e.key.bytes.buffer])
							}, v = function(t) {
								return t.reduce(function(t, e) {
									return e.code > t.code ? e : t
								})
							}, _ = function(t, e, i) {
								var n = [],
									r = 0;
								return function(a, s) {
									if (a && (c(t), n.push(a)), (r += 1) === t.length) {
										if (s.endOfAllRequests = Date.now(), n.length > 0) {
											var o = v(n);
											return i(o, s)
										}
										return s.encryptedBytes ? y(e, s, i) : i(null, s)
									}
								}
							}, b = function(t, e) {
								return function(i) {
									return t.stats = a.
									default.mergeOptions(t.stats, h(i)), !t.stats.firstBytesReceivedAt && t.stats.bytesReceived && (t.stats.firstBytesReceivedAt = Date.now()), e(i, t)
								}
							}, T = function(t, e, i, n, r, s) {
								var o = [],
									u = _(o, i, s);
								if (n.key) {
									var d = a.
									default.mergeOptions(e, {
										uri: n.key.resolvedUri,
										responseType: "arraybuffer"
									}), h = f(n, u), p = t(d, h);
									o.push(p)
								}
								if (n.map && !n.map.bytes) {
									var y = a.
									default.mergeOptions(e, {
										uri: n.map.resolvedUri,
										responseType: "arraybuffer",
										headers: l(n.map)
									}), v = m(n, u), T = t(y, v);
									o.push(T)
								}
								var S = a.
								default.mergeOptions(e, {
									uri: n.resolvedUri,
									responseType: "arraybuffer",
									headers: l(n)
								}), w = g(n, u), k = t(S, w);
								return k.addEventListener("progress", b(n, r)), o.push(k),
								function() {
									return c(o)
								}
							};
							n.mediaSegmentRequest = T
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./bin-utils": 2
					}],
					8: [function(t, i, n) {
						(function(r) {
							"use strict";

							function a(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							function s(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var o = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
								u = t("global/window"),
								l = a(u),
								c = t("./ranges"),
								d = a(c),
								h = "undefined" != typeof window ? e : void 0 !== r ? r.videojs : null,
								p = a(h),
								f = ["seeking", "seeked", "pause", "playing", "error"],
								m = function() {
									function t(e) {
										var i = this;
										s(this, t), this.tech_ = e.tech, this.seekable = e.seekable, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.timer_ = null, this.checkCurrentTimeTimeout_ = null, e.debug && (this.logger_ = p.
										default.log.bind(p.
										default, "playback-watcher ->")), this.logger_("initialize");
										var n = function() {
											return i.monitorCurrentTime_()
										}, r = function() {
											return i.techWaiting_()
										}, a = function() {
											return i.cancelTimer_()
										}, o = function() {
											return i.fixesBadSeeks_()
										};
										this.tech_.on("seekablechanged", o), this.tech_.on("waiting", r), this.tech_.on(f, a), this.tech_.on("canplay", n), this.dispose = function() {
											i.logger_("dispose"), i.tech_.off("seekablechanged", o), i.tech_.off("waiting", r), i.tech_.off(f, a), i.tech_.off("canplay", n), i.checkCurrentTimeTimeout_ && l.
											default.clearTimeout(i.checkCurrentTimeTimeout_), i.cancelTimer_()
										}
									}
									return o(t, [{
										key: "monitorCurrentTime_",
										value: function() {
											this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && l.
											default.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = l.
											default.setTimeout(this.monitorCurrentTime_.bind(this), 250)
										}
									}, {
										key: "checkCurrentTime_",
										value: function() {
											if (this.tech_.seeking() && this.fixesBadSeeks_()) return this.consecutiveUpdates = 0, void(this.lastRecordedTime = this.tech_.currentTime());
											if (!this.tech_.paused() && !this.tech_.seeking()) {
												var t = this.tech_.currentTime(),
													e = this.tech_.buffered();
												if (this.lastRecordedTime === t && (!e.length || t + d.
												default.SAFE_TIME_DELTA >= e.end(e.length - 1))) return this.techWaiting_();
												this.consecutiveUpdates >= 5 && t === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : t === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = t)
											}
										}
									}, {
										key: "cancelTimer_",
										value: function() {
											this.consecutiveUpdates = 0, this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)), this.timer_ = null
										}
									}, {
										key: "fixesBadSeeks_",
										value: function() {
											var t = this.tech_.seeking(),
												e = this.seekable(),
												i = this.tech_.currentTime(),
												n = void 0;
											if (t && this.afterSeekableWindow_(e, i)) {
												n = e.end(e.length - 1)
											}
											if (t && this.beforeSeekableWindow_(e, i)) {
												n = e.start(0) + d.
												default.SAFE_TIME_DELTA
											}
											return void 0 !== n && (this.logger_("Trying to seek outside of seekable at time " + i + " with seekable range " + d.
											default.printableRange(e) + ". Seeking to " + n + "."), this.tech_.setCurrentTime(n), !0)
										}
									}, {
										key: "waiting_",
										value: function() {
											if (!this.techWaiting_()) {
												var t = this.tech_.currentTime(),
													e = this.tech_.buffered(),
													i = d.
												default.findRange(e, t);
												return i.length && t + 3 <= i.end(0) ? (this.cancelTimer_(), this.tech_.setCurrentTime(t), this.logger_("Stopped at " + t + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."), void this.tech_.trigger({
													type: "usage",
													name: "hls-unknown-waiting"
												})) : void 0
											}
										}
									}, {
										key: "techWaiting_",
										value: function() {
											var t = this.seekable(),
												e = this.tech_.currentTime();
											if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0;
											if (this.tech_.seeking() || null !== this.timer_) return !0;
											if (this.beforeSeekableWindow_(t, e)) {
												var i = t.end(t.length - 1);
												return this.logger_("Fell out of live window at time " + e + ". Seeking to live point (seekable end) " + i), this.cancelTimer_(), this.tech_.setCurrentTime(i), this.tech_.trigger({
													type: "usage",
													name: "hls-live-resync"
												}), !0
											}
											var n = this.tech_.buffered(),
												r = d.
											default.findNextRange(n, e);
											if (this.videoUnderflow_(r, n, e)) return this.cancelTimer_(), this.tech_.setCurrentTime(e), this.tech_.trigger({
												type: "usage",
												name: "hls-video-underflow"
											}), !0;
											if (r.length > 0) {
												var a = r.start(0) - e;
												return this.logger_("Stopped at " + e + ", setting timer for " + a + ", seeking to " + r.start(0)), this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * a, e), !0
											}
											return !1
										}
									}, {
										key: "afterSeekableWindow_",
										value: function(t, e) {
											return !!t.length && e > t.end(t.length - 1) + d.
											default.SAFE_TIME_DELTA
										}
									}, {
										key: "beforeSeekableWindow_",
										value: function(t, e) {
											return !!(t.length && t.start(0) > 0 && e < t.start(0) - d.
											default.SAFE_TIME_DELTA)
										}
									}, {
										key: "videoUnderflow_",
										value: function(t, e, i) {
											if (0 === t.length) {
												var n = this.gapFromVideoUnderflow_(e, i);
												if (n) return this.logger_("Encountered a gap in video from " + n.start + " to " + n.end + ". Seeking to current time " + i), !0
											}
											return !1
										}
									}, {
										key: "skipTheGap_",
										value: function(t) {
											var e = this.tech_.buffered(),
												i = this.tech_.currentTime(),
												n = d.
											default.findNextRange(e, i);
											this.cancelTimer_(), 0 !== n.length && i === t && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", t, "nextRange start:", n.start(0)), this.tech_.setCurrentTime(n.start(0) + d.
											default.TIME_FUDGE_FACTOR), this.tech_.trigger({
												type: "usage",
												name: "hls-gap-skip"
											}))
										}
									}, {
										key: "gapFromVideoUnderflow_",
										value: function(t, e) {
											for (var i = d.
											default.findGaps(t), n = 0; n < i.length; n++) {
												var r = i.start(n),
													a = i.end(n);
												if (e - r < 4 && e - r > 2) return {
													start: r,
													end: a
												}
											}
											return null
										}
									}, {
										key: "logger_",
										value: function() {}
									}]), t
								}();
							n.
							default = m, i.exports = n.
							default
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./ranges": 12,
						"global/window": 32
					}],
					9: [function(t, i, n) {
						(function(i) {
							"use strict";

							function r(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							function a(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}
							function s(t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var o = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
								u = function(t, e, i) {
									for (var n = !0; n;) {
										var r = t,
											a = e,
											s = i;
										n = !1, null === r && (r = Function.prototype);
										var o = Object.getOwnPropertyDescriptor(r, a);
										if (void 0 !== o) {
											if ("value" in o) return o.value;
											var u = o.get;
											if (void 0 === u) return;
											return u.call(s)
										}
										var l = Object.getPrototypeOf(r);
										if (null === l) return;
										t = l, e = a, i = s, n = !0, o = l = void 0
									}
								}, l = t("./resolve-url"),
								c = r(l),
								d = "undefined" != typeof window ? e : void 0 !== i ? i.videojs : null,
								h = t("m3u8-parser"),
								p = r(h),
								f = t("global/window"),
								m = r(f),
								g = function(t, e, i) {
									var n = e.slice();
									i = i || 0;
									for (var r = Math.min(t.length, e.length + i), a = i; a < r; a++) n[a - i] = (0, d.mergeOptions)(t[a], n[a - i]);
									return n
								};
							n.updateSegments = g;
							var y = function(t, e) {
								t.resolvedUri || (t.resolvedUri = (0, c.
								default)(e, t.uri)), t.key && !t.key.resolvedUri && (t.key.resolvedUri = (0, c.
								default)(e, t.key.uri)), t.map && !t.map.resolvedUri && (t.map.resolvedUri = (0, c.
								default)(e, t.map.uri))
							};
							n.resolveSegmentUris = y;
							var v = function(t, e) {
								var i = (0, d.mergeOptions)(t, {}),
									n = i.playlists.filter(function(t) {
										return t.uri === e.uri
									})[0];
								if (!n) return null;
								if (n.segments && e.segments && n.segments.length === e.segments.length && n.mediaSequence === e.mediaSequence) return null;
								var r = (0, d.mergeOptions)(n, e);
								n.segments && (r.segments = g(n.segments, e.segments, e.mediaSequence - n.mediaSequence)), r.segments.forEach(function(t) {
									y(t, r.resolvedUri)
								});
								for (var a = 0; a < i.playlists.length; a++) i.playlists[a].uri === e.uri && (i.playlists[a] = r);
								return i.playlists[e.uri] = r, i
							};
							n.updateMaster = v;
							var _ = function(t) {
								for (var e = t.playlists.length; e--;) {
									var i = t.playlists[e];
									t.playlists[i.uri] = i, i.resolvedUri = (0, c.
									default)(t.uri, i.uri), i.attributes || (i.attributes = {}, d.log.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))
								}
							};
							n.setupMediaPlaylists = _;
							var b = function(t) {
								["AUDIO", "SUBTITLES"].forEach(function(e) {
									for (var i in t.mediaGroups[e]) for (var n in t.mediaGroups[e][i]) {
										var r = t.mediaGroups[e][i][n];
										r.uri && (r.resolvedUri = (0, c.
										default)(t.uri, r.uri))
									}
								})
							};
							n.resolveMediaGroupUris = b;
							var T = function(t, e) {
								var i = t.segments[t.segments.length - 1];
								return e && i && i.duration ? 1e3 * i.duration : 500 * (t.targetDuration || 10)
							};
							n.refreshDelay = T;
							var S = function(t) {
								function e(t, i, n) {
									var r = this;
									if (a(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.srcUrl = t, this.hls_ = i, this.withCredentials = n, !this.srcUrl) throw new Error("A non-empty playlist URL is required");
									this.state = "HAVE_NOTHING", this.on("mediaupdatetimeout", function() {
										"HAVE_METADATA" === r.state && (r.state = "HAVE_CURRENT_METADATA", r.request = r.hls_.xhr({
											uri: (0, c.
											default)(r.master.uri, r.media().uri),
											withCredentials: r.withCredentials
										}, function(t, e) {
											if (r.request) return t ? r.playlistRequestError(r.request, r.media().uri, "HAVE_METADATA") : void r.haveMetadata(r.request, r.media().uri)
										}))
									})
								}
								return s(e, t), o(e, [{
									key: "playlistRequestError",
									value: function(t, e, i) {
										this.request = null, i && (this.state = i), this.error = {
											playlist: this.master.playlists[e],
											status: t.status,
											message: "HLS playlist request error at URL: " + e,
											responseText: t.responseText,
											code: t.status >= 500 ? 4 : 2
										}, this.trigger("error")
									}
								}, {
									key: "haveMetadata",
									value: function(t, e) {
										var i = this;
										this.request = null, this.state = "HAVE_METADATA";
										var n = new p.
										default.Parser;
										n.push(t.responseText), n.end(), n.manifest.uri = e, n.manifest.attributes = n.manifest.attributes || {};
										var r = v(this.master, n.manifest);
										this.targetDuration = n.manifest.targetDuration, r ? (this.master = r, this.media_ = this.master.playlists[n.manifest.uri]) : this.trigger("playlistunchanged"), this.media().endList || (m.
										default.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = m.
										default.setTimeout(function() {
											i.trigger("mediaupdatetimeout")
										}, T(this.media(), !! r))), this.trigger("loadedplaylist")
									}
								}, {
									key: "dispose",
									value: function() {
										this.stopRequest(), m.
										default.clearTimeout(this.mediaUpdateTimeout)
									}
								}, {
									key: "stopRequest",
									value: function() {
										if (this.request) {
											var t = this.request;
											this.request = null, t.onreadystatechange = null, t.abort()
										}
									}
								}, {
									key: "media",
									value: function(t) {
										var e = this;
										if (!t) return this.media_;
										if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
										var i = this.state;
										if ("string" == typeof t) {
											if (!this.master.playlists[t]) throw new Error("Unknown playlist URI: " + t);
											t = this.master.playlists[t]
										}
										var n = !this.media_ || t.uri !== this.media_.uri;
										if (this.master.playlists[t.uri].endList) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = t, void(n && (this.trigger("mediachanging"), this.trigger("mediachange")));
										if (n) {
											if (this.state = "SWITCHING_MEDIA", this.request) {
												if ((0, c.
												default)(this.master.uri, t.uri) === this.request.url) return;
												this.request.onreadystatechange = null, this.request.abort(), this.request = null
											}
											this.media_ && this.trigger("mediachanging"), this.request = this.hls_.xhr({
												uri: (0, c.
												default)(this.master.uri, t.uri),
												withCredentials: this.withCredentials
											}, function(n, r) {
												if (e.request) {
													if (n) return e.playlistRequestError(e.request, t.uri, i);
													e.haveMetadata(r, t.uri), "HAVE_MASTER" === i ? e.trigger("loadedmetadata") : e.trigger("mediachange")
												}
											})
										}
									}
								}, {
									key: "pause",
									value: function() {
										this.stopRequest(), m.
										default.clearTimeout(this.mediaUpdateTimeout), "HAVE_NOTHING" === this.state && (this.started = !1), "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
									}
								}, {
									key: "load",
									value: function(t) {
										var e = this;
										m.
										default.clearTimeout(this.mediaUpdateTimeout);
										var i = this.media();
										if (t) {
											var n = i ? i.targetDuration / 2 * 1e3 : 5e3;
											return void(this.mediaUpdateTimeout = m.
											default.setTimeout(function() {
												return e.load()
											}, n))
										}
										if (!this.started) return void this.start();
										i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist")
									}
								}, {
									key: "start",
									value: function() {
										var t = this;
										this.started = !0, this.request = this.hls_.xhr({
											uri: this.srcUrl,
											withCredentials: this.withCredentials
										}, function(e, i) {
											if (t.request) {
												if (t.request = null, e) return t.error = {
													status: i.status,
													message: "HLS playlist request error at URL: " + t.srcUrl,
													responseText: i.responseText,
													code: 2
												}, "HAVE_NOTHING" === t.state && (t.started = !1), t.trigger("error");
												var n = new p.
												default.Parser;
												return n.push(i.responseText), (n.end(), t.state = "HAVE_MASTER", n.manifest.uri = t.srcUrl, n.manifest.playlists) ? (t.master = n.manifest, _(t.master), b(t.master), t.trigger("loadedplaylist"), void(t.request || t.media(n.manifest.playlists[0]))) : (t.master = {
													mediaGroups: {
														AUDIO: {},
														VIDEO: {},
														"CLOSED-CAPTIONS": {},
														SUBTITLES: {}
													},
													uri: m.
													default.location.href,
													playlists: [{
														uri: t.srcUrl
													}]
												}, t.master.playlists[t.srcUrl] = t.master.playlists[0], t.master.playlists[0].resolvedUri = t.srcUrl, t.master.playlists[0].attributes = t.master.playlists[0].attributes || {}, t.haveMetadata(i, t.srcUrl), t.trigger("loadedmetadata"))
											}
										})
									}
								}]), e
							}(d.EventTarget);
							n.
							default = S
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./resolve-url": 15,
						"global/window": 32,
						"m3u8-parser": 33
					}],
					10: [function(t, e, i) {
						"use strict";

						function n(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var r = t("./config"),
							a = n(r),
							s = t("./playlist"),
							o = n(s),
							u = t("./util/codecs.js"),
							l = function(t, e) {
								var i = void 0;
								return t ? (i = window.getComputedStyle(t), i ? i[e] : "") : ""
							}, c = function(t, e) {
								var i = t.slice();
								t.sort(function(t, n) {
									var r = e(t, n);
									return 0 === r ? i.indexOf(t) - i.indexOf(n) : r
								})
							}, d = function(t, e) {
								var i = void 0,
									n = void 0;
								return t.attributes.BANDWIDTH && (i = t.attributes.BANDWIDTH), i = i || window.Number.MAX_VALUE, e.attributes.BANDWIDTH && (n = e.attributes.BANDWIDTH), n = n || window.Number.MAX_VALUE, i - n
							};
						i.comparePlaylistBandwidth = d;
						var h = function(t, e) {
							var i = void 0,
								n = void 0;
							return t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (i = t.attributes.RESOLUTION.width), i = i || window.Number.MAX_VALUE, e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (n = e.attributes.RESOLUTION.width), n = n || window.Number.MAX_VALUE, i === n && t.attributes.BANDWIDTH && e.attributes.BANDWIDTH ? t.attributes.BANDWIDTH - e.attributes.BANDWIDTH : i - n
						};
						i.comparePlaylistResolution = h;
						var p = function(t, e, i, n) {
							var r = t.playlists.map(function(t) {
								var e = void 0,
									i = void 0,
									n = void 0;
								return e = t.attributes.RESOLUTION && t.attributes.RESOLUTION.width, i = t.attributes.RESOLUTION && t.attributes.RESOLUTION.height, n = t.attributes.BANDWIDTH, n = n || window.Number.MAX_VALUE, {
									bandwidth: n,
									width: e,
									height: i,
									playlist: t
								}
							});
							c(r, function(t, e) {
								return t.bandwidth - e.bandwidth
							}), r = r.filter(function(t) {
								return !o.
								default.isIncompatible(t.playlist)
							});
							var s = r.filter(function(t) {
								return o.
								default.isEnabled(t.playlist)
							});
							s.length || (s = r.filter(function(t) {
								return !o.
								default.isDisabled(t.playlist)
							}));
							var u = s.filter(function(t) {
								return t.bandwidth * a.
								default.BANDWIDTH_VARIANCE < e
							}),
								l = u[u.length - 1],
								d = u.filter(function(t) {
									return t.bandwidth === l.bandwidth
								})[0],
								h = u.filter(function(t) {
									return t.width && t.height
								});
							c(h, function(t, e) {
								return t.width - e.width
							});
							var p = h.filter(function(t) {
								return t.width === i && t.height === n
							});
							l = p[p.length - 1];
							var f = p.filter(function(t) {
								return t.bandwidth === l.bandwidth
							})[0],
								m = void 0,
								g = void 0,
								y = void 0;
							f || (m = h.filter(function(t) {
								return t.width > i || t.height > n
							}), g = m.filter(function(t) {
								return t.width === m[0].width && t.height === m[0].height
							}), l = g[g.length - 1], y = g.filter(function(t) {
								return t.bandwidth === l.bandwidth
							})[0]);
							var v = y || f || d || s[0] || r[0];
							return v ? v.playlist : null
						};
						i.simpleSelector = p;
						var f = function() {
							return p(this.playlists.master, this.systemBandwidth, parseInt(l(this.tech_.el(), "width"), 10), parseInt(l(this.tech_.el(), "height"), 10))
						};
						i.lastBandwidthSelector = f;
						var m = function(t) {
							var e = -1;
							if (t < 0 || t > 1) throw new Error("Moving average bandwidth decay must be between 0 and 1.");
							return function() {
								return e < 0 && (e = this.systemBandwidth), e = t * this.systemBandwidth + (1 - t) * e, p(this.playlists.master, e, parseInt(l(this.tech_.el(), "width"), 10), parseInt(l(this.tech_.el(), "height"), 10))
							}
						};
						i.movingAverageBandwidthSelector = m;
						var g = function(t) {
							var e = t.master,
								i = t.currentTime,
								n = t.bandwidth,
								r = t.duration,
								a = t.segmentDuration,
								s = t.timeUntilRebuffer,
								u = t.currentTimeline,
								l = t.syncController,
								h = e.playlists.filter(function(t) {
									return !o.
									default.isIncompatible(t)
								}),
								p = h.filter(o.
								default.isEnabled);
							p.length || (p = h.filter(function(t) {
								return !o.
								default.isDisabled(t)
							}));
							var f = p.filter(o.
							default.hasAttribute.bind(null, "BANDWIDTH")),
								m = f.map(function(t) {
									var e = l.getSyncPoint(t, r, u, i),
										c = e ? 1 : 2;
									return {
										playlist: t,
										rebufferingImpact: o.
										default.estimateSegmentRequestTime(a, n, t) * c - s
									}
								}),
								g = m.filter(function(t) {
									return t.rebufferingImpact <= 0
								});
							return c(g, function(t, e) {
								return d(e.playlist, t.playlist)
							}), g.length ? g[0] : (c(m, function(t, e) {
								return t.rebufferingImpact - e.rebufferingImpact
							}), m[0] || null)
						};
						i.minRebufferMaxBandwidthSelector = g;
						var y = function() {
							var t = this.playlists.master.playlists.filter(o.
							default.isEnabled);
							return c(t, function(t, e) {
								return d(t, e)
							}), t.filter(function(t) {
								return (0, u.parseCodecs)(t.attributes.CODECS).videoCodec
							})[0] || null
						};
						i.lowestBitrateCompatibleVariantSelector = y
					}, {
						"./config": 3,
						"./playlist": 11,
						"./util/codecs.js": 19
					}],
					11: [function(t, i, n) {
						(function(i) {
							"use strict";
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var r = "undefined" != typeof window ? e : void 0 !== i ? i.videojs : null,
								a = t("global/window"),
								s = function(t) {
									return t && t.__esModule ? t : {
										default: t
									}
								}(a),
								o = function(t, e) {
									var i = 0,
										n = e - t.mediaSequence,
										r = t.segments[n];
									if (r) {
										if (void 0 !== r.start) return {
											result: r.start,
											precise: !0
										};
										if (void 0 !== r.end) return {
											result: r.end - r.duration,
											precise: !0
										}
									}
									for (; n--;) {
										if (r = t.segments[n], void 0 !== r.end) return {
											result: i + r.end,
											precise: !0
										};
										if (i += r.duration, void 0 !== r.start) return {
											result: i + r.start,
											precise: !0
										}
									}
									return {
										result: i,
										precise: !1
									}
								}, u = function(t, e) {
									for (var i = 0, n = void 0, r = e - t.mediaSequence; r < t.segments.length; r++) {
										if (n = t.segments[r], void 0 !== n.start) return {
											result: n.start - i,
											precise: !0
										};
										if (i += n.duration, void 0 !== n.end) return {
											result: n.end - i,
											precise: !0
										}
									}
									return {
										result: -1,
										precise: !1
									}
								}, l = function(t, e, i) {
									var n = void 0,
										r = void 0;
									return void 0 === e && (e = t.mediaSequence + t.segments.length), e < t.mediaSequence ? 0 : (n = o(t, e), n.precise ? n.result : (r = u(t, e), r.precise ? r.result : n.result + i))
								}, c = function(t, e, i) {
									if (!t) return 0;
									if ("number" != typeof i && (i = 0), void 0 === e) {
										if (t.totalDuration) return t.totalDuration;
										if (!t.endList) return s.
										default.Infinity
									}
									return l(t, e, i)
								};
							n.duration = c;
							var d = function(t, e, i) {
								var n = 0;
								if (e > i) {
									var r = [i, e];
									e = r[0], i = r[1]
								}
								if (e < 0) {
									for (var a = e; a < Math.min(0, i); a++) n += t.targetDuration;
									e = 0
								}
								for (var a = e; a < i; a++) n += t.segments[a].duration;
								return n
							};
							n.sumDurations = d;
							var h = function(t) {
								if (!t.segments.length) return 0;
								for (var e = t.segments.length - 1, i = t.segments[e].duration || t.targetDuration, n = i + 2 * t.targetDuration; e-- && !((i += t.segments[e].duration) >= n););
								return Math.max(0, e)
							};
							n.safeLiveIndex = h;
							var p = function(t, e, i) {
								if (!t || !t.segments) return null;
								if (t.endList) return c(t);
								if (null === e) return null;
								e = e || 0;
								var n = i ? h(t) : t.segments.length;
								return l(t, t.mediaSequence + n, e)
							};
							n.playlistEnd = p;
							var f = function(t, e) {
								var i = e || 0,
									n = p(t, e, !0);
								return null === n ? (0, r.createTimeRange)() : (0, r.createTimeRange)(i, n)
							};
							n.seekable = f;
							var m = function(t) {
								return t - Math.floor(t) == 0
							}, g = function(t, e) {
								if (m(e)) return e + .1 * t;
								for (var i = e.toString().split(".")[1].length, n = 1; n <= i; n++) {
									var r = Math.pow(10, n),
										a = e * r;
									if (m(a) || n === i) return (a + t) / r
								}
							}, y = g.bind(null, 1),
								v = g.bind(null, -1),
								_ = function(t, e, i, n) {
									var r = void 0,
										a = void 0,
										s = t.segments.length,
										o = e - n;
									if (o < 0) {
										if (i > 0) for (r = i - 1; r >= 0; r--) if (a = t.segments[r], (o += v(a.duration)) > 0) return {
											mediaIndex: r,
											startTime: n - d(t, i, r)
										};
										return {
											mediaIndex: 0,
											startTime: e
										}
									}
									if (i < 0) {
										for (r = i; r < 0; r++) if ((o -= t.targetDuration) < 0) return {
											mediaIndex: 0,
											startTime: e
										};
										i = 0
									}
									for (r = i; r < s; r++) if (a = t.segments[r], (o -= y(a.duration)) < 0) return {
										mediaIndex: r,
										startTime: n + d(t, i, r)
									};
									return {
										mediaIndex: s - 1,
										startTime: e
									}
								};
							n.getMediaInfoForTime = _;
							var b = function(t) {
								return t.excludeUntil && t.excludeUntil > Date.now()
							};
							n.isBlacklisted = b;
							var T = function(t) {
								return t.excludeUntil && t.excludeUntil === 1 / 0
							};
							n.isIncompatible = T;
							var S = function(t) {
								var e = b(t);
								return !t.disabled && !e
							};
							n.isEnabled = S;
							var w = function(t) {
								return t.disabled
							};
							n.isDisabled = w;
							var k = function(t) {
								for (var e = 0; e < t.segments.length; e++) if (t.segments[e].key) return !0;
								return !1
							};
							n.isAes = k;
							var E = function(t) {
								for (var e = 0; e < t.segments.length; e++) if (t.segments[e].map) return !0;
								return !1
							};
							n.isFmp4 = E;
							var C = function(t, e) {
								return e.attributes && e.attributes[t]
							};
							n.hasAttribute = C;
							var O = function(t, e, i) {
								var n = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3];
								return C("BANDWIDTH", i) ? (t * i.attributes.BANDWIDTH - 8 * n) / e : NaN
							};
							n.estimateSegmentRequestTime = O;
							var A = function(t, e) {
								if (1 === t.playlists.length) return !0;
								var i = e.attributes.BANDWIDTH || Number.MAX_VALUE;
								return 0 === t.playlists.filter(function(t) {
									return !!S(t) && (t.attributes.BANDWIDTH || 0) < i
								}).length
							};
							n.isLowestEnabledRendition = A, n.
							default = {
								duration: c,
								seekable: f,
								safeLiveIndex: h,
								getMediaInfoForTime: _,
								isEnabled: S,
								isDisabled: w,
								isBlacklisted: b,
								isIncompatible: T,
								playlistEnd: p,
								isAes: k,
								isFmp4: E,
								hasAttribute: C,
								estimateSegmentRequestTime: O,
								isLowestEnabledRendition: A
							}
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"global/window": 32
					}],
					12: [function(t, i, n) {
						(function(t) {
							"use strict";
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var r = function() {
								function t(t, e) {
									var i = [],
										n = !0,
										r = !1,
										a = void 0;
									try {
										for (var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
									} catch (t) {
										r = !0, a = t
									} finally {
										try {
											!n && o.
											return &&o.
											return ()
										} finally {
											if (r) throw a
										}
									}
									return i
								}
								return function(e, i) {
									if (Array.isArray(e)) return e;
									if (Symbol.iterator in Object(e)) return t(e, i);
									throw new TypeError("Invalid attempt to destructure non-iterable instance")
								}
							}(),
								a = "undefined" != typeof window ? e : void 0 !== t ? t.videojs : null,
								s = function(t) {
									return t && t.__esModule ? t : {
										default: t
									}
								}(a),
								o = function(t, e) {
									var i = r(e, 2),
										n = i[0],
										a = i[1];
									return Math.min(Math.max(n, t), a)
								}, u = function(t, e) {
									var i = [],
										n = void 0;
									if (t && t.length) for (n = 0; n < t.length; n++) e(t.start(n), t.end(n)) && i.push([t.start(n), t.end(n)]);
									return s.
									default.createTimeRanges(i)
								}, l = function(t, e) {
									return u(t, function(t, i) {
										return t - 1 / 30 <= e && i + 1 / 30 >= e
									})
								}, c = function(t, e) {
									return u(t, function(t) {
										return t - 1 / 30 >= e
									})
								}, d = function(t) {
									if (t.length < 2) return s.
									default.createTimeRanges();
									for (var e = [], i = 1; i < t.length; i++) {
										var n = t.end(i - 1),
											r = t.start(i);
										e.push([n, r])
									}
									return s.
									default.createTimeRanges(e)
								}, h = function(t, e) {
									var i = void 0,
										n = void 0,
										r = void 0,
										a = [],
										s = [],
										o = function(t) {
											return t[0] <= r && t[1] >= r
										};
									if (t) for (i = 0; i < t.length; i++) n = t.start(i), r = t.end(i), s.push([n, r]);
									if (e) for (i = 0; i < e.length; i++) n = e.start(i), r = e.end(i), s.some(o) || a.push(r);
									return 1 !== a.length ? null : a[0]
								}, p = function(t, e) {
									var i = null,
										n = null,
										r = 0,
										a = [],
										o = [];
									if (!(t && t.length && e && e.length)) return s.
									default.createTimeRange();
									for (var u = t.length; u--;) a.push({
										time: t.start(u),
										type: "start"
									}), a.push({
										time: t.end(u),
										type: "end"
									});
									for (u = e.length; u--;) a.push({
										time: e.start(u),
										type: "start"
									}), a.push({
										time: e.end(u),
										type: "end"
									});
									for (a.sort(function(t, e) {
										return t.time - e.time
									}), u = 0; u < a.length; u++) "start" === a[u].type ? 2 === ++r && (i = a[u].time) : "end" === a[u].type && 1 === --r && (n = a[u].time), null !== i && null !== n && (o.push([i, n]), i = null, n = null);
									return s.
									default.createTimeRanges(o)
								}, f = function(t, e, i, n) {
									for (var r = e.end(0) - e.start(0), a = t.end(0) - t.start(0), s = r - a, o = p(t, n), u = p(e, n), l = 0, c = 0, d = o.length; d--;) l += o.end(d) - o.start(d), o.start(d) === i && (l += s);
									for (d = u.length; d--;) c += u.end(d) - u.start(d);
									return Math.max(l, c) / r * 100
								}, m = function(t, e, i, n) {
									var r = t + e,
										a = s.
									default.createTimeRanges([
										[t, r]
									]), u = s.
									default.createTimeRanges([
										[o(t, [i, r]), r]
									]);
									if (u.start(0) === u.end(0)) return 0;
									var l = f(u, a, i, n);
									return isNaN(l) || l === 1 / 0 || l === -1 / 0 ? 0 : l
								}, g = function(t) {
									var e = [];
									if (!t || !t.length) return "";
									for (var i = 0; i < t.length; i++) e.push(t.start(i) + " => " + t.end(i));
									return e.join(", ")
								}, y = function(t, e) {
									var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
									return ((t.length ? t.end(t.length - 1) : 0) - e) / i
								};
							n.
							default = {
								findRange: l,
								findNextRange: c,
								findGaps: d,
								findSoleUncommonTimeRangesEnd: h,
								getSegmentBufferedPercent: m,
								TIME_FUDGE_FACTOR: 1 / 30,
								SAFE_TIME_DELTA: .1,
								printableRange: g,
								timeUntilRebuffer: y
							}, i.exports = n.
							default
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {}],
					13: [function(t, i, n) {
						(function(t) {
							"use strict";
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var r = "undefined" != typeof window ? e : void 0 !== t ? t.videojs : null,
								a = function(t) {
									return t && t.__esModule ? t : {
										default: t
									}
								}(r),
								s = {
									errorInterval: 30,
									getSource: function(t) {
										return t(this.tech({
											IWillNotUseThisInPlugins: !0
										}).currentSource_)
									}
								}, o = function t(e, i) {
									var n = 0,
										r = 0,
										o = a.
									default.mergeOptions(s, i);
									e.ready(function() {
										e.trigger({
											type: "usage",
											name: "hls-error-reload-initialized"
										})
									});
									var u = function() {
										r && e.currentTime(r)
									}, l = function(t) {
										null !== t && void 0 !== t && (r = e.duration() !== 1 / 0 && e.currentTime() || 0, e.one("loadedmetadata", u), e.src(t), e.trigger({
											type: "usage",
											name: "hls-error-reload"
										}), e.play())
									}, c = function() {
										return Date.now() - n < 1e3 * o.errorInterval ? void e.trigger({
											type: "usage",
											name: "hls-error-reload-canceled"
										}) : o.getSource && "function" == typeof o.getSource ? (n = Date.now(), o.getSource.call(e, l)) : void a.
										default.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
									}, d = function t() {
										e.off("loadedmetadata", u), e.off("error", c), e.off("dispose", t)
									}, h = function(i) {
										d(), t(e, i)
									};
									e.on("error", c), e.on("dispose", d), e.reloadSourceOnError = h
								}, u = function(t) {
									o(this, t)
								};
							n.
							default = u, i.exports = n.
							default
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {}],
					14: [function(t, e, i) {
						"use strict";

						function n(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var r = t("./playlist.js"),
							a = function(t, e, i) {
								return function(n) {
									var a = t.master.playlists[e],
										s = (0, r.isIncompatible)(a),
										o = (0, r.isEnabled)(a);
									return void 0 === n ? o : (n ? delete a.disabled : a.disabled = !0, n === o || s || (i(), n ? t.trigger("renditionenabled") : t.trigger("renditiondisabled")), n)
								}
							}, s = function t(e, i, r) {
								n(this, t);
								var s = e.masterPlaylistController_.fastQualityChange_.bind(e.masterPlaylistController_);
								if (i.attributes.RESOLUTION) {
									var o = i.attributes.RESOLUTION;
									this.width = o.width, this.height = o.height
								}
								this.bandwidth = i.attributes.BANDWIDTH, this.id = r, this.enabled = a(e.playlists, i.uri, s)
							}, o = function(t) {
								var e = t.playlists;
								t.representations = function() {
									return e.master.playlists.filter(function(t) {
										return !(0, r.isIncompatible)(t)
									}).map(function(e, i) {
										return new s(t, e, e.uri)
									})
								}
							};
						i.
						default = o, e.exports = i.
						default
					}, {
						"./playlist.js": 11
					}],
					15: [function(t, e, i) {
						"use strict";

						function n(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var r = t("url-toolkit"),
							a = n(r),
							s = t("global/window"),
							o = n(s),
							u = function(t, e) {
								return /^[a-z]+:/i.test(e) ? e : (/\/\//i.test(t) || (t = a.
								default.buildAbsoluteURL(o.
								default.location.href, t)), a.
								default.buildAbsoluteURL(t, e))
							};
						i.
						default = u, e.exports = i.
						default
					}, {
						"global/window": 32,
						"url-toolkit": 63
					}],
					16: [function(t, i, n) {
						(function(i) {
							"use strict";

							function r(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							function a(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}
							function s(t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var o = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
								u = function(t, e, i) {
									for (var n = !0; n;) {
										var r = t,
											a = e,
											s = i;
										n = !1, null === r && (r = Function.prototype);
										var o = Object.getOwnPropertyDescriptor(r, a);
										if (void 0 !== o) {
											if ("value" in o) return o.value;
											var u = o.get;
											if (void 0 === u) return;
											return u.call(s)
										}
										var l = Object.getPrototypeOf(r);
										if (null === l) return;
										t = l, e = a, i = s, n = !0, o = l = void 0
									}
								}, l = t("./playlist"),
								c = r(l),
								d = "undefined" != typeof window ? e : void 0 !== i ? i.videojs : null,
								h = r(d),
								p = t("./source-updater"),
								f = r(p),
								m = t("./config"),
								g = r(m),
								y = t("global/window"),
								v = r(y),
								_ = t("videojs-contrib-media-sources/es5/remove-cues-from-track.js"),
								b = r(_),
								T = t("./bin-utils"),
								S = t("./media-segment-request"),
								w = t("./ranges"),
								k = t("./playlist-selectors"),
								E = function(t, e, i) {
									if (!t || !e) return !1;
									var n = t.segments,
										r = i === n.length;
									return t.endList && "open" === e.readyState && r
								}, C = function(t) {
									return "number" == typeof t && isFinite(t)
								}, O = function(t, e, i) {
									return "main" === t && e && i ? i.containsAudio || i.containsVideo ? e.containsVideo && !i.containsVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !e.containsVideo && i.containsVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null
								};
							n.illegalMediaSwitch = O;
							var A = function(t, e, i) {
								var n = void 0;
								return n = t.length && t.start(0) > 0 && t.start(0) < e ? t.start(0) : e - 30, Math.min(n, e - i)
							};
							n.safeBackBufferTrimTime = A;
							var P = function(t) {
								function e(t) {
									var i = this,
										n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
									if (a(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), !t) throw new TypeError("Initialization settings are required");
									if ("function" != typeof t.currentTime) throw new TypeError("No currentTime getter specified");
									if (!t.mediaSource) throw new TypeError("No MediaSource specified");
									this.state = "INIT", this.bandwidth = t.bandwidth, this.throughput = {
										rate: 0,
										count: 0
									}, this.roundTrip = NaN, this.resetStats_(), this.mediaIndex = null, this.hasPlayed_ = t.hasPlayed, this.currentTime_ = t.currentTime, this.seekable_ = t.seekable, this.seeking_ = t.seeking, this.duration_ = t.duration, this.mediaSource_ = t.mediaSource, this.hls_ = t.hls, this.loaderType_ = t.loaderType, this.startingMedia_ = void 0, this.segmentMetadataTrack_ = t.segmentMetadataTrack, this.goalBufferLength_ = t.goalBufferLength, this.checkBufferTimeout_ = null, this.error_ = void 0, this.currentTimeline_ = -1, this.pendingSegment_ = null, this.mimeType_ = null, this.sourceUpdater_ = null, this.xhrOptions_ = null, this.activeInitSegmentId_ = null, this.initSegments_ = {}, this.decrypter_ = t.decrypter, this.syncController_ = t.syncController, this.syncPoint_ = {
										segmentIndex: 0,
										time: 0
									}, this.syncController_.on("syncinfoupdate", function() {
										return i.trigger("syncinfoupdate")
									}), this.mediaSource_.addEventListener("sourceopen", function() {
										return i.ended_ = !1
									}), this.fetchAtBuffer_ = !1, n.debug && (this.logger_ = h.
									default.log.bind(h.
									default, "segment-loader", this.loaderType_, "->"))
								}
								return s(e, t), o(e, [{
									key: "resetStats_",
									value: function() {
										this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0
									}
								}, {
									key: "dispose",
									value: function() {
										this.state = "DISPOSED", this.pause(), this.abort_(), this.sourceUpdater_ && this.sourceUpdater_.dispose(), this.resetStats_()
									}
								}, {
									key: "abort",
									value: function() {
										if ("WAITING" !== this.state) return void(this.pendingSegment_ && (this.pendingSegment_ = null));
										this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_()
									}
								}, {
									key: "abort_",
									value: function() {
										this.pendingSegment_ && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null
									}
								}, {
									key: "error",
									value: function(t) {
										return void 0 !== t && (this.error_ = t), this.pendingSegment_ = null, this.error_
									}
								}, {
									key: "endOfStream",
									value: function() {
										this.ended_ = !0, this.pause(), this.trigger("ended")
									}
								}, {
									key: "buffered_",
									value: function() {
										return this.sourceUpdater_ ? this.sourceUpdater_.buffered() : h.
										default.createTimeRanges()
									}
								}, {
									key: "initSegment",
									value: function(t) {
										var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
										if (!t) return null;
										var i = (0, T.initSegmentId)(t),
											n = this.initSegments_[i];
										return e && !n && t.bytes && (this.initSegments_[i] = n = {
											resolvedUri: t.resolvedUri,
											byterange: t.byterange,
											bytes: t.bytes
										}), n || t
									}
								}, {
									key: "couldBeginLoading_",
									value: function() {
										return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && "INIT" === this.state) && !this.paused()
									}
								}, {
									key: "load",
									value: function() {
										if (this.monitorBuffer_(), this.playlist_) {
											if (this.syncController_.setDateTimeMapping(this.playlist_), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
											!this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY")
										}
									}
								}, {
									key: "init_",
									value: function() {
										return this.state = "READY", this.sourceUpdater_ = new f.
										default (this.mediaSource_, this.mimeType_), this.resetEverything(), this.monitorBuffer_()
									}
								}, {
									key: "playlist",
									value: function(t) {
										var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
										if (t) {
											var i = this.playlist_,
												n = this.pendingSegment_;
											if (this.playlist_ = t, this.xhrOptions_ = e, this.hasPlayed_() || (t.syncInfo = {
												mediaSequence: t.mediaSequence,
												time: 0
											}), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
											if (!i || i.uri !== t.uri) return void(null !== this.mediaIndex && this.resyncLoader());
											var r = t.mediaSequence - i.mediaSequence;
											this.logger_("mediaSequenceDiff", r), null !== this.mediaIndex && (this.mediaIndex -= r), n && (n.mediaIndex -= r, n.mediaIndex >= 0 && (n.segment = t.segments[n.mediaIndex])), this.syncController_.saveExpiredSegmentInfo(i, t)
										}
									}
								}, {
									key: "pause",
									value: function() {
										this.checkBufferTimeout_ && (v.
										default.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null)
									}
								}, {
									key: "paused",
									value: function() {
										return null === this.checkBufferTimeout_
									}
								}, {
									key: "mimeType",
									value: function(t) {
										this.mimeType_ || (this.mimeType_ = t, "INIT" === this.state && this.couldBeginLoading_() && this.init_())
									}
								}, {
									key: "resetEverything",
									value: function() {
										this.ended_ = !1, this.resetLoader(), this.remove(0, this.duration_()), this.trigger("reseteverything")
									}
								}, {
									key: "resetLoader",
									value: function() {
										this.fetchAtBuffer_ = !1, this.resyncLoader()
									}
								}, {
									key: "resyncLoader",
									value: function() {
										this.mediaIndex = null, this.syncPoint_ = null, this.abort()
									}
								}, {
									key: "remove",
									value: function(t, e) {
										this.sourceUpdater_ && this.sourceUpdater_.remove(t, e), (0, b.
										default)(t, e, this.segmentMetadataTrack_)
									}
								}, {
									key: "monitorBuffer_",
									value: function() {
										this.checkBufferTimeout_ && v.
										default.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = v.
										default.setTimeout(this.monitorBufferTick_.bind(this), 1)
									}
								}, {
									key: "monitorBufferTick_",
									value: function() {
										"READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && v.
										default.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = v.
										default.setTimeout(this.monitorBufferTick_.bind(this), 500)
									}
								}, {
									key: "fillBuffer_",
									value: function() {
										if (!this.sourceUpdater_.updating()) {
											this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
											var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
											if (t) {
												if (E(this.playlist_, this.mediaSource_, t.mediaIndex)) return void this.endOfStream();
												(t.mediaIndex !== this.playlist_.segments.length - 1 || "ended" !== this.mediaSource_.readyState || this.seeking_()) && ((t.timeline !== this.currentTimeline_ || null !== t.startOfSegment && t.startOfSegment < this.sourceUpdater_.timestampOffset()) && (this.syncController_.reset(), t.timestampOffset = t.startOfSegment), this.loadSegment_(t))
											}
										}
									}
								}, {
									key: "checkBuffer_",
									value: function(t, e, i, n, r, a) {
										var s = 0,
											o = void 0;
										t.length && (s = t.end(t.length - 1));
										var u = Math.max(0, s - r);
										if (!e.segments.length) return null;
										if (u >= this.goalBufferLength_()) return null;
										if (!n && u >= 1) return null;
										if (this.logger_("checkBuffer_", "mediaIndex:", i, "hasPlayed:", n, "currentTime:", r, "syncPoint:", a, "fetchAtBuffer:", this.fetchAtBuffer_, "bufferedTime:", u), null === a) return i = this.getSyncSegmentCandidate_(e), this.logger_("getSync", "mediaIndex:", i), this.generateSegmentInfo_(e, i, null, !0);
										if (null !== i) {
											this.logger_("walkForward", "mediaIndex:", i + 1);
											var l = e.segments[i];
											return o = l && l.end ? l.end : s, this.generateSegmentInfo_(e, i + 1, o, !1)
										}
										if (this.fetchAtBuffer_) {
											var d = c.
											default.getMediaInfoForTime(e, s, a.segmentIndex, a.time);
											i = d.mediaIndex, o = d.startTime
										} else {
											var d = c.
											default.getMediaInfoForTime(e, r, a.segmentIndex, a.time);
											i = d.mediaIndex, o = d.startTime
										}
										return this.logger_("getMediaIndexForTime", "mediaIndex:", i, "startOfSegment:", o), this.generateSegmentInfo_(e, i, o, !1)
									}
								}, {
									key: "getSyncSegmentCandidate_",
									value: function(t) {
										var e = this;
										if (-1 === this.currentTimeline_) return 0;
										var i = t.segments.map(function(t, e) {
											return {
												timeline: t.timeline,
												segmentIndex: e
											}
										}).filter(function(t) {
											return t.timeline === e.currentTimeline_
										});
										return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(t.segments.length - 1, 0)
									}
								}, {
									key: "generateSegmentInfo_",
									value: function(t, e, i, n) {
										if (e < 0 || e >= t.segments.length) return null;
										var r = t.segments[e];
										return {
											requestId: "segment-loader-" + Math.random(),
											uri: r.resolvedUri,
											mediaIndex: e,
											isSyncRequest: n,
											startOfSegment: i,
											playlist: t,
											bytes: null,
											encryptedBytes: null,
											timestampOffset: null,
											timeline: r.timeline,
											duration: r.duration,
											segment: r
										}
									}
								}, {
									key: "abortRequestEarly_",
									value: function(t) {
										if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return !1;
										if (Date.now() - (t.firstBytesReceivedAt || Date.now()) < 1e3) return !1;
										var e = this.currentTime_(),
											i = t.bandwidth,
											n = this.pendingSegment_.duration,
											r = c.
										default.estimateSegmentRequestTime(n, i, this.playlist_, t.bytesReceived), a = (0, w.timeUntilRebuffer)(this.buffered_(), e, this.hls_.tech_.playbackRate()) - 1;
										if (r <= a) return !1;
										var s = (0, k.minRebufferMaxBandwidthSelector)({
											master: this.hls_.playlists.master,
											currentTime: e,
											bandwidth: i,
											duration: this.duration_(),
											segmentDuration: n,
											timeUntilRebuffer: a,
											currentTimeline: this.currentTimeline_,
											syncController: this.syncController_
										});
										if (s) {
											var o = r - a,
												u = o - s.rebufferingImpact,
												l = .5;
											return a <= w.TIME_FUDGE_FACTOR && (l = 1), !s.playlist || s.playlist.uri === this.playlist_.uri || u < l ? !1 : (this.bandwidth = s.playlist.attributes.BANDWIDTH * g.
											default.BANDWIDTH_VARIANCE + 1, this.abort(), this.trigger("earlyabort"), !0)
										}
									}
								}, {
									key: "handleProgress_",
									value: function(t, e) {
										this.pendingSegment_ && e.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(e.stats) && this.trigger("progress")
									}
								}, {
									key: "loadSegment_",
									value: function(t) {
										this.state = "WAITING", this.pendingSegment_ = t, this.trimBackBuffer_(t), t.abortRequests = (0, S.mediaSegmentRequest)(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.createSimplifiedSegmentObj_(t), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this))
									}
								}, {
									key: "trimBackBuffer_",
									value: function(t) {
										var e = A(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
										e > 0 && this.remove(0, e)
									}
								}, {
									key: "createSimplifiedSegmentObj_",
									value: function(t) {
										var e = t.segment,
											i = {
												resolvedUri: e.resolvedUri,
												byterange: e.byterange,
												requestId: t.requestId
											};
										if (e.key) {
											var n = e.key.iv || new Uint32Array([0, 0, 0, t.mediaIndex + t.playlist.mediaSequence]);
											i.key = {
												resolvedUri: e.key.resolvedUri,
												iv: n
											}
										}
										return e.map && (i.map = this.initSegment(e.map)), i
									}
								}, {
									key: "segmentRequestFinished_",
									value: function(t, e) {
										if (this.mediaRequests += 1, e.stats && (this.mediaBytesTransferred += e.stats.bytesReceived, this.mediaTransferDuration += e.stats.roundTripTime), !this.pendingSegment_) return void(this.mediaRequestsAborted += 1);
										if (e.requestId === this.pendingSegment_.requestId) {
											if (t) return this.pendingSegment_ = null, this.state = "READY", t.code === S.REQUEST_ERRORS.ABORTED ? void(this.mediaRequestsAborted += 1) : (this.pause(), t.code === S.REQUEST_ERRORS.TIMEOUT ? (this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, void this.trigger("bandwidthupdate")) : (this.mediaRequestsErrored += 1, this.error(t), void this.trigger("error")));
											this.bandwidth = e.stats.bandwidth, this.roundTrip = e.stats.roundTripTime, e.map && (e.map = this.initSegment(e.map, !0)), this.processSegmentResponse_(e)
										}
									}
								}, {
									key: "processSegmentResponse_",
									value: function(t) {
										var e = this.pendingSegment_;
										e.bytes = t.bytes, t.map && (e.segment.map.bytes = t.map.bytes), e.endOfAllRequests = t.endOfAllRequests, this.handleSegment_()
									}
								}, {
									key: "handleSegment_",
									value: function() {
										var t = this;
										if (!this.pendingSegment_) return void(this.state = "READY");
										var e = this.pendingSegment_,
											i = e.segment,
											n = this.syncController_.probeSegmentInfo(e);
										void 0 === this.startingMedia_ && n && (n.containsAudio || n.containsVideo) && (this.startingMedia_ = {
											containsAudio: n.containsAudio,
											containsVideo: n.containsVideo
										});
										var r = O(this.loaderType_, this.startingMedia_, n);
										if (r) return this.error({
											message: r,
											blacklistDuration: 1 / 0
										}), void this.trigger("error");
										if (e.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void(this.state = "READY");
										null !== e.timestampOffset && e.timestampOffset !== this.sourceUpdater_.timestampOffset() && (this.sourceUpdater_.timestampOffset(e.timestampOffset), this.trigger("timestampoffset"));
										var a = this.syncController_.mappingForTimeline(e.timeline);
										null !== a && this.trigger({
											type: "segmenttimemapping",
											mapping: a
										}), this.state = "APPENDING", i.map && function() {
											var e = (0, T.initSegmentId)(i.map);
											if (!t.activeInitSegmentId_ || t.activeInitSegmentId_ !== e) {
												var n = t.initSegment(i.map);
												t.sourceUpdater_.appendBuffer(n.bytes, function() {
													t.activeInitSegmentId_ = e
												})
											}
										}(), e.byteLength = e.bytes.byteLength, "number" == typeof i.start && "number" == typeof i.end ? this.mediaSecondsLoaded += i.end - i.start : this.mediaSecondsLoaded += i.duration, this.sourceUpdater_.appendBuffer(e.bytes, this.handleUpdateEnd_.bind(this))
									}
								}, {
									key: "handleUpdateEnd_",
									value: function() {
										if (this.logger_("handleUpdateEnd_", "segmentInfo:", this.pendingSegment_), !this.pendingSegment_) return this.state = "READY", void(this.paused() || this.monitorBuffer_());
										var t = this.pendingSegment_,
											e = t.segment,
											i = null !== this.mediaIndex;
										if (this.pendingSegment_ = null, this.recordThroughput_(t), this.addSegmentMetadataCue_(t), this.state = "READY", this.mediaIndex = t.mediaIndex, this.fetchAtBuffer_ = !0, this.currentTimeline_ = t.timeline, this.trigger("syncinfoupdate"), e.end && this.currentTime_() - e.end > 3 * t.playlist.targetDuration) return void this.resetEverything();
										i && this.trigger("bandwidthupdate"), this.trigger("progress"), E(t.playlist, this.mediaSource_, t.mediaIndex + 1) && this.endOfStream(), this.paused() || this.monitorBuffer_()
									}
								}, {
									key: "recordThroughput_",
									value: function(t) {
										var e = this.throughput.rate,
											i = Date.now() - t.endOfAllRequests + 1,
											n = Math.floor(t.byteLength / i * 8 * 1e3);
										this.throughput.rate += (n - e) / ++this.throughput.count
									}
								}, {
									key: "logger_",
									value: function() {}
								}, {
									key: "addSegmentMetadataCue_",
									value: function(t) {
										if (this.segmentMetadataTrack_) {
											var e = t.segment,
												i = e.start,
												n = e.end;
											if (C(i) && C(n)) {
												(0, b.
												default)(i, n, this.segmentMetadataTrack_);
												var r = v.
												default.WebKitDataCue || v.
												default.VTTCue, a = {
													uri: t.uri,
													timeline: t.timeline,
													playlist: t.playlist.uri,
													start: i,
													end: n
												}, s = JSON.stringify(a), o = new r(i, n, s);
												o.value = a, this.segmentMetadataTrack_.addCue(o)
											}
										}
									}
								}]), e
							}(h.
							default.EventTarget);
							n.
							default = P
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./bin-utils": 2,
						"./config": 3,
						"./media-segment-request": 7,
						"./playlist": 11,
						"./playlist-selectors": 10,
						"./ranges": 12,
						"./source-updater": 17,
						"global/window": 32,
						"videojs-contrib-media-sources/es5/remove-cues-from-track.js": 72
					}],
					17: [function(t, i, n) {
						(function(t) {
							"use strict";

							function r(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var a = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
								s = "undefined" != typeof window ? e : void 0 !== t ? t.videojs : null,
								o = function(t) {
									return t && t.__esModule ? t : {
										default: t
									}
								}(s),
								u = function() {}, l = function() {
									function t(e, i) {
										var n = this;
										r(this, t);
										var a = function() {
											n.sourceBuffer_ = e.addSourceBuffer(i), n.onUpdateendCallback_ = function() {
												var t = n.pendingCallback_;
												n.pendingCallback_ = null, t && t(), n.runCallback_()
											}, n.sourceBuffer_.addEventListener("updateend", n.onUpdateendCallback_), n.runCallback_()
										};
										this.callbacks_ = [], this.pendingCallback_ = null, this.timestampOffset_ = 0, this.mediaSource = e, this.processedAppend_ = !1, "closed" === e.readyState ? e.addEventListener("sourceopen", a) : a()
									}
									return a(t, [{
										key: "abort",
										value: function(t) {
											var e = this;
											this.processedAppend_ && this.queueCallback_(function() {
												e.sourceBuffer_.abort()
											}, t)
										}
									}, {
										key: "appendBuffer",
										value: function(t, e) {
											var i = this;
											this.processedAppend_ = !0, this.queueCallback_(function() {
												i.sourceBuffer_.appendBuffer(t)
											}, e)
										}
									}, {
										key: "buffered",
										value: function() {
											return this.sourceBuffer_ ? this.sourceBuffer_.buffered : o.
											default.createTimeRanges()
										}
									}, {
										key: "remove",
										value: function(t, e) {
											var i = this;
											this.processedAppend_ && this.queueCallback_(function() {
												i.sourceBuffer_.remove(t, e)
											}, u)
										}
									}, {
										key: "updating",
										value: function() {
											return !this.sourceBuffer_ || this.sourceBuffer_.updating || this.pendingCallback_
										}
									}, {
										key: "timestampOffset",
										value: function(t) {
											var e = this;
											return void 0 !== t && (this.queueCallback_(function() {
												e.sourceBuffer_.timestampOffset = t
											}), this.timestampOffset_ = t), this.timestampOffset_
										}
									}, {
										key: "queueCallback_",
										value: function(t, e) {
											this.callbacks_.push([t.bind(this), e]), this.runCallback_()
										}
									}, {
										key: "runCallback_",
										value: function() {
											var t = void 0;
											!this.updating() && this.callbacks_.length && (t = this.callbacks_.shift(), this.pendingCallback_ = t[1], t[0]())
										}
									}, {
										key: "dispose",
										value: function() {
											this.sourceBuffer_.removeEventListener("updateend", this.onUpdateendCallback_), this.sourceBuffer_ && "open" === this.mediaSource.readyState && this.sourceBuffer_.abort()
										}
									}]), t
								}();
							n.
							default = l, i.exports = n.
							default
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {}],
					18: [function(t, i, n) {
						(function(i) {
							"use strict";

							function r(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							function a(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}
							function s(t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var o = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
								u = function(t, e, i) {
									for (var n = !0; n;) {
										var r = t,
											a = e,
											s = i;
										n = !1, null === r && (r = Function.prototype);
										var o = Object.getOwnPropertyDescriptor(r, a);
										if (void 0 !== o) {
											if ("value" in o) return o.value;
											var u = o.get;
											if (void 0 === u) return;
											return u.call(s)
										}
										var l = Object.getPrototypeOf(r);
										if (null === l) return;
										t = l, e = a, i = s, n = !0, o = l = void 0
									}
								}, l = t("mux.js/lib/mp4/probe"),
								c = r(l),
								d = t("mux.js/lib/tools/ts-inspector.js"),
								h = t("./playlist"),
								p = "undefined" != typeof window ? e : void 0 !== i ? i.videojs : null,
								f = r(p),
								m = [{
									name: "VOD",
									run: function(t, e, i, n, r) {
										if (i !== 1 / 0) {
											return {
												time: 0,
												segmentIndex: 0
											}
										}
										return null
									}
								}, {
									name: "ProgramDateTime",
									run: function(t, e, i, n, r) {
										if (t.datetimeToDisplayTime && e.dateTimeObject) {
											return {
												time: e.dateTimeObject.getTime() / 1e3 + t.datetimeToDisplayTime,
												segmentIndex: 0
											}
										}
										return null
									}
								}, {
									name: "Segment",
									run: function(t, e, i, n, r) {
										var a = e.segments || [],
											s = null,
											o = null;
										r = r || 0;
										for (var u = 0; u < a.length; u++) {
											var l = a[u];
											if (l.timeline === n && void 0 !== l.start) {
												var c = Math.abs(r - l.start);
												if (null !== o && o < c) break;
												(!s || null === o || o >= c) && (o = c, s = {
													time: l.start,
													segmentIndex: u
												})
											}
										}
										return s
									}
								}, {
									name: "Discontinuity",
									run: function(t, e, i, n, r) {
										var a = null;
										if (r = r || 0, e.discontinuityStarts && e.discontinuityStarts.length) for (var s = null, o = 0; o < e.discontinuityStarts.length; o++) {
											var u = e.discontinuityStarts[o],
												l = e.discontinuitySequence + o + 1,
												c = t.discontinuities[l];
											if (c) {
												var d = Math.abs(r - c.time);
												if (null !== s && s < d) break;
												(!a || null === s || s >= d) && (s = d, a = {
													time: c.time,
													segmentIndex: u
												})
											}
										}
										return a
									}
								}, {
									name: "Playlist",
									run: function(t, e, i, n, r) {
										if (e.syncInfo) {
											return {
												time: e.syncInfo.time,
												segmentIndex: e.syncInfo.mediaSequence - e.mediaSequence
											}
										}
										return null
									}
								}];
							n.syncPointStrategies = m;
							var g = function(t) {
								function e() {
									var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
									a(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.inspectCache_ = void 0, this.timelines = [], this.discontinuities = [], this.datetimeToDisplayTime = null, t.debug && (this.logger_ = f.
									default.log.bind(f.
									default, "sync-controller ->"))
								}
								return s(e, t), o(e, [{
									key: "getSyncPoint",
									value: function(t, e, i, n) {
										var r = this.runStrategies_(t, e, i, n);
										return r.length ? this.selectSyncPoint_(r, {
											key: "time",
											value: n
										}) : null
									}
								}, {
									key: "getExpiredTime",
									value: function(t, e) {
										if (!t || !t.segments) return null;
										var i = this.runStrategies_(t, e, t.discontinuitySequence, 0);
										if (!i.length) return null;
										var n = this.selectSyncPoint_(i, {
											key: "segmentIndex",
											value: 0
										});
										return n.segmentIndex > 0 && (n.time *= -1), Math.abs(n.time + (0, h.sumDurations)(t, n.segmentIndex, 0))
									}
								}, {
									key: "runStrategies_",
									value: function(t, e, i, n) {
										for (var r = [], a = 0; a < m.length; a++) {
											var s = m[a],
												o = s.run(this, t, e, i, n);
											o && (o.strategy = s.name, r.push({
												strategy: s.name,
												syncPoint: o
											}), this.logger_("syncPoint found via <" + s.name + ">:", o))
										}
										return r
									}
								}, {
									key: "selectSyncPoint_",
									value: function(t, e) {
										for (var i = t[0].syncPoint, n = Math.abs(t[0].syncPoint[e.key] - e.value), r = t[0].strategy, a = 1; a < t.length; a++) {
											var s = Math.abs(t[a].syncPoint[e.key] - e.value);
											s < n && (n = s, i = t[a].syncPoint, r = t[a].strategy)
										}
										return this.logger_("syncPoint with strategy <" + r + "> chosen: ", i), i
									}
								}, {
									key: "saveExpiredSegmentInfo",
									value: function(t, e) {
										for (var i = e.mediaSequence - t.mediaSequence, n = i - 1; n >= 0; n--) {
											var r = t.segments[n];
											if (r && void 0 !== r.start) {
												e.syncInfo = {
													mediaSequence: t.mediaSequence + n,
													time: r.start
												}, this.logger_("playlist sync:", e.syncInfo), this.trigger("syncinfoupdate");
												break
											}
										}
									}
								}, {
									key: "setDateTimeMapping",
									value: function(t) {
										if (!this.datetimeToDisplayTime && t.dateTimeObject) {
											var e = t.dateTimeObject.getTime() / 1e3;
											this.datetimeToDisplayTime = -e
										}
									}
								}, {
									key: "reset",
									value: function() {
										this.inspectCache_ = void 0
									}
								}, {
									key: "probeSegmentInfo",
									value: function(t) {
										var e = t.segment,
											i = t.playlist,
											n = void 0;
										return n = e.map ? this.probeMp4Segment_(t) : this.probeTsSegment_(t), n && this.calculateSegmentTimeMapping_(t, n) && (this.saveDiscontinuitySyncInfo_(t), i.syncInfo || (i.syncInfo = {
											mediaSequence: i.mediaSequence + t.mediaIndex,
											time: e.start
										})), n
									}
								}, {
									key: "probeMp4Segment_",
									value: function(t) {
										var e = t.segment,
											i = c.
										default.timescale(e.map.bytes), n = c.
										default.startTime(i, t.bytes);
										return null !== t.timestampOffset && (t.timestampOffset -= n), {
											start: n,
											end: n + e.duration
										}
									}
								}, {
									key: "probeTsSegment_",
									value: function(t) {
										var e = (0, d.inspect)(t.bytes, this.inspectCache_),
											i = void 0,
											n = void 0;
										return e ? (e.video && 2 === e.video.length ? (this.inspectCache_ = e.video[1].dts, i = e.video[0].dtsTime, n = e.video[1].dtsTime) : e.audio && 2 === e.audio.length && (this.inspectCache_ = e.audio[1].dts, i = e.audio[0].dtsTime, n = e.audio[1].dtsTime), {
											start: i,
											end: n,
											containsVideo: e.video && 2 === e.video.length,
											containsAudio: e.audio && 2 === e.audio.length
										}) : null
									}
								}, {
									key: "timestampOffsetForTimeline",
									value: function(t) {
										return void 0 === this.timelines[t] ? null : this.timelines[t].time
									}
								}, {
									key: "mappingForTimeline",
									value: function(t) {
										return void 0 === this.timelines[t] ? null : this.timelines[t].mapping
									}
								}, {
									key: "calculateSegmentTimeMapping_",
									value: function(t, e) {
										var i = t.segment,
											n = this.timelines[t.timeline];
										if (null !== t.timestampOffset) this.logger_("tsO:", t.timestampOffset), n = {
											time: t.startOfSegment,
											mapping: t.startOfSegment - e.start
										}, this.timelines[t.timeline] = n, this.trigger("timestampoffset"), i.start = t.startOfSegment, i.end = e.end + n.mapping;
										else {
											if (!n) return !1;
											i.start = e.start + n.mapping, i.end = e.end + n.mapping
										}
										return !0
									}
								}, {
									key: "saveDiscontinuitySyncInfo_",
									value: function(t) {
										var e = t.playlist,
											i = t.segment;
										if (i.discontinuity) this.discontinuities[i.timeline] = {
											time: i.start,
											accuracy: 0
										};
										else if (e.discontinuityStarts.length) for (var n = 0; n < e.discontinuityStarts.length; n++) {
											var r = e.discontinuityStarts[n],
												a = e.discontinuitySequence + n + 1,
												s = r - t.mediaIndex,
												o = Math.abs(s);
											if (!this.discontinuities[a] || this.discontinuities[a].accuracy > o) {
												var u = void 0;
												u = s < 0 ? i.start - (0, h.sumDurations)(e, t.mediaIndex, r) : i.end + (0, h.sumDurations)(e, t.mediaIndex + 1, r), this.discontinuities[a] = {
													time: u,
													accuracy: o
												}
											}
										}
									}
								}, {
									key: "logger_",
									value: function() {}
								}]), e
							}(f.
							default.EventTarget);
							n.
							default = g
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./playlist": 11,
						"mux.js/lib/mp4/probe": 57,
						"mux.js/lib/tools/ts-inspector.js": 59
					}],
					19: [function(t, e, i) {
						"use strict";
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var n = function() {
							var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
								e = {
									codecCount: 0
								}, i = void 0;
							return e.codecCount = t.split(",").length, e.codecCount = e.codecCount || 2, i = /(^|\s|,)+(avc1)([^ ,]*)/i.exec(t), i && (e.videoCodec = i[2], e.videoObjectTypeIndicator = i[3]), e.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(t), e.audioProfile = e.audioProfile && e.audioProfile[2], e
						};
						i.parseCodecs = n
					}, {}],
					20: [function(t, i, n) {
						(function(r) {
							"use strict";

							function a(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							function s(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}
							function o(t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var u = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
								l = function(t, e, i) {
									for (var n = !0; n;) {
										var r = t,
											a = e,
											s = i;
										n = !1, null === r && (r = Function.prototype);
										var o = Object.getOwnPropertyDescriptor(r, a);
										if (void 0 !== o) {
											if ("value" in o) return o.value;
											var u = o.get;
											if (void 0 === u) return;
											return u.call(s)
										}
										var l = Object.getPrototypeOf(r);
										if (null === l) return;
										t = l, e = a, i = s, n = !0, o = l = void 0
									}
								}, c = t("./segment-loader"),
								d = a(c),
								h = "undefined" != typeof window ? e : void 0 !== r ? r.videojs : null,
								p = a(h),
								f = t("global/window"),
								m = a(f),
								g = t("videojs-contrib-media-sources/es5/remove-cues-from-track.js"),
								y = a(g),
								v = t("./bin-utils"),
								_ = new Uint8Array("\n\n".split("").map(function(t) {
									return t.charCodeAt(0)
								})),
								b = function(t) {
									return String.fromCharCode.apply(null, t)
								}, T = function(t) {
									function e(t) {
										var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
										s(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, i), this.mediaSource_ = null, this.subtitlesTrack_ = null
									}
									return o(e, t), u(e, [{
										key: "buffered_",
										value: function() {
											if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return p.
											default.createTimeRanges();
											var t = this.subtitlesTrack_.cues,
												e = t[0].startTime,
												i = t[t.length - 1].startTime;
											return p.
											default.createTimeRanges([
												[e, i]
											])
										}
									}, {
										key: "initSegment",
										value: function(t) {
											var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
											if (!t) return null;
											var i = (0, v.initSegmentId)(t),
												n = this.initSegments_[i];
											if (e && !n && t.bytes) {
												var r = _.byteLength + t.bytes.byteLength,
													a = new Uint8Array(r);
												a.set(t.bytes), a.set(_, t.bytes.byteLength), this.initSegments_[i] = n = {
													resolvedUri: t.resolvedUri,
													byterange: t.byterange,
													bytes: a
												}
											}
											return n || t
										}
									}, {
										key: "couldBeginLoading_",
										value: function() {
											return this.playlist_ && this.subtitlesTrack_ && !this.paused()
										}
									}, {
										key: "init_",
										value: function() {
											return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
										}
									}, {
										key: "track",
										value: function(t) {
											return void 0 === t ? this.subtitlesTrack_ : (this.subtitlesTrack_ = t, "INIT" === this.state && this.couldBeginLoading_() && this.init_(), this.subtitlesTrack_)
										}
									}, {
										key: "remove",
										value: function(t, e) {
											(0, y.
											default)(t, e, this.subtitlesTrack_)
										}
									}, {
										key: "fillBuffer_",
										value: function() {
											var t = this;
											this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
											var e = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
											if (e = this.skipEmptySegments_(e)) {
												if (null === this.syncController_.timestampOffsetForTimeline(e.timeline)) {
													var i = function() {
														t.state = "READY", t.paused() || t.monitorBuffer_()
													};
													return this.syncController_.one("timestampoffset", i), void(this.state = "WAITING_ON_TIMELINE")
												}
												this.loadSegment_(e)
											}
										}
									}, {
										key: "skipEmptySegments_",
										value: function(t) {
											for (; t && t.segment.empty;) t = this.generateSegmentInfo_(t.playlist, t.mediaIndex + 1, t.startOfSegment + t.duration, t.isSyncRequest);
											return t
										}
									}, {
										key: "handleSegment_",
										value: function() {
											var t = this;
											if (!this.pendingSegment_ || !this.subtitlesTrack_) return void(this.state = "READY");
											this.state = "APPENDING";
											var e = this.pendingSegment_,
												i = e.segment;
											if ("function" != typeof m.
											default.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
												var n = function() {
													var e = function() {
														t.handleSegment_()
													};
													return t.state = "WAITING_ON_VTTJS", t.subtitlesTrack_.tech_.one("vttjsloaded", e), t.subtitlesTrack_.tech_.one("vttjserror", function() {
														t.subtitlesTrack_.tech_.off("vttjsloaded", e), t.error({
															message: "Error loading vtt.js"
														}), t.state = "READY", t.pause(), t.trigger("error")
													}), {
														v: void 0
													}
												}();
												if ("object" == typeof n) return n.v
											}
											i.requested = !0;
											try {
												this.parseVTTCues_(e)
											} catch (t) {
												return this.error({
													message: t.message
												}), this.state = "READY", this.pause(), this.trigger("error")
											}
											if (this.updateTimeMapping_(e, this.syncController_.timelines[e.timeline], this.playlist_), e.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void(this.state = "READY");
											e.byteLength = e.bytes.byteLength, this.mediaSecondsLoaded += i.duration, e.cues.length && this.remove(e.cues[0].endTime, e.cues[e.cues.length - 1].endTime), e.cues.forEach(function(e) {
												t.subtitlesTrack_.addCue(e)
											}), this.handleUpdateEnd_()
										}
									}, {
										key: "parseVTTCues_",
										value: function(t) {
											var e = void 0,
												i = !1;
											"function" == typeof m.
											default.TextDecoder ? e = new m.
											default.TextDecoder("utf8") : (e = m.
											default.WebVTT.StringDecoder(), i = !0);
											var n = new m.
											default.WebVTT.Parser(m.
											default, m.
											default.vttjs, e);
											if (t.cues = [], t.timestampmap = {
												MPEGTS: 0,
												LOCAL: 0
											}, n.oncue = t.cues.push.bind(t.cues), n.ontimestampmap = function(e) {
												return t.timestampmap = e
											}, n.onparsingerror = function(t) {
												p.
												default.log.warn("Error encountered when parsing cues: " + t.message)
											}, t.segment.map) {
												var r = t.segment.map.bytes;
												i && (r = b(r)), n.parse(r)
											}
											var a = t.bytes;
											i && (a = b(a)), n.parse(a), n.flush()
										}
									}, {
										key: "updateTimeMapping_",
										value: function(t, e, i) {
											var n = t.segment;
											if (e) {
												if (!t.cues.length) return void(n.empty = !0);
												var r = t.timestampmap,
													a = r.MPEGTS / 9e4 - r.LOCAL + e.mapping;
												if (t.cues.forEach(function(t) {
													t.startTime += a, t.endTime += a
												}), !i.syncInfo) {
													var s = t.cues[0].startTime,
														o = t.cues[t.cues.length - 1].startTime;
													i.syncInfo = {
														mediaSequence: i.mediaSequence + t.mediaIndex,
														time: Math.min(s, o - n.duration)
													}
												}
											}
										}
									}]), e
								}(d.
								default);
							n.
							default = T, i.exports = n.
							default
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./bin-utils": 2,
						"./segment-loader": 16,
						"global/window": 32,
						"videojs-contrib-media-sources/es5/remove-cues-from-track.js": 72
					}],
					21: [function(t, i, n) {
						(function(t) {
							"use strict";
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var r = "undefined" != typeof window ? e : void 0 !== t ? t.videojs : null,
								a = function(t) {
									return t && t.__esModule ? t : {
										default: t
									}
								}(r),
								s = function() {
									return function t(e, i) {
										e = (0, r.mergeOptions)({
											timeout: 45e3
										}, e);
										var n = t.beforeRequest || a.
										default.Hls.xhr.beforeRequest;
										if (n && "function" == typeof n) {
											var s = n(e);
											s && (e = s)
										}
										var o = (0, r.xhr)(e, function(t, e) {
											var n = o.response;
											!t && n && (o.responseTime = Date.now(), o.roundTripTime = o.responseTime - o.requestTime, o.bytesReceived = n.byteLength || n.length, o.bandwidth || (o.bandwidth = Math.floor(o.bytesReceived / o.roundTripTime * 8 * 1e3))), t && "ETIMEDOUT" === t.code && (o.timedout = !0), t || o.aborted || 200 === e.statusCode || 206 === e.statusCode || 0 === e.statusCode || (t = new Error("XHR Failed with a response of: " + (o && (n || o.responseText)))), i(t, o)
										}),
											u = o.abort;
										return o.abort = function() {
											return o.aborted = !0, u.apply(o, arguments)
										}, o.uri = e.uri, o.requestTime = Date.now(), o
									}
								};
							n.
							default = s, i.exports = n.
							default
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {}],
					22: [function(t, e, i) {
						"use strict";

						function n(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var r = function() {
							function t(t, e) {
								for (var i = 0; i < e.length; i++) {
									var n = e[i];
									n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
								}
							}
							return function(e, i, n) {
								return i && t(e.prototype, i), n && t(e, n), e
							}
						}(),
							a = function() {
								var t = [
									[
										[],
										[],
										[],
										[],
										[]
									],
									[
										[],
										[],
										[],
										[],
										[]
									]
								],
									e = t[0],
									i = t[1],
									n = e[4],
									r = i[4],
									a = void 0,
									s = void 0,
									o = void 0,
									u = [],
									l = [],
									c = void 0,
									d = void 0,
									h = void 0,
									p = void 0,
									f = void 0,
									m = void 0;
								for (a = 0; a < 256; a++) l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
								for (s = o = 0; !n[s]; s ^= c || 1, o = l[o] || 1) for (p = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4, p = p >> 8 ^ 255 & p ^ 99, n[s] = p, r[p] = s, h = u[d = u[c = u[s]]], m = 16843009 * h ^ 65537 * d ^ 257 * c ^ 16843008 * s, f = 257 * u[p] ^ 16843008 * p, a = 0; a < 4; a++) e[a][s] = f = f << 24 ^ f >>> 8, i[a][p] = m = m << 24 ^ m >>> 8;
								for (a = 0; a < 5; a++) e[a] = e[a].slice(0), i[a] = i[a].slice(0);
								return t
							}, s = null,
							o = function() {
								function t(e) {
									n(this, t), s || (s = a()), this._tables = [
										[s[0][0].slice(), s[0][1].slice(), s[0][2].slice(), s[0][3].slice(), s[0][4].slice()],
										[s[1][0].slice(), s[1][1].slice(), s[1][2].slice(), s[1][3].slice(), s[1][4].slice()]
									];
									var i = void 0,
										r = void 0,
										o = void 0,
										u = void 0,
										l = void 0,
										c = this._tables[0][4],
										d = this._tables[1],
										h = e.length,
										p = 1;
									if (4 !== h && 6 !== h && 8 !== h) throw new Error("Invalid aes key size");
									for (u = e.slice(0), l = [], this._key = [u, l], i = h; i < 4 * h + 28; i++) o = u[i - 1], (i % h == 0 || 8 === h && i % h == 4) && (o = c[o >>> 24] << 24 ^ c[o >> 16 & 255] << 16 ^ c[o >> 8 & 255] << 8 ^ c[255 & o], i % h == 0 && (o = o << 8 ^ o >>> 24 ^ p << 24, p = p << 1 ^ 283 * (p >> 7))), u[i] = u[i - h] ^ o;
									for (r = 0; i; r++, i--) o = u[3 & r ? i : i - 4], l[r] = i <= 4 || r < 4 ? o : d[0][c[o >>> 24]] ^ d[1][c[o >> 16 & 255]] ^ d[2][c[o >> 8 & 255]] ^ d[3][c[255 & o]]
								}
								return r(t, [{
									key: "decrypt",
									value: function(t, e, i, n, r, a) {
										var s = this._key[1],
											o = t ^ s[0],
											u = n ^ s[1],
											l = i ^ s[2],
											c = e ^ s[3],
											d = void 0,
											h = void 0,
											p = void 0,
											f = s.length / 4 - 2,
											m = void 0,
											g = 4,
											y = this._tables[1],
											v = y[0],
											_ = y[1],
											b = y[2],
											T = y[3],
											S = y[4];
										for (m = 0; m < f; m++) d = v[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g], h = v[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1], p = v[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2], c = v[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3], g += 4, o = d, u = h, l = p;
										for (m = 0; m < 4; m++) r[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++], d = o, o = u, u = l, l = c, c = d
									}
								}]), t
							}();
						i.
						default = o, e.exports = i.
						default
					}, {}],
					23: [function(t, e, i) {
						"use strict";

						function n(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}
						function r(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var a = function() {
							function t(t, e) {
								for (var i = 0; i < e.length; i++) {
									var n = e[i];
									n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
								}
							}
							return function(e, i, n) {
								return i && t(e.prototype, i), n && t(e, n), e
							}
						}(),
							s = function(t, e, i) {
								for (var n = !0; n;) {
									var r = t,
										a = e,
										s = i;
									n = !1, null === r && (r = Function.prototype);
									var o = Object.getOwnPropertyDescriptor(r, a);
									if (void 0 !== o) {
										if ("value" in o) return o.value;
										var u = o.get;
										if (void 0 === u) return;
										return u.call(s)
									}
									var l = Object.getPrototypeOf(r);
									if (null === l) return;
									t = l, e = a, i = s, n = !0, o = l = void 0
								}
							}, o = t("./stream"),
							u = function(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}(o),
							l = function(t) {
								function e() {
									n(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, u.
									default), this.jobs = [], this.delay = 1, this.timeout_ = null
								}
								return r(e, t), a(e, [{
									key: "processJob_",
									value: function() {
										this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
									}
								}, {
									key: "push",
									value: function(t) {
										this.jobs.push(t), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
									}
								}]), e
							}(u.
							default);
						i.
						default = l, e.exports = i.
						default
					}, {
						"./stream": 26
					}],
					24: [function(t, e, i) {
						"use strict";

						function n(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}
						function r(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var a = function() {
							function t(t, e) {
								for (var i = 0; i < e.length; i++) {
									var n = e[i];
									n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
								}
							}
							return function(e, i, n) {
								return i && t(e.prototype, i), n && t(e, n), e
							}
						}(),
							s = t("./aes"),
							o = n(s),
							u = t("./async-stream"),
							l = n(u),
							c = t("pkcs7"),
							d = function(t) {
								return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
							}, h = function(t, e, i) {
								var n = new Int32Array(t.buffer, t.byteOffset, t.byteLength >> 2),
									r = new o.
								default (Array.prototype.slice.call(e)), a = new Uint8Array(t.byteLength), s = new Int32Array(a.buffer), u = void 0, l = void 0, c = void 0, h = void 0, p = void 0, f = void 0, m = void 0, g = void 0, y = void 0;
								for (u = i[0], l = i[1], c = i[2], h = i[3], y = 0; y < n.length; y += 4) p = d(n[y]), f = d(n[y + 1]), m = d(n[y + 2]), g = d(n[y + 3]), r.decrypt(p, f, m, g, s, y), s[y] = d(s[y] ^ u), s[y + 1] = d(s[y + 1] ^ l), s[y + 2] = d(s[y + 2] ^ c), s[y + 3] = d(s[y + 3] ^ h), u = p, l = f, c = m, h = g;
								return a
							};
						i.decrypt = h;
						var p = function() {
							function t(e, i, n, a) {
								r(this, t);
								var s = t.STEP,
									o = new Int32Array(e.buffer),
									u = new Uint8Array(e.byteLength),
									h = 0;
								for (this.asyncStream_ = new l.
								default, this.asyncStream_.push(this.decryptChunk_(o.subarray(h, h + s), i, n, u)), h = s; h < o.length; h += s) n = new Uint32Array([d(o[h - 4]), d(o[h - 3]), d(o[h - 2]), d(o[h - 1])]), this.asyncStream_.push(this.decryptChunk_(o.subarray(h, h + s), i, n, u));
								this.asyncStream_.push(function() {
									a(null, (0, c.unpad)(u))
								})
							}
							return a(t, [{
								key: "decryptChunk_",
								value: function(t, e, i, n) {
									return function() {
										var r = h(t, e, i);
										n.set(r, t.byteOffset)
									}
								}
							}], [{
								key: "STEP",
								get: function() {
									return 32e3
								}
							}]), t
						}();
						i.Decrypter = p, i.
						default = {
							Decrypter: p,
							decrypt: h
						}
					}, {
						"./aes": 22,
						"./async-stream": 23,
						pkcs7: 28
					}],
					25: [function(t, e, i) {
						"use strict";
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var n = t("./decrypter"),
							r = t("./async-stream"),
							a = function(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}(r);
						i.
						default = {
							decrypt: n.decrypt,
							Decrypter: n.Decrypter,
							AsyncStream: a.
							default
						}, e.exports = i.
						default
					}, {
						"./async-stream": 23,
						"./decrypter": 24
					}],
					26: [function(t, e, i) {
						"use strict";

						function n(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var r = function() {
							function t(t, e) {
								for (var i = 0; i < e.length; i++) {
									var n = e[i];
									n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
								}
							}
							return function(e, i, n) {
								return i && t(e.prototype, i), n && t(e, n), e
							}
						}(),
							a = function() {
								function t() {
									n(this, t), this.listeners = {}
								}
								return r(t, [{
									key: "on",
									value: function(t, e) {
										this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
									}
								}, {
									key: "off",
									value: function(t, e) {
										var i = void 0;
										return !!this.listeners[t] && (i = this.listeners[t].indexOf(e), this.listeners[t].splice(i, 1), i > -1)
									}
								}, {
									key: "trigger",
									value: function(t) {
										var e = void 0,
											i = void 0,
											n = void 0,
											r = void 0;
										if (e = this.listeners[t]) if (2 === arguments.length) for (n = e.length, i = 0; i < n; ++i) e[i].call(this, arguments[1]);
										else for (r = Array.prototype.slice.call(arguments, 1), n = e.length, i = 0; i < n; ++i) e[i].apply(this, r)
									}
								}, {
									key: "dispose",
									value: function() {
										this.listeners = {}
									}
								}, {
									key: "pipe",
									value: function(t) {
										this.on("data", function(e) {
											t.push(e)
										})
									}
								}]), t
							}();
						i.
						default = a, e.exports = i.
						default
					}, {}],
					27: [function(t, e, i) {
						"use strict";
						var n;
						e.exports = function(t) {
							var e = n[t.byteLength % 16 || 0],
								i = new Uint8Array(t.byteLength + e.length);
							return i.set(t), i.set(e, t.byteLength), i
						}, n = [
							[16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
							[15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
							[14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
							[13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
							[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
							[11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
							[10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
							[9, 9, 9, 9, 9, 9, 9, 9, 9],
							[8, 8, 8, 8, 8, 8, 8, 8],
							[7, 7, 7, 7, 7, 7, 7],
							[6, 6, 6, 6, 6, 6],
							[5, 5, 5, 5, 5],
							[4, 4, 4, 4],
							[3, 3, 3],
							[2, 2],
							[1]
						]
					}, {}],
					28: [function(t, e, i) {
						"use strict";
						i.pad = t("./pad.js"), i.unpad = t("./unpad.js")
					}, {
						"./pad.js": 27,
						"./unpad.js": 29
					}],
					29: [function(t, e, i) {
						"use strict";
						e.exports = function(t) {
							return t.subarray(0, t.byteLength - t[t.byteLength - 1])
						}
					}, {}],
					30: [function(t, e, i) {}, {}],
					31: [function(t, e, i) {
						(function(i) {
							var n, r = void 0 !== i ? i : "undefined" != typeof window ? window : {}, a = t("min-document");
							"undefined" != typeof document ? n = document : (n = r["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = r["__GLOBAL_DOCUMENT_CACHE@4"] = a), e.exports = n
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"min-document": 30
					}],
					32: [function(t, e, i) {
						(function(t) {
							var i;
							i = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = i
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {}],
					33: [function(t, e, i) {
						"use strict";

						function n(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}
						var r = t("./line-stream"),
							a = n(r),
							s = t("./parse-stream"),
							o = n(s),
							u = t("./parser"),
							l = n(u);
						e.exports = {
							LineStream: a.
							default,
							ParseStream: o.
							default,
							Parser: l.
							default
						}
					}, {
						"./line-stream": 34,
						"./parse-stream": 35,
						"./parser": 36
					}],
					34: [function(t, e, i) {
						"use strict";

						function n(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}
						function r(t, e) {
							if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !e || "object" != typeof e && "function" != typeof e ? t : e
						}
						function a(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var s = function() {
							function t(t, e) {
								for (var i = 0; i < e.length; i++) {
									var n = e[i];
									n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
								}
							}
							return function(e, i, n) {
								return i && t(e.prototype, i), n && t(e, n), e
							}
						}(),
							o = t("./stream"),
							u = function(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}(o),
							l = function(t) {
								function e() {
									n(this, e);
									var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
									return t.buffer = "", t
								}
								return a(e, t), s(e, [{
									key: "push",
									value: function(t) {
										var e = void 0;
										for (this.buffer += t, e = this.buffer.indexOf("\n"); e > -1; e = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, e)), this.buffer = this.buffer.substring(e + 1)
									}
								}]), e
							}(u.
							default);
						i.
						default = l
					}, {
						"./stream": 37
					}],
					35: [function(t, e, i) {
						"use strict";

						function n(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}
						function r(t, e) {
							if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !e || "object" != typeof e && "function" != typeof e ? t : e
						}
						function a(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var s = function() {
							function t(t, e) {
								var i = [],
									n = !0,
									r = !1,
									a = void 0;
								try {
									for (var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
								} catch (t) {
									r = !0, a = t
								} finally {
									try {
										!n && o.
										return &&o.
										return ()
									} finally {
										if (r) throw a
									}
								}
								return i
							}
							return function(e, i) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return t(e, i);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}
						}(),
							o = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
							u = t("./stream"),
							l = function(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}(u),
							c = function() {
								return new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')
							}, d = function(t) {
								for (var e = t.split(c()), i = {}, n = e.length, r = void 0; n--;) "" !== e[n] && (r = /([^=]*)=(.*)/.exec(e[n]).slice(1), r[0] = r[0].replace(/^\s+|\s+$/g, ""), r[1] = r[1].replace(/^\s+|\s+$/g, ""), r[1] = r[1].replace(/^['"](.*)['"]$/g, "$1"), i[r[0]] = r[1]);
								return i
							}, h = function(t) {
								function e() {
									return n(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
								}
								return a(e, t), o(e, [{
									key: "push",
									value: function(t) {
										var e = void 0,
											i = void 0;
										if (t = t.replace(/^[\u0000\s]+|[\u0000\s]+$/g, ""), 0 !== t.length) {
											if ("#" !== t[0]) return void this.trigger("data", {
												type: "uri",
												uri: t
											});
											if (0 !== t.indexOf("#EXT")) return void this.trigger("data", {
												type: "comment",
												text: t.slice(1)
											});
											if (t = t.replace("\r", ""), e = /^#EXTM3U/.exec(t)) return void this.trigger("data", {
												type: "tag",
												tagType: "m3u"
											});
											if (e = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t)) return i = {
												type: "tag",
												tagType: "inf"
											}, e[1] && (i.duration = parseFloat(e[1])), e[2] && (i.title = e[2]), void this.trigger("data", i);
											if (e = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t)) return i = {
												type: "tag",
												tagType: "targetduration"
											}, e[1] && (i.duration = parseInt(e[1], 10)), void this.trigger("data", i);
											if (e = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t)) return i = {
												type: "tag",
												tagType: "totalduration"
											}, e[1] && (i.duration = parseInt(e[1], 10)), void this.trigger("data", i);
											if (e = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(t)) return i = {
												type: "tag",
												tagType: "version"
											}, e[1] && (i.version = parseInt(e[1], 10)), void this.trigger("data", i);
											if (e = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return i = {
												type: "tag",
												tagType: "media-sequence"
											}, e[1] && (i.number = parseInt(e[1], 10)), void this.trigger("data", i);
											if (e = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return i = {
												type: "tag",
												tagType: "discontinuity-sequence"
											}, e[1] && (i.number = parseInt(e[1], 10)), void this.trigger("data", i);
											if (e = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t)) return i = {
												type: "tag",
												tagType: "playlist-type"
											}, e[1] && (i.playlistType = e[1]), void this.trigger("data", i);
											if (e = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t)) return i = {
												type: "tag",
												tagType: "byterange"
											}, e[1] && (i.length = parseInt(e[1], 10)), e[2] && (i.offset = parseInt(e[2], 10)), void this.trigger("data", i);
											if (e = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t)) return i = {
												type: "tag",
												tagType: "allow-cache"
											}, e[1] && (i.allowed = !/NO/.test(e[1])), void this.trigger("data", i);
											if (e = /^#EXT-X-MAP:?(.*)$/.exec(t)) {
												if (i = {
													type: "tag",
													tagType: "map"
												}, e[1]) {
													var n = d(e[1]);
													if (n.URI && (i.uri = n.URI), n.BYTERANGE) {
														var r = n.BYTERANGE.split("@"),
															a = s(r, 2),
															o = a[0],
															u = a[1];
														i.byterange = {}, o && (i.byterange.length = parseInt(o, 10)), u && (i.byterange.offset = parseInt(u, 10))
													}
												}
												return void this.trigger("data", i)
											}
											if (e = /^#EXT-X-STREAM-INF:?(.*)$/.exec(t)) {
												if (i = {
													type: "tag",
													tagType: "stream-inf"
												}, e[1]) {
													if (i.attributes = d(e[1]), i.attributes.RESOLUTION) {
														var l = i.attributes.RESOLUTION.split("x"),
															c = {};
														l[0] && (c.width = parseInt(l[0], 10)), l[1] && (c.height = parseInt(l[1], 10)), i.attributes.RESOLUTION = c
													}
													i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)), i.attributes["PROGRAM-ID"] && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10))
												}
												return void this.trigger("data", i)
											}
											if (e = /^#EXT-X-MEDIA:?(.*)$/.exec(t)) return i = {
												type: "tag",
												tagType: "media"
											}, e[1] && (i.attributes = d(e[1])), void this.trigger("data", i);
											if (e = /^#EXT-X-ENDLIST/.exec(t)) return void this.trigger("data", {
												type: "tag",
												tagType: "endlist"
											});
											if (e = /^#EXT-X-DISCONTINUITY/.exec(t)) return void this.trigger("data", {
												type: "tag",
												tagType: "discontinuity"
											});
											if (e = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t)) return i = {
												type: "tag",
												tagType: "program-date-time"
											}, e[1] && (i.dateTimeString = e[1], i.dateTimeObject = new Date(e[1])), void this.trigger("data", i);
											if (e = /^#EXT-X-KEY:?(.*)$/.exec(t)) return i = {
												type: "tag",
												tagType: "key"
											}, e[1] && (i.attributes = d(e[1]), i.attributes.IV && ("0x" === i.attributes.IV.substring(0, 2).toLowerCase() && (i.attributes.IV = i.attributes.IV.substring(2)), i.attributes.IV = i.attributes.IV.match(/.{8}/g), i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16), i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16), i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16), i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16), i.attributes.IV = new Uint32Array(i.attributes.IV))), void this.trigger("data", i);
											if (e = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t)) return i = {
												type: "tag",
												tagType: "cue-out-cont"
											}, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
											if (e = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(t)) return i = {
												type: "tag",
												tagType: "cue-out"
											}, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
											if (e = /^#EXT-X-CUE-IN:?(.*)?$/.exec(t)) return i = {
												type: "tag",
												tagType: "cue-in"
											}, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
											this.trigger("data", {
												type: "tag",
												data: t.slice(4)
											})
										}
									}
								}]), e
							}(l.
							default);
						i.
						default = h
					}, {
						"./stream": 37
					}],
					36: [function(t, e, i) {
						"use strict";

						function n(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}
						function r(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}
						function a(t, e) {
							if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !e || "object" != typeof e && "function" != typeof e ? t : e
						}
						function s(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var o = Object.assign || function(t) {
								for (var e = 1; e < arguments.length; e++) {
									var i = arguments[e];
									for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
								}
								return t
							}, u = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
							l = t("./stream"),
							c = n(l),
							d = t("./line-stream"),
							h = n(d),
							p = t("./parse-stream"),
							f = n(p),
							m = function(t) {
								function e() {
									r(this, e);
									var t = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
									t.lineStream = new h.
									default, t.parseStream = new f.
									default, t.lineStream.pipe(t.parseStream);
									var i = t,
										n = [],
										s = {}, u = void 0,
										l = void 0,
										c = function() {}, d = {
											AUDIO: {},
											VIDEO: {},
											"CLOSED-CAPTIONS": {},
											SUBTITLES: {}
										}, p = 0;
									return t.manifest = {
										allowCache: !0,
										discontinuityStarts: [],
										segments: []
									}, t.parseStream.on("data", function(t) {
										var e = void 0,
											r = void 0;
										({
											tag: function() {
												(({
													"allow-cache": function() {
														this.manifest.allowCache = t.allowed, "allowed" in t || (this.trigger("info", {
															message: "defaulting allowCache to YES"
														}), this.manifest.allowCache = !0)
													},
													byterange: function() {
														var e = {};
														"length" in t && (s.byterange = e, e.length = t.length, "offset" in t || (this.trigger("info", {
															message: "defaulting offset to zero"
														}), t.offset = 0)), "offset" in t && (s.byterange = e, e.offset = t.offset)
													},
													endlist: function() {
														this.manifest.endList = !0
													},
													inf: function() {
														"mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
															message: "defaulting media sequence to zero"
														})), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
															message: "defaulting discontinuity sequence to zero"
														})), t.duration > 0 && (s.duration = t.duration), 0 === t.duration && (s.duration = .01, this.trigger("info", {
															message: "updating zero segment duration to a small value"
														})), this.manifest.segments = n
													},
													key: function() {
														return t.attributes ? "NONE" === t.attributes.METHOD ? void(l = null) : t.attributes.URI ? (t.attributes.METHOD || this.trigger("warn", {
															message: "defaulting key method to AES-128"
														}), l = {
															method: t.attributes.METHOD || "AES-128",
															uri: t.attributes.URI
														}, void(void 0 !== t.attributes.IV && (l.iv = t.attributes.IV))) : void this.trigger("warn", {
															message: "ignoring key declaration without URI"
														}) : void this.trigger("warn", {
															message: "ignoring key declaration without attribute list"
														})
													},
													"media-sequence": function() {
														if (!isFinite(t.number)) return void this.trigger("warn", {
															message: "ignoring invalid media sequence: " + t.number
														});
														this.manifest.mediaSequence = t.number
													},
													"discontinuity-sequence": function() {
														if (!isFinite(t.number)) return void this.trigger("warn", {
															message: "ignoring invalid discontinuity sequence: " + t.number
														});
														this.manifest.discontinuitySequence = t.number, p = t.number
													},
													"playlist-type": function() {
														if (!/VOD|EVENT/.test(t.playlistType)) return void this.trigger("warn", {
															message: "ignoring unknown playlist type: " + t.playlist
														});
														this.manifest.playlistType = t.playlistType
													},
													map: function() {
														u = {}, t.uri && (u.uri = t.uri), t.byterange && (u.byterange = t.byterange)
													},
													"stream-inf": function() {
														if (this.manifest.playlists = n, this.manifest.mediaGroups = this.manifest.mediaGroups || d, !t.attributes) return void this.trigger("warn", {
															message: "ignoring empty stream-inf attributes"
														});
														s.attributes || (s.attributes = {}), o(s.attributes, t.attributes)
													},
													media: function() {
														if (this.manifest.mediaGroups = this.manifest.mediaGroups || d, !(t.attributes && t.attributes.TYPE && t.attributes["GROUP-ID"] && t.attributes.NAME)) return void this.trigger("warn", {
															message: "ignoring incomplete or missing media group"
														});
														var i = this.manifest.mediaGroups[t.attributes.TYPE];
														i[t.attributes["GROUP-ID"]] = i[t.attributes["GROUP-ID"]] || {}, e = i[t.attributes["GROUP-ID"]], r = {
															default: /yes/i.test(t.attributes.DEFAULT)
														}, r.
														default ? r.autoselect = !0 : r.autoselect = /yes/i.test(t.attributes.AUTOSELECT), t.attributes.LANGUAGE && (r.language = t.attributes.LANGUAGE), t.attributes.URI && (r.uri = t.attributes.URI), t.attributes["INSTREAM-ID"] && (r.instreamId = t.attributes["INSTREAM-ID"]), t.attributes.CHARACTERISTICS && (r.characteristics = t.attributes.CHARACTERISTICS), t.attributes.FORCED && (r.forced = /yes/i.test(t.attributes.FORCED)), e[t.attributes.NAME] = r
													},
													discontinuity: function() {
														p += 1, s.discontinuity = !0, this.manifest.discontinuityStarts.push(n.length)
													},
													"program-date-time": function() {
														this.manifest.dateTimeString = t.dateTimeString, this.manifest.dateTimeObject = t.dateTimeObject
													},
													targetduration: function() {
														if (!isFinite(t.duration) || t.duration < 0) return void this.trigger("warn", {
															message: "ignoring invalid target duration: " + t.duration
														});
														this.manifest.targetDuration = t.duration
													},
													totalduration: function() {
														if (!isFinite(t.duration) || t.duration < 0) return void this.trigger("warn", {
															message: "ignoring invalid total duration: " + t.duration
														});
														this.manifest.totalDuration = t.duration
													},
													"cue-out": function() {
														s.cueOut = t.data
													},
													"cue-out-cont": function() {
														s.cueOutCont = t.data
													},
													"cue-in": function() {
														s.cueIn = t.data
													}
												})[t.tagType] || c).call(i)
											},
											uri: function() {
												s.uri = t.uri, n.push(s), !this.manifest.targetDuration || "duration" in s || (this.trigger("warn", {
													message: "defaulting segment duration to the target duration"
												}), s.duration = this.manifest.targetDuration), l && (s.key = l), s.timeline = p, u && (s.map = u), s = {}
											},
											comment: function() {}
										})[t.type].call(i)
									}), t
								}
								return s(e, t), u(e, [{
									key: "push",
									value: function(t) {
										this.lineStream.push(t)
									}
								}, {
									key: "end",
									value: function() {
										this.lineStream.push("\n")
									}
								}]), e
							}(c.
							default);
						i.
						default = m
					}, {
						"./line-stream": 34,
						"./parse-stream": 35,
						"./stream": 37
					}],
					37: [function(t, e, i) {
						"use strict";

						function n(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var r = function() {
							function t(t, e) {
								for (var i = 0; i < e.length; i++) {
									var n = e[i];
									n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
								}
							}
							return function(e, i, n) {
								return i && t(e.prototype, i), n && t(e, n), e
							}
						}(),
							a = function() {
								function t() {
									n(this, t), this.listeners = {}
								}
								return r(t, [{
									key: "on",
									value: function(t, e) {
										this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
									}
								}, {
									key: "off",
									value: function(t, e) {
										if (!this.listeners[t]) return !1;
										var i = this.listeners[t].indexOf(e);
										return this.listeners[t].splice(i, 1), i > -1
									}
								}, {
									key: "trigger",
									value: function(t) {
										var e = this.listeners[t],
											i = void 0,
											n = void 0,
											r = void 0;
										if (e) if (2 === arguments.length) for (n = e.length, i = 0; i < n; ++i) e[i].call(this, arguments[1]);
										else for (r = Array.prototype.slice.call(arguments, 1), n = e.length, i = 0; i < n; ++i) e[i].apply(this, r)
									}
								}, {
									key: "dispose",
									value: function() {
										this.listeners = {}
									}
								}, {
									key: "pipe",
									value: function(t) {
										this.on("data", function(e) {
											t.push(e)
										})
									}
								}]), t
							}();
						i.
						default = a
					}, {}],
					38: [function(t, e, i) {
						"use strict";
						var n, r = t("../utils/stream.js");
						n = function() {
							var t = new Uint8Array,
								e = 0;
							n.prototype.init.call(this), this.setTimestamp = function(t) {
								e = t
							}, this.parseId3TagSize = function(t, e) {
								var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
								return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
							}, this.parseAdtsSize = function(t, e) {
								var i = (224 & t[e + 5]) >> 5,
									n = t[e + 4] << 3;
								return 6144 & t[e + 3] | n | i
							}, this.push = function(i) {
								var n, r, a, s, o = 0,
									u = 0;
								for (t.length ? (s = t.length, t = new Uint8Array(i.byteLength + s), t.set(t.subarray(0, s)), t.set(i, s)) : t = i; t.length - u >= 3;) if (t[u] !== "I".charCodeAt(0) || t[u + 1] !== "D".charCodeAt(0) || t[u + 2] !== "3".charCodeAt(0)) if (!0 & t[u] && 240 == (240 & t[u + 1])) {
									if (t.length - u < 7) break;
									if ((o = this.parseAdtsSize(t, u)) > t.length) break;
									a = {
										type: "audio",
										data: t.subarray(u, u + o),
										pts: e,
										dts: e
									}, this.trigger("data", a), u += o
								} else u++;
								else {
									if (t.length - u < 10) break;
									if ((o = this.parseId3TagSize(t, u)) > t.length) break;
									r = {
										type: "timed-metadata",
										data: t.subarray(u, u + o)
									}, this.trigger("data", r), u += o
								}
								n = t.length - u, t = n > 0 ? t.subarray(u) : new Uint8Array
							}
						}, n.prototype = new r, e.exports = n
					}, {
						"../utils/stream.js": 62
					}],
					39: [function(t, e, i) {
						"use strict";
						var n = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
							r = function(t) {
								return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
							}, a = function(t, e, i) {
								var n, r = "";
								for (n = e; n < i; n++) r += "%" + ("00" + t[n].toString(16)).slice(-2);
								return r
							}, s = function(t, e, i) {
								return unescape(a(t, e, i))
							}, o = function(t, e) {
								var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
								return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
							}, u = function(t, e) {
								var i = (224 & t[e + 5]) >> 5,
									n = t[e + 4] << 3;
								return 6144 & t[e + 3] | n | i
							}, l = function(t, e) {
								return t[e] === "I".charCodeAt(0) && t[e + 1] === "D".charCodeAt(0) && t[e + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & t[e] && 240 == (240 & t[e + 1]) ? "audio" : null
							}, c = function(t) {
								for (var e = 0; e + 5 < t.length;) {
									if (255 === t[e] && 240 == (246 & t[e + 1])) return n[(60 & t[e + 2]) >>> 2];
									e++
								}
								return null
							}, d = function(t) {
								var e, i, n;
								e = 10, 64 & t[5] && (e += 4, e += r(t.subarray(10, 14)));
								do {
									if ((i = r(t.subarray(e + 4, e + 8))) < 1) return null;
									if ("PRIV" === String.fromCharCode(t[e], t[e + 1], t[e + 2], t[e + 3])) {
										n = t.subarray(e + 10, e + i + 10);
										for (var a = 0; a < n.byteLength; a++) if (0 === n[a]) {
											var o = s(n, 0, a);
											if ("com.apple.streaming.transportStreamTimestamp" === o) {
												var u = n.subarray(a + 1),
													l = (1 & u[3]) << 30 | u[4] << 22 | u[5] << 14 | u[6] << 6 | u[7] >>> 2;
												return l *= 4, l += 3 & u[7]
											}
											break
										}
									}
									e += 10, e += i
								} while (e < t.byteLength);
								return null
							};
						e.exports = {
							parseId3TagSize: o,
							parseAdtsSize: u,
							parseType: l,
							parseSampleRate: c,
							parseAacTimestamp: d
						}
					}, {}],
					40: [function(t, e, i) {
						"use strict";
						var n, r = t("../utils/stream.js"),
							a = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
						n = function() {
							var t;
							n.prototype.init.call(this), this.push = function(e) {
								var i, n, r, s, o, u, l = 0,
									c = 0;
								if ("audio" === e.type) for (t ? (s = t, t = new Uint8Array(s.byteLength + e.data.byteLength), t.set(s), t.set(e.data, s.byteLength)) : t = e.data; l + 5 < t.length;) if (255 === t[l] && 240 == (246 & t[l + 1])) {
									if (n = 2 * (1 & ~t[l + 1]), i = (3 & t[l + 3]) << 11 | t[l + 4] << 3 | (224 & t[l + 5]) >> 5, o = 1024 * (1 + (3 & t[l + 6])), u = 9e4 * o / a[(60 & t[l + 2]) >>> 2], r = l + i, t.byteLength < r) return;
									if (this.trigger("data", {
										pts: e.pts + c * u,
										dts: e.dts + c * u,
										sampleCount: o,
										audioobjecttype: 1 + (t[l + 2] >>> 6 & 3),
										channelcount: (1 & t[l + 2]) << 2 | (192 & t[l + 3]) >>> 6,
										samplerate: a[(60 & t[l + 2]) >>> 2],
										samplingfrequencyindex: (60 & t[l + 2]) >>> 2,
										samplesize: 16,
										data: t.subarray(l + 7 + n, r)
									}), t.byteLength === r) return void(t = void 0);
									c++, t = t.subarray(r)
								} else l++
							}, this.flush = function() {
								this.trigger("done")
							}
						}, n.prototype = new r, e.exports = n
					}, {
						"../utils/stream.js": 62
					}],
					41: [function(t, e, i) {
						"use strict";
						var n, r, a, s = t("../utils/stream.js"),
							o = t("../utils/exp-golomb.js");
						r = function() {
							var t, e, i = 0;
							r.prototype.init.call(this), this.push = function(n) {
								var r;
								for (e ? (r = new Uint8Array(e.byteLength + n.data.byteLength), r.set(e), r.set(n.data, e.byteLength), e = r) : e = n.data; i < e.byteLength - 3; i++) if (1 === e[i + 2]) {
									t = i + 5;
									break
								}
								for (; t < e.byteLength;) switch (e[t]) {
									case 0:
										if (0 !== e[t - 1]) {
											t += 2;
											break
										}
										if (0 !== e[t - 2]) {
											t++;
											break
										}
										i + 3 !== t - 2 && this.trigger("data", e.subarray(i + 3, t - 2));
										do {
											t++
										} while (1 !== e[t] && t < e.length);
										i = t - 2, t += 3;
										break;
									case 1:
										if (0 !== e[t - 1] || 0 !== e[t - 2]) {
											t += 3;
											break
										}
										this.trigger("data", e.subarray(i + 3, t - 2)), i = t - 2, t += 3;
										break;
									default:
										t += 3
								}
								e = e.subarray(i), t -= i, i = 0
							}, this.flush = function() {
								e && e.byteLength > 3 && this.trigger("data", e.subarray(i + 3)), e = null, i = 0, this.trigger("done")
							}
						}, r.prototype = new s, a = {
							100: !0,
							110: !0,
							122: !0,
							244: !0,
							44: !0,
							83: !0,
							86: !0,
							118: !0,
							128: !0,
							138: !0,
							139: !0,
							134: !0
						}, n = function() {
							var t, e, i, s, u, l, c, d = new r;
							n.prototype.init.call(this), t = this, this.push = function(t) {
								"video" === t.type && (e = t.trackId, i = t.pts, s = t.dts, d.push(t))
							}, d.on("data", function(n) {
								var r = {
									trackId: e,
									pts: i,
									dts: s,
									data: n
								};
								switch (31 & n[0]) {
									case 5:
										r.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
										break;
									case 6:
										r.nalUnitType = "sei_rbsp", r.escapedRBSP = u(n.subarray(1));
										break;
									case 7:
										r.nalUnitType = "seq_parameter_set_rbsp", r.escapedRBSP = u(n.subarray(1)), r.config = l(r.escapedRBSP);
										break;
									case 8:
										r.nalUnitType = "pic_parameter_set_rbsp";
										break;
									case 9:
										r.nalUnitType = "access_unit_delimiter_rbsp"
								}
								t.trigger("data", r)
							}), d.on("done", function() {
								t.trigger("done")
							}), this.flush = function() {
								d.flush()
							}, c = function(t, e) {
								var i, n, r = 8,
									a = 8;
								for (i = 0; i < t; i++) 0 !== a && (n = e.readExpGolomb(), a = (r + n + 256) % 256), r = 0 === a ? r : a
							}, u = function(t) {
								for (var e, i, n = t.byteLength, r = [], a = 1; a < n - 2;) 0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2] ? (r.push(a + 2), a += 2) : a++;
								if (0 === r.length) return t;
								e = n - r.length, i = new Uint8Array(e);
								var s = 0;
								for (a = 0; a < e; s++, a++) s === r[0] && (s++, r.shift()), i[a] = t[s];
								return i
							}, l = function(t) {
								var e, i, n, r, s, u, l, d, h, p, f, m, g, y = 0,
									v = 0,
									_ = 0,
									b = 0,
									T = 1;
								if (e = new o(t), i = e.readUnsignedByte(), r = e.readUnsignedByte(), n = e.readUnsignedByte(), e.skipUnsignedExpGolomb(), a[i] && (s = e.readUnsignedExpGolomb(), 3 === s && e.skipBits(1), e.skipUnsignedExpGolomb(), e.skipUnsignedExpGolomb(), e.skipBits(1), e.readBoolean())) for (f = 3 !== s ? 8 : 12, g = 0; g < f; g++) e.readBoolean() && (g < 6 ? c(16, e) : c(64, e));
								if (e.skipUnsignedExpGolomb(), 0 === (u = e.readUnsignedExpGolomb())) e.readUnsignedExpGolomb();
								else if (1 === u) for (e.skipBits(1), e.skipExpGolomb(), e.skipExpGolomb(), l = e.readUnsignedExpGolomb(), g = 0; g < l; g++) e.skipExpGolomb();
								if (e.skipUnsignedExpGolomb(), e.skipBits(1), d = e.readUnsignedExpGolomb(), h = e.readUnsignedExpGolomb(), p = e.readBits(1), 0 === p && e.skipBits(1), e.skipBits(1), e.readBoolean() && (y = e.readUnsignedExpGolomb(), v = e.readUnsignedExpGolomb(), _ = e.readUnsignedExpGolomb(), b = e.readUnsignedExpGolomb()), e.readBoolean() && e.readBoolean()) {
									switch (e.readUnsignedByte()) {
										case 1:
											m = [1, 1];
											break;
										case 2:
											m = [12, 11];
											break;
										case 3:
											m = [10, 11];
											break;
										case 4:
											m = [16, 11];
											break;
										case 5:
											m = [40, 33];
											break;
										case 6:
											m = [24, 11];
											break;
										case 7:
											m = [20, 11];
											break;
										case 8:
											m = [32, 11];
											break;
										case 9:
											m = [80, 33];
											break;
										case 10:
											m = [18, 11];
											break;
										case 11:
											m = [15, 11];
											break;
										case 12:
											m = [64, 33];
											break;
										case 13:
											m = [160, 99];
											break;
										case 14:
											m = [4, 3];
											break;
										case 15:
											m = [3, 2];
											break;
										case 16:
											m = [2, 1];
											break;
										case 255:
											m = [e.readUnsignedByte() << 8 | e.readUnsignedByte(), e.readUnsignedByte() << 8 | e.readUnsignedByte()]
									}
									m && (T = m[0] / m[1])
								}
								return {
									profileIdc: i,
									levelIdc: n,
									profileCompatibility: r,
									width: Math.ceil((16 * (d + 1) - 2 * y - 2 * v) * T),
									height: (2 - p) * (h + 1) * 16 - 2 * _ - 2 * b
								}
							}
						}, n.prototype = new s, e.exports = {
							H264Stream: n,
							NalByteStream: r
						}
					}, {
						"../utils/exp-golomb.js": 61,
						"../utils/stream.js": 62
					}],
					42: [function(t, e, i) {
						var n = [33, 16, 5, 32, 164, 27],
							r = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
							a = function(t) {
								for (var e = []; t--;) e.push(0);
								return e
							}, s = {
								96e3: [n, [227, 64], a(154), [56]],
								88200: [n, [231], a(170), [56]],
								64e3: [n, [248, 192], a(240), [56]],
								48e3: [n, [255, 192], a(268), [55, 148, 128], a(54), [112]],
								44100: [n, [255, 192], a(268), [55, 163, 128], a(84), [112]],
								32e3: [n, [255, 192], a(268), [55, 234], a(226), [112]],
								24e3: [n, [255, 192], a(268), [55, 255, 128], a(268), [111, 112], a(126), [224]],
								16e3: [n, [255, 192], a(268), [55, 255, 128], a(268), [111, 255], a(269), [223, 108], a(195), [1, 192]],
								12e3: [r, a(268), [3, 127, 248], a(268), [6, 255, 240], a(268), [13, 255, 224], a(268), [27, 253, 128], a(259), [56]],
								11025: [r, a(268), [3, 127, 248], a(268), [6, 255, 240], a(268), [13, 255, 224], a(268), [27, 255, 192], a(268), [55, 175, 128], a(108), [112]],
								8e3: [r, a(268), [3, 121, 16], a(47), [7]]
							};
						e.exports = function(t) {
							return Object.keys(t).reduce(function(e, i) {
								return e[i] = new Uint8Array(t[i].reduce(function(t, e) {
									return t.concat(e)
								}, [])), e
							}, {})
						}(s)
					}, {}],
					43: [function(t, e, i) {
						"use strict";
						var n = t("../utils/stream.js"),
							r = function(t) {
								this.numberOfTracks = 0, this.metadataStream = t.metadataStream, this.videoTags = [], this.audioTags = [], this.videoTrack = null, this.audioTrack = null, this.pendingCaptions = [], this.pendingMetadata = [], this.pendingTracks = 0, this.processedTracks = 0, r.prototype.init.call(this), this.push = function(t) {
									return t.text ? this.pendingCaptions.push(t) : t.frames ? this.pendingMetadata.push(t) : ("video" === t.track.type && (this.videoTrack = t.track, this.videoTags = t.tags, this.pendingTracks++), void("audio" === t.track.type && (this.audioTrack = t.track, this.audioTags = t.tags, this.pendingTracks++)))
								}
							};
						r.prototype = new n, r.prototype.flush = function(t) {
							var e, i, n, r, a = {
								tags: {},
								captions: [],
								captionStreams: {},
								metadata: []
							};
							if (this.pendingTracks < this.numberOfTracks) {
								if ("VideoSegmentStream" !== t && "AudioSegmentStream" !== t) return;
								if (0 === this.pendingTracks && ++this.processedTracks < this.numberOfTracks) return
							}
							if (this.processedTracks += this.pendingTracks, this.pendingTracks = 0, !(this.processedTracks < this.numberOfTracks)) {
								for (this.videoTrack ? r = this.videoTrack.timelineStartInfo.pts : this.audioTrack && (r = this.audioTrack.timelineStartInfo.pts), a.tags.videoTags = this.videoTags, a.tags.audioTags = this.audioTags, n = 0; n < this.pendingCaptions.length; n++) i = this.pendingCaptions[n], i.startTime = i.startPts - r, i.startTime /= 9e4, i.endTime = i.endPts - r, i.endTime /= 9e4, a.captionStreams[i.stream] = !0, a.captions.push(i);
								for (n = 0; n < this.pendingMetadata.length; n++) e = this.pendingMetadata[n], e.cueTime = e.pts - r, e.cueTime /= 9e4, a.metadata.push(e);
								a.metadata.dispatchType = this.metadataStream.dispatchType, this.videoTrack = null, this.audioTrack = null, this.videoTags = [], this.audioTags = [], this.pendingCaptions.length = 0, this.pendingMetadata.length = 0, this.pendingTracks = 0, this.processedTracks = 0, this.trigger("data", a), this.trigger("done")
							}
						}, e.exports = r
					}, {
						"../utils/stream.js": 62
					}],
					44: [function(t, e, i) {
						"use strict";
						var n = t("./flv-tag.js"),
							r = function(t, e, i) {
								var r, a, s, o = new Uint8Array(9),
									u = new DataView(o.buffer);
								return t = t || 0, e = void 0 === e || e, i = void 0 === i || i, u.setUint8(0, 70), u.setUint8(1, 76), u.setUint8(2, 86), u.setUint8(3, 1), u.setUint8(4, (e ? 4 : 0) | (i ? 1 : 0)), u.setUint32(5, o.byteLength), t <= 0 ? (a = new Uint8Array(o.byteLength + 4), a.set(o), a.set([0, 0, 0, 0], o.byteLength), a) : (r = new n(n.METADATA_TAG), r.pts = r.dts = 0, r.writeMetaDataDouble("duration", t), s = r.finalize().length, a = new Uint8Array(o.byteLength + s), a.set(o), a.set(u.byteLength, s), a)
							};
						e.exports = r
					}, {
						"./flv-tag.js": 45
					}],
					45: [function(t, e, i) {
						"use strict";
						var n;
						n = function(t, e) {
							var i, r = 0,
								a = 16384,
								s = function(t, e) {
									var i, n = t.position + e;
									n < t.bytes.byteLength || (i = new Uint8Array(2 * n), i.set(t.bytes.subarray(0, t.position), 0), t.bytes = i, t.view = new DataView(t.bytes.buffer))
								}, o = n.widthBytes || new Uint8Array("width".length),
								u = n.heightBytes || new Uint8Array("height".length),
								l = n.videocodecidBytes || new Uint8Array("videocodecid".length);
							if (!n.widthBytes) {
								for (i = 0; i < "width".length; i++) o[i] = "width".charCodeAt(i);
								for (i = 0; i < "height".length; i++) u[i] = "height".charCodeAt(i);
								for (i = 0; i < "videocodecid".length; i++) l[i] = "videocodecid".charCodeAt(i);
								n.widthBytes = o, n.heightBytes = u, n.videocodecidBytes = l
							}
							switch (this.keyFrame = !1, t) {
								case n.VIDEO_TAG:
									this.length = 16, a *= 6;
									break;
								case n.AUDIO_TAG:
									this.length = 13, this.keyFrame = !0;
									break;
								case n.METADATA_TAG:
									this.length = 29, this.keyFrame = !0;
									break;
								default:
									throw new Error("Unknown FLV tag type")
							}
							this.bytes = new Uint8Array(a), this.view = new DataView(this.bytes.buffer), this.bytes[0] = t, this.position = this.length, this.keyFrame = e, this.pts = 0, this.dts = 0, this.writeBytes = function(t, e, i) {
								var n, r = e || 0;
								i = i || t.byteLength, n = r + i, s(this, i), this.bytes.set(t.subarray(r, n), this.position), this.position += i, this.length = Math.max(this.length, this.position)
							}, this.writeByte = function(t) {
								s(this, 1), this.bytes[this.position] = t, this.position++, this.length = Math.max(this.length, this.position)
							}, this.writeShort = function(t) {
								s(this, 2), this.view.setUint16(this.position, t), this.position += 2, this.length = Math.max(this.length, this.position)
							}, this.negIndex = function(t) {
								return this.bytes[this.length - t]
							}, this.nalUnitSize = function() {
								return 0 === r ? 0 : this.length - (r + 4)
							}, this.startNalUnit = function() {
								if (r > 0) throw new Error("Attempted to create new NAL wihout closing the old one");
								r = this.length, this.length += 4, this.position = this.length
							}, this.endNalUnit = function(t) {
								var e, i;
								this.length === r + 4 ? this.length -= 4 : r > 0 && (e = r + 4, i = this.length - e, this.position = r, this.view.setUint32(this.position, i), this.position = this.length, t && t.push(this.bytes.subarray(e, e + i))), r = 0
							}, this.writeMetaDataDouble = function(t, e) {
								var i;
								if (s(this, 2 + t.length + 9), this.view.setUint16(this.position, t.length), this.position += 2, "width" === t) this.bytes.set(o, this.position), this.position += 5;
								else if ("height" === t) this.bytes.set(u, this.position), this.position += 6;
								else if ("videocodecid" === t) this.bytes.set(l, this.position), this.position += 12;
								else for (i = 0; i < t.length; i++) this.bytes[this.position] = t.charCodeAt(i), this.position++;
								this.position++, this.view.setFloat64(this.position, e), this.position += 8, this.length = Math.max(this.length, this.position), ++r
							}, this.writeMetaDataBoolean = function(t, e) {
								var i;
								for (s(this, 2), this.view.setUint16(this.position, t.length), this.position += 2, i = 0; i < t.length; i++) s(this, 1), this.bytes[this.position] = t.charCodeAt(i), this.position++;
								s(this, 2), this.view.setUint8(this.position, 1), this.position++, this.view.setUint8(this.position, e ? 1 : 0), this.position++, this.length = Math.max(this.length, this.position), ++r
							}, this.finalize = function() {
								var t, i;
								switch (this.bytes[0]) {
									case n.VIDEO_TAG:
										this.bytes[11] = 7 | (this.keyFrame || e ? 16 : 32), this.bytes[12] = e ? 0 : 1, t = this.pts - this.dts, this.bytes[13] = (16711680 & t) >>> 16, this.bytes[14] = (65280 & t) >>> 8, this.bytes[15] = (255 & t) >>> 0;
										break;
									case n.AUDIO_TAG:
										this.bytes[11] = 175, this.bytes[12] = e ? 0 : 1;
										break;
									case n.METADATA_TAG:
										this.position = 11, this.view.setUint8(this.position, 2), this.position++, this.view.setUint16(this.position, 10), this.position += 2, this.bytes.set([111, 110, 77, 101, 116, 97, 68, 97, 116, 97], this.position), this.position += 10, this.bytes[this.position] = 8, this.position++, this.view.setUint32(this.position, r), this.position = this.length, this.bytes.set([0, 0, 9], this.position), this.position += 3, this.length = this.position
								}
								return i = this.length - 11, this.bytes[1] = (16711680 & i) >>> 16, this.bytes[2] = (65280 & i) >>> 8, this.bytes[3] = (255 & i) >>> 0, this.bytes[4] = (16711680 & this.dts) >>> 16, this.bytes[5] = (65280 & this.dts) >>> 8, this.bytes[6] = (255 & this.dts) >>> 0, this.bytes[7] = (4278190080 & this.dts) >>> 24, this.bytes[8] = 0, this.bytes[9] = 0, this.bytes[10] = 0, s(this, 4), this.view.setUint32(this.length, this.length), this.length += 4, this.position += 4, this.bytes = this.bytes.subarray(0, this.length), this.frameTime = n.frameTime(this.bytes), this
							}
						}, n.AUDIO_TAG = 8, n.VIDEO_TAG = 9, n.METADATA_TAG = 18, n.isAudioFrame = function(t) {
							return n.AUDIO_TAG === t[0]
						}, n.isVideoFrame = function(t) {
							return n.VIDEO_TAG === t[0]
						}, n.isMetaData = function(t) {
							return n.METADATA_TAG === t[0]
						}, n.isKeyFrame = function(t) {
							return n.isVideoFrame(t) ? 23 === t[11] : !! n.isAudioFrame(t) || !! n.isMetaData(t)
						}, n.frameTime = function(t) {
							var e = t[4] << 16;
							return e |= t[5] << 8, e |= t[6] << 0, e |= t[7] << 24
						}, e.exports = n
					}, {}],
					46: [function(t, e, i) {
						e.exports = {
							tag: t("./flv-tag"),
							Transmuxer: t("./transmuxer"),
							getFlvHeader: t("./flv-header")
						}
					}, {
						"./flv-header": 44,
						"./flv-tag": 45,
						"./transmuxer": 48
					}],
					47: [function(t, e, i) {
						"use strict";
						var n = function() {
							var t = this;
							this.list = [], this.push = function(t) {
								this.list.push({
									bytes: t.bytes,
									dts: t.dts,
									pts: t.pts,
									keyFrame: t.keyFrame,
									metaDataTag: t.metaDataTag
								})
							}, Object.defineProperty(this, "length", {
								get: function() {
									return t.list.length
								}
							})
						};
						e.exports = n
					}, {}],
					48: [function(t, e, i) {
						"use strict";
						var n, r, a, s, o, u, l = t("../utils/stream.js"),
							c = t("./flv-tag.js"),
							d = t("../m2ts/m2ts.js"),
							h = t("../codecs/adts.js"),
							p = t("../codecs/h264").H264Stream,
							f = t("./coalesce-stream.js"),
							m = t("./tag-list.js");
						s = function(t, e) {
							"number" == typeof e.pts && (void 0 === t.timelineStartInfo.pts ? t.timelineStartInfo.pts = e.pts : t.timelineStartInfo.pts = Math.min(t.timelineStartInfo.pts, e.pts)), "number" == typeof e.dts && (void 0 === t.timelineStartInfo.dts ? t.timelineStartInfo.dts = e.dts : t.timelineStartInfo.dts = Math.min(t.timelineStartInfo.dts, e.dts))
						}, o = function(t, e) {
							var i = new c(c.METADATA_TAG);
							return i.dts = e, i.pts = e, i.writeMetaDataDouble("videocodecid", 7), i.writeMetaDataDouble("width", t.width), i.writeMetaDataDouble("height", t.height), i
						}, u = function(t, e) {
							var i, n = new c(c.VIDEO_TAG, !0);
							for (n.dts = e, n.pts = e, n.writeByte(1), n.writeByte(t.profileIdc), n.writeByte(t.profileCompatibility), n.writeByte(t.levelIdc), n.writeByte(255), n.writeByte(225), n.writeShort(t.sps[0].length), n.writeBytes(t.sps[0]), n.writeByte(t.pps.length), i = 0; i < t.pps.length; ++i) n.writeShort(t.pps[i].length), n.writeBytes(t.pps[i]);
							return n
						}, a = function(t) {
							var e, i = [],
								n = [];
							a.prototype.init.call(this), this.push = function(e) {
								s(t, e), t && (t.audioobjecttype = e.audioobjecttype, t.channelcount = e.channelcount, t.samplerate = e.samplerate, t.samplingfrequencyindex = e.samplingfrequencyindex, t.samplesize = e.samplesize, t.extraData = t.audioobjecttype << 11 | t.samplingfrequencyindex << 7 | t.channelcount << 3), e.pts = Math.round(e.pts / 90), e.dts = Math.round(e.dts / 90), i.push(e)
							}, this.flush = function() {
								var r, a, s, o = new m;
								if (0 === i.length) return void this.trigger("done", "AudioSegmentStream");
								for (s = -1 / 0; i.length;) r = i.shift(), n.length && r.pts >= n[0] && (s = n.shift(), this.writeMetaDataTags(o, s)), (t.extraData !== e || r.pts - s >= 1e3) && (this.writeMetaDataTags(o, r.pts), e = t.extraData, s = r.pts), a = new c(c.AUDIO_TAG), a.pts = r.pts, a.dts = r.dts, a.writeBytes(r.data), o.push(a.finalize());
								n.length = 0, e = null, this.trigger("data", {
									track: t,
									tags: o.list
								}), this.trigger("done", "AudioSegmentStream")
							}, this.writeMetaDataTags = function(e, i) {
								var n;
								n = new c(c.METADATA_TAG), n.pts = i, n.dts = i, n.writeMetaDataDouble("audiocodecid", 10), n.writeMetaDataBoolean("stereo", 2 === t.channelcount), n.writeMetaDataDouble("audiosamplerate", t.samplerate), n.writeMetaDataDouble("audiosamplesize", 16), e.push(n.finalize()), n = new c(c.AUDIO_TAG, !0), n.pts = i, n.dts = i, n.view.setUint16(n.position, t.extraData), n.position += 2, n.length = Math.max(n.length, n.position), e.push(n.finalize())
							}, this.onVideoKeyFrame = function(t) {
								n.push(t)
							}
						}, a.prototype = new l, r = function(t) {
							var e, i, n = [];
							r.prototype.init.call(this), this.finishFrame = function(n, r) {
								if (r) {
									if (e && t && t.newMetadata && (r.keyFrame || 0 === n.length)) {
										var a = o(e, r.dts).finalize(),
											s = u(t, r.dts).finalize();
										a.metaDataTag = s.metaDataTag = !0, n.push(a), n.push(s), t.newMetadata = !1, this.trigger("keyframe", r.dts)
									}
									r.endNalUnit(), n.push(r.finalize()), i = null
								}
							}, this.push = function(e) {
								s(t, e), e.pts = Math.round(e.pts / 90), e.dts = Math.round(e.dts / 90), n.push(e)
							}, this.flush = function() {
								for (var r, a = new m; n.length && "access_unit_delimiter_rbsp" !== n[0].nalUnitType;) n.shift();
								if (0 === n.length) return void this.trigger("done", "VideoSegmentStream");
								for (; n.length;) r = n.shift(), "seq_parameter_set_rbsp" === r.nalUnitType ? (t.newMetadata = !0, e = r.config, t.width = e.width, t.height = e.height, t.sps = [r.data], t.profileIdc = e.profileIdc, t.levelIdc = e.levelIdc, t.profileCompatibility = e.profileCompatibility, i.endNalUnit()) : "pic_parameter_set_rbsp" === r.nalUnitType ? (t.newMetadata = !0, t.pps = [r.data], i.endNalUnit()) : "access_unit_delimiter_rbsp" === r.nalUnitType ? (i && this.finishFrame(a, i), i = new c(c.VIDEO_TAG), i.pts = r.pts, i.dts = r.dts) : ("slice_layer_without_partitioning_rbsp_idr" === r.nalUnitType && (i.keyFrame = !0), i.endNalUnit()), i.startNalUnit(), i.writeBytes(r.data);
								i && this.finishFrame(a, i), this.trigger("data", {
									track: t,
									tags: a.list
								}), this.trigger("done", "VideoSegmentStream")
							}
						}, r.prototype = new l, n = function(t) {
							var e, i, s, o, u, l, c, m, g, y, v, _, b = this;
							n.prototype.init.call(this), t = t || {}, this.metadataStream = new d.MetadataStream, t.metadataStream = this.metadataStream, e = new d.TransportPacketStream, i = new d.TransportParseStream, s = new d.ElementaryStream, o = new d.TimestampRolloverStream("video"), u = new d.TimestampRolloverStream("audio"), l = new d.TimestampRolloverStream("timed-metadata"), c = new h, m = new p, _ = new f(t), e.pipe(i).pipe(s), s.pipe(o).pipe(m), s.pipe(u).pipe(c), s.pipe(l).pipe(this.metadataStream).pipe(_), v = new d.CaptionStream, m.pipe(v).pipe(_), s.on("data", function(t) {
								var e, i, n;
								if ("metadata" === t.type) {
									for (e = t.tracks.length; e--;) "video" === t.tracks[e].type ? i = t.tracks[e] : "audio" === t.tracks[e].type && (n = t.tracks[e]);
									i && !g && (_.numberOfTracks++, g = new r(i), m.pipe(g).pipe(_)), n && !y && (_.numberOfTracks++, y = new a(n), c.pipe(y).pipe(_), g && g.on("keyframe", y.onVideoKeyFrame))
								}
							}), this.push = function(t) {
								e.push(t)
							}, this.flush = function() {
								e.flush()
							}, this.resetCaptions = function() {
								v.reset()
							}, _.on("data", function(t) {
								b.trigger("data", t)
							}), _.on("done", function() {
								b.trigger("done")
							})
						}, n.prototype = new l, e.exports = n
					}, {
						"../codecs/adts.js": 40,
						"../codecs/h264": 41,
						"../m2ts/m2ts.js": 50,
						"../utils/stream.js": 62,
						"./coalesce-stream.js": 43,
						"./flv-tag.js": 45,
						"./tag-list.js": 47
					}],
					49: [function(t, e, i) {
						"use strict";
						var n = t("../utils/stream"),
							r = function(t) {
								for (var e = 0, i = {
									payloadType: -1,
									payloadSize: 0
								}, n = 0, r = 0; e < t.byteLength && 128 !== t[e];) {
									for (; 255 === t[e];) n += 255, e++;
									for (n += t[e++]; 255 === t[e];) r += 255, e++;
									if (r += t[e++], !i.payload && 4 === n) {
										i.payloadType = n, i.payloadSize = r, i.payload = t.subarray(e, e + r);
										break
									}
									e += r, n = 0, r = 0
								}
								return i
							}, a = function(t) {
								return 181 !== t.payload[0] ? null : 49 != (t.payload[1] << 8 | t.payload[2]) ? null : "GA94" !== String.fromCharCode(t.payload[3], t.payload[4], t.payload[5], t.payload[6]) ? null : 3 !== t.payload[7] ? null : t.payload.subarray(8, t.payload.length - 1)
							}, s = function(t, e) {
								var i, n, r, a, s = [];
								if (!(64 & e[0])) return s;
								for (n = 31 & e[0], i = 0; i < n; i++) r = 3 * i, a = {
									type: 3 & e[r + 2],
									pts: t
								}, 4 & e[r + 2] && (a.ccData = e[r + 3] << 8 | e[r + 4], s.push(a));
								return s
							}, o = function() {
								o.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new h(0, 0), new h(0, 1), new h(1, 0), new h(1, 1)], this.reset(), this.ccStreams_.forEach(function(t) {
									t.on("data", this.trigger.bind(this, "data")), t.on("done", this.trigger.bind(this, "done"))
								}, this)
							};
						o.prototype = new n, o.prototype.push = function(t) {
							var e, i;
							if ("sei_rbsp" === t.nalUnitType && (e = r(t.escapedRBSP), 4 === e.payloadType && (i = a(e)))) {
								if (t.dts < this.latestDts_) return void(this.ignoreNextEqualDts_ = !0);
								if (t.dts === this.latestDts_ && this.ignoreNextEqualDts_) return void(this.ignoreNextEqualDts_ = !1);
								this.captionPackets_ = this.captionPackets_.concat(s(t.pts, i)), this.latestDts_ = t.dts
							}
						}, o.prototype.flush = function() {
							if (!this.captionPackets_.length) return void this.ccStreams_.forEach(function(t) {
								t.flush()
							}, this);
							this.captionPackets_.forEach(function(t, e) {
								t.presortIndex = e
							}), this.captionPackets_.sort(function(t, e) {
								return t.pts === e.pts ? t.presortIndex - e.presortIndex : t.pts - e.pts
							}), this.captionPackets_.forEach(function(t) {
								t.type < 2 && this.dispatchCea608Packet(t)
							}, this), this.captionPackets_.length = 0, this.ccStreams_.forEach(function(t) {
								t.flush()
							}, this)
						}, o.prototype.reset = function() {
							this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function(t) {
								t.reset()
							})
						}, o.prototype.dispatchCea608Packet = function(t) {
							this.setsChannel1Active(t) ? this.activeCea608Channel_[t.type] = 0 : this.setsChannel2Active(t) && (this.activeCea608Channel_[t.type] = 1), null !== this.activeCea608Channel_[t.type] && this.ccStreams_[(t.type << 1) + this.activeCea608Channel_[t.type]].push(t)
						}, o.prototype.setsChannel1Active = function(t) {
							return 4096 == (30720 & t.ccData)
						}, o.prototype.setsChannel2Active = function(t) {
							return 6144 == (30720 & t.ccData)
						};
						var u = {
							42: 225,
							92: 233,
							94: 237,
							95: 243,
							96: 250,
							123: 231,
							124: 247,
							125: 209,
							126: 241,
							127: 9608,
							304: 174,
							305: 176,
							306: 189,
							307: 191,
							308: 8482,
							309: 162,
							310: 163,
							311: 9834,
							312: 224,
							313: 160,
							314: 232,
							315: 226,
							316: 234,
							317: 238,
							318: 244,
							319: 251,
							544: 193,
							545: 201,
							546: 211,
							547: 218,
							548: 220,
							549: 252,
							550: 8216,
							551: 161,
							552: 42,
							553: 39,
							554: 8212,
							555: 169,
							556: 8480,
							557: 8226,
							558: 8220,
							559: 8221,
							560: 192,
							561: 194,
							562: 199,
							563: 200,
							564: 202,
							565: 203,
							566: 235,
							567: 206,
							568: 207,
							569: 239,
							570: 212,
							571: 217,
							572: 249,
							573: 219,
							574: 171,
							575: 187,
							800: 195,
							801: 227,
							802: 205,
							803: 204,
							804: 236,
							805: 210,
							806: 242,
							807: 213,
							808: 245,
							809: 123,
							810: 125,
							811: 92,
							812: 94,
							813: 95,
							814: 124,
							815: 126,
							816: 196,
							817: 228,
							818: 214,
							819: 246,
							820: 223,
							821: 165,
							822: 164,
							823: 9474,
							824: 197,
							825: 229,
							826: 216,
							827: 248,
							828: 9484,
							829: 9488,
							830: 9492,
							831: 9496
						}, l = function(t) {
							return null === t ? "" : (t = u[t] || t, String.fromCharCode(t))
						}, c = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
							d = function() {
								for (var t = [], e = 15; e--;) t.push("");
								return t
							}, h = function(t, e) {
								h.prototype.init.call(this), this.field_ = t || 0, this.dataChannel_ = e || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function(t) {
									var e, i, n, r, a;
									if ((e = 32639 & t.ccData) === this.lastControlCode_) return void(this.lastControlCode_ = null);
									if (4096 == (61440 & e) ? this.lastControlCode_ = e : e !== this.PADDING_ && (this.lastControlCode_ = null), n = e >>> 8, r = 255 & e, e !== this.PADDING_) if (e === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
									else if (e === this.END_OF_CAPTION_) this.clearFormatting(t.pts), this.flushDisplayed(t.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = t.pts;
									else if (e === this.ROLL_UP_2_ROWS_) this.topRow_ = 13, this.mode_ = "rollUp";
									else if (e === this.ROLL_UP_3_ROWS_) this.topRow_ = 12, this.mode_ = "rollUp";
									else if (e === this.ROLL_UP_4_ROWS_) this.topRow_ = 11, this.mode_ = "rollUp";
									else if (e === this.CARRIAGE_RETURN_) this.clearFormatting(t.pts), this.flushDisplayed(t.pts), this.shiftRowsUp_(), this.startPts_ = t.pts;
									else if (e === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[14] = this.nonDisplayed_[14].slice(0, -1) : this.displayed_[14] = this.displayed_[14].slice(0, -1);
									else if (e === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(t.pts), this.displayed_ = d();
									else if (e === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = d();
									else if (e === this.RESUME_DIRECT_CAPTIONING_) this.mode_ = "paintOn";
									else if (this.isSpecialCharacter(n, r)) n = (3 & n) << 8, a = l(n | r), this[this.mode_](t.pts, a), this.column_++;
									else if (this.isExtCharacter(n, r)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[14] = this.displayed_[14].slice(0, -1), n = (3 & n) << 8, a = l(n | r), this[this.mode_](t.pts, a), this.column_++;
									else if (this.isMidRowCode(n, r)) this.clearFormatting(t.pts), this[this.mode_](t.pts, " "), this.column_++, 14 == (14 & r) && this.addFormatting(t.pts, ["i"]), 1 == (1 & r) && this.addFormatting(t.pts, ["u"]);
									else if (this.isOffsetControlCode(n, r)) this.column_ += 3 & r;
									else if (this.isPAC(n, r)) {
										var s = c.indexOf(7968 & e);
										s !== this.row_ && (this.clearFormatting(t.pts), this.row_ = s), 1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(t.pts, ["u"]), 16 == (16 & e) && (this.column_ = 4 * ((14 & e) >> 1)), this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(t.pts, ["i"])
									} else this.isNormalChar(n) && (0 === r && (r = null), a = l(n), a += l(r), this[this.mode_](t.pts, a), this.column_ += a.length)
								}
							};
						h.prototype = new n, h.prototype.flushDisplayed = function(t) {
							var e = this.displayed_.map(function(t) {
								return t.trim()
							}).join("\n").replace(/^\n+|\n+$/g, "");
							e.length && this.trigger("data", {
								startPts: this.startPts_,
								endPts: t,
								text: e,
								stream: this.name_
							})
						}, h.prototype.reset = function() {
							this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = d(), this.nonDisplayed_ = d(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.formatting_ = []
						}, h.prototype.setConstants = function() {
							0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
						}, h.prototype.isSpecialCharacter = function(t, e) {
							return t === this.EXT_ && e >= 48 && e <= 63
						}, h.prototype.isExtCharacter = function(t, e) {
							return (t === this.EXT_ + 1 || t === this.EXT_ + 2) && e >= 32 && e <= 63
						}, h.prototype.isMidRowCode = function(t, e) {
							return t === this.EXT_ && e >= 32 && e <= 47
						}, h.prototype.isOffsetControlCode = function(t, e) {
							return t === this.OFFSET_ && e >= 33 && e <= 35
						}, h.prototype.isPAC = function(t, e) {
							return t >= this.BASE_ && t < this.BASE_ + 8 && e >= 64 && e <= 127
						}, h.prototype.isColorPAC = function(t) {
							return t >= 64 && t <= 79 || t >= 96 && t <= 127
						}, h.prototype.isNormalChar = function(t) {
							return t >= 32 && t <= 127
						}, h.prototype.addFormatting = function(t, e) {
							this.formatting_ = this.formatting_.concat(e);
							var i = e.reduce(function(t, e) {
								return t + "<" + e + ">"
							}, "");
							this[this.mode_](t, i)
						}, h.prototype.clearFormatting = function(t) {
							if (this.formatting_.length) {
								var e = this.formatting_.reverse().reduce(function(t, e) {
									return t + "</" + e + ">"
								}, "");
								this.formatting_ = [], this[this.mode_](t, e)
							}
						}, h.prototype.popOn = function(t, e) {
							var i = this.nonDisplayed_[this.row_];
							i += e, this.nonDisplayed_[this.row_] = i
						}, h.prototype.rollUp = function(t, e) {
							var i = this.displayed_[14];
							i += e, this.displayed_[14] = i
						}, h.prototype.shiftRowsUp_ = function() {
							var t;
							for (t = 0; t < this.topRow_; t++) this.displayed_[t] = "";
							for (t = this.topRow_; t < 14; t++) this.displayed_[t] = this.displayed_[t + 1];
							this.displayed_[14] = ""
						}, h.prototype.paintOn = function() {}, e.exports = {
							CaptionStream: o,
							Cea608Stream: h
						}
					}, {
						"../utils/stream": 62
					}],
					50: [function(t, e, i) {
						"use strict";
						var n, r, a, s = t("../utils/stream.js"),
							o = t("./caption-stream"),
							u = t("./stream-types"),
							l = t("./timestamp-rollover-stream").TimestampRolloverStream,
							c = t("./stream-types.js");
						n = function() {
							var t = new Uint8Array(188),
								e = 0;
							n.prototype.init.call(this), this.push = function(i) {
								var n, r = 0,
									a = 188;
								for (e ? (n = new Uint8Array(i.byteLength + e), n.set(t.subarray(0, e)), n.set(i, e), e = 0) : n = i; a < n.byteLength;) 71 !== n[r] || 71 !== n[a] ? (r++, a++) : (this.trigger("data", n.subarray(r, a)), r += 188, a += 188);
								r < n.byteLength && (t.set(n.subarray(r), 0), e = n.byteLength - r)
							}, this.flush = function() {
								188 === e && 71 === t[0] && (this.trigger("data", t), e = 0), this.trigger("done")
							}
						}, n.prototype = new s, r = function() {
							var t, e, i, n;
							r.prototype.init.call(this), n = this, this.packetsWaitingForPmt = [], this.programMapTable = void 0, t = function(t, n) {
								var r = 0;
								n.payloadUnitStartIndicator && (r += t[r] + 1), "pat" === n.type ? e(t.subarray(r), n) : i(t.subarray(r), n)
							}, e = function(t, e) {
								e.section_number = t[7], e.last_section_number = t[8], n.pmtPid = (31 & t[10]) << 8 | t[11], e.pmtPid = n.pmtPid
							}, i = function(t, e) {
								var i, r, a, s;
								if (1 & t[5]) {
									for (n.programMapTable = {
										video: null,
										audio: null,
										"timed-metadata": {}
									}, i = (15 & t[1]) << 8 | t[2], r = 3 + i - 4, a = (15 & t[10]) << 8 | t[11], s = 12 + a; s < r;) {
										var o = t[s],
											l = (31 & t[s + 1]) << 8 | t[s + 2];
										o === u.H264_STREAM_TYPE && null === n.programMapTable.video ? n.programMapTable.video = l : o === u.ADTS_STREAM_TYPE && null === n.programMapTable.audio ? n.programMapTable.audio = l : o === u.METADATA_STREAM_TYPE && (n.programMapTable["timed-metadata"][l] = o), s += 5 + ((15 & t[s + 3]) << 8 | t[s + 4])
									}
									e.programMapTable = n.programMapTable
								}
							}, this.push = function(e) {
								var i = {}, n = 4;
								if (i.payloadUnitStartIndicator = !! (64 & e[1]), i.pid = 31 & e[1], i.pid <<= 8, i.pid |= e[2], (48 & e[3]) >>> 4 > 1 && (n += e[n] + 1), 0 === i.pid) i.type = "pat", t(e.subarray(n), i), this.trigger("data", i);
								else if (i.pid === this.pmtPid) for (i.type = "pmt", t(e.subarray(n), i), this.trigger("data", i); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
								else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([e, n, i]) : this.processPes_(e, n, i)
							}, this.processPes_ = function(t, e, i) {
								i.pid === this.programMapTable.video ? i.streamType = u.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = u.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = t.subarray(e), this.trigger("data", i)
							}
						}, r.prototype = new s, r.STREAM_TYPES = {
							h264: 27,
							adts: 15
						}, a = function() {
							var t = this,
								e = {
									data: [],
									size: 0
								}, i = {
									data: [],
									size: 0
								}, n = {
									data: [],
									size: 0
								}, r = function(t, e) {
									var i;
									e.packetLength = 6 + (t[4] << 8 | t[5]), e.dataAlignmentIndicator = 0 != (4 & t[6]), i = t[7], 192 & i && (e.pts = (14 & t[9]) << 27 | (255 & t[10]) << 20 | (254 & t[11]) << 12 | (255 & t[12]) << 5 | (254 & t[13]) >>> 3, e.pts *= 4, e.pts += (6 & t[13]) >>> 1, e.dts = e.pts, 64 & i && (e.dts = (14 & t[14]) << 27 | (255 & t[15]) << 20 | (254 & t[16]) << 12 | (255 & t[17]) << 5 | (254 & t[18]) >>> 3, e.dts *= 4, e.dts += (6 & t[18]) >>> 1)), e.data = t.subarray(9 + t[8])
								}, s = function(e, i, n) {
									var a, s = new Uint8Array(e.size),
										o = {
											type: i
										}, u = 0,
										l = 0,
										c = !1;
									if (e.data.length && !(e.size < 9)) {
										for (o.trackId = e.data[0].pid, u = 0; u < e.data.length; u++) a = e.data[u], s.set(a.data, l), l += a.data.byteLength;
										r(s, o), c = "video" === i || o.packetLength <= e.size, (n || c) && (e.size = 0, e.data.length = 0), c && t.trigger("data", o)
									}
								};
							a.prototype.init.call(this), this.push = function(r) {
								({
									pat: function() {},
									pes: function() {
										var t, a;
										switch (r.streamType) {
											case u.H264_STREAM_TYPE:
											case c.H264_STREAM_TYPE:
												t = e, a = "video";
												break;
											case u.ADTS_STREAM_TYPE:
												t = i, a = "audio";
												break;
											case u.METADATA_STREAM_TYPE:
												t = n, a = "timed-metadata";
												break;
											default:
												return
										}
										r.payloadUnitStartIndicator && s(t, a, !0), t.data.push(r), t.size += r.data.byteLength
									},
									pmt: function() {
										var e = {
											type: "metadata",
											tracks: []
										}, i = r.programMapTable;
										null !== i.video && e.tracks.push({
											timelineStartInfo: {
												baseMediaDecodeTime: 0
											},
											id: +i.video,
											codec: "avc",
											type: "video"
										}), null !== i.audio && e.tracks.push({
											timelineStartInfo: {
												baseMediaDecodeTime: 0
											},
											id: +i.audio,
											codec: "adts",
											type: "audio"
										}), t.trigger("data", e)
									}
								})[r.type]()
							}, this.flush = function() {
								s(e, "video"), s(i, "audio"), s(n, "timed-metadata"), this.trigger("done")
							}
						}, a.prototype = new s;
						var d = {
							PAT_PID: 0,
							MP2T_PACKET_LENGTH: 188,
							TransportPacketStream: n,
							TransportParseStream: r,
							ElementaryStream: a,
							TimestampRolloverStream: l,
							CaptionStream: o.CaptionStream,
							Cea608Stream: o.Cea608Stream,
							MetadataStream: t("./metadata-stream")
						};
						for (var h in u) u.hasOwnProperty(h) && (d[h] = u[h]);
						e.exports = d
					}, {
						"../utils/stream.js": 62,
						"./caption-stream": 49,
						"./metadata-stream": 51,
						"./stream-types": 53,
						"./stream-types.js": 53,
						"./timestamp-rollover-stream": 54
					}],
					51: [function(t, e, i) {
						"use strict";
						var n, r = t("../utils/stream"),
							a = t("./stream-types"),
							s = function(t, e, i) {
								var n, r = "";
								for (n = e; n < i; n++) r += "%" + ("00" + t[n].toString(16)).slice(-2);
								return r
							}, o = function(t, e, i) {
								return decodeURIComponent(s(t, e, i))
							}, u = function(t, e, i) {
								return unescape(s(t, e, i))
							}, l = function(t) {
								return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
							}, c = {
								TXXX: function(t) {
									var e;
									if (3 === t.data[0]) {
										for (e = 1; e < t.data.length; e++) if (0 === t.data[e]) {
											t.description = o(t.data, 1, e), t.value = o(t.data, e + 1, t.data.length).replace(/\0*$/, "");
											break
										}
										t.data = t.value
									}
								},
								WXXX: function(t) {
									var e;
									if (3 === t.data[0]) for (e = 1; e < t.data.length; e++) if (0 === t.data[e]) {
										t.description = o(t.data, 1, e), t.url = o(t.data, e + 1, t.data.length);
										break
									}
								},
								PRIV: function(t) {
									var e;
									for (e = 0; e < t.data.length; e++) if (0 === t.data[e]) {
										t.owner = u(t.data, 0, e);
										break
									}
									t.privateData = t.data.subarray(e + 1), t.data = t.privateData
								}
							};
						n = function(t) {
							var e, i = {
								debug: !(!t || !t.debug),
								descriptor: t && t.descriptor
							}, r = 0,
								s = [],
								o = 0;
							if (n.prototype.init.call(this), this.dispatchType = a.METADATA_STREAM_TYPE.toString(16), i.descriptor) for (e = 0; e < i.descriptor.length; e++) this.dispatchType += ("00" + i.descriptor[e].toString(16)).slice(-2);
							this.push = function(t) {
								var e, n, a, u, d, h;
								if ("timed-metadata" === t.type) {
									if (t.dataAlignmentIndicator && (o = 0, s.length = 0), 0 === s.length && (t.data.length < 10 || t.data[0] !== "I".charCodeAt(0) || t.data[1] !== "D".charCodeAt(0) || t.data[2] !== "3".charCodeAt(0))) return void i.debug;
									if (s.push(t), o += t.data.byteLength, 1 === s.length && (r = l(t.data.subarray(6, 10)), r += 10), !(o < r)) {
										for (e = {
											data: new Uint8Array(r),
											frames: [],
											pts: s[0].pts,
											dts: s[0].dts
										}, d = 0; d < r;) e.data.set(s[0].data.subarray(0, r - d), d), d += s[0].data.byteLength, o -= s[0].data.byteLength, s.shift();
										n = 10, 64 & e.data[5] && (n += 4, n += l(e.data.subarray(10, 14)), r -= l(e.data.subarray(16, 20)));
										do {
											if ((a = l(e.data.subarray(n + 4, n + 8))) < 1) return;
											if (h = String.fromCharCode(e.data[n], e.data[n + 1], e.data[n + 2], e.data[n + 3]), u = {
												id: h,
												data: e.data.subarray(n + 10, n + a + 10)
											}, u.key = u.id, c[u.id] && (c[u.id](u), "com.apple.streaming.transportStreamTimestamp" === u.owner)) {
												var p = u.data,
													f = (1 & p[3]) << 30 | p[4] << 22 | p[5] << 14 | p[6] << 6 | p[7] >>> 2;
												f *= 4, f += 3 & p[7], u.timeStamp = f, void 0 === e.pts && void 0 === e.dts && (e.pts = u.timeStamp, e.dts = u.timeStamp), this.trigger("timestamp", u)
											}
											e.frames.push(u), n += 10, n += a
										} while (n < r);
										this.trigger("data", e)
									}
								}
							}
						}, n.prototype = new r, e.exports = n
					}, {
						"../utils/stream": 62,
						"./stream-types": 53
					}],
					52: [function(t, e, i) {
						"use strict";
						var n = t("./stream-types.js"),
							r = function(t) {
								var e = 31 & t[1];
								return e <<= 8, e |= t[2]
							}, a = function(t) {
								return !!(64 & t[1])
							}, s = function(t) {
								var e = 0;
								return (48 & t[3]) >>> 4 > 1 && (e += t[4] + 1), e
							}, o = function(t, e) {
								var i = r(t);
								return 0 === i ? "pat" : i === e ? "pmt" : e ? "pes" : null
							}, u = function(t) {
								var e = a(t),
									i = 4 + s(t);
								return e && (i += t[i] + 1), (31 & t[i + 10]) << 8 | t[i + 11]
							}, l = function(t) {
								var e = {}, i = a(t),
									n = 4 + s(t);
								if (i && (n += t[n] + 1), 1 & t[n + 5]) {
									var r, o, u;
									r = (15 & t[n + 1]) << 8 | t[n + 2], o = 3 + r - 4, u = (15 & t[n + 10]) << 8 | t[n + 11];
									for (var l = 12 + u; l < o;) {
										var c = n + l;
										e[(31 & t[c + 1]) << 8 | t[c + 2]] = t[c], l += 5 + ((15 & t[c + 3]) << 8 | t[c + 4])
									}
									return e
								}
							}, c = function(t, e) {
								switch (e[r(t)]) {
									case n.H264_STREAM_TYPE:
										return "video";
									case n.ADTS_STREAM_TYPE:
										return "audio";
									case n.METADATA_STREAM_TYPE:
										return "timed-metadata";
									default:
										return null
								}
							}, d = function(t) {
								if (!a(t)) return null;
								var e = 4 + s(t);
								if (e >= t.byteLength) return null;
								var i, n = null;
								return i = t[e + 7], 192 & i && (n = {}, n.pts = (14 & t[e + 9]) << 27 | (255 & t[e + 10]) << 20 | (254 & t[e + 11]) << 12 | (255 & t[e + 12]) << 5 | (254 & t[e + 13]) >>> 3, n.pts *= 4, n.pts += (6 & t[e + 13]) >>> 1, n.dts = n.pts, 64 & i && (n.dts = (14 & t[e + 14]) << 27 | (255 & t[e + 15]) << 20 | (254 & t[e + 16]) << 12 | (255 & t[e + 17]) << 5 | (254 & t[e + 18]) >>> 3, n.dts *= 4, n.dts += (6 & t[e + 18]) >>> 1)), n
							}, h = function(t) {
								switch (t) {
									case 5:
										return "slice_layer_without_partitioning_rbsp_idr";
									case 6:
										return "sei_rbsp";
									case 7:
										return "seq_parameter_set_rbsp";
									case 8:
										return "pic_parameter_set_rbsp";
									case 9:
										return "access_unit_delimiter_rbsp";
									default:
										return null
								}
							}, p = function(t) {
								for (var e, i = 4 + s(t), n = t.subarray(i), r = 0, a = 0, o = !1; a < n.byteLength - 3; a++) if (1 === n[a + 2]) {
									r = a + 5;
									break
								}
								for (; r < n.byteLength;) switch (n[r]) {
									case 0:
										if (0 !== n[r - 1]) {
											r += 2;
											break
										}
										if (0 !== n[r - 2]) {
											r++;
											break
										}
										a + 3 !== r - 2 && "slice_layer_without_partitioning_rbsp_idr" === (e = h(31 & n[a + 3])) && (o = !0);
										do {
											r++
										} while (1 !== n[r] && r < n.length);
										a = r - 2, r += 3;
										break;
									case 1:
										if (0 !== n[r - 1] || 0 !== n[r - 2]) {
											r += 3;
											break
										}
										e = h(31 & n[a + 3]), "slice_layer_without_partitioning_rbsp_idr" === e && (o = !0), a = r - 2, r += 3;
										break;
									default:
										r += 3
								}
								return n = n.subarray(a), r -= a, a = 0, n && n.byteLength > 3 && "slice_layer_without_partitioning_rbsp_idr" === (e = h(31 & n[a + 3])) && (o = !0), o
							};
						e.exports = {
							parseType: o,
							parsePat: u,
							parsePmt: l,
							parsePayloadUnitStartIndicator: a,
							parsePesType: c,
							parsePesTime: d,
							videoPacketContainsKeyFrame: p
						}
					}, {
						"./stream-types.js": 53
					}],
					53: [function(t, e, i) {
						"use strict";
						e.exports = {
							H264_STREAM_TYPE: 27,
							ADTS_STREAM_TYPE: 15,
							METADATA_STREAM_TYPE: 21
						}
					}, {}],
					54: [function(t, e, i) {
						"use strict";
						var n = t("../utils/stream"),
							r = function(t, e) {
								var i = 1;
								for (t > e && (i = -1); Math.abs(e - t) > 4294967296;) t += 8589934592 * i;
								return t
							}, a = function(t) {
								var e, i;
								a.prototype.init.call(this), this.type_ = t, this.push = function(t) {
									t.type === this.type_ && (void 0 === i && (i = t.dts), t.dts = r(t.dts, i), t.pts = r(t.pts, i), e = t.dts, this.trigger("data", t))
								}, this.flush = function() {
									i = e, this.trigger("done")
								}, this.discontinuity = function() {
									i = void 0, e = void 0
								}
							};
						a.prototype = new n, e.exports = {
							TimestampRolloverStream: a,
							handleRollover: r
						}
					}, {
						"../utils/stream": 62
					}],
					55: [function(t, e, i) {
						e.exports = {
							generator: t("./mp4-generator"),
							Transmuxer: t("./transmuxer").Transmuxer,
							AudioSegmentStream: t("./transmuxer").AudioSegmentStream,
							VideoSegmentStream: t("./transmuxer").VideoSegmentStream
						}
					}, {
						"./mp4-generator": 56,
						"./transmuxer": 58
					}],
					56: [function(t, e, i) {
						"use strict";
						var n, r, a, s, o, u, l, c, d, h, p, f, m, g, y, v, _, b, T, S, w, k, E, C, O, A, P, x, I, L, j, M, D, R, B, N, U = Math.pow(2, 32) - 1;
						! function() {
							var t;
							if (E = {
								avc1: [],
								avcC: [],
								btrt: [],
								dinf: [],
								dref: [],
								esds: [],
								ftyp: [],
								hdlr: [],
								mdat: [],
								mdhd: [],
								mdia: [],
								mfhd: [],
								minf: [],
								moof: [],
								moov: [],
								mp4a: [],
								mvex: [],
								mvhd: [],
								sdtp: [],
								smhd: [],
								stbl: [],
								stco: [],
								stsc: [],
								stsd: [],
								stsz: [],
								stts: [],
								styp: [],
								tfdt: [],
								tfhd: [],
								traf: [],
								trak: [],
								trun: [],
								trex: [],
								tkhd: [],
								vmhd: []
							}, "undefined" != typeof Uint8Array) {
								for (t in E) E.hasOwnProperty(t) && (E[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
								C = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), A = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), O = new Uint8Array([0, 0, 0, 1]), P = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), x = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), I = {
									video: P,
									audio: x
								}, M = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), j = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), D = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), R = D, B = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), N = D, L = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
							}
						}(), n = function(t) {
							var e, i, n, r = [],
								a = 0;
							for (e = 1; e < arguments.length; e++) r.push(arguments[e]);
							for (e = r.length; e--;) a += r[e].byteLength;
							for (i = new Uint8Array(a + 8), n = new DataView(i.buffer, i.byteOffset, i.byteLength), n.setUint32(0, i.byteLength), i.set(t, 4), e = 0, a = 8; e < r.length; e++) i.set(r[e], a), a += r[e].byteLength;
							return i
						}, r = function() {
							return n(E.dinf, n(E.dref, M))
						}, a = function(t) {
							return n(E.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, t.audioobjecttype << 3 | t.samplingfrequencyindex >>> 1, t.samplingfrequencyindex << 7 | t.channelcount << 3, 6, 1, 2]))
						}, s = function() {
							return n(E.ftyp, C, O, C, A)
						}, v = function(t) {
							return n(E.hdlr, I[t])
						}, o = function(t) {
							return n(E.mdat, t)
						}, y = function(t) {
							var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, t.duration >>> 24 & 255, t.duration >>> 16 & 255, t.duration >>> 8 & 255, 255 & t.duration, 85, 196, 0, 0]);
							return t.samplerate && (e[12] = t.samplerate >>> 24 & 255, e[13] = t.samplerate >>> 16 & 255, e[14] = t.samplerate >>> 8 & 255, e[15] = 255 & t.samplerate), n(E.mdhd, e)
						}, g = function(t) {
							return n(E.mdia, y(t), v(t.type), l(t))
						}, u = function(t) {
							return n(E.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t]))
						}, l = function(t) {
							return n(E.minf, "video" === t.type ? n(E.vmhd, L) : n(E.smhd, j), r(), b(t))
						}, c = function(t, e) {
							for (var i = [], r = e.length; r--;) i[r] = S(e[r]);
							return n.apply(null, [E.moof, u(t)].concat(i))
						}, d = function(t) {
							for (var e = t.length, i = []; e--;) i[e] = f(t[e]);
							return n.apply(null, [E.moov, p(4294967295)].concat(i).concat(h(t)))
						}, h = function(t) {
							for (var e = t.length, i = []; e--;) i[e] = w(t[e]);
							return n.apply(null, [E.mvex].concat(i))
						}, p = function(t) {
							var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
							return n(E.mvhd, e)
						}, _ = function(t) {
							var e, i, r = t.samples || [],
								a = new Uint8Array(4 + r.length);
							for (i = 0; i < r.length; i++) e = r[i].flags, a[i + 4] = e.dependsOn << 4 | e.isDependedOn << 2 | e.hasRedundancy;
							return n(E.sdtp, a)
						}, b = function(t) {
							return n(E.stbl, T(t), n(E.stts, N), n(E.stsc, R), n(E.stsz, B), n(E.stco, D))
						},
						function() {
							var t, e;
							T = function(i) {
								return n(E.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === i.type ? t(i) : e(i))
							}, t = function(t) {
								var e, i = t.sps || [],
									r = t.pps || [],
									a = [],
									s = [];
								for (e = 0; e < i.length; e++) a.push((65280 & i[e].byteLength) >>> 8), a.push(255 & i[e].byteLength), a = a.concat(Array.prototype.slice.call(i[e]));
								for (e = 0; e < r.length; e++) s.push((65280 & r[e].byteLength) >>> 8), s.push(255 & r[e].byteLength), s = s.concat(Array.prototype.slice.call(r[e]));
								return n(E.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, (65280 & t.height) >> 8, 255 & t.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), n(E.avcC, new Uint8Array([1, t.profileIdc, t.profileCompatibility, t.levelIdc, 255].concat([i.length]).concat(a).concat([r.length]).concat(s))), n(E.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
							}, e = function(t) {
								return n(E.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.channelcount) >> 8, 255 & t.channelcount, (65280 & t.samplesize) >> 8, 255 & t.samplesize, 0, 0, 0, 0, (65280 & t.samplerate) >> 8, 255 & t.samplerate, 0, 0]), a(t))
							}
						}(), m = function(t) {
							var e = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 0, (4278190080 & t.duration) >> 24, (16711680 & t.duration) >> 16, (65280 & t.duration) >> 8, 255 & t.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, 0, 0, (65280 & t.height) >> 8, 255 & t.height, 0, 0]);
							return n(E.tkhd, e)
						}, S = function(t) {
							var e, i, r, a, s, o, u;
							return e = n(E.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), o = Math.floor(t.baseMediaDecodeTime / (U + 1)), u = Math.floor(t.baseMediaDecodeTime % (U + 1)), i = n(E.tfdt, new Uint8Array([1, 0, 0, 0, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u])), s = 92, "audio" === t.type ? (r = k(t, s), n(E.traf, e, i, r)) : (a = _(t), r = k(t, a.length + s), n(E.traf, e, i, r, a))
						}, f = function(t) {
							return t.duration = t.duration || 4294967295, n(E.trak, m(t), g(t))
						}, w = function(t) {
							var e = new Uint8Array([0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
							return "video" !== t.type && (e[e.length - 1] = 0), n(E.trex, e)
						},
						function() {
							var t, e, i;
							i = function(t, e) {
								var i = 0,
									n = 0,
									r = 0,
									a = 0;
								return t.length && (void 0 !== t[0].duration && (i = 1), void 0 !== t[0].size && (n = 2), void 0 !== t[0].flags && (r = 4), void 0 !== t[0].compositionTimeOffset && (a = 8)), [0, 0, i | n | r | a, 1, (4278190080 & t.length) >>> 24, (16711680 & t.length) >>> 16, (65280 & t.length) >>> 8, 255 & t.length, (4278190080 & e) >>> 24, (16711680 & e) >>> 16, (65280 & e) >>> 8, 255 & e]
							}, e = function(t, e) {
								var r, a, s, o;
								for (a = t.samples || [], e += 20 + 16 * a.length, r = i(a, e), o = 0; o < a.length; o++) s = a[o], r = r.concat([(4278190080 & s.duration) >>> 24, (16711680 & s.duration) >>> 16, (65280 & s.duration) >>> 8, 255 & s.duration, (4278190080 & s.size) >>> 24, (16711680 & s.size) >>> 16, (65280 & s.size) >>> 8, 255 & s.size, s.flags.isLeading << 2 | s.flags.dependsOn, s.flags.isDependedOn << 6 | s.flags.hasRedundancy << 4 | s.flags.paddingValue << 1 | s.flags.isNonSyncSample, 61440 & s.flags.degradationPriority, 15 & s.flags.degradationPriority, (4278190080 & s.compositionTimeOffset) >>> 24, (16711680 & s.compositionTimeOffset) >>> 16, (65280 & s.compositionTimeOffset) >>> 8, 255 & s.compositionTimeOffset]);
								return n(E.trun, new Uint8Array(r))
							}, t = function(t, e) {
								var r, a, s, o;
								for (a = t.samples || [], e += 20 + 8 * a.length, r = i(a, e), o = 0; o < a.length; o++) s = a[o], r = r.concat([(4278190080 & s.duration) >>> 24, (16711680 & s.duration) >>> 16, (65280 & s.duration) >>> 8, 255 & s.duration, (4278190080 & s.size) >>> 24, (16711680 & s.size) >>> 16, (65280 & s.size) >>> 8, 255 & s.size]);
								return n(E.trun, new Uint8Array(r))
							}, k = function(i, n) {
								return "audio" === i.type ? t(i, n) : e(i, n)
							}
						}(), e.exports = {
							ftyp: s,
							mdat: o,
							moof: c,
							moov: d,
							initSegment: function(t) {
								var e, i = s(),
									n = d(t);
								return e = new Uint8Array(i.byteLength + n.byteLength), e.set(i), e.set(n, i.byteLength), e
							}
						}
					}, {}],
					57: [function(t, e, i) {
						"use strict";
						var n, r, a, s;
						n = function(t, e) {
							var i, a, s, o, u, l = [];
							if (!e.length) return null;
							for (i = 0; i < t.byteLength;) a = t[i] << 24, a |= t[i + 1] << 16, a |= t[i + 2] << 8, a |= t[i + 3], s = r(t.subarray(i + 4, i + 8)), o = a > 1 ? i + a : t.byteLength, s === e[0] && (1 === e.length ? l.push(t.subarray(i + 8, o)) : (u = n(t.subarray(i + 8, o), e.slice(1)), u.length && (l = l.concat(u)))), i = o;
							return l
						}, r = function(t) {
							var e = "";
							return e += String.fromCharCode(t[0]), e += String.fromCharCode(t[1]), e += String.fromCharCode(t[2]), e += String.fromCharCode(t[3])
						}, a = function(t) {
							var e = {};
							return n(t, ["moov", "trak"]).reduce(function(t, e) {
								var i, r, a, s, o;
								return (i = n(e, ["tkhd"])[0]) ? (r = i[0], a = 0 === r ? 12 : 20, s = i[a] << 24 | i[a + 1] << 16 | i[a + 2] << 8 | i[a + 3], (o = n(e, ["mdia", "mdhd"])[0]) ? (r = o[0], a = 0 === r ? 12 : 20, t[s] = o[a] << 24 | o[a + 1] << 16 | o[a + 2] << 8 | o[a + 3], t) : null) : null
							}, e)
						}, s = function(t, e) {
							var i, r, a;
							return i = n(e, ["moof", "traf"]), r = [].concat.apply([], i.map(function(e) {
								return n(e, ["tfhd"]).map(function(i) {
									var r, a, s;
									return r = i[4] << 24 | i[5] << 16 | i[6] << 8 | i[7], a = t[r] || 9e4, s = n(e, ["tfdt"]).map(function(t) {
										var e, i;
										return e = t[0], i = t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], 1 === e && (i *= Math.pow(2, 32), i += t[8] << 24 | t[9] << 16 | t[10] << 8 | t[11]), i
									})[0], (s = s || 1 / 0) / a
								})
							})), a = Math.min.apply(null, r), isFinite(a) ? a : 0
						}, e.exports = {
							parseType: r,
							timescale: a,
							startTime: s
						}
					}, {}],
					58: [function(t, e, i) {
						"use strict";
						var n, r, a, s, o, u, l, c, d, h, p, f = t("../utils/stream.js"),
							m = t("./mp4-generator.js"),
							g = t("../m2ts/m2ts.js"),
							y = t("../codecs/adts.js"),
							v = t("../codecs/h264").H264Stream,
							_ = t("../aac"),
							b = t("../data/silence"),
							T = t("../utils/clock"),
							S = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
							w = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility"];
						o = function() {
							return {
								size: 0,
								flags: {
									isLeading: 0,
									dependsOn: 1,
									isDependedOn: 0,
									hasRedundancy: 0,
									degradationPriority: 0
								}
							}
						}, u = function(t) {
							return t[0] === "I".charCodeAt(0) && t[1] === "D".charCodeAt(0) && t[2] === "3".charCodeAt(0)
						}, h = function(t, e) {
							var i;
							if (t.length !== e.length) return !1;
							for (i = 0; i < t.length; i++) if (t[i] !== e[i]) return !1;
							return !0
						}, p = function(t) {
							var e, i, n = 0;
							for (e = 0; e < t.length; e++) i = t[e], n += i.data.byteLength;
							return n
						}, r = function(t) {
							var e = [],
								i = 0,
								n = 0,
								a = 0,
								s = 1 / 0;
							r.prototype.init.call(this), this.push = function(i) {
								l(t, i), t && S.forEach(function(e) {
									t[e] = i[e]
								}), e.push(i)
							}, this.setEarliestDts = function(e) {
								n = e - t.timelineStartInfo.baseMediaDecodeTime
							}, this.setVideoBaseMediaDecodeTime = function(t) {
								s = t
							}, this.setAudioAppendStart = function(t) {
								a = t
							}, this.flush = function() {
								var n, r, a, s;
								if (0 === e.length) return void this.trigger("done", "AudioSegmentStream");
								n = this.trimAdtsFramesByEarliestDts_(e), t.baseMediaDecodeTime = d(t), this.prefixWithSilence_(t, n), t.samples = this.generateSampleTable_(n), a = m.mdat(this.concatenateFrameData_(n)), e = [], r = m.moof(i, [t]), s = new Uint8Array(r.byteLength + a.byteLength), i++, s.set(r), s.set(a, r.byteLength), c(t), this.trigger("data", {
									track: t,
									boxes: s
								}), this.trigger("done", "AudioSegmentStream")
							}, this.prefixWithSilence_ = function(t, e) {
								var i, n, r, o = 0,
									u = 0,
									l = 0,
									c = 0;
								if (e.length && (i = T.audioTsToVideoTs(t.baseMediaDecodeTime, t.samplerate), o = Math.ceil(9e4 / (t.samplerate / 1024)), a && s && (u = i - Math.max(a, s), l = Math.floor(u / o), c = l * o), !(l < 1 || c > 45e3))) {
									for (n = b[t.samplerate], n || (n = e[0].data), r = 0; r < l; r++) e.splice(r, 0, {
										data: n
									});
									t.baseMediaDecodeTime -= Math.floor(T.videoTsToAudioTs(c, t.samplerate))
								}
							}, this.trimAdtsFramesByEarliestDts_ = function(e) {
								return t.minSegmentDts >= n ? e : (t.minSegmentDts = 1 / 0, e.filter(function(e) {
									return e.dts >= n && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), t.minSegmentPts = t.minSegmentDts, !0)
								}))
							}, this.generateSampleTable_ = function(t) {
								var e, i, n = [];
								for (e = 0; e < t.length; e++) i = t[e], n.push({
									size: i.data.byteLength,
									duration: 1024
								});
								return n
							}, this.concatenateFrameData_ = function(t) {
								var e, i, n = 0,
									r = new Uint8Array(p(t));
								for (e = 0; e < t.length; e++) i = t[e], r.set(i.data, n), n += i.data.byteLength;
								return r
							}
						}, r.prototype = new f, n = function(t, e) {
							var i, r, a = 0,
								s = [],
								u = [];
							e = e || {}, n.prototype.init.call(this), delete t.minPTS, this.gopCache_ = [], this.push = function(e) {
								l(t, e), "seq_parameter_set_rbsp" !== e.nalUnitType || i || (i = e.config, t.sps = [e.data], w.forEach(function(e) {
									t[e] = i[e]
								}, this)), "pic_parameter_set_rbsp" !== e.nalUnitType || r || (r = e.data, t.pps = [e.data]), s.push(e)
							}, this.flush = function() {
								for (var i, n, r, o, h, p; s.length && "access_unit_delimiter_rbsp" !== s[0].nalUnitType;) s.shift();
								if (0 === s.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
								if (i = this.groupNalsIntoFrames_(s), r = this.groupFramesIntoGops_(i), r[0][0].keyFrame || (n = this.getGopForFusion_(s[0], t), n ? (r.unshift(n), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.pts = n.pts, r.dts = n.dts, r.duration += n.duration) : r = this.extendFirstKeyFrame_(r)), u.length) {
									var f;
									if (!(f = e.alignGopsAtEnd ? this.alignGopsAtEnd_(r) : this.alignGopsAtStart_(r))) return this.gopCache_.unshift({
										gop: r.pop(),
										pps: t.pps,
										sps: t.sps
									}), this.gopCache_.length = Math.min(6, this.gopCache_.length), s = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
									c(t), r = f
								}
								l(t, r), t.samples = this.generateSampleTable_(r), h = m.mdat(this.concatenateNalData_(r)), t.baseMediaDecodeTime = d(t), this.trigger("processedGopsInfo", r.map(function(t) {
									return {
										pts: t.pts,
										dts: t.dts,
										byteLength: t.byteLength
									}
								})), this.gopCache_.unshift({
									gop: r.pop(),
									pps: t.pps,
									sps: t.sps
								}), this.gopCache_.length = Math.min(6, this.gopCache_.length), s = [], this.trigger("baseMediaDecodeTime", t.baseMediaDecodeTime), this.trigger("timelineStartInfo", t.timelineStartInfo), o = m.moof(a, [t]), p = new Uint8Array(o.byteLength + h.byteLength), a++, p.set(o), p.set(h, o.byteLength), this.trigger("data", {
									track: t,
									boxes: p
								}), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
							}, this.resetStream_ = function() {
								c(t), i = void 0, r = void 0
							}, this.getGopForFusion_ = function(e) {
								var i, n, r, a, s, o = 1 / 0;
								for (s = 0; s < this.gopCache_.length; s++) a = this.gopCache_[s], r = a.gop, t.pps && h(t.pps[0], a.pps[0]) && t.sps && h(t.sps[0], a.sps[0]) && (r.dts < t.timelineStartInfo.dts || (i = e.dts - r.dts - r.duration) >= -1e4 && i <= 45e3 && (!n || o > i) && (n = a, o = i));
								return n ? n.gop : null
							}, this.extendFirstKeyFrame_ = function(t) {
								var e;
								return !t[0][0].keyFrame && t.length > 1 && (e = t.shift(), t.byteLength -= e.byteLength, t.nalCount -= e.nalCount, t[0][0].dts = e.dts, t[0][0].pts = e.pts, t[0][0].duration += e.duration), t
							}, this.groupNalsIntoFrames_ = function(t) {
								var e, i, n = [],
									r = [];
								for (n.byteLength = 0, e = 0; e < t.length; e++) i = t[e], "access_unit_delimiter_rbsp" === i.nalUnitType ? (n.length && (n.duration = i.dts - n.dts, r.push(n)), n = [i], n.byteLength = i.data.byteLength, n.pts = i.pts, n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0), n.duration = i.dts - n.dts, n.byteLength += i.data.byteLength, n.push(i));
								return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration), r.push(n), r
							}, this.groupFramesIntoGops_ = function(t) {
								var e, i, n = [],
									r = [];
								for (n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = t[0].pts, n.dts = t[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = t[0].pts, r.dts = t[0].dts, e = 0; e < t.length; e++) i = t[e], i.keyFrame ? (n.length && (r.push(n), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration), n = [i], n.nalCount = i.length, n.byteLength = i.byteLength, n.pts = i.pts, n.dts = i.dts, n.duration = i.duration) : (n.duration += i.duration, n.nalCount += i.length, n.byteLength += i.byteLength, n.push(i));
								return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration, r.push(n), r
							}, this.generateSampleTable_ = function(t, e) {
								var i, n, r, a, s, u = e || 0,
									l = [];
								for (i = 0; i < t.length; i++) for (a = t[i], n = 0; n < a.length; n++) s = a[n], r = o(), r.dataOffset = u, r.compositionTimeOffset = s.pts - s.dts, r.duration = s.duration, r.size = 4 * s.length, r.size += s.byteLength, s.keyFrame && (r.flags.dependsOn = 2), u += r.size, l.push(r);
								return l
							}, this.concatenateNalData_ = function(t) {
								var e, i, n, r, a, s, o = 0,
									u = t.byteLength,
									l = t.nalCount,
									c = u + 4 * l,
									d = new Uint8Array(c),
									h = new DataView(d.buffer);
								for (e = 0; e < t.length; e++) for (r = t[e], i = 0; i < r.length; i++) for (a = r[i], n = 0; n < a.length; n++) s = a[n], h.setUint32(o, s.data.byteLength), o += 4, d.set(s.data, o), o += s.data.byteLength;
								return d
							}, this.alignGopsAtStart_ = function(t) {
								var e, i, n, r, a, s, o, l;
								for (a = t.byteLength, s = t.nalCount, o = t.duration, e = i = 0; e < u.length && i < t.length && (n = u[e], r = t[i], n.pts !== r.pts);) r.pts > n.pts ? e++ : (i++, a -= r.byteLength, s -= r.nalCount, o -= r.duration);
								return 0 === i ? t : i === t.length ? null : (l = t.slice(i), l.byteLength = a, l.duration = o, l.nalCount = s, l.pts = l[0].pts, l.dts = l[0].dts, l)
							}, this.alignGopsAtEnd_ = function(t) {
								var e, i, n, r, a, s;
								for (e = u.length - 1, i = t.length - 1, a = null, s = !1; e >= 0 && i >= 0;) {
									if (n = u[e], r = t[i], n.pts === r.pts) {
										s = !0;
										break
									}
									n.pts > r.pts ? e-- : (e === u.length - 1 && (a = i), i--)
								}
								if (!s && null === a) return null;
								var o;
								if (0 === (o = s ? i : a)) return t;
								var l = t.slice(o),
									c = l.reduce(function(t, e) {
										return t.byteLength += e.byteLength, t.duration += e.duration, t.nalCount += e.nalCount, t
									}, {
										byteLength: 0,
										duration: 0,
										nalCount: 0
									});
								return l.byteLength = c.byteLength, l.duration = c.duration, l.nalCount = c.nalCount, l.pts = l[0].pts, l.dts = l[0].dts, l
							}, this.alignGopsWith = function(t) {
								u = t
							}
						}, n.prototype = new f, l = function(t, e) {
							"number" == typeof e.pts && (void 0 === t.timelineStartInfo.pts && (t.timelineStartInfo.pts = e.pts), void 0 === t.minSegmentPts ? t.minSegmentPts = e.pts : t.minSegmentPts = Math.min(t.minSegmentPts, e.pts), void 0 === t.maxSegmentPts ? t.maxSegmentPts = e.pts : t.maxSegmentPts = Math.max(t.maxSegmentPts, e.pts)), "number" == typeof e.dts && (void 0 === t.timelineStartInfo.dts && (t.timelineStartInfo.dts = e.dts), void 0 === t.minSegmentDts ? t.minSegmentDts = e.dts : t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), void 0 === t.maxSegmentDts ? t.maxSegmentDts = e.dts : t.maxSegmentDts = Math.max(t.maxSegmentDts, e.dts))
						}, c = function(t) {
							delete t.minSegmentDts, delete t.maxSegmentDts, delete t.minSegmentPts, delete t.maxSegmentPts
						}, d = function(t) {
							var e, i, n = t.minSegmentDts - t.timelineStartInfo.dts;
							return e = t.timelineStartInfo.baseMediaDecodeTime, e += n, e = Math.max(0, e), "audio" === t.type && (i = t.samplerate / 9e4, e *= i, e = Math.floor(e)), e
						}, s = function(t, e) {
							this.numberOfTracks = 0, this.metadataStream = e, void 0 !== t.remux ? this.remuxTracks = !! t.remux : this.remuxTracks = !0, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, s.prototype.init.call(this), this.push = function(t) {
								return t.text ? this.pendingCaptions.push(t) : t.frames ? this.pendingMetadata.push(t) : (this.pendingTracks.push(t.track), this.pendingBoxes.push(t.boxes), this.pendingBytes += t.boxes.byteLength, "video" === t.track.type && (this.videoTrack = t.track), void("audio" === t.track.type && (this.audioTrack = t.track)))
							}
						}, s.prototype = new f, s.prototype.flush = function(t) {
							var e, i, n, r, a = 0,
								s = {
									captions: [],
									captionStreams: {},
									metadata: [],
									info: {}
								}, o = 0;
							if (this.pendingTracks.length < this.numberOfTracks) {
								if ("VideoSegmentStream" !== t && "AudioSegmentStream" !== t) return;
								if (this.remuxTracks) return;
								if (0 === this.pendingTracks.length) return void(++this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
							}
							for (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, w.forEach(function(t) {
								s.info[t] = this.videoTrack[t]
							}, this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, S.forEach(function(t) {
								s.info[t] = this.audioTrack[t]
							}, this)), 1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type : s.type = "combined", this.emittedTracks += this.pendingTracks.length, n = m.initSegment(this.pendingTracks), s.initSegment = new Uint8Array(n.byteLength), s.initSegment.set(n), s.data = new Uint8Array(this.pendingBytes), r = 0; r < this.pendingBoxes.length; r++) s.data.set(this.pendingBoxes[r], a), a += this.pendingBoxes[r].byteLength;
							for (r = 0; r < this.pendingCaptions.length; r++) e = this.pendingCaptions[r], e.startTime = e.startPts - o, e.startTime /= 9e4, e.endTime = e.endPts - o, e.endTime /= 9e4, s.captionStreams[e.stream] = !0, s.captions.push(e);
							for (r = 0; r < this.pendingMetadata.length; r++) i = this.pendingMetadata[r], i.cueTime = i.pts - o, i.cueTime /= 9e4, s.metadata.push(i);
							s.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", s), this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
						}, a = function(t) {
							var e, i, o = this,
								l = !0;
							a.prototype.init.call(this), t = t || {}, this.baseMediaDecodeTime = t.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function() {
								var e = {};
								this.transmuxPipeline_ = e, e.type = "aac", e.metadataStream = new g.MetadataStream, e.aacStream = new _, e.audioTimestampRolloverStream = new g.TimestampRolloverStream("audio"), e.timedMetadataTimestampRolloverStream = new g.TimestampRolloverStream("timed-metadata"), e.adtsStream = new y, e.coalesceStream = new s(t, e.metadataStream), e.headOfPipeline = e.aacStream, e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream), e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream), e.metadataStream.on("timestamp", function(t) {
									e.aacStream.setTimestamp(t.timeStamp)
								}), e.aacStream.on("data", function(t) {
									"timed-metadata" !== t.type || e.audioSegmentStream || (i = i || {
										timelineStartInfo: {
											baseMediaDecodeTime: o.baseMediaDecodeTime
										},
										codec: "adts",
										type: "audio"
									}, e.coalesceStream.numberOfTracks++, e.audioSegmentStream = new r(i), e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))
								}), e.coalesceStream.on("data", this.trigger.bind(this, "data")), e.coalesceStream.on("done", this.trigger.bind(this, "done"))
							}, this.setupTsPipeline = function() {
								var a = {};
								this.transmuxPipeline_ = a, a.type = "ts", a.metadataStream = new g.MetadataStream, a.packetStream = new g.TransportPacketStream, a.parseStream = new g.TransportParseStream, a.elementaryStream = new g.ElementaryStream, a.videoTimestampRolloverStream = new g.TimestampRolloverStream("video"), a.audioTimestampRolloverStream = new g.TimestampRolloverStream("audio"), a.timedMetadataTimestampRolloverStream = new g.TimestampRolloverStream("timed-metadata"), a.adtsStream = new y, a.h264Stream = new v, a.captionStream = new g.CaptionStream, a.coalesceStream = new s(t, a.metadataStream), a.headOfPipeline = a.packetStream, a.packetStream.pipe(a.parseStream).pipe(a.elementaryStream), a.elementaryStream.pipe(a.videoTimestampRolloverStream).pipe(a.h264Stream), a.elementaryStream.pipe(a.audioTimestampRolloverStream).pipe(a.adtsStream), a.elementaryStream.pipe(a.timedMetadataTimestampRolloverStream).pipe(a.metadataStream).pipe(a.coalesceStream), a.h264Stream.pipe(a.captionStream).pipe(a.coalesceStream), a.elementaryStream.on("data", function(s) {
									var u;
									if ("metadata" === s.type) {
										for (u = s.tracks.length; u--;) e || "video" !== s.tracks[u].type ? i || "audio" !== s.tracks[u].type || (i = s.tracks[u], i.timelineStartInfo.baseMediaDecodeTime = o.baseMediaDecodeTime) : (e = s.tracks[u], e.timelineStartInfo.baseMediaDecodeTime = o.baseMediaDecodeTime);
										e && !a.videoSegmentStream && (a.coalesceStream.numberOfTracks++, a.videoSegmentStream = new n(e, t), a.videoSegmentStream.on("timelineStartInfo", function(t) {
											i && (i.timelineStartInfo = t, a.audioSegmentStream.setEarliestDts(t.dts))
										}), a.videoSegmentStream.on("processedGopsInfo", o.trigger.bind(o, "gopInfo")), a.videoSegmentStream.on("baseMediaDecodeTime", function(t) {
											i && a.audioSegmentStream.setVideoBaseMediaDecodeTime(t)
										}), a.h264Stream.pipe(a.videoSegmentStream).pipe(a.coalesceStream)), i && !a.audioSegmentStream && (a.coalesceStream.numberOfTracks++, a.audioSegmentStream = new r(i), a.adtsStream.pipe(a.audioSegmentStream).pipe(a.coalesceStream))
									}
								}), a.coalesceStream.on("data", this.trigger.bind(this, "data")), a.coalesceStream.on("done", this.trigger.bind(this, "done"))
							}, this.setBaseMediaDecodeTime = function(t) {
								var n = this.transmuxPipeline_;
								this.baseMediaDecodeTime = t, i && (i.timelineStartInfo.dts = void 0, i.timelineStartInfo.pts = void 0, c(i), i.timelineStartInfo.baseMediaDecodeTime = t, n.audioTimestampRolloverStream && n.audioTimestampRolloverStream.discontinuity()), e && (n.videoSegmentStream && (n.videoSegmentStream.gopCache_ = [], n.videoTimestampRolloverStream.discontinuity()), e.timelineStartInfo.dts = void 0, e.timelineStartInfo.pts = void 0, c(e), n.captionStream.reset(), e.timelineStartInfo.baseMediaDecodeTime = t), n.timedMetadataTimestampRolloverStream && n.timedMetadataTimestampRolloverStream.discontinuity()
							}, this.setAudioAppendStart = function(t) {
								i && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)
							}, this.alignGopsWith = function(t) {
								e && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)
							}, this.push = function(t) {
								if (l) {
									var e = u(t);
									e && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : e || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), l = !1
								}
								this.transmuxPipeline_.headOfPipeline.push(t)
							}, this.flush = function() {
								l = !0, this.transmuxPipeline_.headOfPipeline.flush()
							}, this.resetCaptions = function() {
								this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
							}
						}, a.prototype = new f, e.exports = {
							Transmuxer: a,
							VideoSegmentStream: n,
							AudioSegmentStream: r,
							AUDIO_PROPERTIES: S,
							VIDEO_PROPERTIES: w
						}
					}, {
						"../aac": 38,
						"../codecs/adts.js": 40,
						"../codecs/h264": 41,
						"../data/silence": 42,
						"../m2ts/m2ts.js": 50,
						"../utils/clock": 60,
						"../utils/stream.js": 62,
						"./mp4-generator.js": 56
					}],
					59: [function(t, e, i) {
						"use strict";
						var n = t("../m2ts/stream-types.js"),
							r = t("../m2ts/timestamp-rollover-stream.js").handleRollover,
							a = {};
						a.ts = t("../m2ts/probe.js"), a.aac = t("../aac/probe.js");
						var s = function(t) {
							return t[0] === "I".charCodeAt(0) && t[1] === "D".charCodeAt(0) && t[2] === "3".charCodeAt(0)
						}, o = function(t, e) {
							for (var i, n = 0, r = 188; r < t.byteLength;) if (71 !== t[n] || 71 !== t[r]) n++, r++;
							else {
								switch (i = t.subarray(n, r), a.ts.parseType(i, e.pid)) {
									case "pat":
										e.pid || (e.pid = a.ts.parsePat(i));
										break;
									case "pmt":
										e.table || (e.table = a.ts.parsePmt(i))
								}
								if (e.pid && e.table) return;
								n += 188, r += 188
							}
						}, u = function(t, e, i) {
							for (var n, r, s, o, u = 0, l = 188, c = !1; l < t.byteLength;) if (71 !== t[u] || 71 !== t[l]) u++, l++;
							else {
								switch (n = t.subarray(u, l), a.ts.parseType(n, e.pid)) {
									case "pes":
										r = a.ts.parsePesType(n, e.table), s = a.ts.parsePayloadUnitStartIndicator(n), "audio" === r && s && (o = a.ts.parsePesTime(n)) && (o.type = "audio", i.audio.push(o), c = !0)
								}
								if (c) break;
								u += 188, l += 188
							}
							for (l = t.byteLength, u = l - 188, c = !1; u >= 0;) if (71 !== t[u] || 71 !== t[l]) u--, l--;
							else {
								switch (n = t.subarray(u, l), a.ts.parseType(n, e.pid)) {
									case "pes":
										r = a.ts.parsePesType(n, e.table), s = a.ts.parsePayloadUnitStartIndicator(n), "audio" === r && s && (o = a.ts.parsePesTime(n)) && (o.type = "audio", i.audio.push(o), c = !0)
								}
								if (c) break;
								u -= 188, l -= 188
							}
						}, l = function(t, e, i) {
							for (var n, r, s, o, u, l, c, d = 0, h = 188, p = !1, f = {
								data: [],
								size: 0
							}; h < t.byteLength;) if (71 !== t[d] || 71 !== t[h]) d++, h++;
							else {
								switch (n = t.subarray(d, h), a.ts.parseType(n, e.pid)) {
									case "pes":
										if (r = a.ts.parsePesType(n, e.table), s = a.ts.parsePayloadUnitStartIndicator(n), "video" === r && (s && !p && (o = a.ts.parsePesTime(n)) && (o.type = "video", i.video.push(o), p = !0), !i.firstKeyFrame)) {
											if (s && 0 !== f.size) {
												for (u = new Uint8Array(f.size), l = 0; f.data.length;) c = f.data.shift(), u.set(c, l), l += c.byteLength;
												a.ts.videoPacketContainsKeyFrame(u) && (i.firstKeyFrame = a.ts.parsePesTime(u), i.firstKeyFrame.type = "video"), f.size = 0
											}
											f.data.push(n), f.size += n.byteLength
										}
								}
								if (p && i.firstKeyFrame) break;
								d += 188, h += 188
							}
							for (h = t.byteLength, d = h - 188, p = !1; d >= 0;) if (71 !== t[d] || 71 !== t[h]) d--, h--;
							else {
								switch (n = t.subarray(d, h), a.ts.parseType(n, e.pid)) {
									case "pes":
										r = a.ts.parsePesType(n, e.table), s = a.ts.parsePayloadUnitStartIndicator(n), "video" === r && s && (o = a.ts.parsePesTime(n)) && (o.type = "video", i.video.push(o), p = !0)
								}
								if (p) break;
								d -= 188, h -= 188
							}
						}, c = function(t, e) {
							if (t.audio && t.audio.length) {
								var i = e;
								void 0 === i && (i = t.audio[0].dts), t.audio.forEach(function(t) {
									t.dts = r(t.dts, i), t.pts = r(t.pts, i), t.dtsTime = t.dts / 9e4, t.ptsTime = t.pts / 9e4
								})
							}
							if (t.video && t.video.length) {
								var n = e;
								if (void 0 === n && (n = t.video[0].dts), t.video.forEach(function(t) {
									t.dts = r(t.dts, n), t.pts = r(t.pts, n), t.dtsTime = t.dts / 9e4, t.ptsTime = t.pts / 9e4
								}), t.firstKeyFrame) {
									var a = t.firstKeyFrame;
									a.dts = r(a.dts, n), a.pts = r(a.pts, n), a.dtsTime = a.dts / 9e4, a.ptsTime = a.dts / 9e4
								}
							}
						}, d = function(t) {
							for (var e, i = !1, n = 0, r = null, s = null, o = 0, u = 0; t.length - u >= 3;) {
								switch (a.aac.parseType(t, u)) {
									case "timed-metadata":
										if (t.length - u < 10) {
											i = !0;
											break
										}
										if ((o = a.aac.parseId3TagSize(t, u)) > t.length) {
											i = !0;
											break
										}
										null === s && (e = t.subarray(u, u + o), s = a.aac.parseAacTimestamp(e)), u += o;
										break;
									case "audio":
										if (t.length - u < 7) {
											i = !0;
											break
										}
										if ((o = a.aac.parseAdtsSize(t, u)) > t.length) {
											i = !0;
											break
										}
										null === r && (e = t.subarray(u, u + o), r = a.aac.parseSampleRate(e)), n++, u += o;
										break;
									default:
										u++
								}
								if (i) return null
							}
							if (null === r || null === s) return null;
							var l = 9e4 / r;
							return {
								audio: [{
									type: "audio",
									dts: s,
									pts: s
								}, {
									type: "audio",
									dts: s + 1024 * n * l,
									pts: s + 1024 * n * l
								}]
							}
						}, h = function(t) {
							var e = {
								pid: null,
								table: null
							}, i = {};
							o(t, e);
							for (var r in e.table) if (e.table.hasOwnProperty(r)) {
								var a = e.table[r];
								switch (a) {
									case n.H264_STREAM_TYPE:
										i.video = [], l(t, e, i), 0 === i.video.length && delete i.video;
										break;
									case n.ADTS_STREAM_TYPE:
										i.audio = [], u(t, e, i), 0 === i.audio.length && delete i.audio
								}
							}
							return i
						}, p = function(t, e) {
							var i, n = s(t);
							return (i = n ? d(t) : h(t)) && (i.audio || i.video) ? (c(i, e), i) : null
						};
						e.exports = {
							inspect: p
						}
					}, {
						"../aac/probe.js": 39,
						"../m2ts/probe.js": 52,
						"../m2ts/stream-types.js": 53,
						"../m2ts/timestamp-rollover-stream.js": 54
					}],
					60: [function(t, e, i) {
						var n, r, a, s, o, u;
						n = function(t) {
							return 9e4 * t
						}, r = function(t, e) {
							return t * e
						}, a = function(t) {
							return t / 9e4
						}, s = function(t, e) {
							return t / e
						}, o = function(t, e) {
							return n(s(t, e))
						}, u = function(t, e) {
							return r(a(t), e)
						}, e.exports = {
							secondsToVideoTs: n,
							secondsToAudioTs: r,
							videoTsToSeconds: a,
							audioTsToSeconds: s,
							audioTsToVideoTs: o,
							videoTsToAudioTs: u
						}
					}, {}],
					61: [function(t, e, i) {
						"use strict";
						var n;
						n = function(t) {
							var e = t.byteLength,
								i = 0,
								n = 0;
							this.length = function() {
								return 8 * e
							}, this.bitsAvailable = function() {
								return 8 * e + n
							}, this.loadWord = function() {
								var r = t.byteLength - e,
									a = new Uint8Array(4),
									s = Math.min(4, e);
								if (0 === s) throw new Error("no bytes available");
								a.set(t.subarray(r, r + s)), i = new DataView(a.buffer).getUint32(0), n = 8 * s, e -= s
							}, this.skipBits = function(t) {
								var r;
								n > t ? (i <<= t, n -= t) : (t -= n, r = Math.floor(t / 8), t -= 8 * r, e -= r, this.loadWord(), i <<= t, n -= t)
							}, this.readBits = function(t) {
								var r = Math.min(n, t),
									a = i >>> 32 - r;
								return n -= r, n > 0 ? i <<= r : e > 0 && this.loadWord(), r = t - r, r > 0 ? a << r | this.readBits(r) : a
							}, this.skipLeadingZeros = function() {
								var t;
								for (t = 0; t < n; ++t) if (0 != (i & 2147483648 >>> t)) return i <<= t, n -= t, t;
								return this.loadWord(), t + this.skipLeadingZeros()
							}, this.skipUnsignedExpGolomb = function() {
								this.skipBits(1 + this.skipLeadingZeros())
							}, this.skipExpGolomb = function() {
								this.skipBits(1 + this.skipLeadingZeros())
							}, this.readUnsignedExpGolomb = function() {
								var t = this.skipLeadingZeros();
								return this.readBits(t + 1) - 1
							}, this.readExpGolomb = function() {
								var t = this.readUnsignedExpGolomb();
								return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
							}, this.readBoolean = function() {
								return 1 === this.readBits(1)
							}, this.readUnsignedByte = function() {
								return this.readBits(8)
							}, this.loadWord()
						}, e.exports = n
					}, {}],
					62: [function(t, e, i) {
						"use strict";
						var n = function() {
							this.init = function() {
								var t = {};
								this.on = function(e, i) {
									t[e] || (t[e] = []), t[e] = t[e].concat(i)
								}, this.off = function(e, i) {
									var n;
									return !!t[e] && (n = t[e].indexOf(i), t[e] = t[e].slice(), t[e].splice(n, 1), n > -1)
								}, this.trigger = function(e) {
									var i, n, r, a;
									if (i = t[e]) if (2 === arguments.length) for (r = i.length, n = 0; n < r; ++n) i[n].call(this, arguments[1]);
									else {
										for (a = [], n = arguments.length, n = 1; n < arguments.length; ++n) a.push(arguments[n]);
										for (r = i.length, n = 0; n < r; ++n) i[n].apply(this, a)
									}
								}, this.dispose = function() {
									t = {}
								}
							}
						};
						n.prototype.pipe = function(t) {
							return this.on("data", function(e) {
								t.push(e)
							}), this.on("done", function(e) {
								t.flush(e)
							}), t
						}, n.prototype.push = function(t) {
							this.trigger("data", t)
						}, n.prototype.flush = function(t) {
							this.trigger("done", t)
						}, e.exports = n
					}, {}],
					63: [function(e, i, n) {
						! function(e) {
							var r = {
								buildAbsoluteURL: function(t, e) {
									if (e = e.trim(), /^[a-z]+:/i.test(e)) return e;
									var i = null,
										n = null,
										a = /^([^#]*)(.*)$/.exec(e);
									a && (n = a[2], e = a[1]);
									var s = /^([^\?]*)(.*)$/.exec(e);
									s && (i = s[2], e = s[1]);
									var o = /^([^#]*)(.*)$/.exec(t);
									o && (t = o[1]);
									var u = /^([^\?]*)(.*)$/.exec(t);
									u && (t = u[1]);
									var l = /^(([a-z]+:)?\/\/[^:\/]+(:[0-9]+)?)?(\/?.*)$/i.exec(t);
									if (!l) throw new Error("Error trying to parse base URL.");
									var c = l[2] || "",
										d = l[1] || "",
										h = l[4];
									0 !== h.indexOf("/") && "" !== d && (h = "/" + h);
									var p = null;
									return p = /^\/\//.test(e) ? c + "//" + r.buildAbsolutePath("", e.substring(2)) : /^\//.test(e) ? d + "/" + r.buildAbsolutePath("", e.substring(1)) : r.buildAbsolutePath(d + h, e), i && (p += i), n && (p += n), p
								},
								buildAbsolutePath: function(t, e) {
									for (var i, n, r = e, a = "", s = t.replace(/[^\/]*$/, r.replace(/(\/|^)(?:\.?\/+)+/g, "$1")), o = 0;
									(n = s.indexOf("/../", o)) > -1; o = n + i) i = /^\/(?:\.\.\/)*/.exec(s.slice(n))[0].length, a = (a + s.substring(o, n)).replace(new RegExp("(?:\\/+[^\\/]*){0," + (i - 1) / 3 + "}$"), "/");
									return a + s.substr(o)
								}
							};
							"object" == typeof n && "object" == typeof i ? i.exports = r : "function" == typeof t && t.amd ? t([], function() {
								return r
							}) : "object" == typeof n ? n.URLToolkit = r : e.URLToolkit = r
						}(this)
					}, {}],
					64: [function(t, i, n) {
						(function(r) {
							"use strict";

							function a(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var s = t("global/window"),
								o = a(s),
								u = "undefined" != typeof window ? e : void 0 !== r ? r.videojs : null,
								l = a(u),
								c = function(t) {
									Object.defineProperties(t.frame, {
										id: {
											get: function() {
												return l.
												default.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), t.value.key
											}
										},
										value: {
											get: function() {
												return l.
												default.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), t.value.data
											}
										},
										privateData: {
											get: function() {
												return l.
												default.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), t.value.data
											}
										}
									})
								}, d = function(t) {
									return isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t
								}, h = function(t, e, i) {
									var n = o.
									default.WebKitDataCue || o.
									default.VTTCue;
									e && e.forEach(function(t) {
										var e = t.stream;
										this.inbandTextTracks_[e].addCue(new n(t.startTime + this.timestampOffset, t.endTime + this.timestampOffset, t.text))
									}, t), i && function() {
										var e = d(t.mediaSource_.duration);
										i.forEach(function(t) {
											var e = t.cueTime + this.timestampOffset;
											t.frames.forEach(function(t) {
												var i = new n(e, e, t.value || t.url || t.data || "");
												i.frame = t, i.value = t, c(i), this.metadataTrack_.addCue(i)
											}, this)
										}, t), t.metadataTrack_ && t.metadataTrack_.cues && t.metadataTrack_.cues.length && function() {
											for (var i = t.metadataTrack_.cues, n = [], r = 0; r < i.length; r++) i[r] && n.push(i[r]);
											var a = n.reduce(function(t, e) {
												var i = t[e.startTime] || [];
												return i.push(e), t[e.startTime] = i, t
											}, {}),
												s = Object.keys(a).sort(function(t, e) {
													return Number(t) - Number(e)
												});
											s.forEach(function(t, i) {
												var n = a[t],
													r = Number(s[i + 1]) || e;
												n.forEach(function(t) {
													t.endTime = r
												})
											})
										}()
									}()
								};
							n.
							default = {
								addTextTrackData: h,
								durationOfVideo: d
							}, i.exports = n.
							default
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"global/window": 32
					}],
					65: [function(t, e, i) {
						"use strict";
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var n = function(t) {
							return /mp4a\.\d+.\d+/i.test(t)
						}, r = function(t) {
							return /avc1\.[\da-f]+/i.test(t)
						}, a = function(t) {
							var e = {
								type: "",
								parameters: {}
							}, i = t.trim().split(";");
							return e.type = i.shift().trim(), i.forEach(function(t) {
								var i = t.trim().split("=");
								if (i.length > 1) {
									var n = i[0].replace(/"/g, "").trim(),
										r = i[1].replace(/"/g, "").trim();
									e.parameters[n] = r
								}
							}), e
						}, s = function(t) {
							return t.map(function(t) {
								return t.replace(/avc1\.(\d+)\.(\d+)/i, function(t, e, i) {
									return "avc1." + ("00" + Number(e).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2)
								})
							})
						};
						i.
						default = {
							isAudioCodec: n,
							parseContentType: a,
							isVideoCodec: r,
							translateLegacyCodecs: s
						}, e.exports = i.
						default
					}, {}],
					66: [function(t, e, i) {
						"use strict";
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var n = function(t, e, i) {
							var n = e.player_;
							if (i.captions && i.captions.length) {
								t.inbandTextTracks_ || (t.inbandTextTracks_ = {});
								for (var r in i.captionStreams) if (!t.inbandTextTracks_[r]) {
									n.tech_.trigger({
										type: "usage",
										name: "hls-608"
									});
									var a = n.textTracks().getTrackById(r);
									t.inbandTextTracks_[r] = a || n.addRemoteTextTrack({
										kind: "captions",
										id: r,
										label: r
									}, !1).track
								}
							}
							i.metadata && i.metadata.length && !t.metadataTrack_ && (t.metadataTrack_ = n.addRemoteTextTrack({
								kind: "metadata",
								label: "Timed Metadata"
							}, !1).track, t.metadataTrack_.inBandMetadataTrackDispatchType = i.metadata.dispatchType)
						};
						i.
						default = n, e.exports = i.
						default
					}, {}],
					67: [function(t, e, i) {
						"use strict";
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var n = {
							TIME_BETWEEN_CHUNKS: 1,
							BYTES_PER_CHUNK: 32768
						};
						i.
						default = n, e.exports = i.
						default
					}, {}],
					68: [function(t, i, n) {
						(function(r) {
							"use strict";

							function a(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							function s(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}
							function o(t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var u = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
								l = function(t, e, i) {
									for (var n = !0; n;) {
										var r = t,
											a = e,
											s = i;
										n = !1, null === r && (r = Function.prototype);
										var o = Object.getOwnPropertyDescriptor(r, a);
										if (void 0 !== o) {
											if ("value" in o) return o.value;
											var u = o.get;
											if (void 0 === u) return;
											return u.call(s)
										}
										var l = Object.getPrototypeOf(r);
										if (null === l) return;
										t = l, e = a, i = s, n = !0, o = l = void 0
									}
								}, c = t("global/document"),
								d = a(c),
								h = "undefined" != typeof window ? e : void 0 !== r ? r.videojs : null,
								p = a(h),
								f = t("./flash-source-buffer"),
								m = a(f),
								g = t("./flash-constants"),
								y = a(g),
								v = t("./codec-utils"),
								_ = function(t) {
									function e() {
										var t = this;
										s(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.sourceBuffers = [], this.readyState = "closed", this.on(["sourceopen", "webkitsourceopen"], function(e) {
											t.swfObj = d.
											default.getElementById(e.swfId), t.player_ = (0, p.
											default)(t.swfObj.parentNode), t.tech_ = t.swfObj.tech, t.readyState = "open", t.tech_.on("seeking", function() {
												for (var e = t.sourceBuffers.length; e--;) t.sourceBuffers[e].abort()
											}), t.swfObj && t.swfObj.vjs_load()
										})
									}
									return o(e, t), u(e, [{
										key: "addSeekableRange_",
										value: function() {}
									}, {
										key: "addSourceBuffer",
										value: function(t) {
											var e = (0, v.parseContentType)(t),
												i = void 0;
											if ("video/mp2t" !== e.type && "audio/mp2t" !== e.type) throw new Error("NotSupportedError (Video.js)");
											return i = new m.
											default (this), this.sourceBuffers.push(i), i
										}
									}, {
										key: "endOfStream",
										value: function(t) {
											"network" === t ? this.tech_.error(2) : "decode" === t && this.tech_.error(3), "ended" !== this.readyState && (this.readyState = "ended", this.swfObj.vjs_endOfStream())
										}
									}]), e
								}(p.
								default.EventTarget);
							n.
							default = _;
							try {
								Object.defineProperty(_.prototype, "duration", {
									get: function() {
										return this.swfObj ? this.swfObj.vjs_getProperty("duration") : NaN
									},
									set: function(t) {
										var e = void 0,
											i = this.swfObj.vjs_getProperty("duration");
										if (this.swfObj.vjs_setProperty("duration", t), t < i) for (e = 0; e < this.sourceBuffers.length; e++) this.sourceBuffers[e].remove(t, i);
										return t
									}
								})
							} catch (t) {
								_.prototype.duration = NaN
							}
							for (var b in y.
							default) _[b] = y.
							default [b];
							i.exports = n.
							default
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./codec-utils": 65,
						"./flash-constants": 67,
						"./flash-source-buffer": 69,
						"global/document": 31
					}],
					69: [function(t, i, n) {
						(function(r) {
							"use strict";

							function a(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							function s(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}
							function o(t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var u = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
								l = function(t, e, i) {
									for (var n = !0; n;) {
										var r = t,
											a = e,
											s = i;
										n = !1, null === r && (r = Function.prototype);
										var o = Object.getOwnPropertyDescriptor(r, a);
										if (void 0 !== o) {
											if ("value" in o) return o.value;
											var u = o.get;
											if (void 0 === u) return;
											return u.call(s)
										}
										var l = Object.getPrototypeOf(r);
										if (null === l) return;
										t = l, e = a, i = s, n = !0, o = l = void 0
									}
								}, c = t("global/window"),
								d = a(c),
								h = "undefined" != typeof window ? e : void 0 !== r ? r.videojs : null,
								p = a(h),
								f = t("mux.js/lib/flv"),
								m = a(f),
								g = t("./remove-cues-from-track"),
								y = a(g),
								v = t("./create-text-tracks-if-necessary"),
								_ = a(v),
								b = t("./add-text-track-data"),
								T = t("./flash-transmuxer-worker"),
								S = a(T),
								w = t("webworkify"),
								k = a(w),
								E = t("./flash-constants"),
								C = a(E),
								O = function(t) {
									d.
									default.setTimeout(t, C.
									default.TIME_BETWEEN_CHUNKS)
								}, A = function() {
									return Math.random().toString(36).slice(2, 8)
								}, P = function(t, e) {
									("number" != typeof e || e < 0) && (e = 0);
									var i = Math.pow(10, e);
									return Math.round(t * i) / i
								}, x = function(t) {
									function e(t) {
										var i = this;
										s(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).call(this);
										var n = void 0;
										this.chunkSize_ = C.
										default.BYTES_PER_CHUNK, this.buffer_ = [], this.bufferSize_ = 0, this.basePtsOffset_ = NaN, this.mediaSource_ = t, this.audioBufferEnd_ = NaN, this.videoBufferEnd_ = NaN, this.updating = !1, this.timestampOffset_ = 0, n = d.
										default.btoa(String.fromCharCode.apply(null, Array.prototype.slice.call(m.
										default.getFlvHeader())));
										var r = this.mediaSource_.player_.id().replace(/[^a-zA-Z0-9]/g, "_");
										this.flashEncodedHeaderName_ = "vjs_flashEncodedHeader_" + r + A(), this.flashEncodedDataName_ = "vjs_flashEncodedData_" + r + A(), d.
										default [this.flashEncodedHeaderName_] = function() {
											return delete d.
											default [i.flashEncodedHeaderName_], n
										}, this.mediaSource_.swfObj.vjs_appendChunkReady(this.flashEncodedHeaderName_), this.transmuxer_ = (0, k.
										default)(S.
										default), this.transmuxer_.postMessage({
											action: "init",
											options: {}
										}), this.transmuxer_.onmessage = function(t) {
											"data" === t.data.action && i.receiveBuffer_(t.data.segment)
										}, this.one("updateend", function() {
											i.mediaSource_.tech_.trigger("loadedmetadata")
										}), Object.defineProperty(this, "timestampOffset", {
											get: function() {
												return this.timestampOffset_
											},
											set: function(t) {
												"number" == typeof t && t >= 0 && (this.timestampOffset_ = t, this.mediaSource_.swfObj.vjs_discontinuity(), this.basePtsOffset_ = NaN, this.audioBufferEnd_ = NaN, this.videoBufferEnd_ = NaN, this.transmuxer_.postMessage({
													action: "reset"
												}))
											}
										}), Object.defineProperty(this, "buffered", {
											get: function() {
												if (!(this.mediaSource_ && this.mediaSource_.swfObj && "vjs_getProperty" in this.mediaSource_.swfObj)) return p.
												default.createTimeRange();
												var t = this.mediaSource_.swfObj.vjs_getProperty("buffered");
												return t && t.length && (t[0][0] = P(t[0][0], 3), t[0][1] = P(t[0][1], 3)), p.
												default.createTimeRanges(t)
											}
										}), this.mediaSource_.player_.on("seeked", function() {
											if ((0, y.
											default)(0, 1 / 0, i.metadataTrack_), i.inbandTextTracks_) for (var t in i.inbandTextTracks_)(0, y.
											default)(0, 1 / 0, i.inbandTextTracks_[t])
										});
										var a = this.onHlsReset_.bind(this);
										this.mediaSource_.player_.tech_.on("hls-reset", a), this.mediaSource_.player_.tech_.hls.on("dispose", function() {
											i.transmuxer_.terminate(), i.mediaSource_.player_.tech_.off("hls-reset", a)
										})
									}
									return o(e, t), u(e, [{
										key: "appendBuffer",
										value: function(t) {
											var e = void 0;
											if (this.updating) throw e = new Error("SourceBuffer.append() cannot be called while an update is in progress"), e.name = "InvalidStateError", e.code = 11, e;
											this.updating = !0, this.mediaSource_.readyState = "open", this.trigger({
												type: "update"
											}), this.transmuxer_.postMessage({
												action: "push",
												data: t.buffer,
												byteOffset: t.byteOffset,
												byteLength: t.byteLength
											}, [t.buffer]), this.transmuxer_.postMessage({
												action: "flush"
											})
										}
									}, {
										key: "abort",
										value: function() {
											this.buffer_ = [], this.bufferSize_ = 0, this.mediaSource_.swfObj.vjs_abort(), this.updating && (this.updating = !1, this.trigger({
												type: "updateend"
											}))
										}
									}, {
										key: "remove",
										value: function(t, e) {
											if ((0, y.
											default)(t, e, this.metadataTrack_), this.inbandTextTracks_) for (var i in this.inbandTextTracks_)(0, y.
											default)(t, e, this.inbandTextTracks_[i]);
											this.trigger({
												type: "update"
											}), this.trigger({
												type: "updateend"
											})
										}
									}, {
										key: "receiveBuffer_",
										value: function(t) {
											var e = this;
											(0, _.
											default)(this, this.mediaSource_, t), (0, b.addTextTrackData)(this, t.captions, t.metadata), O(function() {
												var i = e.convertTagsToData_(t);
												0 === e.buffer_.length && O(e.processBuffer_.bind(e)), i && (e.buffer_.push(i), e.bufferSize_ += i.byteLength)
											})
										}
									}, {
										key: "processBuffer_",
										value: function() {
											var t = this,
												e = C.
											default.BYTES_PER_CHUNK;
											if (!this.buffer_.length) return void(!1 !== this.updating && (this.updating = !1, this.trigger({
												type: "updateend"
											})));
											var i = this.buffer_[0].subarray(0, e);
											i.byteLength < e || this.buffer_[0].byteLength === e ? this.buffer_.shift() : this.buffer_[0] = this.buffer_[0].subarray(e), this.bufferSize_ -= i.byteLength;
											for (var n = [], r = i.byteLength, a = 0; a < r; a++) n.push(String.fromCharCode(i[a]));
											var s = d.
											default.btoa(n.join(""));
											d.
											default [this.flashEncodedDataName_] = function() {
												return O(t.processBuffer_.bind(t)), delete d.
												default [t.flashEncodedDataName_], s
											}, this.mediaSource_.swfObj.vjs_appendChunkReady(this.flashEncodedDataName_)
										}
									}, {
										key: "convertTagsToData_",
										value: function(t) {
											var e = 0,
												i = this.mediaSource_.tech_,
												n = 0,
												r = void 0,
												a = t.tags.videoTags,
												s = t.tags.audioTags;
											if (isNaN(this.basePtsOffset_) && (a.length || s.length)) {
												var o = a[0] || {
													pts: 1 / 0
												}, u = s[0] || {
													pts: 1 / 0
												};
												this.basePtsOffset_ = Math.min(u.pts, o.pts)
											}
											i.seeking() && (this.videoBufferEnd_ = NaN, this.audioBufferEnd_ = NaN), isNaN(this.videoBufferEnd_) ? (i.buffered().length && (n = i.buffered().end(0) - this.timestampOffset), i.seeking() && (n = Math.max(n, i.currentTime() - this.timestampOffset)), n *= 1e3, n += this.basePtsOffset_) : n = this.videoBufferEnd_ + .1;
											var l = a.length;
											if (l && a[l - 1].pts >= n) {
												for (; --l;) {
													var c = a[l];
													if (!(c.pts > n) && (c.keyFrame || c.metaDataTag)) break
												}
												for (; l;) {
													if (!a[l - 1].metaDataTag) break;
													l--
												}
											}
											var d = a.slice(l),
												h = void 0;
											for (h = isNaN(this.audioBufferEnd_) ? n : this.audioBufferEnd_ + .1, d.length && (h = Math.min(h, d[0].pts)), l = 0; l < s.length && !(s[l].pts >= h);) l++;
											var p = s.slice(l);
											p.length && (this.audioBufferEnd_ = p[p.length - 1].pts), d.length && (this.videoBufferEnd_ = d[d.length - 1].pts);
											var f = this.getOrderedTags_(d, p);
											if (0 !== f.length) {
												if (f[0].pts < n && i.seeking()) {
													var m = i.currentTime(),
														g = (n - f[0].pts) / 1e3,
														y = m - g;
													y < 1 / 30 && (y = 0);
													try {
														this.mediaSource_.swfObj.vjs_adjustCurrentTime(y)
													} catch (t) {}
												}
												for (var v = 0; v < f.length; v++) e += f[v].bytes.byteLength;
												r = new Uint8Array(e);
												for (var v = 0, _ = 0; v < f.length; v++) r.set(f[v].bytes, _), _ += f[v].bytes.byteLength;
												return r
											}
										}
									}, {
										key: "getOrderedTags_",
										value: function(t, e) {
											for (var i = void 0, n = []; t.length || e.length;) i = t.length ? e.length && e[0].dts < t[0].dts ? e.shift() : t.shift() : e.shift(), n.push(i);
											return n
										}
									}, {
										key: "onHlsReset_",
										value: function() {
											this.transmuxer_.postMessage({
												action: "resetCaptions"
											})
										}
									}]), e
								}(p.
								default.EventTarget);
							n.
							default = x, i.exports = n.
							default
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./add-text-track-data": 64,
						"./create-text-tracks-if-necessary": 66,
						"./flash-constants": 67,
						"./flash-transmuxer-worker": 70,
						"./remove-cues-from-track": 72,
						"global/window": 32,
						"mux.js/lib/flv": 46,
						webworkify: 76
					}],
					70: [function(t, e, i) {
						"use strict";

						function n(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}
						function r(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var a = function() {
							function t(t, e) {
								for (var i = 0; i < e.length; i++) {
									var n = e[i];
									n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
								}
							}
							return function(e, i, n) {
								return i && t(e.prototype, i), n && t(e, n), e
							}
						}(),
							s = t("global/window"),
							o = n(s),
							u = t("mux.js/lib/flv"),
							l = n(u),
							c = function(t) {
								t.on("data", function(t) {
									o.
									default.postMessage({
										action: "data",
										segment: t
									})
								}), t.on("done", function(t) {
									o.
									default.postMessage({
										action: "done"
									})
								})
							}, d = function() {
								function t(e) {
									r(this, t), this.options = e || {}, this.init()
								}
								return a(t, [{
									key: "init",
									value: function() {
										this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new l.
										default.Transmuxer(this.options), c(this.transmuxer)
									}
								}, {
									key: "push",
									value: function(t) {
										var e = new Uint8Array(t.data, t.byteOffset, t.byteLength);
										this.transmuxer.push(e)
									}
								}, {
									key: "reset",
									value: function() {
										this.init()
									}
								}, {
									key: "flush",
									value: function() {
										this.transmuxer.flush()
									}
								}, {
									key: "resetCaptions",
									value: function() {
										this.transmuxer.resetCaptions()
									}
								}]), t
							}(),
							h = function(t) {
								t.onmessage = function(t) {
									if ("init" === t.data.action && t.data.options) return void(this.messageHandlers = new d(t.data.options));
									this.messageHandlers || (this.messageHandlers = new d), t.data && t.data.action && "init" !== t.data.action && this.messageHandlers[t.data.action] && this.messageHandlers[t.data.action](t.data)
								}
							};
						i.
						default = function(t) {
							return new h(t)
						}, e.exports = i.
						default
					}, {
						"global/window": 32,
						"mux.js/lib/flv": 46
					}],
					71: [function(t, i, n) {
						(function(r) {
							"use strict";

							function a(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							function s(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}
							function o(t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var u = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
								l = function(t, e, i) {
									for (var n = !0; n;) {
										var r = t,
											a = e,
											s = i;
										n = !1, null === r && (r = Function.prototype);
										var o = Object.getOwnPropertyDescriptor(r, a);
										if (void 0 !== o) {
											if ("value" in o) return o.value;
											var u = o.get;
											if (void 0 === u) return;
											return u.call(s)
										}
										var l = Object.getPrototypeOf(r);
										if (null === l) return;
										t = l, e = a, i = s, n = !0, o = l = void 0
									}
								}, c = t("global/window"),
								d = a(c),
								h = t("global/document"),
								p = a(h),
								f = "undefined" != typeof window ? e : void 0 !== r ? r.videojs : null,
								m = a(f),
								g = t("./virtual-source-buffer"),
								y = a(g),
								v = t("./add-text-track-data"),
								_ = t("./codec-utils"),
								b = function(t) {
									function e() {
										var t = this;
										s(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).call(this);
										var i = void 0;
										this.nativeMediaSource_ = new d.
										default.MediaSource;
										for (i in this.nativeMediaSource_) i in e.prototype || "function" != typeof this.nativeMediaSource_[i] || (this[i] = this.nativeMediaSource_[i].bind(this.nativeMediaSource_));
										this.duration_ = NaN, Object.defineProperty(this, "duration", {
											get: function() {
												return this.duration_ === 1 / 0 ? this.duration_ : this.nativeMediaSource_.duration
											},
											set: function(t) {
												if (this.duration_ = t, t !== 1 / 0) return void(this.nativeMediaSource_.duration = t)
											}
										}), Object.defineProperty(this, "seekable", {
											get: function() {
												return this.duration_ === 1 / 0 ? m.
												default.createTimeRanges([
													[0, this.nativeMediaSource_.duration]
												]) : this.nativeMediaSource_.seekable
											}
										}), Object.defineProperty(this, "readyState", {
											get: function() {
												return this.nativeMediaSource_.readyState
											}
										}), Object.defineProperty(this, "activeSourceBuffers", {
											get: function() {
												return this.activeSourceBuffers_
											}
										}), this.sourceBuffers = [], this.activeSourceBuffers_ = [], this.updateActiveSourceBuffers_ = function() {
											if (t.activeSourceBuffers_.length = 0, 1 === t.sourceBuffers.length) {
												var e = t.sourceBuffers[0];
												return e.appendAudioInitSegment_ = !0, e.audioDisabled_ = !e.audioCodec_, void t.activeSourceBuffers_.push(e)
											}
											for (var i = !1, n = !0, r = 0; r < t.player_.audioTracks().length; r++) {
												var a = t.player_.audioTracks()[r];
												if (a.enabled && "main" !== a.kind) {
													i = !0, n = !1;
													break
												}
											}
											t.sourceBuffers.forEach(function(e) {
												if (e.appendAudioInitSegment_ = !0, e.videoCodec_ && e.audioCodec_) e.audioDisabled_ = i;
												else if (e.videoCodec_ && !e.audioCodec_) e.audioDisabled_ = !0, n = !1;
												else if (!e.videoCodec_ && e.audioCodec_ && (e.audioDisabled_ = n, n)) return;
												t.activeSourceBuffers_.push(e)
											})
										}, this.onPlayerMediachange_ = function() {
											t.sourceBuffers.forEach(function(t) {
												t.appendAudioInitSegment_ = !0
											})
										}, this.onHlsReset_ = function() {
											t.sourceBuffers.forEach(function(t) {
												t.transmuxer_ && t.transmuxer_.postMessage({
													action: "resetCaptions"
												})
											})
										}, this.onHlsSegmentTimeMapping_ = function(e) {
											t.sourceBuffers.forEach(function(t) {
												return t.timeMapping_ = e.mapping
											})
										}, ["sourceopen", "sourceclose", "sourceended"].forEach(function(t) {
											this.nativeMediaSource_.addEventListener(t, this.trigger.bind(this))
										}, this), this.on("sourceopen", function(e) {
											var i = p.
											default.querySelector('[src="' + t.url_ + '"]');
											i && (t.player_ = (0, m.
											default)(i.parentNode), t.player_.tech_.on("hls-reset", t.onHlsReset_), t.player_.tech_.on("hls-segment-time-mapping", t.onHlsSegmentTimeMapping_), t.player_.audioTracks && t.player_.audioTracks() && (t.player_.audioTracks().on("change", t.updateActiveSourceBuffers_), t.player_.audioTracks().on("addtrack", t.updateActiveSourceBuffers_), t.player_.audioTracks().on("removetrack", t.updateActiveSourceBuffers_)), t.player_.on("mediachange", t.onPlayerMediachange_))
										}), this.on("sourceended", function(e) {
											for (var i = (0, v.durationOfVideo)(t.duration), n = 0; n < t.sourceBuffers.length; n++) {
												var r = t.sourceBuffers[n],
													a = r.metadataTrack_ && r.metadataTrack_.cues;
												a && a.length && (a[a.length - 1].endTime = i)
											}
										}), this.on("sourceclose", function(t) {
											this.sourceBuffers.forEach(function(t) {
												t.transmuxer_ && t.transmuxer_.terminate()
											}), this.sourceBuffers.length = 0, this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off("change", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("addtrack", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("removetrack", this.updateActiveSourceBuffers_)), this.player_.el_ && (this.player_.off("mediachange", this.onPlayerMediachange_), this.player_.tech_.off("hls-reset", this.onHlsReset_), this.player_.tech_.off("hls-segment-time-mapping", this.onHlsSegmentTimeMapping_)))
										})
									}
									return o(e, t), u(e, [{
										key: "addSeekableRange_",
										value: function(t, e) {
											var i = void 0;
											if (this.duration !== 1 / 0) throw i = new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity"), i.name = "InvalidStateError", i.code = 11, i;
											(e > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = e)
										}
									}, {
										key: "addSourceBuffer",
										value: function(t) {
											var e = void 0,
												i = (0, _.parseContentType)(t);
											if (/^(video|audio)\/mp2t$/i.test(i.type)) {
												var n = [];
												i.parameters && i.parameters.codecs && (n = i.parameters.codecs.split(","), n = (0, _.translateLegacyCodecs)(n), n = n.filter(function(t) {
													return (0, _.isAudioCodec)(t) || (0, _.isVideoCodec)(t)
												})), 0 === n.length && (n = ["avc1.4d400d", "mp4a.40.2"]), e = new y.
												default (this, n), 0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(), e.createRealSourceBuffers_(), this.sourceBuffers[0].audioDisabled_ = !0)
											} else e = this.nativeMediaSource_.addSourceBuffer(t);
											return this.sourceBuffers.push(e), e
										}
									}]), e
								}(m.
								default.EventTarget);
							n.
							default = b, i.exports = n.
							default
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./add-text-track-data": 64,
						"./codec-utils": 65,
						"./virtual-source-buffer": 75,
						"global/document": 31,
						"global/window": 32
					}],
					72: [function(t, e, i) {
						"use strict";
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var n = function(t, e, i) {
							var n = void 0,
								r = void 0;
							if (i && i.cues) for (n = i.cues.length; n--;) r = i.cues[n], r.startTime <= e && r.endTime >= t && i.removeCue(r)
						};
						i.
						default = n, e.exports = i.
						default
					}, {}],
					73: [function(t, e, i) {
						"use strict";

						function n(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}
						function r(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}
						Object.defineProperty(i, "__esModule", {
							value: !0
						});
						var a = function() {
							function t(t, e) {
								for (var i = 0; i < e.length; i++) {
									var n = e[i];
									n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
								}
							}
							return function(e, i, n) {
								return i && t(e.prototype, i), n && t(e, n), e
							}
						}(),
							s = t("global/window"),
							o = n(s),
							u = t("mux.js/lib/mp4"),
							l = n(u),
							c = function(t) {
								t.on("data", function(t) {
									var e = t.initSegment;
									t.initSegment = {
										data: e.buffer,
										byteOffset: e.byteOffset,
										byteLength: e.byteLength
									};
									var i = t.data;
									t.data = i.buffer, o.
									default.postMessage({
										action: "data",
										segment: t,
										byteOffset: i.byteOffset,
										byteLength: i.byteLength
									}, [t.data])
								}), t.captionStream && t.captionStream.on("data", function(t) {
									o.
									default.postMessage({
										action: "caption",
										data: t
									})
								}), t.on("done", function(t) {
									o.
									default.postMessage({
										action: "done"
									})
								}), t.on("gopInfo", function(t) {
									o.
									default.postMessage({
										action: "gopInfo",
										gopInfo: t
									})
								})
							}, d = function() {
								function t(e) {
									r(this, t), this.options = e || {}, this.init()
								}
								return a(t, [{
									key: "init",
									value: function() {
										this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new l.
										default.Transmuxer(this.options), c(this.transmuxer)
									}
								}, {
									key: "push",
									value: function(t) {
										var e = new Uint8Array(t.data, t.byteOffset, t.byteLength);
										this.transmuxer.push(e)
									}
								}, {
									key: "reset",
									value: function() {
										this.init()
									}
								}, {
									key: "setTimestampOffset",
									value: function(t) {
										var e = t.timestampOffset || 0;
										this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4 * e))
									}
								}, {
									key: "setAudioAppendStart",
									value: function(t) {
										this.transmuxer.setAudioAppendStart(Math.ceil(9e4 * t.appendStart))
									}
								}, {
									key: "flush",
									value: function(t) {
										this.transmuxer.flush()
									}
								}, {
									key: "resetCaptions",
									value: function() {
										this.transmuxer.resetCaptions()
									}
								}, {
									key: "alignGopsWith",
									value: function(t) {
										this.transmuxer.alignGopsWith(t.gopsToAlignWith.slice())
									}
								}]), t
							}(),
							h = function(t) {
								t.onmessage = function(t) {
									if ("init" === t.data.action && t.data.options) return void(this.messageHandlers = new d(t.data.options));
									this.messageHandlers || (this.messageHandlers = new d), t.data && t.data.action && "init" !== t.data.action && this.messageHandlers[t.data.action] && this.messageHandlers[t.data.action](t.data)
								}
							};
						i.
						default = function(t) {
							return new h(t)
						}, e.exports = i.
						default
					}, {
						"global/window": 32,
						"mux.js/lib/mp4": 55
					}],
					74: [function(t, i, n) {
						(function(i) {
							"use strict";

							function r(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var a = t("global/window"),
								s = r(a),
								o = t("./flash-media-source"),
								u = r(o),
								l = t("./html-media-source"),
								c = r(l),
								d = "undefined" != typeof window ? e : void 0 !== i ? i.videojs : null,
								h = r(d),
								p = 0,
								f = {
									mode: "auto"
								};
							h.
							default.mediaSources = {};
							var m = function(t, e) {
								var i = h.
								default.mediaSources[t];
								if (!i) throw new Error("Media Source not found (Video.js)");
								i.trigger({
									type: "sourceopen",
									swfId: e
								})
							}, g = function() {
								return !!s.
								default.MediaSource && !! s.
								default.MediaSource.isTypeSupported && s.
								default.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
							}, y = function(t) {
								var e = h.
								default.mergeOptions(f, t);
								if (this.MediaSource = {
									open: m,
									supportsNativeMediaSources: g
								}, "html5" === e.mode || "auto" === e.mode && g()) return new c.
								default;
								if (h.
								default.getTech("Flash")) return new u.
								default;
								throw new Error("Cannot use Flash or Html5 to create a MediaSource for this video")
							};
							n.MediaSource = y, y.open = m, y.supportsNativeMediaSources = g;
							var v = {
								createObjectURL: function(t) {
									var e = void 0;
									return t instanceof c.
									default ? (e = s.
									default.URL.createObjectURL(t.nativeMediaSource_), t.url_ = e, e) : t instanceof u.
									default ? (e = "blob:vjs-media-source/" + p, p++, h.
									default.mediaSources[e] = t, e) : (e = s.
									default.URL.createObjectURL(t), t.url_ = e, e)
								}
							};
							n.URL = v, h.
							default.MediaSource = y, h.
							default.URL = v
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./flash-media-source": 68,
						"./html-media-source": 71,
						"global/window": 32
					}],
					75: [function(t, i, n) {
						(function(i) {
							"use strict";

							function r(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							function a(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}
							function s(t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
							}
							Object.defineProperty(n, "__esModule", {
								value: !0
							});
							var o = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
								u = function(t, e, i) {
									for (var n = !0; n;) {
										var r = t,
											a = e,
											s = i;
										n = !1, null === r && (r = Function.prototype);
										var o = Object.getOwnPropertyDescriptor(r, a);
										if (void 0 !== o) {
											if ("value" in o) return o.value;
											var u = o.get;
											if (void 0 === u) return;
											return u.call(s)
										}
										var l = Object.getPrototypeOf(r);
										if (null === l) return;
										t = l, e = a, i = s, n = !0, o = l = void 0
									}
								}, l = "undefined" != typeof window ? e : void 0 !== i ? i.videojs : null,
								c = r(l),
								d = t("./create-text-tracks-if-necessary"),
								h = r(d),
								p = t("./remove-cues-from-track"),
								f = r(p),
								m = t("./add-text-track-data"),
								g = t("webworkify"),
								y = r(g),
								v = t("./transmuxer-worker"),
								_ = r(v),
								b = t("./codec-utils"),
								T = function(t, e) {
									var i = t.addSourceBuffer(e),
										n = Object.create(null);
									n.updating = !1, n.realBuffer_ = i;
									for (var r in i)! function(t) {
										"function" == typeof i[t] ? n[t] = function() {
											return i[t].apply(i, arguments)
										} : void 0 === n[t] && Object.defineProperty(n, t, {
											get: function() {
												return i[t]
											},
											set: function(e) {
												return i[t] = e
											}
										})
									}(r);
									return n
								}, S = function(t, e, i) {
									if (!e || !t.length) return [];
									var n = Math.ceil(9e4 * (e.currentTime() - i + 3)),
										r = void 0;
									for (r = 0; r < t.length && !(t[r].pts > n); r++);
									return t.slice(r)
								};
							n.gopsSafeToAlignWith = S;
							var w = function(t, e, i) {
								if (!e.length) return t;
								if (i) return e.slice();
								var n = e[0].pts,
									r = 0;
								for (r; r < t.length && !(t[r].pts >= n); r++);
								return t.slice(0, r).concat(e)
							};
							n.updateGopBuffer = w;
							var k = function(t, e, i, n) {
								for (var r = Math.ceil(9e4 * (e - n)), a = Math.ceil(9e4 * (i - n)), s = t.slice(), o = t.length; o-- && !(t[o].pts <= a););
								if (-1 === o) return s;
								for (var u = o + 1; u-- && !(t[u].pts <= r););
								return u = Math.max(u, 0), s.splice(u, o - u + 1), s
							};
							n.removeGopBuffer = k;
							var E = function(t) {
								function e(t, i) {
									var n = this;
									a(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, c.
									default.EventTarget), this.timestampOffset_ = 0, this.pendingBuffers_ = [], this.bufferUpdating_ = !1, this.mediaSource_ = t, this.codecs_ = i, this.audioCodec_ = null, this.videoCodec_ = null, this.audioDisabled_ = !1, this.appendAudioInitSegment_ = !0, this.gopBuffer_ = [], this.timeMapping_ = 0, this.safeAppend_ = c.
									default.browser.IE_VERSION >= 11;
									var r = {
										remux: !1,
										alignGopsAtEnd: this.safeAppend_
									};
									this.codecs_.forEach(function(t) {
										(0, b.isAudioCodec)(t) ? n.audioCodec_ = t : (0, b.isVideoCodec)(t) && (n.videoCodec_ = t)
									}), this.transmuxer_ = (0, y.
									default)(_.
									default), this.transmuxer_.postMessage({
										action: "init",
										options: r
									}), this.transmuxer_.onmessage = function(t) {
										return "data" === t.data.action ? n.data_(t) : "done" === t.data.action ? n.done_(t) : "gopInfo" === t.data.action ? n.appendGopInfo_(t) : void 0
									}, Object.defineProperty(this, "timestampOffset", {
										get: function() {
											return this.timestampOffset_
										},
										set: function(t) {
											"number" == typeof t && t >= 0 && (this.timestampOffset_ = t, this.appendAudioInitSegment_ = !0, this.gopBuffer_.length = 0, this.timeMapping_ = 0, this.transmuxer_.postMessage({
												action: "setTimestampOffset",
												timestampOffset: t
											}))
										}
									}), Object.defineProperty(this, "appendWindowStart", {
										get: function() {
											return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart
										},
										set: function(t) {
											this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = t), this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = t)
										}
									}), Object.defineProperty(this, "updating", {
										get: function() {
											return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating)
										}
									}), Object.defineProperty(this, "buffered", {
										get: function() {
											var t = null,
												e = null,
												i = 0,
												n = [],
												r = [];
											if (!this.videoBuffer_ && !this.audioBuffer_) return c.
											default.createTimeRange();
											if (!this.videoBuffer_) return this.audioBuffer_.buffered;
											if (!this.audioBuffer_) return this.videoBuffer_.buffered;
											if (this.audioDisabled_) return this.videoBuffer_.buffered;
											if (0 === this.videoBuffer_.buffered.length && 0 === this.audioBuffer_.buffered.length) return c.
											default.createTimeRange();
											for (var a = this.videoBuffer_.buffered, s = this.audioBuffer_.buffered, o = a.length; o--;) n.push({
												time: a.start(o),
												type: "start"
											}), n.push({
												time: a.end(o),
												type: "end"
											});
											for (o = s.length; o--;) n.push({
												time: s.start(o),
												type: "start"
											}), n.push({
												time: s.end(o),
												type: "end"
											});
											for (n.sort(function(t, e) {
												return t.time - e.time
											}), o = 0; o < n.length; o++) "start" === n[o].type ? 2 === ++i && (t = n[o].time) : "end" === n[o].type && 1 === --i && (e = n[o].time), null !== t && null !== e && (r.push([t, e]), t = null, e = null);
											return c.
											default.createTimeRanges(r)
										}
									})
								}
								return s(e, t), o(e, [{
									key: "data_",
									value: function(t) {
										var e = t.data.segment;
										e.data = new Uint8Array(e.data, t.data.byteOffset, t.data.byteLength), e.initSegment = new Uint8Array(e.initSegment.data, e.initSegment.byteOffset, e.initSegment.byteLength), (0, h.
										default)(this, this.mediaSource_, e), this.pendingBuffers_.push(e)
									}
								}, {
									key: "done_",
									value: function(t) {
										if ("closed" === this.mediaSource_.readyState) return void(this.pendingBuffers_.length = 0);
										this.processPendingSegments_()
									}
								}, {
									key: "createRealSourceBuffers_",
									value: function() {
										var t = this,
											e = ["audio", "video"];
										e.forEach(function(i) {
											if (t[i + "Codec_"] && !t[i + "Buffer_"]) {
												var n = null;
												if (t.mediaSource_[i + "Buffer_"]) n = t.mediaSource_[i + "Buffer_"], n.updating = !1;
												else {
													var r = i + "Codec_",
														a = i + '/mp4;codecs="' + t[r] + '"';
													n = T(t.mediaSource_.nativeMediaSource_, a), t.mediaSource_[i + "Buffer_"] = n
												}
												t[i + "Buffer_"] = n, ["update", "updatestart", "updateend"].forEach(function(r) {
													n.addEventListener(r, function() {
														if ("audio" !== i || !t.audioDisabled_) {
															"updateend" === r && (t[i + "Buffer_"].updating = !1);
															return e.every(function(e) {
																return !("audio" !== e || !t.audioDisabled_) || (i === e || !t[e + "Buffer_"] || !t[e + "Buffer_"].updating)
															}) ? t.trigger(r) : void 0
														}
													})
												})
											}
										})
									}
								}, {
									key: "appendBuffer",
									value: function(t) {
										if (this.bufferUpdating_ = !0, this.audioBuffer_ && this.audioBuffer_.buffered.length) {
											var e = this.audioBuffer_.buffered;
											this.transmuxer_.postMessage({
												action: "setAudioAppendStart",
												appendStart: e.end(e.length - 1)
											})
										}
										this.videoBuffer_ && this.transmuxer_.postMessage({
											action: "alignGopsWith",
											gopsToAlignWith: S(this.gopBuffer_, this.mediaSource_.player_, this.timeMapping_)
										}), this.transmuxer_.postMessage({
											action: "push",
											data: t.buffer,
											byteOffset: t.byteOffset,
											byteLength: t.byteLength
										}, [t.buffer]), this.transmuxer_.postMessage({
											action: "flush"
										})
									}
								}, {
									key: "appendGopInfo_",
									value: function(t) {
										this.gopBuffer_ = w(this.gopBuffer_, t.data.gopInfo, this.safeAppend_)
									}
								}, {
									key: "remove",
									value: function(t, e) {
										if (this.videoBuffer_ && (this.videoBuffer_.updating = !0, this.videoBuffer_.remove(t, e), this.gopBuffer_ = k(this.gopBuffer_, t, e, this.timeMapping_)), !this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0, this.audioBuffer_.remove(t, e)), (0, f.
										default)(t, e, this.metadataTrack_), this.inbandTextTracks_) for (var i in this.inbandTextTracks_)(0, f.
										default)(t, e, this.inbandTextTracks_[i])
									}
								}, {
									key: "processPendingSegments_",
									value: function() {
										var t = {
											video: {
												segments: [],
												bytes: 0
											},
											audio: {
												segments: [],
												bytes: 0
											},
											captions: [],
											metadata: []
										};
										t = this.pendingBuffers_.reduce(function(t, e) {
											var i = e.type,
												n = e.data,
												r = e.initSegment;
											return t[i].segments.push(n), t[i].bytes += n.byteLength, t[i].initSegment = r, e.captions && (t.captions = t.captions.concat(e.captions)), e.info && (t[i].info = e.info), e.metadata && (t.metadata = t.metadata.concat(e.metadata)), t
										}, t), this.videoBuffer_ || this.audioBuffer_ || (0 === t.video.bytes && (this.videoCodec_ = null), 0 === t.audio.bytes && (this.audioCodec_ = null), this.createRealSourceBuffers_()), t.audio.info && this.mediaSource_.trigger({
											type: "audioinfo",
											info: t.audio.info
										}), t.video.info && this.mediaSource_.trigger({
											type: "videoinfo",
											info: t.video.info
										}), this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (t.audio.segments.unshift(t.audio.initSegment), t.audio.bytes += t.audio.initSegment.byteLength), this.appendAudioInitSegment_ = !1);
										var e = !1;
										this.videoBuffer_ && t.video.bytes ? (t.video.segments.unshift(t.video.initSegment), t.video.bytes += t.video.initSegment.byteLength, this.concatAndAppendSegments_(t.video, this.videoBuffer_), (0, m.addTextTrackData)(this, t.captions, t.metadata)) : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (e = !0), !this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(t.audio, this.audioBuffer_), this.pendingBuffers_.length = 0, e && this.trigger("updateend"), this.bufferUpdating_ = !1
									}
								}, {
									key: "concatAndAppendSegments_",
									value: function(t, e) {
										var i = 0,
											n = void 0;
										if (t.bytes) {
											n = new Uint8Array(t.bytes), t.segments.forEach(function(t) {
												n.set(t, i), i += t.byteLength
											});
											try {
												e.updating = !0, e.appendBuffer(n)
											} catch (t) {
												this.mediaSource_.player_ && this.mediaSource_.player_.error({
													code: -3,
													type: "APPEND_BUFFER_ERR",
													message: t.message,
													originalError: t
												})
											}
										}
									}
								}, {
									key: "abort",
									value: function() {
										this.videoBuffer_ && this.videoBuffer_.abort(), !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(), this.transmuxer_ && this.transmuxer_.postMessage({
											action: "reset"
										}), this.pendingBuffers_.length = 0, this.bufferUpdating_ = !1
									}
								}]), e
							}(c.
							default.EventTarget);
							n.
							default = E
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./add-text-track-data": 64,
						"./codec-utils": 65,
						"./create-text-tracks-if-necessary": 66,
						"./remove-cues-from-track": 72,
						"./transmuxer-worker": 73,
						webworkify: 76
					}],
					76: [function(t, e, i) {
						var n = arguments[3],
							r = arguments[4],
							a = arguments[5],
							s = JSON.stringify;
						e.exports = function(t) {
							for (var e, i = Object.keys(a), o = 0, u = i.length; o < u; o++) {
								var l = i[o];
								if (a[l].exports === t) {
									e = l;
									break
								}
							}
							if (!e) {
								e = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
								for (var c = {}, o = 0, u = i.length; o < u; o++) {
									var l = i[o];
									c[l] = l
								}
								r[e] = [Function(["require", "module", "exports"], "(" + t + ")(self)"), c]
							}
							var d = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),
								h = {};
							h[e] = e, r[d] = [Function(["require"], "require(" + s(e) + ")(self)"), h];
							var p = "(" + n + ")({" + Object.keys(r).map(function(t) {
								return s(t) + ":[" + r[t][0] + "," + s(r[t][1]) + "]"
							}).join(",") + "},{},[" + s(d) + "])",
								f = window.URL || window.webkitURL || window.mozURL || window.msURL;
							return new Worker(f.createObjectURL(new Blob([p], {
								type: "text/javascript"
							})))
						}
					}, {}],
					77: [function(t, i, n) {
						(function(n) {
							"use strict";

							function r(t) {
								return t && t.__esModule ? t : {
									default: t
								}
							}
							function a(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}
							function s(t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
							}
							var o = function() {
								function t(t, e) {
									for (var i = 0; i < e.length; i++) {
										var n = e[i];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, i, n) {
									return i && t(e.prototype, i), n && t(e, n), e
								}
							}(),
								u = function(t, e, i) {
									for (var n = !0; n;) {
										var r = t,
											a = e,
											s = i;
										n = !1, null === r && (r = Function.prototype);
										var o = Object.getOwnPropertyDescriptor(r, a);
										if (void 0 !== o) {
											if ("value" in o) return o.value;
											var u = o.get;
											if (void 0 === u) return;
											return u.call(s)
										}
										var l = Object.getPrototypeOf(r);
										if (null === l) return;
										t = l, e = a, i = s, n = !0, o = l = void 0
									}
								}, l = t("global/document"),
								c = r(l),
								d = t("./playlist-loader"),
								h = r(d),
								p = t("./playlist"),
								f = r(p),
								m = t("./xhr"),
								g = r(m),
								y = t("aes-decrypter"),
								v = t("./bin-utils"),
								_ = r(v),
								b = t("videojs-contrib-media-sources"),
								T = t("m3u8-parser"),
								S = r(T),
								w = "undefined" != typeof window ? e : void 0 !== n ? n.videojs : null,
								k = r(w),
								E = t("./master-playlist-controller"),
								C = t("./config"),
								O = r(C),
								A = t("./rendition-mixin"),
								P = r(A),
								x = t("global/window"),
								I = r(x),
								L = t("./playback-watcher"),
								j = r(L),
								M = t("./reload-source-on-error"),
								D = r(M),
								R = t("./playlist-selectors.js"),
								B = {
									PlaylistLoader: h.
									default,
									Playlist: f.
									default,
									Decrypter: y.Decrypter,
									AsyncStream: y.AsyncStream,
									decrypt: y.decrypt,
									utils: _.
									default,
									STANDARD_PLAYLIST_SELECTOR: R.lastBandwidthSelector,
									INITIAL_PLAYLIST_SELECTOR: R.lowestBitrateCompatibleVariantSelector,
									comparePlaylistBandwidth: R.comparePlaylistBandwidth,
									comparePlaylistResolution: R.comparePlaylistResolution,
									xhr: (0, g.
									default)()
								};
							["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach(function(t) {
								Object.defineProperty(B, t, {
									get: function() {
										return k.
										default.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), O.
										default [t]
									},
									set: function(e) {
										if (k.
										default.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), "number" != typeof e || e < 0) return void k.
										default.log.warn("value of Hls." + t + " must be greater than or equal to 0");
										O.
										default [t] = e
									}
								})
							});
							var N = function(t, e) {
								for (var i = e.media(), n = -1, r = 0; r < t.length; r++) if (t[r].id === i.uri) {
									n = r;
									break
								}
								t.selectedIndex_ = n, t.trigger({
									selectedIndex: n,
									type: "change"
								})
							}, U = function(t, e) {
								e.representations().forEach(function(e) {
									t.addQualityLevel(e)
								}), N(t, e.playlists)
							};
							B.canPlaySource = function() {
								return k.
								default.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
							}, B.supportsNativeHls = function() {
								var t = c.
								default.createElement("video");
								return !!k.
								default.getTech("Html5").isSupported() && ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function(e) {
									return /maybe|probably/i.test(t.canPlayType(e))
								})
							}(), B.isSupported = function() {
								return k.
								default.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
							};
							var F = k.
							default.getComponent("Component"), H = function(t) {
								function e(t, i, n) {
									var r = this;
									if (a(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, i, n.hls), i.options_ && i.options_.playerId) {
										var s = (0, k.
										default)(i.options_.playerId);
										s.hasOwnProperty("hls") || Object.defineProperty(s, "hls", {
											get: function() {
												return k.
												default.log.warn("player.hls is deprecated. Use player.tech_.hls instead."), i.trigger({
													type: "usage",
													name: "hls-player-access"
												}), r
											}
										})
									}
									if (this.tech_ = i, this.source_ = t, this.stats = {}, this.ignoreNextSeekingEvent_ = !1, this.setOptions_(), this.options_.overrideNative && (i.featuresNativeVideoTracks || i.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
									this.on(c.
									default, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], function(t) {
										var e = c.
										default.fullscreenElement || c.
										default.webkitFullscreenElement || c.
										default.mozFullScreenElement || c.
										default.msFullscreenElement;
										e && e.contains(r.tech_.el()) && r.masterPlaylistController_.fastQualityChange_()
									}), this.on(this.tech_, "seeking", function() {
										if (this.ignoreNextSeekingEvent_) return void(this.ignoreNextSeekingEvent_ = !1);
										this.setCurrentTime(this.tech_.currentTime())
									}), this.on(this.tech_, "error", function() {
										this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
									}), this.on(this.tech_, "play", this.play)
								}
								return s(e, t), o(e, [{
									key: "setOptions_",
									value: function() {
										var t = this;
										this.options_.withCredentials = this.options_.withCredentials || !1, "number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300), "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = 4194304), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && 4194304 === this.options_.bandwidth, ["withCredentials", "bandwidth"].forEach(function(e) {
											void 0 !== t.source_[e] && (t.options_[e] = t.source_[e])
										}), this.bandwidth = this.options_.bandwidth
									}
								}, {
									key: "src",
									value: function(t) {
										var e = this;
										t && (this.setOptions_(), this.options_.url = this.source_.src, this.options_.tech = this.tech_, this.options_.externHls = B, this.masterPlaylistController_ = new E.MasterPlaylistController(this.options_), this.playbackWatcher_ = new j.
										default (k.
										default.mergeOptions(this.options_, {
											seekable: function() {
												return e.seekable()
											}
										})), this.masterPlaylistController_.on("error", function() {
											k.
											default.players[e.tech_.options_.playerId].error(e.masterPlaylistController_.error)
										}), this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : B.STANDARD_PLAYLIST_SELECTOR.bind(this), this.masterPlaylistController_.selectInitialPlaylist = B.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, Object.defineProperties(this, {
											selectPlaylist: {
												get: function() {
													return this.masterPlaylistController_.selectPlaylist
												},
												set: function(t) {
													this.masterPlaylistController_.selectPlaylist = t.bind(this)
												}
											},
											throughput: {
												get: function() {
													return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
												},
												set: function(t) {
													this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = t, this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
												}
											},
											bandwidth: {
												get: function() {
													return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
												},
												set: function(t) {
													this.masterPlaylistController_.mainSegmentLoader_.bandwidth = t, this.masterPlaylistController_.mainSegmentLoader_.throughput = {
														rate: 0,
														count: 0
													}
												}
											},
											systemBandwidth: {
												get: function() {
													var t = 1 / (this.bandwidth || 1),
														e = void 0;
													return e = this.throughput > 0 ? 1 / this.throughput : 0, Math.floor(1 / (t + e))
												},
												set: function() {
													k.
													default.log.error('The "systemBandwidth" property is read-only')
												}
											}
										}), Object.defineProperties(this.stats, {
											bandwidth: {
												get: function() {
													return e.bandwidth || 0
												},
												enumerable: !0
											},
											mediaRequests: {
												get: function() {
													return e.masterPlaylistController_.mediaRequests_() || 0
												},
												enumerable: !0
											},
											mediaRequestsAborted: {
												get: function() {
													return e.masterPlaylistController_.mediaRequestsAborted_() || 0
												},
												enumerable: !0
											},
											mediaRequestsTimedout: {
												get: function() {
													return e.masterPlaylistController_.mediaRequestsTimedout_() || 0
												},
												enumerable: !0
											},
											mediaRequestsErrored: {
												get: function() {
													return e.masterPlaylistController_.mediaRequestsErrored_() || 0
												},
												enumerable: !0
											},
											mediaTransferDuration: {
												get: function() {
													return e.masterPlaylistController_.mediaTransferDuration_() || 0
												},
												enumerable: !0
											},
											mediaBytesTransferred: {
												get: function() {
													return e.masterPlaylistController_.mediaBytesTransferred_() || 0
												},
												enumerable: !0
											},
											mediaSecondsLoaded: {
												get: function() {
													return e.masterPlaylistController_.mediaSecondsLoaded_() || 0
												},
												enumerable: !0
											}
										}), this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)), this.masterPlaylistController_.on("selectedinitialmedia", function() {
											(0, P.
											default)(e)
										}), this.on(this.masterPlaylistController_, "progress", function() {
											this.tech_.trigger("progress")
										}), this.on(this.masterPlaylistController_, "firstplay", function() {
											this.ignoreNextSeekingEvent_ = !0
										}), this.tech_.ready(function() {
											return e.setupQualityLevels_()
										}), this.tech_.el() && this.tech_.src(k.
										default.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
									}
								}, {
									key: "setupQualityLevels_",
									value: function() {
										var t = this,
											e = k.
										default.players[this.tech_.options_.playerId];
										e && e.qualityLevels && (this.qualityLevels_ = e.qualityLevels(), this.masterPlaylistController_.on("selectedinitialmedia", function() {
											U(t.qualityLevels_, t)
										}), this.playlists.on("mediachange", function() {
											N(t.qualityLevels_, t.playlists)
										}))
									}
								}, {
									key: "play",
									value: function() {
										this.masterPlaylistController_.play()
									}
								}, {
									key: "setCurrentTime",
									value: function(t) {
										this.masterPlaylistController_.setCurrentTime(t)
									}
								}, {
									key: "duration",
									value: function() {
										return this.masterPlaylistController_.duration()
									}
								}, {
									key: "seekable",
									value: function() {
										return this.masterPlaylistController_.seekable()
									}
								}, {
									key: "dispose",
									value: function() {
										this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.masterPlaylistController_ && this.masterPlaylistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), u(Object.getPrototypeOf(e.prototype), "dispose", this).call(this)
									}
								}]), e
							}(F), V = function t(e) {
								return {
									canHandleSource: function(i) {
										var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
											r = k.
										default.mergeOptions(k.
										default.options, n);
										return (!r.hls || !r.hls.mode || r.hls.mode === e) && t.canPlayType(i.type, r)
									},
									handleSource: function(t, i) {
										var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
											r = k.
										default.mergeOptions(k.
										default.options, n, {
											hls: {
												mode: e
											}
										});
										return "flash" === e && i.setTimeout(function() {
											i.trigger("loadstart")
										}, 1), i.hls = new H(t, i, r), i.hls.xhr = (0, g.
										default)(), i.hls.src(t.src), i.hls
									},
									canPlayType: function(e) {
										var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
											n = k.
										default.mergeOptions(k.
										default.options, i);
										return t.canPlayType(e, n) ? "maybe" : ""
									}
								}
							};
							V.canPlayType = function(t, e) {
								if (k.
								default.browser.IE_VERSION && k.
								default.browser.IE_VERSION <= 10) return !1;
								var i = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i;
								return !(!e.hls.overrideNative && B.supportsNativeHls) && i.test(t)
							}, void 0 !== k.
							default.MediaSource && void 0 !== k.
							default.URL || (k.
							default.MediaSource = b.MediaSource, k.
							default.URL = b.URL);
							var q = k.
							default.getTech("Flash");
							b.MediaSource.supportsNativeMediaSources() && k.
							default.getTech("Html5").registerSourceHandler(V("html5"), 0), I.
							default.Uint8Array && q && q.registerSourceHandler(V("flash")), k.
							default.HlsHandler = H, k.
							default.HlsSourceHandler = V, k.
							default.Hls = B, k.
							default.use || k.
							default.registerComponent("Hls", B), k.
							default.m3u8 = S.
							default, k.
							default.options.hls = k.
							default.options.hls || {}, k.
							default.registerPlugin ? k.
							default.registerPlugin("reloadSourceOnError", D.
							default) : k.
							default.plugin("reloadSourceOnError", D.
							default), i.exports = {
								Hls: B,
								HlsHandler: H,
								HlsSourceHandler: V
							}
						}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./bin-utils": 2,
						"./config": 3,
						"./master-playlist-controller": 5,
						"./playback-watcher": 8,
						"./playlist": 11,
						"./playlist-loader": 9,
						"./playlist-selectors.js": 10,
						"./reload-source-on-error": 13,
						"./rendition-mixin": 14,
						"./xhr": 21,
						"aes-decrypter": 25,
						"global/document": 31,
						"global/window": 32,
						"m3u8-parser": 33,
						"videojs-contrib-media-sources": 74
					}]
				}, {}, [77])(77)
			})
		}).call(e, i(0))
	}, function(t, e, i) {
		"use strict";
		var n = i(0),
			r = function(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(n),
			a = r.
		default.getComponent("Player").prototype, s = r.
		default.getTech("flash").nativeSourceHandler, o = r.
		default.getTech("flash").prototype;
		a.duration = function(t) {
			if (void 0 === t) return this.cache_.duration || 0;
			t = parseFloat(t) || 0, t <= 0 && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange"))
		}, o.setFlvDecryptInfo = function(t) {
			this.el_.vjs_setProperty("flvDecryptInfo", t)
		}, s.handleSource = function(t, e, i) {
			e.setSrc(t.src), s.handleDecrypt(t, e)
		}, s.handleDecrypt = function(t, e) {
			if ("video/x-flv" === t.type && t.decryptInfo) {
				var i, n = t.decryptInfo,
					r = window.__vcloud_addr_get_vod_key || "//vcloud.163.com/app/vod/encrypt/getKey";
				if (!window.XMLHttpRequest) return;
				i = new XMLHttpRequest, this._xmlHttpForTransferKey && this._xmlHttpForTransferKey.abort(), this._xmlHttpForTransferKey = i, i.open("POST", r, !0), i.setRequestHeader("Content-Type", "application/json;charset=utf-8"), i.setRequestHeader("Accid", n.accid), i.setRequestHeader("Token", n.token), i.setRequestHeader("AppKey", n.appKey), i.timeout = 5e3, i.ontimeout = i.onerror = function(t) {
					"timeout" !== t.type && "error" !== t.type || e.error(10)
				}, i.onreadystatechange = function() {
					if (this.readyState === XMLHttpRequest.DONE) {
						if (200 === this.status || 304 === this.status) try {
							var t = JSON.parse(this.responseText);
							if (t.ret && t.ret.transferKey) return n.transferKey = t.ret.transferKey, e.setFlvDecryptInfo(n)
						} catch (t) {}
						e.error({
							code: 10,
							message: "flv传输秘钥获取失败"
						})
					}
				}, i.send(JSON.stringify({
					transferToken: n.transferToken
				}))
			}
		}, s.dispose = function() {
			this._xmlHttpForTransferKey && (this._xmlHttpForTransferKey.abort(), this._xmlHttpForTransferKey = null)
		}
	}, function(t, e) {}])
});