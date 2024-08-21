const routerConfig: RouterConfigOptions = {
	auth: { name: "/auth" },
	signin: { name: "/signin" },
	signup: { name: "/signup" },

	home: { name: "*" },
	profile: { name: "/profile" },
}

export { routerConfig };