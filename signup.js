"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// signup.jsx — shared email signup component
// Posts to window.SIGNUP_WEBHOOK_URL (Google Apps Script web app)
// Falls back to localStorage if no URL is configured.

function EmailSignup(_ref) {
  var theme = _ref.theme,
    _ref$source = _ref.source,
    source = _ref$source === void 0 ? 'critter-crimes' : _ref$source;
  var _React$useState = React.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    email = _React$useState2[0],
    setEmail = _React$useState2[1];
  var _React$useState3 = React.useState('idle'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    status = _React$useState4[0],
    setStatus = _React$useState4[1]; // idle | submitting | success | error
  var _React$useState5 = React.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    errMsg = _React$useState6[0],
    setErrMsg = _React$useState6[1];
  function submit(_x) {
    return _submit.apply(this, arguments);
  } // ---- Success state ----
  function _submit() {
    _submit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var value, url, payload, list, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e.preventDefault();
            value = email.trim();
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
              _context.n = 1;
              break;
            }
            setErrMsg('Please enter a valid email.');
            setStatus('error');
            return _context.a(2);
          case 1:
            setStatus('submitting');
            setErrMsg('');
            _context.p = 2;
            url = window.SIGNUP_WEBHOOK_URL;
            payload = {
              email: value,
              source: source,
              timestamp: new Date().toISOString()
            };
            if (!url) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return fetch(url, {
              method: 'POST',
              mode: 'no-cors',
              headers: {
                'Content-Type': 'text/plain;charset=utf-8'
              },
              body: JSON.stringify(payload)
            });
          case 3:
            _context.n = 5;
            break;
          case 4:
            // No backend — stash locally so the user can see it works
            list = JSON.parse(localStorage.getItem('cc_signups') || '[]');
            list.push(payload);
            localStorage.setItem('cc_signups', JSON.stringify(list));
            console.info('[Critter Crimes] Signup saved locally:', payload, '— set window.SIGNUP_WEBHOOK_URL in index.html to send to a Google Sheet.');
          case 5:
            setStatus('success');
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            console.error(_t);
            setErrMsg('Something went wrong. Try again?');
            setStatus('error');
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[2, 6]]);
    }));
    return _submit.apply(this, arguments);
  }
  if (status === 'success') {
    return /*#__PURE__*/React.createElement("div", {
      style: theme.successWrap
    }, /*#__PURE__*/React.createElement("div", {
      style: theme.successTitle
    }, theme.successTitleText || "You're on the list."), /*#__PURE__*/React.createElement("div", {
      style: theme.successBody
    }, theme.successBodyText || "We'll holler before the Kickstarter drops. Don't tell the Bark Ranger."));
  }

  // ---- Form ----
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: theme.formWrap,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    style: theme.fieldRow
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: theme.placeholder || 'your.email@hideout.gov',
    value: email,
    onChange: function onChange(e) {
      setEmail(e.target.value);
      if (status === 'error') setStatus('idle');
    },
    disabled: status === 'submitting',
    style: theme.input,
    "aria-label": "Email address"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: status === 'submitting' || !email,
    style: theme.button
  }, status === 'submitting' ? theme.submittingLabel || 'Sending…' : theme.buttonLabel || 'Sign up for updates →')), status === 'error' && errMsg && /*#__PURE__*/React.createElement("div", {
    style: theme.error
  }, errMsg), theme.disclaimer && /*#__PURE__*/React.createElement("div", {
    style: theme.disclaimer
  }, theme.disclaimerText));
}
window.EmailSignup = EmailSignup;