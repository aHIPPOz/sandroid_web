export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.wg3NvtSm.js","app":"_app/immutable/entry/app.CSG3E5nV.js","imports":["_app/immutable/entry/start.wg3NvtSm.js","_app/immutable/chunks/entry.CbOSeDie.js","_app/immutable/chunks/scheduler.Cp8OC_ye.js","_app/immutable/chunks/index.57DhHpqs.js","_app/immutable/entry/app.CSG3E5nV.js","_app/immutable/chunks/preload-helper.CmsKOCeN.js","_app/immutable/chunks/scheduler.Cp8OC_ye.js","_app/immutable/chunks/index.DHd7Qox6.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
				id: "/alpine",
				pattern: /^\/alpine\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
