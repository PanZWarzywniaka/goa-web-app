export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f151f9be.js","app":"_app/immutable/entry/app.9a9a070e.js","imports":["_app/immutable/entry/start.f151f9be.js","_app/immutable/chunks/scheduler.17b940cc.js","_app/immutable/chunks/singletons.27faa56f.js","_app/immutable/chunks/index.953680d5.js","_app/immutable/entry/app.9a9a070e.js","_app/immutable/chunks/scheduler.17b940cc.js","_app/immutable/chunks/index.fa92f6d7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/map",
				pattern: /^\/map\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
