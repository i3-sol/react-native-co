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
	meetDetail: { name: "/meet-detail" },
	
	home: { name: "/dashboard" },

	chat: {name: "/chat"},
	setting: {name: "/setting"},
	changeChatName: {name: "/change-chat-name"},
	changeChatPhoto: {name: "/change-chat-photo"},
	changeChatCategory: {name: "/change-chat-category"},
	changeChatDesc: {name: "/change-chat-desc"}
}

export { routerConfig };