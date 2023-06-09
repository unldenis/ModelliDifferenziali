export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","mathjax.js","robots.txt"]),
	mimeTypes: {".png":"image/png",".js":"application/javascript",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.e78bde44.js","app":"_app/immutable/entry/app.de4942a1.js","imports":["_app/immutable/entry/start.e78bde44.js","_app/immutable/chunks/index.054d6729.js","_app/immutable/chunks/singletons.269dd6ef.js","_app/immutable/entry/app.de4942a1.js","_app/immutable/chunks/index.054d6729.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
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
				id: "/es1",
				pattern: /^\/es1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/es2",
				pattern: /^\/es2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/es3",
				pattern: /^\/es3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/es4",
				pattern: /^\/es4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
