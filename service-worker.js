if (!self.define) {
    let e, s = {};
    const r = (r, i) => (r = new URL(r + ".js", i).href, s[r] || new Promise((s => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = r, e.onload = s, document.head.appendChild(e)
        } else e = r, importScripts(r), s()
    })).then((() => {
        let e = s[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e
    })));
    self.define = (i, n) => {
        const o = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[o]) return;
        let c = {};
        const t = e => r(e, o), l = {module: {uri: o}, exports: c, require: t};
        s[o] = Promise.all(i.map((e => l[e] || t(e)))).then((e => (n(...e), c)))
    }
}
define(["./workbox-5b385ed2"], (function (e) {
    "use strict";
    e.setCacheNameDetails({prefix: "app-pwa"}), self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{url: "./css/app.9aa2acdc.css", revision: null}, {
        url: "./index.html",
        revision: "cf9a4d57fedac98f803f64cce3026f02"
    }, {url: "./js/about.f248a837.js", revision: null}, {
        url: "./js/app.4120206f.js",
        revision: null
    }, {url: "./js/chunk-vendors.1187cbc6.js", revision: null}, {
        url: "./manifest.json",
        revision: "c12d0729ac313481edb9dcf87758e406"
    }, {url: "./robots.txt", revision: "b6216d61c03e6ce0c9aea6ca7808f7ca"}], {})
}));
//# sourceMappingURL=service-worker.js.map
