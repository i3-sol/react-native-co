interface RouterConfigOption {
	name: string
}

interface RouterConfigOptions {
	auth: RouterConfigOption
	signin: RouterConfigOption
	signup: RouterConfigOption
	socialSignup: RouterConfigOption
	personalSignup: RouterConfigOption
	storeSignup: RouterConfigOption

	home: RouterConfigOption
	profile: RouterConfigOption
	meetingHome: RouterConfigOption
	meetingDetail: RouterConfigOption

	meetNow: RouterConfigOption
	meetDetail: RouterConfigOption
	
	chat: RouterConfigOption
	setting: RouterConfigOption
	changeChatName: RouterConfigOption
	changeChatPhoto: RouterConfigOption
	changeChatDesc: RouterConfigOption
	changeChatCategory: RouterConfigOption
}