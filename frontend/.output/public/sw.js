if (!self.define) {
	let e,
		s = {};
	const t = (t, n) => (
		(t = new URL(t + '.js', n).href),
		s[t] ||
			new Promise((s) => {
				if ('document' in self) {
					const e = document.createElement('script');
					(e.src = t), (e.onload = s), document.head.appendChild(e);
				} else (e = t), importScripts(t), s();
			}).then(() => {
				let e = s[t];
				if (!e) throw new Error(`Module ${t} didn’t register its module`);
				return e;
			})
	);
	self.define = (n, i) => {
		const o =
			e ||
			('document' in self ? document.currentScript.src : '') ||
			location.href;
		if (s[o]) return;
		let r = {};
		const d = (e) => t(e, o),
			l = { module: { uri: o }, exports: r, require: d };
		s[o] = Promise.all(n.map((e) => l[e] || d(e))).then((e) => (i(...e), r));
	};
}
define(['./workbox-7cfec069'], function (e) {
	'use strict';
	self.addEventListener('message', (e) => {
		e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
	}),
		e.precacheAndRoute(
			[
				{
					url: '_nuxt/builds/latest.json',
					revision: '8440ee948cfbd2ef9d28a4d55d1ddeb2',
				},
				{
					url: '_nuxt/builds/meta/41ae6819-a7fc-4416-b05f-b6079656ae62.json',
					revision: null,
				},
				{
					url: 'manifest.webmanifest',
					revision: 'feb841d018e487c4c4bbf282d6971cdd',
				},
			],
			{}
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('/')));
});
