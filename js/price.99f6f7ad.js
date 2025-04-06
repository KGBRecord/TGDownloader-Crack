!(function (e) {
  function t(t) {
    for (
      var l, r, s = t[0], c = t[1], o = t[2], p = 0, g = [];
      p < s.length;
      p++
    )
      (r = s[p]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && g.push(i[r][0]),
        (i[r] = 0);
    for (l in c) Object.prototype.hasOwnProperty.call(c, l) && (e[l] = c[l]);
    for (_ && _(t); g.length; ) g.shift()();
    return n.push.apply(n, o || []), a();
  }
  function a() {
    for (var e, t = 0; t < n.length; t++) {
      for (var a = n[t], l = !0, s = 1; s < a.length; s++) {
        var c = a[s];
        0 !== i[c] && (l = !1);
      }
      l && (n.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var l = {},
    i = { price: 0 },
    n = [];
  function r(t) {
    if (l[t]) return l[t].exports;
    var a = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = l),
    (r.d = function (e, t, a) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var l in e)
          r.d(
            a,
            l,
            function (t) {
              return e[t];
            }.bind(null, l)
          );
      return a;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/");
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var o = 0; o < s.length; o++) t(s[o]);
  var _ = c;
  n.push([1, "chunk-vendors"]), a();
})({
  1: function (e, t, a) {
    e.exports = a("f9e8");
  },
  "239d": function (e, t, a) {
    var l = a("7e21");
    l.__esModule && (l = l.default),
      "string" == typeof l && (l = [[e.i, l, ""]]),
      l.locals && (e.exports = l.locals),
      (0, a("499e").default)("22eab053", l, !0, {
        sourceMap: !1,
        shadowMode: !1,
      });
  },
  "37b6": function (e, t, a) {
    "use strict";
    a.d(t, "c", function () {
      return l;
    }),
      a.d(t, "a", function () {
        return i;
      }),
      a.d(t, "b", function () {
        return n;
      });
    const l = "production",
      i = "ac0d71f6-838d-11ee-a59e-862b444258ac",
      n = "bb8b6e34-05d9-11ef-bada-c2edd63f8ae0";
  },
  "7e21": function (e, t, a) {
    (t = a("24fb")(!1)).push([
      e.i,
      ".telegram_price_head{padding:80px 0}.telegram_price_box{max-width:87.5rem;margin:0 auto;padding:0 20px;width:100%}.telegram_price_head .telegram_price_box{text-align:center}.telegram_price_title_desc__title{font-size:24px;color:#3a444f;font-weight:500}.telegram_price_title_desc__subtitle{font-size:49px;line-height:1.1;font-weight:600;margin:0 auto}.telegram_price_title_desc__subtitle strong{color:#008aff;font-weight:600}.telegram_price_body .telegram_price_box{max-width:75rem;margin-bottom:100px}.telegram_pricing-table{width:100%;font-size:15px;border-radius:4px;background-color:#fff;box-shadow:0 12px 64px -12px rgba(29,38,46,.12),0 12px 52px -16px rgba(29,38,46,.08);border-collapse:collapse}.telegram_pricing-table [aria-hidden=true]{display:none}.telegram_pricing-table td{padding:8px 25px}.telegram_pricing-table .telegram_pricing-table__indent1{text-indent:1em}.telegram_pricing-table .telegram_pricing-table__indent2{text-indent:2em}.telegram_pricing-table thead tr:first-child td{padding-top:25px}.telegram_pricing-table thead tr:first-child .billing-switcher.mb-6{display:flex;gap:8px}.telegram_pricing-table .el-icon-check{color:#078605;font-size:16px}.telegram_pricing-table .el-icon-close{color:#707880;font-size:16px}.telegram_pricing-table__top-hint-cell{vertical-align:top;color:#4c555e;padding-right:30px}.telegram_pricing-table__top-hint-cell select{width:100%}.telegram_pricing-table__plan-column{width:200px}.telegram_pricing-table__plan-name{display:inline-block;font-weight:500;margin-bottom:10px}.telegram_pricing-table__price{font-weight:600;font-size:32px;line-height:1.2}.telegram_pricing-table__discount{font-size:13px;font-weight:600;color:#0578d6}.telegram_pricing-table__discount .fa-tag{margin-right:2px}.telegram_pricing-table__buttons-row a{margin-bottom:10px;display:block}.telegram_pricing-table__billing-cycle-hint{font-size:13px;line-height:20px;color:#707880;opacity:1;transition:.1s ease-in}.telegram_pricing-table__billing-cycle-hint[aria-hidden=true]{display:none}.telegram_pricing-table__plan-column{border-left:1px solid #dfe3e8}.telegram_pricing-table__row-section-end td{padding-bottom:20px}.telegram_pricing-table__row-section-start td{padding-top:20px;padding-bottom:20px;border-top:1px solid #dfe3e8}.telegram_pricing-table__row-section-start td strong{font-size:16px}.telegram_pricing-table__row-secondary td{font-size:13px;color:#4c555e;padding-top:0}.billing-switcher__label em{font-style:normal;background-color:#e6f4ff;color:#0578d6;padding:0 .125em;border-radius:.2rem}.el-button{width:100%}.el-button--danger{width:100%;color:#fff;font-size:13px;background-color:#008aff;border-color:#008aff;box-shadow:0 1px 0 rgba(212,69,25,.5);padding:12px 16px;transition:background-color .25s ease,color .25s ease-in,border-color .25s ease-in}.el-button--danger:focus,.el-button--danger:hover{font-size:13px;background:#008aff;border-color:#008aff;color:#fff}.billing-switcher__label{color:#1d262e;font-size:15px;line-height:1.7142857143;font-weight:500;opacity:.8;cursor:pointer;transition:opacity .1s ease-in-out}.el-switch.is-checked+.billing-switcher__label{opacity:1}",
      "",
    ]),
      (e.exports = t);
  },
  a555: function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return n;
    });
    var l = a("3929"),
      i = a.n(l);
    function n(e, t) {
      const a = new i.a({
        host: "us-west-1.log.aliyuncs.com",
        project: "extension-us",
        time: 0.05,
        count: 1,
        logstore: "scrm-tg-search",
      });
      chrome.storage.local.get(null, function (l) {
        let i = void 0 !== l.browserInfo ? l.browserInfo : "",
          n = i ? i.userAgent : "",
          r = i ? i.browser : "",
          s = i ? i.platform : "",
          c = i ? i.language : "",
          o = void 0 !== l.installTime ? l.installTime : "",
          _ = void 0 !== l.uuid ? l.uuid : "",
          p = chrome.runtime.getManifest().version,
          g = void 0 !== l.plan_code ? l.plan_code : "",
          d = {
            event_source: 1,
            event_type: e,
            event_time: Math.round(new Date() / 1e3),
            install_time: o,
            platform: s,
            user_agent: n,
            browser_type: r,
            uuid: _,
            version: p,
            language: c,
            plan_code: g,
          };
        if (t) for (let e in t) d[e] = t[e];
        a.send(d);
      });
    }
  },
  f9e8: function (e, t, a) {
    "use strict";
    a.r(t);
    var l = a("2b0e"),
      i = a("5c96"),
      n = a.n(i),
      r =
        (a("0fae"),
        function () {
          var e = this,
            t = e._self._c;
          return t("div", { staticClass: "body_container" }, [
            e._m(0),
            t("section", { staticClass: "telegram_price_body" }, [
              t("div", { staticClass: "telegram_price_box" }, [
                t(
                  "table",
                  {
                    staticClass: "telegram_pricing-table",
                    attrs: { "data-controller": "pricing-table" },
                  },
                  [
                    t("thead", [
                      e._m(1),
                      e._m(2),
                      t(
                        "tr",
                        {
                          staticClass:
                            "telegram_pricing-table__buttons-row pricing-table__row-section-end",
                        },
                        [
                          t(
                            "td",
                            {
                              staticClass:
                                "telegram_pricing-table__plan-column",
                            },
                            [
                              "Lifetime" === e.user_type
                                ? t("el-button", [e._v("Current")])
                                : t(
                                    "el-button",
                                    {
                                      attrs: { type: "danger" },
                                      on: {
                                        click: function (t) {
                                          return e.openPay("Lifetime");
                                        },
                                      },
                                    },
                                    [e._v("Select")]
                                  ),
                            ],
                            1
                          ),
                          t(
                            "td",
                            {
                              staticClass:
                                "telegram_pricing-table__plan-column hidden-xs hidden-sm",
                            },
                            [
                              "Quarterly" === e.user_type
                                ? t("el-button", [e._v("Current")])
                                : t(
                                    "el-button",
                                    {
                                      attrs: { type: "danger" },
                                      on: {
                                        click: function (t) {
                                          return e.openPay("Quarterly");
                                        },
                                      },
                                    },
                                    [e._v("Select")]
                                  ),
                            ],
                            1
                          ),
                          t(
                            "td",
                            {
                              staticClass:
                                "telegram_pricing-table__plan-column hidden-xs hidden-sm",
                            },
                            [
                              "Monthly" === e.user_type
                                ? t("el-button", [e._v("Current")])
                                : t(
                                    "el-button",
                                    {
                                      attrs: { type: "danger" },
                                      on: {
                                        click: function (t) {
                                          return e.openPay("Monthly");
                                        },
                                      },
                                    },
                                    [e._v("Select")]
                                  ),
                            ],
                            1
                          ),
                          t(
                            "td",
                            {
                              staticClass:
                                "telegram_pricing-table__plan-column hidden-xs hidden-sm",
                            },
                            [
                              "Free" === e.user_type
                                ? t("el-button", [e._v("Current")])
                                : e._e(),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                    t("tbody", [
                      t("tr", { staticClass: "telegram_pricing-table__row" }, [
                        e._m(3),
                        e._m(4),
                        e._m(5),
                        t(
                          "td",
                          {
                            staticClass: "telegram_pricing-table__plan-column",
                          },
                          [
                            t("strong", [
                              e._v(
                                "The limit is " +
                                  e._s(e.userFreeCount) +
                                  " downloads per day："
                              ),
                            ]),
                          ]
                        ),
                      ]),
                      e._m(6),
                      e._m(7),
                      e._m(8),
                      e._m(9),
                      e._m(10),
                      e._m(11),
                      e._m(12),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]);
        }),
      s = a("a555"),
      c = a("37b6"),
      o =
        (a("239d"),
        {
          name: "App",
          data: () => ({ switchVal: !0, user_type: "Free", userFreeCount: 5 }),
          created() {
            let e = this;
            chrome.storage.local.get(["installinfo"]).then((t) => {
              const { installinfo: a } = t;
              (e.user_type = (null == a ? void 0 : a.user_type) || "Free"),
                (e.userFreeCount = (null == a ? void 0 : a.userFreeCount) || 5);
            });
          },
          methods: {
            openPay(e) {
              let t = "",
                a = {};
              switch (e) {
                case "Monthly":
                  (t =
                    "development" === c.c
                      ? "prod_de902045e6de4113"
                      : "prod_8573672d72f949d1"),
                    (a = {
                      eventType: 191020,
                      otherParams: { msg: "clickUpgradeType-monthly" },
                    });
                  break;
                case "Quarterly":
                  (t =
                    "development" === c.c
                      ? "prod_3537772f0d8b429b"
                      : "prod_192e4a70d2604574"),
                    (a = {
                      eventType: 191021,
                      otherParams: { msg: "clickUpgradeType-quarterly" },
                    });
                  break;
                case "Lifetime":
                  (t =
                    "development" === c.c
                      ? "prod_346713f16dfa4437"
                      : "prod_e12f6b9139fe42e2"),
                    (a = {
                      eventType: 191022,
                      otherParams: { msg: "clickUpgradeType-Lifetime" },
                    });
              }
              (this.user_type = e), Object(s.a)(a.eventType, a.otherParams);
              let l = "usd";
              (l = navigator.language.includes("zh") ? "cny" : "usd"),
                chrome.runtime.sendMessage(
                  { options: "openPaymentPage", planId: t, currency: l },
                  function (e) {}
                );
            },
          },
        }),
      _ = o,
      p = a("2877"),
      g = Object(p.a)(
        _,
        r,
        [
          function () {
            var e = this,
              t = e._self._c;
            return t("section", { staticClass: "telegram_price_head" }, [
              t("div", { staticClass: "telegram_price_box" }, [
                t("h1", { staticClass: "telegram_price_title_desc__title" }, [
                  e._v("Plans & pricing"),
                ]),
                t("p", { staticClass: "telegram_price_title_desc__subtitle" }, [
                  t("strong", [
                    e._v("Select the right plan for your business."),
                  ]),
                ]),
              ]),
            ]);
          },
          function () {
            var e = this,
              t = e._self._c;
            return t("tr", [
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                t(
                  "strong",
                  { staticClass: "telegram_pricing-table__plan-name" },
                  [e._v("Lifetime")]
                ),
                t("div", { staticClass: "telegram_pricing-table__price" }, [
                  e._v(" $99.99 "),
                ]),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                t(
                  "strong",
                  { staticClass: "telegram_pricing-table__plan-name" },
                  [e._v("Quarterly")]
                ),
                t("div", { staticClass: "telegram_pricing-table__price" }, [
                  e._v(" $25.99 "),
                ]),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                t(
                  "strong",
                  { staticClass: "telegram_pricing-table__plan-name" },
                  [e._v("Monthly")]
                ),
                t("div", { staticClass: "telegram_pricing-table__price" }, [
                  e._v(" $11.99 "),
                ]),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                t(
                  "strong",
                  { staticClass: "telegram_pricing-table__plan-name" },
                  [e._v("Free")]
                ),
                t("div", { staticClass: "telegram_pricing-table__price" }, [
                  e._v(" $0 "),
                ]),
              ]),
            ]);
          },
          function () {
            var e = this,
              t = e._self._c;
            return t("tr", [
              t(
                "td",
                { staticClass: "telegram_pricing-table__plan-column pt-0" },
                [
                  t(
                    "div",
                    {
                      staticClass: "telegram_pricing-table__billing-cycle-hint",
                    },
                    [e._v(" $99.99/Lifetime ")]
                  ),
                ]
              ),
              t(
                "td",
                { staticClass: "telegram_pricing-table__plan-column pt-0" },
                [
                  t(
                    "div",
                    {
                      staticClass: "telegram_pricing-table__billing-cycle-hint",
                    },
                    [e._v(" $25.99/quarterly ")]
                  ),
                ]
              ),
              t(
                "td",
                {
                  staticClass:
                    "telegram_pricing-table__plan-column pt-0 hidden-xs hidden-sm",
                },
                [
                  t(
                    "div",
                    {
                      staticClass: "telegram_pricing-table__billing-cycle-hint",
                    },
                    [e._v(" $11.99/monthly ")]
                  ),
                ]
              ),
              t(
                "td",
                {
                  staticClass:
                    "telegram_pricing-table__plan-column pt-0 hidden-xs hidden-sm",
                },
                [
                  t(
                    "div",
                    {
                      staticClass: "telegram_pricing-table__billing-cycle-hint",
                    },
                    [e._v(" Free ")]
                  ),
                ]
              ),
            ]);
          },
          function () {
            var e = this._self._c;
            return e(
              "td",
              { staticClass: "telegram_pricing-table__plan-column" },
              [e("strong", [this._v("Unlimited Downloading, plus:")])]
            );
          },
          function () {
            var e = this._self._c;
            return e(
              "td",
              { staticClass: "telegram_pricing-table__plan-column" },
              [e("strong", [this._v("Unlimited Downloading, plus:")])]
            );
          },
          function () {
            var e = this._self._c;
            return e(
              "td",
              { staticClass: "telegram_pricing-table__plan-column" },
              [e("strong", [this._v("Unlimited Downloading, plus:")])]
            );
          },
          function () {
            var e = this,
              t = e._self._c;
            return t("tr", { staticClass: "telegram_pricing-table__row" }, [
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Download videos from all chat or channel"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Download videos from all chat or channel"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Download videos from all chat or channel"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Only download videos from public groups and channels"),
              ]),
            ]);
          },
          function () {
            var e = this,
              t = e._self._c;
            return t("tr", { staticClass: "telegram_pricing-table__row" }, [
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Include from private chat or channel"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Include from private chat or channel"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Include from private chat or channel"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }),
            ]);
          },
          function () {
            var e = this,
              t = e._self._c;
            return t("tr", { staticClass: "telegram_pricing-table__row" }, [
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Automatically obtain downloadable videos"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Automatically obtain downloadable videos"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Automatically obtain downloadable videos"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }),
            ]);
          },
          function () {
            var e = this,
              t = e._self._c;
            return t("tr", { staticClass: "telegram_pricing-table__row" }, [
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Save videos for later"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Save videos for later"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Save videos for later"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }),
            ]);
          },
          function () {
            var e = this,
              t = e._self._c;
            return t("tr", { staticClass: "telegram_pricing-table__row" }, [
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Batch Download videos"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Batch Download videos"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Batch Download videos"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }),
            ]);
          },
          function () {
            var e = this,
              t = e._self._c;
            return t("tr", { staticClass: "telegram_pricing-table__row" }, [
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Free feature updates"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Free feature updates"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }, [
                e._v(" - Free feature updates"),
              ]),
              t("td", { staticClass: "telegram_pricing-table__plan-column" }),
            ]);
          },
          function () {
            var e = this._self._c;
            return e("tr", { staticClass: "telegram_pricing-table__row" }, [
              e("td", { staticClass: "telegram_pricing-table__plan-column" }),
              e("td", { staticClass: "telegram_pricing-table__plan-column" }),
              e("td", { staticClass: "telegram_pricing-table__plan-column" }),
              e("td", { staticClass: "telegram_pricing-table__plan-column" }),
            ]);
          },
        ],
        !1,
        null,
        null,
        null
      ),
      d = g.exports;
    l.default.use(n.a), new l.default({ el: "#app", render: (e) => e(d) });
  },
});
