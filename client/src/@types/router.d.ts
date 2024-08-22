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

	chat: RouterConfigOption
}