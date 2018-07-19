window.brainblocks = (function(e) {
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  var t = {};
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (n.p = ''),
    n((n.s = './src/index.js'))
  );
})({
  './node_modules/beaver-logger/client/builders.js': function(e, n, t) {
    'use strict';
    function r(e) {
      a.push(e);
    }
    function o(e) {
      s.push(e);
    }
    function i(e) {
      u.push(e);
    }
    function c(e) {
      d.push(e);
    }
    t.d(n, 'g', function() {
      return a;
    }),
      t.d(n, 'f', function() {
        return s;
      }),
      t.d(n, 'h', function() {
        return u;
      }),
      t.d(n, 'e', function() {
        return d;
      }),
      (n.c = r),
      (n.b = o),
      (n.d = i),
      (n.a = c);
    var a = [],
      s = [],
      u = [],
      d = [];
  },
  './node_modules/beaver-logger/client/config.js': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return r;
    }),
      t.d(n, 'b', function() {
        return o;
      });
    var r = {
        uri: '',
        prefix: '',
        initial_state_name: 'init',
        flushInterval: 6e5,
        debounceInterval: 10,
        sizeLimit: 300,
        silent: !1,
        heartbeat: !0,
        heartbeatConsoleLog: !0,
        heartbeatInterval: 5e3,
        heartbeatTooBusy: !1,
        heartbeatTooBusyThreshold: 1e4,
        logLevel: 'warn',
        autoLog: ['warn', 'error'],
        logUnload: !0,
        logPerformance: !0
      },
      o = ['error', 'warn', 'info', 'debug'];
  },
  './node_modules/beaver-logger/client/index.js': function(e, n, t) {
    'use strict';
    var r = t('./node_modules/beaver-logger/client/interface.js');
    t.d(n, 'a', function() {
      return r.config;
    }),
      t.d(n, 'b', function() {
        return r.error;
      }),
      t.d(n, 'c', function() {
        return r.flush;
      }),
      t.d(n, 'd', function() {
        return r.info;
      }),
      t.d(n, 'e', function() {
        return r.logLevels;
      }),
      t.d(n, 'f', function() {
        return r.warn;
      });
  },
  './node_modules/beaver-logger/client/init.js': function(e, n, t) {
    'use strict';
    function r(e) {
      Object(i.b)(o.a, e || {}),
        s ||
          ((s = !0),
          o.a.logPerformance && Object(c.b)(),
          o.a.heartbeat && Object(c.a)(),
          o.a.logUnload &&
            (window.addEventListener('beforeunload', function() {
              Object(a.g)('window_beforeunload'), Object(a.f)({ fireAndForget: !0 });
            }),
            window.addEventListener('unload', function() {
              Object(a.g)('window_unload'), Object(a.f)({ fireAndForget: !0 });
            })),
          o.a.flushInterval && setInterval(a.d, o.a.flushInterval),
          window.beaverLogQueue &&
            (window.beaverLogQueue.forEach(function(e) {
              Object(a.h)(e.level, e.event, e);
            }),
            delete window.beaverLogQueue));
    }
    n.a = r;
    var o = t('./node_modules/beaver-logger/client/config.js'),
      i = t('./node_modules/beaver-logger/client/util.js'),
      c = t('./node_modules/beaver-logger/client/performance.js'),
      a = t('./node_modules/beaver-logger/client/logger.js'),
      s = !1;
  },
  './node_modules/beaver-logger/client/interface.js': function(e, n, t) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var r = t('./node_modules/beaver-logger/client/logger.js');
    t.d(n, 'track', function() {
      return r.l;
    }),
      t.d(n, 'buffer', function() {
        return r.a;
      }),
      t.d(n, 'tracking', function() {
        return r.m;
      }),
      t.d(n, 'getTransport', function() {
        return r.e;
      }),
      t.d(n, 'setTransport', function() {
        return r.k;
      }),
      t.d(n, 'print', function() {
        return r.j;
      }),
      t.d(n, 'immediateFlush', function() {
        return r.f;
      }),
      t.d(n, 'flush', function() {
        return r.d;
      }),
      t.d(n, 'log', function() {
        return r.h;
      }),
      t.d(n, 'prefix', function() {
        return r.i;
      }),
      t.d(n, 'debug', function() {
        return r.b;
      }),
      t.d(n, 'info', function() {
        return r.g;
      }),
      t.d(n, 'warn', function() {
        return r.n;
      }),
      t.d(n, 'error', function() {
        return r.c;
      });
    var o = t('./node_modules/beaver-logger/client/init.js');
    t.d(n, 'init', function() {
      return o.a;
    });
    var i = t('./node_modules/beaver-logger/client/transitions.js');
    t.d(n, 'startTransition', function() {
      return i.b;
    }),
      t.d(n, 'endTransition', function() {
        return i.a;
      }),
      t.d(n, 'transition', function() {
        return i.c;
      });
    var c = t('./node_modules/beaver-logger/client/builders.js');
    t.d(n, 'payloadBuilders', function() {
      return c.g;
    }),
      t.d(n, 'metaBuilders', function() {
        return c.f;
      }),
      t.d(n, 'trackingBuilders', function() {
        return c.h;
      }),
      t.d(n, 'headerBuilders', function() {
        return c.e;
      }),
      t.d(n, 'addPayloadBuilder', function() {
        return c.c;
      }),
      t.d(n, 'addMetaBuilder', function() {
        return c.b;
      }),
      t.d(n, 'addTrackingBuilder', function() {
        return c.d;
      }),
      t.d(n, 'addHeaderBuilder', function() {
        return c.a;
      });
    var a = t('./node_modules/beaver-logger/client/config.js');
    t.d(n, 'config', function() {
      return a.a;
    }),
      t.d(n, 'logLevels', function() {
        return a.b;
      });
  },
  './node_modules/beaver-logger/client/logger.js': function(e, n, t) {
    'use strict';
    function r() {
      return j;
    }
    function o(e) {
      j = e;
    }
    function i(e, n, t) {
      if (!E)
        return setTimeout(function() {
          return i(e, n, t);
        }, 1);
      if (window.console && window.console.log) {
        var r = window.LOG_LEVEL || y.a.logLevel;
        if (!(y.b.indexOf(e) > y.b.indexOf(r))) {
          t = t || {};
          var o = [n];
          Object(h.c)() && (t = JSON.stringify(t)), o.push(t), (t.error || t.warning) && o.push('\n\n', t.error || t.warning);
          try {
            window.console[e] && window.console[e].apply
              ? window.console[e].apply(window.console, o)
              : window.console.log && window.console.log.apply && window.console.log.apply(window.console, o);
          } catch (e) {}
        }
      }
    }
    function c() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = e.fireAndForget,
        t = void 0 !== n && n;
      if (y.a.uri) {
        var r = w.length,
          o = g.length;
        if (r || o) {
          for (var i = {}, c = b.f, a = Array.isArray(c), s = 0, c = a ? c : c[Symbol.iterator](); ; ) {
            var u;
            if (a) {
              if (s >= c.length) break;
              u = c[s++];
            } else {
              if (((s = c.next()), s.done)) break;
              u = s.value;
            }
            var d = u;
            try {
              Object(h.b)(i, d(i), !1);
            } catch (e) {
              console.error('Error in custom meta builder:', e.stack || e.toString());
            }
          }
          for (var l = {}, f = b.e, p = Array.isArray(f), m = 0, f = p ? f : f[Symbol.iterator](); ; ) {
            var v;
            if (p) {
              if (m >= f.length) break;
              v = f[m++];
            } else {
              if (((m = f.next()), m.done)) break;
              v = m.value;
            }
            var E = v;
            try {
              Object(h.b)(l, E(l), !1);
            } catch (e) {
              console.error('Error in custom header builder:', e.stack || e.toString());
            }
          }
          var O = w,
            _ = j(l, { events: O, meta: i, tracking: g }, { fireAndForget: t });
          return (w = []), (g = []), _;
        }
      }
    }
    function a(e, n, t) {
      w.push({ level: e, event: n, payload: t }), y.a.autoLog.indexOf(e) > -1 && O();
    }
    function s(e, n, t) {
      y.a.prefix && (n = y.a.prefix + '_' + n),
        (t = t || {}),
        'string' == typeof t ? (t = { message: t }) : t instanceof Error && (t = { error: t.stack || t.toString() });
      try {
        JSON.stringify(t);
      } catch (e) {
        return;
      }
      t.timestamp = Date.now();
      for (var r = b.g, o = Array.isArray(r), c = 0, r = o ? r : r[Symbol.iterator](); ; ) {
        var s;
        if (o) {
          if (c >= r.length) break;
          s = r[c++];
        } else {
          if (((c = r.next()), c.done)) break;
          s = c.value;
        }
        var u = s;
        try {
          Object(h.b)(t, u(t), !1);
        } catch (e) {
          console.error('Error in custom payload builder:', e.stack || e.toString());
        }
      }
      y.a.silent || i(e, n, t), w.length === y.a.sizeLimit ? a('info', 'logger_max_buffer_length') : w.length < y.a.sizeLimit && a(e, n, t);
    }
    function u(e) {
      return {
        debug: function(n, t) {
          return s('debug', e + '_' + n, t);
        },
        info: function(n, t) {
          return s('info', e + '_' + n, t);
        },
        warn: function(n, t) {
          return s('warn', e + '_' + n, t);
        },
        error: function(n, t) {
          return s('error', e + '_' + n, t);
        },
        track: function(e) {
          return m(e);
        },
        flush: function() {
          return O();
        }
      };
    }
    function d(e, n) {
      return s('debug', e, n);
    }
    function l(e, n) {
      return s('info', e, n);
    }
    function f(e, n) {
      return s('warn', e, n);
    }
    function p(e, n) {
      return s('error', e, n);
    }
    function m(e) {
      if (e) {
        try {
          JSON.stringify(e);
        } catch (e) {
          return;
        }
        for (var n = b.h, t = Array.isArray(n), r = 0, n = t ? n : n[Symbol.iterator](); ; ) {
          var o;
          if (t) {
            if (r >= n.length) break;
            o = n[r++];
          } else {
            if (((r = n.next()), r.done)) break;
            o = r.value;
          }
          var c = o;
          try {
            Object(h.b)(e, c(e), !1);
          } catch (e) {
            console.error('Error in custom tracking builder:', e.stack || e.toString());
          }
        }
        i('debug', 'tracking', e), g.push(e);
      }
    }
    t.d(n, 'l', function() {
      return m;
    }),
      t.d(n, 'a', function() {
        return w;
      }),
      t.d(n, 'm', function() {
        return g;
      }),
      (n.e = r),
      (n.k = o),
      (n.j = i),
      (n.f = c),
      t.d(n, 'd', function() {
        return O;
      }),
      (n.h = s),
      (n.i = u),
      (n.b = d),
      (n.g = l),
      (n.n = f),
      (n.c = p);
    var h = t('./node_modules/beaver-logger/client/util.js'),
      b = t('./node_modules/beaver-logger/client/builders.js'),
      y = t('./node_modules/beaver-logger/client/config.js'),
      v =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            },
      w = [],
      g = [];
    Function.prototype.bind &&
      window.console &&
      'object' === v(console.log) &&
      ['log', 'info', 'warn', 'error'].forEach(function(e) {
        console[e] = this.bind(console[e], console);
      }, Function.prototype.call);
    var j = function(e, n, t) {
        return Object(h.a)('post', y.a.uri, e, n, t);
      },
      E = !1;
    setTimeout(function() {
      E = !0;
    }, 1);
    var O = Object(h.d)(c, y.a.debounceInterval);
  },
  './node_modules/beaver-logger/client/performance.js': function(e, n, t) {
    'use strict';
    function r() {
      return f ? performance.now() : Date.now();
    }
    function o(e) {
      return (
        (e = void 0 !== e ? e : r()),
        {
          startTime: e,
          elapsed: function() {
            return parseInt(r() - e, 10);
          },
          reset: function() {
            e = r();
          }
        }
      );
    }
    function i() {
      if (f) {
        var e = window.performance.timing;
        return parseInt(e.connectEnd - e.navigationStart, 10);
      }
    }
    function c() {
      var e = o(),
        n = 0;
      Object(l.e)(function() {
        if (!(s.a.heartbeatMaxThreshold && n > s.a.heartbeatMaxThreshold)) {
          n += 1;
          var t = e.elapsed(),
            r = t - s.a.heartbeatInterval,
            o = { count: n, elapsed: t };
          s.a.heartbeatTooBusy &&
            ((o.lag = r), r >= s.a.heartbeatTooBusyThreshold && Object(u.g)('toobusy', o, { noConsole: !s.a.heartbeatConsoleLog })),
            Object(u.g)('heartbeat', o, { noConsole: !s.a.heartbeatConsoleLog });
        }
      }, s.a.heartbeatInterval);
    }
    function a() {
      if (!f) return Object(u.g)('no_performance_data');
      Object(d.c)(function() {
        var e = {};
        return (e.client_elapsed = p.elapsed()), f && (e.req_elapsed = m.elapsed()), e;
      }),
        l.g.then(function() {
          var e = [
              'connectEnd',
              'connectStart',
              'domComplete',
              'domContentLoadedEventEnd',
              'domContentLoadedEventStart',
              'domInteractive',
              'domLoading',
              'domainLookupEnd',
              'domainLookupStart',
              'fetchStart',
              'loadEventEnd',
              'loadEventStart',
              'navigationStart',
              'redirectEnd',
              'redirectStart',
              'requestStart',
              'responseEnd',
              'responseStart',
              'secureConnectionStart',
              'unloadEventEnd',
              'unloadEventStart'
            ],
            n = {};
          e.forEach(function(e) {
            n[e] = parseInt(window.performance.timing[e], 10) || 0;
          });
          var t = n.connectEnd - n.navigationStart;
          n.connectEnd &&
            Object.keys(n).forEach(function(e) {
              var r = n[e];
              r &&
                Object(u.g)('timing_' + e, {
                  client_elapsed: parseInt(r - n.connectEnd - (p.startTime - t), 10),
                  req_elapsed: parseInt(r - n.connectEnd, 10)
                });
            }),
            Object(u.g)('timing', n),
            Object(u.g)('memory', window.performance.memory),
            Object(u.g)('navigation', window.performance.navigation),
            window.performance.getEntries &&
              window.performance.getEntries().forEach(function(e) {
                ['link', 'script', 'img', 'css'].indexOf(e.initiatorType) > -1 && Object(u.g)(e.initiatorType, e);
              });
        });
    }
    (n.c = r), (n.d = i), (n.a = c), (n.b = a);
    var s = t('./node_modules/beaver-logger/client/config.js'),
      u = t('./node_modules/beaver-logger/client/logger.js'),
      d = t('./node_modules/beaver-logger/client/builders.js'),
      l = t('./node_modules/beaver-logger/client/util.js'),
      f =
        window &&
        window.performance &&
        performance.now &&
        performance.timing &&
        performance.timing.connectEnd &&
        performance.timing.navigationStart &&
        Math.abs(performance.now() - Date.now()) > 1e3 &&
        performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0,
      p = o(),
      m = o(i());
  },
  './node_modules/beaver-logger/client/transitions.js': function(e, n, t) {
    'use strict';
    function r() {
      m = Object(c.c)();
    }
    function o(e) {
      m = m || Object(c.d)();
      var n = Object(c.c)(),
        t = void 0;
      void 0 !== m && (t = parseInt(n - m, 0));
      var r = 'transition_' + p + '_to_' + e;
      Object(a.g)(r, { duration: t }),
        Object(a.l)({ transition: r, transition_time: t }),
        Object(a.f)(),
        (m = n),
        (p = e),
        (f = Object(u.f)());
    }
    function i(e) {
      r(), o(e);
    }
    (n.b = r), (n.a = o), (n.c = i);
    var c = t('./node_modules/beaver-logger/client/performance.js'),
      a = t('./node_modules/beaver-logger/client/logger.js'),
      s = t('./node_modules/beaver-logger/client/builders.js'),
      u = t('./node_modules/beaver-logger/client/util.js'),
      d = t('./node_modules/beaver-logger/client/config.js'),
      l = Object(u.f)(),
      f = Object(u.f)(),
      p = d.a.initial_state_name,
      m = void 0;
    Object(s.c)(function() {
      return { windowID: l, pageID: f };
    }),
      Object(s.b)(function() {
        return { state: 'ui_' + p };
      });
  },
  './node_modules/beaver-logger/client/util.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      (e = e || {}), (n = n || {});
      for (var r in n) n.hasOwnProperty(r) && ((!t && e.hasOwnProperty(r)) || (e[r] = n[r]));
      return e;
    }
    function o(e) {
      return window.location.protocol === e.split('/')[0];
    }
    function i(e) {
      var n = e.match(/https?:\/\/[^\/]+/);
      return !n || n[0] === window.location.protocol + '//' + window.location.host;
    }
    function c(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        a = c.fireAndForget,
        s = void 0 !== a && a;
      return new l.a(function(c) {
        var a = window.XMLHttpRequest || window.ActiveXObject;
        if (window.XDomainRequest && !i(n)) {
          if (!o(n)) return c();
          a = window.XDomainRequest;
        }
        var u = new a('MSXML2.XMLHTTP.3.0');
        if ((u.open(e.toUpperCase(), n, !0), 'function' == typeof u.setRequestHeader)) {
          u.setRequestHeader('X-Requested-With', 'XMLHttpRequest'), u.setRequestHeader('Content-type', 'application/json');
          for (var d in t) t.hasOwnProperty(d) && u.setRequestHeader(d, t[d]);
        }
        s
          ? c()
          : (u.onreadystatechange = function() {
              u.readyState > 3 && c();
            }),
          u.send(JSON.stringify(r).replace(/&/g, '%26'));
      });
    }
    function a(e, n) {
      var t = {};
      return function() {
        var r = arguments;
        return (
          t.timeout && (clearTimeout(t.timeout), delete t.timeout),
          (t.timeout = setTimeout(function() {
            var n = t.resolver,
              o = t.rejector;
            return (
              delete t.promise,
              delete t.resolver,
              delete t.rejector,
              delete t.timeout,
              l.a
                .resolve()
                .then(function() {
                  return e.apply(null, r);
                })
                .then(n, o)
            );
          }, n)),
          (t.promise =
            t.promise ||
            new l.a(function(e, n) {
              (t.resolver = e), (t.rejector = n);
            })),
          t.promise
        );
      };
    }
    function s(e, n) {
      function t() {
        r = setTimeout(function() {
          e(), t();
        }, n);
      }
      var r = void 0;
      return (
        t(),
        {
          cancel: function() {
            clearTimeout(r);
          }
        }
      );
    }
    function u() {
      var e = '0123456789abcdef';
      return 'xxxxxxxxxx'.replace(/./g, function() {
        return e.charAt(Math.floor(Math.random() * e.length));
      });
    }
    function d() {
      return Boolean(window.document.documentMode);
    }
    (n.b = r),
      (n.a = c),
      (n.d = a),
      t.d(n, 'g', function() {
        return f;
      }),
      (n.e = s),
      (n.f = u),
      (n.c = d);
    var l = t('./node_modules/zalgo-promise/src/index.js'),
      f = new l.a(function(e) {
        'undefined' != typeof document && 'complete' === document.readyState && e(),
          window.addEventListener && window.addEventListener('load', e);
      });
  },
  './node_modules/cross-domain-safe-weakmap/src/index.js': function(e, n, t) {
    'use strict';
    var r = t('./node_modules/cross-domain-safe-weakmap/src/interface.js');
    t.d(n, 'a', function() {
      return r.WeakMap;
    });
  },
  './node_modules/cross-domain-safe-weakmap/src/interface.js': function(e, n, t) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var r = t('./node_modules/cross-domain-safe-weakmap/src/weakmap.js');
    t.d(n, 'WeakMap', function() {
      return r.a;
    });
  },
  './node_modules/cross-domain-safe-weakmap/src/native.js': function(e, n, t) {
    'use strict';
    function r() {
      if (!window.WeakMap) return !1;
      if (!window.Object.freeze) return !1;
      try {
        var e = new window.WeakMap(),
          n = {};
        return window.Object.freeze(n), e.set(n, '__testvalue__'), '__testvalue__' === e.get(n);
      } catch (e) {
        return !1;
      }
    }
    n.a = r;
  },
  './node_modules/cross-domain-safe-weakmap/src/util.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      for (var t = 0; t < e.length; t++)
        try {
          if (e[t] === n) return t;
        } catch (e) {}
      return -1;
    }
    function o() {}
    (n.b = r), (n.a = o);
  },
  './node_modules/cross-domain-safe-weakmap/src/weakmap.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
    }
    t.d(n, 'a', function() {
      return u;
    });
    var o = t('./node_modules/cross-domain-utils/src/index.js'),
      i = t('./node_modules/cross-domain-safe-weakmap/src/native.js'),
      c = t('./node_modules/cross-domain-safe-weakmap/src/util.js'),
      a = Object.defineProperty,
      s = Date.now() % 1e9,
      u = (function() {
        function e() {
          if ((r(this, e), (s += 1), (this.name = '__weakmap_' + ((1e9 * Math.random()) >>> 0) + '__' + s), Object(i.a)()))
            try {
              this.weakmap = new window.WeakMap();
            } catch (e) {}
          (this.keys = []), (this.values = []);
        }
        return (
          (e.prototype._cleanupClosedWindows = function() {
            for (var e = this.weakmap, n = this.keys, t = 0; t < n.length; t++) {
              var r = n[t];
              if (Object(o.s)(r) && Object(o.t)(r)) {
                if (e)
                  try {
                    e.delete(r);
                  } catch (e) {}
                n.splice(t, 1), this.values.splice(t, 1), (t -= 1);
              }
            }
          }),
          (e.prototype.isSafeToReadWrite = function(e) {
            if (Object(o.s)(e)) return !1;
            try {
              Object(c.a)(e && e.self), Object(c.a)(e && e[this.name]);
            } catch (e) {
              return !1;
            }
            return !0;
          }),
          (e.prototype.set = function(e, n) {
            if (!e) throw new Error('WeakMap expected key');
            var t = this.weakmap;
            if (t)
              try {
                t.set(e, n);
              } catch (e) {
                delete this.weakmap;
              }
            if (this.isSafeToReadWrite(e)) {
              var r = this.name,
                o = e[r];
              o && o[0] === e ? (o[1] = n) : a(e, r, { value: [e, n], writable: !0 });
            } else {
              this._cleanupClosedWindows();
              var i = this.keys,
                s = this.values,
                u = Object(c.b)(i, e);
              -1 === u ? (i.push(e), s.push(n)) : (s[u] = n);
            }
          }),
          (e.prototype.get = function(e) {
            if (!e) throw new Error('WeakMap expected key');
            var n = this.weakmap;
            if (n)
              try {
                if (n.has(e)) return n.get(e);
              } catch (e) {
                delete this.weakmap;
              }
            if (!this.isSafeToReadWrite(e)) {
              this._cleanupClosedWindows();
              var t = this.keys,
                r = Object(c.b)(t, e);
              if (-1 === r) return;
              return this.values[r];
            }
            var o = e[this.name];
            if (o && o[0] === e) return o[1];
          }),
          (e.prototype.delete = function(e) {
            if (!e) throw new Error('WeakMap expected key');
            var n = this.weakmap;
            if (n)
              try {
                n.delete(e);
              } catch (e) {
                delete this.weakmap;
              }
            if (this.isSafeToReadWrite(e)) {
              var t = e[this.name];
              t && t[0] === e && (t[0] = t[1] = void 0);
            } else {
              this._cleanupClosedWindows();
              var r = this.keys,
                o = Object(c.b)(r, e);
              -1 !== o && (r.splice(o, 1), this.values.splice(o, 1));
            }
          }),
          (e.prototype.has = function(e) {
            if (!e) throw new Error('WeakMap expected key');
            var n = this.weakmap;
            if (n)
              try {
                return n.has(e);
              } catch (e) {
                delete this.weakmap;
              }
            if (this.isSafeToReadWrite(e)) {
              var t = e[this.name];
              return !(!t || t[0] !== e);
            }
            return this._cleanupClosedWindows(), -1 !== Object(c.b)(this.keys, e);
          }),
          e
        );
      })();
  },
  './node_modules/cross-domain-utils/src/index.js': function(e, n, t) {
    'use strict';
    function r(e) {
      var n = e.location;
      if (!n) throw new Error('Can not read window location');
      var t = n.protocol;
      if (!t) throw new Error('Can not read window protocol');
      if (t === z.FILE_PROTOCOL) return z.FILE_PROTOCOL + '//';
      var r = n.host;
      if (!r) throw new Error('Can not read window host');
      return t + '//' + r;
    }
    function o(e) {
      e = e || window;
      var n = r(e);
      return n && e.mockDomain && 0 === e.mockDomain.indexOf(z.MOCK_PROTOCOL) ? e.mockDomain : n;
    }
    function i(e) {
      try {
        if (!e.location.href) return !0;
        if ('about:blank' === e.location.href) return !0;
      } catch (e) {}
      return !1;
    }
    function c(e) {
      try {
        var n = Object.getOwnPropertyDescriptor(e, 'location');
        if (n && !1 === n.enumerable) return !1;
      } catch (e) {}
      try {
        if (i(e)) return !0;
        if (r(e) === r(window)) return !0;
      } catch (e) {}
      return !1;
    }
    function a(e) {
      if (!c(e)) return !1;
      try {
        if (i(e)) return !0;
        if (o(window) === o(e)) return !0;
      } catch (e) {}
      return !1;
    }
    function s(e) {
      if (e)
        try {
          if (e.parent && e.parent !== e) return e.parent;
        } catch (e) {
          return;
        }
    }
    function u(e) {
      if (e && !s(e))
        try {
          return e.opener;
        } catch (e) {
          return;
        }
    }
    function d(e) {
      var n = [];
      try {
        for (; e.parent !== e; ) n.push(e.parent), (e = e.parent);
      } catch (e) {}
      return n;
    }
    function l(e, n) {
      if (!e || !n) return !1;
      var t = s(n);
      return t ? t === e : -1 !== d(n).indexOf(e);
    }
    function f(e) {
      var n = [],
        t = void 0;
      try {
        t = e.frames;
      } catch (n) {
        t = e;
      }
      var r = void 0;
      try {
        r = t.length;
      } catch (e) {}
      if (0 === r) return n;
      if (r) {
        for (var o = 0; o < r; o++) {
          var i = void 0;
          try {
            i = t[o];
          } catch (e) {
            continue;
          }
          n.push(i);
        }
        return n;
      }
      for (var c = 0; c < 100; c++) {
        var a = void 0;
        try {
          a = t[c];
        } catch (e) {
          return n;
        }
        if (!a) return n;
        n.push(a);
      }
      return n;
    }
    function p(e) {
      for (var n = [], t = f(e), r = Array.isArray(t), o = 0, t = r ? t : t[Symbol.iterator](); ; ) {
        var i;
        if (r) {
          if (o >= t.length) break;
          i = t[o++];
        } else {
          if (((o = t.next()), o.done)) break;
          i = o.value;
        }
        var c = i;
        n.push(c);
        for (var a = p(c), s = Array.isArray(a), u = 0, a = s ? a : a[Symbol.iterator](); ; ) {
          var d;
          if (s) {
            if (u >= a.length) break;
            d = a[u++];
          } else {
            if (((u = a.next()), u.done)) break;
            d = u.value;
          }
          var l = d;
          n.push(l);
        }
      }
      return n;
    }
    function m(e) {
      if (e) {
        try {
          if (e.top) return e.top;
        } catch (e) {}
        if (s(e) === e) return e;
        try {
          if (l(window, e) && window.top) return window.top;
        } catch (e) {}
        try {
          if (l(e, window) && window.top) return window.top;
        } catch (e) {}
        for (var n = p(e), t = Array.isArray(n), r = 0, n = t ? n : n[Symbol.iterator](); ; ) {
          var o;
          if (t) {
            if (r >= n.length) break;
            o = n[r++];
          } else {
            if (((r = n.next()), r.done)) break;
            o = r.value;
          }
          var i = o;
          try {
            if (i.top) return i.top;
          } catch (e) {}
          if (s(i) === i) return i;
        }
      }
    }
    function h(e) {
      var n = m(e);
      return p(n).concat(n);
    }
    function b(e) {
      return e === m(e);
    }
    function y(e) {
      if (!e.contentWindow) return !0;
      if (!e.parentNode) return !0;
      var n = e.ownerDocument;
      return !(!n || !n.body || n.body.contains(e));
    }
    function v(e, n) {
      for (var t = 0; t < e.length; t++)
        try {
          if (e[t] === n) return t;
        } catch (e) {}
      return -1;
    }
    function w(e) {
      var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      try {
        if (e === window) return !1;
      } catch (e) {
        return !0;
      }
      try {
        if (!e) return !0;
      } catch (e) {
        return !0;
      }
      try {
        if (e.closed) return !0;
      } catch (e) {
        return !e || e.message !== G;
      }
      if (n && a(e))
        try {
          if (e.mockclosed) return !0;
        } catch (e) {}
      try {
        if (!e.parent || !e.top) return !0;
      } catch (e) {}
      try {
        Object(W.b)(e === e);
      } catch (e) {
        return !0;
      }
      var t = v(U, e);
      if (-1 !== t) {
        var r = F[t];
        if (r && y(r)) return !0;
      }
      return !1;
    }
    function g() {
      for (var e = 0; e < F.length; e++) y(F[e]) && (F.splice(e, 1), U.splice(e, 1));
      for (var n = 0; n < U.length; n++) w(U[n]) && (F.splice(n, 1), U.splice(n, 1));
    }
    function j(e) {
      if ((g(), e && e.contentWindow))
        try {
          U.push(e.contentWindow), F.push(e);
        } catch (e) {}
    }
    function E(e, n) {
      for (var t = f(e), r = t, o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator](); ; ) {
        var c;
        if (o) {
          if (i >= r.length) break;
          c = r[i++];
        } else {
          if (((i = r.next()), i.done)) break;
          c = i.value;
        }
        var s = c;
        try {
          if (a(s) && s.name === n && -1 !== t.indexOf(s)) return s;
        } catch (e) {}
      }
      try {
        if (-1 !== t.indexOf(e.frames[n])) return e.frames[n];
      } catch (e) {}
      try {
        if (-1 !== t.indexOf(e[n])) return e[n];
      } catch (e) {}
    }
    function O(e, n) {
      var t = E(e, n);
      if (t) return t;
      for (var r = f(e), o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator](); ; ) {
        var c;
        if (o) {
          if (i >= r.length) break;
          c = r[i++];
        } else {
          if (((i = r.next()), i.done)) break;
          c = i.value;
        }
        var a = c,
          s = O(a, n);
        if (s) return s;
      }
    }
    function _(e, n) {
      var t = void 0;
      return (t = E(e, n)) ? t : O(m(e) || e, n);
    }
    function S(e) {
      e = e || window;
      var n = u(e);
      if (n) return n;
      var t = s(e);
      return t || void 0;
    }
    function x(e, n) {
      var t = S(n);
      if (t) return t === e;
      if (n === e) return !1;
      if (m(n) === n) return !1;
      for (var r = f(e), o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator](); ; ) {
        var c;
        if (o) {
          if (i >= r.length) break;
          c = r[i++];
        } else {
          if (((i = r.next()), i.done)) break;
          c = i.value;
        }
        if (c === n) return !0;
      }
      return !1;
    }
    function A() {
      return Boolean(u(window));
    }
    function L() {
      return Boolean(s(window));
    }
    function C(e, n) {
      for (var t = e, r = Array.isArray(t), o = 0, t = r ? t : t[Symbol.iterator](); ; ) {
        var i;
        if (r) {
          if (o >= t.length) break;
          i = t[o++];
        } else {
          if (((o = t.next()), o.done)) break;
          i = o.value;
        }
        for (var c = i, a = n, s = Array.isArray(a), u = 0, a = s ? a : a[Symbol.iterator](); ; ) {
          var d;
          if (s) {
            if (u >= a.length) break;
            d = a[u++];
          } else {
            if (((u = a.next()), u.done)) break;
            d = u.value;
          }
          if (c === d) return !0;
        }
      }
      return !1;
    }
    function T() {
      for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window, n = 0, t = e; t; ) (t = s(t)) && (n += 1);
      return n;
    }
    function I(e) {
      for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, t = e, r = 0; r < n; r++) {
        if (!t) return;
        t = s(t);
      }
      return t;
    }
    function P(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return I(e, T(e) - n);
    }
    function N(e, n) {
      var t = m(e) || e,
        r = m(n) || n;
      try {
        if (t && r) return t === r;
      } catch (e) {}
      var o = h(e),
        i = h(n);
      if (C(o, i)) return !0;
      var c = u(t),
        a = u(r);
      return (!c || !C(h(c), i)) && (a && C(h(a), o), !1);
    }
    function M(e, n) {
      if ('string' == typeof e) {
        if ('string' == typeof n) return e === z.WILDCARD || n === e;
        if (Object(W.a)(n)) return !1;
        if (Array.isArray(n)) return !1;
      }
      return Object(W.a)(e)
        ? Object(W.a)(n)
          ? e.toString() === n.toString()
          : !Array.isArray(n) && Boolean(n.match(e))
        : !!Array.isArray(e) &&
            (Array.isArray(n)
              ? JSON.stringify(e) === JSON.stringify(n)
              : !Object(W.a)(n) &&
                e.some(function(e) {
                  return M(e, n);
                }));
    }
    function D(e) {
      var n = void 0;
      return e.match(/^(https?|mock|file):\/\//)
        ? ((n = e),
          (n = n
            .split('/')
            .slice(0, 3)
            .join('/')))
        : o();
    }
    function R(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        o = void 0;
      return (
        (function i() {
          if (w(e)) return o && clearTimeout(o), n();
          r <= 0 ? clearTimeout(o) : ((r -= t), (o = setTimeout(i, t)));
        })(),
        {
          cancel: function() {
            o && clearTimeout(o);
          }
        }
      );
    }
    function k(e) {
      try {
        if (e === window) return !0;
      } catch (e) {
        if (e && e.message === G) return !0;
      }
      try {
        if ('[object Window]' === Object.prototype.toString.call(e)) return !0;
      } catch (e) {
        if (e && e.message === G) return !0;
      }
      try {
        if (window.Window && e instanceof window.Window) return !0;
      } catch (e) {
        if (e && e.message === G) return !0;
      }
      try {
        if (e && e.self === e) return !0;
      } catch (e) {
        if (e && e.message === G) return !0;
      }
      try {
        if (e && e.parent === e) return !0;
      } catch (e) {
        if (e && e.message === G) return !0;
      }
      try {
        if (e && e.top === e) return !0;
      } catch (e) {
        if (e && e.message === G) return !0;
      }
      try {
        Object(W.b)(e === e);
      } catch (e) {
        return !0;
      }
      try {
        Object(W.b)(e && e.__cross_domain_utils_window_check__);
      } catch (e) {
        return !0;
      }
      return !1;
    }
    (n.b = r),
      (n.f = o),
      (n.l = c),
      (n.p = a),
      (n.j = s),
      (n.i = u),
      (n.k = m),
      (n.c = h),
      (n.r = b),
      (n.t = w),
      (n.u = j),
      (n.a = _),
      (n.d = S),
      (n.m = x),
      (n.o = A),
      (n.n = L),
      (n.e = T),
      (n.h = P),
      (n.q = N),
      (n.v = M),
      (n.g = D),
      (n.w = R),
      (n.s = k);
    var W = t('./node_modules/cross-domain-utils/src/util.js'),
      z = { MOCK_PROTOCOL: 'mock:', FILE_PROTOCOL: 'file:', WILDCARD: '*' },
      G = 'Call was rejected by callee.\r\n',
      U = [],
      F = [];
  },
  './node_modules/cross-domain-utils/src/util.js': function(e, n, t) {
    'use strict';
    function r(e) {
      return '[object RegExp]' === Object.prototype.toString.call(e);
    }
    function o() {}
    (n.a = r), (n.b = o);
  },
  './node_modules/hi-base32/src/base32.js': function(e, n, t) {
    (function(n) {
      !(function(t, r) {
        'use strict';
        var o = void 0 !== e;
        o && (t = n);
        var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.split(''),
          c = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7,
            I: 8,
            J: 9,
            K: 10,
            L: 11,
            M: 12,
            N: 13,
            O: 14,
            P: 15,
            Q: 16,
            R: 17,
            S: 18,
            T: 19,
            U: 20,
            V: 21,
            W: 22,
            X: 23,
            Y: 24,
            Z: 25,
            2: 26,
            3: 27,
            4: 28,
            5: 29,
            6: 30,
            7: 31
          },
          a = [0, 0, 0, 0, 0, 0, 0, 0],
          s = function(e) {
            for (var n, t, r = '', o = e.length, i = 0, c = 0; i < o; )
              if ((n = e[i++]) <= 127) r += String.fromCharCode(n);
              else {
                if (n > 191 && n <= 223) (t = 31 & n), (c = 1);
                else if (n <= 239) (t = 15 & n), (c = 2);
                else {
                  if (!(n <= 247)) throw 'not a UTF-8 string';
                  (t = 7 & n), (c = 3);
                }
                for (var a = 0; a < c; ++a) {
                  if ((n = e[i++]) < 128 || n > 191) throw 'not a UTF-8 string';
                  (t <<= 6), (t += 63 & n);
                }
                if (t >= 55296 && t <= 57343) throw 'not a UTF-8 string';
                if (t > 1114111) throw 'not a UTF-8 string';
                t <= 65535
                  ? (r += String.fromCharCode(t))
                  : ((t -= 65536), (r += String.fromCharCode(55296 + (t >> 10))), (r += String.fromCharCode(56320 + (1023 & t))));
              }
            return r;
          },
          u = function(e) {
            e = e.replace(/=/g, '');
            for (var n, t, r, o, i, a, s, u, d = [], l = 0, f = e.length, p = 0, m = (f >> 3) << 3; p < m; )
              (n = c[e.charAt(p++)]),
                (t = c[e.charAt(p++)]),
                (r = c[e.charAt(p++)]),
                (o = c[e.charAt(p++)]),
                (i = c[e.charAt(p++)]),
                (a = c[e.charAt(p++)]),
                (s = c[e.charAt(p++)]),
                (u = c[e.charAt(p++)]),
                (d[l++] = 255 & ((n << 3) | (t >>> 2))),
                (d[l++] = 255 & ((t << 6) | (r << 1) | (o >>> 4))),
                (d[l++] = 255 & ((o << 4) | (i >>> 1))),
                (d[l++] = 255 & ((i << 7) | (a << 2) | (s >>> 3))),
                (d[l++] = 255 & ((s << 5) | u));
            var h = f - m;
            return (
              2 == h
                ? ((n = c[e.charAt(p++)]), (t = c[e.charAt(p++)]), (d[l++] = 255 & ((n << 3) | (t >>> 2))))
                : 4 == h
                  ? ((n = c[e.charAt(p++)]),
                    (t = c[e.charAt(p++)]),
                    (r = c[e.charAt(p++)]),
                    (o = c[e.charAt(p++)]),
                    (d[l++] = 255 & ((n << 3) | (t >>> 2))),
                    (d[l++] = 255 & ((t << 6) | (r << 1) | (o >>> 4))))
                  : 5 == h
                    ? ((n = c[e.charAt(p++)]),
                      (t = c[e.charAt(p++)]),
                      (r = c[e.charAt(p++)]),
                      (o = c[e.charAt(p++)]),
                      (i = c[e.charAt(p++)]),
                      (d[l++] = 255 & ((n << 3) | (t >>> 2))),
                      (d[l++] = 255 & ((t << 6) | (r << 1) | (o >>> 4))),
                      (d[l++] = 255 & ((o << 4) | (i >>> 1))))
                    : 7 == h &&
                      ((n = c[e.charAt(p++)]),
                      (t = c[e.charAt(p++)]),
                      (r = c[e.charAt(p++)]),
                      (o = c[e.charAt(p++)]),
                      (i = c[e.charAt(p++)]),
                      (a = c[e.charAt(p++)]),
                      (s = c[e.charAt(p++)]),
                      (d[l++] = 255 & ((n << 3) | (t >>> 2))),
                      (d[l++] = 255 & ((t << 6) | (r << 1) | (o >>> 4))),
                      (d[l++] = 255 & ((o << 4) | (i >>> 1))),
                      (d[l++] = 255 & ((i << 7) | (a << 2) | (s >>> 3)))),
              d
            );
          },
          d = function(e) {
            for (var n, t, r, o, c, a = '', s = e.length, u = 0, d = 5 * parseInt(s / 5); u < d; )
              (n = e.charCodeAt(u++)),
                (t = e.charCodeAt(u++)),
                (r = e.charCodeAt(u++)),
                (o = e.charCodeAt(u++)),
                (c = e.charCodeAt(u++)),
                (a +=
                  i[n >>> 3] +
                  i[31 & ((n << 2) | (t >>> 6))] +
                  i[(t >>> 1) & 31] +
                  i[31 & ((t << 4) | (r >>> 4))] +
                  i[31 & ((r << 1) | (o >>> 7))] +
                  i[(o >>> 2) & 31] +
                  i[31 & ((o << 3) | (c >>> 5))] +
                  i[31 & c]);
            var l = s - d;
            return (
              1 == l
                ? ((n = e.charCodeAt(u)), (a += i[n >>> 3] + i[(n << 2) & 31] + '======'))
                : 2 == l
                  ? ((n = e.charCodeAt(u++)),
                    (t = e.charCodeAt(u)),
                    (a += i[n >>> 3] + i[31 & ((n << 2) | (t >>> 6))] + i[(t >>> 1) & 31] + i[(t << 4) & 31] + '===='))
                  : 3 == l
                    ? ((n = e.charCodeAt(u++)),
                      (t = e.charCodeAt(u++)),
                      (r = e.charCodeAt(u)),
                      (a +=
                        i[n >>> 3] +
                        i[31 & ((n << 2) | (t >>> 6))] +
                        i[(t >>> 1) & 31] +
                        i[31 & ((t << 4) | (r >>> 4))] +
                        i[(r << 1) & 31] +
                        '==='))
                    : 4 == l &&
                      ((n = e.charCodeAt(u++)),
                      (t = e.charCodeAt(u++)),
                      (r = e.charCodeAt(u++)),
                      (o = e.charCodeAt(u)),
                      (a +=
                        i[n >>> 3] +
                        i[31 & ((n << 2) | (t >>> 6))] +
                        i[(t >>> 1) & 31] +
                        i[31 & ((t << 4) | (r >>> 4))] +
                        i[31 & ((r << 1) | (o >>> 7))] +
                        i[(o >>> 2) & 31] +
                        i[(o << 3) & 31] +
                        '=')),
              a
            );
          },
          l = function(e) {
            var n,
              t,
              r,
              o,
              c,
              s,
              u,
              d = !1,
              l = '',
              f = 0,
              p = 0,
              m = 0,
              h = e.length;
            do {
              for (a[0] = a[5], a[1] = a[6], a[2] = a[7], u = p; f < h && u < 5; ++f)
                (s = e.charCodeAt(f)),
                  s < 128
                    ? (a[u++] = s)
                    : s < 2048
                      ? ((a[u++] = 192 | (s >> 6)), (a[u++] = 128 | (63 & s)))
                      : s < 55296 || s >= 57344
                        ? ((a[u++] = 224 | (s >> 12)), (a[u++] = 128 | ((s >> 6) & 63)), (a[u++] = 128 | (63 & s)))
                        : ((s = 65536 + (((1023 & s) << 10) | (1023 & e.charCodeAt(++f)))),
                          (a[u++] = 240 | (s >> 18)),
                          (a[u++] = 128 | ((s >> 12) & 63)),
                          (a[u++] = 128 | ((s >> 6) & 63)),
                          (a[u++] = 128 | (63 & s)));
              (m += u - p),
                (p = u - 5),
                f == h && ++f,
                f > h && u < 6 && (d = !0),
                (n = a[0]),
                u > 4
                  ? ((t = a[1]),
                    (r = a[2]),
                    (o = a[3]),
                    (c = a[4]),
                    (l +=
                      i[n >>> 3] +
                      i[31 & ((n << 2) | (t >>> 6))] +
                      i[(t >>> 1) & 31] +
                      i[31 & ((t << 4) | (r >>> 4))] +
                      i[31 & ((r << 1) | (o >>> 7))] +
                      i[(o >>> 2) & 31] +
                      i[31 & ((o << 3) | (c >>> 5))] +
                      i[31 & c]))
                  : 1 == u
                    ? (l += i[n >>> 3] + i[(n << 2) & 31] + '======')
                    : 2 == u
                      ? ((t = a[1]), (l += i[n >>> 3] + i[31 & ((n << 2) | (t >>> 6))] + i[(t >>> 1) & 31] + i[(t << 4) & 31] + '===='))
                      : 3 == u
                        ? ((t = a[1]),
                          (r = a[2]),
                          (l +=
                            i[n >>> 3] +
                            i[31 & ((n << 2) | (t >>> 6))] +
                            i[(t >>> 1) & 31] +
                            i[31 & ((t << 4) | (r >>> 4))] +
                            i[(r << 1) & 31] +
                            '==='))
                        : 4 == u &&
                          ((t = a[1]),
                          (r = a[2]),
                          (o = a[3]),
                          (l +=
                            i[n >>> 3] +
                            i[31 & ((n << 2) | (t >>> 6))] +
                            i[(t >>> 1) & 31] +
                            i[31 & ((t << 4) | (r >>> 4))] +
                            i[31 & ((r << 1) | (o >>> 7))] +
                            i[(o >>> 2) & 31] +
                            i[(o << 3) & 31] +
                            '='));
            } while (!d);
            return l;
          },
          f = function(e) {
            for (var n, t, r, o, c, a = '', s = e.length, u = 0, d = 5 * parseInt(s / 5); u < d; )
              (n = e[u++]),
                (t = e[u++]),
                (r = e[u++]),
                (o = e[u++]),
                (c = e[u++]),
                (a +=
                  i[n >>> 3] +
                  i[31 & ((n << 2) | (t >>> 6))] +
                  i[(t >>> 1) & 31] +
                  i[31 & ((t << 4) | (r >>> 4))] +
                  i[31 & ((r << 1) | (o >>> 7))] +
                  i[(o >>> 2) & 31] +
                  i[31 & ((o << 3) | (c >>> 5))] +
                  i[31 & c]);
            var l = s - d;
            return (
              1 == l
                ? ((n = e[u]), (a += i[n >>> 3] + i[(n << 2) & 31] + '======'))
                : 2 == l
                  ? ((n = e[u++]),
                    (t = e[u]),
                    (a += i[n >>> 3] + i[31 & ((n << 2) | (t >>> 6))] + i[(t >>> 1) & 31] + i[(t << 4) & 31] + '===='))
                  : 3 == l
                    ? ((n = e[u++]),
                      (t = e[u++]),
                      (r = e[u]),
                      (a +=
                        i[n >>> 3] +
                        i[31 & ((n << 2) | (t >>> 6))] +
                        i[(t >>> 1) & 31] +
                        i[31 & ((t << 4) | (r >>> 4))] +
                        i[(r << 1) & 31] +
                        '==='))
                    : 4 == l &&
                      ((n = e[u++]),
                      (t = e[u++]),
                      (r = e[u++]),
                      (o = e[u]),
                      (a +=
                        i[n >>> 3] +
                        i[31 & ((n << 2) | (t >>> 6))] +
                        i[(t >>> 1) & 31] +
                        i[31 & ((t << 4) | (r >>> 4))] +
                        i[31 & ((r << 1) | (o >>> 7))] +
                        i[(o >>> 2) & 31] +
                        i[(o << 3) & 31] +
                        '=')),
              a
            );
          },
          p = function(e, n) {
            var t = 'string' != typeof e;
            return t && e.constructor == ArrayBuffer && (e = new Uint8Array(e)), t ? f(e) : n ? d(e) : l(e);
          },
          m = function(e, n) {
            if (!n) return s(u(e));
            var t,
              r,
              o,
              i,
              a,
              d,
              l,
              f,
              p = '',
              m = e.indexOf('=');
            -1 == m && (m = e.length);
            for (var h = 0, b = (m >> 3) << 3; h < b; )
              (t = c[e.charAt(h++)]),
                (r = c[e.charAt(h++)]),
                (o = c[e.charAt(h++)]),
                (i = c[e.charAt(h++)]),
                (a = c[e.charAt(h++)]),
                (d = c[e.charAt(h++)]),
                (l = c[e.charAt(h++)]),
                (f = c[e.charAt(h++)]),
                (p +=
                  String.fromCharCode(255 & ((t << 3) | (r >>> 2))) +
                  String.fromCharCode(255 & ((r << 6) | (o << 1) | (i >>> 4))) +
                  String.fromCharCode(255 & ((i << 4) | (a >>> 1))) +
                  String.fromCharCode(255 & ((a << 7) | (d << 2) | (l >>> 3))) +
                  String.fromCharCode(255 & ((l << 5) | f)));
            var y = m - b;
            return (
              2 == y
                ? ((t = c[e.charAt(h++)]), (r = c[e.charAt(h++)]), (p += String.fromCharCode(255 & ((t << 3) | (r >>> 2)))))
                : 4 == y
                  ? ((t = c[e.charAt(h++)]),
                    (r = c[e.charAt(h++)]),
                    (o = c[e.charAt(h++)]),
                    (i = c[e.charAt(h++)]),
                    (p += String.fromCharCode(255 & ((t << 3) | (r >>> 2))) + String.fromCharCode(255 & ((r << 6) | (o << 1) | (i >>> 4)))))
                  : 5 == y
                    ? ((t = c[e.charAt(h++)]),
                      (r = c[e.charAt(h++)]),
                      (o = c[e.charAt(h++)]),
                      (i = c[e.charAt(h++)]),
                      (a = c[e.charAt(h++)]),
                      (p +=
                        String.fromCharCode(255 & ((t << 3) | (r >>> 2))) +
                        String.fromCharCode(255 & ((r << 6) | (o << 1) | (i >>> 4))) +
                        String.fromCharCode(255 & ((i << 4) | (a >>> 1)))))
                    : 7 == y &&
                      ((t = c[e.charAt(h++)]),
                      (r = c[e.charAt(h++)]),
                      (o = c[e.charAt(h++)]),
                      (i = c[e.charAt(h++)]),
                      (a = c[e.charAt(h++)]),
                      (d = c[e.charAt(h++)]),
                      (l = c[e.charAt(h++)]),
                      (p +=
                        String.fromCharCode(255 & ((t << 3) | (r >>> 2))) +
                        String.fromCharCode(255 & ((r << 6) | (o << 1) | (i >>> 4))) +
                        String.fromCharCode(255 & ((i << 4) | (a >>> 1))) +
                        String.fromCharCode(255 & ((a << 7) | (d << 2) | (l >>> 3))))),
              p
            );
          };
        m.asBytes = u;
        var h = { encode: p, decode: m };
        t.HI_BASE32_TEST && (h.toUtf8String = s), !t.HI_BASE32_TEST && o ? (e.exports = h) : t && (t.base32 = h);
      })(this);
    }.call(n, t('./node_modules/webpack/buildin/global.js')));
  },
  './node_modules/post-robot/src/clean.js': function(e, n, t) {
    'use strict';
    function r(e) {
      var n = o.a.requestPromises.get(e);
      if (n)
        for (var t = n, r = Array.isArray(t), i = 0, t = r ? t : t[Symbol.iterator](); ; ) {
          var c;
          if (r) {
            if (i >= t.length) break;
            c = t[i++];
          } else {
            if (((i = t.next()), i.done)) break;
            c = i.value;
          }
          var a = c;
          a.reject(new Error('No response from window - cleaned up'));
        }
      o.a.popupWindowsByWin && o.a.popupWindowsByWin.delete(e),
        o.a.remoteWindows && o.a.remoteWindows.delete(e),
        o.a.requestPromises.delete(e),
        o.a.methods.delete(e),
        o.a.readyPromises.delete(e);
    }
    n.a = r;
    var o = t('./node_modules/post-robot/src/global.js');
  },
  './node_modules/post-robot/src/conf/config.js': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return i;
    });
    var r,
      o = t('./node_modules/post-robot/src/conf/constants.js'),
      i = {
        ALLOW_POSTMESSAGE_POPUP: !('__ALLOW_POSTMESSAGE_POPUP__' in window) || window.__ALLOW_POSTMESSAGE_POPUP__,
        LOG_LEVEL: 'info',
        BRIDGE_TIMEOUT: 5e3,
        ACK_TIMEOUT: -1 !== window.navigator.userAgent.match(/MSIE/i) ? 2e3 : 1e3,
        RES_TIMEOUT: 1 / 0,
        LOG_TO_PAGE: !1,
        ALLOWED_POST_MESSAGE_METHODS: ((r = {}),
        (r[o.a.SEND_STRATEGIES.POST_MESSAGE] = !0),
        (r[o.a.SEND_STRATEGIES.BRIDGE] = !0),
        (r[o.a.SEND_STRATEGIES.GLOBAL] = !0),
        r)
      };
    0 === window.location.href.indexOf(o.a.FILE_PROTOCOL) && (i.ALLOW_POSTMESSAGE_POPUP = !0);
  },
  './node_modules/post-robot/src/conf/constants.js': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return r;
    }),
      t.d(n, 'b', function() {
        return o;
      });
    var r = {
        POST_MESSAGE_TYPE: { REQUEST: 'postrobot_message_request', RESPONSE: 'postrobot_message_response', ACK: 'postrobot_message_ack' },
        POST_MESSAGE_ACK: { SUCCESS: 'success', ERROR: 'error' },
        POST_MESSAGE_NAMES: { METHOD: 'postrobot_method', READY: 'postrobot_ready', OPEN_TUNNEL: 'postrobot_open_tunnel' },
        WINDOW_TYPES: { FULLPAGE: 'fullpage', POPUP: 'popup', IFRAME: 'iframe' },
        WINDOW_PROPS: { POSTROBOT: '__postRobot__' },
        SERIALIZATION_TYPES: {
          METHOD: 'postrobot_method',
          ERROR: 'postrobot_error',
          PROMISE: 'postrobot_promise',
          ZALGO_PROMISE: 'postrobot_zalgo_promise',
          REGEX: 'regex'
        },
        SEND_STRATEGIES: { POST_MESSAGE: 'postrobot_post_message', BRIDGE: 'postrobot_bridge', GLOBAL: 'postrobot_global' },
        MOCK_PROTOCOL: 'mock:',
        FILE_PROTOCOL: 'file:',
        BRIDGE_NAME_PREFIX: '__postrobot_bridge__',
        POSTROBOT_PROXY: '__postrobot_proxy__',
        WILDCARD: '*'
      },
      o = Object.keys(r.POST_MESSAGE_NAMES).map(function(e) {
        return r.POST_MESSAGE_NAMES[e];
      });
  },
  './node_modules/post-robot/src/conf/index.js': function(e, n, t) {
    'use strict';
    var r = t('./node_modules/post-robot/src/conf/config.js');
    t.d(n, 'a', function() {
      return r.a;
    });
    var o = t('./node_modules/post-robot/src/conf/constants.js');
    t.d(n, 'b', function() {
      return o.a;
    }),
      t.d(n, 'c', function() {
        return o.b;
      });
  },
  './node_modules/post-robot/src/drivers/index.js': function(e, n, t) {
    'use strict';
    var r = t('./node_modules/post-robot/src/drivers/receive/index.js');
    t.d(n, 'd', function() {
      return r.a;
    }),
      t.d(n, 'f', function() {
        return r.b;
      });
    var o = t('./node_modules/post-robot/src/drivers/send/index.js');
    t.d(n, 'g', function() {
      return o.a;
    });
    var i = t('./node_modules/post-robot/src/drivers/listeners.js');
    t.d(n, 'a', function() {
      return i.a;
    }),
      t.d(n, 'b', function() {
        return i.b;
      }),
      t.d(n, 'c', function() {
        return i.c;
      }),
      t.d(n, 'e', function() {
        return i.g;
      });
  },
  './node_modules/post-robot/src/drivers/listeners.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      f.a.responseListeners[e] = n;
    }
    function o(e) {
      return f.a.responseListeners[e];
    }
    function i(e) {
      delete f.a.responseListeners[e];
    }
    function c(e) {
      f.a.erroredResponseListeners[e] = !0;
    }
    function a(e) {
      return Boolean(f.a.erroredResponseListeners[e]);
    }
    function s(e) {
      var n = e.name,
        t = e.win,
        r = e.domain;
      if ((t === m.b.WILDCARD && (t = null), r === m.b.WILDCARD && (r = null), !n))
        throw new Error('Name required to get request listener');
      var o = f.a.requestListeners[n];
      if (o)
        for (var i = [t, f.a.WINDOW_WILDCARD], c = 0; c < i.length; c++) {
          var a = i[c],
            s = a && o.get(a);
          if (s) {
            if (r && 'string' == typeof r) {
              if (s[r]) return s[r];
              if (s[h])
                for (var u = s[h], d = Array.isArray(u), p = 0, u = d ? u : u[Symbol.iterator](); ; ) {
                  var b;
                  if (d) {
                    if (p >= u.length) break;
                    b = u[p++];
                  } else {
                    if (((p = u.next()), p.done)) break;
                    b = p.value;
                  }
                  var y = b,
                    v = y.regex,
                    w = y.listener;
                  if (Object(l.v)(v, r)) return w;
                }
            }
            if (s[m.b.WILDCARD]) return s[m.b.WILDCARD];
          }
        }
    }
    function u(e, n) {
      var t = e.name,
        r = e.win,
        o = e.domain;
      if (!t || 'string' != typeof t) throw new Error('Name required to add request listener');
      if (Array.isArray(r)) {
        for (var i = [], c = r, a = Array.isArray(c), l = 0, c = a ? c : c[Symbol.iterator](); ; ) {
          var b;
          if (a) {
            if (l >= c.length) break;
            b = c[l++];
          } else {
            if (((l = c.next()), l.done)) break;
            b = l.value;
          }
          var y = b;
          i.push(u({ name: t, domain: o, win: y }, n));
        }
        return {
          cancel: function() {
            for (var e = i, n = Array.isArray(e), t = 0, e = n ? e : e[Symbol.iterator](); ; ) {
              var r;
              if (n) {
                if (t >= e.length) break;
                r = e[t++];
              } else {
                if (((t = e.next()), t.done)) break;
                r = t.value;
              }
              r.cancel();
            }
          }
        };
      }
      if (Array.isArray(o)) {
        for (var v = [], w = o, g = Array.isArray(w), j = 0, w = g ? w : w[Symbol.iterator](); ; ) {
          var E;
          if (g) {
            if (j >= w.length) break;
            E = w[j++];
          } else {
            if (((j = w.next()), j.done)) break;
            E = j.value;
          }
          var O = E;
          v.push(u({ name: t, win: r, domain: O }, n));
        }
        return {
          cancel: function() {
            for (var e = v, n = Array.isArray(e), t = 0, e = n ? e : e[Symbol.iterator](); ; ) {
              var r;
              if (n) {
                if (t >= e.length) break;
                r = e[t++];
              } else {
                if (((t = e.next()), t.done)) break;
                r = t.value;
              }
              r.cancel();
            }
          }
        };
      }
      var _ = s({ name: t, win: r, domain: o });
      if (((r && r !== m.b.WILDCARD) || (r = f.a.WINDOW_WILDCARD), (o = o || m.b.WILDCARD), _))
        throw r && o
          ? new Error(
              'Request listener already exists for ' +
                t +
                ' on domain ' +
                o.toString() +
                ' for ' +
                (r === f.a.WINDOW_WILDCARD ? 'wildcard' : 'specified') +
                ' window'
            )
          : r
            ? new Error(
                'Request listener already exists for ' + t + ' for ' + (r === f.a.WINDOW_WILDCARD ? 'wildcard' : 'specified') + ' window'
              )
            : o
              ? new Error('Request listener already exists for ' + t + ' on domain ' + o.toString())
              : new Error('Request listener already exists for ' + t);
      var S = f.a.requestListeners,
        x = S[t];
      x || ((x = new d.a()), (S[t] = x));
      var A = x.get(r);
      A || ((A = {}), x.set(r, A));
      var L = o.toString(),
        C = A[h],
        T = void 0;
      return (
        Object(p.e)(o) ? (C || ((C = []), (A[h] = C)), (T = { regex: o, listener: n }), C.push(T)) : (A[L] = n),
        {
          cancel: function() {
            A && (delete A[L], r && 0 === Object.keys(A).length && x.delete(r), T && C.splice(C.indexOf(T, 1)));
          }
        }
      );
    }
    (n.b = r), (n.e = o), (n.c = i), (n.g = c), (n.f = a), (n.d = s), (n.a = u);
    var d = (t('./node_modules/zalgo-promise/src/index.js'), t('./node_modules/cross-domain-safe-weakmap/src/index.js')),
      l = t('./node_modules/cross-domain-utils/src/index.js'),
      f = t('./node_modules/post-robot/src/global.js'),
      p = t('./node_modules/post-robot/src/lib/index.js'),
      m = t('./node_modules/post-robot/src/conf/index.js');
    (f.a.responseListeners = f.a.responseListeners || {}),
      (f.a.requestListeners = f.a.requestListeners || {}),
      (f.a.WINDOW_WILDCARD = f.a.WINDOW_WILDCARD || new function() {}()),
      (f.a.erroredResponseListeners = f.a.erroredResponseListeners || {});
    var h = '__domain_regex__';
  },
  './node_modules/post-robot/src/drivers/receive/index.js': function(e, n, t) {
    'use strict';
    function r(e) {
      var n = void 0;
      try {
        n = Object(u.f)(e);
      } catch (e) {
        return;
      }
      if (
        n &&
        'object' === (void 0 === n ? 'undefined' : f(n)) &&
        null !== n &&
        (n = n[s.b.WINDOW_PROPS.POSTROBOT]) &&
        'object' === (void 0 === n ? 'undefined' : f(n)) &&
        null !== n &&
        n.type &&
        'string' == typeof n.type &&
        l.a[n.type]
      )
        return n;
    }
    function o(e) {
      if (!window || window.closed) throw new Error('Message recieved in closed window');
      try {
        if (!e.source) return;
      } catch (e) {
        return;
      }
      var n = e.source,
        t = e.origin,
        o = e.data,
        i = r(o);
      if (i) {
        if (!i.sourceDomain || 'string' != typeof i.sourceDomain) throw new Error('Expected message to have sourceDomain');
        if (
          ((0 !== i.sourceDomain.indexOf(s.b.MOCK_PROTOCOL) && 0 !== i.sourceDomain.indexOf(s.b.FILE_PROTOCOL)) || (t = i.sourceDomain),
          -1 === d.a.receivedMessages.indexOf(i.id))
        ) {
          d.a.receivedMessages.push(i.id);
          var c = void 0;
          if (
            ((c = -1 !== s.c.indexOf(i.name) || i.type === s.b.POST_MESSAGE_TYPE.ACK ? 'debug' : 'error' === i.ack ? 'error' : 'info'),
            u.i.logLevel(c, ['\n\n\t', '#receive', i.type.replace(/^postrobot_message_/, ''), '::', i.name, '::', t, '\n\n', i]),
            Object(a.t)(n))
          )
            return void u.i.debug('Source window is closed - can not send ' + i.type + ' ' + i.name);
          i.data && (i.data = Object(u.b)(n, t, i.data)), l.a[i.type](n, t, i);
        }
      }
    }
    function i(e) {
      try {
        e.source;
      } catch (e) {
        return;
      }
      var n = { source: e.source || e.sourceElement, origin: e.origin || (e.originalEvent && e.originalEvent.origin), data: e.data };
      o(n);
    }
    function c() {
      Object(u.a)(window, 'message', i);
    }
    (n.b = i), (n.a = c);
    var a = t('./node_modules/cross-domain-utils/src/index.js'),
      s = t('./node_modules/post-robot/src/conf/index.js'),
      u = t('./node_modules/post-robot/src/lib/index.js'),
      d = t('./node_modules/post-robot/src/global.js'),
      l = t('./node_modules/post-robot/src/drivers/receive/types.js'),
      f =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            };
    d.a.receivedMessages = d.a.receivedMessages || [];
  },
  './node_modules/post-robot/src/drivers/receive/types.js': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return l;
    });
    var r,
      o = t('./node_modules/zalgo-promise/src/index.js'),
      i = t('./node_modules/cross-domain-utils/src/index.js'),
      c = t('./node_modules/post-robot/src/conf/index.js'),
      a = t('./node_modules/post-robot/src/lib/index.js'),
      s = t('./node_modules/post-robot/src/drivers/send/index.js'),
      u = t('./node_modules/post-robot/src/drivers/listeners.js'),
      d =
        Object.assign ||
        function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        },
      l = ((r = {}),
      (r[c.b.POST_MESSAGE_TYPE.ACK] = function(e, n, t) {
        if (!Object(u.f)(t.hash)) {
          var r = Object(u.e)(t.hash);
          if (!r)
            throw new Error(
              'No handler found for post message ack for message: ' +
                t.name +
                ' from ' +
                n +
                ' in ' +
                window.location.protocol +
                '//' +
                window.location.host +
                window.location.pathname
            );
          if (!Object(i.v)(r.domain, n)) throw new Error('Ack origin ' + n + ' does not match domain ' + r.domain.toString());
          r.ack = !0;
        }
      }),
      (r[c.b.POST_MESSAGE_TYPE.REQUEST] = function(e, n, t) {
        function r(r) {
          return t.fireAndForget || Object(i.t)(e)
            ? o.a.resolve()
            : Object(s.a)(e, d({ target: t.originalSource, hash: t.hash, name: t.name }, r), n);
        }
        var l = Object(u.d)({ name: t.name, win: e, domain: n });
        return o.a
          .all([
            r({ type: c.b.POST_MESSAGE_TYPE.ACK }),
            o.a
              .try(function() {
                if (!l)
                  throw new Error(
                    'No handler found for post message: ' +
                      t.name +
                      ' from ' +
                      n +
                      ' in ' +
                      window.location.protocol +
                      '//' +
                      window.location.host +
                      window.location.pathname
                  );
                if (!Object(i.v)(l.domain, n)) throw new Error('Request origin ' + n + ' does not match domain ' + l.domain.toString());
                var r = t.data;
                return l.handler({ source: e, origin: n, data: r });
              })
              .then(
                function(e) {
                  return r({ type: c.b.POST_MESSAGE_TYPE.RESPONSE, ack: c.b.POST_MESSAGE_ACK.SUCCESS, data: e });
                },
                function(e) {
                  var n = Object(a.o)(e).replace(/^Error: /, '');
                  return r({ type: c.b.POST_MESSAGE_TYPE.RESPONSE, ack: c.b.POST_MESSAGE_ACK.ERROR, error: n });
                }
              )
          ])
          .then(a.j)
          .catch(function(e) {
            if (l && l.handleError) return l.handleError(e);
            a.i.error(Object(a.o)(e));
          });
      }),
      (r[c.b.POST_MESSAGE_TYPE.RESPONSE] = function(e, n, t) {
        if (!Object(u.f)(t.hash)) {
          var r = Object(u.e)(t.hash);
          if (!r)
            throw new Error(
              'No handler found for post message response for message: ' +
                t.name +
                ' from ' +
                n +
                ' in ' +
                window.location.protocol +
                '//' +
                window.location.host +
                window.location.pathname
            );
          if (!Object(i.v)(r.domain, n)) throw new Error('Response origin ' + n + ' does not match domain ' + r.domain);
          if ((Object(u.c)(t.hash), t.ack === c.b.POST_MESSAGE_ACK.ERROR)) return r.respond(new Error(t.error), null);
          if (t.ack === c.b.POST_MESSAGE_ACK.SUCCESS) {
            var o = t.data || t.response;
            return r.respond(null, { source: e, origin: n, data: o });
          }
        }
      }),
      r);
  },
  './node_modules/post-robot/src/drivers/send/index.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = Object(s.p)(),
        o = Object(s.c)(),
        c = Object(i.f)(window);
      return d({}, n, t, { sourceDomain: c, id: n.id || r, windowType: o });
    }
    function o(e, n, t) {
      return c.a.try(function() {
        var o;
        n = r(e, n, { data: Object(s.n)(e, t, n.data), domain: t });
        var d = void 0;
        if (
          ((d = -1 !== a.c.indexOf(n.name) || n.type === a.b.POST_MESSAGE_TYPE.ACK ? 'debug' : 'error' === n.ack ? 'error' : 'info'),
          s.i.logLevel(d, ['\n\n\t', '#send', n.type.replace(/^postrobot_message_/, ''), '::', n.name, '::', t || a.b.WILDCARD, '\n\n', n]),
          e === window)
        )
          throw new Error('Attemping to send message to self');
        if (Object(i.t)(e)) throw new Error('Window is closed');
        s.i.debug('Running send message strategies', n);
        var l = [],
          f = Object(s.g)(((o = {}), (o[a.b.WINDOW_PROPS.POSTROBOT] = n), o), null, 2);
        return c.a
          .map(Object.keys(u.a), function(n) {
            return c.a
              .try(function() {
                if (!a.a.ALLOWED_POST_MESSAGE_METHODS[n]) throw new Error('Strategy disallowed: ' + n);
                return u.a[n](e, f, t);
              })
              .then(
                function() {
                  return l.push(n + ': success'), !0;
                },
                function(e) {
                  return l.push(n + ': ' + Object(s.o)(e) + '\n'), !1;
                }
              );
          })
          .then(function(e) {
            var t = e.some(Boolean),
              r = n.type + ' ' + n.name + ' ' + (t ? 'success' : 'error') + ':\n  - ' + l.join('\n  - ') + '\n';
            if ((s.i.debug(r), !t)) throw new Error(r);
          });
      });
    }
    n.a = o;
    var i = t('./node_modules/cross-domain-utils/src/index.js'),
      c = t('./node_modules/zalgo-promise/src/index.js'),
      a = t('./node_modules/post-robot/src/conf/index.js'),
      s = t('./node_modules/post-robot/src/lib/index.js'),
      u = t('./node_modules/post-robot/src/drivers/send/strategies.js'),
      d =
        Object.assign ||
        function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        };
  },
  './node_modules/post-robot/src/drivers/send/strategies.js': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return i;
    });
    var r = t('./node_modules/cross-domain-utils/src/index.js'),
      o = t('./node_modules/post-robot/src/conf/index.js'),
      i = {};
    i[o.b.SEND_STRATEGIES.POST_MESSAGE] = function(e, n, t) {
      var i = void 0;
      (i = Array.isArray(t) ? t : t ? [t] : [o.b.WILDCARD]),
        (i = i.map(function(n) {
          if (0 === n.indexOf(o.b.MOCK_PROTOCOL)) {
            if (window.location.protocol === o.b.FILE_PROTOCOL) return o.b.WILDCARD;
            if (!Object(r.l)(e))
              throw new Error('Attempting to send messsage to mock domain ' + n + ', but window is actually cross-domain');
            return Object(r.b)(e);
          }
          return 0 === n.indexOf(o.b.FILE_PROTOCOL) ? o.b.WILDCARD : n;
        })),
        i.forEach(function(t) {
          return e.postMessage(n, t);
        });
    };
  },
  './node_modules/post-robot/src/global.js': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return o;
    });
    var r = t('./node_modules/post-robot/src/conf/index.js'),
      o = (window[r.b.WINDOW_PROPS.POSTROBOT] = window[r.b.WINDOW_PROPS.POSTROBOT] || {});
    o.registerSelf = function() {};
  },
  './node_modules/post-robot/src/index.js': function(e, n, t) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var r = t('./node_modules/post-robot/src/interface.js');
    t.d(n, 'cleanUpWindow', function() {
      return r.cleanUpWindow;
    }),
      t.d(n, 'init', function() {
        return r.init;
      }),
      t.d(n, 'bridge', function() {
        return r.bridge;
      }),
      t.d(n, 'Promise', function() {
        return r.Promise;
      }),
      t.d(n, 'parent', function() {
        return r.parent;
      }),
      t.d(n, 'send', function() {
        return r.send;
      }),
      t.d(n, 'request', function() {
        return r.request;
      }),
      t.d(n, 'sendToParent', function() {
        return r.sendToParent;
      }),
      t.d(n, 'client', function() {
        return r.client;
      }),
      t.d(n, 'on', function() {
        return r.on;
      }),
      t.d(n, 'listen', function() {
        return r.listen;
      }),
      t.d(n, 'once', function() {
        return r.once;
      }),
      t.d(n, 'listener', function() {
        return r.listener;
      }),
      t.d(n, 'CONFIG', function() {
        return r.CONFIG;
      }),
      t.d(n, 'CONSTANTS', function() {
        return r.CONSTANTS;
      }),
      t.d(n, 'disable', function() {
        return r.disable;
      }),
      (n.default = r);
  },
  './node_modules/post-robot/src/interface.js': function(e, n, t) {
    'use strict';
    function r() {
      c.a.initialized || (Object(i.d)(), Object(o.d)(), Object(o.h)()), (c.a.initialized = !0);
    }
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.init = r),
      t.d(n, 'bridge', function() {
        return d;
      });
    var o = t('./node_modules/post-robot/src/lib/index.js'),
      i = t('./node_modules/post-robot/src/drivers/index.js'),
      c = t('./node_modules/post-robot/src/global.js'),
      a = t('./node_modules/post-robot/src/clean.js');
    t.d(n, 'cleanUpWindow', function() {
      return a.a;
    });
    var s = t('./node_modules/post-robot/src/public/index.js');
    t.d(n, 'parent', function() {
      return s.i;
    }),
      t.d(n, 'send', function() {
        return s.k;
      }),
      t.d(n, 'request', function() {
        return s.j;
      }),
      t.d(n, 'sendToParent', function() {
        return s.l;
      }),
      t.d(n, 'client', function() {
        return s.c;
      }),
      t.d(n, 'on', function() {
        return s.g;
      }),
      t.d(n, 'listen', function() {
        return s.e;
      }),
      t.d(n, 'once', function() {
        return s.h;
      }),
      t.d(n, 'listener', function() {
        return s.f;
      }),
      t.d(n, 'CONFIG', function() {
        return s.a;
      }),
      t.d(n, 'CONSTANTS', function() {
        return s.b;
      }),
      t.d(n, 'disable', function() {
        return s.d;
      });
    var u = t('./node_modules/zalgo-promise/src/index.js');
    t.d(n, 'Promise', function() {
      return u.a;
    }),
      r();
    var d = null;
  },
  './node_modules/post-robot/src/lib/index.js': function(e, n, t) {
    'use strict';
    var r = t('./node_modules/post-robot/src/lib/util.js');
    t.d(n, 'a', function() {
      return r.a;
    }),
      t.d(n, 'c', function() {
        return r.b;
      }),
      t.d(n, 'e', function() {
        return r.c;
      }),
      t.d(n, 'f', function() {
        return r.d;
      }),
      t.d(n, 'g', function() {
        return r.e;
      }),
      t.d(n, 'j', function() {
        return r.f;
      }),
      t.d(n, 'l', function() {
        return r.g;
      }),
      t.d(n, 'm', function() {
        return r.i;
      }),
      t.d(n, 'o', function() {
        return r.j;
      }),
      t.d(n, 'p', function() {
        return r.k;
      });
    var o = t('./node_modules/post-robot/src/lib/log.js');
    t.d(n, 'i', function() {
      return o.a;
    });
    var i = t('./node_modules/post-robot/src/lib/serialize.js');
    t.d(n, 'b', function() {
      return i.a;
    }),
      t.d(n, 'h', function() {
        return i.b;
      }),
      t.d(n, 'n', function() {
        return i.c;
      });
    var c = t('./node_modules/post-robot/src/lib/ready.js');
    t.d(n, 'd', function() {
      return c.a;
    }),
      t.d(n, 'k', function() {
        return c.b;
      });
  },
  './node_modules/post-robot/src/lib/log.js': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return a;
    });
    var r = t('./node_modules/post-robot/src/lib/util.js'),
      o = t('./node_modules/post-robot/src/conf/index.js'),
      i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            },
      c = ['debug', 'info', 'warn', 'error'];
    Function.prototype.bind &&
      window.console &&
      'object' === i(console.log) &&
      ['log', 'info', 'warn', 'error'].forEach(function(e) {
        console[e] = this.bind(console[e], console);
      }, Function.prototype.call);
    var a = {
      clearLogs: function() {
        if ((window.console && window.console.clear && window.console.clear(), o.a.LOG_TO_PAGE)) {
          var e = document.getElementById('postRobotLogs');
          e && e.parentNode && e.parentNode.removeChild(e);
        }
      },
      writeToPage: function(e, n) {
        setTimeout(function() {
          var t = document.getElementById('postRobotLogs');
          t ||
            ((t = document.createElement('div')),
            (t.id = 'postRobotLogs'),
            (t.style.cssText = 'width: 800px; font-family: monospace; white-space: pre-wrap;'),
            document.body && document.body.appendChild(t));
          var o = document.createElement('div'),
            i = new Date().toString().split(' ')[4],
            c = Array.prototype.slice
              .call(n)
              .map(function(e) {
                if ('string' == typeof e) return e;
                if (!e) return Object.prototype.toString.call(e);
                var n = void 0;
                try {
                  n = Object(r.e)(e, null, 2);
                } catch (e) {
                  n = '[object]';
                }
                return '\n\n' + n + '\n\n';
              })
              .join(' '),
            a = i + ' ' + e + ' ' + c;
          o.innerHTML = a;
          var s = { log: '#ddd', warn: 'orange', error: 'red', info: 'blue', debug: '#aaa' }[e];
          (o.style.cssText = 'margin-top: 10px; color: ' + s + ';'),
            t.childNodes.length ? t.insertBefore(o, t.childNodes[0]) : t.appendChild(o);
        });
      },
      logLevel: function(e, n) {
        setTimeout(function() {
          try {
            var t = window.LOG_LEVEL || o.a.LOG_LEVEL;
            if (c.indexOf(e) < c.indexOf(t)) return;
            if (
              ((n = Array.prototype.slice.call(n)),
              n.unshift('' + window.location.host + window.location.pathname),
              n.unshift('::'),
              n.unshift('' + Object(r.b)().toLowerCase()),
              n.unshift('[post-robot]'),
              o.a.LOG_TO_PAGE && a.writeToPage(e, n),
              !window.console)
            )
              return;
            if ((window.console[e] || (e = 'log'), !window.console[e])) return;
            window.console[e].apply(window.console, n);
          } catch (e) {}
        }, 1);
      },
      debug: function() {
        for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        a.logLevel('debug', n);
      },
      info: function() {
        for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        a.logLevel('info', n);
      },
      warn: function() {
        for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        a.logLevel('warn', n);
      },
      error: function() {
        for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        a.logLevel('error', n);
      }
    };
  },
  './node_modules/post-robot/src/lib/ready.js': function(e, n, t) {
    'use strict';
    function r() {
      Object(u.on)(s.b.POST_MESSAGE_NAMES.READY, { domain: s.b.WILDCARD }, function(e) {
        var n = e.source,
          t = l.a.readyPromises.get(n);
        t ? t.resolve(e) : ((t = new a.a().resolve(e)), l.a.readyPromises.set(n, t));
      });
      var e = Object(c.d)();
      e &&
        Object(u.send)(e, s.b.POST_MESSAGE_NAMES.READY, {}, { domain: s.b.WILDCARD, timeout: 1 / 0 }).catch(function(e) {
          d.a.debug(Object(f.j)(e));
        });
    }
    function o(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3,
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'Window',
        r = l.a.readyPromises.get(e);
      return (
        r ||
        ((r = new a.a()),
        l.a.readyPromises.set(e, r),
        setTimeout(function() {
          return r.reject(new Error(t + ' did not load after ' + n + 'ms'));
        }, n),
        r)
      );
    }
    (n.a = r), (n.b = o);
    var i = t('./node_modules/cross-domain-safe-weakmap/src/index.js'),
      c = t('./node_modules/cross-domain-utils/src/index.js'),
      a = t('./node_modules/zalgo-promise/src/index.js'),
      s = t('./node_modules/post-robot/src/conf/index.js'),
      u = t('./node_modules/post-robot/src/interface.js'),
      d = t('./node_modules/post-robot/src/lib/log.js'),
      l = t('./node_modules/post-robot/src/global.js'),
      f = t('./node_modules/post-robot/src/lib/util.js');
    l.a.readyPromises = l.a.readyPromises || new i.a();
  },
  './node_modules/post-robot/src/lib/serialize.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      return 'object' === (void 0 === e ? 'undefined' : _(e)) && null !== e && e.__type__ === n;
    }
    function o(e, n, t, r) {
      var o = Object(g.k)(),
        i = O.a.methods.get(e);
      return (
        i || ((i = {}), O.a.methods.set(e, i)),
        (i[o] = { domain: n, method: t }),
        { __type__: w.b.SERIALIZATION_TYPES.METHOD, __id__: o, __name__: r }
      );
    }
    function i(e) {
      return { __type__: w.b.SERIALIZATION_TYPES.ERROR, __message__: Object(g.j)(e) };
    }
    function c(e, n, t, r) {
      return {
        __type__: w.b.SERIALIZATION_TYPES.PROMISE,
        __then__: o(
          e,
          n,
          function(e, n) {
            return t.then(e, n);
          },
          r + '.then'
        )
      };
    }
    function a(e, n, t, r) {
      return {
        __type__: w.b.SERIALIZATION_TYPES.ZALGO_PROMISE,
        __then__: o(
          e,
          n,
          function(e, n) {
            return t.then(e, n);
          },
          r + '.then'
        )
      };
    }
    function s(e) {
      return { __type__: w.b.SERIALIZATION_TYPES.REGEX, __source__: e.source };
    }
    function u(e, n, t) {
      return Object(g.h)({ obj: t }, function(t, r) {
        return 'function' == typeof t
          ? o(e, n, t, r.toString())
          : t instanceof Error
            ? i(t)
            : window.Promise && t instanceof window.Promise
              ? c(e, n, t, r.toString())
              : v.a.isPromise(t)
                ? a(e, n, t, r.toString())
                : Object(g.c)(t)
                  ? s(t)
                  : void 0;
      }).obj;
    }
    function d(e, n, t) {
      function r() {
        var r = Array.prototype.slice.call(arguments);
        return (
          E.a.debug('Call foreign method', t.__name__, r),
          Object(j.send)(e, w.b.POST_MESSAGE_NAMES.METHOD, { id: t.__id__, name: t.__name__, args: r }, { domain: n, timeout: 1 / 0 }).then(
            function(e) {
              var n = e.data;
              return E.a.debug('Got foreign method result', t.__name__, n.result), n.result;
            },
            function(e) {
              throw (E.a.debug('Got foreign method error', Object(g.j)(e)), e);
            }
          )
        );
      }
      return (r.__name__ = t.__name__), (r.__xdomain__ = !0), (r.source = e), (r.origin = n), r;
    }
    function l(e, n, t) {
      return new Error(t.__message__);
    }
    function f(e, n, t) {
      return new v.a(function(r, o) {
        return d(e, n, t.__then__)(r, o);
      });
    }
    function p(e, n, t) {
      return window.Promise
        ? new window.Promise(function(r, o) {
            return d(e, n, t.__then__)(r, o);
          })
        : f(e, n, t);
    }
    function m(e, n, t) {
      return new RegExp(t.__source__);
    }
    function h(e, n, t) {
      return Object(g.h)({ obj: t }, function(t, o) {
        if ('object' === (void 0 === t ? 'undefined' : _(t)) && null !== t)
          return r(t, w.b.SERIALIZATION_TYPES.METHOD)
            ? d(e, n, t)
            : r(t, w.b.SERIALIZATION_TYPES.ERROR)
              ? l(e, n, t)
              : r(t, w.b.SERIALIZATION_TYPES.PROMISE)
                ? p(e, n, t)
                : r(t, w.b.SERIALIZATION_TYPES.ZALGO_PROMISE)
                  ? f(e, n, t)
                  : r(t, w.b.SERIALIZATION_TYPES.REGEX)
                    ? m(e, n, t)
                    : void 0;
      }).obj;
    }
    t.d(n, 'b', function() {
      return S;
    }),
      (n.c = u),
      (n.a = h);
    var b = t('./node_modules/cross-domain-safe-weakmap/src/index.js'),
      y = t('./node_modules/cross-domain-utils/src/index.js'),
      v = t('./node_modules/zalgo-promise/src/index.js'),
      w = t('./node_modules/post-robot/src/conf/index.js'),
      g = t('./node_modules/post-robot/src/lib/util.js'),
      j = t('./node_modules/post-robot/src/interface.js'),
      E = t('./node_modules/post-robot/src/lib/log.js'),
      O = t('./node_modules/post-robot/src/global.js'),
      _ =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            };
    O.a.methods = O.a.methods || new b.a();
    var S = Object(g.g)(function() {
      Object(j.on)(w.b.POST_MESSAGE_NAMES.METHOD, { origin: w.b.WILDCARD }, function(e) {
        var n = e.source,
          t = e.origin,
          r = e.data,
          o = O.a.methods.get(n);
        if (!o) throw new Error('Could not find any methods this window has privileges to call');
        var i = o[r.id];
        if (!i) throw new Error('Could not find method with id: ' + r.id);
        if (!Object(y.v)(i.domain, t)) throw new Error('Method domain ' + i.domain + ' does not match origin ' + t);
        return (
          E.a.debug('Call local method', r.name, r.args),
          v.a
            .try(function() {
              return i.method.apply({ source: n, origin: t, data: r }, r.args);
            })
            .then(function(e) {
              return { result: e, id: r.id, name: r.name };
            })
        );
      });
    });
  },
  './node_modules/post-robot/src/lib/util.js': function(e, n, t) {
    'use strict';
    function r(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (n >= 3) return 'stringifyError stack overflow';
      try {
        if (!e) return '<unknown error: ' + Object.prototype.toString.call(e) + '>';
        if ('string' == typeof e) return e;
        if (e instanceof Error) {
          var t = e && e.stack,
            o = e && e.message;
          if (t && o) return -1 !== t.indexOf(o) ? t : o + '\n' + t;
          if (t) return t;
          if (o) return o;
        }
        return 'function' == typeof e.toString ? e.toString() : Object.prototype.toString.call(e);
      } catch (e) {
        return 'Error while stringifying error: ' + r(e, n + 1);
      }
    }
    function o() {}
    function i(e, n, t) {
      return (
        e.addEventListener ? e.addEventListener(n, t) : e.attachEvent('on' + n, t),
        {
          cancel: function() {
            e.removeEventListener ? e.removeEventListener(n, t) : e.detachEvent('on' + n, t);
          }
        }
      );
    }
    function c() {
      var e = '0123456789abcdef';
      return 'xxxxxxxxxx'.replace(/./g, function() {
        return e.charAt(Math.floor(Math.random() * e.length));
      });
    }
    function a(e, n) {
      for (var t = 0; t < e.length; t++) n(e[t], t);
    }
    function s(e, n) {
      for (var t in e) e.hasOwnProperty(t) && n(e[t], t);
    }
    function u(e, n) {
      Array.isArray(e) ? a(e, n) : 'object' === (void 0 === e ? 'undefined' : v(e)) && null !== e && s(e, n);
    }
    function d(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      if (t >= 100) throw new Error('Self-referential object passed, or object contained too many layers');
      var r = void 0;
      if ('object' !== (void 0 === e ? 'undefined' : v(e)) || null === e || Array.isArray(e)) {
        if (!Array.isArray(e)) throw new Error('Invalid type: ' + (void 0 === e ? 'undefined' : v(e)));
        r = [];
      } else r = {};
      return (
        u(e, function(e, o) {
          var i = n(e, o);
          void 0 !== i ? (r[o] = i) : 'object' === (void 0 === e ? 'undefined' : v(e)) && null !== e ? (r[o] = d(e, n, t + 1)) : (r[o] = e);
        }),
        r
      );
    }
    function l(e, n) {
      function t() {
        (r = setTimeout(t, n)), e.call();
      }
      var r = void 0;
      return (
        (r = setTimeout(t, n)),
        {
          cancel: function() {
            clearTimeout(r);
          }
        }
      );
    }
    function f(e) {
      return '[object RegExp]' === Object.prototype.toString.call(e);
    }
    function p() {
      return Object(b.o)() ? y.b.WINDOW_TYPES.POPUP : Object(b.n)() ? y.b.WINDOW_TYPES.IFRAME : y.b.WINDOW_TYPES.FULLPAGE;
    }
    function m(e, n, t) {
      var r = void 0,
        o = void 0;
      try {
        if (('{}' !== JSON.stringify({}) && ((r = Object.prototype.toJSON), delete Object.prototype.toJSON), '{}' !== JSON.stringify({})))
          throw new Error('Can not correctly serialize JSON objects');
        if (('[]' !== JSON.stringify([]) && ((o = Array.prototype.toJSON), delete Array.prototype.toJSON), '[]' !== JSON.stringify([])))
          throw new Error('Can not correctly serialize JSON objects');
      } catch (e) {
        throw new Error('Can not repair JSON.stringify: ' + e.message);
      }
      var i = JSON.stringify.call(this, e, n, t);
      try {
        r && (Object.prototype.toJSON = r), o && (Array.prototype.toJSON = o);
      } catch (e) {
        throw new Error('Can not repair JSON.stringify: ' + e.message);
      }
      return i;
    }
    function h(e) {
      return JSON.parse(e);
    }
    (n.j = r),
      t.d(n, 'g', function() {
        return w;
      }),
      (n.f = o),
      (n.a = i),
      (n.k = c),
      (n.h = d),
      (n.i = l),
      (n.c = f),
      (n.b = p),
      (n.e = m),
      (n.d = h);
    var b = (t('./node_modules/cross-domain-safe-weakmap/src/index.js'), t('./node_modules/cross-domain-utils/src/index.js')),
      y = t('./node_modules/post-robot/src/conf/index.js'),
      v =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            },
      w = function(e) {
        if (!e) return e;
        var n = !1;
        return function() {
          if (!n) return (n = !0), e.apply(this, arguments);
        };
      };
  },
  './node_modules/post-robot/src/public/client.js': function(e, n, t) {
    'use strict';
    function r(e) {
      return s.a.try(function() {
        if (!e.name) throw new Error('Expected options.name');
        var n = e.name,
          t = void 0,
          r = void 0;
        if ('string' == typeof e.window) {
          var o = document.getElementById(e.window);
          if (!o) throw new Error('Expected options.window ' + Object.prototype.toString.call(e.window) + ' to be a valid element id');
          if ('iframe' !== o.tagName.toLowerCase())
            throw new Error('Expected options.window ' + Object.prototype.toString.call(e.window) + ' to be an iframe');
          if (!o.contentWindow) throw new Error('Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.');
          t = o.contentWindow;
        } else if (e.window instanceof HTMLIFrameElement) {
          if ('iframe' !== e.window.tagName.toLowerCase())
            throw new Error('Expected options.window ' + Object.prototype.toString.call(e.window) + ' to be an iframe');
          if (e.window && !e.window.contentWindow)
            throw new Error('Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.');
          e.window && e.window.contentWindow && (t = e.window.contentWindow);
        } else t = e.window;
        if (!t) throw new Error('Expected options.window to be a window object, iframe, or iframe element id.');
        var i = t;
        r = e.domain || d.b.WILDCARD;
        var c = e.name + '_' + Object(f.p)();
        if (Object(u.t)(i)) throw new Error('Target window is closed');
        var a = !1,
          m = p.a.requestPromises.get(i);
        m || ((m = []), p.a.requestPromises.set(i, m));
        var h = s.a
          .try(function() {
            if (Object(u.m)(window, i)) return s.a.resolve(Object(f.k)(i));
          })
          .then(function() {
            return new s.a(function(t, o) {
              var s = void 0;
              if (
                (e.fireAndForget ||
                  ((s = {
                    name: n,
                    window: i,
                    domain: r,
                    respond: function(e, n) {
                      e || ((a = !0), m.splice(m.indexOf(h, 1))), e ? o(e) : t(n);
                    }
                  }),
                  Object(l.b)(c, s)),
                Object(l.g)(
                  i,
                  { type: d.b.POST_MESSAGE_TYPE.REQUEST, hash: c, name: n, data: e.data, fireAndForget: e.fireAndForget },
                  r
                ).catch(o),
                e.fireAndForget)
              )
                return t();
              var f = d.a.ACK_TIMEOUT,
                p = e.timeout || d.a.RES_TIMEOUT,
                b = 100,
                y = function t() {
                  if (!a) {
                    if (Object(u.t)(i))
                      return o(
                        s.ack
                          ? new Error('Window closed for ' + n + ' before response')
                          : new Error('Window closed for ' + n + ' before ack')
                      );
                    (f -= b), (p -= b);
                    if (s.ack) {
                      if (p === 1 / 0) return;
                      b = Math.min(p, 2e3);
                    } else {
                      if (f <= 0)
                        return o(new Error('No ack for postMessage ' + n + ' in ' + Object(u.f)() + ' in ' + d.a.ACK_TIMEOUT + 'ms'));
                      if (p <= 0)
                        return o(
                          new Error(
                            'No response for postMessage ' + n + ' in ' + Object(u.f)() + ' in ' + (e.timeout || d.a.RES_TIMEOUT) + 'ms'
                          )
                        );
                    }
                    setTimeout(t, b);
                  }
                };
              setTimeout(y, b);
            });
          });
        return (
          h.catch(function() {
            Object(l.e)(c), Object(l.c)(c);
          }),
          m.push(h),
          h
        );
      });
    }
    function o(e, n, t, o) {
      return (o = o || {}), (o.window = e), (o.name = n), (o.data = t), r(o);
    }
    function i(e, n, t) {
      var r = Object(u.d)();
      return r
        ? o(r, e, n, t)
        : new s.a(function(e, n) {
            return n(new Error('Window does not have a parent'));
          });
    }
    function c() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (!e.window) throw new Error('Expected options.window');
      var n = e.window;
      return {
        send: function(t, r) {
          return o(n, t, r, e);
        }
      };
    }
    t.d(n, 'c', function() {
      return o;
    }),
      (n.b = r),
      (n.d = i),
      (n.a = c);
    var a = t('./node_modules/cross-domain-safe-weakmap/src/index.js'),
      s = t('./node_modules/zalgo-promise/src/index.js'),
      u = t('./node_modules/cross-domain-utils/src/index.js'),
      d = t('./node_modules/post-robot/src/conf/index.js'),
      l = t('./node_modules/post-robot/src/drivers/index.js'),
      f = t('./node_modules/post-robot/src/lib/index.js'),
      p = t('./node_modules/post-robot/src/global.js');
    p.a.requestPromises = p.a.requestPromises || new a.a();
  },
  './node_modules/post-robot/src/public/config.js': function(e, n, t) {
    'use strict';
    function r() {
      delete window[o.b.WINDOW_PROPS.POSTROBOT], window.removeEventListener('message', i.f);
    }
    n.c = r;
    var o = t('./node_modules/post-robot/src/conf/index.js'),
      i = t('./node_modules/post-robot/src/drivers/index.js');
    t.d(n, 'a', function() {
      return o.a;
    }),
      t.d(n, 'b', function() {
        return o.b;
      });
  },
  './node_modules/post-robot/src/public/index.js': function(e, n, t) {
    'use strict';
    t.d(n, 'i', function() {
      return a;
    });
    var r = t('./node_modules/cross-domain-utils/src/index.js'),
      o = t('./node_modules/post-robot/src/public/client.js');
    t.d(n, 'c', function() {
      return o.a;
    }),
      t.d(n, 'j', function() {
        return o.b;
      }),
      t.d(n, 'k', function() {
        return o.c;
      }),
      t.d(n, 'l', function() {
        return o.d;
      });
    var i = t('./node_modules/post-robot/src/public/server.js');
    t.d(n, 'e', function() {
      return i.a;
    }),
      t.d(n, 'f', function() {
        return i.b;
      }),
      t.d(n, 'g', function() {
        return i.c;
      }),
      t.d(n, 'h', function() {
        return i.d;
      });
    var c = t('./node_modules/post-robot/src/public/config.js');
    t.d(n, 'a', function() {
      return c.a;
    }),
      t.d(n, 'b', function() {
        return c.b;
      }),
      t.d(n, 'd', function() {
        return c.c;
      });
    var a = Object(r.d)();
  },
  './node_modules/post-robot/src/public/server.js': function(e, n, t) {
    'use strict';
    function r(e) {
      if (!e.name) throw new Error('Expected options.name');
      if (!e.handler) throw new Error('Expected options.handler');
      var n = e.name,
        t = e.window,
        r = e.domain,
        o = {
          handler: e.handler,
          handleError:
            e.errorHandler ||
            function(e) {
              throw e;
            },
          window: t,
          domain: r || l.b.WILDCARD,
          name: n
        },
        i = Object(d.a)({ name: n, win: t, domain: r }, o);
      if (e.once) {
        var c = o.handler;
        o.handler = Object(u.l)(function() {
          return i.cancel(), c.apply(this, arguments);
        });
      }
      if (o.window && e.errorOnClose)
        var s = Object(u.m)(function() {
          t &&
            'object' === (void 0 === t ? 'undefined' : f(t)) &&
            Object(a.t)(t) &&
            (s.cancel(), o.handleError(new Error('Post message target window is closed')));
        }, 50);
      return {
        cancel: function() {
          i.cancel();
        }
      };
    }
    function o(e, n, t) {
      return 'function' == typeof n && ((t = n), (n = {})), (n = n || {}), (n.name = e), (n.handler = t || n.handler), r(n);
    }
    function i(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = arguments[2];
      'function' == typeof n && ((t = n), (n = {})), (n = n || {}), (t = t || n.handler);
      var o = n.errorHandler,
        i = new s.a(function(r, i) {
          (n = n || {}),
            (n.name = e),
            (n.once = !0),
            (n.handler = function(e) {
              if ((r(e), t)) return t(e);
            }),
            (n.errorHandler = function(e) {
              if ((i(e), o)) return o(e);
            });
        }),
        c = r(n);
      return (i.cancel = c.cancel), i;
    }
    function c() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return {
        on: function(n, t) {
          return o(n, e, t);
        }
      };
    }
    t.d(n, 'c', function() {
      return o;
    }),
      (n.a = r),
      (n.d = i),
      (n.b = c);
    var a = t('./node_modules/cross-domain-utils/src/index.js'),
      s = t('./node_modules/zalgo-promise/src/index.js'),
      u = t('./node_modules/post-robot/src/lib/index.js'),
      d = t('./node_modules/post-robot/src/drivers/index.js'),
      l = t('./node_modules/post-robot/src/conf/index.js'),
      f =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            };
  },
  './node_modules/webpack/buildin/global.js': function(e, n) {
    var t,
      r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            };
    t = (function() {
      return this;
    })();
    try {
      t = t || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' === ('undefined' == typeof window ? 'undefined' : r(window)) && (t = window);
    }
    e.exports = t;
  },
  './node_modules/xcomponent/src/component/base.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
    }
    function o(e) {
      var n = [],
        t = !1;
      return {
        set: function(n, r) {
          return t
            ? r
            : ((e[n] = r),
              this.register(function() {
                delete e[n];
              }),
              r);
        },
        register: function(e, r) {
          if (('function' == typeof e && ((r = e), (e = '<anonymous-cleanup-handler>')), 'function' != typeof r))
            throw new Error('Expected to be passed function to clean.register');
          if (t) return void r();
          n.push({
            complete: !1,
            name: e,
            run: function() {
              this.complete || ((this.complete = !0), r && r());
            }
          });
        },
        hasTasks: function() {
          return Boolean(
            n.filter(function(e) {
              return !e.complete;
            }).length
          );
        },
        all: function() {
          var e = [];
          for (t = !0; n.length; ) e.push(n.pop().run());
          return i.a.all(e).then(function() {});
        },
        run: function(e) {
          for (var t = [], r = n, o = Array.isArray(r), c = 0, r = o ? r : r[Symbol.iterator](); ; ) {
            var a;
            if (o) {
              if (c >= r.length) break;
              a = r[c++];
            } else {
              if (((c = r.next()), c.done)) break;
              a = c.value;
            }
            var s = a;
            s.name === e && t.push(s.run());
          }
          return i.a.all(t).then(function() {});
        }
      };
    }
    t.d(n, 'a', function() {
      return s;
    });
    var i = t('./node_modules/zalgo-promise/src/index.js'),
      c = t('./node_modules/post-robot/src/index.js'),
      a = t('./node_modules/xcomponent/src/lib/index.js'),
      s = (t('./node_modules/xcomponent/src/component/component/index.js'),
      (function() {
        function e() {
          r(this, e), (this.clean = o(this)), (this.event = Object(a.s)());
        }
        return (
          (e.prototype.addProp = function(e, n, t) {
            Object(a.g)(e, this, n, t);
          }),
          (e.prototype.on = function(e, n) {
            return this.event.on(e, n);
          }),
          (e.prototype.listeners = function() {
            throw new Error('Expected listeners to be implemented');
          }),
          (e.prototype.error = function(e) {
            throw new Error('Expected error to be implemented - got ' + Object(a.V)(e));
          }),
          (e.prototype.listen = function(e, n) {
            var t = this;
            if (!e) throw this.component.createError('window to listen to not set');
            if (!n) throw new Error('Must pass domain to listen to');
            if (this.listeners)
              for (var r = this.listeners(), o = Object.keys(r), i = Array.isArray(o), a = 0, o = i ? o : o[Symbol.iterator](); ; ) {
                var s,
                  u = (function() {
                    if (i) {
                      if (a >= o.length) return 'break';
                      s = o[a++];
                    } else {
                      if (((a = o.next()), a.done)) return 'break';
                      s = a.value;
                    }
                    var u = s,
                      d = u.replace(/^xcomponent_/, ''),
                      l = Object(c.on)(
                        u,
                        {
                          window: e,
                          domain: n,
                          errorHandler: function(e) {
                            t.error(e);
                          }
                        },
                        function(e) {
                          var n = e.source,
                            o = e.data;
                          return t.component.log('listener_' + d), r[u].call(t, n, o);
                        }
                      ),
                      f = Object(c.on)(
                        u,
                        {
                          window: e,
                          errorHandler: function(e) {
                            t.error(e);
                          }
                        },
                        function(e) {
                          var r = e.origin;
                          e.data;
                          t.component.logError('unexpected_listener_' + d, { origin: r, domain: n.toString() }),
                            t.error(
                              new Error('Unexpected ' + d + ' message from domain ' + r + ' -- expected message from ' + n.toString())
                            );
                        }
                      );
                    t.clean.register(function() {
                      l.cancel(), f.cancel();
                    });
                  })();
                if ('break' === u) break;
              }
          }),
          e
        );
      })());
  },
  './node_modules/xcomponent/src/component/child/index.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
    }
    function o(e, n) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !n || ('object' != typeof n && 'function' != typeof n) ? e : n;
    }
    function i(e, n) {
      if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function, not ' + typeof n);
      (e.prototype = Object.create(n && n.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
    }
    t.d(n, 'a', function() {
      return v;
    });
    var c = t('./node_modules/beaver-logger/client/index.js'),
      a = t('./node_modules/cross-domain-utils/src/index.js'),
      s = t('./node_modules/post-robot/src/index.js'),
      u = t('./node_modules/zalgo-promise/src/index.js'),
      d = t('./node_modules/xcomponent/src/component/base.js'),
      l = t('./node_modules/xcomponent/src/component/window.js'),
      f = t('./node_modules/xcomponent/src/lib/index.js'),
      p = t('./node_modules/xcomponent/src/constants.js'),
      m = t('./node_modules/xcomponent/src/component/child/props.js'),
      h = t('./node_modules/xcomponent/src/error.js'),
      b = (t('./node_modules/xcomponent/src/component/component/index.js'),
      t('./node_modules/xcomponent/src/component/component/props.js'),
      Object.assign ||
        function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      y =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            },
      v = (function(e) {
        function n(t) {
          r(this, n);
          var i = o(this, e.call(this));
          return (
            (i.component = t),
            i.hasValidParentDomain()
              ? (i.sendLogsToOpener(),
                i.component.log('construct_child'),
                (i.onPropHandlers = []),
                i.setProps(i.getInitialProps(), Object(l.d)()),
                i.props.logLevel && Object(f.Q)(i.props.logLevel),
                i.component.log('init_child'),
                i.setWindows(),
                i.listenForResize(),
                (i.onInit = i
                  .sendToParent(p.POST_MESSAGE.INIT, { exports: i.exports() })
                  .then(function(e) {
                    var n = e.origin,
                      t = e.data;
                    return (i.context = t.context), i.setProps(t.props, n), i.watchForResize(), i;
                  })
                  .catch(function(e) {
                    throw (i.error(e), e);
                  })),
                i)
              : (i.error(new h.c('Can not be rendered by domain: ' + i.getParentDomain())), o(i))
          );
        }
        return (
          i(n, e),
          (n.prototype.listenForResize = function() {
            var e = this;
            window.addEventListener('resize', function() {
              e.sendToParent(p.POST_MESSAGE.ONRESIZE, {}, { fireAndForget: !0 });
            });
          }),
          (n.prototype.hasValidParentDomain = function() {
            return Object(a.v)(this.component.allowedParentDomains, this.getParentDomain());
          }),
          (n.prototype.init = function() {
            return this.onInit;
          }),
          (n.prototype.getParentDomain = function() {
            return Object(l.d)();
          }),
          (n.prototype.onProps = function(e) {
            this.onPropHandlers.push(e);
          }),
          (n.prototype.getParentComponentWindow = function() {
            return Object(l.c)();
          }),
          (n.prototype.getParentRenderWindow = function() {
            return Object(l.e)();
          }),
          (n.prototype.getInitialProps = function() {
            var e = this,
              n = Object(l.b)(),
              t = n.props;
            if (t.type === p.INITIAL_PROPS.RAW) t = t.value;
            else {
              if (t.type !== p.INITIAL_PROPS.UID) throw new Error('Unrecognized props type: ' + t.type);
              var r = Object(l.c)();
              if (!Object(a.p)(r)) {
                if ('file:' === window.location.protocol) throw new Error('Can not get props from file:// domain');
                throw new Error(
                  'Parent component window is on a different domain - expected ' + Object(a.f)() + ' - can not retrieve props'
                );
              }
              var o = Object(f.z)(r);
              if (!o) throw new Error('Can not find global for parent component - can not retrieve props');
              t = o.props[n.uid];
            }
            if (!t) throw new Error('Initial props not found');
            return Object(f.k)(t, function(n) {
              var t = n.fullKey,
                r = n.self,
                o = n.args;
              return e.onInit.then(function() {
                var n = Object(f.v)(e.props, t);
                if ('function' != typeof n) throw new Error('Expected ' + (void 0 === n ? 'undefined' : y(n)) + ' to be function');
                return n.apply(r, o);
              });
            });
          }),
          (n.prototype.setProps = function(e, n) {
            var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            this.props = this.props || {};
            var r = Object(m.a)(this.component, e, n, t);
            Object(f.t)(this.props, r), (window.xprops = this.props);
            for (var o = this.onPropHandlers, i = Array.isArray(o), c = 0, o = i ? o : o[Symbol.iterator](); ; ) {
              var a;
              if (i) {
                if (c >= o.length) break;
                a = o[c++];
              } else {
                if (((c = o.next()), c.done)) break;
                a = c.value;
              }
              a.call(this, this.props);
            }
          }),
          (n.prototype.sendToParent = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = Object(l.c)();
            if (!r) throw new Error('Can not find parent component window to message');
            return this.component.log('send_to_parent_' + e), Object(s.send)(r, e, n, b({ domain: Object(l.d)() }, t));
          }),
          (n.prototype.setWindows = function() {
            if (window.__activeXComponent__) throw this.component.createError('Can not attach multiple components to the same window');
            if (((window.__activeXComponent__ = this), !Object(l.c)())) throw this.component.createError('Can not find parent window');
            var e = Object(l.b)();
            if (e.tag !== this.component.tag)
              throw this.component.createError('Parent is ' + e.tag + ' - can not attach ' + this.component.tag);
            this.watchForClose();
          }),
          (n.prototype.sendLogsToOpener = function() {}),
          (n.prototype.watchForClose = function() {
            var e = this;
            window.addEventListener('unload', function() {
              return e.checkClose();
            });
          }),
          (n.prototype.enableAutoResize = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = e.width,
              t = void 0 === n || n,
              r = e.height,
              o = void 0 === r || r;
            (this.autoResize = { width: t, height: o }), this.watchForResize();
          }),
          (n.prototype.getAutoResize = function() {
            var e = !1,
              n = !1,
              t = this.autoResize || this.component.autoResize;
            'object' === (void 0 === t ? 'undefined' : y(t))
              ? ((e = Boolean(t.width)), (n = Boolean(t.height)))
              : t && ((e = !0), (n = !0));
            var r = void 0;
            return (
              (r = t.element
                ? Object(f.x)(t.element)
                : window.navigator.userAgent.match(/MSIE (9|10)\./)
                  ? document.body
                  : document.documentElement),
              { width: e, height: n, element: r }
            );
          }),
          (n.prototype.watchForResize = function() {
            var e = this,
              n = this.getAutoResize(),
              t = n.width,
              r = n.height,
              o = n.element;
            if ((t || r) && this.context !== p.CONTEXT_TYPES.POPUP && !this.watchingForResize)
              return (
                (this.watchingForResize = !0),
                u.a
                  .try(function() {
                    return f.n;
                  })
                  .then(function() {
                    if (!Object(f.m)(o, { width: t, height: r })) return e.resizeToElement(o, { width: t, height: r });
                  })
                  .then(function() {
                    return Object(f.h)(function() {
                      return Object(f.J)(o, { width: t, height: r }).then(function(n) {
                        return e.resizeToElement(o, { width: t, height: r });
                      });
                    });
                  })
              );
          }),
          (n.prototype.exports = function() {
            var e = this;
            return {
              updateProps: function(n) {
                var t = this;
                return u.a.try(function() {
                  return e.setProps(n, t.origin, !1);
                });
              },
              close: function() {
                return u.a.try(function() {
                  return e.destroy();
                });
              }
            };
          }),
          (n.prototype.resize = function(e, n) {
            var t = this;
            return u.a.resolve().then(function() {
              if ((t.component.log('resize', { width: Object(f.U)(e), height: Object(f.U)(n) }), t.context !== p.CONTEXT_TYPES.POPUP))
                return t.sendToParent(p.POST_MESSAGE.RESIZE, { width: e, height: n }).then(f.I);
            });
          }),
          (n.prototype.resizeToElement = function(e, n) {
            var t = this,
              r = n.width,
              o = n.height,
              i = [];
            return (function n() {
              return u.a.try(function() {
                for (
                  var c = Object(f.X)(e, { width: r, height: o }),
                    a = c.check(),
                    s = a.dimensions,
                    u = i,
                    d = Array.isArray(u),
                    l = 0,
                    u = d ? u : u[Symbol.iterator]();
                  ;

                ) {
                  var p;
                  if (d) {
                    if (l >= u.length) break;
                    p = u[l++];
                  } else {
                    if (((l = u.next()), l.done)) break;
                    p = l.value;
                  }
                  var m = p,
                    h = !r || m.width === s.width,
                    b = !o || m.height === s.height;
                  if (h && b) return;
                }
                return (
                  i.push({ width: s.width, height: s.height }),
                  t.resize(r ? s.width : null, o ? s.height : null).then(function() {
                    if (c.check().changed) return n();
                  })
                );
              });
            })();
          }),
          (n.prototype.hide = function() {
            return this.sendToParent(p.POST_MESSAGE.HIDE).then(f.I);
          }),
          (n.prototype.show = function() {
            return this.sendToParent(p.POST_MESSAGE.SHOW).then(f.I);
          }),
          (n.prototype.userClose = function() {
            return this.close(p.CLOSE_REASONS.USER_CLOSED);
          }),
          (n.prototype.close = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.CLOSE_REASONS.CHILD_CALL;
            this.component.log('close_child'), this.sendToParent(p.POST_MESSAGE.CLOSE, { reason: e });
          }),
          (n.prototype.checkClose = function() {
            this.sendToParent(p.POST_MESSAGE.CHECK_CLOSE, {}, { fireAndForget: !0 });
          }),
          (n.prototype.destroy = function() {
            c.c().then(function() {
              window.close();
            });
          }),
          (n.prototype.focus = function() {
            this.component.log('focus'), window.focus();
          }),
          (n.prototype.error = function(e) {
            var n = Object(f.V)(e);
            return this.component.logError('error', { error: n }), this.sendToParent(p.POST_MESSAGE.ERROR, { error: n }).then(f.I);
          }),
          n
        );
      })(d.a);
  },
  './node_modules/xcomponent/src/component/child/props.js': function(e, n, t) {
    'use strict';
    function r(e, n, t, r) {
      var o = e.getProp(t);
      if (!o) {
        if (e.looseProps) return r;
        throw new Error('Unrecognized prop: ' + t);
      }
      return 'function' == typeof o.childDecorate && (r = o.childDecorate(r)), r;
    }
    function o(e, n, t) {
      for (
        var o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          c = {},
          a = Object.keys(n),
          s = Array.isArray(a),
          u = 0,
          a = s ? a : a[Symbol.iterator]();
        ;

      ) {
        var d;
        if (s) {
          if (u >= a.length) break;
          d = a[u++];
        } else {
          if (((u = a.next()), u.done)) break;
          d = u.value;
        }
        var l = d,
          f = e.getProp(l),
          p = n[l];
        (f && f.sameDomain && t !== Object(i.f)(window)) || ((c[l] = r(e, n, l, p)), f && f.alias && !c[f.alias] && (c[f.alias] = p));
      }
      if (o)
        for (var m = e.getPropNames(), h = Array.isArray(m), b = 0, m = h ? m : m[Symbol.iterator](); ; ) {
          var y;
          if (h) {
            if (b >= m.length) break;
            y = m[b++];
          } else {
            if (((b = m.next()), b.done)) break;
            y = b.value;
          }
          var v = y;
          n.hasOwnProperty(v) || (c[v] = r(e, n, v, n[v]));
        }
      return c;
    }
    n.a = o;
    var i = t('./node_modules/cross-domain-utils/src/index.js');
    t('./node_modules/xcomponent/src/component/component/index.js'), t('./node_modules/xcomponent/src/component/component/props.js');
  },
  './node_modules/xcomponent/src/component/component/index.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
    }
    function o(e, n) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !n || ('object' != typeof n && 'function' != typeof n) ? e : n;
    }
    function i(e, n) {
      if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function, not ' + typeof n);
      (e.prototype = Object.create(n && n.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
    }
    t.d(n, 'a', function() {
      return E;
    });
    var c,
      a = t('./node_modules/post-robot/src/index.js'),
      s = t('./node_modules/zalgo-promise/src/index.js'),
      u = t('./node_modules/cross-domain-utils/src/index.js'),
      d = t('./node_modules/xcomponent/src/component/base.js'),
      l = t('./node_modules/xcomponent/src/component/child/index.js'),
      f = t('./node_modules/xcomponent/src/component/parent/index.js'),
      p = t('./node_modules/xcomponent/src/component/delegate/index.js'),
      m = t('./node_modules/xcomponent/src/component/component/props.js'),
      h = t('./node_modules/xcomponent/src/component/window.js'),
      b = t('./node_modules/xcomponent/src/constants.js'),
      y = t('./node_modules/xcomponent/src/component/component/validate.js'),
      v = t('./node_modules/xcomponent/src/component/component/templates/index.js'),
      w = t('./node_modules/xcomponent/src/drivers/index.js'),
      g = t('./node_modules/xcomponent/src/lib/index.js'),
      j =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            },
      E = ((c = (function(e) {
        function n(t) {
          r(this, n);
          var i = o(this, e.call(this));
          if (
            (Object(y.a)(t),
            i.addProp(t, 'tag'),
            i.addProp(t, 'defaultLogLevel', 'info'),
            i.addProp(t, 'allowedParentDomains', b.WILDCARD),
            Object(g.Q)(i.defaultLogLevel),
            n.components[i.tag])
          )
            throw new Error('Can not register multiple components with the same tag');
          return (
            i.addProp(t, 'name', i.tag.replace(/-/g, '_')),
            (i.builtinProps = Object(m.a)()),
            (i.props = t.props || {}),
            t.props || (i.looseProps = !0),
            i.addProp(t, 'dimensions'),
            i.addProp(t, 'scrolling'),
            i.addProp(t, 'version', 'latest'),
            i.addProp(t, 'defaultEnv'),
            i.addProp(t, 'buildUrl'),
            i.addProp(t, 'url'),
            i.addProp(t, 'domain'),
            i.addProp(t, 'bridgeUrl'),
            i.addProp(t, 'bridgeDomain'),
            i.addProp(t, 'attributes', {}),
            i.addProp(t, 'contexts', { iframe: !0, popup: !1 }),
            i.addProp(t, 'defaultContext'),
            i.addProp(t, 'autoResize', !1),
            i.addProp(t, 'containerTemplate', v.a),
            i.addProp(t, 'prerenderTemplate', v.b),
            i.addProp(t, 'validate'),
            i.addProp(t, 'unsafeRenderTo', !1),
            (n.components[i.tag] = i),
            i.registerDrivers(),
            i.registerChild(),
            i.listenDelegate(),
            i
          );
        }
        return (
          i(n, e),
          (n.prototype.getPropNames = function() {
            for (
              var e = Object.keys(this.props),
                n = Object.keys(this.builtinProps),
                t = Array.isArray(n),
                r = 0,
                n = t ? n : n[Symbol.iterator]();
              ;

            ) {
              var o;
              if (t) {
                if (r >= n.length) break;
                o = n[r++];
              } else {
                if (((r = n.next()), r.done)) break;
                o = r.value;
              }
              var i = o;
              -1 === e.indexOf(i) && e.push(i);
            }
            return e;
          }),
          (n.prototype.getProp = function(e) {
            return this.props[e] || this.builtinProps[e];
          }),
          (n.prototype.registerDrivers = function() {
            this.driverCache = {};
            for (var e = Object.keys(w), n = Array.isArray(e), t = 0, e = n ? e : e[Symbol.iterator](); ; ) {
              var r;
              if (n) {
                if (t >= e.length) break;
                r = e[t++];
              } else {
                if (((t = e.next()), t.done)) break;
                r = t.value;
              }
              var o = r;
              if (0 !== o.indexOf('_')) {
                var i = w[o],
                  c = i.global();
                c && this.driver(o, c);
              }
            }
          }),
          (n.prototype.driver = function(e, n) {
            if (!w[e]) throw new Error('Could not find driver for framework: ' + e);
            return this.driverCache[e] || (this.driverCache[e] = w[e].register(this, n)), this.driverCache[e];
          }),
          (n.prototype.registerChild = function() {
            var e = this;
            Object(h.f)() &&
              s.a.try(function() {
                Object(h.b)().tag === e.tag && ((window.xchild = new l.a(e)), (window.xprops = window.xchild.props));
              });
          }),
          (n.prototype.listenDelegate = function() {
            var e = this;
            Object(a.on)(b.POST_MESSAGE.ALLOW_DELEGATE + '_' + this.name, function(e) {
              e.source, e.origin, e.data;
              return !0;
            }),
              Object(a.on)(b.POST_MESSAGE.DELEGATE + '_' + this.name, function(n) {
                var t = n.source,
                  r = n.origin,
                  o = n.data,
                  i = e.getDomain(null, o.env || e.defaultEnv);
                if (!i) throw new Error('Could not determine domain to allow remote render');
                if (!Object(u.v)(i, r)) throw new Error('Can not render from ' + r + ' - expected ' + i.toString());
                var c = e.delegate(t, o.options);
                return {
                  overrides: c.getOverrides(o.context),
                  destroy: function() {
                    return c.destroy();
                  }
                };
              });
          }),
          (n.prototype.canRenderTo = function(e) {
            return Object(a.send)(e, b.POST_MESSAGE.ALLOW_DELEGATE + '_' + this.name)
              .then(function(e) {
                return e.data;
              })
              .catch(function() {
                return !1;
              });
          }),
          (n.prototype.getValidDomain = function(e) {
            if (e) {
              var n = Object(u.g)(e);
              if ('string' == typeof this.domain && n === this.domain) return n;
              if (this.domain && 'object' === j(this.domain))
                for (var t = Object.keys(this.domain), r = Array.isArray(t), o = 0, t = r ? t : t[Symbol.iterator](); ; ) {
                  var i;
                  if (r) {
                    if (o >= t.length) break;
                    i = t[o++];
                  } else {
                    if (((o = t.next()), o.done)) break;
                    i = o.value;
                  }
                  var c = i;
                  if ('test' !== c && n === this.domain[c]) return n;
                }
            }
          }),
          (n.prototype.getDomain = function(e, n) {
            var t = this.getForEnv(this.domain, n);
            if (t) return t;
            if ((t = this.getValidDomain(e))) return t;
            var r = this.getForEnv(this.url, n);
            return r ? Object(u.g)(r) : e ? Object(u.g)(e) : void 0;
          }),
          (n.prototype.getBridgeUrl = function(e) {
            return this.getForEnv(this.bridgeUrl, e);
          }),
          (n.prototype.getForEnv = function(e, n) {
            if (e) {
              if ('string' == typeof e || e instanceof RegExp) return e;
              if ((n || (n = this.defaultEnv), n)) return n && 'object' === (void 0 === e ? 'undefined' : j(e)) && e[n] ? e[n] : void 0;
            }
          }),
          (n.prototype.getBridgeDomain = function(e) {
            var n = this.getForEnv(this.bridgeDomain, e);
            if (n) return n;
            var t = this.getBridgeUrl(e);
            return t ? Object(u.g)(t) : void 0;
          }),
          (n.prototype.getUrl = function(e, n) {
            var t = this.getForEnv(this.url, e);
            return t || (this.buildUrl ? this.buildUrl(n) : void 0);
          }),
          (n.prototype.isXComponent = function() {
            return Object(h.f)();
          }),
          (n.prototype.isChild = function() {
            return Object(h.f)() && window.xprops && Object(h.b)().tag === this.tag;
          }),
          (n.prototype.createError = function(e, n) {
            return new Error('[' + (n || this.tag) + '] ' + e);
          }),
          (n.prototype.init = function(e, n, t) {
            return new f.a(this, this.getRenderContext(n, t), { props: e });
          }),
          (n.prototype.delegate = function(e, n) {
            return new p.a(this, e, n);
          }),
          (n.prototype.validateRenderContext = function(e, n) {
            if (e && !this.contexts[e]) throw new Error('[' + this.tag + '] Can not render to ' + e);
            if (!n && e === b.CONTEXT_TYPES.IFRAME)
              throw new Error('[' + this.tag + '] Context type ' + b.CONTEXT_TYPES.IFRAME + ' requires an element selector');
          }),
          (n.prototype.getDefaultContext = function() {
            if (this.defaultContext) return this.defaultContext;
            if (this.contexts[b.CONTEXT_TYPES.IFRAME]) return b.CONTEXT_TYPES.IFRAME;
            if (this.contexts[b.CONTEXT_TYPES.POPUP]) return b.CONTEXT_TYPES.POPUP;
            throw new Error('Can not determine default context');
          }),
          (n.prototype.getRenderContext = function(e, n) {
            return (e = e || this.getDefaultContext()), this.validateRenderContext(e, n), e;
          }),
          (n.prototype.render = function(e, n) {
            var t = this;
            return s.a.try(function() {
              return new f.a(t, t.getRenderContext(null, n), { props: e }).render(n);
            });
          }),
          (n.prototype.renderIframe = function(e, n) {
            var t = this;
            return s.a.try(function() {
              return new f.a(t, t.getRenderContext(b.CONTEXT_TYPES.IFRAME, n), { props: e }).render(n);
            });
          }),
          (n.prototype.renderPopup = function(e) {
            var n = this;
            return s.a.try(function() {
              return new f.a(n, n.getRenderContext(b.CONTEXT_TYPES.POPUP), { props: e }).render();
            });
          }),
          (n.prototype.renderTo = function(e, n, t) {
            var r = this;
            return s.a.try(function() {
              return new f.a(r, r.getRenderContext(null, t), { props: n }).renderTo(e, t);
            });
          }),
          (n.prototype.renderIframeTo = function(e, n, t) {
            var r = this;
            return s.a.try(function() {
              return new f.a(r, r.getRenderContext(b.CONTEXT_TYPES.IFRAME, t), { props: n }).renderTo(e, t);
            });
          }),
          (n.prototype.renderPopupTo = function(e, n) {
            var t = this;
            return s.a.try(function() {
              return new f.a(t, t.getRenderContext(b.CONTEXT_TYPES.POPUP), { props: n }).renderTo(e);
            });
          }),
          (n.prototype.prerender = function(e, n) {
            var t = new f.a(this, this.getRenderContext(null, n), { props: e });
            return (
              t.prefetch(),
              {
                render: function(e, n) {
                  return e && t.updateProps(e), t.render(n);
                },
                renderTo: function(e, n, r) {
                  return n && t.updateProps(n), t.renderTo(e, r);
                },
                get html() {
                  return t.html;
                },
                set html(e) {
                  t.html = e;
                }
              }
            );
          }),
          (n.prototype.log = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Object(g.C)(this.name, e, n);
          }),
          (n.prototype.logWarning = function(e, n) {
            Object(g._0)(this.name, e, n);
          }),
          (n.prototype.logError = function(e, n) {
            Object(g.r)(this.name, e, n);
          }),
          (n.getByTag = function(e) {
            return n.components[e];
          }),
          n
        );
      })(d.a)),
      (function(e, n, t, r, o) {
        var i = {};
        return (
          Object.keys(r).forEach(function(e) {
            i[e] = r[e];
          }),
          (i.enumerable = !!i.enumerable),
          (i.configurable = !!i.configurable),
          ('value' in i || i.initializer) && (i.writable = !0),
          (i = t
            .slice()
            .reverse()
            .reduce(function(t, r) {
              return r(e, n, t) || t;
            }, i)),
          o && void 0 !== i.initializer && ((i.value = i.initializer ? i.initializer.call(o) : void 0), (i.initializer = void 0)),
          void 0 === i.initializer && (Object.defineProperty(e, n, i), (i = null)),
          i
        );
      })(c.prototype, 'getPropNames', [g.G], Object.getOwnPropertyDescriptor(c.prototype, 'getPropNames'), c.prototype),
      c);
    E.components = {};
  },
  './node_modules/xcomponent/src/component/component/props.js': function(e, n, t) {
    'use strict';
    function r() {
      return {
        env: {
          type: 'string',
          required: !1,
          queryParam: !0,
          def: function() {
            return this.defaultEnv;
          }
        },
        uid: {
          type: 'string',
          def: function() {
            return Object(o.Y)();
          },
          queryParam: !0
        },
        logLevel: {
          type: 'string',
          required: !1,
          queryParam: !0,
          def: function() {
            return this.defaultLogLevel;
          }
        },
        url: { type: 'string', required: !1, promise: !0, sendToChild: !1 },
        version: { type: 'string', required: !1, queryParam: !0 },
        timeout: { type: 'number', required: !1, sendToChild: !1 },
        onDisplay: { type: 'function', required: !1, noop: !0, promisify: !0, memoize: !0, sendToChild: !1 },
        onEnter: { type: 'function', required: !1, noop: !0, promisify: !0, sendToChild: !1 },
        onRender: { type: 'function', required: !1, noop: !0, promisify: !0, sendToChild: !1 },
        onClose: { type: 'function', required: !1, noop: !0, once: !0, promisify: !0, sendToChild: !1 },
        onTimeout: {
          type: 'function',
          required: !1,
          memoize: !0,
          promisify: !0,
          sendToChild: !1,
          def: function() {
            return function(e) {
              if (this.props.onError) return this.props.onError(e);
              throw e;
            };
          }
        },
        onError: { type: 'function', required: !1, promisify: !0, sendToChild: !0, once: !0 }
      };
    }
    n.a = r;
    var o = (t('./node_modules/zalgo-promise/src/index.js'), t('./node_modules/xcomponent/src/lib/index.js'));
  },
  './node_modules/xcomponent/src/component/component/templates/component.jsx': function(e, n, t) {
    'use strict';
    function r(e) {
      var n = e.jsxDom;
      return n(
        'html',
        null,
        n(
          'head',
          null,
          n(
            'style',
            null,
            '\n                        html, body {\n                            width: 100%;\n                            height: 100%;\n                            overflow: hidden;\n                            top: 0;\n                            left: 0;\n                            margin: 0;\n                            text-align: center;\n                        }\n\n                        .spinner {\n                            position: absolute;\n                            max-height: 60vmin;\n                            max-width: 60vmin;\n                            height: 40px;\n                            width: 40px;\n                            top: 50%;\n                            left: 50%;\n                            transform: translateX(-50%) translateY(-50%);\n                            z-index: 10;\n                        }\n\n                        .spinner .loader {\n                            height: 100%;\n                            width: 100%;\n                            box-sizing: border-box;\n                            border: 3px solid rgba(0, 0, 0, .2);\n                            border-top-color: rgba(33, 128, 192, 0.8);\n                            border-radius: 100%;\n                            animation: rotation .7s infinite linear;\n\n                        }\n\n                        @keyframes rotation {\n                            from {\n                                transform: rotate(0deg)\n                            }\n                            to {\n                                transform: rotate(359deg)\n                            }\n                        }\n                    '
          )
        ),
        n('body', null, n('div', { class: 'spinner' }, n('div', { id: 'loader', class: 'loader' })))
      );
    }
    n.a = r;
    t('./node_modules/xcomponent/src/component/parent/index.js');
  },
  './node_modules/xcomponent/src/component/component/templates/container.jsx': function(e, n, t) {
    'use strict';
    function r(e) {
      var n = e.id,
        t = e.tag,
        r = e.context,
        o = e.CLASS,
        i = e.outlet,
        c = e.jsxDom,
        a = e.dimensions,
        s = a.width,
        u = a.height;
      return c(
        'div',
        { id: n, class: o.XCOMPONENT + ' ' + o.XCOMPONENT + '-tag-' + t + ' ' + o.XCOMPONENT + '-context-' + r },
        c(
          'style',
          null,
          '\n                    #' +
            n +
            ', #' +
            n +
            ' > .' +
            o.OUTLET +
            ' {\n                        width: ' +
            s +
            ';\n                        height: ' +
            u +
            ';\n                    }\n\n                    #' +
            n +
            ' > .' +
            o.OUTLET +
            ' {\n                        display: inline-block;\n                        position: relative;\n                    }\n\n                    #' +
            n +
            ' > .' +
            o.OUTLET +
            ' > iframe {\n                        height: 100%;\n                        width: 100%;\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        transition: opacity .2s ease-in-out;\n                    }\n\n                    #' +
            n +
            ' > .' +
            o.OUTLET +
            ' > iframe.' +
            o.VISIBLE +
            ' {\n                        opacity: 1;\n                    }\n\n                    #' +
            n +
            ' > .' +
            o.OUTLET +
            ' > iframe.' +
            o.INVISIBLE +
            ' {\n                        opacity: 0;\n                    }\n                '
        ),
        i
      );
    }
    n.a = r;
    t('./node_modules/xcomponent/src/component/parent/index.js');
  },
  './node_modules/xcomponent/src/component/component/templates/index.js': function(e, n, t) {
    'use strict';
    var r = t('./node_modules/xcomponent/src/component/component/templates/container.jsx');
    t.d(n, 'a', function() {
      return r.a;
    });
    var o = t('./node_modules/xcomponent/src/component/component/templates/component.jsx');
    t.d(n, 'b', function() {
      return o.a;
    });
  },
  './node_modules/xcomponent/src/component/component/validate.js': function(e, n, t) {
    'use strict';
    function r(e) {
      if (e.props && 'object' !== a(e.props)) throw new Error('Expected options.props to be an object');
      if (e.props)
        for (var n = Object.keys(e.props), t = Array.isArray(n), r = 0, n = t ? n : n[Symbol.iterator](); ; ) {
          var o;
          if (t) {
            if (r >= n.length) break;
            o = n[r++];
          } else {
            if (((r = n.next()), r.done)) break;
            o = r.value;
          }
          var c = o,
            s = e.props[c];
          if (!s || 'object' !== (void 0 === s ? 'undefined' : a(s))) throw new Error('Expected options.props.' + c + ' to be an object');
          if (!s.type) throw new Error('Expected prop.type');
          if (-1 === i.PROP_TYPES_LIST.indexOf(s.type)) throw new Error('Expected prop.type to be one of ' + i.PROP_TYPES_LIST.join(', '));
          if (s.required && s.def) throw new Error('Required prop can not have a default value');
        }
    }
    function o(e) {
      if (!e) throw new Error('Expecred options to be passed');
      if (!e.tag || !e.tag.match(/^[a-z0-9-]+$/)) throw new Error('Invalid options.tag: ' + e.tag);
      if ((r(e), e.dimensions)) {
        if (e.dimensions && !Object(c.E)(e.dimensions.width) && !Object(c.D)(e.dimensions.width))
          throw new Error('Expected options.dimensions.width to be a px or % string value');
        if (e.dimensions && !Object(c.E)(e.dimensions.height) && !Object(c.D)(e.dimensions.height))
          throw new Error('Expected options.dimensions.height to be a px or % string value');
      }
      if (e.contexts) {
        if (e.contexts.popup) throw new Error('Popups not supported in this build -- please use the full xcomponent.js build');
        for (var n = !1, t = Object.keys(e.contexts), o = Array.isArray(t), s = 0, t = o ? t : t[Symbol.iterator](); ; ) {
          var u;
          if (o) {
            if (s >= t.length) break;
            u = t[s++];
          } else {
            if (((s = t.next()), s.done)) break;
            u = s.value;
          }
          var d = u;
          if (-1 === i.CONTEXT_TYPES_LIST.indexOf(d)) throw new Error('Unsupported context type: ' + d);
          ((e.contexts && e.contexts[d]) || (e.contexts && void 0 === e.contexts[d])) && (n = !0);
        }
        if (!n) throw new Error('No context type is enabled');
      }
      if (e.defaultContext) {
        if (-1 === i.CONTEXT_TYPES_LIST.indexOf(e.defaultContext))
          throw new Error('Unsupported context type: ' + (e.defaultContext || 'unknown'));
        if (e.contexts && e.defaultContext && !e.contexts[e.defaultContext])
          throw new Error('Disallowed default context type: ' + (e.defaultContext || 'unknown'));
      }
      if (!e.url && !e.buildUrl) throw new Error('Expected options.url to be passed');
      if (e.url && e.buildUrl) throw new Error('Can not pass options.url and options.buildUrl');
      if (e.defaultEnv) {
        if ('string' != typeof e.defaultEnv) throw new Error('Expected options.defaultEnv to be a string');
        if (!e.buildUrl && 'object' !== a(e.url)) throw new Error('Expected options.url to be an object mapping env->url');
        if (e.url && 'object' === a(e.url) && !e.url[e.defaultEnv]) throw new Error('No url found for default env: ' + e.defaultEnv);
      }
      if (e.url && 'object' === a(e.url)) {
        if (!e.defaultEnv) throw new Error('Must pass options.defaultEnv with env->url mapping');
        for (var l = Object.keys(e.url), f = Array.isArray(l), p = 0, l = f ? l : l[Symbol.iterator](); ; ) {
          var m;
          if (f) {
            if (p >= l.length) break;
            m = l[p++];
          } else {
            if (((p = l.next()), p.done)) break;
            m = p.value;
          }
          var h = m;
          if (!e.url[h]) throw new Error('No url specified for env: ' + h);
        }
      }
      if (e.prerenderTemplate && 'function' != typeof e.prerenderTemplate)
        throw new Error('Expected options.prerenderTemplate to be a function');
      if (e.containerTemplate && 'function' != typeof e.containerTemplate)
        throw new Error('Expected options.containerTemplate to be a function');
    }
    n.a = o;
    var i = t('./node_modules/xcomponent/src/constants.js'),
      c = t('./node_modules/xcomponent/src/lib/index.js'),
      a = (t('./node_modules/xcomponent/src/component/component/index.js'),
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
          });
  },
  './node_modules/xcomponent/src/component/delegate/index.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
    }
    function o(e, n) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !n || ('object' != typeof n && 'function' != typeof n) ? e : n;
    }
    function i(e, n) {
      if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function, not ' + typeof n);
      (e.prototype = Object.create(n && n.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
    }
    t.d(n, 'a', function() {
      return l;
    });
    var c = t('./node_modules/cross-domain-utils/src/index.js'),
      a = (t('./node_modules/zalgo-promise/src/index.js'), t('./node_modules/xcomponent/src/component/base.js')),
      s = t('./node_modules/xcomponent/src/component/parent/index.js'),
      u = t('./node_modules/xcomponent/src/component/parent/drivers.js'),
      d = (t('./node_modules/xcomponent/src/component/component/index.js'),
      (function() {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(n, t, r) {
          return t && e(n.prototype, t), r && e(n, r), n;
        };
      })()),
      l = (function(e) {
        function n(t, i, c) {
          r(this, n);
          var a = o(this, e.call(this));
          (a.component = t),
            a.clean.set('source', i),
            (a.context = c.context),
            (a.props = { uid: c.props.uid, dimensions: c.props.dimensions, onClose: c.props.onClose, onDisplay: c.props.onDisplay });
          for (var d = t.getPropNames(), l = Array.isArray(d), f = 0, d = l ? d : d[Symbol.iterator](); ; ) {
            var p;
            if (l) {
              if (f >= d.length) break;
              p = d[f++];
            } else {
              if (((f = d.next()), f.done)) break;
              p = f.value;
            }
            var m = p;
            a.component.getProp(m).allowDelegate && (a.props[m] = c.props[m]);
          }
          (a.focus = function() {
            if (a.driver.openOnFocus)
              try {
                var e = window.open('', a.childWindowName);
                e && e.focus();
              } catch (e) {}
            return c.overrides.focus.call(a);
          }),
            a.clean.register('destroyFocusOverride', function() {
              a.focus = function() {};
            }),
            (a.userClose = c.overrides.userClose),
            (a.getDomain = c.overrides.getDomain),
            (a.error = c.overrides.error),
            (a.on = c.overrides.on);
          for (
            var h = u.a[c.context].delegateOverrides, b = Object.keys(h), y = Array.isArray(b), v = 0, b = y ? b : b[Symbol.iterator]();
            ;

          ) {
            var w;
            if (y) {
              if (v >= b.length) break;
              w = b[v++];
            } else {
              if (((v = b.next()), v.done)) break;
              w = v.value;
            }
            var g = w;
            a[g] = s.a.prototype[g];
          }
          return (a.childWindowName = c.childWindowName), s.a.prototype.registerActiveComponent.call(a), a.watchForClose(), a;
        }
        return (
          i(n, e),
          (n.prototype.watchForClose = function() {
            var e = this,
              n = Object(c.w)(
                this.source,
                function() {
                  return e.destroy();
                },
                3e3
              );
            this.clean.register('destroyCloseWindowListener', n.cancel);
          }),
          (n.prototype.getOverrides = function(e) {
            for (
              var n = u.a[e].delegateOverrides,
                t = {},
                r = this,
                o = Object.keys(n),
                i = Array.isArray(o),
                c = 0,
                o = i ? o : o[Symbol.iterator]();
              ;

            ) {
              var a;
              if (
                'break' ===
                (function() {
                  if (i) {
                    if (c >= o.length) return 'break';
                    a = o[c++];
                  } else {
                    if (((c = o.next()), c.done)) return 'break';
                    a = c.value;
                  }
                  var e = a;
                  t[e] = function() {
                    return s.a.prototype[e].apply(r, arguments);
                  };
                })()
              )
                break;
            }
            return t;
          }),
          (n.prototype.destroy = function() {
            return this.clean.all();
          }),
          d(n, [
            {
              key: 'driver',
              get: function() {
                if (!this.context) throw new Error('Context not set');
                return u.a[this.context];
              }
            }
          ]),
          n
        );
      })(a.a);
  },
  './node_modules/xcomponent/src/component/index.js': function(e, n, t) {
    'use strict';
    var r = t('./node_modules/xcomponent/src/component/component/index.js');
    t.d(n, 'a', function() {
      return r.a;
    });
    t('./node_modules/xcomponent/src/component/parent/index.js'), t('./node_modules/xcomponent/src/component/child/index.js');
  },
  './node_modules/xcomponent/src/component/parent/drivers.js': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return d;
    });
    var r = t('./node_modules/zalgo-promise/src/index.js'),
      o = t('./node_modules/post-robot/src/index.js'),
      i = t('./node_modules/cross-domain-utils/src/index.js'),
      c = t('./node_modules/xcomponent/src/lib/index.js'),
      a = t('./node_modules/xcomponent/src/constants.js'),
      s = t('./node_modules/xcomponent/src/component/window.js'),
      u = (t('./node_modules/xcomponent/src/error.js'),
      Object.assign ||
        function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      d = {};
    d[a.CONTEXT_TYPES.IFRAME] = {
      focusable: !1,
      renderedIntoContainerTemplate: !0,
      allowResize: !0,
      openOnClick: !1,
      openOnFocus: !1,
      needsBridge: !1,
      open: function(e) {
        var n = this,
          t = this.component.attributes.iframe || {};
        return (
          (this.iframe = Object(c.B)(
            {
              url: e,
              attributes: u({ name: this.childWindowName, scrolling: this.component.scrolling ? 'yes' : 'no' }, t),
              class: [a.CLASS_NAMES.COMPONENT_FRAME, a.CLASS_NAMES.INVISIBLE]
            },
            this.element
          )),
          Object(c.f)(this.iframe).then(function(e) {
            n.window = e;
            var t = function() {
                r.a
                  .try(function() {
                    return n.props.onClose(a.CLOSE_REASONS.CLOSE_DETECTED);
                  })
                  .finally(function() {
                    return n.destroy();
                  });
              },
              i = Object(c._1)(n.iframe, t),
              s = Object(c._1)(n.element, t);
            n.clean.register('destroyWindow', function() {
              i.cancel(),
                s.cancel(),
                Object(o.cleanUpWindow)(n.window),
                delete n.window,
                n.iframe && (Object(c.l)(n.iframe), delete n.iframe);
            });
          })
        );
      },
      openPrerender: function() {
        var e = this,
          n = this.component.attributes.iframe || {};
        return (
          (this.prerenderIframe = Object(c.B)(
            {
              attributes: u({ name: '__prerender__' + this.childWindowName, scrolling: this.component.scrolling ? 'yes' : 'no' }, n),
              class: [a.CLASS_NAMES.PRERENDER_FRAME, a.CLASS_NAMES.VISIBLE]
            },
            this.element
          )),
          Object(c.f)(this.prerenderIframe).then(function(n) {
            (e.prerenderWindow = n),
              e.clean.register('destroyPrerender', function() {
                e.prerenderIframe && (Object(c.l)(e.prerenderIframe), delete e.prerenderIframe);
              });
          })
        );
      },
      switchPrerender: function() {
        var e = this;
        Object(c.a)(this.prerenderIframe, a.CLASS_NAMES.INVISIBLE),
          Object(c.N)(this.prerenderIframe, a.CLASS_NAMES.VISIBLE),
          Object(c.a)(this.iframe, a.CLASS_NAMES.VISIBLE),
          Object(c.N)(this.iframe, a.CLASS_NAMES.INVISIBLE),
          setTimeout(function() {
            e.prerenderIframe && Object(c.l)(e.prerenderIframe);
          }, 1e3);
      },
      delegateOverrides: {
        openContainer: a.DELEGATE.CALL_DELEGATE,
        destroyComponent: a.DELEGATE.CALL_DELEGATE,
        destroyContainer: a.DELEGATE.CALL_DELEGATE,
        cancelContainerEvents: a.DELEGATE.CALL_DELEGATE,
        createPrerenderTemplate: a.DELEGATE.CALL_DELEGATE,
        elementReady: a.DELEGATE.CALL_DELEGATE,
        showContainer: a.DELEGATE.CALL_DELEGATE,
        showComponent: a.DELEGATE.CALL_DELEGATE,
        hideContainer: a.DELEGATE.CALL_DELEGATE,
        hideComponent: a.DELEGATE.CALL_DELEGATE,
        hide: a.DELEGATE.CALL_DELEGATE,
        show: a.DELEGATE.CALL_DELEGATE,
        resize: a.DELEGATE.CALL_DELEGATE,
        loadUrl: a.DELEGATE.CALL_DELEGATE,
        hijackSubmit: a.DELEGATE.CALL_DELEGATE,
        openPrerender: a.DELEGATE.CALL_DELEGATE,
        switchPrerender: a.DELEGATE.CALL_DELEGATE,
        renderTemplate: a.DELEGATE.CALL_ORIGINAL,
        openContainerFrame: a.DELEGATE.CALL_ORIGINAL,
        getOutlet: a.DELEGATE.CALL_ORIGINAL,
        open: function(e, n) {
          return function() {
            var e = this;
            return n.apply(this, arguments).then(function() {
              if ((e.clean.set('window', Object(i.a)(Object(s.c)(), e.childWindowName)), !e.window))
                throw new Error('Unable to find parent component iframe window');
            });
          };
        }
      },
      resize: function(e, n) {
        e && ((this.container.style.width = Object(c.W)(e)), (this.element.style.width = Object(c.W)(e))),
          n && ((this.container.style.height = Object(c.W)(n)), (this.element.style.height = Object(c.W)(n)));
      },
      show: function() {
        Object(c.T)(this.element);
      },
      hide: function() {
        Object(c.A)(this.element);
      },
      loadUrl: function(e) {
        this.iframe.setAttribute('src', e);
      }
    };
  },
  './node_modules/xcomponent/src/component/parent/index.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
    }
    function o(e, n) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !n || ('object' != typeof n && 'function' != typeof n) ? e : n;
    }
    function i(e, n) {
      if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function, not ' + typeof n);
      (e.prototype = Object.create(n && n.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
    }
    function c(e, n, t, r, o) {
      var i = {};
      return (
        Object.keys(r).forEach(function(e) {
          i[e] = r[e];
        }),
        (i.enumerable = !!i.enumerable),
        (i.configurable = !!i.configurable),
        ('value' in i || i.initializer) && (i.writable = !0),
        (i = t
          .slice()
          .reverse()
          .reduce(function(t, r) {
            return r(e, n, t) || t;
          }, i)),
        o && void 0 !== i.initializer && ((i.value = i.initializer ? i.initializer.call(o) : void 0), (i.initializer = void 0)),
        void 0 === i.initializer && (Object.defineProperty(e, n, i), (i = null)),
        i
      );
    }
    t.d(n, 'a', function() {
      return O;
    });
    var a,
      s = t('./node_modules/beaver-logger/client/index.js'),
      u = t('./node_modules/post-robot/src/index.js'),
      d = t('./node_modules/cross-domain-utils/src/index.js'),
      l = t('./node_modules/zalgo-promise/src/index.js'),
      f = t('./node_modules/xcomponent/src/component/base.js'),
      p = t('./node_modules/xcomponent/src/component/window.js'),
      m = t('./node_modules/xcomponent/src/lib/index.js'),
      h = t('./node_modules/xcomponent/src/constants.js'),
      b = t('./node_modules/xcomponent/src/component/parent/drivers.js'),
      y = t('./node_modules/xcomponent/src/component/parent/validate.js'),
      v = t('./node_modules/xcomponent/src/component/parent/props.js'),
      w = t('./node_modules/xcomponent/src/error.js'),
      g = (t('./node_modules/xcomponent/src/component/component/index.js'),
      t('./node_modules/xcomponent/src/component/component/props.js'),
      t('./node_modules/xcomponent/src/component/child/index.js'),
      Object.assign ||
        function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      j =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            },
      E = (function() {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(n, t, r) {
          return t && e(n.prototype, t), r && e(n, r), n;
        };
      })();
    (m.y.props = m.y.props || {}), (m.y.windows = m.y.windows || {});
    var O = ((a = (function(e) {
      function n(t, i, c) {
        var a = c.props;
        r(this, n);
        var s = o(this, e.call(this));
        return (
          (s.component = t),
          s.validateParentDomain(),
          (s.context = i),
          s.setProps(a),
          s.props.logLevel && Object(m.Q)(s.props.logLevel),
          (s.childWindowName = s.buildChildWindowName({ renderTo: window })),
          s.registerActiveComponent(),
          s.component.log('construct_parent'),
          s.watchForUnload(),
          (s.onInit = new l.a()),
          s.onInit.catch(function(e) {
            return s.error(e);
          }),
          s
        );
      }
      return (
        i(n, e),
        (n.prototype.render = function(e) {
          var n = this,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.tryInit(function() {
            n.component.log('render_' + n.context, { context: n.context, element: e, loadUrl: Object(m.U)(t) });
            var r = {};
            return (
              (r.onRender = n.props.onRender()),
              (r.getDomain = n.getDomain()),
              (r.elementReady = l.a.try(function() {
                if (e) return n.elementReady(e);
              })),
              (r.openContainer = r.elementReady.then(function() {
                return n.openContainer(e);
              })),
              (r.showContainer = r.openContainer.then(function() {
                return n.showContainer();
              })),
              (r.openPrerender = r.openContainer.then(function() {
                return n.openPrerender();
              })),
              (r.switchPrerender = l.a.all([r.openPrerender, n.onInit]).then(function() {
                return n.switchPrerender();
              })),
              (r.open = n.driver.openOnClick
                ? n.open()
                : r.openContainer.then(function() {
                    return n.open();
                  })),
              (r.listen = l.a.all([r.getDomain, r.open]).then(function(e) {
                var t = e[0];
                n.listen(n.window, t);
              })),
              (r.watchForClose = r.open.then(function() {
                return n.watchForClose();
              })),
              (r.linkDomain = l.a.all([r.getDomain, r.open]).then(function(e) {
                var t = e[0];
                if (u.bridge && 'string' == typeof t) return u.bridge.linkUrl(n.window, t);
              })),
              n.html ||
                ((r.createPrerenderTemplate = r.openPrerender.then(function() {
                  return n.createPrerenderTemplate();
                })),
                (r.showComponent = r.createPrerenderTemplate.then(function() {
                  return n.showComponent();
                }))),
              (r.openBridge = l.a.all([r.getDomain, r.open]).then(function(e) {
                var t = e[0];
                return n.openBridge('string' == typeof t ? t : null);
              })),
              n.html
                ? (r.loadHTML = r.open.then(function() {
                    return n.loadHTML();
                  }))
                : t &&
                  ((r.buildUrl = n.buildUrl()),
                  (r.loadUrl = l.a
                    .all([r.buildUrl, r.open, r.linkDomain, r.listen, r.open, r.openBridge, r.createPrerenderTemplate])
                    .then(function(e) {
                      var t = e[0];
                      return n.loadUrl(t);
                    })),
                  (r.runTimeout = r.loadUrl.then(function() {
                    return n.runTimeout();
                  }))),
              l.a.hash(r)
            );
          }).then(function() {
            return n.props.onEnter();
          });
        }),
        (n.prototype.getOutlet = function() {
          return (this.outlet = document.createElement('div')), Object(m.a)(this.outlet, h.CLASS_NAMES.OUTLET), this.outlet;
        }),
        (n.prototype.validateParentDomain = function() {
          var e = Object(d.f)();
          if (!Object(d.v)(this.component.allowedParentDomains, e)) throw new w.c('Can not be rendered by domain: ' + e);
        }),
        (n.prototype.renderTo = function(e, n) {
          var t = this;
          return this.tryInit(function() {
            if (e === window) return t.render(n);
            if (!Object(d.q)(window, e)) throw new Error('Can only renderTo an adjacent frame');
            if (n && 'string' != typeof n)
              throw new Error('Element passed to renderTo must be a string selector, got ' + (void 0 === n ? 'undefined' : j(n)) + ' ' + n);
            return (
              t.checkAllowRenderTo(e),
              t.component.log('render_' + t.context + '_to_win', { element: Object(m.U)(n), context: t.context }),
              (t.childWindowName = t.buildChildWindowName({ renderTo: e })),
              t.delegate(e),
              t.render(n)
            );
          });
        }),
        (n.prototype.prefetch = function() {
          var e = this;
          return l.a.try(function() {
            e.html = e.buildUrl().then(function(e) {
              return Object(m.L)(e).then(function(n) {
                return (
                  '\n                        <base href="' +
                  e
                    .split('/')
                    .slice(0, 3)
                    .join('/') +
                  '">\n\n                        ' +
                  n +
                  "\n\n                        <script>\n                            if (window.history && window.history.pushState) {\n                                window.history.pushState({}, '', '/" +
                  e
                    .split('/')
                    .slice(3)
                    .join('/') +
                  "');\n                            }\n                        </script>\n                    "
                );
              });
            });
          });
        }),
        (n.prototype.loadHTML = function() {
          var e = this;
          return l.a.try(function() {
            if (!e.html) throw new Error('Html not prefetched');
            return e.html.then(function(n) {
              return Object(m._3)(e.window, n);
            });
          });
        }),
        (n.prototype.checkAllowRenderTo = function(e) {
          if (!e) throw this.component.createError('Must pass window to renderTo');
          if (!Object(d.p)(e)) {
            var n = Object(d.f)(),
              t = this.component.getDomain(null, this.props.env);
            if (!t) throw new Error('Could not determine domain to allow remote render');
            if (!Object(d.v)(t, n)) throw new Error('Can not render remotely to ' + t.toString() + ' - can only render to ' + n);
          }
        }),
        (n.prototype.registerActiveComponent = function() {
          var e = this;
          n.activeComponents.push(this),
            this.clean.register(function() {
              n.activeComponents.splice(n.activeComponents.indexOf(e), 1);
            });
        }),
        (n.prototype.getComponentParentRef = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          if (this.context === h.CONTEXT_TYPES.POPUP) return { ref: h.WINDOW_REFERENCES.OPENER };
          if (e === window)
            return Object(d.r)(window)
              ? { ref: h.WINDOW_REFERENCES.TOP }
              : { ref: h.WINDOW_REFERENCES.PARENT, distance: Object(d.e)(window) };
          var n = Object(m.Y)();
          return (
            (m.y.windows[n] = window),
            this.clean.register(function() {
              delete m.y.windows[n];
            }),
            { ref: h.WINDOW_REFERENCES.GLOBAL, uid: n }
          );
        }),
        (n.prototype.getRenderParentRef = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          if (e === window) return this.getComponentParentRef(e);
          var n = Object(m.Y)();
          return (
            (m.y.windows[n] = e),
            this.clean.register(function() {
              delete m.y.windows[n];
            }),
            { ref: h.WINDOW_REFERENCES.GLOBAL, uid: n }
          );
        }),
        (n.prototype.buildChildWindowName = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.renderTo,
            t = void 0 === n ? window : n,
            r = Object(d.p)(t),
            o = Object(m.Y)(),
            i = this.component.tag,
            c = Object(m.P)(this.getPropsForChild()),
            a = this.getComponentParentRef(t),
            s = this.getRenderParentRef(t),
            u = !r && !this.component.unsafeRenderTo,
            l = u ? { type: h.INITIAL_PROPS.UID, uid: o } : { type: h.INITIAL_PROPS.RAW, value: c };
          return (
            l.type === h.INITIAL_PROPS.UID &&
              ((m.y.props[o] = c),
              this.clean.register(function() {
                delete m.y.props[o];
              })),
            Object(p.a)(this.component.name, this.component.version, { uid: o, tag: i, componentParent: a, renderParent: s, props: l })
          );
        }),
        (n.prototype.sendToParent = function(e, n) {
          if (!Object(p.c)()) throw new Error('Can not find parent component window to message');
          return this.component.log('send_to_parent_' + e), Object(u.send)(Object(p.c)(), e, n, { domain: Object(p.d)() });
        }),
        (n.prototype.setProps = function(e) {
          var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          Object(y.a)(this.component, e, n),
            this.component.validate && this.component.validate(this.component, e),
            (this.props = this.props || {}),
            Object(m.t)(this.props, Object(v.a)(this.component, this, e));
        }),
        (n.prototype.buildUrl = function() {
          var e = this;
          return l.a
            .all([this.props.url, Object(v.b)(g({}, this.component.props, this.component.builtinProps), this.props)])
            .then(function(n) {
              var t = n[0],
                r = n[1];
              return t && !e.component.getValidDomain(t)
                ? t
                : l.a
                    .try(function() {
                      return t || e.component.getUrl(e.props.env, e.props);
                    })
                    .then(function(e) {
                      return (r[h.XCOMPONENT] = '1'), Object(m.u)(e, { query: r });
                    });
            });
        }),
        (n.prototype.getDomain = function() {
          var e = this;
          return l.a
            .try(function() {
              return e.props.url;
            })
            .then(function(n) {
              var t = e.component.getDomain(n, e.props.env);
              return (
                t ||
                (e.component.buildUrl
                  ? l.a
                      .try(function() {
                        return e.component.buildUrl(e.props);
                      })
                      .then(function(n) {
                        return e.component.getDomain(n, e.props.env);
                      })
                  : void 0)
              );
            })
            .then(function(e) {
              if (!e) throw new Error('Could not determine domain');
              return e;
            });
        }),
        (n.prototype.getPropsForChild = function() {
          for (var e = {}, n = Object.keys(this.props), t = Array.isArray(n), r = 0, n = t ? n : n[Symbol.iterator](); ; ) {
            var o;
            if (t) {
              if (r >= n.length) break;
              o = n[r++];
            } else {
              if (((r = n.next()), r.done)) break;
              o = r.value;
            }
            var i = o,
              c = this.component.getProp(i);
            (c && !1 === c.sendToChild) || (e[i] = this.props[i]);
          }
          return e;
        }),
        (n.prototype.updateProps = function(e) {
          var n = this;
          return (
            this.setProps(e, !1),
            this.onInit.then(function() {
              if (n.childExports) return n.childExports.updateProps(n.getPropsForChild());
              throw new Error('Child exports were not available');
            })
          );
        }),
        (n.prototype.openBridge = function(e) {
          var n = this;
          return l.a.try(function() {
            if (u.bridge && n.driver.needsBridge) {
              var t = { win: n.window };
              e && (t.domain = e);
              var r = u.bridge.needsBridge(t),
                o = n.component.getBridgeUrl(n.props.env);
              if (o) {
                o = Object(m.u)(o, { query: { version: n.component.version } });
                var i = n.component.getBridgeDomain(n.props.env);
                if (!i) throw new Error('Can not determine domain for bridge');
                return r
                  ? u.bridge.openBridge(o, i).then(function(e) {
                      if (e) return e;
                    })
                  : void 0;
              }
              if (r && e && !u.bridge.hasBridge(e, e)) throw new Error('Bridge url needed to render ' + n.context);
            }
          });
        }),
        (n.prototype.open = function() {
          var e = this;
          return l.a.try(function() {
            return e.component.log('open_' + e.context, { windowName: e.childWindowName }), e.driver.open.call(e);
          });
        }),
        (n.prototype.openPrerender = function() {
          var e = this;
          return l.a.try(function() {
            if (e.component.prerenderTemplate) return e.driver.openPrerender.call(e);
          });
        }),
        (n.prototype.switchPrerender = function() {
          var e = this;
          return l.a.try(function() {
            if (e.prerenderWindow && e.driver.switchPrerender) return e.driver.switchPrerender.call(e);
          });
        }),
        (n.prototype.elementReady = function(e) {
          return Object(m.p)(e).then(m.I);
        }),
        (n.prototype.delegate = function(e) {
          var n = this;
          this.component.log('delegate_' + this.context);
          for (
            var t = {
                uid: this.props.uid,
                dimensions: this.props.dimensions,
                onClose: this.props.onClose,
                onDisplay: this.props.onDisplay
              },
              r = this.component.getPropNames(),
              o = Array.isArray(r),
              i = 0,
              r = o ? r : r[Symbol.iterator]();
            ;

          ) {
            var c;
            if (o) {
              if (i >= r.length) break;
              c = r[i++];
            } else {
              if (((i = r.next()), i.done)) break;
              c = i.value;
            }
            var a = c;
            this.component.getProp(a).allowDelegate && (t[a] = this.props[a]);
          }
          var s = Object(u.send)(e, h.POST_MESSAGE.DELEGATE + '_' + this.component.name, {
              context: this.context,
              env: this.props.env,
              options: {
                context: this.context,
                childWindowName: this.childWindowName,
                props: t,
                overrides: {
                  focus: function() {
                    return n.focus();
                  },
                  userClose: function() {
                    return n.userClose();
                  },
                  getDomain: function() {
                    return n.getDomain();
                  },
                  error: function(e) {
                    return n.error(e);
                  },
                  on: function(e, t) {
                    return n.on(e, t);
                  }
                }
              }
            })
              .then(function(e) {
                var t = e.data;
                return n.clean.register(t.destroy), t;
              })
              .catch(function(e) {
                throw new Error(
                  'Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n' + Object(m.V)(e)
                );
              }),
            d = this.driver.delegateOverrides;
          e: for (var l = Object.keys(d), f = Array.isArray(l), p = 0, l = f ? l : l[Symbol.iterator](); ; ) {
            var b,
              y = (function() {
                if (f) {
                  if (p >= l.length) return 'break';
                  b = l[p++];
                } else {
                  if (((p = l.next()), p.done)) return 'break';
                  b = p.value;
                }
                var e = b,
                  t = d[e];
                if (t === h.DELEGATE.CALL_ORIGINAL) return 'continue';
                var r = n[e];
                n[e] = function() {
                  var n = this,
                    o = arguments;
                  return s.then(function(i) {
                    var c = i.overrides[e];
                    if (t === h.DELEGATE.CALL_DELEGATE) return c.apply(n, o);
                    if (t instanceof Function) return t(r, c).apply(n, o);
                    throw new Error('Expected delgate to be CALL_ORIGINAL, CALL_DELEGATE, or factory method');
                  });
                };
              })();
            switch (y) {
              case 'break':
                break e;
              case 'continue':
                continue;
            }
          }
        }),
        (n.prototype.watchForClose = function() {
          var e = this,
            n = Object(d.w)(
              this.window,
              function() {
                return (
                  e.component.log('detect_close_child'),
                  l.a
                    .try(function() {
                      return e.props.onClose(h.CLOSE_REASONS.CLOSE_DETECTED);
                    })
                    .finally(function() {
                      return e.destroy();
                    })
                );
              },
              3e3
            );
          this.clean.register('destroyCloseWindowListener', n.cancel);
        }),
        (n.prototype.watchForUnload = function() {
          var e = this,
            n = Object(m.K)(function() {
              e.component.log('navigate_away'), s.c(), e.destroyComponent();
            }),
            t = Object(m.b)(window, 'unload', n);
          this.clean.register('destroyUnloadWindowListener', t.cancel);
        }),
        (n.prototype.loadUrl = function(e) {
          var n = this;
          return l.a.try(function() {
            if ((n.component.log('load_url'), window.location.href.split('#')[0] === e.split('#')[0])) {
              var t;
              e = Object(m.u)(e, { query: ((t = {}), (t[Object(m.Y)()] = '1'), t) });
            }
            return n.driver.loadUrl.call(n, e);
          });
        }),
        (n.prototype.hijack = function(e) {
          e.target = this.childWindowName;
        }),
        (n.prototype.runTimeout = function() {
          var e = this;
          this.props.timeout &&
            ((this.timeout = setTimeout(function() {
              e.component.log('timed_out', { timeout: e.props.timeout });
              var n = e.component.createError('Loading component timed out after ' + e.props.timeout + ' milliseconds');
              e.onInit.reject(n), e.props.onTimeout(n);
            }, this.props.timeout)),
            this.clean.register(function() {
              clearTimeout(e.timeout), delete e.timeout;
            }));
        }),
        (n.prototype.listeners = function() {
          var e;
          return (
            (e = {}),
            (e[h.POST_MESSAGE.INIT] = function(e, n) {
              return (
                (this.childExports = n.exports),
                this.onInit.resolve(this),
                this.timeout && clearTimeout(this.timeout),
                { props: this.getPropsForChild(), context: this.context }
              );
            }),
            (e[h.POST_MESSAGE.CLOSE] = function(e, n) {
              this.close(n.reason);
            }),
            (e[h.POST_MESSAGE.CHECK_CLOSE] = function(e, n) {
              this.checkClose();
            }),
            (e[h.POST_MESSAGE.RESIZE] = function(e, n) {
              var t = this;
              return l.a.try(function() {
                if (t.driver.allowResize) return t.resize(n.width, n.height);
              });
            }),
            (e[h.POST_MESSAGE.ONRESIZE] = function(e, n) {
              this.event.trigger('resize');
            }),
            (e[h.POST_MESSAGE.HIDE] = function(e, n) {
              this.hide();
            }),
            (e[h.POST_MESSAGE.SHOW] = function(e, n) {
              this.show();
            }),
            (e[h.POST_MESSAGE.ERROR] = function(e, n) {
              this.error(new Error(n.error));
            }),
            e
          );
        }),
        (n.prototype.resize = function(e, n) {
          var t = this,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            o = r.waitForTransition,
            i = void 0 === o || o;
          return l.a.try(function() {
            if (
              (t.component.log('resize', { height: Object(m.U)(n), width: Object(m.U)(e) }),
              t.driver.resize.call(t, e, n),
              i && (t.element || t.iframe))
            ) {
              var r = void 0;
              return (
                t.element && (r = Object(m.R)(t.element, 'hidden')),
                Object(m.q)(t.element || t.iframe).then(function() {
                  r && r.reset();
                })
              );
            }
          });
        }),
        (n.prototype.hide = function() {
          return this.container && Object(m.A)(this.container), this.driver.hide.call(this);
        }),
        (n.prototype.show = function() {
          return this.container && Object(m.T)(this.container), this.driver.show.call(this);
        }),
        (n.prototype.checkClose = function() {
          var e = this,
            n = Object(d.w)(
              this.window,
              function() {
                e.userClose();
              },
              50,
              500
            );
          this.clean.register(n.cancel);
        }),
        (n.prototype.userClose = function() {
          return this.close(h.CLOSE_REASONS.USER_CLOSED);
        }),
        (n.prototype.close = function() {
          var e = this,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.CLOSE_REASONS.PARENT_CALL;
          return l.a
            .try(function() {
              return e.component.log('close', { reason: n }), e.event.triggerOnce(h.EVENTS.CLOSE), e.props.onClose(n);
            })
            .then(function() {
              return l.a.all([e.closeComponent(), e.closeContainer()]);
            })
            .then(function() {
              return e.destroy();
            });
        }),
        (n.prototype.closeContainer = function() {
          var e = this,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.CLOSE_REASONS.PARENT_CALL;
          return l.a
            .try(function() {
              return e.event.triggerOnce(h.EVENTS.CLOSE), e.props.onClose(n);
            })
            .then(function() {
              return l.a.all([e.closeComponent(n), e.hideContainer()]);
            })
            .then(function() {
              return e.destroyContainer();
            });
        }),
        (n.prototype.destroyContainer = function() {
          var e = this;
          return l.a.try(function() {
            e.clean.run('destroyContainerEvents'), e.clean.run('destroyContainerTemplate');
          });
        }),
        (n.prototype.closeComponent = function() {
          var e = this,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.CLOSE_REASONS.PARENT_CALL,
            t = this.window;
          return l.a
            .try(function() {
              return e.cancelContainerEvents();
            })
            .then(function() {
              return e.event.triggerOnce(h.EVENTS.CLOSE), e.props.onClose(n);
            })
            .then(function() {
              return e.hideComponent();
            })
            .then(function() {
              return e.destroyComponent();
            })
            .then(function() {
              e.childExports && e.context === h.CONTEXT_TYPES.POPUP && !Object(d.t)(t) && e.childExports.close().catch(m.I);
            });
        }),
        (n.prototype.destroyComponent = function() {
          this.clean.run('destroyUnloadWindowListener'),
            this.clean.run('destroyCloseWindowListener'),
            this.clean.run('destroyContainerEvents'),
            this.clean.run('destroyWindow');
        }),
        (n.prototype.showContainer = function() {
          var e = this;
          return l.a
            .try(function() {
              if (e.props.onDisplay) return e.props.onDisplay();
            })
            .then(function() {
              if (e.container) return Object(m.S)(e.container, h.ANIMATION_NAMES.SHOW_CONTAINER, e.clean.register);
            });
        }),
        (n.prototype.showComponent = function() {
          var e = this;
          return l.a
            .try(function() {
              if (e.props.onDisplay) return e.props.onDisplay();
            })
            .then(function() {
              if (e.element) return Object(m.S)(e.element, h.ANIMATION_NAMES.SHOW_COMPONENT, e.clean.register);
            });
        }),
        (n.prototype.hideContainer = function() {
          var e = this;
          return l.a.try(function() {
            return e.container ? Object(m.c)(e.container, h.ANIMATION_NAMES.HIDE_CONTAINER, e.clean.register) : l.a.resolve();
          });
        }),
        (n.prototype.hideComponent = function() {
          var e = this;
          return l.a.try(function() {
            return e.element ? Object(m.c)(e.element, h.ANIMATION_NAMES.HIDE_COMPONENT, e.clean.register) : l.a.resolve();
          });
        }),
        (n.prototype.focus = function() {
          if (!this.window || Object(d.t)(this.window)) throw new Error('No window to focus');
          if (this.driver.openOnFocus)
            try {
              window.open('', this.childWindowName).focus();
            } catch (e) {}
          this.component.log('focus'), this.window.focus();
        }),
        (n.prototype.createPrerenderTemplate = function() {
          var e = this;
          return l.a.try(function() {
            return e.component.prerenderTemplate
              ? l.a
                  .try(function() {
                    return e.prerenderIframe
                      ? Object(m.e)(e.prerenderIframe).then(function() {
                          return e.prerenderWindow;
                        })
                      : e.prerenderWindow;
                  })
                  .then(function(n) {
                    var t = void 0;
                    try {
                      t = n.document;
                    } catch (e) {
                      return;
                    }
                    try {
                      Object(m._2)(n, e.renderTemplate(e.component.prerenderTemplate, { jsxDom: m.F.bind(t), document: t }));
                    } catch (e) {
                      return;
                    }
                  })
              : l.a.resolve();
          });
        }),
        (n.prototype.renderTemplate = function(e) {
          var n = this,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = this.component.dimensions || {},
            o = r.width,
            i = void 0 === o ? h.DEFAULT_DIMENSIONS.WIDTH + 'px' : o,
            c = r.height,
            a = void 0 === c ? h.DEFAULT_DIMENSIONS.HEIGHT + 'px' : c;
          return e.call(
            this,
            g(
              {
                id: h.CLASS_NAMES.XCOMPONENT + '-' + this.component.tag + '-' + this.props.uid,
                props: e.__xdomain__ ? null : this.props,
                tag: this.component.tag,
                context: this.context,
                outlet: this.getOutlet(),
                CLASS: h.CLASS_NAMES,
                ANIMATION: h.ANIMATION_NAMES,
                CONTEXT: h.CONTEXT_TYPES,
                EVENT: h.EVENTS,
                actions: {
                  close: function() {
                    return n.userClose();
                  },
                  focus: function() {
                    return n.focus();
                  }
                },
                on: function(e, t) {
                  return n.on(e, t);
                },
                jsxDom: m.F,
                document: document,
                dimensions: { width: i, height: a }
              },
              t
            )
          );
        }),
        (n.prototype.openContainer = function(e) {
          var n = this;
          return l.a.try(function() {
            var t = void 0;
            if (!(t = e ? Object(m.x)(e) : document.body)) throw new Error('Could not find element to open container into');
            if (n.component.containerTemplate) {
              var r = n.renderTemplate(n.component.containerTemplate, { container: t });
              if (((n.container = r), Object(m.A)(n.container), Object(m.d)(t, n.container), n.driver.renderedIntoContainerTemplate)) {
                if (((n.element = n.getOutlet()), Object(m.A)(n.element), !n.element))
                  throw new Error('Could not find element to render component into');
                Object(m.A)(n.element);
              }
              n.clean.register('destroyContainerTemplate', function() {
                n.container && n.container.parentNode && n.container.parentNode.removeChild(n.container), delete n.container;
              });
            } else if (n.driver.renderedIntoContainerTemplate) throw new Error('containerTemplate needed to render ' + n.context);
          });
        }),
        (n.prototype.cancelContainerEvents = function() {
          this.clean.run('destroyContainerEvents');
        }),
        (n.prototype.destroy = function() {
          var e = this;
          return l.a.try(function() {
            if (e.clean.hasTasks()) return e.component.log('destroy'), s.c(), e.clean.all();
          });
        }),
        (n.prototype.tryInit = function(e) {
          var n = this;
          return l.a
            .try(e)
            .catch(function(e) {
              n.onInit.reject(e);
            })
            .then(function() {
              return n.onInit;
            });
        }),
        (n.prototype.error = function(e) {
          var n = this;
          return l.a
            .try(function() {
              if (((n.handledErrors = n.handledErrors || []), -1 === n.handledErrors.indexOf(e)))
                return n.handledErrors.push(e), n.onInit.reject(e), n.destroy();
            })
            .then(function() {
              if (n.props.onError) return n.props.onError(e);
            })
            .catch(function(n) {
              throw new Error('An error was encountered while handling error:\n\n ' + Object(m.V)(e) + '\n\n' + Object(m.V)(n));
            })
            .then(function() {
              if (!n.props.onError) throw e;
            });
        }),
        (n.destroyAll = function() {
          for (var e = []; n.activeComponents.length; ) e.push(n.activeComponents[0].destroy());
          return l.a.all(e).then(m.I);
        }),
        E(n, [
          {
            key: 'driver',
            get: function() {
              if (!this.context) throw new Error('Context not set');
              return b.a[this.context];
            }
          }
        ]),
        n
      );
    })(f.a)),
    c(a.prototype, 'getOutlet', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'getOutlet'), a.prototype),
    c(a.prototype, 'prefetch', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'prefetch'), a.prototype),
    c(a.prototype, 'loadHTML', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'loadHTML'), a.prototype),
    c(a.prototype, 'buildUrl', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'buildUrl'), a.prototype),
    c(a.prototype, 'open', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'open'), a.prototype),
    c(a.prototype, 'openPrerender', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'openPrerender'), a.prototype),
    c(a.prototype, 'switchPrerender', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'switchPrerender'), a.prototype),
    c(a.prototype, 'close', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'close'), a.prototype),
    c(a.prototype, 'closeContainer', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'closeContainer'), a.prototype),
    c(a.prototype, 'destroyContainer', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'destroyContainer'), a.prototype),
    c(a.prototype, 'closeComponent', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'closeComponent'), a.prototype),
    c(a.prototype, 'showContainer', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'showContainer'), a.prototype),
    c(a.prototype, 'showComponent', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'showComponent'), a.prototype),
    c(a.prototype, 'hideContainer', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'hideContainer'), a.prototype),
    c(a.prototype, 'hideComponent', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'hideComponent'), a.prototype),
    c(a.prototype, 'createPrerenderTemplate', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'createPrerenderTemplate'), a.prototype),
    c(a.prototype, 'openContainer', [m.H], Object.getOwnPropertyDescriptor(a.prototype, 'openContainer'), a.prototype),
    a);
    O.activeComponents = [];
  },
  './node_modules/xcomponent/src/component/parent/props.js': function(e, n, t) {
    'use strict';
    function r(e) {
      return null !== e && void 0 !== e && '' !== e;
    }
    function o(e, n, t, o, i) {
      var c = e.getProp(o),
        a = void 0;
      !(a = c.value ? c.value : !c.def || (t.hasOwnProperty(o) && r(i)) ? i : c.def.call(e, t)) &&
        c.alias &&
        t[c.alias] &&
        (a = t[c.alias]);
      var s = !1;
      if ((c.decorate && null !== a && void 0 !== a && ((a = c.decorate(a, t)), (s = !0)), 'boolean' === c.type)) a = Boolean(a);
      else if ('function' === c.type) {
        if ((!a && c.noop && ((a = d.I), !s && c.decorate && (a = c.decorate(a, t))), a && 'function' == typeof a)) {
          (a = a.bind(n)), c.denodeify && (a = Object(d.j)(a)), c.promisify && (a = Object(d.M)(a));
          var u = a;
          (a = function() {
            return e.log('call_prop_' + o), u.apply(this, arguments);
          }),
            c.once && (a = Object(d.K)(a)),
            c.memoize && (a = Object(d.G)(a));
        }
      } else 'string' === c.type || 'object' === c.type || ('number' === c.type && void 0 !== a && (a = parseInt(a, 10)));
      return a;
    }
    function i(e, n, t) {
      var r = (!(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], {});
      (t = t || {}), (r.version = e.version);
      for (var i = Object.keys(t), c = Array.isArray(i), a = 0, i = c ? i : i[Symbol.iterator](); ; ) {
        var s;
        if (c) {
          if (a >= i.length) break;
          s = i[a++];
        } else {
          if (((a = i.next()), a.done)) break;
          s = a.value;
        }
        var u = s;
        -1 !== e.getPropNames().indexOf(u) ? (r[u] = o(e, n, t, u, t[u])) : (r[u] = t[u]);
      }
      for (var d = e.getPropNames(), l = Array.isArray(d), f = 0, d = l ? d : d[Symbol.iterator](); ; ) {
        var p;
        if (l) {
          if (f >= d.length) break;
          p = d[f++];
        } else {
          if (((f = d.next()), f.done)) break;
          p = f.value;
        }
        var m = p;
        if (!(t.hasOwnProperty(m) || (n.props && n.props.hasOwnProperty(m)))) {
          var h = o(e, n, t, m, t[m]);
          void 0 !== h && (r[m] = h);
        }
      }
      return r;
    }
    function c(e, n, t) {
      return u.a.try(function() {
        return 'function' == typeof e.queryParam ? e.queryParam(t) : 'string' == typeof e.queryParam ? e.queryParam : n;
      });
    }
    function a(e, n, t) {
      return u.a.try(function() {
        return 'function' == typeof e.queryValue ? e.queryValue(t) : t;
      });
    }
    function s(e, n) {
      var t = {};
      return u.a
        .all(
          Object.keys(n).map(function(r) {
            var o = e[r];
            if (o)
              return u.a
                .resolve()
                .then(function() {
                  var e = n[r];
                  if (e && o.queryParam) return e;
                })
                .then(function(e) {
                  e &&
                    u.a.all([c(o, r, e), a(o, r, e)]).then(function(e) {
                      var n = e[0],
                        i = e[1],
                        c = void 0;
                      if ('boolean' == typeof i) c = '1';
                      else if ('string' == typeof i) c = i.toString();
                      else {
                        if ('function' == typeof i) return;
                        if ('object' === (void 0 === i ? 'undefined' : l(i)) && null !== i) {
                          if ('json' !== o.serialization) {
                            c = Object(d.o)(i, r);
                            for (var a in c) t[a] = c[a];
                            return;
                          }
                          c = JSON.stringify(i);
                        } else 'number' == typeof i && (c = i.toString());
                      }
                      t[n] = c;
                    });
                });
          })
        )
        .then(function() {
          return t;
        });
    }
    (n.a = i), (n.b = s);
    var u = t('./node_modules/zalgo-promise/src/index.js'),
      d = t('./node_modules/xcomponent/src/lib/index.js'),
      l = (t('./node_modules/xcomponent/src/component/component/index.js'),
      t('./node_modules/xcomponent/src/component/component/props.js'),
      t('./node_modules/xcomponent/src/component/parent/index.js'),
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
          });
  },
  './node_modules/xcomponent/src/component/parent/validate.js': function(e, n, t) {
    'use strict';
    function r(e, n, t, r) {
      var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
      if (null !== t && void 0 !== t && '' !== t) {
        if (!t || 'function' != typeof t.then || !e.promise) {
          if ('function' === e.type) {
            if (!(t instanceof Function)) throw new Error('Prop is not of type function: ' + n);
          } else if ('string' === e.type) {
            if ('string' != typeof t) throw new Error('Prop is not of type string: ' + n);
          } else if ('object' === e.type)
            try {
              JSON.stringify(t);
            } catch (e) {
              throw new Error('Unable to serialize prop: ' + n);
            }
          else if ('number' === e.type && isNaN(parseInt(t, 10))) throw new Error('Prop is not a number: ' + n);
          'function' == typeof e.validate && t && e.validate(t, r);
        }
      } else if (o && !1 !== e.required && !e.hasOwnProperty('def')) throw new Error('Prop is required: ' + n);
    }
    function o(e, n) {
      var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (((n = n || {}), n.env && 'object' === i(e.url) && !e.url[n.env])) throw new Error('Invalid env: ' + n.env);
      for (var o = e.getPropNames(), c = Array.isArray(o), a = 0, o = c ? o : o[Symbol.iterator](); ; ) {
        var s;
        if (c) {
          if (a >= o.length) break;
          s = o[a++];
        } else {
          if (((a = o.next()), a.done)) break;
          s = a.value;
        }
        var u = s,
          d = e.getProp(u);
        if (d.alias && n.hasOwnProperty(d.alias)) {
          var l = n[d.alias];
          delete n[d.alias], n[u] || (n[u] = l);
        }
      }
      for (var f = Object.keys(n), p = Array.isArray(f), m = 0, f = p ? f : f[Symbol.iterator](); ; ) {
        var h;
        if (p) {
          if (m >= f.length) break;
          h = f[m++];
        } else {
          if (((m = f.next()), m.done)) break;
          h = m.value;
        }
        var b = h,
          y = e.getProp(b),
          v = n[b];
        y && r(y, b, v, n, t);
      }
      for (var w = e.getPropNames(), g = Array.isArray(w), j = 0, w = g ? w : w[Symbol.iterator](); ; ) {
        var E;
        if (g) {
          if (j >= w.length) break;
          E = w[j++];
        } else {
          if (((j = w.next()), j.done)) break;
          E = j.value;
        }
        var O = E,
          _ = e.getProp(O),
          S = n[O];
        _ && !n.hasOwnProperty(O) && r(_, O, S, n, t);
      }
    }
    n.a = o;
    var i = (t('./node_modules/xcomponent/src/component/component/index.js'),
    t('./node_modules/xcomponent/src/component/component/props.js'),
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
        });
  },
  './node_modules/xcomponent/src/component/window.js': function(e, n, t) {
    'use strict';
    function r(e) {
      return e.replace(/^[^a-z0-9A-Z]+|[^a-z0-9A-Z]+$/g, '').replace(/[^a-z0-9A-Z]+/g, '_');
    }
    function o(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      (t.id = Object(d.Y)()), (t.domain = Object(a.f)(window));
      var o = r(e),
        i = r(n),
        c = u.a
          .encode(JSON.stringify(t))
          .replace(/\=/g, '')
          .toLowerCase();
      if (!o) throw new Error('Invalid name: ' + e + ' - must contain alphanumeric characters');
      if (!i) throw new Error('Invalid version: ' + n + ' - must contain alphanumeric characters');
      return [l.XCOMPONENT, o, i, c, ''].join('__');
    }
    function i() {
      return p().domain;
    }
    function c(e) {
      var n = e.ref,
        t = e.uid,
        r = e.distance,
        o = void 0;
      if (
        (n === l.WINDOW_REFERENCES.OPENER
          ? (o = Object(a.i)(window))
          : n === l.WINDOW_REFERENCES.TOP
            ? (o = Object(a.k)(window))
            : n === l.WINDOW_REFERENCES.PARENT && (o = r ? Object(a.h)(window, r) : Object(a.j)(window)),
        n === l.WINDOW_REFERENCES.GLOBAL)
      ) {
        var i = Object(a.d)(window);
        if (i)
          for (var c = Object(a.c)(i), s = Array.isArray(c), u = 0, c = s ? c : c[Symbol.iterator](); ; ) {
            var f;
            if (s) {
              if (u >= c.length) break;
              f = c[u++];
            } else {
              if (((u = c.next()), u.done)) break;
              f = u.value;
            }
            var p = f,
              m = Object(d.z)(p);
            if (m && m.windows && m.windows[t]) {
              o = m.windows[t];
              break;
            }
          }
      }
      if (!o) throw new Error('Unable to find window by ref');
      return o;
    }
    (n.a = o),
      t.d(n, 'f', function() {
        return f;
      }),
      t.d(n, 'b', function() {
        return p;
      }),
      (n.d = i),
      t.d(n, 'c', function() {
        return m;
      }),
      t.d(n, 'e', function() {
        return h;
      });
    var a = t('./node_modules/cross-domain-utils/src/index.js'),
      s = t('./node_modules/hi-base32/src/base32.js'),
      u = t.n(s),
      d = t('./node_modules/xcomponent/src/lib/index.js'),
      l = t('./node_modules/xcomponent/src/constants.js'),
      f = Object(d.G)(function() {
        return !!window.name && window.name.split('__')[0] === l.XCOMPONENT;
      }),
      p = Object(d.G)(function() {
        if (!window.name) throw new Error('Can not get component meta without window name');
        var e = window.name.split('__'),
          n = e[0],
          t = e[1],
          r = e[2],
          o = e[3];
        if (n !== l.XCOMPONENT) throw new Error('Window not rendered by xcomponent - got ' + n);
        var i = void 0;
        try {
          i = JSON.parse(u.a.decode(o.toUpperCase()));
        } catch (e) {
          throw new Error('Can not decode component-meta');
        }
        return (i.name = t), (i.version = r.replace(/_/g, '.')), i;
      }),
      m = Object(d.G)(function() {
        var e = p();
        if (!e) throw new Error('Can not get parent component window - window not rendered by xcomponent');
        return c(e.componentParent);
      }),
      h = Object(d.G)(function() {
        var e = p();
        if (!e) throw new Error('Can not get parent component window - window not rendered by xcomponent');
        return c(e.renderParent);
      });
  },
  './node_modules/xcomponent/src/constants.js': function(e, n, t) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 }),
      t.d(n, 'XCOMPONENT', function() {
        return o;
      }),
      t.d(n, '__XCOMPONENT__', function() {
        return i;
      }),
      t.d(n, 'POST_MESSAGE', function() {
        return c;
      }),
      t.d(n, 'PROP_TYPES', function() {
        return a;
      }),
      t.d(n, 'INITIAL_PROPS', function() {
        return s;
      }),
      t.d(n, 'WINDOW_REFERENCES', function() {
        return u;
      }),
      t.d(n, 'PROP_TYPES_LIST', function() {
        return d;
      }),
      t.d(n, 'CONTEXT_TYPES', function() {
        return l;
      }),
      t.d(n, 'CLASS_NAMES', function() {
        return f;
      }),
      t.d(n, 'EVENTS', function() {
        return p;
      }),
      t.d(n, 'ATTRIBUTES', function() {
        return m;
      }),
      t.d(n, 'ANIMATION_NAMES', function() {
        return h;
      }),
      t.d(n, 'EVENT_NAMES', function() {
        return b;
      }),
      t.d(n, 'CLOSE_REASONS', function() {
        return y;
      }),
      t.d(n, 'CONTEXT_TYPES_LIST', function() {
        return v;
      }),
      t.d(n, 'DELEGATE', function() {
        return w;
      }),
      t.d(n, 'WILDCARD', function() {
        return g;
      }),
      t.d(n, 'DEFAULT_DIMENSIONS', function() {
        return j;
      });
    var r = t('./node_modules/xcomponent/src/lib/index.js'),
      o = 'xcomponent',
      i = '__' + o + '__',
      c = {
        INIT: o + '_init',
        PROPS: o + '_props',
        PROP_CALLBACK: o + '_prop_callback',
        CLOSE: o + '_close',
        CHECK_CLOSE: o + '_check_close',
        REDIRECT: o + '_redirect',
        RESIZE: o + '_resize',
        ONRESIZE: o + '_onresize',
        DELEGATE: o + '_delegate',
        ALLOW_DELEGATE: o + '_allow_delegate',
        ERROR: o + '_error',
        HIDE: o + '_hide',
        SHOW: o + '_show'
      },
      a = { STRING: 'string', OBJECT: 'object', FUNCTION: 'function', BOOLEAN: 'boolean', NUMBER: 'number' },
      s = { RAW: 'raw', UID: 'uid' },
      u = { OPENER: 'opener', TOP: 'top', PARENT: 'parent', GLOBAL: 'global' },
      d = Object(r.Z)(a),
      l = { IFRAME: 'iframe', POPUP: 'popup' },
      f = {
        XCOMPONENT: '' + o,
        OUTLET: o + '-outlet',
        COMPONENT_FRAME: o + '-component-frame',
        PRERENDER_FRAME: o + '-prerender-frame',
        VISIBLE: o + '-visible',
        INVISIBLE: o + '-invisible'
      },
      p = { CLOSE: o + '-close' },
      m = { IFRAME_PLACEHOLDER: 'data-xcomponent-' + o + '-placeholder' },
      h = {
        SHOW_CONTAINER: o + '-show-container',
        SHOW_COMPONENT: o + '-show-component',
        HIDE_CONTAINER: o + '-hide-container',
        HIDE_COMPONENT: o + '-hide-component'
      },
      b = { CLICK: 'click' },
      y = {
        PARENT_CALL: 'parent_call',
        CHILD_CALL: 'child_call',
        CLOSE_DETECTED: 'close_detected',
        USER_CLOSED: 'user_closed',
        PARENT_CLOSE_DETECTED: 'parent_close_detected'
      },
      v = Object(r.Z)(l),
      w = { CALL_ORIGINAL: 'call_original', CALL_DELEGATE: 'call_delegate' },
      g = '*',
      j = { WIDTH: 300, HEIGHT: 150 };
  },
  './node_modules/xcomponent/src/drivers/angular.js': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return o;
    });
    var r = t('./node_modules/xcomponent/src/lib/index.js'),
      o = (t('./node_modules/xcomponent/src/component/component/index.js'),
      {
        global: function() {
          return window.angular;
        },
        register: function(e, n) {
          return n.module(e.tag, []).directive(Object(r.i)(e.tag), function() {
            for (var n = {}, t = e.getPropNames(), o = Array.isArray(t), i = 0, t = o ? t : t[Symbol.iterator](); ; ) {
              var c;
              if (o) {
                if (i >= t.length) break;
                c = t[i++];
              } else {
                if (((i = t.next()), i.done)) break;
                c = i.value;
              }
              n[c] = '=';
            }
            return (
              e.looseProps && (n.props = '='),
              {
                scope: n,
                restrict: 'E',
                controller: [
                  '$scope',
                  '$element',
                  function(t, o) {
                    function i(e) {
                      if ('$apply' !== t.$root.$$phase && '$digest' !== t.$root.$$phase)
                        try {
                          t.$apply();
                        } catch (e) {
                          console.warn('Error trying to scope.apply on prop function call:', e);
                        }
                    }
                    if (e.looseProps && !t.props)
                      throw new Error('For angular bindings to work, prop definitions must be passed to xcomponent.create');
                    e.log('instantiate_angular_component');
                    var c = function() {
                        var e = void 0;
                        if (t.props) e = t.props;
                        else {
                          e = {};
                          for (var o = Object.keys(n), c = Array.isArray(o), a = 0, o = c ? o : o[Symbol.iterator](); ; ) {
                            var s;
                            if (c) {
                              if (a >= o.length) break;
                              s = o[a++];
                            } else {
                              if (((a = o.next()), a.done)) break;
                              s = a.value;
                            }
                            var u = s;
                            e[u] = t[u];
                          }
                        }
                        return (e = Object(r.O)(e, function(e, n, t) {
                          if ('function' == typeof e)
                            return function() {
                              var n = e.apply(this, arguments);
                              return i(), n;
                            };
                        }));
                      },
                      a = e.init(c(), null, o[0]);
                    a.render(o[0]),
                      t.$watch(function() {
                        a.updateProps(c());
                      });
                  }
                ]
              }
            );
          });
        }
      });
  },
  './node_modules/xcomponent/src/drivers/angular2.js': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return i;
    });
    var r = t('./node_modules/xcomponent/src/lib/index.js'),
      o = (t('./node_modules/xcomponent/src/component/component/index.js'),
      Object.assign ||
        function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      i = {
        global: function() {},
        register: function(e, n) {
          var t = n.Component,
            i = n.NgModule,
            c = n.ElementRef,
            a = n.NgZone;
          e.log('initializing angular2 component');
          var s = function(e) {
              return Object(r.O)(o({}, e.internalProps, e.props), function(n, t, r) {
                if ('function' == typeof n)
                  return function() {
                    var t = this,
                      r = arguments;
                    return e.zone.run(function() {
                      return n.apply(t, r);
                    });
                  };
              });
            },
            u = t({ selector: e.tag, template: '<div></div>', inputs: ['props'] }).Class({
              constructor: [
                c,
                a,
                function(e, n) {
                  (this.elementRef = e), (this.zone = n);
                }
              ],
              ngOnInit: function() {
                var n = this.elementRef.nativeElement,
                  t = e.init(s(this), null, n);
                t.render(n), (this.parent = t);
              },
              ngOnChanges: function() {
                this.parent && this.parent.updateProps(s(this));
              }
            });
          return i({ declarations: [u], exports: [u] }).Class({ constructor: function() {} });
        }
      };
  },
  './node_modules/xcomponent/src/drivers/ember.js': function(e, n) {},
  './node_modules/xcomponent/src/drivers/glimmer.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
    }
    function o(e, n) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !n || ('object' != typeof n && 'function' != typeof n) ? e : n;
    }
    function i(e, n) {
      if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function, not ' + typeof n);
      (e.prototype = Object.create(n && n.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
    }
    t.d(n, 'a', function() {
      return a;
    });
    var c = (t('./node_modules/xcomponent/src/component/component/index.js'),
      Object.assign ||
        function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      a = {
        global: function() {},
        register: function(e, n) {
          return (function(n) {
            function t() {
              return r(this, t), o(this, n.apply(this, arguments));
            }
            return (
              i(t, n),
              (t.prototype.didInsertElement = function() {
                e.render(c({}, this.args), this.element);
              }),
              t
            );
          })(n);
        }
      };
  },
  './node_modules/xcomponent/src/drivers/index.js': function(e, n, t) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var r = t('./node_modules/xcomponent/src/drivers/script.js');
    t.d(n, 'htmlComponent', function() {
      return r.a;
    });
    var o = t('./node_modules/xcomponent/src/drivers/react.js');
    t.d(n, 'react', function() {
      return o.a;
    });
    var i = t('./node_modules/xcomponent/src/drivers/vue.js');
    t.d(n, 'vue', function() {
      return i.a;
    });
    var c = t('./node_modules/xcomponent/src/drivers/angular.js');
    t.d(n, 'angular', function() {
      return c.a;
    });
    var a = t('./node_modules/xcomponent/src/drivers/ember.js');
    t.n(a);
    for (var s in a)
      ['htmlComponent', 'react', 'vue', 'angular', 'default'].indexOf(s) < 0 &&
        (function(e) {
          t.d(n, e, function() {
            return a[e];
          });
        })(s);
    var u = t('./node_modules/xcomponent/src/drivers/glimmer.js');
    t.d(n, 'glimmer', function() {
      return u.a;
    });
    var d = t('./node_modules/xcomponent/src/drivers/angular2.js');
    t.d(n, 'angular2', function() {
      return d.a;
    });
  },
  './node_modules/xcomponent/src/drivers/react.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
    }
    function o(e, n) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !n || ('object' != typeof n && 'function' != typeof n) ? e : n;
    }
    function i(e, n) {
      if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function, not ' + typeof n);
      (e.prototype = Object.create(n && n.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
    }
    t.d(n, 'a', function() {
      return a;
    });
    var c = t('./node_modules/xcomponent/src/lib/index.js'),
      a = (t('./node_modules/xcomponent/src/component/component/index.js'),
      {
        global: function() {
          if (window.React && window.ReactDOM) return { React: window.React, ReactDOM: window.ReactDOM };
        },
        register: function(e, n) {
          var t = n.React,
            a = n.ReactDOM;
          return (
            t.createClass
              ? (e.react = t.createClass({
                  render: function() {
                    return t.createElement('div', null);
                  },
                  componentDidMount: function() {
                    e.log('instantiate_react_component');
                    var n = a.findDOMNode(this),
                      t = e.init(Object(c.t)({}, this.props), null, n);
                    this.setState({ parent: t }), t.render(n);
                  },
                  componentDidUpdate: function() {
                    this.state && this.state.parent && this.state.parent.updateProps(Object(c.t)({}, this.props));
                  }
                }))
              : (e.react = (function(n) {
                  function s() {
                    return r(this, s), o(this, n.apply(this, arguments));
                  }
                  return (
                    i(s, n),
                    (s.prototype.render = function() {
                      return t.createElement('div', null);
                    }),
                    (s.prototype.componentDidMount = function() {
                      e.log('instantiate_react_component');
                      var n = a.findDOMNode(this),
                        t = e.init(Object(c.t)({}, this.props), null, n);
                      this.setState({ parent: t }), t.render(n);
                    }),
                    (s.prototype.componentDidUpdate = function() {
                      this.state && this.state.parent && this.state.parent.updateProps(Object(c.t)({}, this.props));
                    }),
                    s
                  );
                })(t.Component)),
            e.react
          );
        }
      });
  },
  './node_modules/xcomponent/src/drivers/script.js': function(module, __webpack_exports__, __webpack_require__) {
    'use strict';
    __webpack_require__.d(__webpack_exports__, 'a', function() {
      return htmlComponent;
    });
    var __WEBPACK_IMPORTED_MODULE_0__component_component__ = __webpack_require__(
        './node_modules/xcomponent/src/component/component/index.js'
      ),
      htmlComponent = {
        global: function() {
          return window.document;
        },
        register: function register(component, document) {
          function render(element) {
            if (
              element &&
              element.tagName &&
              'script' === element.tagName.toLowerCase() &&
              element.attributes.type &&
              'application/x-component' === element.attributes.type.value &&
              element.parentNode
            ) {
              var tag = element.getAttribute('data-component');
              if (tag && tag === component.tag) {
                component.log('instantiate_script_component');
                var props = element.innerText ? eval('(' + element.innerText + ')') : {},
                  container = document.createElement('div');
                if (!element.parentNode) throw new Error('Element has no parent');
                element.parentNode.replaceChild(container, element), component.render(props, container);
              }
            }
          }
          function scan() {
            for (
              var e = Array.prototype.slice.call(document.getElementsByTagName('script')),
                n = e,
                t = Array.isArray(n),
                r = 0,
                n = t ? n : n[Symbol.iterator]();
              ;

            ) {
              var o;
              if (t) {
                if (r >= n.length) break;
                o = n[r++];
              } else {
                if (((r = n.next()), r.done)) break;
                o = r.value;
              }
              render(o);
            }
          }
          scan(),
            document.addEventListener('DOMContentLoaded', scan),
            window.addEventListener('load', scan),
            document.addEventListener('DOMNodeInserted', function(e) {
              render(e.target);
            });
        }
      };
  },
  './node_modules/xcomponent/src/drivers/vue.js': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return o;
    });
    var r = (t('./node_modules/xcomponent/src/component/component/index.js'), t('./node_modules/xcomponent/src/lib/index.js')),
      o = {
        global: function() {},
        register: function(e) {
          return {
            template: '<div></div>',
            inheritAttrs: !1,
            mounted: function() {
              var n = this.$el;
              (this.parent = e.init(Object(r.t)({}, this.$attrs), null, n)), this.parent.render(n);
            },
            beforeUpdate: function() {
              this.parent && this.$attrs && this.parent.updateProps(Object(r.t)({}, this.$attrs));
            }
          };
        }
      };
  },
  './node_modules/xcomponent/src/error.js': function(e, n, t) {
    'use strict';
    function r(e) {
      this.message = e;
    }
    function o(e) {
      this.message = e;
    }
    function i(e) {
      this.message = e;
    }
    (n.b = r),
      (n.a = o),
      (n.c = i),
      (r.prototype = Object.create(Error.prototype)),
      (o.prototype = Object.create(Error.prototype)),
      (i.prototype = Object.create(Error.prototype));
  },
  './node_modules/xcomponent/src/index.js': function(e, n, t) {
    'use strict';
    var r = t('./node_modules/xcomponent/src/interface.js');
    t.d(n, 'a', function() {
      return r.create;
    });
  },
  './node_modules/xcomponent/src/interface.js': function(e, n, t) {
    'use strict';
    function r(e) {
      return new c.a(e);
    }
    function o(e) {
      return c.a.getByTag(e);
    }
    function i() {
      return a.a.destroyAll();
    }
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.create = r),
      (n.getByTag = o),
      (n.destroyAll = i),
      t.d(n, 'postRobot', function() {
        return f;
      }),
      t.d(n, 'CONSTANTS', function() {
        return p;
      });
    var c = (t('./node_modules/zalgo-promise/src/index.js'), t('./node_modules/xcomponent/src/component/index.js')),
      a = t('./node_modules/xcomponent/src/component/parent/index.js'),
      s = t('./node_modules/xcomponent/src/lib/index.js');
    t.d(n, 'getCurrentScriptDir', function() {
      return s.w;
    });
    var u = t('./node_modules/post-robot/src/index.js'),
      d = t('./node_modules/xcomponent/src/error.js');
    t.d(n, 'PopupOpenError', function() {
      return d.b;
    }),
      t.d(n, 'IntegrationError', function() {
        return d.a;
      }),
      t.d(n, 'RenderError', function() {
        return d.c;
      });
    var l = t('./node_modules/xcomponent/src/constants.js'),
      f = u,
      p = l;
  },
  './node_modules/xcomponent/src/lib/css.js': function(e, n, t) {
    'use strict';
    function r(e) {
      return 'string' == typeof e && /^[0-9]+%$/.test(e);
    }
    function o(e) {
      return 'string' == typeof e && /^[0-9]+px$/.test(e);
    }
    function i(e) {
      if ('number' == typeof e) return e;
      var n = e.match(/^([0-9]+)(px|%)$/);
      if (!n) throw new Error('Could not match css value from ' + e);
      return parseInt(n[1], 10);
    }
    function c(e) {
      return i(e) + 'px';
    }
    function a(e) {
      return 'number' == typeof e ? c(e) : r(e) ? e : c(e);
    }
    (n.a = r), (n.b = o), (n.c = a);
  },
  './node_modules/xcomponent/src/lib/decorators.js': function(e, n, t) {
    'use strict';
    function r(e, n, t) {
      var r = t.value;
      (t.value = function() {
        return (
          (this.__memoized__ = this.__memoized__ || {}),
          this.__memoized__.hasOwnProperty(n) || (this.__memoized__[n] = r.apply(this, arguments)),
          this.__memoized__[n]
        );
      }),
        (t.value.displayName = n + ':memoized');
    }
    n.a = r;
    t('./node_modules/zalgo-promise/src/index.js');
  },
  './node_modules/xcomponent/src/lib/dom.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      e.appendChild(n);
    }
    function o(e) {
      return (
        e instanceof window.Element ||
        (null !== e &&
          'object' === (void 0 === e ? 'undefined' : $(e)) &&
          1 === e.nodeType &&
          'object' === $(e.style) &&
          'object' === $(e.ownerDocument))
      );
    }
    function i(e, n) {
      return Array.prototype.slice.call(e.querySelectorAll(n));
    }
    function c(e) {
      if (o(e)) return e;
      if ('string' == typeof e) {
        var n = document.getElementById(e);
        if (n) return n;
        if ((document.querySelector && (n = document.querySelector(e)), n)) return n;
      }
    }
    function a(e) {
      var n = c(e);
      if (n) return n;
      throw new Error('Can not find element: ' + Object(J.k)(e));
    }
    function s() {
      return 'complete' === window.document.readyState;
    }
    function u(e) {
      return new X.a(function(n, t) {
        var r = Object(J.k)(e),
          o = c(e);
        if (o) return n(o);
        if (s()) return t(new Error('Document is ready and element ' + r + ' does not exist'));
        var i = setInterval(function() {
          return (
            (o = c(e)),
            o
              ? (clearInterval(i), n(o))
              : s()
                ? (clearInterval(i), t(new Error('Document is ready and element ' + r + ' does not exist')))
                : void 0
          );
        }, 10);
      });
    }
    function d(e, n) {
      try {
        e.document.open(), e.document.write(n), e.document.close();
      } catch (t) {
        try {
          e.location = 'javascript: document.open(); document.write(' + JSON.stringify(n) + '); document.close();';
        } catch (e) {}
      }
    }
    function l(e, n) {
      var t = n.tagName.toLowerCase();
      if ('html' !== t) throw new Error('Expected element to be html, got ' + t);
      for (var r = e.document.documentElement; r.children && r.children.length; ) r.removeChild(r.children[0]);
      for (; n.children.length; ) r.appendChild(n.children[0]);
    }
    function f(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.document;
      e.styleSheet ? (e.styleSheet.cssText = n) : e.appendChild(t.createTextNode(n));
    }
    function p() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'div',
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = arguments[2];
      e = e.toLowerCase();
      var o = document.createElement(e);
      if ((n.style && Object(J.f)(o.style, n.style), n.class && (o.className = n.class.join(' ')), n.attributes))
        for (var i = Object.keys(n.attributes), c = Array.isArray(i), a = 0, i = c ? i : i[Symbol.iterator](); ; ) {
          var s;
          if (c) {
            if (a >= i.length) break;
            s = i[a++];
          } else {
            if (((a = i.next()), a.done)) break;
            s = a.value;
          }
          var u = s;
          o.setAttribute(u, n.attributes[u]);
        }
      if ((n.styleSheet && f(o, n.styleSheet), t && r(t, o), n.html))
        if ('iframe' === e) {
          if (!t || !o.contentWindow) throw new Error('Iframe html can not be written unless container provided and iframe in DOM');
          d(o.contentWindow, n.html);
        } else o.innerHTML = n.html;
      return o;
    }
    function m(e) {
      if (ne.has(e)) {
        var n = ne.get(e);
        if (n) return n;
      }
      var t = new X.a(function(n, t) {
        e.addEventListener('load', function() {
          Object(q.u)(e), n(e);
        }),
          e.addEventListener('error', function(r) {
            e.contentWindow ? n(e) : t(r);
          });
      });
      return ne.set(e, t), t;
    }
    function h(e) {
      return e.contentWindow
        ? X.a.resolve(e.contentWindow)
        : m(e).then(function(e) {
            if (!e.contentWindow) throw new Error('Could not find window in iframe');
            return e.contentWindow;
          });
    }
    function b() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments[1],
        t = a(n),
        r = e.attributes || {},
        o = e.style || {},
        i = p('iframe', {
          attributes: K({ frameBorder: '0', allowTransparency: 'true' }, r),
          style: K({ backgroundColor: 'transparent' }, o),
          html: e.html,
          class: e.class
        });
      return (
        m(i),
        t.appendChild(i),
        (e.url || window.navigator.userAgent.match(/MSIE|Edge/i)) && i.setAttribute('src', e.url || 'about:blank'),
        i
      );
    }
    function y(e, n, t) {
      return (
        e.addEventListener(n, t),
        {
          cancel: function() {
            e.removeEventListener(n, t);
          }
        }
      );
    }
    function v() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Object.keys(e)
        .filter(function(n) {
          return 'string' == typeof e[n];
        })
        .map(function(n) {
          return Object(J.n)(n) + '=' + Object(J.n)(e[n]);
        })
        .join('&');
    }
    function w(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return n && Object.keys(n).length ? v(K({}, te(e), n)) : e;
    }
    function g(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = n.query || {},
        r = n.hash || {},
        o = void 0,
        i = void 0,
        c = void 0,
        a = e.split('#');
      (o = a[0]), (c = a[1]);
      var s = o.split('?');
      (o = s[0]), (i = s[1]);
      var u = w(i, t),
        d = w(c, r);
      return u && (o = o + '?' + u), d && (o = o + '#' + d), o;
    }
    function j(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3;
      return new X.a(function(t, r) {
        var o = a(e),
          i = o.getBoundingClientRect(),
          c = void 0,
          s = void 0;
        (c = setInterval(function() {
          var e = o.getBoundingClientRect();
          if (
            i.top === e.top &&
            i.bottom === e.bottom &&
            i.left === e.left &&
            i.right === e.right &&
            i.width === e.width &&
            i.height === e.height
          )
            return clearTimeout(s), clearInterval(c), t();
          i = e;
        }, 50)),
          (s = setTimeout(function() {
            clearInterval(c), r(new Error('Timed out waiting for element to stop animating after ' + n + 'ms'));
          }, n));
      });
    }
    function E(e) {
      return { width: e.offsetWidth, height: e.offsetHeight };
    }
    function O(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'auto',
        t = e.style,
        r = t.overflow,
        o = t.overflowX,
        i = t.overflowY;
      return (
        (e.style.overflow = e.style.overflowX = e.style.overflowY = n),
        {
          reset: function() {
            (e.style.overflow = r), (e.style.overflowX = o), (e.style.overflowY = i);
          }
        }
      );
    }
    function _(e, n, t) {
      var r = t.width,
        o = void 0 === r || r,
        i = t.height,
        c = void 0 === i || i,
        a = t.threshold,
        s = void 0 === a ? 0 : a;
      return !!(o && Math.abs(e.width - n.width) > s) || !!(c && Math.abs(e.height - n.height) > s);
    }
    function S(e, n) {
      var t = n.width,
        r = void 0 === t || t,
        o = n.height,
        i = void 0 === o || o,
        c = n.threshold,
        a = void 0 === c ? 0 : c,
        s = E(e);
      return {
        check: function() {
          var n = E(e);
          return { changed: _(s, n, { width: r, height: i, threshold: a }), dimensions: n };
        },
        reset: function() {
          s = E(e);
        }
      };
    }
    function x(e, n) {
      var t = n.width,
        r = void 0 === t || t,
        o = n.height,
        i = void 0 === o || o,
        c = n.delay,
        a = void 0 === c ? 50 : c,
        s = n.threshold,
        u = void 0 === s ? 0 : s;
      return new X.a(function(n) {
        function t() {
          var e = o.check(),
            n = e.changed,
            r = e.dimensions;
          n && (o.reset(), window.removeEventListener('resize', t), s(r));
        }
        var o = S(e, { width: r, height: i, threshold: u }),
          c = void 0,
          s = Object(V.a)(function(e) {
            return clearInterval(c), n(e);
          }, 4 * a);
        (c = setInterval(function() {
          var e = o.check(),
            n = e.changed,
            t = e.dimensions;
          if (n) return o.reset(), s(t);
        }, a)),
          window.addEventListener('resize', t);
      });
    }
    function A(e, n) {
      var t = n.width,
        r = n.height,
        o = E(e);
      return (!t || o.width === window.innerWidth) && (!r || o.height === window.innerHeight);
    }
    function L(e, n, t) {
      t = Object(V.e)(t);
      for (var r = n, o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator](); ; ) {
        var c;
        if (o) {
          if (i >= r.length) break;
          c = r[i++];
        } else {
          if (((i = r.next()), i.done)) break;
          c = i.value;
        }
        var a = c;
        e.addEventListener(a, t);
      }
      return {
        cancel: Object(V.e)(function() {
          for (var r = n, o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator](); ; ) {
            var c;
            if (o) {
              if (i >= r.length) break;
              c = r[i++];
            } else {
              if (((i = r.next()), i.done)) break;
              c = i.value;
            }
            var a = c;
            e.removeEventListener(a, t);
          }
        })
      };
    }
    function C(e, n, t) {
      e.style[n] = t;
      for (var r = Object(J.a)(n), o = re, i = Array.isArray(o), c = 0, o = i ? o : o[Symbol.iterator](); ; ) {
        var a;
        if (i) {
          if (c >= o.length) break;
          a = o[c++];
        } else {
          if (((c = o.next()), c.done)) break;
          a = c.value;
        }
        var s = a;
        e.style['' + s + r] = t;
      }
    }
    function T(e, n) {
      var t = e.ownerDocument.styleSheets;
      try {
        for (var r = 0; r < t.length; r++) {
          var o = t[r].cssRules;
          if (o)
            for (var i = 0; i < o.length; i++) {
              var c = o[i];
              if (c && (c.type === ie && c.name === n)) return !0;
            }
        }
      } catch (e) {
        return !1;
      }
      return !1;
    }
    function I(e, n, t) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e3;
      return new X.a(function(o, i) {
        function c() {
          C(s, 'animationName', ''), clearTimeout(d), clearTimeout(l), f.cancel(), p.cancel();
        }
        var s = a(e);
        if (!s || !T(s, n)) return o();
        var u = !1,
          d = void 0,
          l = void 0,
          f = void 0,
          p = void 0;
        (f = L(s, ce, function(e) {
          e.target === s &&
            e.animationName === n &&
            (clearTimeout(d),
            e.stopPropagation(),
            f.cancel(),
            (u = !0),
            (l = setTimeout(function() {
              c(), o();
            }, r)));
        })),
          (p = L(s, ae, function(e) {
            if (e.target === s && e.animationName === n)
              return (
                c(),
                'string' == typeof e.animationName && e.animationName !== n
                  ? i('Expected animation name to be ' + n + ', found ' + e.animationName)
                  : o()
              );
          })),
          C(s, 'animationName', n),
          (d = setTimeout(function() {
            if (!u) return c(), o();
          }, 200)),
          t && t(c);
      });
    }
    function P(e) {
      e.style.setProperty('display', '');
    }
    function N(e) {
      e.style.setProperty('display', se.DISPLAY.NONE, se.IMPORTANT);
    }
    function M(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }
    function D(e, n, t) {
      var r = I(e, n, t);
      return P(e), r;
    }
    function R(e, n, t) {
      return I(e, n, t).then(function() {
        N(e);
      });
    }
    function k(e, n) {
      e.classList ? e.classList.add(n) : -1 === e.className.split(/\s+/).indexOf(n) && (e.className += ' ' + n);
    }
    function W(e, n) {
      e.classList ? e.classList.remove(n) : -1 !== e.className.split(/\s+/).indexOf(n) && (e.className = e.className.replace(n, ''));
    }
    function z() {
      return (
        console.warn('Do not use xcomponent.getCurrentScriptDir() in production -- browser support is limited'),
        document.currentScript
          ? document.currentScript.src
              .split('/')
              .slice(0, -1)
              .join('/')
          : '.'
      );
    }
    function G(e) {
      return !e || !e.parentNode;
    }
    function U(e, n) {
      n = Object(V.e)(n);
      var t = void 0;
      return (
        G(e)
          ? n()
          : (t = Object(J.j)(function() {
              G(e) && (t.cancel(), n());
            }, 50)),
        {
          cancel: function() {
            t && t.cancel();
          }
        }
      );
    }
    function F(e, n) {
      return new X.a(function(t, r) {
        var o = new window.XMLHttpRequest();
        o.open('GET', n),
          o.setRequestHeader('Accept', e),
          o.send(null),
          (o.onload = function() {
            t(o.responseText);
          }),
          (o.onerror = function() {
            return r(new Error('prefetch failed'));
          });
      });
    }
    function Y(e) {
      return F('text/html', e);
    }
    function B(e) {
      return Y(e);
    }
    function H(e) {
      for (
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.document,
          t = i(e, 'script'),
          r = Array.isArray(t),
          o = 0,
          t = r ? t : t[Symbol.iterator]();
        ;

      ) {
        var c;
        if (r) {
          if (o >= t.length) break;
          c = t[o++];
        } else {
          if (((o = t.next()), o.done)) break;
          c = o.value;
        }
        var a = c,
          s = n.createElement('script');
        (s.text = a.textContent), a.parentNode.replaceChild(s, a);
      }
    }
    function Q(e, n, t) {
      e = e.toLowerCase();
      var o = this && this.createElement ? this : window.document,
        i = o.createElement(e);
      for (var c in n)
        c in ue ? i.addEventListener(ue[c], n[c]) : 'innerHTML' === c ? ((i.innerHTML = n[c]), H(i, o)) : i.setAttribute(c, n[c]);
      if ('style' === e) {
        if ('string' != typeof t)
          throw new Error('Expected ' + e + ' tag content to be string, got ' + (void 0 === t ? 'undefined' : $(t)));
        if (arguments.length > 3) throw new Error('Expected only text content for ' + e + ' tag');
        f(i, t, o);
      } else if ('iframe' === e) {
        if (arguments.length > 3) throw new Error('Expected only single child node for iframe');
        i.addEventListener('load', function() {
          var e = i.contentWindow;
          if (!e) throw new Error('Expected frame to have contentWindow');
          'string' == typeof t ? d(e, t) : l(e, t);
        });
      } else if ('script' === e) {
        if ('string' != typeof t)
          throw new Error('Expected ' + e + ' tag content to be string, got ' + (void 0 === t ? 'undefined' : $(t)));
        if (arguments.length > 3) throw new Error('Expected only text content for ' + e + ' tag');
        i.text = t;
      } else
        for (var a = 2; a < arguments.length; a++)
          if ('string' == typeof arguments[a]) {
            var s = document.createTextNode(arguments[a]);
            r(i, s);
          } else r(i, arguments[a]);
      return i;
    }
    (n.d = r),
      (n.n = a),
      t.d(n, 'i', function() {
        return ee;
      }),
      (n.j = u),
      (n.A = d),
      (n.z = l),
      (n.e = m),
      (n.f = h),
      (n.p = b),
      (n.b = y),
      (n.l = g),
      (n.k = j),
      (n.u = O),
      (n.x = S),
      (n.r = x),
      (n.h = A),
      (n.w = P),
      (n.o = N),
      (n.g = M),
      (n.v = D),
      (n.c = R),
      (n.a = k),
      (n.t = W),
      (n.m = z),
      (n.y = U),
      (n.s = B),
      (n.q = Q);
    var q = t('./node_modules/cross-domain-utils/src/index.js'),
      X = t('./node_modules/zalgo-promise/src/index.js'),
      Z = t('./node_modules/cross-domain-safe-weakmap/src/index.js'),
      V = t('./node_modules/xcomponent/src/lib/fn.js'),
      J = t('./node_modules/xcomponent/src/lib/util.js'),
      K = (t('./node_modules/xcomponent/src/error.js'),
      Object.assign ||
        function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      $ =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            },
      ee = new X.a(function(e) {
        if ('complete' === window.document.readyState) return e(window.document);
        var n = setInterval(function() {
          if ('complete' === window.document.readyState) return clearInterval(n), e(window.document);
        }, 10);
      }),
      ne = new Z.a(),
      te = Object(V.c)(function(e) {
        var n = {};
        if (!e) return n;
        if (-1 === e.indexOf('=')) throw new Error('Can not parse query string params: ' + e);
        for (var t = e.split('&'), r = Array.isArray(t), o = 0, t = r ? t : t[Symbol.iterator](); ; ) {
          var i;
          if (r) {
            if (o >= t.length) break;
            i = t[o++];
          } else {
            if (((o = t.next()), o.done)) break;
            i = o.value;
          }
          var c = i;
          (c = c.split('=')), c[0] && c[1] && (n[decodeURIComponent(c[0])] = decodeURIComponent(c[1]));
        }
        return n;
      }),
      re = ['webkit', 'moz', 'ms', 'o'],
      oe = window.CSSRule,
      ie = oe.KEYFRAMES_RULE || oe.WEBKIT_KEYFRAMES_RULE || oe.MOZ_KEYFRAMES_RULE || oe.O_KEYFRAMES_RULE || oe.MS_KEYFRAMES_RULE,
      ce = ['animationstart', 'webkitAnimationStart', 'oAnimationStart', 'MSAnimationStart'],
      ae = ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'],
      se = { DISPLAY: { NONE: 'none', BLOCK: 'block' }, VISIBILITY: { VISIBLE: 'visible', HIDDEN: 'hidden' }, IMPORTANT: 'important' },
      ue = { onClick: 'click' };
  },
  './node_modules/xcomponent/src/lib/fn.js': function(e, n, t) {
    'use strict';
    function r() {}
    function o(e) {
      var n = !1,
        t = void 0;
      return function() {
        for (var r = arguments.length, o = Array(r), i = 0; i < r; i++) o[i] = arguments[i];
        return n ? t : ((n = !0), (t = e.apply(this, arguments)));
      };
    }
    function i(e) {
      var n = {};
      return function() {
        for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        var i = void 0;
        try {
          i = JSON.stringify(Array.prototype.slice.call(arguments), function(e, n) {
            return 'function' == typeof n ? 'xcomponent:memoize[' + Object(u.h)(n) + ']' : n;
          });
        } catch (e) {
          throw new Error('Arguments not serializable -- can not be used to memoize');
        }
        return n.hasOwnProperty(i) || (n[i] = e.apply(this, arguments)), n[i];
      };
    }
    function c(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        t = void 0;
      return function() {
        var r = this,
          o = arguments;
        clearTimeout(t),
          (t = setTimeout(function() {
            return e.apply(r, o);
          }, n));
      };
    }
    function a(e) {
      return Object(u.i)(e, function(e, n, t) {
        if (e instanceof Function) return { __type__: '__function__' };
      });
    }
    function s(e, n) {
      return Object(u.i)(e, function(e, t, r) {
        if (e && '__function__' === e.__type__)
          return function() {
            return n({ key: t, fullKey: r, self: this, args: arguments });
          };
      });
    }
    (n.d = r), (n.e = o), (n.c = i), (n.a = c), (n.f = a), (n.b = s);
    var u = t('./node_modules/xcomponent/src/lib/util.js');
  },
  './node_modules/xcomponent/src/lib/global.js': function(e, n, t) {
    'use strict';
    function r(e) {
      if (Object(o.p)(e)) return e[i.__XCOMPONENT__] || (e[i.__XCOMPONENT__] = {}), e[i.__XCOMPONENT__];
    }
    (n.b = r),
      t.d(n, 'a', function() {
        return c;
      });
    var o = t('./node_modules/cross-domain-utils/src/index.js'),
      i = t('./node_modules/xcomponent/src/constants.js'),
      c = (function() {
        var e = r(window);
        if (!e) throw new Error('Could not get local global');
        return e;
      })();
  },
  './node_modules/xcomponent/src/lib/index.js': function(e, n, t) {
    'use strict';
    var r = t('./node_modules/xcomponent/src/lib/dom.js');
    t.d(n, 'a', function() {
      return r.a;
    }),
      t.d(n, 'b', function() {
        return r.b;
      }),
      t.d(n, 'c', function() {
        return r.c;
      }),
      t.d(n, 'd', function() {
        return r.d;
      }),
      t.d(n, 'e', function() {
        return r.e;
      }),
      t.d(n, 'f', function() {
        return r.f;
      }),
      t.d(n, 'l', function() {
        return r.g;
      }),
      t.d(n, 'm', function() {
        return r.h;
      }),
      t.d(n, 'n', function() {
        return r.i;
      }),
      t.d(n, 'p', function() {
        return r.j;
      }),
      t.d(n, 'q', function() {
        return r.k;
      }),
      t.d(n, 'u', function() {
        return r.l;
      }),
      t.d(n, 'w', function() {
        return r.m;
      }),
      t.d(n, 'x', function() {
        return r.n;
      }),
      t.d(n, 'A', function() {
        return r.o;
      }),
      t.d(n, 'B', function() {
        return r.p;
      }),
      t.d(n, 'F', function() {
        return r.q;
      }),
      t.d(n, 'J', function() {
        return r.r;
      }),
      t.d(n, 'L', function() {
        return r.s;
      }),
      t.d(n, 'N', function() {
        return r.t;
      }),
      t.d(n, 'R', function() {
        return r.u;
      }),
      t.d(n, 'S', function() {
        return r.v;
      }),
      t.d(n, 'T', function() {
        return r.w;
      }),
      t.d(n, 'X', function() {
        return r.x;
      }),
      t.d(n, '_1', function() {
        return r.y;
      }),
      t.d(n, '_2', function() {
        return r.z;
      }),
      t.d(n, '_3', function() {
        return r.A;
      });
    var o = t('./node_modules/xcomponent/src/lib/fn.js');
    t.d(n, 'k', function() {
      return o.b;
    }),
      t.d(n, 'G', function() {
        return o.c;
      }),
      t.d(n, 'I', function() {
        return o.d;
      }),
      t.d(n, 'K', function() {
        return o.e;
      }),
      t.d(n, 'P', function() {
        return o.f;
      });
    var i = t('./node_modules/xcomponent/src/lib/promise.js');
    t.d(n, 'h', function() {
      return i.a;
    }),
      t.d(n, 'j', function() {
        return i.b;
      }),
      t.d(n, 'M', function() {
        return i.c;
      });
    var c = t('./node_modules/xcomponent/src/lib/util.js');
    t.d(n, 'g', function() {
      return c.b;
    }),
      t.d(n, 'i', function() {
        return c.c;
      }),
      t.d(n, 'o', function() {
        return c.d;
      }),
      t.d(n, 's', function() {
        return c.e;
      }),
      t.d(n, 't', function() {
        return c.f;
      }),
      t.d(n, 'v', function() {
        return c.g;
      }),
      t.d(n, 'O', function() {
        return c.i;
      }),
      t.d(n, 'U', function() {
        return c.k;
      }),
      t.d(n, 'V', function() {
        return c.l;
      }),
      t.d(n, 'Y', function() {
        return c.m;
      }),
      t.d(n, 'Z', function() {
        return c.o;
      });
    var a = t('./node_modules/xcomponent/src/lib/css.js');
    t.d(n, 'D', function() {
      return a.a;
    }),
      t.d(n, 'E', function() {
        return a.b;
      }),
      t.d(n, 'W', function() {
        return a.c;
      });
    var s = t('./node_modules/xcomponent/src/lib/decorators.js');
    t.d(n, 'H', function() {
      return s.a;
    });
    var u = t('./node_modules/xcomponent/src/lib/logger.js');
    t.d(n, 'r', function() {
      return u.a;
    }),
      t.d(n, 'C', function() {
        return u.b;
      }),
      t.d(n, 'Q', function() {
        return u.c;
      }),
      t.d(n, '_0', function() {
        return u.d;
      });
    var d = t('./node_modules/xcomponent/src/lib/global.js');
    t.d(n, 'y', function() {
      return d.a;
    }),
      t.d(n, 'z', function() {
        return d.b;
      });
  },
  './node_modules/xcomponent/src/lib/logger.js': function(e, n, t) {
    'use strict';
    function r(e) {
      if (-1 === s.e.indexOf(e)) throw new Error('Invalid logLevel: ' + e);
      (s.a.logLevel = e), (a.CONFIG.LOG_LEVEL = e), (window.LOG_LEVEL = e);
    }
    function o(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      s.d('xc_' + e + '_' + n, t);
    }
    function i(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      s.f('xc_' + e + '_' + n, t);
    }
    function c(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      s.b('xc_' + e + '_' + n, t);
    }
    (n.c = r), (n.b = o), (n.d = i), (n.a = c);
    var a = t('./node_modules/post-robot/src/index.js'),
      s = t('./node_modules/beaver-logger/client/index.js');
  },
  './node_modules/xcomponent/src/lib/promise.js': function(e, n, t) {
    'use strict';
    function r(e) {
      return function() {
        var n = this,
          t = Array.prototype.slice.call(arguments);
        return t.length >= e.length
          ? c.a.resolve(e.apply(n, t))
          : new c.a(function(r, o) {
              t.push(function(e, n) {
                if (e && !(e instanceof Error))
                  throw new Error(
                    'Passed non-Error object in callback: [ ' +
                      e +
                      ' ] -- callbacks should either be called with callback(new Error(...)) or callback(null, result).'
                  );
                return e ? o(e) : r(n);
              }),
                e.apply(n, t);
            });
      };
    }
    function o(e) {
      return function() {
        var n = this,
          t = arguments;
        return c.a.try(function() {
          return e.apply(n, t);
        });
      };
    }
    function i(e) {
      return c.a.try(e).then(function() {
        return i(e);
      });
    }
    (n.b = r), (n.c = o), (n.a = i);
    var c = t('./node_modules/zalgo-promise/src/index.js');
  },
  './node_modules/xcomponent/src/lib/util.js': function(e, n, t) {
    'use strict';
    function r(e) {
      return e
        .replace(/\?/g, '%3F')
        .replace(/\&/g, '%26')
        .replace(/#/g, '%23')
        .replace(/\+/g, '%2B');
    }
    function o(e) {
      return e.replace(/-([a-z])/g, function(e) {
        return e[1].toUpperCase();
      });
    }
    function i(e, n) {
      if (!n) return e;
      for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
      return e;
    }
    function c(e) {
      var n = [];
      for (var t in e) e.hasOwnProperty(t) && n.push(e[t]);
      return n;
    }
    function a() {
      var e = '0123456789abcdef';
      return 'xxxxxxxxxx'.replace(/./g, function() {
        return e.charAt(Math.floor(Math.random() * e.length));
      });
    }
    function s(e) {
      return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    }
    function u(e, n, t) {
      if (!n) return t;
      for (var r = n.split('.'), o = 0; o < r.length; o++) {
        if ('object' !== (void 0 === e ? 'undefined' : g(e)) || null === e) return t;
        e = e[r[o]];
      }
      return void 0 === e ? t : e;
    }
    function d(e, n) {
      function t() {
        (r = setTimeout(t, n)), e.call();
      }
      var r = void 0;
      return (
        (r = setTimeout(t, n)),
        {
          cancel: function() {
            clearTimeout(r);
          }
        }
      );
    }
    function l(e, n) {
      if (e)
        if (e instanceof Array) for (var t = e.length, r = 0; r < t; r++) n(e[r], r);
        else if ('object' === (void 0 === e ? 'undefined' : g(e)))
          for (var o = Object.keys(e), i = o.length, c = 0; c < i; c++) {
            var a = o[c];
            n(e[a], a);
          }
    }
    function f(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
        r = e instanceof Array ? [] : {};
      return (
        l(e, function(e, o) {
          var i = t ? t + '.' + o : o,
            c = n(e, o, i);
          void 0 !== c ? (r[o] = c) : 'object' === (void 0 === e ? 'undefined' : g(e)) && null !== e ? (r[o] = f(e, n, i)) : (r[o] = e);
        }),
        r
      );
    }
    function p(e, n, t, r) {
      if (e.hasOwnProperty(t)) {
        var o = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(n, t, o);
      } else n[t] = r;
    }
    function m(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      n = n ? n + '.' : n;
      for (var r in e)
        void 0 !== e[r] &&
          null !== e[r] &&
          'function' != typeof e[r] &&
          (e[r] &&
          Array.isArray(e[r]) &&
          e[r].length &&
          e[r].every(function(e) {
            return 'object' !== (void 0 === e ? 'undefined' : g(e));
          })
            ? (t['' + n + r] = e[r].join(','))
            : e[r] && 'object' === g(e[r])
              ? (t = m(e[r], '' + n + r, t))
              : (t['' + n + r] = e[r].toString()));
      return t;
    }
    function h(e) {
      if (null === e || void 0 === e || ('object' !== (void 0 === e ? 'undefined' : g(e)) && 'function' != typeof e))
        throw new Error('Invalid object');
      var n = j.get(e);
      return n || ((n = (void 0 === e ? 'undefined' : g(e)) + ':' + a()), j.set(e, n)), n;
    }
    function b(e) {
      return 'string' == typeof e ? e : e && 'function' == typeof e.toString ? e.toString() : Object.prototype.toString.call(e);
    }
    function y(e) {
      if (e) {
        var n = e.stack,
          t = e.message;
        if ('string' == typeof n) return n;
        if ('string' == typeof t) return t;
      }
      return b(e);
    }
    function v() {
      var e = {},
        n = {};
      return {
        on: function(e, t) {
          var r = (n[e] = n[e] || []);
          r.push(t);
          var o = !1;
          return {
            cancel: function() {
              o || ((o = !0), r.splice(r.indexOf(t), 1));
            }
          };
        },
        once: function(e, n) {
          var t = this.on(e, function() {
            t.cancel(), n();
          });
          return t;
        },
        trigger: function(e) {
          var t = n[e];
          if (t)
            for (var r = t, o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator](); ; ) {
              var c;
              if (o) {
                if (i >= r.length) break;
                c = r[i++];
              } else {
                if (((i = r.next()), i.done)) break;
                c = i.value;
              }
              var a = c;
              a();
            }
        },
        triggerOnce: function(n) {
          e[n] || ((e[n] = !0), this.trigger(n));
        }
      };
    }
    (n.n = r),
      (n.c = o),
      (n.f = i),
      (n.o = c),
      (n.m = a),
      (n.a = s),
      (n.g = u),
      (n.j = d),
      (n.i = f),
      (n.b = p),
      (n.d = m),
      (n.h = h),
      (n.k = b),
      (n.l = y),
      (n.e = v);
    var w = t('./node_modules/cross-domain-safe-weakmap/src/index.js'),
      g =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            },
      j = new w.a();
  },
  './node_modules/zalgo-promise/src/exceptions.js': function(e, n, t) {
    'use strict';
    function r(e) {
      if (-1 === c.indexOf(e)) {
        c.push(e),
          setTimeout(function() {
            throw e;
          }, 1);
        for (var n = 0; n < i.length; n++) i[n](e);
      }
    }
    function o(e) {
      return (
        i.push(e),
        {
          cancel: function() {
            i.splice(i.indexOf(e), 1);
          }
        }
      );
    }
    (n.a = r), (n.b = o);
    var i = [],
      c = [];
  },
  './node_modules/zalgo-promise/src/index.js': function(e, n, t) {
    'use strict';
    var r = t('./node_modules/zalgo-promise/src/promise.js');
    t.d(n, 'a', function() {
      return r.a;
    });
  },
  './node_modules/zalgo-promise/src/promise.js': function(e, n, t) {
    'use strict';
    function r(e, n) {
      if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
    }
    t.d(n, 'a', function() {
      return a;
    });
    var o = t('./node_modules/zalgo-promise/src/utils.js'),
      i = t('./node_modules/zalgo-promise/src/exceptions.js'),
      c = (window.__zalgopromise__ = window.__zalgopromise__ || { flushPromises: [], activeCount: 0 }),
      a = (function() {
        function e(n) {
          var t = this;
          if ((r(this, e), (this.resolved = !1), (this.rejected = !1), (this.errorHandled = !1), (this.handlers = []), n)) {
            var o = void 0,
              i = void 0,
              c = !1,
              a = !1,
              s = !1;
            try {
              n(
                function(e) {
                  s ? t.resolve(e) : ((c = !0), (o = e));
                },
                function(e) {
                  s ? t.reject(e) : ((a = !0), (i = e));
                }
              );
            } catch (e) {
              return void this.reject(e);
            }
            (s = !0), c ? this.resolve(o) : a && this.reject(i);
          }
        }
        return (
          (e.prototype.resolve = function(e) {
            if (this.resolved || this.rejected) return this;
            if (Object(o.a)(e)) throw new Error('Can not resolve promise with another promise');
            return (this.resolved = !0), (this.value = e), this.dispatch(), this;
          }),
          (e.prototype.reject = function(e) {
            var n = this;
            if (this.resolved || this.rejected) return this;
            if (Object(o.a)(e)) throw new Error('Can not reject promise with another promise');
            if (!e) {
              var t = e && 'function' == typeof e.toString ? e.toString() : Object.prototype.toString.call(e);
              e = new Error('Expected reject to be called with Error, got ' + t);
            }
            return (
              (this.rejected = !0),
              (this.error = e),
              this.errorHandled ||
                setTimeout(function() {
                  n.errorHandled || Object(i.a)(e);
                }, 1),
              this.dispatch(),
              this
            );
          }),
          (e.prototype.asyncReject = function(e) {
            (this.errorHandled = !0), this.reject(e);
          }),
          (e.prototype.dispatch = function() {
            var n = this,
              t = this.dispatching,
              r = this.resolved,
              i = this.rejected,
              a = this.handlers;
            if (!t && (r || i)) {
              (this.dispatching = !0), (c.activeCount += 1);
              for (var s = 0; s < a.length; s++) {
                (function(t) {
                  var c = a[t],
                    s = c.onSuccess,
                    u = c.onError,
                    d = c.promise,
                    l = void 0;
                  if (r)
                    try {
                      l = s ? s(n.value) : n.value;
                    } catch (e) {
                      return d.reject(e), 'continue';
                    }
                  else if (i) {
                    if (!u) return d.reject(n.error), 'continue';
                    try {
                      l = u(n.error);
                    } catch (e) {
                      return d.reject(e), 'continue';
                    }
                  }
                  l instanceof e && (l.resolved || l.rejected)
                    ? (l.resolved ? d.resolve(l.value) : d.reject(l.error), (l.errorHandled = !0))
                    : Object(o.a)(l)
                      ? l instanceof e && (l.resolved || l.rejected)
                        ? l.resolved
                          ? d.resolve(l.value)
                          : d.reject(l.error)
                        : l.then(
                            function(e) {
                              d.resolve(e);
                            },
                            function(e) {
                              d.reject(e);
                            }
                          )
                      : d.resolve(l);
                })(s);
              }
              (a.length = 0), (this.dispatching = !1), (c.activeCount -= 1), 0 === c.activeCount && e.flushQueue();
            }
          }),
          (e.prototype.then = function(n, t) {
            if (n && 'function' != typeof n && !n.call) throw new Error('Promise.then expected a function for success handler');
            if (t && 'function' != typeof t && !t.call) throw new Error('Promise.then expected a function for error handler');
            var r = new e();
            return this.handlers.push({ promise: r, onSuccess: n, onError: t }), (this.errorHandled = !0), this.dispatch(), r;
          }),
          (e.prototype.catch = function(e) {
            return this.then(void 0, e);
          }),
          (e.prototype.finally = function(n) {
            return this.then(
              function(t) {
                return e.try(n).then(function() {
                  return t;
                });
              },
              function(t) {
                return e.try(n).then(function() {
                  throw t;
                });
              }
            );
          }),
          (e.prototype.timeout = function(e, n) {
            var t = this;
            if (this.resolved || this.rejected) return this;
            var r = setTimeout(function() {
              t.resolved || t.rejected || t.reject(n || new Error('Promise timed out after ' + e + 'ms'));
            }, e);
            return this.then(function(e) {
              return clearTimeout(r), e;
            });
          }),
          (e.prototype.toPromise = function() {
            if (!window.Promise) throw new Error('Could not find window.Promise');
            return window.Promise.resolve(this);
          }),
          (e.resolve = function(n) {
            return n instanceof e
              ? n
              : Object(o.a)(n)
                ? new e(function(e, t) {
                    return n.then(e, t);
                  })
                : new e().resolve(n);
          }),
          (e.reject = function(n) {
            return new e().reject(n);
          }),
          (e.all = function(n) {
            var t = new e(),
              r = n.length,
              i = [];
            if (!r) return t.resolve(i), t;
            for (var c = 0; c < n.length; c++) {
              (function(c) {
                var a = n[c];
                if (a instanceof e) {
                  if (a.resolved) return (i[c] = a.value), (r -= 1), 'continue';
                } else if (!Object(o.a)(a)) return (i[c] = a), (r -= 1), 'continue';
                e.resolve(a).then(
                  function(e) {
                    (i[c] = e), 0 === (r -= 1) && t.resolve(i);
                  },
                  function(e) {
                    t.reject(e);
                  }
                );
              })(c);
            }
            return 0 === r && t.resolve(i), t;
          }),
          (e.hash = function(n) {
            var t = {};
            return e
              .all(
                Object.keys(n).map(function(r) {
                  return e.resolve(n[r]).then(function(e) {
                    t[r] = e;
                  });
                })
              )
              .then(function() {
                return t;
              });
          }),
          (e.map = function(n, t) {
            return e.all(n.map(t));
          }),
          (e.onPossiblyUnhandledException = function(e) {
            return Object(i.b)(e);
          }),
          (e.try = function(n, t, r) {
            var o = void 0;
            try {
              o = n.apply(t, r || []);
            } catch (n) {
              return e.reject(n);
            }
            return e.resolve(o);
          }),
          (e.delay = function(n) {
            return new e(function(e) {
              setTimeout(e, n);
            });
          }),
          (e.isPromise = function(n) {
            return !!(n && n instanceof e) || Object(o.a)(n);
          }),
          (e.flush = function() {
            var n = new e();
            return c.flushPromises.push(n), 0 === c.activeCount && e.flushQueue(), n;
          }),
          (e.flushQueue = function() {
            var e = c.flushPromises;
            c.flushPromises = [];
            for (var n = e, t = Array.isArray(n), r = 0, n = t ? n : n[Symbol.iterator](); ; ) {
              var o;
              if (t) {
                if (r >= n.length) break;
                o = n[r++];
              } else {
                if (((r = n.next()), r.done)) break;
                o = r.value;
              }
              o.resolve();
            }
          }),
          e
        );
      })();
  },
  './node_modules/zalgo-promise/src/utils.js': function(e, n, t) {
    'use strict';
    function r(e) {
      try {
        if (!e) return !1;
        if (window.Promise && e instanceof window.Promise) return !0;
        if (window.Window && e instanceof window.Window) return !1;
        if (window.constructor && e instanceof window.constructor) return !1;
        if (o) {
          var n = o.call(e);
          if ('[object Window]' === n || '[object global]' === n || '[object DOMWindow]' === n) return !1;
        }
        if ('function' == typeof e.then) return !0;
      } catch (e) {
        return !1;
      }
      return !1;
    }
    n.a = r;
    var o = {}.toString;
  },
  './src/button/component.jsx': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return s;
    });
    var r = t('./node_modules/xcomponent/src/index.js'),
      o = t('./src/button/template.jsx'),
      i = t('./src/button/container.jsx'),
      c = t('./src/config.js'),
      a =
        Object.assign ||
        function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        },
      s = Object(r.a)({
        tag: 'brainblocks-button',
        defaultEnv: 'production',
        url: {
          test: '/base/test/windows/button/index.htm',
          local: 'http://localhost:8000/button',
          production: 'https://brainblocks.io/button'
        },
        domain: { test: 'mock://www.my-site.com', local: 'http://localhost:8000', production: 'https://brainblocks.io' },
        dimensions: { width: '300px', height: '50px' },
        props: {
          logLevel: { type: 'string', value: 'warn', required: !1 },
          style: {
            type: 'object',
            required: !1,
            def: function() {
              return {};
            }
          },
          payment: {
            type: 'object',
            required: !0,
            validate: function(e) {
              if (!e.destination) throw new Error('Expected payment.destination');
              if (!e.destination.match(/^xrb_[a-z0-9]{60}$/)) throw new Error('Invalid raiblocks address: ' + e.destination);
              if (!e.currency) throw new Error('Expected payment.currency');
              if ('rai' !== e.currency && -1 === c.a.indexOf(e.currency))
                throw new Error('Expected payment.currency to be rai or ' + c.a.join(', ') + ', got ' + e.currency);
              if (!e.amount) throw new Error('Expected payment.amount');
              if (!e.amount.toString().match(/^\d+(\.\d+)?$/)) throw new Error('Expected payment.mount to be a number, got ' + e.amount);
            },
            decorate: function(e) {
              return a({}, e, { amount: e.amount.toString() });
            }
          },
          onPayment: { type: 'function', required: !0 },
          onClick: { type: 'function', required: !1 }
        },
        defaultContext: 'iframe',
        contexts: { iframe: !0, popup: !1 },
        prerenderTemplate: function(e) {
          var n = e.jsxDom,
            t = e.props;
          return n(
            'html',
            null,
            n(
              'head',
              null,
              n(
                'style',
                null,
                '\n                            html, body {\n                                border: 0;\n                                padding: 0;\n                                margin: 0;\n                            }\n                        '
              )
            ),
            n('body', null, Object(o.a)({ props: t }))
          );
        },
        containerTemplate: i.a
      });
  },
  './src/button/container.jsx': function(e, n, t) {
    'use strict';
    function r(e) {
      var n = e.id,
        t = e.tag,
        r = e.context,
        o = e.CLASS,
        i = e.outlet,
        c = e.jsxDom,
        a = e.dimensions,
        s = a.width,
        u = a.height,
        d = e.props;
      return c(
        'div',
        { id: n, class: o.XCOMPONENT + ' ' + o.XCOMPONENT + '-tag-' + t + ' ' + o.XCOMPONENT + '-context-' + r },
        c(
          'style',
          null,
          '\n                    #' +
            n +
            ', #' +
            n +
            ' > .' +
            o.OUTLET +
            ' {\n                        transition: height 0.5s ease-in-out;\n                    }\n\n                    #' +
            n +
            ' > .' +
            o.OUTLET +
            ' {\n                        display: inline-block;\n                        max-width: 500px;\n                        min-width: 150px;\n                        width: ' +
            ('responsive' === d.style.size ? '100%' : s) +
            ';\n                        height: ' +
            u +
            ';\n                        display: inline-block;\n                        position: relative;\n                        transition: height 0.5s ease-in-out;\n                    }\n\n                    #' +
            n +
            ' > .' +
            o.OUTLET +
            ' > iframe {\n                        height: 100%;\n                        width: 100%;\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        transition: opacity .2s ease-in-out;\n                    }\n\n                    #' +
            n +
            ' > .' +
            o.OUTLET +
            ' > iframe.' +
            o.VISIBLE +
            ' {\n                        opacity: 1;\n                    }\n\n                    #' +
            n +
            ' > .' +
            o.OUTLET +
            ' > iframe.' +
            o.INVISIBLE +
            ' {\n                        opacity: 0;\n                    }\n                '
        ),
        i
      );
    }
    n.a = r;
  },
  './src/button/index.js': function(e, n, t) {
    'use strict';
    var r = t('./src/button/component.jsx');
    t.d(n, 'a', function() {
      return r.a;
    });
    var o = t('./src/button/template.jsx');
    t.d(n, 'b', function() {
      return o.a;
    });
  },
  './src/button/template.jsx': function(e, n, t) {
    'use strict';
    function r(e) {
      var n = e.props,
        t = '',
        r = '';
      if ('rai' === n.payment.currency) {
        (t = ''),
          (r = (function(e) {
            return (e = parseInt(e) / 1e3) > Math.floor(e);
          })(n.payment.amount)
            ? (parseInt(n.payment.amount) / 1e6).toFixed(6)
            : (parseInt(n.payment.amount) / 1e6).toFixed(3));
      }
      return Object(o.F)(
        'div',
        { class: 'brainblocks-button-container' },
        Object(o.F)(
          'style',
          null,
          '\n                    .brainblocks-button {\n                        display: inline-block;\n                        width: 100%;\n                        height: 50px;\n                        background-color: #eee;\n                        border-radius: 5px;\n                        font-family: Helvetica, Arial, sans-serif;\n                        line-height: 50px;\n                        color: #1A3238;\n                        cursor: pointer;\n                        font-size: 16px;\n                        text-align: center;\n                        letter-spacing: 1px;\n                    }\n                    \n                    .brainblocks-button-content {\n                        width: 100%;\n                        height: 50px;\n\n                        display: flex;\n                        flex-direction: row;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    .brainblocks-button .brainblocks-raiblocks-logo {\n                        height: 15px;\n                        margin-left: 10px;\n                        border-left: 1px solid #ccc;\n                        padding-left: 10px;\n                    }\n\n                    .brainblocks-button .brainblocks-raiblocks-logo-small {\n                        height: 15px;\n                        margin-left: 5px;\n                        border-left: 1px solid #ccc;\n                        padding-left: 5px;\n                        display: none;\n                    }\n\n                    @media screen and (max-width: 299px) {\n                        .brainblocks-button .pay-text {\n                            display: none;\n                        }\n                    }\n\n                    @media screen and (max-width: 200px) {\n                        .brainblocks-button .brainblocks-raiblocks-logo {\n                            display: none;\n                        }\n\n                        .brainblocks-button .brainblocks-raiblocks-logo-small {\n                            display: inline-block;\n                        }\n                    }\n                '
        ),
        Object(o.F)(
          'div',
          { role: 'button', class: 'brainblocks-button' },
          Object(o.F)(
            'div',
            { class: 'brainblocks-button-content' },
            Object(o.F)(
              'span',
              null,
              Object(o.F)('span', { class: 'pay-text' }, r && 'Pay '),
              Object(o.F)(
                'span',
                null,
                Object(o.F)(
                  'span',
                  { id: 'pay-amount', class: 'pay-amount' },
                  r ||
                    Object(o.F)('img', {
                      class: 'loading-spinner',
                      src:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSIyNXB4IiBoZWlnaHQ9IjI1cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNzguNzUgMTYuMThWMS41NmE2NC4xIDY0LjEgMCAwIDEgNDcuNyA0Ny43SDExMS44YTQ5Ljk4IDQ5Ljk4IDAgMCAwLTMzLjA3LTMzLjA4ek0xNi40MyA0OS4yNUgxLjhhNjQuMSA2NC4xIDAgMCAxIDQ3LjctNDcuN1YxNi4yYTQ5Ljk4IDQ5Ljk4IDAgMCAwLTMzLjA3IDMzLjA3em0zMy4wNyA2Mi4zMnYxNC42MkE2NC4xIDY0LjEgMCAwIDEgMS44IDc4LjVoMTQuNjNhNDkuOTggNDkuOTggMCAwIDAgMzMuMDcgMzMuMDd6bTYyLjMyLTMzLjA3aDE0LjYyYTY0LjEgNjQuMSAwIDAgMS00Ny43IDQ3Ljd2LTE0LjYzYTQ5Ljk4IDQ5Ljk4IDAgMCAwIDMzLjA4LTMzLjA3eiIgZmlsbD0iIzgxY2RmMSIgZmlsbC1vcGFjaXR5PSIxIi8+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209Ii05MCA2NCA2NCIgdG89IjAgNjQgNjQiIGR1cj0iNDAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9nPjwvc3ZnPg=='
                    })
                ),
                Object(o.F)('span', null, ' '),
                Object(o.F)('span', { id: 'pay-currency', class: 'pay-currency' }, t)
              )
            ),
            Object(o.F)('img', {
              class: 'brainblocks-raiblocks-logo',
              src:
                'data:image/svg+xml;base64,DQo8c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTYgMjkuNCI+PHN0eWxlPi5zdDB7ZmlsbDojNGE5MGUyfS5zdDF7ZmlsbDojMDAwMDM0fTwvc3R5bGU+PGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iNC44IiBjeT0iMjQuNCIgcj0iNC44Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTYyIC42Yy0yLjYgMC00LjggMi4xLTQuOCA0LjggMCAzLjgtLjYgNC44LTQuOCA0LjhINTJjLTIuNC4yLTQuMyAyLjItNC4zIDQuN3YuMWMwIDMuNy0uNyA0LjYtNC44IDQuNi0uMiAwLS40IDAtLjUuMS0yLjQuMy00LjMgMi4zLTQuMyA0LjcgMCAyLjYgMi4xIDQuOCA0LjggNC44IDIuNSAwIDQuNi0yIDQuNy00LjR2LS40YzAtMy40IDEuMS00LjcgNC43LTQuOGguMWMyLjUgMCA0LjYtMiA0LjctNC41di0uM2MwLTMuNSAxLjEtNC44IDQuOC00LjggMi42IDAgNC44LTIuMSA0LjgtNC44IDAtMi41LTIuMS00LjYtNC43LTQuNnpNMzMuOCAxMC4yaC0uNGMtNC4yIDAtNC44LTEtNC44LTQuOCAwLTIuNi0yLjEtNC44LTQuOC00LjhDMjEuMi42IDE5IDIuNyAxOSA1LjRjMCAzLjgtLjYgNC43LTQuOCA0LjdoLS40Yy0yLjQuMi00LjMgMi4yLTQuMyA0LjcgMCAyLjYgMi4xIDQuOCA0LjggNC44IDIuNSAwIDQuNi0yIDQuNy00LjR2LS4zYzAtMy41IDEuMS00LjggNC44LTQuOCAzLjcgMCA0LjggMS4zIDQuOCA0LjcgMCAyLjYgMi4xIDQuOCA0LjggNC44czQuOC0yLjEgNC44LTQuOGMtLjEtMi40LTItNC40LTQuNC00LjZ6Ii8+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTEwOS4zLjhjLS4zIDAtLjYuMS0uOC40LS4yLjItLjMuNS0uMy45VjI1TDkwLjcgMS40Yy0uMy0uNC0uNi0uNi0xLS42cy0uNy4xLS45LjRjLS4yLjItLjMuNS0uMy45djI2YzAgLjQuMS43LjMuOS4yLjIuNS4zLjkuMy4zIDAgLjYtLjEuOC0uNC4yLS4yLjMtLjUuMy0uOVY1LjJsMTcuNSAyMy42Yy4zLjQuNy42IDEuMS42LjQgMCAuNy0uMS45LS40LjItLjIuMy0uNS4zLS45di0yNmMwLS40LS4xLS43LS4zLS45LS4zLS4zLS42LS40LTEtLjR6bTkyLS44Yy04LjEgMC0xNC43IDYuNi0xNC43IDE0LjdzNi42IDE0LjcgMTQuNyAxNC43UzIxNiAyMi44IDIxNiAxNC43IDIwOS40IDAgMjAxLjMgMHptMCAyN2MtNi44IDAtMTIuMy01LjUtMTIuMy0xMi4zczUuNS0xMi4zIDEyLjMtMTIuMyAxMi4zIDUuNSAxMi4zIDEyLjNTMjA4LjEgMjcgMjAxLjMgMjd6TTE3NyAuOGMtLjMgMC0uNi4xLS44LjQtLjIuMi0uMy41LS4zLjlWMjVMMTU4LjQgMS40Yy0uMy0uNC0uNi0uNi0xLS42cy0uNy4xLS45LjRjLS4yLjItLjMuNS0uMy45djI2YzAgLjQuMS43LjMuOS4yLjIuNS4zLjkuMy4zIDAgLjYtLjEuOC0uNC4yLS4yLjMtLjUuMy0uOVY1LjJMMTc2IDI4LjhjLjMuNC43LjYgMS4xLjYuNCAwIC43LS4xLjktLjQuMi0uMi4zLS41LjMtLjl2LTI2YzAtLjQtLjEtLjctLjMtLjktLjMtLjMtLjYtLjQtMS0uNHptLTQyLjMuOGMtLjEtLjMtLjMtLjUtLjUtLjYtLjMtLjItLjUtLjItLjgtLjItLjYgMC0xLjEuMy0xLjMuOWwtMTEuNyAyNi4yYy0uMS4xLS4xLjMtLjEuNCAwIC4zLjEuNi4zLjguMi4yLjUuMy44LjMuNSAwIC45LS4zIDEuMS0uOGwzLjEtN2gxNS41bDMgN2MuMS4yLjMuNC41LjYuMi4xLjQuMi42LjIuMyAwIC42LS4xLjgtLjMuMi0uMi40LS40LjQtLjcgMC0uMiAwLS4zLS4xLS41TDEzNC43IDEuNnptLTguMiAxNy45TDEzMy4zIDRsNi44IDE1LjVoLTEzLjZ6Ii8+PC9nPjwvc3ZnPg=='
            }),
            Object(o.F)('img', {
              class: 'brainblocks-raiblocks-logo-small',
              src:
                'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCA2NyAyOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHN0eWxlPi5zdDB7ZmlsbDojNGE5MGUyfS5zdDF7ZmlsbDojMDAwMDM0fTwvc3R5bGU+DQogIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjQuOCIgY3k9IjI0LjQiIHI9IjQuOCIvPg0KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjIgLjZjLTIuNiAwLTQuOCAyLjEtNC44IDQuOCAwIDMuOC0uNiA0LjgtNC44IDQuOEg1MmMtMi40LjItNC4zIDIuMi00LjMgNC43di4xYzAgMy43LS43IDQuNi00LjggNC42LS4yIDAtLjQgMC0uNS4xLTIuNC4zLTQuMyAyLjMtNC4zIDQuNyAwIDIuNiAyLjEgNC44IDQuOCA0LjggMi41IDAgNC42LTIgNC43LTQuNHYtLjRjMC0zLjQgMS4xLTQuNyA0LjctNC44aC4xYzIuNSAwIDQuNi0yIDQuNy00LjV2LS4zYzAtMy41IDEuMS00LjggNC44LTQuOCAyLjYgMCA0LjgtMi4xIDQuOC00LjggMC0yLjUtMi4xLTQuNi00LjctNC42ek0zMy44IDEwLjJoLS40Yy00LjIgMC00LjgtMS00LjgtNC44IDAtMi42LTIuMS00LjgtNC44LTQuOEMyMS4yLjYgMTkgMi43IDE5IDUuNGMwIDMuOC0uNiA0LjctNC44IDQuN2gtLjRjLTIuNC4yLTQuMyAyLjItNC4zIDQuNyAwIDIuNiAyLjEgNC44IDQuOCA0LjggMi41IDAgNC42LTIgNC43LTQuNHYtLjNjMC0zLjUgMS4xLTQuOCA0LjgtNC44IDMuNyAwIDQuOCAxLjMgNC44IDQuNyAwIDIuNiAyLjEgNC44IDQuOCA0LjhzNC44LTIuMSA0LjgtNC44Yy0uMS0yLjQtMi00LjQtNC40LTQuNnoiLz4NCjwvc3ZnPg=='
            })
          )
        )
      );
    }
    n.a = r;
    var o = t('./node_modules/xcomponent/src/lib/index.js');
  },
  './src/config.js': function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return r;
    });
    var r = [
      'aud',
      'brl',
      'cad',
      'chf',
      'clp',
      'cny',
      'czk',
      'dkk',
      'eur',
      'gbp',
      'hkd',
      'huf',
      'idr',
      'ils',
      'inr',
      'jpy',
      'krw',
      'mxn',
      'myr',
      'nok',
      'nzd',
      'php',
      'pkr',
      'pln',
      'rub',
      'sek',
      'sgd',
      'thb',
      'try',
      'twd',
      'usd',
      'zar'
    ];
  },
  './src/index.js': function(e, n, t) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var r = t('./node_modules/zalgo-promise/src/index.js');
    t.d(n, 'Promise', function() {
      return r.a;
    });
    var o = t('./src/button/index.js');
    t.d(n, 'Button', function() {
      return o.a;
    }),
      t.d(n, 'buttonTemplate', function() {
        return o.b;
      });
    t('./src/logs.js');
  },
  './src/logs.js': function(e, n, t) {
    'use strict';
    var r = t('./node_modules/beaver-logger/client/index.js'),
      o = t('./node_modules/post-robot/src/index.js');
    (r.a.logLevel = 'warn'), (o.CONFIG.LOG_LEVEL = 'warn'), (window.LOG_LEVEL = 'warn');
  }
});
//# sourceMappingURL=brainblocks.min.js.map
//# sourceMappingURL=brainblocks.min.js.map
