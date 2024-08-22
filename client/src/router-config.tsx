const routerConfig: RouterConfigOptions = {
	auth: { name: "/auth" },
	signin: { name: "/signin" },
	signup: { name: "/signup" },
	personalSignup: { name: "/personal-signup" },
	storeSignup: { name: "/store-signup" },
	socialSignup: { name: "/social-signup" },

	profile: { name: "/profile" },
	meetingHome: { name: "/meeting" },
	meetingDetail: { name: "/meeting-detail" },
	meetNow: { name: "/meetnow" },
	home: { name: "/dashboard" },

	chat: {name: "/chat"}
}

export { routerConfig };