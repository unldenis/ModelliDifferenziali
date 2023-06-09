export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","mathjax.js","robots.txt"]),
	mimeTypes: {".png":"image/png",".js":"application/javascript",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.e78bde44.js","app":"_app/immutable/entry/app.de4942a1.js","imports":["_app/immutable/entry/start.e78bde44.js","_app/immutable/chunks/index.054d6729.js","_app/immutable/chunks/singletons.269dd6ef.js","_app/immutable/entry/app.de4942a1.js","_app/immutable/chunks/index.054d6729.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
